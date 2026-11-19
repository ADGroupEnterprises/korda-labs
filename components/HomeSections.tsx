import Link from 'next/link'
import { KordaMark, KeelMark } from '@/components/marks/Brand'

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

const art = { viewBox: '0 0 400 300', preserveAspectRatio: 'xMidYMid slice', className: 'absolute inset-0 w-full h-full', 'aria-hidden': true } as const

/* The world you have: a low sun, soft hills, a path home. Warm and hand-made. */
function HereArt() {
  return (
    <svg {...art}>
      <defs>
        <linearGradient id="here-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#FBEBDC" /><stop offset="0.55" stopColor="#F6CDBE" /><stop offset="1" stopColor="#E9B48E" /></linearGradient>
        <radialGradient id="here-sun" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stopColor="#FFF6E8" /><stop offset="0.55" stopColor="#F4C98F" /><stop offset="1" stopColor="#E0A96D" stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#here-sky)" />
      <circle cx="286" cy="118" r="92" fill="url(#here-sun)" />
      <circle cx="286" cy="118" r="34" fill="#FFF3DF" />
      <path d="M0 196 C 70 160, 130 204, 200 182 S 330 150, 400 186 V300 H0Z" fill="#D99B78" opacity="0.55" />
      <path d="M0 226 C 80 196, 150 240, 230 214 S 350 196, 400 220 V300 H0Z" fill="#B97F5C" opacity="0.7" />
      <path d="M0 262 C 90 236, 180 276, 270 250 S 370 244, 400 252 V300 H0Z" fill="#8A5639" />
      <path d="M150 300 C 170 270, 232 262, 246 240 S 262 214, 296 204" fill="none" stroke="#FBEBDC" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 11" />
      {/* a few roofs, lit from inside */}
      {[[84, 214, 26], [118, 222, 20], [318, 196, 22]].map(([x, y, w]) => (
        <g key={x}>
          <path d={`M${x - 3} ${y} L${x + w / 2} ${y - w * 0.55} L${x + w + 3} ${y}Z`} fill="#6B4630" />
          <rect x={x} y={y} width={w} height={w * 0.6} rx="1.5" fill="#7C5138" />
          <rect x={x + w * 0.36} y={y + w * 0.16} width={w * 0.28} height={w * 0.28} rx="1" fill="#FFE3B0" />
        </g>
      ))}
    </svg>
  )
}

/* The new world of AI: a ring of light over a grid that runs to the horizon, and a rising web. */
function ThereArt() {
  const nodes: [number, number, number][] = [[70, 214, 3], [118, 176, 4], [160, 206, 3], [176, 136, 5], [232, 168, 4], [250, 96, 6], [306, 128, 4], [330, 58, 5], [366, 96, 3]]
  const links: [number, number][] = [[0, 1], [1, 2], [1, 3], [2, 4], [3, 4], [3, 5], [4, 6], [5, 6], [5, 7], [6, 8], [7, 8]]
  return (
    <svg {...art}>
      <defs>
        <linearGradient id="there-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0B1F36" /><stop offset="0.6" stopColor="#1F3F74" /><stop offset="1" stopColor="#3D64AE" /></linearGradient>
        <radialGradient id="there-glow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stopColor="#A7D7FF" stopOpacity="0.55" /><stop offset="1" stopColor="#A7D7FF" stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#there-sky)" />
      <circle cx="114" cy="118" r="96" fill="url(#there-glow)" />
      <circle cx="114" cy="118" r="38" fill="none" stroke="#DCEEFF" strokeWidth="3" />
      <circle cx="114" cy="118" r="52" fill="none" stroke="#A7D7FF" strokeOpacity="0.45" strokeWidth="1" />
      <circle cx="114" cy="118" r="70" fill="none" stroke="#A7D7FF" strokeOpacity="0.22" strokeWidth="1" />
      {/* grid to the horizon */}
      <g stroke="#A7D7FF" strokeOpacity="0.28" strokeWidth="1">
        {[236, 248, 264, 284].map((y) => <path key={y} d={`M0 ${y}H400`} />)}
        {[-240, -120, -40, 40, 120, 200, 280, 360, 440, 520, 640].map((x) => <path key={x} d={`M200 228 L${x} 300`} />)}
      </g>
      <path d="M0 228H400" stroke="#DCEEFF" strokeOpacity="0.5" />
      <g stroke="#DCEEFF" strokeOpacity="0.55" strokeWidth="1.2">
        {links.map(([a, b]) => <path key={`${a}-${b}`} d={`M${nodes[a][0]} ${nodes[a][1]} L${nodes[b][0]} ${nodes[b][1]}`} />)}
      </g>
      {nodes.map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} fill={i % 3 === 0 ? '#F2B8AE' : '#DCEEFF'} stroke="#0B1F36" strokeWidth="1" />)}
    </svg>
  )
}

function Shore({ title, dark, children }: { title: string; dark?: boolean; children: React.ReactNode }) {
  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] min-h-[18rem] sm:min-h-[22rem] shadow-[0_30px_50px_-30px_rgba(15,41,66,0.5)]">
      {children}
      <div className={`absolute inset-0 ${dark ? 'bg-gradient-to-t from-[#0B1F36]/75 via-transparent to-transparent' : 'bg-gradient-to-t from-[#5A3A27]/55 via-transparent to-transparent'}`} aria-hidden="true" />
      <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/40" aria-hidden="true" />
      <h3 className="absolute left-7 bottom-6 right-7 font-display font-bold text-3xl sm:text-4xl leading-tight text-white">{title}</h3>
    </div>
  )
}

