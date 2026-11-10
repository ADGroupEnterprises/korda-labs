'use client'
import { APP_SIGNUP_URL } from '@/lib/links'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import KeelProductDemo from '@/components/KeelProductDemo'
import { Zoe, ZoeBadge, KeelLockup } from '@/components/marks/Brand'

// --- Lens component (compact version) ---
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
    return () => [t1, t2].forEach(clearTimeout)
  }, [isInView, tick])

  const order = phase === 0 ? UNSORTED : SORTED
  const displayTasks = order.map(id => TM_TASKS.find(t => t.id === id)!)

  return (
    <div ref={ref} className="rounded-2xl border border-mist bg-paper-100 p-4 overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-[10px] font-mono text-accent tracking-widest uppercase">
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
                isDone ? 'border-mist opacity-40' :
                isHigh ? 'border-mist bg-mist' :
                'border-mist bg-mist'
              }`}
            >
              <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border transition-colors duration-500 ${
                isDone ? 'border-accent bg-mist' :
                isHigh ? 'border-mist' : 'border-mist'
              }`}>
                {isDone && (
                  <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} width="8" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#3D64AE" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </motion.svg>
                )}
              </div>
              <span className={`text-xs flex-1 transition-colors duration-500 ${isDone ? 'line-through text-ink' : isHigh ? 'text-ink' : 'text-ink'}`}>
                {task.label}
              </span>
              <AnimatePresence>
                {task.time && phase >= 1 && (
                  <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    className={`text-[10px] px-2 py-0.5 rounded-full transition-colors duration-500 ${
                      isHigh ? 'bg-mist text-accent' : 'bg-mist text-ink'
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
    role: 'The Skipper',
    color: 'blue',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
    description: 'The skipper of the crew. Zoe listens to what you need, understands your full context, and coordinates Compass and Task Manager on your behalf. She synthesizes signals from your goals, health, and schedule into clear direction — surfacing what matters before you have to ask.',
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
    skills: ['Goal hierarchy & milestones', 'Progress tracking', 'Personal & fitness integrations', 'Calendar-aware planning'],
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
    category: 'Personal & Fitness',
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
    <p className="text-accent eyebrow mb-4">{children}</p>
  )
}

function AgentCard({ agent, index }: { agent: typeof agents[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const isBlue = agent.color === 'blue'
  const isGreen = agent.color === 'green'
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`group relative p-7 rounded-2xl border transition-all duration-300 ${
        isBlue
          ? 'border-mist bg-mist hover:border-accent'
          : 'border-mist bg-mist hover:border-accent'
      }`}
    >
      {/* Name */}
      <div className="mb-4">
        <h3 className="font-medium text-lg leading-none text-accent">{agent.name}</h3>
        <p className="text-xs font-medium mt-1 text-accent">
          {agent.role}
        </p>
      </div>

      {/* Description */}
      <p className="text-ink text-sm leading-relaxed mb-5">{agent.description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {agent.skills.map(skill => (
          <span
            key={skill}
            className="text-xs px-2.5 py-1 rounded-full border border-accent bg-mist text-accent"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

// --- What it does (Features) data ---
const keelFeatures = [
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
    title: 'Calendar, health, habits. One view.',
    description: 'Google Calendar, Apple Health, fitness trackers, nutrition apps. Keel reads them all and plans against the whole picture.',
  },
  {
    accent: 'green' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Set a goal. Get a plan.',
    description: "A marathon, a book, a launch. Tell Keel. It breaks the goal into daily steps and puts them on your calendar.",
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
    title: 'A crew, on call',
    description: "Scheduling, research, reminders, planning. Each goes to the agent built for it. All of them report to you.",
  },
  {
    accent: 'green' as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: 'You decide what Keel knows',
    description: "Your priorities drive the plan. Your data stays yours. Every integration is opt-in.",
  },
]

function KeelFeatureCard({ feature, index }: { feature: typeof keelFeatures[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isBlue = feature.accent === 'blue'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative p-6 rounded-2xl border border-mist bg-mist hover:border-mist hover:bg-mist transition-all duration-300"
    >
      <div className={`absolute inset-0 rounded-2xl ${isBlue ? 'bg-transparent group-hover:bg-mist' : 'bg-transparent group-hover:bg-mist'} transition-all duration-300`} />
      <div className="relative">
        <h3 className="text-lg font-medium text-ink mb-2 leading-snug">{feature.title}</h3>
        <p className="text-ink text-sm leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  )
}

function KeelFeaturesHeader() {
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
      <p className="text-accent eyebrow mb-4">What it does</p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight">
        Your whole day.
        <br />
        <span className="text-ink">One app.</span>
      </h2>
    </motion.div>
  )
}

// --- How it works data ---
const keelSteps = [
  {
    number: '01',
    title: 'Connect',
    description: "Link your calendar, apps, goals and tools.",
    detail: '20+ integrations and growing',
  },
  {
    number: '02',
    title: 'Set a goal',
    description: 'Keel asks what it needs to, then builds the plan.',
    detail: 'Goals → Plans → Daily tasks',
  },
  {
    number: '03',
    title: 'Keel picks the model',
    description: 'Each task is routed to the model that fits it on cost, speed and capability. Add a new model in one click.',
    detail: 'Smart routing across OpenAI, Anthropic, Gemini, local models',
  },
  {
    number: '04',
    title: 'The crew works',
    description: 'Agents run in the background: tracking progress, adjusting the plan, flagging what needs you.',
    detail: 'You direct. The crew delivers.',
  },
  {
    number: '05',
    title: 'Keel remembers',
    description: "Keel keeps your preferences and plans around them. You say it once.",
    detail: 'Preferences, kept',
  },
]

// --- Adaptive Memory Animation ---
const memoryItems = [
  { key: 'schedule', label: 'Prefers deep work before 11am', icon: '◑', color: 'blue' },
  { key: 'calendar', label: 'Avoids meetings on Fridays', icon: '◑', color: 'blue' },
  { key: 'tasks', label: 'Processes email in batches, not live', icon: '◑', color: 'blue' },
  { key: 'health', label: 'Workout best after 6pm on weekdays', icon: '◑', color: 'blue' },
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
    <div ref={ref} className="rounded-2xl border border-mist bg-paper-100 p-4 overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-[10px] font-mono text-accent tracking-widest uppercase">
          Keel Memory — Learning preferences
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
                    ? 'border-mist bg-mist'
                    : 'border-mist bg-mist'
                }`}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="flex-shrink-0">
                  <path d="M1.5 5L3.5 7.5L8.5 2.5" stroke={item.color === 'blue' ? '#3D64AE' : '#3D64AE'} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className={`text-xs ${item.color === 'blue' ? 'text-ink' : 'text-ink'}`}>{item.label}</span>
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
          className="mt-3 p-2.5 rounded-lg bg-mist border border-mist text-[10px] text-accent font-mono"
        >
          ↑ Rescheduled tomorrow&apos;s standup — you have a focus block at 9am.
        </motion.div>
      )}
    </div>
  )
}

