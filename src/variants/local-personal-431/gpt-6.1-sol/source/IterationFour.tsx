"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useIsPresent, useReducedMotion } from "framer-motion";
import { Bookmark, ArrowDown, BookOpen, X, RotateCcw } from "lucide-react";
import s from "./IterationFour.module.css";

const passages = [
  "A good question is a small door. You don't know what is behind it until you open it.",
  "We tend to collect answers. But the questions we return to tell us more about what we are trying to understand.",
  "Keep a question close for long enough, and ordinary things begin to offer an answer: a walk, a conversation, a sentence in a book.",
];
type Clip = { id:number; reflection:string };

function PassageQuote({children, reduce}: {children: React.ReactNode; reduce: boolean | null}) {
  const present = useIsPresent();
  return <motion.div className={s.clip} aria-hidden={!present} inert={!present} initial={{opacity:0,x:reduce?0:10}} animate={{opacity:1,x:0}} exit={{opacity:0}} transition={{duration:reduce?0:.18}}>{children}</motion.div>;
}

export function PageFour() {
  const [clips, setClips] = useState<Clip[]>([{id:0, reflection:"What question am I avoiding because I think I should already know the answer?"}]);
  const [active, setActive] = useState(0);
  const [message, setMessage] = useState("");
  const [keyboard, setKeyboard] = useState(true);
  useEffect(() => {
    function keyboardInput(event: KeyboardEvent) {
      if (["Tab", "Enter", " ", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown", "Escape"].includes(event.key)) setKeyboard(true);
    }
    document.addEventListener("keydown", keyboardInput, true);
    return () => document.removeEventListener("keydown", keyboardInput, true);
  }, []);
  const reduce = useReducedMotion();
  const [focusTarget, setFocusTarget] = useState<{id:string; reduce:boolean} | null>(null);
  useEffect(() => {
    if (!focusTarget) return;
    const target = document.getElementById(focusTarget.id);
    target?.focus({ preventScroll: true });
    target?.scrollIntoView({ behavior: focusTarget.reduce ? "auto" : "smooth", block: "center" });
  }, [focusTarget]);
  function requestFocus(id:string) { setFocusTarget({ id, reduce: Boolean(reduce) }); }
  const current = clips.find(c=>c.id === active) ?? clips[0];
  function keep(id:number) { if (!clips.some(c=>c.id===id)) setClips(prev=>[...prev,{id,reflection:""}]); setActive(id); setMessage("Passage kept with its source. Add your own thought beside it."); if (window.matchMedia("(max-width: 800px)").matches) requestFocus("four-notebook-title"); }
  function remove(id:number) { const next=clips.filter(c=>c.id!==id); setClips(next); setActive(next[0]?.id ?? 0); setMessage("Passage removed from this example notebook."); }
  return <div className={s.page} data-keyboard={keyboard} onPointerDownCapture={()=>setKeyboard(false)}>
    <a className={s.skip} href="#four-main">Skip to content</a>
    <header className={s.header}><a className={s.brand} href="#four-main"><span aria-hidden="true">W*</span>WhichAI</a><nav aria-label="Page sections"><a href="#four-read">The reading desk</a><a href="#four-source">What stays with a note</a></nav><a className={s.primary} href="#four-read">Try keeping a passage <ArrowDown size={16} aria-hidden="true"/></a></header>
    <main id="four-main">
      <section className={s.hero}><div className={s.heroTop}><p>A SECOND BRAIN FOR THE CURIOUS</p><span><BookOpen size={16} aria-hidden="true"/>Read with a pencil in hand.</span></div><h1>Read.<br/><span>Keep.</span><br/>Think.</h1><div className={s.heroBottom}><p>What you read is only the beginning. Keep the words that stop you, remember where they came from, and make something of your own.</p><a href="#four-read">See an idea become a note <ArrowDown size={20} aria-hidden="true"/></a></div><div className={s.marginArt} aria-hidden="true"><span>the part<br/>that stays<br/>with you.</span><svg viewBox="0 0 150 150"><path d="M25 25 Q115 0 118 75 Q120 135 38 112 M45 98 L33 113 L55 120"/></svg></div></section>
      <section className={s.desk} id="four-read" aria-labelledby="four-desk-title"><div className={s.deskHead}><div><p className={s.eyebrow}>TRY THE READING DESK</p><h2 id="four-desk-title" tabIndex={-1}>Good words deserve a second life.</h2></div><p>Original example essay.<br/>Your notebook changes last until you leave or reload.</p></div><div className={s.workspace}><article className={s.essay}><p className={s.essayMeta}>FIELD NOTES · A SHORT ESSAY</p><h3>The art of a<br/>better question</h3><p className={s.byline}>Written for this WhichAI demo</p><p className={s.opening}>The fastest answer isn&apos;t always the most useful one. Sometimes it helps to sit with the thing we don&apos;t understand yet.</p><div className={s.passages}>{passages.map((text,id)=><div className={s.passage} key={id}><p>{text}</p><button id={`four-passage-${id}`} onClick={()=>keep(id)} aria-label={`${clips.some(c=>c.id===id)?"Open kept":"Keep"} passage ${id+1}`}><Bookmark size={16} aria-hidden="true"/>{clips.some(c=>c.id===id)?"Kept · open note":"Keep this passage"}</button></div>)}</div><p className={s.essayEnd}>A note can be the start of a conversation with yourself. The page doesn&apos;t have to end where the reading does.</p></article>
      <aside className={s.notebook} aria-labelledby="four-notebook-title"><div className={s.notebookHead}><span className={s.asterisk} aria-hidden="true">*</span><h3 id="four-notebook-title" tabIndex={-1}>Your thinking,<br/>in the margins.</h3><span>{clips.length} {clips.length===1?"passage":"passages"} kept</span></div><div className={s.clipTabs} aria-label="Kept passages">{clips.map(c=><button key={c.id} aria-pressed={current?.id===c.id} onClick={()=>setActive(c.id)}>{`Passage ${c.id+1}`}</button>)}</div><div className={s.noteStage}><AnimatePresence initial={false}>{current ? <PassageQuote key={current.id} reduce={reduce}><blockquote>{passages[current.id]}</blockquote><p className={s.source}>From “The art of a better question”<br/>WhichAI example essay</p></PassageQuote> : <div className={s.empty}><Bookmark size={30} aria-hidden="true"/><p>Your notebook is open.<br/>Keep a passage from the essay to begin.</p></div>}</AnimatePresence></div>{current && <div className={s.editor}><label htmlFor="four-reflection">What does this bring to mind?</label><textarea id="four-reflection" rows={4} maxLength={1600} value={current.reflection} placeholder="Make a connection. Disagree. Ask another question." onChange={e=>{const value=e.target.value;setClips(prev=>prev.map(c=>c.id===current.id?{...c,reflection:value}:c));}}/><div className={s.noteActions}><span>Kept in this page only</span><button onClick={()=>{remove(current.id); requestFocus(`four-passage-${current.id}`);}}><X size={15} aria-hidden="true"/>Remove passage</button></div></div>}<button className={s.returnToEssay} onClick={()=>requestFocus(`four-passage-${current?.id ?? 0}`)}>Back to the essay</button><p className={s.message} role="status">{message}</p></aside></div></section>
      <section id="four-source" className={s.sourceSection}><div><p className={s.eyebrow}>A NOTE WITH ROOTS</p><h2>You keep the thought.<br/>And the way back.</h2><p>Separate an interesting sentence from everything else on the page, without separating it from its context.</p></div><div className={s.chain}><div><span>THE SOURCE</span><strong>The art of a better question</strong><p>An original essay, right here in the demo.</p></div><div><span>THE PASSAGE</span><strong>Words worth returning to</strong><p>The exact words you chose, with the source attached.</p></div><div><span>YOUR REFLECTION</span><strong>The beginning of your own idea</strong><p>Your perspective belongs beside the quote.</p></div></div></section>
      <section className={s.end}><p>Less collecting.<br/><em>More thinking.</em></p><div><span>WhichAI is a place for notes that grow out of what you read, see, and wonder.</span><button onClick={()=>{setClips([{id:0,reflection:"What question am I avoiding because I think I should already know the answer?"}]);setActive(0);setMessage("Example notebook restored.");requestFocus("four-desk-title");}}><RotateCcw size={17} aria-hidden="true"/>Start the example again</button></div></section>
    </main><footer className={s.footer}><strong>WhichAI</strong><span>For what stays with you.</span><a href="#four-main">Back to top</a></footer>
  </div>;
}
