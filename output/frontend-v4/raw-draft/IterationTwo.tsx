"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check, Layers, Plus, Search, RotateCcw, Link2, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import s from "./iteration-two.module.css";

type Thought = { title: string; kind: string; body: string; related: number[] };
const initial: Thought[] = [
  { title: "The shape of a good idea", kind: "Essay seed", body: "An idea rarely arrives whole. It starts as a question, borrows something from a book, and takes shape in a conversation. Keep the pieces close enough to meet.", related: [1, 2] },
  { title: "Notes from the train", kind: "Observation", body: "People looking out of windows. A landscape that never holds still. What if a place to think felt less like a filing cabinet and more like a journey?", related: [0, 3] },
  { title: "Ways of seeing", kind: "Reading note", body: "What we notice is shaped by what we already know. Collecting different perspectives might be the most useful kind of research.", related: [0, 3] },
  { title: "A question worth keeping", kind: "Open question", body: "What have I stopped noticing because I see it every day? Come back to this before starting the next project.", related: [1, 2] },
];
const positions = [{ x: 46, y: 22 }, { x: 18, y: 53 }, { x: 78, y: 48 }, { x: 51, y: 82 }, { x: 14, y: 83 }, { x: 83, y: 81 }];

export function PageTwo() {
  const [thoughts, setThoughts] = useState<Thought[]>(initial);
  const [selected, setSelected] = useState(0);
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);
  const titleInput = useRef<HTMLInputElement>(null);
  const reduce = useReducedMotion();
  const active = thoughts[selected];
  const filtered = thoughts.map((thought, index) => ({ thought, index })).filter(({ thought }) => `${thought.title} ${thought.kind} ${thought.body}`.toLowerCase().includes(query.toLowerCase()));
  function choose(index: number) { setSelected(index); }
  function capture() { document.getElementById("lattice-capture")?.scrollIntoView({ behavior: reduce ? "instant" : "smooth", block: "center" }); titleInput.current?.focus({ preventScroll: true }); }
  function addThought(event: FormEvent) {
    event.preventDefault();
    if (!title.trim() || !draft.trim()) { setError(true); setStatus("Add a title and a thought so you can find it again."); (!title.trim() ? titleInput.current : document.getElementById("lattice-body"))?.focus(); return; }
    if (thoughts.length >= 6) { setError(true); setStatus("This preview has room for two new thoughts. Reset the example to start again."); return; }
    const newIndex = thoughts.length;
    setThoughts(thoughts.map((t, i) => i === selected ? { ...t, related: [...t.related, newIndex] } : t).concat({ title: title.trim(), kind: "Your thought", body: draft.trim(), related: [selected] }));
    setSelected(newIndex); setTitle(""); setDraft(""); setError(false); setQuery(""); setStatus(`“${title.trim()}” added and connected to “${active.title}”.`);
  }
  function reset() { setThoughts(initial); setSelected(0); setQuery(""); setTitle(""); setDraft(""); setStatus("Example restored. Your new thoughts have been cleared."); setError(false); }
  return <div className={s.page}>
    <a className={s.skip} href="#lattice-main">Skip to content</a>
    <header className={s.header}>
      <a className={s.brand} href="#lattice-main"><span className={s.logo} aria-hidden="true"><i /><i /><i /><i /></span>lattice</a>
      <nav aria-label="Lattice navigation"><a href="#lattice-map">Explore the map</a><a href="#lattice-workspace">Inside a thought</a></nav>
      <button className={s.headerButton} onClick={capture}>Try it here <ArrowRight size={16} /></button>
    </header>
    <main id="lattice-main">
      <section className={s.hero} aria-labelledby="lattice-heading">
        <div className={s.heroCopy}><div className={s.kicker}><span /> A home for connected thinking</div><h1 id="lattice-heading">Your mind<br />isn’t a folder.<br /><span>It’s a network.</span></h1><p>Lattice is a second brain for the ideas, notes and questions that belong together. Follow a connection. Find your next thought.</p><button className={s.primary} onClick={capture}>Make your first connection <Plus size={18} /></button><p className={s.heroFoot}>An interactive preview. No sign-up, no setup.</p></div>
        <div className={s.mapContainer} id="lattice-map">
          <div className={s.mapTop}><span><Layers size={15} /> A mind in progress</span><span>{thoughts.length} thoughts · {thoughts.length === 4 ? 4 : thoughts.length} connections</span></div>
          <div className={s.map} aria-label="Connected example notes. Select a thought to see its connections.">
            <svg className={s.lines} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><defs><radialGradient id="lattice-glow"><stop offset="0" stopColor="#aa93ff" stopOpacity=".25"/><stop offset="1" stopColor="#aa93ff" stopOpacity="0"/></radialGradient></defs><circle cx="48" cy="52" r="38" fill="url(#lattice-glow)" />{thoughts.flatMap((t, i) => t.related.filter(j => j > i).map(j => <line key={`${i}-${j}`} x1={positions[i].x} y1={positions[i].y} x2={positions[j].x} y2={positions[j].y} className={selected === i || selected === j ? s.activeLine : s.quietLine} />))}</svg>
            {thoughts.map((thought, i) => <button key={i} style={{ left: `${positions[i].x}%`, top: `${positions[i].y}%` }} className={`${s.node} ${selected === i ? s.activeNode : ""}`} aria-pressed={selected === i} onClick={() => choose(i)}><span className={s.nodePoint}><span /></span><strong>{thought.title}</strong><span className={s.nodeType}>{thought.kind}</span></button>)}
          </div>
          <div className={s.mapBottom}><span className={s.pulse} aria-hidden="true" /><span>Select a thought. See what it connects to.</span><span className={s.mapCoordinate} aria-hidden="true">∞</span></div>
        </div>
      </section>
      <section className={s.workspaceSection} id="lattice-workspace" aria-labelledby="lattice-workspace-heading">
        <div className={s.sectionHeading}><h2 id="lattice-workspace-heading">A thought never<br /><em>stands alone.</em></h2><p>Bring a note into focus and its context comes with it.<br />Your map and your collection stay in step.</p></div>
        <div className={s.workspace}>
          <aside className={s.library} aria-label="Thought collection"><div className={s.libraryTitle}><span>YOUR COLLECTION</span><button onClick={capture} aria-label="Add a thought"><Plus size={18} /></button></div><label className={s.searchLabel} htmlFor="lattice-search">Find a thought</label><div className={s.search}><Search size={16} /><input id="lattice-search" type="search" placeholder="A word, a question…" value={query} onChange={e => setQuery(e.target.value)} /></div><div className={s.libraryList}>{filtered.map(({ thought, index }) => <button key={index} onClick={() => choose(index)} aria-pressed={selected === index} className={selected === index ? s.librarySelected : ""}><span>{thought.kind}</span><strong>{thought.title}</strong>{selected === index && <span className={s.selectedWord}>In focus</span>}</button>)}{filtered.length === 0 && <div className={s.empty}><p>No thoughts match “{query}”.</p><button onClick={() => setQuery("")}>Clear search</button></div>}</div><p className={s.libraryFoot}>{filtered.length} of {thoughts.length} thoughts</p></aside>
          <div className={s.thoughtPanel}><AnimatePresence mode="wait" initial={false}><motion.article key={selected} initial={reduce ? false : { opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={reduce ? { opacity: 1 } : { opacity: 0, x: -8 }} transition={{ duration: .18 }}><div className={s.thoughtMeta}><span>{active.kind}</span><span>Illustrative workspace</span></div><h3>{active.title}</h3><p className={s.thoughtBody}>{active.body}</p><div className={s.connections}><h4><Link2 size={17} /> Connected thoughts</h4>{active.related.map(i => <button key={i} onClick={() => choose(i)}><span className={s.connectionDot} /><span>{thoughts[i].title}</span><span className={s.connectionKind}>{thoughts[i].kind}</span></button>)}</div></motion.article></AnimatePresence></div>
        </div>
      </section>
      <section className={s.captureSection} id="lattice-capture" aria-labelledby="lattice-capture-heading">
        <div className={s.captureIntro}><span className={s.captureSymbol} aria-hidden="true"><span /><span /><span /></span><h2 id="lattice-capture-heading">One small thought.<br /><em>A new possibility.</em></h2><p>Add something to the map. We’ll connect it to the thought you currently have in focus.</p><div className={s.linkTarget}><Link2 size={16} /><span>{active.title}</span></div></div>
        <form className={s.form} onSubmit={addThought}>
          <label htmlFor="lattice-title">Give it a title</label><input ref={titleInput} id="lattice-title" value={title} onChange={e => { setTitle(e.target.value); setError(false); setStatus(""); }} maxLength={60} placeholder="Something you want to come back to" aria-invalid={error && !title.trim()} aria-describedby="lattice-feedback" />
          <label htmlFor="lattice-body">Keep the thought</label><textarea id="lattice-body" value={draft} onChange={e => { setDraft(e.target.value); setError(false); setStatus(""); }} rows={3} maxLength={600} placeholder="A note, a quote, a question…" aria-invalid={error && !draft.trim()} aria-describedby="lattice-feedback" />
          <div className={s.formActions}><button type="submit" className={s.primary} disabled={thoughts.length >= 6}>{thoughts.length >= 6 ? "Preview map is full" : "Add to your map"}<Plus size={17} /></button><button className={s.reset} onClick={reset} type="button"><RotateCcw size={14} />Reset example</button></div>
          <p id="lattice-feedback" role={error ? "alert" : "status"} className={`${s.status} ${error ? s.error : ""}`}>{status && <>{error ? <X size={16} /> : <Check size={16} />}{status}</>}</p><p className={s.local}>Local preview · Space for two new thoughts · Reloading clears your entries.</p>
        </form>
      </section>
    </main>
    <footer className={s.footer}><a className={s.brand} href="#lattice-main"><span className={s.logo} aria-hidden="true"><i /><i /><i /><i /></span>lattice</a><p>Keep the thought. Find the connection.</p><a href="#lattice-map">Return to your map ↑</a></footer>
  </div>;
}
