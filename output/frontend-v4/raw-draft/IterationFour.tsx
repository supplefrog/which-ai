"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { ArrowDown, Bookmark, Check, CornerDownRight, Plus, RotateCcw } from "lucide-react";
import s from "./iteration-four.module.css";

const memories = [
  { year: "2022", date: "October 18, 2022", title: "Leave a little room.", body: "The best part of the trip was the afternoon we didn't plan. Maybe an empty space on the calendar isn't a space to fill.", tag: "A thought from the train", connection: "You’re planning your next long weekend.", question: "What would you leave unplanned this time?" },
  { year: "2023", date: "June 4, 2023", title: "Small is a way to begin.", body: "I keep waiting for enough time to make something big. Today I drew for ten minutes. That counted.", tag: "After a Sunday walk", connection: "You’ve been thinking about making time for art.", question: "What could you make in ten minutes today?" },
  { year: "2024", date: "March 12, 2024", title: "Ask the better question.", body: "Instead of asking what I should do, try asking what I would be curious to learn. One opens a door. The other writes a to-do list.", tag: "From the reading notebook", connection: "You’re deciding what to learn next.", question: "What are you curious about right now?" },
];

export function PageFour() {
  const [active, setActive] = useState(1);
  const [kept, setKept] = useState<number[]>([]);
  const [reflection, setReflection] = useState("");
  const [replies, setReplies] = useState<Record<number, string>>({});
  const [error, setError] = useState("");
  const [status, setStatus] = useState("A thought from June 2023 is open. Choose a year to revisit another.");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const current = memories[active];

  function revisit(index: number) {
    if (index === active) return;
    setActive(index);
    setReflection("");
    setError("");
    setStatus(`Opened ${memories[index].title} from ${memories[index].date}.`);
  }

  function keep() {
    const saved = kept.includes(active);
    setKept((items) => saved ? items.filter((item) => item !== active) : [...items, active]);
    setStatus(saved ? `Removed “${current.title}” from your revisit shelf.` : `“${current.title}” is on your revisit shelf. You can open it below.`);
  }

  function reply(event: React.FormEvent) {
    event.preventDefault();
    if (!reflection.trim()) {
      setError("Add a thought before connecting it to this memory.");
      inputRef.current?.focus();
      return;
    }
    setReplies((items) => ({ ...items, [active]: reflection.trim() }));
    setReflection("");
    setError("");
    setStatus(`Today's thought is connected to “${current.title}”. It stays in this preview tab.`);
  }

  function reset() {
    setActive(1); setKept([]); setReplies({}); setReflection(""); setError("");
    setStatus("Example reset. The thought from June 2023 is open again.");
  }

  return <MotionConfig reducedMotion="user"><div className={s.page}>
    <a className={s.skip} href="#again-main">Skip to content</a>
    <header className={s.header}>
      <a className={s.brand} href="#again-main" aria-label="Again home"><span className={s.brandSymbol} aria-hidden="true">a</span>again</a>
      <nav aria-label="Again navigation"><a href="#again-revisit">Revisit a thought</a><a href="#again-shelf">Your shelf</a></nav>
      <span className={s.headerNote}>A little space for your mind.</span>
    </header>
    <main id="again-main">
      <section className={s.hero} aria-labelledby="again-title">
        <div className={s.intro}>
          <span className={s.eyebrow}><span aria-hidden="true" /> NOTES THAT COME BACK TO YOU</span>
          <h1 id="again-title">Good thoughts<br />deserve<br /><em>another day.</em></h1>
          <p>Your mind moves on. Your notes don’t have to stay behind. Again is a second brain for remembering what still matters.</p>
          <a className={s.heroLink} href="#again-revisit">Meet an earlier version of you <ArrowDown size={18} /></a>
          <div className={s.littleOrbit} aria-hidden="true"><span>then</span><i /><span>now</span></div>
        </div>
        <div id="again-revisit" className={s.memoryExperience}>
          <div className={s.revisitLabel}><span>A NOTE WORTH ANOTHER LOOK</span><span>Illustrative notebook</span></div>
          <div className={s.timeline} role="group" aria-label="Choose a year to revisit">
            {memories.map((memory, index) => <button key={memory.year} className={active === index ? s.activeYear : ""} aria-pressed={active === index} onClick={() => revisit(index)}><span>{memory.year}</span><i aria-hidden="true" /></button>)}
            <span className={s.timelineNow}>today <span aria-hidden="true">●</span></span>
          </div>
          <div className={s.memoryStage}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.article key={active} className={s.memoryCard} initial={{ opacity: 0, y: 14, rotate: 1 }} animate={{ opacity: 1, y: 0, rotate: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.19 }} aria-labelledby="again-memory-title">
                <div className={s.memoryMeta}><time>{current.date}</time><span className={s.cornerFlower} aria-hidden="true">✳</span></div>
                <h2 id="again-memory-title">{current.title}</h2>
                <p>{current.body}</p>
                <div className={s.memoryBottom}><span>{current.tag}</span><button aria-pressed={kept.includes(active)} className={kept.includes(active) ? s.keptButton : ""} onClick={keep}>{kept.includes(active) ? <Check size={15} /> : <Bookmark size={15} />} {kept.includes(active) ? "On your shelf" : "Keep for later"}</button></div>
              </motion.article>
            </AnimatePresence>
          </div>
          <div className={s.todayCard}>
            <div className={s.todayLabel}><CornerDownRight size={17} /><span>BACK TO TODAY</span></div>
            <p className={s.connection}>{current.connection}</p>
            {replies[active] && <div className={s.reply}><span>Your connected thought</span><p>{replies[active]}</p><button onClick={() => { setReflection(replies[active]); inputRef.current?.focus(); setStatus("Your connected thought is ready to edit."); }}>Edit thought</button></div>}
            <form onSubmit={reply} noValidate>
              <label htmlFor="again-reflection">{current.question}</label>
              <div className={s.reflectionRow}><textarea id="again-reflection" ref={inputRef} rows={2} maxLength={500} value={reflection} onChange={(event) => { setReflection(event.target.value); if (error) setError(""); }} placeholder="A thought for today…" aria-invalid={!!error} aria-describedby={error ? "again-reflection-error" : "again-preview-limit"} /><button type="submit" aria-label={replies[active] ? "Update connected thought" : "Connect today's thought"}><Plus size={21} /></button></div>
              {error && <p id="again-reflection-error" className={s.error} role="alert">{error}</p>}
            </form>
          </div>
          <p id="again-preview-limit" className={s.previewLimit}>Try the notebook. Changes stay in this tab.</p>
        </div>
      </section>

      <section id="again-shelf" className={s.shelfSection} aria-labelledby="again-shelf-title">
        <div className={s.shelfHeading}><div><span className={s.eyebrow}>MAKE ROOM FOR A RETURN</span><h2 id="again-shelf-title">Your revisit shelf.</h2></div><button className={s.reset} onClick={reset}><RotateCcw size={14} /> Reset notebook</button></div>
        <div className={s.shelf}>
          <AnimatePresence initial={false}>
            {kept.length === 0 ? <motion.div key="empty" className={s.emptyShelf} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Bookmark size={25} strokeWidth={1.3} /><p>Some thoughts are worth keeping close.</p><span>Choose “Keep for later” on a note above. It’ll find a home here.</span></motion.div> : kept.map((index) => <motion.button layout key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.18 }} className={s.shelfNote} onClick={() => { revisit(index); document.getElementById("again-revisit")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }); }}><span>{memories[index].date}</span><strong>{memories[index].title}</strong><span className={s.openNote}>Open note</span></motion.button>)}
          </AnimatePresence>
        </div>
        <p className={s.status} role="status" aria-live="polite">{status}</p>
      </section>

      <section className={s.manifesto} aria-labelledby="again-manifesto-title"><div className={s.manifestoSymbol} aria-hidden="true">↶</div><h2 id="again-manifesto-title">Not everything new<br />needs to be <em>new.</em></h2><p>A sentence you saved. A question you left open. A small reminder of how you saw the world. Your notes can be a conversation across time, rather than another place to put things.</p></section>
    </main>
    <footer className={s.footer}><a className={s.footerBrand} href="#again-main">again</a><span>Keep a thought. Meet it again.</span><span>Concept preview</span></footer>
  </div></MotionConfig>;
}
