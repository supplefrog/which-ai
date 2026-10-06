"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useIsPresent, useReducedMotion } from "framer-motion";
import { Search, ArrowDown, CornerDownLeft, Aperture, X } from "lucide-react";
import s from "./IterationFive.module.css";

const notes = [
  {id:0,title:"The walk that untangled the project",category:"Daily notes",date:"Oct 3",tags:["walking","project","attention"],body:"Left the desk with a problem I couldn't name. Halfway through the walk, I realised the project wasn't too big — the next step was too vague.\n\nNext time: write down one question before going outside. Come back with one thing to try.",context:"Captured after a walk along the river."},
  {id:1,title:"Attention is a choice of what to leave out",category:"Reading notes",date:"Sep 28",tags:["attention","reading","focus"],body:"When everything feels equally important, nothing gets enough attention. A useful reading habit: keep one idea from a chapter, then explain it without looking.\n\nMy question: can I apply this to a project brief? One central idea, with everything else in support.",context:"Personal reflection from a reading session."},
  {id:2,title:"Dinner with Maya",category:"Conversations",date:"Sep 22",tags:["people","questions","project"],body:"Maya said she begins a project by asking what she wants someone to feel when they encounter it. Not what it should contain.\n\nI want to remember that distinction for the next workshop.",context:"Conversation note. Names and content are illustrative."},
  {id:3,title:"A room for imperfect work",category:"Ideas",date:"Sep 18",tags:["making","space","workshop"],body:"A shared studio where you bring unfinished work. No slide decks, no polished presentations. Everyone leaves with one small experiment.\n\nCould start with four people around a kitchen table. The room doesn't need to be special. The permission does.",context:"An early workshop idea, kept for later."},
  {id:4,title:"Things I notice when I slow down",category:"Daily notes",date:"Sep 12",tags:["walking","attention","city"],body:"A blue door I must have passed a hundred times. The sound of the little bakery opening. Someone growing tomatoes on the third floor.\n\nWalking without headphones is a different way of reading the city.",context:"Morning observations, written on the way home."},
  {id:5,title:"Start with the smallest possible version",category:"Project notes",date:"Sep 7",tags:["project","making","experiment"],body:"Instead of planning the entire workshop, invite one person and try one exercise.\n\nThe first version only needs to teach me something. Write down what changed after trying it, not whether it was perfect.",context:"Planning note for the shared-studio experiment."},
];

function NoteArticle({children, reduce}: {children: React.ReactNode; reduce: boolean | null}) {
  const present = useIsPresent();
  return <motion.article className={s.article} aria-hidden={!present} inert={!present} initial={{opacity:0,y:reduce?0:12}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:reduce?0:.2}}>{children}</motion.article>;
}

