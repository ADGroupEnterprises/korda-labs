import Link from 'next/link'
import { KordaMark } from '@/components/marks/Brand'

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
      <div className="relative z-10 max-w-5xl mx-auto pt-20 pb-20 sm:pt-28 sm:pb-24 text-center">
        <div style={{ animationDelay: '0.1s' }} className="rise flex flex-col items-center mb-8">
          <KordaMark size={72} className="mb-5" />
          <p className="eyebrow text-copper">Korda Labs · AI product studio</p>
        </div>
        <h1 style={{ animationDelay: '0.2s' }} className="rise font-display font-bold text-ink text-[2.75rem] leading-[1.02] sm:text-7xl xl:text-[5.25rem] mb-7">
          Bridging AI to the life{' '}
          <span className="text-accent sm:block">you already live.</span>
        </h1>
        <p style={{ animationDelay: '0.35s' }} className="rise text-lg sm:text-2xl leading-relaxed text-ink-soft max-w-3xl mx-auto mb-10">
          A new world of AI is arriving fast. Korda Labs builds the products that bring it to you: personal, private, and <span className="text-ink">in service of your goals.</span>
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

const here = ['Your calendar', 'Your inbox', 'Your files', 'Your notes', 'Your accounts', 'Your people', 'Your goals']
const there = ['Models', 'Agents', 'Memory', 'Voice', 'Automation']

function Shore({ kicker, title, items, tone }: { kicker: string; title: string; items: string[]; tone: 'warm' | 'cool' }) {
  return (
    <div className="glass rounded-3xl p-7 sm:p-8 h-full">
      <p className={`eyebrow mb-3 ${tone === 'warm' ? 'text-copper' : 'text-accent'}`}>{kicker}</p>
      <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mb-5">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((i) => (
          <li key={i} className={`px-3.5 py-1.5 rounded-full text-sm font-medium ${tone === 'warm' ? 'bg-sand text-copper' : 'bg-mist text-accent'}`}>{i}</li>
        ))}
      </ul>
    </div>
  )
}

export function BridgeSection() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="eyebrow text-accent mb-5">The bridge</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.04] text-ink mb-6">
          Two worlds. <span className="hl">One crossing.</span>
        </h2>
        <p className="text-xl leading-relaxed text-ink-soft">
          Your life is already full: a calendar, an inbox, people who need you, goals you have carried for years. Most AI asks you to move in with it. We build the crossing, so the new tools reach the life you have.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_16rem_minmax(0,1fr)] gap-5 lg:gap-0 items-stretch">
        <Shore kicker="Where you live" title="The world you have" items={here} tone="warm" />

        {/* The span */}
        <div className="relative flex flex-col items-center justify-center py-2 lg:py-0" aria-hidden="true">
          <svg viewBox="0 0 256 150" className="hidden lg:block w-full h-auto overflow-visible">
            <defs>
              <linearGradient id="span-g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#9A6646" /><stop offset="0.5" stopColor="#3D64AE" /><stop offset="1" stopColor="#A7D7FF" /></linearGradient>
            </defs>
            <path d="M0 112 H256" stroke="url(#span-g)" strokeWidth="3" strokeLinecap="round" />
            <path d="M0 112 C 60 112, 70 34, 128 34 S 196 112, 256 112" fill="none" stroke="url(#span-g)" strokeWidth="2.5" strokeLinecap="round" />
            {[24, 48, 72, 96, 160, 184, 208, 232].map((x) => {
              const t = Math.abs(x - 128) / 128
              const y = 34 + 78 * Math.pow(t, 1.9)
              return <path key={x} d={`M${x} ${y.toFixed(1)} V112`} stroke="#0F2942" strokeOpacity="0.22" strokeWidth="1.2" />
            })}
            <path d="M0 112 H256" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 10" className="span-flow" />
          </svg>
          <span className="lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center">
            <span className="w-16 h-16 rounded-full glass flex items-center justify-center"><KordaMark size={40} /></span>
            <span className="eyebrow text-ink-soft mt-2">Korda Labs</span>
          </span>
        </div>

        <Shore kicker="What is arriving" title="The new world of AI" items={there} tone="cool" />
      </div>
    </section>
  )
}

// ─── Personal products ────────────────────────────────────────────────────────

const beliefs = [
  { n: '01', title: 'Starts with your goals.', line: 'Every product begins with what you are trying to do, then works backward from there.' },
  { n: '02', title: 'Fits your life.', line: 'It connects to the tools and habits you already have. Nothing to move into.' },
  { n: '03', title: 'Yours to keep.', line: 'Your data, your models, your work. Leave whenever you like.' },
  { n: '04', title: 'Then log off.', line: 'The point is the run, the dinner, the thing you made.' },
]

export function KordaSection() {
  return (
    <section className="relative px-6 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-chart opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_45%,black,transparent)]" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="eyebrow text-copper mb-6">What we make</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.04] text-ink mb-8">
          Products that are <span className="hl">personal.</span>
        </h2>
        <p className="text-xl sm:text-2xl leading-relaxed text-ink-soft max-w-3xl mx-auto">
          Built for one person at a time. They learn what you are working toward, take orders from you alone, and exist to <span className="text-ink">move your goals and your life forward.</span>
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
