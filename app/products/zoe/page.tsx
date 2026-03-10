'use client'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import ZoeDemo from '@/components/ZoeDemo'

// --- Orb component (compact version) ---
function MiniOrb() {
  return (
    <div className="relative flex items-center justify-center w-40 h-40 mx-auto">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border border-brand-blue/10" />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 13, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-5 rounded-full border border-brand-blue/15" style={{ borderStyle: 'dashed' }} />
      <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="w-16 h-16 rounded-full"
        style={{
          background: 'radial-gradient(circle at 35% 35%, #60A5FA, #3B82F6 40%, #1D4ED8 80%, #1E3A8A)',
          boxShadow: '0 0 32px #3B82F666, 0 0 64px #3B82F633, inset 0 0 16px #60A5FA33',
        }}
      >
        <div className="absolute top-3 left-4 w-3 h-3 rounded-full bg-white/25 blur-sm" />
        <div className="absolute top-2.5 left-3.5 w-1.5 h-1.5 rounded-full bg-white/50" />
      </motion.div>
      <div className="absolute inset-0 rounded-full bg-brand-blue/5 blur-2xl scale-150" />
    </div>
  )
}

// --- Task Manager Animation ---
const TM_TASKS = [
  { id: 'a', label: 'Read research paper', pri: 0, time: null as string | null },
  { id: 'b', label: 'Reply to Jamie', pri: 1, time: null as string | null },
  { id: 'c', label: 'Team standup', pri: 1, time: '11am' },
  { id: 'd', label: 'Review proposal', pri: 2, time: '2pm' },
  { id: 'e', label: 'Deep work session', pri: 2, time: '9–11am' },
]
const UNSORTED = ['c', 'a', 'e', 'b', 'd']
const SORTED   = ['e', 'd', 'c', 'b', 'a']

function TaskManagerAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [tick, setTick] = useState(0)
  const [phase, setPhase] = useState(0) // 0=unsorted 1=sorting 2=checked

  useEffect(() => {
    if (!isInView) return
    const t1 = setTimeout(() => setPhase(1), 1400)
    const t2 = setTimeout(() => setPhase(2), 2800)
    const t3 = setTimeout(() => { setPhase(0); setTick(n => n + 1) }, 5400)
    return () => [t1, t2, t3].forEach(clearTimeout)
  }, [isInView, tick])

  const order = phase === 0 ? UNSORTED : SORTED
  const displayTasks = order.map(id => TM_TASKS.find(t => t.id === id)!)

  return (
    <div ref={ref} className="rounded-2xl border border-white/5 bg-dark-100/50 p-4 overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.8, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
        <span className="text-[10px] font-mono text-brand-blue/55 tracking-widest uppercase">
          {phase === 0 ? 'Task Manager — Analyzing' : phase === 1 ? 'Task Manager — Prioritizing' : 'Task Manager — Done'}
        </span>
      </div>
      <div className="space-y-1.5">
        {displayTasks.map((task) => {
          const isHigh = task.pri === 2 && phase >= 1
          const isDone = phase === 2 && task.id === 'c'
          return (
            <motion.div
              key={task.id}
              layout
              transition={{ layout: { type: 'spring', stiffness: 300, damping: 28 } }}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border transition-colors duration-500 ${
                isDone ? 'border-white/5 opacity-40' :
                isHigh ? 'border-brand-blue/20 bg-brand-blue/5' :
                'border-white/5 bg-white/[0.02]'
              }`}
            >
              <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border transition-colors duration-500 ${
                isDone ? 'border-brand-green/40 bg-brand-green/15' :
                isHigh ? 'border-brand-blue/30' : 'border-white/10'
              }`}>
                {isDone && (
                  <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} width="8" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </motion.svg>
                )}
              </div>
              <span className={`text-xs flex-1 transition-colors duration-500 ${isDone ? 'line-through text-white/20' : isHigh ? 'text-white/80' : 'text-white/35'}`}>
                {task.label}
              </span>
              <AnimatePresence>
                {task.time && phase >= 1 && (
                  <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    className={`text-[10px] px-2 py-0.5 rounded-full transition-colors duration-500 ${
                      isHigh ? 'bg-brand-blue/15 text-brand-blue/70' : 'bg-white/5 text-white/25'
                    }`}>
                    {task.time}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// --- Core Agents ---
const agents = [
  {
    name: 'Zoe',
    role: 'The Orchestrator',
    color: 'blue',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
    description: 'The central intelligence behind everything. Zoe listens to what you need, understands your full context, and coordinates Compass and Task Manager on your behalf. It synthesizes signals from your goals, health, and schedule into clear direction — surfacing what matters before you have to ask.',
    skills: ['Natural language understanding', 'Cross-agent coordination', 'Contextual memory', 'Proactive recommendations'],
  },
  {
    name: 'Compass',
    role: 'Goals',
    color: 'green',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      </svg>
    ),
    description: "Compass is your ambition made operational. It holds your long-term goals — broken into milestones and measurable outcomes — and keeps them visible when daily chaos tries to crowd them out. When you drift, Compass notices. When you're ahead, it tells you.",
    skills: ['Goal hierarchy & milestones', 'Progress tracking', 'Health & fitness integrations', 'Calendar-aware planning'],
  },
  {
    name: 'Task Manager',
    role: 'Daily Planning',
    color: 'blue',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    description: "Task Manager takes what Compass knows and turns it into what you do today. It plans your schedule, queues tasks by priority and energy level, and adapts in real time as things shift. Not a to-do list — a living, breathing plan that moves with you.",
    skills: ['Schedule optimization', 'Priority & energy-aware queuing', 'Deadline management', 'Notion, Todoist & Calendar sync'],
  },
]

// --- Integrations ---
const integrationCategories = [
  {
    category: 'Health & Fitness',
    items: ['Apple Health', 'Strava', 'Whoop', 'Garmin', 'Oura Ring', 'MyFitnessPal', 'Fitbit'],
  },
  {
    category: 'Productivity',
    items: ['Google Calendar', 'Notion', 'Todoist', 'Readwise', 'Gmail', 'Apple Calendar'],
  },
  {
    category: 'Lifestyle',
    items: ['Spotify', 'Apple Watch', 'YouTube', 'Kindle', 'Audible'],
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-brand-blue text-sm font-medium tracking-widest uppercase mb-4">{children}</p>
  )
}

function AgentCard({ agent, index }: { agent: typeof agents[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const isBlue = agent.color === 'blue'
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`group relative p-7 rounded-2xl border transition-all duration-300 ${
        isBlue
          ? 'border-brand-blue/15 bg-brand-blue/5 hover:border-brand-blue/25'
          : 'border-brand-green/15 bg-brand-green/5 hover:border-brand-green/25'
      }`}
    >
      {/* Icon + name */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
          isBlue ? 'bg-brand-blue/15 text-brand-blue' : 'bg-brand-green/15 text-brand-green'
        }`}>
          {agent.icon}
        </div>
        <div>
          <h3 className="font-bold text-white text-lg leading-none">{agent.name}</h3>
          <p className={`text-xs font-medium mt-1 ${isBlue ? 'text-brand-blue/70' : 'text-brand-green/70'}`}>
            {agent.role}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-white/40 text-sm leading-relaxed mb-5">{agent.description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {agent.skills.map(skill => (
          <span
            key={skill}
            className={`text-xs px-2.5 py-1 rounded-full border ${
              isBlue
                ? 'border-brand-blue/20 bg-brand-blue/8 text-brand-blue/70'
                : 'border-brand-green/20 bg-brand-green/8 text-brand-green/70'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

// --- What Zoe Does (Features) data ---
const zoeFeatures = [
  {
    accent: 'blue' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Your calendar, health, and habits — unified',
    description: 'Zoe connects to your personal tools: Google Calendar, Apple Health, fitness trackers, nutrition apps, and more. It sees the full picture of your life so it can help you live it better.',
  },
  {
    accent: 'green' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Set a goal. Zoe builds the path.',
    description: "Whether it's running a marathon, writing a book, or finally taking that trip — tell Zoe what you want. It turns your ambitions into daily, actionable steps you can actually follow.",
  },
  {
    accent: 'blue' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'A team of agents working for you',
    description: "While you live your life, Zoe's agents handle the logistics — scheduling, research, reminders, planning. Not just one AI assistant, but a coordinated team that reports to you.",
  },
  {
    accent: 'green' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: 'You are the center. Always.',
    description: "Zoe is built around the human, not the algorithm. Your priorities drive it. Your data stays yours. New integrations ship constantly — and you decide what Zoe knows.",
  },
]

function ZoeFeatureCard({ feature, index }: { feature: typeof zoeFeatures[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isBlue = feature.accent === 'blue'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative p-6 rounded-2xl border border-white/5 bg-dark-100/40 hover:border-white/10 hover:bg-dark-100/80 transition-all duration-300"
    >
      <div className={`absolute inset-0 rounded-2xl ${isBlue ? 'bg-brand-blue/0 group-hover:bg-brand-blue/[0.02]' : 'bg-brand-green/0 group-hover:bg-brand-green/[0.02]'} transition-all duration-300`} />
      <div className="relative">
        <div className={`w-10 h-10 rounded-xl ${isBlue ? 'bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue/20' : 'bg-brand-green/10 text-brand-green group-hover:bg-brand-green/20'} flex items-center justify-center mb-4 transition-colors duration-300`}>
          {feature.icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2 leading-snug">{feature.title}</h3>
        <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  )
}

function ZoeFeaturesHeader() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <p className="text-brand-blue text-sm font-medium tracking-widest uppercase mb-4">What Zoe Does</p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        Built around your life.
        <br />
        <span className="text-white/40">Not your workflow.</span>
      </h2>
    </motion.div>
  )
}

// --- How It Works data ---
const zoeSteps = [
  {
    number: '01',
    title: 'Connect your world',
    description: "Link your calendar, health apps, goals, and tools. Zoe learns how you live — not how you work.",
    detail: '20+ integrations, more every week',
  },
  {
    number: '02',
    title: 'Tell Zoe what matters',
    description: 'Share a goal, a worry, a dream. Zoe asks the right questions, then maps out a real plan tailored to your life.',
    detail: 'Goals → Plans → Daily tasks',
  },
  {
    number: '03',
    title: 'Live. Zoe handles the rest.',
    description: 'Your agents stay active in the background — tracking progress, surfacing insights, adjusting plans, and making sure nothing falls through the cracks.',
    detail: 'You direct. Zoe delivers.',
  },
  {
    number: '04',
    title: 'Zoe learns you.',
    description: "Dedicated memory means Zoe builds a model of how you think, work, and live. It adapts its scheduling, UI, and recommendations to match your preferences — without you having to repeat yourself.",
    detail: 'Gets smarter the longer you use it',
  },
]

// --- Adaptive Memory Animation ---
const memoryItems = [
  { key: 'schedule', label: 'Prefers deep work before 11am', icon: '◑', color: 'blue' },
  { key: 'calendar', label: 'Avoids meetings on Fridays', icon: '◑', color: 'blue' },
  { key: 'tasks', label: 'Processes email in batches, not live', icon: '◑', color: 'green' },
  { key: 'health', label: 'Workout best after 6pm on weekdays', icon: '◑', color: 'green' },
  { key: 'focus', label: 'Focus blocks: 90min max, then break', icon: '◑', color: 'blue' },
]

function AdaptiveMemoryAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let i = 0
    const tick = () => {
      i++
      setVisible(i)
      if (i < memoryItems.length) setTimeout(tick, 700)
    }
    const t = setTimeout(tick, 600)
    return () => clearTimeout(t)
  }, [isInView])

  return (
    <div ref={ref} className="rounded-2xl border border-white/5 bg-dark-100/50 p-4 overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.8, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-brand-green" />
        <span className="text-[10px] font-mono text-brand-green/55 tracking-widest uppercase">
          Zoe Memory — Learning preferences
        </span>
      </div>
      <div className="space-y-2">
        {memoryItems.map((item, i) => (
          <AnimatePresence key={item.key}>
            {visible > i && (
              <motion.div
                initial={{ opacity: 0, x: -12, height: 0 }}
                animate={{ opacity: 1, x: 0, height: 'auto' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg border ${
                  item.color === 'blue'
                    ? 'border-brand-blue/15 bg-brand-blue/5'
                    : 'border-brand-green/15 bg-brand-green/5'
                }`}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="flex-shrink-0">
                  <path d="M1.5 5L3.5 7.5L8.5 2.5" stroke={item.color === 'blue' ? '#3B82F6' : '#10B981'} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className={`text-xs ${item.color === 'blue' ? 'text-white/55' : 'text-white/55'}`}>{item.label}</span>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
      {visible >= memoryItems.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 p-2.5 rounded-lg bg-brand-green/5 border border-brand-green/15 text-[10px] text-brand-green/60 font-mono"
        >
          ↑ Rescheduled tomorrow&apos;s standup — you have a focus block at 9am.
        </motion.div>
      )}
    </div>
  )
}

function ZoeStepCard({ step, index }: { step: typeof zoeSteps[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex gap-8 items-start"
    >
      <div className="relative flex-shrink-0 w-12 h-12 rounded-full border border-brand-blue/30 bg-brand-blue/10 flex items-center justify-center">
        <span className="text-brand-blue font-bold text-sm">{step.number}</span>
        <div className="absolute inset-0 rounded-full bg-brand-blue/5 blur-md" />
      </div>
      <div className="pt-2.5">
        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
        <p className="text-white/40 leading-relaxed mb-3 max-w-xl">{step.description}</p>
        <span className="inline-block text-xs text-brand-blue/60 font-mono border border-brand-blue/20 bg-brand-blue/5 px-3 py-1 rounded-full">
          {step.detail}
        </span>
      </div>
    </motion.div>
  )
}

function ZoeHowItWorksHeader() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-20"
    >
      <p className="text-brand-blue text-sm font-medium tracking-widest uppercase mb-4">How It Works</p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        Simple by design.
        <br />
        <span className="text-white/40">Powerful by nature.</span>
      </h2>
    </motion.div>
  )
}

export default function ZoePage() {
  const heroRef = useRef(null)
  const bridgeRef = useRef(null)
  const bridgeInView = useInView(bridgeRef, { once: true, margin: '-100px' })
  const privacyRef = useRef(null)
  const privacyInView = useInView(privacyRef, { once: true, margin: '-100px' })
  const intRef = useRef(null)
  const intInView = useInView(intRef, { once: true, margin: '-100px' })

  return (
    <div className="min-h-screen bg-dark-DEFAULT">

      {/* Hero */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-blue opacity-[0.05] blur-[140px]" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-green opacity-[0.03] blur-[120px]" />
        </div>
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="mb-10">
            <MiniOrb />
          </div>
          <p className="text-brand-blue text-sm font-medium tracking-widest uppercase mb-4">Personal AI Operating System</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Zoe
          </h1>
          <p className="text-xl text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            A team of AI agents working quietly in the background of your life — so you can focus on living it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-brand-blue text-white hover:bg-brand-blue-light transition-all duration-200 shadow-[0_0_24px_#3B82F644] hover:shadow-[0_0_36px_#3B82F666]"
            >
              Sign up free
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-white/25 transition-all duration-200"
            >
              All products
            </Link>
          </div>
        </motion.div>
      </section>

      {/* What Zoe Does — Features */}
      <section className="relative py-32 px-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-5xl mx-auto">
          <ZoeFeaturesHeader />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {zoeFeatures.map((feature, i) => (
              <ZoeFeatureCard key={i} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative py-32 px-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-brand-blue opacity-[0.03] blur-[100px] -translate-y-1/2" />
        </div>
        <div className="max-w-5xl mx-auto">
          <ZoeHowItWorksHeader />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Steps */}
            <div className="relative">
              <div className="absolute left-[2.6rem] top-12 bottom-12 w-px bg-gradient-to-b from-brand-blue/20 via-brand-blue/10 to-transparent hidden md:block" />
              <div className="space-y-12">
                {zoeSteps.map((step, i) => (
                  <ZoeStepCard key={i} step={step} index={i} />
                ))}
              </div>
            </div>
            {/* Animations */}
            <div className="lg:pt-4 space-y-6">
              <div>
                <div className="text-[10px] text-white/20 uppercase tracking-widest mb-3 font-medium">Task analysis</div>
                <TaskManagerAnimation />
                <p className="text-white/20 text-xs mt-3 leading-relaxed">
                  Task Manager sorts your day by priority, deadline, and energy level — in real time.
                </p>
              </div>
              <div>
                <div className="text-[10px] text-white/20 uppercase tracking-widest mb-3 font-medium">Adaptive memory</div>
                <AdaptiveMemoryAnimation />
                <p className="text-white/20 text-xs mt-3 leading-relaxed">
                  Zoe builds a model of your habits and preferences — and starts acting on them without being asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orb Experience */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-blue opacity-[0.04] blur-[130px]" />
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>The Experience</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Talk to Zoe.
              <br />
              <span className="text-white/40">Or just let it work.</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              The Orb is always a tap away — on your phone, your desktop, your lock screen.
              Ask it anything. Or say nothing, and watch your agents run quietly in the background,
              keeping your day on track without interrupting it.
            </p>
          </div>
          <ZoeDemo />
        </div>
      </section>

      {/* Core Agents */}
      <section className="relative py-24 px-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Meet Your Agents</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Three agents.
              <br />
              <span className="text-white/40">One team. Working for you.</span>
            </h2>
            <p className="text-white/35 mt-4 max-w-2xl mx-auto">
              Zoe orchestrates everything. Compass holds your goals. Task Manager owns your day.
              Together, they share context through your integrations — so nothing is ever siloed,
              and nothing falls through the cracks.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {agents.map((agent, i) => (
              <AgentCard key={agent.name} agent={agent} index={i} />
            ))}
          </div>
          {/* Connection callout */}
          <div className="mt-8 p-5 rounded-xl border border-white/5 bg-white/[0.02] text-center">
            <p className="text-white/30 text-sm">
              All three agents share context through your connected tools — health apps, calendar, productivity platforms, and more.
              They coordinate, not just coexist.
            </p>
          </div>
        </div>
      </section>

      {/* Desktop Bridge */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-green opacity-[0.03] blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto" ref={bridgeRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={bridgeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl border border-white/5 bg-dark-100/60 p-6 overflow-hidden">
                {/* Fake terminal / bridge UI */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-brand-green/60" />
                  <span className="text-brand-green text-xs font-mono">Desktop Bridge — Connected</span>
                  <div className="ml-auto flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10 animate-pulse" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '0.3s' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '0.6s' }} />
                  </div>
                </div>
                <div className="space-y-2 font-mono text-xs">
                  {[
                    { prompt: '>', text: 'Open the Figma project in ~/Design/Q2-launch/', color: 'text-white/30' },
                    { prompt: '◆', text: 'Locating file on home machine...', color: 'text-blue-400/60' },
                    { prompt: '◆', text: 'Syncing latest version via Desktop Bridge', color: 'text-blue-400/60' },
                    { prompt: '✓', text: 'File ready. Opened in browser.', color: 'text-emerald-400/70' },
                    { prompt: '>', text: 'Save my notes from today to ~/Notes/', color: 'text-white/30' },
                    { prompt: '✓', text: 'Saved. notes-2026-03-09.md created.', color: 'text-emerald-400/70' },
                  ].map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={bridgeInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.12, duration: 0.3 }}
                      className={`flex gap-2 ${line.color}`}
                    >
                      <span className="flex-shrink-0 w-4">{line.prompt}</span>
                      <span>{line.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={bridgeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="order-1 lg:order-2"
            >
              <SectionLabel>Desktop Bridge</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Your home machine,
                <br />
                <span className="text-white/40">from anywhere.</span>
              </h2>
              <p className="text-white/40 leading-relaxed mb-6">
                The Zoe Desktop Bridge runs quietly on your home computer. When you&apos;re out,
                on your phone, or on a different machine, Zoe can still access your local files,
                open applications, update documents, and manage your system — as if you were sitting right there.
              </p>
              <ul className="space-y-3">
                {[
                  'Access any file on your home machine remotely',
                  'Read, write, and organize documents through Zoe',
                  'Run automations and scripts from your phone',
                  'End-to-end encrypted — only you have the keys',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/50">
                    <span className="w-4 h-4 rounded-full bg-brand-green/15 flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="relative py-24 px-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-5xl mx-auto text-center" ref={intRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={intInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Integrations</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Plugs into your life.
              <br />
              <span className="text-white/40">Not the other way around.</span>
            </h2>
            <p className="text-white/35 max-w-xl mx-auto mb-12">
              Zoe connects to the apps you already use — health, fitness, calendar,
              and productivity — with new integrations shipping every week.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {integrationCategories.map((cat, ci) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                animate={intInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className="p-5 rounded-xl border border-white/5 bg-dark-100/30"
              >
                <div className={`text-xs font-medium tracking-widest uppercase mb-4 ${ci % 2 === 0 ? 'text-brand-blue' : 'text-brand-green'}`}>
                  {cat.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map(item => (
                    <span key={item} className="px-2.5 py-1 rounded-full border border-white/8 bg-white/[0.03] text-white/40 text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Control */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-brand-blue opacity-[0.04] blur-[100px]" />
        </div>
        <div className="max-w-5xl mx-auto" ref={privacyRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={privacyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>Privacy & Control</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Your models.
                <br />
                Your keys.
                <br />
                <span className="text-white/40">Your data.</span>
              </h2>
              <p className="text-white/40 leading-relaxed">
                Zoe is built on the principle that your intelligence system should be yours — fully.
                You connect your own API keys, choose which models power which agents,
                and decide exactly what data each integration can see.
                We never train on your data. We never sell it. Full stop.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={privacyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { title: 'BYO API keys', desc: 'Use OpenAI, Anthropic, Gemini, or local models via Ollama.' },
                { title: 'Zero training', desc: 'Your conversations and data are never used to train any model.' },
                { title: 'Per-integration permissions', desc: 'Choose exactly what each connected service can read.' },
                { title: 'Open audit log', desc: 'Every action Zoe takes on your behalf is logged and reviewable.' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl border border-white/5 bg-dark-100/40">
                  <div className="w-1 h-4 rounded-full bg-gradient-to-b from-brand-blue to-brand-green mb-3" />
                  <div className="font-medium text-white text-sm mb-1">{item.title}</div>
                  <div className="text-white/30 text-xs leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-brand-blue opacity-[0.05] blur-[100px]" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Ready to put AI
            <br />
            <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              to work for your life?
            </span>
          </h2>
          <p className="text-white/40 mb-10">
            Sign up free. No credit card required.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium rounded-xl bg-brand-blue text-white hover:bg-brand-blue-light transition-all duration-200 shadow-[0_0_30px_#3B82F644] hover:shadow-[0_0_50px_#3B82F666]"
          >
            Get started with Zoe
          </Link>
        </div>
      </section>

    </div>
  )
}
