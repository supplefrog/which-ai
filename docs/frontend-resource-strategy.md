# Theme-aware component selection

Checked 3 October 2026. The approved frontend revision is now active as **v3.2.1** through Agent Sync; activation commit `489666bb7e181e507cdb712bd4e81172055aab9f` was pushed and remotely verified. The frozen WhichAI comparisons keep their original instruction/output identities. The resource workflow was subsequently deployed and remotely verified at `4ce7d3fa2aa01f6c20b78ebb884842e2b3d9b829`, retaining version 3.2.1. [Verification identity](frontend-resource-verification.json) records the exact source and limits. This research changes the reusable selection method, not those pages.

The practical solution is **targeted discovery, an inspected shortlist, and an isolated preview before product integration**. A resource catalog alone cannot establish fit. Existing tools already retrieve source and offer previews; the missing instruction is to use those capabilities for the current task and explain why the selected part fits. This is a reasoned strategy with bounded probes, not proof that future aesthetic judgment becomes deterministic.

## What the agent now does

1. Inspect the product's existing components, tokens and approved qualities. Reuse them when they satisfy the task.
2. For an unresolved part, search suitable resources by role, theme/material, required behavior and stack. Search a selected-passage highlight or a lateral gallery with clipped image zoom, rather than a vaguely beautiful page. Browsing every item is unnecessary.
3. Inspect credible candidates' source and actual demos. Explain anatomy/task fit, visual fit, behavior, required adaptation and meaningful limits. Preserve a small defensible shortlist; stop when the decision is reviewable.
4. Show proposed new UI parts before changing the product by default. Delegated aesthetic choice alone does not waive this preference. Use representative content and product styling where adaptation remains unresolved; motion needs a playable preview. Routine repairs do not reopen component selection.
5. Integrate the selected part after the required review or explicit waiver. Retain source/license, chosen and rejected qualities, adaptations and approval in the project's existing design context. The final rendered result still needs review before commit.

Suitable premade components are preferred. Handwritten coordination remains useful where existing parts do not implement the needed relationship. A copied component's default theme, text, timing or dependency set does not become product authority.

## Existing foundation rather than another framework

