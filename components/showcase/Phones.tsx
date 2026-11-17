'use client'

/* Two phones for the hero: the Keel mobile app (home of pinned surfaces) and Keel over text
   message (a roadmap concept). Renderings of intent, not screenshots. */

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { KeelMark } from '@/components/marks/Brand'
import { Icon, label, useCycle, usePhase, Avatar, Thinking, SpendBars } from '@/components/showcase/KeelUI'
import { PIN_ART } from '@/components/showcase/PinArt'
import { PINS, PinTile, type Pin } from '@/components/showcase/Pins'

export { PINS, PinTile }

/* Corner radii follow an iPhone 15: the screen corner is about 14% of the screen's width, so the
   body reads as a rounded rectangle, not a pill. */
// ─── Phone frame: a thick rim of clear glass around the screen ────────────────

function Phone({ children, className = '', screen = 'bg-paper' }: { children: React.ReactNode; className?: string; screen?: string }) {
  return (
    <div style={{ ['--inner-r' as string]: '1.95rem' }} className={`w-[13.75rem] rounded-[2.3rem] glass-bezel text-left ${className}`}>
      <div className={`relative rounded-[1.9rem] overflow-hidden h-[28rem] flex flex-col ${screen} `}>
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

// ─── Keel mobile app: home, then a conversation, and back ─────────────────────

const APP_CHATS = [
  { title: 'Software spend', ask: 'What did I spend on software last month?', reply: '$412 across nine subscriptions, up $38 from September. Two renew this week.', widget: true, log: 'Logged · 2 accounts read' },
  { title: 'Thursday', ask: 'Move my 2pm and tell Jamie.', reply: 'Done. Proposal review is Thursday at 4. Jamie has the note.', widget: false, log: 'Logged · 2 actions' },
]

function AppHome({ pinRow }: { pinRow?: React.ReactNode }) {
  return (
    <>
      <div className="flex-1 flex flex-col bg-gradient-to-b from-sky-soft via-paper to-paper pt-10 px-3.5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className={`${label} text-accent`}>Mon, Nov 16</p>
            <p className="font-display font-bold text-[1.05rem] leading-tight text-ink">Good morning</p>
          </div>
          <span className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center"><Avatar name="AM" tone="mist" /></span>
        </div>

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

        {/* Runs on under the tab bar: there is more page below. */}
        <div className="mt-2.5 rounded-t-2xl rounded-b-none bg-white/90 border border-b-0 border-white shadow-sm p-2.5 pb-10">
          <p className={`${label} text-accent mb-1.5`}>Awaiting your eyes</p>
          {[['Investor update', 'Draft v2'], ['Venue shortlist', '3 options'], ['Cut list', 'Walnut']].map(([n, m]) => (
            <div key={n} className="flex items-center gap-2 py-[3px]">
              <span className="w-1 h-3 rounded-full bg-accent/70 flex-shrink-0" />
              <span className="text-[0.64rem] flex-1 truncate text-ink">{n}</span>
              <span className={`${label} !text-[0.5rem] text-ink-soft`}>{m}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-2.5 inset-x-3 h-12 rounded-full glass flex items-center justify-around px-2 z-10">
        {(['overview', 'planner'] as const).map((n, i) => { const G = Icon[n]; return <G key={n} className={`w-[1.05rem] h-[1.05rem] ${i === 0 ? 'text-accent' : 'text-ink-soft'}`} /> })}
        <span className="w-9 h-9 -mt-1 rounded-full bg-accent btn-pillow flex items-center justify-center"><KeelMark size={16} className="brightness-0 invert" /></span>
        {(['tasks', 'goals'] as const).map((n) => { const G = Icon[n]; return <G key={n} className="w-[1.05rem] h-[1.05rem] text-ink-soft" /> })}
      </div>
    </>
  )
}

function AppChat({ chat, k, frozen }: { chat: (typeof APP_CHATS)[number]; k: number; frozen: boolean }) {
  const phase = usePhase([700, 1500, 3000, 3700], k, frozen) // ask · thinking · reply · widget
  return (
    <div className="flex-1 flex flex-col min-h-0 bg-gradient-to-b from-sky-soft/70 via-paper to-paper">
      <div className="pt-10 px-3.5 pb-2 flex items-center gap-2 border-b border-ink/[0.06]">
        <svg viewBox="0 0 12 20" className="w-[7px] h-[12px] text-ink-soft" aria-hidden="true"><path d="M10 2L2 10l8 8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <div className="flex-1">
          <p className={`${label} !text-[0.5rem] text-accent`}>Ask</p>
          <p className="font-display font-bold text-[0.82rem] leading-tight text-ink">{chat.title}</p>
        </div>
        <Icon.history className="w-3.5 h-3.5 text-ink-soft" />
      </div>

      <div className="flex-1 min-h-0 flex flex-col justify-end gap-2.5 px-3 pb-2 overflow-hidden">
        <AnimatePresence mode="popLayout">
          {phase >= 1 && (
            <motion.div key="q" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
              className="ml-auto w-fit max-w-[88%] rounded-[14px_14px_4px_14px] border border-accent/20 bg-gradient-to-b from-sky-soft to-mist px-3 py-1.5 text-[0.7rem] leading-snug text-ink">
              {chat.ask}
            </motion.div>
          )}
          {phase === 2 && <Thinking key="t" />}
          {phase >= 3 && (
            <motion.div key="a" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }} className="flex gap-1.5">
              <span className="mt-0.5 flex-shrink-0"><KeelMark size={14} /></span>
              <div className="min-w-0 flex-1">
                <p className="text-[0.7rem] leading-relaxed text-ink">{chat.reply}</p>
                {chat.widget && phase >= 4 && (
                  <motion.div initial={{ opacity: 0, scale: 0.95, y: 6 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.34 }} className="mt-2 rounded-2xl bg-white/95 border border-white shadow-[0_10px_22px_-14px_rgba(15,41,66,0.35)] p-2.5">
                    <div className="flex items-center justify-between mb-1.5">
                      <p className={`${label} !text-[0.5rem] text-accent`}>October</p>
                      <Icon.pin className="w-3 h-3 text-ink-soft" />
                    </div>
                    <p className="font-display font-bold text-lg leading-none mb-2">$412</p>
                    <SpendBars compact />
                    <p className="text-[0.5rem] text-ink-soft mt-2">Checking ··4821 · Card ··1107</p>
                  </motion.div>
                )}
                <p className={`${label} !text-[0.5rem] text-ink-soft mt-1.5 flex items-center gap-1`}><Icon.check className="w-2.5 h-2.5 text-accent" /> {chat.log}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mx-3 mb-3 h-9 rounded-full bg-white/95 border border-white shadow-[0_8px_18px_-12px_rgba(15,41,66,0.3)] flex items-center justify-between pl-3.5 pr-1">
        <span className="text-[0.66rem] text-ink-soft">Message Zoe…</span>
        <span className="w-7 h-7 rounded-full bg-accent btn-pillow text-paper flex items-center justify-center"><Icon.up className="w-3 h-3" /></span>
      </div>
    </div>
  )
}

export function AppPhone({ pinRow, frozen = false, paused = false, className }: { pinRow?: React.ReactNode; frozen?: boolean; paused?: boolean; className?: string }) {
  // home → chat → home → chat. Home holds a little longer so the pins get seen.
  const [step, setStep] = useState(0)
  useEffect(() => {
    if (frozen || paused) return
    const t = setTimeout(() => setStep((s) => (s + 1) % 4), step % 2 === 0 ? 6500 : 8200)
    return () => clearTimeout(t)
  }, [step, frozen, paused])
  const chat = step % 2 === 1 ? APP_CHATS[(step - 1) / 2] : null
  return (
    <Phone className={className}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={step} initial={{ opacity: 0, x: chat ? 24 : -24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, transition: { duration: 0.16 } }} transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }} className="flex-1 flex flex-col min-h-0">
          {chat ? <AppChat chat={chat} k={step} frozen={frozen} /> : <AppHome pinRow={pinRow} />}
        </motion.div>
      </AnimatePresence>
    </Phone>
  )
}

// ─── Keel in Messages ─────────────────────────────────────────────────────────

type Msg = { me?: boolean; text?: string; pin?: Pin['id'] }

/* Mostly plain text. Keel sends a surface back only when a picture says it better. */
const THREADS: Msg[][] = [
  [
    { me: true, text: 'Book a table for 4 at Luca on Friday, around 7:30.' },
    { text: 'Booked. Friday 7:30 pm, party of four, under your name. It’s on your calendar.' },
  ],
  [
    { me: true, text: 'Reorder the usual groceries.' },
    { text: 'Cart is ready: 14 items, $86.40, delivery tomorrow 9–11 am. Confirm and I’ll place the order.' },
    { me: true, text: 'Confirm.' },
    { text: 'Ordered. The receipt is in your inbox.' },
  ],
  [
    { me: true, text: 'Who hasn’t RSVP’d for the 12th?' },
    { text: 'Dana and Ravi. Want me to nudge them?' },
    { pin: 'reunion' },
  ],
  [
    { me: true, text: 'What’s my O-Chem session tomorrow?' },
    { text: 'Chapter 7, problems 1–20. One hour, 8 am.' },
  ],
  [
    { me: true, text: 'How’s the half marathon training going?' },
    { text: 'On track. Long run is Sunday.' },
    { pin: 'goal' },
  ],
]

/** Turn a thread into a timeline: typing dots before each Keel text, then the message. */
function timeline(thread: Msg[]) {
  const ev: { at: number; kind: 'dots' | 'show'; i: number }[] = []
  let t = 500
  thread.forEach((m, i) => {
    if (m.me) { t += i === 0 ? 0 : 1300; ev.push({ at: t, kind: 'show', i }) }
    else if (m.pin) { t += 650; ev.push({ at: t, kind: 'show', i }) }
    else { t += 800; ev.push({ at: t, kind: 'dots', i }); t += 1100; ev.push({ at: t, kind: 'show', i }) }
  })
  return ev
}

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

export function SmsPhone({ frozen = false, paused = false, className }: { frozen?: boolean; paused?: boolean; className?: string }) {
  const [idx, setIdx] = useState(0)
  const thread = THREADS[idx]
  const ev = timeline(thread)
  const phase = usePhase(ev.map((e) => e.at), idx, frozen)
  useEffect(() => {
    if (frozen || paused) return
    const t = setTimeout(() => setIdx((i) => (i + 1) % THREADS.length), ev[ev.length - 1].at + 3200)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, frozen, paused])
  const fired = ev.slice(0, phase)
  const shown = new Set(fired.filter((e) => e.kind === 'show').map((e) => e.i))
  const last = fired[fired.length - 1]
  const typing = last?.kind === 'dots'
  const lastMine = Math.max(...thread.map((m, i) => (m.me && shown.has(i) ? i : -1)))
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
            {thread.flatMap((m, i) => {
              if (!shown.has(i)) return []
              const k = `${idx}-${i}`
              if (m.pin) return [<LinkCard key={k} pin={PINS.find((p) => p.id === m.pin)!} />]
              const out = [<Bubble key={k} me={m.me}>{m.text}</Bubble>]
              if (i === lastMine) out.push(<motion.p key={k + 'd'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-right text-[0.5rem] font-medium text-[#8E8E93] -mt-0.5 pr-0.5">Delivered</motion.p>)
              return out
            })}
            {typing && <Dots key={`${idx}-dots-${last.i}`} />}
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
