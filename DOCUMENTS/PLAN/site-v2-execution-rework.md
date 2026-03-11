# Site V2 Rework — "Zoe Executes" Positioning
> Goal: Completely reframe the site around Zoe's actual execution capabilities. The V1 site positioned Zoe as a planner/organizer. Zoe is an autonomous agent that *does real work in the world* — file operations, web search, browser automation, subprocess execution, webhooks, and more. This V2 plan captures Akiflow's audience by showing them that Zoe doesn't just consolidate and schedule their tasks — it executes them.
>
> Built on: V1 site-positioning-overhaul.md (all changes complete)
> Created: 2026-03-11
> Status key: `[ ]` pending · `[~]` in progress · `[x]` done · `[!]` blocked

---

## THE CORE INSIGHT

**Akiflow's pitch:** "Stop switching between apps. Manage everything in one place."
**Motion's pitch:** "AI schedules your tasks automatically."
**Zoe's real pitch (currently unsaid):** "Zoe doesn't just schedule your tasks. It does them."

### What Zoe actually executes (that no competitor touches):
- Reads and writes files from Google Drive, OneDrive, iCloud, local disk
- Searches the web and fetches pages autonomously
- Automates browsers with headless Playwright
- Fires and receives webhooks (GitHub, Zapier, etc.)
- Runs local scripts and subprocesses via Desktop Bridge
- Spawns persona agents (researcher, writer, analyst, builder) that work in multi-turn loops
- Proactively triggers: morning briefings, stale task alerts, goal momentum checks, weekly retrospectives — all without you asking
- Every action is policy-gated (default-deny, you control what Zoe can touch)
- Every action is audit-logged (immutable, 30-day minimum retention)

### The messaging shift:
| V1 framing | V2 framing |
|---|---|
| "Zoe plans your day" | "Zoe plans your day — then does the work" |
| "A team of agents working for you" | "A team of agents that actually execute: research, write, search, build" |
| "AI operating system" | "The AI that takes action, not just advice" |
| "Connects to 20+ apps" | "Connects to 20+ apps — and can act on all of them" |
| "Gets smarter over time" | "Proactively briefs you every morning, flags stale work, and runs your week without being asked" |

---

## SECTION 1 — Global Messaging Changes

### V2-CHANGE-001
- **Scope:** Site-wide positioning / all hero sections
- **Type:** Messaging strategy shift
- **Priority:** P0
- **Description:** Replace "AI operating system" framing with "the AI that executes." The distinction Akiflow's users will immediately feel is that Zoe doesn't just *show* them their tasks — it *completes* them. Every headline, subheadline, and CTA should anchor to execution, not organization.
- **New site-wide tagline options (pick one):**
  - Primary: "Zoe doesn't manage your work. It does it."
  - Alt A: "Other tools organize your tasks. Zoe executes them."
  - Alt B: "The first AI that actually gets things done."
- **Status:** `[x]`

---

### V2-CHANGE-002
- **File:** `components/Hero.tsx`
- **Type:** Copy update (replaces V1 CHANGE-001)
- **Priority:** P0
- **Description:** The current V1 headline ("Stop managing your tools. Let them manage themselves.") is better than the original but still passive. V2 needs to anchor on *execution* — Zoe takes action in the world.
- **Recommended headline:**
  - Line 1: "Other tools manage your tasks."
  - Line 2 (gradient): "Zoe does them."
- **Recommended subheadline:** "Zoe is your personal AI operating system — connecting your goals, calendar, and tools into one intelligent layer that doesn't just plan your day. It researches, writes, searches, automates, and executes — while you focus on what only you can do."
- **Recommended differentiator hint (below CTAs):** "Autonomous agents. Real actions. Every step policy-gated and audit-logged."
- **Status:** `[x]`

---

