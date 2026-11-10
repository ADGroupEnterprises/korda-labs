import { APP_SIGNUP_URL } from '@/lib/links'
import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Keel vs. Motion — Korda Labs',
  description: 'Motion schedules when you do the work. Keel does the work — autonomously executing research, file ops, automation, and more.',
}

const rows = [
  { feature: 'AI task scheduling', motion: 'Yes — auto-schedules work tasks', keel: 'Yes — agents auto-schedule around goals + calendar', keelWins: false },
  { feature: 'Agent selection matrix', motion: 'N/A', keel: 'Auto-selects best model per task', keelWins: true },
  { feature: 'One-click model addition', motion: 'N/A', keel: 'Add any model instantly', keelWins: true },
  { feature: 'Autonomous file operations', motion: 'None', keel: 'Read/write Google Drive, OneDrive, local disk', keelWins: true },
  { feature: 'Web research & browsing', motion: 'None', keel: 'Agents search, fetch, and summarize autonomously', keelWins: true },
  { feature: 'Browser automation', motion: 'None', keel: 'Headless automation — form fills, data extraction', keelWins: true },
  { feature: 'Webhook integrations', motion: 'None', keel: 'Incoming + outgoing, HMAC-signed payloads', keelWins: true },
  { feature: 'Persona agents', motion: 'None', keel: 'Researcher, writer, analyst, builder — created as needed', keelWins: true },
  { feature: 'Proactive briefings', motion: 'None — reactive only', keel: '7 automated triggers — no app needed', keelWins: true },
  { feature: 'Personal & fitness integration', motion: 'Not available', keel: 'Apple Health, Strava, Whoop, Oura, Garmin & more', keelWins: true },
  { feature: 'Long-term goal tracking', motion: 'Not available', keel: 'Compass agent — milestones, progress, personal-aware', keelWins: true },
  { feature: 'AI memory', motion: 'None', keel: 'Persistent — learns preferences, adapts over time', keelWins: true },
  { feature: 'Abort running agents', motion: 'N/A', keel: 'Stop any agent mid-execution', keelWins: true },
  { feature: 'Audit log', motion: 'Not available', keel: 'Immutable — every action logged, 30-day retention', keelWins: true },
  { feature: 'BYO API keys', motion: 'No — closed infrastructure', keel: 'Yes — OpenAI, Anthropic, Gemini, Ollama', keelWins: true },
  { feature: 'Desktop bridge', motion: 'Not available', keel: 'Remote access + task execution on home machine', keelWins: true },
  { feature: 'Free tier', motion: 'No — trial only', keel: 'Yes — free forever tier', keelWins: true },
  { feature: 'Starting price', motion: '$19/month (annual)', keel: '$12/month (annual early access)', keelWins: true },
]

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="inline flex-shrink-0">
      <path d="M2 7L5.5 10.5L12 3" stroke="#3D64AE" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function KeelVsMotionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="relative max-w-3xl mx-auto">
          <p className="text-accent eyebrow mb-4">Compare</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-6">
            Keel vs. Motion
          </h1>
          <p className="text-ink text-lg leading-relaxed max-w-2xl mx-auto">
            Motion is excellent at auto-scheduling work tasks. Keel schedules too, and plans against your health data and long-term goals as well as your calendar.
          </p>
        </div>
      </section>

      {/* The key angle */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            <div className="p-6 rounded-2xl border border-mist bg-mist">
              <p className="text-xs font-medium tracking-widest uppercase text-ink mb-3">Motion</p>
              <p className="text-ink leading-relaxed">
                Automatically schedules your work tasks into your calendar. Solid AI time-blocking,
                project management, and meeting coordination — all within your work context.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-mist bg-mist">
              <p className="eyebrow text-accent mb-3">Keel</p>
              <p className="text-ink leading-relaxed">
                Does everything Motion does for scheduling — and then connects it to your health data,
                long-term goals, habits, and personal life. Keel plans against all of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-4 px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-4 px-4">
            <div className="text-xs font-medium tracking-widest uppercase text-ink">Feature</div>
            <div className="text-xs font-medium tracking-widest uppercase text-ink text-center">Motion</div>
            <div className="eyebrow text-accent text-center">Keel</div>
          </div>

          <div className="rounded-2xl border border-mist overflow-hidden">
            {rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 gap-4 px-4 py-4 items-start ${i % 2 === 0 ? 'bg-mist' : 'bg-transparent'} border-b border-mist last:border-0`}
              >
                <div className="text-sm text-ink font-medium">{row.feature}</div>
                <div className="text-sm text-ink text-center">{row.motion}</div>
                <div className={`text-sm text-center font-medium ${row.keelWins ? 'text-ink' : 'text-ink'}`}>
                  {row.keelWins && <><Check />{' '}</>}
                  {row.keel}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-4">
              AI scheduling that goes beyond your calendar.
            </h2>
            <p className="text-ink mb-8">Try Keel free — no credit card required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={APP_SIGNUP_URL}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-accent text-paper hover:bg-navy transition-all duration-300"
              >
                Get Keel
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full border border-ink/15 text-ink hover:border-mist hover:bg-mist transition-all duration-300"
              >
                See pricing
              </Link>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-mist text-center">
            <p className="text-ink text-sm mb-4">Also comparing</p>
            <div className="flex justify-center gap-6">
              <Link href="/compare/keel-vs-akiflow" className="text-sm text-accent hover:text-accent transition-colors">
                Keel vs. Akiflow →
              </Link>
              <Link href="/compare" className="text-sm text-ink hover:text-ink transition-colors">
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
