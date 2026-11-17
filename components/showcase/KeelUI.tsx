'use client'

/* Keel product renderings for the marketing site.
   Drawn from the real app shell (nav rail, command bar, chat with a quiet "Thinking" state,
   canvas where finished surfaces simply appear) in the soft-glass direction.
   Renderings of intent, not screenshots; the data is a fictional account. */

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { KeelMark } from '@/components/marks/Brand'
import { SCREENS } from '@/components/showcase/Screens'

// ─── Timeline hook ────────────────────────────────────────────────────────────

export function useCycle(count: number, ms: number, frozen: boolean) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (frozen) return
    const t = setInterval(() => setI((v) => (v + 1) % count), ms)
    return () => clearInterval(t)
  }, [count, ms, frozen])
  return i
}

export function usePhase(marks: number[], key: number, frozen: boolean) {
  const [p, setP] = useState(frozen ? marks.length : 0)
  useEffect(() => {
    if (frozen) { setP(marks.length); return }
    setP(0)
    const timers = marks.map((t, idx) => setTimeout(() => setP(idx + 1), t))
    return () => timers.forEach(clearTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, frozen])
  return p
}

// ─── Icons (line, 1.5 stroke — same family as the app's rail) ─────────────────

const ic = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
export const Icon = {
  overview: (p: { className?: string }) => (<svg viewBox="0 0 24 24" className={p.className}><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" {...ic} /><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" {...ic} /><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" {...ic} /><rect x="13.5" y="13.5" width="7" height="7" rx="1.5" {...ic} stroke="#3D64AE" /></svg>),
  planner: (p: { className?: string }) => (<svg viewBox="0 0 24 24" className={p.className}><rect x="3.5" y="5" width="17" height="15.5" rx="2.5" {...ic} /><path d="M3.5 10h17M8 3v4M16 3v4" {...ic} /><circle cx="15.5" cy="15" r="1.4" fill="#3D64AE" /></svg>),
  tasks: (p: { className?: string }) => (<svg viewBox="0 0 24 24" className={p.className}><path d="M9 6h11M9 12h11M9 18h11" {...ic} /><path d="M4 6l1 1 2-2M4 12l1 1 2-2" {...ic} stroke="#3D64AE" /><circle cx="5.2" cy="18" r="1.2" {...ic} /></svg>),
  goals: (p: { className?: string }) => (<svg viewBox="0 0 24 24" className={p.className}><circle cx="12" cy="12" r="8.5" {...ic} /><circle cx="12" cy="12" r="4.5" {...ic} /><circle cx="12" cy="12" r="1.3" fill="#3D64AE" /></svg>),
  projects: (p: { className?: string }) => (<svg viewBox="0 0 24 24" className={p.className}><path d="M12 3.5l8.5 4.5L12 12.5 3.5 8 12 3.5z" {...ic} /><path d="M3.5 12l8.5 4.5L20.5 12M3.5 16l8.5 4.5 8.5-4.5" {...ic} /></svg>),
  journal: (p: { className?: string }) => (<svg viewBox="0 0 24 24" className={p.className}><rect x="5" y="3.5" width="14" height="17" rx="2" {...ic} /><path d="M9 8h6M9 12h6M9 16h3" {...ic} /></svg>),
  crew: (p: { className?: string }) => (<svg viewBox="0 0 24 24" className={p.className}><circle cx="8.5" cy="9" r="3" {...ic} /><circle cx="16" cy="9.5" r="2.5" {...ic} stroke="#3D64AE" /><path d="M3 19c.6-3 2.8-4.5 5.5-4.5S13.400 16 14 19M15 14.600c2.600 0 4.400 1.400 5 4.400" {...ic} /></svg>),
  settings: (p: { className?: string }) => (<svg viewBox="0 0 24 24" className={p.className}><circle cx="12" cy="12" r="3" {...ic} /><path d="M12 3v2.500M12 18.500V21M3 12h2.500M18.500 12H21M5.600 5.600l1.800 1.800M16.600 16.600l1.800 1.800M5.600 18.400l1.800-1.800M16.600 7.400l1.800-1.800" {...ic} /></svg>),
  search: (p: { className?: string }) => (<svg viewBox="0 0 24 24" className={p.className}><circle cx="11" cy="11" r="6.500" {...ic} /><path d="M16 16l4 4" {...ic} /></svg>),
  bell: (p: { className?: string }) => (<svg viewBox="0 0 24 24" className={p.className}><path d="M6 16.500V11a6 6 0 1112 0v5.500l1.500 2h-15l1.500-2zM10 21h4" {...ic} /></svg>),
  pin: (p: { className?: string }) => (<svg viewBox="0 0 24 24" className={p.className}><path d="M9 4h6l-1 5 3 3v2H7v-2l3-3-1-5zM12 14v6" {...ic} /></svg>),
  history: (p: { className?: string }) => (<svg viewBox="0 0 24 24" className={p.className}><path d="M4 12a8 8 0 108-8 8 8 0 00-6 2.700M4 4v3.500h3.500M12 8v4.500l3 1.500" {...ic} /></svg>),
  up: (p: { className?: string }) => (<svg viewBox="0 0 24 24" className={p.className}><path d="M12 19V5M6 11l6-6 6 6" {...ic} strokeWidth={2} /></svg>),
  check: (p: { className?: string }) => (<svg viewBox="0 0 24 24" className={p.className}><path d="M5 12.500l4.500 4.500L19 7.500" {...ic} strokeWidth={2} /></svg>),
  doc: (p: { className?: string }) => (<svg viewBox="0 0 24 24" className={p.className}><path d="M7 3.500h7l4 4V20a.500.500 0 01-.500.500h-10.500A.500.500 0 016.500 20V4a.500.500 0 01.500-.500z" {...ic} /><path d="M14 3.500V8h4M9.500 12h5M9.500 15.500h5" {...ic} /></svg>),
}

// ─── Shared atoms ─────────────────────────────────────────────────────────────

/* Same face as the site's .eyebrow: JetBrains Mono, semibold, uppercase, 0.14em tracking. */
export const label = 'font-mono font-semibold text-[0.56rem] uppercase tracking-[0.14em] whitespace-nowrap'

export function Avatar({ name, tone = 'sky' }: { name: string; tone?: 'sky' | 'sand' | 'ink' | 'blush' | 'mist' }) {
  const tones = { sky: 'bg-sky text-ink', sand: 'bg-sand text-copper', ink: 'bg-ink text-paper', blush: 'bg-blush text-ink', mist: 'bg-mist text-accent' }
  return <span className={`inline-flex w-6 h-6 rounded-full items-center justify-center text-[0.58rem] font-semibold ring-2 ring-white ${tones[tone]}`}>{name}</span>
}

/** A canvas surface: white frosted tile with a title row and a pin affordance. */
export function Surface({ title, meta, className = '', delay = 0, tone = 'white', children }: { title: string; meta?: string; className?: string; delay?: number; tone?: 'white' | 'ink' | 'sky' | 'sand'; children: React.ReactNode }) {
  const tones = {
    white: 'bg-white/90 border border-white shadow-[0_1px_2px_rgba(15,41,66,0.05),0_10px_24px_-14px_rgba(15,41,66,0.22)] text-ink',
    ink: 'bg-ink text-paper shadow-[0_14px_30px_-16px_rgba(15,41,66,0.6)]',
    sky: 'bg-gradient-to-br from-sky-soft to-sky/80 text-ink border border-white/70',
    sand: 'bg-sand text-ink border border-white/70',
  }
  const sub = tone === 'ink' ? 'text-sky' : tone === 'sand' ? 'text-copper' : 'text-accent'
  const dim = tone === 'ink' ? 'text-paper/55' : 'text-ink-soft'
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.34, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`rounded-[1.25rem] p-3.5 ${tones[tone]} ${className}`}
    >
      <div className="flex items-center justify-between mb-2.5">
        <p className={`${label} ${sub}`}>{title}</p>
        <span className={`flex items-center gap-1.5 ${dim}`}>
          {meta && <span className={label}>{meta}</span>}
          <Icon.pin className="w-3 h-3" />
        </span>
      </div>
      {children}
    </motion.div>
  )
}