### V2-CHANGE-003
- **File:** `components/AgentDifferentiator.tsx`
- **Type:** Full rewrite of section
- **Priority:** P0
- **Description:** The current V1 section explains the three core agents (Zoe, Compass, Task Manager) in planning terms. V2 must show that agents *execute work* — they're not advisors, they're doers. Rewrite to feature execution capabilities and the persona agent system.
- **New section headline:** "Zoe doesn't brief you on what needs doing. It gets it done."
- **New section body:** "Spin up a researcher. A writer. An analyst. A builder. Zoe's persona agents run multi-turn autonomous loops — searching the web, reading documents, writing files, running scripts — until the work is done. You approve. They execute."
- **Agent card updates:**
  - **Zoe (Orchestrator):** Add — "Spawns specialized agents for complex tasks. Manages cost, progress, and abort control in real time."
  - **Compass (Goals):** Add — "Not just tracks goals. Can propose plans, apply them to your planner, and trigger agents to act on them."
  - **Task Manager (Planner):** Add — "Not just schedules tasks. Can escalate any task to autonomous agent execution with one tap."
  - **NEW: Persona Agents** — "Researcher. Writer. Analyst. Builder. Designer. Spawned on demand. Run until done."
- **Status:** `[x]`

---

### V2-CHANGE-004
- **File:** `components/KordaSection.tsx` — Values section
- **Type:** Copy + add fourth pillar
- **Priority:** P1
- **Description:** Add a fourth value pillar specifically about execution + safety — because autonomous agents acting in the world require trust infrastructure. This is Zoe's biggest differentiator and needs to be surfaced at the trust level, not buried in features.
- **New fourth pillar:**
  - **Title:** "Every action, audited."
  - **Body:** "Zoe operates on a default-deny policy — autonomous actions are off unless you explicitly enable them. Every file it touches, every search it runs, every script it executes is logged in an immutable audit trail. You're always in control."
- **Status:** `[x]`

---

## SECTION 2 — New "Execution" Feature Section (Home Page)

### V2-CHANGE-005
- **File:** New component `components/ExecutionCapabilities.tsx`
- **Type:** New section (home page)
- **Priority:** P0
- **Description:** A dedicated home page section showing what Zoe's agents can actually *do* in the world. This is the section that separates Zoe from every task manager and AI planner on the market. Should appear between `AgentDifferentiator` and `OrbSection`.
- **Section headline:** "Your agents don't just plan. They act."
- **Section body:** "Zoe's agents run autonomous multi-turn loops — up to hundreds of tool calls per task — to complete real work. Not suggestions. Not summaries. Actual output."
- **Capability tiles (8 tiles, 2-column grid):**

  1. **File Operations**
     - Icon: document
     - Title: "Read, write, and manage files"
     - Body: "Agents access Google Drive, OneDrive, iCloud, and your local disk. They read context, draft documents, and deliver outputs — directly to your storage."

  2. **Web Research**
     - Icon: globe
     - Title: "Search and browse the web"
     - Body: "Agents run web searches and fetch page content autonomously — building research briefs, fact-checking, and surfacing information without you switching tabs."

  3. **Browser Automation**
     - Icon: cursor/browser
     - Title: "Automate your browser"
     - Body: "Headless browser automation lets agents fill forms, extract data, and interact with web services — the work that used to take 30 minutes of your time."

  4. **Webhooks & Integrations**
     - Icon: plug/webhook
     - Title: "Connect to anything via webhooks"
     - Body: "GitHub, Zapier, and any webhook-capable service can trigger Zoe agents — or receive signed notifications when agent work completes."

  5. **Persona Agents**
     - Icon: sparkle/agent
     - Title: "Spawn specialist agents on demand"
     - Body: "Need a researcher? A writer? An analyst? Zoe spawns domain-specific agents with the right tools and model for the job — automatically selected."

  6. **Desktop Bridge Execution**
     - Icon: computer
     - Title: "Run scripts on your machine"
     - Body: "The Desktop Bridge lets agents run local scripts, access local files, and control your home machine — securely, from anywhere."

  7. **Proactive Execution**
     - Icon: bell/lightning
     - Title: "Acts without being asked"
     - Body: "Morning briefings at 7am. Stale task alerts. Goal momentum checks. Weekly retrospectives. Zoe's proactive engine runs your operating rhythm automatically."

  8. **Policy-Gated Safety**
     - Icon: shield
     - Title: "Default-deny. Always."
     - Body: "Every capability is off by default. You enable exactly what you want, set resource patterns, and set daily limits. Every action is audit-logged."

