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
            t.type === 'focus' ? 'border-accent-dark/20 bg-accent-dark/[0.06]' :
            t.type === 'high'  ? 'border-accent/20 bg-accent/[0.05]' :
            t.type === 'meeting' ? 'border-brand-green/15 bg-brand-green/[0.03]' :
            'border-ink/7 bg-transparent'
          }`}
        >
          <div className={`w-1 h-3.5 rounded-full flex-shrink-0 ${
            t.type === 'focus' ? 'bg-accent-dark' :
            t.type === 'high'  ? 'bg-accent' :
            t.type === 'meeting' ? 'bg-brand-green' :
            'bg-ink/15'
          }`} />
          <span className={`text-xs flex-1 ${t.type === 'low' ? 'text-ink' : 'text-ink'}`}>
            {t.label}
          </span>
          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
            t.type === 'focus' ? 'bg-accent-dark/12 text-accent-dark/55' :
            t.type === 'high'  ? 'bg-accent/12 text-accent' :
            'bg-ink/[0.04] text-ink'
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
        <p className="text-[9px] text-accent font-semibold uppercase tracking-widest mb-1.5">
          Q1 Revenue Growth
        </p>
        <div className="flex items-baseline gap-2.5">
          <span className="text-3xl font-bold text-ink leading-none">67%</span>
          <span className="text-xs text-brand-green font-medium">↑ on track</span>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-[10px] text-ink mb-1.5">
          <span>Progress to target</span>
          <span>14 days left</span>
        </div>
        <div className="h-2 rounded-full bg-ink/8 overflow-hidden">
          <motion.div
            initial={{ width: 0 }} animate={{ width: '67%' }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
            className="h-full rounded-full bg-gradient-to-r from-accent to-accent-dark"
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
            <div className="text-[9px] text-ink mb-0.5">{s.label}</div>
            <div className={`text-xs font-medium ${s.green ? 'text-brand-green/70' : 'text-ink'}`}>
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
            transition={{ duration: 0.2 }}
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
            className="mt-2.5 pt-2.5 border-t border-ink/8 space-y-1.5"
          >
            <p className="text-[9px] text-accent font-semibold uppercase tracking-widest px-1 mb-1.5">
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
        <svg viewBox="0 0 472.797 423.24" width="22" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0">
          <path fill="none" stroke="#8b4e27" strokeWidth="12.189" strokeMiterlimit="10" d="M300.714,22.235C229.885,6.343,170.333-6.043,102.775,26.593c-26.996,13.041-57.366,28.335-77.623,68.629C4.377,136.546-.989,194.67,16.959,240.65c24.915,63.831,103.709,91.744,142.309,91.505,7.543-.047,40.698-7.158,66.842,2.179,5.208,1.86,8.845,5.268,11.207,10.349,11.006,23.671-21.167,73.644-22.851,72.442-.877-.627-.19-19.897,6.601-31.804,9.048-15.864,29.245-27.166,79.647-38.459,52.297-11.717,49.292-6.185,79.779-12.528,14.712-3.06,42.868-23.248,63.824-62.093,5.532-10.254,25.41-48.302,21.993-100.765-.363-5.577-2.806-38.779-18.543-69.174-27.025-52.195-76.785-64.301-147.053-80.067Z"/>
          <path fill="none" stroke="#d1cdc7" strokeWidth="8.504" strokeMiterlimit="10" d="M290.817,41.158c-59.929-13.446-110.317-23.927-167.479,3.687-22.842,11.034-48.538,23.974-65.678,58.068-17.578,34.965-22.118,84.144-6.933,123.049,21.081,54.008,87.75,77.626,120.41,77.424,6.383-.039,34.435-6.056,56.556,1.843,4.407,1.574,35.721,13.318,63.124,10.6,44.829-4.447,41.706-5.233,67.502-10.6,12.448-2.59,36.271-19.671,54.002-52.538,4.681-8.676,21.5-40.869,18.609-85.259-.307-4.718-2.374-32.812-15.69-58.529-22.866-44.163-64.969-54.406-124.424-67.746Z"/>
        </svg>
        <span className="text-ink text-xs font-semibold">Zoe</span>
        <AnimatePresence>
          {isThinking && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex gap-1 ml-0.5">
              {[0, 1, 2].map(i => (
                <motion.div key={i} animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.45, repeat: Infinity, delay: i * 0.11 }}
                  className="w-1 h-1 rounded-full bg-accent/50" />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="ml-auto flex items-center gap-2">
          <div className="flex gap-1">
            {DEMOS.map((_, i) => (
              <div key={i} className={`w-1 h-1 rounded-full transition-all duration-300 ${i === demoIdx ? 'bg-accent' : 'bg-ink/15'}`} />
            ))}
          </div>
          <div className="w-px h-3 bg-ink/12" />
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-green/60 animate-pulse" />
            <span className="text-ink text-[10px]">online</span>
          </div>
        </div>
      </div>

      {/* Split body */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-ink/8">
        {/* LEFT: Chat */}
        <div className="p-4 flex flex-col gap-3 min-h-[280px]">
          <div className="text-[10px] text-accent uppercase tracking-widest font-medium mb-0.5">Chat</div>

          <AnimatePresence mode="wait">
            {phase >= 0 && (
              <motion.div key={`user-${demoIdx}`}
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="flex justify-end"
              >
                <div className="max-w-[90%] bg-accent/12 border border-accent/18 rounded-2xl rounded-tr-sm px-3 py-2 text-xs text-ink">
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
                <svg viewBox="0 0 472.797 423.24" width="22" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0 mt-0.5">
                  <path fill="none" stroke="#8b4e27" strokeWidth="12.189" strokeMiterlimit="10" d="M300.714,22.235C229.885,6.343,170.333-6.043,102.775,26.593c-26.996,13.041-57.366,28.335-77.623,68.629C4.377,136.546-.989,194.67,16.959,240.65c24.915,63.831,103.709,91.744,142.309,91.505,7.543-.047,40.698-7.158,66.842,2.179,5.208,1.86,8.845,5.268,11.207,10.349,11.006,23.671-21.167,73.644-22.851,72.442-.877-.627-.19-19.897,6.601-31.804,9.048-15.864,29.245-27.166,79.647-38.459,52.297-11.717,49.292-6.185,79.779-12.528,14.712-3.06,42.868-23.248,63.824-62.093,5.532-10.254,25.41-48.302,21.993-100.765-.363-5.577-2.806-38.779-18.543-69.174-27.025-52.195-76.785-64.301-147.053-80.067Z"/>
                  <path fill="none" stroke="#d1cdc7" strokeWidth="8.504" strokeMiterlimit="10" d="M290.817,41.158c-59.929-13.446-110.317-23.927-167.479,3.687-22.842,11.034-48.538,23.974-65.678,58.068-17.578,34.965-22.118,84.144-6.933,123.049,21.081,54.008,87.75,77.626,120.41,77.424,6.383-.039,34.435-6.056,56.556,1.843,4.407,1.574,35.721,13.318,63.124,10.6,44.829-4.447,41.706-5.233,67.502-10.6,12.448-2.59,36.271-19.671,54.002-52.538,4.681-8.676,21.5-40.869,18.609-85.259-.307-4.718-2.374-32.812-15.69-58.529-22.866-44.163-64.969-54.406-124.424-67.746Z"/>
                </svg>
                <div>
                  <p className="text-ink text-[10px] font-semibold mb-1">Zoe</p>
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
          <div className="text-[10px] text-accent uppercase tracking-widest font-medium mb-3">Rendered UI</div>
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
      <div className="border-t border-ink/8 px-4 py-2.5 flex items-center gap-2.5">
        <div className="flex-1 h-7 rounded-lg bg-ink/[0.03] border border-ink/8 flex items-center px-3">
          <span className="text-ink text-xs">Ask Zoe anything...</span>
        </div>
        <div className="w-6 h-6 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M1 6h10M7 2l4 4-4 4" stroke="#8A4E28" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
