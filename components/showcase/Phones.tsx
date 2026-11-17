'use client'

/* Two phones for the hero: the Keel mobile app (home of pinned surfaces) and Keel over text
   message (a roadmap concept). Renderings of intent, not screenshots. */

import { AnimatePresence, motion } from 'framer-motion'
import { KeelMark } from '@/components/marks/Brand'
import { Icon, label, useCycle, usePhase, Avatar } from '@/components/showcase/KeelUI'
import { PIN_ART } from '@/components/showcase/PinArt'

// ─── Pinned surfaces (shared by the app phone and the motion strip) ───────────

export const PINS = [
  { id: 'runs', dark: true, title: 'Training', big: '3 runs', sub: '29 km this week' },
  { id: 'goal', dark: true, title: 'Goal', big: '62%', sub: 'Half marathon' },
  { id: 'study', dark: false, title: 'O-Chem II', big: 'Tue 8:00', sub: 'Ch. 7 · 60 min' },
  { id: 'reunion', dark: false, title: 'Reunion', big: '6 of 8', sub: 'Sat, Dec 12' },
  { id: 'update', dark: false, title: 'Investor update', big: 'Draft v2', sub: 'Needs your OK' },
  { id: 'shelf', dark: true, title: 'Bookshelf', big: '11 parts', sub: 'Shop · Sat 2 pm' },
] as const

export type Pin = (typeof PINS)[number]

/** A pinned surface: generated artwork edge to edge, a glass rim, the headline over it. */
export function PinTile({ pin, className = '' }: { pin: Pin; className?: string }) {
  const Art = PIN_ART[pin.id]
  const fg = pin.dark ? 'text-white' : 'text-ink'
  return (
    <div className={`relative isolate overflow-hidden rounded-[1.15rem] shadow-[0_10px_22px_-12px_rgba(15,41,66,0.5)] ${fg} ${className}`}>
      <Art />
      <div className={`absolute inset-0 ${pin.dark ? 'bg-gradient-to-r from-black/45 via-black/10 to-transparent' : 'bg-gradient-to-r from-white/80 via-white/25 to-transparent'}`} aria-hidden="true" />
      <div className="absolute inset-0 rounded-[1.15rem] ring-1 ring-inset ring-white/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]" aria-hidden="true" />
      <div className="relative h-full p-2.5 flex flex-col justify-between">
        <p className={`${label} !text-[0.5rem] whitespace-nowrap ${pin.dark ? 'text-white/85' : 'text-ink/70'}`}>{pin.title}</p>
        <div>
          <p className="font-display font-bold text-[1rem] leading-none tracking-tight whitespace-nowrap">{pin.big}</p>
          <p className={`text-[0.55rem] mt-1 font-medium whitespace-nowrap ${pin.dark ? 'text-white/80' : 'text-ink/70'}`}>{pin.sub}</p>
        </div>
      </div>
    </div>
  )
}

// ─── Phone frame: a thick rim of clear glass around the screen ────────────────

