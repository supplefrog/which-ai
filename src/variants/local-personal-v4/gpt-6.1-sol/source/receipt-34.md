# Fresh frontend v4 trial: iterations 3 and 4

Frozen skill: frontend-ui-engineering 4.0.0. Requested bundle identity: `1e95beaee03aab35f89b5db0c4e724bdc1abf265bc82965338f811f81709ab3d`. This receipt records source implementation, not rendered acceptance. No prior designs, critiques, receipts or routes inspected. No browser, commit or publication performed.

## Exact reads

All skill reads used the frozen directory:
`C:/Users/E/Documents/Codex/2026-10-02/wh/outputs/which-ai/src/variants/local-personal-v4/gpt-6.1-sol/source/evidence/skill/`

- `SKILL.md`
- `references/personal-design-defaults.md`
- `references/design-judgment.md` (full separate read after combined output truncation)
- `references/component-selection.md` (full separate read after combined output truncation)
- `references/motion-design.md`
- `references/component-state.md`
- `references/defect-acceptance.md`
- `references/liked-motion-options.md`
- `references/accessibility-checklist.md`

Project reads: `outputs/which-ai/package.json`, installed `node_modules/lucide-react/LICENSE`, installed `node_modules/framer-motion/LICENSE.md`. No existing project design source was read. Parent supplied set-level coordination (spatial relationship, dated memory, horizontal retrieval concepts in other scopes); no prior output was supplied.

## Decisions before implementation

**3 / Sidekick:** make capture feel light and immediate. Coral field, oversize sans text with one serif emphasis, lime sun as the visual meaning of extra room, then an open two-column collection. A competing representation was a desktop-style inbox window with folders: clearer as an application convention, but too much chrome between the visitor and the thought. A card mosaic competitor hid the entry action and would reorder unpredictably after adding a note. Chosen: stable capture region beside concise category-colored note rows, with an editable reading region below. Omitted a feature grid and signup footer because they repeated the same proposition and introduced unsupported account promises. Kept the sun/loop as one composed expression, not scattered labels. Capture, filter and opening have separate observable outcomes.

**4 / Index:** express continuity between past thinking and present use. Midnight blue, expansive serif headline, concentric aperture representing return, then a searchable vertical index alongside a reading dossier. A competing representation was a radial graph: it would represent connected topics but compete with the spatial concept and imply semantic capabilities absent from local search. A horizontal book/shelf representation was rejected after coordination because another concept owns horizontal retrieval. A full-width search-only composition omitted too much: the visitor could not see what a rediscovered note contains. Chosen: a vertical list and complete readable note, with direct related-note navigation and a local saved pile. Omitted capture because this concept's payoff is retrieval and a second capture form would make both owned pages converge. Omitted invented usage stats, testimonials and pricing.

These are provisional design choices for isolated concept previews, not claims of user approval. Native inputs/buttons, CSS composition and installed Motion satisfy the component roles; no external component candidate or dependency import was needed. The isolated pages are the parts previews, before parent integration/review.

## Function and motion

3: capture trims content and refuses empty input while preserving it; category selection determines collection home; new notes are inserted and opened; category filters show the actual matching set; readers edit the same local note state; reset explicitly restores examples and clears the draft. State is local and disclosed. Note insertion/filtering moves the actual collection with Motion layout; opening swaps the reader as a whole. Reduced-motion hook disables layout and translation animation.

4: case-insensitive substring search spans title, note and illustrative keywords; category and Saved filters combine with query; matching records open the actual selected note; Save toggles local bookmarks; related-note buttons select the related dossier; clear and reset recover the baseline. The selected dossier remains visible even when a filter/search no longer lists it, maintaining reading context. Saves are local and disclosed. Dossier entrance/exit transitions carry the changing content; list selection responds immediately. Reduced motion removes translation and transition duration. No semantic search or remote AI capability is claimed.

Native links and buttons, input labels, filter pressed states, polite status feedback, skip links, defined focus treatment and narrow-screen reflow are in source. These are implementation provisions, not observed accessibility passes.

