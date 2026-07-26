---
name: AntiStoic
description: A neo-classical digital exhibition and manifesto for stillness and self-reflection.
colors:
  primary: "#ffffff"
  neutral-bg: "#000000"
  neutral-fg: "#ffffff"
  border-hairline: "rgba(255, 255, 255, 0.1)"
  surface: "#0a0a0a"
  accent-gray: "#737373"
typography:
  display:
    fontFamily: "Bodoni Moda, Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.5rem, 7vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  editorial:
    fontFamily: "Cormorant Garamond, Times New Roman, serif"
    fontSize: "1.25rem"
    fontWeight: 300
    lineHeight: 1.5
  sans-clean:
    fontFamily: "Plus Jakarta Sans, system-ui, -apple-system, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.35em"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "0px"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.primary}"
    rounded: "0px"
    padding: "16px 32px"
    border: "1px solid rgba(255, 255, 255, 0.3)"
---

# Design System: AntiStoic

## 1. Overview

**Creative North Star: "The Silent Exhibition"**

AntiStoic is designed to feel like a premium, dark, neo-classical museum catalog. It uses a high-contrast monochrome color scheme, wide-tracked clean sans-serif typography, elegant serif displays, and dithered 1-bit graphic art to create a sense of stillness and personal reflection. 

It rejects standard SaaS/startup visual tropes (gradients, rounded cards, social proof chips, bright interface accents) in favor of editorial dignity, ample negative space, and a quiet, atmospheric presence.

**Key Characteristics:**
- Pure black canvas with razor-thin white boundaries.
- Editorial typographic scale with balanced sentence wrapping.
- High-contrast, dithered 1-bit scanline graphics of ancient Roman/Greek elements.
- Soft, ambient background loops for sensory grounding.

## 2. Colors

A strict monochrome palette representing complete focus and simplicity.

### Primary
- **Pure White** (#ffffff): Used for primary headlines, active buttons, and emphasized quotes.

### Neutral Background
- **Deep Void Black** (#000000): The main page body background.

### Muted Elements
- **Stone Gray** (#737373): Used for subheadings, captions, metadata, and wide-tracked paragraphs.

### Borders
- **Hairline Silver** (rgba(255, 255, 255, 0.1)): Subtle divider lines that give structure without clutter.

## 3. Typography

Three type families paired along a contrast axis of classical serif elegance and mechanical sans-serif utility.

- **Serif Display (Bodoni Moda / Cormorant Garamond)**: Elegant, high-character serif for massive titles.
- **Serif Editorial (Cormorant Garamond)**: Highly readable, classic book-like serif for body prose and blockquotes.
- **Clean Sans (Plus Jakarta Sans)**: Highly spaced, uppercase sans-serif for secondary tags, metadata, and controls.

## 4. Elevation

The visual system is entirely flat, rejecting 3D shadows and card-based elevation.
- **Tonal Layering**: Containers are rendered in flat `#000000` or `#0a0a0a` with fine border lines.
- **Depth**: Ambient light is simulated using absolute background images (like the Atlas background) set to extremely low opacity (20%) blending into the background.

## 5. Components

### Primary Button
- Flat white background with black sans-serif uppercase typography. Transitions to light grey (`#e5e5e5`) on hover.

### Outlined Button
- Transparent background with a thin `rgba(255, 255, 255, 0.3)` border. Text is white. On hover, background fills with solid white and text becomes black.

### Text Input
- Dark grey (`#0a0a0a`) background with a thin border. Text is centered in serif editorial styling.

## 6. Do's and Don'ts

### Do
- Keep headlines clean and balance sentence lengths (`text-wrap: balance`).
- Ensure all interactive elements have subtle, slow-fading transitions.
- Maintain at least 150px of vertical space between sections to preserve the "museum gallery" flow.

### Don't
- Do not introduce brand accent colors (e.g. blue buttons, purple links) that clash with the monochrome look.
- Do not use rounded corners on buttons or containers (`border-radius` must remain `0px`).
- Do not crowd sections or add auxiliary widgets (like popups or notification bells).
