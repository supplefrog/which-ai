"use client";

import { useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Bookmark, Check, Command, CornerDownLeft, Flower2, Plus, Search, Sparkles } from "lucide-react";
import s from "./iteration-one.module.css";

type Note = { title: string; body: string; tag: string; color: string };
const initial: Note[] = [
  { title: "A thought on attention", body: "What we choose to notice becomes the shape of our lives. Make room for the things worth noticing.", tag: "Ideas", color: "lavender" },
  { title: "The Sunday ritual", body: "A walk without headphones. A book with the corners turned. One good idea to carry into the week.", tag: "Life", color: "pink" },
  { title: "Less, but better", body: "Leave a little space in every project. The interesting things happen in the margins.", tag: "Work", color: "green" },
];

export function PageOne() {
  const [notes, setNotes] = useState(initial);
  const [selected, setSelected] = useState(0);
  const [filter, setFilter] = useState("All notes");
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState("Your sample space is ready. Changes stay in this page session.");
  const capture = useRef<HTMLTextAreaElement>(null);
  const visible = notes.map((note, index) => ({ note, index })).filter(({ note }) => (filter === "All notes" || note.tag === filter) && `${note.title} ${note.body}`.toLowerCase().includes(query.toLowerCase()));
  const current = notes[selected];
  function save() {
    if (!draft.trim()) { setStatus("Write a thought first, then save it to your space."); capture.current?.focus(); return; }
    const body = draft.trim();
    setNotes([...notes, { title: body.split("\n")[0].slice(0, 60), body, tag: "Ideas", color: "yellow" }]);
    setSelected(notes.length); setFilter("All notes"); setQuery(""); setDraft(""); setStatus("Saved to Ideas. Your new note is open below.");
  }
  function start() { document.getElementById("margin-demo")?.scrollIntoView({ behavior: "instant", block: "start" }); capture.current?.focus({ preventScroll: true }); }
  return <main className={s.page}>
    <a className={s.skip} href="#margin-demo">Skip to the note demo</a>
    <header className={s.header}>
      <a className={s.brand} href="#margin-top"><Flower2 size={27} strokeWidth={1.7} /> margin<span>®</span></a>
      <nav aria-label="Margin navigation"><a href="#margin-how">The idea</a><a href="#margin-demo">Your space</a></nav>
      <button className={s.headerAction} onClick={start}>Make room <ArrowUpRight size={17} /></button>
    </header>
    <section id="margin-top" className={s.hero}>
      <div className={s.intro}>
        <p className={s.eyebrow}><span /> A little space for a lot of thoughts</p>
        <h1>Your mind,<br />with a little<br /><em>more room.</em></h1>
        <p className={s.heroCopy}>The notes, links, and little sparks you don’t want to lose. Give them a home. Let something new grow.</p>
        <button className={s.primary} onClick={start}>Try your second brain <ArrowUpRight size={21} /></button>
        <p className={s.subcopy}>An open sample space. No sign-up needed.</p>
      </div>
      <div className={s.constellation} aria-label="A collection of thoughts, reading notes, and connected ideas">
        <span className={s.orbit} aria-hidden="true" />
        <button className={`${s.fragment} ${s.fragmentA}`} onClick={() => {setSelected(0); start();}}><span><Sparkles size={15} /> A passing thought</span><strong>Good ideas don’t arrive<br />in straight lines.</strong><small>Keep the interesting ones. ↗</small></button>
        <button className={`${s.fragment} ${s.fragmentB}`} onClick={() => {setSelected(1); start();}}><span><Bookmark size={15} /> For later</span><strong>A slower<br />Sunday.</strong><p>A walk. A book.<br />A little perspective.</p><span className={s.sun} aria-hidden="true">✳</span></button>
        <button className={`${s.fragment} ${s.fragmentC}`} onClick={() => {setSelected(2); start();}}><span>WORK IN PROGRESS</span><strong>Less,<br />but better.</strong><small>Connect this to a new idea ↗</small></button>
        <div className={s.smallNote}><Command size={18} /><span>Everything you save.<br /><b>Something you can find.</b></span></div>
        <span className={s.handwritten}>a place for the unfinished</span>
      </div>
    </section>
    <section className={s.philosophy} id="margin-how"><p>You don’t need another system to keep up with.</p><h2>You need a place to<br /><span>pick up where you left off.</span></h2><div className={s.steps}><div><span>01 / Gather</span><p>Catch the thought before it goes.</p></div><div><span>02 / Keep</span><p>A little context. A place it belongs.</p></div><div><span>03 / Return</span><p>Find the spark when you need it.</p></div></div><a href="#margin-demo">Find your flow <ArrowDown size={17} /></a></section>
    <section id="margin-demo" className={s.demoSection}>
      <div className={s.demoHeading}><div><p className={s.eyebrow}>An invitation to think out loud</p><h2>Start with one thought.</h2></div><span>INTERACTIVE SAMPLE SPACE</span></div>
      <div className={s.workspace}>
        <aside className={s.sidebar}><span className={s.spaceName}><Flower2 size={18} /> My little universe</span><div className={s.filters} aria-label="Filter notes">{["All notes", "Ideas", "Life", "Work"].map(tag => <button key={tag} aria-pressed={filter === tag} className={filter === tag ? s.activeFilter : ""} onClick={() => setFilter(tag)}>{tag}<span>{tag === "All notes" ? notes.length : notes.filter(n => n.tag === tag).length}</span></button>)}</div><div className={s.capture}><label htmlFor="margin-thought">Catch a thought</label><textarea id="margin-thought" ref={capture} value={draft} onChange={e => setDraft(e.target.value)} placeholder="What’s on your mind?" rows={4} maxLength={1000} /><button onClick={save}><Plus size={16} /> Save thought</button></div></aside>
        <div className={s.noteList}><label className={s.search}><Search size={17} /><span className={s.srOnly}>Find a note</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Find a little something…" type="search" /></label><p className={s.listLabel}>{filter} <span>{visible.length} notes</span></p>{visible.map(({note, index}) => <button key={index} className={`${s.noteRow} ${selected === index ? s.selectedRow : ""}`} onClick={() => setSelected(index)}><i className={s[note.color]} /><span><strong>{note.title}</strong><small>{note.body.slice(0, 64)}…</small></span><CornerDownLeft size={14} /></button>)}{!visible.length && <p className={s.empty}>No notes here yet. Try another search or save a new thought.</p>}</div>
        <article className={`${s.reader} ${s[current.color]}`}><span className={s.noteTag}>{current.tag} / A note to come back to</span><h3>{current.title}</h3><p>{current.body}</p><div className={s.noteFooter}><span><Check size={14} /> Kept in your space</span><button onClick={() => { const next = [...notes]; next[selected] = {...current, tag: current.tag === "Ideas" ? "Work" : "Ideas"}; setNotes(next); setStatus(`Moved “${current.title}” to ${next[selected].tag}.`); }}>Move to {current.tag === "Ideas" ? "Work" : "Ideas"} <ArrowUpRight size={14} /></button></div></article>
      </div><p className={s.status} role="status">{status}</p>
    </section>
    <section className={s.closing}><Flower2 size={49} strokeWidth={1.1} /><h2>There’s more in there.<br /><em>Give it some room.</em></h2><button className={s.primary} onClick={start}>Leave yourself a note <ArrowUpRight size={20} /></button></section>
    <footer className={s.footer}><span>margin — a home for your thoughts</span><a href="#margin-top">Back to the beginning ↑</a></footer>
  </main>;
}
