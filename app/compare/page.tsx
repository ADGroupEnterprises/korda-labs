import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Compare Zoe — Korda Labs',
  description: 'See how Zoe compares to Akiflow, Motion, and other productivity tools.',
}

const comparisons = [
  {
    opponent: 'Akiflow',
    href: '/compare/zoe-vs-akiflow',
    description: 'Akiflow consolidates your tasks. Zoe plans, schedules, and executes them — automatically.',
    angle: 'Same problem. Completely different approach.',
  },
  {
    opponent: 'Motion',
    href: '/compare/zoe-vs-motion',
    description: 'Motion auto-schedules your work calendar. Zoe connects your personal goals, fitness, and life into the same layer.',
    angle: 'AI scheduling that goes beyond your calendar.',
  },
  {
    opponent: 'Sunsama',
    href: '/compare/zoe-vs-sunsama',
    description: 'Sunsama guides mindful daily planning. Zoe adds autonomous agents, personal goals, and fitness tracking to the mix.',
    angle: 'Daily planning that connects to your whole life.',
  },
]

const useCases = [
  { label: 'For founders', href: '/use-cases/founders', description: 'The one AI layer that runs at the speed of a founder.' },
  { label: 'For freelancers', href: '/use-cases/freelancers', description: 'Client work, personal goals, and your calendar — one intelligent layer.' },
  { label: 'Daily planning', href: '/use-cases/daily-planning', description: 'Your AI morning briefing. Your AI end-of-day review.' },
]

export default function ComparePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="relative max-w-2xl mx-auto">
          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">Compare</p>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif tracking-tight mb-6">
            See how Zoe stacks up.
          </h1>
          <p className="text-ink text-lg leading-relaxed">
            Evaluating tools? Start here. We've put together honest, direct comparisons
            so you can see exactly where Zoe fits — and where it goes further.
          </p>
        </div>
      </section>

      {/* Comparisons */}
      <section className="py-8 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-accent mb-8">Head-to-head</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20">
            {comparisons.map((c, i) => (
              <Link key={i} href={c.href} className="group block p-8 rounded-2xl border border-paper-100 bg-paper-100 hover:border-accent hover:bg-paper-100 transition-all duration-200">
                <p className="text-xs font-medium tracking-widest uppercase text-accent mb-3">Zoe vs.</p>
                <h2 className="text-2xl font-bold font-serif text-ink mb-2 group-hover:text-accent transition-colors">{c.opponent}</h2>
                <p className="text-accent text-sm font-medium mb-3">{c.angle}</p>
                <p className="text-ink text-sm leading-relaxed mb-5">{c.description}</p>
                <span className="text-sm text-accent group-hover:text-accent-dark transition-colors flex items-center gap-1.5">
                  See comparison
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7h9M8 4l3.5 3L8 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          {/* Use cases */}
          <p className="text-xs font-medium tracking-widest uppercase text-accent mb-8">By use case</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20">
            {useCases.map((u, i) => (
              <Link key={i} href={u.href} className="group block p-6 rounded-2xl border border-paper-100 bg-paper-100 hover:border-accent hover:bg-paper-100 transition-all duration-200">
                <h3 className="text-ink font-semibold mb-2 group-hover:text-accent transition-colors">{u.label}</h3>
                <p className="text-ink text-sm leading-relaxed mb-4">{u.description}</p>
                <span className="text-xs text-accent flex items-center gap-1">
                  Read more →
                </span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <p className="text-ink text-sm mb-6">Ready to try it yourself?</p>
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
        </div>
      </section>

      <Footer />
    </div>
  )
}
