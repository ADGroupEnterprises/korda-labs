/* A drifting cloud of the apps Keel connects to. Each tile is a plain glyph for the kind of app
   plus its name: no third-party logos are drawn here. Swap in official brand assets if wanted. */

const g = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
const GLYPH: Record<string, React.ReactNode> = {
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.600-7 10-7 10z" {...g} />,
  run: <><path d="M4 17c3 0 4-3 6-3s3 2 5 2 3-2 5-2" {...g} /><circle cx="6" cy="8" r="1.6" {...g} /><circle cx="17" cy="7" r="1.6" {...g} /></>,
  pulse: <path d="M3 12h4l2-5 3 10 2.500-7 1.500 2h5" {...g} />,
  watch: <><rect x="7" y="7" width="10" height="10" rx="3" {...g} /><path d="M9 7l.800-3h4.400l.800 3M9 17l.800 3h4.400l.800-3M12 10v2.300l1.500 1" {...g} /></>,
  ring: <><circle cx="12" cy="12" r="7" {...g} /><circle cx="12" cy="12" r="3.500" {...g} /></>,
  food: <><path d="M7 4v6a2 2 0 002 2v8M7 4v4M11 4v6" {...g} /><path d="M16 4c-1.500 1.500-2 4-2 6h3v10" {...g} /></>,
  cal: <><rect x="4" y="5.500" width="16" height="14" rx="3" {...g} /><path d="M4 10h16M8.500 3.500v4M15.500 3.500v4" {...g} /></>,
  note: <><rect x="5" y="4" width="14" height="16" rx="2.500" {...g} /><path d="M9 9h6M9 13h6M9 17h3" {...g} /></>,
  check: <><circle cx="12" cy="12" r="8" {...g} /><path d="M8.500 12.300l2.400 2.400 4.600-5" {...g} /></>,
  mail: <><rect x="3.500" y="6" width="17" height="12" rx="2.500" {...g} /><path d="M4.500 8l7.500 5.500L19.500 8" {...g} /></>,
  mark: <path d="M7 4h10v16l-5-3.500L7 20V4z" {...g} />,
  music: <><path d="M9 18V6l10-2v12" {...g} /><circle cx="6.500" cy="18" r="2.500" {...g} /><circle cx="16.500" cy="16" r="2.500" {...g} /></>,
  play: <><rect x="3.500" y="6" width="17" height="12" rx="4" {...g} /><path d="M10.500 9.500l4 2.500-4 2.500v-5z" {...g} /></>,
  book: <path d="M12 6.500C10 5 7 4.800 4.500 5.500v12c2.500-.700 5.500-.500 7.500 1 2-1.500 5-1.700 7.500-1v-12C17 4.800 14 5 12 6.500zM12 6.500v12" {...g} />,
  ear: <><path d="M5 14v-2a7 7 0 0114 0v2" {...g} /><rect x="4" y="13" width="4" height="6" rx="1.500" {...g} /><rect x="16" y="13" width="4" height="6" rx="1.500" {...g} /></>,
}

const tones = {
  blue: 'from-[#5B86D6] to-[#3D64AE] text-white',
  sky: 'from-[#DCEEFF] to-[#A7D7FF] text-[#27405A]',
  navy: 'from-[#27405A] to-[#0F2942] text-[#A7D7FF]',
  sand: 'from-[#FBEBDC] to-[#F2B8AE] text-[#9A6646]',
  brass: 'from-[#F0C894] to-[#E0A96D] text-[#6B4630]',
  white: 'from-white to-[#F3F7FC] text-[#3D64AE]',
}

const APPS: [string, keyof typeof GLYPH, keyof typeof tones][] = [
  ['Apple Health', 'heart', 'sand'], ['Google Calendar', 'cal', 'blue'], ['Strava', 'run', 'brass'], ['Notion', 'note', 'white'], ['Whoop', 'pulse', 'navy'],
  ['Gmail', 'mail', 'sand'], ['Todoist', 'check', 'blue'], ['Garmin', 'watch', 'sky'], ['Spotify', 'music', 'navy'], ['Oura Ring', 'ring', 'white'],
  ['Apple Calendar', 'cal', 'sand'], ['Readwise', 'mark', 'brass'], ['MyFitnessPal', 'food', 'sky'], ['YouTube', 'play', 'sand'], ['Fitbit', 'pulse', 'blue'],
  ['Kindle', 'book', 'navy'], ['Apple Watch', 'watch', 'white'], ['Audible', 'ear', 'brass'],
]

/* Offsets and timings repeat on a short cycle so the cloud looks loose, not gridded. */
const LIFT = [0, 22, -10, 30, 6, -18, 16, -4, 26]
const SIZE = ['w-[4.5rem] h-[4.5rem]', 'w-16 h-16', 'w-[5.25rem] h-[5.25rem]', 'w-16 h-16', 'w-[4.75rem] h-[4.75rem]']

export default function AppCloud() {
  return (
    <ul className="flex flex-wrap justify-center gap-x-5 gap-y-9 sm:gap-x-8 max-w-4xl mx-auto pt-4 pb-10" aria-label="Apps Keel connects to">
      {APPS.map(([name, glyph, tone], i) => (
        <li key={name} className="flex flex-col items-center" style={{ transform: `translateY(${LIFT[i % LIFT.length]}px)` }}>
          <span className="app-float flex flex-col items-center" style={{ animationDelay: `${-(i * 0.7) % 5}s`, animationDuration: `${5 + (i % 4)}s` }}>
            <span className={`${SIZE[i % SIZE.length]} rounded-[1.4rem] bg-gradient-to-br ${tones[tone]} flex items-center justify-center ring-1 ring-inset ring-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_18px_30px_-16px_rgba(15,41,66,0.45)]`}>
              <svg viewBox="0 0 24 24" className="w-[46%] h-[46%]" aria-hidden="true">{GLYPH[glyph]}</svg>
            </span>
            <span className="mt-2 text-xs font-medium text-ink-soft whitespace-nowrap">{name}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}
