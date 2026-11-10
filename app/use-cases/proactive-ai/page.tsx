import { APP_SIGNUP_URL } from '@/lib/links'
import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Proactive AI — Keel by Korda Labs',
  description: "Keel runs your week without being asked. 7 automated triggers fire on schedule — morning briefings, stale task alerts, goal checks, and more.",
}

const triggers = [
  {
    time: '7:00 am daily',
    name: 'Morning briefing',
    body: "Before you open your laptop, Keel has reviewed your goals, checked your calendar, weighed your energy data from your health apps, and built a prioritized plan for your day. It's ready when you are.",
    replaces: 'The 30-minute morning triage ritual',
  },
  {
    time: 'After 4h inactivity',
    name: 'Stale task alert',
    body: "A task has been sitting in review for over 4 hours without action. Keel flags it and asks if you want it rescheduled, reassigned to an agent, or deprioritized. ",
    replaces: 'Manually checking what got stuck',
  },
  {
    time: 'When activity drops off',
    name: 'Goal momentum check',
    body: "Compass monitors activity across all your goals. When a goal goes quiet — no tasks completed, no progress logged — it surfaces the gap and suggests a concrete next action before it becomes a miss.",
    replaces: 'Quarterly regret about goals you forgot',
  },
  {
    time: 'End of each day',
    name: 'Daily summary',
    body: "What got done. What shifted. What moved tomorrow's plan. Keel logs it, synthesizes it, and delivers a short end-of-day summary with tomorrow's priorities already adjusted.",
    replaces: 'The mental overhead of closing out your day',
  },
  {
    time: 'Every Sunday',
    name: 'Weekly retrospective',
    body: "A full-week review: tasks completed, goals progressed, time distribution across work vs. life, and next week's priorities — pre-loaded and ready to review. No journaling required.",
    replaces: "Sunday anxiety about the week ahead",
  },
  {
    time: 'When progress falls below 30%',
    name: 'Goal gap alert',
    body: "A goal category is tracking significantly below where it should be. Compass flags it, shows you the trend, and suggests an action — whether that's adjusting the goal or accelerating the work.",
    replaces: "Discovering goal gaps too late to fix them",
  },
  {
    time: 'When work dominates',
    name: 'Domain overload warning',
    body: "Work tasks are taking a disproportionate share of your attention and scheduled time. Keel notices the imbalance, tells you, and suggests space to reintroduce the personal goals that got crowded out.",
    replaces: "Noticing six months later that you stopped exercising",
  },
]

export default function ProactiveAIPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <p className="text-accent eyebrow mb-4">Proactive engine</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-6 max-w-3xl">
            It runs
            <br />
            <span className="text-ink">before you ask.</span>
          </h1>
          <p className="text-ink text-xl leading-relaxed max-w-2xl mb-6">
            Seven triggers keep your work and goals moving without you opening the app.
          </p>
          <p className="text-ink text-sm mb-10">
            Morning briefings at 7am. Stale task alerts after 4 hours. Weekly retrospectives every Sunday. All automatic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={APP_SIGNUP_URL} className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-accent text-paper hover:bg-navy transition-all duration-300">
              Get Keel
            </Link>
            <Link href="/products/keel" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full border border-ink/15 text-ink hover:border-mist hover:bg-mist transition-all duration-300">
              See all of Keel
            </Link>
          </div>
        </div>
      </section>

      {/* The 7 triggers */}
      <section className="py-16 px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-ink mb-10">7 proactive triggers</p>
          <div className="space-y-4 mb-20">
            {triggers.map((t, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-6 rounded-2xl border border-mist bg-mist">
                <div>
                  <span className="inline-block text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-mist bg-mist text-ink mb-2">
                    {t.time}
                  </span>
                  <p className="text-xs text-ink mt-2">Replaces: <em>{t.replaces}</em></p>
                </div>
                <div className="sm:col-span-3">
                  <h3 className="text-ink font-medium mb-2">{t.name}</h3>
                  <p className="text-ink text-sm leading-relaxed">{t.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sensitivity note */}
          <div className="p-6 rounded-2xl border border-mist bg-mist mb-16">
            <p className="text-xs font-medium tracking-widest uppercase text-ink mb-3">Your sensitivity, your control</p>
            <p className="text-ink text-sm leading-relaxed">
              Every trigger has a priority level. A single sensitivity slider (1–5) controls which priorities fire for you —
              from only urgent cost alerts, to the full proactive stack. Triggers deduplicate automatically and respect
              cooldown windows so you&apos;re never spammed.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-4">
              Your week,
              <br />
              <span className="text-ink">on a rhythm.</span>
            </h2>
            <p className="text-ink mb-8">Free on web.</p>
            <Link href={APP_SIGNUP_URL} className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-accent text-paper hover:bg-navy transition-all duration-300">
              Get Keel
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
