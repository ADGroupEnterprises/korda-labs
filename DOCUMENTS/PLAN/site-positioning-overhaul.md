# Site Positioning Overhaul — Zoe vs. Akiflow Competitive Layer
> Goal: Capture Akiflow's customer base (task-fragmented professionals, founders, operators) by making Zoe's AI-first differentiation explicit, adding missing conversion infrastructure, and owning the daily planning use case with automation as the wedge.
>
> Baseline audit: 2026-03-11
> Status key: `[ ]` pending · `[~]` in progress · `[x]` done · `[!]` blocked

---

## SECTION 1 — Copy & Messaging Changes (Existing Pages)

### CHANGE-001
- **File:** `components/HeroSection.tsx` (home page hero)
- **Type:** Copy update
- **Priority:** P0
- **Description:** Rewrite headline and subheadline to lead with the professional pain point (tool fragmentation, calendar chaos) rather than the lifestyle aspiration. Current headline ("Your life, fully in motion.") is too abstract to convert Akiflow's pragmatic power-user audience.
- **Current headline:** "Your life, / fully in motion."
- **Recommended headline:** "Stop managing your tools. / Let your tools manage themselves." (or A/B test: "Your tasks live in 10 different apps. / Zoe brings them into one intelligent plan — and executes it.")
- **Current subheadline:** "Zoe is your personal AI operating system — connecting your goals, health, calendar, tools, and habits into one intelligent layer that works for you, not the other way around."
- **Recommended subheadline:** "Zoe is your personal AI operating system — pulling your goals, tasks, calendar, and health into one intelligent layer that plans your day, runs your agents, and adapts as life changes. Not another tool to manage. The layer that manages all your tools."
- **Status:** `[x]`

---

### CHANGE-002
- **File:** `components/HeroSection.tsx` (home page hero)
- **Type:** Copy update
- **Priority:** P0
- **Description:** Add a direct differentiator line below CTAs or as a memory hint that explicitly names what Zoe does vs. tools like Akiflow/Motion.
- **Recommended addition:** "While Akiflow and Motion still make you do the planning — Zoe does it for you."
- **Status:** `[x]`

---

### CHANGE-003
- **File:** Home page — agent/feature section order
- **Type:** Structure update
- **Priority:** P1
- **Description:** Move the "three agents" / "team working for you" concept much earlier in the home page scroll — ideally as the second section after the hero. Currently buried deep on the Zoe product page. This is the core differentiator vs. Akiflow's manual process and must be visible above the fold on scroll.
- **Recommended section headline:** "While you're working, Zoe is planning. / That's the difference."
- **Recommended body:** "Akiflow requires you to manually schedule every task. Zoe's agents handle that — scheduling around your meetings, adjusting when priorities shift, tracking your goals in the background. You direct. Zoe delivers."
- **Status:** `[x]`

---

### CHANGE-004
- **File:** Home page — add Social Proof section
- **Type:** New section (existing page)
- **Priority:** P1
- **Description:** Akiflow leads with "Trusted by 10,000+ ambitious professionals. Backed by Y Combinator." Zoe has zero social proof. Add a section with: user/signup count, 2-3 testimonial quotes from beta users, any press mentions. Even a single strong quote outperforms nothing.
- **Placement:** Between hero and agents section.
- **Minimum viable:** User count stat + 2 testimonial pull quotes.
- **Status:** `[x]`

---

### CHANGE-005
- **File:** Home page — add "What Makes Zoe Different" section
- **Type:** New section (existing page)
- **Priority:** P1
- **Description:** A plain-language contrast section that speaks to the Akiflow/Motion/Notion crowd without naming competitors explicitly.
- **Recommended headline:** "Every other tool puts the work on you."
- **Recommended copy:**
  - "Other tools: Pull your tasks together. Then you schedule them. Then you track them. Then you re-plan when something changes. All day. Every day."
  - "Zoe: You tell it your goals. It builds the plan. It runs the agents. It adjusts in real time. You focus on what actually matters."
- **Status:** `[x]`

---

### CHANGE-006
- **File:** `app/products/page.tsx` — Products page hero
- **Type:** Copy update
- **Priority:** P2
- **Description:** Current headline "Built for every scale of human ambition." is too abstract for the professional audience. Needs to connect tools + intelligence + outcomes.
- **Current:** "Built for every scale / of human ambition."
- **Recommended:** "One intelligent layer. / For your work, your goals, and your life."
- **Status:** `[x]`

