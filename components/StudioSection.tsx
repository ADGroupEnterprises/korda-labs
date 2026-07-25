'use client'
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

function LensVisual() {
  return (
    <div className="relative flex items-center justify-center w-64 h-64 mx-auto">
      {/* Outer rings */}
      <div className="absolute inset-0 rounded-full border border-linen" />
      <div className="absolute inset-12 rounded-full border border-linen" />

      {/* Glowing rings */}
      <div className="absolute inset-16 rounded-full bg-linen" />

      {/* The Lens */}
      <div className="relative w-24 h-24 rounded-full bg-copper">
        {/* Inner highlight */}
        <div className="absolute top-4 left-5 w-5 h-5 rounded-full bg-mahogany" />
        <div className="absolute top-3 left-4 w-2 h-2 rounded-full bg-paper" />
      </div>

      {/* Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent"
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(${Math.cos((i / 6) * Math.PI * 2) * 100}px, ${Math.sin((i / 6) * Math.PI * 2) * 100}px)`,
          }}
        />
      ))}

      {/* Background glow */}
      <div className="absolute inset-0 rounded-full bg-linen" />
    </div>
  )
}

// ─── Demo definitions ─────────────────────────────────────────────────────────

const DEMOS = [
  {
    id: 'accounting' as const,
    query: 'Show me updates to the Q1 accounting spreadsheet.',
    response: 'Found 8 changes in the last 3 days. Key updates: revenue up 12%, expenses down 4%.',
  },
  {
    id: 'fitness' as const,
    query: 'How are my strength goals looking?',
    response: "Your lifts dropped 8% over two weeks. Carb intake is down 15% — let's adjust your macros.",
  },
]

const ACCOUNTING_CHANGES = [
  { field: 'Revenue', change: '+$48,200', status: 'up' as const },
  { field: 'Operating expenses', change: '-$3,100', status: 'down' as const },
  { field: 'Net margin', change: '+2.4%', status: 'up' as const },
]

// ─── UI Panels ────────────────────────────────────────────────────────────────

function AccountingUI() {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-[9px] text-accent font-semibold uppercase tracking-widest mb-1.5">
          Q1 Accounting — Key Changes
        </p>
        <p className="text-[10px] text-ink mb-2">Last 3 days · 8 updates detected</p>
      </div>

      <div className="space-y-1.5">
        {ACCOUNTING_CHANGES.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`flex items-center justify-between px-2.5 py-2 rounded-lg border ${
              item.status === 'up' 
                ? 'border-linen bg-linen' 
                : 'border-linen bg-linen'
            }`}
          >
            <span className="text-xs text-ink">{item.field}</span>
            <div className="flex items-center gap-1.5">
              <span className={`text-xs font-medium ${
                item.status === 'up' ? 'text-accent' : 'text-accent'
              }`}>
                {item.change}
              </span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={
                item.status === 'up' ? 'text-accent' : 'text-accent rotate-180'
              }>
                <path d="M6 9V3M3 6l3-3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        className="pt-2 border-t border-linen"
      >
        <p className="text-[10px] text-ink leading-relaxed">
          Revenue growth accelerating. Operating costs trending down. Net margin improved by 2.4 percentage points.
        </p>
      </motion.div>
    </div>
  )
}

