'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { KordaLockup, KeelMark } from '@/components/marks/Brand'
import { APP_SIGNIN_URL } from '@/lib/links'

// One menu, three groups. Everything that used to be a separate header link lives here.
const groups = [
  {
    title: 'Keel',
    links: [
      { label: 'Overview', href: '/products/keel', mark: true },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Security', href: '/security' },
      { label: 'Compare', href: '/compare' },
    ],
  },
  {
    title: 'How it works',
    links: [
      { label: 'Autonomous agents', href: '/use-cases/autonomous-agents' },
      { label: 'Proactive AI', href: '/use-cases/proactive-ai' },
      { label: 'Bridge', href: '/use-cases/desktop-bridge' },
      { label: 'Daily planning', href: '/use-cases/daily-planning' },
      { label: 'For founders', href: '/use-cases/founders' },
      { label: 'For freelancers', href: '/use-cases/freelancers' },
    ],
  },
  {
    title: 'Korda Labs',
    links: [
      { label: 'What we believe', href: '/believe' },
      { label: 'Roadmap', href: '/roadmap' },
      { label: 'Products', href: '/products' },
      { label: 'Blog', href: '/blog' },
    ],
  },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Close on navigation, outside click, and Escape.
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div ref={wrapRef} className="fixed top-3 left-3 right-3 z-50 mx-auto max-w-6xl">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-full glass"
      >
        <div className="pl-4 pr-2.5 sm:pl-6 sm:pr-3 h-16 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Korda Labs home">
            <KordaLockup className="h-10 sm:h-11 w-auto" />
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/believe"
              className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-ink hover:text-accent transition-colors duration-300"
            >
              What we believe
            </Link>

            <button
              type="button"
              onClick={() => setOpen(v => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                open ? 'bg-ink/[0.06] text-accent' : 'text-ink hover:text-accent'
              }`}
            >
              Explore
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden="true">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <a
              href={APP_SIGNIN_URL}
              className="inline-flex px-5 py-2.5 text-sm font-semibold rounded-full bg-accent text-paper btn-pillow transition-all duration-300"
            >
              Get Keel
            </a>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mt-2 rounded-[2rem] glass glass-menu p-3 sm:p-5 max-h-[calc(100vh-7rem)] overflow-y-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
              {groups.map((g) => (
                <div key={g.title} className="rounded-3xl p-3 sm:p-4">
                  <p className="eyebrow text-ink-soft mb-2 px-3">{g.title}</p>
                  <ul>
                    {g.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-accent/[0.07] transition-colors"
                        >
                          {'mark' in l && l.mark ? (
                            <span className="w-8 h-8 rounded-xl bg-white/80 border border-white flex items-center justify-center flex-shrink-0 shadow-sm">
                              <KeelMark size={18} />
                            </span>
                          ) : null}
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold text-ink group-hover:text-accent transition-colors">{l.label}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
