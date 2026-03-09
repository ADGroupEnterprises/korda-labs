'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    accent: 'blue',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Your calendar, health, and habits — unified',
    description: 'Zoe connects to your personal tools: Google Calendar, Apple Health, fitness trackers, nutrition apps, and more. It sees the full picture of your life so it can help you live it better.',
  },
  {
    accent: 'green',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Set a goal. Zoe builds the path.',
    description: "Whether it's running a marathon, writing a book, or finally taking that trip — tell Zoe what you want. It turns your ambitions into daily, actionable steps you can actually follow.",
  },
  {
    accent: 'blue',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'A team of agents working for you',
    description: "While you live your life, Zoe's agents handle the logistics — scheduling, research, reminders, planning. Not just one AI assistant, but a coordinated team that reports to you.",
  },
  {
    accent: 'green',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: 'You are the center. Always.',
    description: "Zoe is built around the human, not the algorithm. Your priorities drive it. Your data stays yours. New integrations ship constantly — and you decide what Zoe knows.",
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isBlue = feature.accent === 'blue'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative p-6 rounded-2xl border border-white/5 bg-dark-100/40 hover:border-white/10 hover:bg-dark-100/80 transition-all duration-300"
    >
      {/* Hover glow */}
      <div className={`absolute inset-0 rounded-2xl ${isBlue ? 'bg-brand-blue/0 group-hover:bg-brand-blue/[0.02]' : 'bg-brand-green/0 group-hover:bg-brand-green/[0.02]'} transition-all duration-300`} />

      <div className="relative">
        <div className={`w-10 h-10 rounded-xl ${isBlue ? 'bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue/20' : 'bg-brand-green/10 text-brand-green group-hover:bg-brand-green/20'} flex items-center justify-center mb-4 transition-colors duration-300`}>
          {feature.icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
          {feature.title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" className="relative py-32 px-6">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-blue text-sm font-medium tracking-widest uppercase mb-4">What Zoe Does</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Everything you need to live
            <br />
            <span className="text-white/40">with intention.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