// ─── Scenes: one ask, one reply, one set of surfaces ──────────────────────────

function RunScene() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const runs: Record<number, [string, string]> = { 1: ['5k', 'Easy'], 3: ['8k', 'Tempo'], 6: ['16k', 'Long'] }
  return (
    <div className="grid grid-cols-6 gap-2.5">
      <Surface title="Training week" meta="Nov 15 – 21" className="col-span-6">
        <div className="grid grid-cols-7 gap-1.5">
          {days.map((d, i) => (
            <div key={i}>
              <p className="text-[0.58rem] text-ink-soft text-center mb-1">{d}</p>
              <div className={`h-[3.4rem] rounded-xl px-1.5 py-1.5 flex flex-col justify-end ${runs[i] ? 'bg-accent text-paper' : 'bg-ink/[0.045]'}`}>
                {runs[i] && (<><span className="font-display font-bold text-[0.8rem] leading-none">{runs[i][0]}</span><span className="text-[0.52rem] opacity-80 mt-0.5">{runs[i][1]}</span></>)}
              </div>
            </div>
          ))}
        </div>
      </Surface>
      <Surface title="Goal" tone="ink" delay={0.07} className="col-span-2">
        <div className="flex items-end gap-2">
          <svg viewBox="0 0 36 36" className="w-11 h-11 -rotate-90"><circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="4" /><motion.circle cx="18" cy="18" r="15" fill="none" stroke="#A7D7FF" strokeWidth="4" strokeLinecap="round" strokeDasharray="94.200" initial={{ strokeDashoffset: 94.200 }} animate={{ strokeDashoffset: 94.200 * 0.38 }} transition={{ duration: 0.9, delay: 0.3 }} /></svg>
          <div><p className="font-display font-bold text-xl leading-none">62%</p><p className="text-[0.6rem] text-paper/65 mt-1">Half marathon · Mar 14</p></div>
        </div>
      </Surface>
      <Surface title="Moved to make room" tone="sky" delay={0.14} className="col-span-4">
        {[['Proposal review', 'Thu 4:00 pm'], ['Standup', '9:30 am'], ['Pottery class', 'kept · Tue 6:30']].map(([a, b]) => (
          <div key={a} className="flex items-center justify-between py-[3px]">
            <span className="flex items-center gap-2 text-[0.7rem]"><span className="w-1 h-3.5 rounded-full bg-ink/70" />{a}</span>
            <span className={`${label} text-ink/70`}>{b}</span>
          </div>
        ))}
      </Surface>
    </div>
  )
}

