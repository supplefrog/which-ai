# Emil Kowalski original skill — local generation

Generation date: 2026-10-02. Model: `gpt-6.1-sol`, reasoning effort: `medium`, as selected by the parent dispatch. Five designs generated together in one fresh candidate run. No other candidate designs, installed frontend skill, personal design defaults, or memory were read or used.

Exact common brief:

> I want you to design the landing page for a note-taking application as essentially a second brain. You should design five iterations and each of them should be accessible within the slash one, slash two, slash three like pages directory. And then you should add a little button that lets me switch between them easily.

Original skill source: https://raw.githubusercontent.com/emilkowalski/skills/d16ebe60d09a5ba2afcb7054ede9d0a10c9f6128/skills/emil-design-eng/SKILL.md

Pinned repository revision: `d16ebe60d09a5ba2afcb7054ede9d0a10c9f6128`. Raw original skill saved intact as `evidence/SKILL.md`. MIT copyright and license preserved in `evidence/LICENSE`. The pinned directory listing contains only `SKILL.md`; there are no local supporting-reference files in this skill directory. Raw listing is `evidence/directory.html`. SHA-256 and Git blob SHA-1 receipts are recorded in `evidence/source-receipt.json`.

Read record:

- Parallel full-content fetch of original skill, then raw HTTP download. Full raw body explicitly read in two parts (lines 1–240 and 241–end); headings include animation framework, springs, components, transforms, clipping, gestures, performance, accessibility, Sonner principles, staggering, debugging and checklist.
- Parallel full-content fetch of pinned directory and license, then raw HTTP download and complete license body read.
- Skill's easing-resource instruction offers `easing.dev` or `easings.co`. Chose `easings.co`; loaded complete Parallel body and preserved raw HTML as `evidence/easings.html`. Used original skill's provided strong ease-out and ease-in-out cubic Bézier values; did not invent replacement curves.
- Default shell HTTP was blocked. Authorized escalated read-only HTTP succeeded for raw files. GitHub API tree request returned an unusable GitHub 404 response through the environment; used the pinned directory page instead. This did not block the original skill read.

Output contract: `Designs.tsx` exports `PageOne`, `PageTwo`, `PageThree`, `PageFour`, `PageFive`; scoped styling lives in `designs.module.css`. Parent gallery owns routes and switcher. No shared files edited, packages installed, external media used, upload, publication, paid service or durable instruction change.

Designs and playable interactions:

1. **mneme** — cream and forest, serif emphasis, tangible overlapping note cards. Three example notes selectable using the dots.
2. **recall** — orange and graphite, assertive type and structured product panel. Capture/connect/recall tabs use a duplicated clipped tab surface and actual content changes.
3. **orbit** — midnight blue, spatial knowledge constellation. Three selectable idea nodes update the connection explanation.
4. **folio** — parchment and olive, editorial notebook. Journal/Reading/Ideas controls turn through three example pages.
5. **commonplace** — lilac, approachable collection workspace. Category filters change displayed notes, and a sample save action changes state.

Every primary CTA opens a native modal capture demo with a labeled editable field and an explicit local-session save result. Escape, outside-click dismissal, browser focus trapping, and disabled empty submission are supported. Native dialogs restore focus on closure. Navigation anchors reach real sections. No signup backend or actual persistent cloud save is claimed.

Motion follows the source's decision framework: rare explanatory state transitions and modal entry use 200–250ms, press feedback uses 140ms, entrances begin at scale .97–.98 rather than zero. Predetermined movement uses CSS; rapidly changed states use CSS transitions where applicable. No continuous decorative motion. Hover movement is gated to fine pointers. Reduced-motion removes movement. Pointer-versus-keyboard selection disables animated responses for keyboard changes; modal entry detects focus-visible activation. Tab clipping is used because the original skill explicitly recommends it for coherent active-label transitions.

Verification: TypeScript `transpileModule` completed with zero diagnostics and all five named exports present; PostCSS parsed the stylesheet, and a scoped class-reference check found no missing static CSS classes. Results are in `evidence/source-check.json`. This is syntax/transpilation and CSS-source checking, not full application type checking or browser runtime evidence. Parent handles gallery integration, full build and browser checks. Physical-device gesture checks and next-day animation review were not performed in this run. Taste is left to the user; no ranking or merged aesthetic guidance was produced.
