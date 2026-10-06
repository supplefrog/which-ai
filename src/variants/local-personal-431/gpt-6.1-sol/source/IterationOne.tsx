"use client";

import { forwardRef, useLayoutEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion, useIsPresent } from "framer-motion";
import { ArrowDown, ArrowUpRight, BookOpen, Lightbulb, Link2, Network, Plus, RotateCcw } from "lucide-react";
import s from "./IterationOne.module.css";

type Thought = { id: string; title: string; kind: string; body: string; x: number; y: number };
const seeds: Thought[] = [
  { id: "walk", title: "The long way home", kind: "Observation", body: "Taking the quieter street gave me time to notice the trees. A useful reminder: an unhurried route can change what I pay attention to.", x: 22, y: 20 },
  { id: "book", title: "Attention is a practice", kind: "Reading note", body: "A thought from this morning’s reading: attention is something we can practice, not just something we spend. What would a daily practice look like?", x: 77, y: 20 },
  { id: "center", title: "Make room to notice", kind: "Connecting idea", body: "These two notes meet here: leave a little room in the day, and it becomes easier to notice what matters. Try a walk without headphones, then write down one thing that stays with you.", x: 49, y: 49 },
  { id: "try", title: "A ten-minute experiment", kind: "Next step", body: "Tomorrow, take a ten-minute walk before opening the inbox. Capture one observation and connect it to something I’ve been reading.", x: 22, y: 78 },
];
const emptyThought: Thought = { id: "mine", title: "Your next thought", kind: "Add a connection", body: "", x: 77, y: 78 };

