'use client'
import { motion, AnimatePresence, useInView } from 'framer-motion'
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
          transition={{ delay: i * 0.07, duration: 0.22 }}
          className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg border ${
            t.type === 'focus' ? 'border-brand-blue/20 bg-brand-blue/[0.06]' :
            t.type === 'high'  ? 'border-accent/20 bg-accent/[0.05]' :
            t.type === 'meeting' ? 'border-brand-green/15 bg-brand-green/[0.03]' :
            'border-ink/7 bg-transparent'
          }`}
        >
          <div className={`w-1 h-3.5 rounded-full flex-shrink-0 ${
            t.type === 'focus' ? 'bg-brand-blue' :
            t.type === 'high'  ? 'bg-accent' :
            t.type === 'meeting' ? 'bg-brand-green' :
            'bg-ink/15'
          }`} />
          <span className={`text-xs flex-1 ${t.type === 'low' ? 'text-ink/38' : 'text-ink/75'}`}>
            {t.label}
          </span>
          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
            t.type === 'focus' ? 'bg-brand-blue/12 text-brand-blue/55' :
            t.type === 'high'  ? 'bg-accent/12 text-accent/55' :
            'bg-ink/[0.04] text-ink/28'
          }`}>{t.time}</span>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-brand-green/[0.04] border border-brand-green/12 mt-1"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-brand-green/60 animate-pulse flex-shrink-0" />
        <span className="text-[10px] text-brand-green/50">Recovery 82% · HRV 58 · deep work window open</span>
      </motion.div>
    </div>
  )
}

