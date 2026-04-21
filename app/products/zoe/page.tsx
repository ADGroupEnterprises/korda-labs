'use client'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import ZoeProductDemo from '@/components/ZoeProductDemo'

// --- Zoe logo hero (replaces MiniOrb) ---
function MiniOrb() {
  return (
    <div className="zoe-logo-wrapper flex justify-center">
      <svg viewBox="0 0 472.797 423.24" width="120" height="120" xmlns="http://www.w3.org/2000/svg" aria-label="Zoe">
        <defs>
          <style>{`
            .zoe-spark { opacity: 0; }
            .zoe-logo-wrapper:hover .sp1  { animation: zoe-spk 2.2s 0.00s infinite; }
            .zoe-logo-wrapper:hover .sp2  { animation: zoe-spk 1.9s 0.35s infinite; }
            .zoe-logo-wrapper:hover .sp3  { animation: zoe-spk 2.5s 0.70s infinite; }
            .zoe-logo-wrapper:hover .sp4  { animation: zoe-spk 1.7s 1.05s infinite; }
            .zoe-logo-wrapper:hover .sp5  { animation: zoe-spk 2.0s 0.15s infinite; }
            .zoe-logo-wrapper:hover .sp6  { animation: zoe-spk 2.3s 0.50s infinite; }
            .zoe-logo-wrapper:hover .sp7  { animation: zoe-spk 1.8s 0.85s infinite; }
            .zoe-logo-wrapper:hover .sp8  { animation: zoe-spk 2.4s 0.28s infinite; }
            .zoe-logo-wrapper:hover .sp9  { animation: zoe-spk 1.6s 0.62s infinite; }
            .zoe-logo-wrapper:hover .sp10 { animation: zoe-spk 2.1s 0.97s infinite; }
            .zoe-logo-wrapper:hover .sp11 { animation: zoe-spk 2.6s 0.42s infinite; }
            .zoe-logo-wrapper:hover .sp12 { animation: zoe-spk 1.8s 0.78s infinite; }
            .zoe-logo-wrapper:hover .sp13 { animation: zoe-spk 2.2s 0.20s infinite; }
            .zoe-logo-wrapper:hover .sp14 { animation: zoe-spk 1.9s 0.55s infinite; }
            @keyframes zoe-spk {
              0%,  7% { opacity: 0; }
              9%      { opacity: 1; }
              14%     { opacity: 0.3; }
              16%     { opacity: 1; }
              24%     { opacity: 0; }
              100%    { opacity: 0; }
            }
          `}</style>
        </defs>
        <path fill="none" stroke="#8b4e27" strokeWidth="12.189" strokeMiterlimit="10" d="M300.714,22.235C229.885,6.343,170.333-6.043,102.775,26.593c-26.996,13.041-57.366,28.335-77.623,68.629C4.377,136.546-.989,194.67,16.959,240.65c24.915,63.831,103.709,91.744,142.309,91.505,7.543-.047,40.698-7.158,66.842,2.179,5.208,1.86,8.845,5.268,11.207,10.349,11.006,23.671-21.167,73.644-22.851,72.442-.877-.627-.19-19.897,6.601-31.804,9.048-15.864,29.245-27.166,79.647-38.459,52.297-11.717,49.292-6.185,79.779-12.528,14.712-3.06,42.868-23.248,63.824-62.093,5.532-10.254,25.41-48.302,21.993-100.765-.363-5.577-2.806-38.779-18.543-69.174-27.025-52.195-76.785-64.301-147.053-80.067Z"/>
        <path fill="none" stroke="#d1cdc7" strokeWidth="8.504" strokeMiterlimit="10" d="M290.817,41.158c-59.929-13.446-110.317-23.927-167.479,3.687-22.842,11.034-48.538,23.974-65.678,58.068-17.578,34.965-22.118,84.144-6.933,123.049,21.081,54.008,87.75,77.626,120.41,77.424,6.383-.039,34.435-6.056,56.556,1.843,4.407,1.574,35.721,13.318,63.124,10.6,44.829-4.447,41.706-5.233,67.502-10.6,12.448-2.59,36.271-19.671,54.002-52.538,4.681-8.676,21.5-40.869,18.609-85.259-.307-4.718-2.374-32.812-15.69-58.529-22.866-44.163-64.969-54.406-124.424-67.746Z"/>
        {/* sp1 tiny cream */}
        <g className="zoe-spark sp1" transform="translate(150,145)">
          <path fill="none" stroke="#d1cdc7" strokeWidth="0.8" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-12,0 L-12,8 L-5,8 L-5,14"/>
          <path fill="none" stroke="#d1cdc7" strokeWidth="0.5" strokeLinecap="square" strokeLinejoin="miter" d="M-12,0 L-18,-7"/>
        </g>
        {/* sp2 tiny cream */}
        <g className="zoe-spark sp2" transform="translate(178,190)">
          <path fill="none" stroke="#d1cdc7" strokeWidth="0.8" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L0,-11 L9,-11 L9,-5 L15,-5"/>
          <path fill="none" stroke="#d1cdc7" strokeWidth="0.5" strokeLinecap="square" strokeLinejoin="miter" d="M0,-11 L-6,-17"/>
        </g>
        {/* sp3 small copper */}
        <g className="zoe-spark sp3" transform="translate(195,222)">
          <path fill="none" stroke="#8A4E28" strokeWidth="1.2" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-8,-7 L-17,-7 L-17,-15 L-10,-15 L-10,-22"/>
          <path fill="none" stroke="#8A4E28" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-17,-7 L-22,2"/>
        </g>
        {/* sp4 small copper */}
        <g className="zoe-spark sp4" transform="translate(220,258)">
          <path fill="none" stroke="#8A4E28" strokeWidth="1.0" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L7,-9 L7,-18 L-1,-18 L-1,-25"/>
          <path fill="none" stroke="#8A4E28" strokeWidth="0.5" strokeLinecap="square" strokeLinejoin="miter" d="M7,-9 L14,-7"/>
        </g>
        {/* sp5 medium cream */}
        <g className="zoe-spark sp5" transform="translate(245,112)">
          <path fill="none" stroke="#d1cdc7" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-7,-13 L-16,-13 L-16,-5 L-24,-5 L-24,-15 L-17,-15"/>
          <path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-16,-13 L-9,-21 L-9,-28"/>
          <path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-24,-5 L-31,-11"/>
        </g>
        {/* sp6 medium cream */}
        <g className="zoe-spark sp6" transform="translate(314,128)">
          <path fill="none" stroke="#d1cdc7" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-9,0 L-9,-12 L0,-12 L0,-21 L-9,-21"/>
          <path fill="none" stroke="#d1cdc7" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-9,-12 L-15,-7 L-22,-12"/>
          <path fill="none" stroke="#d1cdc7" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M0,-12 L6,-7"/>
        </g>
        {/* sp7 medium cream */}
        <g className="zoe-spark sp7" transform="translate(348,162)">
          <path fill="none" stroke="#d1cdc7" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-7,-9 L-7,-20 L2,-20 L2,-28"/>
          <path fill="none" stroke="#d1cdc7" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-7,-20 L-15,-16 L-20,-23"/>
          <path fill="none" stroke="#d1cdc7" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M2,-20 L8,-16"/>
        </g>
        {/* sp8 medium copper */}
        <g className="zoe-spark sp8" transform="translate(288,148)">
          <path fill="none" stroke="#8A4E28" strokeWidth="2.0" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-4,-15 L-13,-15 L-13,-6 L-22,-6 L-22,-16"/>
          <path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-13,-15 L-7,-23 L-13,-30"/>
          <path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-4,-15 L4,-11 L4,-19"/>
        </g>
        {/* sp9 medium copper */}
        <g className="zoe-spark sp9" transform="translate(355,210)">
          <path fill="none" stroke="#8A4E28" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L0,-13 L-9,-13 L-9,-5 L-18,-5 L-18,-15"/>
          <path fill="none" stroke="#8A4E28" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-9,-13 L-3,-21 L-9,-27"/>
          <path fill="none" stroke="#8A4E28" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-18,-5 L-25,-11"/>
        </g>
        {/* sp10 medium copper */}
        <g className="zoe-spark sp10" transform="translate(378,238)">
          <path fill="none" stroke="#8A4E28" strokeWidth="2.0" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-9,-7 L-9,-19 L-2,-19 L-2,-28 L-11,-28"/>
          <path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-9,-19 L-17,-14 L-24,-20"/>
          <path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-2,-19 L5,-15"/>
        </g>
        {/* sp11 LARGE copper — the anchor spark */}
        <g className="zoe-spark sp11" transform="translate(264,198)">
          <path fill="none" stroke="#8A4E28" strokeWidth="3.0" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-11,-13 L-11,-26 L-3,-26 L-3,-36"/>
          <path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-11,-13 L-22,-9 L-30,-16"/>
          <path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-11,-26 L-21,-22 L-29,-29"/>
          <path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-3,-26 L8,-22 L15,-30"/>
          <path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L11,-5 L11,-17 L4,-17"/>
          <path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-4,11 L-13,11 L-13,4"/>
        </g>
        {/* sp12 large cream */}
        <g className="zoe-spark sp12" transform="translate(184,228)">
          <path fill="none" stroke="#d1cdc7" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-7,-13 L-7,-24 L2,-24 L2,-34 L-7,-34"/>
          <path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-7,-13 L-18,-9 L-24,-16"/>
          <path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-7,-24 L-17,-20"/>
          <path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M2,-24 L11,-20 L16,-28"/>
        </g>
        {/* sp13 medium copper */}
        <g className="zoe-spark sp13" transform="translate(308,194)">
          <path fill="none" stroke="#8A4E28" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-9,-7 L-16,-7 L-16,-16 L-7,-16 L-7,-24"/>
          <path fill="none" stroke="#8A4E28" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-16,-7 L-23,-14 L-28,-9"/>
          <path fill="none" stroke="#8A4E28" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-7,-16 L0,-22"/>
        </g>
        {/* sp14 medium cream */}
        <g className="zoe-spark sp14" transform="translate(357,268)">
          <path fill="none" stroke="#d1cdc7" strokeWidth="2.0" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L0,-13 L-9,-13 L-9,-22 L-2,-22 L-2,-31"/>
          <path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-9,-13 L-17,-9 L-22,-16"/>
          <path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-9,-22 L-17,-27"/>
          <path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-2,-22 L5,-18"/>
        </g>
      </svg>
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
    <div ref={ref} className="rounded-2xl border border-ink/10 bg-paper-100 p-4 overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.8, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="text-[10px] font-sans text-accent tracking-widest uppercase">
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
                isDone ? 'border-ink/8 opacity-40' :
                isHigh ? 'border-accent/20 bg-accent/5' :
                'border-ink/8 bg-ink/[0.03]'
              }`}
            >
              <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border transition-colors duration-500 ${
                isDone ? 'border-brand-green/40 bg-brand-green/15' :
                isHigh ? 'border-accent/30' : 'border-ink/15'
              }`}>
                {isDone && (
                  <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} width="8" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#8A4E28" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
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
                      isHigh ? 'bg-accent/15 text-accent' : 'bg-ink/[0.04] text-ink'
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
    <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">{children}</p>
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
          ? 'border-accent/25 bg-accent/[0.03] hover:border-accent/40'
          : 'border-brand-green/25 bg-brand-green/[0.03] hover:border-brand-green/40'
      }`}
    >
      {/* Icon + name */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
          isBlue ? 'bg-accent/20 text-accent' : 'bg-brand-green/20 text-brand-green'
        }`}>
          {agent.icon}
        </div>
        <div>
          <h3 className={`font-bold text-lg leading-none ${isBlue ? 'text-accent' : 'text-brand-green'}`}>{agent.name}</h3>
          <p className={`text-xs font-medium mt-1 ${isBlue ? 'text-accent' : 'text-brand-green/70'}`}>
            {agent.role}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-ink text-sm leading-relaxed mb-5">{agent.description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {agent.skills.map(skill => (
          <span
            key={skill}
            className={`text-xs px-2.5 py-1 rounded-full border ${
              isBlue
                ? 'border-accent/25 bg-accent/15 text-accent'
                : 'border-brand-green/25 bg-brand-green/15 text-brand-green/80'
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
      className="group relative p-6 rounded-2xl border border-ink/8 bg-ink/[0.03] hover:border-ink/12 hover:bg-ink/[0.06] transition-all duration-300"
    >
      <div className={`absolute inset-0 rounded-2xl ${isBlue ? 'bg-accent/0 group-hover:bg-accent/[0.02]' : 'bg-accent/0 group-hover:bg-accent/[0.02]'} transition-all duration-300`} />
      <div className="relative">
        <div className={`w-10 h-10 rounded-xl ${isBlue ? 'bg-accent/10 text-accent group-hover:bg-accent/20' : 'bg-accent/10 text-accent group-hover:bg-accent/20'} flex items-center justify-center mb-4 transition-colors duration-300`}>
          {feature.icon}
        </div>
        <h3 className="text-lg font-semibold text-ink mb-2 leading-snug">{feature.title}</h3>
        <p className="text-ink text-sm leading-relaxed">{feature.description}</p>
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
      <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">What Zoe Does</p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight">
        Built around your life.
        <br />
        <span className="text-ink">Not your workflow.</span>
      </h2>
    </motion.div>
  )
}

// --- How It Works data ---
const zoeSteps = [
  {
    number: '01',
    title: 'Connect your world',
    description: "Link your calendar, personal apps, goals, and tools. Zoe learns how you live — not how you work.",
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
    title: 'Zoe selects the right model',
    description: 'Agent selection matrix automatically picks the best model for each task — balancing cost, speed, and capability. Add any new model with one click.',
    detail: 'Smart routing across OpenAI, Anthropic, Gemini, local models',
  },
  {
    number: '04',
    title: 'Live. Zoe handles the rest.',
    description: 'Your agents stay active in the background — tracking progress, surfacing insights, adjusting plans, and making sure nothing falls through the cracks.',
    detail: 'You direct. Zoe delivers.',
  },
  {
    number: '05',
    title: 'Zoe learns you.',
    description: "Dedicated memory means Zoe builds a model of how you think, work, and live. It adapts its scheduling, UI, and recommendations to match your preferences — without you having to repeat yourself.",
    detail: 'Gets smarter the longer you use it',
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
    <div ref={ref} className="rounded-2xl border border-ink/10 bg-paper-100 p-4 overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.8, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-brand-green" />
        <span className="text-[10px] font-sans text-brand-green/55 tracking-widest uppercase">
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
                    ? 'border-accent/15 bg-accent/5'
                    : 'border-brand-green/15 bg-brand-green/5'
                }`}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="flex-shrink-0">
                  <path d="M1.5 5L3.5 7.5L8.5 2.5" stroke="#8A4E28" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
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
          className="mt-3 p-2.5 rounded-lg bg-accent/5 border border-accent/15 text-[10px] text-accent font-sans"
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
      <div className="relative flex-shrink-0 w-12 h-12 rounded-full border border-accent/30 bg-accent/10 flex items-center justify-center">
        <span className="text-accent font-bold text-sm">{step.number}</span>
        <div className="absolute inset-0 rounded-full bg-accent/5 blur-md" />
      </div>
      <div className="pt-2.5">
        <h3 className="text-xl font-bold text-ink mb-2">{step.title}</h3>
        <p className="text-ink leading-relaxed mb-3 max-w-xl">{step.description}</p>
        <span className="inline-block text-xs text-accent font-sans border border-accent/20 bg-accent/5 px-3 py-1 rounded-full">
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
      <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">How It Works</p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight">
        Simple by design.
        <br />
        <span className="text-ink">Powerful by nature.</span>
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
          <div className="mb-10">
            <MiniOrb />
          </div>
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Personal AI Operating System</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-serif tracking-tight mb-6">
            Zoe
          </h1>
          <p className="text-xl text-ink max-w-xl mx-auto mb-10 leading-relaxed">
            An autonomous AI that researches, writes, automates, and executes — quietly running in the background of your work and life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/coming-soon"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-accent text-paper hover:bg-accent-dark transition-all duration-200 shadow-[0_0_24px_#8A4E2844] hover:shadow-[0_0_36px_#8A4E2866]"
            >
              Sign up free
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl border border-ink/15 text-ink hover:text-accent hover:border-ink/25 transition-all duration-200"
            >
              All products
            </Link>
          </div>
        </motion.div>
      </section>

      {/* What Zoe Does — Features */}
      <section className="relative py-40 px-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/8 to-transparent" />
        <div className="max-w-5xl mx-auto">
          <ZoeFeaturesHeader />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {zoeFeatures.map((feature, i) => (
              <ZoeFeatureCard key={i} feature={feature} index={i} />
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-ink"
          >
            Zoe doesn&apos;t just plan your work.
            <br />
            <span className="text-ink">It does it.</span>
          </motion.p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative py-40 px-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/8 to-transparent" />
        <div className="max-w-5xl mx-auto">
          <ZoeHowItWorksHeader />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Steps */}
            <div className="relative">
              <div className="space-y-12">
                {zoeSteps.map((step, i) => (
                  <ZoeStepCard key={i} step={step} index={i} />
                ))}
              </div>
            </div>
            {/* Animations */}
            <div className="lg:pt-4 space-y-6">
              <div>
                <div className="text-[10px] text-accent uppercase tracking-widest mb-3 font-medium">Task analysis</div>
                <TaskManagerAnimation />
                <p className="text-ink text-xs mt-3 leading-relaxed">
                  Task Manager sorts your day by priority, deadline, and energy level — in real time.
                </p>
              </div>
              <div>
                <div className="text-[10px] text-accent uppercase tracking-widest mb-3 font-medium">Adaptive memory</div>
                <AdaptiveMemoryAnimation />
                <p className="text-ink text-xs mt-3 leading-relaxed">
                  Zoe builds a model of your habits and preferences — and starts acting on them without being asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orb Experience */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/8 to-transparent" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight mb-4">
              Talk to Zoe.
              <br />
              <span className="text-ink">Or just let it work.</span>
            </h2>
            <p className="text-ink max-w-xl mx-auto">
              The Orb is always a tap away — on your phone, your desktop, your lock screen.
              Ask it anything. Or say nothing, and watch your agents run quietly in the background,
              keeping your day on track without interrupting it.
            </p>
          </div>
          <ZoeProductDemo />
        </div>
      </section>

      {/* Core Agents */}
      <section className="relative py-32 px-6">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/8 to-transparent" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>Meet Your Agents</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight">
              Three agents.
              <br />
              <span className="text-ink">One team. Built for you.</span>
            </h2>
            <p className="text-ink mt-4 max-w-2xl mx-auto">
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
          <div className="mt-8 p-5 rounded-xl border border-ink/8 bg-ink/[0.03] text-center">
            <p className="text-ink text-sm">
              All three agents share context through your connected tools — health apps, calendar, productivity platforms, and more.
              They coordinate, not just coexist.
            </p>
          </div>
        </div>
      </section>

      {/* Desktop Bridge */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/8 to-transparent" />
        <div className="max-w-5xl mx-auto" ref={bridgeRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={bridgeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl border border-paper/10 bg-ink p-6 overflow-hidden">
                {/* Fake terminal / bridge UI */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-brand-green/60" />
                  <span className="text-brand-green text-xs font-sans">Desktop Bridge — Connected</span>
                  <div className="ml-auto flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-paper/10 animate-pulse" />
                    <div className="w-1.5 h-1.5 rounded-full bg-paper/10 animate-pulse" style={{ animationDelay: '0.3s' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-paper/10 animate-pulse" style={{ animationDelay: '0.6s' }} />
                  </div>
                </div>
                <div className="space-y-2 font-sans text-xs">
                  {[
                    { prompt: '>', text: 'Open the Figma project in ~/Design/Q2-launch/', color: 'text-paper' },
                    { prompt: '◆', text: 'Locating file on home machine...', color: 'text-ink' },
                    { prompt: '◆', text: 'Syncing latest version via Desktop Bridge', color: 'text-ink' },
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
              <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight mb-6">
                Your home machine,
                <br />
                <span className="text-ink">from anywhere.</span>
              </h2>
              <p className="text-ink leading-relaxed mb-6">
                The Zoe Desktop Bridge runs quietly on your home computer. When you&apos;re out,
                on your phone, or on a different machine, Zoe can still access your local files,
                open applications, update documents, and manage your system — as if you were sitting right there.
                Perfect for sensitive work you want to keep on local models only.
              </p>
              <ul className="space-y-3">
                {[
                  'Access any file on your home machine remotely',
                  'Read, write, and organize documents through Zoe',
                  'Run automations and tasks from your phone',
                  'End-to-end encrypted — only you have the keys',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-ink">
                    <span className="w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#8A4E28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/8 to-transparent" />
        <div className="max-w-5xl mx-auto text-center" ref={intRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={intInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight mb-4">
              Plugs into your life.
              <br />
              <span className="text-ink">Not the other way around.</span>
            </h2>
            <p className="text-ink max-w-xl mx-auto mb-12">
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
                className="p-5 rounded-xl border border-ink/8 bg-ink/[0.03]"
              >
                <div className={`text-xs font-medium tracking-widest uppercase mb-4 ${'text-accent'}`}>
                  {cat.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map(item => (
                    <span key={item} className="px-2.5 py-1 rounded-full border border-ink/10 bg-ink/[0.04] text-ink text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Zoe Actually Does — Execution examples */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/8 to-transparent" />
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">Real execution</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight">
              What Zoe actually does.
              <br />
              <span className="text-ink">Not suggestions. Not summaries. Work.</span>
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
              <div key={i} className="p-6 rounded-2xl border border-ink/8 bg-ink/[0.02]">
                <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">{ex.label}</p>
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
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/8 to-transparent" />
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">Proactive engine</p>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight">
                Zoe keeps you on track.
                <br />
                <span className="text-ink">Proactively, when you need it.</span>
              </h2>
            </div>
            <p className="text-ink leading-relaxed">
              Zoe notices when you need a nudge and surfaces what matters before you have to ask.
              Some things it handles itself. Others, it works with you to notify you what to do.
              You stay in control — Zoe just makes sure nothing falls through the cracks.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { time: '7:00 am daily', title: 'Morning briefing', body: 'Your goals, schedule, and priority tasks — ready before you open your laptop.' },
              { time: 'After 4h inactivity', title: 'Stale task alert', body: 'Task sitting in review too long? Zoe flags it and asks if you want it rescheduled.' },
              { time: 'When activity drops', title: 'Goal momentum check', body: 'Compass notices when a goal goes quiet and surfaces it before it becomes a miss.' },
              { time: 'End of each day', title: 'Daily summary', body: "What got done, what shifted, and tomorrow's plan — automatic." },
              { time: 'Every Sunday', title: 'Weekly retrospective', body: 'Full-week review with goal progress, time spent, and next week\'s priorities.' },
              { time: 'When progress < 30%', title: 'Goal gap alert', body: 'A goal category falling behind? Compass flags it with a suggested action.' },
              { time: 'When work dominates', title: 'Domain overload warning', body: 'Work taking over personal goals again? Zoe notices the imbalance and tells you.' },
            ].map((trigger, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl border border-ink/8 bg-ink/[0.02] items-start">
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
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/8 to-transparent" />
        <div className="max-w-5xl mx-auto" ref={privacyRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={privacyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight mb-6">
                Your models.
                <br />
                Your keys.
                <br />
                <span className="text-ink">Your data.</span>
              </h2>
              <p className="text-ink leading-relaxed">
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
              className="grid grid-cols-2 gap-3"
            >
              {[
                { title: 'BYO API keys', desc: 'Use OpenAI, Anthropic, Gemini, or local models via Ollama.' },
                { title: 'Zero training', desc: 'Your conversations and data are never used to train any model.' },
                { title: 'Default-deny execution', desc: 'No autonomous action runs until you explicitly enable it. File access, web search, browser automation — all off by default.' },
                { title: 'Resource pattern policies', desc: 'Specify exactly which folders, domains, and services each agent can touch.' },
                { title: 'Daily action limits', desc: 'Set a max number of file writes, web searches, or tool calls per day. Zoe stops and asks when approaching the limit.' },
                { title: 'Immutable audit log', desc: 'Every tool call logged with timestamp, result, and cost. Every action reviewable. 30-day minimum retention.' },
                { title: 'Abort at any time', desc: 'Running agent doing something unexpected? One tap stops it mid-execution. Zoe tells you what it completed before stopping.' },
                { title: 'Confidential task routing', desc: 'Sensitive tasks never touch cloud models — they route to local models only via your Desktop Bridge.' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl border border-ink/8 bg-ink/[0.03]">
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
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/8 to-transparent" />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight mb-4">
            Ready to put AI
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              to work for your life?
            </span>
          </h2>
          <p className="text-ink mb-10">
            Sign up free. No credit card required.
          </p>
          <Link
            href="/coming-soon"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium rounded-xl bg-accent text-paper hover:bg-accent-dark transition-all duration-200 shadow-[0_0_30px_#8A4E2844] hover:shadow-[0_0_50px_#8A4E2866]"
          >
            Get started with Zoe
          </Link>
        </div>
      </section>

    </div>
  )
}
