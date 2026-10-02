# Original Hallmark generation receipt

Model: `gpt-6.1-sol`, selected by the controlling comparison run. One fresh generation of all five iterations in this agent. No alternate aesthetic skill, personal design defaults, memories, or other candidate source was read or applied. No packages installed. No paid generation or media calls.

Exact brief:

> I want you to design the landing page for a note-taking application as essentially a second brain. You should design five iterations and each of them should be accessible within the slash one, slash two, slash three like pages directory. And then you should add a little button that lets me switch between them easily.

Implementation prompt constraints: React 19 / Next 16 TSX. Export PageOne, PageTwo, PageThree, PageFour, PageFive from Designs.tsx. Own only this source directory. Parent supplies gallery routes and switcher. Do not import other variants, edit shared root files, install packages, or use paid services. Preserve the complete pinned original and required references with a source/license/hash receipt. Apply original Hallmark rather than the frontend synthesis. Record prompt, model, reads, revisions, and limitations. Parent integrates and renders.

## Source and reads

Pinned original: https://raw.githubusercontent.com/Nutlope/hallmark/13ac0ec7e148655948100b6396439e481361d690/skills/hallmark/SKILL.md

Version 1.1.0. MIT License, copyright 2026 Hallmark contributors. `evidence/SKILL.md` is the original raw byte download. The license and references are preserved unchanged; SHA-256, byte counts, source identity, and retrieval method are in `evidence/source-receipt.json`. Parallel was used first with full content; output was too large for one tool response, so exact raw HTTP downloads were used and bodies were read in smaller filesystem sections. Initial default-sandbox HTTP failed; authorized escalated read succeeded.

Read original skill body, editorial genre, macrostructure index, component cookbook, selected Garden/Manifesto/Atelier/Almanac/Newsprint token blocks, and typography, color, layout-and-space, motion, copy, anti-patterns, microinteractions, interaction-and-states, responsive. Read selected macro files 05-workbench, 07-manifesto, 02-long-document, 06-conversational-faq, 13-index-first. Read component archetypes H1/H2/H5, S2/S4, F3, C1/C2/C3, N6/N9/N1a/N3/N12, Ft1/Ft2/Ft6/Ft4/Ft7. Hero-enrichment, custom-craft, imagery-kit, and assets were retrieved/read while evaluating the product-demo choice; no external imagery was used. Slop-test and contract were read after implementation. References beyond the selected build needs were not applied as independent aesthetics.

Optional per-theme spec requests for all five selected themes failed; no missing spec was invented. Original `site/css/tokens.css` is preserved intact. The implementation token file adapts the selected blocks to isolated `data-hallmark-theme` scope; current universal rules override conflicting legacy examples (hex values, all-caps line-height below 1, paid-font fallbacks).

Fonts: downloaded 12 free Google Fonts files locally. Young Serif / Hanken Grotesk; Anton / Public Sans; Playfair Display / Hanken Grotesk; Hanken Grotesk / Crimson Pro with IBM Plex Mono colophon; Playfair Display / Crimson Pro. `fonts.css` preserves returned face declarations with local asset URL rewrites. Pages require no remote font request.

## Context, preview, and rotation

Fresh isolated target. No existing design system or prior Hallmark outputs were inherited. The controlled single-run comparison delegates design choices; the original skill's conversational Audience/Use case/Tone question was not delivered to the human. Inferred audience: people who collect reading and ideas. Use case: understand a personal notebook and try capture. Tone: editorial, with five catalog interpretations. This is an explicit protocol adaptation to the controlling comparison contract, not an edit to the original skill.

Brand and text are original prototype copy using the fictional name Commonplace; no factual pricing, testimonials, user counts, integrations, privacy promises, or customer logos are invented. Local interactive states explicitly describe their demo scope.

1. Workbench · Garden · N6 masthead · Ft1 mast-headed. Live note content, no browser/OS frame. Collect → connect → return, then local capture. Motion: content crossfade + CTA press. First run; organic roman-serif / green palette.
2. Manifesto · Manifesto · N9 edge aligned · Ft2 inline rule. Large declaration, beliefs, concrete note actions, capture. No decorative enrichment; brand asterisk is repeated as a recognizable brand mark. Still page, button press feedback. Differs on paper band, display family, accent hue. Previous nav N6 → N9 to leave the declaration space.
3. Long Document · Atelier · N1a exactly two destinations · Ft6 letter close. Letter, inline headings, capture. No enrichment or entrance motion. Differs on paper band/display voice. Previous N9 → N1a because two explicit reading/writing destinations fit the letter.
4. Conversational FAQ · Almanac · N3 side rail · Ft4 colophon. Brief opening, five expandable questions, local capture. No enrichment; functional expansion is instant. Cool technical-reference pairing differs from Atelier display/accent. Previous N1a → N3 to orient a long question list.
5. Index-First · Newsprint · N12 dismissible introduction/banner adaptation · Ft7 form-first close adaptation. Four example entries, category filtering, reading expansion, capture, final private draft form. No imagery or entrance motion. Differs from Almanac on display/accent. Previous N3 → N12 to introduce the browsing experience.

System portability output is tokens.css; no design.md was requested. The original log and preflight conventions are retained in the candidate-local `.hallmark/` folder, never the shared gallery.

## Revisions and verification limits

Source review revisions: shortened example-note titles and mobile questions; applied single-line small-screen affordances; added active/disabled/error state styling; replaced a repeated final text CTA with a local draft form; applied universal current line-height and font rules instead of legacy token examples. Candidate exports are functional interactive React components, not images.

Self critique: P4 H4 E4 S4 R4 V5. This is the original skill's requested self-review, not a comparison ranking. Static gate sweep found no gradient, equal three-icon grid, fake OS/browser chrome, invented proof, mixed icon set, italic heading, raw color/font outside the token/face declarations, transition-all, layout-property animation, or unguarded spatial animation. All pages include visible focus states, local capture, reduced-motion support, and token scopes.

Do not claim `58/58` passes: rendered viewport, computed contrast, fold-fit, and visual accent-footprint checks remain with parent integration. Original Hallmark requires visual checks at 320/375/414/768 and 1280×800, which this generation worker has not performed. Some source-level exceptions remain reviewable: Workbench uses a real interactive HTML notebook rather than supplied screenshots; FAQ and Index-First are complete exploratory landing interpretations despite the catalog recommending them mainly for secondary/reference pages; N12 is a dismissible prototype introduction rather than a real time-bound announcement and does not scroll-retract; Ft7 collects a local thought rather than an email subscription because no publishing service is supplied. These are implementation adaptations and must not be silently counted as full original-protocol compliance.

TypeScript transpile diagnostic check using the gallery's installed TypeScript returned an empty diagnostic array. This verifies syntax only, not full application build or rendered behavior.

Local captures remain in React memory for the current mount. They do not persist after navigation/reload or send data. Gallery routes and the little page-switch button belong to the parent per output contract.

## Parent integration repair

The original implementation token selectors were prefixed with the local CSS module `.page` class so Next's pure-selector check can compile the candidate. A standalone `:global(html), :global(body)` overflow rule was removed; the existing page-local overflow rule remains. These are mechanical integration changes, not new aesthetic selections. Original raw token evidence remains intact. Candidate-specific lazy imports keep fonts and styles from being applied to the baseline document.
