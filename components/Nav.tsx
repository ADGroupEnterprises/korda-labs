'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { APP_SIGNIN_URL } from '@/lib/links'
import KordaMark from '@/components/marks/KordaMark'

function ProductsDropdown({ open }: { open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-xl border border-linen bg-paper shadow-2xl overflow-hidden"
        >
          <div className="p-1.5">
            <Link
              href="/products/zoe"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-linen transition-colors group"
            >
              <div className="w-6 h-6 rounded-md bg-linen flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <div>
                <div className="text-sm font-medium text-ink">Zoe</div>
                <div className="text-xs text-ink">Dedicated AI partner</div>
              </div>
            </Link>
          </div>
          <div className="border-t border-linen p-2">
            <Link
              href="/products"
              className="block text-center text-xs text-ink hover:text-ink py-1.5 transition-colors"
            >
              View all products →
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function HowItWorksDropdown({ open }: { open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 rounded-xl border border-linen bg-paper shadow-2xl overflow-hidden"
        >
          <div className="p-1.5">
            {[
              { href: '/use-cases/autonomous-agents', label: 'Autonomous Agents', sub: 'Research, write, automate, execute' },
              { href: '/use-cases/proactive-ai', label: 'Proactive AI', sub: 'Runs your week without being asked' },
              { href: '/use-cases/desktop-bridge', label: 'Desktop Bridge', sub: 'Your machine, from anywhere' },
              { href: '/use-cases/daily-planning', label: 'Daily Planning', sub: 'AI morning briefing & EOD review' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-linen transition-colors"
              >
                <span className="text-sm font-medium text-ink">{item.label}</span>
                <span className="text-xs text-ink">{item.sub}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Nav() {
  const [productsOpen, setProductsOpen] = useState(false)
  const [howOpen, setHowOpen] = useState(false)
  const productsRef = useRef<HTMLDivElement>(null)
  const howRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false)
      }
      if (howRef.current && !howRef.current.contains(e.target as Node)) {
        setHowOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const chevron = (open: boolean) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-paper border-b border-linen"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Brand */}
        <Link href="/" className="flex items-center gap-2.5">
          <KordaMark size={32} />
          <span className="font-serif font-medium text-sm text-ink">Korda Labs</span>
        </Link>

        {/* Center: Nav links */}
        <div className="hidden md:flex items-center gap-6">
          {/* Products */}
          <div className="relative" ref={productsRef}>
            <button
              onClick={() => setProductsOpen(v => !v)}
              onMouseEnter={() => setProductsOpen(true)}
              className="flex items-center gap-1 text-ink hover:text-ink text-sm transition-colors duration-300"
            >
              Products
              {chevron(productsOpen)}
            </button>
            <div onMouseLeave={() => setProductsOpen(false)}>
              <ProductsDropdown open={productsOpen} />
            </div>
          </div>

          {/* How it Works */}
          <div className="relative" ref={howRef}>
            <button
              onClick={() => setHowOpen(v => !v)}
              onMouseEnter={() => setHowOpen(true)}
              className="flex items-center gap-1 text-ink hover:text-ink text-sm transition-colors duration-300"
            >
              How it Works
              {chevron(howOpen)}
            </button>
            <div onMouseLeave={() => setHowOpen(false)}>
              <HowItWorksDropdown open={howOpen} />
            </div>
          </div>

          <Link href="/pricing" className="text-ink hover:text-ink text-sm transition-colors duration-300">
            Pricing
          </Link>
          <Link href="/compare" className="text-ink hover:text-ink text-sm transition-colors duration-300">
            Compare
          </Link>
          <Link href="/security" className="text-ink hover:text-ink text-sm transition-colors duration-300">
            Security
          </Link>
        </div>

        {/* Right: Auth buttons */}
        <div className="flex items-center gap-3">
          <a
            href={APP_SIGNIN_URL}
            className="hidden sm:inline-flex px-4 py-2 text-sm text-ink hover:text-ink transition-colors duration-300"
          >
            Sign in
          </a>
          <Link
            href="/signup"
            className="inline-flex px-4 py-2 text-sm font-medium rounded-lg bg-accent text-paper hover:bg-mahogany transition-all duration-300"
          >
            Sign up free
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