- **Bottom statement:** "Every tool call checked against your policies. Every action logged. Every output reviewed before delivery."
- **Status:** `[x]`

---

## SECTION 3 — Rewrite the Zoe Product Page

### V2-CHANGE-006
- **File:** `app/products/zoe/page.tsx` — Hero section
- **Type:** Copy update
- **Priority:** P0
- **Description:** The product page hero must lead with execution. The current V1 hero ("handling your schedule, tasks, and goals") is still passive. Zoe actually *does* things.
- **New label:** "Personal AI Operating System"
- **New headline:** "Zoe"
- **New subheadline:** "An autonomous AI that researches, writes, automates, and executes — quietly running in the background of your work and life."
- **Status:** `[x]`

---

### V2-CHANGE-007
- **File:** `app/products/zoe/page.tsx` — Add "What Zoe Can Do" execution section
- **Type:** New section (product page)
- **Priority:** P0
- **Description:** The current Zoe product page explains the three core agents and how-it-works in planning terms. Add a dedicated section before the existing agents section that shows execution capabilities with real, concrete examples — the kind that make a product manager at a startup say "wait, it can do that?"
- **Section headline:** "What Zoe actually does."
- **Examples format (3-column cards with before/after):**

  1. **Research brief**
     - Trigger: "Compass detects a goal milestone approaching"
     - Action: "Researcher agent searches 12 sources, reads 8 pages, drafts a 2-page brief"
     - Output: "Delivered to your Google Drive before your morning meeting"

  2. **Weekly retrospective**
     - Trigger: "Proactive engine fires every Sunday evening"
     - Action: "Task Manager reviews the week's completed tasks, goal progress, and calendar"
     - Output: "Summary report sent to your phone with next week's priorities pre-loaded"

  3. **Inbox zero**
     - Trigger: "You ask Zoe to clear low-priority emails"
     - Action: "Browser agent opens Gmail, categorizes, archives — based on your rules"
     - Output: "Inbox cleared. Log of every action reviewable in audit trail."

  4. **File organization**
     - Trigger: "Monthly file audit scheduled in Task Manager"
     - Action: "Agent reads your Drive, applies your naming convention, moves files"
     - Output: "Organized folder delivered to your approved storage location"

- **Status:** `[x]`

---

### V2-CHANGE-008
- **File:** `app/products/zoe/page.tsx` — Proactive Engine section
- **Type:** New section (product page)
- **Priority:** P1
- **Description:** The current site doesn't mention Zoe's proactive engine at all. This is a massive differentiator — Akiflow requires you to open the app and plan. Zoe runs on a schedule, proactively, without you asking. This is the "daily planning ritual — automated" argument taken to its logical extreme.
- **Section headline:** "Zoe runs your week. You don't have to ask."
- **Seven proactive triggers to show:**
  1. **Morning briefing** — "7am daily. Your goals, schedule, and priority tasks — ready before you open your laptop."
  2. **Stale task alert** — "Task sitting in review for 4+ hours? Zoe flags it and asks if you want it rescheduled or re-assigned."
  3. **Goal momentum check** — "Activity on a goal drops off? Compass notices and surfaces it before it becomes a miss."
  4. **Daily summary** — "End of day. What got done, what shifted, and tomorrow's plan — automatic."
  5. **Weekly retrospective** — "Every Sunday. Full-week review with goal progress, time spent, and next week's priorities."
  6. **Goal gap alert** — "A goal category tracking below 30% progress? Compass flags it with a suggested action."
  7. **Domain overload warning** — "Work taking over personal goals again? Zoe notices the imbalance and tells you."
- **Status:** `[x]`

---

