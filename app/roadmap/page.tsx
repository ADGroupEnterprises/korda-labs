import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import { Zoe, ZoeBadge } from '@/components/marks/Brand'
import { APP_SIGNUP_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'Roadmap — Keel by Korda Labs',
  description: 'What we are building next for Keel: text messaging, home-screen widgets, on-phone models, crew-to-crew, custom themes, and a notebook.',
}

// ─── Small glass "widget" mocks. Illustrations of intent, not screenshots. ─────

function TextMock() {
  return (
    <div className="space-y-2 text-sm">
      <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-md bg-accent text-paper px-3.5 py-2">
        Move my 2pm and tell Jamie.
      </div>
      <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-md bg-white/85 border border-white px-3.5 py-2 text-ink shadow-sm">
        Done. Moved to 4pm. Jamie has the note.
      </div>
      <p className="font-mono text-[0.65rem] text-ink-soft pt-1">SMS · no app to open</p>
    </div>
  )
}

function WidgetMock() {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      <div className="rounded-3xl bg-white/85 border border-white shadow-sm p-3.5 col-span-2">
        <p className="font-mono text-[0.6rem] uppercase tracking-wider text-accent mb-2">Today</p>
        {['Deep work · 9–11', 'Review proposal · 2pm'].map((t) => (
          <div key={t} className="flex items-center gap-2 py-1">
            <span className="w-1 h-4 rounded-full bg-accent" />
            <span className="text-xs text-ink">{t}</span>
          </div>
        ))}
      </div>
      <div className="rounded-3xl bg-ink text-paper p-3.5 aspect-square flex flex-col justify-between">
        <p className="font-mono text-[0.6rem] uppercase tracking-wider text-sky">Goal</p>
        <div>
          <p className="font-display font-bold text-2xl leading-none">62%</p>
          <p className="text-[0.65rem] text-paper/70 mt-1">Half marathon</p>
        </div>
      </div>
      <div className="rounded-3xl bg-gradient-to-br from-sky-soft to-sky p-3.5 aspect-square flex flex-col justify-between">
        <p className="font-mono text-[0.6rem] uppercase tracking-wider text-ink">Crew</p>
        <div>
          <p className="font-display font-bold text-2xl leading-none text-ink">3</p>
          <p className="text-[0.65rem] text-ink-soft mt-1">jobs running</p>
        </div>
      </div>
    </div>
  )
}

