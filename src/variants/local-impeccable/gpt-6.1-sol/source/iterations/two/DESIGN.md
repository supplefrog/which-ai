---
name: "FIELDNOTES"
description: "Observation ledger for an illustrative second-brain comparison"
colors:
  primary: "#ddfb65"
  accent: "#cedf42"
  ink: "#173a26"
  neutral-bg: "#fbfcf6"
  ledger-ink: "#193022"
  selected-index: "#e9f7ae"
  tag-paper: "#e4f79a"
  divider: "#c8cdc3"
  secondary-text: "#4e5b4f"
  guide-paper: "#f7f9ee"
  action-ink: "#142b1a"
  white: "#fff"
typography:
  display:
    fontFamily: "ImpeccableAnton, sans-serif"
    fontSize: "clamp(65px,6.51vw,100px)"
    fontWeight: 400
    lineHeight: ".99"
    letterSpacing: "-.01em"
  headline:
    fontFamily: "ImpeccableCondensed, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: "1.15"
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
  ledger: "7px"
  control: "4px"
  tag: "2px"
spacing:
  action-x: "24px"
  action-y: "18px"
  ledger-x: "27px"
  ledger-y: "23px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.action-ink}"
    rounded: "7px"
    padding: "18px 24px"
---

# Design System: FIELDNOTES

## Overview

**Creative North Star: "Observation ledger"**

Moss frames a pale field book with a narrow index, observation excerpts, and related ideas. Chartreuse identifies the current category and action. The large Anton offer differs from the Barlow Condensed ledger headings and Archivo Narrow running text.

This name describes the implemented world and direction contract; human descriptive-language confirmation remains pending.

**Key Characteristics:**
- Moss outer field
- Pale ruled ledger
- Chartreuse selected index

## Colors

### Primary
- **Primary**: Observed primary material or state; the frontmatter retains its exact source value.
- **Accent**: Observed accent material or state; the frontmatter retains its exact source value.
- **Selected Index**: Observed selected index material or state; the frontmatter retains its exact source value.
- **Tag Paper**: Observed tag paper material or state; the frontmatter retains its exact source value.

### Secondary
- **Ink**: Observed ink material or state; the frontmatter retains its exact source value.

### Neutral
- **Neutral Bg**: Observed neutral bg material or state; the frontmatter retains its exact source value.
- **Ledger Ink**: Observed ledger ink material or state; the frontmatter retains its exact source value.
- **Divider**: Observed divider material or state; the frontmatter retains its exact source value.
- **Secondary Text**: Observed secondary text material or state; the frontmatter retains its exact source value.
- **Guide Paper**: Observed guide paper material or state; the frontmatter retains its exact source value.
- **Action Ink**: Observed action ink material or state; the frontmatter retains its exact source value.
- **White**: Observed white material or state; the frontmatter retains its exact source value.

## Typography

The frontmatter records the final hero cascade and a representative supporting heading, body and label role. It does not imply that all supporting headings share one size.

The display family ImpeccableAnton is the engine-ranked final headline. Families are self-hosted aliases declared in the source stylesheet; their files use Rubik, Anton, League Gothic or Six Caps for the headline, and Manrope, Archivo Narrow, Barlow Condensed or Saira Stencil One where observed. No font-selection approval is inferred.

## Layout

The desktop offer uses 60%/40% columns. The ledger uses 20%/50%/30%, changing to 19%/51%/30% at 1050px. At 750px it becomes a single vertical ledger; categories become inline buttons, the search remains visible, and the related index follows the notes. The final hero heading is 57px at 750px with line-height 1.02.

Shared navigation wraps and moves below the wordmark at 750px. Component padding and readable text sizes change at the same breakpoint.

## Elevation & Depth

Depth comes from the dark exterior and pale ledger, fine vertical dividers, and colored selection fills. No field-specific box shadow is defined.

## Shapes

The ledger and primary action have 7px corners, category/search controls 4px corners, and tags 2px corners. Related-note markers are circular.

## Components

### Buttons and Navigation

Primary actions link to the local demo. Shared links lift on hover; navigation underlines on hover. Focus-visible links, buttons and inputs receive an accent outline (3px, offset 5px). The search input also has a later outline:none rule; the higher-specificity focus-visible selector supplies the ring.

### Signature Components

Search filters the three literal observations; Reading, Morning and Project category buttons combine with it. The empty state asks for another word or All Notes. The related graph is illustrative and does not track the filter.

- **Category button**: Extracted from the observed selectedIndex implementation; the sidecar contains its static HTML/CSS specimen.
- **Search observations**: Extracted from the observed search implementation; the sidecar contains its static HTML/CSS specimen.
- **Observation tag**: Extracted from the observed tag implementation; the sidecar contains its static HTML/CSS specimen.
- **Observation excerpt**: Extracted from the observed observationList implementation; the sidecar contains its static HTML/CSS specimen.

Motion is recorded in the sidecar. Reduced-motion CSS suppresses transitions and the shared action/note hover translation. Content remains available without entrance animation.

## Do's and Don'ts

This document describes the frozen comparison source; later code changes require fresh extraction.

### Do:
- Do keep the pale book legible against the moss field.
- Do retain a recoverable empty search result.

### Don't:
- Don't describe the illustrative index as a live computed knowledge graph.

Documentation records current implementation, not approval. Engine COMPS, SPEC and PLATES gates passed; HERO is open and later phases are pending at extraction. Human component-kit and assembled-hero review remain pending under the comparative adaptation. No full original-protocol completion is claimed.
