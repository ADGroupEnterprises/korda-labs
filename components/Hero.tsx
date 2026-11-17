'use client'
import { APP_SIGNUP_URL } from '@/lib/links'
import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { KeelLockup } from '@/components/marks/Brand'

const HeroShowcase = dynamic(() => import('@/components/HeroShowcase'), { ssr: false })

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6">
      <div className="absolute inset-0 bg-chart [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" aria-hidden="true" />
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-14 pb-24 lg:pt-20 lg:pb-44">
        {/* Copy */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-7"
          >
            <KeelLockup className="h-10 w-auto" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[2.75rem] sm:text-6xl xl:text-7xl font-display font-bold leading-[1.02] mb-6 text-ink"
          >
            One app for tasks &amp; calendars,{' '}
            <span className="text-accent">powered by AI that does them.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg sm:text-xl text-ink-soft max-w-xl mb-9 leading-relaxed"
          >
            Plan your day in Keel. Its agents research, draft, schedule and follow up. You approve.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <Link
              href={APP_SIGNUP_URL}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-accent text-paper btn-pillow transition-all duration-300"
            >
              Get Keel
            </Link>
            <Link
              href="/products/keel"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full btn-glass text-ink hover:border-accent/40 hover:text-accent transition-all duration-300"
            >
              How it works
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="eyebrow text-ink-soft mt-6"
          >
            Free on web <span className="text-accent">·</span> Every action logged
          </motion.p>
        </div>

        {/* Showcase: chat + canvas window, and Keel over text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-14 lg:mt-20 min-h-[30rem]"
        >
          <HeroShowcase />
        </motion.div>
      </div>
    </section>
  )
}
