'use client'

/* Two phones for the hero: the Keel mobile app (home of pinned surfaces) and Keel over text
   message (a roadmap concept). Renderings of intent, not screenshots. */

import { AnimatePresence, motion } from 'framer-motion'
import { KeelMark } from '@/components/marks/Brand'
import { Icon, label, useCycle, usePhase, Avatar } from '@/components/showcase/KeelUI'

// ─── Pinned surfaces (shared by the app phone and the motion strip) ───────────

export const PINS = [
  { id: 'runs', tone: 'white', title: 'Training', big: '3 runs', sub: '29 km this week' },
  { id: 'goal', tone: 'ink', title: 'Goal', big: '62%', sub: 'Half marathon' },
  { id: 'study', tone: 'sky', title: 'O-Chem II', big: 'Tue 8:00', sub: 'Ch. 7 · 60 min' },
  { id: 'reunion', tone: 'sand', title: 'Reunion', big: '6 of 8', sub: 'Sat, Dec 12' },
  { id: 'update', tone: 'white', title: 'Investor update', big: 'Draft v2', sub: 'Needs your OK' },
  { id: 'shelf', tone: 'ink', title: 'Bookshelf', big: '11 parts', sub: 'Shop · Sat 2 pm' },
] as const

const pinTone = {
  white: 'bg-white/95 border border-white text-ink shadow-[0_8px_18px_-12px_rgba(15,41,66,0.3)]',
  ink: 'bg-ink text-paper',
  sky: 'bg-gradient-to-br from-sky-soft to-sky text-ink',
  sand: 'bg-sand text-ink',
}

export function PinTile({ pin, className = '' }: { pin: (typeof PINS)[number]; className?: string }) {
  const sub = pin.tone === 'ink' ? 'text-sky' : pin.tone === 'sand' ? 'text-copper' : 'text-accent'
  const dim = pin.tone === 'ink' ? 'text-paper/65' : 'text-ink-soft'
  return (
    <div className={`rounded-[1.1rem] p-2.5 flex flex-col justify-between ${pinTone[pin.tone]} ${className}`}>
      <p className={`${label} ${sub}`}>{pin.title}</p>
      <div>
        <p className="font-display font-bold text-[0.95rem] leading-none">{pin.big}</p>
        <p className={`text-[0.56rem] mt-1 ${dim}`}>{pin.sub}</p>
      </div>
    </div>
  )
}

// ─── Phone frame ──────────────────────────────────────────────────────────────

