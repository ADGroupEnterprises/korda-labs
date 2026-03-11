'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const coreAgents = [
  {
    name: 'Zoe',
    role: 'The Orchestrator',
    description: 'Spawns specialist agents for complex tasks. Manages cost, progress, and abort control in real time. Surfaces what matters before you have to ask.',
    color: 'blue' as const,
  },
  {
    name: 'Compass',
    role: 'Goals',
    description: "Tracks your long-term goals and milestones — and can propose plans, apply them to your planner, and trigger agents to act on them when you're off track.",
    color: 'green' as const,
  },
  {
    name: 'Task Manager',
    role: 'Daily Planning',
    description: 'Plans your schedule and queues tasks by priority. Can escalate any task to autonomous agent execution — one tap, then Zoe takes it from there.',
    color: 'amber' as const,
  },
]

const personaAgents = [
  { label: 'Researcher', desc: 'Searches the web, fetches pages, builds briefs' },
  { label: 'Writer', desc: 'Drafts documents, emails, and reports' },
  { label: 'Analyst', desc: 'Reads data, synthesizes insights' },
  { label: 'Builder', desc: 'Runs scripts, automates workflows' },
  { label: 'Designer', desc: 'Creates mockups, visual assets' },
  { label: 'Strategist', desc: 'Plans campaigns, roadmaps' },
  { label: 'Editor', desc: 'Reviews, refines, polishes content' },
  { label: 'Coordinator', desc: 'Manages schedules, logistics' },
  { label: '+ many more', desc: 'Created as your needs evolve', isPlaceholder: true },
]

const colorMap = {
  blue: {
    dot: 'bg-brand-blue',
    badge: 'bg-brand-blue/10 text-brand-blue/70',
    border: 'border-brand-blue/15',
    bg: 'bg-brand-blue/[0.03]',
  },
  green: {
    dot: 'bg-brand-green',
    badge: 'bg-brand-green/10 text-brand-green/70',
    border: 'border-brand-green/15',
    bg: 'bg-brand-green/[0.03]',
  },
  amber: {
    dot: 'bg-accent',
    badge: 'bg-accent/10 text-accent/80',
    border: 'border-accent/15',
    bg: 'bg-accent/[0.03]',
  },
}

export default function AgentDifferentiator() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-40 px-6 overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/8 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end"
        >
          <div>
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">Your agent team</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight leading-tight">
              Zoe doesn&apos;t brief you
              <br />
              <span className="text-ink/45">on what needs doing. It gets it done.</span>
            </h2>
          </div>
          <div>
            <p className="text-ink/50 leading-relaxed text-lg">
              Spin up a researcher. A writer. An analyst. A builder. Zoe&apos;s agents work under your direction —
              searching the web, reading documents, writing files, running scripts. You review their work,
              execute what needs your touch in the real world, and stay in control of every step.
            </p>
          </div>
        </motion.div>

        {/* Core agent cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
          {coreAgents.map((agent, i) => {
            const c = colorMap[agent.color]
            return (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
                className={`p-6 rounded-2xl border ${c.border} ${c.bg}`}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${c.badge}`}>
                    {agent.role}
                  </span>
                </div>
                <h3 className="text-ink font-semibold text-lg mb-2">{agent.name}</h3>
                <p className="text-ink/45 text-sm leading-relaxed">{agent.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Persona agents strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="p-5 rounded-2xl border border-ink/8 bg-ink/[0.02] mb-10"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-ink/30 mb-4">Spawn specialist agents</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {personaAgents.map((p, i) => (
              <div key={i} className={`flex flex-col gap-1 ${p.isPlaceholder ? 'opacity-50' : ''}`}>
                <span className={`text-ink/70 text-sm font-medium ${p.isPlaceholder ? 'italic' : ''}`}>{p.label}</span>
                <span className="text-ink/35 text-xs leading-relaxed">{p.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contrast row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
        >
          <div className="p-6 rounded-2xl border border-ink/8 bg-ink/[0.03]">
            <p className="text-xs font-medium tracking-widest uppercase text-ink/25 mb-3">The old way: Akiflow / Notion / Sunsama</p>
            <p className="text-ink/45 text-sm leading-relaxed">
              Consolidate your tasks. Schedule your day. Then you do the work. Every day, manually, the same process.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-accent/15 bg-accent/[0.03]">
            <p className="text-xs font-medium tracking-widest uppercase text-accent/60 mb-3">Zoe</p>
            <p className="text-ink/65 text-sm leading-relaxed">
              You set the goals. Agents work under your direction to plan, research, and prepare outputs — documents, briefs, automations —
              while you review and execute what needs your touch. You stay in control.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Link
            href="/use-cases/autonomous-agents"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-ink transition-colors"
          >
            See what agents can do
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 4l3.5 3L8 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
