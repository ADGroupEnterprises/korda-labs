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
              className="zoe-logo-wrapper flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-ink/[0.04] transition-colors group"
            >
              <svg viewBox="0 0 472.797 423.24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0">
                <defs>
                  <style>{`
                    .zoe-spark { opacity: 0; }
                    .zoe-logo-wrapper:hover .sp1  { animation: zoe-spk 2.2s 0.00s infinite; }
                    .zoe-logo-wrapper:hover .sp2  { animation: zoe-spk 1.9s 0.35s infinite; }
                    .zoe-logo-wrapper:hover .sp3  { animation: zoe-spk 2.5s 0.70s infinite; }
                    .zoe-logo-wrapper:hover .sp4  { animation: zoe-spk 1.7s 1.05s infinite; }
                    .zoe-logo-wrapper:hover .sp5  { animation: zoe-spk 2.0s 0.15s infinite; }
                    .zoe-logo-wrapper:hover .sp6  { animation: zoe-spk 2.3s 0.50s infinite; }
                    .zoe-logo-wrapper:hover .sp7  { animation: zoe-spk 1.8s 0.85s infinite; }
                    .zoe-logo-wrapper:hover .sp8  { animation: zoe-spk 2.4s 0.28s infinite; }
                    .zoe-logo-wrapper:hover .sp9  { animation: zoe-spk 1.6s 0.62s infinite; }
                    .zoe-logo-wrapper:hover .sp10 { animation: zoe-spk 2.1s 0.97s infinite; }
                    .zoe-logo-wrapper:hover .sp11 { animation: zoe-spk 2.6s 0.42s infinite; }
                    .zoe-logo-wrapper:hover .sp12 { animation: zoe-spk 1.8s 0.78s infinite; }
                    .zoe-logo-wrapper:hover .sp13 { animation: zoe-spk 2.2s 0.20s infinite; }
                    .zoe-logo-wrapper:hover .sp14 { animation: zoe-spk 1.9s 0.55s infinite; }
                    @keyframes zoe-spk {
                      0%,  7% { opacity: 0; }
                      9%      { opacity: 1; }
                      14%     { opacity: 0.3; }
                      16%     { opacity: 1; }
                      24%     { opacity: 0; }
                      100%    { opacity: 0; }
                    }
                  `}</style>
                </defs>
                <path fill="none" stroke="#8b4e27" strokeWidth="12.189" strokeMiterlimit="10" d="M300.714,22.235C229.885,6.343,170.333-6.043,102.775,26.593c-26.996,13.041-57.366,28.335-77.623,68.629C4.377,136.546-.989,194.67,16.959,240.65c24.915,63.831,103.709,91.744,142.309,91.505,7.543-.047,40.698-7.158,66.842,2.179,5.208,1.86,8.845,5.268,11.207,10.349,11.006,23.671-21.167,73.644-22.851,72.442-.877-.627-.19-19.897,6.601-31.804,9.048-15.864,29.245-27.166,79.647-38.459,52.297-11.717,49.292-6.185,79.779-12.528,14.712-3.06,42.868-23.248,63.824-62.093,5.532-10.254,25.41-48.302,21.993-100.765-.363-5.577-2.806-38.779-18.543-69.174-27.025-52.195-76.785-64.301-147.053-80.067Z"/>
                <path fill="none" stroke="#d1cdc7" strokeWidth="8.504" strokeMiterlimit="10" d="M290.817,41.158c-59.929-13.446-110.317-23.927-167.479,3.687-22.842,11.034-48.538,23.974-65.678,58.068-17.578,34.965-22.118,84.144-6.933,123.049,21.081,54.008,87.75,77.626,120.41,77.424,6.383-.039,34.435-6.056,56.556,1.843,4.407,1.574,35.721,13.318,63.124,10.6,44.829-4.447,41.706-5.233,67.502-10.6,12.448-2.59,36.271-19.671,54.002-52.538,4.681-8.676,21.5-40.869,18.609-85.259-.307-4.718-2.374-32.812-15.69-58.529-22.866-44.163-64.969-54.406-124.424-67.746Z"/>
                {/* sp1 tiny cream */}
                <g className="zoe-spark sp1" transform="translate(150,145)">
                  <path fill="none" stroke="#d1cdc7" strokeWidth="0.8" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-12,0 L-12,8 L-5,8 L-5,14"/>
                  <path fill="none" stroke="#d1cdc7" strokeWidth="0.5" strokeLinecap="square" strokeLinejoin="miter" d="M-12,0 L-18,-7"/>
                </g>
                {/* sp2 tiny cream */}
                <g className="zoe-spark sp2" transform="translate(178,190)">
                  <path fill="none" stroke="#d1cdc7" strokeWidth="0.8" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L0,-11 L9,-11 L9,-5 L15,-5"/>
                  <path fill="none" stroke="#d1cdc7" strokeWidth="0.5" strokeLinecap="square" strokeLinejoin="miter" d="M0,-11 L-6,-17"/>
                </g>
                {/* sp3 small copper */}
                <g className="zoe-spark sp3" transform="translate(195,222)">
                  <path fill="none" stroke="#8A4E28" strokeWidth="1.2" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-8,-7 L-17,-7 L-17,-15 L-10,-15 L-10,-22"/>
                  <path fill="none" stroke="#8A4E28" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-17,-7 L-22,2"/>
                </g>
                {/* sp4 small copper */}
                <g className="zoe-spark sp4" transform="translate(220,258)">
                  <path fill="none" stroke="#8A4E28" strokeWidth="1.0" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L7,-9 L7,-18 L-1,-18 L-1,-25"/>
                  <path fill="none" stroke="#8A4E28" strokeWidth="0.5" strokeLinecap="square" strokeLinejoin="miter" d="M7,-9 L14,-7"/>
                </g>
                {/* sp5 medium cream */}
                <g className="zoe-spark sp5" transform="translate(245,112)">
                  <path fill="none" stroke="#d1cdc7" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-7,-13 L-16,-13 L-16,-5 L-24,-5 L-24,-15 L-17,-15"/>
                  <path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-16,-13 L-9,-21 L-9,-28"/>
                  <path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-24,-5 L-31,-11"/>
                </g>
                {/* sp6 medium cream */}
                <g className="zoe-spark sp6" transform="translate(314,128)">
                  <path fill="none" stroke="#d1cdc7" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-9,0 L-9,-12 L0,-12 L0,-21 L-9,-21"/>
                  <path fill="none" stroke="#d1cdc7" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-9,-12 L-15,-7 L-22,-12"/>
                  <path fill="none" stroke="#d1cdc7" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M0,-12 L6,-7"/>
                </g>
                {/* sp7 medium cream */}
                <g className="zoe-spark sp7" transform="translate(348,162)">
                  <path fill="none" stroke="#d1cdc7" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-7,-9 L-7,-20 L2,-20 L2,-28"/>
                  <path fill="none" stroke="#d1cdc7" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-7,-20 L-15,-16 L-20,-23"/>
                  <path fill="none" stroke="#d1cdc7" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M2,-20 L8,-16"/>
                </g>
                {/* sp8 medium copper */}
                <g className="zoe-spark sp8" transform="translate(288,148)">
                  <path fill="none" stroke="#8A4E28" strokeWidth="2.0" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-4,-15 L-13,-15 L-13,-6 L-22,-6 L-22,-16"/>
                  <path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-13,-15 L-7,-23 L-13,-30"/>
                  <path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-4,-15 L4,-11 L4,-19"/>
                </g>
                {/* sp9 medium copper */}
                <g className="zoe-spark sp9" transform="translate(355,210)">
                  <path fill="none" stroke="#8A4E28" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L0,-13 L-9,-13 L-9,-5 L-18,-5 L-18,-15"/>
                  <path fill="none" stroke="#8A4E28" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-9,-13 L-3,-21 L-9,-27"/>
                  <path fill="none" stroke="#8A4E28" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-18,-5 L-25,-11"/>
                </g>
                {/* sp10 medium copper */}
                <g className="zoe-spark sp10" transform="translate(378,238)">
                  <path fill="none" stroke="#8A4E28" strokeWidth="2.0" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-9,-7 L-9,-19 L-2,-19 L-2,-28 L-11,-28"/>
                  <path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-9,-19 L-17,-14 L-24,-20"/>
                  <path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-2,-19 L5,-15"/>
                </g>
                {/* sp11 LARGE copper — the anchor spark */}
                <g className="zoe-spark sp11" transform="translate(264,198)">
                  <path fill="none" stroke="#8A4E28" strokeWidth="3.0" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-11,-13 L-11,-26 L-3,-26 L-3,-36"/>
                  <path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-11,-13 L-22,-9 L-30,-16"/>
                  <path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-11,-26 L-21,-22 L-29,-29"/>
                  <path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-3,-26 L8,-22 L15,-30"/>
                  <path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L11,-5 L11,-17 L4,-17"/>
                  <path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-4,11 L-13,11 L-13,4"/>
                </g>
                {/* sp12 large cream */}
                <g className="zoe-spark sp12" transform="translate(184,228)">
                  <path fill="none" stroke="#d1cdc7" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-7,-13 L-7,-24 L2,-24 L2,-34 L-7,-34"/>
                  <path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-7,-13 L-18,-9 L-24,-16"/>
                  <path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-7,-24 L-17,-20"/>
                  <path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M2,-24 L11,-20 L16,-28"/>
                </g>
                {/* sp13 medium copper */}
                <g className="zoe-spark sp13" transform="translate(308,194)">
                  <path fill="none" stroke="#8A4E28" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-9,-7 L-16,-7 L-16,-16 L-7,-16 L-7,-24"/>
                  <path fill="none" stroke="#8A4E28" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-16,-7 L-23,-14 L-28,-9"/>
                  <path fill="none" stroke="#8A4E28" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-7,-16 L0,-22"/>
                </g>
                {/* sp14 medium cream */}
                <g className="zoe-spark sp14" transform="translate(357,268)">
                  <path fill="none" stroke="#d1cdc7" strokeWidth="2.0" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L0,-13 L-9,-13 L-9,-22 L-2,-22 L-2,-31"/>
                  <path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-9,-13 L-17,-9 L-22,-16"/>
                  <path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-9,-22 L-17,-27"/>
                  <path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-2,-22 L5,-18"/>
                </g>
              </svg>
              <div>
                <div className="text-sm font-serif font-medium" style={{ color: '#37332E' }}>Zoe</div>
                <div className="text-xs text-ink">Personal AI OS</div>
              </div>
            </Link>
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg opacity-40 cursor-default">
              <div className="w-6 h-6 rounded-md bg-ink/[0.04] flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-ink/30" />
              </div>
              <div>
                <div className="text-sm font-medium text-ink">More products</div>
                <div className="text-xs text-ink">Coming soon</div>
              </div>
            </div>
          </div>
          <div className="border-t border-ink/8 p-2">
            <Link
              href="/products"
              className="block text-center text-xs text-ink hover:text-accent py-1.5 transition-colors"
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
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [howOpen, setHowOpen] = useState(false)
  const productsRef = useRef<HTMLDivElement>(null)
  const howRef = useRef<HTMLDivElement>(null)

  // Logo needle animation
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
              className="flex items-center gap-1 text-ink hover:text-accent text-sm transition-colors duration-200"
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
              className="flex items-center gap-1 text-ink hover:text-accent text-sm transition-colors duration-200"
            >
              How it Works
              {chevron(howOpen)}
            </button>
            <div onMouseLeave={() => setHowOpen(false)}>
              <HowItWorksDropdown open={howOpen} />
            </div>
          </div>

          <Link href="/pricing" className="text-ink hover:text-accent text-sm transition-colors duration-200">
            Pricing
          </Link>
          <Link href="/compare" className="text-ink hover:text-accent text-sm transition-colors duration-200">
            Compare
          </Link>
          <Link href="/security" className="text-ink hover:text-accent text-sm transition-colors duration-200">
            Security
          </Link>
        </div>

        {/* Right: Auth buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/coming-soon"
            className="hidden sm:inline-flex px-4 py-2 text-sm text-ink hover:text-accent transition-colors duration-200"
          >
            Sign in
          </Link>
          <Link
            href="/coming-soon"
            className="inline-flex px-4 py-2 text-sm font-medium rounded-lg bg-accent text-paper hover:bg-accent-dark transition-all duration-200 shadow-[0_0_16px_#8A4E2844] hover:shadow-[0_0_20px_#8A4E2866]"
          >
            Sign up free
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
