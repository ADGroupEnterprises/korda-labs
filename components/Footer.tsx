'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <footer className="relative border-t border-paper-100 pt-16 pb-10 px-6" ref={ref}>
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
              {/* VISUAL-003a Version 1 — light background, verbatim */}
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 436.222 436.222" aria-hidden="true">
                <defs>
                  <style>{`
                    .footer-cls-1 { fill: #dddad4; }
                    .footer-cls-2 { fill: #d1cdc7; }
                    .footer-cls-3 { fill: #512b19; }
                    .footer-cls-4 { stroke: #512b19; stroke-dasharray: 2.784 28.508; stroke-width: 17.008px; fill: none; stroke-miterlimit: 10; }
                    .footer-cls-5 { fill: none; stroke: #8a4e28; stroke-miterlimit: 25; stroke-width: 12.394px; }
                    .footer-cls-6 { fill: none; stroke: #d1cdc7; stroke-width: 8.504px; stroke-miterlimit: 10; }
                    .footer-cls-7 { fill: #60351d; }
                    .footer-cls-8 { fill: #66381f; }
                    .footer-cls-9 { fill: #8a4e28; }
                  `}</style>
                </defs>
                <polygon className="footer-cls-1" points="239.771 208.428 239.771 234.244 303.836 221.336 239.771 208.428"/>
                <polygon className="footer-cls-2" points="239.848 208.23 239.848 220.512 303.913 221.138 239.848 208.23"/>
                <circle className="footer-cls-4" cx="219.393" cy="217.725" r="184.26"/>
                <polygon className="footer-cls-1" points="203.42 208.329 203.42 234.145 139.354 221.237 203.42 208.329"/>
                <polygon className="footer-cls-2" points="203.343 208.131 203.343 220.413 139.278 221.039 203.343 208.131"/>
                <polygon className="footer-cls-1" points="237.748 214.007 201.653 212.345 207.879 387.374 237.748 214.007"/>
                <polygon className="footer-cls-9" points="236.914 212.144 200.837 214.172 206.283 51.769 236.914 212.144"/>
                <polygon className="footer-cls-8" points="218.483 209.845 200.463 210.858 205.908 48.455 218.483 209.845"/>
                <polygon className="footer-cls-2" points="219.575 211.321 201.545 210.49 207.772 385.519 219.575 211.321"/>
                <polygon className="footer-cls-1" points="203.724 223.271 233.394 212.069 328.76 349.063 203.724 223.271"/>
                <polygon className="footer-cls-2" points="203.105 222.304 217.936 216.705 328.141 348.096 203.105 222.304"/>
                <polygon className="footer-cls-1" points="205.327 215.08 234.388 228.339 338.519 98.007 205.327 215.08"/>
                <polygon className="footer-cls-2" points="205.246 214.83 219.071 221.138 338.438 97.757 205.246 214.83"/>
                <circle className="footer-cls-7" cx="217.161" cy="218.168" r="18.75"/>
                <path className="footer-cls-3" d="M217.865,199.305c9.895,0,17.917,8.395,17.917,18.75s-8.022,18.75-17.917,18.75"/>
                <circle className="footer-cls-5" cx="218.111" cy="218.111" r="211.914"/>
                <circle className="footer-cls-6" cx="219.509" cy="217.751" r="188.704"/>
              </svg>
              <span className="font-semibold text-ink tracking-wide text-sm">Korda Labs</span>
            </div>
            <p className="text-ink text-sm leading-relaxed max-w-[220px]">
              The AI that doesn&apos;t just manage your work — it does it.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">Product</p>
            <ul className="space-y-3">
              {[
                { label: 'Zoe', href: '/products/zoe' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Compare', href: '/compare' },
                { label: 'Security', href: '/security' },
                { label: 'All products', href: '/products' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink hover:text-accent transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* How it Works */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">How it Works</p>
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
                  <Link href={l.href} className="text-sm text-ink hover:text-accent transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compare */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">Compare</p>
            <ul className="space-y-3">
              {[
                { label: 'Zoe vs. Akiflow', href: '/compare/zoe-vs-akiflow' },
                { label: 'Zoe vs. Motion', href: '/compare/zoe-vs-motion' },
                { label: 'All comparisons', href: '/compare' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink hover:text-accent transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">Company</p>
            <ul className="space-y-3">
              {[
                { label: 'Blog', href: '/blog' },
                { label: 'Privacy', href: '/privacy' },
                { label: 'Terms', href: '/terms' },
                { label: 'Contact', href: '#' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink hover:text-accent transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-paper-100">
          <p className="text-ink text-xs">
            &copy; {new Date().getFullYear()} Korda Labs. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a href="INSTAGRAM_URL" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="text-ink hover:text-accent transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="YOUTUBE_URL" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
              className="text-ink hover:text-accent transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/korda-labs/about/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="text-ink hover:text-accent transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            {/* X / Twitter */}
            <a href="https://x.com/KordaLabs" target="_blank" rel="noopener noreferrer" aria-label="X"
              className="text-ink hover:text-accent transition-colors">
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
