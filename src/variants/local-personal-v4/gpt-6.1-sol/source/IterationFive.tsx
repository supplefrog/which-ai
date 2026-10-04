"use client";

import { useCallback, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useIsPresent, useReducedMotion } from "framer-motion";
import { ArrowDown, Check, CornerDownLeft, Plus, Search } from "lucide-react";
import s from "./iteration-five.module.css";

type FiveNote = { id: string; title: string; body: string; topic: string; date: string; source: string };
const fiveSeeds: FiveNote[] = [
  { id: "attention", title: "Attention is a place", body: "A good space doesn't demand your attention. It gives it somewhere to land.\n\nMaybe the same is true of a good tool: less noise, more room to notice what matters.", topic: "Design", date: "Today", source: "A thought on the morning walk" },
  { id: "garden", title: "A garden, not a filing cabinet", body: "Knowledge grows when you return to it. Leave room for ideas to cross paths.\n\nA note from last month can become the missing piece of something you're making today.", topic: "Design", date: "Monday", source: "From the reading pile" },
  { id: "walk", title: "Take the long way home", body: "Walk without headphones once this week. Notice one thing you would otherwise pass.\n\nThe crooked sign. The quiet street. The idea that turns up when you stop looking for it.", topic: "Life", date: "Last week", source: "A small experiment" },
  { id: "make", title: "Make the first version small", body: "Start with something you can finish before you lose the thread.\n\nA rough sketch is a conversation starter. A finished plan is sometimes just a way to postpone the conversation.", topic: "Work", date: "Last month", source: "Notes after a studio session" },
];

function FiveContentTransition({ children, reduce, onMeasure }: { children: ReactNode; reduce: boolean | null; onMeasure: (node: HTMLDivElement) => void }) {
  const present = useIsPresent();
  const content = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const node = content.current;
    if (!present || !node) return;
    onMeasure(node);
    const observer = new ResizeObserver(() => onMeasure(node));
    observer.observe(node);
    return () => observer.disconnect();
  }, [present, onMeasure]);
  return <motion.div ref={content} inert={!present} aria-hidden={!present} data-exiting={!present || undefined} initial={{opacity:0,y:reduce?0:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:reduce?0:-8}} transition={{duration:reduce?0:.22}}>{children}</motion.div>;
}