function Phone({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-[13.25rem] rounded-[2.5rem] p-[5px] bg-gradient-to-b from-white to-white/70 border border-white shadow-[0_34px_60px_-22px_rgba(15,41,66,0.42),inset_0_1px_0_rgba(255,255,255,0.9)] text-left ${className}`}>
      <div className="relative rounded-[2.2rem] overflow-hidden h-[27.5rem] flex flex-col bg-paper">
        {/* Status bar */}
        <div className="absolute top-0 inset-x-0 z-20 h-8 flex items-center justify-between px-5 pt-1 text-[0.6rem] font-semibold text-ink">
          <span>9:41</span>
          <span className="absolute left-1/2 -translate-x-1/2 top-1.5 w-[4.2rem] h-[1.15rem] rounded-full bg-ink" aria-hidden="true" />
          <span className="flex items-center gap-1" aria-hidden="true">
            <span className="flex items-end gap-[1.5px]">{[3, 5, 7, 9].map((h) => <span key={h} className="w-[2.5px] rounded-sm bg-ink" style={{ height: h }} />)}</span>
            <span className="w-4 h-2 rounded-[3px] border border-ink/70 p-[1px]"><span className="block h-full w-3/4 rounded-[1.5px] bg-ink" /></span>
          </span>
        </div>
        {children}
      </div>
    </div>
  )
}

// ─── Keel mobile app ──────────────────────────────────────────────────────────

export function AppPhone({ pinRow, className }: { pinRow?: React.ReactNode; className?: string }) {
  return (
    <Phone className={className}>
      <div className="flex-1 flex flex-col bg-gradient-to-b from-sky-soft via-paper to-paper pt-10 px-3.5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className={`${label} text-accent`}>Mon, Nov 16</p>
            <p className="font-display font-bold text-[1.05rem] leading-tight text-ink">Good morning</p>
          </div>
          <span className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center"><Avatar name="AM" tone="mist" /></span>
        </div>

        {/* Today */}
        <div className="rounded-2xl bg-white/90 border border-white shadow-sm p-2.5 mb-2.5">
          <p className={`${label} text-accent mb-1.5`}>Today</p>
          {[['7:00', 'Easy run · 5k', true], ['9:00', 'Deep work: investor update', false], ['4:00', 'Venue call · The Loft', false]].map(([t, n, done]) => (
            <div key={n as string} className="flex items-center gap-2 py-[3px]">
              <span className={`w-3 h-3 rounded-full flex items-center justify-center flex-shrink-0 ${done ? 'bg-accent text-paper' : 'border border-ink/25'}`}>{done && <Icon.check className="w-2 h-2" />}</span>
              <span className={`text-[0.64rem] flex-1 truncate ${done ? 'line-through text-ink-soft' : 'text-ink'}`}>{n}</span>
              <span className={`${label} !text-[0.5rem] text-ink-soft`}>{t}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-1.5">
          <p className={`${label} text-ink-soft`}>Pinned</p>
          <Icon.pin className="w-3 h-3 text-ink-soft" />
        </div>
        {pinRow ?? (
          <div className="grid grid-cols-2 gap-2">
            {PINS.slice(0, 4).map((p) => <PinTile key={p.id} pin={p} className="h-[4.6rem]" />)}
          </div>
        )}
      </div>

      {/* Tab bar */}
      <div className="absolute bottom-2.5 inset-x-3 h-12 rounded-full glass flex items-center justify-around px-2 z-10">
        {(['overview', 'planner'] as const).map((n, i) => { const G = Icon[n]; return <G key={n} className={`w-[1.05rem] h-[1.05rem] ${i === 0 ? 'text-accent' : 'text-ink-soft'}`} /> })}
        <span className="w-9 h-9 -mt-1 rounded-full bg-accent btn-pillow flex items-center justify-center"><KeelMark size={16} className="brightness-0 invert" /></span>
        {(['tasks', 'goals'] as const).map((n) => { const G = Icon[n]; return <G key={n} className="w-[1.05rem] h-[1.05rem] text-ink-soft" /> })}
      </div>
    </Phone>
  )
}

// ─── Keel over text message ───────────────────────────────────────────────────

const THREADS = [
  { ask: 'Move my 2pm and tell Jamie.', reply: 'Done. Jamie has the note.', card: { k: 'Thu', big: '4:00 pm', sub: 'Proposal review' } },
  { ask: 'Who hasn’t RSVP’d for the 12th?', reply: 'Dana and Ravi. Want me to nudge them?', card: { k: 'Reunion', big: '6 of 8', sub: 'Sat, Dec 12 · 7 pm' } },
  { ask: 'What’s my O-Chem session tomorrow?', reply: 'Chapter 7, problems 1–20. One hour.', card: { k: 'Tue', big: '8:00 am', sub: 'O-Chem II · Ch. 7' } },
]

function Bubble({ me, children }: { me?: boolean; children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.28 }}
      className={`w-fit max-w-[84%] px-3 py-1.5 text-[0.7rem] leading-snug ${me ? 'ml-auto rounded-[1.1rem] rounded-br-md bg-accent text-paper' : 'rounded-[1.1rem] rounded-bl-md bg-white text-ink shadow-sm'}`}>
      {children}
    </motion.div>
  )
}

function Dots() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }} className="w-fit rounded-[1.1rem] rounded-bl-md bg-white shadow-sm px-3 py-2.5 flex gap-1">
      {[0, 1, 2].map((i) => <motion.span key={i} animate={{ opacity: [0.25, 1, 0.25] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }} className="w-1.5 h-1.5 rounded-full bg-ink-soft" />)}
    </motion.div>
  )
}

export function SmsPhone({ frozen = false, className }: { frozen?: boolean; className?: string }) {
  const idx = useCycle(THREADS.length, 6800, frozen)
  const t = THREADS[idx]
  const phase = usePhase([500, 1300, 2500, 3200], idx, frozen) // ask · dots · reply · card
  return (
    <Phone className={className}>
      <div className="pt-9 pb-2 text-center border-b border-ink/[0.06] bg-white/60 backdrop-blur">
        <span className="mx-auto w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center"><KeelMark size={16} /></span>
        <p className="text-[0.64rem] font-semibold text-ink mt-1">Keel</p>
      </div>
      <div className="flex-1 flex flex-col justify-end gap-2 px-3 pb-2 bg-gradient-to-b from-paper-100 to-sky-soft/60 overflow-hidden">
        <p className={`${label} !text-[0.5rem] text-center text-accent mb-auto pt-2`}>Text Message · Today 9:41 AM</p>
        <AnimatePresence mode="popLayout">
          {phase >= 1 && <Bubble key={idx + 'q'} me>{t.ask}</Bubble>}
          {phase === 2 && <Dots key={idx + 'd'} />}
          {phase >= 3 && <Bubble key={idx + 'a'}>{t.reply}</Bubble>}
          {phase >= 4 && (
            <motion.div key={idx + 'c'} initial={{ opacity: 0, scale: 0.94, y: 6 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.32 }} className="w-[80%] rounded-2xl bg-ink text-paper p-3">
              <p className={`${label} text-sky mb-1.5`}>{t.card.k}</p>
              <p className="font-display font-bold text-base leading-none">{t.card.big}</p>
              <p className="text-[0.62rem] text-paper/70 mt-1">{t.card.sub}</p>
            </motion.div>
          )}
        </AnimatePresence>
        {phase >= 1 && <p className="text-right text-[0.5rem] text-ink-soft -mt-1">Delivered</p>}
      </div>
      <div className="px-3 pb-3 pt-1 bg-sky-soft/60">
        <div className="h-8 rounded-full bg-white/95 border border-white shadow-sm flex items-center justify-between pl-3 pr-1">
          <span className="text-[0.64rem] text-ink-soft">Text Message</span>
          <span className="w-6 h-6 rounded-full bg-accent text-paper flex items-center justify-center"><Icon.up className="w-3 h-3" /></span>
        </div>
      </div>
    </Phone>
  )
}
