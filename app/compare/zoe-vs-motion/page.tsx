import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Zoe vs. Motion — Korda Labs',
  description: 'Motion schedules when you do the work. Zoe does the work — autonomously executing research, file ops, automation, and more.',
}

const rows = [
  { feature: 'AI task scheduling', motion: 'Yes — auto-schedules work tasks', zoe: 'Yes — agents auto-schedule around goals + calendar', zoeWins: false },
  { feature: 'Agent selection matrix', motion: 'N/A', zoe: 'Auto-selects best model per task', zoeWins: true },
  { feature: 'One-click model addition', motion: 'N/A', zoe: 'Add any model instantly', zoeWins: true },
  { feature: 'Autonomous file operations', motion: 'None', zoe: 'Read/write Google Drive, OneDrive, local disk', zoeWins: true },
  { feature: 'Web research & browsing', motion: 'None', zoe: 'Agents search, fetch, and summarize autonomously', zoeWins: true },
  { feature: 'Browser automation', motion: 'None', zoe: 'Headless automation — form fills, data extraction', zoeWins: true },
  { feature: 'Webhook integrations', motion: 'None', zoe: 'Incoming + outgoing, HMAC-signed payloads', zoeWins: true },
  { feature: 'Persona agents', motion: 'None', zoe: 'Researcher, writer, analyst, builder — created as needed', zoeWins: true },
  { feature: 'Proactive briefings', motion: 'None — reactive only', zoe: '7 automated triggers — no app needed', zoeWins: true },
  { feature: 'Personal & fitness integration', motion: 'Not available', zoe: 'Apple Health, Strava, Whoop, Oura, Garmin & more', zoeWins: true },
  { feature: 'Long-term goal tracking', motion: 'Not available', zoe: 'Compass agent — milestones, progress, personal-aware', zoeWins: true },
  { feature: 'AI memory', motion: 'None', zoe: 'Persistent — learns preferences, adapts over time', zoeWins: true },
  { feature: 'Abort running agents', motion: 'N/A', zoe: 'Stop any agent mid-execution', zoeWins: true },
  { feature: 'Audit log', motion: 'Not available', zoe: 'Immutable — every action logged, 30-day retention', zoeWins: true },
  { feature: 'BYO API keys', motion: 'No — closed infrastructure', zoe: 'Yes — OpenAI, Anthropic, Gemini, Ollama', zoeWins: true },
  { feature: 'Desktop bridge', motion: 'Not available', zoe: 'Remote access + task execution on home machine', zoeWins: true },
  { feature: 'Free tier', motion: 'No — trial only', zoe: 'Yes — free forever tier', zoeWins: true },
  { feature: 'Starting price', motion: '$19/month (annual)', zoe: '$12/month (annual early access)', zoeWins: true },
]

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="inline flex-shrink-0">
      <path d="M2 7L5.5 10.5L12 3" stroke="#8A4E28" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function ZoeVsMotionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="relative max-w-3xl mx-auto">
          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">Compare</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight mb-6">
            Zoe vs. Motion
          </h1>
          <p className="text-ink/50 text-lg leading-relaxed max-w-2xl mx-auto">
            Motion is excellent at auto-scheduling your work tasks. But it stops at the calendar.
            Zoe connects your health, long-term goals, and life context into one AI layer —
            so your schedule reflects who you actually are, not just what's on your plate today.
          </p>
        </div>
      </section>

      {/* The key angle */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            <div className="p-6 rounded-2xl border border-ink/10 bg-ink/[0.03]">
              <p className="text-xs font-medium tracking-widest uppercase text-ink/25 mb-3">Motion</p>
              <p className="text-ink/50 leading-relaxed">
                Automatically schedules your work tasks into your calendar. Solid AI time-blocking,
                project management, and meeting coordination — all within your work context.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-accent/20 bg-accent/[0.03]">
              <p className="text-xs font-medium tracking-widest uppercase text-accent/60 mb-3">Zoe</p>
              <p className="text-ink/65 leading-relaxed">
                Does everything Motion does for scheduling — and then connects it to your health data,
                long-term goals, habits, and personal life. Your AI layer knows the whole picture, not just your work queue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-4 px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-4 px-4">
            <div className="text-xs font-medium tracking-widest uppercase text-ink/30">Feature</div>
            <div className="text-xs font-medium tracking-widest uppercase text-ink/30 text-center">Motion</div>
            <div className="text-xs font-medium tracking-widest uppercase text-accent/70 text-center">Zoe</div>
          </div>

          <div className="rounded-2xl border border-ink/10 overflow-hidden">
            {rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 gap-4 px-4 py-4 items-start ${i % 2 === 0 ? 'bg-ink/[0.02]' : 'bg-transparent'} border-b border-ink/6 last:border-0`}
              >
                <div className="text-sm text-ink/70 font-medium">{row.feature}</div>
                <div className="text-sm text-ink/40 text-center">{row.motion}</div>
                <div className={`text-sm text-center font-medium ${row.zoeWins ? 'text-ink/80' : 'text-ink/50'}`}>
                  {row.zoeWins && <><Check />{' '}</>}
                  {row.zoe}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight mb-4">
              AI scheduling that goes beyond your calendar.
            </h2>
            <p className="text-ink/40 mb-8">Try Zoe free — no credit card required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-accent text-paper hover:bg-accent-dark transition-all duration-200 shadow-[0_0_24px_#8A4E2844] hover:shadow-[0_0_36px_#8A4E2866]"
              >
                Get started free
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl border border-ink/15 text-ink hover:border-ink/25 hover:bg-ink/5 transition-all duration-200"
              >
                See pricing
              </Link>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-ink/8 text-center">
            <p className="text-ink/30 text-sm mb-4">Also comparing</p>
            <div className="flex justify-center gap-6">
              <Link href="/compare/zoe-vs-akiflow" className="text-sm text-accent hover:text-accent-dark transition-colors">
                Zoe vs. Akiflow →
              </Link>
              <Link href="/compare" className="text-sm text-ink/40 hover:text-ink transition-colors">
                All comparisons →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
