'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <footer className="relative border-t border-ink/8 pt-16 pb-10 px-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Top grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              {/* VISUAL-003a — light background variant, verbatim */}
              <svg width="26" height="26" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M40 5 C44 4.5 50 7 57 12 C65 18 72 28 72.5 40 C73 52 66 63 57 68.5 C48 74 30 74 21 68.5 C12 63 7 52 7.5 40 C8 28 14.5 17 24 11 C29 8 36 5.5 40 5Z" stroke="#8A4E28" strokeWidth="2" fill="none"/>
                <path d="M40 2 C44.5 1.5 52 5 60 11 C69 18 76 29 76.5 40 C77 51 70 63 60 69.5 C50 76 28 76 18 69.5 C8 63 3 51 3.5 40 C4 29 11 17 22 11 C28 7.5 35.5 2.5 40 2Z" stroke="#8A4E28" strokeWidth="1" fill="none" opacity="0.3"/>
                <path d="M40.4 7 C41.4 9.5 42.5 20.5 42.8 31 C43 36.5 42.2 39.5 40.4 41.5 C38.6 39.5 37.8 36.5 38 31 C38.3 20.5 39.4 9.5 40.4 7Z" fill="#8A4E28"/>
                <path d="M40.4 7 C39.4 8 38.5 13.5 38.1 23 C37.7 31 37.9 37 40.4 41.5 Z" fill="#5C3018" opacity="0.55"/>
                <path d="M39.6 73 C38.6 70.5 37.5 59.5 37.2 49 C37 43.5 37.8 40.5 39.6 38.5 C41.4 40.5 42.2 43.5 42 49 C41.7 59.5 40.6 70.5 39.6 73Z" fill="#EDE8DF" stroke="#c8b5a0" strokeWidth="0.4"/>
                <path d="M7 40.4 C9.5 39.4 20.5 38.3 31 38.6 C36.5 38.8 39.5 39.6 41.5 41.4 C39.5 43.2 36.5 44 31 43.8 C20.5 43.5 9.5 42.4 7 40.4Z" fill="#EDE8DF" stroke="#c8b5a0" strokeWidth="0.4"/>
                <path d="M73 39.6 C70.5 40.6 59.5 41.7 49 41.4 C43.5 41.2 40.5 40.4 38.5 38.6 C40.5 36.8 43.5 36 49 36.2 C59.5 36.5 70.5 37.6 73 39.6Z" fill="#EDE8DF" stroke="#c8b5a0" strokeWidth="0.4"/>
                <path d="M40.3 40 L41.6 33 L40.3 28.5 L39 33 Z" fill="#8A4E28" opacity="0.45" transform="rotate(45 40 40)"/>
                <path d="M40.3 40 L41.6 33 L40.3 28.5 L39 33 Z" fill="#8A4E28" opacity="0.45" transform="rotate(135 40 40)"/>
                <path d="M40.3 40 L41.6 33 L40.3 28.5 L39 33 Z" fill="#8A4E28" opacity="0.45" transform="rotate(225 40 40)"/>
                <path d="M40.3 40 L41.6 33 L40.3 28.5 L39 33 Z" fill="#8A4E28" opacity="0.45" transform="rotate(315 40 40)"/>
                <circle cx="40" cy="40" r="3.5" fill="#FAFAF8" stroke="#8A4E28" strokeWidth="1.2"/>
                <circle cx="40" cy="40" r="1.4" fill="#8A4E28"/>
              </svg>
              <span className="font-semibold text-ink/80 tracking-wide text-sm">Korda Labs</span>
            </div>
            <p className="text-ink/35 text-sm leading-relaxed max-w-[220px]">
              The AI that doesn&apos;t just manage your work — it does it.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-ink/30 mb-4">Product</p>
            <ul className="space-y-3">
              {[
                { label: 'Zoe', href: '/products/zoe' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Compare', href: '/compare' },
                { label: 'Security', href: '/security' },
                { label: 'All products', href: '/products' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink/40 hover:text-ink/70 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* How it Works */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-ink/30 mb-4">How it Works</p>
            <ul className="space-y-3">
              {[
                { label: 'Autonomous Agents', href: '/use-cases/autonomous-agents' },
                { label: 'Proactive AI', href: '/use-cases/proactive-ai' },
                { label: 'Desktop Bridge', href: '/use-cases/desktop-bridge' },
                { label: 'Daily Planning', href: '/use-cases/daily-planning' },
                { label: 'For Founders', href: '/use-cases/founders' },
                { label: 'For Freelancers', href: '/use-cases/freelancers' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink/40 hover:text-ink/70 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compare */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-ink/30 mb-4">Compare</p>
            <ul className="space-y-3">
              {[
                { label: 'Zoe vs. Akiflow', href: '/compare/zoe-vs-akiflow' },
                { label: 'Zoe vs. Motion', href: '/compare/zoe-vs-motion' },
                { label: 'All comparisons', href: '/compare' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink/40 hover:text-ink/70 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-ink/30 mb-4">Company</p>
            <ul className="space-y-3">
              {[
                { label: 'Blog', href: '/blog' },
                { label: 'Privacy', href: '/privacy' },
                { label: 'Terms', href: '/terms' },
                { label: 'Contact', href: '#' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink/40 hover:text-ink/70 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-ink/8">
          <p className="text-ink/30 text-xs">
            &copy; {new Date().getFullYear()} Korda Labs. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a href="INSTAGRAM_URL" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="text-ink/30 hover:text-ink/60 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="YOUTUBE_URL" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
              className="text-ink/30 hover:text-ink/60 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/korda-labs/about/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="text-ink/30 hover:text-ink/60 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            {/* X / Twitter */}
            <a href="https://x.com/KordaLabs" target="_blank" rel="noopener noreferrer" aria-label="X"
              className="text-ink/30 hover:text-ink/60 transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
