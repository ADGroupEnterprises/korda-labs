import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Products — Korda Labs',
  description: 'One dedicated product per problem. Zoe is the first — your dedicated AI partner that does the work.',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif tracking-tight mb-6">
            One intelligent layer.
            <br />
            <span className="text-ink">For your work, your goals, and your life.</span>
          </h1>
          <p className="text-ink text-lg leading-relaxed">
            Korda Labs builds dedicated AI partners that do the planning, coordination, and
            follow-through — so you can focus on what only you can do.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-8 px-6 pb-32">
        <div className="max-w-5xl mx-auto">

          {/* Featured: Zoe Personal */}
          <div className="relative rounded-2xl border border-linen bg-linen p-8 sm:p-10 mb-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-linen bg-linen text-accent">
                    Available now
                  </span>
                </div>
                <h2 className="text-3xl font-medium font-serif text-ink mb-1">Zoe</h2>
                <p className="text-accent text-sm font-medium mb-4">Your dedicated AI partner that does the work</p>
                <p className="text-ink leading-relaxed max-w-xl mb-6">
                  The first Korda Labs product. Connect your tools, set a goal, and hand off the work — research,
                  drafts, plans, and automations delivered to your storage. Built for individuals who want AI
                  working for them — not the other way around.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {[
                    'Connects to 20+ personal apps and services',
                    'Core agents always by your side, plus task-specific agents for every need',
                    'Desktop bridge — control your home machine from your phone',
                    'Your models, your keys, your data',
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-ink">
                      <span className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full flex items-center justify-center bg-linen">
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
                    href="/signup"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium bg-accent text-paper hover:bg-mahogany transition-all duration-300"
                  >
                    Sign up free
                  </Link>
                  <Link
                    href="/products/zoe"
                    className="text-sm text-ink hover:text-ink transition-colors flex items-center gap-1"
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

          {/* Roadmap */}
          <div className="rounded-2xl border border-linen bg-linen p-8">
            <div className="mb-4">
              <span className="inline-block text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-linen bg-linen text-ink">
                On the roadmap
              </span>
            </div>
            <h3 className="text-xl font-medium font-serif text-ink mb-2">A notebook you can write in</h3>
            <p className="text-ink text-sm leading-relaxed max-w-xl">
              Next for Zoe: physical notebook hardware that joins the paper planner on your desk
              with the partner that does the work. What you write on the page and what Zoe runs
              become one plan.
            </p>
          </div>

          {/* Section divider */}
          {/* (none present in original, kept as-is) */}

          {/* Korda note */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-ink text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              All products are built by Korda Labs.
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
