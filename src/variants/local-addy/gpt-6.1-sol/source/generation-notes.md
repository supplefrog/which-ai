# Original Addy Osmani frontend-ui-engineering candidate

## Run identity and exact brief

- Generation date: 2026-10-02.
- Requested/runtime-routed model: `gpt-6.1-sol`; reasoning: `medium`, supplied by the parent dispatch. No alternative model, second generation run or ranking used.
- Upstream revision: `2686b620fc1fed2e8f60c704839c766b8594c6b6`.
- Skill URL: https://raw.githubusercontent.com/addyosmani/agent-skills/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/frontend-ui-engineering/SKILL.md
- Scope: five landing-page iterations in one fresh run; creative decisions delegated; React 19 / Next 16 TSX named exports; root gallery owns routing and switcher. Only this assigned source directory was changed.

Exact shared brief:

> I want you to design the landing page for a note-taking application as essentially a second brain. You should design five iterations and each of them should be accessible within the slash one, slash two, slash three like pages directory. And then you should add a little button that lets me switch between them easily.

Parent generation constraints: use the ORIGINAL ADDY OSMANI skill rather than the installed Agent Sync adaptation; preserve original full body, supplementary resources, license and hashes; do not read the adaptation, personal-design-defaults, other aesthetic skills, memory or other generated candidates; no installs, paid media or media service calls; own source only; available libraries lucide-react, @phosphor-icons/react, framer-motion, motion, gsap, clsx; parent integrates and verifies in browser. This implementation uses only React and lucide-react.

## Source receipt

The complete original SKILL.md was fetched through Parallel and read in full. A non-escalated direct HTTP request made while discovering the research tools failed with a connection-refused error. Parallel then returned the complete pinned source successfully. Direct HTTP with network escalation subsequently retrieved the exact original bytes of SKILL.md, its sole referenced supplementary document `../../references/accessibility-checklist.md`, and the repository MIT license. These raw files were preserved without rewriting and read in full. No source was substituted.

SHA-256 of raw upstream bodies:

| Preserved file | Upstream path | SHA-256 |
|---|---|---|
| evidence/SKILL.md | skills/frontend-ui-engineering/SKILL.md | 549044E9BD8D7FE993CE8E5C0D2B0F5465650676DC15805329973F936179EB1E |
| evidence/accessibility-checklist.md | references/accessibility-checklist.md | 61C759D94D52296231F5F310B92B401F56C44E4430DC3CC95EBAC5D7B1D5FFAC |
| evidence/LICENSE | LICENSE | 6F202F8BD568CD730DBB2B0D1F8E243BC74C2FA1F64DBCE9B2C7EA08BD5C9FD7 |

No installed adaptation, other skill instructions, memory files, or sibling generated designs were read. The run inherited the parent's shared conversation/instructions through the agent dispatch; this was not an empty system context.

## Reference evidence and design contract

The original skill calls for reference-led quality. Parallel fetched primary product landing pages at https://www.craft.do/, https://obsidian.md/, and https://bear.app/. The complete returned extraction bodies are retained in `evidence/reference-fetch.json` (SHA-256: 17C19FF10754B45F979D985D4E7FEF5E0450B128036A7DA8637809E7FBA37757). These are extracted text/markdown, not raw site bodies or rendered screenshots. Bear and Obsidian text structures and the relevant Craft excerpt were studied; Craft's full long tool output was truncated. No reference product's proprietary imagery, branding, quotes, or exact layout was reused.

Reference observations influencing the shared product structure:

- Bear places the writing experience, real note content, organization and security ahead of a long feature inventory. This supports content-first messaging, readable note typography and compact secondary navigation.
- Obsidian exposes an actual knowledge workspace and connections rather than relying solely on claims. This supports interactive notes and a visible relationship graph as product evidence.
- Craft's extracted structure separates capture/refinement, adaptive organization and cross-device use. This supports a short capture/connect/return explanation, progressive feature detail and concrete examples.
- Reference visual density, actual responsive behavior and interaction states were not confirmed from rendered screens. For these, the implementation uses explicit local assumptions: a compact header, one dominant task per section, native controls, single-column mobile layouts and no essential content hidden on mobile.

The contract used for the five designs: communicate a personal second brain through meaningful note content; primary action opens a first-note demo; secondary action explores a working library; preserve default/selected/empty/save-success states where applicable; visible keyboard focus; labeled form inputs; one h1 per page and sequential headings; semantic color tokens; spacing predominantly in a .25rem scale; no gradients, decorative stock card grids, unsupported testimonials or fake trust metrics; local original CSS illustrations instead of remote assets. Breakpoint rules at 767px and 1024px address the skill's target widths 320/768/1024/1440px.

Directions generated together in this single run:

1. **grove** — quiet botanical editorial; green/ivory palette, serif thinking-focused headline, an original CSS plant/field-note illustration and a compact capture/connect/return strip.
2. **thread** — dark connected workspace; large asymmetrical type, interactive five-node thought network and horizontal explanatory rows.
3. **margin** — personal notebook; red/cream ink language, editable ruled-paper note and an editorial letter about keeping unfinished thoughts.
4. **index** — precise knowledge system; blue/white semantic palette, working search/results preview, systems-oriented layout and compact information hierarchy.
5. **commonplace** — open creative pinboard; warm neutral and lime accents, original selectable thought slips and a collect/mix/return story.

## Functional and verification boundaries

- `Designs.tsx` exports PageOne through PageFive. Styling is fully scoped in designs.module.css; no shell, route, package, config or shared gallery changes.
- Each primary CTA opens a native modal dialog. Native showModal provides browser focus containment and Escape handling. A labeled required textarea saves a thought into React state and announces success. Explicit text explains the local page-only demo boundary.
- The shared example library has working search, selection, an empty-results state and a polite live content region. Connected thoughts are informational spans rather than misleading links.
- PageTwo has selectable nodes with pressed states and selection announcements; PageThree has a working editable note/save demo; PageFour has working query filtering/empty results; PageFive has selected idea controls and announcements.
- Mobile navigation is a semantic button with expanded state, an accessible name and a visible menu. Native interactive targets are sized for touch; skip links and visible focus outlines are included.
- No network-dependent UI data, production authentication, account creation, sync, or actual product backend is implemented. Loading/permission/network-error states are therefore not applicable to this synchronous demonstration. No copy claims that a real account is created or data is persisted.
- Source review completed: named exports, semantic headings, visible labels, dialog semantics, reduced-motion rule, focus styles and responsive CSS are present. Static typing/build/browser checks are owned by the parent integration. This agent has not claimed runtime rendering, screen-reader behavior, automated axe compliance, measured contrast or all four breakpoint passes.
- Parent should verify 320/768/1024/1440 widths, no console/build errors, keyboard traversal, dialog open/close focus return, note-save success and search-empty states in the integrated gallery before marking the comparison complete.

The original skill's implementation-guidance was applied to this candidate only. No shared instruction or skill changes were made.