export function PageFive() {
  const [notes, setNotes] = useState(fiveSeeds);
  const [selectedId, setSelectedId] = useState("attention");
  const [query, setQuery] = useState("");
  const [capture, setCapture] = useState(false);
  const [draft, setDraft] = useState({ title: "", body: "", topic: "Design" });
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [readerHeight, setReaderHeight] = useState<number>();
  const measureReader = useCallback((node: HTMLDivElement) => {
    const frame = node.parentElement;
    if (!frame) return;
    const style = getComputedStyle(frame);
    setReaderHeight(Math.max(node.offsetHeight + parseFloat(style.paddingTop) + parseFloat(style.paddingBottom), parseFloat(style.minHeight) || 0));
  }, []);
  const titleRef = useRef<HTMLInputElement>(null);
  const reduce = useReducedMotion();
  const selected = notes.find(n => n.id === selectedId) ?? notes[0];
  const matches = notes.filter(n => `${n.title} ${n.body} ${n.topic}`.toLowerCase().includes(query.toLowerCase()));
  const related = notes.filter(n => n.id !== selected.id && n.topic === selected.topic);
  function openFiveCapture() {
    setCapture(true);
    window.setTimeout(() => titleRef.current?.focus(), 30);
    document.getElementById("five-try")?.scrollIntoView({ behavior: reduce ? "instant" : "smooth", block: "start" });
  }
  function saveFiveNote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!draft.title.trim() || !draft.body.trim()) { setError("Add a title and a note with at least one word each."); return; }
    setError("");
    const note = { ...draft, title: draft.title.trim(), body: draft.body.trim(), id: `five-${Date.now()}`, date: "Just now", source: "Your thought" };
    setNotes(previous => [note, ...previous]);
    setSelectedId(note.id); setQuery(""); setCapture(false);
    setDraft({ title: "", body: "", topic: draft.topic });
    window.setTimeout(()=>document.getElementById(`five-rail-${note.id}`)?.focus(), 30);
    setStatus(`“${note.title}” added to this demo. Select it again anytime during this visit.`);
  }
  function resetFiveDemo() {
    if (!window.confirm("Reset this demo? Your added notes and unfinished draft will be removed.")) return;
    setNotes(fiveSeeds); setSelectedId("attention"); setQuery(""); setCapture(false);
    setDraft({ title: "", body: "", topic: "Design" }); setStatus("Demo reset to the sample notes.");
  }
  return <div className={s.fivePage} data-five-page>
    <a href="#five-content" className={s.fiveSkip}>Skip to content</a>
    <header className={s.fiveHeader}>
      <a href="#five-content" className={s.fiveBrand} aria-label="Recall home"><span className={s.fiveMark} aria-hidden="true">r</span>recall</a>
      <nav aria-label="Recall navigation"><a href="#five-try">Try it out <ArrowDown size={14}/></a></nav>
      <button onClick={openFiveCapture} className={s.fiveHeaderButton}>Make room for a thought <Plus size={16}/></button>
    </header>
    <main id="five-content">
      <section className={s.fiveHero} aria-labelledby="five-title">
        
        <h1 id="five-title">Good ideas<br/>come <span className={s.fiveBack}>back.<svg viewBox="0 0 320 18" preserveAspectRatio="none" aria-hidden="true"><path d="M2 10 C75 1 230 1 318 12"/></svg></span></h1>
        <div className={s.fiveHeroFoot}><p>Meet Recall. A home for your notes, passing thoughts, and things worth remembering. Your second brain, with room to wander.</p><a className={s.fivePrimary} href="#five-try">Find your train of thought <ArrowDown size={18}/></a></div>
      </section>
      <section className={s.fiveDemo} id="five-try" aria-labelledby="five-demo-title">
        <div className={s.fiveDemoHeading}><div><h2 id="five-demo-title">Follow a thought.</h2></div><p>Select a note. Find a familiar thread.<br/>Or add something of your own.</p></div>
        <div className={s.fiveToolbar}><label className={s.fiveSearch}><Search size={18}/><span className={s.fiveSr}>Search sample and added notes</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Find a word, an idea, a thread…" type="search"/></label><button id="five-add-thought" className={s.fiveCaptureButton} onClick={openFiveCapture}><Plus size={18}/> Add a thought</button></div>
        <div className={s.fiveRail} aria-label="Notes"><div className={s.fiveRailLine} aria-hidden="true"/>{matches.map(note=><button key={note.id} id={`five-rail-${note.id}`} aria-pressed={selectedId === note.id} className={`${s.fiveRailNote} ${selectedId === note.id ? s.fiveRailSelected : ""}`} onClick={()=>{setSelectedId(note.id); setCapture(false);}}><span className={s.fiveRailDate}>{note.date}</span><span className={s.fiveRailDot} aria-hidden="true"/><strong>{note.title}</strong><span className={s.fiveRailTopic}>{note.topic}</span></button>)}{matches.length===0 && <p className={s.fiveEmpty}>No notes match “{query}”. Try another word, or add this idea as a new thought.</p>}</div>
        <div className={s.fiveReadingGrid}>
          <motion.div className={s.fiveReading} initial={false} animate={{height:readerHeight}} transition={{duration:reduce?0:.28}}><AnimatePresence initial={false} mode="sync"><FiveContentTransition key={capture ? "capture" : selected.id} reduce={reduce} onMeasure={measureReader}>
            {capture ? <form onSubmit={saveFiveNote} className={s.fiveForm}><span className={s.fiveEyebrow}>Leave a little breadcrumb</span><h3>What’s on your mind?</h3><label htmlFor="five-note-title">Give it a name</label><input ref={titleRef} id="five-note-title" aria-describedby="five-validation" required maxLength={100} value={draft.title} onChange={e=>setDraft({...draft,title:e.target.value})} placeholder="A thought worth coming back to"/><label htmlFor="five-note-body">Your note</label><textarea id="five-note-body" aria-describedby="five-validation" required value={draft.body} onChange={e=>setDraft({...draft,body:e.target.value})} placeholder="It doesn't have to be polished. Just get it down." rows={4}/><label htmlFor="five-note-topic">Thread</label><select id="five-note-topic" value={draft.topic} onChange={e=>setDraft({...draft,topic:e.target.value})}><option>Design</option><option>Life</option><option>Work</option></select><p id="five-validation" role="alert" className={s.fiveFormHint}>{error}</p><div className={s.fiveFormActions}><button type="submit" className={s.fivePrimary}>Keep this thought <CornerDownLeft size={16}/></button><button type="button" onClick={()=>{setCapture(false); window.setTimeout(()=>(document.getElementById(`five-rail-${selected.id}`) ?? document.getElementById("five-add-thought"))?.focus(), 30);}}>Back to reading</button></div><p className={s.fiveFormHint}>Your unfinished draft stays here when you return to reading.</p></form> : <article><div className={s.fiveReadingMeta}><span>{selected.topic}</span><span>{selected.date}</span></div><h3>{selected.title}</h3><div className={s.fiveBody}>{selected.body.split("\n\n").map((paragraph,index)=><p key={index}>{paragraph}</p>)}</div><div className={s.fiveSource}><span className={s.fiveTinyMark} aria-hidden="true">r</span>{selected.source}</div></article>}
          </FiveContentTransition></AnimatePresence></motion.div>
          <aside className={s.fiveRelated} aria-labelledby="five-related-title"><span className={s.fiveThreadSymbol} aria-hidden="true">↳</span><h3 id="five-related-title">Same thread,<br/>another thought.</h3><p>Notes filed under <strong>{selected.topic}</strong>.</p>{related.length ? related.map(note=><button key={note.id} onClick={()=>{setSelectedId(note.id);setCapture(false);}}><span>{note.title}</span><small>{note.date}</small></button>) : <div className={s.fiveRelatedEmpty}>The start of a new thread. Add another {selected.topic.toLowerCase()} thought to see it here.</div>}</aside>
        </div>
        <div className={s.fiveDemoFooter}><span><Check size={14}/> Sample content + your own notes. Stored for this visit only; refresh clears them.</span><button onClick={resetFiveDemo}>Reset demo</button></div><p className={s.fiveStatus} role="status">{status}</p>
      </section>
    </main><footer className={s.fiveFooter}><span>recall</span><a href="#five-content">Back to the beginning </a></footer>
  </div>;
}
