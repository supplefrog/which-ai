"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, ArrowRight, Menu, X, Search, Feather, Command, Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import s from "./designs.module.css";

type Theme = { id: number; name: string; word: string; headline: [string,string]; intro: string; hero: "center" | "split" | "asym"; font: string; seed: string; motion: string[]; };
const themes: Theme[] = [
  {id:1,name:"Commonplace",word:"Your mind, with room.",headline:["A home for everything", "on your mind."],intro:"The half-formed thought. The thing you read. The idea that won’t leave you alone. Give them a place to become something.",hero:"center",font:"Geist",seed:"quiet-forest",motion:["scale","reveal"]},
  {id:2,name:"Elsewhere",word:"Make space for possibility.",headline:["Good ideas need", "somewhere to go."],intro:"A considered space for your notes, connections, and next great idea. Less searching. More seeing what’s possible.",hero:"split",font:"Outfit",seed:"coastal-light",motion:["pin","stack"]},
  {id:3,name:"Fieldwork",word:"Follow your curiosity.",headline:["Collect the world.", "Connect the dots."],intro:"For the curious, the restless, the wonderfully distracted. Turn the things you notice into the things you make.",hero:"asym",font:"Cabinet Grotesk",seed:"mountain-field",motion:["reveal","stack"]},
  {id:4,name:"Afterthought",word:"Nothing good gets lost.",headline:["More than a note.", "The start of something."],intro:"Your ideas don’t arrive in order. Keep them together in a second brain that makes room for the unexpected.",hero:"center",font:"Satoshi",seed:"night-water",motion:["pin","scale"]},
  {id:5,name:"Forma",word:"Thinking, taking shape.",headline:["Put your thoughts", "in good company."],intro:"A quiet workspace for a busy mind. Capture what matters, find the thread, and move from inspiration to intention.",hero:"split",font:"Geist",seed:"architectural-shadow",motion:["scale","stack"]},
];
const photos = (seed:string) => `https://picsum.photos/seed/${seed}/1920/1080`;
const chapter = [
  {title:"Catch the fleeting thought.",copy:"An idea on a walk. A line from a book. Start writing before the moment moves on.",label:"Capture",seed:"notebook-light"},
  {title:"Find the unexpected connection.",copy:"Link a note to a project, a person, or another thought. Your knowledge grows in every direction.",label:"Connect",seed:"botanical-study"},
  {title:"Come back with a clearer mind.",copy:"Search your own words. Follow a thread. Discover the idea you already had, right when you need it.",label:"Rediscover",seed:"slow-landscape"},
];