### V2-CHANGE-009
- **File:** `app/products/zoe/page.tsx` — Policy & Audit section update
- **Type:** Expand existing section
- **Priority:** P1
- **Description:** The current privacy section focuses on data ownership (BYO API keys, zero training). V2 must also cover execution safety — because Zoe actually operates in the world, users need to know it's governed. Expand the existing "Your models. Your keys. Your data." section.
- **Additional control features to add:**
  - **"Default-deny execution"** — "No autonomous action runs until you explicitly enable it. File access, web search, browser automation — all off by default."
  - **"Resource pattern policies"** — "Specify exactly which folders, domains, and services each agent can touch. `work_projects/**` not `/**`."
  - **"Daily action limits"** — "Set a max number of file writes, web searches, or tool calls per day. Zoe stops and asks when approaching the limit."
  - **"Immutable audit log"** — "Every tool call logged with timestamp, result, and cost. Every action reviewable. 30-day minimum retention."
  - **"Abort at any time"** — "Running agent doing something unexpected? One tap stops it mid-execution. Zoe tells you what it completed before stopping."
- **Status:** `[x]`

---

## SECTION 4 — Update Comparison Pages

### V2-CHANGE-010
- **File:** `app/compare/zoe-vs-akiflow/page.tsx`
- **Type:** Expand comparison table + hero angle
- **Priority:** P0
- **Description:** The V1 comparison covers planning features. V2 must add execution rows — these are the rows that make Akiflow look like a whiteboard next to a factory floor.
- **New hero angle:** "Akiflow organizes your work. Zoe does it."
- **New intro paragraph:** "Akiflow is excellent at pulling your tasks together and helping you plan your day. But when planning is done, the work still falls to you. Zoe's agents don't stop at the plan — they execute it."
- **New comparison rows to add:**
  - Autonomous file operations | None | Read/write Google Drive, OneDrive, local disk
  - Web research & browsing | None | Agents search, fetch, and summarize autonomously
  - Browser automation | None | Headless Playwright — form fills, data extraction, web actions
  - Webhook integrations | Limited (Zapier only) | Incoming + outgoing, HMAC-signed
  - Proactive briefings | Manual — you must open the app | 7 automated triggers (morning, stale, weekly, etc.)
  - Persona agents | None | Researcher, writer, analyst, builder — spawned on demand
  - Audit log | None | Every action logged, immutable, 30-day retention
  - Abort running agents | N/A | Yes — stop any agent mid-execution
  - Daily action limits | N/A | User-configured per action type
- **New CTA angle:** "Akiflow shows you what to do. Zoe does it."
- **Status:** `[x]`

---

### V2-CHANGE-011
- **File:** `app/compare/zoe-vs-motion/page.tsx`
- **Type:** Expand comparison + angle update
- **Priority:** P1
- **Description:** Motion auto-schedules tasks but executes nothing. The V2 Motion comparison should hammer the execution gap.
- **New angle for Motion comparison:** "Motion schedules when you'll do the work. Zoe does the work."
- **New rows:** Same execution rows as CHANGE-010 above.
- **Status:** `[x]`

---

## SECTION 5 — New Pages

### V2-CHANGE-012
- **File:** `app/use-cases/autonomous-agents/page.tsx` (new)
- **Type:** New page
- **Priority:** P0
- **Description:** A dedicated page for Zoe's autonomous execution capabilities — the page that doesn't exist anywhere in the productivity tool market because no tool does this. Target: power users and founders who want real automation, not just planning assistance.
- **Headline:** "Your agents don't just plan. They execute."
- **Sections:**
  1. What autonomous execution means (multi-turn loops, real tool calls, real outputs)
  2. What agents can do (file ops, web, browser, webhooks, scripts)
  3. How the safety model works (policy-gated, audit-logged, abort capable)
  4. Example workflows (3 real end-to-end examples)
  5. CTA
- **Status:** `[x]`

---

### V2-CHANGE-013
- **File:** `app/use-cases/proactive-ai/page.tsx` (new)
- **Type:** New page
- **Priority:** P1
- **Description:** A use case page specifically for Zoe's proactive engine — the fact that Zoe runs your operating rhythm without being asked. This directly attacks Akiflow's "daily planning ritual" positioning by making the ritual automatic.
- **Headline:** "The AI operating system that runs without you."
- **Subheadline:** "Morning briefings. Stale task alerts. Goal momentum checks. Weekly retrospectives. Zoe's proactive engine fires 7 types of triggers — automatically, on schedule, without you opening the app."
- **Status:** `[x]`

