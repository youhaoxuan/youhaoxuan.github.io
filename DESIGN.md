---
name: Instrument
description: Restraint plus scale — a near-black engineering site for a battery process engineer.
seed: instrument-2026-08
colors:
  void: "#0b0d10"
  surface: "#14171b"
  surface-2: "#1c2126"
  line: "#2b3138"
  line-2: "#3c444d"
  paper: "#fafafa"
  paper-2: "#eef0f1"
  paper-3: "#e2e5e7"
  paper-line: "#d5d9dc"
  snow: "#ffffff"
  snow-2: "#a9b0b8"
  snow-3: "#8b939c"
  ink: "#16191d"
  ink-2: "#4a5058"
  ink-3: "#656c74"
  data: "#8fd8ff"
  live: "#f5a524"
  black: "#000000"
  overlay-light: "rgba(255, 255, 255, .1)"
  overlay-dark: "rgba(0, 0, 0, .06)"
  print-ground: "#ffffff"
  print-line: "#c4c8cc"
  print-line-2: "#9aa0a6"
  print-paper-2: "#f2f2f2"
  print-ink: "#000000"
  print-ink-2: "#1c1c1c"
  print-ink-3: "#3d3d3d"
  print-signal: "#333333"
typography:
  meta:
    fontFamily: "Figtree, -apple-system, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.45
  nav-compressed:
    fontFamily: "Figtree, -apple-system, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
  body:
    fontFamily: "Figtree, -apple-system, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "Figtree, -apple-system, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.5
  title:
    fontFamily: "Figtree, -apple-system, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.8vw, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  figure:
    fontFamily: "Figtree, -apple-system, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2rem)"
    fontWeight: 500
    letterSpacing: "-0.015em"
  section:
    fontFamily: "Figtree, -apple-system, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  hero:
    fontFamily: "Figtree, -apple-system, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.5rem, 6.2vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.02em"
rounded:
  control: "4px"
  bar-top: "4px 4px 0 0"
  focus: "2px"
  dot: "50%"
  none: "0"
spacing:
  s2: "8px"
  s3: "12px"
  s4: "16px"
  s5: "24px"
  s6: "32px"
  s7: "48px"
  s8: "64px"
  s9: "96px"
  s10: "144px"
components:
  button:
    backgroundColor: "{colors.snow}"
    textColor: "{colors.void}"
    rounded: "{rounded.control}"
    padding: "11px 28px"
    minHeight: "44px"
    fontSize: "0.8125rem"
    fontWeight: 500
  button-quiet:
    backgroundColor: "{colors.overlay-light}"
    textColor: "{colors.snow}"
    rounded: "{rounded.control}"
  panel:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.line}"
    rounded: "{rounded.control}"
  bar:
    backgroundColor: "{colors.line-2}"
    width: "60px"
    rounded: "4px 4px 0 0"
---

# Design System: Instrument

## 1. Overview

**Creative North Star: "Restraint plus scale."**

This is the design idiom of modern automotive and energy engineering pages: near-black grounds, quiet type set at a single mid weight, one small radius used everywhere, and enormous whitespace. Nothing is loud. Hierarchy comes from scale and emptiness, never from ornament, borders, or color.

The world was chosen by the site's owner, who works in cell manufacturing and wanted a personal site that reads as fluent in the visual culture of that industry. It replaced an earlier world entirely.

**Explicit boundary.** This site borrows an *idiom*, never an identity. No employer logo, wordmark, brand color, licensed typeface, product render, or navigation chrome appears anywhere. The brand on the page is Haoxuan You. Employment is stated as fact in body copy — "Process Engineer, LFP Cell Manufacturing at Tesla" — and nowhere is the site styled to suggest it is an official or endorsed property. Any future change that adds a borrowed mark or trade dress is out of scope by definition.

