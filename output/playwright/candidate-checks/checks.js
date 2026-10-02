async (page) => {
  const root = 'C:/Users/E/Documents/Codex/2026-10-02/wh/outputs/which-ai/output/playwright/candidate-checks';
  const findings = {hallmark:[],addy:[]};
  for (let i=1;i<=5;i++) for (const width of [320,375,414,768,1280]) {
    await page.setViewportSize({width,height:800});
    await page.goto(`http://127.0.0.1:3000/local/preview/local-hallmark/${i}`);
    await page.waitForLoadState('networkidle');
    await page.locator('h1').waitFor();
    await page.screenshot({path:`${root}/hallmark-${i}-${width}.png`,fullPage:true});
    const measures = await page.evaluate(() => {
      const canvas=document.createElement('canvas');canvas.width=canvas.height=1;const ctx=canvas.getContext('2d');
      const color = s => {ctx.clearRect(0,0,1,1);ctx.fillStyle=s;ctx.fillRect(0,0,1,1);const c=Array.from(ctx.getImageData(0,0,1,1).data);c[3]/=255;return c;};
      const lum = c => c.slice(0,3).map(v => {v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4}).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);
      const texts = [...document.querySelectorAll('main h1,main h2,main p,main a,main label,main button')].filter(e=>e.getBoundingClientRect().height>0).map(e=>{
        const cs=getComputedStyle(e);let b=e,bg;
        while(b){bg=color(getComputedStyle(b).backgroundColor);if(bg&&bg[3]!==0)break;b=b.parentElement;}
        bg=bg&&bg[3]!==0?bg:[255,255,255,1];const fg=color(cs.color);const ratio=fg?(Math.max(lum(fg),lum(bg))+.05)/(Math.min(lum(fg),lum(bg))+.05):null;
        const r=e.getBoundingClientRect();const threshold=parseFloat(cs.fontSize)>=24||(parseFloat(cs.fontSize)>=18.66&&parseInt(cs.fontWeight)>=700)?3:4.5;
        return {text:e.textContent.trim().slice(0,100),tag:e.tagName,ratio:ratio&&+ratio.toFixed(2),threshold,disabled:e.disabled||false,x:r.x,y:r.y,width:r.width,height:r.height,font:cs.fontSize};
      });
      return {overflow:document.documentElement.scrollWidth>innerWidth,h1:texts.filter(x=>x.tag==='H1'),lowContrast:texts.filter(x=>x.ratio<x.threshold),outside:texts.filter(x=>x.x < -1 || x.x+x.width>innerWidth+1)};
    });
    findings.hallmark.push({i,width,...measures});
  }
  for(let i=1;i<=5;i++) for(const width of [375,1280]){
    await page.setViewportSize({width,height:800});
    await page.goto(`http://127.0.0.1:3000/local/preview/local-addy/${i}`);
    await page.waitForLoadState('networkidle');
    await page.locator('h1').waitFor();
    const result={i,width};
    if(width===375){await page.getByRole('button',{name:'Open navigation',exact:true}).click();result.menu=await page.getByRole('button',{name:'Close navigation',exact:true}).getAttribute('aria-expanded');}
    const trigger=page.getByRole('button',{name:'Start writing',exact:true});
    await trigger.click();
    const dialog=page.getByRole('dialog');
    result.dialog=await dialog.isVisible();
    result.initialFocus=await page.evaluate(()=>({tag:document.activeElement.tagName,label:document.activeElement.getAttribute('aria-label')}));
    await dialog.getByLabel('Your note',{exact:true}).fill('Candidate verification thought');
    await dialog.getByRole('button',{name:'Save this thought'}).click();
    result.saved=await dialog.getByRole('status').innerText();
    await page.keyboard.press('Escape');
    result.escapeClosed=!(await dialog.isVisible());
    result.focusReturned=await trigger.evaluate(e=>e===document.activeElement);
    const query=page.getByRole('textbox',{name:'Search example notes',exact:true});
    await query.fill('morning');
    const note=page.getByRole('button',{name:'A slower morning',exact:true});
    result.filteredCount=await page.locator('aside button').count();
    await note.click();
    result.selection=await page.locator('article').filter({has:page.getByRole('heading',{name:'A slower morning',exact:true})}).count();
    await query.fill('zz-no-result');
    result.noResults=await page.getByText('No notes found. Try “morning”.',{exact:true}).isVisible();
    if(i===3){await page.getByLabel('What’s on your mind?',{exact:true}).fill('Daily verification thought');await page.getByRole('button',{name:'Keep this thought'}).click();result.dailySaved=await page.getByText('✓ Thought saved in this demo.',{exact:true}).isVisible();}
    if(i===4){await page.getByLabel('What are you thinking about?',{exact:true}).fill('zz-no-result');result.heroSearchEmpty=await page.getByText('0 results in your example library',{exact:true}).isVisible();}
    if(i===2){await page.getByRole('button',{name:/A conversation A note from Tuesday/}).click();result.graphSelected=await page.getByText('Selected: A conversation',{exact:false}).innerText();}
    if(i===5){await page.getByRole('button',{name:/THINGS I NOTICED.*Keep looking/}).click();result.boardSelected=await page.getByText('Keep looking → Your next idea',{exact:false}).innerText();}
    await page.screenshot({path:`${root}/addy-${i}-${width}-interaction.png`,fullPage:true});
    findings.addy.push(result);
  }
  return findings;
}
