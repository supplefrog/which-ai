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
| Correct choreography and intended-frame clipping when effects are combined | The user's clarification scopes the GPT Taste feedback to observed defects, not a slide-then-zoom or rounded-shape preference. Standalone premade slides or zooms remain valid. When combined, check choreography, interruption and reversal without a fixed order or pause; match the actual frame, including rounded clipping only when that shape exists. The [frozen motion reference](../revisions/frontend-v3.2-candidate/skill/references/motion-design.md) remains historical evidence, not a new preference mandate. |
| Optional animated underlines | Fancy underline remains an available choice. [Codrops LineHoverStyles](https://tympanus.net/Development/LineHoverStyles/) and [Rough Notation](https://roughnotation.com/) add source-verified expressive alternatives; they are not required features. Their keyboard, dark-mode, reduced-motion and lifecycle adaptations remain product checks. |
| Smooth, complete opening and closing; rapid interruption and reversal | Already explicit in the old motion reference and retained in the current one. Both directions have independent lifecycles and must be checked in playback. |
| Coverage of all requested motion targets | Already required and retained. The new entrypoint additionally loads motion guidance during state planning, even before choosing instant changes. This preserves requested coverage without requiring animation everywhere. |
| Material/theme/behavior serving the product together | Preserved in personal defaults and strengthened in design judgment. Physical relationships inform the result; literal simulation and a single house theme are not required. |
| Authored native generated imagery or texture when useful | Preserved and made more actionable. Native generation is permitted when an authored asset materially helps. Backend uncertainty must be disclosed, without treating it as revocation of the native route permission. |
| Functional warm paper in a reader | The approved project identity is preserved. The warning against automatic tinted paper does not prohibit deliberately chosen paper. The exact new reader example was not previously a global skill preference. |
| A shared text/box highlight sweep and animated reader theme control | Not named effects in either frozen skill bundle. General purpose, coverage, timing and continuity rules support them. Their exact reader treatment belongs to the reader's project contract. |
| Optional actual sun/moon morph | [Toggles.dev Classic](https://toggles.dev/toggles/classic) and [Expand](https://toggles.dev/toggles/expand) are verified source choices that change shared SVG geometry rather than crossfade whole icons. Classic also has live intermediate/final-state evidence; Expand is source-only. Preserve host theme behavior; verify React compatibility, state labels, rapid reversal and product contrast. An icon morph and a surface wipe are separate choices. |

This source inventory establishes retention of guidance, not automatic use of every effect by a future model. The first fresh draft's skipped motion-reference read demonstrates that distinction. The reviewed trial's changed loading rule and concrete playback repair address that observed failure. Observed output defects do not establish required features, aesthetic preferences or conclusions about model weights. Suitable premade components may satisfy a role without additional composition.

## Newly supplied reader example

The user describes manually improving their FOP coursebook under v3.1.0: a highlight sweep across text and a text box, a sharp generated paper texture with a natural slight warm appearance intended to make reading comfortable, an animated dark-mode button fitting the reader, and multiple passes to remove jitter and complete opening/closing behavior. Motion across most reader elements made those state changes feel less abrupt for that specific product.

Keep these as useful functional and expressive examples. The texture contributes both material character and a reading surface; the theme control communicates a change in that surface; motion continuity includes closing as well as opening. Do not turn them into compulsory warm paper, a shimmer on every control, a fixed icon animation, or a cross-product animation quota.

This record adds the newly supplied example without modifying the approved generated pages or their frozen guidance bundle. At that acceptance checkpoint, the candidate was project-local v3.2.1 and shared discovery was v3.1.0. On 3 October the user requested activation; v3.2.1 was deployed through Agent Sync. The [resource strategy](frontend-resource-strategy.md) records how the liked effects subsequently became explicit optional shared choices, with a standing parts preview before integration. Frozen comparison bundles remain unchanged.

The latest correction and added morph/underline choices are authoring updates, not a fresh review of those historical bundles. [Separate source research](frontend-motion-options.md) records exact mechanisms, licenses, compatibility and verification limits. The [MCP setup record](frontend-component-mcp.md) separately records configuration and protocol checks for Codex and Hermes; this preference inventory is not runtime evidence.
