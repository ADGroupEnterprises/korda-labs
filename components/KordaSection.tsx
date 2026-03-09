'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const values = [
  {
    title: 'Privacy by design',
    description: 'We build systems where your data serves you — not advertisers, not platforms. What you share with Zoe stays with you.',
  },
  {
    title: 'Technology with intention',
    description: 'We believe AI should amplify human capacity, not replace human judgment. Every tool we build starts with that principle.',
  },
  {
    title: 'Open and accountable',
    description: 'We use your own API keys, support open models, and give you control over every integration. No lock-in. No surprises.',
  },
]

export default function KordaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-brand-green opacity-[0.03] blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-blue shadow-[0_0_8px_#3B82F6]" />
            <span className="text-white/30 text-sm tracking-widest uppercase font-medium">About Korda Labs</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              We build technology
              <br />
              <span className="text-white/35">centered on people.</span>
            </h2>
            <p className="text-white/40 leading-relaxed text-lg pt-1">
              Korda Labs is a venture studio founded at RIT. We create products that give people genuine leverage
              over their own lives — starting with Zoe, and with more to come.
              We care deeply about privacy, intentional AI, and software that respects the humans using it.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-white/5 bg-white/[0.02]"
            >
              <div className="w-1 h-6 rounded-full bg-gradient-to-b from-brand-blue to-brand-green mb-4" />
              <h3 className="text-white font-semibold mb-2">{v.title}</h3>
              <p className="text-white/35 text-sm leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex items-center gap-2"
        >
          <Link
            href="https://kordalabs.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/25 text-sm hover:text-white/60 transition-colors flex items-center gap-1.5"
          >
            kordalabs.co
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
