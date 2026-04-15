import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pricing — Zoe by Korda Labs',
  description: 'Start free on web. Upgrade for desktop and phone access. Bring your own API keys or use managed credits.',
}

const platformTiers = [
  {
    name: 'Zoe Web',
    badge: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Web dashboard only',
    surfaces: ['Web Dashboard'],
    features: [
      'Cloud-only dispatch',
      'Google Drive & OneDrive via OAuth',
      'Core agents: Zoe, Compass, Task Manager',
      'Basic integrations',
      'BYO API keys (OpenAI, Anthropic, Gemini)',
    ],
    limitations: ['No local file access', 'No desktop bridge', 'No phone app'],
    cta: 'Get started free',
    ctaStyle: 'border',
  },
  {
    name: 'Zoe Pro',
    badge: 'Desktop',
    price: '$15',
    period: 'per month',
    description: 'Web + Desktop App',
    surfaces: ['Web Dashboard', 'Desktop App'],
    features: [
      'Everything in Zoe Web',
      'Desktop Bridge Service',
      'Local model execution (Ollama)',
      'Local disk storage access',
      'Run tasks on local models for sensitive work',
      'Remote access to your home machine',
    ],
    limitations: ['No phone app', 'No push notifications'],
    cta: 'Get Pro',
    ctaStyle: 'accent',
  },
  {
    name: 'Zoe Elite',
    badge: 'Full Access',
    price: '$25',
    period: 'per month',
    description: 'Web + Desktop + Phone',
    surfaces: ['Web Dashboard', 'Desktop App', 'Native Phone App'],
    features: [
      'Everything in Zoe Pro',
      'Native phone app',
      'Push notifications',
      'Phone-only storage affinity',
      'User-pull delivery model',
      'Full cross-device sync',
    ],
    limitations: [],
    cta: 'Get Elite',
    ctaStyle: 'accent',
    highlight: true,
  },
]

const aiModels = [
  {
    name: 'BYOA',
    subtitle: 'Bring Your Own Agent/Key',
    price: 'Included',
    description: 'You provide your own API keys and pay providers directly',
    features: [
      'Use your own Anthropic, OpenAI, or Gemini keys',
      'You pay providers directly for usage',
      'Full control over model spend',
      'No platform markup on inference',
      'Best for heavy users or developers',
    ],
    note: 'Platform fee included in subscription tier',
  },
  {
    name: 'Zoe Hybrid',
    subtitle: 'Managed "Soul"',
    price: 'Included',
    description: 'Zoe handles background tasks, you provide keys for critical work',
    features: [
      'Platform absorbs background token costs',
      'Distillation and memory maintenance included',
      'Proactive engine runs without hidden bills',
      'You provide keys only for high/critical tasks',
      'Long-term memory stays sharp automatically',
    ],
    note: 'Cheapest cloud model used for background work',
  },
]

