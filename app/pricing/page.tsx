import { APP_SIGNUP_URL } from '@/lib/links'
import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { Zoe } from '@/components/marks/Brand'

// Source: Keel plans readout, 2026-11-16 (founder-locked prices, Nov 15). USD.
export const metadata: Metadata = {
  title: 'Pricing — Keel by Korda Labs',
  description: 'Keel is free on web. Add Apps for desktop, mobile and your local node. Add Managed for Keel-supplied models with a fixed monthly allowance.',
}

const managed = [
  { size: 'S', price: '$10', usage: '$7.50', approx: '250' },
  { size: 'M', price: '$20', usage: '$15', approx: '500' },
  { size: 'L', price: '$40', usage: '$30', approx: '1,000' },
]

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-1 text-accent" aria-hidden="true">
      <path d="M2 7L5.5 10.5L12 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Items({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((f) => (
        <li key={f} className="flex items-start gap-2.5 text-sm text-ink leading-snug"><Check />{f}</li>
      ))}
    </ul>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 text-center overflow-hidden">
        <div className="relative max-w-3xl mx-auto">
          <p className="text-accent eyebrow mb-4">Pricing</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-6">
            Free on web.
            <br />
            <span className="text-accent">Add what you need.</span>
          </h1>
          <p className="text-ink-soft text-lg leading-relaxed max-w-2xl mx-auto">
            Everyone starts on Base. Apps and Managed are separate upgrades. Take one, both or neither.
          </p>
          <Zoe pose="point-right" eager className="w-28 sm:w-36 h-auto mx-auto mt-8 -mb-10" />
        </div>
      </section>

      {/* Plans */}
      <section className="px-6 pb-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          {/* Base */}
          <div className="glass rounded-[1.75rem] p-8 flex flex-col">
            <p className="eyebrow text-accent mb-5">Base</p>
            <p className="font-display font-bold text-5xl text-ink mb-2">Free</p>
            <p className="text-sm text-ink-soft mb-6">The web app. Your models.</p>
            <Link href={APP_SIGNUP_URL} className="block text-center px-6 py-3 rounded-full text-sm font-semibold bg-accent text-paper btn-pillow mb-8">Get Keel</Link>
            <Items items={[
              'Keel on the web at keel.kordalabs.com',
              'Goals, planning and agents',
              'All integrations',
              'Bring your own model keys, any supported provider',
              'Hosted Claude Code: sign in with your own Claude plan and run Keel on it',
            ]} />
            <p className="mt-auto pt-6 text-xs text-ink-soft leading-relaxed">
              Anthropic bills your Claude usage. Confidential mode needs a local node, which comes with Apps.
            </p>
          </div>

          {/* Apps */}
          <div className="glass rounded-[1.75rem] p-8 flex flex-col">
            <p className="eyebrow text-accent mb-5">Apps</p>
            <p className="mb-2">
              <span className="font-display font-bold text-5xl text-ink">$8.99</span>
              <span className="text-sm text-ink-soft ml-2">/ month</span>
            </p>
            <p className="text-sm text-ink-soft mb-6">or $79 a year. That is $6.58 a month, 27% off.</p>
            <Link href={APP_SIGNUP_URL} className="block text-center px-6 py-3 rounded-full text-sm font-semibold btn-glass text-ink mb-8">Get Keel</Link>
            <Items items={[
              'Everything in Base',
              'Desktop and mobile apps',
              'Your local node: run local models on your own machine',
              'Confidential work stays on your hardware',
              'Offline-first',
            ]} />
          </div>

          {/* Managed */}
          <div className="glass rounded-[1.75rem] p-8 flex flex-col">
            <p className="eyebrow text-accent mb-5">Managed</p>
            <p className="mb-2">
              <span className="text-sm text-ink-soft mr-2">from</span>
              <span className="font-display font-bold text-5xl text-ink">$10</span>
              <span className="text-sm text-ink-soft ml-2">/ month</span>
            </p>
            <p className="text-sm text-ink-soft mb-6">Keel supplies the models. No keys.</p>
            <Link href={APP_SIGNUP_URL} className="block text-center px-6 py-3 rounded-full text-sm font-semibold btn-glass text-ink mb-8">Get Keel</Link>
            <div className="rounded-2xl bg-white/70 border border-white divide-y divide-ink/[0.07] mb-6">
              {managed.map((m) => (
                <div key={m.size} className="grid grid-cols-[2rem_1fr_auto] items-center gap-3 px-4 py-3">
                  <span className="w-8 h-8 rounded-full bg-ink text-paper font-display font-bold text-sm flex items-center justify-center">{m.size}</span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{m.usage} of model usage a month</span>
                    <span className="block text-xs text-ink-soft">about {m.approx} frontier-class requests</span>
                  </span>
                  <span className="font-display font-bold text-lg text-ink">{m.price}</span>
                </div>
              ))}
            </div>
            <Items items={['Everything in Base', 'A hard cap. No overage bills', 'Billed monthly']} />
          </div>
        </div>

        <p className="max-w-6xl mx-auto mt-6 text-center text-sm text-ink-soft">
          Apps and Managed combine. Apps with Managed S is $18.99 a month.
        </p>
      </section>

      {/* Included usage */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="eyebrow text-accent mb-4">Included usage</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-10 max-w-xl">A fixed allowance. Nothing on top.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { t: 'Measured at list price', b: 'Usage is counted at the model providers’ list prices. The included amount is the most you can spend.' },
              { t: 'It stretches', b: 'Keel sends everyday requests to efficient models and keeps frontier models for the hard steps. On standard models an allowance goes 10 to 40 times further.' },
              { t: 'When it runs out', b: 'Keel tells you. Move up a size, wait for the month to reset, or add your own keys and keep going.' },
            ].map((x) => (
              <div key={x.t} className="glass rounded-2xl p-6">
                <h3 className="font-semibold text-ink mb-2">{x.t}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-ink-soft">Request counts are approximate. The dollar allowance is the commitment.</p>
        </div>
      </section>

      {/* Billing */}
      <section className="py-20 px-6 bg-white/40 border-y border-white/70">
        <div className="max-w-5xl mx-auto">
          <p className="eyebrow text-accent mb-4">Billing</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { t: 'Cancel any time', b: 'Monthly plans run month to month. Apps annual is prepaid for 12 months.' },
              { t: 'Prices in USD', b: 'Checkout and billing run through Paddle. Sales tax or VAT is calculated at checkout.' },
              { t: 'Paid plans open at launch', b: 'Base is free today. Apps and Managed start billing at public launch.' },
              { t: 'Paused, never deleted', b: 'A Base account with no sign-in for 60 days is paused. Sign in and it wakes.' },
            ].map((x) => (
              <div key={x.t} className="glass rounded-2xl p-6">
                <h3 className="font-semibold text-ink text-sm mb-1.5">{x.t}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-ink-soft">
            <Link href="/compare" className="text-accent font-semibold hover:text-ink transition-colors">Compare Keel →</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
