"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, Plus, X } from "lucide-react";
import s from "./iteration-three.module.css";

type Thought = { id: number; kind: string; text: string };
const seeds: Thought[] = [
  { id: 1, kind: "A passing thought", text: "A neighborhood dinner where nobody has to host alone." },
  { id: 2, kind: "From a conversation", text: "People don't need another event. They need a reason to see each other again." },
  { id: 3, kind: "Something to try", text: "Start with six people, one shared table, and a standing invitation." },
];

export function PageThree() {
  const [thoughts, setThoughts] = useState(seeds);
  const [selected, setSelected] = useState<number[]>([1, 3]);
  const [capture, setCapture] = useState("");
  const [captureError, setCaptureError] = useState("");
  const [brief, setBrief] = useState("A recurring neighborhood dinner.\n\nStart small: six people, one shared table, and a standing invitation. Share the hosting so the gathering can keep going.");
  const [assembled, setAssembled] = useState(false);
  const [status, setStatus] = useState("Two thoughts selected. Make a draft to bring them together.");
  const [revision, setRevision] = useState(0);
  const captureRef = useRef<HTMLInputElement>(null);
  const workbenchRef = useRef<HTMLElement>(null);

  function toggle(id: number) {
    const next = selected.includes(id) ? selected.filter((n) => n !== id) : [...selected, id];
    setSelected(next);
    setStatus(next.length ? `${next.length} ${next.length === 1 ? "thought" : "thoughts"} selected. Your existing draft is unchanged until you make a new one.` : "No thoughts selected. Choose a thought to make a draft.");
  }

  function addThought(event: React.FormEvent) {
    event.preventDefault();
    if (!capture.trim()) {
      setCaptureError("Write a thought first. A few words are enough.");
      captureRef.current?.focus();
      return;
    }
    const id = Date.now();
    setThoughts((items) => [...items, { id, kind: "Your thought", text: capture.trim() }]);
    setSelected((ids) => [...ids, id]);
    setCapture("");
    setCaptureError("");
    setStatus("Your thought was added and selected. Make a draft to include it.");
  }

  function assemble() {
    const picked = thoughts.filter((thought) => selected.includes(thought.id));
    if (!picked.length) return;
    const startingPoint = picked.map((thought) => thought.text).join("\n\n");
    setBrief(`WORKING IDEA\n\n${startingPoint}\n\nNEXT STEP\nWhat is the smallest version you could try this week?`);
    setAssembled(true);
    setRevision((value) => value + 1);
    setStatus(`Draft made from ${picked.length} ${picked.length === 1 ? "thought" : "thoughts"}. Edit it in the draft area. This demonstration arranges your words; it does not use AI.`);
  }

  function reset() {
    setThoughts(seeds);
    setSelected([1, 3]);
    setCapture("");
    setCaptureError("");
    setBrief("A recurring neighborhood dinner.\n\nStart small: six people, one shared table, and a standing invitation. Share the hosting so the gathering can keep going.");
    setAssembled(false);
    setRevision((value) => value + 1);
    setStatus("Example reset. Two thoughts selected.");
  }

  return <MotionConfig reducedMotion="user"><div className={s.page}>
    <a className={s.skip} href="#draft-main">Skip to content</a>
    <header className={s.header}>
      <a className={s.brand} href="#draft-main" aria-label="Draft home"><span className={s.brandMark} aria-hidden="true">d.</span>draft</a>
      <nav aria-label="Draft navigation"><a href="#draft-workbench">The workbench</a><a href="#draft-method">The idea</a></nav>
      <button className={s.headerAction} onClick={() => { workbenchRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }); captureRef.current?.focus({ preventScroll: true }); }}>Put a thought down <Plus size={17} /></button>
    </header>

    <main id="draft-main">
      <section className={s.hero} aria-labelledby="draft-title">
        <div className={s.heroTop}><span className={s.eyebrow}>YOUR SECOND BRAIN, WITH A FIRST MOVE.</span><span className={s.heroNote}>For the things you haven’t made yet.</span></div>
        <h1 id="draft-title">Make something<br />of your <span>thoughts.</span></h1>
        <div className={s.heroBottom}><p>A place for the scraps, sparks, and half-formed ideas.<br className={s.desktopBreak} /> Bring them together. Find what comes next.</p><a className={s.jump} href="#draft-workbench">Try it with a few thoughts <ArrowDown size={20} /></a></div>
      </section>

      <section id="draft-workbench" ref={workbenchRef} className={s.workbench} aria-labelledby="draft-workbench-title">
        <div className={s.workbenchHeader}><h2 id="draft-workbench-title">A little idea, taking shape.</h2><span className={s.demoPill}>Interactive example · stays in this tab</span></div>
        <div className={s.workspace}>
          <div className={s.sourcePane}>
            <div className={s.paneLabel}><span>THE RAW MATERIAL</span><span>{thoughts.length} thoughts</span></div>
            <div className={s.thoughts}>
              <AnimatePresence initial={false}>
                {thoughts.map((thought) => <motion.button key={thought.id} layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} className={`${s.thought} ${selected.includes(thought.id) ? s.chosen : ""}`} aria-pressed={selected.includes(thought.id)} onClick={() => toggle(thought.id)}>
                  <span className={s.thoughtType}>{thought.kind}<span className={s.selectMark}>{selected.includes(thought.id) ? <Check size={15} aria-label="Selected" /> : <Plus size={15} aria-hidden="true" />}</span></span>
                  <span className={s.thoughtText}>{thought.text}</span>
                </motion.button>)}
              </AnimatePresence>
            </div>
            <form className={s.capture} onSubmit={addThought} noValidate>
              <label htmlFor="draft-capture">Add your own raw material</label>
              <div className={s.inputRow}><input id="draft-capture" ref={captureRef} value={capture} onChange={(e) => { setCapture(e.target.value); if (captureError) setCaptureError(""); }} placeholder="An idea you keep coming back to…" maxLength={300} aria-invalid={!!captureError} aria-describedby={captureError ? "draft-capture-error" : undefined} /><button type="submit" aria-label="Add thought"><Plus size={21} /></button></div>
              {captureError && <p id="draft-capture-error" className={s.error} role="alert">{captureError}</p>}
            </form>
          </div>
          <div className={s.draftPane}>
            <div className={s.paneLabel}><span>ROOM TO MAKE SOMETHING</span><span className={s.draftState}>{assembled ? <><Check size={14} /> Assembled</> : "Example draft"}</span></div>
            <div className={s.draftTitle}><span className={s.paperclip} aria-hidden="true">✳</span><h3>The neighborhood<br />table</h3></div>
            <div className={s.draftEditor} key={revision}><label htmlFor="draft-output">Your working draft</label><textarea id="draft-output" value={brief} onChange={(e) => { setBrief(e.target.value); setStatus("Draft edited. Your changes stay in this tab."); }} spellCheck={false} /></div>
            <div className={s.draftControls}><button className={s.makeButton} disabled={selected.length === 0} onClick={assemble}>Make a draft <ArrowUpRight size={22} /></button><span>{selected.length} selected</span></div>
          </div>
        </div>
        <div className={s.workbenchFooter}><p role="status" aria-live="polite">{status}</p><button onClick={reset}><X size={14} /> Reset example</button></div>
      </section>

      <section id="draft-method" className={s.method} aria-labelledby="draft-method-title">
        <div><span className={s.eyebrow}>LESS FILING. MORE MAKING.</span><h2 id="draft-method-title">A thought doesn’t have<br />to be finished to be useful.</h2></div>
        <div className={s.methodBody}><p>Save the sentence from your walk. The question after a meeting. The thing you can’t quite explain.</p><p>Then gather what belongs together and give it a direction. A plan, a letter, a project. Something that exists outside your head.</p><span className={s.methodStamp}>Your words.<br />Your next move.</span></div>
      </section>
    </main>
    <footer className={s.footer}><span className={s.footerBrand}>draft</span><p>A second brain for work in progress.</p><span>Concept preview</span></footer>
  </div></MotionConfig>;
}
