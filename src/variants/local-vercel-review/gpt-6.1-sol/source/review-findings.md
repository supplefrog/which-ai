## Designs.tsx

Designs.tsx:10 - clickable backdrop div/section; use semantic dialog with native keyboard dismissal/focus containment
Designs.tsx:10 - email input lacks name/autocomplete/spellCheck; unconditional autoFocus; placeholder lacks …
Designs.tsx:10 - completion update lacks polite live status
Designs.tsx:15 - no skip link for main content; brand token lacks translate="no"
Designs.tsx:21 - decorative button/bookmark pictograms lack explicit aria-hidden
Designs.tsx:27 - selected connection node state absent from URL; exploring update lacks aria-live
Designs.tsx:36 - search input/textarea lack name/autocomplete; draft placeholder lacks …
Designs.tsx:36 - note filters/search absent from URL; dynamic note results lack live status
Designs.tsx:36 - unsaved draft can be discarded by New Note toggle/navigation without warning
Designs.tsx:43 - h1 → h3 heading jump in collage; decorative pictograms lack explicit aria-hidden
Designs.tsx:50 - icon-only rail buttons rely on title rather than explicit aria-label
Designs.tsx:50 - note selection/type filters absent from URL; date hardcoded rather than Intl.DateTimeFormat
Designs.tsx:50 - dynamic selected-note panel lacks live status
Designs.tsx:21 - headings/buttons use sentence case rather than guideline Title Case; also 27/36/43/50
Designs.tsx:27 - static numeric note counts use hardcoded formatting; also 36/50

## designs.module.css

designs.module.css:1 - full-bleed pages lack safe-area inset padding
designs.module.css:5 - input/textarea lack explicit focus-visible replacement
designs.module.css:6 - nav link hover reduces opacity instead of increasing prominence; many buttons/links have no hover feedback
designs.module.css:7 - modal lacks overscroll-behavior: contain
designs.module.css:9 - headings lack text-wrap: balance/prettty; also 11/13/15/17
designs.module.css:11 - border-color transition animates non-transform/opacity property
designs.module.css:11 - numeric comparisons lack tabular-nums; also 17
designs.module.css:13 - search input outline:none without focus-visible/focus-within replacement
designs.module.css:13 - workspace flex/grid children lack min-width:0/long-content handling; also 17
designs.module.css:15 - box-shadow transition animates non-transform/opacity property
designs.module.css:1 - touch controls lack touch-action:manipulation and intentional tap-highlight color
designs.module.css:1 - anchor sections lack scroll-margin-top
designs.module.css:11 - dark page needs document color-scheme/theme-color; component-only scope cannot edit shared html/head
