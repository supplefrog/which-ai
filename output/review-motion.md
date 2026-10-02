# Bounded rendered motion review

Revision: `7d8069acc7447d4c89193eb0dc22b35634250d75`. Reviewed local previews in an isolated Playwright session `review-motion`, chiefly at **1440 × 900**, normal motion preference. Report-only; candidate code was unchanged.

## Findings

1. **Taste GPT 1: the chapter effect visibly grows an inset image into its frame.** The frame stays fixed while the image scales from `.8` toward `1`. At a scroll step to 2200px, the first capture had visible gutters; after nominal waits totaling 1000ms the image nearly filled the frame (measured scale `.987`). On the next scroll step, the outgoing image darkened and faded while the next image was still growing. This is a real scroll-catch-up effect, not an image-to-image slide. The sampled chapter cards did not overlap in this variant. The screenshots show the changing border and crop: [early](design-review/motion/taste1-scroll-2200-0.png), [later](design-review/motion/taste1-scroll-2200-850.png). Source: `src/variants/local-taste-gpt/gpt-6.1-sol/source/Designs.tsx:37–40` (`scrub:1`, scale and separate fade/brightness), `designs.module.css:12` (fixed image frame, overflow clipping and `.7s` transform transition). Both mechanisms act on the same image transform, which is consistent with the observed trailing movement; their individual contribution was not isolated.

2. **Taste GPT 2: card stacking covers outgoing copy before the replacement has fully arrived.** As the incoming Connect card rises, its image covers the Capture headline and paragraph. Farther down, the Rediscover image similarly covers the Connect copy while thin strips of older images remain above. This is persistent behavior at those scroll positions, rather than merely a click animation. [First overlap](design-review/motion/taste2-chapter-350.png), [later overlap](design-review/motion/taste2-chapter-650.png). Source: `Designs.tsx:43–45,82` pins each card at staggered 24px offsets, disables pin spacing and gives later cards higher stacking order. Taste 2 has **pin + stack**, not the scale mode used by Taste 1.

3. **The five Taste GPT pages share a motion vocabulary, but are not literally identical.** All use the same entrance setup, marquee, bento interactions and expanding image accordion. Source mode assignments, corroborated by the rendered chapter checks, are:

   | Variant | Chapter/statement differences |
   | --- | --- |
   | 1 | Image scale/fade; word reveal; no chapter stack |
   | 2 | Pinned title and stacked cards; no image scale |
   | 3 | Word reveal and stacked cards; title scrolls away; no image scale |
   | 4 | Pinned title and image scale/fade; no chapter stack |
   | 5 | Image scale/fade and stacked cards; title scrolls away |

   The checks of 3–5 showed the corresponding image/pinning differences and sampled the same accordion expansion on hover. Source: `Designs.tsx:12–16,35–45,84`; `designs.module.css:10–13`. Repetition is strongest in the shared lower-page component structure, not in an identical set of chapter effects. Exploratory captures remain outside the repo under `work/review-motion-taste3*`, `taste4*`, and `taste5*`.

4. **Emil 2: the tab highlight moves clearly; panel feedback is much smaller.** Clicking Connect immediately replaces Capture's panel, then the network labels fade/rise into place while the highlight travels. The captured intermediate state has Connect content already visible while the highlight remains largely under Capture: [early](design-review/motion/emil2-connect-0.png), [next capture](design-review/motion/emil2-connect-70.png). There is a small `.98 → 1` scale-in with a 6px rise, so “no zoom at all” would overstate it. There is no large panel zoom or continuous shared-element transformation. Source: `src/variants/local-emil/gpt-6.1-sol/source/Designs.tsx:37`; `designs.module.css:5` (220ms clip-path highlight; 200ms label entry), `designs.module.css:11` (`noteIn`). **Additional rendered issue:** at 1440 × 900, Capture's second receipt extends into/through the board footer. Its fixed 326px body is shorter than the displayed Capture contents (`designs.module.css:5`).

5. **Emil 1 and 4: direct note/page clicks do nothing; separate selectors work.** Clicking “The art of noticing” left the note unchanged and opened no dialog. Clicking “A place to begin” similarly left the Folio page unchanged. The dot selector in 1 and “Reading 02” selector in 4 did change the displayed note/page. The cards are display elements; their handlers are on the selectors. Source: `Designs.tsx:31,49`; replacement animation CSS at `designs.module.css:3,9`. Whether direct clicking should be supported is a product decision; this review only confirms the current behavior.

6. **Baseline 4's yellow underline and repeated-text strip are static.** Two settled viewport captures 1600ms apart showed the same underline and strip positions. CSS supplies a rotated underline pseudo-element and a static strip; neither has a motion rule. This does not imply that the whole page is inert: its yellow note and favorite controls are interactive. Source: `src/variants/local-baseline/gpt-6.1-sol/source/designs.module.css:15`; `Designs.tsx:43`.

7. **The connector mismatches are visible in both optional checks.** Anthropic 4's lines meet percentage-positioned button anchors below the dots, rather than meeting the visible dots. Selecting Walking changes the dot size and note detail while the SVG geometry stays fixed; the gap remains. Source: `src/variants/local-anthropic/gpt-6.1-sol/source/Designs.tsx:56`; `designs.module.css:9` (button centered as a whole including label). Impeccable 4's map has five drawn circles but four independent text labels. At 1440 × 900, the Walking label runs past the sidebar edge, the center Attention label sits down the outgoing line, and the lower-right circle has no corresponding label. Source: `src/variants/local-impeccable/gpt-6.1-sol/source/Designs.tsx:64`; `Designs.module.css:16` (SVG geometry and separate percentage labels). These were checked visually; optional exploratory screenshots remain at `work/review-motion-anthropic4*.png` and `work/review-motion-impeccable4*.png` outside the repo.

## Limits

This is a bounded desktop interaction and scroll review, not all 50 pages, a mobile sweep, reduced-motion validation, a frame-rate measurement or an animation-performance trace. Screenshot delay labels are requested waits between captures, not precise timestamps from the initiating action. Remote photo content was observed as rendered and not downloaded separately. The initial Taste 1 screenshot used the browser's smaller default viewport; decisive paired evidence uses 1440 × 900.

Raw selector/click and position readbacks remain in `C:/Users/E/Documents/Codex/2026-10-02/wh/work/review-motion-*-observations.txt`; Playwright snapshots remain in that workspace's `.playwright-cli/`. Six decisive images are retained beside this report under `design-review/motion/`.
