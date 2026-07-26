'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const values = [
  {
    title: 'Your keys. Your models. Your data.',
    description: 'We build systems where your data serves you — not advertisers, not platforms. What you share with Zoe stays with you.',
  },
  {
    title: 'AI that amplifies, not replaces.',
    description: 'AI should amplify human capacity, not replace human judgment. Every tool we build starts there.',
  },
  {
    title: 'No lock-in. Ever.',
    description: 'We use your own API keys, support open models, and give you control over every integration. No surprises, no walled garden.',
  },
  {
    title: 'Every action, audited.',
    description: 'Default-deny execution. Every tool call is checked against your policies and logged immutably. Stop any agent at any time — Zoe reports exactly what completed.',
  },
]

export default function KordaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linen" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <h2 className="text-3xl sm:text-4xl font-medium font-serif tracking-tight leading-tight">
              We build technology
              <br />
              <span className="text-ink">centered on people.</span>
            </h2>
            <p className="text-ink leading-relaxed text-lg pt-1">
              Korda Labs is an AI product studio. One dedicated product per problem,
              built so your goals don't get lost in the noise of your day. Zoe is the first —
              software that respects your privacy and the person using it.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-linen bg-linen"
            >
              <div className="w-1 h-6 rounded-full bg-accent mb-4" />
              <h3 className="text-ink font-semibold mb-2">{v.title}</h3>
              <p className="text-ink text-sm leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
