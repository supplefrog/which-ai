# Frontend revision: five playable comparisons

The user approved the revised rendered trial and authorized publication on 2 October 2026. It preserves the original 50 designs and adds five alternatives under **Your frontend skill · v3.2.1 + review**. The frozen trial is project-local. On 3 October, the user explicitly requested activation and the approved shared revision was deployed as v3.2.1; [the resource strategy](frontend-resource-strategy.md) records the subsequent selection workflow.

- [Baseline vs revision](http://127.0.0.1:3000/local/compare?leftCondition=local-baseline&leftIteration=1&rightCondition=local-personal-revised&rightIteration=1)
- [Your previous skill vs revision](http://127.0.0.1:3000/local/compare?leftCondition=local-personal&leftIteration=1&rightCondition=local-personal-revised&rightIteration=1)
- [Anthropic vs revision](http://127.0.0.1:3000/local/compare?leftCondition=local-anthropic&leftIteration=1&rightCondition=local-personal-revised&rightIteration=1)

Use the design selector to judge all five at the actual comparison width. Existing notes remain attached to their original condition/revision.

## What to try

| Design | Visible treatment | Interaction to judge |
| --- | --- | --- |
| [1 — Margin](http://127.0.0.1:3000/local/preview/local-personal-revised/1) | Serif notebook with purple paper surfaces; capture belongs inside the notebook | Click a note title, follow a related note, then select New thought and save. The note change has a brief page transition. |
| [2 — Orbit](http://127.0.0.1:3000/local/preview/local-personal-revised/2) | Blue/purple constellation instead of another app window | Click a card or the small walking-note fragment. The center topic changes and its path draws. Resize while checking connector attachment. |
| [3 — Commonplace](http://127.0.0.1:3000/local/preview/local-personal-revised/3) | Coral editorial collection with a generated notebook, folded map and cloth book | Select each artifact to open its actual note. Inspect the full cutout, lift and detail transition. |
| [4 — Grove](http://127.0.0.1:3000/local/preview/local-personal-revised/4) | Green garden with capture in the seed card | Click the seed, reading card or Grow a connection. The related thought unfolds; reverse it during movement. Saving updates the seed. |
| [5 — Relay](http://127.0.0.1:3000/local/preview/local-personal-revised/5) | Blue workflow with persistent source notes and a derived project | Switch Catch → Connect → Make, then reverse quickly. Judge the note movement and outcome together with the moving selector. |

The repeated closing form was removed from Margin and Grove. Default CTA arrows and footer filler were removed; arrows and numbering remain where the author gives them a specific role. This does not claim that every remaining caption or symbol earns its place in your judgment. The five demos still share capture behavior and some implementation primitives, while their visible product representations differ.

## Trial identity and limits

The initial draft used the unchanged WhichAI second-brain prompt, one fresh GPT-6.1 Sol worker at medium reasoning, and the frozen v3.2.0 candidate bundle. It did not receive previous designs, reviewer findings or the parent-held acceptance criteria. The [raw code and identity](../revisions/frontend-v3.2-candidate/raw-draft/snapshot.json) and [raw observations](../output/revision-review/raw-observations.json) remain preserved.

One fresh GPT-6.1 Sol/high composition reviewer inspected the new renders before reading the earlier outputs or user feedback. Its [report](../output/revision-review/visual-review.md) found improved variety but flagged responsive geometry, the repeated closing form, and repeated decorative controls. A second fresh rendered reviewer could not start because native delegation returned **agent thread limit reached**. The parent performed the runtime and motion review directly; no second independent verdict is claimed.

The fresh worker skipped the motion reference and made all five primary state changes instant. That result changed the candidate entrypoint: v3.2.1 loads the motion reference during state planning, including a decision to keep a change instant. The existing worker then reloaded that exact frozen guidance and performed two bounded repair passes using concrete findings. A native generated asset was introduced during repair. This is a reviewed iteration with extra effort, **not an equal-budget one-pass test of v3.2.1**, proof of natural skill discovery, or user approval.

- Previous effective skill bundle: `1c184d68fee88b077edac020e602f9bc1403374f7ea822e452be1d75fd84c418`.
- Initial v3.2.0 bundle: `212397421bcc6fc0142893ac778c477bfacd5a2d7eef87600b3b6dbdfd2cc9c6`.
- Repair v3.2.1 bundle: `b752d4e1ebae61f69fa35de6463dc27003f7b1a4a1aa7159e3f54d439551120e`.

The initial draft used authored CSS/SVG and no generated media. The delivered collection uses one transparent native imagegen sheet. Its [asset provenance](../public/local-personal-revised/asset-provenance.md) records the actual output and prompt. The generation backend version is unverified. No paid media/API fallback was used.

## Verification and handoff

The [verification report](../output/revision-review/verification.md) links the actual route, interaction, geometry and targeted repair results. These checks establish working demos and demonstrated repairs; they do not certify accessibility or production performance. The user's subsequent [acceptance and preference record](frontend-preference-retention.md) supplies the aesthetic judgment for this trial.

[Final output identity](../src/variants/local-personal-revised/gpt-6.1-sol/source/evidence/final-output-snapshot.json) records SHA-256 hashes of the captured working files: code, generated asset, registry, source endpoint and runtime results. Receipt-bound source/revision folders preserve bytes; other text may normalize line endings on checkout. All 13 staged/frozen guidance files and the three preserved raw draft files match their recorded hashes.

The candidate source and existing policy replacements are recorded in [change rationale](../revisions/frontend-v3.2-candidate/change-rationale.md), [instruction review](../revisions/frontend-v3.2-candidate/instruction-review.md), [acceptance criteria](../revisions/frontend-v3.2-candidate/acceptance.md), and the [dependency record](../revisions/frontend-v3.2-candidate/workflow.json). Bounded primary-source research is preserved in [research.md](../revisions/frontend-v3.2-candidate/research.md). The installed workflow catalogue lacks a Codex workflow route, so native agents executed these dependencies; no routed receipt or new scheduler is claimed.

Rendered review is satisfied: the user called the trial cohesive and shippable and said “can push.” Commit and push proceed together under that authorization. Shared-skill promotion was subsequently authorized and completed on 3 October; the frozen trial evidence remains unchanged. Matt's historical attribution remains unresolved and excluded from this trial.