function Design({theme:t}:{theme:Theme}) {
 const root=useRef<HTMLElement>(null);
 const [mobile,setMobile]=useState(false);
 const [active,setActive]=useState(0);
 const [modal,setModal]=useState(false);
 const [joined,setJoined]=useState(false);
 const [email,setEmail]=useState("");
 useGSAP(()=>{
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  const ctx=gsap.context(()=>{
   if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
   gsap.from("[data-enter]",{y:35,opacity:0,duration:1.1,stagger:.12,ease:"power3.out"});
   if(t.motion.includes("scale")) gsap.utils.toArray<HTMLElement>("[data-scale]").forEach(el=>{
    gsap.fromTo(el,{scale:.8},{scale:1,scrollTrigger:{trigger:el,start:"top 95%",end:"top 30%",scrub:1}});
    gsap.to(el,{opacity:.2,filter:"brightness(.45)",scrollTrigger:{trigger:el,start:"bottom 30%",end:"bottom top",scrub:1}});
   });
   if(t.motion.includes("reveal")) gsap.fromTo("[data-word]",{opacity:.1},{opacity:1,stagger:.08,scrollTrigger:{trigger:"[data-statement]",start:"top 75%",end:"bottom 45%",scrub:1}});
   if(t.motion.includes("pin") && window.innerWidth>800) ScrollTrigger.create({trigger:"[data-chapter]",start:"top 110px",end:"bottom bottom",pin:"[data-pintitle]",pinSpacing:false});
   if(t.motion.includes("stack"))gsap.utils.toArray<HTMLElement>("[data-stack]").forEach((el,i)=>{
    ScrollTrigger.create({trigger:el,start:`top ${120+i*24}px`,endTrigger:"[data-chapter]",end:"bottom 85%",pin:true,pinSpacing:false});
    gsap.from(el,{y:80,opacity:.4,scrollTrigger:{trigger:el,start:"top bottom",end:"top 65%",scrub:1}});
   });
  },root);
  return ()=>ctx.revert();
 },{scope:root,dependencies:[t],revertOnUpdate:true});
 return <main ref={root} className={`${s.page} ${s[`theme${t.id}`]} overflow-x-hidden w-full max-w-full`} style={{fontFamily:`'${t.font}', Arial, sans-serif`}}>
  <nav className={s.nav} aria-label="Main navigation">
   <a className={s.brand} href="#"><span className={s.brandMark}><Feather size={22}/></span>{t.name}<span className={s.brandDot}>®</span></a>
   <div className={`${s.navLinks} ${mobile?s.open:""}`}><a href="#possibilities">The possibilities</a><a href="#thinking">How it feels</a><a href="#begin">Pricing</a></div>
   <button className={s.navCta} onClick={()=>setModal(true)}>Start your space <ArrowUpRight size={15}/></button>
   <button className={s.menu} aria-label={mobile?"Close navigation":"Open navigation"} onClick={()=>setMobile(!mobile)}>{mobile?<X/>:<Menu/>}</button>
  </nav>
  <section className={`${s.hero} ${s[t.hero]}`}>
   {t.hero==="center" && <img className={s.heroBackdrop} src={photos(t.seed)} alt="An expansive landscape, a little room to think"/>}
   <div className={s.heroText}>
    <p data-enter className={s.heroPrelude}>A little room to think.</p>
    <h1 data-enter className="max-w-6xl">{t.headline[0]}<br/><span>{t.headline[1]}</span></h1>
    <p data-enter className={s.intro}>{t.intro}</p>
    <div data-enter className={s.heroActions}><button className={s.primary} onClick={()=>setModal(true)}>Find your space <ArrowUpRight size={20}/></button><a className={s.secondary} href="#possibilities">Take a look around <ArrowRight size={18}/></a></div>
   </div>
   {t.hero!=="center" && <div data-enter className={s.heroPhoto}><img src={photos(t.seed)} alt="A quiet landscape for an open mind"/><span className={s.photoCaption}>{t.word}</span></div>}
   <div className={s.heroBottom}><span>Keep a thought. Follow a thread.</span><a href="#possibilities">Scroll to explore <span>↓</span></a></div>
  </section>
  <div className={s.marquee} aria-label="A space for every kind of thought"><div>{Array.from({length:4},(_,i)=><span key={i}>Loose thoughts <span>↗</span> Open questions <span>↗</span> Bright ideas <span>↗</span> Your next chapter <span>↗</span></span>)}</div></div>
  <section id="possibilities" className={`${s.section} ${s.interest}`}>
   <div className={s.sectionHeading}><h2>Everything you collect.<br/>A little more <span className={s.inlineImage} style={{backgroundImage:`url(${photos("paper-grain")})`}}/> connected.</h2><p>One place to hold your thinking.<br/>Enough freedom to make it your own.</p></div>
   <div className={s.bento}>
    <a href="#thinking" className={`${s.bigCard} ${s.card}`}><div className={s.cardCopy}><span>Connected, naturally</span><h3>Your ideas were<br/>never islands.</h3><p>Make a link. Find a pattern.<br/>See the bigger picture.</p></div><div className={s.graph}><svg viewBox="0 0 500 320" aria-hidden="true"><path d="M90 180L245 80L385 180L245 260L90 180M245 80L245 260M90 180L385 180"/></svg><span className={s.nodeA}>A book worth keeping</span><span className={s.nodeB}>The next big idea</span><span className={s.nodeC}>Things to make</span><span className={s.nodeD}>Sunday thoughts</span></div><span className={s.cardArrow}><ArrowUpRight/></span></a>
    <a href="#thinking" className={`${s.card} ${s.noteCard}`}><Feather size={22}/><h3>Start with a sentence.</h3><div className={s.noteLines}>What if we made<br/>more room for the<br/><em>things that matter?</em><span className={s.cursor}/></div><span className={s.cardArrow}><ArrowUpRight/></span></a>
    <a href="#thinking" className={`${s.card} ${s.imageCard}`}><img src={photos("creative-journey")} alt="A visual reminder of a moment worth keeping"/><div><span>Save what moves you</span><h3>Inspiration,<br/>in good hands.</h3></div><span className={s.cardArrow}><ArrowUpRight/></span></a>
    <a href="#thinking" className={`${s.card} ${s.searchCard}`}><Search size={23}/><h3>There it is.</h3><p>Find the thought you need.<br/>Even when you only remember a little.</p><div className={s.searchPreview}><Search size={14}/> that idea about <span><Command size={12}/> K</span></div></a>
    <a href="#begin" className={`${s.card} ${s.quietCard}`}><span className={s.orbit}><span/><span/><span/></span><h3>A quieter kind<br/>of productive.</h3><p>Just you and your thoughts.<br/>No noise, no rush.</p><span className={s.cardArrow}><ArrowUpRight/></span></a>
   </div>
  </section>
  <section className={`${s.section} ${s.statement}`} data-statement><p>{"The best ideas rarely arrive fully formed. They grow from the things you notice, the notes you keep, and the connections you make.".split(" ").map((w,i)=><span key={i} data-word>{w} </span>)}</p><span>Your second brain. Your own pace.</span></section>
  <section id="thinking" className={`${s.section} ${s.chapter}`} data-chapter>
   <div className={s.chapterTitle} data-pintitle><span className={s.smallTitle}>A natural rhythm</span><h2>A thought.<br/>A thread.<br/>A new direction.</h2><p>From the everyday to the extraordinary.<br/>It all begins with paying attention.</p><a href="#begin">Make room for yours <ArrowUpRight size={18}/></a></div>
   <div className={s.chapterCards}>{chapter.map((c,i)=><article key={c.title} data-stack className={s.chapterCard} style={{zIndex:i+1}}><div className={s.chapterImage}><img data-scale src={photos(c.seed)} alt={`A quiet visual for ${c.label.toLowerCase()}`}/></div><div><span>{c.label}</span><h3>{c.title}</h3><p>{c.copy}</p></div></article>)}</div>
  </section>
  <section className={`${s.section} ${s.accordionSection}`}><div className={s.sectionHeading}><h2>For everything<br/>you&apos;re becoming.</h2><p>There&apos;s no right way to think.<br/>Find a space that feels like yours.</p></div><div className={s.accordion}>{["The everyday thinker","The curious collector","The next big thing"].map((label,i)=><button key={label} className={`${s.slice} ${active===i?s.activeSlice:""}`} onMouseEnter={()=>setActive(i)} onFocus={()=>setActive(i)} onClick={()=>setActive(i)} aria-expanded={active===i}><img src={photos(["everyday-ritual","collected-world","creative-future"][i])} alt=""/><span className={s.sliceName}>{label}</span><div className={s.sliceContent}><h3>{["A home for your everyday.","Keep what catches your eye.","Let a small idea grow."][i]}</h3><p>{["Morning pages, reading notes, and things to remember. Life feels a little lighter when it’s out of your head.","Build a collection of the interesting, the useful, and the unexpected. Inspiration has somewhere to land.","Bring your research, rough drafts, and wild possibilities together. See where the thread takes you."][i]}</p><span className={s.roundArrow}><ArrowUpRight/></span></div></button>)}</div></section>
  <section id="begin" className={s.action}><span>A space that grows with you</span><h2>Make room<br/>for <span className={s.inlineImage} style={{backgroundImage:`url(${photos(t.seed)})`}}/> what&apos;s next.</h2><p>Start free. Keep what matters. See what connects.</p><button className={s.primary} onClick={()=>setModal(true)}>Start your second brain <ArrowUpRight size={22}/></button><p className={s.fineprint}>Free to begin. No credit card needed.</p><div className={s.pricing}><div><span>Your own space</span><strong>Free</strong><p>Personal notes, links, and a place to start.</p></div><div><span>A little more room</span><strong>$8 <small>/ month</small></strong><p>Unlimited collections and room for every project.</p></div></div></section>
  <footer className={s.footer}><a href="#" className={s.brand}><Feather size={23}/>{t.name}</a><span>A little room to think.</span><a href="#possibilities">Explore</a><a href="#begin">Get started</a><span>© 2026 {t.name}</span></footer>
  {modal&&<div className={s.modalBackdrop} onClick={()=>setModal(false)}><div className={s.modal} role="dialog" aria-modal="true" aria-label="Start your space" onClick={e=>e.stopPropagation()}><button className={s.close} aria-label="Close" onClick={()=>setModal(false)}><X/></button><Feather size={32}/><h2>{joined?"You’re on the list.":"Your ideas belong here."}</h2><p>{joined?"Thanks for finding your space. This local concept has saved your interest for this session.":"Leave your email to be first through the door."}</p>{!joined&&<form onSubmit={e=>{e.preventDefault();setJoined(true)}}><label htmlFor={`email${t.id}`}>Email address</label><input id={`email${t.id}`} type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/><button className={s.primary}>Find my space <ArrowUpRight size={18}/></button></form>}{joined&&<Check size={30}/>}</div></div>}
 </main>
}
export function PageOne(){return <Design theme={themes[0]}/>}
export function PageTwo(){return <Design theme={themes[1]}/>}
export function PageThree(){return <Design theme={themes[2]}/>}
export function PageFour(){return <Design theme={themes[3]}/>}
export function PageFive(){return <Design theme={themes[4]}/>}