---

### CHANGE-007
- **File:** Home page — Values section (three pillars)
- **Type:** Copy update
- **Priority:** P2
- **Description:** Current pillar titles are dry and corporate. Rename to be more direct and ownable, especially for BYO API keys which is a major differentiator vs. locked-in tools like Akiflow.
- **Current → Recommended:**
  - "Privacy by design" → "Your keys. Your models. Your data."
  - "Technology with intention" → "AI that amplifies, not replaces."
  - "Open and accountable" → "No lock-in. Ever."
- **Body copy:** Keep existing body copy, update to match new titles.
- **Status:** `[x]`

---

### CHANGE-008
- **File:** `app/products/zoe/page.tsx` — Zoe product page hero
- **Type:** Copy update
- **Priority:** P2
- **Description:** Current subheadline leans purely lifestyle. Add one professional/work nod to speak to the Akiflow audience who manage task lists, meetings, and project work.
- **Current:** "A team of AI agents working quietly in the background of your life — so you can focus on living it."
- **Recommended:** "A team of AI agents handling your schedule, tasks, and goals — so you can focus on the work that moves the needle."
- **Status:** `[x]`

---

## SECTION 2 — Navigation Changes

### CHANGE-009
- **File:** `components/Navbar.tsx` (or equivalent nav component)
- **Type:** Nav structure update
- **Priority:** P0
- **Description:** Add "Pricing" and "Compare" links to the main navigation. Current nav only has Products, Sign in, Sign up. Missing pricing kills conversion for any professional comparing tools.
- **Current nav:** Logo | Products dropdown | Sign in | Sign up
- **Recommended nav:** Logo | Products | Pricing | Compare | Sign in | Sign up free
- **Notes:** "Compare" can be a dropdown linking to individual comparison pages once built.
- **Status:** `[x]`

---

## SECTION 3 — New Pages

