# Korda Labs — Design Principles

## Reference
Aesthetic direction informed by [Skall Studio](https://skallstudio.com/) — Danish minimalism, understated luxury, typographic confidence, intentional restraint. Applied to a dark-mode AI product.

**The shift:** Korda Labs is not a tech company. It is a lifestyle brand that happens to use AI. The product lives in your daily life — your health, your schedule, your goals. The design should feel like it belongs there. Premium. Warm. Personal. Something you'd want to spend time with.

---

## The Aesthetic: Warm Editorial Dark

Think: a high-end print magazine on dark paper. A luxury watch brand's website. The stillness and confidence of something built to last — not the noise of a startup dashboard.

**Not this:** Electric blue glows, cold dark backgrounds, gradient blobs, neon accents, busy animations.
**This:** Warm near-black, cream text, amber gold accents, serif headlines, editorial whitespace.

---

## Palette

### Backgrounds
| Token | Value | Use |
|---|---|---|
| `dark-DEFAULT` | `#0e0d0b` | Page background — warm near-black |
| `dark-100` | `#141210` | Slightly elevated surfaces |
| `dark-200` | `#1a1815` | Cards, panels |
| `dark-300` | `#222019` | Borders, dividers |
| `dark-400` | `#2c2a22` | Hover states |

The old cold blue-black (`#06070E`) is replaced. Everything has a slight warm (brown/amber) undertone.

### Text
| Use | Value |
|---|---|
| Primary | `#ede8df` — warm cream, not pure white |
| Secondary | `#8a8278` — warm grey |
| Muted | `#5a5650` — low-contrast detail |

### Accent — Warm Amber
The brand accent is **warm amber/gold**: `#C4973A`.

| Token | Value | Use |
|---|---|---|
| `accent` | `#C4973A` | Primary brand accent |
| `accent-light` | `#D4A94E` | Hover states |
| `accent-dark` | `#A07828` | Pressed/active |

Amber replaces `brand-blue` in all **site chrome**: nav, section labels, hero badges, CTAs, card highlights, link hovers.

### Product Color — Blue (scoped)
`brand-blue` (#3B82F6) is kept but scoped exclusively to **product UI**: the Orb, ZoeDemo panels, TaskManager animation, memory animations. Site chrome is amber. Product interior is blue. The contrast is intentional — it makes the demos feel like a window into the actual product.

### Green — Compass Only
`brand-green` (#10B981) stays scoped to the Compass agent. Nowhere else.

---

## Typography

### Headline Font: Playfair Display (serif)
Added via `next/font/google`. Applied to all H1 and H2 elements.

This is the single most impactful change. A serif headline shifts the feel from startup dashboard to editorial lifestyle brand immediately.

- `h1`, `h2` → Playfair Display
- Body, labels, nav, captions → Geist Sans (existing)
- Code/mono → existing mono

### Rules
- **H1/H2**: Serif, large, confident. The headline IS the section.
- **Body**: Short, muted, subservient to the headline.
- **Labels**: Sans, tracked uppercase, amber. Max 2–3 per page.
- **Line height**: Tight on large type (`leading-[1.05]`). Relaxed on body.

---

## Spacing & Layout

- **Major sections**: `py-40` minimum. `py-32` for secondary sections.
- **Whitespace is active design.** Do not fill it.
- **Body copy**: `max-w-xl` maximum width. Never wider.
- **Two-column layouts** for all major content sections.

---

## Animations & Motion

- **ZoeDemo and TaskManager stay.** Keep their blue palette — intentional contrast.
- **The Orb stays.** Reduce glow opacity. More ambient, less "tech demo".
- **Entrance animations only.** `opacity 0→1` + `y: 16–20px`, `duration: 0.6s`.
- **No glow shadows** except: primary CTA button and the Orb core.

---

## UI Patterns

- **Nav**: Amber "Sign up" button, no glow. Warm background on scroll (`bg-[#0e0d0b]/80`).
- **Primary CTA**: Amber bg, cream text. Shadow: `shadow-[0_0_24px_#C4973A44]`.
- **Secondary CTA**: `border-white/15`, cream text. No glow.
- **Cards**: `border-white/5`, `bg-white/[0.02]`. Nearly invisible. Content does the work.
- **Section labels**: Amber, tracked uppercase. Max 2–3 per page total.
- **Active badges** (`Available now`): Amber border + amber text.
- **Coming soon badges**: Neutral, muted.
- **Selection**: Amber glow (`#C4973A33`).

---

## Voice & Copy

- Short. Direct. Confident.
- First-person product voice. "Zoe handles the rest."
- Headlines surprising or specific. No generic startup language.
- No stacking synonyms.

---

## Implementation Checklist

### Foundation
- [ ] Add Playfair Display via `next/font/google` in `layout.tsx`
- [ ] Update `tailwind.config.ts` — new warm dark palette, `accent` color tokens, serif font family
- [ ] Update `globals.css` — background `#0e0d0b`, foreground `#ede8df`, amber selection

### Chrome (brand-blue → accent everywhere except product demos)
- [ ] `text-brand-blue` → `text-accent`
- [ ] `border-brand-blue/...` → `border-accent/...`
- [ ] `bg-brand-blue` on buttons/badges → `bg-accent`
- [ ] `hover:bg-brand-blue-light` → `hover:bg-accent-light`
- [ ] CTA glow shadows → amber values

### Components
- [ ] `Nav.tsx` — amber button, warm scroll bg
- [ ] `Hero.tsx` — serif H1, amber badge
- [ ] `OrbSection.tsx` — serif H2, amber label
- [ ] `IntegrationTeaser.tsx` — serif H2
- [ ] `KordaSection.tsx` — serif H2, amber accents
- [ ] `Footer.tsx` — amber links
- [ ] `app/products/page.tsx` — serif H1/H2, amber featured card
- [ ] `app/products/zoe/page.tsx` — serif H1/H2, amber chrome, blue kept in demo panels
