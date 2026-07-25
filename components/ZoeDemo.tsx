'use client'
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// ─── Demo definitions ─────────────────────────────────────────────────────────

const DEMOS = [
  {
    id: 'tasks' as const,
    query: 'Review my tasks for today.',
    response: 'Deep work blocked 9–11am — your best focus window. Review proposal is due at 2pm, highest priority.',
  },
  {
    id: 'goal' as const,
    query: "How's my Q1 revenue goal looking?",
    response: 'On track — 67% complete with 14 days left. Best week this month.',
  },
  {
    id: 'notes' as const,
    query: 'Meeting notes are in Drive — transcribe and update Q2 Launch tasks.',
    response: 'Done. Transcribed standup-mar11.m4a and added 3 tasks to Q2 Launch.',
  },
]

const RETRIEVAL_STEPS = [
  { action: 'Scanning Cloud Drive', detail: 'Drive/Meetings/', result: 'standup-mar11.m4a · 12MB' },
  { action: 'Transcribing audio', detail: 'Using Whisper', result: 'Transcript · 847 words' },
  { action: 'Indexing content', detail: 'Creating embeddings', result: '1,024 tokens indexed' },
  { action: 'Matching tasks', detail: 'Q2 Launch project', result: '3 items identified' },
  { action: 'Updating project', detail: 'Adding new tasks', result: '3 tasks created ✓' },
]

// ─── UI Panels ────────────────────────────────────────────────────────────────

function TasksUI() {
  const tasks = [
    { label: 'Deep work session', time: '9–11am', type: 'focus' as const },
    { label: 'Review proposal', time: '2pm', type: 'high' as const },
    { label: 'Team standup', time: '11am', type: 'meeting' as const },
    { label: 'Reply to Jamie', time: 'anytime', type: 'low' as const },
    { label: 'Read research paper', time: 'flexible', type: 'low' as const },
  ]
  return (
    <div className="space-y-1.5">
      {tasks.map((t, i) => (
        <motion.div
          key={t.label}
          initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.07, duration: 0.3 }}
          className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg border ${
            t.type === 'focus' ? 'border-linen bg-linen' :
            t.type === 'high'  ? 'border-linen bg-linen' :
            t.type === 'meeting' ? 'border-linen bg-linen' :
            'border-linen bg-transparent'
          }`}
        >
          <div className={`w-1 h-3.5 rounded-full flex-shrink-0 ${
            t.type === 'focus' ? 'bg-accent' :
            t.type === 'high'  ? 'bg-accent' :
            t.type === 'meeting' ? 'bg-accent' :
            'bg-linen'
          }`} />
          <span className={`text-xs flex-1 ${t.type === 'low' ? 'text-ink' : 'text-ink'}`}>
            {t.label}
          </span>
          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
            t.type === 'focus' ? 'bg-linen text-accent' :
            t.type === 'high'  ? 'bg-linen text-accent' :
            'bg-linen text-ink'
          }`}>{t.time}</span>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-linen border border-linen mt-1"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
        <span className="text-[10px] text-accent">Recovery 82% · HRV 58 · deep work window open</span>
      </motion.div>
    </div>
  )
}

