# Fresh concepts 1–2: frontend-ui-engineering 3.2.3

These are original isolated landing-page previews for taste selection, not approved production treatments. No previous variant designs, review reports, user feedback, or other design skill bodies were consulted.

## Concepts

1. **Margin / room for thought.** White ground, lilac typographic emphasis, gently displaced pink/green/lilac note fragments, and a compact personal library. The visitor's scattered thoughts become a space they can return to. The lower-page rhythm moves from collecting to keeping to returning; its demonstration uses those same actions rather than an unrelated app screenshot.
2. **Thread / follow a thought.** Deep blue ground, chartreuse directional emphasis, large serif type, and a reading-to-thinking workbench. The second-brain idea is a path from a saved source to a new point of view. The entire page, including the large closing direction mark, uses this trail relationship.

All labels and sample note excerpts are original illustrative copy. No real customer, price, performance, or testimonial claims. Existing `lucide-react` icons and native inputs/buttons supply the local foundations; ordinary CSS is sufficient for this bounded composition. No new component package, external media, generated assets, uploads or account actions.

## Necessary user tasks and expected feedback

### Margin

- Hero CTA reaches the demo and focuses the capture textarea. The three note fragments are also working shortcuts to their corresponding demo note.
- Capture text and save: blank input retains focus and provides a visible/live instruction; valid input creates an Ideas note, clears filter/search, opens it, and announces the save.
- Choose a tag: selection and note counts reflect state. Search matches titles and bodies; no results gives recovery copy.
- Choose a note: reader body/tag/color and selected row describe the same note. Long captured text wraps.
- Move the selected note to Work or Ideas: updates note tag/count/filter results and announces the destination. Reader remains open even if the note leaves the current filtered list.
- At phone widths the navigation simplifies; capture, note list and reader form a meaningful vertical order. Primary actions stay available.

### Thread

- Hero/header/closing CTA reaches and focuses the personal-thought textarea.
- Select one of three trails: source, question, tags and example connection all update together; selecting a trail clears the example connection.
- Connect a source: reveals its distinct synthesis in the adjacent thinking pane and announces connection; same control reverses the relationship without losing the source. Its plus/minus uses continuous shared geometry; native CSS transitions retarget on reversal.
- Capture a personal thought: blank input retains focus with visible/live instruction; valid text is saved with the active trail label. Search matches body and associated trail. Empty results explain recovery.
- Reset sample: clears the connection, draft, saved personal thoughts and search, then announces reset. This is a clearly disposable local sample.
- At phone widths trails lead, source follows, and thinking/capture completes the sequence. Controls remain inline in context; no modal or second design switcher.

## Motion decisions

Margin note artifacts have modest pointer-hover lift/straightening to signal that they can be opened; no autoplay. Thread's connection border and shared-geometry plus/minus provide reversible feedback. Frequent content updates are instant to avoid delaying reading or input. Both CSS modules turn these transitions off for reduced motion, include visible theme-fitting focus, and supply forced-colors boundaries. These are implementation intentions; browser playback/reversal and live setting changes remain to be verified by the parent.

## Skill files actually loaded

- `evidence/skill/SKILL.md` (frozen v3.2.3)
- `evidence/skill/references/personal-design-defaults.md`
- `evidence/skill/references/component-selection.md`
- `evidence/skill/references/design-judgment.md`
- `evidence/skill/references/motion-design.md`
- `evidence/skill/references/defect-acceptance.md`
- `evidence/skill/references/component-state.md`
- `evidence/skill/references/accessibility-checklist.md`
- `evidence/skill/references/liked-motion-options.md`
- `evidence/skill/references/taste-selection.md`

Also inspected project `package.json`, `tsconfig.json`, local component directory names. No sibling design sources were opened.

## Evidence and limits

- Scoped ESLint on both TSX files: passed without warnings.
- Project TypeScript check (`npx tsc --noEmit --incremental false`): passed.
- Parent owns route integration and rendered acceptance. This worker has not run browser verification and does not claim rendered quality, keyboard-path success, measured contrast, physical-device layout, motion performance, font loading or accessibility conformance.
- The previews use in-memory page-session data. Refresh or route unmount resets it; the visible copy states this. No backend, real AI inference, account or pricing flow is implied.
- Suggested parent checks: both complete capture/retrieval paths, empty capture and search, repeated connection reversals, long captured text, reset, keyboard focus, 320/390px phone and representative desktop widths, reduced motion and no horizontal page overflow.
- Taste remains provisional: compare complete pages for personal collecting versus connected reading/thinking; judge type, surface, density and motion independently. Defect acceptance is pending parent browser evidence.

## Owned output

- `IterationOne.tsx` / export `PageOne`
- `iteration-one.module.css`
- `IterationTwo.tsx` / export `PageTwo`
- `iteration-two.module.css`
- `receipt-12.md`