**Key characteristics:**
- One radius, `4px`, on every control, panel and bar. No exceptions except a 2px focus ring and a 50% state dot.
- Headings are all weight 500. There is no 700 and no 800 in the system.
- Zero letter-spacing on anything positive; display sizes track tight and negative.
- Achromatic by default. Two signal colors, together under 2% of any surface.
- Bands alternate near-black and full-bleed paper. There is no third surface treatment.

## 2. Colors

### Grounds
- **Void** (`#0b0d10`): the default page ground. Cool, blue-tinted; never pure black on screen.
- **Surface** (`#14171b`) and **Surface 2** (`#1c2126`): panels, charts, work entries, and the hover state above them.
- **Line** (`#2b3138`) and **Line 2** (`#3c444d`): the only structural device on dark. 1px, never heavier.

### Paper
- **Paper** (`#fafafa`): full-bleed light bands. These carry explanatory content — the phase cards, patents, qualification — so the page breathes between dark sections.
- **Paper 2 / 3** (`#eef0f1`, `#e2e5e7`) and **Paper line** (`#d5d9dc`): hover fills and hairlines on light.

### Type
- On dark: **Snow** (`#ffffff`), **Snow 2** (`#a9b0b8`, 8.5:1 on void), **Snow 3** (`#8b939c`, 5.6:1).
- On paper: **Ink** (`#16191d`), **Ink 2** (`#4a5058`), **Ink 3** (`#656c74`).

### Signals
- **Data** (`#8fd8ff`): the ramp-chart line, its dots, and the focus ring. Nothing else.
- **Live** (`#f5a524`): a 6px dot beside the current role. Nothing else.

### Named rules
**The 2% rule.** Data and Live together cover under 2% of any rendered surface. If a third color is ever proposed, the answer is no — hierarchy is carried by scale, weight and whitespace.

**Never pure on screen.** No `#000` and no untinted gray in the screen palette. Grounds lean blue-green; paper leans warm-neutral. The print palette is the deliberate exception.

**State is never color alone.** The live dot always sits beside the word "Current".

## 3. Typography

**One family: Figtree** (variable, 300–800), with a real fallback stack. It is a geometric-leaning grotesque with a tall x-height — a legitimate free neighbor of the licensed faces this idiom usually uses, chosen because it is *not* the licensed face.

### The ramp — seven steps, nothing between them
| Step | Size | Used for |
|---|---|---|
| nav-compressed | `0.75rem` (12px), w500 | navigation links below 560px only — the one compression variant |
| meta | `0.8125rem` (13px), w500 | labels, nav, buttons, chips, tags, captions |
| body | `1rem` (16px), w400 | running copy |
| lede | `clamp(1.0625rem, 1.4vw, 1.25rem)` | section and hero supporting copy |
| title | `clamp(1.25rem, 1.8vw, 1.5rem)`, w500 | h3, entry titles, figures in phase cards |
| figure | `clamp(1.5rem, 2.6vw, 2rem)`, w500 | bar values, next-page titles |
| section | `clamp(1.75rem, 3vw, 2.5rem)`, w500 | h2, and the About h1 |
| hero | `clamp(2.5rem, 6.2vw, 4.5rem)`, w500 | one h1 per page |

### Named rules
**Everything is weight 500.** Every heading, label, button and figure. Body copy is 400. There is no bold in the system; emphasis inside prose uses `<b>` set to 500 against a lighter body color, so the contrast is tonal, not weight-based.

**No positive tracking, ever.** Display steps track negative (−0.01em to −0.02em); everything else is `normal`. Tracked uppercase labels belong to a different world and were deliberately left behind with it.

**Sentence case.** No `text-transform: uppercase` anywhere in the system.

## 4. Elevation

There is none. No element casts a shadow. Depth is expressed by exactly three things: the tonal step from void to surface, a 1px line, and the full-bleed switch to paper. Hover raises nothing — it shifts a background one step or brightens a border.

## 5. Components

