"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, ArrowRight, Plus, Search, BookOpen, Bookmark, Check, X } from "lucide-react";
import s from "./iteration-three.module.css";

type Note = { id: number; title: string; text: string; collection: string };
const seed: Note[] = [
  { id: 1, title: "Make room for wandering", text: "A walk without a destination is often where the next idea begins. Leave space in the week for it.", collection: "Ideas" },
  { id: 2, title: "The art of noticing", text: "Attention is a practice. Collect the little things: a good sentence, an unexpected color, a question you can’t shake.", collection: "Reading" },
  { id: 3, title: "A place worth returning to", text: "Design a reading corner by the window. A low shelf, a comfortable chair, and the book you are halfway through.", collection: "Life" },
];

export function PageThree() {
  const [notes, setNotes] = useState<Note[]>(seed);
  const [filter, setFilter] = useState("All notes");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(1);
  const [composing, setComposing] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [collection, setCollection] = useState("Ideas");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const titleRef = useRef<HTMLInputElement>(null);
  const addRef = useRef<HTMLButtonElement>(null);
  const current = notes.find(n => n.id === selected) ?? notes[0];
  const visible = notes.filter(n => (filter === "All notes" || n.collection === filter) && `${n.title} ${n.text}`.toLowerCase().includes(query.toLowerCase()));
  function start() {
    setComposing(true);
    document.getElementById("commonplace-library")?.scrollIntoView({ block: "start" });
    requestAnimationFrame(() => titleRef.current?.focus({ preventScroll: true }));
  }
  function save(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !text.trim()) { setError("Give your note a title and a thought to keep."); return; }
    const note = { id: Date.now(), title: title.trim(), text: text.trim(), collection };
    setNotes(previous => [...previous, note]); setSelected(note.id); setFilter("All notes"); setQuery(""); setComposing(false); setTitle(""); setText(""); setError(""); setStatus(`Saved “${note.title}” to ${collection}.`);
    requestAnimationFrame(() => addRef.current?.focus({ preventScroll: true }));
  }
  return <div className={s.page}>
    <a className={s.skip} href="#commonplace-library">Skip to note library</a>
    <header className={s.nav}><a href="#" className={s.logo}><span className={s.mark} aria-hidden="true">c.</span>commonplace</a><nav aria-label="Main navigation"><a href="#commonplace-library">Your second brain</a><a href="#commonplace-method">The idea</a></nav><button className={s.navButton} onClick={start}>Try a little note <ArrowUpRight size={16}/></button></header>
    <main>
      <section className={s.hero}>
        <div className={s.kicker}><span/> A home for the things on your mind</div>
        <h1>Life is full of good ideas.<br/><span>Keep yours together.</span></h1>
        <div className={s.heroBottom}><p>Your thoughts, favorite words, and half-formed plans.<br/>Collected in one place. Ready when you are.</p><button className={s.primary} onClick={start}>Make room for a thought <ArrowRight size={20}/></button></div>
        <div className={s.shelf} aria-label="Example kinds of notes"><div className={s.shelfCard}><Bookmark size={23}/><span>A sentence<br/>worth saving.</span><small>READING</small></div><div className={s.shelfCard}><span className={s.scribble} aria-hidden="true">↗</span><span>A spark that<br/>could be something.</span><small>IDEAS</small></div><div className={s.shelfCard}><BookOpen size={23}/><span>A small plan.<br/>A fresh start.</span><small>LIFE</small></div><div className={s.shelfCaption}><span aria-hidden="true">↳</span> Nothing too small<br/>to keep.</div></div>
      </section>
      <section className={s.library} id="commonplace-library" aria-labelledby="commonplace-demo-title">
        <div className={s.sectionTop}><div><span className={s.eyebrow}>A LITTLE COMMONPLACE OF YOUR OWN</span><h2 id="commonplace-demo-title">Less searching.<br/>More finding.</h2></div><p>Take it for a spin. Open a note, find a thought,<br/>or put something new on the shelf.</p></div>
        <div className={s.workspace}>
          <aside className={s.sidebar}><span className={s.sidebarTitle}>YOUR COLLECTION</span>{["All notes", "Ideas", "Reading", "Life"].map(item => <button key={item} aria-pressed={filter === item} className={filter === item ? s.activeCollection : ""} onClick={() => { setFilter(item); setComposing(false); const first = notes.find(n => item === "All notes" || n.collection === item); if (first) setSelected(first.id); }}>{item}<span>{item === "All notes" ? notes.length : notes.filter(n => n.collection === item).length}</span></button>)}<div className={s.sidebarFoot}>A little order.<br/>A lot of possibility.</div></aside>
          <div className={s.noteList}><div className={s.listHead}><strong>{filter}</strong><button ref={addRef} onClick={start} aria-label="Write a new note"><Plus size={20}/></button></div><label className={s.search}><Search size={16}/><span className={s.srOnly}>Search your notes</span><input placeholder="Find a thought…" value={query} onChange={e => setQuery(e.target.value)}/></label><div className={s.results}>{visible.length ? visible.map(note => <button className={`${s.noteItem} ${!composing && selected === note.id ? s.selectedNote : ""}`} key={note.id} onClick={() => { setSelected(note.id); setComposing(false); }} aria-pressed={!composing && selected === note.id}><small>{note.collection}</small><strong>{note.title}</strong><span>{note.text}</span><ArrowUpRight size={17}/></button>) : <div className={s.empty}><strong>No thoughts found.</strong><p>Try another word, or look in all notes.</p><button onClick={() => { setQuery(""); setFilter("All notes"); }}>Show all notes</button></div>}</div></div>
          <div className={s.reader}>{composing ? <form onSubmit={save} className={s.compose}><div className={s.readerTop}><span>A NEW THOUGHT</span><button type="button" aria-label="Close note editor" onClick={() => { setComposing(false); setError(""); addRef.current?.focus(); }}><X size={18}/></button></div><label htmlFor="cp-title">Title</label><input id="cp-title" ref={titleRef} value={title} maxLength={100} onChange={e => setTitle(e.target.value)} placeholder="What’s on your mind?" aria-describedby={error ? "cp-error" : undefined}/><label htmlFor="cp-text">Your note</label><textarea id="cp-text" value={text} onChange={e => setText(e.target.value)} placeholder="Start anywhere. A few words are enough." rows={5}/><label htmlFor="cp-collection">Collection</label><select id="cp-collection" value={collection} onChange={e => setCollection(e.target.value)}><option>Ideas</option><option>Reading</option><option>Life</option></select>{error && <p id="cp-error" role="alert" className={s.error}>{error}</p>}<button className={s.save} type="submit">Keep this thought <Check size={16}/></button></form> : <article><div className={s.readerTop}><span>{current.collection.toUpperCase()}</span><Bookmark size={18}/></div><h3>{current.title}</h3><p>{current.text}</p><div className={s.noteTag}>#{current.collection.toLowerCase()}</div><div className={s.readerFoot}><span className={s.dot}/><span>Saved in your collection</span></div></article>}</div>
        </div><div className={s.demoFoot}><span>Interactive sample · notes stay here until you reload.</span><span role="status">{status}</span></div>
      </section>
      <section className={s.method} id="commonplace-method"><span className={s.eyebrow}>A SECOND BRAIN. A LITTLE MORE SPACE.</span><div className={s.methodGrid}><h2>Keep the thought.<br/>Let go of the<br/><em>mental tabs.</em></h2><div><p>You don’t have to know what an idea is for to give it a home.</p><dl><div><dt>Catch it</dt><dd>Write the thought while it’s fresh.</dd></div><div><dt>Give it a place</dt><dd>Keep related notes in a collection.</dd></div><div><dt>Come back to it</dt><dd>Search your words. Pick up the thread.</dd></div></dl><button onClick={start}>Start with one note <ArrowRight size={18}/></button></div></div></section>
    </main><footer className={s.footer}><span className={s.logo}><span className={s.mark}>c.</span>commonplace</span><span>A place for your mind to land.</span><a href="#commonplace-library">Back to your notes <ArrowUpRight size={16}/></a></footer>
  </div>;
}
