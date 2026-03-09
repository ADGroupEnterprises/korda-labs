'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      <GradientMesh />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 text-brand-blue text-sm font-medium tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
          Introducing Zoe
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
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
          className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Zoe is your personal AI operating system — connecting your goals, health, calendar,
          tools, and habits into one intelligent layer that works <em>for you</em>, not the other way around.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl bg-brand-blue text-white hover:bg-brand-blue-light transition-all duration-200 shadow-[0_0_24px_#3B82F644] hover:shadow-[0_0_36px_#3B82F666]"
          >
            Sign up free
          </Link>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl border border-white/10 text-white hover:border-white/25 hover:bg-white/5 transition-all duration-200"
          >
            See how it works
          </a>
        </motion.div>
      </div>

      {/* Abstract UI preview */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 mt-20 w-full max-w-3xl mx-auto"
      >
        <div className="relative rounded-2xl border border-white/5 bg-dark-100/80 backdrop-blur-sm overflow-hidden shadow-2xl">
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
            <div className="w-2 h-2 rounded-full bg-brand-blue/40" />
            <div className="w-2 h-2 rounded-full bg-brand-green/40" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="ml-4 flex-1 h-4 rounded bg-white/5 max-w-xs" />
            <div className="ml-auto flex items-center gap-2">
              <div className="h-4 w-16 rounded bg-brand-blue/20" />
            </div>
          </div>
          {/* Fake UI */}
          <div className="p-6 grid grid-cols-3 gap-4">
            <div className="col-span-1 space-y-3">
              <div className="h-3 rounded bg-white/5 w-3/4" />
              <div className="space-y-1.5">
                {['Goals', 'Today', 'Health', 'Calendar', 'Habits'].map((label, i) => (
                  <div key={i} className="h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center px-3 gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-brand-blue/80' : i === 2 ? 'bg-brand-green/80' : 'bg-white/20'}`} />
                    <div className="h-2 rounded bg-white/10 flex-1" />
                    <span className="text-white/20 text-[9px]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-2 space-y-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-brand-blue/70" />
                </div>
                <div className="space-y-1">
                  <div className="h-2.5 rounded bg-white/10 w-32" />
                  <div className="h-1.5 rounded bg-white/5 w-20" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 rounded bg-white/5 w-full" />
                <div className="h-2 rounded bg-white/5 w-5/6" />
                <div className="h-2 rounded bg-white/5 w-4/6" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { label: 'Run 5K today', color: 'brand-green' },
                  { label: 'Review proposal', color: 'brand-blue' },
                  { label: '2,100 kcal', color: 'brand-green' },
                  { label: 'Block focus time', color: 'brand-blue' },
                ].map((item, i) => (
                  <div key={i} className="h-16 rounded-xl bg-white/[0.03] border border-white/5 p-3">
                    <div className={`h-1.5 rounded w-1/2 mb-2 ${i % 2 === 0 ? 'bg-brand-green/30' : 'bg-brand-blue/30'}`} />
                    <div className="h-2 rounded bg-white/5 w-3/4" />
                    <div className="text-[9px] text-white/20 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-DEFAULT/80 to-transparent" />
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-brand-blue/10 blur-3xl rounded-full" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  )
}
