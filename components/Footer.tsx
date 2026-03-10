'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <footer className="relative border-t border-white/5 py-12 px-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Korda Labs" width={28} height={28} className="rounded-sm" />
          <div>
            <span className="font-semibold text-white/80 tracking-wide">Korda Labs</span>
            <p className="text-white/25 text-xs">A venture studio by RIT</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-white/30">
          <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
          <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
          <a href="#" className="hover:text-white/60 transition-colors">Contact</a>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {/* Instagram */}
          <a href="INSTAGRAM_URL" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            className="text-white/20 hover:text-white/60 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          {/* YouTube */}
          <a href="YOUTUBE_URL" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
            className="text-white/20 hover:text-white/60 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/company/korda-labs/about/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="text-white/20 hover:text-white/60 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          {/* X / Twitter */}
          <a href="https://x.com/KordaLabs" target="_blank" rel="noopener noreferrer" aria-label="X"
            className="text-white/20 hover:text-white/60 transition-colors">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-white/20 text-xs">
          &copy; {new Date().getFullYear()} Korda Labs. All rights reserved.
        </p>
      </motion.div>
    </footer>
  )
}