function GoalUI() {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-[9px] text-accent font-semibold uppercase tracking-widest mb-1.5">
          Q1 Revenue Growth
        </p>
        <div className="flex items-baseline gap-2.5">
          <span className="text-3xl font-bold text-ink leading-none">67%</span>
          <span className="text-xs text-accent font-medium">↑ on track</span>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-[10px] text-ink mb-1.5">
          <span>Progress to target</span>
          <span>14 days left</span>
        </div>
        <div className="h-2 rounded-full bg-linen overflow-hidden">
          <motion.div
            initial={{ width: 0 }} animate={{ width: '67%' }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
            className="h-full rounded-full bg-accent"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1.5">
        {[
          { label: 'To target', value: '$48K' },
          { label: 'This week', value: '+$12K ↑', green: true },
          { label: 'Pace', value: '4.8%/wk', green: true },
          { label: 'Status', value: 'On track', green: true },
        ].map(s => (
          <div key={s.label} className="p-2 rounded-lg border border-linen bg-linen">
            <div className="text-[9px] text-ink mb-0.5">{s.label}</div>
            <div className={`text-xs font-medium ${s.green ? 'text-accent' : 'text-ink'}`}>
              {s.value}
            </div>
          </div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
        className="text-[10px] text-ink px-0.5"
      >
        ↑ Best week this month · Compass monitoring
      </motion.p>
    </div>
  )
}

function RetrievalUI({ visibleSteps, showTasks }: { visibleSteps: number; showTasks: boolean }) {
  const newTasks = [
    'Brief stakeholders on Q2 scope change',
    'Schedule design review for new flow',
    'Update launch timeline in project doc',
  ]
  return (
    <div>
      <div className="space-y-0.5">
        {RETRIEVAL_STEPS.slice(0, visibleSteps).map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="px-1.5 py-1"
          >
            <div className="flex items-baseline gap-1.5">
              <span className="text-[10px] text-ink font-medium">{step.action}</span>
            </div>
            <p className="text-[9px] text-ink pl-0.5 mt-0.5">{step.detail}</p>
            <p className="text-[9px] text-ink pl-0.5 mt-0.5">→ {step.result}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {showTasks && (
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="mt-2.5 pt-2.5 border-t border-linen space-y-1.5"
          >
            <p className="text-[9px] text-accent font-semibold uppercase tracking-widest px-1 mb-1.5">
              Q2 Launch — 3 new tasks
            </p>
            {newTasks.map((task, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-linen bg-linen"
              >
                <div className="w-1 h-3 rounded-full bg-accent flex-shrink-0" />
                <span className="text-xs text-ink">{task}</span>
                <span className="ml-auto text-[9px] font-semibold text-accent">new</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
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
const HOLD_MS  = 3100
const INIT_MS  = 700
const STEP_MS  = 730

// ─── Main component ───────────────────────────────────────────────────────────

export default function ZoeDemo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive]   = useState(false)
  const [demoIdx, setDemoIdx] = useState(0)
  // -1=idle  0=typing  1=thinking  2=loading/retrieval  3=result  4=hold
  const [phase, setPhase]     = useState(-1)
  const [chars, setChars]     = useState(0)
  const [stepIdx, setStepIdx] = useState(0)

  const demo    = DEMOS[demoIdx]
  const isNotes = demo.id === 'notes'

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
      t = setTimeout(() => { setChars(0); setStepIdx(0); setPhase(0) }, INIT_MS)
    } else if (phase === 0) {
      if (chars < demo.query.length) {
        t = setTimeout(() => setChars(c => c + 1), TYPE_MS)
      } else {
        t = setTimeout(() => setPhase(1), 380)
      }
    } else if (phase === 1) {
      t = setTimeout(() => setPhase(2), isNotes ? 480 : 900)
    } else if (phase === 2) {
      if (isNotes) {
        if (stepIdx < RETRIEVAL_STEPS.length) {
          t = setTimeout(() => setStepIdx(s => s + 1), STEP_MS)
        } else {
          t = setTimeout(() => setPhase(3), 520)
        }
      } else {
        t = setTimeout(() => setPhase(3), 520)
      }
    } else if (phase === 3) {
      t = setTimeout(() => setPhase(4), HOLD_MS)
    } else if (phase === 4) {
      if (demoIdx + 1 < DEMOS.length) {
        t = setTimeout(() => { setDemoIdx(demoIdx + 1); setPhase(-1) }, 200)
      }
    }

    return () => clearTimeout(t)
  }, [active, phase, chars, stepIdx, demoIdx, prefersReduced, demo.query.length, isNotes])

  const isThinking  = phase === 1
  const isLoading   = phase === 2 && !isNotes
  const showResponse = phase >= 3

  // Right panel key — notes keeps same key through phases 2-3 so retrieval panel doesn't re-mount
  const rightKey = demo.id === 'notes' && phase >= 2
    ? `notes-${demoIdx}`
    : phase >= 3
    ? `ui-${demoIdx}`
    : phase === 2
    ? 'loading'
    : 'idle'

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

      {/* Split body */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-linen">
        {/* LEFT: Chat */}
        <div className="p-4 flex flex-col gap-3 min-h-[280px]">
          <div className="text-[10px] text-ink uppercase tracking-widest font-medium mb-0.5">Chat</div>

          <AnimatePresence mode="wait">
            {phase >= 0 && (
              <motion.div key={`user-${demoIdx}`}
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="flex justify-end"
              >
                <div className="max-w-[90%] bg-linen border border-linen rounded-2xl rounded-tr-sm px-3 py-2 text-xs text-ink">
                  {demo.query.slice(0, chars)}{phase === 0 && <span className="animate-pulse">|</span>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Executing hint for notes */}
          <AnimatePresence>
            {isNotes && phase === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="flex items-center gap-1.5 text-[10px] text-ink">
                <Spinner />
                <span>Executing retrieval pipeline...</span>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showResponse && (
              <motion.div key={`resp-${demoIdx}`}
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                className="flex gap-2"
              >
                <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 bg-copper" />
                <div>
                  <p className="text-accent text-[10px] font-semibold mb-1">Zoe</p>
                  <p className="text-ink text-xs leading-relaxed">{demo.response}</p>
                  <p className="text-ink text-[10px] mt-1.5 flex items-center gap-1">
                    UI rendered in right panel
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5h6M5.5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT: Rendered UI */}
        <div className="p-4 min-h-[280px] flex flex-col">
          <div className="text-[10px] text-ink uppercase tracking-widest font-medium mb-3">Rendered UI</div>
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {rightKey === 'idle' && (
                <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="h-full flex items-center justify-center">
                  <p className="text-ink text-xs">Awaiting query...</p>
                </motion.div>
              )}
              {rightKey === 'loading' && (
                <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-xs text-ink">
                  <Spinner />
                  <span>Rendering...</span>
                </motion.div>
              )}
              {rightKey === `notes-${demoIdx}` && (
                <motion.div key={`notes-${demoIdx}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <RetrievalUI
                    visibleSteps={phase >= 3 ? RETRIEVAL_STEPS.length : stepIdx}
                    showTasks={phase >= 3}
                  />
                </motion.div>
              )}
              {rightKey === `ui-${demoIdx}` && demo.id !== 'notes' && (
                <motion.div key={`ui-${demoIdx}`}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.3 }}>
                  {demo.id === 'tasks' && <TasksUI />}
                  {demo.id === 'goal' && <GoalUI />}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
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
