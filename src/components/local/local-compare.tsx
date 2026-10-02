"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { localPrompt, type LocalRun } from "@/lib/local-runs";
import styles from "./local-compare.module.css";

type Selection = { condition: string; iteration: number };
type Notes = Record<string, string>;
const storageKey = "whichai-local-taste-notes-v1";
const notesEvent = "whichai-local-notes-change";
let memoryNotes = "{}";
let storageFailed = false;

function subscribeNotes(callback: () => void) {
  const storage = (event: StorageEvent) => { if (event.key === storageKey) callback(); };
  window.addEventListener("storage", storage);
  window.addEventListener(notesEvent, callback);
  return () => { window.removeEventListener("storage", storage); window.removeEventListener(notesEvent, callback); };
}
function notesSnapshot() {
  if (storageFailed) return memoryNotes;
  try { return localStorage.getItem(storageKey) ?? memoryNotes; }
  catch { return memoryNotes; }
}
function writeNotes(next: Notes) {
  memoryNotes = JSON.stringify(next);
  try { localStorage.setItem(storageKey, memoryNotes); }
  catch { storageFailed = true; }
  window.dispatchEvent(new Event(notesEvent));
  return !storageFailed;
}

function sampleKey(run: LocalRun, iteration: number) {
  return `${run.condition}:${run.model}:${run.revision ?? "no-skill"}:${iteration}`;
}

export function LocalCompare({ runs, initialLeft, initialRight }: {
  runs: LocalRun[]; initialLeft: Selection; initialRight: Selection;
}) {
  const [left, setLeft] = useState<Selection>(initialLeft);
  const [right, setRight] = useState<Selection>(initialRight);
  const snapshot = useSyncExternalStore(subscribeNotes, notesSnapshot, () => "{}");
  const notes = useMemo<Notes>(() => {
    try {
      const saved: unknown = JSON.parse(snapshot);
      return saved && typeof saved === "object" && !Array.isArray(saved)
        ? Object.fromEntries(Object.entries(saved).filter(([, value]) => typeof value === "string")) : {};
    } catch { return {}; }
  }, [snapshot]);
  const [storageError, setStorageError] = useState(false);

  function saveNote(key: string, value: string) {
    if (!writeNotes({ ...notes, [key]: value })) setStorageError(true);
  }

  function choose(side: "left" | "right", selection: Selection) {
    const nextLeft = side === "left" ? selection : left;
    const nextRight = side === "right" ? selection : right;
    if (side === "left") setLeft(selection); else setRight(selection);
    const query = new URLSearchParams({ leftCondition: nextLeft.condition, leftIteration: String(nextLeft.iteration),
      rightCondition: nextRight.condition, rightIteration: String(nextRight.iteration) });
    window.history.replaceState(null, "", `${window.location.pathname}?${query}`);
  }

  function exportNotes() {
    const file = new Blob([JSON.stringify({ exportedAt: new Date().toISOString(), prompt: localPrompt, runs, notes }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url; link.download = "whichai-my-selections.json"; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function panel(side: "left" | "right", selection: Selection) {
    const run = runs.find((item) => item.condition === selection.condition);
    if (!run) return null;
    const preview = `/local/preview/${run.condition}/${selection.iteration}`;
    const key = sampleKey(run, selection.iteration);
    return <section className={styles.panel} aria-label={`${side} comparison`}>
      <div className={styles.controls}>
        <label className={styles.selectLabel}>{side === "left" ? "Left" : "Right"}
          <select value={selection.condition} onChange={(event) => choose(side, { condition: event.target.value, iteration: 1 })}>
            {runs.map((item) => <option key={item.condition} value={item.condition}>{item.label}</option>)}
          </select>
        </label>
        <div className={styles.iterations} role="group" aria-label={`${side} designs`}>
          {run.iterations.map((iteration) => <button key={iteration} type="button" aria-pressed={selection.iteration === iteration}
            onClick={() => choose(side, { ...selection, iteration })}>{iteration}</button>)}
        </div>
        <a href={preview} target="_blank" rel="noreferrer" className={styles.open}>Open full width ↗</a>
      </div>
      <div className={styles.description}>
        <span>{run.model} · {run.reasoning} reasoning</span>
        {run.source ? <a href={run.source} target="_blank" rel="noreferrer">Original skill ↗</a> : <span>No aesthetic skill</span>}
      </div>
      <iframe key={preview} title={`${run.label}, design ${selection.iteration}`} src={preview} className={styles.frame} />
      <details className={styles.notes}>
        <summary>Your notes for design {selection.iteration}{notes[key] ? " · saved" : ""}</summary>
        <label htmlFor={`${side}-notes`}>What would you keep, change, or combine?</label>
        <textarea id={`${side}-notes`} value={notes[key] ?? ""} rows={4} placeholder="For example: keep the type hierarchy; use less motion…"
          onChange={(event) => saveNote(key, event.target.value)} />
      </details>
    </section>;
  }

  return <main className={styles.main}>
    <header className={styles.header}>
      <div><Link href="/" className={styles.back}>WhichAI gallery</Link>
        <h1>Your skill comparisons</h1>
        <p>Same brief. GPT-6.1 Sol. Five designs per condition. Choose the parts you like.</p></div>
      <button type="button" onClick={exportNotes} className={styles.export}>Export your notes</button>
    </header>
    <details className={styles.brief}><summary>Shared brief</summary><p>{localPrompt}</p></details>
    {storageError ? <p role="status" className={styles.notice}>Browser storage is unavailable. Export your notes before leaving this page.</p> : null}
    {runs.length < 2 ? <p className={styles.notice}>The first pair is being prepared. Reload this page when both runs are ready.</p>
      : <div className={styles.grid}>{panel("left", left)}{panel("right", right)}</div>}
  </main>;
}
