---
name: Traveler
description: Shop-floor traveler card as the design language for a battery process engineer's site.
seed: traveler-2026-08
colors:
  ground: "#191d1f"
  ground-2: "#21262a"
  ground-3: "#2a3136"
  rule-dark: "#333c41"
  rule-dark-2: "#46525a"
  stock: "#e9e7e0"
  stock-2: "#dedbd2"
  stock-3: "#d0ccc0"
  stock-edge: "#bab6aa"
  ink: "#15191c"
  ink-soft: "#4d565b"
  ink-faint: "#5a6469"
  on-dark: "#e9e7e0"
  on-dark-soft: "#9aa6ab"
  on-dark-faint: "#8a959a"
  stock-hi: "#f7f6f2"
  ink-deep: "#05070a"
  stamp: "#b83a2b"
  stamp-lite: "#e0654f"
  pass: "#2f6b4f"
  caution: "#d9a12c"
  caution-ink: "#8a6410"
  shadow-cast: "rgba(0, 0, 0, .5)"
  shadow-contact: "rgba(0, 0, 0, .34)"
  print-ground: "#ffffff"
  print-rule: "#b4b4b4"
  print-rule-2: "#8c8c8c"
  print-stock-2: "#f2f2f2"
  print-stock-3: "#e8e8e8"
  print-ink: "#000000"
  print-ink-soft: "#1c1c1c"
  print-ink-faint: "#3d3d3d"
  print-stamp: "#333333"
typography:
  display:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2rem, 6.4vw, 5.4rem)"
    fontVariationSettings: "'wdth' 118, 'wght' 800"
    lineHeight: 0.94
    letterSpacing: "-0.028em"
    textTransform: "uppercase"
  head:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.7rem, 3.4vw, 2.6rem)"
    fontVariationSettings: "'wdth' 112, 'wght' 750"
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    textTransform: "uppercase"
  field:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.8rem"
    fontVariationSettings: "'wdth' 78, 'wght' 650"
    letterSpacing: "0.17em"
    textTransform: "uppercase"
  typed:
    fontFamily: "'Courier Prime', 'Courier New', ui-monospace, monospace"
    fontSize: "0.8rem"
    fontVariantNumeric: "tabular-nums"
  body:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.62
  lede:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.05rem, 1.7vw, 1.3rem)"
    lineHeight: 1.5
  title:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)"
    fontVariationSettings: "'wdth' 108, 'wght' 750"
    lineHeight: 1.1
  readout:
    fontFamily: "'Courier Prime', 'Courier New', ui-monospace, monospace"
    fontSize: "clamp(1.7rem, 3.4vw, 2.6rem)"
    fontVariantNumeric: "tabular-nums"
rounded:
  all: "0"
spacing:
  s2: "8px"
  s3: "12px"
  s4: "16px"
  s5: "24px"
  s6: "32px"
  s7: "48px"
  s8: "64px"
  s9: "96px"
components:
  stock-card:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.stock-edge}"
    shadow: "0 9px 14px -7px rgba(0,0,0,.5), 0 2px 3px -1px rgba(0,0,0,.34)"
  stamp:
    border: "2.5px solid currentColor"
    transform: "rotate(-6deg)"
    opacity: 0.9
  btn-primary:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    padding: "14px 24px"
  btn-primary-on-stock:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stock}"
---

# Design System: Traveler

## 1. Overview

**Creative North Star: "The card that rides the line."**

A shop-floor traveler is the printed sheet that accompanies a batch through production: preprinted form furniture, typed-in values, and an inspection stamp at every station that signs the work off. This site is that document. Light bond stock lies on a dark anodized bench; the résumé is a route, each job an operation, each completed role a buy-off stamp.

The world was chosen with the site's owner over three alternatives drawn from the same professional vocabulary (SPC control chart, metallographic cross-section, roll-to-roll web). It is a **Persuade** surface: a hiring manager in battery manufacturing must, within seconds, believe this person has run a line rather than described one.

**Key characteristics:**
- Zero border-radius anywhere. Forms have corners.
- Depth comes from one card lifting off one bench — not from stacked elevations.
- Structure is carried by 1px rules and field cells, never by nested cards.
- Every measurement is set in typewriter mono with tabular numerals.

## 2. Colors

Restrained: a two-surface neutral system with a single accent that earns its rarity.

