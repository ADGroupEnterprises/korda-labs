'use client'

/* Hero showcase: a stylised Keel window (chat + canvas) and a phone running Keel over SMS.
   Behaviour mirrors the product direction:
   - Chat shows a quiet "Thinking" state, then the reply. No loading bars.
   - The canvas never shows thinking. Widgets simply appear, and the layout changes with the ask.
   - The SMS thread is a roadmap concept (see /roadmap) and is labelled as such.
   Illustration of intent, not a screenshot. */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { KeelMark } from '@/components/marks/Brand'

// ─── Timeline ─────────────────────────────────────────────────────────────────

function useTimeline(marks: number[], total: number, frozenAt?: number) {
  const [step, setStep] = useState(frozenAt ?? 0)
  useEffect(() => {
    if (frozenAt !== undefined) { setStep(frozenAt); return }
    let timers: ReturnType<typeof setTimeout>[] = []
    const run = () => {
      setStep(0)
      timers = marks.map((t, i) => setTimeout(() => setStep(i + 1), t))
      timers.push(setTimeout(run, total))
    }
    run()
    return () => timers.forEach(clearTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frozenAt])
  return step
}

// ─── Chat bits ────────────────────────────────────────────────────────────────

function Thinking() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="flex items-center gap-2"
    >
      <motion.span
        animate={{ scale: [1, 1.18, 1], rotate: [0, -6, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        className="inline-flex"
      >
        <KeelMark size={16} />
      </motion.span>
      <span className="thinking-shimmer text-[13px] font-medium">Thinking</span>
    </motion.div>
  )
}

function UserMsg({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-md bg-ink text-paper px-3.5 py-2 text-[13px] leading-snug"
    >
      {children}
    </motion.div>
  )
}

function KeelMsg({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-[13px] leading-relaxed text-ink max-w-[92%]"
    >
      {children}
    </motion.p>
  )
}

// ─── Canvas widgets ───────────────────────────────────────────────────────────

const pop = {
  initial: { opacity: 0, scale: 0.94, y: 6 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.97 },
}

function Tile({ className = '', delay = 0, children }: { className?: string; delay?: number; children: React.ReactNode }) {
  return (
    <motion.div
      {...pop}
      transition={{ duration: 0.32, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`rounded-[1.35rem] p-3.5 ${className}`}
    >
      {children}
    </motion.div>
  )
}

const label = 'font-mono text-[0.58rem] uppercase tracking-wider'

function WeekScene() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const runs: Record<number, string> = { 1: '5k', 3: '8k', 6: '16k' }
  return (
    <div className="grid grid-cols-6 gap-2.5 h-full content-start">
      <Tile className="col-span-6 bg-white/90 border border-white shadow-sm">
        <div className="flex items-center justify-between mb-2.5">
          <p className={`${label} text-accent`}>This week</p>
          <p className={`${label} text-ink-soft`}>3 runs · 29 km</p>
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {days.map((d, i) => (
            <div key={i} className="text-center">
              <p className="text-[0.6rem] text-ink-soft mb-1">{d}</p>
              <div className={`h-12 rounded-xl flex items-end justify-center pb-1.5 ${runs[i] ? 'bg-accent text-paper' : 'bg-ink/[0.05]'}`}>
                {runs[i] && <span className="font-mono text-[0.6rem] font-semibold">{runs[i]}</span>}
              </div>
            </div>
          ))}
        </div>
      </Tile>
      <Tile delay={0.08} className="col-span-2 bg-ink text-paper flex flex-col justify-between min-h-[7.5rem]">
        <p className={`${label} text-sky`}>Goal</p>
        <div>
          <p className="font-display font-bold text-3xl leading-none">62%</p>
          <p className="text-[0.65rem] text-paper/70 mt-1">Half marathon</p>
        </div>
      </Tile>
      <Tile delay={0.16} className="col-span-4 bg-gradient-to-br from-sky-soft to-sky/80 min-h-[7.5rem]">
        <p className={`${label} text-ink mb-2`}>Moved for you</p>
        {['Proposal review → Thu 4pm', 'Standup → 9:30', 'Long run → Sun 8am'].map((t) => (
          <div key={t} className="flex items-center gap-2 py-[3px]">
            <span className="w-1 h-3.5 rounded-full bg-ink/70" />
            <span className="text-[0.72rem] text-ink">{t}</span>
          </div>
        ))}
      </Tile>
    </div>
  )
}

function VenueScene() {
  const venues = [
    { name: 'The Loft', price: '$1,800', fit: 92, pick: true },
    { name: 'Harbor Hall', price: '$2,400', fit: 78 },
    { name: 'Studio 9', price: '$1,250', fit: 64 },
  ]
  return (
    <div className="grid grid-cols-6 gap-2.5 h-full content-start">
      <Tile className="col-span-6 bg-white/90 border border-white shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <p className={`${label} text-accent`}>Venues · compared</p>
          <p className={`${label} text-ink-soft`}>3 sources</p>
        </div>
        {venues.map((v) => (
          <div key={v.name} className={`flex items-center gap-3 px-2.5 py-2 rounded-xl ${v.pick ? 'bg-accent/[0.08]' : ''}`}>
            <span className="text-[0.78rem] font-semibold text-ink w-24">{v.name}</span>
            <span className="font-mono text-[0.68rem] text-ink-soft w-14">{v.price}</span>
            <span className="flex-1 h-1.5 rounded-full bg-ink/[0.07] overflow-hidden">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: `${v.fit}%` }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className={`block h-full rounded-full ${v.pick ? 'bg-accent' : 'bg-ink/30'}`}
              />
            </span>
            {v.pick && <span className={`${label} text-accent`}>Pick</span>}
          </div>
        ))}
      </Tile>
      <Tile delay={0.08} className="col-span-3 bg-sand min-h-[6.5rem]">
        <p className={`${label} text-copper mb-2`}>Draft</p>
        <p className="text-[0.74rem] font-semibold text-ink leading-snug mb-2">Email to The Loft</p>
        <div className="space-y-1.5">
          <span className="block h-1 rounded-full bg-copper/30 w-full" />
          <span className="block h-1 rounded-full bg-copper/30 w-4/5" />
          <span className="block h-1 rounded-full bg-copper/30 w-2/3" />
        </div>
      </Tile>
      <Tile delay={0.16} className="col-span-3 bg-ink text-paper min-h-[6.5rem] flex flex-col justify-between">
        <p className={`${label} text-sky`}>Hold</p>
        <div>
          <p className="font-display font-bold text-xl leading-none">Sat 14</p>
          <p className="text-[0.65rem] text-paper/70 mt-1">Waiting on your OK</p>
        </div>
      </Tile>
    </div>
  )
}

// ─── Desktop window ───────────────────────────────────────────────────────────

function KeelWindow({ frozen }: { frozen: boolean }) {
  // 1 ask A · 2 thinking · 3 reply A + canvas A · 4 ask B · 5 thinking · 6 reply B + canvas B
  const step = useTimeline([500, 1300, 3000, 7000, 7800, 9400], 14500, frozen ? 3 : undefined)
  const scene = step >= 6 ? 'venue' : step >= 3 ? 'week' : 'empty'

  return (
    <div className="rounded-[1.75rem] glass overflow-hidden text-left">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 h-10 border-b border-ink/[0.07]">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
        </span>
        <span className="mx-auto flex items-center gap-1.5 text-[0.7rem] font-medium text-ink-soft">
          <KeelMark size={13} /> Keel
        </span>
        <span className="w-12" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {/* Chat */}
        <div className="flex flex-col p-4 md:p-5 md:border-r border-ink/[0.07] md:h-[23.5rem]">
          <p className={`${label} text-ink-soft mb-4`}>Chat</p>
          <div className="flex-1 flex flex-col justify-end gap-3 min-h-[9.5rem] overflow-hidden">
            {step >= 1 && <UserMsg>Plan my week around the half marathon.</UserMsg>}
            <AnimatePresence mode="wait">{step === 2 && <Thinking key="t1" />}</AnimatePresence>
            {step >= 3 && <KeelMsg>Three runs are on your calendar. I moved the proposal review to Thursday.</KeelMsg>}
            {step >= 4 && <UserMsg>Compare the three venues for the 14th.</UserMsg>}
            <AnimatePresence mode="wait">{step === 5 && <Thinking key="t2" />}</AnimatePresence>
            {step >= 6 && <KeelMsg>The Loft fits best. Draft is ready, and I&apos;m holding the date.</KeelMsg>}
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-full bg-white/80 border border-white px-4 h-10 shadow-sm">
            <span className="text-[0.78rem] text-ink-soft flex-1">Ask anything</span>
            <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center" aria-hidden="true">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M6 10V2M2.5 5.5L6 2l3.5 3.5" stroke="#FBF9F4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </div>
        </div>

        {/* Canvas */}
        <div className="relative p-4 md:p-5 bg-chart md:h-[23.5rem] min-h-[17rem] border-t md:border-t-0 border-ink/[0.07]">
          <p className={`${label} text-ink-soft mb-4`}>Canvas</p>
          <AnimatePresence mode="wait">
            {scene === 'week' && <motion.div key="week" exit={{ opacity: 0 }} transition={{ duration: 0.15 }}><WeekScene /></motion.div>}
            {scene === 'venue' && <motion.div key="venue" exit={{ opacity: 0 }} transition={{ duration: 0.15 }}><VenueScene /></motion.div>}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

// ─── Phone (SMS concept) ──────────────────────────────────────────────────────

function Bubble({ me, children }: { me?: boolean; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28 }}
      className={`w-fit max-w-[86%] px-3 py-1.5 text-[0.72rem] leading-snug ${
        me ? 'ml-auto rounded-2xl rounded-br-md bg-accent text-paper' : 'rounded-2xl rounded-bl-md bg-white text-ink shadow-sm'
      }`}
    >
      {children}
    </motion.div>
  )
}

function Dots() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-fit rounded-2xl rounded-bl-md bg-white shadow-sm px-3 py-2.5 flex gap-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }}
          className="w-1.5 h-1.5 rounded-full bg-ink-soft"
        />
      ))}
    </motion.div>
  )
}