function Phone({ children, className = '', screen = 'bg-paper' }: { children: React.ReactNode; className?: string; screen?: string }) {
  return (
    <div className={`w-[14rem] rounded-[2.9rem] p-[9px] glass-bezel text-left ${className}`}>
      <div className={`relative rounded-[2.35rem] overflow-hidden h-[28rem] flex flex-col ${screen} shadow-[0_0_0_1px_rgba(15,41,66,0.08)]`}>
        {/* Status bar */}
        <div className="absolute top-0 inset-x-0 z-20 h-8 flex items-center justify-between px-5 pt-1 text-[0.6rem] font-semibold text-black">
          <span>9:41</span>
          <span className="absolute left-1/2 -translate-x-1/2 top-1.5 w-[4.2rem] h-[1.15rem] rounded-full bg-black" aria-hidden="true" />
          <span className="flex items-center gap-1" aria-hidden="true">
            <span className="flex items-end gap-[1.5px]">{[3, 5, 7, 9].map((h) => <span key={h} className="w-[2.5px] rounded-sm bg-black" style={{ height: h }} />)}</span>
            <span className="w-4 h-2 rounded-[3px] border border-black/60 p-[1px]"><span className="block h-full w-3/4 rounded-[1.5px] bg-black" /></span>
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
            {PINS.slice(0, 4).map((p) => <PinTile key={p.id} pin={p} className="h-[4.9rem]" />)}
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

// ─── Keel in Messages ─────────────────────────────────────────────────────────

const THREADS: { ask: string; reply: string; pin: Pin['id'] }[] = [
  { ask: 'Is the investor update ready?', reply: 'Draft v2 is ready. It needs your OK before it sends.', pin: 'update' },
  { ask: 'Who hasn’t RSVP’d for the 12th?', reply: 'Dana and Ravi. Want me to nudge them?', pin: 'reunion' },
  { ask: 'What’s my O-Chem session tomorrow?', reply: 'Chapter 7, problems 1–20. One hour, 8 am.', pin: 'study' },
]

const ios = { fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", system-ui, sans-serif' }
const IOS_BLUE = '#007AFF'
const IOS_GRAY = '#E9E9EB'

/** The little curl at the bottom corner of a Messages bubble. */
function Tail({ me }: { me?: boolean }) {
  return (
    <svg viewBox="0 0 17 21" className={`absolute bottom-0 w-[11px] h-[14px] ${me ? '-right-[4px]' : '-left-[4px] -scale-x-100'}`} aria-hidden="true">
      <path d="M16.8 21c-3.1.3-6.7-.9-9.3-3.2C5.6 20 2.6 20.9 0 21c3.6-2.5 5-6.300 5-11V0h6v10.500c0 4.200 2.300 8.400 5.800 10.500z" fill={me ? IOS_BLUE : IOS_GRAY} />
    </svg>
  )
}

function Bubble({ me, children }: { me?: boolean; children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 420, damping: 30 }}
      style={{ background: me ? IOS_BLUE : IOS_GRAY, transformOrigin: me ? 'bottom right' : 'bottom left' }}
      className={`relative w-fit max-w-[78%] px-[0.62rem] py-[0.36rem] rounded-[1.05rem] text-[0.7rem] leading-[1.25] ${me ? 'ml-auto text-white' : 'text-black'}`}>
      {children}<Tail me={me} />
    </motion.div>
  )
}

function Dots() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }}
      style={{ background: IOS_GRAY, transformOrigin: 'bottom left' }} className="relative w-fit rounded-[1.05rem] px-3 py-[0.6rem] flex gap-[3px]">
      {[0, 1, 2].map((i) => <motion.span key={i} animate={{ opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.2 }} className="w-[6px] h-[6px] rounded-full bg-[#8E8E93]" />)}
      <Tail />
    </motion.div>
  )
}

/** A rich link, the way Messages shows one: picture on top, title and domain underneath. */
function LinkCard({ pin }: { pin: Pin }) {
  const Art = PIN_ART[pin.id]
  return (
    <motion.div initial={{ opacity: 0, y: 10, scale: 0.92 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 380, damping: 30 }}
      style={{ background: IOS_GRAY, transformOrigin: 'bottom left' }} className="w-[74%] rounded-[1.05rem] overflow-hidden">
      <div className={`relative h-[4.6rem] ${pin.dark ? 'text-white' : 'text-ink'}`}>
        <Art />
        <div className="absolute left-2.5 bottom-2">
          <p className="font-display font-bold text-[0.95rem] leading-none">{pin.big}</p>
        </div>
      </div>
      <div className="px-2.5 py-1.5">
        <p className="text-[0.62rem] font-semibold text-black leading-tight truncate">{pin.title} · {pin.sub}</p>
        <p className="text-[0.55rem] text-[#8E8E93] leading-tight">keel.kordalabs.com</p>
      </div>
    </motion.div>
  )
}