---

### V2-CHANGE-014
- **File:** `app/use-cases/desktop-bridge/page.tsx` (new)
- **Type:** New page
- **Priority:** P1
- **Description:** The Desktop Bridge is a genuinely unique capability — remote access to your home machine, local file operations, local script execution. No competitor has this. It deserves its own page.
- **Headline:** "Your home machine, fully under Zoe's control."
- **Subheadline:** "The Desktop Bridge runs quietly on your home computer. From your phone, your office, or anywhere — Zoe can read your local files, run scripts, organize folders, and execute local automations as if you were sitting right there."
- **Key capabilities:**
  - Local file read/write/organize
  - Run local scripts and subprocesses
  - Access any local application data
  - End-to-end encrypted — only you have the keys
  - Works even when your machine is asleep (wake-on-LAN optional)
- **Status:** `[x]`

---

### V2-CHANGE-015
- **File:** `app/security/page.tsx` (new)
- **Type:** New page
- **Priority:** P1
- **Description:** Because Zoe executes real actions in the world, security and trust infrastructure is a top-of-funnel concern for power users and founders. A dedicated security page addresses this proactively — and turns it into a selling point vs. competitors that have no execution safety model at all.
- **Headline:** "Zoe acts in the world. Here's how we make that safe."
- **Sections:**
  1. **Default-deny execution** — Every capability disabled until you enable it
  2. **Policy system** — Resource patterns, per-action-type daily limits
  3. **Audit trail** — Immutable log, every tool call, 30-day retention
  4. **Abort control** — Stop any agent mid-execution, see what it completed
  5. **Encryption** — AES-256-GCM, per-user keys, ZOE_ROOT_KEY HKDF derivation
  6. **No cloud for sensitive tasks** — Confidential tasks route to local models only
  7. **BYO API keys** — You own the model access, not us
  8. **Three auth modes** — Web (session cookie), Desktop (JWT/Keychain), Phone (JWT/SecureStore)
- **Status:** `[x]`

---

### V2-CHANGE-016
- **File:** `app/blog/` — New posts scaffolded
- **Type:** New content
- **Priority:** P2
- **Description:** Add execution-focused blog posts to the blog index that attack the exact search terms Akiflow's users use — and position Zoe as the evolution they've been waiting for.
- **New posts to scaffold:**
  1. "The difference between a task manager and an AI that executes" (core SEO)
  2. "What does it mean for an AI to 'do' your work?" (explainer, trust-building)
  3. "Why Akiflow users eventually hit a ceiling" (competitor SEO)
  4. "Autonomous agents with a safety net: how Zoe's policy system works"
  5. "Beyond time-blocking: when your AI actually does the work"
- **Status:** `[x]`

---

## SECTION 6 — Nav & Footer Updates

### V2-CHANGE-017
- **File:** `components/Nav.tsx`
- **Type:** Nav restructure
- **Priority:** P1
- **Description:** V2 adds enough new pages that the nav needs to reflect the depth. "How it Works" should be a top-level nav item linking to the execution capabilities and proactive engine pages. Security should be accessible from the nav or footer.
- **Recommended V2 nav:** Logo | Products ▾ | How it Works ▾ | Pricing | Compare | Security | Sign in | Sign up free
- **"How it Works" dropdown:**
  - Autonomous Agents → `/use-cases/autonomous-agents`
  - Proactive AI → `/use-cases/proactive-ai`
  - Desktop Bridge → `/use-cases/desktop-bridge`
  - Daily Planning → `/use-cases/daily-planning`
- **Status:** `[x]`

---

### V2-CHANGE-018
- **File:** `components/Footer.tsx`
- **Type:** Footer expansion
- **Priority:** P2
- **Description:** Add Security, Blog, and Use Cases sections to the footer to give SEO link equity to the new pages and surface the depth of the platform.
- **New footer columns:**
  - **Product:** Zoe, Pricing, Compare, Security
  - **Use Cases:** Daily Planning, For Founders, For Freelancers, Autonomous Agents, Proactive AI, Desktop Bridge
  - **Company:** About (OrbSection), Blog, Privacy, Terms, Contact
