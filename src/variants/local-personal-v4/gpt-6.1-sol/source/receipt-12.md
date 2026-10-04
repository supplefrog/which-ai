# Fresh v4 concepts: iterations one and two

Exploratory isolated previews, ready for integration and rendered QA. No browser checks or user taste acceptance are claimed. No commit or publication.

Frozen skill: frontend-ui-engineering 4.0.0. Supplied bundle identity: `1e95beaee03aab35f89b5db0c4e724bdc1abf265bc82965338f811f81709ab3d` (identity supplied by parent; not recomputed here).

## Reads

Read the exact frozen main at `outputs/which-ai/src/variants/local-personal-v4/gpt-6.1-sol/source/evidence/skill/SKILL.md`, then its `references/design-judgment.md`, `personal-design-defaults.md`, `component-selection.md`, `motion-design.md`, `component-state.md`, `defect-acceptance.md`, `accessibility-checklist.md`, and `liked-motion-options.md`. The initially truncated combined output was followed by complete reads of component selection, personal defaults, and motion design. Also read only project `package.json` and `eslint.config.mjs` for installed primitives and source checking. No earlier designs, critiques, receipts or browser routes inspected.

## Composition decisions

- **Morrow (/one):** white/ink with blue, a generous lowercase serif growth word, and a loose spatial field of actual readable thoughts. Competitor considered: a tidy folder tree beside an editor. The tree explains storage but makes the second brain look like filing; the spatial field plus matching thread reader makes associative return the main relationship. Compared with omitting the reader: omission removes the evidence that notes can bring other notes back. Kept it. Omitted ornamental connectors because semantic thread membership can be shown directly without detached diagram geometry. Omitted testimonials, metrics, pricing, feature tiles and duplicate signup actions; none were supplied or necessary to the trial.
- **Fold (/two):** plum/lime, broad serif typographic introduction, a continuous memory strip, then dated entries that unfold in place. Competitor considered: a big search interface returning answer cards. It communicates retrieval but overlaps the parent's reference-dossier direction and conceals the personal chronology; the notebook makes past/future continuity visible. Compared with omitting the folded strip: the paired June examples establish the setup that pays off in the first expanded entry, so it stays. Omitted a separate app-window shell, faux AI answers and decorative dashboard statistics. Search is only literal local filtering, never an invented intelligence claim.
- Shared only native accessible mechanisms and local state patterns. The concepts have different page anatomy, note representation, typography, color coverage, interaction and motion rather than a shared recolored shell. Provisional choices communicated to parent before coding; other workers' concise concept identities were received solely to avoid collision.

## Components, assets and rights

Original semantic HTML/CSS compositions with native links, buttons, textarea, search, select, and a narrow local React state owner. Existing Framer Motion supplies reader content transition and coordinated disclosure height/opacity. Existing Lucide icons supply action/source symbols. No external parts or assets imported; no metered services or new dependencies. Fonts use local Arial/Helvetica and Georgia/Times fallbacks; no font downloads or new font license obligations. Lucide (ISC) and Framer Motion (MIT) are preinstalled package usage, not new redistribution of an external design. Original text is illustrative, with no invented customer or performance evidence. These files are isolated component previews, not a selected production treatment.

## State and motion

Morrow: select an actual thought; the source reader and related note list agree on its thread. A new note retains full body, derives a short display title, becomes selectable in the field, and opens in the reader. Fold: expand/collapse dated entries; title/text/source filtering; thread filtering; cross-entry revisit; capture new entry at top. Both reject empty input with actionable inline feedback, retain drafts during filtering/selection, clear drafts only after successful capture, and preserve drafts when explicitly restoring example data. Both disclose page-memory lifetime; nothing claims account creation, sync or durable storage.

Morrow transitions the reader object on selection, not just its control. Fold animates the actual disclosure content and vertical stroke continuously, with mounted content and an inert closed subtree. Input remains immediate; CSS handles reversible card/selection feedback. Reduced-motion branches remove translation and set disclosure duration to zero; CSS also removes incidental transitions. Runtime interruption and preference-change behavior still requires browser observation.

## Observed checks

- Strict scoped TypeScript program with existing project compiler/react types, existing dependency resolution, and an in-memory CSS-module declaration: both TSX files passed. An initial checker run failed because its virtual declaration path used mismatched Windows separators; corrected the checker and reran successfully. No product-code type failure occurred.
- Both CSS modules parsed successfully using installed PostCSS.
- Both TSX files passed the project's Next core-web-vitals / TypeScript ESLint configuration via lintText. The runner emitted a React auto-detection warning because the source runner's current directory did not resolve React; it assumed latest React. TypeScript resolved the actual installed packages.
- After the final Morrow status-copy/accessibility-label edit, strict scoped TypeScript, CSS syntax and scoped ESLint were all repeated and passed on the final source files (the same lint environment warning remained).

## Parent acceptance scenarios and limits

Browser rendering, geometry, actual contrast, text sizing, focus, screen-reader behavior, motion lifetime/interruption, reduced-motion preference changes and device behavior are untested here under the explicit no-browser instruction. Defect acceptance is therefore unresolved, not passed.

Parent cases: select every Morrow seed and a captured note; confirm reader/body/thread agreement; capture blank and 600-character multiline input; restore examples while holding a draft. In Fold, rapidly open/close/reverse entries, Tab through an open entry and through a closed one, follow a related entry, combine search with thread filter, recover zero results, capture a long note, and restore examples without losing a draft. Verify phone/intermediate/desktop layout and keyboard-visible focus; check both initial and expanded/added states under reduced motion. Parent owns route mounting and the five-way switcher.


## Bounded parent-requested repair

Only the five files in final-builds/12 were changed. Frozen skill, immutable second draft and live project were untouched.

- Morrow field cards now show deliberately selected short previews; the reader retains the complete original note body and thread relations. The storage limit is a separate static line and survives capture/error/reset statuses.
- Removed corner-arrow cues from Morrow capture anchors and Fold capture navigation, local Revisit, save and return controls. Kept Fold’s real down-navigation arrow and stable continuous plus/minus disclosure geometry.
- Removed Morrow hero-foot caption, footer sentence and capture reassurance. Fold now has one hero-top caption and no footer slogan. Preserved dated fold strip, source/date/thread metadata, typography and palette.
- Removed every expanded-state trigger-padding and body-indent override across breakpoints. Opening affects height/color and plus/minus, with no state-dependent horizontal inset change.
- Revisit first moves focus synchronously to its persistent source trigger before making the outgoing body inert. A layout effect then focuses the destination trigger after filtering/opening has committed and callback refs exist. No draft mutation occurs.
- Added page-scoped html smooth scrolling for native fragment links, via :has(local page class), with explicit reduced-motion auto scrolling. Original href/hash behavior is retained.

Checks rerun on repaired source: strict scoped TypeScript PASS, both CSS modules parsed PASS, scoped project ESLint PASS (same React auto-detection environment warning). Source assertions passed for omitted corner arrows, reader full body, independent permanent storage disclosure, absence of open-state inset overrides, and two-stage Revisit focus handling. Source inspection confirms each draft has exactly one explicit clearing call in its successful capture path; search/filter/selection/restore preserve it. These are static evidence only: rendering, intermediate motion, actual focus/scroll behavior, query/capture execution and accessibility acceptance still require the parent’s browser QA. No browser, commit or further redesign performed.
