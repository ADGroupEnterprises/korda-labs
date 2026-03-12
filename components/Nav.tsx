'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

function ProductsDropdown({ open }: { open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-xl border border-ink/12 bg-paper-DEFAULT/95 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          <div className="p-1.5">
            <Link
              href="/products/zoe"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-ink/[0.04] transition-colors group"
            >
              <div className="w-6 h-6 rounded-md bg-accent/20 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <div>
                <div className="text-sm font-medium text-ink">Zoe</div>
                <div className="text-xs text-ink/40">Personal AI OS</div>
              </div>
            </Link>
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg opacity-40 cursor-default">
              <div className="w-6 h-6 rounded-md bg-ink/[0.04] flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-ink/30" />
              </div>
              <div>
                <div className="text-sm font-medium text-ink/60">More products</div>
                <div className="text-xs text-ink/35">Coming soon</div>
              </div>
            </div>
          </div>
          <div className="border-t border-ink/8 p-2">
            <Link
              href="/products"
              className="block text-center text-xs text-ink/40 hover:text-ink/70 py-1.5 transition-colors"
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
          transition={{ duration: 0.15 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 rounded-xl border border-ink/12 bg-paper-DEFAULT/95 backdrop-blur-xl shadow-2xl overflow-hidden"
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
                className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-ink/[0.04] transition-colors"
              >
                <span className="text-sm font-medium text-ink">{item.label}</span>
                <span className="text-xs text-ink/40">{item.sub}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [howOpen, setHowOpen] = useState(false)
  const productsRef = useRef<HTMLDivElement>(null)
  const howRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper-DEFAULT/90 backdrop-blur-xl border-b border-ink/8'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image src="/logo.png" alt="Korda Labs" width={28} height={28} className="rounded-sm" />
          <span className="text-ink font-semibold text-sm tracking-wide">Korda Labs</span>
        </Link>

        {/* Center: Nav links */}
        <div className="hidden md:flex items-center gap-6">
          {/* Products */}
          <div className="relative" ref={productsRef}>
            <button
              onClick={() => setProductsOpen(v => !v)}
              onMouseEnter={() => setProductsOpen(true)}
              className="flex items-center gap-1 text-ink/50 hover:text-ink text-sm transition-colors duration-200"
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
              className="flex items-center gap-1 text-ink/50 hover:text-ink text-sm transition-colors duration-200"
            >
              How it Works
              {chevron(howOpen)}
            </button>
            <div onMouseLeave={() => setHowOpen(false)}>
              <HowItWorksDropdown open={howOpen} />
            </div>
          </div>

          <Link href="/pricing" className="text-ink/50 hover:text-ink text-sm transition-colors duration-200">
            Pricing
          </Link>
          <Link href="/compare" className="text-ink/50 hover:text-ink text-sm transition-colors duration-200">
            Compare
          </Link>
          <Link href="/security" className="text-ink/50 hover:text-ink text-sm transition-colors duration-200">
            Security
          </Link>
        </div>

        {/* Right: Auth buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/coming-soon"
            className="hidden sm:inline-flex px-4 py-2 text-sm text-ink/50 hover:text-ink transition-colors duration-200"
          >
            Sign in
          </Link>
          <Link
            href="/coming-soon"
            className="inline-flex px-4 py-2 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-light transition-all duration-200 shadow-[0_0_16px_#0D948844] hover:shadow-[0_0_20px_#0D948866]"
          >
            Sign up free
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
