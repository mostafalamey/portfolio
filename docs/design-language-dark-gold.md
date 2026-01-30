# Dark Elegant (Gold Accent) Design Language

## Overview

A dark, editorial layout with cinematic imagery, glassy overlays, and a restrained warm-gold accent. The system relies on high-contrast typography, subtle borders, and layered surfaces (background → elevated panels → image cards). Motion is calm and premium: short fades, gentle lifts, and discreet slider indicators.

Design principles:

- **Cinematic contrast:** bright type over dark surfaces and photo overlays.
- **Layered depth:** panels and cards separated by subtle borders and soft shadows.
- **Warm accent discipline:** gold is used sparingly for CTAs, key stats, and tiny highlights.
- **Editorial hierarchy:** large, centered hero headline; strong section titles; compact meta labels.

---

## Color Palette

Approximate hex values based on the UI screenshot. Use as a starting palette; tune with a color picker if you want exact sampling.

### Brand / Accent

| Token         | Hex       | Usage                                    |
| ------------- | --------- | ---------------------------------------- |
| `accent`      | `#C89B3C` | Primary CTA fill, badges, key highlights |
| `accentHover` | `#D7B15B` | CTA hover, active highlights             |
| `accentMuted` | `#8F7434` | Subtle accent text, secondary accents    |

### Neutrals (Dark)

| Token        | Hex       | Usage                               |
| ------------ | --------- | ----------------------------------- |
| `bg`         | `#0E1116` | Page background                     |
| `bg2`        | `#101620` | Alt background / section bands      |
| `surface`    | `#1A212B` | Panels, content blocks              |
| `surface2`   | `#222B36` | Elevated cards, nav surface         |
| `surface3`   | `#2A3441` | Stronger elevation / CTA containers |
| `border`     | `#323D4B` | 1px dividers, card outlines         |
| `borderSoft` | `#27303B` | Subtle separators                   |

### Text

| Token    | Hex       | Usage                 |
| -------- | --------- | --------------------- |
| `text`   | `#F2F4F7` | Primary text          |
| `text2`  | `#C8D0DA` | Secondary text        |
| `muted`  | `#8C98A8` | Meta labels, captions |
| `muted2` | `#697587` | Very subtle text      |

### Overlays

| Token           | Value                        | Usage                  |
| --------------- | ---------------------------- | ---------------------- |
| `overlayStrong` | `rgba(10,12,16,0.65)`        | Hero image readability |
| `overlaySoft`   | `rgba(10,12,16,0.35)`        | Card image scrims      |
| `glass`         | `rgba(26,33,43,0.55)` + blur | Floating nav / panels  |

### Semantic (keep minimal)

This system avoids loud semantic colors; use muted versions.

| Token     | Hex       |
| --------- | --------- |
| `success` | `#3FAE6A` |
| `warning` | `#D9A441` |
| `error`   | `#D36B6B` |
| `info`    | `#4C8FD6` |

### Color Relationships

- Harmony: **analogous** neutrals (blue-gray) with **warm complementary** gold.
- Contrast: ensure body text meets **WCAG AA** (aim for ≥ 4.5:1). Gold on dark is usually fine; avoid gold on mid-gray without boosting contrast.

---

## Typography

The UI reads as a modern geometric/neo-grotesque sans system.

### Font Families (recommended)

Use your existing stack if you already load it; this maps well:

- **Headings / Display:** `Poppins`, `Inter`, `system-ui`, `Segoe UI`, `sans-serif`
- **Body:** `Inter`, `system-ui`, `Segoe UI`, `sans-serif`
- **Meta / Overlines:** same family, **uppercase + tracking**

### Type Scale (desktop)

| Style    |    Size | Line Height |  Weight | Usage               |
| -------- | ------: | ----------: | ------: | ------------------- |
| Display  | 48–56px |   1.05–1.15 | 600–700 | Hero headline       |
| H1       | 36–40px |        1.15 |     600 | Section headline    |
| H2       | 28–32px |         1.2 |     600 | Subsection headline |
| H3       | 20–22px |         1.3 |     600 | Card titles         |
| Body L   | 16–18px |         1.6 | 400–500 | Lead paragraphs     |
| Body     | 14–16px |         1.6 |     400 | Default copy        |
| Caption  | 12–13px |         1.4 | 400–500 | Meta, helper text   |
| Overline | 11–12px |         1.2 |     600 | Eyebrows / labels   |

### Typography Treatments

- **Overlines:** uppercase, tracking `0.14em`–`0.18em`, color `muted`.
- **Hero:** centered, tight line-height, light shadow or overlay behind.
- **Emphasis:** gold accent for short spans or numerals (never whole paragraphs).