### Surfaces
- **Ground** (`#191d1f`): the bench. Cool graphite tinted green. The page's default surface.
- **Ground 2 / 3** (`#21262a`, `#2a3136`): work-entry panels and figure wells.
- **Stock** (`#e9e7e0`): laser bond card stock. Every traveler card. Deliberately *not* cream — this is a working document, not an editorial spread.
- **Stock 2 / 3** (`#dedbd2`, `#d0ccc0`): shaded form fields, operation-number gutters, hover states on stock.

### Ink
- **Ink** (`#15191c`) primary on stock; **Ink soft** (`#4d565b`) body; **Ink faint** (`#5a6469`) field labels — 4.85:1 on stock, the floor.
- **On-dark** (`#e9e7e0`), **on-dark-soft** (`#9aa6ab`), **on-dark-faint** (`#8a959a`) — the last is 5:1 on ground-2.

### Stamps
- **Stamp red** (`#b83a2b`, `#e0654f` on dark): the only accent. Job titles' employer names, section numbers, in-process status, the `HY` mark.
- **Pass green** (`#2f6b4f`) and **caution amber** (`#d9a12c`) carry *state only* — bought-off versus still running — and never decorate.

### Named rules
**The 10% Accent Rule.** Stamp red covers under 10% of any rendered surface. Its scarcity is what makes a red employer name read as important.

**Never pure on screen.** No `#000`, no `#fff`, no untinted gray anywhere in the screen palette. Every neutral leans to the bench's blue-green or the stock's warm gray. The print palette is the one exception — paper is white and ink is black, and the `print-*` tokens say so explicitly.

**State is never color alone.** Every stamp carries a word — COMPLETE, BOUGHT OFF, IN PROCESS, RUNNING — and a year.

## 3. Typography

**One superfamily plus one typewriter.** Archivo (variable, `wdth` 62–125 × `wght` 100–900) is the printed form; Courier Prime is what was typed into it. That split is the whole system.

- **Display** (Archivo, `wdth` 118 / `wght` 800, clamp 2.6–5.4rem, uppercase, −0.028em): page titles only.
- **Head** (`wdth` 112 / `wght` 750, clamp 1.7–2.6rem, uppercase): section headings.
- **Field** (`wdth` 78 / `wght` 650, 0.8rem, tracked 0.17em, uppercase): preprinted labels — TRAVELER NO., REV., STATUS.
- **Typed** (Courier Prime, 0.8rem, tabular-nums): every value, date, station code, measurement and tag.
- **Body** (Archivo, 1rem / 1.62): running copy, capped at 65–76ch.

### Named rules
**Six steps, no more.** The whole ramp is `0.8rem` (field, typed) → `1rem` (body) → `clamp(1.05rem, 1.7vw, 1.3rem)` (lede, operation title) → `clamp(1.2rem, 2.2vw, 1.55rem)` (sub, work title) → `clamp(1.7rem, 3.4vw, 2.6rem)` (head, readout value) → `clamp(2rem, 6.4vw, 5.4rem)` (display). Two earlier drafts drifted — first to eleven near-duplicate micro-sizes between 11.2px and 16.3px, then to seven overlapping mid-range clamps. Any new size must reuse one of the six.

**Printed versus typed.** If it was on the form before the batch arrived, it is condensed tracked Archivo caps. If a person or a machine wrote it in, it is Courier Prime. Nothing is both.

**No system display face.** Archivo is loaded, with a real fallback stack. The condensed and expanded widths are the point; a platform sans cannot stand in.

## 4. Elevation

One shadow exists: the traveler card lifting off the bench (`0 9px 14px -7px` plus a 2px contact shadow). It has a real vertical offset and a tight blur, because a card on a table casts a card's shadow.

Everything else is flat. Work entries, readouts and spec rows are separated by 1px rules, not by elevation. Hover lift is `translateY(-2px)`, never a shadow bloom.

## 5. Components

### Traveler card (`.stock`)
Light stock on the bench. Opens with a **title block** — a bordered field grid of label-over-value cells (2 columns under 700px, 1 under 380px). Never rounded, never shadowed beyond the single card shadow.

### Operation row (`.op`)
Three columns: station number gutter (`OP 50`), the work, and a buy-off box. Under 760px the buy-off box drops below and left-aligns. The buy-off column is 176px so a rotated stamp never clips the card edge.

