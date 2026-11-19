import Link from 'next/link'
import { KeelMark } from '@/components/marks/Brand'

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 7h9M8 4l3.5 3L8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// ─── Korda Labs: hero ──────────────────────────────────────────────────────────

export function KordaHero() {
  return (
    <section className="relative overflow-hidden px-6">
      <div className="absolute inset-0 bg-chart [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" aria-hidden="true" />
      <div className="relative z-10 max-w-5xl mx-auto pt-16 pb-20 sm:pt-24 sm:pb-24 text-center">
        <div style={{ animationDelay: '0.1s' }} className="rise mb-9">
          <Link href="/products/keel" className="group inline-flex items-center gap-2.5 pl-2.5 pr-4 py-1.5 rounded-full glass text-sm font-semibold text-ink hover:text-accent transition-colors">
            <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm"><KeelMark size={16} /></span>
            Introducing Keel
            <span className="text-accent transition-transform group-hover:translate-x-0.5"><Arrow /></span>
          </Link>
        </div>
        <h1 style={{ animationDelay: '0.2s' }} className="rise font-display font-bold text-ink text-[2.75rem] leading-[1.02] sm:text-7xl xl:text-[5.25rem] mb-7">
          Bridging AI to the life{' '}
          <span className="text-accent sm:block">you already live.</span>
        </h1>
        <p style={{ animationDelay: '0.35s' }} className="rise text-lg sm:text-2xl leading-relaxed text-ink-soft max-w-3xl mx-auto mb-10">
          A new world of AI is arriving fast. Korda Labs builds the products that bring it to you: personal, private, and <span className="text-ink">built around what you do.</span>
        </p>
        <div style={{ animationDelay: '0.5s' }} className="rise flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/products/keel" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-accent text-paper btn-pillow transition-all duration-300">
            Meet Keel
          </Link>
          <Link href="/believe" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full btn-glass text-ink hover:text-accent transition-all duration-300">
            What we believe
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── The bridge ───────────────────────────────────────────────────────────────

export function BridgeSection() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.04] text-ink mb-7">
          Two worlds. <span className="hl">One crossing.</span>
        </h2>
        <p className="text-xl sm:text-2xl leading-relaxed text-ink-soft">
          AI gets more capable by the month. Putting it to use still takes time most people don&apos;t have. We build the crossing, so the new tools reach <span className="text-ink">the life you already have.</span>
        </p>
      </div>
    </section>
  )
}

// ─── Personal products ────────────────────────────────────────────────────────

const beliefs = [
  { title: 'Starts with what you do.', line: 'Every product begins with a real day: the work, the errands, the plans already in motion.' },
  { title: 'Fits your life.', line: 'It connects to the tools and habits you already have. Nothing to move into.' },
  { title: 'Yours to keep.', line: 'Your data, your models, your work. Leave whenever you like.' },
  { title: 'Then log off.', line: 'The point is the run, the dinner, the thing you made.' },
]

export function KordaSection() {
  return (
    <section className="relative px-6 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-chart opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_45%,black,transparent)]" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.04] text-ink mb-8">
          Products that are <span className="hl">personal.</span>
        </h2>
        <p className="text-xl sm:text-2xl leading-relaxed text-ink-soft max-w-3xl mx-auto">
          Built for one person at a time. They learn how you work, take orders from you alone, and make what you already do <span className="text-ink">go further.</span>
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {beliefs.map((b) => (
          <div key={b.title} className="glass rounded-3xl p-7 text-left">
            <h3 className="font-display font-bold text-2xl text-ink mb-2">{b.title}</h3>
            <p className="text-ink-soft leading-relaxed">{b.line}</p>
          </div>
        ))}
      </div>

      <p className="relative text-center mt-12">
        <Link href="/believe" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full btn-glass text-ink font-semibold hover:text-accent transition-colors">
          What we believe <Arrow />
        </Link>
      </p>
    </section>
  )
}