### Navigation
Sticky, `rgba(11,13,16,.78)` with a 14px backdrop blur, no border. On scroll past 24px it gains `.is-stuck`: opacity to `.94` and a 1px bottom line. Name on the left as the brand, four links, and a quiet résumé button that drops below 720px.

### Hero
`min-height: min(88vh, 780px)`, centered, type only. Role line, h1, lede, two buttons, and a scroll cue whose chevron nudges once every 2.4s. No image — the type is the composition.

### Metric bars (`.bars`)
Flat `--line-2` columns, 60px wide, 4px top radius, growing from a shared baseline with the value above and label below. Heights are set per-bar with `--h` and are **proportional to the real numbers** — 80% is 210px, 10% is 26px. A bar that is not to scale is a lie about a measurement.

### Ramp chart
1px grid lines, a 2px `--data` stroke that draws itself once, three dots. Axis labels in meta. No fills, no gradients, no tooltips.

### Phase cards (`.phases`)
Three cells on paper separated by a 1px grid gap, not by borders or shadows. Collapse to one column under 860px.

### Role list (`.role`)
Date column on the left, content on the right, 1px rules between. Summary bullets always visible; a `.more` button reveals the full detail. The current role carries the live dot.

### Work entry (`.work`)
380px figure well plus body, 4px radius, 1px border. Figures sit on **paper** inside the dark entry and are `object-fit: contain` — these are licensed scientific figures and cropping them destroys information and misrepresents the source.

## 6. Motion

Two authored moments, both fired once on first sight:

1. **Bars grow** from the baseline over 900ms — `transform: scaleY()` with a bottom origin, never `height`, so no frame costs a layout pass.
2. **The ramp line draws** over 1.4s via `stroke-dashoffset`, with its dots resolving behind it.

Supporting motion is an 18px rise on section entry and a 1s quartic count-up on bar values. The scroll chevron is the only loop in the system.

Every one of these is gated on `prefers-reduced-motion: reduce`, under which all elements render in final state with no transition.

## 7. Adaptation

- Hover rules live entirely inside `@media (hover: hover) and (pointer: fine)`; touch gets `:active` instead, so nothing sticks after a tap.
- `@media (pointer: coarse)` raises controls to 46–48px regardless of screen width.
- `viewport-fit=cover` with `env(safe-area-inset-*)` on shell, nav and footer.
- Content-driven breakpoints: 900px (work entry stacks), 860px (phase cards stack, portrait stacks), 760px (role columns stack, spec rows stack), 720px (nav CTA drops), 640px (shell margin), 400px (nav padding).
- Short landscape (`max-height: 460px`) un-sticks the nav and collapses the hero minimum height.

## 8. No JavaScript is a supported state

A `.js` class is set on `<html>` before first paint. Reveal, bar growth and collapsed detail are all gated behind it. Without JS the page renders complete and open, bar values and figures show their true numbers, and the controls that would do nothing — filter, show-more, expand-all — are hidden rather than left dead.

## 9. Print

Print redefines the tokens rather than flipping the background, so every on-dark color follows to ink automatically. Grounds go white, lines to gray, all signal colors to `#333`. Navigation, filters, buttons, figures and the scroll cue are dropped; role detail is forced open; `break-inside: avoid` on every entry.

## 10. Do's and don'ts

### Do
- **Do** use `4px`. It is the only radius.
- **Do** set every heading at weight 500.
- **Do** keep bar heights proportional to the values they represent.
- **Do** alternate void and paper bands to pace a long page.
- **Do** let whitespace carry hierarchy before reaching for a rule or a border.

### Don't
- **Don't** add a shadow. The system has no elevation.
- **Don't** add a third signal color, or push Data and Live past 2%.
- **Don't** use uppercase or positive letter-spacing.
- **Don't** introduce weight 600+ for emphasis; use color and size.
- **Don't** add any employer logo, wordmark, brand color, licensed font, or product imagery. The idiom is borrowed; the identity is not.
