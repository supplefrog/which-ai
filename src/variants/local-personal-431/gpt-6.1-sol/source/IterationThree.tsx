"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useIsPresent, useReducedMotion } from "framer-motion";
import { Feather, ArrowDown, CalendarDays, RotateCcw } from "lucide-react";
import s from "./IterationThree.module.css";

const initialDays = [
  { day: "Monday", date: "Oct 5", title: "Leave room for the unexpected", text: "Took the long way home. The best part of the day wasn't on the list.", theme: "Attention" },
  { day: "Tuesday", date: "Oct 6", title: "A smaller starting point", text: "The project feels less intimidating when I write the next step instead of the whole plan.", theme: "Making" },
  { day: "Wednesday", date: "Oct 7", title: "A conversation to keep", text: "Maya asked: what would this look like if it were easy? I want to try that question again.", theme: "People" },
  { day: "Thursday", date: "Oct 8", title: "Make something before lunch", text: "A rough sketch revealed what a week of thinking didn't. More small experiments, fewer perfect plans.", theme: "Making" },
];

function JournalEntry({children, reduce}: {children: React.ReactNode; reduce: boolean | null}) {
  const present = useIsPresent();
  return <motion.article className={s.entry} aria-hidden={!present} inert={!present} initial={{opacity:0,y:reduce ? 0 : 12}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:reduce ? 0 : .2}}>{children}</motion.article>;
}

export function PageThree() {
  const [days, setDays] = useState(initialDays);
  const [active, setActive] = useState(1);
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState("");
  const [keyboard, setKeyboard] = useState(true);
  useEffect(() => {
    function keyboardInput(event: KeyboardEvent) {
      if (["Tab", "Enter", " ", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown", "Escape"].includes(event.key)) setKeyboard(true);
    }
    document.addEventListener("keydown", keyboardInput, true);
    return () => document.removeEventListener("keydown", keyboardInput, true);
  }, []);
  const reduce = useReducedMotion();
  const [focusTarget, setFocusTarget] = useState<{id:string; reduce:boolean} | null>(null);
  useEffect(() => {
    if (!focusTarget) return;
    const target = document.getElementById(focusTarget.id);
    target?.focus({ preventScroll: true });
    target?.scrollIntoView({ behavior: focusTarget.reduce ? "auto" : "smooth", block: "center" });
  }, [focusTarget]);
  function requestFocus(id:string) { setFocusTarget({ id, reduce: Boolean(reduce) }); }
  const day = days[active];
  function save(e: React.FormEvent) {
    e.preventDefault();
    if (!draft.trim()) { setStatus("Write a thought before adding it."); return; }
    setDays(prev => prev.map((item, i) => i === active ? { ...item, text: `${item.text}\n\n${draft.trim()}` } : item));
    setDraft(""); setStatus(`Added to ${day.day}. It will stay here until you leave or reload this page.`);
  }
  return <div className={s.page} data-keyboard={keyboard} onPointerDownCapture={() => setKeyboard(false)}>
    <a className={s.skip} href="#three-main">Skip to content</a>
    <header className={s.header}><a className={s.brand} href="#three-main"><Feather size={24} aria-hidden="true"/>WhichAI</a><nav aria-label="Page sections"><a href="#three-journal">Your days</a><a href="#three-review">The bigger picture</a></nav><a className={s.topAction} href="#three-journal">Open the journal</a></header>
    <main id="three-main">
      <section className={s.hero} aria-labelledby="three-title"><div className={s.intro}><p className={s.eyebrow}>A SECOND BRAIN, ONE DAY AT A TIME</p><h1 id="three-title">Your life has<br/>a lot to say.</h1><div className={s.introBottom}><p>Give it somewhere to land. A home for the passing thoughts, small discoveries, and days you want to remember.</p><a href="#three-journal" className={s.roundLink} aria-label="Explore the journal demo"><ArrowDown aria-hidden="true"/></a></div></div><div className={s.heroAside}><span className={s.month}>OCTOBER</span><div className={s.largeDay}>07<span>WEDNESDAY</span></div><p>Some things make sense<br/>only when you look back.</p><div className={s.petal} aria-hidden="true"><i/><i/><i/><i/></div></div></section>
      <section id="three-journal" className={s.journal} aria-labelledby="three-journal-title"><div className={s.sectionHead}><div><p className={s.eyebrow}>THE DAILY THREAD</p><h2 id="three-journal-title">A little of your week.</h2></div><p>Illustrative journal. Choose a day and add a thought.<br/>Changes last only on this page.</p></div>
        <div className={s.days} aria-label="Choose a journal day">{days.map((item,i) => <button id={`three-day-${i}`} key={item.day} className={`${s.day} ${active === i ? s.activeDay : ""}`} aria-pressed={active === i} onClick={() => { setActive(i); setStatus(""); }}><span>{item.day}</span><strong>{item.date}</strong><span className={s.dayDot} aria-hidden="true"/></button>)}</div>
        <div className={s.journalBody}><div className={s.reading}><div className={s.readMeta}><CalendarDays size={18} aria-hidden="true"/><span>{day.day}, {day.date}</span><span className={s.tag}>{day.theme}</span></div><div className={s.readStage}><AnimatePresence initial={false}>{<JournalEntry key={active + day.text} reduce={reduce}><h3>{day.title}</h3><p>{day.text}</p></JournalEntry>}</AnimatePresence></div></div><form className={s.capture} onSubmit={save}><label htmlFor="three-thought">What else happened?</label><textarea id="three-thought" value={draft} maxLength={1200} onChange={e=>setDraft(e.target.value)} placeholder="A moment. An idea. Something someone said." rows={4}/><button type="submit">Add to {day.day}</button><p role="status" className={s.status}>{status || "You don't need a finished thought. Just a place to start."}</p></form></div>
      </section>
      <section id="three-review" className={s.review} aria-labelledby="three-review-title"><div className={s.reviewIntro}><p className={s.eyebrow}>LOOK BACK, MOVE FORWARD</p><h2 id="three-review-title">Ordinary days.<br/>Recurring ideas.</h2><p>Your journal isn&apos;t a streak to maintain. It&apos;s material to return to. Read across a week and notice what keeps coming back.</p><button className={s.reset} onClick={()=>{setDays(initialDays);setActive(1);setDraft("");setStatus("Example journal restored.");}}><RotateCcw size={16} aria-hidden="true"/>Restore example journal</button></div><div className={s.week}>{days.map((item,i)=><button className={s.reviewRow} key={item.day} onClick={()=>{setActive(i); requestFocus(`three-day-${i}`);}}><span>{item.day.slice(0,3)}</span><div><strong>{item.title}</strong><p>{item.text}</p></div><span className={s.reviewTheme}>{item.theme}</span></button>)}</div></section>

    </main><footer className={s.footer}><span>WhichAI</span><span>A place for your days.</span><a href="#three-main">Back to the beginning</a></footer>
  </div>;
}