---

## Spacing & Sizing

The UI follows an **8px base unit**.

### Spacing Scale

| Token |  px | Notes                    |
| ----- | --: | ------------------------ |
| `1`   |   4 | micro gaps               |
| `2`   |   8 | small gaps               |
| `3`   |  12 | compact padding          |
| `4`   |  16 | default padding          |
| `5`   |  20 | between blocks           |
| `6`   |  24 | card padding             |
| `8`   |  32 | section interior         |
| `10`  |  40 | hero spacing             |
| `12`  |  48 | large section spacing    |
| `16`  |  64 | section vertical padding |
| `20`  |  80 | hero/major sections      |
| `24`  |  96 | extra-large bands        |

### Container

- **Max width:** 1200–1320px
- **Gutters:** 20px (mobile), 32px (tablet), 40px (desktop)

---

## Layout Patterns

### Grid

- **Desktop:** 12-column grid
- **Gutter:** 24px
- **Cards:** commonly in **3-up** or **4-up** grids, maintaining equal heights.

### Page Flow

1. **Hero**: full-bleed image with centered headline, CTA, slider dots
2. **Value band**: stats + short copy in a dark panel strip
3. **Card grid**: image-driven cards with overlay and meta
4. **Feature band**: icons + short blurbs
5. **Split section**: media + text (video/large image on one side)
6. **Gallery grid**: dense image tiles
7. **Testimonial band**: two cards in a row
8. **Editorial section**: text + image pairing
9. **Blog grid**: three cards
10. **Final CTA**: centered, short statement, single CTA
11. **Footer**: multi-column, newsletter input, small meta

### Responsive Behavior

- **Mobile:** single column; cards become stacked; hero text scales down and CTA stays prominent.
- **Tablet:** 2-up grids; split sections become stacked with media first.
- **Desktop:** 3–4 columns; split sections side-by-side.

---

## Components

### Navigation (floating / glass)

**Structure:** logo (left), nav links (center), CTA + icons (right).

**Style:**

- Background: `glass` (semi-transparent dark) with blur
- Border: 1px `borderSoft`
- Height: ~64px
- Link style: small uppercase or medium body; muted by default; bright on hover

**States:**

- Hover: text shifts to `text`, underline or subtle indicator
- Sticky: slightly more opaque background + stronger shadow

---

### Buttons

#### Primary (accent pill)

- Background: `accent`
- Text: near-black `#14181F` or `bg` depending on contrast
- Radius: 9999px
- Padding: 12px 18px (md), 14px 22px (lg)
- Hover: background `accentHover`
- Shadow: subtle `0 10px 24px rgba(0,0,0,0.25)`

#### Secondary (light pill)

- Background: `#F3F5F7`
- Text: `#1A212B`
- Border: none
- Hover: slightly darker fill `#E7ECF1`

#### Ghost / Outline

- Background: transparent
- Border: 1px `border`
- Text: `text2`
- Hover: background `rgba(255,255,255,0.04)`

---

### Slider Indicators

- Tiny dots centered under hero
- Default: `rgba(255,255,255,0.25)`
- Active: `#FFFFFF` or `accent` (if you want more brand)
- Size: 6–8px, gap 8px

---

### Stat / Value Panels

Used as a band with big numeral and short descriptor.

- Panel background: `surface`
- Number: large (28–40px), accent color `accent` or `text`
- Divider line: 1px `borderSoft`
- Copy: `muted`/`text2`

---

### Image Cards (grid)

Common pattern for galleries, categories, articles.

**Base:**

- Background: `surface2`
- Radius: 14–16px
- Border: 1px `borderSoft`
- Shadow: subtle (see Effects)

**Media:**

- Image ratio: 4:3 or 16:10
- Scrim overlay: `overlaySoft` for readability

**Content overlay:**

- Meta overline (uppercase)
- Title (H3)
- Optional CTA text or icon

**Hover:**

- Lift: translateY(-4px)
- Shadow increases
- Image slight scale: 1.02

---

### Icon Feature Row

- 4 items in a row on desktop
- Centered icon in a circular outline
- Label + short description
- Divider line above section

Icons:

- Outline style, 1.5–2px stroke
- Size: 20–24px

---

### Split Media Section

- Left: descriptive copy + CTA
- Right: large media tile with play button overlay

Play button:

- Circle 48–56px
- Background: `rgba(255,255,255,0.12)`
- Border: 1px `rgba(255,255,255,0.25)`
- Icon: white

