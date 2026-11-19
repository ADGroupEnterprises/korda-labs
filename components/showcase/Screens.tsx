'use client'

/* The seven app screens behind the rail, drawn from the real Keel shell and filled with the same
   week the chat examples use. Renderings of intent, not screenshots. */

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon, label, Avatar } from '@/components/showcase/KeelUI'
import { PINS, PinTile } from '@/components/showcase/Pins'
import { KeelMark, CrewMark } from '@/components/marks/Brand'

/** Some screens have two views. Show the first, then switch once, the way a person would. */
function useFlip(ms: number) {
  const [v, setV] = useState(0)
  useEffect(() => { const t = setTimeout(() => setV(1), ms); return () => clearTimeout(t) }, [ms])
  return v
}
function Fade({ k, children, className = '' }: { k: string | number; children: React.ReactNode; className?: string }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={k} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, transition: { duration: 0.14 } }} transition={{ duration: 0.3 }} className={className}>{children}</motion.div>
    </AnimatePresence>
  )
}
function Seg({ items, on }: { items: string[]; on: number }) {
  return <span className="flex h-7 rounded-lg border border-ink/10 bg-white/60 p-0.5 text-[0.62rem]">{items.map((v, i) => <span key={v} className={`px-2.5 flex items-center rounded-md transition-colors duration-300 ${i === on ? 'bg-accent text-paper font-semibold shadow-sm' : 'text-ink-soft'}`}>{v}</span>)}</span>
}

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
      <div className="flex items-baseline gap-2.5 mb-2.5">
        <p className="font-display font-bold text-xl text-ink leading-none">Good morning</p>
        <p className="text-[0.66rem] text-ink-soft">Monday, November 16</p>
      </div>
      {/* Pinned surfaces sit above everything else: the same pins as the phone. */}
      <div className="flex items-center justify-between mb-1.5"><p className={`${label} text-ink-soft`}>Pinned</p><Icon.pin className="w-3 h-3 text-ink-soft" /></div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-3">
        {PINS.map((p, i) => <PinTile key={p.id} pin={p} className={`h-[4.3rem] ${i > 2 ? 'hidden md:block' : ''}`} />)}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <div className={`${card} p-3`}>
          <Head k="Today’s page" t="Mon, Nov 16" link="Open Planner" />
          {[['7:00', 'Easy run · 5k', true], ['9:00', 'Deep work: investor update', false], ['4:00', 'Venue call · The Loft', false]].map(([t, n, d]) => (
            <div key={n as string} className={row}><Tick done={d as boolean} /><span className={`text-[0.7rem] flex-1 truncate ${d ? 'line-through text-ink-soft' : 'text-ink'}`}>{n}</span><span className={`${label} text-ink-soft`}>{t}</span></div>
          ))}
        </div>
        <div className={`${card} p-3`}>
          <Head k="Compass" t="Goal progress" link="All goals" />
          {[['Half marathon · Mar 14', 62], ['Ship v1', 48], ['O-Chem II · Dec 12', 30]].map(([n, v]) => (
            <div key={n as string} className="grid grid-cols-[minmax(0,1fr)_4.5rem_2rem] items-center gap-2 py-[5px]"><span className="text-[0.66rem] text-ink truncate">{n}</span><Bar v={v as number} /><span className="text-[0.64rem] font-semibold tabular-nums text-right">{v}%</span></div>
          ))}
        </div>
        <div className={`${card} p-3 hidden md:block`}>
          <Head k="Awaiting your eyes" t="Tasks in review" link="Open board" />
          {[['Investor update', 'Draft v2', 'Writer'], ['Venue shortlist', '3 options', 'Researcher']].map(([n, m, a]) => (
            <div key={n} className={row}><span className="w-1 h-3.5 rounded-full bg-accent/70" /><span className="text-[0.7rem] flex-1 truncate text-ink">{n} <span className="text-ink-soft">· {m}</span></span><span className="px-1.5 py-0.5 rounded-full bg-mist text-accent text-[0.56rem]">{a}</span></div>
          ))}
        </div>
        <div className={`${card} p-3 hidden md:block`}>
          <Head k="Don’t miss" t="Upcoming &amp; overdue" link="Open tasks" />
          {[['Reunion RSVPs close', 'Fri', false], ['Return library books', 'Overdue', true]].map(([n, m, late]) => (
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

const TASK_ROWS: [string, string, string, string][] = [
  ['Draft investor update', 'Writer', 'In progress', 'Today'], ['Week 1 study guide', 'Analyst', 'In progress', 'Tue'], ['Compare 3 venues', 'Researcher', 'Assigned', 'Wed'],
  ['Venue shortlist', 'Researcher', 'Review', 'Today'], ['Cut list for shelf', 'Builder', 'Assigned', 'Sat'], ['Reply to Jamie', 'You', 'Inbox', 'Today'], ['Book dentist', 'You', 'Inbox', 'Fri'],
]

function Tasks() {
  const view = useFlip(3000) // board, then detail
  return (
    <div className="grid grid-cols-1 md:grid-cols-[8.5rem_minmax(0,1fr)] gap-2.5 p-3 h-full">
      {/* The same two-part filter pane as the Planner: lists on top, projects under. */}
      <div className={`${card} p-2.5 hidden md:block`}>
        <p className={`${label} text-accent mb-1.5`}>Lists</p>
        {[['All tasks', 23], ['Mine', 6], ['With the crew', 9], ['In review', 2]].map(([n, c], i) => (
          <p key={n as string} className={`flex justify-between text-[0.66rem] px-2 py-1 rounded-lg ${i === 0 ? 'bg-accent text-paper font-semibold' : 'text-ink'}`}><span>{n}</span><span className="tabular-nums opacity-70">{c}</span></p>
        ))}
        <p className={`${label} text-accent mt-3 mb-1.5`}>Projects</p>
        {[['Walnut bookshelf', 5], ['Reunion dinner', 4], ['Investor update', 3], ['O-Chem II', 9]].map(([n, c]) => (
          <p key={n as string} className="flex justify-between text-[0.66rem] px-2 py-1 text-ink"><span className="truncate">{n}</span><span className="tabular-nums opacity-60">{c}</span></p>
        ))}
        <p className={`${label} text-accent mt-3 mb-1.5`}>Filter</p>
        <p className="flex flex-wrap gap-1">{['Due this week', 'Has agent'].map((f) => <span key={f} className="px-1.5 py-0.5 rounded-full bg-ink/[0.05] text-[0.54rem] text-ink-soft">{f}</span>)}</p>
      </div>
      <div className="flex flex-col min-w-0 min-h-0">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="flex-1 h-7 rounded-lg bg-white/80 border border-white px-2.5 flex items-center text-[0.66rem] text-ink-soft">New task title</span>
          <span className="h-7 px-3 rounded-lg bg-accent text-paper text-[0.66rem] font-semibold flex items-center">Create</span>
          <Seg items={['Board', 'Detail']} on={view} />
        </div>
        <Fade k={view} className="flex-1 min-h-0">
          {view === 0 ? (
            <div className="h-full grid grid-cols-2 md:grid-cols-5 gap-2">
              {BOARD.map(([k, t, edge, items], ci) => (
                <div key={t} className={`${card} p-2 border-l-2 ${edge} ${ci > 1 ? 'hidden md:block' : ''}`}>
                  <p className={`${label} !text-[0.5rem] text-accent`}>{k}</p>
                  <p className="font-display font-bold text-[0.76rem] text-ink mb-2 flex justify-between">{t}<span className="text-ink-soft font-sans font-normal text-[0.6rem]">{items.length}</span></p>
                  {items.map(([n, who]) => (
                    <div key={n} className="rounded-xl bg-paper border border-ink/[0.06] p-2 mb-1.5">
                      <p className="text-[0.64rem] leading-snug text-ink mb-1.5">{n}</p>
                      <span className={`inline-block px-1.5 py-0.5 rounded-full text-[0.52rem] ${who === 'You' ? 'bg-sand text-copper' : 'bg-mist text-accent'}`}>{who}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full grid grid-cols-1 md:grid-cols-[9.5rem_minmax(0,1fr)] gap-2">
              {/* Narrow second menu: the tasks in the current list */}
              <div className={`${card} p-2 hidden md:block overflow-hidden`}>
                {TASK_ROWS.map(([n, who, , due], i) => (
                  <div key={n} className={`px-2 py-1.5 rounded-lg mb-0.5 ${i === 0 ? 'bg-accent/[0.09]' : ''}`}>
                    <p className={`text-[0.64rem] leading-tight truncate ${i === 0 ? 'text-accent font-semibold' : 'text-ink'}`}>{n}</p>
                    <p className="flex justify-between text-[0.52rem] text-ink-soft mt-0.5"><span>{who}</span><span className={`${label} !text-[0.46rem]`}>{due}</span></p>
                  </div>
                ))}
              </div>
              {/* The task itself */}
              <div className={`${card} p-3.5 overflow-hidden`}>
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div className="min-w-0">
                    <p className="flex items-center gap-1.5 mb-1"><span className="px-2 py-0.5 rounded-full bg-accent text-paper text-[0.54rem] font-semibold">In progress</span><span className="px-2 py-0.5 rounded-full bg-mist text-accent text-[0.54rem]">Writer</span><span className="px-2 py-0.5 rounded-full bg-sand text-copper text-[0.54rem]">High</span></p>
                    <p className="font-display font-bold text-[1.05rem] text-ink leading-tight">Draft investor update</p>
                  </div>
                  <span className="h-6 px-2.5 rounded-full bg-white border border-ink/10 text-[0.58rem] text-ink flex items-center gap-1 whitespace-nowrap flex-shrink-0"><KeelMark size={10} /> Chat with Zoe</span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 mb-2.5">
                  {[['Due', 'Fri, Nov 20'], ['Planned', 'Today 9:00–11:00'], ['Duration', '2 h'], ['Also planned', 'Tue 2:00 pm'], ['Project', 'Investor update'], ['List', 'Work'], ['Linked goal', 'Ship v1'], ['Depends on', 'Stripe numbers ✓']].map(([k, v]) => (
                    <p key={k} className="rounded-xl bg-paper border border-ink/[0.06] px-2 py-1.5 min-w-0"><span className={`${label} !text-[0.46rem] text-ink-soft block`}>{k}</span><span className={`block text-[0.64rem] font-semibold truncate ${k === 'Linked goal' ? 'text-accent' : 'text-ink'}`}>{v}</span></p>
                  ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)] gap-3">
                  <div>
                    <p className={`${label} !text-[0.5rem] text-ink-soft mb-1`}>Notes</p>
                    <p className="text-[0.62rem] leading-relaxed text-ink rounded-xl bg-sand/60 px-2.5 py-1.5 mb-2">November numbers, two pilot wins, the hiring plan. Match October’s tone. Double-check churn.</p>
                    <p className={`${label} !text-[0.5rem] text-ink-soft mb-1`}>Steps</p>
                    {[['Pull numbers from Stripe', true], ['Write draft v2', true], ['Your approval', false]].map(([n, d]) => (
                      <div key={n as string} className="flex items-center gap-2 py-[2px]"><Tick done={d as boolean} /><span className={`text-[0.62rem] ${d ? 'line-through text-ink-soft' : 'text-ink'}`}>{n}</span></div>
                    ))}
                  </div>
                  <div className="hidden lg:block">
                    <p className={`${label} !text-[0.5rem] text-ink-soft mb-1`}>Deliverables</p>
                    <p className="flex items-center gap-1.5 text-[0.62rem] text-ink mb-2"><Icon.doc className="w-3 h-3 text-accent" />Investor update v2.md</p>
                    <p className={`${label} !text-[0.5rem] text-ink-soft mb-1`}>Activity</p>
                    {['9:02 · Writer started draft v2', '9:14 · Numbers checked', '9:20 · Sent to review'].map((l) => <p key={l} className="text-[0.56rem] text-ink-soft leading-relaxed">{l}</p>)}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </div>
    </div>
  )
}

// ─── Goals ────────────────────────────────────────────────────────────────────

/* The goal map. Big nodes are goals, mid nodes are milestones, small ones are the habits and
   tasks that feed them. Shared nodes are the point: one long run serves two things. */
type N = { id: string; x: number; y: number; t: string; k: 'goal' | 'mile' | 'leaf'; tone?: string }
const GN: N[] = [
  { id: 'run', x: 22, y: 30, t: 'Half marathon', k: 'goal', tone: 'bg-accent text-paper' },
  { id: 'ship', x: 70, y: 26, t: 'Ship v1', k: 'goal', tone: 'bg-ink text-paper' },
  { id: 'chem', x: 50, y: 76, t: 'O-Chem II', k: 'goal', tone: 'bg-copper text-paper' },
  { id: 'm1', x: 8, y: 62, t: '16k long run', k: 'mile' }, { id: 'm2', x: 33, y: 8, t: 'Race pace', k: 'mile' },
  { id: 'm3', x: 90, y: 50, t: 'Billing', k: 'mile' }, { id: 'm4', x: 88, y: 10, t: 'Launch', k: 'mile' },
  { id: 'm5', x: 24, y: 88, t: 'Practice exams', k: 'mile' }, { id: 'm6', x: 76, y: 90, t: 'Spectroscopy', k: 'mile' },
  { id: 'l1', x: 46, y: 44, t: 'Morning blocks', k: 'leaf' }, { id: 'l2', x: 30, y: 56, t: 'Sleep 7h', k: 'leaf' }, { id: 'l3', x: 66, y: 56, t: 'Investor update', k: 'leaf' },
]
const GE: [string, string][] = [['run', 'm1'], ['run', 'm2'], ['ship', 'm3'], ['ship', 'm4'], ['chem', 'm5'], ['chem', 'm6'], ['l1', 'run'], ['l1', 'ship'], ['l1', 'chem'], ['l2', 'run'], ['l2', 'chem'], ['l3', 'ship'], ['l3', 'chem']]

function Web({ nodes, edges, hot }: { nodes: N[]; edges: [string, string][]; hot?: string }) {
  const at = (id: string) => nodes.find((n) => n.id === id)!
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
        {edges.map(([a, b]) => { const p = at(a), q = at(b); const on = hot && (a === hot || b === hot); return <line key={a + b} x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke={on ? '#3D64AE' : '#0F2942'} strokeOpacity={on ? 0.7 : 0.16} strokeWidth={on ? 1.6 : 1} vectorEffect="non-scaling-stroke" /> })}
      </svg>
      {nodes.map((n) => (
        <span key={n.id} className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
          {n.k === 'goal'
            ? <span className={`px-2.5 py-1 rounded-full font-display font-bold text-[0.66rem] whitespace-nowrap shadow-[0_8px_16px_-8px_rgba(15,41,66,0.6)] ring-2 ring-white ${n.tone}`}>{n.t}</span>
            : <><span className={`rounded-full ring-2 ring-white ${n.id === hot ? 'w-3.5 h-3.5 bg-accent shadow-[0_0_0_5px_rgba(61,100,174,0.18)]' : n.k === 'mile' ? 'w-2.5 h-2.5 bg-sky' : 'w-2 h-2 bg-brass'}`} /><span className={`mt-0.5 text-[0.52rem] whitespace-nowrap ${n.id === hot ? 'text-accent font-semibold' : 'text-ink-soft'}`}>{n.t}</span></>}
        </span>
      ))}
    </div>
  )
}

function Goals() {
  const view = useFlip(3000) // map, then list
  const goals: [string, string, number, string[]][] = [
    ['Run a half marathon', 'Mar 14', 62, ['Base built', '16k long run', 'Race pace']],
    ['Ship v1', 'Jan 29', 48, ['Beta', 'Billing', 'Launch']],
    ['Pass O-Chem II', 'Dec 12', 30, ['Ch. 7–10', 'Spectroscopy', 'Practice exams']],
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_13rem] h-full">
      <div className="p-3 bg-chart flex flex-col min-h-[16rem]">
        <div className="flex justify-between items-center mb-2.5"><Seg items={['Map', 'List']} on={view} /><span className="h-7 px-2.5 rounded-lg bg-accent text-paper text-[0.62rem] font-semibold flex items-center">Create goal</span></div>
        <Fade k={view} className="flex-1 min-h-0">
          {view === 0 ? <div className="h-full min-h-[13rem] px-6 py-3"><Web nodes={GN} edges={GE} hot="l1" /></div> : (
            <div>
              {goals.map(([n, due, v, ms]) => (
                <div key={n} className={`${card} p-2.5 mb-2`}>
                  <div className="flex items-baseline justify-between mb-1.5"><p className="font-display font-bold text-[0.82rem] text-ink">{n}</p><p className={`${label} text-ink-soft`}>{due} · {v}%</p></div>
                  <Bar v={v} />
                  <div className="flex gap-1.5 mt-2">{ms.map((m, i) => <span key={m} className={`px-2 py-0.5 rounded-full text-[0.56rem] ${i === 0 ? 'bg-accent/10 text-accent line-through' : 'bg-ink/[0.05] text-ink-soft'}`}>{m}</span>)}</div>
                </div>
              ))}
            </div>
          )}
        </Fade>
      </div>
      <div className="hidden md:flex flex-col border-l border-ink/[0.07] p-3">
        <p className="flex items-center gap-1.5 text-[0.72rem] font-semibold text-ink mb-3"><CrewMark agent="compass" size={16} /> Compass Chat</p>
        <div className="flex-1 flex flex-col justify-end gap-2">
          <p className="ml-auto max-w-[90%] rounded-[12px_12px_4px_12px] border border-accent/20 bg-gradient-to-b from-sky-soft to-mist px-2.5 py-1.5 text-[0.66rem] text-ink">What do my mornings feed?</p>
          <p className="text-[0.66rem] leading-relaxed text-ink">All three goals. Morning blocks carry the run, v1 and O-Chem, so protect them first.</p>
        </div>
        <span className="mt-3 h-7 rounded-full bg-white/90 border border-white shadow-sm px-3 flex items-center text-[0.62rem] text-ink-soft">Ask Compass about your goals</span>
      </div>
    </div>
  )
}

// ─── Projects ─────────────────────────────────────────────────────────────────

const PROJECT_TASKS: [string, [string, string, string][]][] = [
  ['In flight', [['Order walnut boards', 'You', 'Thu'], ['Cut and sand', 'You', 'Sat 2 pm']]],
  ['Awaiting you', [['Approve lumber quote', 'Builder', 'Today']]],
  ['Done', [['Measure the alcove', 'You', ''], ['Cut list and materials', 'Builder', '']]],
]

function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[8.5rem_minmax(0,1fr)_13rem] h-full">
      {/* Project list */}
      <div className="hidden md:block border-r border-ink/[0.07] p-2.5">
        <p className={`${label} text-accent mb-1.5 flex justify-between`}>Projects <span className="text-ink-soft">+</span></p>
        {[['Walnut bookshelf', '#9A6646', true], ['Reunion dinner', '#F2B8AE', false], ['Investor update', '#3D64AE', false], ['O-Chem II', '#A7D7FF', false]].map(([n, c, on]) => (
          <p key={n as string} className={`flex items-center gap-1.5 text-[0.64rem] px-2 py-1.5 rounded-lg ${on ? 'bg-accent/10 text-accent font-semibold' : 'text-ink'}`}><span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c as string }} /><span className="truncate">{n}</span></p>
        ))}
      </div>

      {/* The project */}
      <div className="p-3 bg-chart min-w-0 overflow-hidden">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="min-w-0">
            <p className={`${label} !text-[0.5rem] text-copper`}>Goal-linked project</p>
            <p className="font-display font-bold text-[1.1rem] text-ink leading-tight flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-copper" />Walnut bookshelf</p>
          </div>
          <span className="px-2 py-1 rounded-full bg-white/90 border border-white shadow-sm text-[0.56rem] text-accent whitespace-nowrap">↗ Goal · Make things</span>
        </div>
        {/* Four numbers, as the real page has them */}
        <div className="grid grid-cols-4 gap-1.5 mb-2">
          {[['Total', '5', false], ['In flight', '2', true], ['Awaiting you', '1', false], ['Done', '2', false]].map(([k, v, hot]) => (
            <p key={k as string} className={`${card} px-2.5 py-1.5`}><span className={`font-display font-bold text-lg leading-none block ${hot ? 'text-copper' : 'text-ink'}`}>{v}</span><span className={`${label} !text-[0.46rem] text-ink-soft`}>{k}</span></p>
          ))}
        </div>
        <div className="mb-2.5"><Bar v={40} tone="copper" /></div>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)] gap-2">
          <div className={`${card} p-2.5`}>
            {PROJECT_TASKS.map(([group, items]) => (
              <div key={group} className="mb-1.5 last:mb-0">
                <p className={`${label} !text-[0.48rem] ${group === 'Awaiting you' ? 'text-copper' : 'text-ink-soft'} mb-0.5`}>{group}</p>
                {items.map(([n, who, due]) => (
                  <div key={n} className="flex items-center gap-2 py-[2px]">
                    <Tick done={group === 'Done'} />
                    <span className={`text-[0.63rem] flex-1 truncate ${group === 'Done' ? 'line-through text-ink-soft' : 'text-ink'}`}>{n}</span>
                    <span className={`px-1.5 rounded-full text-[0.5rem] ${who === 'You' ? 'bg-sand text-copper' : 'bg-mist text-accent'}`}>{who}</span>
                    {due && <span className={`${label} !text-[0.46rem] text-ink-soft w-10 text-right`}>{due}</span>}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex flex-col gap-2">
            <div className={`${card} p-2.5`}>
              <p className={`${label} !text-[0.48rem] text-ink-soft mb-1`}>Details</p>
              {[['Due', 'Dec 6'], ['Budget', '$312'], ['Crew', 'Builder']].map(([k, v]) => <p key={k} className="flex justify-between text-[0.62rem] py-[1px]"><span className="text-ink-soft">{k}</span><span className="font-semibold text-ink">{v}</span></p>)}
            </div>
            <div className={`${card} p-2.5`}>
              <p className={`${label} !text-[0.48rem] text-ink-soft mb-1`}>Notes</p>
              <p className="text-[0.6rem] leading-snug text-ink mb-1.5">Alcove is 91 cm. Leave 3 mm each side. Oil, not varnish.</p>
              <p className={`${label} !text-[0.48rem] text-ink-soft mb-0.5`}>Docs</p>
              {['Cut list.pdf', 'Alcove sketch.png'].map((f) => <p key={f} className="flex items-center gap-1.5 text-[0.6rem] text-ink py-[1px]"><Icon.doc className="w-3 h-3 text-accent" />{f}</p>)}
            </div>
          </div>
        </div>
      </div>

      {/* Chat that knows this project */}
      <div className="hidden md:flex flex-col border-l border-ink/[0.07] p-3">
        <p className="flex items-center gap-1.5 text-[0.72rem] font-semibold text-ink"><KeelMark size={14} /> Project chat</p>
        <p className="text-[0.56rem] text-ink-soft mb-3">Walnut bookshelf</p>
        <div className="flex-1 flex flex-col justify-end gap-2">
          <p className="ml-auto max-w-[92%] rounded-[12px_12px_4px_12px] border border-accent/20 bg-gradient-to-b from-sky-soft to-mist px-2.5 py-1.5 text-[0.64rem] text-ink">What’s left before Saturday?</p>
          <p className="text-[0.64rem] leading-relaxed text-ink">Order the boards by Thursday and approve the lumber quote. The cut list is ready.</p>
        </div>
        <span className="mt-3 h-7 rounded-full bg-white/90 border border-white shadow-sm px-3 flex items-center text-[0.6rem] text-ink-soft">Ask about this project</span>
      </div>
    </div>
  )
}

// ─── Journal ──────────────────────────────────────────────────────────────────

/* The note graph: every dot is a note; a line means one links to the other. */
const JN: N[] = [
  { id: 'today', x: 50, y: 46, t: 'Mon, Nov 16', k: 'leaf' },
  { id: 'a', x: 26, y: 26, t: 'Half marathon', k: 'mile' }, { id: 'b', x: 76, y: 24, t: 'Investor update', k: 'mile' }, { id: 'c', x: 72, y: 74, t: 'Reunion dinner', k: 'mile' }, { id: 'd', x: 24, y: 74, t: 'O-Chem II', k: 'mile' },
  { id: 'e', x: 8, y: 46, t: 'Sun, Nov 15', k: 'leaf' }, { id: 'f', x: 92, y: 48, t: 'Churn', k: 'leaf' }, { id: 'g', x: 90, y: 86, t: 'Dana', k: 'leaf' }, { id: 'h', x: 52, y: 90, t: 'The Loft', k: 'leaf' },
  { id: 'i', x: 46, y: 10, t: 'Race pace', k: 'leaf' }, { id: 'j', x: 8, y: 14, t: 'Shoes', k: 'leaf' }, { id: 'k', x: 6, y: 90, t: 'Ch. 7', k: 'leaf' }, { id: 'l', x: 94, y: 8, t: 'Pilots', k: 'leaf' },
]
const JE: [string, string][] = [['today', 'a'], ['today', 'b'], ['today', 'c'], ['a', 'e'], ['a', 'i'], ['a', 'j'], ['b', 'f'], ['b', 'l'], ['c', 'g'], ['c', 'h'], ['d', 'k'], ['d', 'e'], ['today', 'e'], ['g', 'h'], ['i', 'e']]

function Journal() {
  const view = useFlip(3200) // graph, then the note it opens
  return (
    <div className="grid grid-cols-1 md:grid-cols-[8.5rem_minmax(0,1fr)] h-full">
      <div className="hidden md:block border-r border-ink/[0.07] p-2.5">
        <Seg items={['Graph', 'Note']} on={view} />
        <p className={`${label} text-accent mt-3 mb-1.5`}>Recent</p>
        {['Mon, Nov 16', 'Sun, Nov 15', 'Half marathon', 'Reunion dinner', 'Investor update'].map((n, i) => (
          <p key={n} className={`text-[0.64rem] px-2 py-1 rounded-lg truncate ${i === 0 ? 'bg-accent/10 text-accent font-semibold' : 'text-ink'}`}>{n}</p>
        ))}
      </div>
      <Fade k={view} className="min-h-[16rem] h-full">
        {view === 0 ? (
          <div className="h-full bg-chart px-8 py-5"><Web nodes={JN} edges={JE} hot="today" /></div>
        ) : (
          <div className="relative h-full px-5 md:pl-14 py-4" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0 25px, rgba(61,100,174,0.13) 25px 26px)' }}>
            <span className="hidden md:block absolute left-9 inset-y-0 w-px bg-[#C2453A]/40" aria-hidden="true" />
            <p className={`${label} text-accent leading-[26px]`}>Monday, November 16</p>
            <p className="font-display font-bold text-lg text-ink leading-[26px] mb-[26px]">A good start to the week.</p>
            <div className="text-[0.72rem] leading-[26px] text-ink max-w-lg">
              <p>Ran before the standup. Legs felt better than last Monday.</p>
              <p><span className="text-accent font-medium">Investor update</span> is close. The churn number needs a second look.</p>
              <p>Dana says the Loft can do the 12th. Waiting on two RSVPs.</p>
            </div>
            <p className="flex flex-wrap gap-1.5 mt-[13px] mb-[13px]">{['Half marathon', 'Investor update', 'Reunion dinner'].map((l) => <span key={l} className="px-2 py-0.5 rounded-full bg-white/90 border border-white shadow-sm text-[0.56rem] text-accent">↗ {l}</span>)}</p>
            <div className={`${card} p-2.5 max-w-md`}>
              <p className={`${label} text-accent mb-1 flex items-center gap-1.5`}><KeelMark size={11} /> End of day</p>
              <p className="text-[0.66rem] leading-relaxed text-ink">4 of 5 done. Walnut order moved to tomorrow. Long run stays Sunday.</p>
            </div>
          </div>
        )}
      </Fade>
    </div>
  )
}

// ─── Agents ───────────────────────────────────────────────────────────────────

function Agents() {
  const core: [string, string, string, React.ReactNode][] = [
    ['Zoe', 'Orchestrator', 'Routing 3 jobs', <KeelMark key="z" size={18} />],
    ['Compass', 'Goals Navigator', 'Watching 3 goals', <CrewMark key="c" agent="compass" size={22} />],
    ['Bob', 'Task Manager', 'Planned today · 6:40 am', <CrewMark key="t" agent="task-manager" size={22} />],
  ]
  const crew: [string, string, string, number][] = [['Researcher', 'Venue shortlist', 'In review', 100], ['Writer', 'Investor update · v2', 'Drafting', 70], ['Analyst', 'O-Chem week 1 guide', 'Working', 45], ['Builder', 'Shelf cut list', 'Queued', 0], ['Designer', 'Idle', 'Ready', 0]]
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
        <p className="font-display font-bold text-[0.9rem] leading-tight text-ink mb-1.5">Crew</p>
        {crew.map(([who, job, st, v]) => (
          <div key={who} className={`${row} gap-3`}>
            <Avatar name={who[0]} tone={v === 100 ? 'sand' : 'mist'} />
            <span className="text-[0.68rem] text-ink flex-1 truncate"><span className="font-semibold">{who}</span> <span className="text-ink-soft">· {job}</span></span>
            <span className="hidden sm:block w-20">{st !== 'Ready' && <Bar v={v} />}</span>
            <span className={`${label} !text-[0.5rem] w-16 text-right ${v === 100 ? 'text-copper' : 'text-ink-soft'}`}>{st}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export const SCREENS = { overview: Overview, planner: Planner, tasks: Tasks, goals: Goals, projects: Projects, journal: Journal, crew: Agents }
