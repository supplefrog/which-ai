"use client";

import { useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Plus, X, MoveUpRight } from "lucide-react";
import s from "./iteration-four.module.css";

const projects = [
  { name: "A more thoughtful city", question: "What makes a place feel like home?", category: "URBAN LIFE", nodes: [
    { title: "The third place", kind: "READING NOTE", text: "Somewhere outside home and work where conversation happens naturally. A library, a café, a small public square.", connection: "Belonging grows through repeated, unplanned encounters." },
    { title: "A bench in the sun", kind: "OBSERVATION", text: "People stayed longer on the sunny side of the square. The simplest invitation was somewhere comfortable to sit.", connection: "A small detail can change how a public space is used." },
    { title: "Design for the pause", kind: "IDEA", text: "What if we designed for staying, rather than just moving through? Start with shade, seats, and a reason to stop.", connection: "Turn observations about comfort into a design principle." },
    { title: "Saturday’s walk", kind: "PERSONAL NOTE", text: "The route I love is not the shortest. It passes the bookshop, the old tree, and the corner where everyone says hello.", connection: "Our personal routes reveal what we value in a neighborhood." },
  ] },
  { name: "A calmer creative practice", question: "How do good ideas get room to grow?", category: "CREATIVE PRACTICE", nodes: [
    { title: "Leave a little unfinished", kind: "READING NOTE", text: "End a session knowing what comes next. A small unfinished task can make returning to the work easier.", connection: "Continuity reduces the effort of starting again." },
    { title: "Morning without a screen", kind: "OBSERVATION", text: "The first idea of the day arrived while making coffee. It was easier to hear before opening the inbox.", connection: "Attention has a shape. Protect a little of it." },
    { title: "A daily idea garden", kind: "IDEA", text: "Save one observation each day. Review them on Friday. Look for a question that appears more than once.", connection: "Small, regular captures become material for a larger idea." },
    { title: "The unfinished sketch", kind: "PERSONAL NOTE", text: "I returned to an old sketch and saw a new way through it. Keeping the rough version mattered.", connection: "Old work can be a starting point instead of an archive." },
  ] },
];
const positions = [{ x: 22, y: 20 }, { x: 78, y: 22 }, { x: 20, y: 77 }, { x: 79, y: 76 }];

