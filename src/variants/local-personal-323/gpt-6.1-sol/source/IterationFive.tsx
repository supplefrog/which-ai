"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowRight, Plus, Check, X, RotateCcw, AudioLines, CornerDownRight } from "lucide-react";
import s from "./iteration-five.module.css";

type Fragment = { id: number; title: string; body: string; type: string };
const seed: Fragment[] = [
  { id: 1, title: "Small, on purpose", body: "The best launches start with a small group. Give ten people something they can actually use before telling everyone about it.", type: "A passing thought" },
  { id: 2, title: "Make room for the work", body: "A calendar full of meetings is a calendar with no room for making. Protect one uninterrupted morning each week.", type: "Journal · Monday" },
  { id: 3, title: "Show the unfinished thing", body: "A rough prototype invites a conversation. A polished presentation often invites a verdict. Ask people what they would do next.", type: "Book note" },
  { id: 4, title: "A walk without headphones", body: "When there is no new input, old ideas get a chance to meet. Take the notebook, leave the headphones.", type: "A passing thought" },
  { id: 5, title: "Listen for the repeat", body: "If three people describe the same problem in different words, keep their actual words. That is a better starting point than a clever feature.", type: "Research note" },
];
const intentions = [
  { name: "Start something", prompt: "How could I launch a small project?", ids: [1, 3, 5], action: "Make one rough version, share it with ten people, and write down the problems they repeat." },
  { name: "Make some space", prompt: "How can I make more room to think?", ids: [2, 4], action: "Protect one quiet morning. Start it with a walk, then write down what surfaced before opening your inbox." },
  { name: "Find a new angle", prompt: "What could help me get unstuck?", ids: [3, 4, 5], action: "Step away from new input, show an unfinished version, and listen for a question you have not asked yet." },
];