function FitnessUI() {
  const liftData = [
    { period: 'Week 1-2', value: 100, label: 'Baseline' },
    { period: 'Week 3-4', value: 92, label: '-8%' },
  ]
  
  return (
    <div className="space-y-3">
      <div>
        <p className="text-[9px] text-accent font-semibold uppercase tracking-widest mb-1.5">
          Strength Performance
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-ink leading-none">-8%</span>
          <span className="text-xs text-amber-600 font-medium">↓ drop detected</span>
        </div>
      </div>

      {/* Lift chart */}
      <div className="space-y-2">
        {liftData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex justify-between text-[10px] text-ink mb-1">
              <span>{item.period}</span>
              <span className={i === 1 ? 'text-amber-600 font-medium' : ''}>{item.label}</span>
            </div>
            <div className="h-6 rounded-lg bg-linen overflow-hidden">
              <motion.div
                initial={{ width: 0 }} animate={{ width: `${item.value}%` }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 + i * 0.1 }}
                className={`h-full rounded-lg ${
                  i === 0 ? 'bg-accent' : 'bg-amber-500'
                }`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Nutrition data */}
      <motion.div
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="pt-2 border-t border-linen"
      >
        <p className="text-[9px] text-ink font-semibold uppercase tracking-widest mb-2">
          Nutrition Analysis
        </p>
        <div className="grid grid-cols-2 gap-1.5">
          <div className="p-2 rounded-lg border border-amber-500/20 bg-amber-500/[0.06]">
            <div className="text-[9px] text-ink mb-0.5">Carbs (avg)</div>
            <div className="text-xs font-medium text-amber-600">-15% ↓</div>
          </div>
          <div className="p-2 rounded-lg border border-linen bg-linen">
            <div className="text-[9px] text-ink mb-0.5">Protein</div>
            <div className="text-xs font-medium text-ink">Stable</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="pt-2 border-t border-linen"
      >
        <p className="text-[10px] text-accent leading-relaxed font-medium">
          💡 Suggestion: Increase carbs by 50g/day to support strength goals
        </p>
      </motion.div>
    </div>
  )
}

// ─── Spinner ──────────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <motion.svg
      width="11" height="11" viewBox="0 0 12 12"
      animate={{ rotate: 360 }}
      transition={{ duration: 0.85, repeat: Infinity, ease: 'linear' }}
      className="text-ink"
    >
      <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"
        strokeDasharray="13" strokeDashoffset="5" strokeLinecap="round" fill="none" />
    </motion.svg>
  )
}

// ─── Constants ────────────────────────────────────────────────────────────────

const TYPE_MS  = 36
const HOLD_MS  = 3500
const INIT_MS  = 700

// ─── Lens Demo Component ───────────────────────────────────────────────────────