export function PageFour() {
  const [project, setProject] = useState(0);
  const [selected, setSelected] = useState(0);
  const [writing, setWriting] = useState(false);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  const [saved, setSaved] = useState<{ project: number; text: string }[]>([]);
  const [status, setStatus] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const addRef = useRef<HTMLButtonElement>(null);
  const active = projects[project];
  const note = active.nodes[selected];
  function explore() { document.getElementById("fieldwork-atlas")?.scrollIntoView({ block: "start" }); }
  function begin() { setWriting(true); setError(""); requestAnimationFrame(() => inputRef.current?.focus()); }
  function save(e: React.FormEvent) {
    e.preventDefault(); if (!draft.trim()) { setError("Write a thought before adding it to this project."); return; }
    setSaved(prev => [...prev, { project, text: draft.trim() }]); setDraft(""); setWriting(false); setError(""); setStatus(`Your note is linked to ${active.name}.`); requestAnimationFrame(() => addRef.current?.focus({ preventScroll: true }));
  }
  return <div className={s.page}>
    <a href="#fieldwork-atlas" className={s.skip}>Skip to the knowledge atlas</a>
    <header className={s.nav}><a href="#" className={s.logo}><span className={s.brandSymbol} aria-hidden="true"><i/><i/><i/></span>fieldwork</a><nav aria-label="Main navigation"><a href="#fieldwork-atlas">Explore the atlas</a><a href="#fieldwork-purpose">Why connect?</a></nav><button onClick={explore}>Follow an idea <ArrowUpRight size={17}/></button></header>
    <main>
      <section className={s.intro}><div className={s.introLeft}><span className={s.eyebrow}>NOTES ARE ONLY THE BEGINNING.</span><h1>Think beyond<br/>the <em>single note.</em></h1></div><div className={s.introRight}><p>A second brain for the way ideas actually work.<br/>Gather the pieces. Find the connections.<br/>See what they can become.</p><button className={s.primary} onClick={explore}>Step inside your second brain <ArrowRight size={19}/></button></div></section>
      <section className={s.atlasSection} id="fieldwork-atlas" aria-labelledby="fieldwork-atlas-title">
        <div className={s.atlasHeading}><div><span className={s.orbitIcon} aria-hidden="true">✳</span><div><span className={s.eyebrow}>THE KNOWLEDGE ATLAS</span><h2 id="fieldwork-atlas-title">Every idea has a neighborhood.</h2></div></div><p>Choose a project. Open a connected note.</p></div>
        <div className={s.projectTabs} aria-label="Choose a sample project">{projects.map((item, index) => <button key={item.name} aria-pressed={project === index} onClick={() => { setProject(index); setSelected(0); setStatus(""); }}>{item.name}<ArrowUpRight size={15}/></button>)}</div>
        <div className={s.atlasLayout}>
          <div className={s.map} aria-label={`Connected notes for ${active.name}`}><svg className={s.connections} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">{positions.map((p, i) => <line key={i} x1="50" y1="49" x2={p.x} y2={p.y} className={selected === i ? s.selectedLine : ""}/>)}</svg><div className={s.question}><small>{active.category}</small><h3>{active.question}</h3><span>{active.nodes.length + saved.filter(n => n.project === project).length} connected thoughts</span></div>{active.nodes.map((node, index) => <button key={index} style={{ left: `${positions[index].x}%`, top: `${positions[index].y}%` }} className={`${s.node} ${selected === index ? s.selectedNode : ""}`} aria-pressed={selected === index} onClick={() => setSelected(index)}><span className={s.nodeTop}><small>{node.kind}</small><MoveUpRight size={16}/></span><strong>{node.title}</strong><span className={s.nodeBottom}>Connected to this project</span></button>)}<div className={s.mapHint}><span/> A connection is a reason to return.</div></div>
          <aside className={s.inspector} aria-labelledby="fieldwork-note-title"><span className={s.inspectorLabel}>OPEN NOTE <span>{String(selected + 1).padStart(2, "0")}</span></span><h3 id="fieldwork-note-title">{note.title}</h3><span className={s.noteKind}>{note.kind}</span><p className={s.noteText}>{note.text}</p><div className={s.connectionMeaning}><span>↳ WHY IT BELONGS HERE</span><p>{note.connection}</p></div><button ref={addRef} className={s.add} onClick={begin}><Plus size={17}/> Add your own connection</button></aside>
        </div>
        <div className={s.captureZone}>{writing ? <form className={s.capture} onSubmit={save}><div className={s.captureTop}><label htmlFor="fw-note">Your thought → {active.name}</label><button type="button" aria-label="Close note editor" onClick={() => { setWriting(false); setError(""); addRef.current?.focus(); }}><X size={18}/></button></div><textarea id="fw-note" ref={inputRef} value={draft} onChange={e => setDraft(e.target.value)} rows={3} placeholder="What connection do you see?" aria-describedby={error ? "fw-error" : undefined}/>{error && <p role="alert" id="fw-error">{error}</p>}<button className={s.save} type="submit">Link to this project <Check size={17}/></button></form> : saved.filter(n => n.project === project).length > 0 ? <div className={s.savedNotes}><span className={s.eyebrow}>YOUR CONNECTIONS</span>{saved.filter(n => n.project === project).map((item, index) => <p key={index}><span aria-hidden="true">↳</span>{item.text}</p>)}</div> : null}</div>
        <div className={s.demoFoot}><span>Explore a sample. Your additions stay until you reload.</span><span role="status">{status}</span></div>
      </section>
      <section className={s.purpose} id="fieldwork-purpose"><div className={s.purposeTitle}><span className={s.eyebrow}>FROM COLLECTION TO CONNECTION</span><h2>You’ve already<br/>had the beginnings<br/>of your next idea.</h2></div><div className={s.purposeContent}><p>They’re in that paragraph you saved.<br/>That conversation you wrote down.<br/>That question you keep coming back to.</p><p>Bring them into the same space. Let a project become the meeting point for what you know and what you’re still figuring out.</p><a href="#fieldwork-atlas">See the bigger picture <ArrowUpRight size={19}/></a></div></section>
      <section className={s.closing}><span className={s.asterisk} aria-hidden="true">✳</span><div><h2>Give your ideas<br/>somewhere to meet.</h2><button onClick={() => { explore(); begin(); }}>Make your first connection <ArrowRight size={19}/></button></div><span className={s.closingNote}>A note today.<br/>A new possibility tomorrow.</span></section>
    </main><footer className={s.footer}><span className={s.logo}><span className={s.brandSymbol} aria-hidden="true"><i/><i/><i/></span>fieldwork</span><span>Your thoughts, in good company.</span><a href="#fieldwork-atlas">Explore again ↗</a></footer>
  </div>;
}
