# Five fresh tests using frontend-ui-engineering 3.2.3

[Compare the previous reviewed batch with this run](http://127.0.0.1:3000/local/compare?leftCondition=local-personal-revised&leftIteration=1&rightCondition=local-personal-323&rightIteration=1). [Compare the baseline with this run](http://127.0.0.1:3000/local/compare?leftCondition=local-baseline&leftIteration=1&rightCondition=local-personal-323&rightIteration=1).

| Test | Full-width preview | Main demonstration |
|---|---|---|
| 1 | [Margin](http://127.0.0.1:3000/local/preview/local-personal-323/1) | Capture, tag, search, read and move a note |
| 2 | [Thread](http://127.0.0.1:3000/local/preview/local-personal-323/2) | Connect a reading fragment to a thought; save and retrieve your own trail |
| 3 | [Commonplace](http://127.0.0.1:3000/local/preview/local-personal-323/3) | Browse collections, write a note, select its collection and retrieve it |
| 4 | [Fieldwork](http://127.0.0.1:3000/local/preview/local-personal-323/4) | Explore project connections and add a project-specific thought |
| 5 | [RE:CALL](http://127.0.0.1:3000/local/preview/local-personal-323/5) | Select fragments, add a thought, assemble/edit/copy a brief |

## Scope and identity

Same original WhichAI second-brain landing-page brief. Three fresh GPT-6.1 Sol / medium builders, concept/identity coordination, one fresh Sol / high desktop reviewer, and parent integration/verification. This is the current skill plus workflow, not an equal-budget one-pass causal comparison with the historical conditions.

The frozen installed 3.2.3 skill is in [the source evidence](../../src/variants/local-personal-323/gpt-6.1-sol/source/evidence/skill-snapshot.json). Its main SHA-256 is `a9e6a57bd3445d3bcc2e05730da9f4bb227c4b5190901db7973946a773fc4b48`; the live installed main still matched after generation. [Generation notes](../../src/variants/local-personal-323/gpt-6.1-sol/source/generation-notes.md) and the three author receipts disclose the loaded references and local-only behavior. [Final identities](../../src/variants/local-personal-323/gpt-6.1-sol/source/evidence/final-output-snapshot.json) bind the delivered sources.

## Observed checks

- All five desktop and narrow pages rendered with their real content. Final 1440px desktop and 390/320px narrow checks found no document overflow. Fieldwork's intermediate layout was also inspected. Narrow testing uses browser viewport emulation, not a physical phone.
- Primary tasks and representative validation/recovery paths were exercised. This includes authored note bodies, search/no-match recovery, collection/project state, retained drafts, selected-fragment synthesis, and successful brief-copy feedback.
- Keyboard activation, meaningful focus return and reduced-motion task paths were exercised. Thread's source toggle retained identical bounds and page scroll position when its related thought changed; [the measurement gate passed](motion-gate-result.json). The limited background rAF capture in `motion-raw.json` does not establish playback smoothness or performance.
- Fieldwork's four desktop connector endpoints were measured against the corresponding note centers, with less than 0.01 CSS-pixel error in the sampled layout. Its phone presentation becomes an ordered note list.
- Scoped ESLint and final TypeScript `--noEmit --incremental false` passed. No candidate console errors were observed in the collected checks. No complete upstream production build or accessibility certification is claimed.

[Raw browser observations](browser-evidence.json), [pre-input cases](acceptance-cases.md), and [independent review](independent-review.md) retain the evidence and scope. Some early checks were interrupted by development refresh or unsuitable selectors; those observations remain inconclusive and the affected tasks were replayed after readiness. Initial locator auto-centering changed viewport coordinates; the anchored-toggle capture was repeated at its actual visible use position with scroll offsets retained.

## Repairs and authorship changes

Five's selected-hover foreground and background both became red (1:1 contrast). The parent strengthened the selected selector; all three choices now retain white text on red while hovered, with pointer exit and keyboard focus also checked. One's rotated decorative ring caused 7px of horizontal overflow at 390px. The parent bounded its narrow height at the cause; 390px and 320px now fit without global clipping. The original integrated draft files remain in [raw-draft](raw-draft/).

After the initial snapshot, Three's author intentionally changed collection selection to open the collection's first note. The parent rechecked Reading → the matching open note. Other readers can retain a separately opened note while search changes results; the note's own identity stays visible.

Most content changes in this fresh batch are instant, with limited control transitions and Thread's plus/minus treatment. This run does not demonstrate every motion/resource option retained in the skill. The user can judge that choice alongside the older reviewed designs.

## Changed artifacts

The new source condition comprises five `Iteration*.tsx` components, their five CSS modules, the `Designs.tsx` export adapter, author receipts, generation notes and frozen evidence. Registration changed `src/lib/local-runs.json` and `src/lib/local-registry.tsx`; `/local/source/local-personal-323` serves the frozen skill identity. Older designs and browser-local notes remain intact. The README and local comparison record now link this run.

These are reviewable local demos. User taste approval and commit/push are pending; no shared skill instruction changed for this request.