export function SmsPhone({ frozen = false, className }: { frozen?: boolean; className?: string }) {
  const idx = useCycle(THREADS.length, 6800, frozen)
  const t = THREADS[idx]
  const pin = PINS.find((p) => p.id === t.pin)!
  const phase = usePhase([500, 1300, 2500, 3200], idx, frozen) // ask · dots · reply · card
  return (
    <Phone className={className} screen="bg-white">
      <div style={ios} className="flex-1 flex flex-col min-h-0">
        {/* Navigation bar */}
        <div className="relative pt-9 pb-1.5 bg-[#F9F9F9]/95 border-b border-black/[0.12] flex flex-col items-center">
          <span className="absolute left-2 top-[2.7rem] flex items-center gap-0.5" style={{ color: IOS_BLUE }} aria-hidden="true">
            <svg viewBox="0 0 12 20" className="w-[8px] h-[14px]"><path d="M10 2L2 10l8 8" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="min-w-[1.05rem] h-[1.05rem] px-1 rounded-full text-white text-[0.55rem] font-medium flex items-center justify-center" style={{ background: IOS_BLUE }}>3</span>
          </span>
          <span className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-b from-[#DCEEFF] to-[#A7D7FF]"><KeelMark size={18} /></span>
          <p className="text-[0.56rem] text-black mt-0.5 flex items-center gap-0.5">Keel <svg viewBox="0 0 8 12" className="w-[4px] h-[6px] text-[#8E8E93]"><path d="M2 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></p>
          <svg viewBox="0 0 28 18" className="absolute right-3 top-[2.75rem] w-[18px] h-[12px]" style={{ color: IOS_BLUE }} aria-hidden="true">
            <rect x="1" y="1.5" width="17" height="15" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M19.500 7l6-3.500v11l-6-3.500z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Transcript */}
        <div className="flex-1 min-h-0 flex flex-col justify-end gap-[5px] px-3 pb-1.5 overflow-hidden">
          <p className="text-center text-[0.5rem] leading-tight text-[#8E8E93] mb-auto pt-2"><span className="font-semibold">iMessage</span><br />Today 9:41 AM</p>
          <AnimatePresence mode="popLayout">
            {phase >= 1 && <Bubble key={idx + 'q'} me>{t.ask}</Bubble>}
            {phase >= 1 && <motion.p key={idx + 'dl'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-right text-[0.5rem] font-medium text-[#8E8E93] -mt-0.5 pr-0.5">{phase >= 3 ? 'Read 9:41 AM' : 'Delivered'}</motion.p>}
            {phase === 2 && <Dots key={idx + 'd'} />}
            {phase >= 3 && <Bubble key={idx + 'a'}>{t.reply}</Bubble>}
            {phase >= 4 && <LinkCard key={idx + 'c'} pin={pin} />}
          </AnimatePresence>
        </div>

        {/* Compose bar */}
        <div className="px-2.5 pt-1 pb-1 flex items-center gap-1.5">
          <span className="w-[1.55rem] h-[1.55rem] rounded-full bg-[#E9E9EB] text-[#7C7C80] flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <svg viewBox="0 0 12 12" className="w-[10px] h-[10px]"><path d="M6 1.500v9M1.500 6h9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
          </span>
          <div className="flex-1 h-[1.7rem] rounded-full border border-[#C7C7CC] flex items-center justify-between pl-2.5 pr-2">
            <span className="text-[0.66rem] text-[#C4C4C6]">iMessage</span>
            <svg viewBox="0 0 12 18" className="w-[8px] h-[12px] text-[#8E8E93]" aria-hidden="true"><rect x="3.500" y="1" width="5" height="10" rx="2.500" fill="currentColor" /><path d="M1 8.500a5 5 0 0010 0M6 13.500V17" fill="none" stroke="currentColor" strokeWidth="1.400" strokeLinecap="round" /></svg>
          </div>
        </div>
        <span className="mx-auto mb-1.5 mt-1 w-[5.2rem] h-[4px] rounded-full bg-black" aria-hidden="true" />
      </div>
    </Phone>
  )
}
