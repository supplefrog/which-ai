"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, Plus, X } from "lucide-react";
import s from "./iteration-three.module.css";

type ThreeNote = { id: number; title: string; text: string; category: string; mark: string };
const threeExamples: ThreeNote[] = [
  { id: 1, title: "A weekend without a plan", text: "Take the train somewhere new. Walk until a street looks interesting. Find a tiny café and leave the phone in the bag.", category: "Life", mark: "✳" },
  { id: 2, title: "Good ideas need bad drafts", text: "A rough first version gives you something to react to. Make the smallest thing that helps you see the idea, then make it better.", category: "Work", mark: "↗" },
  { id: 3, title: "A question worth keeping", text: "What would this look like if it were easy? Try removing one step before adding another tool.", category: "Ideas", mark: "?" },
];

export function PageThree() {
  const [notes, setNotes] = useState(threeExamples);
  const [draft, setDraft] = useState("");
  const [category, setCategory] = useState("Ideas");
  const [filter, setFilter] = useState("Everything");
  const [selected, setSelected] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const capture = useRef<HTMLTextAreaElement>(null);
  const reduce = useReducedMotion();
  const active = notes.find((note) => note.id === selected);
  const shown = notes.filter((note) => filter === "Everything" || note.category === filter);
  function threeCapture() {
    const text = draft.trim();
    if (!text) { setMessage("Write a thought first. It can be just a few words."); capture.current?.focus(); return; }
    const note = { id: Date.now(), title: text.split("\n")[0].slice(0, 70), text, category, mark: category === "Ideas" ? "?" : category === "Work" ? "↗" : "✳" };
    setNotes((current) => [note, ...current]); setDraft(""); setFilter("Everything"); setSelected(note.id); setMessage("Your thought is in the collection.");
  }
  function threeReset() { setNotes(threeExamples); setSelected(null); setFilter("Everything"); setDraft(""); setMessage("Example collection restored."); }
  return (
    <div className={s.page}>
      <a className={s.skip} href="#three-collection">Skip to the collection</a>
      <header className={s.header}><a className={s.brand} href="#three-top"><span aria-hidden="true">✳</span> sidekick</a><nav aria-label="Sidekick navigation"><a href="#three-collection">Take a look inside <ArrowDown size={16} /></a></nav><span className={s.headerNote}>A little space for a lot of you.</span></header>
      <main id="three-top">
        <section className={s.hero} aria-labelledby="three-title">
          <div className={s.heroCopy}><p className={s.eyebrow}>NOTES, IDEAS & ALL THE IN-BETWEENS</p><h1 id="three-title">Your head.<br />With more <span>room.</span></h1><div className={s.heroBottom}><p>A second brain for the things you want to keep.<br />Catch a thought. Give it a home. Come back to it.</p><a className={s.start} href="#three-collection" onClick={() => window.setTimeout(() => capture.current?.focus(), 100)}>Catch your first thought <ArrowDown size={19} /></a></div></div>
          <div className={s.heroArt} aria-hidden="true"><div className={s.sun}>✳</div><div className={s.orbitWord}>a place for<br /><strong>“oh, right!”</strong></div><div className={s.smallStar}>✦</div><div className={s.loop}><svg viewBox="0 0 240 100"><path d="M5 66C56 3 161 6 157 45C151 88 62 104 54 58C46 14 170 4 230 77" fill="none" stroke="currentColor" strokeWidth="3" /></svg></div></div>
        </section>
        <section className={s.collection} id="three-collection" aria-labelledby="three-collection-title">
          <div className={s.collectionHeading}><div><p className={s.eyebrow}>MAKE YOURSELF AT HOME</p><h2 id="three-collection-title">A thought starts here.</h2></div><p>This is a working little demo.<br />Your notes stay here until you leave or reset.</p></div>
          <div className={s.workspace}>
            <form className={s.capture} onSubmit={(event) => { event.preventDefault(); threeCapture(); }}><label htmlFor="three-draft">What’s on your mind?</label><textarea ref={capture} id="three-draft" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="The idea in the shower. A line from a book. That thing you keep forgetting…" maxLength={3000} /><div className={s.captureBottom}><label className={s.categoryLabel}>Give it a home<select value={category} onChange={(event) => setCategory(event.target.value)}><option>Ideas</option><option>Life</option><option>Work</option></select></label><button className={s.add} type="submit"><Plus size={19} /> Keep it</button></div><p className={s.status} role="status">{message || "No perfect sentences required."}</p></form>
            <div className={s.saved}><div className={s.filters} aria-label="Filter the collection">{["Everything", "Ideas", "Life", "Work"].map((item) => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)} className={filter === item ? s.currentFilter : ""}>{item}</button>)}</div><motion.div layout={!reduce} className={s.noteList}><AnimatePresence initial={false}>{shown.map((note) => <motion.button layout={!reduce} initial={reduce ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: reduce ? 0 : 0.22 }} className={`${s.note} ${s[note.category.toLowerCase()]} ${selected === note.id ? s.selectedNote : ""}`} key={note.id} type="button" onClick={() => setSelected(note.id)} aria-pressed={selected === note.id}><span className={s.noteMark} aria-hidden="true">{note.mark}</span><span className={s.noteWords}><span className={s.noteCategory}>{note.category}</span><strong>{note.title || "Untitled thought"}</strong></span><span className={s.noteOpen}>{selected === note.id ? <Check size={18} /> : <ArrowUpRight size={19} />}</span></motion.button>)}</AnimatePresence>{!shown.length && <p className={s.empty}>There’s room here. Keep a thought in {filter.toLowerCase()} to get started.</p>}</motion.div></div>
          </div>
          <AnimatePresence mode="wait" initial={false}>{active && <motion.div key={active.id} className={s.reader} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: reduce ? 0 : 0.18 }}><div className={s.readerTop}><span>{active.category} / Open note</span><button type="button" onClick={() => { setSelected(null); capture.current?.focus(); }} aria-label="Close the open note"><X size={20} /></button></div><label htmlFor="three-note-title">Title</label><input id="three-note-title" value={active.title} maxLength={120} onChange={(event) => setNotes((current) => current.map((note) => note.id === active.id ? { ...note, title: event.target.value } : note))} /><label htmlFor="three-note-body">Note</label><textarea id="three-note-body" value={active.text} maxLength={5000} onChange={(event) => setNotes((current) => current.map((note) => note.id === active.id ? { ...note, text: event.target.value } : note))} /><p>Changes stay in this demo automatically.</p></motion.div>}</AnimatePresence>
          <div className={s.collectionFoot}><span>{notes.length} thoughts, a little less to hold in your head.</span><button type="button" onClick={threeReset}>Reset demo</button></div>
        </section>
        <footer className={s.footer}><span className={s.footerBrand}>✳ sidekick</span><p>Keep the thought.<br />Go live the rest.</p><span>A second brain. A lighter head.</span></footer>
      </main>
    </div>
  );
}
