---
name: "COMMONPLACE"
description: "Catalog cells for an illustrative second-brain comparison"
colors:
  primary: "#e84335"
  ink: "#111"
  neutral-bg: "#edf0f1"
  selected-paper: "#fff"
  cell-rule: "#a3abad"
  map-rule: "#b6bec0"
  context-paper: "#f8f9fa"
  secondary-text: "#59666a"
  link-ink: "#b32418"
typography:
  display:
    fontFamily: "ImpeccableSixCaps, sans-serif"
    fontSize: "clamp(95px,10.68vw,164px)"
    fontWeight: 400
    lineHeight: "1"
    letterSpacing: "-.025em"
  headline:
    fontFamily: "ImpeccableAnton, sans-serif"
    fontSize: "40px"
    fontWeight: 400
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
  cell: "0"
  action: "7px"
  indicator: "50%"
spacing:
  action-x: "22px"
  action-y: "18px"
  cell: "12px"
  grid-gap: "9px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.neutral-bg}"
    rounded: "7px"
    padding: "18px 22px"
---

# Design System: COMMONPLACE

## Overview

**Creative North Star: "Catalog cells"**

A cool pale field holds fine square catalog cells and a tomato-red knowledge map. The final Six Caps headline has a much taller and narrower silhouette than the Anton wordmark and supporting headings. Selected white cells connect to a larger pale context excerpt.

This name describes the implemented world and direction contract; human descriptive-language confirmation remains pending.

**Key Characteristics:**
- Fine square cell grid
- Tomato-red selected codes and graph
- Tall Six Caps offer

## Colors

### Primary
- **Primary**: Observed primary material or state; the frontmatter retains its exact source value.
- **Link Ink**: Observed link ink material or state; the frontmatter retains its exact source value.

### Neutral
- **Ink**: Observed ink material or state; the frontmatter retains its exact source value.
- **Neutral Bg**: Observed neutral bg material or state; the frontmatter retains its exact source value.
- **Selected Paper**: Observed selected paper material or state; the frontmatter retains its exact source value.
- **Cell Rule**: Observed cell rule material or state; the frontmatter retains its exact source value.
- **Map Rule**: Observed map rule material or state; the frontmatter retains its exact source value.
- **Context Paper**: Observed context paper material or state; the frontmatter retains its exact source value.
- **Secondary Text**: Observed secondary text material or state; the frontmatter retains its exact source value.

## Typography

The frontmatter records the final hero cascade and a representative supporting heading, body and label role. It does not imply that all supporting headings share one size.

The display family ImpeccableSixCaps is the engine-ranked final headline. Families are self-hosted aliases declared in the source stylesheet; their files use Rubik, Anton, League Gothic or Six Caps for the headline, and Manrope, Archivo Narrow, Barlow Condensed or Saira Stencil One where observed. No font-selection approval is inferred.

## Layout

Desktop offer/grid/map columns are 29%/50%/21%; the grid has four columns with 9px gaps. At 1050px the main columns become 30%/50%/20% and the cell grid becomes three columns. At 750px the page stacks, the cells become two columns, and the map follows them in a 485px box. The final hero is 108px with line-height 1.

Shared navigation wraps and moves below the wordmark at 750px. Component padding and readable text sizes change at the same breakpoint.

## Elevation & Depth

Fine rules separate the collection, context and map. White selection fill lifts the chosen cell tonally; there is no cell shadow.

## Shapes

Catalog cells are square with explicit radius 0; active cells keep the square silhouette and change border color. The shared action alone uses 7px corners. Graph and cell indicators are circular.

## Components

### Buttons and Navigation

Primary actions link to the local demo. Shared links lift on hover; navigation underlines on hover. Focus-visible links, buttons and inputs receive an accent outline (3px, offset 5px). The search input also has a later outline:none rule; the higher-specificity focus-visible selector supplies the ring.

### Signature Components

Search filters twelve authored notes by their literal text. Selecting a cell updates aria-pressed, the active marker, graph labels and context excerpt. Connections use fixed modular offsets from the selected index; they do not infer relationships.

- **Catalog search**: Extracted from the observed search implementation; the sidecar contains its static HTML/CSS specimen.
- **Catalog cell**: Extracted from the observed catalogCells implementation; the sidecar contains its static HTML/CSS specimen.
- **Selected catalog cell**: Extracted from the observed selectedCell implementation; the sidecar contains its static HTML/CSS specimen.
- **Context excerpt**: Extracted from the observed catalogContext implementation; the sidecar contains its static HTML/CSS specimen.

Motion is recorded in the sidecar. Reduced-motion CSS suppresses transitions and the shared action/note hover translation. Content remains available without entrance animation.

## Do's and Don'ts

This document describes the frozen comparison source; later code changes require fresh extraction.

### Do:
- Do keep catalog geometry square and rules thin.
- Do bind map labels and context to the selected note.

### Don't:
- Don't claim the fixed illustrative connections are semantic search or inferred relationships.

Documentation records current implementation, not approval. Engine COMPS, SPEC and PLATES gates passed; HERO is open and later phases are pending at extraction. Human component-kit and assembled-hero review remain pending under the comparative adaptation. No full original-protocol completion is claimed.
