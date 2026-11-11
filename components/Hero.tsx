'use client'
import { APP_SIGNUP_URL } from '@/lib/links'
import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import { Zoe, KeelLockup } from '@/components/marks/Brand'

const KeelDemo = dynamic(() => import('@/components/KeelDemo'), { ssr: false })

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
    <div className="rounded-2xl border border-mist bg-paper-100 overflow-hidden shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-3 py-2.5 border-b border-mist bg-paper-100">
        <div className="w-4 h-4 rounded flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
            <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
        <span className="text-[10px] font-medium text-ink tracking-wide">Week of Mar 11</span>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-[9px] text-ink">Planned by Keel</span>
        </div>
      </div>

      {/* Grid */}
      <div className="flex">
        {/* Time axis */}
        <div className="flex-shrink-0 w-7 border-r border-mist">
          {TIMES.map((t, i) => (
            <div key={t} style={{ height: SLOT_H }} className="flex items-start justify-end pr-1.5 pt-0.5">
              <span className="text-[8px] text-ink leading-none">{t}</span>
            </div>
          ))}
        </div>

        {/* Day columns */}
        {DAYS.map((day, di) => {
          const isToday = di === 2 // Wed
          return (
            <div key={day} className={`flex-1 border-r border-mist last:border-0 relative ${isToday ? 'bg-mist' : ''}`}>
              {/* Day header */}
              <div className={`text-center py-1 border-b border-mist ${isToday ? 'bg-mist' : ''}`}>
                <span className={`text-[9px] font-medium ${isToday ? 'text-accent' : 'text-ink'}`}>{day}</span>
              </div>
              {/* Hour rows */}
              <div className="relative" style={{ height: totalH }}>
                {TIMES.map((_, ti) => (
                  <div key={ti} style={{ height: SLOT_H }} className="border-b border-mist last:border-0" />
                ))}
                {/* Today current time indicator */}
                {isToday && (
                  <div className="absolute left-0 right-0 flex items-center" style={{ top: SLOT_H * 1.7 }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-accent -ml-0.5 flex-shrink-0" />
                    <div className="h-px flex-1 bg-accent" />
                  </div>
                )}
                {/* Events */}
                {CAL_EVENTS.filter(e => e.day === di).map((ev, ei) => (
                  <div
                    key={ei}
                    className={`absolute left-0.5 right-0.5 rounded px-1 overflow-hidden ${
                      ev.color === 'blue'  ? 'bg-mist border-l-[2px] border-accent' :
                      ev.color === 'green' ? 'bg-mist border-l-[2px] border-accent' :
                      'bg-mist border-l-[2px] border-accent'
                    }`}
                    style={{
                      top: ev.start * SLOT_H + 1,
                      height: ev.span * SLOT_H - 3,
                    }}
                  >
                    <span className={`text-[8px] font-medium leading-tight block truncate pt-0.5 ${
                      ev.color === 'blue'  ? 'text-accent' :
                      ev.color === 'green' ? 'text-accent' :
                      'text-accent'
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
    <section className="relative overflow-hidden px-6 bg-gradient-to-b from-sky-soft via-paper to-paper">
      <div className="absolute inset-0 bg-chart [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" aria-hidden="true" />
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div className="flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-7"
            >
              <KeelLockup className="h-10 w-auto" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[2.75rem] sm:text-6xl xl:text-7xl font-display font-bold leading-[1.02] mb-6 text-ink"
            >
              One app for tasks &amp; calendars,{' '}
              <span className="text-accent">powered by AI that does them.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg sm:text-xl text-ink-soft max-w-xl mb-9 leading-relaxed"
            >
              Plan your day in Keel. Its agents research, draft, schedule and follow up. You approve.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <Link
                href={APP_SIGNUP_URL}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-accent text-paper hover:bg-ink transition-all duration-300 shadow-lg shadow-accent/25"
              >
                Get Keel
              </Link>
              <Link
                href="/products/keel"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border border-ink/15 bg-paper text-ink hover:border-accent hover:text-accent transition-all duration-300"
              >
                How it works
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="font-mono text-xs text-ink-soft mt-6"
            >
              Free on web <span className="text-accent">·</span> Every action logged
            </motion.p>
          </div>

          {/* Right: product demo, with Zoe waving from the corner */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative max-w-xl w-full mx-auto mt-24 lg:mt-0 lg:max-w-none"
          >
            <div className="relative lg:ml-20">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="hidden lg:block absolute inset-0 translate-x-4 translate-y-5 z-0 pointer-events-none"
                style={{ opacity: 0.55 }}
              >
                <WeekCalendar />
              </motion.div>
              <div className="relative z-10">
                <KeelDemo />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute z-20 right-5 -top-[8.4rem] w-24 lg:top-auto lg:right-auto lg:-bottom-14 lg:-left-14 lg:w-48"
            >
              <Zoe pose="wave-left" eager className="w-full h-auto animate-bob drop-shadow-xl" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
