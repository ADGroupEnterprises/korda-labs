'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const ZoeDemo = dynamic(() => import('@/components/ZoeDemo'), { ssr: false })

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6">

      <div className="relative z-10 w-full max-w-7xl mx-auto py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col items-start text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                href="/products/zoe"
                className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-accent/25 bg-accent/5 text-accent text-sm font-medium tracking-widest uppercase hover:border-accent/40 hover:bg-accent/10 transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Introducing Zoe
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-60">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6 font-serif"
            >
              <span className="text-ink">Stop managing</span>
              <br />
              <span className="text-ink">your tools.</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Let them manage themselves.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg sm:text-xl text-ink/50 max-w-xl mb-10 leading-relaxed"
            >
              Zoe is your personal AI operating system — pulling your goals, tasks, calendar, and health
              into one intelligent layer that plans your day, runs your agents, and adapts as life changes.
              Not another tool to manage. <em>The layer that manages all your tools.</em>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl bg-accent text-white hover:bg-accent-light transition-all duration-200 shadow-[0_0_24px_#C4973A44] hover:shadow-[0_0_36px_#C4973A66]"
              >
                Sign up free
              </Link>
              <Link
                href="/products/zoe#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl border border-ink/15 text-ink hover:border-ink/25 hover:bg-ink/5 transition-all duration-200"
              >
                See how it works
              </Link>
            </motion.div>

            {/* Differentiator line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="flex items-center gap-2 text-ink/35 text-sm mt-4"
            >
              <span className="w-1 h-1 rounded-full bg-accent/40 flex-shrink-0" />
              While Akiflow and Motion still make you do the planning — Zoe does it for you.
            </motion.p>
          </div>

          {/* Right: ZoeDemo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="hidden lg:block"
          >
            <ZoeDemo />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
