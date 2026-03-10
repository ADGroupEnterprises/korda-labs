'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

function Orb() {
  return (
    <div className="relative flex items-center justify-center w-64 h-64 mx-auto">
      {/* Outer rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border border-brand-blue/10"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-12 rounded-full border border-brand-blue/20"
      />

      {/* Glowing rings */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-16 rounded-full bg-brand-blue/5 blur-sm"
      />

      {/* Core orb */}
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-24 h-24 rounded-full"
        style={{
          background: 'radial-gradient(circle at 35% 35%, #60A5FA, #3B82F6 40%, #1D4ED8 80%, #1E3A8A)',
          boxShadow: '0 0 40px #3B82F644, 0 0 80px #3B82F622, 0 0 120px #3B82F611, inset 0 0 20px #60A5FA33',
        }}
      >
        {/* Inner highlight */}
        <div className="absolute top-4 left-5 w-5 h-5 rounded-full bg-white/30 blur-sm" />
        <div className="absolute top-3 left-4 w-2 h-2 rounded-full bg-white/60" />
      </motion.div>

      {/* Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${'bg-brand-blue/60'}`}
          style={{
            top: '50%',
            left: '50%',
          }}
          animate={{
            x: Math.cos((i / 6) * Math.PI * 2) * 100,
            y: Math.sin((i / 6) * Math.PI * 2) * 100,
            opacity: [0.8, 0.3, 0.8],
            scale: [1, 0.6, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Background glow */}
      <div className="absolute inset-0 rounded-full bg-brand-blue/[0.03] blur-3xl scale-150" />
    </div>
  )
}

const milestones = [
  { label: 'Founded', detail: 'Korda Labs incorporated with a single mission: give people real leverage over their lives.', delay: 0 },
  { label: 'First product', detail: 'Zoe launched — a personal AI operating system connecting your goals, health, calendar, and habits.', delay: 0.15 },
  { label: "What's next", detail: 'Platforms for startups, freelancers, and teams. The same intelligence layer, tuned for every scale.', delay: 0.3 },
]

export default function OrbSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/8 to-transparent" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight mb-6">
              A focused lab.
              <br />
              <span className="text-ink/50">A clear mission.</span>
            </h2>
            <p className="text-ink/50 leading-relaxed mb-8 text-lg">
              Korda Labs is an AI product studio with one driving idea: people deserve tools that work
              for them — not the other way around. We launched with Zoe and we&apos;re just getting started.
            </p>

            {/* Milestones */}
            <div className="space-y-5">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + m.delay, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <span className="mt-1 w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
                  <div>
                    <span className="text-ink/80 text-sm font-medium">{m.label}</span>
                    <p className="text-ink/45 text-sm leading-relaxed mt-0.5">{m.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-8"
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-ink transition-colors"
              >
                See all products
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 4l3.5 3L8 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Orb />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
