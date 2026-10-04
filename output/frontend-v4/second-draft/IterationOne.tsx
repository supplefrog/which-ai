"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BookOpen, Check, Feather, Link2, Plus, RotateCcw } from "lucide-react";
import s from "./iteration-one.module.css";

type OneNote = { id: number; title: string; text: string; tag: string; kind: string };
const oneExamples: OneNote[] = [
  { id: 1, title: "A city at walking speed", text: "The best part of a place is often the bit between the places. Leave a whole afternoon unscheduled.", tag: "Slow living", kind: "A passing thought" },
  { id: 2, title: "Tokyo, without a checklist", text: "Coffee in Kiyosumi. Small bookshops. A long walk by the river. Follow what catches your eye.", tag: "Slow living", kind: "Travel note" },
  { id: 3, title: "Less, but better", text: "A good question for new projects: what could I take away and still keep the feeling?", tag: "Making things", kind: "From a book" },
  { id: 4, title: "The weekend route", text: "Take the bike to the market. Bring a book. Find somewhere to sit where nobody needs anything.", tag: "Slow living", kind: "An idea for later" },
];

export function PageOne() {
  const [notes, setNotes] = useState(oneExamples);
  const [selected, setSelected] = useState(1);
  const [draft, setDraft] = useState("");
  const [tag, setTag] = useState("Slow living");
  const [status, setStatus] = useState("");
  const input = useRef<HTMLTextAreaElement>(null);
  const reduce = useReducedMotion();
  const current = notes.find(n => n.id === selected) ?? notes[0];
  const related = notes.filter(n => n.id !== current.id && n.tag === current.tag);
  const addNote = (event: React.FormEvent) => {
    event.preventDefault();
    const clean = draft.trim();
    if (!clean) { setStatus("Write a thought first. A sentence is enough."); input.current?.focus(); return; }
    const id = Date.now();
    setNotes(existing => [...existing, { id, title: clean.split(/[.!?\n]/)[0].slice(0, 68) || "A new thought", text: clean, tag, kind: "Your thought" }]);
    setSelected(id); setDraft(""); setStatus("Kept in your notebook. Its thread is open in the reader above.");
  };
  return <div className={s.page}>
    <a className={s.skip} href="#one-main">Skip to content</a>
    <header className={s.header}>
      <a href="#one-main" className={s.brand} aria-label="Morrow home"><span className={s.mark} aria-hidden="true">✳</span> morrow</a>
      <nav aria-label="Morrow navigation"><a href="#one-notebook">Inside Morrow</a><a href="#one-capture">Make a little space <ArrowUpRight size={16} aria-hidden="true" /></a></nav>
    </header>
    <main id="one-main">
      <section className={s.hero}>
        <div className={s.intro}>
          <span className={s.eyebrow}><span /> A home for your thinking</span>
          <h1>Your mind,<br />with room<br />to <em>grow.</em></h1>
          <p>Save the thought. Keep the curiosity.<br />Morrow brings your notes together, so the good ones have somewhere to go.</p>
          <a className={s.cta} href="#one-capture">Try your first thought <ArrowUpRight size={20} aria-hidden="true" /></a>
          <div className={s.heroFoot}><Feather size={17} aria-hidden="true" /><span>For things you aren’t quite ready to forget.</span></div>
        </div>
        <div className={s.field} aria-label="Interactive example notebook">
          <div className={s.fieldTitle}><span><BookOpen size={16} aria-hidden="true" /> A little of everything</span><span>Example notebook</span></div>
          <div className={s.noteGrid}>
            {notes.slice(0,4).map((note, i) => <button key={note.id} onClick={() => setSelected(note.id)} aria-label={`Read thought: ${note.title}`} aria-pressed={selected === note.id} className={`${s.note} ${s[`note${i}`]} ${selected === note.id ? s.activeNote : ""} ${current.tag === note.tag ? s.sameThread : ""}`}>
              <span className={s.noteKind}>{note.kind}</span><h2>{note.title}</h2><p>{note.text}</p><span className={s.tag}>{note.tag}</span><span className={s.noteOpen}>{selected === note.id ? "Open below" : "Read this thought"}</span>
            </button>)}
          </div>
          {notes.length > 4 && <div className={s.addedNotes}>{notes.slice(4).map(n => <button key={n.id} aria-pressed={selected === n.id} onClick={() => setSelected(n.id)}><Check size={14} aria-hidden="true" />{n.title}</button>)}</div>}
          <div className={s.fieldBottom}><span className={s.blueDot} /> Select a thought. See what it brings back.</div>
        </div>
      </section>
      <section id="one-notebook" className={s.notebook} aria-labelledby="one-notebook-heading">
        <div className={s.sectionLead}><span className={s.eyebrow}>The space between your notes</span><h2 id="one-notebook-heading">Good ideas rarely<br />arrive alone.</h2><p>Give a thought a thread. Come back to it, and discover what else you were thinking.</p></div>
        <div className={s.reader}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.article className={s.openNote} key={current.id} initial={{opacity: reduce ? 1 : 0, y: reduce ? 0 : 9}} animate={{opacity: 1,y:0}} exit={{opacity:reduce ? 1 : 0,y:reduce ? 0 : -6}} transition={{duration:reduce ? 0 : .17}}>
              <span className={s.readerMeta}>{current.kind}<span>{current.tag}</span></span><h3>{current.title}</h3><p>{current.text}</p>
            </motion.article>
          </AnimatePresence>
          <aside className={s.related} aria-label="Related notes"><h3><Link2 size={17} aria-hidden="true" /> In the same thread</h3>{related.length ? related.map(n => <button key={n.id} onClick={() => setSelected(n.id)}>{n.title}<span>{n.kind}</span></button>) : <p>No other thoughts in this thread yet. Add one below.</p>}<span className={s.relationNote}>Grouped by “{current.tag}”</span></aside>
        </div>
      </section>
      <section id="one-capture" className={s.capture} aria-labelledby="one-capture-title">
        <div><span className={s.captureMark} aria-hidden="true">✳</span><h2 id="one-capture-title">Something on<br />your mind?</h2><p>No perfect words required.</p></div>
        <form onSubmit={addNote}><label htmlFor="one-thought">Your thought</label><textarea id="one-thought" ref={input} value={draft} onChange={e => setDraft(e.target.value)} maxLength={600} placeholder="A question, a quote, a very small idea…" rows={3} /><div className={s.captureActions}><label htmlFor="one-thread">Thread<select id="one-thread" value={tag} onChange={e => setTag(e.target.value)}><option>Slow living</option><option>Making things</option><option>Personal</option></select></label><button type="submit">Keep this thought <Plus size={17} aria-hidden="true" /></button></div><p role="status" className={s.status}>{status || "Interactive preview · notes stay here until you leave or reload."}</p><button type="button" className={s.reset} onClick={() => {setNotes(oneExamples);setSelected(1);setStatus("Example notes restored. Your draft is still here.");}}><RotateCcw size={13} aria-hidden="true" /> Restore example notes</button></form>
      </section>
    </main>
    <footer className={s.footer}><span>morrow</span><p>A little more space for a curious mind.</p><a href="#one-main">Back to the top</a></footer>
  </div>;
}
