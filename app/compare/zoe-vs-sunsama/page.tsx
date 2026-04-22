import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Zoe vs. Sunsama — Korda Labs',
  description: 'Sunsama helps you plan your day mindfully. Zoe goes further — connecting your personal goals, fitness, and life context into one AI layer.',
  openGraph: {
    title: 'Zoe vs. Sunsama',
    description: 'Sunsama helps you plan your day mindfully. Zoe goes further — connecting your personal goals, fitness, and life context into one AI layer.',
    images: ['/og-zoe-vs-sunsama.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoe vs. Sunsama',
    description: 'Sunsama helps you plan your day mindfully. Zoe goes further — connecting your personal goals, fitness, and life context into one AI layer.',
    images: ['/og-zoe-vs-sunsama.jpg'],
  },
}

const rows = [
  { feature: 'Daily planning ritual', sunsama: 'Guided daily planning flow', zoe: 'Automated + guided options available', zoeWins: false },
  { feature: 'Task consolidation', sunsama: 'Multiple integrations (manual)', zoe: '20+ integrations, growing weekly', zoeWins: false },
  { feature: 'Agent selection matrix', sunsama: 'N/A', zoe: 'Auto-selects best model per task', zoeWins: true },
  { feature: 'One-click model addition', sunsama: 'N/A', zoe: 'Add any model instantly', zoeWins: true },
  { feature: 'Autonomous file operations', sunsama: 'None', zoe: 'Read/write Google Drive, OneDrive, local disk', zoeWins: true },
  { feature: 'Web research & browsing', sunsama: 'None', zoe: 'Agents search, fetch, and summarize autonomously', zoeWins: true },
  { feature: 'Browser automation', sunsama: 'None', zoe: 'Headless automation — form fills, data extraction', zoeWins: true },
  { feature: 'Webhook integrations', sunsama: 'Limited', zoe: 'Incoming + outgoing, HMAC-signed payloads', zoeWins: true },
  { feature: 'Persona agents', sunsama: 'None', zoe: 'Researcher, writer, analyst, builder — created as needed', zoeWins: true },
  { feature: 'Proactive briefings', sunsama: 'Manual daily ritual', zoe: '7 automated triggers — no app needed', zoeWins: true },
  { feature: 'Personal & fitness integration', sunsama: 'Not available', zoe: 'Apple Health, Strava, Whoop, Oura, Garmin & more', zoeWins: true },
  { feature: 'Long-term goal tracking', sunsama: 'Basic objectives', zoe: 'Compass agent — milestones, progress, personal-aware', zoeWins: true },
  { feature: 'AI memory', sunsama: 'None', zoe: 'Persistent — learns preferences, adapts over time', zoeWins: true },
  { feature: 'Abort running agents', sunsama: 'N/A', zoe: 'Stop any agent mid-execution', zoeWins: true },
  { feature: 'Audit log', sunsama: 'Not available', zoe: 'Immutable — every action logged, 30-day retention', zoeWins: true },
  { feature: 'BYO API keys', sunsama: 'No — closed infrastructure', zoe: 'Yes — OpenAI, Anthropic, Gemini, Ollama', zoeWins: true },
  { feature: 'Desktop bridge', sunsama: 'Not available', zoe: 'Remote access + task execution on home machine', zoeWins: true },
  { feature: 'Free tier', sunsama: 'No — 14-day trial only', zoe: 'Yes — free forever tier', zoeWins: true },
  { feature: 'Starting price', sunsama: '$20/month (annual)', zoe: '$12/month (annual early access)', zoeWins: true },
]

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="inline flex-shrink-0">
      <path d="M2 7L5.5 10.5L12 3" stroke="#8A4E28" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function ZoeVsSunsamaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="relative max-w-3xl mx-auto">
          <p className="text-accent text-[0.9rem] font-bold tracking-widest uppercase mb-4">Compare</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight mb-6">
            Zoe vs. Sunsama
          </h1>
          <p className="text-ink text-lg leading-relaxed max-w-2xl mx-auto">
            Sunsama is excellent at mindful daily planning. But it stops at your work tasks.
            Zoe connects your personal goals, fitness data, and life context into one AI layer —
            so your planning reflects who you actually are, not just what's on your plate today.
          </p>
        </div>
      </section>

      {/* The key angle */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            <div className="p-6 rounded-2xl border border-paper-100 bg-paper-100">
              <p className="text-[0.9rem] font-bold tracking-widest uppercase text-accent mb-3">Sunsama</p>
              <p className="text-ink leading-relaxed">
                Guides you through a mindful daily planning ritual. Consolidates tasks from multiple sources
                and helps you schedule your day with intention. Focused on work and productivity.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-accent bg-paper-100">
              <p className="text-[0.9rem] font-bold tracking-widest uppercase text-accent mb-3">Zoe</p>
              <p className="text-ink leading-relaxed">
                Does everything Sunsama does for daily planning — and then connects it to your personal goals,
                fitness data, habits, and life context. Your AI layer knows the whole picture, not just your work queue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-4 px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-4 px-4">
            <div className="text-[0.9rem] font-bold tracking-widest uppercase text-accent">Feature</div>
            <div className="text-[0.9rem] font-bold tracking-widest uppercase text-accent text-center">Sunsama</div>
            <div className="text-[0.9rem] font-bold tracking-widest uppercase text-accent text-center">Zoe</div>
          </div>

          <div className="rounded-2xl border border-paper-100 overflow-hidden">
            {rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 gap-4 px-4 py-4 items-start ${i % 2 === 0 ? 'bg-paper-100' : 'bg-transparent'} border-b border-paper-100 last:border-0`}
              >
                <div className="text-sm text-ink font-medium">{row.feature}</div>
                <div className="text-sm text-ink text-center">{row.sunsama}</div>
                <div className={`text-sm text-center font-medium ${row.zoeWins ? 'text-ink' : 'text-ink'}`}>
                  {row.zoeWins && <><Check />{' '}</>}
                  {row.zoe}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight mb-4">
              Daily planning that connects to your whole life.
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
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl border border-paper-100 text-ink hover:border-ink transition-all duration-200"
              >
                See pricing
              </Link>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-paper-100 text-center">
            <p className="text-ink text-sm mb-4">Also comparing</p>
            <div className="flex justify-center gap-6">
              <Link href="/compare/zoe-vs-akiflow" className="text-sm text-accent hover:text-accent-dark transition-colors">
                Zoe vs. Akiflow →
              </Link>
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
