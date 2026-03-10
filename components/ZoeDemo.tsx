'use client'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const DEMOS = [
  {
    query: "Show me my tasks for today.",
    response: "Sorted by deadline and energy level. Deep work is blocked 9–11am.",
    agent: "Task Manager",
    agentColor: "blue" as const,
    uiType: "tasks" as const,
    codeLines: ['renderUI({', '  type: "task-board",', '  sort: "priority_asc",', '  data: tasks.getToday()', '})'],
  },
  {
    query: "Coffee shops near my 2pm meeting?",
    response: "Found 4 spots within 0.6mi of your meeting location in Brooklyn.",
    agent: "Zoe",
    agentColor: "blue" as const,
    uiType: "map" as const,
    codeLines: ['renderUI({', '  type: "map",', '  query: "coffee",', '  near: calendar.nextEvent()', '})'],
  },
  {
    query: "How's my fitness looking this week?",
    response: "Cardio is ahead. Sleep is short — blocking 30min recovery walk tomorrow.",
    agent: "Compass",
    agentColor: "green" as const,
    uiType: "health" as const,
    codeLines: ['renderUI({', '  type: "health-stats",', '  range: "this_week",', '  source: "apple_health"', '})'],
  },
]

function TasksUI() {
  const tasks = [
    { label: 'Deep work session', tag: '9–11am', high: true },
    { label: 'Review proposal', tag: '2pm deadline', high: true },
    { label: 'Team standup', tag: '11am', high: false },
    { label: 'Reply to Jamie', tag: 'anytime', high: false },
    { label: 'Read research paper', tag: 'flexible', high: false },
  ]
  return (
    <div className="space-y-1.5">
      {tasks.map((t, i) => (
        <motion.div key={t.label}
          initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.09, duration: 0.3 }}
          className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg border ${
            t.high ? 'border-brand-blue/20 bg-brand-blue/5' : 'border-white/5 bg-white/[0.02]'
          }`}
        >
          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${t.high ? 'bg-brand-blue' : 'bg-white/15'}`} />
          <span className={`text-xs flex-1 ${t.high ? 'text-white/80' : 'text-white/35'}`}>{t.label}</span>
          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${t.high ? 'bg-brand-blue/15 text-brand-blue/70' : 'bg-white/5 text-white/20'}`}>
            {t.tag}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

function MapUI() {
  const pins = [
    { x: '28%', y: '38%', name: 'Blue Bottle', dist: '0.3mi' },
    { x: '62%', y: '25%', name: 'Partners Coffee', dist: '0.5mi' },
    { x: '72%', y: '62%', name: 'Cafe Grumpy', dist: '0.8mi' },
    { x: '18%', y: '68%', name: 'La Colombe', dist: '0.6mi' },
  ]
  return (
    <div className="relative h-44 rounded-xl overflow-hidden border border-white/5 bg-dark-300">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 300 180" preserveAspectRatio="none">
        <line x1="0" y1="90" x2="300" y2="90" stroke="white" strokeWidth="4"/>
        <line x1="150" y1="0" x2="150" y2="180" stroke="white" strokeWidth="4"/>
        <line x1="0" y1="45" x2="300" y2="110" stroke="white" strokeWidth="2"/>
        <line x1="60" y1="0" x2="240" y2="180" stroke="white" strokeWidth="2"/>
      </svg>
      <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}>
        <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-5 rounded-full bg-brand-green/20 border border-brand-green/60 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-brand-green" />
        </motion.div>
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-brand-green/70 whitespace-nowrap font-medium">Your 2pm</div>
      </div>
      {pins.map((p, i) => (
        <motion.div key={p.name} className="absolute"
          style={{ left: p.x, top: p.y, transform: 'translate(-50%,-100%)' }}
          initial={{ opacity: 0, y: 6, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: i * 0.15, type: 'spring', stiffness: 380, damping: 22 }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-brand-blue border border-brand-blue/50 shadow-[0_0_8px_#3B82F6]" />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.15 + 0.25 }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 bg-dark-400 border border-white/10 rounded px-1.5 py-0.5 text-[9px] text-white/55 whitespace-nowrap">
            {p.name} · {p.dist}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

function HealthUI() {
  const metrics = [
    { label: 'Cardio', value: 82, color: 'blue' },
    { label: 'Sleep', value: 54, color: 'green', low: true },
    { label: 'Steps', value: 71, color: 'blue' },
    { label: 'Recovery', value: 76, color: 'green' },
  ]
  return (
    <div className="space-y-3">
      {metrics.map((m, i) => (
        <motion.div key={m.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs text-white/40">{m.label}</span>
            <span className={`text-xs font-mono ${m.low ? 'text-brand-green/50' : 'text-white/40'}`}>{m.value}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: `${m.value}%` }}
              transition={{ duration: 0.9, delay: i * 0.1 + 0.15, ease: 'easeOut' }}
              className={`h-full rounded-full ${m.color === 'blue' ? 'bg-brand-blue' : 'bg-brand-green'}`} />
          </div>
        </motion.div>
      ))}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
        className="mt-2 p-2.5 rounded-lg bg-brand-green/5 border border-brand-green/15 text-[10px] text-brand-green/60">
        ↑ Blocking recovery walk tomorrow 7am
      </motion.div>
    </div>
  )
}

export default function ZoeDemo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(false)
  const [demoIdx, setDemoIdx] = useState(0)
  const [phase, setPhase] = useState<0|1|2|3|4|5>(0)
  const [chars, setChars] = useState(0)
  const demo = DEMOS[demoIdx]

  useEffect(() => { if (isInView && !active) setActive(true) }, [isInView, active])

  useEffect(() => {
    if (!active) return
    let t: ReturnType<typeof setTimeout>
    if (phase === 0) {
      t = setTimeout(() => { setChars(0); setPhase(1) }, 900)
    } else if (phase === 1) {
      if (chars < demo.query.length) {
        t = setTimeout(() => setChars(c => c + 1), 48)
      } else {
        t = setTimeout(() => setPhase(2), 350)
      }
    } else if (phase === 2) {
      t = setTimeout(() => setPhase(3), 1100)
    } else if (phase === 3) {
      t = setTimeout(() => setPhase(4), 680)
    } else if (phase === 4) {
      t = setTimeout(() => setPhase(5), 3400)
    } else if (phase === 5) {
      t = setTimeout(() => { setDemoIdx(i => (i + 1) % DEMOS.length); setChars(0); setPhase(0) }, 350)
    }
    return () => clearTimeout(t)
  }, [active, phase, chars, demo.query.length])

  const isThinking = phase === 2
  const showCode = phase === 3
  const showUI = phase >= 4
  const showResponse = phase >= 4

  return (
    <div ref={ref} className="rounded-2xl border border-white/8 bg-dark-100 overflow-hidden shadow-2xl">
      {/* App header */}
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-white/5">
        <motion.div
          animate={{ scale: isThinking ? [1, 1.25, 1, 1.2, 1] : [1, 1.06, 1] }}
          transition={{ duration: isThinking ? 0.65 : 3, repeat: Infinity }}
          className="w-5 h-5 rounded-full flex-shrink-0"
          style={{
            background: 'radial-gradient(circle at 35% 35%, #60A5FA, #3B82F6 50%, #1D4ED8)',
            boxShadow: isThinking ? '0 0 14px #3B82F6BB' : '0 0 8px #3B82F666',
          }}
        />
        <span className="text-white/50 text-xs font-medium">Zoe</span>
        <AnimatePresence>
          {isThinking && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex gap-1 ml-0.5">
              {[0,1,2].map(i => (
                <motion.div key={i} animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.45, repeat: Infinity, delay: i * 0.11 }}
                  className="w-1 h-1 rounded-full bg-brand-blue/55" />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="ml-auto flex items-center gap-2">
          <div className="flex gap-1">
            {DEMOS.map((_, i) => (
              <div key={i} className={`w-1 h-1 rounded-full transition-all duration-300 ${i === demoIdx ? 'bg-brand-blue' : 'bg-white/15'}`} />
            ))}
          </div>
          <div className="w-px h-3 bg-white/10" />
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-green/60 animate-pulse" />
            <span className="text-white/20 text-[10px]">online</span>
          </div>
        </div>
      </div>

      {/* Split body */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
        {/* LEFT: Chat */}
        <div className="p-4 flex flex-col gap-3 min-h-[260px]">
          <div className="text-[10px] text-white/18 uppercase tracking-widest font-medium mb-0.5">Chat</div>
          <AnimatePresence mode="wait">
            {phase >= 1 && (
              <motion.div key={`user-${demoIdx}`}
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="flex justify-end"
              >
                <div className="max-w-[88%] bg-brand-blue/15 border border-brand-blue/20 rounded-2xl rounded-tr-sm px-3 py-2 text-xs text-white/80">
                  {demo.query.slice(0, chars)}{phase === 1 && <span className="animate-pulse">|</span>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showResponse && (
              <motion.div key={`resp-${demoIdx}`}
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                className="flex gap-2.5"
              >
                <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5"
                  style={{ background: 'radial-gradient(circle at 35% 35%, #60A5FA, #3B82F6 50%, #1D4ED8)', boxShadow: '0 0 6px #3B82F666' }} />
                <div>
                  <div className={`text-[10px] font-semibold mb-1 ${demo.agentColor === 'blue' ? 'text-brand-blue' : 'text-brand-green'}`}>
                    {demo.agent}
                  </div>
                  <p className="text-white/55 text-xs leading-relaxed">{demo.response}</p>
                  <p className="text-white/18 text-[10px] mt-1.5 flex items-center gap-1">
                    UI rendered in right panel
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5h6M5.5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT: Rendered UI panel */}
        <div className="p-4 min-h-[260px] flex flex-col">
          <div className="text-[10px] text-white/18 uppercase tracking-widest font-medium mb-3">Rendered UI</div>
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {phase < 1 && (
                <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="h-full flex items-center justify-center">
                  <p className="text-white/10 text-xs">Awaiting query...</p>
                </motion.div>
              )}
              {showCode && !showUI && (
                <motion.div key={`code-${demoIdx}`}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="font-mono text-[10px] text-brand-blue/45 space-y-0.5 leading-relaxed"
                >
                  {demo.codeLines.map((line, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}>
                      {line}
                    </motion.div>
                  ))}
                </motion.div>
              )}
              {showUI && (
                <motion.div key={`ui-${demoIdx}`}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                >
                  {demo.uiType === 'tasks' && <TasksUI />}
                  {demo.uiType === 'map' && <MapUI />}
                  {demo.uiType === 'health' && <HealthUI />}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="border-t border-white/5 px-4 py-2.5 flex items-center gap-2.5">
        <div className="flex-1 h-7 rounded-lg bg-white/5 border border-white/8 flex items-center px-3">
          <span className="text-white/15 text-xs">Ask Zoe anything...</span>
        </div>
        <div className="w-6 h-6 rounded-lg bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M1 6h10M7 2l4 4-4 4" stroke="#3B82F6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
