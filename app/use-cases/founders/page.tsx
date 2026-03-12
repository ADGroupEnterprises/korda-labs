import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Zoe for Founders — Korda Labs',
  description: 'The one AI layer that runs at the speed of a founder. Connect your work, goals, and health into one intelligent system that plans your day so you don\'t have to.',
}

const painPoints = [
  { title: 'Context-switching tax', body: 'You live in Notion, Slack, Linear, Gmail, and your calendar simultaneously. The cognitive overhead of switching between them is stealing hours you don\'t have.' },
  { title: 'No separation between work and life', body: 'Your fitness goals, your company goals, your personal goals — they all affect each other. No tool connects them. Until now.' },
  { title: 'Manual planning overhead', body: 'You\'re spending 20–30 minutes every morning just triaging what to work on. That\'s 150+ hours a year on planning. Not building.' },
]

const features = [
  { label: 'Goal alignment', body: 'Set your company milestones and personal goals in one place. Compass tracks both and makes sure your daily schedule reflects your actual priorities.' },
  { label: 'Automatic daily planning', body: 'Task Manager pulls from your calendar, your project tools, and your goals — and hands you a prioritized day. Adjusts in real time when things shift.' },
  { label: 'Health as an input', body: 'Your energy levels affect your output. Zoe connects to your health data and schedules your deepest work when you\'re actually at your best.' },
  { label: 'One context for everything', body: 'Notion, Linear, Slack, Gmail, Calendar — Zoe pulls them into one intelligent layer. You stop switching. Zoe keeps the full picture.' },
]

export default function FoundersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">For founders</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight mb-6 max-w-3xl">
            The one AI layer that runs at the speed of a founder.
          </h1>
          <p className="text-ink/50 text-xl leading-relaxed max-w-2xl mb-10">
            You already use Notion, Linear, Slack, and five other tools. Zoe connects them all into one
            intelligent layer that plans your day, tracks your goals, and handles the logistics — so you
            can focus on what actually moves the company forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-accent text-white hover:bg-accent-light transition-all duration-200 shadow-[0_0_24px_#0D948844] hover:shadow-[0_0_36px_#0D948866]"
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

      {/* Pain points */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-ink/30 mb-10">Sound familiar?</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {painPoints.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl border border-ink/8 bg-ink/[0.03]">
                <div className="w-1 h-5 rounded-full bg-accent/40 mb-4" />
                <h3 className="text-ink font-semibold mb-2">{p.title}</h3>
                <p className="text-ink/45 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight">
              What Zoe does
              <br />
              <span className="text-ink/45">for founders specifically.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
            {features.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border border-ink/8 bg-ink/[0.02]">
                <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">{f.label}</p>
                <p className="text-ink/55 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight mb-4">
              Stop managing your tools.
              <br />
              <span className="text-ink/45">Start building.</span>
            </h2>
            <p className="text-ink/40 mb-8">Free to start. No credit card.</p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-accent text-white hover:bg-accent-light transition-all duration-200 shadow-[0_0_24px_#0D948844] hover:shadow-[0_0_36px_#0D948866]"
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
