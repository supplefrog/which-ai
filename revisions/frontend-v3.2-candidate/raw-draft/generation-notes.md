# Fresh five-design batch

Brief: a landing page for a note-taking application that acts as a second brain, with five iterations and a route switcher. Five independent React exports are supplied; the parent owns route registration and the switcher.

## Frozen guidance loaded

- `evidence/skill/SKILL.md`, version `3.2.0-candidate`
- `evidence/skill/references/personal-design-defaults.md`
- `evidence/skill/references/design-judgment.md`
- `evidence/skill/references/component-state.md`
- `evidence/skill/references/accessibility-checklist.md`

Assigned bundle SHA256: `212397421bcc6fc0142893ac778c477bfacd5a2d7eef87600b3b6dbdfd2cc9c6`.
Ordinary infrastructure read: root `package.json` for available dependencies. No sibling concepts, earlier output, review material, or live frontend skill were loaded.

## Concepts

1. **Margin** — editorial notebook. A serif headline introduces the relief of giving thoughts a home. The notebook is the demonstration: select a real note title to open its content and related themes. The lower page explains capture, connection, and return through a quiet reading rhythm.
2. **Orbit** — navigable landscape. A dark blue field places a topic at the center of surrounding notes. Selecting a note changes the central topic and the selected state. The diagram makes discovery the primary expression, with an explanatory section and a first-idea capture area below.
3. **Commonplace** — graphic personal collection. Large typography, coral, and geometric specimens frame three browseable records. Selecting a record opens its full text underneath. The lower page treats collecting as an open-ended practice rather than a filing task.
4. **Grove** — rooted thinking. Green fields and an authored plant diagram connect a seed thought to a reading note. A direct “Grow a connection” action reveals an additional related thought. The lower page follows planting, tending, and branching before offering a capture surface.
5. **Relay** — thinking in motion. A bold blue workflow lets visitors switch among capture, connection, and a new project direction. Each step changes the demonstration and explanatory copy. A blue statement panel leads into a quick-capture form.

## Assets and behavior

No external images, generated images, asset downloads, additional dependencies, or uploads. No native image-generation call was made. Geometric specimens, note surfaces, orbital paths, and the grove drawing are authored directly in CSS and SVG. Interface icons use the existing `lucide-react` dependency. Typography uses browser/system Arial and Georgia stacks.

Each page has a working local capture form. Empty input disables submission. Adding a thought preserves its text in that mounted page session, clears the editor, and announces the addition. Capture deliberately has no backend or account flow. Page-specific selection/reveal state is local React state. Navigation and primary calls to action lead to actual page anchors. Sample notes are illustrative; no customer proof, prices, adoption statistics, or product performance metrics are asserted.

## Verification limits

This is the generation draft supplied for parent integration. CSS contains scoped desktop, intermediate, narrow-screen, reduced-motion, and forced-color treatments; native controls and visible focus styles are implemented. No browser render, type check, lint check, contrast measurement, keyboard traversal, or assistive-technology test was performed by this worker. The parent owns integrated rendering and verification. No commit or push was made, and no aesthetic score is assigned.
