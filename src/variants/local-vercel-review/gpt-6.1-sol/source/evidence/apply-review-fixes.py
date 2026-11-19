from pathlib import Path
import re

root = Path(__file__).resolve().parent.parent
p = root / 'Designs.tsx'
t = p.read_text(encoding='utf-8')
t = t.replace('import { useState, type ReactNode }', 'import { useState, useEffect, useRef, useId, type ReactNode }')
start = t.index('function Start(')
end = t.index('\nfunction Nav(', start)
t = t[:start] + '''function useQueryState<T extends string | number>(key: string, fallback: T): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(fallback);
  useEffect(() => {
    const read = () => {
      const raw = new URL(window.location.href).searchParams.get(key);
      setValue(raw === null ? fallback : (typeof fallback === "number" ? Number(raw) : raw) as T);
    };
    read();
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, [key, fallback]);
  return [value, (next: T) => {
    setValue(next);
    const url = new URL(window.location.href);
    if (next === fallback) url.searchParams.delete(key); else url.searchParams.set(key, String(next));
    window.history.replaceState(null, "", url);
  }];
}

function Start({ children, className }: { children: ReactNode; className?: string }) {
  const [done, setDone] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const emailId = useId();
  return <><button className={className} onClick={() => { setDone(false); dialog.current?.showModal(); }}>{children}</button><dialog ref={dialog} className={s.modal} aria-label="Create your workspace"><button className={s.close} aria-label="Close" onClick={() => dialog.current?.close()}><X size={20}/></button>{done ? <div role="status" aria-live="polite"><span className={s.success}><Check/></span><h2>Your next chapter starts here.</h2><p>You’re on the early-access list. This preview doesn’t send or store your email.</p><button className={s.modalSubmit} onClick={() => dialog.current?.close()}>Back to exploring <ArrowRight size={16}/></button></div> : <><Sparkles size={28}/><h2>Make room for your ideas.</h2><p>Join the early-access list for your own second brain.</p><form onSubmit={e => { e.preventDefault(); setDone(true); }}><label htmlFor={emailId}>Email address</label><input id={emailId} name="email" autoComplete="email" spellCheck={false} inputMode="email" type="email" placeholder="you@example.com…" required/><button className={s.modalSubmit} type="submit">Join early access <ArrowRight size={16}/></button></form><small>Interactive concept preview. No account is created.</small></>}</dialog></>;
}
''' + t[end:]
t = t.replace('return <header className=', 'return <><a className={s.skipLink} href="#landing-content">Skip to Main Content</a><header className=')
t = t.replace('{mark}<span>{name}</span>', '<span aria-hidden="true">{mark}</span><span translate="no">{name}</span>')
t = t.replace('</button></header>;', '</button></header></>;')
t = t.replace('<main className=', '<main id="landing-content" tabIndex={-1} className=')
# All Lucide pictograms in these pages are adjacent to text or on already labelled buttons.
t = re.sub(r'<(ArrowUpRight|ArrowRight|Plus|Search|Sparkles|X|Check|Link2|Folder|FileText|Command|Mic|ChevronRight|Star|Brain|Bookmark|Circle|ArrowDown|Layers|Globe|MoveUpRight|Menu)(?=[\s/>])', r'<\1 aria-hidden="true"', t)
t = t.replace('useState("Creative practice")', 'useQueryState("node", "Creative practice")')
t = t.replace('useState("All notes")', 'useQueryState("folder", "All notes")')
t = t.replace('useState("")', 'useQueryState("search", "")', 1)
t = t.replace('useState("All")', 'useQueryState("filter", "All")')
t = t.replace('const [selected, setSelected] = useState(0);', 'const [selectedParam, setSelected] = useQueryState("note", 0);\n  const selected = Number.isInteger(selectedParam) && selectedParam >= 0 && selectedParam < 3 ? selectedParam : 0;')
t = t.replace('const [note, setNote] = useState(0);', 'const [noteParam, setNote] = useQueryState("thought", 0);\n  const note = Number.isInteger(noteParam) && noteParam >= 0 && noteParam < 3 ? noteParam : 0;')
t = t.replace('const [idea, setIdea] = useState(0);', 'const [ideaParam, setIdea] = useQueryState("idea", 0);\n  const idea = Number.isInteger(ideaParam) && ideaParam >= 0 && ideaParam < 3 ? ideaParam : 0;')
t = t.replace('const [saved, setSaved] = useState(false);', '''const [saved, setSaved] = useState(false);
  const [dirty, setDirty] = useState(false);
  useEffect(() => {
    if (!dirty) return;
    const warn = (event: BeforeUnloadEvent) => { event.preventDefault(); event.returnValue = ""; };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);''')
