'use client'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// ─── Demo data ────────────────────────────────────────────────────────────────

const DEMOS = [
  {
    id: 'cloud-compare' as const,
    label: 'Document Intelligence',
    trigger: 'Phone prompt · just now',
    query: 'Compare my Drive notes with the Notion spec and update Q2 Launch.',
    response: '6 gaps found between your meeting notes and the Notion spec. Tasks created, Notion updated.',
  },
  {
    id: 'planner' as const,
    label: 'Daily Planner',
    trigger: 'Morning context ready',
    query: "What's my focus plan for today?",
    response: 'Deep work window 9–11am based on your recovery score. 3 priority tasks, 2 meetings.',
  },
]

const CLOUD_STEPS = [
  { call: 'cloud.scan',         args: '"Drive/Meetings/"',                      result: 'standup-mar11.m4a · 8.3MB' },
  { call: 'ingest.transcribe',  args: 'file, engine="whisper-local"',           result: '1,247 words extracted' },
  { call: 'notion.get_page',    args: '"Q2 Launch Spec"',                       result: '3,400 words fetched' },
  { call: 'compare',            args: 'transcript, spec, mode="gap-analysis"',  result: '6 gaps identified' },
  { call: 'tasks.create',       args: 'project="Q2 Launch", count=6',           result: '6 tasks created' },
  { call: 'notion.append',      args: '"Q2 Launch Spec", section="Action Items"', result: 'Notion updated ✓' },
]

const GAP_TASKS = [
  'Define rollout timeline for mobile feature',
  'Confirm API rate limits with backend team',
  'Update pricing page before launch',
  'Schedule QA pass for edge cases',
  'Write onboarding copy for new flow',
  'Get legal sign-off on T&Cs update',
]

// ─── Planner UI ───────────────────────────────────────────────────────────────

const PLANNER_BLOCKS = [
  { time: '9:00',  label: 'Deep Work — Q2 roadmap draft',   type: 'focus',   span: 2, tag: 'HIGH' },
  { time: '11:00', label: 'Team Standup',                   type: 'meeting', span: 1, tag: 'MTG' },
  { time: '12:00', label: 'Lunch / Recovery',               type: 'rest',    span: 1, tag: '' },
  { time: '1:00',  label: 'Review design mockups',          type: 'high',    span: 1, tag: 'HIGH' },
  { time: '2:00',  label: 'Reply to stakeholders',          type: 'medium',  span: 1, tag: 'MED' },
  { time: '3:30',  label: '1:1 with Jordan',                type: 'meeting', span: 1, tag: 'MTG' },
]

