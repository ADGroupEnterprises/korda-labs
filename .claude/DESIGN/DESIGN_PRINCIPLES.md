# Korda Labs — Design Principles

## Reference
[Skall Studio](https://skallstudio.com/) — Danish minimalism, warm editorial paper aesthetic, typographic confidence, luxury restraint.

**The core truth:** Dark mode is inherently "tech". Paper/cream is inherently "lifestyle". We are going all in on paper.

---

## The Aesthetic: Warm Paper Editorial

Think: a high-end print magazine. A Kinfolk spread. A luxury brand lookbook. Serif headlines on cream paper. Generous whitespace. Almost no UI chrome. The product demos float as dark windows — like photographs of the app printed on the page.

**Not this:** Dark backgrounds, glowing blobs, electric accents, neon borders, SaaS dashboards.
**This:** Warm cream ground, dark ink text, bronze/amber accent, serif headlines, absolute silence between sections.

---

## Palette

### Backgrounds (Paper)
| Token | Value | Use |
|---|---|---|
| `paper-DEFAULT` | `#f5f0e8` | Page background — warm cream |
| `paper-100` | `#ede8df` | Slightly darker surface |
| `paper-200` | `#e0dbd0` | Cards, elevated panels |

### Text (Ink)
| Token | Value | Use |
|---|---|---|
| `ink` | `#1c1a17` | Primary text — warm charcoal |
| `ink-muted` | `#6b6560` | Secondary text |
| `ink-faint` | `#9a948e` | Placeholder, labels |

### Accent — Bronze Amber
`#C4973A` — the single accent color. Used for CTAs, labels, badges, active links. Nothing else.

### Product Windows — Stay Dark
The Orb, ZoeDemo, TaskManager, and memory animations keep their `#0e0d0b` dark backgrounds. They are intentional dark product "screenshots" floating on the cream page. This contrast is the design — editorial and premium.

### Green — Compass agent only.

---

## Typography

- **Playfair Display** for all H1 and H2. Already added.
- **Body**: Geist Sans, short, warm charcoal, muted. Subservient to the headline.
- **Headline size**: Go bigger. H1 on hero: `text-6xl sm:text-7xl md:text-8xl`. Let it breathe.
- **Tracking**: `-tracking-tight` on headlines. Headlines should feel dense and confident.

---

## Spacing

- Major sections: `py-40` minimum. `py-48` preferred for hero-adjacent sections.
- Whitespace is the luxury. Do not fill it.
- Body copy: `max-w-xl` maximum.

---

## Decorative Elements — Removed Entirely

**Remove ALL of the following:**
- Large blur blob divs (`w-[600px] h-[600px] rounded-full blur-[140px]`)
- Grid overlay patterns
- `GradientMesh` component in Hero
- Horizontal rule section dividers (or reduce to `via-ink/8`)
- Animated particle systems

The page should feel like paper. Paper has no glowing blobs.

---

## Animations & Motion

- ZoeDemo, TaskManager, AdaptiveMemory, Orb — keep as-is, they're the product.
- Demo containers: use solid dark backgrounds (`bg-dark-100` not `bg-dark-100/60`) so they read clearly as product windows on the cream page.
- Entrance: `opacity 0→1`, `y: 16px`, `0.6s`. Nothing else.

---

## UI Patterns

- **Nav**: Transparent always. Logo dark ink. Links dark. Amber "Sign up" button. On scroll: paper bg, ink border.
- **Buttons (primary)**: Amber bg, cream text, one subtle shadow.
- **Buttons (secondary)**: `border-ink/15`, ink text. No glow.
- **Cards**: No background. No border. Just padding and content. Or at most `border-ink/8 bg-ink/[0.03]`.
- **Section labels**: Amber, small, tracked uppercase. Max 2–3 per page.
- **Horizontal rules**: `via-ink/8` or removed entirely.

---

## Implementation Tokens (Tailwind)

Add to config:
```
paper: { DEFAULT: '#f5f0e8', 100: '#ede8df', 200: '#e0dbd0' }
ink: { DEFAULT: '#1c1a17', muted: '#6b6560', faint: '#9a948e' }
```

Body: `bg-paper text-ink`

Text replacements (page-level components, NOT inside demo panels):
- `text-white` → `text-ink`
- `text-white/80` → `text-ink/90`
- `text-white/60` → `text-ink/70`
- `text-white/50` → `text-ink/60`
- `text-white/40` → `text-ink/50`
- `text-white/35` → `text-ink/45`
- `text-white/30` → `text-ink/40`
- `text-white/20` → `text-ink/30`
- `border-white/5` → `border-ink/8`
- `border-white/8` → `border-ink/10`
- `border-white/10` → `border-ink/12`
- `bg-white/[0.02]` → `bg-ink/[0.04]`
- `via-white/10` → `via-ink/8`