export function PageOne() {
  const [thoughts, setThoughts] = useState<Thought[]>([...seeds, emptyThought]);
  const [selected, setSelected] = useState("center");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [pointer, setPointer] = useState(false);
  const pendingFocus = useRef<"input" | "heading" | null>(null);
  const noteRegion = useRef<HTMLDivElement>(null);
  const mapElement = useRef<HTMLDivElement>(null);
  const noteFrame = useRef<HTMLDivElement>(null);
  const [noteHeight, setNoteHeight] = useState<number | null>(null);
  const [geometry, setGeometry] = useState<{width:number;height:number;points:Record<string,{x:number;y:number}>}>({width:100,height:100,points:Object.fromEntries([...seeds,emptyThought].map(t=>[t.id,{x:t.x,y:t.y}]))});
  const reduce = useReducedMotion();
  const current = thoughts.find(t => t.id === selected)!;
  const capture = selected === "mine" && (!current.body || editing);
  const duration = reduce ? 0 : 0.24;
  function focusNote(target: "input" | "heading") { noteRegion.current?.querySelector<HTMLElement>(`[data-note-current="true"] [data-note-${target}]`)?.focus({preventScroll:true}); }
  useLayoutEffect(() => {
    if (pendingFocus.current === "input" && capture) {focusNote("input"); pendingFocus.current = null;}
    else if (pendingFocus.current === "heading" && !capture) {focusNote("heading"); pendingFocus.current = null;}
  }, [capture]);
  useLayoutEffect(() => {
    const active=noteFrame.current?.querySelector<HTMLElement>("[data-note-current=\"true\"]"); if(!active) return;
    const measure=()=>setNoteHeight(active.offsetHeight+20);
    measure(); const observer=new ResizeObserver(measure);observer.observe(active);return()=>observer.disconnect();
  }, [capture,current.id]);
  useLayoutEffect(() => {
    const map = mapElement.current; if (!map) return;
    const measure = () => {
      const bounds=map.querySelector(":scope > svg")?.getBoundingClientRect() ?? map.getBoundingClientRect(); const points:Record<string,{x:number;y:number}>={};
      map.querySelectorAll<HTMLButtonElement>("[data-map-node]").forEach(node=>{const r=node.getBoundingClientRect();points[node.dataset.mapNode!]={x:Math.round((r.left-bounds.left+r.width/2)*10)/10,y:Math.round((r.top-bounds.top+r.height/2)*10)/10};});
      const next={width:bounds.width,height:bounds.height,points};setGeometry(previous=>JSON.stringify(previous)===JSON.stringify(next)?previous:next);
    };
    measure(); const observer=new ResizeObserver(measure);observer.observe(map);map.querySelectorAll("[data-map-node]").forEach(node=>observer.observe(node));return()=>observer.disconnect();
  }, [thoughts]);
  function choose(id: string) { setSelected(id); setEditing(false); setError(""); requestAnimationFrame(() => {if(window.matchMedia("(max-width: 720px)").matches) {noteRegion.current?.scrollIntoView({behavior:reduce ? "instant" : "smooth",block:"start"});if(id === "mine" && !thoughts.find(t => t.id === "mine")?.body) focusNote("input");else focusNote("heading");}}); }
  function save(event: FormEvent) {
    event.preventDefault();
    if (!title.trim() || !body.trim()) { setError("Give your thought a title and a note before connecting it."); return; }
    pendingFocus.current = "heading";
    setThoughts(prev => prev.map(t => t.id === "mine" ? { ...t, title: title.trim(), body: body.trim(), kind: "Your connection" } : t));
    setEditing(false); setError(""); setStatus("Your thought is connected to ‘Make room to notice’. It stays here until this page is reloaded.");
  }
  function reset() { setThoughts([...seeds, emptyThought]); setSelected("center"); setTitle(""); setBody(""); setEditing(false); setStatus("The example map has been restored."); setError(""); }

  return <div className={s.page} data-pointer={pointer} onPointerDownCapture={() => setPointer(true)} onKeyDownCapture={e => {if (["Tab", "Enter"].includes(e.key)) setPointer(false);}}>
    <a className={s.skip} href="#atlas-main">Skip to content</a>
    <header className={s.header}>
      <a className={s.brand} href="#atlas-main" aria-label="WhichAI home"><Network aria-hidden="true" size={25}/>WhichAI<span className={s.brandDot}>●</span></a>
      <nav aria-label="Page navigation"><a href="#atlas">Explore the map</a><a href="#practice">How it works</a></nav>
      <span className={s.headerNote}>A home for your thinking</span>
    </header>
    <main id="atlas-main">
      <section className={s.hero} aria-labelledby="atlas-title">
        <div className={s.heroCopy}><p className={s.eyebrow}>NOTES, WITH CONNECTIONS</p><h1 id="atlas-title">Your mind,<br/>with room<br/>to <em>wander.</em></h1><p className={s.intro}>Keep the things that catch your attention. Find the threads that make them yours.</p><a className={s.primary} href="#atlas">Follow a thought <ArrowDown size={18} aria-hidden="true"/></a></div>
        <div className={s.heroAside}><div className={s.orbit} aria-hidden="true"><div/><div/><div/><span>✳</span></div><p>A reading note.<br/>Something you noticed.<br/>The beginning of an idea.</p><p className={s.asideEnd}>Better together.</p></div>
      </section>
      <section id="atlas" className={s.atlas} aria-labelledby="map-title">
        <div className={s.atlasHeading}><div><p className={s.eyebrow}>AN EXAMPLE YOU CAN EXPLORE</p><h2 id="map-title">One thought leads to another.</h2></div><button className={s.reset} onClick={reset}><RotateCcw size={15} aria-hidden="true"/> Reset map</button></div>
        <div className={s.workspace}>
          <div id="atlas-map" ref={mapElement} className={s.map} aria-label="Connected thought map">
            <svg className={s.lines} viewBox={`0 0 ${geometry.width} ${geometry.height}`} preserveAspectRatio="none" aria-hidden="true">
              {thoughts.filter(t => t.id !== "center").map(t => <line key={t.id} x1={geometry.points.center?.x} y1={geometry.points.center?.y} x2={geometry.points[t.id]?.x} y2={geometry.points[t.id]?.y} className={selected === t.id || selected === "center" ? s.activeLine : undefined}/>)}
            </svg>
            {thoughts.map(t => <motion.button data-map-node={t.id} key={t.id} className={`${s.node} ${t.id === "center" ? s.centerNode : ""} ${selected === t.id ? s.selectedNode : ""} ${t.id === "mine" && !t.body ? s.emptyNode : ""}`} style={{left:`${t.x}%`,top:`${t.y}%`}} aria-pressed={selected === t.id} onClick={() => choose(t.id)} animate={{scale:selected === t.id ? 1.04 : 1}} transition={{duration}}><span className={s.nodeIcon}>{t.id === "mine" && !t.body ? <Plus size={17} aria-hidden="true"/> : t.id === "book" ? <BookOpen size={17} aria-hidden="true"/> : <span aria-hidden="true">✳</span>}</span><span>{t.title}</span>{selected === t.id && <span className={s.nodeSelected}>Selected</span>}</motion.button>)}
            
          </div>
          <div className={s.noteRegion} ref={noteRegion}>
            <motion.div ref={noteFrame} className={s.noteFrame} initial={false} animate={{height:noteHeight ?? "auto"}} transition={{duration,ease:[0.22,0.68,0,1.0]}}>
            <AnimatePresence mode="popLayout" initial={false}>
              <NoteTransition key={capture ? "capture" : current.id} duration={duration} reduce={!!reduce}>
                {capture ? <form onSubmit={save} className={s.capture} noValidate><p className={s.noteKind}>YOUR CONNECTION</p><h3>A thought worth keeping.</h3><label htmlFor="atlas-note-title">Title</label><input data-note-input id="atlas-note-title" value={title} onChange={e => setTitle(e.target.value)} maxLength={48} placeholder="What caught your attention?" aria-invalid={!!error} aria-describedby={error ? "atlas-error" : undefined}/><label htmlFor="atlas-note-body">Your note</label><textarea id="atlas-note-body" value={body} onChange={e => setBody(e.target.value)} maxLength={600} rows={4} placeholder="Write a little. See where it leads." aria-invalid={!!error} aria-describedby={error ? "atlas-error" : undefined}/>{error && <p id="atlas-error" role="alert" className={s.error}>{error}</p>}<button className={s.primary} type="submit"><Link2 size={17} aria-hidden="true"/> Connect thought</button><p className={s.localLimit}>A local demo. Your note is kept only on this page.</p></form> : <><p className={s.noteKind}>{current.kind}</p><h3 data-note-heading tabIndex={-1}>{current.title}</h3><p className={s.noteBody}>{current.body}</p><div className={s.relationship}><Link2 size={17} aria-hidden="true"/><span>{current.id === "center" ? "A meeting point for these notes" : "Connected to Make room to notice"}</span></div>{current.id === "mine" && <button className={s.textButton} onClick={() => {pendingFocus.current="input";setTitle(current.title);setBody(current.body);setEditing(true);}}>Edit your thought</button>}<p className={s.exampleLabel}>{current.id === "mine" ? "Your writing · this session" : "Illustrative notebook · a slower morning"}</p></>}
              </NoteTransition>
            </AnimatePresence>
            </motion.div>
            <a className={s.backMap} href="#atlas-map">Choose another thought</a>
          </div>
        </div>
        <p className={s.status} role="status">{status || "Try the open thought in the bottom-right corner to add your own connection."}</p>
      </section>
      <section id="practice" className={s.practice} aria-labelledby="practice-title">
        <div className={s.practiceIntro}><p className={s.eyebrow}>A SMALL PRACTICE, NOT A PERFECT SYSTEM</p><h2 id="practice-title">Let your notebook<br/>grow with you.</h2></div>
        <div className={s.practiceList}><article><BookOpen size={23} aria-hidden="true"/><div><h3>Keep the source</h3><p>A passage, a meeting, a passing observation. Give a thought enough context to find it again.</p></div></article><article><Link2 size={23} aria-hidden="true"/><div><h3>Make a connection</h3><p>Put related notes in conversation. The link can be as useful as either note on its own.</p></div></article><article><Lightbulb size={23} aria-hidden="true"/><div><h3>Come back with a question</h3><p>Read an old idea in a new light. A second brain is a place to keep thinking, not just to keep things.</p></div></article></div>
      </section>
      <section className={s.closing}><span aria-hidden="true">✳</span><p>You don’t have to know<br/>where a thought will take you.</p><a href="#atlas">Start with the one you have <ArrowUpRight size={18} aria-hidden="true"/></a></section>
    </main>
    <footer className={s.footer}><span>WhichAI</span><p>A second-brain concept. Explore, connect, return.</p><a href="#atlas-main">Back to the top</a></footer>
  </div>;
}

const NoteTransition = forwardRef<HTMLDivElement,{children:ReactNode;duration:number;reduce:boolean}>(function NoteTransition({children,duration,reduce},ref) {
  const present=useIsPresent();
  return <motion.div ref={ref} className={s.note} data-note-current={present} inert={!present} aria-hidden={!present} style={{zIndex:present?1:0}} initial={{opacity:1,y:reduce?0:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:reduce?0:-8}} transition={{duration}}>{children}</motion.div>;
});
