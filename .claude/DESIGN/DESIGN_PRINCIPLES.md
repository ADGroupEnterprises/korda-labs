# Korda Labs site — Design Principles (v2, "Harbor")

Source of truth: vault `Strategy/02 - Brand/brand-split.md` v2.0 (Brand Architecture — Korda Labs · Keel · Zoe).
This file is the working summary for anyone (or any agent) editing this repo.

## Three names, three jobs

| Name | What it is | Mark | Where it shows up on this site |
|---|---|---|---|
| **Korda Labs** | The company / studio | Compass | Nav masthead, footer, favicon, legal pages, "Built by Korda Labs" |
| **Keel** | The product (the app) | Sailboat + wordmark | Every product claim, product/pricing/compare pages, CTAs, "Keel by Korda Labs" |
| **Zoe** | The otter — skipper of the AI crew, the character you talk to | Zoe-at-the-helm badge + pose illustrations | Chat avatar/labels ("Ask Zoe"), the crew section, one illustration per section |

Rules of thumb:
- **The platform leads.** Copy says Keel ("Give Keel the task", "Keel plans the day"). Name **Zoe only when referring to that specific agent** — the crew list, an agent card, her label in a chat mock. She appears far more in pictures than in words.
- Zoe is **she/her**. Keel is **it**. Never "Zoe" as the product name; never "Keel" as a character.
- Signature: **"Keel by Korda Labs."** (footer, publisher lines, email sender).
- The old Zoe speech-bubble/spark mark is retired. Do not reintroduce it.

## Palette (tokens in `tailwind.config.ts`)

Drawn from Zoe and the Keel mark. The old five-colour brown system is retired.

| Token | Hex | Use |
|---|---|---|
| `paper` | `#FBF9F4` | Page ground (Zoe's cap) |
| `paper-100` / `mist` | `#F3F7FC` / `#E7F0FA` | Raised surfaces, cards, hairlines |
| `sky` / `sky-soft` | `#A7D7FF` / `#DCEEFF` | Hero wash, illustration backdrops |
| `accent` | `#3D64AE` | Coat blue — CTAs, links, eyebrows. The one strong accent |
| `navy` | `#27405A` | Keel hull — gradients, hovers |
| `ink` / `ink-soft` | `#0F2942` / `#49617B` | Headings + body / secondary text |
| `copper`, `brass`, `blush`, `sand` | `#9A6646`, `#E0A96D`, `#F2B8AE`, `#FBEBDC` | Warm accents, small doses only (Korda label, Zoe details) |

Brown is now a garnish (logos, Zoe's fur), never a surface.

## Typography

- **Display — Bricolage Grotesque 700**, tight tracking (`font-display font-bold`). Chunky and friendly, sits with the Keel wordmark.
- **Body — DM Sans.**
- **Labels — JetBrains Mono**, uppercase, tracked (`.eyebrow`). The "instrument panel" voice: eyebrows, stats labels, tags, step numbers.

## Zoe placement

- Files: `public/zoe/zoe-{pose}.webp` via `<Zoe pose="…">`. v2 render (2026-11-11): whiskers, darker navy coat, no blush.
- Poses: `wave`, `salute`, `point`, `walk`, `lounge` each in `-left` and `-right`; plus `peek` and `peek-wave` (behind the cream ball).
- **Pick the direction that faces or gestures into the content beside her** — never pointing or walking off the page.
- One pose per section; never two Zoes in one viewport. Pose matches the message:
  wave = hello (hero, coming soon) · point = "here's the crew" · walk = getting work done ·
  lounge = you can relax, you're in control · peek = closing CTA · salute = signup / reporting for duty.
- Never recolour, redraw, crop mid-face, mirror in CSS (use the other file), or put text on her.
- The helm badge (`<ZoeBadge>`) is her avatar wherever she "speaks" in product UI mocks.
- Crew marks: `<CrewMark agent="compass">` (owl with a telescope) and `<CrewMark agent="task-manager">` (penguin with a clipboard) — on agent cards only.

## Layout & feel

- Light, airy, a little techy: dot-grid "chart" texture (`.bg-chart`), pill buttons, `rounded-2xl/3xl` cards with mist hairlines, one deep-navy band per page.
- Headlines short. Homepage copy stays under ~550 words; one idea per section.
- Motion: gentle fades + Zoe's slow bob. Respect `prefers-reduced-motion` (handled globally).

## Voice — say less (v2.1)

The otter is cute. The copy is not. That contrast is the brand.

1. **State it. Don't argue it.** No "doesn't just", "not X — Y", "actually", "finally", "really", "so you can". Say what it does and stop.
2. **Never define Keel by a competitor** outside `/compare`. Inside it, lead with what they do well, then what Keel does. No "goes further", no "stops at".
3. **Short.** Headlines of two to six words, ending in a full stop. Body lines under ~20 words. No questions as headlines. No exclamation marks.
4. **Specifics over adjectives.** "A brief, with sources." not "powerful research."
5. **One CTA: "Get Keel."** One reassurance, once, small: "Free on web."
6. **Don't plead.** No "join the waitlist to be among the first", no "no credit card required" repeated, no "we never… full stop."
7. **Go easy on the name "Zoe".** Keel is the subject of almost every sentence. When Zoe does speak (chat mocks), she is dry: short, competent, never bubbly.
8. **One nautical word per page, at most.** "Crew" is the standing one. No puns.

Test: if a line would still be true with the sentence before it deleted, delete the sentence before it.
