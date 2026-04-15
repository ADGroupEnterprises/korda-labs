import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Products — Korda Labs',
  description: 'The full Korda Labs product lineup — starting with Zoe, your personal AI operating system.',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight mb-6">
            One intelligent layer.
            <br />
            <span className="text-ink/50">For your work, your goals, and your life.</span>
          </h1>
          <p className="text-ink/50 text-lg leading-relaxed">
            Korda Labs builds AI platforms that do the planning, coordination, and follow-through
            so you can focus on what actually moves the needle.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-8 px-6 pb-32">
        <div className="max-w-5xl mx-auto">

          {/* Featured: Zoe Personal */}
          <div className="relative rounded-2xl border border-brand-blue/15 bg-brand-blue/[0.03] p-8 sm:p-10 mb-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent">
                    Available now
                  </span>
                </div>
                <h2 className="text-3xl font-bold font-serif text-ink mb-1">Zoe</h2>
                <p className="text-accent text-sm font-medium mb-4">Personal AI Operating System</p>
                <p className="text-ink/50 leading-relaxed max-w-xl mb-6">
                  The flagship Korda Labs product. Connect your personal tools, set goals, and let a team of AI agents
                  help you live with more intention and less friction. Built for individuals who want AI working
                  for them — not the other way around.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {[
                    'Connects to 20+ personal apps and services',
                    'Core agents always by your side, plus task-specific agents for every need',
                    'Desktop bridge — control your home machine from your phone',
                    'Your models, your keys, your data',
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-ink/60">
                      <span className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full flex items-center justify-center bg-accent/15">
                        <svg width="8" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#8A4E28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium bg-accent text-white hover:bg-accent-light transition-all duration-200 shadow-[0_0_20px_#8A4E2844] hover:shadow-[0_0_30px_#8A4E2866]"
                  >
                    Sign up free
                  </Link>
                  <Link
                    href="/products/zoe"
                    className="text-sm text-ink/50 hover:text-ink transition-colors flex items-center gap-1"
                  >
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7h9M8 4l3.5 3L8 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Locked cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Locked card 1 */}
            <div className="relative rounded-2xl border border-ink/8 bg-ink/[0.04] p-8 overflow-hidden">
              <div className="absolute top-5 right-5 w-7 h-7 rounded-lg bg-ink/[0.04] flex items-center justify-center">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                  <rect x="1" y="6" width="10" height="8" rx="1.5" stroke="#1c1a17" strokeOpacity="0.15" strokeWidth="1.2"/>
                  <path d="M3.5 6V4a2.5 2.5 0 0 1 5 0v2" stroke="#1c1a17" strokeOpacity="0.15" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="mb-4">
                <span className="inline-block text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-ink/10 bg-ink/[0.04] text-ink/40">
                  Coming soon
                </span>
              </div>
              <h3 className="text-xl font-bold text-ink/40 mb-2">Startup & Small Teams</h3>
              <p className="text-ink/30 text-sm leading-relaxed">
                A shared intelligence platform for early-stage companies — aligned goals,
                coordinated agents, and a unified view of what your team is building toward.
                Built for the pace of a startup.
              </p>
            </div>

            {/* Locked card 2 */}
            <div className="relative rounded-2xl border border-ink/8 bg-ink/[0.04] p-8 overflow-hidden">
              <div className="absolute top-5 right-5 w-7 h-7 rounded-lg bg-ink/[0.04] flex items-center justify-center">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                  <rect x="1" y="6" width="10" height="8" rx="1.5" stroke="#1c1a17" strokeOpacity="0.15" strokeWidth="1.2"/>
                  <path d="M3.5 6V4a2.5 2.5 0 0 1 5 0v2" stroke="#1c1a17" strokeOpacity="0.15" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="mb-4">
                <span className="inline-block text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-ink/10 bg-ink/[0.04] text-ink/40">
                  Coming soon
                </span>
              </div>
              <h3 className="text-xl font-bold text-ink/40 mb-2">Freelancer Platform</h3>
              <p className="text-ink/30 text-sm leading-relaxed">
                Zoe tuned for independent professionals — client management, project tracking,
                proposal drafting, and time intelligence, all running quietly in the background
                while you focus on the work.
              </p>
            </div>
          </div>

          {/* Section divider */}
          {/* (none present in original, kept as-is) */}

          {/* Korda note */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-ink/30 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
              All products are built by KORDA LABS.
              <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