Use **shadcn-compatible registries for source delivery**, **21st for broader visual discovery when authenticated**, and targeted **GodUI/Fancy/Animate UI/Magic UI** parts when their behavior fits. Keep our existing frontend skill as the owner. The [21st build](https://21st.dev/.well-known/skills/21st-ui-build/SKILL.md) and [explore](https://21st.dev/.well-known/skills/21st-ui-explore/SKILL.md) skills already preserve project identity and create comparable directions. [Emil's prototype](https://github.com/emilkowalski/skills/tree/main/skills/prototype) already separates isolated exploration from promotion. We reused those ideas without installing overlapping suites, forced option counts, fixed picker markup or universal motion timings.

The current session exposes no shadcn, 21st or GodUI component MCP. Public documentation, demos and permitted upstream registry source remain usable. This work did not configure new credentials, purchase access, install component suites or claim those integrations were tested.

## Named resources

| Resource | Best role and verified capability | Decision-changing limit |
|---|---|---|
| [shadcn/ui](https://ui.shadcn.com/docs/mcp) | Existing accessible components; official MCP searches configured registries and reads source/examples/dependencies | `view`, dry-run and diff inspect code/files. They do not render or judge the product. Third-party registry licenses are separate. |
| [21st](https://21st.dev/mcp.md) | Catalog search, design-context inspiration and source retrieval; MCP Apps can display preview cards in compatible hosts | Authenticated access and client UI support matter. [Two free copies/day](https://21st.dev/pricing) is a code-copy quota, shared with icon copies; hosted AI is separate. Component licenses vary. Link official previews instead of mirroring restricted marketplace media. |
| [getDesign](https://getdesign.md/stripe/design-md) | Curated site-inspired design descriptions, previews and DESIGN.md downloads | Inferred guidance, not recovered functional components or proven original CSS. [Public and paid item scope](https://getdesign.md/terms) differ; the [Catalog Pass](https://getdesign.md/design-md-pass) lists a selected collection. |
| [Aura](https://www.aura.build/components) | Premade parts/categories; [HTML, Tailwind and vanilla JS export](https://www.aura.build/pricing) | Framework adaptation and external effects need inspection. Free personal use and Pro commercial use differ. No official agent MCP was established. Displayed annual pricing math is inconsistent; check the actual offer before purchase. |
| [GodUI](https://godui.design/docs/mcp) | MIT React/Tailwind/Motion source; official list/search/get-component MCP | Distinct from Godly inspiration. Inspect exact dependencies and global token merges. Normal dialog open/close was observed; rapid interruption and integrated accessibility were not proved. |
| [Fancy Components](https://www.fancycomponents.dev/docs/installation) | MIT component source and shadcn registry; strong targeted text/material interactions | Per-part Motion/dependency and reduced-motion adaptation. A 3D cube carousel is not a lateral card slide. |
| [DESIGNmd](https://designmd.ai/mcp) | Searchable community design kits, previews, MCP and CLI | Content/download needs a free key; per-kit license and format vary. A design description is not a runtime component. |
| [Google DESIGN.md](https://github.com/google-labs-code/design.md) | Portable token/rationale format, linter and exports | Alpha format/toolchain, not an arbitrary-site extractor or component library. |
| [Dembrandt](https://github.com/dembrandt/dembrandt) | MIT existing extractor, observed computed CSS and token/report exports | Optional when numerical reference measurement is needed. Grouping and component classification are heuristic; hidden states, canvas, fluid CSS and dynamic content can be missed. Source inspected, extraction accuracy not benchmarked. |

Screenshots help compare appearance. Live computed CSS gives stronger evidence for observed numeric values. Neither recovers the original designer's full token intent, component semantics, responsive formulas or hidden interaction states. No new screenshot scraper is needed.

## The liked parts remain choices

| User preference | Usable starting point | Correction retained |
|---|---|---|
| Functional text/textbox sweep | [Fancy Text Highlighter](https://www.fancycomponents.dev/docs/components/text/text-highlighter) | Inline text highlighting is implemented; matching textbox treatment needs a separate layer. Keep text readable, trigger/reset explicit and colors native to the product. |
| Card travel, then image zoom | [Animate UI Slide](https://animate-ui.com/docs/primitives/effects/slide) and [Image Zoom](https://animate-ui.com/docs/primitives/effects/image-zoom) | Separate movement/zoom layers plus small coordination. Settle travel before the zoom where it helps; keep the real image visible and rounded clipping intact throughout, including reversals. Neither inspected part supplies the complete sequence alone. |
| Animated underline, strip, cursor or sentence-fitting reveal | [Fancy underline](https://www.fancycomponents.dev/docs/components/text/underline-animation), [marquee](https://www.fancycomponents.dev/docs/components/blocks/simple-marquee) and suitable text parts | Use when movement sells the idea. Avoid repeating the same fade choreography and delaying ordinary reading/input. |
| Small grounded floating or tilting objects | [Fancy Parallax Floating](https://www.fancycomponents.dev/docs/components/image/parallax-floating) | Material, size, origin and travel should work together. Large floating screenshots combined with zoom need separate justification. |
| Functional paper in a reader | Authored/licensed texture; [Magic UI noise source](https://magicui.design/r/noise-texture.json) as a conditional substrate | Noise is not automatically paper fiber. Review intensity, seams, warmth, dark-mode compositing and print. Native GPT Image generation remains authorized when a fresh asset helps; backend version is unverified when the tool cannot establish it. |
| Animated reader theme control | [Animate UI Theme Toggler](https://animate-ui.com/docs/components/buttons/theme-toggler) as a candidate | Inspected togglers produce page wipes and icon replacements, not a sun/moon morph. Animate UI's exact [license](https://github.com/imskyleen/animate-ui/blob/main/LICENSE.md) adds a Commons Clause restriction; the MIT badge alone is incomplete. Preserve that distinction; verify flashing, contrast and interruption. |
| Thorough opening/closing | Existing accessible primitives; [GodUI Morphing Dialog](https://godui.design/docs/components/overlays/morphing-dialog) as prior art | Check both directions, content lifetime, rapid reversal, focus and reduced motion. A successful first opening is insufficient. |

These options do not impose warm paper, sweeps, floats or one animation pack on every product. Exact private reader code/assets were not copied into the shared skill or this fork.

## Remaining catalog coverage

[Godly](https://godly.design/), [Siteinspire](https://www.siteinspire.com/), [Minimal Gallery](https://minimal.gallery/), [Hoverstat.es](https://www.hoverstat.es/), [Awwwards](https://www.awwwards.com/) and [Pinterest](https://www.pinterest.com/) remain visual discovery sources. Follow original sites for relevant interactions; gallery images are not licensed component code. Public pages were assessed, without authenticated Pinterest browsing or paid gallery access.

[Pretext](https://github.com/chenglou/pretext) is a text-measurement utility for advanced layouts, not a style selector. [Phosphor](https://phosphoricons.com/) supplies a coherent icon family, not an interaction lifecycle.

The existing skill sources were refreshed for their selection role: [Anthropic](https://github.com/anthropics/skills/tree/main/skills/frontend-design) provides subject-led visual judgment; [Impeccable](https://github.com/pbakaus/impeccable) adds product context, critique and live iteration; [Hallmark](https://github.com/Nutlope/hallmark) offers structure/study vocabulary; [TasteSkill](https://www.tasteskill.dev/) provides brief inference and system mapping; [Vercel](https://github.com/vercel-labs/web-interface-guidelines) remains a review aid; [Emil](https://github.com/emilkowalski/skills) supplies dependency-selection and isolated prototype prior art. None is a premade-component marketplace. Their full suites, aesthetic bans, theme rotation and fixed choreography were not adopted.

## Evidence and limits

Three independent GPT-6.1 Sol/medium workers researched registry tooling, design extraction, and component/motion resources. The parent inspected canonical skill mechanisms, played Fancy's highlight and captured its rendered result. A fresh Sol/high reviewer checked the staged instructions against their exact manifest; its identified preview-default ambiguity was repaired before admission. Separate fresh probes exercised resource selection and a routine wrapping repair. The selection probe distinguished predefined highlights from actual passage capture, rejected a package that rewrites React-owned DOM, observed light/dark switching, and caught the Animate UI license restriction; the parent verified that correction. The repair probe avoided browsing and preserved the approved component system. A third policy-scope probe confirmed that delegated taste retains the parts preview, while an explicit preview waiver permits direct integration and still requires resulting-page review before commit.

The dependency record used native agents because the installed routed workflow catalog lacks a Codex execution cell. No new scheduler or routed execution receipt is claimed. Local research keeps raw public-source receipts, queries and bounded access failures; they are not a mirrored public component/media database.

Static validation, source/demonstration observations and injected-skill probes support the workflow. They do not establish native MCP rendering, extraction fidelity, account entitlements, comparative UI improvement, cross-host behavioral parity or automatic taste accuracy. Actual future selected parts still need the requested product-context preview and user judgment.
