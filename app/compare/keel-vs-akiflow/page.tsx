import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Keel vs. Akiflow — Korda Labs',
  description: 'Akiflow organizes your work. Keel does it. See how autonomous agents, proactive planning, and real execution separate the two.',
}

const rows = [
  { feature: 'Task consolidation', akiflow: 'Dozens of integrations (manual triage)', keel: '20+ integrations and growing', keelWins: false },
  { feature: 'Daily planning', akiflow: 'You manually schedule every task', keel: 'Agents auto-schedule around your calendar', keelWins: true },
  { feature: 'Calendar time-blocking', akiflow: 'Manual drag-and-drop', keel: 'Agent-managed, adapts in real time', keelWins: true },
  { feature: 'AI task rescheduling', akiflow: 'None — all manual', keel: 'Automatic when priorities shift', keelWins: true },
  { feature: 'Agent selection matrix', akiflow: 'N/A', keel: 'Auto-selects best model per task', keelWins: true },
  { feature: 'One-click model addition', akiflow: 'N/A', keel: 'Add any model instantly', keelWins: true },
  { feature: 'Autonomous file operations', akiflow: 'None', keel: 'Read/write Google Drive, OneDrive, local disk', keelWins: true },
  { feature: 'Web research & browsing', akiflow: 'None', keel: 'Agents search, fetch, and summarize autonomously', keelWins: true },
  { feature: 'Browser automation', akiflow: 'None', keel: 'Headless automation — form fills, data extraction, web actions', keelWins: true },
  { feature: 'Webhook integrations', akiflow: 'Zapier only (outbound)', keel: 'Incoming + outgoing, HMAC-signed payloads', keelWins: true },
  { feature: 'Proactive briefings', akiflow: 'You must open the app', keel: '7 automated triggers — morning, stale, weekly & more', keelWins: true },
  { feature: 'Persona agents', akiflow: 'None', keel: 'Researcher, writer, analyst, builder — created as needed', keelWins: true },
  { feature: 'Personal & fitness layer', akiflow: 'Not available', keel: 'Apple Health, Strava, Whoop, Oura & more', keelWins: true },
  { feature: 'Long-term goal tracking', akiflow: 'Not available', keel: 'Compass — milestones, progress, calendar-aware', keelWins: true },
  { feature: 'AI memory', akiflow: 'None', keel: 'Persistent — learns your preferences over time', keelWins: true },
  { feature: 'Abort running agents', akiflow: 'N/A', keel: 'Stop any agent mid-execution, see what completed', keelWins: true },
  { feature: 'Audit log', akiflow: 'None', keel: 'Immutable — every action logged, 30-day retention', keelWins: true },
  { feature: 'BYO API keys', akiflow: 'No — locked to their infrastructure', keel: 'Yes — OpenAI, Anthropic, Gemini, Ollama', keelWins: true },
  { feature: 'Desktop bridge', akiflow: 'Not available', keel: 'Remote access + task execution on your home machine', keelWins: true },
  { feature: 'Free tier', akiflow: 'No — 7-day trial only', keel: 'Yes — free forever tier available', keelWins: true },
  { feature: 'Starting price', akiflow: '$19/month (annual) · $34/month monthly', keel: '$12/month (annual early access)', keelWins: true },
]

function Yes() {
  return (
    <span className="inline-flex items-center gap-1.5 text-accent text-sm font-medium">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7L5.5 10.5L12 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  )
}

export default function KeelVsAkiflowPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="relative max-w-3xl mx-auto">
          <p className="text-accent eyebrow mb-4">Compare</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-6">
            Keel vs. Akiflow
          </h1>
          <p className="text-accent font-medium text-base mb-4">Akiflow organizes your work. Keel does it.</p>
          <p className="text-ink text-lg leading-relaxed max-w-2xl mx-auto">
            Akiflow is excellent at pulling tasks together and helping you plan your day. But when planning is done,
            the work still falls to you. Keel&apos;s agents don&apos;t stop at the plan — they execute it. Research, write,
            automate, and deliver real outputs, while the proactive engine runs your week without you having to ask.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-8 px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Header row */}
          <div className="grid grid-cols-3 gap-4 mb-4 px-4">
            <div className="text-xs font-medium tracking-widest uppercase text-ink">Feature</div>
            <div className="text-xs font-medium tracking-widest uppercase text-ink text-center">Akiflow</div>
            <div className="eyebrow text-accent text-center">Keel</div>
          </div>

          <div className="rounded-2xl border border-mist overflow-hidden">
            {rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 gap-4 px-4 py-4 items-start ${i % 2 === 0 ? 'bg-mist' : 'bg-transparent'} border-b border-mist last:border-0`}
              >
                <div className="text-sm text-ink font-medium">{row.feature}</div>
                <div className="text-sm text-ink text-center">{row.akiflow}</div>
                <div className={`text-sm text-center font-medium ${row.keelWins ? 'text-ink' : 'text-ink'}`}>
                  {row.keelWins && <Yes />}
                  <span className="ml-1">{row.keel}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-4">
              Ready to let AI do the planning?
            </h2>
            <p className="text-ink mb-8">Try Keel free — no credit card required.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-accent text-paper hover:bg-navy transition-all duration-300"
              >
                Get started free
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full border border-ink/15 text-ink hover:border-mist hover:bg-mist transition-all duration-300"
              >
                See pricing
              </Link>
            </div>
          </div>

          {/* Other comparisons */}
          <div className="mt-16 pt-12 border-t border-mist text-center">
            <p className="text-ink text-sm mb-4">Also comparing</p>
            <div className="flex justify-center gap-6">
              <Link href="/compare/keel-vs-motion" className="text-sm text-accent hover:text-accent transition-colors">
                Keel vs. Motion →
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