export function PageFive() {
  const [notes, setNotes] = useState(seed);
  const [intent, setIntent] = useState(0);
  const [selected, setSelected] = useState<number[]>(intentions[0].ids);
  const [brief, setBrief] = useState("");
  const [status, setStatus] = useState("");
  const [capture, setCapture] = useState(false);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  const captureRef = useRef<HTMLTextAreaElement>(null);
  const addRef = useRef<HTMLButtonElement>(null);
  const restoreCaptureFocus = useRef(false);
  const startRef = useRef<HTMLButtonElement>(null);
  const workspaceRef = useRef<HTMLElement>(null);
  const fragments = notes.filter((n) => selected.includes(n.id));

  useEffect(() => {
    if (!capture && restoreCaptureFocus.current) {
      addRef.current?.focus({ preventScroll: true });
      restoreCaptureFocus.current = false;
    }
  }, [capture]);

  function closeCapture() {
    restoreCaptureFocus.current = true;
    setCapture(false); setError("");
  }

  function start() {
    workspaceRef.current?.scrollIntoView({ block: "start", behavior: "instant" });
    startRef.current?.focus({ preventScroll: true });
  }
  function choose(index: number) {
    setIntent(index); setSelected(intentions[index].ids); setBrief(""); setError(""); setStatus("Thread changed. Choose the fragments you want to bring together.");
  }
  function toggle(id: number) {
    setSelected((previous) => previous.includes(id) ? previous.filter((item) => item !== id) : [...previous, id]);
    setBrief(""); setError(""); setStatus("");
  }
  function build() {
    if (!fragments.length) { setError("Choose at least one fragment to build a brief."); return; }
    const excerpts = fragments.map((n) => n.body).join("\n\n");
    setBrief(`${intentions[intent].prompt}\n\n${excerpts}\n\nA next step\n${intentions[intent].action}`);
    setStatus(`Brief assembled from ${fragments.length} selected fragments. You can edit it below.`);
  }
  function addNote() {
    if (!draft.trim()) { setError("Write a thought before adding it."); captureRef.current?.focus(); return; }
    const id = Date.now();
    setNotes((previous) => [...previous, { id, title: draft.trim().slice(0, 48), body: draft.trim(), type: "Your note · just now" }]);
    setSelected((previous) => [...previous, id]); setDraft(""); closeCapture(); setBrief(""); setStatus("Your thought is added and selected. Bring it into your next brief.");
  }
  async function copy() {
    try { await navigator.clipboard.writeText(brief); setStatus("Brief copied. Take it wherever you work."); }
    catch { setStatus("Clipboard unavailable. Select the brief text below to copy it manually."); }
  }
  function reset() {
    setNotes(seed); setIntent(0); setSelected(intentions[0].ids); setBrief(""); setCapture(false); setDraft(""); setError(""); setStatus("Demo reset to its sample notes.");
  }

  return <div className={s.page}>
    <a className={s.skip} href="#recall-workbench">Skip to the demo</a>
    <header className={s.header}>
      <a href="#recall-top" className={s.brand} aria-label="RE:CALL home"><AudioLines size={27} aria-hidden="true" /> RE:CALL</a>
      <div className={s.headerLabel}>A SECOND BRAIN, WITH A PLAY BUTTON.</div>
      <button className={s.headerAction} onClick={start}>Try your next thought <ArrowUpRight size={17} aria-hidden="true" /></button>
    </header>
    <main>
      <section id="recall-top" className={s.hero}>
        <div className={s.heroTop}><span className={s.eyebrow}><span /> THE RECALL ROOM</span><span className={s.issue}>SAVE IT. COME BACK DIFFERENT.</span></div>
        <h1>Your mind.<br /><span>With a rewind.</span></h1>
        <div className={s.heroBottom}>
          <p>You already had the beginning of your next great idea.<br className={s.desktopBreak} /> Keep your notes. Bring them together. Pick up the thread.</p>
          <button className={s.primary} onClick={start}>Put a thought in motion <ArrowRight size={21} aria-hidden="true" /></button>
        </div>
        <div className={s.track} aria-label="From collected thoughts to a new idea">
          <div><span>01 / COLLECT</span><strong>“Start with ten people.”</strong></div>
          <div><span>02 / RECALL</span><strong>“Show the rough version.”</strong></div>
          <div className={s.trackResult}><span>03 / MAKE SOMETHING</span><strong>A smaller, better beginning. <CornerDownRight size={24} aria-hidden="true" /></strong></div>
        </div>
      </section>

      <section ref={workspaceRef} id="recall-workbench" className={s.workbench} aria-labelledby="workbench-heading">
        <div className={s.sectionIntro}><div><span className={s.eyebrow}>YOUR NOTES ARE THE STARTING POINT</span><h2 id="workbench-heading">Old thoughts.<br />New possibilities.</h2></div><p>Try a thread. Choose what resonates.<br />Bring the pieces into a brief you can use.</p></div>
        <div className={s.console}>
          <div className={s.consoleBar}><span><AudioLines size={18} aria-hidden="true" /> RE:CALL</span><span>LOCAL DEMO · SAMPLE NOTES</span><button onClick={reset} aria-label="Reset demo"><RotateCcw size={17} aria-hidden="true" /> Reset</button></div>
          <div className={s.intentRow}><span className={s.smallLabel}>WHAT&apos;S ON YOUR MIND?</span><div className={s.intentButtons}>{intentions.map((item, i) => <button ref={i === 0 ? startRef : undefined} key={item.name} aria-pressed={intent === i} className={intent === i ? s.intentActive : ""} onClick={() => choose(i)}>{item.name}<ArrowUpRight size={15} aria-hidden="true" /></button>)}</div></div>
          <div className={s.prompt}><span>↳</span><h3>{intentions[intent].prompt}</h3></div>
          <div className={s.consoleBody}>
            <div className={s.fragmentPane}>
              <div className={s.paneLabel}><span>THE FRAGMENTS</span><span>{selected.length.toString().padStart(2, "0")} SELECTED</span></div>
              <div className={s.noteList}>{notes.map((note) => <button key={note.id} className={`${s.note} ${selected.includes(note.id) ? s.noteSelected : ""}`} aria-pressed={selected.includes(note.id)} onClick={() => toggle(note.id)}>
                <span className={s.check}>{selected.includes(note.id) && <Check size={13} aria-hidden="true" />}</span><span className={s.noteContent}><span className={s.noteType}>{note.type}</span><strong>{note.title}</strong><span>{note.body}</span></span>
              </button>)}</div>
              {capture ? <form className={s.capture} onKeyDown={(event) => { if (event.key === "Escape") { event.preventDefault(); closeCapture(); } }} onSubmit={(event) => { event.preventDefault(); addNote(); }}>
                <label htmlFor="recall-thought">A thought worth keeping</label><textarea autoFocus ref={captureRef} id="recall-thought" value={draft} onChange={(event) => { setDraft(event.target.value); setError(""); }} placeholder="Something you read, noticed, or almost forgot…" maxLength={1000} aria-describedby={error ? "recall-error" : undefined} />
                <div><button type="submit">Add to this thread <Plus size={15} aria-hidden="true" /></button><button type="button" aria-label="Cancel adding a thought" onClick={closeCapture}><X size={17} aria-hidden="true" /></button></div>
              </form> : <button ref={addRef} className={s.addNote} onClick={() => { setCapture(true); setError(""); }}><Plus size={17} aria-hidden="true" /> Bring your own thought</button>}
            </div>
            <div className={s.outputPane}>
              <div className={s.paneLabel}><span>THE NEXT THOUGHT</span><span className={s.signal}>{brief ? "READY TO USE" : "WAITING FOR YOU"}</span></div>
              <div className={s.outputHeading}><span className={s.outputGlyph} aria-hidden="true">↗</span><h3>Something new,<br />from what you know.</h3></div>
              {brief ? <div className={s.brief}><label htmlFor="recall-brief">Your brief · make it yours</label><textarea id="recall-brief" value={brief} onChange={(event) => setBrief(event.target.value)} /><button className={s.copy} onClick={copy}>Copy your brief <ArrowUpRight size={17} aria-hidden="true" /></button></div> : <p className={s.outputHelp}>Your chosen fragments will come together here. Keep the useful bits, edit the rest, and leave with a next step.</p>}
              <div className={s.buildArea}><button className={s.build} onClick={build}>{brief ? "Rebuild from fragments" : "Bring it together"}<ArrowRight size={20} aria-hidden="true" /></button><p>Assembles the notes you select. This preview uses a preset next step; no AI request is made.</p></div>
            </div>
          </div>
          <div className={s.consoleStatus}>{error ? <span id="recall-error" role="alert">{error}</span> : <span role="status">{status || "Select a fragment to include or leave it out. Your changes stay in this session."}</span>}</div>
        </div>
      </section>
      <section className={s.manifesto} aria-labelledby="manifesto-heading"><span className={s.eyebrow}>LESS STARTING OVER. MORE PICKING UP.</span><h2 id="manifesto-heading">Don&apos;t let a good thought<br />be a <span>one-time thing.</span></h2><div className={s.manifestoBottom}><p>A second brain should do more than hold things.<br />It should help you see what you can do with them.</p><button className={s.primary} onClick={start}>Find your next beginning <ArrowRight size={20} aria-hidden="true" /></button></div></section>
    </main>
    <footer className={s.footer}><span>RE:CALL</span><p>A little room for the way your mind works.</p><a href="#recall-top">Back to the top ↑</a></footer>
  </div>;
}
