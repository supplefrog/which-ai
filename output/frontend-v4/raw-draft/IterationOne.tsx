"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Feather, Plus, Check, CornerDownLeft, BookOpen, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import s from "./iteration-one.module.css";

type Note = { title: string; text: string; collection: string };
const starters: Note[] = [
  { title: "Leave room for the unexpected.", text: "The best part of a walk is often the turn you didn't plan to take. A little space in the day makes room for a new idea.", collection: "Small observations" },
  { title: "A garden is a conversation.", text: "You plant something, pay attention, and respond. Maybe creative work needs the same kind of patience.", collection: "Things worth making" },
  { title: "Read slowly. Keep what stays.", text: "A good sentence doesn't have to be useful today. Save it for the day it finds the right question.", collection: "Reading & wondering" },
];

export function PageOne() {
  const [notes, setNotes] = useState<Note[]>(starters);
  const [selected, setSelected] = useState(0);
  const [draft, setDraft] = useState("");
  const [collection, setCollection] = useState("Small observations");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const input = useRef<HTMLTextAreaElement>(null);
  const reduce = useReducedMotion();
  const active = notes[selected];
  function startWriting() { document.getElementById("morrow-capture")?.scrollIntoView({ behavior: reduce ? "instant" : "smooth", block: "center" }); input.current?.focus({ preventScroll: true }); }
  function save(event: FormEvent) {
    event.preventDefault();
    if (!draft.trim()) { setError(true); setMessage("Write a thought first. Even a few words will do."); input.current?.focus(); return; }
    const text = draft.trim();
    setNotes([...notes, { title: text.length > 62 ? text.slice(0, 62) + "…" : text, text, collection }]);
    setSelected(notes.length); setDraft(""); setError(false); setMessage(`Your thought is tucked into ${collection}.`);
  }
  function reset() { setNotes(starters); setSelected(0); setMessage("The example journal has been restored."); setError(false); }
  return <div className={s.page}>
    <a className={s.skip} href="#morrow-main">Skip to content</a>
    <header className={s.header}>
      <a className={s.brand} href="#morrow-main"><Feather size={27} strokeWidth={1.4} />morrow<span className={s.brandDot}>•</span></a>
      <nav aria-label="Morrow navigation"><a href="#morrow-journal">The idea</a><a href="#morrow-capture">Try a page</a></nav>
      <button className={s.headerAction} onClick={startWriting}>Make room for a thought <ArrowUpRight size={16} /></button>
    </header>
    <main id="morrow-main">
      <section className={s.hero} aria-labelledby="morrow-title">
        <div className={s.heroCopy}>
          <p className={s.eyebrow}>A second brain, with a little soul.</p>
          <h1 id="morrow-title">For everything<br />on your <em>mind.</em></h1>
          <p className={s.intro}>The passing thought. The book that changed something. The idea you’re not ready to explain. Give them a place to grow.</p>
          <button className={s.primary} onClick={startWriting}>Open your first page <BookOpen size={18} strokeWidth={1.6} /></button>
          <p className={s.demoNotice}>Try the journal below. No account needed.</p>
        </div>
        <div className={s.field} aria-label="Three example thoughts. Select one to read it below.">
          <div className={s.sun} aria-hidden="true"><span /><span /><span /></div>
          <span className={s.fieldLabel}>A few things worth keeping</span>
          {starters.map((note, i) => <button key={note.title} className={`${s.specimen} ${s["specimen" + i]}`} aria-pressed={selected === i} onClick={() => { setSelected(i); document.getElementById("morrow-journal")?.scrollIntoView({ behavior: reduce ? "instant" : "smooth", block: "center" }); }}>
            <span>{note.collection}</span><strong>{note.title}</strong><span className={s.specimenBottom}>{i === 0 ? "Tuesday, on the way home" : i === 1 ? "A thought from the balcony" : "In the margin of a book"}<Feather size={16} /></span>
          </button>)}
          <div className={s.fieldFoot} aria-hidden="true">Your ordinary days.<br /><i>Extraordinary raw material.</i></div>
        </div>
      </section>
      <section className={s.journal} id="morrow-journal" aria-labelledby="morrow-journal-title">
        <div className={s.journalHeading}><p className={s.eyebrow}>A living journal</p><h2 id="morrow-journal-title">Nothing has to be<br /><em>finished</em> to belong.</h2><p>Capture a fragment now. Return to it later. A collection gives each thought a home without asking you to have it all figured out.</p></div>
        <div className={s.openBook}>
          <div className={s.index}><span className={s.indexTitle}>Your pages <span>{notes.length}</span></span><div className={s.noteList}>{notes.map((note, i) => <button key={i} aria-pressed={selected === i} className={selected === i ? s.selected : ""} onClick={() => setSelected(i)}><span className={s.indexMark} /><span>{note.title}</span></button>)}</div><button className={s.addPage} onClick={startWriting}><Plus size={16} /> A new thought</button></div>
          <div className={s.reading}><AnimatePresence mode="wait" initial={false}><motion.article key={selected} initial={reduce ? false : { opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? { opacity: 1 } : { opacity: 0, y: -5 }} transition={{ duration: .16 }}><p className={s.collection}>{active.collection}</p><h3>{active.title}</h3><p className={s.readingBody}>{active.text}</p><div className={s.related}><span>Room to connect</span><p>{active.collection === "Reading & wondering" ? "A sentence can become the starting point of your next idea." : active.collection === "Things worth making" ? "Keep the small observations that could turn into something larger." : "The ordinary things you notice become a record of how you see the world."}</p></div></motion.article></AnimatePresence><span className={s.pageTurn} aria-hidden="true" /></div>
        </div>
      </section>
      <section className={s.capture} id="morrow-capture" aria-labelledby="morrow-capture-title">
        <div className={s.captureCopy}><Feather size={44} strokeWidth={1} /><h2 id="morrow-capture-title">What’s on your<br /><em>mind today?</em></h2><p>You don’t need a perfect first sentence.<br />You just need a place to put it.</p></div>
        <form className={s.form} onSubmit={save}>
          <label htmlFor="morrow-thought">A thought to keep</label>
          <textarea id="morrow-thought" ref={input} value={draft} onChange={e => { setDraft(e.target.value); if (error) { setError(false); setMessage(""); } }} aria-invalid={error} aria-describedby="morrow-feedback morrow-local" placeholder="Today I noticed…" maxLength={700} rows={4} />
          <div className={s.formBottom}><label>Keep it in<select value={collection} onChange={e => setCollection(e.target.value)}>{starters.map(n => <option key={n.collection}>{n.collection}</option>)}</select></label><button className={s.primary} type="submit">Keep this thought <CornerDownLeft size={17} /></button></div>
          <p id="morrow-feedback" role={error ? "alert" : "status"} className={`${s.feedback} ${error ? s.error : ""}`}>{message && <>{error ? <X size={16} /> : <Check size={16} />}{message}</>}</p>
          <p className={s.local} id="morrow-local">This is a local journal preview. Your entries stay here until you reload. <button type="button" onClick={reset}>Reset example</button></p>
        </form>
      </section>
    </main>
    <footer className={s.footer}><span className={s.footerBrand}>morrow</span><p>A place for a mind in motion.</p><a href="#morrow-main">Back to the beginning ↑</a></footer>
  </div>;
}
