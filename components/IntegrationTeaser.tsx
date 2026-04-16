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
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/8 to-transparent" />
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight mb-4">
            Connects to the tools you use.
          </h2>
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
              className="px-4 py-2 rounded-full border border-ink/10 bg-ink/[0.04] text-ink text-sm hover:border-accent/30 hover:text-accent hover:bg-accent/5 transition-all duration-200 cursor-default"
            >
              {name}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 + integrations.length * 0.04, duration: 0.3 }}
            className="px-4 py-2 rounded-full border border-ink/10 bg-ink/[0.03] text-ink text-sm"
          >
            + more every week
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}
