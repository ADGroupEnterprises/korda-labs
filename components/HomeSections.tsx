import { APP_SIGNUP_URL } from '@/lib/links'
import Link from 'next/link'
import { Zoe, ZoeBadge, CrewMark, KeelMark, KordaMark } from '@/components/marks/Brand'

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 7h9M8 4l3.5 3L8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// ─── The crew ─────────────────────────────────────────────────────────────────

// ─── Korda Labs ───────────────────────────────────────────────────────────────

const beliefs = [
  { n: '01', title: 'Your goals first.', line: 'Everything we make starts from what you are trying to do.' },
  { n: '02', title: 'Yours to keep.', line: 'Your data, your models, your work. Leave whenever you like.' },
  { n: '03', title: 'Then log off.', line: 'The point is the run, the dinner, the thing you made.' },
]

export function KordaSection() {
  return (
    <section className="relative px-6 py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-chart opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_45%,black,transparent)]" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto text-center">
        <KordaMark size={64} className="mx-auto mb-7" />
        <p className="eyebrow text-copper mb-6">Korda Labs</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.04] text-ink mb-8">
          Tools should answer to <span className="hl">the person using them.</span>
        </h2>
        <p className="text-xl sm:text-2xl leading-relaxed text-ink-soft max-w-3xl mx-auto">
          Most software wants something from you. Your time, your attention, your data. We started Korda Labs to build the other kind: AI that takes an order, does the work, and <span className="text-ink">hands your day back.</span>
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {beliefs.map((b) => (
          <div key={b.n} className="glass rounded-3xl p-7 text-left">
            <p className="eyebrow text-accent mb-5">{b.n}</p>
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

// ─── Studio + closing CTA ─────────────────────────────────────────────────────

export function StudioCta() {
  return (
    <section className="relative px-6 pb-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-3xl glass p-8 sm:p-10 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <KordaMark size={36} />
            <span className="text-ink-soft" aria-hidden="true">×</span>
            <KeelMark size={32} />
          </div>
          <p className="eyebrow text-copper mb-3">Korda Labs</p>
          <h2 className="font-display font-bold text-3xl text-ink mb-3">We build AI that takes orders.</h2>
          <p className="text-ink-soft leading-relaxed mb-6">
            Keel is the first.
          </p>
          <Link href="/products" className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-ink transition-colors">
            Products <Arrow />
          </Link>
        </div>

        <div className="relative mt-32 md:mt-0">
          <Zoe pose="peek" decorative className="absolute left-1/2 -translate-x-1/2 -top-[7.4rem] w-56 h-auto z-0" />
          <div className="relative z-10 h-full rounded-3xl bg-gradient-to-br from-accent to-navy text-paper p-8 sm:p-10 flex flex-col justify-end min-h-[18rem]">
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-[1.05] mb-3">Your day, handled.</h2>
            <p className="text-paper/80 mb-7">Free on web.</p>
            <div>
              <Link
                href={APP_SIGNUP_URL}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-paper text-ink hover:bg-sky transition-all duration-300"
              >
                Get Keel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