function GoalUI() {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-[9px] text-accent/55 font-semibold uppercase tracking-widest mb-1.5">
          Q1 Revenue Growth
        </p>
        <div className="flex items-baseline gap-2.5">
          <span className="text-3xl font-bold text-ink/88 leading-none">67%</span>
          <span className="text-xs text-brand-green font-medium">↑ on track</span>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-[10px] text-ink/28 mb-1.5">
          <span>Progress to target</span>
          <span>14 days left</span>
        </div>
        <div className="h-2 rounded-full bg-ink/8 overflow-hidden">
          <motion.div
            initial={{ width: 0 }} animate={{ width: '67%' }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
            className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light"
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
          <div key={s.label} className="p-2 rounded-lg border border-ink/7 bg-ink/[0.02]">
            <div className="text-[9px] text-ink/28 mb-0.5">{s.label}</div>
            <div className={`text-xs font-medium ${s.green ? 'text-brand-green/70' : 'text-ink/60'}`}>
              {s.value}
            </div>
          </div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
        className="text-[10px] text-ink/28 px-0.5"
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
            transition={{ duration: 0.2 }}
            className="px-1.5 py-1"
          >
            <div className="flex items-baseline gap-1.5">
              <span className="text-[10px] text-ink/65 font-medium">{step.action}</span>
            </div>
            <p className="text-[9px] text-ink/38 pl-0.5 mt-0.5">{step.detail}</p>
            <p className="text-[9px] text-ink/50 pl-0.5 mt-0.5">→ {step.result}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {showTasks && (
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="mt-2.5 pt-2.5 border-t border-ink/8 space-y-1.5"
          >
            <p className="text-[9px] text-accent/50 font-semibold uppercase tracking-widest px-1 mb-1.5">
              Q2 Launch — 3 new tasks
            </p>
            {newTasks.map((task, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-accent/14 bg-accent/[0.035]"
              >
                <div className="w-1 h-3 rounded-full bg-accent/50 flex-shrink-0" />
                <span className="text-xs text-ink/70">{task}</span>
                <span className="ml-auto text-[9px] font-semibold text-accent/45">new</span>
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
      className="text-ink/30"
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

  useEffect(() => { if (isInView && !active) setActive(true) }, [isInView, active])

  useEffect(() => {
    if (!active) return
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
      t = setTimeout(() => { setDemoIdx(i => (i + 1) % DEMOS.length); setPhase(-1) }, 200)
    }

    return () => clearTimeout(t)
  }, [active, phase, chars, stepIdx, demo.query.length, isNotes])

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
    <div ref={ref} className="rounded-2xl border border-ink/12 bg-paper-100 overflow-hidden shadow-lg shadow-ink/8">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-ink/8">
        <motion.div
          animate={{ scale: isThinking ? [1, 1.22, 1, 1.18, 1] : [1, 1.07, 1] }}
          transition={{ duration: isThinking ? 0.6 : 2.8, repeat: Infinity }}
          className="w-5 h-5 rounded-full flex-shrink-0"
          style={{
            background: 'radial-gradient(circle at 35% 35%, #60A5FA, #3B82F6 50%, #1D4ED8)',
            boxShadow: isThinking ? '0 0 14px #3B82F6BB' : '0 0 8px #3B82F666',
          }}
        />
        <span className="text-brand-blue text-xs font-semibold">Zoe</span>
        <AnimatePresence>
          {isThinking && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex gap-1 ml-0.5">
              {[0, 1, 2].map(i => (
                <motion.div key={i} animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.45, repeat: Infinity, delay: i * 0.11 }}
                  className="w-1 h-1 rounded-full bg-brand-blue/50" />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="ml-auto flex items-center gap-2">
          <div className="flex gap-1">
            {DEMOS.map((_, i) => (
              <div key={i} className={`w-1 h-1 rounded-full transition-all duration-300 ${i === demoIdx ? 'bg-brand-blue' : 'bg-ink/15'}`} />
            ))}
          </div>
          <div className="w-px h-3 bg-ink/12" />
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-green/60 animate-pulse" />
            <span className="text-ink/28 text-[10px]">online</span>
          </div>
        </div>
      </div>

      {/* Split body */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-ink/8">
        {/* LEFT: Chat */}
        <div className="p-4 flex flex-col gap-3 min-h-[280px]">
          <div className="text-[10px] text-ink/22 uppercase tracking-widest font-medium mb-0.5">Chat</div>

          <AnimatePresence mode="wait">
            {phase >= 0 && (
              <motion.div key={`user-${demoIdx}`}
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="flex justify-end"
              >
                <div className="max-w-[90%] bg-brand-blue/12 border border-brand-blue/18 rounded-2xl rounded-tr-sm px-3 py-2 text-xs text-ink/75">
                  {demo.query.slice(0, chars)}{phase === 0 && <span className="animate-pulse">|</span>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Executing hint for notes */}
          <AnimatePresence>
            {isNotes && phase === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="flex items-center gap-1.5 text-[10px] text-ink/30">
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
                <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5"
                  style={{ background: 'radial-gradient(circle at 35% 35%, #60A5FA, #3B82F6 50%, #1D4ED8)', boxShadow: '0 0 6px #3B82F666' }}
                />
                <div>
                  <p className="text-brand-blue text-[10px] font-semibold mb-1">Zoe</p>
                  <p className="text-ink/65 text-xs leading-relaxed">{demo.response}</p>
                  <p className="text-ink/20 text-[10px] mt-1.5 flex items-center gap-1">
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
          <div className="text-[10px] text-ink/22 uppercase tracking-widest font-medium mb-3">Rendered UI</div>
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {rightKey === 'idle' && (
                <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="h-full flex items-center justify-center">
                  <p className="text-ink/15 text-xs">Awaiting query...</p>
                </motion.div>
              )}
              {rightKey === 'loading' && (
                <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-xs text-ink/28">
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
      <div className="border-t border-ink/8 px-4 py-2.5 flex items-center gap-2.5">
        <div className="flex-1 h-7 rounded-lg bg-ink/[0.03] border border-ink/8 flex items-center px-3">
          <span className="text-ink/25 text-xs">Ask Zoe anything...</span>
        </div>
        <div className="w-6 h-6 rounded-lg bg-brand-blue/15 flex items-center justify-center flex-shrink-0">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M1 6h10M7 2l4 4-4 4" stroke="#3B82F6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
