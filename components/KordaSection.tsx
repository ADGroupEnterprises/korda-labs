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
    description: 'We believe AI should amplify human capacity, not replace human judgment. Every tool we build starts with that principle.',
  },
  {
    title: 'No lock-in. Ever.',
    description: 'We use your own API keys, support open models, and give you control over every integration. No surprises, no walled garden.',
  },
  {
    title: 'Every action, audited.',
    description: 'Default-deny execution model. Every tool call is checked against your policies, logged immutably, and reversible at any point. You stay in control.',
  },
]

export default function KordaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-40 px-6 overflow-hidden">

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight leading-tight">
              We build technology
              <br />
              <span className="text-ink">centered on people.</span>
            </h2>
            <p className="text-ink leading-relaxed text-lg pt-1">
              KORDA LABS creates products that give people genuine leverage
              over their own lives — starting with Zoe, and with more to come.
              We care deeply about privacy, intentional AI, and software that respects the humans using it.
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
              className="p-6 rounded-xl border border-paper-100 bg-paper-100"
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
