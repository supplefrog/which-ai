# Rendered acceptance and preference retention

On 2 October 2026 the user approved the delivered v3.2.1 reviewed trial and authorized publication: “can push.” They judged the defaultisms improved, typography and colors suited to the designs, spacing sound, animations smooth and thorough, and the complete design language cohesive and shippable. This applies to the delivered treatment, not every future treatment or a claim of measured performance.

The user noted that the originals had mainly been viewed at comparison width. Their judgment still includes responsive quality: a website should work in different layouts. The original batch remains preserved and can be opened at full width.

## Why three forms remain at the bottom

Designs 2/3/5 each retain a standalone `NoteCapture` endpoint. Its text is saved in that mounted demo session; it does not publish a note or send it to a server. Their shared `Start` link leads to `#try`. In contrast, Margin and Grove integrate capture into the notebook and seed representation, and Grove feeds saved text into its illustration.

This placement is an implementation choice, not a skill rule. The bounded repair explicitly integrated capture into 1/4 while leaving the other standalone endpoints. The user's remaining observation is recorded: distinct boxes do not make the repeated capture idea itself distinct. They asked why, and accepted publication; no new layout change was requested or made.

Evidence: [rendered source](../src/variants/local-personal-revised/gpt-6.1-sol/source/Designs.tsx), [generation history](../src/variants/local-personal-revised/gpt-6.1-sol/source/generation-notes.md).

## What survived and what is only an example

| Thought or preference | v3.1.0 / reviewed v3.2.1 status |
| --- | --- |
| GPT Taste's animated strip, cursor, small floating box and sentence-fitting reveal | Preserved in the [original feedback](frontend-output-review.md). Neither skill version mandates those particular effects. Current guidance supports expressive concept-related motion without one repeated repertoire. |
| Coordinated slide/zoom; no exposed placeholder, awkward crop, overlap or fighting transforms | Newly strengthened in [motion-design](../revisions/frontend-v3.2-candidate/skill/references/motion-design.md): dependent movement must form a coherent result, with sequencing where useful, intentional crops and visible content throughout. |
| Smooth, complete opening and closing; rapid interruption and reversal | Already explicit in the old motion reference and retained in the current one. Both directions have independent lifecycles and must be checked in playback. |
| Coverage of all requested motion targets | Already required and retained. The new entrypoint additionally loads motion guidance during state planning, even before choosing instant changes. This preserves requested coverage without requiring animation everywhere. |
| Material/theme/behavior serving the product together | Preserved in personal defaults and strengthened in design judgment. Physical relationships inform the result; literal simulation and a single house theme are not required. |
| Authored native generated imagery or texture when useful | Preserved and made more actionable. Native generation is permitted when an authored asset materially helps. Backend uncertainty must be disclosed, without treating it as revocation of the native route permission. |
| Functional warm paper in a reader | The approved project identity is preserved. The warning against automatic tinted paper does not prohibit deliberately chosen paper. The exact new reader example was not previously a global skill preference. |
| A shared text/box highlight sweep and animated reader theme control | Not named effects in either frozen skill bundle. General purpose, coverage, timing and continuity rules support them. Their exact reader treatment belongs to the reader's project contract. |

This source inventory establishes retention of guidance, not automatic use of every effect by a future model. The first fresh draft's skipped motion-reference read demonstrates that distinction. The reviewed trial's changed loading rule and concrete playback repair address that observed failure.

## Newly supplied reader example

The user describes manually improving their FOP coursebook under v3.1.0: a highlight sweep across text and a text box, a sharp generated paper texture with a natural slight warm appearance intended to make reading comfortable, an animated dark-mode button fitting the reader, and multiple passes to remove jitter and complete opening/closing behavior. Motion across most reader elements made those state changes feel less abrupt for that specific product.

Keep these as useful functional and expressive examples. The texture contributes both material character and a reading surface; the theme control communicates a change in that surface; motion continuity includes closing as well as opening. Do not turn them into compulsory warm paper, a shimmer on every control, a fixed icon animation, or a cross-product animation quota.

This record adds the newly supplied example without modifying the approved generated pages or their frozen guidance bundle. The published candidate remains project-local v3.2.1; active shared discovery remains v3.1.0. Shared promotion is a separate managed-source action.