function KeelStepCard({ step, index }: { step: typeof keelSteps[0]; index: number }) {
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
      <div className="relative flex-shrink-0 w-12 h-12 rounded-full border border-mist bg-mist flex items-center justify-center">
        <span className="text-accent font-medium text-sm">{step.number}</span>
        <div className="absolute inset-0 rounded-full bg-mist" />
      </div>
      <div className="pt-2.5">
        <h3 className="text-xl font-medium text-ink mb-2">{step.title}</h3>
        <p className="text-ink leading-relaxed mb-3 max-w-xl">{step.description}</p>
        <span className="inline-block text-xs text-accent font-medium border border-mist bg-mist px-3 py-1 rounded-full">
          {step.detail}
        </span>
      </div>
    </motion.div>
  )
}

function KeelHowItWorksHeader() {
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
      <p className="text-accent eyebrow mb-4">How it works</p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight">
        Five steps.
        <br />
        <span className="text-ink">You do the first two.</span>
      </h2>
    </motion.div>
  )
}

export default function KeelPage() {
  const heroRef = useRef(null)
  const bridgeRef = useRef(null)
  const bridgeInView = useInView(bridgeRef, { once: true, margin: '-100px' })
  const privacyRef = useRef(null)
  const privacyInView = useInView(privacyRef, { once: true, margin: '-100px' })
  const intRef = useRef(null)
  const intInView = useInView(intRef, { once: true, margin: '-100px' })

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <Zoe pose="salute" className="w-40 sm:w-48 h-auto" />
          </div>
          <div className="flex justify-center mb-8">
            <KeelLockup className="h-14 sm:h-16 w-auto" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-6">
            Plan it in Keel. <span className="text-accent">Hand it off.</span>
          </h1>
          <p className="text-xl text-ink max-w-xl mx-auto mb-10 leading-relaxed">
            Tasks, calendar and goals in one app. A crew of agents that does the work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={APP_SIGNUP_URL}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-accent text-paper hover:bg-navy transition-all duration-300"
            >
              Get Keel

            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full border border-ink/15 text-ink hover:text-ink hover:border-mist transition-all duration-300"
            >
              All products
            </Link>
          </div>
        </motion.div>
      </section>

      {/* What it does — Features */}
      <section className="relative py-40 px-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-mist" />
        <div className="max-w-5xl mx-auto">
          <KeelFeaturesHeader />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {keelFeatures.map((feature, i) => (
              <KeelFeatureCard key={i} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] text-ink"
          >
            Keel plans the work.
            <br />
            <span className="text-ink">Then does it.</span>
          </motion.p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="relative py-40 px-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-mist" />
        <div className="max-w-5xl mx-auto">
          <KeelHowItWorksHeader />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Steps */}
            <div className="relative">
              <div className="absolute left-[2.6rem] top-12 bottom-12 w-px bg-mist hidden md:block" />
              <div className="space-y-12">
                {keelSteps.map((step, i) => (
                  <KeelStepCard key={i} step={step} index={i} />
                ))}
              </div>
            </div>
            {/* Animations */}
            <div className="lg:pt-4 space-y-6">
              <div>
                <div className="text-[10px] text-ink uppercase tracking-widest mb-3 font-medium">Task analysis</div>
                <TaskManagerAnimation />
                <p className="text-ink text-xs mt-3 leading-relaxed">
                  Task Manager sorts your day by priority, deadline, and energy level — in real time.
                </p>
              </div>
              <div>
                <div className="text-[10px] text-ink uppercase tracking-widest mb-3 font-medium">Adaptive memory</div>
                <AdaptiveMemoryAnimation />
                <p className="text-ink text-xs mt-3 leading-relaxed">
                  Keel builds a model of your habits and preferences — and starts acting on them without being asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lens Experience */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-mist" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-4">
              Talk to Keel.
              <br />
              <span className="text-ink">Or let it work.</span>
            </h2>
            <p className="text-ink max-w-xl mx-auto">
              The Lens is one tap away on your phone, desktop and lock screen. Ask, or say nothing. The crew keeps working either way.
            </p>
          </div>
          <KeelProductDemo />
        </div>
      </section>

      {/* Core Agents */}
      <section className="relative py-32 px-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-mist" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>The crew</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
              Three agents.
              <br />
              <span className="text-ink">One crew.</span>
            </h2>
            <p className="text-ink mt-4 max-w-2xl mx-auto">
              Zoe runs the crew. Compass holds your goals. Task Manager owns your day. They share one context.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {agents.map((agent, i) => (
              <AgentCard key={agent.name} agent={agent} index={i} />
            ))}
          </div>
          {/* Connection callout */}
          <div className="mt-8 p-5 rounded-xl border border-mist bg-mist text-center">
            <p className="text-ink text-sm">
              All three read from the same connected tools: health, calendar, productivity. One picture, three jobs.
            </p>
          </div>
        </div>
      </section>

      {/* Desktop Bridge */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-mist" />
        <div className="max-w-5xl mx-auto" ref={bridgeRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={bridgeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl border border-navy bg-ink p-6 overflow-hidden">
                {/* Fake terminal / bridge UI */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-accent text-xs font-mono">Desktop Bridge — Connected</span>
                  <div className="ml-auto">
                    <ZoeBadge size={26} variant="inverse" />
                  </div>
                </div>
                <div className="space-y-2 font-mono text-xs">
                  {[
                    { prompt: '>', text: 'Open the Figma project in ~/Design/Q2-launch/', color: 'text-paper' },
                    { prompt: '◆', text: 'Locating file on home machine...', color: 'text-mist' },
                    { prompt: '◆', text: 'Syncing latest version via Desktop Bridge', color: 'text-mist' },
                    { prompt: '✓', text: 'File ready. Opened in browser.', color: 'text-accent' },
                    { prompt: '>', text: 'Save my notes from today to cloud storage', color: 'text-paper' },
                    { prompt: '✓', text: 'Saved. notes-2026-03-09.md created.', color: 'text-accent' },
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
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-6">
                Your home machine,
                <br />
                <span className="text-ink">from anywhere.</span>
              </h2>
              <p className="text-ink leading-relaxed mb-6">
                The Desktop Bridge runs on your home computer. From your phone or another machine, Keel can reach local files, open applications and update documents.
                Sensitive work can stay on local models.
              </p>
              <ul className="space-y-3">
                {[
                  'Access any file on your home machine remotely',
                  'Read, write, and organize documents through Keel',
                  'Run automations and tasks from your phone',
                  'End-to-end encrypted — only you have the keys',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-ink">
                    <span className="w-4 h-4 rounded-full bg-mist flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#3D64AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
      <section className="relative py-32 px-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-mist" />
        <div className="max-w-5xl mx-auto text-center" ref={intRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={intInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-4">
              Works with what
              <br />
              <span className="text-ink">you already use.</span>
            </h2>
            <p className="text-ink max-w-xl mx-auto mb-12">
              Health, fitness, calendar and productivity apps. More ship regularly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {integrationCategories.map((cat, ci) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                animate={intInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className="p-5 rounded-xl border border-mist bg-mist"
              >
                <div className={`text-xs font-medium tracking-widest uppercase mb-4 ${'text-accent'}`}>
                  {cat.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map(item => (
                    <span key={item} className="px-2.5 py-1 rounded-full border border-mist bg-mist text-ink text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Keel Actually Does — Execution examples */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-mist" />
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-accent eyebrow mb-4">Execution</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
              The job,
              <br />
              <span className="text-ink">start to finish.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                trigger: 'Compass detects a goal milestone approaching',
                action: 'Researcher agent searches 12 sources, reads 8 pages, drafts a 2-page brief',
                output: 'Delivered to your Google Drive before your morning meeting',
                label: 'Research brief',
              },
              {
                trigger: "Proactive engine fires every Sunday evening",
                action: "Task Manager reviews the week's completed tasks, goal progress, and calendar",
                output: 'Summary sent to your phone with next week\'s priorities pre-loaded',
                label: 'Weekly retrospective',
              },
              {
                trigger: 'Monthly file audit scheduled in Task Manager',
                action: 'Agent reads your Drive, applies your naming convention, moves files',
                output: 'Organized folder delivered to your approved storage location',
                label: 'File organization',
              },
              {
                trigger: 'GitHub webhook fires on new PR',
                action: 'Analyst agent reads the diff, checks your coding standards, summarizes risks',
                output: 'Review summary posted as a comment before you open the PR',
                label: 'Code review assist',
              },
            ].map((ex, i) => (
              <div key={i} className="p-6 rounded-2xl border border-mist bg-mist">
                <p className="eyebrow text-accent mb-4">{ex.label}</p>
                <div className="space-y-3">
                  <div className="flex gap-2.5">
                    <span className="text-ink text-xs mt-0.5 flex-shrink-0">Trigger</span>
                    <span className="text-ink text-sm leading-relaxed">{ex.trigger}</span>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="text-ink text-xs mt-0.5 flex-shrink-0">Action</span>
                    <span className="text-ink text-sm leading-relaxed">{ex.action}</span>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="text-ink text-xs mt-0.5 flex-shrink-0">Output</span>
                    <span className="text-ink text-sm leading-relaxed font-medium">{ex.output}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proactive Engine */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-mist" />
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <p className="text-accent eyebrow mb-4">Proactive engine</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                Keel speaks first.
                <br />
                <span className="text-ink">When it matters.</span>
              </h2>
            </div>
            <p className="text-ink leading-relaxed">
              Seven triggers run on their own. Some Keel handles. The rest it brings to you with a recommendation. You decide.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { time: '7:00 am daily', title: 'Morning briefing', body: 'Your goals, schedule, and priority tasks — ready before you open your laptop.' },
              { time: 'After 4h inactivity', title: 'Stale task alert', body: 'When a task sits in review too long, Keel flags it and asks if you want it rescheduled.' },
              { time: 'When activity drops', title: 'Goal momentum check', body: 'Compass notices when a goal goes quiet and surfaces it before it becomes a miss.' },
              { time: 'End of each day', title: 'Daily summary', body: "What got done, what shifted, and tomorrow's plan — automatic." },
              { time: 'Every Sunday', title: 'Weekly retrospective', body: 'Full-week review with goal progress, time spent, and next week\'s priorities.' },
              { time: 'When progress < 30%', title: 'Goal gap alert', body: 'When a goal category falls behind, Compass flags it with a suggested action.' },
              { time: 'When work dominates', title: 'Domain overload warning', body: 'When work starts to crowd out personal goals, Keel notices the imbalance and tells you.' },
            ].map((trigger, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl border border-mist bg-mist items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <span className="text-xs font-medium text-ink whitespace-nowrap">{trigger.time}</span>
                </div>
                <div>
                  <h3 className="text-ink font-medium text-sm mb-1">{trigger.title}</h3>
                  <p className="text-ink text-xs leading-relaxed">{trigger.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Control */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-mist" />
        <div className="max-w-5xl mx-auto" ref={privacyRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={privacyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-6">
                Your models.
                <br />
                Your keys.
                <br />
                <span className="text-ink">Your data.</span>
              </h2>
              <p className="text-ink leading-relaxed">
                Connect your own API keys. Choose which model powers which agent. Decide what each integration can see. Your data is never used for training and never sold.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={privacyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { title: 'BYO API keys', desc: 'Use OpenAI, Anthropic, Gemini, or local models via Ollama.' },
                { title: 'Zero training', desc: 'Your conversations and data are never used to train any model.' },
                { title: 'Default-deny execution', desc: 'No autonomous action runs until you explicitly enable it. File access, web search, browser automation — all off by default.' },
                { title: 'Resource pattern policies', desc: 'Specify exactly which folders, domains, and services each agent can touch.' },
                { title: 'Daily action limits', desc: 'Set a max number of file writes, web searches, or tool calls per day. Keel stops and asks when approaching the limit.' },
                { title: 'Immutable audit log', desc: 'Every tool call logged with timestamp, result, and cost. Every action reviewable. 30-day minimum retention.' },
                { title: 'Abort at any time', desc: 'If a running agent does something unexpected, one tap stops it mid-execution. Keel tells you what it completed before stopping.' },
                { title: 'Confidential task routing', desc: 'Sensitive tasks never touch cloud models — they route to local models only via your Desktop Bridge.' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl border border-mist bg-mist">
                  <div className="w-1 h-4 rounded-full bg-accent mb-3" />
                  <div className="font-medium text-ink text-sm mb-1">{item.title}</div>
                  <div className="text-ink text-xs leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-40 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-mist" />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
            Your day,
            <br />
            <span className="text-accent">
              handled.
            </span>
          </h2>
          <p className="text-ink mb-10">
            Free on web.
          </p>
          <Link
            href={APP_SIGNUP_URL}
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium rounded-full bg-accent text-paper hover:bg-navy transition-all duration-300"
          >
            Get Keel
          </Link>
        </div>
      </section>

    </div>
  )
}
