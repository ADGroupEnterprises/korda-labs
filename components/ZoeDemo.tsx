'use client'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// ─── Workflows ────────────────────────────────────────────────────────────────

const WORKFLOWS = [
  {
    agent: 'Researcher',
    colorClass: 'text-accent',
    dotBg: 'bg-accent',
    glowHex: '#C4973A',
    trigger: 'Goal milestone · 3 days remaining',
    steps: [
      { tool: 'web_search', args: '"Q1 SaaS growth benchmarks 2026"', result: '8 results found' },
      { tool: 'fetch_page', args: 'techcrunch.com/2026/saas-report', result: '4.2KB extracted' },
      { tool: 'web_search', args: '"Series A ARR growth rate 2026"', result: '11 results found' },
      { tool: 'read_file', args: 'goals/q1_targets.md', result: 'Read · 1.1KB' },
      { tool: 'write_file', args: 'research/q1_brief.md', result: 'Saved to Google Drive' },
    ],
    output: 'Q1 Research Brief · 2,400 words',
    outputSub: 'Delivered to Google Drive',
    cost: '5 tool calls · $0.008',
  },
  {
    agent: 'Zoe',
    colorClass: 'text-brand-blue',
    dotBg: 'bg-brand-blue',
    glowHex: '#3B82F6',
    trigger: 'Proactive engine · Sunday 6:00 PM',
    steps: [
      { tool: 'calendar.get_events', args: 'range="this_week"', result: '23 events retrieved' },
      { tool: 'tasks.get_completed', args: 'since="monday"', result: '14 tasks done' },
      { tool: 'compass.goal_progress', args: 'period="week"', result: '3 goals tracked' },
      { tool: 'health.week_summary', args: 'source="apple_health"', result: 'Sleep avg 6.9h' },
      { tool: 'notify', args: 'channel="phone", type="weekly_retro"', result: 'Sent to phone' },
    ],
    output: 'Weekly Retro · Sunday 6:02 PM',
    outputSub: 'Delivered to your phone — no prompt needed',
    cost: '5 tool calls · $0.003',
  },
  {
    agent: 'Builder',
    colorClass: 'text-brand-green',
    dotBg: 'bg-brand-green',
    glowHex: '#10B981',
    trigger: 'Task: Triage open GitHub issues',
    steps: [
      { tool: 'browser.navigate', args: 'github.com/org/backend/issues', result: 'Page loaded' },
      { tool: 'browser.extract', args: 'selector=".issue-title"', result: '12 open issues found' },
      { tool: 'browser.click', args: 'label="bug" ×4, "enhancement" ×8', result: 'Labels applied' },
      { tool: 'write_file', args: 'reports/issue-triage-wk11.md', result: 'Saved to Drive' },
    ],
    output: 'Issue Triage · 12 labeled',
    outputSub: 'Report saved to Google Drive',
    cost: '4 tool calls · $0.005',
  },
]

const STEP_MS = 880
const DONE_MS = 2800
const INIT_MS = 700