function LensDemo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive]   = useState(false)
  const [demoIdx, setDemoIdx] = useState(0)
  // -1=idle  0=typing  1=thinking  2=result  3=hold
  const [phase, setPhase]     = useState(-1)
  const [chars, setChars]     = useState(0)

  const demo = DEMOS[demoIdx]

  const prefersReduced = useReducedMotion()

  useEffect(() => { if (isInView && !active) setActive(true) }, [isInView, active])

  useEffect(() => {
    if (!active) return
    if (prefersReduced) {
      if (phase < 3) { setChars(demo.query.length); setPhase(3) }
      return
    }
    let t: ReturnType<typeof setTimeout>

    if (phase === -1) {
      t = setTimeout(() => { setChars(0); setPhase(0) }, INIT_MS)
    } else if (phase === 0) {
      if (chars < demo.query.length) {
        t = setTimeout(() => setChars(c => c + 1), TYPE_MS)
      } else {
        t = setTimeout(() => setPhase(1), 380)
      }
    } else if (phase === 1) {
      t = setTimeout(() => setPhase(2), 900)
    } else if (phase === 2) {
      t = setTimeout(() => setPhase(3), HOLD_MS)
    } else if (phase === 3) {
      if (demoIdx + 1 < DEMOS.length) {
        t = setTimeout(() => { setDemoIdx(demoIdx + 1); setPhase(-1) }, 200)
      }
    }

    return () => clearTimeout(t)
  }, [active, phase, chars, demoIdx, prefersReduced, demo.query.length])

  const isThinking  = phase === 1
  const showPanel = phase >= 2

  return (
    <div ref={ref} className="rounded-2xl border border-linen bg-paper-100 overflow-hidden shadow-lg shadow-ink/8">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-linen">
        <motion.div
          animate={isThinking ? { scale: [1, 1.22, 1, 1.18, 1] } : { scale: 1 }}
          transition={isThinking ? { duration: 0.6, repeat: Infinity } : { duration: 0.3 }}
          className="w-5 h-5 rounded-full flex-shrink-0 bg-copper"
        />
        <span className="text-accent text-xs font-semibold">Zoe</span>
        <AnimatePresence>
          {isThinking && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex gap-1 ml-0.5">
              {[0, 1, 2].map(i => (
                <motion.div key={i} animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.45, repeat: Infinity, delay: i * 0.11 }}
                  className="w-1 h-1 rounded-full bg-accent" />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="ml-auto flex items-center gap-2">
          <div className="flex gap-1">
            {DEMOS.map((_, i) => (
              <div key={i} className={`w-1 h-1 rounded-full transition-all duration-300 ${i === demoIdx ? 'bg-accent' : 'bg-linen'}`} />
            ))}
          </div>
          <div className="w-px h-3 bg-linen" />
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-ink text-[10px]">online</span>
          </div>
        </div>
      </div>

      {/* Body with sliding panel */}
      <div className="relative">
        {/* Chat area */}
        <div className="p-4 flex flex-col gap-3 min-h-[320px]">
          <AnimatePresence mode="wait">
            {phase >= 0 && (
              <motion.div key={`user-${demoIdx}`}
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="flex justify-end"
              >
                <div className="max-w-[85%] bg-linen border border-linen rounded-2xl rounded-tr-sm px-3 py-2 text-xs text-ink">
                  {demo.query.slice(0, chars)}{phase === 0 && <span className="animate-pulse">|</span>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {phase >= 2 && (
              <motion.div key={`resp-${demoIdx}`}
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                className="flex gap-2"
              >
                <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 bg-copper" />
                <div>
                  <p className="text-accent text-[10px] font-semibold mb-1">Zoe</p>
                  <p className="text-ink text-xs leading-relaxed">{demo.response}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sliding panel */}
        <AnimatePresence>
          {showPanel && (
            <motion.div
              key={`panel-${demoIdx}`}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[320px] border-l border-linen bg-paper-100 p-4"
            >
              {demo.id === 'accounting' && <AccountingUI />}
              {demo.id === 'fitness' && <FitnessUI />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input bar */}
      <div className="border-t border-linen px-4 py-2.5 flex items-center gap-2.5">
        <div className="flex-1 h-7 rounded-lg bg-linen border border-linen flex items-center px-3">
          <span className="text-ink text-xs">Ask Zoe anything...</span>
        </div>
        <div className="w-6 h-6 rounded-lg bg-linen flex items-center justify-center flex-shrink-0">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M1 6h10M7 2l4 4-4 4" stroke="#8A4E28" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────────────

const milestones = [
  { label: 'Founded', detail: 'Korda Labs incorporated with a single mission: give people real leverage over their lives.', delay: 0 },
  { label: 'First product', detail: 'Zoe launched — a personal AI operating system connecting your goals, health, calendar, and habits.', delay: 0.15 },
  { label: "What's next", detail: 'Platforms for startups, freelancers, and teams. The same intelligence layer, tuned for every scale.', delay: 0.3 },
]

export default function StudioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linen" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium font-serif tracking-tight mb-6">
              A focused lab.
              <br />
              <span className="text-ink">A clear mission.</span>
            </h2>
            <p className="text-ink leading-relaxed mb-8 text-lg">
              Korda Labs is an AI product studio with one driving idea: people deserve tools that work
              for them — not the other way around. We launched with Zoe and we&apos;re just getting started.
            </p>

            {/* Milestones */}
            <div className="space-y-5">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + m.delay, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <span className="mt-1 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  <div>
                    <span className="text-ink text-sm font-medium">{m.label}</span>
                    <p className="text-ink text-sm leading-relaxed mt-0.5">{m.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-8"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-ink transition-colors"
              >
                See all products
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 4l3.5 3L8 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Lens Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <LensDemo />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
