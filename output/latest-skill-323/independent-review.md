# Independent review of the five landing-page demos

Reviewed the current artifacts before any author explanation or previous design/review. Applied frontend-ui-engineering 3.2.3 defect-acceptance and motion guidance. Read-only review; no implementation edits.

## Actionable finding

### P2 — The active thread's label disappears under the desktop pointer (Iteration Five)

- **Location:** `src/variants/local-personal-323/gpt-6.1-sol/source/iteration-five.module.css:1`, selectors `.intentButtons button:hover` and `.intentButtons .intentActive`; rendered buttons at `IterationFive.tsx:106`.
- **Reproduction:** Open `/local/preview/local-personal-323/5`, enter the workbench, click **Make some space**, and leave the pointer over that button until its color transition settles. The active red button loses its readable label and arrow. Repeated activation reproduced the state.
- **Evidence:** The browser reported `aria-pressed="true"`, `:hover=true`, text color `rgb(189, 48, 38)` and background `rgb(189, 48, 38)`: a 1:1 text contrast ratio. The hover selector has greater specificity than the active selector and overrides its white foreground. The accessible name remains present, but the visible selected label is unreadable.
- **Capture:** [Settled active-hover screenshot](reviewer/five-active-hover-label.jpg).
- **Smallest correction:** Exclude the active button from the generic hover foreground rule or define an active-hover foreground with sufficient contrast. Preserve the active background and selection behavior.
- **Acceptance check:** Pointer idle, hover entry, activation, settled active-hover, and pointer exit keep each thread's label and arrow visible; the selected button, prompt and selected fragments still agree.
- **Revision binding:** Five CSS SHA256 `1666c7906859631821233f097c63df2a47c5bae75986e30bbde5af39331b9b25`; Five TSX SHA256 `3c3ad52567941d90cb263104798c88eee56ef03e144bb76479dcb0e0d08c1cfa`. Both matched `draft-snapshot.json` at the final source check.

No other actionable desktop defect established in this bounded review.

## Observed scope

Codex IAB, one hidden temporary tab, routes `/1` through `/5`, measured viewport **1280 × 720**. The reviewer did not change viewport settings. The tab was closed before the parent resumed other viewport work.

| Iteration | Observed desktop cases |
|---|---|
| One / margin | Hero, explanatory section, demo, closing/footer; primary CTA reaches capture; filter changes results. |
| Two / thread | Whole composition; CTA reaches workbench; connection reveal; switching trail updates source/question/connection context; own thought saves with the selected trail. |
| Three / commonplace | Whole composition; search results; note editor; a new note saves and opens with updated collection count. |
| Four / fieldwork | Whole composition; atlas entry; selecting a node updates inspector and active connector; switching project updates map/question/inspector; an own connection saves to the chosen project with updated count. |
| Five / RE:CALL | Hero, workbench and closing/footer; CTA entry; thread/fragment state changes; brief assembly includes selected seed bodies; copy reports success; adding a thought selects it and invalidates the old brief; active-hover defect reproduced. |

The open readers in One/Three can remain visible while filtering/searching independently changes the results. The parent confirmed that the acceptance contract intentionally permits this and the readers retain their own visible title/category. These observations are therefore not classified as defects. Their screenshots are retained as context only.

## Limits

- Parent owns phone, keyboard and reduced-motion acceptance. This review does not certify accessibility, physical-device behavior, performance, clipboard contents or every content-stress case.
- Some IAB screenshots initially showed pre-paint states; settled follow-up captures were used for judgments. On-demand development compilation also reset Five during the attempted zero-fragment recovery test. That test is **inconclusive**, not a failure or a pass.
- Whole-page captures succeeded for Two/Three/Four. One/Five were inspected through their visible sections; full-page screenshot attempts on those routes failed. This did not prevent capturing the finding.
- At the final source check, all manifest files except `IterationThree.tsx` matched the draft hashes. Three's source changed after its inspected version; its current revision needs the parent's recheck. Five's finding remains bound to matching hashes above.
- This is defect review before user taste judgment. Coherent typography, palette, composition and metaphor alternatives were not ranked or redesigned.