export function BridgeSection() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.04] text-ink mb-6">
          Two worlds. <span className="hl">One crossing.</span>
        </h2>
        <p className="text-xl leading-relaxed text-ink-soft">
          Your life is already full: a calendar, an inbox, people who need you. Most AI asks you to move in with it. We build the crossing, so the new tools reach the life you have.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_14rem_minmax(0,1fr)] gap-5 lg:gap-0 items-center">
        <Shore title="The world you have"><HereArt /></Shore>

        {/* The crossing: one curve, its colour travelling from one shore to the other */}
        <div className="relative flex flex-col items-center justify-center" aria-hidden="true">
          <svg viewBox="0 0 224 150" className="hidden lg:block w-full h-auto overflow-visible">
            <defs>
              <linearGradient id="span-g" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="224" y2="0">
                <stop offset="0" stopColor="#9A6646" />
                <stop offset="0.3" stopColor="#E0A96D">
                  <animate attributeName="offset" values="0.08;0.82;0.08" dur="6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1" />
                </stop>
                <stop offset="0.45" stopColor="#3D64AE">
                  <animate attributeName="offset" values="0.2;0.94;0.2" dur="6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1" />
                </stop>
                <stop offset="1" stopColor="#A7D7FF" />
              </linearGradient>
            </defs>
            <path id="span-path" d="M-6 118 C 52 118, 58 40, 112 40 S 172 118, 230 118" fill="none" stroke="url(#span-g)" strokeWidth="5" strokeLinecap="round" />
            <path d="M-6 118 C 52 118, 58 40, 112 40 S 172 118, 230 118" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="26 330" className="span-glint" />
          </svg>
          <span className="lg:absolute lg:-top-2 lg:left-1/2 lg:-translate-x-1/2 w-16 h-16 rounded-full glass flex items-center justify-center"><KordaMark size={40} /></span>
        </div>

        <Shore title="The new world of AI" dark><ThereArt /></Shore>
      </div>
    </section>
  )
}

// ─── The gap ──────────────────────────────────────────────────────────────────

export function GapSection() {
  const flat = 'M56 270 C 250 258, 450 246, 660 234'
  const lifted = 'M56 270 C 300 264, 500 226, 660 122'
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-center">
        <div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl leading-[1.05] text-ink mb-6">
            AI keeps getting smarter. <span className="hl-warm">Most people&apos;s use of it barely moves.</span>
          </h2>
          <p className="text-xl leading-relaxed text-ink-soft mb-5">
            What these systems can do climbs steeply. What an ordinary person gets out of them climbs slowly. The space between the two lines grows every month.
          </p>
          <p className="text-xl leading-relaxed text-ink">
            That space is where we work. We build products that lift the second line, for people who have other things to do than learn AI.
          </p>
        </div>

        <figure className="glass rounded-[2rem] p-5 sm:p-8">
          <svg viewBox="0 0 720 320" className="w-full h-auto" role="img" aria-label="Illustration: what AI can do rises steeply over time, what most people use rises slowly, and a third line shows that use lifted toward capability.">
            <defs>
              <linearGradient id="gap-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3D64AE" stopOpacity="0.22" /><stop offset="1" stopColor="#3D64AE" stopOpacity="0" /></linearGradient>
              <linearGradient id="gap-cap" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#27405A" /><stop offset="1" stopColor="#0F2942" /></linearGradient>
            </defs>
            <path d="M56 284H680" stroke="#0F2942" strokeOpacity="0.14" />
            {[100, 160, 220].map((y) => <path key={y} d={`M56 ${y}H680`} stroke="#0F2942" strokeOpacity="0.05" />)}

            {/* the lift, as an area between the slow line and the lifted one */}
            <path fill="url(#gap-fill)" d={`${lifted} L660 234 C 450 246, 250 258, 56 270Z`}>
              <animate attributeName="d" dur="7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;0.8;1" keySplines="0.4 0 0.2 1;0 0 1 1;0.4 0 0.2 1"
                values={`${flat} L660 234 C 450 246, 250 258, 56 270Z;${lifted} L660 234 C 450 246, 250 258, 56 270Z;${lifted} L660 234 C 450 246, 250 258, 56 270Z;${flat} L660 234 C 450 246, 250 258, 56 270Z`} />
            </path>

            {/* what AI can do */}
            <path d="M56 266 C 330 260, 520 210, 660 34" fill="none" stroke="url(#gap-cap)" strokeWidth="4" strokeLinecap="round" />
            {/* what most people use */}
            <path d={flat} fill="none" stroke="#9A6646" strokeWidth="4" strokeLinecap="round" />
            {/* with tools built for them */}
            <path d={lifted} fill="none" stroke="#3D64AE" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 10">
              <animate attributeName="d" dur="7s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;0.8;1" keySplines="0.4 0 0.2 1;0 0 1 1;0.4 0 0.2 1" values={`${flat};${lifted};${lifted};${flat}`} />
            </path>

            <text x="680" y="304" textAnchor="end" fontFamily="var(--font-dm-sans), system-ui, sans-serif" fontSize="12" fill="#49617B">time</text>
          </svg>
          <figcaption className="mt-4">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              <li className="flex items-center gap-2 text-ink"><span className="w-6 h-1 rounded-full bg-ink" />What AI can do</li>
              <li className="flex items-center gap-2 text-copper"><span className="w-6 h-1 rounded-full bg-copper" />What most people use</li>
              <li className="flex items-center gap-2 text-accent"><span className="w-6 border-t-[3px] border-dotted border-accent" />With tools built for them</li>
            </ul>
            <p className="mt-3 text-sm text-ink-soft">A sketch of the idea, not a measurement.</p>
          </figcaption>
        </figure>
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