function UpdateScene() {
  return (
    <div className="grid grid-cols-6 gap-2.5">
      <Surface title="Draft · Investor update" meta="v2" className="col-span-4">
        <p className="font-display font-bold text-[0.95rem] leading-tight mb-1.5">November update</p>
        <p className="text-[0.66rem] leading-relaxed text-ink-soft mb-2">Revenue grew for the fourth straight month. Two pilots converted, and the hiring plan is on track for January.</p>
        <div className="space-y-1.5">
          {[100, 92, 96, 70].map((w, i) => <span key={i} className="block h-[5px] rounded-full bg-ink/[0.08]" style={{ width: `${w}%` }} />)}
        </div>
      </Surface>
      <Surface title="This month" tone="ink" delay={0.07} className="col-span-2">
        {[['MRR', '$48.2k', '+11%'], ['Pilots', '2 won', ''], ['Runway', '19 mo', '']].map(([k, v, d]) => (
          <div key={k} className="flex items-baseline justify-between py-[3px]">
            <span className="text-[0.6rem] text-paper/60">{k}</span>
            <span className="text-[0.72rem] font-semibold">{v} {d && <span className="text-sky font-mono text-[0.56rem]">{d}</span>}</span>
          </div>
        ))}
      </Surface>
      <Surface title="Before it sends" tone="sand" delay={0.14} className="col-span-6">
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          {[['Numbers checked against Stripe', true], ['Tone matches October', true], ['Your approval', false]].map(([t, done]) => (
            <span key={t as string} className="flex items-center gap-1.5 text-[0.68rem]">
              <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ${done ? 'bg-copper text-paper' : 'border border-copper/60'}`}>{done && <Icon.check className="w-2.5 h-2.5" />}</span>{t}
            </span>
          ))}
        </div>
      </Surface>
    </div>
  )
}

function StudyScene() {
  const weeks = [['Wk 1', 'Ch. 7–8', 'Alkenes'], ['Wk 2', 'Ch. 9–10', 'Alkynes · Radicals'], ['Wk 3', 'Ch. 11–12', 'Spectroscopy'], ['Wk 4', 'Review', '2 practice exams']]
  return (
    <div className="grid grid-cols-6 gap-2.5">
      <Surface title="Organic Chemistry II" meta="Final · Dec 12" className="col-span-6">
        <div className="grid grid-cols-4 gap-1.5">
          {weeks.map(([w, c, t], i) => (
            <div key={w} className={`rounded-xl p-2 ${i === 0 ? 'bg-accent text-paper' : 'bg-ink/[0.045]'}`}>
              <p className={`${label} ${i === 0 ? 'text-paper/75' : 'text-ink-soft'}`}>{w}</p>
              <p className="font-display font-bold text-[0.8rem] leading-tight mt-1">{c}</p>
              <p className={`text-[0.56rem] mt-0.5 ${i === 0 ? 'text-paper/80' : 'text-ink-soft'}`}>{t}</p>
            </div>
          ))}
        </div>
      </Surface>
      <Surface title="Next session" tone="sky" delay={0.07} className="col-span-3">
        <p className="font-display font-bold text-base leading-none">Tue 8:00 am</p>
        <p className="text-[0.64rem] text-ink/75 mt-1">Ch. 7 problems 1–20 · 60 min</p>
      </Surface>
      <Surface title="Pace" tone="ink" delay={0.14} className="col-span-3">
        <p className="font-display font-bold text-base leading-none">6 hrs / week</p>
        <div className="flex gap-1 mt-2">{[1, 1, 1, 0, 0, 0].map((f, i) => <span key={i} className={`h-1.5 flex-1 rounded-full ${f ? 'bg-sky' : 'bg-white/15'}`} />)}</div>
      </Surface>
    </div>
  )
}

function ReunionScene() {
  const people: [string, 'sky' | 'sand' | 'ink' | 'blush' | 'mist'][] = [['MA', 'sky'], ['JR', 'sand'], ['PS', 'ink'], ['TN', 'blush'], ['LK', 'mist'], ['DO', 'sky'], ['EV', 'sand'], ['RB', 'mist']]
  const grid = [[1, 0, 1, 1], [1, 1, 1, 0], [0, 1, 1, 1], [1, 1, 1, 1], [1, 0, 1, 1], [1, 1, 1, 0]]
  return (
    <div className="grid grid-cols-6 gap-2.5">
      <Surface title="Reunion dinner · who can come" meta="8 invited" className="col-span-4">
        <div className="grid grid-cols-[auto_repeat(4,1fr)] gap-x-1.5 gap-y-1 items-center">
          <span />
          {['Fri 4', 'Sat 5', 'Sat 12', 'Sun 13'].map((d, i) => <span key={d} className={`text-center text-[0.56rem] ${i === 2 ? 'text-accent font-semibold' : 'text-ink-soft'}`}>{d}</span>)}
          {grid.map((row, r) => (
            <div key={r} className="contents">
              <Avatar name={people[r][0]} tone={people[r][1]} />
              {row.map((v, c) => <span key={c} className={`h-4 rounded-md ${v ? (c === 2 ? 'bg-accent' : 'bg-accent/25') : 'bg-ink/[0.05]'}`} />)}
            </div>
          ))}
        </div>
      </Surface>
      <div className="col-span-2 grid gap-2.5 content-start">
        <Surface title="Best date" tone="ink" delay={0.07}>
          <p className="font-display font-bold text-lg leading-none">Sat, Dec 12</p>
          <p className="text-[0.6rem] text-paper/65 mt-1">7 of 8 free</p>
        </Surface>
        <Surface title="RSVPs" tone="sand" delay={0.14}>
          <div className="flex -space-x-1.5">{people.slice(0, 6).map(([n, t]) => <Avatar key={n} name={n} tone={t} />)}</div>
          <p className="text-[0.6rem] text-ink-soft mt-1.5">6 in · 2 waiting</p>
        </Surface>
      </div>
    </div>
  )
}

function ShelfScene() {
  const cuts = [['Sides', '2', '72 × 11¼ in'], ['Shelves', '5', '34½ × 11¼ in'], ['Top', '1', '36 × 12 in'], ['Back slats', '3', '70 × 3½ in']]
  return (
    <div className="grid grid-cols-6 gap-2.5">
      <Surface title="Walnut bookshelf · cut list" meta="11 parts" className="col-span-4">
        {cuts.map(([p, q, s]) => (
          <div key={p} className="grid grid-cols-[1fr_auto_auto] gap-3 items-center py-[5px] border-b border-ink/[0.06] last:border-0">
            <span className="text-[0.7rem] font-medium">{p}</span>
            <span className={`${label} text-ink-soft`}>×{q}</span>
            <span className={`${label} text-ink-soft w-[5.5rem] text-right`}>{s}</span>
          </div>
        ))}
      </Surface>
      <div className="col-span-2 grid gap-2.5 content-start">
        <Surface title="Materials" tone="sand" delay={0.07}>
          <p className="font-display font-bold text-lg leading-none">$312</p>
          <p className="text-[0.6rem] text-ink-soft mt-1">38 board feet · 4/4 walnut</p>
        </Surface>
        <Surface title="Shop time" tone="sky" delay={0.14}>
          <p className="font-display font-bold text-base leading-none">2 Saturdays</p>
          <p className="text-[0.6rem] text-ink/70 mt-1">Blocked · 2–5 pm</p>
        </Surface>
      </div>
    </div>
  )
}

/** Spend by category, as bars. Used on the web canvas and inline in the mobile chat. */
export const SPEND: [string, number][] = [['Dev & hosting', 156], ['Design tools', 124], ['AI', 72], ['Other', 60]]
export function SpendBars({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'space-y-1' : 'space-y-1.5'}>
      {SPEND.map(([k, v], i) => (
        <div key={k} className={`grid ${compact ? 'grid-cols-[3.5rem_1fr_auto]' : 'grid-cols-[4.6rem_1fr_auto]'} items-center gap-2`}>
          <span className={`${compact ? 'text-[0.56rem]' : 'text-[0.64rem]'} text-ink-soft truncate`}>{k}</span>
          <span className="h-[7px] rounded-full bg-ink/[0.06] overflow-hidden">
            <motion.span initial={{ width: 0 }} animate={{ width: `${(v / 156) * 100}%` }} transition={{ duration: 0.6, delay: 0.15 + i * 0.07, ease: 'easeOut' }} className="block h-full rounded-full bg-gradient-to-r from-sky to-accent" />
          </span>
          <span className={`${compact ? 'text-[0.56rem]' : 'text-[0.64rem]'} font-semibold text-ink tabular-nums`}>${v}</span>
        </div>
      ))}
    </div>
  )
}

function FinanceScene() {
  return (
    <div className="grid grid-cols-6 gap-2.5">
      <Surface title="Software spend · October" className="col-span-4">
        <div className="flex items-baseline gap-2 mb-2.5">
          <p className="font-display font-bold text-2xl leading-none">$412</p>
          <p className="text-[0.62rem] text-ink-soft">9 subscriptions · up $38 from September</p>
        </div>
        <SpendBars />
      </Surface>
      <Surface title="Renewing this week" tone="ink" delay={0.07} className="col-span-2">
        {[['Cloud hosting', '$96', 'Wed'], ['Design suite', '$45', 'Fri']].map(([k, v, d]) => (
          <div key={k} className="py-1 border-b border-white/10 last:border-0">
            <p className="text-[0.7rem] font-semibold flex justify-between"><span>{k}</span><span>{v}</span></p>
            <p className={`${label} text-sky !text-[0.5rem] mt-0.5`}>{d}</p>
          </div>
        ))}
      </Surface>
      <Surface title="Pulled from your accounts" tone="sky" delay={0.14} className="col-span-6">
        <div className="flex flex-wrap gap-1.5">
          {['Checking ··4821', 'Card ··1107', 'Read-only', 'Synced 8:02 am'].map((c) => (
            <span key={c} className="h-6 px-2.5 rounded-full bg-white/70 border border-white text-[0.62rem] text-ink flex items-center">{c}</span>
          ))}
        </div>
      </Surface>
    </div>
  )
}

export const SCENES = [
  { id: 'run', title: 'Half marathon week', ask: 'Plan my week around the half marathon.', reply: 'Three runs are on your calendar, long run Sunday. I moved the proposal review to Thursday and kept pottery.', view: <RunScene /> },
  { id: 'update', title: 'November investor update', ask: 'Draft the investor update from this month’s numbers.', reply: 'Draft is ready. Revenue is checked against Stripe. It needs your approval before it sends.', view: <UpdateScene /> },
  { id: 'spend', title: 'Software spend', ask: 'What did I spend on software last month?', reply: '$412 across nine subscriptions, up $38 from September. Two renew this week.', view: <FinanceScene /> },
  { id: 'study', title: 'O-Chem II study plan', ask: 'Build a study plan for Organic Chemistry II. The final is Dec 12.', reply: 'Four weeks, six hours a week, two practice exams at the end. First session is Tuesday at 8.', view: <StudyScene /> },
  { id: 'reunion', title: 'Reunion dinner', ask: 'Find a date for the reunion dinner. Eight of us.', reply: 'Saturday the 12th works for seven of eight. Six have confirmed. I’ll nudge the other two tomorrow.', view: <ReunionScene /> },
  { id: 'shelf', title: 'Walnut bookshelf', ask: 'I want to build a walnut bookshelf. What do I need?', reply: 'Here’s the cut list and materials. I blocked two Saturday afternoons in the shop.', view: <ShelfScene /> },
]

// ─── Chat atoms ───────────────────────────────────────────────────────────────

export function Thinking() {
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, transition: { duration: 0.12 } }} transition={{ duration: 0.25 }} className="flex items-center gap-2 pl-0.5">
      <motion.span animate={{ scale: [1, 1.16, 1] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }} className="inline-flex"><KeelMark size={14} /></motion.span>
      <span className="thinking-shimmer text-[0.76rem] font-medium">Thinking</span>
    </motion.div>
  )
}

// ─── The desktop / web window: a gallery of screens ───────────────────────────

const RAIL: (keyof typeof Icon)[] = ['overview', 'planner', 'tasks', 'goals', 'projects', 'journal', 'crew']

/* Chat is opened from the Keel button at the top of the rail, so no rail item is lit for it. */
const GALLERY = [
  { id: 'chat', eyebrow: 'Ask', title: '', ms: 8400 },
  { id: 'overview', eyebrow: 'Home', title: 'Overview', ms: 4400 },
  { id: 'planner', eyebrow: 'Day', title: 'Planner', ms: 4400 },
  { id: 'tasks', eyebrow: 'Work', title: 'Tasks', ms: 4400 },
  { id: 'goals', eyebrow: 'Compass', title: 'Goals', ms: 4400 },
  { id: 'projects', eyebrow: 'Work', title: 'Projects', ms: 4400 },
  { id: 'journal', eyebrow: 'Notebook', title: 'Journal', ms: 4400 },
  { id: 'crew', eyebrow: 'Agents', title: 'Crew', ms: 4400 },
] as const

function ChatBody({ scene, phase, canvasClass }: { scene: (typeof SCENES)[number]; phase: number; canvasClass: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] md:h-[25rem]">
      {/* Conversation */}
      <div className="flex flex-col p-4 md:border-r border-ink/[0.07] min-h-0">
        <div className="flex-1 flex flex-col justify-end gap-3 min-h-[8.5rem] overflow-hidden">
          <AnimatePresence mode="popLayout">
            {phase >= 1 && (
              <motion.div key="q" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
                className="ml-auto w-fit max-w-[92%] rounded-[14px_14px_4px_14px] border border-accent/20 bg-gradient-to-b from-sky-soft to-mist px-3.5 py-2 text-[0.76rem] leading-snug text-ink">
                {scene.ask}
              </motion.div>
            )}
            {phase === 2 && <Thinking key="t" />}
            {phase >= 3 && (
              <motion.div key="a" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }} className="flex gap-2">
                <span className="mt-0.5 flex-shrink-0"><KeelMark size={16} /></span>
                <div>
                  <p className="text-[0.76rem] leading-relaxed text-ink">{scene.reply}</p>
                  <p className={`${label} text-ink-soft mt-1.5 flex items-center gap-1.5`}><Icon.check className="w-2.5 h-2.5 text-accent" /> Logged · 3 actions</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="mt-4 rounded-2xl bg-white/85 border border-white shadow-[0_8px_20px_-12px_rgba(15,41,66,0.25)] p-2.5">
          <p className="text-[0.72rem] text-ink-soft px-1 pb-4">Message Zoe…</p>
          <div className="flex items-center justify-between">
            <span className="flex gap-1.5">
              <span className="w-6 h-6 rounded-full bg-ink/[0.05] flex items-center justify-center text-ink-soft text-xs leading-none">+</span>
              <span className="h-6 px-2 rounded-full bg-ink/[0.05] flex items-center gap-1 text-[0.6rem] text-ink-soft"><Icon.goals className="w-3 h-3" /> Goals</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="font-mono text-[0.56rem] text-ink-soft">⌘↵</span>
              <span className="w-6 h-6 rounded-full bg-accent text-paper flex items-center justify-center btn-pillow"><Icon.up className="w-3 h-3" /></span>
            </span>
          </div>
        </div>
      </div>
      {/* Canvas: no loading state. Surfaces appear with the reply. */}
      <div className={`bg-chart p-4 min-h-[16rem] border-t md:border-t-0 border-ink/[0.07] ${canvasClass}`}>
        {phase >= 3 && scene.view}
      </div>
    </div>
  )
}

export function KeelWindow({ frozen = false, paused = false, canvasClass = '', framed = false }: { frozen?: boolean; paused?: boolean; canvasClass?: string; framed?: boolean }) {
  const [screen, setScreen] = useState(0)
  const [sceneIdx, setSceneIdx] = useState(0)
  const g = GALLERY[screen]
  const scene = SCENES[sceneIdx]
  const phase = usePhase([350, 1100, 2700], sceneIdx * 10 + screen, frozen) // 1 ask · 2 thinking · 3 reply + surfaces

  const go = (n: number) => {
    if (n === 0 && screen !== 0) setSceneIdx((i) => (i + 1) % SCENES.length)
    setScreen(n)
  }
  useEffect(() => {
    if (frozen || paused) return
    const t = setTimeout(() => go((screen + 1) % GALLERY.length), g.ms)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, frozen, paused])

  const Body = screen === 0 ? null : SCREENS[g.id as keyof typeof SCREENS]
  const panel = (
    <div className="rounded-[1.45rem] bg-paper overflow-hidden text-left">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 h-10 border-b border-ink/[0.07] bg-white/40">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F2B8AE]" /><span className="w-2.5 h-2.5 rounded-full bg-[#E0A96D]/80" /><span className="w-2.5 h-2.5 rounded-full bg-[#A7D7FF]" />
        </span>
        <span className="mx-auto flex items-center gap-1.5 h-6 px-3 rounded-full bg-ink/[0.05] font-mono text-[0.62rem] text-ink-soft">
          <svg viewBox="0 0 24 24" className="w-2.5 h-2.5"><rect x="5" y="11" width="14" height="9" rx="2" {...ic} /><path d="M8 11V8a4 4 0 018 0v3" {...ic} /></svg>
          keel.kordalabs.com
        </span>
        <span className="w-12" />
      </div>

      <div className="flex">
        {/* Nav rail */}
        <div className="hidden sm:flex flex-col items-center w-12 py-3 gap-1 border-r border-ink/[0.07] bg-white/30">
          <span className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 ${screen === 0 ? 'bg-white shadow-[0_0_0_2px_rgba(61,100,174,0.45),0_6px_14px_-6px_rgba(61,100,174,0.6)]' : 'bg-white/90 border border-white shadow-sm'}`}><KeelMark size={18} /></span>
          {RAIL.map((n, i) => {
            const G = Icon[n]
            const on = screen === i + 1
            return (
              <span key={n} className={`relative w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${on ? 'text-accent bg-accent/[0.08]' : 'text-ink-soft'}`}>
                {on && <span className="absolute -left-2 top-1.5 bottom-1.5 w-0.5 rounded-full bg-accent" />}
                <G className="w-[1.05rem] h-[1.05rem]" />
              </span>
            )
          })}
          <span className="mt-auto w-8 h-8 rounded-lg flex items-center justify-center text-ink-soft"><Icon.settings className="w-[1.05rem] h-[1.05rem]" /></span>
        </div>

        <div className="flex-1 min-w-0">
          {/* App header */}
          <div className="flex items-center gap-3 px-4 h-12 border-b border-ink/[0.07]">
            <div className="min-w-0">
              <p className={`${label} text-accent`}>{g.eyebrow}</p>
              <p className="font-display font-bold text-[0.9rem] leading-tight text-ink truncate">{screen === 0 ? scene.title : g.title}</p>
            </div>
            <span className="hidden md:flex mx-auto items-center gap-2 h-7 w-56 px-3 rounded-full bg-white/70 border border-white text-ink-soft shadow-sm">
              <Icon.search className="w-3 h-3" /><span className="text-[0.66rem] flex-1">Ask Zoe or search anything…</span><span className="font-mono text-[0.56rem] px-1.5 py-0.5 rounded bg-ink/[0.06]">⌘K</span>
            </span>
            <span className="ml-auto md:ml-0 flex items-center gap-2 text-ink-soft">
              {screen === 0 && <span className="hidden sm:flex items-center gap-1.5 text-[0.62rem]">Routing <span className="px-2 py-0.5 rounded-full bg-sky-soft text-accent font-medium">Cloud</span></span>}
              <Icon.bell className="w-4 h-4" />
            </span>
          </div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={screen === 0 ? `chat-${sceneIdx}` : g.id} initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -36, transition: { duration: 0.18 } }} transition={{ duration: 0.36, ease: [0.21, 0.47, 0.32, 0.98] }}>
                {Body ? <div className={`md:h-[25rem] overflow-hidden ${canvasClass}`}><Body /></div> : <ChatBody scene={scene} phase={phase} canvasClass={canvasClass} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      {framed ? <div style={{ ['--inner-r' as string]: '1.5rem' }} className="rounded-[1.85rem] glass-bezel">{panel}</div> : <div className="rounded-[1.45rem] shadow-[0_0_0_1px_rgba(15,41,66,0.08),0_30px_60px_-30px_rgba(15,41,66,0.35)]">{panel}</div>}
      {/* Which screen is showing */}
      <div className="mt-4 flex items-center justify-center gap-1.5" role="tablist" aria-label="Keel screens">
        {GALLERY.map((x, i) => (
          <button key={x.id} type="button" role="tab" aria-selected={i === screen} aria-label={x.id === 'chat' ? 'Chat' : x.title} title={x.id === 'chat' ? 'Chat' : x.title} onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === screen ? 'w-6 bg-accent' : 'w-1.5 bg-ink/20 hover:bg-ink/40'}`} />
        ))}
      </div>
    </div>
  )
}