const usageBundles = [
  {
    name: 'Starter Pack',
    price: '$10',
    credits: '$12 worth of tokens',
    tasks: '~200 simple tasks or 50 standard consultations',
    bestFor: 'Light usage, testing the platform',
  },
  {
    name: 'Power Pack',
    price: '$40',
    credits: '$50 worth of tokens',
    tasks: 'Deep research and high-complexity autonomous loops',
    bestFor: 'Regular users with moderate agent usage',
  },
  {
    name: 'Enterprise Block',
    price: '$200',
    credits: '$275 worth of tokens',
    tasks: 'Multi-persona scaling (Builder, Researcher, Analyst)',
    bestFor: 'Heavy users, teams, complex workflows',
  },
]

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
      <path d="M2 7L5.5 10.5L12 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="relative max-w-3xl mx-auto">
          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">Pricing</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight mb-6">
            Start free on web.
            <br />
            <span className="text-ink/50">Upgrade for desktop and phone.</span>
          </h1>
          <p className="text-ink/50 text-lg leading-relaxed max-w-2xl mx-auto">
            Choose your surfaces. Bring your own API keys or use managed credits. No hidden fees.
          </p>
        </div>
      </section>

      {/* Platform Subscription Tiers */}
      <section className="py-8 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight mb-3 text-center">
              Platform Subscription Tiers
            </h2>
            <p className="text-ink/50 text-center max-w-2xl mx-auto">
              Access to Zoe infrastructure and surfaces. All tiers support BYO API keys.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {platformTiers.map((tier, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 ${
                  tier.highlight
                    ? 'border-2 border-accent bg-accent/[0.03]'
                    : 'border border-ink/10 bg-ink/[0.03]'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-paper text-xs font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-6">
                  <p className="text-xs font-medium tracking-widest uppercase text-ink/35">{tier.name}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    tier.badge === 'Free' ? 'bg-ink/10 text-ink/50' : 'bg-accent/15 text-accent'
                  }`}>
                    {tier.badge}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-5xl font-bold font-serif text-ink">{tier.price}</span>
                  {tier.price !== '$0' && <span className="text-ink/40 text-sm ml-2">/ month</span>}
                </div>
                <p className="text-ink/35 text-sm mb-6">{tier.description}</p>

                <Link
                  href="/coming-soon"
                  className={`block w-full text-center px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 mb-8 ${
                    tier.ctaStyle === 'accent'
                      ? 'bg-accent text-paper hover:bg-accent-dark shadow-[0_0_20px_#8A4E2844] hover:shadow-[0_0_30px_#8A4E2866]'
                      : 'border border-ink/15 text-ink hover:border-ink/25 hover:bg-ink/5'
                  }`}
                >
                  {tier.cta}
                </Link>

                <div className="mb-6">
                  <p className="text-xs font-medium tracking-widest uppercase text-ink/30 mb-3">Surfaces</p>
                  <div className="flex flex-wrap gap-2">
                    {tier.surfaces.map((surface, si) => (
                      <span key={si} className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent/70 border border-accent/20">
                        {surface}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-medium tracking-widest uppercase text-ink/30 mb-3">Features</p>
                  <ul className="space-y-2.5">
                    {tier.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-sm text-ink/65">
                        <Check />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {tier.limitations.length > 0 && (
                  <div className="pt-6 border-t border-ink/8">
                    <p className="text-xs text-ink/30 mb-2">Not included:</p>
                    <ul className="space-y-1.5">
                      {tier.limitations.map((l, li) => (
                        <li key={li} className="text-xs text-ink/30">
                          • {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Execution Models */}
      <section className="py-20 px-6 bg-ink/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight mb-3">
              AI Execution Models
            </h2>
            <p className="text-ink/50 max-w-2xl mx-auto">
              Choose who pays for inference and how background costs are handled.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiModels.map((model, i) => (
              <div key={i} className="p-8 rounded-2xl border border-ink/10 bg-paper">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-1">{model.name}</h3>
                    <p className="text-sm text-ink/50">{model.subtitle}</p>
                  </div>
                  <span className="text-accent font-semibold">{model.price}</span>
                </div>

                <p className="text-ink/60 text-sm mb-6 leading-relaxed">{model.description}</p>

                <ul className="space-y-2.5 mb-6">
                  {model.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-sm text-ink/65">
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-ink/8">
                  <p className="text-xs text-ink/40">{model.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Bundle Packs */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight mb-3">
              Usage Bundle Packs
            </h2>
            <p className="text-ink/50 max-w-2xl mx-auto">
              Zero-config managed credits. No API key management required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {usageBundles.map((bundle, i) => (
              <div key={i} className="p-6 rounded-2xl border border-ink/10 bg-ink/[0.03]">
                <h3 className="text-lg font-bold text-ink mb-2">{bundle.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold font-serif text-ink">{bundle.price}</span>
                </div>
                <div className="mb-4 pb-4 border-b border-ink/8">
                  <p className="text-sm text-accent font-medium mb-1">{bundle.credits}</p>
                  <p className="text-xs text-ink/40">{bundle.tasks}</p>
                </div>
                <div className="mb-6">
                  <p className="text-xs text-ink/30 mb-1">Best for:</p>
                  <p className="text-sm text-ink/60">{bundle.bestFor}</p>
                </div>
                <Link
                  href="/coming-soon"
                  className="block w-full text-center px-6 py-2.5 rounded-xl text-sm font-medium border border-ink/15 text-ink hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
                >
                  Purchase
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-xl border border-accent/15 bg-accent/[0.03] text-center">
            <p className="text-sm text-ink/60">
              <span className="font-medium text-ink">Note:</span> Bundle credits account for the Tri-Agent Consultation Loop overhead.
              Unused credits roll over for 12 months.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ / Reassurance */}
      <section className="py-20 px-6 bg-ink/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'No lock-in', body: 'Use your own API keys. Switch models anytime. Export your data whenever you want.' },
              { title: 'Cancel anytime', body: 'No contracts, no cancellation fees. Downgrade or cancel from your account settings in seconds.' },
              { title: 'We never train on your data', body: 'Your conversations, goals, and context are yours. We do not use them to train any model.' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl border border-ink/8 bg-paper">
                <div className="w-1 h-5 rounded-full bg-accent mb-3" />
                <h3 className="text-ink font-semibold text-sm mb-1.5">{item.title}</h3>
                <p className="text-ink/40 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-ink/35 text-sm mb-4">
              Comparing tools?{' '}
              <Link href="/compare" className="text-accent hover:text-accent-dark transition-colors">
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
