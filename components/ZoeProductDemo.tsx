'use client'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// ─── Icons ────────────────────────────────────────────────────────────────────

function CalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function GoalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function HealthIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}

function TaskIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SOURCES = [
  {
    Icon: CalIcon,
    label: 'Calendar',
    value: '3 meetings today',
    sub: 'Focus window: 9–11am open',
    colorClass: 'text-brand-blue',
    borderClass: 'border-brand-blue/18',
    bgClass: 'bg-brand-blue/[0.04]',
  },
  {
    Icon: GoalIcon,
    label: 'Goals',
    value: 'Q1 revenue · 67% ↑',
    sub: 'On track · 14 days remaining',
    colorClass: 'text-accent',
    borderClass: 'border-accent/18',
    bgClass: 'bg-accent/[0.04]',
  },
  {
    Icon: HealthIcon,
    label: 'Health',
    value: 'Sleep 7.1h · good',
    sub: 'HRV 58 · recovery 82%',
    colorClass: 'text-brand-green',
    borderClass: 'border-brand-green/18',
    bgClass: 'bg-brand-green/[0.04]',
  },
  {
    Icon: TaskIcon,
    label: 'Tasks',
    value: '5 priority today',
    sub: '2 carried from yesterday',
    colorClass: 'text-ink/55',
    borderClass: 'border-ink/12',
    bgClass: 'bg-ink/[0.025]',
  },
]

// Timings
const CARD_MS = 780
const BRIEFING_MS = 700
const SENT_MS = 900
const LOOP_MS = 3200
const INIT_MS = 650

// Phase: 0=idle, 1-4=cards appearing, 5=briefing compiling, 6=sent, 7=loopgap
export default function ZoeProductDemo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [phase, setPhase] = useState(0)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (isInView && !active) {
      setActive(true)
      setTimeout(() => setPhase(1), INIT_MS)
    }
  }, [isInView, active])

  useEffect(() => {
    if (!active || phase === 0) return

    let delay: number
    if (phase >= 1 && phase <= 3) delay = CARD_MS
    else if (phase === 4) delay = BRIEFING_MS
    else if (phase === 5) delay = SENT_MS
    else if (phase === 6) delay = LOOP_MS
    else return

    const next = phase < 6 ? phase + 1 : 0
    const t = setTimeout(() => setPhase(next), delay)
    return () => clearTimeout(t)
  }, [active, phase])

  // Brief gap before restart
  useEffect(() => {
    if (phase === 0 && active) {
      const t = setTimeout(() => setPhase(1), 450)
      return () => clearTimeout(t)
    }
  }, [phase, active])

  const visibleCards = phase === 0 ? 0 : phase <= 4 ? phase : 4
  const showBriefing = phase >= 5
  const showSent = phase >= 6

  const statusText =
    phase === 0 ? 'Initializing...' :
    phase <= 4 ? 'Pulling morning context...' :
    phase === 5 ? 'Compiling briefing...' :
    'Briefing delivered ✓'

  return (
    <div ref={ref} className="rounded-2xl border border-ink/12 bg-paper-100 overflow-hidden shadow-lg shadow-ink/8">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-ink/8">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="w-5 h-5 rounded-full bg-accent flex-shrink-0 flex items-center justify-center"
          style={{ boxShadow: '0 0 10px #C4973A55' }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        </motion.div>
        <span className="text-xs font-semibold text-accent">Proactive Engine</span>
        <span className="text-ink/20 text-xs">/</span>
        <span className="text-ink/38 text-xs">Morning Briefing</span>
        <div className="ml-auto flex items-center gap-2">
          <span className="font-mono text-[10px] text-ink/28">7:00 AM</span>
          <div className="w-1.5 h-1.5 rounded-full bg-brand-green/55 animate-pulse" />
        </div>
      </div>

      {/* Body */}
      <div className="p-4 min-h-[288px] flex flex-col gap-3">
        {/* Status */}
        <AnimatePresence mode="wait">
          <motion.p
            key={statusText}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="text-[10px] font-medium uppercase tracking-widest text-ink/22"
          >
            {statusText}
          </motion.p>
        </AnimatePresence>

        {/* Data source cards (2×2 grid) */}
        <div className="grid grid-cols-2 gap-2">
          {SOURCES.map((src, i) => (
            <AnimatePresence key={i}>
              {i < visibleCards && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.28, type: 'spring', stiffness: 420, damping: 30 }}
                  className={`p-2.5 rounded-xl border ${src.borderClass} ${src.bgClass}`}
                >
                  <div className={`flex items-center gap-1.5 mb-1 ${src.colorClass}`}>
                    <src.Icon />
                    <span className="text-[9px] font-semibold uppercase tracking-wider">{src.label}</span>
                  </div>
                  <div className="text-[11px] font-medium text-ink/72">{src.value}</div>
                  <div className="text-[10px] text-ink/32 mt-0.5">{src.sub}</div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Compiled briefing */}
        <AnimatePresence>
          {showBriefing && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="p-3 rounded-xl border border-accent/18 bg-accent/[0.035]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-accent/80 flex-shrink-0" />
                <span className="text-[11px] font-semibold text-ink/80">Morning Briefing · Wed</span>
                <AnimatePresence>
                  {showSent && (
                    <motion.span
                      initial={{ opacity: 0, x: 4 }} animate={{ opacity: 1, x: 0 }}
                      className="ml-auto text-[10px] font-medium text-brand-green"
                    >
                      ✓ Sent to phone
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <div className="space-y-1 pl-4.5 text-[10px] text-ink/45 leading-relaxed">
                <p>· Focus window 9–11am — block it before standup</p>
                <p>· Q1 on track, triage 2 carried tasks this morning</p>
                <p>· Good recovery — HRV above your baseline</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="border-t border-ink/8 px-4 py-2 flex items-center gap-2 text-[10px] text-ink/22">
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
        <span>No prompt needed · runs automatically</span>
        <span className="ml-auto">4 sources · $0.002</span>
      </div>
    </div>
  )
}
