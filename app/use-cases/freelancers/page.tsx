import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Zoe for Freelancers — Korda Labs',
  description: 'Client work, personal goals, and your calendar — one intelligent layer. Zoe is the AI operating system for independent professionals.',
}

const features = [
  { label: 'Project & deadline tracking', body: 'Connect Notion, Todoist, or your preferred tool. Zoe surfaces what\'s due, what\'s at risk, and what to work on today — without you having to check everything manually.' },
  { label: 'Client context, always available', body: 'Zoe remembers your clients, their deadlines, and your commitments. No more digging through email threads to remember what you promised and when.' },
  { label: 'Personal goals alongside client work', body: 'Your professional development, fitness, and personal goals don\'t disappear when client work gets busy. Compass keeps them alive — scheduled into the gaps that exist.' },
  { label: 'AI planning that works around your life', body: 'Freelance schedules are fluid. Task Manager adapts your plan in real time as client requests come in, deadlines shift, or you simply need a different kind of day.' },
]

const comingSoon = [
  'Proposal drafting with client context',
  'Time tracking and invoicing intelligence',
  'Client communication summaries',
  'Revenue and pipeline visibility',
]

export default function FreelancersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">For freelancers</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight mb-6 max-w-3xl">
            Client work, personal goals,
            <br />
            <span className="text-ink/50">and your calendar — one intelligent layer.</span>
          </h1>
          <p className="text-ink/50 text-xl leading-relaxed max-w-2xl mb-10">
            Independent professionals don't have a chief of staff. Zoe is the next best thing —
            tracking your clients, your deadlines, your goals, and your health, so you can
            focus on the work that actually earns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-accent text-white hover:bg-accent-light transition-all duration-200 shadow-[0_0_24px_#8A4E2844] hover:shadow-[0_0_36px_#8A4E2866]"
            >
              Get started free
            </Link>
            <Link
              href="/products/zoe"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl border border-ink/15 text-ink hover:border-ink/25 hover:bg-ink/5 transition-all duration-200"
            >
              See how Zoe works
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-ink/30 mb-10">Available now</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
            {features.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border border-ink/8 bg-ink/[0.02]">
                <div className="w-1 h-5 rounded-full bg-accent mb-4" />
                <h3 className="text-ink font-semibold mb-2">{f.label}</h3>
                <p className="text-ink/45 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>

          {/* Coming soon */}
          <div className="p-8 rounded-2xl border border-ink/8 bg-ink/[0.02] mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-ink/10 bg-ink/[0.04] text-ink/40">
                Coming soon
              </span>
              <span className="text-ink/30 text-sm">Freelancer Platform — built on Zoe</span>
            </div>
            <p className="text-ink/50 text-sm mb-6 leading-relaxed">
              A dedicated Zoe experience tuned for independent professionals — with deeper client management,
              proposal intelligence, and time tracking built in.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {comingSoon.map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-ink/35">
                  <span className="w-1 h-1 rounded-full bg-ink/20 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight mb-4">
              Your AI operating system for independent work.
            </h2>
            <p className="text-ink/40 mb-8">Free to start. No credit card.</p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-accent text-white hover:bg-accent-light transition-all duration-200 shadow-[0_0_24px_#8A4E2844] hover:shadow-[0_0_36px_#8A4E2866]"
            >
              Get started with Zoe
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
