'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function ComingSoonClient() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
        return
      }

      setStatus('success')
      setMessage("You're on the list. We'll be in touch soon.")
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Network error. Please check your connection and try again.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* The Lens */}
          <div className="relative flex items-center justify-center w-32 h-32 mx-auto mb-12">
            <div className="absolute inset-0 rounded-full border border-linen" />
            <div className="absolute inset-4 rounded-full border border-linen" style={{ borderStyle: 'dashed' }} />
            <div className="w-12 h-12 rounded-full bg-copper relative">
              <div className="absolute top-2 left-3 w-2 h-2 rounded-full bg-mahogany" />
              <div className="absolute top-1.5 left-2.5 w-1 h-1 rounded-full bg-paper" />
            </div>
            <div className="absolute inset-0 rounded-full bg-linen" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif tracking-tight mb-6">
            Coming Soon
          </h1>
          <p className="text-xl text-ink max-w-lg mx-auto mb-12 leading-relaxed">
            Zoe is almost ready. Join the waitlist to be among the first to use your dedicated AI partner that does the work.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === 'loading' || status === 'success'}
                className="flex-1 px-6 py-4 rounded-xl border border-linen bg-paper text-ink placeholder:text-ink focus:outline-none focus:border-accent focus:ring-2 focus:ring-linen transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="px-8 py-4 rounded-xl bg-accent text-paper font-medium hover:bg-mahogany transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-accent"
              >
                {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined' : 'Join Waitlist'}
              </button>
            </div>
            
            {message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-sm ${status === 'success' ? 'text-accent' : 'text-red-500'}`}
              >
                {message}
              </motion.p>
            )}
          </form>

          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-ink hover:text-ink transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to home
          </Link>

          {/* Additional Info */}
          <div className="mt-16 pt-12 border-t border-linen">
            <p className="text-ink text-sm mb-4">Want to learn more?</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/products/zoe" className="text-sm text-accent hover:text-accent transition-colors">
                About Zoe →
              </Link>
              <Link href="/use-cases/autonomous-agents" className="text-sm text-accent hover:text-accent transition-colors">
                Autonomous Agents →
              </Link>
              <Link href="/security" className="text-sm text-accent hover:text-accent transition-colors">
                Security →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
