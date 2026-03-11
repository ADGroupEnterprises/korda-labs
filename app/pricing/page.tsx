import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pricing — Zoe by Korda Labs',
  description: 'Start free. Upgrade when you\'re ready. No credit card required.',
}

const freeFeatures = [
  'Zoe orchestrator + core agents',
  'Google Calendar & Apple Health sync',
  'Goal tracking with Compass',
  'Basic daily planning with Task Manager',
  'BYO API key (OpenAI, Anthropic, Gemini)',
  'Up to 5 active integrations',
]

const proFeatures = [
  'Everything in Free',
  'Unlimited integrations (20+ and growing)',
  'Persistent adaptive memory',
  'Desktop Bridge — remote access to your home machine',
  'Priority scheduling & energy-aware queuing',
  'Advanced health & fitness integrations',
  'Audit log — every agent action, reviewable',
  'Priority support',
]

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
      <path d="M2 7L5.5 10.5L12 3" stroke="#C4973A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="relative max-w-2xl mx-auto">
          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">Pricing</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight mb-6">
            Start free.
            <br />
            <span className="text-ink/50">Upgrade when you're ready.</span>
          </h1>
          <p className="text-ink/50 text-lg leading-relaxed">
            No credit card required. Early access pricing — locked in for life for users who join now.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-8 px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Free */}
            <div className="relative rounded-2xl border border-ink/10 bg-ink/[0.03] p-8">
              <p className="text-xs font-medium tracking-widest uppercase text-ink/35 mb-6">Free</p>
              <div className="mb-8">
                <span className="text-5xl font-bold font-serif text-ink">$0</span>
                <span className="text-ink/40 text-sm ml-2">/ month</span>
              </div>
              <Link
                href="#"
                className="block w-full text-center px-6 py-3 rounded-xl text-sm font-medium border border-ink/15 text-ink hover:border-ink/25 hover:bg-ink/5 transition-all duration-200 mb-8"
              >
                Get started free
              </Link>
              <ul className="space-y-3">
                {freeFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-ink/55">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro */}
            <div className="relative rounded-2xl border border-accent/25 bg-accent/[0.03] p-8">
              <div className="absolute top-5 right-5 px-2.5 py-1 rounded-full bg-accent/15 text-accent text-xs font-medium">
                Early access
              </div>
              <p className="text-xs font-medium tracking-widest uppercase text-accent/60 mb-6">Pro</p>
              <div className="mb-1">
                <span className="text-5xl font-bold font-serif text-ink">$12</span>
                <span className="text-ink/40 text-sm ml-2">/ month</span>
              </div>
              <p className="text-ink/35 text-xs mb-8">Billed annually · $19/mo billed monthly</p>
              <Link
                href="#"
                className="block w-full text-center px-6 py-3 rounded-xl text-sm font-medium bg-accent text-white hover:bg-accent-light transition-all duration-200 shadow-[0_0_20px_#C4973A44] hover:shadow-[0_0_30px_#C4973A66] mb-8"
              >
                Get Pro — early access price
              </Link>
              <ul className="space-y-3">
                {proFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-ink/65">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ / reassurance row */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'No lock-in', body: 'Use your own API keys. Switch models anytime. Export your data whenever you want.' },
              { title: 'Cancel anytime', body: 'No contracts, no cancellation fees. Downgrade or cancel from your account settings in seconds.' },
              { title: 'We never train on your data', body: 'Your conversations, goals, and context are yours. We do not use them to train any model.' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl border border-ink/8 bg-ink/[0.03]">
                <div className="w-1 h-5 rounded-full bg-accent mb-3" />
                <h3 className="text-ink font-semibold text-sm mb-1.5">{item.title}</h3>
                <p className="text-ink/40 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Compare link */}
          <div className="mt-16 text-center">
            <p className="text-ink/35 text-sm">
              Comparing tools?{' '}
              <Link href="/compare" className="text-accent hover:text-accent-light transition-colors">
                See how Zoe stacks up →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