function KeelPhone({ frozen }: { frozen: boolean }) {
  // 1 text · 2 dots · 3 reply · 4 card · 5 text · 6 dots · 7 reply
  const step = useTimeline([900, 1700, 3000, 3700, 6800, 7600, 8900], 13000, frozen ? 4 : undefined)
  return (
    <div className="w-[13.5rem] rounded-[2.4rem] p-[5px] bg-gradient-to-b from-white to-white/60 border border-white shadow-[0_30px_60px_-20px_rgba(15,41,66,0.35)] text-left">
      <div className="rounded-[2.1rem] overflow-hidden bg-gradient-to-b from-sky-soft to-paper-100 h-[26rem] flex flex-col">
        {/* Status + header */}
        <div className="pt-2.5 pb-2 px-4 text-center border-b border-white/70 bg-white/40 backdrop-blur">
          <span className="block mx-auto w-16 h-4 rounded-full bg-ink mb-2" aria-hidden="true" />
          <span className="mx-auto w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
            <KeelMark size={16} />
          </span>
          <p className="text-[0.68rem] font-semibold text-ink mt-1">Keel</p>
        </div>

        {/* Thread */}
        <div className="flex-1 flex flex-col justify-end gap-2 px-3 pb-3">
          {step >= 1 && <Bubble me>Move my 2pm and tell Jamie.</Bubble>}
          <AnimatePresence mode="wait">{step === 2 && <Dots key="d1" />}</AnimatePresence>
          {step >= 3 && <Bubble>Done. Jamie has the note.</Bubble>}
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.32 }}
              className="w-[86%] rounded-2xl bg-ink text-paper p-3"
            >
              <p className={`${label} text-sky mb-1.5`}>Thu</p>
              <p className="font-display font-bold text-base leading-none">4:00 pm</p>
              <p className="text-[0.65rem] text-paper/70 mt-1">Proposal review</p>
            </motion.div>
          )}
          {step >= 5 && <Bubble me>What&apos;s left today?</Bubble>}
          <AnimatePresence mode="wait">{step === 6 && <Dots key="d2" />}</AnimatePresence>
          {step >= 7 && <Bubble>Two things. Both under an hour.</Bubble>}
        </div>

        {/* Input */}
        <div className="px-3 pb-3">
          <div className="h-8 rounded-full bg-white/90 border border-white shadow-sm flex items-center px-3">
            <span className="text-[0.65rem] text-ink-soft">Text Message</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Composition ──────────────────────────────────────────────────────────────

export default function HeroShowcase() {
  const reduce = useReducedMotion()
  const frozen = !!reduce
  return (
    <div className="relative mx-auto max-w-6xl" aria-label="Illustration of Keel's chat and canvas, and Keel over text message">
      <div className="md:pr-40 lg:pr-48">
        <KeelWindow frozen={frozen} />
      </div>

      <div className="mt-8 flex flex-col items-center md:mt-0 md:absolute md:right-0 md:-bottom-14 md:items-end">
        <KeelPhone frozen={frozen} />
        <Link
          href="/roadmap"
          className="mt-3 md:mr-3 inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-wider px-3 py-1.5 rounded-full glass text-ink-soft hover:text-accent transition-colors"
        >
          Text Keel · on the roadmap
        </Link>
      </div>
    </div>
  )
}
