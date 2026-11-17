'use client'

/* The seven app screens behind the rail, drawn from the real Keel shell and filled with the same
   week the chat examples use. Renderings of intent, not screenshots. */

import { Icon, label, Avatar } from '@/components/showcase/KeelUI'
import { KeelMark, CrewMark } from '@/components/marks/Brand'

const card = 'rounded-2xl bg-white/90 border border-white shadow-[0_1px_2px_rgba(15,41,66,0.05),0_10px_24px_-16px_rgba(15,41,66,0.25)]'
const row = 'flex items-center gap-2 py-[5px] border-b border-ink/[0.06] last:border-0'

function Bar({ v, tone = 'accent' }: { v: number; tone?: 'accent' | 'copper' }) {
  return <span className="block h-[5px] rounded-full bg-ink/[0.07] overflow-hidden"><span className={`block h-full rounded-full ${tone === 'accent' ? 'bg-gradient-to-r from-sky to-accent' : 'bg-gradient-to-r from-brass to-copper'}`} style={{ width: `${v}%` }} /></span>
}
function Tick({ done }: { done?: boolean }) {
  return <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0 ${done ? 'bg-accent text-paper' : 'border border-ink/25'}`}>{done && <Icon.check className="w-2.5 h-2.5" />}</span>
}
function Head({ k, t, link }: { k: string; t: string; link?: string }) {
  return (
    <div className="flex items-end justify-between mb-2">
      <div><p className={`${label} text-accent`}>{k}</p><p className="font-display font-bold text-[0.86rem] leading-tight text-ink">{t}</p></div>
      {link && <span className="text-[0.6rem] text-accent whitespace-nowrap">{link} ›</span>}
    </div>
  )
}

// ─── Overview ─────────────────────────────────────────────────────────────────

function Overview() {
  return (
    <div className="p-4 bg-chart h-full">
      <div className="flex items-baseline gap-2.5 mb-3">
        <p className="font-display font-bold text-xl text-ink leading-none">Good morning</p>
        <p className="text-[0.66rem] text-ink-soft">Monday, November 16</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] gap-2.5">
        <div className={`${card} p-3`}>
          <Head k="Today’s page" t="Mon, Nov 16" link="Open Planner" />
          {[['7:00', 'Easy run · 5k', true], ['9:00', 'Deep work: investor update', false], ['1:30', 'Standup', false], ['4:00', 'Venue call · The Loft', false]].map(([t, n, d]) => (
            <div key={n as string} className={row}><Tick done={d as boolean} /><span className={`text-[0.7rem] flex-1 truncate ${d ? 'line-through text-ink-soft' : 'text-ink'}`}>{n}</span><span className={`${label} text-ink-soft`}>{t}</span></div>
          ))}
        </div>
        <div className={`${card} p-3`}>
          <Head k="Compass" t="Goal progress" link="All goals" />
          {[['Half marathon · Mar 14', 62], ['Ship v1', 48], ['O-Chem II · final Dec 12', 30]].map(([n, v]) => (
            <div key={n as string} className="py-[5px]"><p className="flex justify-between text-[0.66rem] text-ink mb-1"><span className="truncate">{n}</span><span className="font-semibold tabular-nums">{v}%</span></p><Bar v={v as number} /></div>
          ))}
        </div>
        <div className={`${card} p-3`}>
          <Head k="Awaiting your eyes" t="Tasks in review" link="Open board" />
          {[['Investor update', 'Draft v2', 'Writer'], ['Venue shortlist', '3 options', 'Researcher']].map(([n, m, a]) => (
            <div key={n} className={row}><span className="w-1 h-3.5 rounded-full bg-accent/70" /><span className="text-[0.7rem] flex-1 truncate text-ink">{n} <span className="text-ink-soft">· {m}</span></span><span className="px-1.5 py-0.5 rounded-full bg-mist text-accent text-[0.56rem]">{a}</span></div>
          ))}
        </div>
        <div className={`${card} p-3`}>
          <Head k="Don’t miss" t="Upcoming &amp; overdue" link="Open tasks" />
          {[['Reunion RSVPs close', 'Fri', false], ['Cloud hosting renews', 'Wed', false], ['Return library books', 'Overdue', true]].map(([n, m, late]) => (
            <div key={n as string} className={row}><span className="text-[0.7rem] flex-1 truncate text-ink">{n}</span><span className={`${label} ${late ? 'text-copper' : 'text-ink-soft'}`}>{m}</span></div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Planner ──────────────────────────────────────────────────────────────────

const EVENTS: [number, number, number, string, string][] = [
  // day (0 = Sun), start hour, length in hours, title, tone
  [1, 7, 1, 'Easy run', 'sky'], [1, 9, 2, 'Deep work', 'accent'], [1, 13.5, 0.75, 'Standup', 'mist'], [1, 16, 1, 'Venue call', 'sand'],
  [2, 8, 1, 'O-Chem · Ch. 7', 'ink'], [2, 10, 1.5, 'Pilot review', 'accent'], [3, 7, 1.25, 'Tempo run', 'sky'], [3, 14, 1, 'Design crit', 'mist'],
  [4, 8, 1, 'O-Chem · Ch. 8', 'ink'], [4, 16, 1, 'Proposal review', 'accent'], [5, 12, 1, 'Lunch · Dana', 'sand'], [6, 9, 2, 'Long run', 'sky'], [6, 14, 3, 'Shop time', 'sand'],
]
const evTone: Record<string, string> = { sky: 'bg-sky/70 text-ink', accent: 'bg-accent text-paper', mist: 'bg-mist text-ink', sand: 'bg-sand text-copper', ink: 'bg-ink text-paper' }

function Planner() {
  const days = [['Sun', 15], ['Mon', 16], ['Tue', 17], ['Wed', 18], ['Thu', 19], ['Fri', 20], ['Sat', 21]] as const
  const H = 22 // px per hour, 7am to 6pm
  return (
    <div className="grid grid-cols-1 md:grid-cols-[8rem_10.5rem_minmax(0,1fr)] gap-2.5 p-3 h-full">
      <div className={`${card} p-2.5 hidden md:block`}>
        <p className={`${label} text-accent mb-1.5`}>Lists</p>
        {[['Inbox', 4], ['Today', 5], ['Overdue', 1], ['All tasks', 23]].map(([n, c], i) => (
          <p key={n as string} className={`flex justify-between text-[0.68rem] px-2 py-1 rounded-lg ${i === 1 ? 'bg-accent text-paper font-semibold' : 'text-ink'}`}><span>{n}</span><span className="tabular-nums opacity-70">{c}</span></p>
        ))}
        <p className={`${label} text-accent mt-3 mb-1`}>My lists</p>
        {['Errands', 'Reading'].map((n) => <p key={n} className="text-[0.66rem] text-ink-soft px-2 py-[3px]">{n}</p>)}
        <p className={`${label} text-accent mt-3 mb-1`}>Projects</p>
        {['Walnut bookshelf', 'Reunion dinner'].map((n) => <p key={n} className="text-[0.66rem] text-ink-soft px-2 py-[3px] truncate">{n}</p>)}
      </div>
      <div className={`${card} p-2.5`}>
        <p className="font-display font-bold text-[0.95rem] text-accent mb-2">Today</p>
        <p className="text-[0.64rem] text-ink-soft border border-dashed border-ink/15 rounded-lg px-2 py-1 mb-1.5">+ Add new task</p>
        {[['Easy run · 5k', true], ['Send investor update', false], ['Call The Loft', false], ['O-Chem problem set', false], ['Order walnut boards', false]].map(([n, d]) => (
          <div key={n as string} className={row}><Tick done={d as boolean} /><span className={`text-[0.68rem] truncate ${d ? 'line-through text-ink-soft' : 'text-ink'}`}>{n}</span></div>
        ))}
      </div>
      <div className={`${card} p-2.5 hidden md:flex flex-col min-w-0 overflow-hidden`}>
        <div className="flex items-center justify-between mb-2">
          <p className="font-display font-bold text-[0.95rem] text-ink">November 2026</p>
          <span className="flex rounded-lg overflow-hidden border border-ink/10 text-[0.56rem]">{['Day', 'Week', 'Month'].map((v, i) => <span key={v} className={`px-2 py-0.5 ${i === 1 ? 'bg-accent text-paper' : 'text-ink-soft'}`}>{v}</span>)}</span>
        </div>
        <div className="grid grid-cols-7 gap-px mb-1">
          {days.map(([d, n]) => (
            <p key={n} className="text-center"><span className={`${label} !text-[0.48rem] text-ink-soft block`}>{d}</span><span className={`inline-flex w-5 h-5 items-center justify-center rounded-full text-[0.64rem] font-semibold ${n === 16 ? 'bg-[#C2453A] text-white' : 'text-ink'}`}>{n}</span></p>
          ))}
        </div>
        <div className="relative flex-1 grid grid-cols-7 gap-px rounded-lg overflow-hidden" style={{ backgroundImage: `repeating-linear-gradient(to bottom, rgba(15,41,66,0.06) 0 1px, transparent 1px ${H}px)` }}>
          {days.map(([, n], di) => (
            <div key={n} className={`relative ${n === 16 ? 'bg-accent/[0.05]' : ''} border-l border-ink/[0.05] first:border-0`}>
              {EVENTS.filter((e) => e[0] === di).map(([, st, len, t, tone]) => (
                <span key={t} className={`absolute inset-x-[2px] rounded-md px-1 pt-[2px] text-[0.5rem] leading-tight font-medium overflow-hidden ${evTone[tone]}`} style={{ top: (st - 7) * H, height: len * H - 2 }}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Tasks ────────────────────────────────────────────────────────────────────

const BOARD: [string, string, string, [string, string][]][] = [
  ['Incoming', 'Inbox', 'border-ink/15', [['Book dentist', 'You'], ['Reply to Jamie', 'You']]],
  ['Queued', 'Assigned', 'border-sky', [['Compare 3 venues', 'Researcher'], ['Cut list for shelf', 'Builder']]],
  ['Active', 'In progress', 'border-accent', [['Draft investor update', 'Writer'], ['Week 1 study guide', 'Analyst']]],
  ['Sign-off', 'Review', 'border-brass', [['Venue shortlist', 'Researcher']]],
  ['Complete', 'Done', 'border-navy/40', [['Move proposal review', 'Zoe'], ['Nudge RSVPs', 'Zoe']]],
]

function Tasks() {
  return (
    <div className="p-3 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-2.5">
        <span className="flex-1 h-7 rounded-lg bg-white/80 border border-white px-2.5 flex items-center text-[0.66rem] text-ink-soft">New task title</span>
        <span className="h-7 px-3 rounded-lg bg-accent text-paper text-[0.66rem] font-semibold flex items-center">Create</span>
        <span className="hidden sm:flex h-7 rounded-lg border border-ink/10 overflow-hidden text-[0.62rem]"><span className="px-2.5 flex items-center bg-ink/[0.06] text-ink font-medium">Board</span><span className="px-2.5 flex items-center text-ink-soft">Detail</span></span>
      </div>
      <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-2 min-h-0">
        {BOARD.map(([k, t, edge, items], ci) => (
          <div key={t} className={`${card} p-2 border-l-2 ${edge} ${ci > 1 ? 'hidden md:block' : ''}`}>
            <p className={`${label} !text-[0.5rem] text-accent`}>{k}</p>
            <p className="font-display font-bold text-[0.78rem] text-ink mb-2 flex justify-between">{t}<span className="text-ink-soft font-sans font-normal text-[0.6rem]">{items.length}</span></p>
            {items.map(([n, who]) => (
              <div key={n} className="rounded-xl bg-paper border border-ink/[0.06] p-2 mb-1.5">
                <p className="text-[0.66rem] leading-snug text-ink mb-1.5">{n}</p>
                <span className={`inline-block px-1.5 py-0.5 rounded-full text-[0.52rem] ${who === 'You' ? 'bg-sand text-copper' : 'bg-mist text-accent'}`}>{who}</span>
              </div>
            ))}
            <p className="text-[0.56rem] text-ink-soft mt-1">+ Add to this column</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Goals ────────────────────────────────────────────────────────────────────

function Goals() {
  const goals: [string, string, number, string[]][] = [
    ['Run a half marathon', 'Mar 14', 62, ['Base built', '16k long run', 'Race pace']],
    ['Ship v1', 'Jan 29', 48, ['Beta', 'Billing', 'Launch']],
    ['Pass O-Chem II', 'Dec 12', 30, ['Ch. 7–10', 'Spectroscopy', 'Practice exams']],
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_14rem] h-full">
      <div className="p-3 bg-chart">
        <div className="flex justify-between items-center mb-2.5"><p className="text-[0.72rem] font-semibold text-ink">Goals</p><span className="h-6 px-2.5 rounded-lg bg-accent text-paper text-[0.62rem] font-semibold flex items-center">Create goal</span></div>
        {goals.map(([n, due, v, ms]) => (
          <div key={n} className={`${card} p-3 mb-2`}>
            <div className="flex items-baseline justify-between mb-1.5"><p className="font-display font-bold text-[0.84rem] text-ink">{n}</p><p className={`${label} text-ink-soft`}>{due} · {v}%</p></div>
            <Bar v={v} />
            <div className="flex gap-1.5 mt-2">{ms.map((m, i) => <span key={m} className={`px-2 py-0.5 rounded-full text-[0.56rem] ${i === 0 ? 'bg-accent/10 text-accent line-through' : 'bg-ink/[0.05] text-ink-soft'}`}>{m}</span>)}</div>
          </div>
        ))}
      </div>
      <div className="hidden md:flex flex-col border-l border-ink/[0.07] p-3">
        <p className="flex items-center gap-1.5 text-[0.72rem] font-semibold text-ink mb-3"><CrewMark agent="compass" size={16} /> Compass Chat</p>
        <div className="flex-1 flex flex-col justify-end gap-2">
          <p className="ml-auto max-w-[90%] rounded-[12px_12px_4px_12px] border border-accent/20 bg-gradient-to-b from-sky-soft to-mist px-2.5 py-1.5 text-[0.66rem] text-ink">Am I on pace for March?</p>
          <p className="text-[0.66rem] leading-relaxed text-ink">Yes. You are two long runs ahead of plan. Keep Sunday at 16k.</p>
        </div>
        <span className="mt-3 h-7 rounded-full bg-white/90 border border-white shadow-sm px-3 flex items-center text-[0.62rem] text-ink-soft">Ask Compass about your goals</span>
      </div>
    </div>
  )
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[10rem_minmax(0,1fr)] gap-2.5 p-3 h-full">
      <div className={`${card} p-2.5 hidden md:block`}>
        <p className={`${label} text-accent mb-1.5`}>Projects</p>
        {[['Walnut bookshelf', 5, true], ['Reunion dinner', 4, false], ['Investor update', 3, false], ['O-Chem II', 9, false]].map(([n, c, on]) => (
          <p key={n as string} className={`flex justify-between text-[0.66rem] px-2 py-1.5 rounded-lg ${on ? 'bg-accent/10 text-accent font-semibold' : 'text-ink'}`}><span className="truncate">{n}</span><span className="opacity-60">{c}</span></p>
        ))}
      </div>
      <div className={`${card} p-3.5`}>
        <div className="flex items-start justify-between mb-2">
          <div><p className={`${label} text-copper`}>Hobby</p><p className="font-display font-bold text-lg text-ink leading-tight">Walnut bookshelf</p></div>
          <p className="text-right"><span className="font-display font-bold text-lg text-ink">40%</span><span className="block text-[0.56rem] text-ink-soft">2 of 5 done</span></p>
        </div>
        <Bar v={40} tone="copper" />
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-3 mt-3">
          <div>
            {[['Measure the alcove', true], ['Cut list and materials', true], ['Order walnut boards', false], ['Cut and sand · Sat 2 pm', false], ['Assemble and oil', false]].map(([n, d]) => (
              <div key={n as string} className={row}><Tick done={d as boolean} /><span className={`text-[0.68rem] truncate ${d ? 'line-through text-ink-soft' : 'text-ink'}`}>{n}</span></div>
            ))}
          </div>
          <div className="hidden sm:block">
            <p className={`${label} text-ink-soft mb-1.5`}>Files</p>
            {['Cut list.pdf', 'Alcove sketch.png', 'Lumber quote.pdf'].map((f) => <p key={f} className="flex items-center gap-1.5 text-[0.64rem] text-ink py-[3px]"><Icon.doc className="w-3 h-3 text-accent" />{f}</p>)}
            <p className={`${label} text-ink-soft mt-2.5 mb-1`}>Budget</p>
            <p className="font-display font-bold text-base text-ink leading-none">$312</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Journal ──────────────────────────────────────────────────────────────────

function Journal() {
  return (
    <div className="relative h-full min-h-[16rem] px-5 md:pl-16 py-4" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0 25px, rgba(61,100,174,0.13) 25px 26px)' }}>
      <span className="hidden md:block absolute left-11 inset-y-0 w-px bg-[#C2453A]/40" aria-hidden="true" />
      <p className={`${label} text-accent`}>Monday, November 16</p>
      <p className="font-display font-bold text-lg text-ink leading-[26px] mb-[26px]">A good start to the week.</p>
      <div className="text-[0.74rem] leading-[26px] text-ink max-w-lg">
        <p>Ran before the standup. Legs felt better than last Monday.</p>
        <p>Investor update is close. The churn number still needs a second look.</p>
        <p>Dana says the Loft can do the 12th. Waiting on two RSVPs.</p>
      </div>
      <div className={`${card} mt-[26px] p-3 max-w-md`}>
        <p className={`${label} text-accent mb-1 flex items-center gap-1.5`}><KeelMark size={11} /> End of day</p>
        <p className="text-[0.68rem] leading-relaxed text-ink">4 of 5 done. Walnut order moved to tomorrow. Long run stays Sunday.</p>
      </div>
    </div>
  )
}

// ─── Crew ─────────────────────────────────────────────────────────────────────

function Crew() {
  const core: [string, string, string, React.ReactNode][] = [
    ['Zoe', 'Skipper', 'Routing 3 jobs', <KeelMark key="z" size={18} />],
    ['Compass', 'Navigator', 'Watching 3 goals', <CrewMark key="c" agent="compass" size={22} />],
    ['Task Manager', 'First mate', 'Planned today · 6:40 am', <CrewMark key="t" agent="task-manager" size={22} />],
  ]
  const jobs: [string, string, string, number][] = [['Researcher', 'Venue shortlist', 'In review', 100], ['Writer', 'Investor update · v2', 'Drafting', 70], ['Analyst', 'O-Chem week 1 guide', 'Working', 45], ['Builder', 'Shelf cut list', 'Queued', 0]]
  return (
    <div className="p-3 bg-chart h-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-2.5">
        {core.map(([n, r, st, mark]) => (
          <div key={n} className={`${card} p-3`}>
            <div className="flex items-center gap-2 mb-2"><span className="w-8 h-8 rounded-xl bg-mist flex items-center justify-center">{mark}</span><div><p className="font-display font-bold text-[0.84rem] text-ink leading-tight">{n}</p><p className={`${label} !text-[0.5rem] text-accent`}>{r}</p></div></div>
            <p className="flex items-center gap-1.5 text-[0.62rem] text-ink-soft"><span className="w-1.5 h-1.5 rounded-full bg-[#3FA672]" />{st}</p>
          </div>
        ))}
      </div>
      <div className={`${card} p-3`}>
        <Head k="Specialists" t="Jobs running" />
        {jobs.map(([who, job, st, v]) => (
          <div key={job} className={`${row} gap-3`}>
            <Avatar name={who[0]} tone={v === 100 ? 'sand' : 'mist'} />
            <span className="text-[0.68rem] text-ink flex-1 truncate"><span className="font-semibold">{who}</span> · {job}</span>
            <span className="hidden sm:block w-20"><Bar v={v} /></span>
            <span className={`${label} !text-[0.5rem] w-16 text-right ${v === 100 ? 'text-copper' : 'text-ink-soft'}`}>{st}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export const SCREENS = { overview: Overview, planner: Planner, tasks: Tasks, goals: Goals, projects: Projects, journal: Journal, crew: Crew }