### CHANGE-010
- **File:** `app/pricing/page.tsx` (new)
- **Type:** New page
- **Priority:** P0
- **Description:** Pricing page is the single biggest conversion gap vs. Akiflow. Akiflow's users actively compare tools before committing. No pricing page = bounce.
- **Recommended structure:**
  - Free tier: Basic Zoe, limited agents, BYO API key required
  - Pro ($X/month): Full agent suite, all integrations, memory, Desktop Bridge, priority updates
  - Annual discount: ~40% off (mirrors Akiflow's model, drives commitment)
  - If pricing not finalized: interim page with "Early access pricing coming soon — join the waitlist" + value statement + email capture
- **CTAs:** "Start free" (free tier) | "Get Pro" (pro tier)
- **Status:** `[x]`

---

### CHANGE-011
- **File:** `app/compare/zoe-vs-akiflow/page.tsx` (new)
- **Type:** New page
- **Priority:** P1
- **Description:** Head-to-head comparison page targeting Akiflow's audience. Captures people actively evaluating tools. Drives SEO for "Akiflow alternative" searches.
- **Page headline:** "Zoe vs. Akiflow — Same problem, completely different approach."
- **Comparison table columns:** Feature | Akiflow | Zoe
- **Key rows:**
  - Task consolidation (30+ vs 20+ integrations)
  - Daily planning (manual vs AI-scheduled)
  - Calendar time-blocking (manual drag-and-drop vs agent-managed)
  - Health & goals layer (none vs core feature)
  - AI memory (none vs persistent, adaptive)
  - Free tier (no — 7-day trial only vs yes)
  - Price ($19-34/month vs TBD)
  - Desktop bridge (no vs yes)
  - BYO API keys (no vs yes)
- **Bottom CTA:** "Try Zoe free — no credit card required."
- **Status:** `[x]`

---

### CHANGE-012
- **File:** `app/compare/zoe-vs-motion/page.tsx` (new)
- **Type:** New page
- **Priority:** P1
- **Description:** Motion is Akiflow's primary competitor and has significant search volume for comparisons. Capturing "Motion alternative" and "Motion vs X" traffic directly targets the overlap audience.
- **Page headline:** "Zoe vs. Motion — AI scheduling that goes beyond your calendar."
- **Angle:** Motion auto-schedules tasks but is work-only and has no health, goals, memory, or life layer. Zoe extends that intelligence to the whole person.
- **Status:** `[x]`

---

### CHANGE-013
- **File:** `app/use-cases/daily-planning/page.tsx` (new)
- **Type:** New page
- **Priority:** P1
- **Description:** Akiflow owns the "daily planning ritual" angle — morning planning view, daily shutdown feature. Zoe should claim this same use case but with AI automation as the differentiator. Targets people searching for daily planning tools.
- **Page headline:** "Your AI morning briefing. Your AI end-of-day review."
- **Body angle:** "Every morning, Zoe reviews your goals, checks your calendar, weighs your energy levels, and hands you a plan. Every evening, it logs what got done and adjusts tomorrow. The ritual — automated."
- **Sections:** Morning briefing flow | Agent activity during the day | Evening review + next-day prep | CTA
- **Status:** `[x]`

---

### CHANGE-014
- **File:** `app/use-cases/founders/page.tsx` (new)
- **Type:** New page
- **Priority:** P2
- **Description:** Founders are explicitly called out in Akiflow's target audience. A dedicated use case page for founders positions Zoe directly in their consideration set.
- **Headline angle:** "The one AI layer that runs at the speed of a founder."
- **Key pain points to address:** Context switching between 10 tools, no separation between work and life goals, manual planning overhead stealing focus time.
- **Status:** `[x]`

---

### CHANGE-015
- **File:** `app/use-cases/freelancers/page.tsx` (new)
- **Type:** New page
- **Priority:** P2
- **Description:** Freelancer product is already planned and listed on the Products page as "coming soon." A use case page can begin building SEO and waitlist interest now, before product launch.
- **Headline angle:** "Client work, personal goals, and your calendar — one intelligent layer."
- **Key features to highlight:** Client management teasers, project tracking, proposal drafting (future), time intelligence, goal tracking.
- **Status:** `[x]`

---

### CHANGE-016
- **File:** `app/blog/` directory (new)
- **Type:** New section
- **Priority:** P2
- **Description:** Akiflow's blog is a major organic traffic driver — they own content for "time blocking," "daily planning," "productivity tools" searches. A Zoe/Korda Labs blog focused on the same topics with an AI-native angle would build long-term SEO equity.
- **Recommended initial posts:**
  1. "Why time-blocking alone isn't enough anymore" (positions Zoe's AI layer)
  2. "The problem with managing your productivity tools" (directly addresses Akiflow's audience)
  3. "How AI agents are replacing the daily planning ritual"
  4. "Akiflow, Motion, Notion — why professionals still feel scattered" (comparison SEO)
- **Status:** `[x]`

---

## SECTION 4 — Compare Landing Hub

### CHANGE-017
- **File:** `app/compare/page.tsx` (new)
- **Type:** New page (hub)
- **Priority:** P2
- **Description:** A hub page at `/compare` that links to all individual comparison pages. Used as nav destination for the "Compare" link added in CHANGE-009.
- **Headline:** "See how Zoe stacks up."
- **Links to:** Zoe vs Akiflow | Zoe vs Motion | Zoe vs Notion | Zoe vs Sunsama (future)
- **Status:** `[x]`

---

## Implementation Order (Recommended)

```
Phase 1 — Conversion Infrastructure (P0, do first)
  CHANGE-009  Nav: add Pricing + Compare links
  CHANGE-010  New: /pricing page
  CHANGE-001  Copy: home hero headline + subheadline
  CHANGE-002  Copy: home hero differentiator line

Phase 2 — Home Page Strengthening (P1)
  CHANGE-003  Structure: move agents section higher on home page
  CHANGE-004  New section: social proof on home page
  CHANGE-005  New section: "Every other tool puts the work on you"
  CHANGE-011  New: /compare/zoe-vs-akiflow
  CHANGE-012  New: /compare/zoe-vs-motion
  CHANGE-013  New: /use-cases/daily-planning

Phase 3 — Depth & SEO (P2)
  CHANGE-006  Copy: Products page hero
  CHANGE-007  Copy: Values section pillar titles
  CHANGE-008  Copy: Zoe product page hero
  CHANGE-014  New: /use-cases/founders
  CHANGE-015  New: /use-cases/freelancers
  CHANGE-016  New: /blog
  CHANGE-017  New: /compare hub page
```

---

*Document created: 2026-03-11*
*Source analysis: Akiflow.com competitive audit, Korda Labs site audit*