### Buy-off stamp (`.stamp`)
2.5px border, rotated −6°, 90% opacity, with a year beneath. `--stamp-pass` for completed operations, `--stamp-live` (dashed, amber, −3°) for the current one.

### Sheet tabs (`.sheets`)
The nav is the document's sheet index — numbered 1–4, current sheet inverted to stock, `SHEET n OF 4` on the right. Labels drop to numbers under 860px.

### Readouts (`.readouts`)
An instrument strip beneath the ramp chart: mono value with a stamp-red unit, tracked-caps label, mono note. Values count up on first view. This is a chart annotation panel, not a hero stat row — it never appears without the chart it annotates.

### Revision block (footer)
The document's revision record: contact, external record, sheet index, document rev.

## 6. Motion

**One authored moment: the stamp lands.** On first intersection each buy-off stamp rotates from −16° at 1.42 scale through a 2px blur into place, over 520ms on `cubic-bezier(.16,1,.3,1)`, staggered down the sheet. That is the site's single piece of choreography.

Supporting motion is deliberately quiet: a 14px rise on section entry, a 1.5s stroke-dashoffset draw on the ramp chart with dots resolving behind it, a 1.1s quartic count-up on readouts, and a `grid-template-rows: 0fr → 1fr` expansion on operation detail.

All of it is gated on `prefers-reduced-motion: reduce`, under which every element renders in its final state with no transition.

## 7. Browser surfaces

Themed, not left to defaults: selection is stamp red on white, the scrollbar is a graphite slide rail on the bench, focus rings are 2px dashed amber (stamp red on light stock), and every numeric field uses `tabular-nums`.

## 8. Do's and don'ts

### Do
- **Do** keep every corner square. The radius token is `0` and it is not negotiable.
- **Do** set values in Courier Prime and labels in condensed Archivo caps. The split carries the world.
- **Do** give state a word as well as a color.
- **Do** hold the small type scale at exactly 0.8rem and 1rem.
- **Do** keep the accent under 10% of any surface.

### Don't
- **Don't** add a second shadow tier or nest a card inside a card.
- **Don't** introduce a kicker or eyebrow label above a heading.
- **Don't** use cream, parchment or warm-paper grounds — the stock is a cool bond, and the bench is graphite.
- **Don't** set uppercase runs longer than about 20 characters. Tracked caps stop being readable.
- **Don't** add decorative grid or hatch fills. An early draft carried both; both were removed as unearned texture.
- **Don't** put a `.btn` on light stock without the `.stock .btn` inversion — the default primary is stock-colored and disappears.

## 9. Print

Paper is a supported surface: a hiring manager may print the route sheet next to a résumé. Print does not flip `body` alone — it **redefines the tokens**, so every on-dark color follows to ink automatically. An earlier draft flipped only the page background and left `--on-dark-soft` gray on white, which printed nearly blank.

- Grounds go to white, rules to `#b4b4b4`/`#8c8c8c`, all ink families to near-black.
- All stamp hues collapse to `#333`; the stamp's *word* carries the state, so nothing is lost.
- Navigation, filters, expand controls, figures and the copy button are dropped.
- Operation detail is forced open — a printed route sheet with collapsed sections is a broken document.
- `break-inside: avoid` on every work entry, operation, spec row and readout.

## 10. Device adaptation

- **Hover is a capability, not a default.** Every hover rule lives inside `@media (hover: hover) and (pointer: fine)`. Touch devices get `:active` feedback instead, so no state can stick after a tap.
- **`@media (pointer: coarse)`** raises controls to 48–50px and loosens chip spacing, independent of screen width — a touchscreen laptop gets finger-sized targets too.
- **Safe areas.** `viewport-fit=cover` plus `env(safe-area-inset-*)` on the shell, sticky nav and footer.
- **Breakpoints are content-driven:** 1080px (work figure column needs room), 860px (sheet tab labels collapse to numbers), 780px (work and operator record stack), 760px (buy-off box drops below), 700px (title-block fields go two-up), 380px (title-block goes single column).
- **Short landscape** (`max-height: 460px`) un-sticks the nav so it cannot eat a phone's landscape viewport.
- **No JavaScript is a supported state.** Reveal, stamp-landing and collapsed detail are all gated behind a `.js` class set before first paint. Without JS the page renders complete and open, readouts show their true values, and the expand and filter controls — which would do nothing — are hidden.
