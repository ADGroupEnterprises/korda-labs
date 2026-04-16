'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    quote: "I used to spend 30 minutes every morning triaging tasks across Notion, Gmail, and my calendar. Zoe cut that to under five.",
    name: 'Early access user',
    role: 'Founder',
  },
  {
    quote: "It's the first tool that actually connects my work goals to my health habits. Nothing else does that.",
    name: 'Early access user',
    role: 'Independent consultant',
  },
  {
    quote: "The agents feel like a real team working for me. Not just another chat interface.",
    name: 'Early access user',
    role: 'Product manager',
  },
]

const stats = [
  { value: 'Free', label: 'to get started — no credit card' },
  { value: '20+', label: 'integrations at launch' },
  { value: '3', label: 'coordinated AI agents' },
]

export default function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-32 px-6 overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/8 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-6 mb-20 pb-20 border-b border-ink/8"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold font-serif text-ink mb-1">{s.value}</p>
              <p className="text-ink text-sm">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs font-medium tracking-widest uppercase text-accent mb-10 text-center"
        >
          From early access users
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
              className="p-6 rounded-2xl border border-ink/8 bg-ink/[0.03]"
            >
              <p className="text-ink text-sm leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 rounded-full bg-accent/40" />
                <div>
                  <p className="text-ink text-xs font-medium">{t.name}</p>
                  <p className="text-ink text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