t = t.replace('placeholder="Search your mind…"', 'name="note-search" type="search" autoComplete="off" placeholder="Search: Sunday ideas…"')
t = t.replace('onClick={()=>setSaved(!saved)}', 'onClick={()=> { if (!saved || !dirty || window.confirm("Discard your unsaved note?")) { setSaved(!saved); setDirty(false); } }}')
t = t.replace('textarea aria-label="Write your new note" placeholder="What’s on your mind?"', 'textarea name="draft-note" autoComplete="off" onChange={e=>setDirty(e.target.value.length > 0)} aria-label="Write your new note" placeholder="A thought from your day…"')
t = t.replace('title="All notes"', 'title="All notes" aria-label="All notes"')
t = t.replace('title="Saved links"', 'title="Saved links" aria-label="Saved links"')
t = t.replace('title="Voice notes"', 'title="Voice notes" aria-label="Voice notes"')
t = t.replace('<div className={s.networkBottom}>', '<div className={s.networkBottom} aria-live="polite">')
t = t.replace('<div className={s.noteCards}>', '<div className={s.noteCards} aria-live="polite">')
t = t.replace('<article className={s.marginEditor}>', '<article className={s.marginEditor} aria-live="polite">')
t = t.replace('<span className={s.editorDate}>TUESDAY, OCTOBER 6</span>', '<span className={s.editorDate}>{new Intl.DateTimeFormat("en", { weekday: "long", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date("2026-10-06T12:00:00Z"))}</span>')
# Decorative Jot cards precede the next h2: keep a sequential heading hierarchy.
t = t.replace('<h3>Things I fell<br/>down a rabbit<br/>hole about</h3>', '<h2>Things I fell<br/>down a rabbit<br/>hole about</h2>')
t = t.replace('<h3>{ideas[idea]}</h3>', '<h2>{ideas[idea]}</h2>')
t = t.replace('<h3>Make something<br/>just because.</h3>', '<h2>Make something<br/>just because.</h2>')
p.write_text(t, encoding='utf-8')
p = root / 'designs.module.css'
c = p.read_text(encoding='utf-8')
c = c.replace('.workspaceSearch input{', '.workspaceSearch input{').replace('border:0;outline:none;font:9px', 'border:0;font:9px')
c = c.replace('transition:border-color .2s,transform .2s', 'transition:transform .2s')
c = c.replace('transition:transform .2s,box-shadow .2s', 'transition:transform .2s')
c = c.replace('.fourBlue h3', '.fourBlue h2').replace('.fourYellow h3', '.fourYellow h2').replace('.fourPink h3', '.fourPink h2')
c += '''
/* Changes below address recorded Web Interface Guidelines findings only. */
.one,.two,.three,.four,.five{padding-left:env(safe-area-inset-left);padding-right:env(safe-area-inset-right);padding-bottom:env(safe-area-inset-bottom)}
.two{color-scheme:dark}
.one :is(h1,h2,h3),.two :is(h1,h2,h3),.three :is(h1,h2,h3),.four :is(h1,h2,h3),.five :is(h1,h2,h3){text-wrap:balance;overflow-wrap:break-word}
.one :is(button,a,input,textarea),.two :is(button,a,input,textarea),.three :is(button,a,input,textarea),.four :is(button,a,input,textarea),.five :is(button,a,input,textarea){touch-action:manipulation;-webkit-tap-highlight-color:#da926740}
.one button:hover,.two button:hover,.three button:hover,.four button:hover,.five button:hover{filter:brightness(1.08)}
.one a:hover,.two a:hover,.three a:hover,.four a:hover,.five a:hover{filter:brightness(1.15);text-decoration:underline;text-underline-offset:4px}
.one input:focus-visible,.two input:focus-visible,.three input:focus-visible,.four input:focus-visible,.five input:focus-visible,.three textarea:focus-visible{outline:3px solid #da9267;outline-offset:3px}
.workspaceSearch:focus-within{outline:3px solid #da9267;outline-offset:3px}
.workspaceGreeting>div,.connectionBar>div,.marginItem,.marginEditor,.workspaceContent{min-width:0;overflow-wrap:anywhere}
.networkTop,.networkNode small,.marginItemType,.marginListHeading>span{font-variant-numeric:tabular-nums}
.one [id],.two [id],.three [id],.four [id],.five [id]{scroll-margin-top:24px}
.modal{border:0;color:#202526;font-family:Arial,Helvetica,sans-serif;max-height:calc(100dvh - 40px);overflow:auto;overscroll-behavior:contain;color-scheme:light}
.modal::backdrop{background:#11182790;backdrop-filter:blur(6px)}
.skipLink{position:fixed;left:20px;top:15px;z-index:1100;padding:12px 18px;background:#fff;color:#202526!important;transform:translateY(-200%)}
.skipLink:focus-visible{transform:translateY(0)}
'''
p.write_text(c, encoding='utf-8')
