'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const agents = [
  {
    name: 'Zoe',
    role: 'The Orchestrator',
    description: 'Listens to what you need, understands your full context, and coordinates your agents on your behalf. Surfaces what matters before you have to ask.',
    color: 'blue' as const,
  },
  {
    name: 'Compass',
    role: 'Goals',
    description: 'Holds your long-term goals, breaks them into milestones, and keeps them visible when daily chaos tries to crowd them out.',
    color: 'green' as const,
  },
  {
    name: 'Task Manager',
    role: 'Daily Planning',
    description: 'Takes what Compass knows and turns it into what you do today — scheduling around your meetings, adjusting when priorities shift, adapting in real time.',
    color: 'amber' as const,
  },
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
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">How Zoe works differently</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight leading-tight">
              While you're working,
              <br />
              <span className="text-ink/45">Zoe is planning.</span>
            </h2>
          </div>
          <div>
            <p className="text-ink/50 leading-relaxed text-lg">
              Other tools require you to manually schedule every task, reorganize your day when priorities shift,
              and re-plan when things change. Zoe's agents handle all of that — automatically, in the background,
              coordinated around your goals.
            </p>
          </div>
        </motion.div>

        {/* Agent cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
          {agents.map((agent, i) => {
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

        {/* Contrast row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="p-6 rounded-2xl border border-ink/8 bg-ink/[0.03]">
            <p className="text-xs font-medium tracking-widest uppercase text-ink/25 mb-3">Other tools</p>
            <p className="text-ink/45 text-sm leading-relaxed">
              Pull your tasks together. Then you schedule them. Then you track them. Then you re-plan when something changes. All day. Every day.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-accent/15 bg-accent/[0.03]">
            <p className="text-xs font-medium tracking-widest uppercase text-accent/60 mb-3">Zoe</p>
            <p className="text-ink/65 text-sm leading-relaxed">
              You tell it your goals. It builds the plan. It runs the agents. It adjusts in real time.
              You focus on the work that actually matters.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
