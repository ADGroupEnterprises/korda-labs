import { APP_SIGNUP_URL } from '@/lib/links'
import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Keel vs. Sunsama — Korda Labs',
  description: 'Sunsama and Keel, feature by feature.',
  openGraph: {
    title: 'Keel vs. Sunsama',
    description: 'Sunsama and Keel, feature by feature.',
    images: ['/og-keel-vs-sunsama.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keel vs. Sunsama',
    description: 'Sunsama and Keel, feature by feature.',
    images: ['/og-keel-vs-sunsama.jpg'],
  },
}

const rows = [
  { feature: 'Daily planning ritual', sunsama: 'Guided daily planning flow', keel: 'Automated + guided options available', keelWins: false },
  { feature: 'Task consolidation', sunsama: 'Multiple integrations (manual)', keel: '20+ integrations and growing', keelWins: false },
  { feature: 'Agent selection matrix', sunsama: 'N/A', keel: 'Auto-selects best model per task', keelWins: true },
  { feature: 'One-click model addition', sunsama: 'N/A', keel: 'Add any model instantly', keelWins: true },
  { feature: 'Autonomous file operations', sunsama: 'None', keel: 'Read/write Google Drive, OneDrive, local disk', keelWins: true },
  { feature: 'Web research & browsing', sunsama: 'None', keel: 'Agents search, fetch, and summarize autonomously', keelWins: true },
  { feature: 'Browser automation', sunsama: 'None', keel: 'Headless automation — form fills, data extraction', keelWins: true },
  { feature: 'Webhook integrations', sunsama: 'Limited', keel: 'Incoming + outgoing, HMAC-signed payloads', keelWins: true },
  { feature: 'Persona agents', sunsama: 'None', keel: 'Researcher, writer, analyst, builder — created as needed', keelWins: true },
  { feature: 'Proactive briefings', sunsama: 'Manual daily ritual', keel: '7 automated triggers — no app needed', keelWins: true },
  { feature: 'Personal & fitness integration', sunsama: 'Not available', keel: 'Apple Health, Strava, Whoop, Oura, Garmin & more', keelWins: true },
  { feature: 'Long-term goal tracking', sunsama: 'Basic objectives', keel: 'Compass agent — milestones, progress, personal-aware', keelWins: true },
  { feature: 'AI memory', sunsama: 'None', keel: 'Persistent — learns preferences, adapts over time', keelWins: true },
  { feature: 'Abort running agents', sunsama: 'N/A', keel: 'Stop any agent mid-execution', keelWins: true },
  { feature: 'Audit log', sunsama: 'Not available', keel: 'Immutable — every action logged, 30-day retention', keelWins: true },
  { feature: 'BYO API keys', sunsama: 'No — closed infrastructure', keel: 'Yes — OpenAI, Anthropic, Gemini, Ollama', keelWins: true },
  { feature: 'Desktop bridge', sunsama: 'Not available', keel: 'Remote access + task execution on home machine', keelWins: true },
  { feature: 'Free tier', sunsama: 'No — 14-day trial only', keel: 'Yes — free forever tier', keelWins: true },
  { feature: 'Starting price', sunsama: '$20/month (annual)', keel: '$12/month (annual early access)', keelWins: true },
]

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="inline flex-shrink-0">
      <path d="M2 7L5.5 10.5L12 3" stroke="#3D64AE" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function KeelVsSunsamaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="relative max-w-3xl mx-auto">
          <p className="text-accent eyebrow mb-4">Compare</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-6">
            Keel vs. Sunsama
          </h1>
          <p className="text-ink text-lg leading-relaxed max-w-2xl mx-auto">
            Sunsama is excellent at mindful daily planning. Keel plans the day too, adds your goals and fitness data, and has agents that do the work.
          </p>
        </div>
      </section>

      {/* The key angle */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            <div className="p-6 rounded-2xl border border-mist bg-mist">
              <p className="text-xs font-medium tracking-widest uppercase text-ink mb-3">Sunsama</p>
              <p className="text-ink leading-relaxed">
                Guides you through a mindful daily planning ritual. Consolidates tasks from multiple sources
                and helps you schedule your day with intention. Focused on work and productivity.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-mist bg-mist">
              <p className="eyebrow text-accent mb-3">Keel</p>
              <p className="text-ink leading-relaxed">
                Does everything Sunsama does for daily planning — and then connects it to your personal goals,
                fitness data, habits, and life context. Keel plans against all of it.
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
            <div className="text-xs font-medium tracking-widest uppercase text-ink text-center">Sunsama</div>
            <div className="eyebrow text-accent text-center">Keel</div>
          </div>

          <div className="rounded-2xl border border-mist overflow-hidden">
            {rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 gap-4 px-4 py-4 items-start ${i % 2 === 0 ? 'bg-mist' : 'bg-transparent'} border-b border-mist last:border-0`}
              >
                <div className="text-sm text-ink font-medium">{row.feature}</div>
                <div className="text-sm text-ink text-center">{row.sunsama}</div>
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
              Daily planning that connects to your whole life.
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
