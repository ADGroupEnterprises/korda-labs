import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Zoe vs. Akiflow — Korda Labs',
  description: 'Akiflow organizes your work. Zoe does it. See how autonomous agents, proactive planning, and real execution separate the two.',
}

const rows = [
  { feature: 'Task consolidation', akiflow: '30+ integrations (manual triage)', zoe: '20+ integrations, growing weekly', zoeWins: false },
  { feature: 'Daily planning', akiflow: 'You manually schedule every task', zoe: 'Agents auto-schedule around your calendar', zoeWins: true },
  { feature: 'Calendar time-blocking', akiflow: 'Manual drag-and-drop', zoe: 'Agent-managed, adapts in real time', zoeWins: true },
  { feature: 'AI task rescheduling', akiflow: 'None — all manual', zoe: 'Automatic when priorities shift', zoeWins: true },
  { feature: 'Agent selection matrix', akiflow: 'N/A', zoe: 'Auto-selects best model per task', zoeWins: true },
  { feature: 'One-click model addition', akiflow: 'N/A', zoe: 'Add any model instantly', zoeWins: true },
  { feature: 'Autonomous file operations', akiflow: 'None', zoe: 'Read/write Google Drive, OneDrive, local disk', zoeWins: true },
  { feature: 'Web research & browsing', akiflow: 'None', zoe: 'Agents search, fetch, and summarize autonomously', zoeWins: true },
  { feature: 'Browser automation', akiflow: 'None', zoe: 'Headless automation — form fills, data extraction, web actions', zoeWins: true },
  { feature: 'Webhook integrations', akiflow: 'Zapier only (outbound)', zoe: 'Incoming + outgoing, HMAC-signed payloads', zoeWins: true },
  { feature: 'Proactive briefings', akiflow: 'You must open the app', zoe: '7 automated triggers — morning, stale, weekly & more', zoeWins: true },
  { feature: 'Persona agents', akiflow: 'None', zoe: 'Researcher, writer, analyst, builder — created as needed', zoeWins: true },
  { feature: 'Personal & fitness layer', akiflow: 'Not available', zoe: 'Apple Health, Strava, Whoop, Oura & more', zoeWins: true },
  { feature: 'Long-term goal tracking', akiflow: 'Not available', zoe: 'Compass — milestones, progress, calendar-aware', zoeWins: true },
  { feature: 'AI memory', akiflow: 'None', zoe: 'Persistent — learns your preferences over time', zoeWins: true },
  { feature: 'Abort running agents', akiflow: 'N/A', zoe: 'Stop any agent mid-execution, see what completed', zoeWins: true },
  { feature: 'Audit log', akiflow: 'None', zoe: 'Immutable — every action logged, 30-day retention', zoeWins: true },
  { feature: 'BYO API keys', akiflow: 'No — locked to their infrastructure', zoe: 'Yes — OpenAI, Anthropic, Gemini, Ollama', zoeWins: true },
  { feature: 'Desktop bridge', akiflow: 'Not available', zoe: 'Remote access + task execution on your home machine', zoeWins: true },
  { feature: 'Free tier', akiflow: 'No — 7-day trial only', zoe: 'Yes — free forever tier available', zoeWins: true },
  { feature: 'Starting price', akiflow: '$19/month (annual) · $34/month monthly', zoe: '$12/month (annual early access)', zoeWins: true },
]

function Yes() {
  return (
    <span className="inline-flex items-center gap-1.5 text-brand-green text-sm font-medium">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7L5.5 10.5L12 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  )
}

export default function ZoeVsAkiflowPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="relative max-w-3xl mx-auto">
          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">Compare</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight mb-6">
            Zoe vs. Akiflow
          </h1>
          <p className="text-accent font-medium text-base mb-4">Akiflow organizes your work. Zoe does it.</p>
          <p className="text-ink text-lg leading-relaxed max-w-2xl mx-auto">
            Akiflow is excellent at pulling tasks together and helping you plan your day. But when planning is done,
            the work still falls to you. Zoe&apos;s agents don&apos;t stop at the plan — they execute it. Research, write,
            automate, and deliver real outputs, while the proactive engine runs your week without you having to ask.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-8 px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Header row */}
          <div className="grid grid-cols-3 gap-4 mb-4 px-4">
            <div className="text-xs font-medium tracking-widest uppercase text-accent">Feature</div>
            <div className="text-xs font-medium tracking-widest uppercase text-accent text-center">Akiflow</div>
            <div className="text-xs font-medium tracking-widest uppercase text-accent text-center">Zoe</div>
          </div>

          <div className="rounded-2xl border border-ink/10 overflow-hidden">
            {rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 gap-4 px-4 py-4 items-start ${i % 2 === 0 ? 'bg-ink/[0.02]' : 'bg-transparent'} border-b border-ink/6 last:border-0`}
              >
                <div className="text-sm text-ink font-medium">{row.feature}</div>
                <div className="text-sm text-ink text-center">{row.akiflow}</div>
                <div className={`text-sm text-center font-medium ${row.zoeWins ? 'text-ink' : 'text-ink'}`}>
                  {row.zoeWins && <Yes />}
                  <span className="ml-1">{row.zoe}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight mb-4">
              Ready to let AI do the planning?
            </h2>
            <p className="text-ink mb-8">Try Zoe free — no credit card required.</p>
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

          {/* Other comparisons */}
          <div className="mt-16 pt-12 border-t border-ink/8 text-center">
            <p className="text-ink text-sm mb-4">Also comparing</p>
            <div className="flex justify-center gap-6">
              <Link href="/compare/zoe-vs-motion" className="text-sm text-accent hover:text-accent-dark transition-colors">
                Zoe vs. Motion →
              </Link>
              <Link href="/compare" className="text-sm text-ink hover:text-accent transition-colors">
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
