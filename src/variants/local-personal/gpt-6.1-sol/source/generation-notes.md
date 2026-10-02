# Fresh personal-skill comparison candidate

Effective frontend-ui-engineering version: **3.1.0**. Frozen bundle SHA-256: **1c184d68fee88b077edac020e602f9bc1403374f7ea822e452be1d75fd84c418**. The evidence snapshot is unchanged.

Loaded only the frozen `evidence/skill/SKILL.md` and its references `personal-design-defaults.md`, `taste-selection.md`, `component-state.md`, `accessibility-checklist.md`, and `motion-design.md`. Read the root package.json for existing tooling and dependencies. Did not inspect sibling variants, screenshots, rankings, other aesthetic skills, or user notes. No generated or external assets, additional packages, external fonts, backend calls, or paid services.

## Five provisional directions

1. **Thought index:** white and deliberate cobalt; generous two-column composition and an oversized index sheet make capturing and returning to fragments tangible. The index is an illustration, not an invented activity feed.
2. **Growing thought:** fresh white/green, expressive serif, a three-part seed-to-flower diagram. The metaphor explains capture/connect/return; it does not claim automated idea growth. The diagram reflows into readable vertical rows at the narrowest width.
3. **Find the thread:** dark blue-green and warm coral; a composed constellation is the focal explanation of linked thinking. The graphic is explicitly illustrative and stays static, so reading and keyboard access do not depend on motion.
4. **Put it somewhere:** bright yellow field, forceful sans type, practical instruction list. An everyday-tool voice makes the capture action direct. The typography reflows rather than clipping; the decorative stamp drops out on smaller screens.
5. **Second home:** cool white and violet, softly rounded composition, overlapping invented notebook covers. The covers establish a coherent physical collection rather than borrowing branded imagery. Softer framing is kept out of the actual note controls.

These directions apply declared preferences for authored symbols, discoveries, breathing room, and physically coherent relationships without treating any one palette as the user's universal taste. No cream/paper default was used. All five share comparable explanatory content and the same local example task path; their page compositions differ meaningfully.

## Prototype paths and boundaries

- Header **Start a note** and each hero action open a native modal dialog. **Close first thought** or Escape closes it. A visible label, required textarea, and **Keep this thought** let the user retain text while the page is mounted; success copy explicitly says nothing was sent or stored on a server.
- **Try it**, **Take a look inside**, and footer **Explore the example** navigate to the real interactive example.
- **Find a thought** filters example note titles and has a meaningful no-results state. Selecting a note updates its content and exposes selection with `aria-pressed`.
- **Follow this thought** reveals a connected note. Selecting that connected note opens its content. **Hide connection** reverses the disclosure.
- **Catch a thought before it goes** plus **Add note** adds a note to the example, clears search, selects it, and announces the local lifetime. Native validation covers empty input. No account creation, synchronisation, persistence, or commercial claim is implied.

## Protocol adaptations

The user's explicitly delegated five-iteration comparison authorizes these provisional choices, so a separate taste question was not added. The parent owns registration, route switching, rendered delivery, and user review. All appearance changes remain uncommitted pending that review; no skill synchronization or publication was performed.

## Meaningful checks and remaining limits

- TypeScript `transpileModule` parsed the candidate with zero syntax diagnostics and verified all five named page exports.
- Targeted `npx eslint src/variants/local-personal/gpt-6.1-sol/source/Designs.tsx` completed with exit code 0 and no diagnostics.
- Source review: scoped CSS Module; one h1 per page; semantic main/header/navigation/footer; visible form labels; native buttons and dialog; skip link; focus indicators; live status; illustrative artwork labels; no external requests or assets.
- Responsive rules cover stacked content, shrinkable inputs, wrapped controls, vertical diagram changes, and local layout adjustments down to 320px. Reduced-motion and forced-colors fallbacks are included; no animations or delayed controls were introduced.
- Source checks do **not** establish rendering, contrast conformance, screen-reader behavior, focus restoration, mobile overflow, or aesthetic quality. Parent integration/browser checks and user review remain required. User review is not performance evidence.

Parent runtime verification: five routes at 320/390/1440px; common note/dialog interactions at 390/1440px passed, including Escape/focus restoration. Design four headline overflow repaired with responsive font sizing. Evidence: repository output/playwright/personal-verification.json. Human taste review pending; the user directed commit and push together for this test run.
