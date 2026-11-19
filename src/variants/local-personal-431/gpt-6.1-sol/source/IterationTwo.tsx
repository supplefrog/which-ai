"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, CornerDownLeft, FileText, Plus, RotateCcw, X } from "lucide-react";
import s from "./IterationTwo.module.css";

type Kind = "Observation" | "Question" | "Next step";
type Scrap = { id: number; body: string; kind: Kind; included: boolean };
const kinds: Kind[] = ["Observation", "Question", "Next step"];
const original: Scrap[] = [
  {id:1,body:"The best conversations happen when nobody is looking at the clock.",kind:"Observation",included:true},
  {id:2,body:"What would a meeting look like if we started with a question instead of an agenda?",kind:"Question",included:true},
  {id:3,body:"Try a walking conversation with the team on Friday.",kind:"Next step",included:true},
];

export function PageTwo() {
  const [scraps,setScraps] = useState<Scrap[]>(original);
  const [body,setBody] = useState("");
  const [kind,setKind] = useState<Kind>("Observation");
  const [organized,setOrganized] = useState(false);
  const [error,setError] = useState("");
  const [status,setStatus] = useState("");
  const [pointer,setPointer] = useState(false);
  const pileHeading = useRef<HTMLDivElement>(null);
  const outlineHeading = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();
  const duration = reduce ? 0 : .3;
  const included = scraps.filter(n=>n.included);
  function add(event:FormEvent) {
    event.preventDefault();
    if(!body.trim()){setError("Write a thought before adding it to the desk.");return;}
    if(scraps.length>=8){setError("This little desk holds eight scraps. Remove one to make room.");return;}
    setScraps(prev=>[...prev,{id:Date.now(),body:body.trim(),kind,included:true}]);setBody("");setError("");setStatus("Your scrap is on the desk. Included scraps appear in the outline.");
  }
  function toggle(id:number){setScraps(prev=>prev.map(n=>n.id===id?{...n,included:!n.included}:n));setStatus("Outline selection updated.");}
  function remove(id:number){setScraps(prev=>prev.filter(n=>n.id!==id));setError("");setStatus("Scrap removed. Reset the example to bring the original scraps back.");requestAnimationFrame(()=>pileHeading.current?.focus({preventScroll:true}));}
  function reset(){setScraps(original);setOrganized(false);setBody("");setKind("Observation");setError("");setStatus("The original three scraps are back on the desk.");}
  function arrange(){setOrganized(true);requestAnimationFrame(()=>{outlineHeading.current?.scrollIntoView({behavior:reduce?"instant":"smooth",block:"center"});outlineHeading.current?.focus({preventScroll:true});});setStatus(included.length ? "Your outline is ready below, grouped by the labels on your scraps." : "No scraps are selected. Include a scrap to start your outline.");}

  return <div className={s.page} data-pointer={pointer} onPointerDownCapture={()=>setPointer(true)} onKeyDownCapture={e=>{if(["Tab","Enter"].includes(e.key))setPointer(false);}}>
    <a href="#desk-main" className={s.skip}>Skip to content</a>
    <header className={s.header}><a className={s.brand} href="#desk-main"><span className={s.brandMark} aria-hidden="true">w.</span>WhichAI</a><nav aria-label="Page navigation"><a href="#desk">Try the desk</a><a href="#method">The idea</a></nav><span className={s.headerLabel}>FOR THE UNFINISHED THOUGHT</span></header>
    <main id="desk-main">
      <section className={s.hero} aria-labelledby="desk-title"><div className={s.heroType}><p className={s.kicker}>YOUR SECOND BRAIN, FIRST DRAFT</p><h1 id="desk-title">Good ideas<br/>start as<br/><span>scraps.</span></h1><p className={s.heroIntro}>A sentence in the margins. A question after a meeting. Give the loose ends somewhere to go.</p><a href="#desk" className={s.heroAction}>Put something down <ArrowDown size={20} aria-hidden="true"/></a></div><div className={s.heroObject} aria-hidden="true"><div className={s.scrapArtwork}><div className={s.bigScrap}><span>DON’T LOSE THIS</span><p>What if the<br/>half-formed idea<br/>is the good one?</p><span className={s.scrapFold}/></div><div className={s.scribble}><svg viewBox="0 0 220 95"><path d="M12 30 C80 -5 202 8 201 41 C200 79 18 81 21 39 C25 6 191 6 211 45 M120 72 Q150 102 205 84"/></svg></div></div><span className={s.objectFoot}>NO PERFECT SENTENCES REQUIRED.</span></div></section>
      <section id="desk" className={s.desk} aria-labelledby="desk-demo-title"><div className={s.deskTop}><div><p className={s.kicker}>A WORKING LITTLE EXAMPLE</p><h2 id="desk-demo-title">Clear your head.<br/>Keep the good bits.</h2></div><p>Capture a thought. Choose what belongs.<br/>Then turn the pile into an outline.</p></div>
        <div className={s.deskWorkspace}><form className={s.capture} onSubmit={add} noValidate><label className={s.captureLabel} htmlFor="desk-scrap">What’s on your mind?</label><textarea id="desk-scrap" placeholder="A thought, a question, a small next step…" rows={5} maxLength={240} value={body} onChange={e=>setBody(e.target.value)} aria-invalid={!!error} aria-describedby={error?"desk-error":"desk-local"}/><fieldset><legend>Give it a label</legend><div className={s.kindChoices}>{kinds.map(k=><label key={k} className={kind===k?s.chosenKind:undefined}><input type="radio" name="scrap-kind" value={k} checked={kind===k} onChange={()=>setKind(k)}/><span>{k}</span></label>)}</div></fieldset>{error&&<p id="desk-error" role="alert" className={s.error}>{error}</p>}<button className={s.addButton} type="submit"><Plus size={18} aria-hidden="true"/> Add to the desk</button><p id="desk-local" className={s.local}>This demo lives in this tab.<br/>Reloading clears your changes.</p></form>
          <div className={s.scrapArea}><div className={s.pileHeading} ref={pileHeading} tabIndex={-1} aria-label="Scraps on your desk"><span>ON YOUR DESK <b>{scraps.length}</b></span><button onClick={reset} className={s.reset}><RotateCcw size={14} aria-hidden="true"/> Reset example</button></div><div className={s.scraps}>{scraps.length===0?<p className={s.emptyDesk}>A clear desk. Add a thought when you’re ready.</p>:scraps.map((n,i)=><motion.article layout={!reduce} key={n.id} className={`${s.scrap} ${n.included?s.included:s.excluded}`} initial={{opacity:0,y:reduce?0:20}} animate={{opacity:1,y:0,rotate:organized?0:[-2,1,2,-1][i%4]}} transition={{duration}}><div className={s.scrapMeta}><span>{n.kind}</span><button type="button" onClick={()=>remove(n.id)} aria-label={`Remove scrap: ${n.body}`} className={s.remove}><X size={15} aria-hidden="true"/></button></div><p>{n.body}</p><label className={s.include}><input type="checkbox" checked={n.included} onChange={()=>toggle(n.id)}/><span>{n.included?"In the outline":"Leave aside"}</span></label></motion.article>)}</div><div className={s.deskBottom}><p>{included.length} {included.length===1?"scrap":"scraps"} selected</p><button className={s.organize} onClick={arrange}>{organized?"View your outline":"Make an outline"}<CornerDownLeft size={19} aria-hidden="true"/></button></div></div>
        </div>
        <div className={s.status} role="status">{status||"The starter notes are examples. Add your own, or use the checkboxes to leave a scrap aside."}</div>
        <motion.div className={s.outline} animate={{backgroundColor:organized?"#ffffff":"#e5e5df"}} transition={{duration}} aria-labelledby="outline-title"><div className={s.outlineTitle}><FileText size={24} aria-hidden="true"/><h3 id="outline-title" ref={outlineHeading} tabIndex={-1}>{organized?"A little order. Still your words.":"The next shape of your thinking."}</h3><span>{organized?"LIVE OUTLINE":"WAITING FOR YOUR PILE"}</span></div>{organized?<div className={s.outlineGroups}>{included.length===0?<p className={s.outlineEmpty}>Include a scrap on the desk to begin. Your outline updates as you change the pile.</p>:kinds.map(k=>{const group=included.filter(n=>n.kind===k);return group.length?<section key={k}><h4>{k=== "Observation"?"What I noticed":k==="Question"?"What I’m wondering":"What I’ll try"}</h4><ul>{group.map(n=><motion.li key={n.id} layout={!reduce} initial={{opacity:0,x:reduce?0:-8}} animate={{opacity:1,x:0}} transition={{duration}}>{n.body}</motion.li>)}</ul></section>:null;})}</div>:<div className={s.outlineWaiting}><span aria-hidden="true">···</span><p>Your notes don’t need to be polished to be useful.<br/>Select a few above, then make an outline.</p></div>}<p className={s.outlineDisclosure}>Grouped by the labels you choose. No AI request or account needed for this example.</p></motion.div>
      </section>
      <section id="method" className={s.method} aria-labelledby="method-title"><h2 id="method-title">Save first.<br/>Make sense later.</h2><div className={s.methodText}><p>WhichAI is a place for the thoughts that arrive before you know what to do with them.</p><p>Capture them without ceremony. Keep the question beside the observation. When you’re ready, choose what belongs together and give it a shape.</p><div className={s.methodFinish}><span aria-hidden="true">✳</span><p>Your second brain should leave<br/>more room in your first one.</p></div></div></section>
    </main>
    <footer className={s.footer}><a className={s.brand} href="#desk-main"><span className={s.brandMark} aria-hidden="true">w.</span>WhichAI</a><span>A notebook for works in progress.</span><a href="#desk">Back to your desk <ArrowUpRight size={16} aria-hidden="true"/></a></footer>
  </div>;
}
