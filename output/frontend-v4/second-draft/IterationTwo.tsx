"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, RotateCcw, Search } from "lucide-react";
import s from "./iteration-two.module.css";

type TwoEntry = { id: number; date: string; month: string; title: string; source: string; text: string; thread: string };
const twoExamples: TwoEntry[] = [
  { id: 1, date: "24", month: "JUN", title: "Make room for the unexpected", source: "After a very long walk", text: "I set out with no destination and came back with three ideas. Maybe the trick isn’t finding more time to think. Maybe it’s leaving a little time unfilled.", thread: "Attention" },
  { id: 2, date: "19", month: "JUN", title: "A sentence I keep coming back to", source: "In the margins of a book", text: "Pay attention to what you pay attention to. A list of the things that caught my eye this week would probably tell me more than my to-do list.", thread: "Attention" },
  { id: 3, date: "12", month: "JUN", title: "A project with no deadline", source: "A late-night idea", text: "Photograph the same corner of the city every Sunday. A small archive of ordinary change. No audience, no deliverable. Just something to notice.", thread: "Making" },
];

export function PageTwo() {
  const [entries, setEntries] = useState(twoExamples);
  const [open, setOpen] = useState<number | null>(1);
  const [query, setQuery] = useState("");
  const [thread, setThread] = useState("Everything");
  const [draft, setDraft] = useState("");
  const [newThread, setNewThread] = useState("Attention");
  const [status, setStatus] = useState("");
  const draftRef = useRef<HTMLTextAreaElement>(null);
  const reduce = useReducedMotion();
  const visible = entries.filter(entry => (thread === "Everything" || thread === entry.thread) && `${entry.title} ${entry.text} ${entry.source}`.toLowerCase().includes(query.toLowerCase().trim()));
  const save = (event: React.FormEvent) => {
    event.preventDefault();
    if (!draft.trim()) {setStatus("Give your future self a few words first.");draftRef.current?.focus();return;}
    const text = draft.trim(); const id = Date.now();
    setEntries(existing => [{id,date:"NOW",month:"TODAY",title:text.split(/[.!?\n]/)[0].slice(0,80) || "A thought for later",source:"From you, just now",text,thread:newThread},...existing]);
    setOpen(id);setDraft("");setThread("Everything");setQuery("");setStatus("Kept in this preview. Your new entry is at the top of the notebook.");
  };
  return <div className={s.page}>
    <a href="#two-main" className={s.skip}>Skip to content</a>
    <header className={s.header}>
      <a href="#two-main" className={s.brand}><span className={s.foldMark} aria-hidden="true"><i /><i /><i /></span>fold</a>
      <nav aria-label="Fold navigation"><a href="#two-memory">Open the notebook</a><a href="#two-jot" className={s.navAction}>Leave yourself a note <ArrowUpRight size={15} aria-hidden="true" /></a></nav>
    </header>
    <main id="two-main">
      <section className={s.hero}>
        <div className={s.heroTop}><span>Notes for a life in progress.</span><span>A second brain, with a first-person point of view.</span></div>
        <h1>Keep a thought.<br /><span>Find a thread.</span></h1>
        <div className={s.heroBottom}><p>A line from a book. The idea on your walk home. That thing you nearly forgot.<br /><strong>Give it a place to come back to.</strong></p><a href="#two-memory">See what unfolds <span><ArrowDown size={22} aria-hidden="true" /></span></a></div>
        <div className={s.foldStrip} aria-label="An example thought connected across time"><span className={s.stripDate}>JUN 19<br /><b>A sentence</b></span><span className={s.stripThought}>“Pay attention to what<br />you pay attention to.”</span><span className={s.stripLink}>A few days later,<br />a different kind of list.</span><span className={s.stripDate}>JUN 24<br /><b>An idea</b></span></div>
      </section>
      <section id="two-memory" className={s.memory} aria-labelledby="two-memory-title">
        <aside className={s.memoryIntro}><span className={s.smallLabel}>Inside the notebook</span><h2 id="two-memory-title">Yesterday’s<br />thought.<br /><em>Tomorrow’s<br />starting point.</em></h2><p>Open an entry. Follow its thread. Your old ideas might have something new to say.</p><span className={s.exampleLabel}>Illustrative notes · June notebook</span></aside>
        <div className={s.memoryBody}>
          <div className={s.tools}><div className={s.searchWrap}><label htmlFor="two-search">Find a thought</label><div><Search size={16} aria-hidden="true" /><input id="two-search" value={query} onChange={e => setQuery(e.target.value)} type="search" placeholder="A word you remember…" /></div></div><div className={s.filters} aria-label="Filter by thread">{["Everything","Attention","Making","Personal"].map(topic => <button key={topic} onClick={() => setThread(topic)} aria-pressed={thread === topic} className={thread === topic ? s.chosen : ""}>{topic}</button>)}</div></div>
          <div className={s.entries}>
            {visible.map(entry => {
              const expanded = open === entry.id;
              const linked = entries.filter(other => other.id !== entry.id && other.thread === entry.thread);
              return <article className={`${s.entry} ${expanded ? s.expanded : ""}`} key={entry.id}>
                <button className={s.entryTrigger} onClick={() => setOpen(expanded ? null : entry.id)} aria-expanded={expanded} aria-controls={`two-entry-${entry.id}`}><span className={s.date}><b>{entry.date}</b>{entry.month}</span><span className={s.entryTitle}><span>{entry.source}</span><h3>{entry.title}</h3></span><span className={`${s.plus} ${expanded ? s.minus : ""}`} aria-hidden="true"><i /><i /></span></button>
                <motion.div id={`two-entry-${entry.id}`} aria-hidden={!expanded} inert={expanded ? undefined : true} initial={false} animate={{height:expanded ? "auto" : 0,opacity:expanded ? 1 : 0}} transition={{duration:reduce ? 0 : .28,ease:[.22,1,.36,1]}} className={s.entryReveal}><div className={s.entryContent}><p>{entry.text}</p><div className={s.threadLine}><span>Thread: {entry.thread}</span>{linked.length > 0 && <span>{linked.length} related {linked.length === 1 ? "entry" : "entries"}</span>}</div>{linked.length > 0 ? <div className={s.connected}>{linked.map(other => <button key={other.id} onClick={() => {setOpen(other.id);setQuery("");setThread("Everything");}}><span>Revisit</span>{other.title}<ArrowUpRight size={15} aria-hidden="true" /></button>)}</div> : <span className={s.noThread}>The first entry in this thread. A beginning, not a dead end.</span>}</div></motion.div>
              </article>;
            })}
            {!visible.length && <div className={s.empty}><h3>No thoughts found here.</h3><p>Try a different word, or open up the whole notebook.</p><button onClick={() => {setQuery("");setThread("Everything");}}>Show all entries</button></div>}
          </div>
          <div className={s.demoInfo}><p role="status">{query || thread !== "Everything" ? `${visible.length} ${visible.length === 1 ? "entry" : "entries"} shown. ` : ""}Interactive preview. Entries are local and reset when you reload or leave.</p><button onClick={() => {setEntries(twoExamples);setOpen(1);setQuery("");setThread("Everything");setStatus("Example entries restored. Your unfinished note is still here.");}}><RotateCcw size={12} aria-hidden="true" /> Restore examples</button></div>
        </div>
      </section>
      <section id="two-jot" className={s.jot} aria-labelledby="two-jot-title">
        <div className={s.jotHeading}><span className={s.smallLabel}>A small beginning</span><h2 id="two-jot-title">Leave a note for<br />your future self.</h2><p>You don’t have to know where it leads.</p></div>
        <form onSubmit={save}><label htmlFor="two-draft">What do you want to remember?</label><textarea id="two-draft" ref={draftRef} rows={3} maxLength={600} value={draft} onChange={e => setDraft(e.target.value)} placeholder="Start wherever you are." /><div className={s.jotActions}><label htmlFor="two-new-thread">Add to thread<select id="two-new-thread" value={newThread} onChange={e => setNewThread(e.target.value)}><option>Attention</option><option>Making</option><option>Personal</option></select></label><button type="submit">Keep it <ArrowUpRight size={20} aria-hidden="true" /></button></div><p className={s.saveStatus} role="status">{status || "No account needed to try this preview."}</p></form>
      </section>
    </main>
    <footer className={s.footer}><a href="#two-main">fold</a><span>Keep something of yourself.</span><a href="#two-main">Back to the beginning <ArrowUpRight size={14} aria-hidden="true" /></a></footer>
  </div>;
}