export function PageFive() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [keyboard,setKeyboard] = useState(true);
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
  const tokens=query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const results=notes.filter(note=>tokens.every(token=>`${note.title} ${note.category} ${note.tags.join(" ")} ${note.body}`.toLowerCase().includes(token)));
  const active=results.find(note=>note.id===selected) ?? results[0];
  function tryQuery(value:string) { setQuery(value); setSelected(0); requestFocus("five-query"); }
  return <div className={s.page} data-keyboard={keyboard} onPointerDownCapture={()=>setKeyboard(false)}>
    <a className={s.skip} href="#five-main">Skip to content</a>
    <header className={s.header}><a href="#five-main" className={s.brand}><Aperture size={25} strokeWidth={1.6} aria-hidden="true"/>WhichAI</a><nav aria-label="Page sections"><a href="#five-search">Search the collection</a><a href="#five-remember">Ways to remember</a></nav><span className={s.headerNote}>YOUR NOTES, WITHIN REACH</span></header>
    <main id="five-main"><section className={s.hero}><div><p className={s.eyebrow}>A SECOND BRAIN THAT&apos;S THERE WHEN YOU NEED IT</p><h1>You had<br/>a thought.<br/><span>It&apos;s still here.</span></h1></div><div className={s.heroRight}><div className={s.signal} aria-hidden="true"><i/><i/><i/><span/></div><p>A sentence from a book. A conversation after dinner. The idea you wrote down on a walk.</p><p>WhichAI gives what you keep a place to be found again.</p><a href="#five-search">Find something in the example collection <ArrowDown size={18} aria-hidden="true"/></a></div></section>
      <section id="five-search" className={s.finder} aria-labelledby="five-finder-title"><div className={s.finderHead}><h2 id="five-finder-title">What do you remember?</h2><p>Search six illustrative notes by words, topics, or phrases.<br/>This demo searches text locally; it doesn&apos;t generate an answer.</p></div><form className={s.searchForm} onSubmit={e=>e.preventDefault()}><label htmlFor="five-query">Search the example collection</label><div className={s.searchField}><Search size={26} aria-hidden="true"/><input id="five-query" type="search" autoComplete="off" placeholder="Try “attention” or “project”" value={query} onChange={e=>setQuery(e.target.value)}/>{query && <button type="button" onClick={()=>{setQuery("");requestFocus("five-query");}} aria-label="Clear search"><X size={20} aria-hidden="true"/></button>}</div></form><div className={s.resultMeta}><p role="status">{results.length} {results.length===1?"note":"notes"}{query.trim()?` matching “${query.trim()}”`:" in the example collection"}</p><span>Select a result to read it.</span></div>
        <div className={s.resultsLayout}><div className={s.resultList}>{results.length?results.map(note=><button id={`five-result-${note.id}`} key={note.id} className={`${s.result} ${active?.id===note.id?s.selected:""}`} onClick={()=>{setSelected(note.id);if(window.matchMedia("(max-width: 800px)").matches)requestFocus("five-reader");}} aria-pressed={active?.id===note.id}><div><span>{note.category}</span><time>{note.date}</time></div><h3>{note.title}</h3><p>{note.body.split("\n")[0]}</p><span className={s.resultAction}>{active?.id===note.id?"Reading this note":"Read note"}<CornerDownLeft size={14} aria-hidden="true"/></span></button>):<div className={s.empty}><Search size={32} aria-hidden="true"/><h3>No note found yet.</h3><p>Try a shorter phrase, or a topic such as walking, making, or people.</p><button onClick={()=>{setQuery("");requestFocus("five-query");}}>Show all example notes</button></div>}</div><aside id="five-reader" tabIndex={-1} className={s.reader} aria-label="Selected note"><div className={s.readerLabel}><span className={s.liveDot} aria-hidden="true"/>FROM YOUR COLLECTION<span>EXAMPLE</span></div><div className={s.readStage}><AnimatePresence initial={false}>{active?<NoteArticle key={active.id} reduce={reduce}><div className={s.articleMeta}>{active.category} / {active.date}</div><h3>{active.title}</h3><p className={s.body}>{active.body}</p><div className={s.context}><span>THE CONTEXT</span><p>{active.context}</p></div><div className={s.tags} aria-label="Topics">{active.tags.map(tag=><span key={tag}>{tag}</span>)}</div></NoteArticle>:<div className={s.noSelection}><p>The right thought might be another word away.</p></div>}</AnimatePresence></div><button className={s.returnToResults} onClick={()=>requestFocus(active ? `five-result-${active.id}` : "five-query")}>Back to results</button></aside></div>
      </section>
      <section className={s.remember} id="five-remember"><div><p className={s.eyebrow}>MEMORY ISN&apos;T A FILING CABINET</p><h2>You might remember<br/>the idea.<br/>Or just the walk.</h2><p>You don&apos;t have to remember the title of a note. Start with a word from the moment, then follow it back to what you kept.</p></div><div className={s.prompts}><button onClick={()=>tryQuery("walking")}><span>THE MOMENT</span><strong>“It was on a walk.”</strong><p>Find notes that mention walking.</p></button><button onClick={()=>tryQuery("attention")}><span>THE TOPIC</span><strong>“Something about attention.”</strong><p>Find that idea across different notes.</p></button><button onClick={()=>tryQuery("workshop")}><span>THE NEXT THING</span><strong>“For the workshop.”</strong><p>Return to the project that&apos;s taking shape.</p></button></div></section>

    </main><footer className={s.footer}><strong>WhichAI</strong><span>Keep it within reach.</span><a href="#five-main">Back to top</a></footer>
  </div>;
}
