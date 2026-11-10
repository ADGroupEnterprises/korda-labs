import { APP_SIGNUP_URL } from '@/lib/links'
import Link from 'next/link'
import { Zoe, ZoeBadge, KeelMark, KordaMark } from '@/components/marks/Brand'

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 7h9M8 4l3.5 3L8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// ─── The crew ─────────────────────────────────────────────────────────────────

const crew = [
  { name: 'Zoe', role: 'Skipper', line: 'Takes the order. Runs the crew.', zoe: true },
  { name: 'Compass', role: 'Navigator', line: 'Holds your goals.' },
  { name: 'Task Manager', role: 'First mate', line: 'Plans your day.' },
]

const specialists = ['Researcher', 'Writer', 'Analyst', 'Builder', 'Designer', '+ more']

export function CrewSection() {
  return (
    <section className="relative py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-center">
        <div className="relative mx-auto w-56 sm:w-72 lg:w-full lg:max-w-sm">
          <div className="absolute inset-x-4 bottom-0 top-10 rounded-[2.5rem] bg-gradient-to-b from-sky-soft to-sky" aria-hidden="true" />
          <Zoe pose="point" className="relative w-full h-auto" />
        </div>

        <div>
          <p className="eyebrow text-accent mb-4">The crew</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl leading-[1.05] text-ink mb-5">
            Three agents. One crew.

          </h2>
          <p className="text-lg text-ink-soft leading-relaxed mb-8 max-w-xl">
            Give Keel the task. The right agent runs the job and reports back.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
            {crew.map((c) => (
              <div key={c.name} className="rounded-2xl border border-mist bg-paper-100 p-5">
                <div className="flex items-center gap-2 mb-3">
                  {c.zoe ? <ZoeBadge size={22} /> : <span className="w-2 h-2 rounded-full bg-accent" />}
                  <span className="font-mono text-[0.68rem] uppercase tracking-wider text-accent">{c.role}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-ink mb-1">{c.name}</h3>
                <p className="text-sm text-ink-soft leading-snug">{c.line}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {specialists.map((s) => (
              <span key={s} className="font-mono text-xs px-3 py-1.5 rounded-full bg-mist text-ink">{s}</span>
            ))}
          </div>

          <Link href="/use-cases/autonomous-agents" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-ink transition-colors">
            Meet the crew <Arrow />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── What gets done ───────────────────────────────────────────────────────────

const work = [
  { tag: '01', title: 'Research', line: 'A brief, with sources.' },
  { tag: '02', title: 'Write', line: 'Docs, emails, reports.' },
  { tag: '03', title: 'Schedule', line: 'Your day, planned.' },
  { tag: '04', title: 'Automate', line: 'Forms filled. Scripts run.' },
  { tag: '05', title: 'Follow up', line: 'A briefing every morning.' },
  { tag: '06', title: 'File', line: 'Saved where you keep things.' },
]

export function WorkSection() {
  return (
    <section className="relative py-24 sm:py-32 px-6 bg-paper-100 border-y border-mist overflow-hidden">
      <div className="absolute inset-0 bg-chart opacity-60" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow text-accent mb-4">The work</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-[1.05] text-ink max-w-xl">
              It comes back done.
            </h2>
          </div>
          <Zoe pose="walk" className="hidden sm:block w-28 lg:w-36 h-auto -mb-4 flex-shrink-0" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {work.map((w) => (
            <div key={w.tag} className="group rounded-2xl border border-mist bg-paper p-5 sm:p-6 hover:border-accent transition-colors duration-300">
              <p className="font-mono text-xs text-accent mb-4">{w.tag}</p>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-ink mb-1.5">{w.title}</h3>
              <p className="text-sm text-ink-soft leading-snug">{w.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Control ──────────────────────────────────────────────────────────────────

const controls = [
  { title: 'Off by default', line: 'You switch on each capability.' },
  { title: 'Logged', line: 'Every action, on the record.' },
  { title: 'Your keys', line: 'Your models. Your data.' },
  { title: 'Stop', line: 'One tap. Any agent.' },
]

export function ControlSection() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="relative max-w-6xl mx-auto rounded-[2.5rem] bg-ink text-paper overflow-hidden">
        <div className="absolute inset-0 bg-chart-light" aria-hidden="true" />
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-8 sm:p-14">
          <div>
            <p className="eyebrow text-sky mb-4">Command</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-[1.05] mb-8">
              Nothing runs without your say.
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-9">
              {controls.map((c) => (
                <li key={c.title} className="border-l-2 border-sky pl-4">
                  <p className="font-semibold text-paper">{c.title}</p>
                  <p className="text-sm text-paper/70 leading-snug">{c.line}</p>
                </li>
              ))}
            </ul>
            <Link href="/security" className="inline-flex items-center gap-2 text-sm font-semibold text-sky hover:text-paper transition-colors">
              Security <Arrow />
            </Link>
          </div>
          <Zoe pose="lounge" className="w-full max-w-md mx-auto h-auto" />
        </div>
      </div>
    </section>
  )
}

// ─── Studio + closing CTA ─────────────────────────────────────────────────────

export function StudioCta() {
  return (
    <section className="relative px-6 pb-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-3xl border border-mist bg-paper-100 p-8 sm:p-10 flex flex-col">
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

        <div className="relative mt-24 md:mt-0">
          <Zoe pose="peek" decorative className="absolute left-1/2 -translate-x-1/2 -top-[5.6rem] w-48 h-auto z-0" />
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
