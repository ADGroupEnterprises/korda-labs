'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
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

  // Logo animation
  const needlesRef = useRef<SVGGElement>(null)
  const angleRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const spinningRef = useRef(false)

  const applyRotation = (angle: number) => {
    if (needlesRef.current) {
      needlesRef.current.setAttribute('transform', `rotate(${angle} 218.111 218.111)`)
    }
  }

  const startSpin = () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    spinningRef.current = true
    const spin = () => {
      if (!spinningRef.current) return
      angleRef.current -= 0.8
      applyRotation(angleRef.current)
      rafRef.current = requestAnimationFrame(spin)
    }
    rafRef.current = requestAnimationFrame(spin)
  }

  const startEaseBack = () => {
    spinningRef.current = false
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    let angle = ((angleRef.current % 360) + 360) % 360
    if (angle > 180) angle -= 360
    angleRef.current = angle
    const ease = () => {
      const diff = -angleRef.current
      if (Math.abs(diff) < 0.5) {
        angleRef.current = 0
        applyRotation(0)
        return
      }
      angleRef.current += diff * 0.06
      applyRotation(angleRef.current)
      rafRef.current = requestAnimationFrame(ease)
    }
    rafRef.current = requestAnimationFrame(ease)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current) }
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
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          onMouseEnter={startSpin}
          onMouseLeave={startEaseBack}
        >
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 436.222 436.222" aria-hidden="true">
            <defs>
              <style>{`
                .kl-cls-1 { fill: #dddad4; }
                .kl-cls-2 { fill: #d1cdc7; }
                .kl-cls-3 { fill: #512b19; }
                .kl-cls-4 { stroke: #512b19; stroke-dasharray: 2.784 28.508; stroke-width: 17.008px; fill: none; stroke-miterlimit: 10; }
                .kl-cls-5 { fill: none; stroke: #8a4e28; stroke-miterlimit: 25; stroke-width: 12.394px; }
                .kl-cls-6 { fill: none; stroke: #d1cdc7; stroke-width: 8.504px; stroke-miterlimit: 10; }
                .kl-cls-7 { fill: #60351d; }
                .kl-cls-8 { fill: #66381f; }
                .kl-cls-9 { fill: #8a4e28; }
              `}</style>
            </defs>
            {/* Primary needles — N, S, E, W — this group rotates */}
            <g ref={needlesRef}>
              {/* East needle */}
              <polygon className="kl-cls-1" points="239.771 208.428 239.771 234.244 303.836 221.336 239.771 208.428"/>
              <polygon className="kl-cls-2" points="239.848 208.23 239.848 220.512 303.913 221.138 239.848 208.23"/>
              {/* West needle */}
              <polygon className="kl-cls-1" points="203.42 208.329 203.42 234.145 139.354 221.237 203.42 208.329"/>
              <polygon className="kl-cls-2" points="203.343 208.131 203.343 220.413 139.278 221.039 203.343 208.131"/>
              {/* South needle */}
              <polygon className="kl-cls-1" points="237.748 214.007 201.653 212.345 207.879 387.374 237.748 214.007"/>
              <polygon className="kl-cls-2" points="219.575 211.321 201.545 210.49 207.772 385.519 219.575 211.321"/>
              {/* North needle */}
              <polygon className="kl-cls-9" points="236.914 212.144 200.837 214.172 206.283 51.769 236.914 212.144"/>
              <polygon className="kl-cls-8" points="218.483 209.845 200.463 210.858 205.908 48.455 218.483 209.845"/>
            </g>
            {/* Diagonal needles — static */}
            <polygon className="kl-cls-1" points="203.724 223.271 233.394 212.069 328.76 349.063 203.724 223.271"/>
            <polygon className="kl-cls-2" points="203.105 222.304 217.936 216.705 328.141 348.096 203.105 222.304"/>
            <polygon className="kl-cls-1" points="205.327 215.08 234.388 228.339 338.519 98.007 205.327 215.08"/>
            <polygon className="kl-cls-2" points="205.246 214.83 219.071 221.138 338.438 97.757 205.246 214.83"/>
            {/* Center and rings — static, render on top */}
            <circle className="kl-cls-7" cx="217.161" cy="218.168" r="18.75"/>
            <path className="kl-cls-3" d="M217.865,199.305c9.895,0,17.917,8.395,17.917,18.75s-8.022,18.75-17.917,18.75"/>
            <circle className="kl-cls-4" cx="219.393" cy="217.725" r="184.26"/>
            <circle className="kl-cls-5" cx="218.111" cy="218.111" r="211.914"/>
            <circle className="kl-cls-6" cx="219.509" cy="217.751" r="188.704"/>
          </svg>
          <span className="font-serif font-medium text-sm" style={{ color: '#37332E', fontWeight: 500 }}>Korda Labs</span>
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
            className="inline-flex px-4 py-2 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-light transition-all duration-200 shadow-[0_0_16px_#8A4E2844] hover:shadow-[0_0_20px_#8A4E2866]"
          >
            Sign up free
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
