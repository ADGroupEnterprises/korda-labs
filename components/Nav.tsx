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
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-xl border border-white/8 bg-dark-100/95 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          <div className="p-1.5">
            <Link
              href="/products/zoe"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group"
            >
              <div className="w-6 h-6 rounded-md bg-accent/20 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Zoe</div>
                <div className="text-xs text-white/30">Personal AI OS</div>
              </div>
            </Link>
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg opacity-40 cursor-default">
              <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-white/30" />
              </div>
              <div>
                <div className="text-sm font-medium text-white/60">More products</div>
                <div className="text-xs text-white/25">Coming soon</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 p-2">
            <Link
              href="/products"
              className="block text-center text-xs text-white/30 hover:text-white/60 py-1.5 transition-colors"
            >
              View all products →
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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

        {/* Center: Products dropdown */}
        <div className="hidden md:flex items-center">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProductsOpen(v => !v)}
              onMouseEnter={() => setProductsOpen(true)}
              className="flex items-center gap-1 text-ink/50 hover:text-ink text-sm transition-colors duration-200"
            >
              Products
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div onMouseLeave={() => setProductsOpen(false)}>
              <ProductsDropdown open={productsOpen} />
            </div>
          </div>
        </div>

        {/* Right: Auth buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden sm:inline-flex px-4 py-2 text-sm text-ink/50 hover:text-ink transition-colors duration-200"
          >
            Sign in
          </Link>
          <Link
            href="#"
            className="inline-flex px-4 py-2 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-light transition-all duration-200 shadow-[0_0_16px_#C4973A44] hover:shadow-[0_0_20px_#C4973A66]"
          >
            Sign up
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
