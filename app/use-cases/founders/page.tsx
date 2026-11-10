import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Keel for Founders — Korda Labs',
  description: 'Keel for founders. It connects your tools, plans the day and handles the logistics.',
}

const painPoints = [
  { title: 'Context-switching tax', body: 'You live in Notion, Slack, Linear, Gmail, and your calendar simultaneously. The cognitive overhead of switching between them is stealing hours you don\'t have.' },
  { title: 'No separation between work and life', body: 'Your fitness goals, your company goals, your personal goals — they all affect each other. No tool connects them. Until now.' },
  { title: 'Manual planning overhead', body: '20–30 minutes every morning deciding what to work on. 150+ hours a year.' },
]

const features = [
  { label: 'Goal alignment', body: 'Set your company milestones and personal goals in one place. Compass tracks both and makes sure your daily schedule reflects your actual priorities.' },
  { label: 'Automatic daily planning', body: 'Task Manager pulls from your calendar, your project tools, and your goals — and hands you a prioritized day. Adjusts in real time when things shift.' },
  { label: 'Health as an input', body: 'Your energy levels affect your output. Keel connects to your health data and schedules your deepest work when you\'re at your best.' },
  { label: 'One context for everything', body: 'Notion, Linear, Slack, Gmail, Calendar — Keel pulls them into one place. You stop switching. Keel keeps the full picture.' },
]

export default function FoundersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <p className="text-accent eyebrow mb-4">For founders</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-6 max-w-3xl">
            Run the company. Keel runs the day.
          </h1>
          <p className="text-ink text-xl leading-relaxed max-w-2xl mb-10">
            Notion, Linear, Slack, Gmail, calendar. Keel connects them, plans your day, tracks your goals and handles the logistics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-accent text-paper hover:bg-navy transition-all duration-300"
            >
              Get Keel
            </Link>
            <Link
              href="/products/keel"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full border border-ink/15 text-ink hover:border-mist hover:bg-mist transition-all duration-300"
            >
              See how Keel works
            </Link>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-ink mb-10">Sound familiar?</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {painPoints.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl border border-mist bg-mist">
                <div className="w-1 h-5 rounded-full bg-accent mb-4" />
                <h3 className="text-ink font-medium mb-2">{p.title}</h3>
                <p className="text-ink text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
              What Keel does
              <br />
              <span className="text-ink">for founders specifically.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
            {features.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border border-mist bg-mist">
                <p className="text-accent eyebrow mb-3">{f.label}</p>
                <p className="text-ink text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-4">
              Back to
              <br />
              <span className="text-ink">building.</span>
            </h2>
            <p className="text-ink mb-8">Free on web.</p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-accent text-paper hover:bg-navy transition-all duration-300"
            >
              Get Keel
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
