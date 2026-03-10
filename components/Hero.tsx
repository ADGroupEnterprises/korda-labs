'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const ZoeDemo = dynamic(() => import('@/components/ZoeDemo'), { ssr: false })

function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blue center radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-brand-blue opacity-[0.05] blur-[140px]" />
      {/* Green accent top-right */}
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-brand-green opacity-[0.04] blur-[120px]" />
      {/* Blue bottom-left */}
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-brand-blue-dark opacity-[0.04] blur-[100px]" />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      <GradientMesh />

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
                className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue text-sm font-medium tracking-widest uppercase hover:border-brand-blue/40 hover:bg-brand-blue/10 transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
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
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              <span className="text-white">Your life,</span>
              <br />
              <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                fully in motion.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg sm:text-xl text-white/50 max-w-xl mb-10 leading-relaxed"
            >
              Zoe is your personal AI operating system — connecting your goals, health, calendar,
              tools, and habits into one intelligent layer that works <em>for you</em>, not the other way around.
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
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl bg-brand-blue text-white hover:bg-brand-blue-light transition-all duration-200 shadow-[0_0_24px_#3B82F644] hover:shadow-[0_0_36px_#3B82F666]"
              >
                Sign up free
              </Link>
              <Link
                href="/products/zoe#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl border border-white/10 text-white hover:border-white/25 hover:bg-white/5 transition-all duration-200"
              >
                See how it works
              </Link>
            </motion.div>
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
