# Revised frontend skill: first rendered trial

User request: use planning, delegation, independent review, revisions, DAGs and research to obtain noticeable improvements from their detailed WhichAI feedback. This trial preserves the original 50 designs and tests a staged revision of the existing personal skill. It does not promote a shared skill on source inspection alone.

## Decision

Does the candidate produce substantially more coherent, expressive, purposeful alternatives than the frozen personal v3.1.0 batch? The user's judgment decides that aesthetic claim. Parent/reviewers can identify demonstrated defects and insufficiently distinct or internally incoherent proposals before delivery.

## Generation identity

- Exact same WhichAI second-brain landing-page prompt from `src/lib/local-runs.ts`.
- One fresh GPT-6.1 Sol / medium worker; five requested alternatives.
- Worker reads only the staged candidate's frozen skill bundle and applicable references, with existing React/Next tooling. No sibling designs, earlier code, reviewer verdicts or separate benchmark answer key are supplied to it.
- Native imagegen remains permitted. The worker must record any actual asset choice and tool/version evidence; no paid/API-key fallback, fabricated provenance, image quota or prohibition.
- The raw generated draft is preserved before reviewer repairs. The delivered condition records extra review/repair effort so it is not presented as an equal-budget one-pass benchmark.

## Parent-held review criteria

| User observation | Visible evidence sought | Failure to flag |
| --- | --- | --- |
| Designs should sell the idea | The hero's visual, typography, colour and behavior express a legible product proposition; secondary material extends it | Interchangeable decoration or slogans explain a visual that does not communicate |
| Same vanilla note window in every alternative | Alternatives change explanatory form/composition and the visible demonstration where relevant; sharing behavior does not impose one shell | Recoloured component template dominates all five pages |
| Arrows, numbers and tiny copy everywhere | Symbols, counts, categories and short text earn their space; substantive content/controls remain readable | Automatic corner arrows, decorative node counts, number badges or repeated filler slogans |
| Outlines and boxes replace colour/material design | Surfaces, light, typography, spacing and boundaries form an intentional relationship | A border/shadow around each unit supplies almost all hierarchy |
| Illustration squeezed into a corner | Balanced content and breathing room at desktop and the actual ~685px comparison width | Headlines collapse into one-word columns while artwork retains its width |
| Diagrams do not connect correctly | Edges meet the depicted node/object in normal, selected and responsive states | Separately positioned SVG lines and labels visibly disagree |
| Flat or generic repeated motion | Each implemented transition supports that concept and visible state change; useful stillness remains valid | Universal fade-up, inert objects inviting action, isolated selector movement with weak object feedback |
| Janky crop/zoom/slide | Intermediate states retain coherent masks, framing, text and spatial continuity | Exposed placeholder/gutters, accidental rectangular crops, text hidden by an arriving image |
| Extra indirect controls | Contextual object interaction follows the depicted affordance, with equivalent keyboard access | Clickable-looking note/card is inert while distant selectors own the obvious action |
| No creative use of permitted assets | Asset and procedural-visual choices are intentional and relevant; authored imagery is used when it materially improves the concept | Unrelated placeholder photography or unused capability explained only by “solid UI is enough” |

These are review questions, not mandatory style recipes or mechanical scores. A justified arrow, count, border, photograph, static layout or ordered sequence remains valid. No fixed palette, typeface, universal gradient or animation quota is imposed.

## Checks and stopping condition

Render all five at 320/390/685/1440px. Check meaningful primary paths, selected/empty states, focus/Escape where applicable, normal/reduced motion, loading and console errors. Capture representative desktop/mobile and motion states. Run integrated TypeScript and scoped lint. Two fresh reviewers have bounded independent scopes: composition/variety and interaction/motion. Parent integrates demonstrated findings; at most two repair passes, then deliver a usable comparison and disclose any remaining limits. Do not exhaustively retest unrelated conditions.

The shared source remains v3.1.0 until the candidate's rendered result is judged. A candidate may remain staged, be revised, or be rejected. Publication of the project-local trial does not establish cross-host promotion.

## Dependency record

`workflow.json` records native agent/task state, source identity and outputs. The installed `dynamic-workflows` V3 catalogue has no Codex workflow route, so its routed scheduler cannot execute this trial. Native Codex agents run the stages under the standing model contract; no routed receipt or new scheduler is claimed.

Actual execution: one fresh rendered composition reviewer completed. A second fresh reviewer could not start because native delegation returned `agent thread limit reached`. The parent performed direct runtime/motion checks; these are not an independent second verdict. Two bounded repair passes completed. [The delivered trial](../../docs/frontend-revision-trial.md) records the raw draft, reviewed iteration and demonstrated repairs. The user's subsequent [rendered acceptance](../../docs/frontend-preference-retention.md) approves publication; shared promotion remains separate.
