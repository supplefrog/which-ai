# Iteration 5 — Recall

Fresh isolated concept built against frozen frontend-ui-engineering 4.0.0. Bundle supplied by parent: `1e95beaee03aab35f89b5db0c4e724bdc1abf265bc82965338f811f81709ab3d`. No prior designs, critique, receipts, browser routes or generated screenshots inspected.

## Exact reads

All skill reads under `outputs/which-ai/src/variants/local-personal-v4/gpt-6.1-sol/source/evidence/skill/`:
- `SKILL.md`
- `references/design-judgment.md`
- `references/personal-design-defaults.md`
- `references/component-selection.md`
- `references/motion-design.md`
- `references/component-state.md`
- `references/defect-acceptance.md`
- `references/accessibility-checklist.md`
- `references/liked-motion-options.md`

Additionally read only `outputs/which-ai/package.json` for toolchain and installed dependency confirmation. Used its installed TypeScript and package types for scoped checking.

## Composition decisions

Provisional direction sent to parent before implementation: Recall makes returning to notes feel like finding a train of thought. Oversized ink typography, an electric mint return-word, and a mint retrieval rail give a note-taking product a visible continuity rather than a generic productivity dashboard. Native note buttons are the depicted objects; selecting one opens its actual content and same-topic notes.

Credible competing representation: a node graph would depict association more literally, but short node labels would suppress the useful writing and responsive geometry would dominate this bounded preview. A standard three-pane app screenshot would expose more interface, but weaken the specific returning-to-a-thought idea. Chose the rail plus reading spread. Parent's set coordination described other concepts, without supplying their artifacts; this page keeps the rail/content relationship as its central experience.

Omission test: omitted pricing, testimonials, account creation, persistent cloud claims, a repeated bottom capture form and a second CTA section. None had supplied facts or a different job. Retained topic/date/source because they help locate a thought; retained session-only disclosure and explicit reset because visitors add their own writing. No decorative numbering or graph connectors. The rail line and dots share a fixed vertical relationship; actual rendered alignment remains a parent QA case.

## Interaction and state

- Search filters titles, body and topic in sample and added notes. No-match state explains recovery. The current reading stays visible while filtering the rail.
- Direct note selection and same-thread note selection change reading content.
- Add-a-thought opens a labeled title/body/topic form at the demo. Required native fields reject empty input; successful save trims title/body and selects the resulting note. No server action implied.
- Unfinished drafts survive returning to reading and choosing notes. Saved notes and drafts are component state only. Refresh or route unmount clears them.
- Reset uses a native confirmation naming the removed notes/draft, then restores the sample.
- Focus moves to title on capture and selected rail note on save/cancel. Rail controls remain mounted during reading transitions.
- A short coordinated content crossfade/vertical movement accompanies reading replacement and capture/reading changes. Outgoing content becomes inert during exit; reduced motion uses zero duration and translation. Entry controls become available immediately. No idle autoplay.

## Components / assets / licenses

Native HTML controls fit capture/search/selection; no external component discovery needed for an unresolved capability. Existing installed Framer Motion supplies lifecycle transitions and Lucide supplies icons. No additional dependencies, fonts, external images, generated assets, metered services or copied third-party component source. Lucide and Framer Motion are MIT-licensed libraries. Typography uses system Arial/Helvetica and Georgia for the authored brand mark. All demo notes are authored illustrative content, not customer proof.

## Observed checks and limits

- Strict scoped TypeScript semantic check against existing project dependencies passed: zero diagnostics, after final changes. CSS module declaration supplied virtually to the compiler; no project configuration was changed.
- Source-to-CSS module class coverage passed with no missing referenced classes. Initial checker incorrectly matched the end of words such as `notes.find`; corrected word-boundary matcher before reporting the valid result.
- No browser, full build, lint, screenshots, interaction playback, contrast sampling, keyboard observation or rendered defect acceptance performed. Parent owns integration, route switching and rendered QA. This is an exploratory source preview, not a defect-accepted production result.

Parent acceptance cases: desktop and 320px layout; note rail horizontal scrolling and focus; direct/related reading selection including rapid reversal; search/no results; capture/save, return-to-reading draft retention, reset cancellation/confirmation; reduced-motion changes; transition overlap/inert focus; long note titles/body and many added notes; contrast and line/dot alignment. No commit/push.

## Delivered files

Only `final-builds/5/IterationFive.tsx` (exports `PageFive`), `iteration-five.module.css`, and this receipt written. Parent integrates slash routes and the cross-concept switcher.

## Bounded repair following parent inspection

Parent reported desktop and capture/search/read/draft-retention tasks working; those are parent observations, not browser checks performed by this worker. Parent identified semantic repetition and ambiguous symbols for repair.

Removed the hero's Catch/Connect/Come-back aside, generic examples ticker, entire lower idea section with its repeated captions/signature, and footer slogan. Removed the now-unneeded The idea navigation item. The space was not filled with replacement slogans. Hero support now forms a two-column introduction/action arrangement; mint composition, type, thought rail, reader, related-note content, date/topic/source metadata and full state behavior remain.

Removed the fictional registered trademark mark. Removed corner-arrow symbols on related-note selectors and the footer return link; each action is named in words and meaningful downward entry cues remain. Native fragment links retain their targets and browser history behavior. Document scrolling is smooth only while this page's identifying attribute is present, with reduced-motion override to automatic scrolling; no custom hash interception or animation library navigation introduced.

Repair checks: strict scoped TypeScript again passed with zero diagnostics; referenced CSS class coverage passed; source check found none of the specifically removed content/symbols. No browser, lint, commit, skill edits or live-project edits. Native hash scrolling, reduced motion and the shortened final composition need parent rendered QA. The preserved second draft was not touched.
