"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowDown, ArrowUpRight, BookOpen, Lightbulb, Plus, Search, Sparkles, Sprout, X } from "lucide-react";
import s from "./iteration-five.module.css";

type Area = "Ideas" | "Reading" | "Everyday";
type Thought = { id: number; area: Area; title: string; body: string; source: string };
const samples: Thought[] = [
  { id: 1, area: "Ideas", title: "Leave space for the unexpected.", body: "What if the best part of a project is the part you didn’t plan? Keep a little room in the brief for something surprising.", source: "A thought on the train" },
  { id: 2, area: "Reading", title: "Attention is a kind of care.", body: "The things we notice become the things we remember. A good book changes what we pay attention to long after we close it.", source: "From my reading journal" },
  { id: 3, area: "Everyday", title: "Make a Sunday list.", body: "A walk without headphones. Something new for dinner. Call someone just because. Small things make a day feel like your own.", source: "A reminder to myself" },
];
const areas: { name: Area; Icon: typeof Lightbulb; hint: string }[] = [
  { name: "Ideas", Icon: Lightbulb, hint: "The what-ifs" },
  { name: "Reading", Icon: BookOpen, hint: "The good bits" },
  { name: "Everyday", Icon: Sprout, hint: "The little things" },
];

export function PageFive() {
  const [thoughts, setThoughts] = useState<Thought[]>(samples);
  const [area, setArea] = useState<Area>("Ideas");
  const [selectedId, setSelectedId] = useState(1);
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState("");
  const [draftArea, setDraftArea] = useState<Area>("Ideas");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const draftRef = useRef<HTMLTextAreaElement>(null);
  const selected = thoughts.find((thought) => thought.id === selectedId) ?? thoughts[0];
  const visible = thoughts.filter((thought) => `${thought.title} ${thought.body} ${thought.area}`.toLowerCase().includes(query.trim().toLowerCase()));

  function selectArea(next: Area) {
    setArea(next);
    const thought = thoughts.find((item) => item.area === next);
    if (thought) setSelectedId(thought.id);
    setStatus(`${next} selected.`);
  }

  function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = draft.trim();
    if (!body) {
      setError("Write a thought before adding it to your orbit.");
      draftRef.current?.focus();
      return;
    }
    const thought = { id: Date.now(), area: draftArea, title: body.split(/[.!?\n]/)[0].slice(0, 72) || "A new thought", body, source: "Just added by you" };
    setThoughts((items) => [thought, ...items]);
    setSelectedId(thought.id);
    setArea(draftArea);
    setQuery("");
    setDraft("");
    setError("");
    setStatus(`Thought added to ${draftArea}. It’s now in your collection below.`);
  }

  function reset() {
    setThoughts(samples);
    setArea("Ideas");
    setSelectedId(1);
    setQuery("");
    setDraft("");
    setError("");
    setStatus("Demo reset. The three example thoughts are back.");
  }

  return (
    <div className={s.page}>
      <a className={s.skip} href="#orbit-main">Skip to content</a>
      <header className={s.header}>
        <a className={s.brand} href="#orbit-main" aria-label="Orbit home"><span className={s.brandMark} aria-hidden="true" />orbit<span className={s.brandDot}>.</span></a>
        <span className={s.headerNote}>A home for your thoughts</span>
        <a className={s.headerLink} href="#orbit-playground">Take a look inside <ArrowUpRight size={17} aria-hidden="true" /></a>
      </header>
      <main id="orbit-main">
        <section className={s.hero} aria-labelledby="orbit-title">
          <div className={s.heroCopy}>
            <span className={s.eyebrow}><span aria-hidden="true" /> Your personal second brain</span>
            <h1 id="orbit-title">Your mind has<br />room to <span>wander.</span></h1>
            <p>Give your ideas, discoveries, and everyday notes a place to land. Find them again when you need a little inspiration.</p>
            <a className={s.primary} href="#orbit-playground">Try your own orbit <ArrowDown size={18} aria-hidden="true" /></a>
            <span className={s.demoNote}>An open little demo. No sign-up needed.</span>
          </div>
          <div className={s.orbit} aria-label="Explore the three areas of your second brain">
            <div className={s.orbitRing} aria-hidden="true" />
            <div className={s.orbitInner} aria-hidden="true" />
            <span className={s.starOne} aria-hidden="true">✳</span><span className={s.starTwo} aria-hidden="true">✦</span>
            <div className={s.centerThought} key={selected.id}>
              <span className={s.centerLabel}>{selected.area} in your orbit</span>
              <h2>{selected.title}</h2>
              <p>{selected.body}</p>
              <span className={s.thoughtSource}>{selected.source}</span>
            </div>
            {areas.map(({ name, Icon, hint }, index) => (
              <button key={name} className={`${s.planet} ${s[`planet${index}`]} ${area === name ? s.activePlanet : ""}`} onClick={() => selectArea(name)} aria-pressed={area === name}>
                <span className={s.planetIcon}><Icon size={25} strokeWidth={1.6} aria-hidden="true" /></span>
                <strong>{name}</strong><span>{hint}</span>
              </button>
            ))}
          </div>
        </section>
        <div className={s.breath}><span>For the thought you almost forgot.</span><span>And the one you’ll come back to.</span><Sparkles size={20} aria-hidden="true" /></div>
        <section className={s.playground} id="orbit-playground" aria-labelledby="orbit-play-title">
          <div className={s.playIntro}><span className={s.eyebrow}>A little space to think</span><h2 id="orbit-play-title">Catch a thought.<br />Keep it close.</h2><p>Try adding a note, then find it in your collection. This is your space to play.</p></div>
          <div className={s.playSurface}>
            <form className={s.composer} onSubmit={save} noValidate>
              <div className={s.composerHeading}><label htmlFor="orbit-draft">What’s on your mind?</label><span aria-hidden="true">✳</span></div>
              <textarea ref={draftRef} id="orbit-draft" value={draft} onChange={(event) => { setDraft(event.target.value); if (error) setError(""); }} placeholder="An idea. A lovely sentence. Something to remember…" maxLength={600} aria-invalid={!!error} aria-describedby={error ? "orbit-draft-error" : "orbit-draft-help"} />
              <span className={s.inputHelp} id="orbit-draft-help">Up to 600 characters. Yours to keep for this visit.</span>
              {error && <p className={s.error} id="orbit-draft-error" role="alert">{error}</p>}
              <div className={s.composerBottom}><label className={s.areaSelect}>Keep in <select value={draftArea} onChange={(event) => setDraftArea(event.target.value as Area)}>{areas.map(({ name }) => <option key={name}>{name}</option>)}</select></label><button className={s.addButton} type="submit"><Plus size={17} aria-hidden="true" /> Add thought</button></div>
            </form>
            <div className={s.collection}>
              <div className={s.collectionTop}><h3>Your collection <span>{thoughts.length}</span></h3><button className={s.reset} type="button" onClick={reset}>Reset demo</button></div>
              <label className={s.search}><Search size={18} aria-hidden="true" /><span className={s.visuallyHidden}>Find a thought</span><input type="search" placeholder="Find a thought…" value={query} onChange={(event) => setQuery(event.target.value)} />{query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search"><X size={16} aria-hidden="true" /></button>}</label>
              <div className={s.thoughtList}>{visible.length ? visible.map((thought) => <button type="button" key={thought.id} className={`${s.thoughtRow} ${thought.id === selectedId ? s.selectedRow : ""}`} aria-pressed={thought.id === selectedId} onClick={() => { setSelectedId(thought.id); setArea(thought.area); setStatus(`Opened ${thought.title}.`); }}><span className={s.rowDot} aria-hidden="true" /><span><strong>{thought.title}</strong><small>{thought.area} · {thought.source}</small></span><span className={s.rowAction}>{thought.id === selectedId ? "Open" : "Read"}</span></button>) : <div className={s.empty}><Sprout size={25} aria-hidden="true" /><p>No thoughts found for “{query}”.</p><button onClick={() => setQuery("")} type="button">Show all thoughts</button></div>}</div>
              <article className={s.reading} aria-label="Selected thought"><span>{selected.area}</span><h4>{selected.title}</h4><p>{selected.body}</p></article>
            </div>
          </div>
          <p className={s.status} role="status">{status || "Example notes are here to get you started. Changes stay in this demo until you leave or reset."}</p>
        </section>
        <section className={s.endnote} aria-labelledby="orbit-end-title"><span className={s.endMark} aria-hidden="true">✳</span><h2 id="orbit-end-title">Not everything needs<br />to become something.<br /><span>Some things are worth keeping.</span></h2><p>A half-formed idea. A line from a book. The name of that little café.<br />There’s room for all of it.</p></section>
      </main>
      <footer className={s.footer}><span className={s.footerBrand}>orbit.</span><span>A second brain. A little more headspace.</span><a href="#orbit-main">Back to the top</a></footer>
    </div>
  );
}
