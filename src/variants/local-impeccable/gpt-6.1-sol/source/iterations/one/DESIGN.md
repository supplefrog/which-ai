---
name: "Waypoint"
description: "Route atlas for an illustrative second-brain comparison"
colors:
  primary: "#ff8513"
  survey-field: "#184aba"
  ink: "#0b1945"
  neutral-bg: "#fff"
  note-ink: "#101d47"
  note-paper: "#edf4ff"
  selected-paper: "#ffedda"
  close-paper: "#eef3fc"
  secondary-text: "#465575"
  action-ink: "#101c4d"
  close-action: "#214bb8"
typography:
  display:
    fontFamily: "ImpeccableRubik, sans-serif"
    fontSize: "clamp(54px,5.27vw,81px)"
    fontWeight: 600
    lineHeight: "1.09"
    letterSpacing: "-.035em"
  headline:
    fontFamily: "ImpeccableManrope, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: "1.15"
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
  control: "7px"
  marker: "50%"
spacing:
  action-x: "24px"
  action-y: "18px"
  note-x: "15px"
  note-y: "13px"
components:
  button-primary:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.action-ink}"
    rounded: "7px"
    padding: "18px 24px"
---

# Design System: Waypoint

## Overview

**Creative North Star: "Route atlas"**

Cobalt terrain carries white routes and pale note windows. Orange marks the active destination; a separate white section carries the explanatory sequence. The contour ground is the authored atlas plate, while the selectable notes and route lines remain semantic UI.

This name describes the implemented world and direction contract; human descriptive-language confirmation remains pending.

**Key Characteristics:**
- Cobalt atlas ground
- Pale rounded note windows
- Orange destination state

## Colors

### Primary
- **Primary**: Observed primary material or state; the frontmatter retains its exact source value.

### Secondary
- **Survey Field**: Observed survey field material or state; the frontmatter retains its exact source value.
- **Close Action**: Observed close action material or state; the frontmatter retains its exact source value.

### Neutral
- **Ink**: Observed ink material or state; the frontmatter retains its exact source value.
- **Neutral Bg**: Observed neutral bg material or state; the frontmatter retains its exact source value.
- **Note Ink**: Observed note ink material or state; the frontmatter retains its exact source value.
- **Note Paper**: Observed note paper material or state; the frontmatter retains its exact source value.
- **Selected Paper**: Observed selected paper material or state; the frontmatter retains its exact source value.
- **Close Paper**: Observed close paper material or state; the frontmatter retains its exact source value.
- **Secondary Text**: Observed secondary text material or state; the frontmatter retains its exact source value.
- **Action Ink**: Observed action ink material or state; the frontmatter retains its exact source value.

## Typography

The frontmatter records the final hero cascade and a representative supporting heading, body and label role. It does not imply that all supporting headings share one size.

The display family ImpeccableRubik is the engine-ranked final headline. Families are self-hosted aliases declared in the source stylesheet; their files use Rubik, Anton, League Gothic or Six Caps for the headline, and Manrope, Archivo Narrow, Barlow Condensed or Saira Stencil One where observed. No font-selection approval is inferred.

## Layout

Desktop offer/map columns are 39%/61%, changing to 42%/58% at 1050px. The atlas has a 570px minimum height. At 750px the offer stacks above a 545px map; four note windows alternate down the map, route SVG lines hide, and the explanatory steps become a vertical list. The final headline is 54px at 750px; its late font override supersedes the earlier 1050px headline size.

Shared navigation wraps and moves below the wordmark at 750px. Component padding and readable text sizes change at the same breakpoint.

## Elevation & Depth

The plate supplies terrain detail; pale windows sit over white SVG routes. Note markers alone have the outline shadow 0 0 0 2px #184aba. The rest uses color and spacing rather than card shadows.

## Shapes

Actions and note windows use 7px corners. Destination markers are circles; selection enlarges the orange marker from 20px to 29px on desktop.

## Components

### Buttons and Navigation

Primary actions link to the local demo. Shared links lift on hover; navigation underlines on hover. Focus-visible links, buttons and inputs receive an accent outline (3px, offset 5px). The search input also has a later outline:none rule; the higher-specificity focus-visible selector supplies the ring.

### Signature Components

Selecting one of four note buttons changes aria-pressed, its paper and marker, and the live map legend. Action links scroll to the illustrative atlas; no input field exists in this world.

- **Destination note**: Extracted from the observed mapNote implementation; the sidecar contains its static HTML/CSS specimen.
- **Selected destination**: Extracted from the observed activeDestination implementation; the sidecar contains its static HTML/CSS specimen.
- **Map legend**: Extracted from the observed mapLegend implementation; the sidecar contains its static HTML/CSS specimen.

Motion is recorded in the sidecar. Reduced-motion CSS suppresses transitions and the shared action/note hover translation. Content remains available without entrance animation.

## Do's and Don'ts

This document describes the frozen comparison source; later code changes require fresh extraction.

### Do:
- Do keep the atlas plate, routes and semantic note windows as separate layers.
- Do pair the active destination paper with its enlarged orange marker.

### Don't:
- Don't treat the demonstration notes as customer evidence.

Documentation records current implementation, not approval. Engine COMPS, SPEC and PLATES gates passed; HERO is open and later phases are pending at extraction. Human component-kit and assembled-hero review remain pending under the comparative adaptation. No full original-protocol completion is claimed.
