'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Connect your world',
    description: "Link your calendar, health apps, goals, and tools. Zoe learns how you live — not how you work.",
    detail: 'Google Calendar, Apple Health, Strava & more',
  },
  {
    number: '02',
    title: 'Tell Zoe what matters',
    description: 'Share a goal, a worry, a dream. Zoe asks the right questions, then maps out a real plan tailored to your life.',
    detail: 'Ambitions → plans → daily steps',
  },
  {
    number: '03',
    title: 'Live. Zoe handles the rest.',
    description: 'Your agents stay active in the background — tracking progress, surfacing insights, adjusting plans, and making sure nothing falls through the cracks.',
    detail: 'You live. Zoe delivers.',
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
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
      {/* Number badge */}
      <div className="relative flex-shrink-0 w-12 h-12 rounded-full border border-accent/30 bg-accent/10 flex items-center justify-center">
        <span className="text-accent font-bold text-sm">{step.number}</span>
        {/* Glow dot */}
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

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="how-it-works" className="relative py-32 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-accent opacity-[0.03] blur-[100px] -translate-y-1/2" />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Simple by design.
            <br />
            <span className="text-ink">Powerful by nature.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[2.6rem] top-12 bottom-12 w-px bg-gradient-to-b from-accent/20 via-accent/10 to-transparent hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <StepCard key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