## Assets and licenses

No remote imagery, generated assets, web fonts, paid APIs, or new dependencies. Decorative SVG curve and CSS geometry are original. System Arial and Georgia are used. Installed Lucide license inspected: ISC, including noted Feather portions under MIT. Installed Framer Motion license inspected: MIT. Product names and example notes are authored illustrative content, with no customer/proof claim.

## Checks actually completed

- Scoped strict TypeScript check using the existing project's TypeScript compiler, with imports resolved against existing node_modules and an in-memory CSS-module declaration: **0 diagnostics** for both TSX files. No files added to the project for this check.
- Existing PostCSS parser processed both CSS modules successfully: iteration three 83 top-level rules; iteration four 91 top-level rules.
- Source review of forms, empty-search/filter recovery, local data ownership, labels, route-independent anchors and reduced-motion handling.

No lint command, full build, browser, visual, keyboard, assistive-technology or measured contrast check was performed in this scope. Parent owns rendering and route integration. **Defect acceptance remains unverified**; these are source-complete exploratory artifacts awaiting parent QA, not ready-for-taste-review acceptance claims.

## Parent QA cases

- 3: enter a multi-line/long thought, change its category, capture, filter, reopen, edit title/body, toggle filters repeatedly, close reader, reset; test empty input preserving focus/content. Verify insert/reorder and reader transitions at normal speed, interruption, keyboard and reduced motion. Verify focus recovery when closing/resetting an open reader.
- 4: search `morning` (two matches), `project` (two), unmatched text, clear; open/rapidly switch notes, follow related note, save/unsave, combine Saved with query, restore baseline. Verify selected dossier context and status accurately reflect state. Check focus lifetime during dossier transitions.
- Both: representative 1440 and 390 widths plus 320 stress, zoom, real pointer hover, native select/search chrome, long input wrapping, no horizontal overflow, focus contrast and touch target usability. Review full-page hierarchy and distinctness. Parent must deliver the interactive previews before any visual commit; no approval is asserted here.

## Bounded repair after parent source review

Only `final-builds/34` changed; frozen skill, live project and preserved second draft were untouched. The compositions, coral artwork, aperture, provenance, dates and bookmark states remain.

- Three's Work motif is now a non-directional grid. The repeated open-row arrows were removed; the selected check remains. Header tagline and secondary footer slogan were removed, leaving one footer line. Reader metadata now shows the category naturally.
- Four's storage limit is now static, alongside a separate status region; bookmark confirmation no longer replaces it. Removed the related-note arrow, hero eyebrow, aperture caption and footer promise. Reading metadata preserves type and date using spacing rather than slash notation.
- Related-note navigation clears the search/filter, opens the linked note and focuses its revealed result button. It announces that all notes are showing. Ordinary filtering preserves the current dossier's reading context; following an explicit related note instead exposes the linked record in the index.
- Presence-aware wrappers make exiting Three note buttons and readers, and Four dossiers, inert and hidden from accessibility APIs while retaining exit animation. Exiting note buttons are also disabled. Close returns focus to the capture field; related-note navigation transfers focus to a stable search control before replacement, then to the revealed index record. These are source provisions, awaiting actual focus-lifetime observation.
- Same-page links retain their hash hrefs and ordinary modified-click behavior. Normal activation updates history only for a different hash, travels smoothly and transfers focus without a second jump. Reduced motion chooses instant travel. Hash/back-forward listeners retain section travel for browser navigation.

Checks rerun after the repair: strict scoped TypeScript **0 diagnostics**; PostCSS parsed Three **83** and Four **93** top-level rules. No browser, lint, full build, commit or publication. Browser defect acceptance remains **unverified**. Parent QA should additionally exercise Tab/activation during each exit, rapid reversal, related navigation from a filtered query and Saved, static storage copy after confirmations, link activation/back-forward, reduced motion and focus visibility during travel. The scoped compiler check was also rerun after the final history deduplication guard, with 0 diagnostics.