---

### Testimonials (two-card)

- Two equal cards in a band
- Dark surface with border, subtle avatar

Card:

- Background: `surface`
- Radius: 12–14px
- Border: 1px `borderSoft`
- Quote text: `text2`
- Meta: name in `text`, role in `muted`

---

### Newsletter Input (footer)

- Input + button aligned inline on desktop

Input:

- Height: 40–44px
- Background: `surface2`
- Border: 1px `border`
- Text: `text`
- Placeholder: `muted2`
- Focus: border `accent` + glow `0 0 0 3px rgba(200,155,60,0.22)`

---

## Visual Effects

### Shadows

| Token       | Shadow                         |
| ----------- | ------------------------------ |
| `shadow-sm` | `0 6px 16px rgba(0,0,0,0.22)`  |
| `shadow-md` | `0 12px 32px rgba(0,0,0,0.28)` |
| `shadow-lg` | `0 20px 48px rgba(0,0,0,0.34)` |

### Border Radius

| Token         | Value  |
| ------------- | ------ |
| `radius-sm`   | 10px   |
| `radius-md`   | 14px   |
| `radius-lg`   | 18px   |
| `radius-pill` | 9999px |

### Borders & Dividers

- 1px solid `borderSoft` for most cards
- 1px solid `border` for higher contrast dividers
- Occasional inset border on media tiles (thin outline)

### Background Texture

Subtle diagonal/architectural line texture appears behind some sections.
Implementation options:

- a low-opacity SVG pattern overlay (`opacity: 0.06`–`0.10`)
- or a CSS repeating-linear-gradient with very low contrast

---

## Motion & Interaction

- Global transition: `200–260ms` ease (`cubic-bezier(0.2, 0.8, 0.2, 1)`)
- Card hover: lift + shadow + image scale
- Nav: fades from transparent → glassy on scroll
- Hero: slider with crossfade or horizontal slide; dots update

---

## Accessibility Notes

- Maintain minimum contrast for body text; avoid `muted` on `surface2` for long paragraphs.
- Focus states must be visible on dark surfaces (accent ring recommended).
- Ensure hover-only cues have keyboard equivalents (focus-visible styles).

---

## Implementation (Tailwind v4 + CSS Variables)

This project uses Tailwind v4 via `@theme` in CSS; below is a token proposal.

### CSS Custom Properties

```css
:root {
  /* Neutrals */
  --color-bg: #0e1116;
  --color-bg-2: #101620;
  --color-surface: #1a212b;
  --color-surface-2: #222b36;
  --color-surface-3: #2a3441;
  --color-border: #323d4b;
  --color-border-soft: #27303b;

  /* Text */
  --color-text: #f2f4f7;
  --color-text-2: #c8d0da;
  --color-muted: #8c98a8;
  --color-muted-2: #697587;

  /* Accent */
  --color-accent: #c89b3c;
  --color-accent-hover: #d7b15b;
  --color-accent-muted: #8f7434;

  /* Effects */
  --overlay-strong: rgba(10, 12, 16, 0.65);
  --overlay-soft: rgba(10, 12, 16, 0.35);
}
```

### Tailwind v4 `@theme` Mapping (example)

```css
@theme {
  --color-ink-950: var(--color-bg);
  --color-ink-900: var(--color-bg-2);
  --color-ink-800: var(--color-surface);
  --color-ink-700: var(--color-surface-2);
  --color-ink-600: var(--color-surface-3);
  --color-ink-500: var(--color-border);

  --color-fg: var(--color-text);
  --color-fg-2: var(--color-text-2);
  --color-fg-muted: var(--color-muted);

  --color-accent: var(--color-accent);
}
```

### Component Recipes (class ideas)

Primary button:

- `inline-flex items-center justify-center rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-semibold text-[#14181F] shadow-[0_10px_24px_rgba(0,0,0,0.25)] transition hover:bg-[color:var(--color-accent-hover)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(200,155,60,0.22)]`

Card:

- `rounded-[14px] border border-[color:var(--color-border-soft)] bg-[color:var(--color-surface-2)] shadow-[0_6px_16px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.28)]`

Glass nav:

- `backdrop-blur-md bg-[rgba(26,33,43,0.55)] border border-[color:var(--color-border-soft)]`

---

## Quality Checklist

- [ ] Accent used only for CTA + highlights
- [ ] Body copy stays `text2` on `surface` or darker
- [ ] All interactive elements have `focus-visible` rings
- [ ] Cards lift consistently and don’t shift layout
- [ ] Section spacing follows 64–96px cadence
