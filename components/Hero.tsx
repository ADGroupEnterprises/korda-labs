'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const ZoeDemo = dynamic(() => import('@/components/ZoeDemo'), { ssr: false })

// ─── Week Calendar background decoration ─────────────────────────────────────

const CAL_EVENTS = [
  // [dayIndex (0=Mon), startSlot (0=8am, each slot=1hr), spanSlots, label, color]
  { day: 0, start: 1, span: 2, label: 'Deep Work', color: 'blue' },
  { day: 0, start: 3, span: 1, label: 'Standup', color: 'green' },
  { day: 1, start: 0, span: 1, label: 'Design Sync', color: 'green' },
  { day: 1, start: 5, span: 2, label: 'Review', color: 'amber' },
  { day: 2, start: 1, span: 2, label: 'Focus', color: 'blue' },
  { day: 2, start: 4, span: 1, label: '1:1 Jordan', color: 'green' },
  { day: 3, start: 2, span: 1, label: 'Proposal', color: 'amber' },
  { day: 4, start: 0, span: 2, label: 'Deep Work', color: 'blue' },
  { day: 4, start: 4, span: 1, label: 'Planning', color: 'green' },
]

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const TIMES = ['8am', '9', '10', '11', '12', '1pm', '2', '3']
const SLOT_H = 22 // px per hour slot

function WeekCalendar() {
  const totalH = TIMES.length * SLOT_H

  return (
    <div className="rounded-2xl border border-ink/10 bg-paper-100/90 overflow-hidden shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-3 py-2.5 border-b border-ink/8 bg-paper-100">
        <div className="w-4 h-4 rounded flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
            <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
        <span className="text-[10px] font-semibold text-ink/55 tracking-wide">Week of Mar 11</span>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
          <span className="text-[9px] text-ink/30">Zoe managed</span>
        </div>
      </div>

      {/* Grid */}
      <div className="flex">
        {/* Time axis */}
        <div className="flex-shrink-0 w-7 border-r border-ink/6">
          {TIMES.map((t, i) => (
            <div key={t} style={{ height: SLOT_H }} className="flex items-start justify-end pr-1.5 pt-0.5">
              <span className="text-[8px] text-ink/22 leading-none">{t}</span>
            </div>
          ))}
        </div>

        {/* Day columns */}
        {DAYS.map((day, di) => {
          const isToday = di === 2 // Wed
          return (
            <div key={day} className={`flex-1 border-r border-ink/6 last:border-0 relative ${isToday ? 'bg-accent/[0.025]' : ''}`}>
              {/* Day header */}
              <div className={`text-center py-1 border-b border-ink/6 ${isToday ? 'bg-accent/[0.04]' : ''}`}>
                <span className={`text-[9px] font-semibold ${isToday ? 'text-accent' : 'text-ink/30'}`}>{day}</span>
              </div>
              {/* Hour rows */}
              <div className="relative" style={{ height: totalH }}>
                {TIMES.map((_, ti) => (
                  <div key={ti} style={{ height: SLOT_H }} className="border-b border-ink/5 last:border-0" />
                ))}
                {/* Today current time indicator */}
                {isToday && (
                  <div className="absolute left-0 right-0 flex items-center" style={{ top: SLOT_H * 1.7 }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-accent -ml-0.5 flex-shrink-0" />
                    <div className="h-px flex-1 bg-accent/50" />
                  </div>
                )}
                {/* Events */}
                {CAL_EVENTS.filter(e => e.day === di).map((ev, ei) => (
                  <div
                    key={ei}
                    className={`absolute left-0.5 right-0.5 rounded px-1 overflow-hidden ${
                      ev.color === 'blue'  ? 'bg-accent/20 border-l-[2px] border-accent/55' :
                      ev.color === 'green' ? 'bg-brand-green/18 border-l-[2px] border-brand-green/55' :
                      'bg-accent/15 border-l-[2px] border-accent/50'
                    }`}
                    style={{
                      top: ev.start * SLOT_H + 1,
                      height: ev.span * SLOT_H - 3,
                    }}
                  >
                    <span className={`text-[8px] font-medium leading-tight block truncate pt-0.5 ${
                      ev.color === 'blue'  ? 'text-accent/65' :
                      ev.color === 'green' ? 'text-brand-green/65' :
                      'text-accent/65'
                    }`}>
                      {ev.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6">
      <div className="relative z-10 w-full max-w-7xl mx-auto py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                href="/products/zoe"
                className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-accent/25 bg-accent/5 text-accent text-sm font-medium tracking-widest uppercase hover:border-accent/40 hover:bg-accent/10 transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Introducing Zoe
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-60">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6 font-serif"
            >
              <span className="text-ink">Other tools</span>
              <br />
              <span className="text-ink">manage your tasks.</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Zoe does them.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg sm:text-xl text-ink/50 max-w-xl mb-10 leading-relaxed"
            >
              Zoe is your personal AI operating system — connecting your goals, calendar, and tools into
              one intelligent layer that doesn&apos;t just plan your day. It researches, writes, searches,
              automates, and executes. <em>While you focus on what only you can do.</em>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/coming-soon"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl bg-accent text-white hover:bg-accent-light transition-all duration-200 shadow-[0_0_24px_#8A4E2844] hover:shadow-[0_0_36px_#8A4E2866]"
              >
                Sign up free
              </Link>
              <Link
                href="/products/zoe"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl border border-ink/15 text-ink hover:border-ink/25 hover:bg-ink/5 transition-all duration-200"
              >
                See Zoe in action
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="flex items-center gap-2 text-ink/35 text-sm mt-4"
            >
              <span className="w-1 h-1 rounded-full bg-accent/40 flex-shrink-0" />
              Autonomous agents. Real actions. Every step policy-gated and audit-logged.
            </motion.p>
          </div>

          {/* Right: ZoeDemo + Calendar second screen */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Calendar — second screen peeking behind */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="absolute inset-0 translate-x-4 translate-y-5 z-0 pointer-events-none"
                style={{ opacity: 0.45 }}
              >
                <WeekCalendar />
              </motion.div>

              {/* Main ZoeDemo — on top */}
              <div className="relative z-10">
                <ZoeDemo />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