// ─── Spinner ──────────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <motion.svg
      width="11" height="11" viewBox="0 0 12 12"
      animate={{ rotate: 360 }}
      transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
      className="text-ink/30"
    >
      <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"
        strokeDasharray="13" strokeDashoffset="5" strokeLinecap="round" fill="none" />
    </motion.svg>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ZoeDemo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(false)
  const [wIdx, setWIdx] = useState(0)
  // phase: -1=idle, 0..n-1=step[phase] running, n=all done+output
  const [phase, setPhase] = useState(-1)

  const workflow = WORKFLOWS[wIdx]
  const steps = workflow.steps
  const allDone = phase === steps.length

  useEffect(() => {
    if (isInView && !active) setActive(true)
  }, [isInView, active])

  useEffect(() => {
    if (!active) return
    let t: ReturnType<typeof setTimeout>

    if (phase === -1) {
      t = setTimeout(() => setPhase(0), INIT_MS)
    } else if (phase < steps.length) {
      t = setTimeout(() => setPhase(p => p + 1), STEP_MS)
    } else {
      // all done — wait then cycle
      t = setTimeout(() => {
        setWIdx(i => (i + 1) % WORKFLOWS.length)
        setPhase(-1)
      }, DONE_MS)
    }
    return () => clearTimeout(t)
  }, [active, phase, steps.length])

  return (
    <div ref={ref} className="rounded-2xl border border-ink/12 bg-paper-100 overflow-hidden shadow-lg shadow-ink/8">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-ink/8">
        <AnimatePresence mode="wait">
          <motion.div
            key={wIdx}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: [1, 1.12, 1], opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: allDone ? 2 : 1.4, repeat: allDone ? 0 : Infinity }}
            className="w-5 h-5 rounded-full flex-shrink-0"
            style={{
              background: `radial-gradient(circle at 35% 35%, ${workflow.glowHex}CC, ${workflow.glowHex})`,
              boxShadow: `0 0 ${allDone ? 6 : 12}px ${workflow.glowHex}${allDone ? '44' : '77'}`,
            }}
          />
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.span
            key={wIdx}
            initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
            className={`text-xs font-semibold ${workflow.colorClass}`}
          >
            {workflow.agent}
          </motion.span>
        </AnimatePresence>

        <span className="text-ink/20 text-xs">/</span>

        <AnimatePresence mode="wait">
          <motion.span
            key={wIdx}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="text-ink/35 text-xs truncate flex-1"
          >
            {workflow.trigger}
          </motion.span>
        </AnimatePresence>

        <div className="flex items-center gap-2 ml-auto flex-shrink-0">
          <AnimatePresence mode="wait">
            {allDone ? (
              <motion.span key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-brand-green text-[10px] font-medium">
                ✓ done
              </motion.span>
            ) : phase >= 0 ? (
              <motion.div key="running" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="flex items-center gap-1">
                {[0, 1, 2].map(i => (
                  <motion.div key={i} animate={{ opacity: [0.25, 1, 0.25] }}
                    transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.22 }}
                    className="w-1 h-1 rounded-full bg-ink/35"
                  />
                ))}
                <span className="text-ink/25 text-[10px] ml-0.5">running</span>
              </motion.div>
            ) : null}
          </AnimatePresence>
          <div className="flex gap-1">
            {WORKFLOWS.map((_, i) => (
              <div key={i}
                className={`w-1 h-1 rounded-full transition-all duration-300 ${i === wIdx ? workflow.dotBg : 'bg-ink/12'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="px-4 py-3 min-h-[264px] flex flex-col gap-1">
        <AnimatePresence mode="popLayout">
          {phase >= 0 && steps.map((step, i) => {
            if (i > phase) return null
            const isDone = i < phase
            const isRunning = i === phase && !allDone

            return (
              <motion.div
                key={`${wIdx}-${i}`}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, type: 'spring', stiffness: 500, damping: 32 }}
                className={`flex items-start gap-2.5 py-1.5 px-2 rounded-lg ${isRunning ? 'bg-ink/[0.025]' : ''}`}
              >
                {/* Status icon */}
                <div className="mt-0.5 w-4 h-4 flex items-center justify-center flex-shrink-0">
                  {isDone ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <Spinner />
                  )}
                </div>

                {/* Tool call */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-1.5 leading-tight">
                    <span className="font-mono text-[11px] text-ink/75 font-medium">{step.tool}</span>
                    <span className="font-mono text-[10px] text-ink/28 truncate">{`(${step.args})`}</span>
                  </div>
                  {isDone && (
                    <motion.p
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
                      className="text-[10px] text-ink/38 mt-0.5"
                    >
                      → {step.result}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>

        {/* Output card */}
        <AnimatePresence>
          {allDone && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="mt-2 p-3 rounded-xl border border-brand-green/20 bg-brand-green/[0.04]"
            >
              <div className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs font-medium text-ink/80">{workflow.output}</span>
              </div>
              <div className="flex items-center gap-2 mt-1 ml-5">
                <span className="text-[10px] text-ink/35">{workflow.outputSub}</span>
                <span className="text-[10px] text-ink/18">·</span>
                <span className="text-[10px] text-ink/22">{workflow.cost}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