function PhoneModelMock() {
  return (
    <div className="flex items-center gap-4">
      <div className="w-20 h-36 rounded-[1.4rem] bg-ink p-1.5 shadow-lg flex-shrink-0">
        <div className="w-full h-full rounded-[1.05rem] bg-gradient-to-b from-navy to-ink flex flex-col items-center justify-center gap-2">
          <span className="w-7 h-7 rounded-lg border border-sky/60 flex items-center justify-center">
            <span className="w-3 h-3 rounded-sm bg-sky" />
          </span>
          <span className="font-mono text-[0.5rem] text-sky uppercase tracking-wider">on device</span>
        </div>
      </div>
      <ul className="space-y-2 text-sm text-ink">
        {['Model runs on the phone', 'Nothing sent to a server', 'Your choice, per task'].map((t) => (
          <li key={t} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}

function CrewToCrewMock() {
  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <div className="flex flex-col items-center gap-1.5">
          <span className="w-14 h-14 rounded-2xl bg-white/85 border border-white shadow-sm flex items-center justify-center">
            <ZoeBadge size={34} />
          </span>
          <span className="font-mono text-[0.6rem] text-ink-soft uppercase tracking-wider">Yours</span>
        </div>
        <div className="flex-1 max-w-[7rem] flex items-center gap-1" aria-hidden="true">
          <span className="h-px flex-1 bg-accent/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="h-px flex-1 bg-accent/40" />
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <span className="w-14 h-14 rounded-2xl bg-white/85 border border-white shadow-sm flex items-center justify-center">
            <ZoeBadge size={34} />
          </span>
          <span className="font-mono text-[0.6rem] text-ink-soft uppercase tracking-wider">Theirs</span>
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-ink">
        &ldquo;Thursday, 7pm works for both.&rdquo;
      </p>
    </div>
  )
}

function ThemeMock() {
  const themes = [
    { name: 'Harbor', a: '#3D64AE', b: '#DCEEFF', c: '#0F2942' },
    { name: 'Dusk', a: '#7A5AA6', b: '#EEE6F7', c: '#2A2140' },
    { name: 'Moss', a: '#4C7A5A', b: '#E6F1E6', c: '#1E3326' },
    { name: 'Ember', a: '#B5623C', b: '#FBEBDC', c: '#3D2817' },
  ]
  return (
    <div className="grid grid-cols-4 gap-2">
      {themes.map((t) => (
        <div key={t.name} className="text-center">
          <div className="rounded-2xl border border-white shadow-sm overflow-hidden aspect-[3/4]" style={{ background: t.b }}>
            <div className="h-1/3" style={{ background: t.c }} />
            <div className="p-2 space-y-1.5">
              <div className="h-1.5 rounded-full w-3/4" style={{ background: t.a }} />
              <div className="h-1.5 rounded-full w-1/2" style={{ background: t.c, opacity: 0.25 }} />
            </div>
          </div>
          <p className="font-mono text-[0.6rem] text-ink-soft mt-1.5">{t.name}</p>
        </div>
      ))}
    </div>
  )
}

function NotebookMock() {
  return (
    <div className="flex items-center gap-4">
      <div className="w-28 h-36 rounded-xl bg-sand border border-white shadow-sm p-3 flex-shrink-0 -rotate-3">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-1.5 py-1.5 border-b border-copper/20">
            <span className="w-2 h-2 rounded-sm border border-copper/60" />
            <span className="h-1 rounded-full bg-copper/40" style={{ width: `${70 - i * 12}%` }} />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1" aria-hidden="true">
        <span className="h-px w-6 bg-accent/40" />
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
      </div>
      <div className="flex-1 rounded-2xl bg-white/85 border border-white shadow-sm p-3">
        {['Call the venue', 'Draft the brief'].map((t) => (
          <div key={t} className="flex items-center gap-2 py-1">
            <span className="w-1 h-4 rounded-full bg-accent" />
            <span className="text-xs text-ink">{t}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const items = [
  {
    tag: 'Text',
    title: 'Text Keel.',
    body: 'Keel over SMS. Send a message, get the work back. No app to open.',
    mock: <TextMock />,
    wide: true,
  },
  {
    tag: 'Widgets',
    title: 'Your day, on your home screen.',
    body: 'Today, your goals and your crew as widgets. Glanceable, and yours to arrange.',
    mock: <WidgetMock />,
  },
  {
    tag: 'On-phone models',
    title: 'A model in your pocket.',
    body: 'Run the model on the phone itself, so sensitive work never leaves it.',
    mock: <PhoneModelMock />,
  },
  {
    tag: 'Crew to crew',
    title: 'Your Zoe, meet their Zoe.',
    body: 'Agents that coordinate between people, with permission. Two calendars, one dinner, no thread.',
    mock: <CrewToCrewMock />,
  },
  {
    tag: 'Themes',
    title: 'Make it yours.',
    body: 'Pick the colours, the type and the mood. Keel should look like you.',
    mock: <ThemeMock />,
  },
  {
    tag: 'Paper',
    title: 'A notebook you can write in.',
    body: 'Notebook hardware that joins the planner on your desk with the crew that does the work.',
    mock: <NotebookMock />,
    wide: true,
  },
]

export default function RoadmapPage() {
  return (
    <main>
      <section className="px-6 pt-20 sm:pt-28 pb-14">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <div>
            <p className="eyebrow text-accent mb-5">Roadmap</p>
            <h1 className="font-display font-bold text-ink text-5xl sm:text-7xl leading-[1.0] mb-5">What&apos;s next.</h1>
            <p className="text-lg sm:text-xl text-ink-soft max-w-md">
              Six things we are building toward. No dates yet.
            </p>
          </div>
          <Zoe pose="point-left" eager className="w-40 sm:w-52 h-auto flex-shrink-0 self-center sm:self-end" />
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {items.map((it, i) => (
            <div
              key={it.tag}
              className={`rounded-[2rem] glass p-6 sm:p-8 ${it.wide ? 'md:col-span-2' : ''}`}
            >
              <div className={`grid gap-8 items-center ${it.wide ? 'md:grid-cols-2' : ''}`}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-mono text-[0.68rem] uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/[0.08] text-accent">
                      {it.tag}
                    </span>
                    <span className="font-mono text-[0.68rem] uppercase tracking-wider text-ink-soft">Planned</span>
                  </div>
                  <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight text-ink mb-3">{it.title}</h2>
                  <p className="text-lg text-ink-soft leading-relaxed">{it.body}</p>
                </div>
                <div className={`rounded-3xl glass-tint p-5 ${it.wide ? '' : 'mt-0'}`}>{it.mock}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-14 text-center">
          <p className="text-ink-soft mb-6">Everything here builds on what Keel does today.</p>
          <a
            href={APP_SIGNUP_URL}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-accent text-paper btn-pillow transition-all duration-300"
          >
            Get Keel
          </a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
