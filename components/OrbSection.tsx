'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
        animate={{ rotate: -360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-6 rounded-full border border-brand-blue/15"
        style={{ borderStyle: 'dashed' }}
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
          boxShadow: '0 0 40px #3B82F666, 0 0 80px #3B82F633, 0 0 120px #3B82F61A, inset 0 0 20px #60A5FA33',
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
          className={`absolute w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-green'}`}
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
      <div className="absolute inset-0 rounded-full bg-brand-blue/5 blur-3xl scale-150" />
    </div>
  )
}

const quotes = [
  { text: 'How am I tracking toward my goals this week?', delay: 0 },
  { text: 'Find me 30 minutes for a workout today.', delay: 0.15 },
  { text: 'What should I focus on right now?', delay: 0.3 },
]

export default function OrbSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue opacity-[0.05] blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-brand-blue text-sm font-medium tracking-widest uppercase mb-4">The Orb</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Always present.
              <br />
              <span className="text-white/40">Always yours.</span>
            </h2>
            <p className="text-white/40 leading-relaxed mb-8 text-lg">
              The Orb is Zoe&apos;s ambient presence — context-aware, conversational, and always one tap away.
              It knows your goals, your health data, your schedule. You just talk, and Zoe takes care of the rest.
            </p>

            {/* Sample prompts */}
            <div className="space-y-3">
              <p className="text-white/20 text-xs uppercase tracking-widest mb-4">Say anything like —</p>
              {quotes.map((q, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + q.delay, duration: 0.5 }}
                  className="flex items-center gap-3 text-white/50 text-sm"
                >
                  <span className="w-1 h-1 rounded-full bg-brand-blue/60 flex-shrink-0" />
                  <span className="font-mono">&quot;{q.text}&quot;</span>
                </motion.div>
              ))}
            </div>
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
