'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const integrations = [
  'Google Calendar',
  'Apple Health',
  'Strava',
  'MyFitnessPal',
  'Notion',
  'Spotify',
  'Whoop',
  'Garmin',
  'Todoist',
  'Readwise',
  'Oura Ring',
  'Apple Watch',
  'Fitbit',
  'YouTube',
  'Gmail',
]

export default function IntegrationTeaser() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand-blue text-sm font-medium tracking-widest uppercase mb-4">Integrations</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Connects to the tools
            <br />
            <span className="text-white/40">you already use.</span>
          </h2>
          <p className="text-white/40 mb-12 max-w-xl mx-auto">
            Zoe plugs into your existing life — health, fitness, calendar, and productivity tools —
            with new integrations shipping every week.
          </p>
        </motion.div>

        {/* Integration pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2.5"
        >
          {integrations.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.04, duration: 0.3 }}
              className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/40 text-sm hover:border-brand-blue/30 hover:text-white/70 hover:bg-brand-blue/5 transition-all duration-200 cursor-default"
            >
              {name}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 + integrations.length * 0.04, duration: 0.3 }}
            className="px-4 py-2 rounded-full border border-brand-green/20 bg-brand-green/5 text-brand-green text-sm"
          >
            + more every week
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}
