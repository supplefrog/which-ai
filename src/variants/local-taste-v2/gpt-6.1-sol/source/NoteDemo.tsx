"use client";
import { useState } from "react";
import { ArrowUpRight, Check, NotePencil, MagnifyingGlass } from "@phosphor-icons/react";
import s from "./designs.module.css";

export function NoteDemo({ brand }: { brand: string }) {
  const [notes, setNotes] = useState([{ title: "An idea worth keeping", body: "Good ideas rarely arrive on schedule. Give them a place to land." }]);
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);
  return <section id="try" className={s.demo} aria-label={`Try ${brand}`}>
    <div className={s.demoIntro}><NotePencil size={32} weight="regular" /><h2>A little space for your next idea.</h2><p>Try the notebook here. Your sample notes stay on this page.</p></div>
    <div className={s.notebook}>
      <div className={s.savedNotes}><label htmlFor={`${brand}-search`}>Find a note</label><div className={s.search}><MagnifyingGlass size={18} /><input id={`${brand}-search`} value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search your ideas" /></div><div className={s.noteList}>{notes.filter(n=>(n.title+n.body).toLowerCase().includes(query.toLowerCase())).map((n,i)=><article key={i}><h3>{n.title}</h3><p>{n.body}</p></article>)}{!notes.some(n=>(n.title+n.body).toLowerCase().includes(query.toLowerCase()))&&<p>No matching notes. Try another word.</p>}</div></div>
      <form onSubmit={e=>{e.preventDefault();if(!title.trim()||!body.trim()){setError("Add a title and a thought before saving.");return;}setNotes([{title:title.trim(),body:body.trim()},...notes]);setTitle("");setBody("");setError("");setSaved(true);}}>
        <label htmlFor={`${brand}-title`}>A title for your thought</label><input id={`${brand}-title`} value={title} onChange={e=>{setTitle(e.target.value);setSaved(false);}} placeholder="What is on your mind?" />
        <label htmlFor={`${brand}-body`}>Your note</label><textarea id={`${brand}-body`} value={body} onChange={e=>{setBody(e.target.value);setSaved(false);}} placeholder="Start anywhere. You can make sense of it later." rows={4} />
        <p className={s.formMessage} role="status">{error || (saved ? "Your idea has a home." : "Write freely. This is a local interactive example.")}</p><button className={s.button} type="submit">{saved ? <Check size={18} /> : <ArrowUpRight size={18} />} Save note</button>
      </form>
    </div>
  </section>;
}
