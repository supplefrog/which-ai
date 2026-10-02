---
name: "OVERPRINT"
description: "Registered thoughts for an illustrative second-brain comparison"
colors:
  primary: "#ed1741"
  accent: "#ec173d"
  ink: "#202239"
  neutral-bg: "#fff"
  cyan: "#8ae6f5"
  amber: "#ffdf72"
  scarlet-paper: "#ff9caf"
  violet: "#6423cc"
  note-ink: "#142339"
  cyan-ink: "#007899"
  amber-ink: "#9e4e00"
  scarlet-ink: "#ad002a"
  secondary-text: "#394564"
  step-paper: "#f7f9fd"
typography:
  display:
    fontFamily: "ImpeccableLeague, sans-serif"
    fontSize: "clamp(55px,6.77vw,104px)"
    fontWeight: 400
    lineHeight: "1.15"
    letterSpacing: "-.025em"
  headline:
    fontFamily: "ImpeccableStencil, sans-serif"
    fontSize: "25px"
    fontWeight: 400
    lineHeight: "normal"
  body:
    fontFamily: "ImpeccableManrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.55"
  label:
    fontFamily: "ImpeccableManrope, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: ".04em"
rounded:
  pass: "15px"
  action: "7px"
  control: "4px"
spacing:
  action-x: "24px"
  action-y: "18px"
  pass-top: "22px"
  pass-x: "24px"
  pass-bottom: "26px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "7px"
    padding: "18px 24px"
---

# Design System: OVERPRINT

## Overview

**Creative North Star: "Registered thoughts"**

White paper holds cyan, amber and scarlet passes; violet owns the registration control. The final hero uses League Gothic with color-separated words. Stencil lettering remains in the wordmark, pass headings and closing statement; note text uses Manrope.

This name describes the implemented world and direction contract; human descriptive-language confirmation remains pending.

**Key Characteristics:**
- Three opaque colored passes
- Violet registration control
- Condensed hero with stencil component headings

## Colors

### Primary
- **Primary**: Observed primary material or state; the frontmatter retains its exact source value.
- **Accent**: Observed accent material or state; the frontmatter retains its exact source value.
- **Scarlet Paper**: Observed scarlet paper material or state; the frontmatter retains its exact source value.
- **Scarlet Ink**: Observed scarlet ink material or state; the frontmatter retains its exact source value.

### Secondary
- **Cyan**: Observed cyan material or state; the frontmatter retains its exact source value.
- **Cyan Ink**: Observed cyan ink material or state; the frontmatter retains its exact source value.

### Tertiary
- **Amber**: Observed amber material or state; the frontmatter retains its exact source value.
- **Violet**: Observed violet material or state; the frontmatter retains its exact source value.
- **Amber Ink**: Observed amber ink material or state; the frontmatter retains its exact source value.

### Neutral
- **Ink**: Observed ink material or state; the frontmatter retains its exact source value.
- **Neutral Bg**: Observed neutral bg material or state; the frontmatter retains its exact source value.
- **Note Ink**: Observed note ink material or state; the frontmatter retains its exact source value.
- **Secondary Text**: Observed secondary text material or state; the frontmatter retains its exact source value.
- **Step Paper**: Observed step paper material or state; the frontmatter retains its exact source value.

## Typography

The frontmatter records the final hero cascade and a representative supporting heading, body and label role. It does not imply that all supporting headings share one size.

The display family ImpeccableLeague is the engine-ranked final headline. Families are self-hosted aliases declared in the source stylesheet; their files use Rubik, Anton, League Gothic or Six Caps for the headline, and Manrope, Archivo Narrow, Barlow Condensed or Saira Stencil One where observed. No font-selection approval is inferred.

## Layout

Desktop offer/passes use 40%/60% columns with a 30px gap, narrowed to 10px at 1050px. Three flex passes have a 425px minimum height. At 750px the surface stacks, passes become separate vertical sheets with 10px horizontal stack gutters; each pass retains 25% of its desktop translation, and the registration controls remain visible. The final hero is 65px at that breakpoint, line-height 1.17.

Shared navigation wraps and moves below the wordmark at 750px. Component padding and readable text sizes change at the same breakpoint.

## Elevation & Depth

The three pass sheets are opaque, ordered by z-index 1/2/3. Translation and overlap supply depth; the CSS defines no blend mode, transparency, or pass shadow.

## Shapes

Pass sheets use 15px corners, actions 7px, and the register button 4px. Numbered step markers are circular.

## Components

### Buttons and Navigation

Primary actions link to the local demo. Shared links lift on hover; navigation underlines on hover. Focus-visible links, buttons and inputs receive an accent outline (3px, offset 5px). The search input also has a later outline:none rule; the higher-specificity focus-visible selector supplies the ring.

### Signature Components

The range starts at 35 and assigns each pass --pass-shift: (alignment-100)*(i-1)*.38px. Desktop uses translateX(var(--pass-shift,0px)); at 750px and below it uses translateX(calc(var(--pass-shift,0px) * .25)). Align the notes sets 100, changes its label to In register, and zeroes each translation. On mobile the readable stacked passes retain the range and align action, so registration remains available.

- **Capture pass**: Extracted from the observed pass implementation; the sidecar contains its static HTML/CSS specimen.
- **Registration range**: Extracted from the observed registrationControl implementation; the sidecar contains its static HTML/CSS specimen.
- **Register action**: Extracted from the observed registrationControl implementation; the sidecar contains its static HTML/CSS specimen.

Motion is recorded in the sidecar. Reduced-motion CSS suppresses transitions and the shared action/note hover translation. Content remains available without entrance animation.

## Do's and Don'ts

This document describes the frozen comparison source; later code changes require fresh extraction.

### Do:
- Do retain readable text in every pass.
- Do keep registration as one coordinated interaction.

### Don't:
- Don't claim the opaque pass fills are rendered with physical ink blending.

Documentation records current implementation, not approval. Engine COMPS, SPEC and PLATES gates passed; HERO is open and later phases are pending at extraction. Human component-kit and assembled-hero review remain pending under the comparative adaptation. No full original-protocol completion is claimed.
