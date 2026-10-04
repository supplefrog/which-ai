# Iterations 3 and 4 — implementation receipt

These are fresh isolated concepts for taste judgment, not approved production designs. Routes and the existing cross-concept switcher are owned by the parent.

## 3: Commonplace

Cobalt, white, and colored note fragments. Large typography introduces a collection shelf, then the page becomes a usable personal note library. The lower-page argument concerns relieving mental load through capture, organization, and return.

Necessary tasks: follow a primary action to the editor; write a title and body; choose a collection; recover from missing required content; save and see the new note; filter a collection; search title/body; recover from no search matches; read another note. Creation and search are local, synchronous interactions. The interface explicitly states that notes last until reload.

Expected feedback: collection selection has a white selected surface and pressed semantics; selected notes have a cobalt-tinted surface; successful saving opens the new note, resets search/filter, and announces the collection; an empty query result offers a reset. Cancel retains the draft while returning focus to the add control. Narrow layouts stack the collection controls, list, and reader in DOM order.

## 4: Fieldwork

Aubergine, coral, and lilac. A project-based knowledge atlas is central to the entire page. Knowledge becomes useful through its relationship to an active question, with a contextual reader and an invitation to add a connection. This is a nonlinear project map, rather than a chronological reading trail.

Necessary tasks: enter the atlas; select either sample project; select any connected note; read its content and the reason it belongs to the project; capture a new linked thought; recover from empty input; cancel and reopen a retained draft; switch projects to see the corresponding saved connections.

Expected feedback: project pills and source nodes expose selected state; the corresponding connector highlights; the inspector reflects the selected source; saved additions appear below the atlas and increment the connected-thought count. Native controls remain interactive during selection transitions. Connector endpoints and node centers use the same percentage coordinate model. On narrow screens, the map becomes an ordered note list and the unnecessary lines disappear; the active project question remains above it.

## Foundations and sources

- Reused installed React and `lucide-react` icons. Lucide icons are ISC licensed. No new dependency, external component source, generated media, network asset, or paid service.
- Arial/Helvetica and Georgia are system font stacks; no remote font request.
- Local component inventory was inspected. The installed icon library and native HTML controls satisfy the necessary roles, so no external UI part was imported.
- All sample notes and interface copy were authored for this illustrative local demonstration. No customer, usage, pricing, or performance proof is claimed.
- No common visible page template was shared across these two implementations.

## Frozen skill files actually loaded

From `source/evidence/skill/`:

- `SKILL.md` (v3.2.3)
- `references/personal-design-defaults.md`
- `references/component-selection.md`
- `references/design-judgment.md`
- `references/motion-design.md`
- `references/defect-acceptance.md`
- `references/accessibility-checklist.md`
- `references/component-state.md`
- `references/liked-motion-options.md`

Motion is limited to selection-color/border transitions. No entrance delays or autoplay were introduced. Reduced-motion rules remove these transitions; core content updates are immediate. Visible focus is coral in both concepts, with a dark focus outline on the coral closing region in iteration 4.

## Verification status and parent acceptance cases

Implementation complete; browser acceptance is pending parent QA. I did not perform rendered browser inspection, screen-reader testing, contrast measurement, reduced-motion playback verification, or physical-device testing. No screenshot/taste approval is claimed.

Static checks: `npx tsc --noEmit --pretty false` returned exit code 0 without diagnostics. A separate TypeScript transpile check of both owned TSX files returned zero syntax diagnostics. These checks do not establish browser behavior or visual acceptance.

Parent should exercise the full creation and retrieval paths, both project switches, keyboard focus and cancel restoration, no-match recovery, retained drafts, rapidly repeated selections, phone reflow and desktop connector attachment. Check desktop plus 320/390px widths, zoom, a long authored note, and live reduced-motion preference. The map uses simple SVG lines, so verify the lines stay visually behind nodes and meet their centers at intermediate widths. Collection changes select the first note in that collection when one exists.

No network/loading/error service states are presented because there is no remote operation. Form errors are real local validation. Persistent storage, accounts, and backend syncing are outside this isolated preview.