function PlannerUI() {
  return (
    <div className="flex flex-col gap-2">
      {/* Health context bar */}
      <motion.div
        initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-3 px-2.5 py-2 rounded-xl bg-brand-green/[0.06] border border-brand-green/15"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-brand-green/70 animate-pulse flex-shrink-0" />
        <span className="text-[10px] text-brand-green/60 font-medium">Recovery 82% · HRV 58 · Deep work window: 9–11am</span>
      </motion.div>

      {/* Date header */}
      <div className="flex items-center justify-between px-1 mb-0.5">
        <span className="text-[10px] font-semibold text-ink/45 uppercase tracking-widest">Wednesday, Mar 11</span>
        <div className="flex gap-1">
          {['Q1 67%', 'Fitness 71%'].map(g => (
            <span key={g} className="text-[9px] px-1.5 py-0.5 rounded-full bg-accent/10 text-accent/55 border border-accent/15 font-medium">
              {g}
            </span>
          ))}
        </div>
      </div>

      {/* Time blocks */}
      <div className="space-y-1">
        {PLANNER_BLOCKS.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07, duration: 0.22 }}
            className={`flex items-start gap-2 px-2.5 py-2 rounded-xl border ${
              b.type === 'focus'   ? 'border-accent-dark/20 bg-accent-dark/[0.06]' :
              b.type === 'meeting' ? 'border-brand-green/15 bg-brand-green/[0.04]' :
              b.type === 'high'    ? 'border-accent/18 bg-accent/[0.04]' :
              b.type === 'rest'    ? 'border-ink/6 bg-transparent opacity-60' :
              'border-ink/8 bg-ink/[0.02]'
            }`}
          >
            <span className="text-[9px] text-ink/28 font-sans w-8 flex-shrink-0 mt-0.5">{b.time}</span>
            {b.type === 'focus' && (
              <div className={`w-0.5 self-stretch rounded-full flex-shrink-0 ${
                b.type === 'focus' ? 'bg-accent-dark' : 'bg-brand-green'
              }`} style={{ minHeight: 14 }} />
            )}
            <span className={`text-xs flex-1 leading-tight ${
              b.type === 'rest' ? 'text-ink/35' : 'text-ink/72'
            }`}>{b.label}</span>
            {b.tag && (
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium flex-shrink-0 ${
                b.tag === 'HIGH' ? 'bg-accent/12 text-accent/55' :
                b.tag === 'MTG'  ? 'bg-brand-green/12 text-brand-green/55' :
                'bg-ink/[0.04] text-ink/28'
              }`}>{b.tag}</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ─── Cloud Compare execution UI ───────────────────────────────────────────────

function CloudCompareUI({ visibleSteps, showGaps }: { visibleSteps: number; showGaps: boolean }) {
  return (
    <div>
      {/* Steps */}
      <div className="space-y-0.5">
        {CLOUD_STEPS.slice(0, visibleSteps).map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="px-1.5 py-1"
          >
            <div className="flex items-baseline gap-1.5">
              <span className={`font-sans text-[10px] font-medium ${
                step.call.startsWith('notion') ? 'text-ink/60' :
                step.call.startsWith('cloud')  ? 'text-accent/60' :
                'text-ink/60'
              }`}>{step.call}</span>
              <span className="font-sans text-[9px] text-ink/22 truncate max-w-[130px]">({step.args})</span>
            </div>
            <p className="text-[9px] text-ink/35 pl-0.5 mt-0.5">→ {step.result}</p>
          </motion.div>
        ))}
      </div>

      {/* Gap tasks output */}
      <AnimatePresence>
        {showGaps && (
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="mt-2.5 pt-2.5 border-t border-ink/8"
          >
            {/* Summary */}
            <div className="flex items-center gap-2 px-1.5 py-1.5 rounded-lg bg-accent/[0.05] border border-accent/15 mb-2">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="#8A4E28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[10px] text-accent/70 font-medium">6 gaps · Drive → Notion → Q2 Launch synced</span>
            </div>
            {/* Sample tasks */}
            {GAP_TASKS.slice(0, 3).map((task, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.09 + 0.2 }}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-ink/8 bg-ink/[0.02] mb-1"
              >
                <div className="w-1 h-3 rounded-full bg-accent/40 flex-shrink-0" />
                <span className="text-[11px] text-ink/65 truncate">{task}</span>
                <span className="ml-auto text-[9px] font-semibold text-accent/40 flex-shrink-0">new</span>
              </motion.div>
            ))}
            <p className="text-[9px] text-ink/28 pl-2 mt-1">+ 3 more tasks created</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Spinner ──────────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <motion.svg width="11" height="11" viewBox="0 0 12 12"
      animate={{ rotate: 360 }} transition={{ duration: 0.85, repeat: Infinity, ease: 'linear' }}
      className="text-ink/28"
    >
      <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"
        strokeDasharray="13" strokeDashoffset="5" strokeLinecap="round" fill="none"/>
    </motion.svg>
  )
}

// ─── Constants ────────────────────────────────────────────────────────────────

const TYPE_MS = 35
const STEP_MS = 680
const HOLD_MS = 3200
const INIT_MS = 650

// ─── Main component ───────────────────────────────────────────────────────────

export default function ZoeProductDemo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive]   = useState(false)
  const [demoIdx, setDemoIdx] = useState(0)
  const [phase, setPhase]     = useState(-1)
  const [chars, setChars]     = useState(0)
  const [stepIdx, setStepIdx] = useState(0)

  const demo    = DEMOS[demoIdx]
  const isCloud = demo.id === 'cloud-compare'

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
      t = setTimeout(() => setPhase(2), isCloud ? 450 : 900)
    } else if (phase === 2) {
      if (isCloud) {
        if (stepIdx < CLOUD_STEPS.length) {
          t = setTimeout(() => setStepIdx(s => s + 1), STEP_MS)
        } else {
          t = setTimeout(() => setPhase(3), 500)
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
  }, [active, phase, chars, stepIdx, demo.query.length, isCloud])

  const isThinking  = phase === 1
  const showResponse = phase >= 3

  const rightKey = isCloud && phase >= 2
    ? `cloud-${demoIdx}`
    : phase >= 3 && !isCloud
    ? `planner-${demoIdx}`
    : phase === 2 && !isCloud
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
        <span className="text-ink/20 text-xs">/</span>
        <AnimatePresence mode="wait">
          <motion.span key={demoIdx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="text-ink/35 text-xs">
            {demo.label}
          </motion.span>
        </AnimatePresence>

        <div className="ml-auto flex items-center gap-2">
          <AnimatePresence mode="wait">
            {isThinking && (
              <motion.div key="thinking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="flex gap-1">
                {[0, 1, 2].map(i => (
                  <motion.div key={i} animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 0.45, repeat: Infinity, delay: i * 0.11 }}
                    className="w-1 h-1 rounded-full bg-accent/50" />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex gap-1">
            {DEMOS.map((_, i) => (
              <div key={i} className={`w-1 h-1 rounded-full transition-all duration-300 ${i === demoIdx ? 'bg-accent' : 'bg-ink/15'}`} />
            ))}
          </div>
          <div className="w-px h-3 bg-ink/12" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-green/55 animate-pulse" />
        </div>
      </div>

      {/* Phone context banner for cloud demo */}
      <AnimatePresence>
        {demo.id === 'cloud-compare' && phase >= 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-ink/8 px-4 py-2 bg-accent/[0.025] overflow-hidden"
          >
            <div className="flex items-center gap-2">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent/60">
                <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
              </svg>
              <span className="text-[9px] text-accent/55 font-medium">{demo.trigger}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Split body */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-ink/8">
        {/* LEFT: Chat */}
        <div className="p-4 flex flex-col gap-3 min-h-[300px]">
          <div className="text-[10px] text-ink/22 uppercase tracking-widest font-medium mb-0.5">Chat</div>

          <AnimatePresence mode="wait">
            {phase >= 0 && (
              <motion.div key={`user-${demoIdx}`}
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="flex justify-end"
              >
                <div className="max-w-[90%] bg-accent/12 border border-accent/18 rounded-2xl rounded-tr-sm px-3 py-2 text-xs text-ink/75">
                  {demo.query.slice(0, chars)}{phase === 0 && <span className="animate-pulse">|</span>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Executing hint */}
          <AnimatePresence>
            {isCloud && phase === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="flex items-center gap-1.5 text-[10px] text-ink/28">
                <Spinner />
                <span>Connecting Drive, Notion, and task manager...</span>
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
                  <p className="text-ink/65 text-xs leading-relaxed">{demo.response}</p>
                  <p className="text-ink/20 text-[10px] mt-1.5 flex items-center gap-1">
                    Full view in right panel
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
        <div className="p-4 min-h-[300px] flex flex-col">
          <div className="text-[10px] text-ink/22 uppercase tracking-widest font-medium mb-3">Rendered UI</div>
          <div className="flex-1 overflow-hidden">
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
              {rightKey === `cloud-${demoIdx}` && (
                <motion.div key={`cloud-${demoIdx}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <CloudCompareUI
                    visibleSteps={phase >= 3 ? CLOUD_STEPS.length : stepIdx}
                    showGaps={phase >= 3}
                  />
                </motion.div>
              )}
              {rightKey === `planner-${demoIdx}` && (
                <motion.div key={`planner-${demoIdx}`}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.3 }}>
                  <PlannerUI />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-ink/8 px-4 py-2 flex items-center gap-2 text-[10px] text-ink/22">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-green/45 animate-pulse" />
        <span>Audit log active</span>
        <span className="ml-auto">Policy: default-deny</span>
      </div>
    </div>
  )
}