- **Status:** `[x]`

---

## SECTION 7 — Visual / Interactive Updates

### V2-CHANGE-019
- **File:** New component `components/AgentExecutionDemo.tsx`
- **Type:** New interactive demo component
- **Priority:** P1
- **Description:** The current `ZoeDemo` component shows a task manager animation. V2 needs a demo that shows an agent *executing* — the multi-turn loop, tool calls appearing in sequence, and a real output being delivered. This is the visual proof of Zoe's execution model.
- **Demo concept:** Animated "agent execution feed" — shows agent name, current tool call (e.g., "web_search: quarterly SaaS metrics 2026"), result snippet, next tool call, until output is delivered. Like watching a terminal but beautiful.
- **Placement:** Replace or sit alongside ZoeDemo on the home page hero right panel.
- **Status:** `[ ]` — remaining, P1

---

### V2-CHANGE-020
- **File:** `app/products/zoe/page.tsx` — Statement section
- **Type:** Copy update
- **Priority:** P2
- **Description:** The current statement section reads "Zoe doesn't just manage tasks. / It learns how you think." V2 should upgrade this to reflect execution.
- **Current:** "Zoe doesn't just manage tasks. / It learns how you think."
- **Recommended:** "Zoe doesn't just plan your work. / It does it."
- **Status:** `[x]`

---

## Implementation Order (Recommended)

```
Phase 1 — Core Messaging Shift (P0, do first — highest conversion impact)
  V2-CHANGE-001  Global: "Zoe executes" positioning
  V2-CHANGE-002  Copy: Hero headline + subheadline
  V2-CHANGE-003  Copy: AgentDifferentiator section rewrite
  V2-CHANGE-005  New section: ExecutionCapabilities on home page
  V2-CHANGE-006  Copy: Zoe product page hero
  V2-CHANGE-010  Update: Zoe vs Akiflow comparison (add execution rows)

Phase 2 — Product Page Depth (P0-P1)
  V2-CHANGE-007  New section: "What Zoe actually does" on product page
  V2-CHANGE-008  New section: Proactive Engine on product page
  V2-CHANGE-009  Expand: Policy & Audit section on product page
  V2-CHANGE-011  Update: Zoe vs Motion comparison

Phase 3 — New Pages (P0-P1)
  V2-CHANGE-012  New page: /use-cases/autonomous-agents
  V2-CHANGE-013  New page: /use-cases/proactive-ai
  V2-CHANGE-014  New page: /use-cases/desktop-bridge
  V2-CHANGE-015  New page: /security

Phase 4 — Nav, Footer, Visual (P1-P2)
  V2-CHANGE-017  Nav: "How it Works" dropdown + Security link
  V2-CHANGE-018  Footer: Full column expansion
  V2-CHANGE-019  New component: AgentExecutionDemo
  V2-CHANGE-020  Copy: Statement section upgrade

Phase 5 — Content & SEO (P2)
  V2-CHANGE-004  Values: Add "Every action, audited" fourth pillar
  V2-CHANGE-016  Blog: Execution-focused posts
```

---

## Key Messaging Principles for V2

1. **Lead with execution, not organization.** Akiflow users are tired of organizing. They want things done.
2. **Concrete beats abstract.** "Agents search 12 sources and deliver a brief to your Drive" beats "AI handles your research."
3. **Safety is a feature, not fine print.** Default-deny, audit logs, and abort control are trust-builders. Put them next to the execution claims, not buried in privacy pages.
4. **Proactive is the secret weapon.** Akiflow requires you to open it and plan. Zoe runs without you. That's not a feature — that's a different category.
5. **The comparison table is the conversion tool.** Every row where Akiflow/Motion says "None" and Zoe says a concrete capability is a conversion moment. Make those tables unmissable.

---

*Document created: 2026-03-11*
*Source: Zoe technical architecture docs (/Users/abreham/Zoe-ADGroupEnterprises/CLAUDE/DESIGN), Akiflow competitive analysis*
