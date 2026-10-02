---
name: "KEEPER"
description: "Note cutting bench for an illustrative second-brain comparison"
colors:
  primary: "#ff681a"
  ink: "#151515"
  neutral-bg: "#fff"
  bench: "#111"
  rail: "#242424"
  note-paper: "#303030"
  tag-paper: "#2c2c2c"
  reading-rule: "#3a3a3a"
  tag-rule: "#3d3d3d"
  secondary-text: "#b2b2b2"
  collection-paper: "#f5f5f5"
  collection-ink: "#181818"
typography:
  display:
    fontFamily: "ImpeccableLeague, sans-serif"
    fontSize: "clamp(64px,6.25vw,96px)"
    fontWeight: 400
    lineHeight: "1.05"
    letterSpacing: "-.005em"
  headline:
    fontFamily: "ImpeccableCondensed, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: "normal"
  body:
    fontFamily: "ImpeccableNarrow, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.55"
  label:
    fontFamily: "ImpeccableNarrow, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: ".04em"
rounded:
  rail-note: "6px"
  reading: "5px"
  control: "4px"
  action: "7px"
  arrow: "50%"
spacing:
  action-x: "24px"
  action-y: "18px"
  rail-x: "15px"
  rail-y: "14px"
  reading-x: "27px"
  reading-y: "23px"
components:
  button-primary:
    backgroundColor: "{colors.bench}"
    textColor: "{colors.neutral-bg}"
    rounded: "7px"
    padding: "18px 24px"
---

# Design System: KEEPER

## Overview

**Creative North Star: "Note cutting bench"**

A committed orange offer meets a black working bench. Dark rail notes become white when selected; orange keep controls and markers connect the selected fragment to a pale collected-thought section. League Gothic supplies the final offer, while Barlow Condensed marks the bench headings.

This name describes the implemented world and direction contract; human descriptive-language confirmation remains pending.

**Key Characteristics:**
- Orange offer field
- Perforated black note rail
- White selection and reversible local actions

## Colors

### Primary
- **Primary**: Observed primary material or state; the frontmatter retains its exact source value.

### Neutral
- **Ink**: Observed ink material or state; the frontmatter retains its exact source value.
- **Neutral Bg**: Observed neutral bg material or state; the frontmatter retains its exact source value.
- **Bench**: Observed bench material or state; the frontmatter retains its exact source value.
- **Rail**: Observed rail material or state; the frontmatter retains its exact source value.
- **Note Paper**: Observed note paper material or state; the frontmatter retains its exact source value.
- **Tag Paper**: Observed tag paper material or state; the frontmatter retains its exact source value.
- **Reading Rule**: Observed reading rule material or state; the frontmatter retains its exact source value.
- **Tag Rule**: Observed tag rule material or state; the frontmatter retains its exact source value.
- **Secondary Text**: Observed secondary text material or state; the frontmatter retains its exact source value.
- **Collection Paper**: Observed collection paper material or state; the frontmatter retains its exact source value.
- **Collection Ink**: Observed collection ink material or state; the frontmatter retains its exact source value.

## Typography

The frontmatter records the final hero cascade and a representative supporting heading, body and label role. It does not imply that all supporting headings share one size.

The display family ImpeccableLeague is the engine-ranked final headline. Families are self-hosted aliases declared in the source stylesheet; their files use Rubik, Anton, League Gothic or Six Caps for the headline, and Manrope, Archivo Narrow, Barlow Condensed or Saira Stencil One where observed. No font-selection approval is inferred.

## Layout

Offer/bench columns are 33%/67%, changing to 32%/68% at 1050px. The desktop hero has a 720px minimum height. At 750px the offer stacks over the bench, the final headline is 77px with line-height 1.07, and the rail retains horizontal scrolling with 169px minimum note widths and sticky arrows. Deferred notes and collection sections stack.

Shared navigation wraps and moves below the wordmark at 750px. Component padding and readable text sizes change at the same breakpoint.

## Elevation & Depth

The black bench, charcoal notes and white selection provide tonal separation. The rail perforations use repeating radial gradients, not an image asset. No rail or reading-pane shadow is defined.

## Shapes

Rail notes use 6px corners and 2px selection borders; the reading pane uses 5px corners, keep/tag/deferred controls 4px, and actions 7px. Previous/next controls are 29px circles.

## Components

### Buttons and Navigation

Primary actions link to the local demo. Shared links lift on hover; navigation underlines on hover. Focus-visible links, buttons and inputs receive an accent outline (3px, offset 5px). The search input also has a later outline:none rule; the higher-specificity focus-visible selector supplies the ring.

### Signature Components

Previous/next wrap over four notes; direct rail selection updates the reading pane. Keep toggles membership in a local collection, and Set aside toggles reversible deferred membership. The collection shows three illustrative examples until the user keeps a note. These state changes are session-local React state.

- **Rail note**: Extracted from the observed railNote implementation; the sidecar contains its static HTML/CSS specimen.
- **Selected rail note**: Extracted from the observed selectedRail implementation; the sidecar contains its static HTML/CSS specimen.
- **Keep action**: Extracted from the observed keeperReading implementation; the sidecar contains its static HTML/CSS specimen.
- **Note tag**: Extracted from the observed keeperTags implementation; the sidecar contains its static HTML/CSS specimen.
- **Deferred note**: Extracted from the observed setAside implementation; the sidecar contains its static HTML/CSS specimen.

Motion is recorded in the sidecar. Reduced-motion CSS suppresses transitions and the shared action/note hover translation. The collection return still calls smooth scroll from JavaScript; CSS does not override that explicit option.

## Do's and Don'ts

This document describes the frozen comparison source; later code changes require fresh extraction.

### Do:
- Do distinguish the white selected note from the charcoal rail.
- Do retain reversible Keep and Set aside states.

### Don't:
- Don't describe local React state as persistent account storage.

Documentation records current implementation, not approval. Engine COMPS, SPEC and PLATES gates passed; HERO is open and later phases are pending at extraction. Human component-kit and assembled-hero review remain pending under the comparative adaptation. No full original-protocol completion is claimed.
