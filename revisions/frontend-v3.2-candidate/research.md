# Bounded research for the v3.2 candidate

Reviewed 2 October 2026. Four primary sources selected; Parallel search/fetch used for live sources, with no paid fallback. The project’s [frontend output review](../../docs/frontend-output-review.md) supplies the actual acceptance evidence. Sources below explain mechanisms; they do not establish that revised instructions produce better designs.

## 1. Anthropic: subject matter determines the representation

Source: [frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design), inspected through the experiment’s frozen [SKILL.original.md](../../src/variants/local-anthropic/gpt-6.1-sol/source/evidence/SKILL.original.md). This is the tested source snapshot, not a claim about today’s upstream revision.

Short excerpts: “Open with the most characteristic thing in the subject’s world”; “Let each written element do exactly one job.”

Evidence: the source derives choices from subject, audience, materials and vernacular. It treats structural devices as information and allows the hero to be an image, animation, live demo or interactive moment. Its copy section favors specific user-facing language and consistent action names.

Transferable decision: each alternative can express a different product relationship—capture, discovery, connection, retrieval—through its own dominant object, arrangement and interaction. Distinction should persist across the full page. A shared lower-page app window can overwhelm different hero metaphors. Copy earns space by adding information or enabling action; labels that only narrate an already clear illustration can go.

Contraindications: do not copy its current aesthetic blacklist, fixed palette size, font advice, or single-emphasis prescription as universal rules. The user permits expressive text and curiosity when purposeful. Preserve accessibility names, useful object titles, instructions where the action is otherwise undiscoverable, and honest demo boundaries. Subject grounding is broader than literal physical realism.

## 2. Emil Kowalski: movement has an origin

Source: [7 Practical Animation Tips](https://emilkowal.ski/ui/7-practical-animation-tips), live Parallel extraction.

Short excerpt: “They should scale in from the trigger.”

Evidence: origin-aware popovers use `transform-origin` to preserve the apparent connection with their trigger. The page also compares shorter versus longer select animations and discourages scaling ordinary controls from zero.

Transferable decision: when a depicted note opens or expands, anchor the transition to that object; when a selection changes, make the resulting state visibly respond. Position, scale and timing should communicate the same relationship. The user’s desired stronger zoom is a task-specific hypothesis, not something this source proves.

Contraindications: popover guidance is not a rule for every image or hero. No blanket button scaling, minimum amount of zoom, or fixed duration follows. Frequent actions should remain responsive, and expressiveness should suit the product.

## 3. Material: choreograph a stable focal relationship

Source: [Choreography — Material Design 2](https://m2.material.io/design/motion/choreography.html), primary-source excerpts returned by Parallel search. Material 2 is explicitly no longer maintained; this is conceptual evidence, not a current component/token recommendation.

Short excerpt: “Elements are grouped together and transform as a single unit, rather than animating independently.”

Evidence: the document distinguishes outgoing, incoming and persistent elements. Shared transformations maintain continuity; independent movements can compete. A persistent focal image can guide attention, but conflicts with other moving elements may call for a fade instead.

Transferable decision: for the reviewed slide-plus-zoom defects, identify what persists and what leaves before selecting timings. Group the card’s related content, retain one intelligible focal path, and sequence or simplify crossing movements when needed. Judge the in-between frames, not only endpoints.

Contraindications: this does not prove zoom must always wait for slide completion. Concurrent movement is appropriate when relationships stay clear. Do not import Material styling, obsolete stagger timings, or a universal page-load sequence.

## 4. MDN: image fitting and framing are distinct decisions

Source: [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit), live Parallel extraction.

Short excerpt: “If the object’s aspect ratio does not match the aspect ratio of its box, then the object will be clipped to fit.”

Evidence: `cover` preserves the image ratio while filling the box through clipping; `fill` stretches to the box. The page points to `object-position` for placement.

Transferable decision: choose frame geometry, crop and focal placement together. A scale effect needs a sufficiently covered frame throughout its motion; rounded corners need a clipping boundary that moves with the intended surface. The reviewed exposed background and image-over-text faults require checking actual transition states.

Contraindications: `cover` is not always correct; essential image content may require a different frame or fitting mode. `object-fit` alone does not fix an underscaled wrapper, inconsistent clipping, stacking or placeholder treatment. This is implementation evidence, not an image-generation or aesthetic mandate.

## Integration limits

The strongest new support is for causal motion origins, grouped transitions, and explicit framing decisions. Meaningful variety and less redundant copy are already supported by the frozen Anthropic source and the user’s rendered review; adding more prohibition lists would duplicate existing advice. Physical/coherent relationships remain a project-specific design judgment. No generation, behavioral comparison, live skill edit or promotion occurred in this research task.
