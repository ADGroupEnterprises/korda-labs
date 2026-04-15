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
      setMessage("Thanks for joining the waitlist! We'll be in touch soon.")
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
          {/* Zoe logo */}
          <div className="flex items-center justify-center mx-auto mb-12">
            <svg viewBox="0 0 472.797 423.24" width="80" height="72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fill="none" stroke="#8b4e27" strokeWidth="12.189" strokeMiterlimit="10" d="M300.714,22.235C229.885,6.343,170.333-6.043,102.775,26.593c-26.996,13.041-57.366,28.335-77.623,68.629C4.377,136.546-.989,194.67,16.959,240.65c24.915,63.831,103.709,91.744,142.309,91.505,7.543-.047,40.698-7.158,66.842,2.179,5.208,1.86,8.845,5.268,11.207,10.349,11.006,23.671-21.167,73.644-22.851,72.442-.877-.627-.19-19.897,6.601-31.804,9.048-15.864,29.245-27.166,79.647-38.459,52.297-11.717,49.292-6.185,79.779-12.528,14.712-3.06,42.868-23.248,63.824-62.093,5.532-10.254,25.41-48.302,21.993-100.765-.363-5.577-2.806-38.779-18.543-69.174-27.025-52.195-76.785-64.301-147.053-80.067Z"/>
              <path fill="none" stroke="#d1cdc7" strokeWidth="8.504" strokeMiterlimit="10" d="M290.817,41.158c-59.929-13.446-110.317-23.927-167.479,3.687-22.842,11.034-48.538,23.974-65.678,58.068-17.578,34.965-22.118,84.144-6.933,123.049,21.081,54.008,87.75,77.626,120.41,77.424,6.383-.039,34.435-6.056,56.556,1.843,4.407,1.574,35.721,13.318,63.124,10.6,44.829-4.447,41.706-5.233,67.502-10.6,12.448-2.59,36.271-19.671,54.002-52.538,4.681-8.676,21.5-40.869,18.609-85.259-.307-4.718-2.374-32.812-15.69-58.529-22.866-44.163-64.969-54.406-124.424-67.746Z"/>
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight mb-6">
            Coming Soon
          </h1>
          <p className="text-xl text-ink/60 max-w-lg mx-auto mb-12 leading-relaxed">
            Zoe is almost ready. Join the waitlist to be among the first to experience your personal AI operating system.
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
                className="flex-1 px-6 py-4 rounded-xl border border-ink/15 bg-paper text-ink placeholder:text-ink/30 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="px-8 py-4 rounded-xl bg-accent text-paper font-medium hover:bg-accent-dark transition-all duration-200 shadow-[0_0_24px_#8A4E2844] hover:shadow-[0_0_36px_#8A4E2866] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-accent"
              >
                {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Join Waitlist'}
              </button>
            </div>
            
            {message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-sm ${status === 'success' ? 'text-brand-green' : 'text-red-500'}`}
              >
                {message}
              </motion.p>
            )}
          </form>

          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-ink/40 hover:text-ink transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to home
          </Link>

          {/* Additional Info */}
          <div className="mt-16 pt-12 border-t border-ink/8">
            <p className="text-ink/30 text-sm mb-4">Want to learn more?</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/products/zoe" className="text-sm text-accent hover:text-accent-dark transition-colors">
                About Zoe →
              </Link>
              <Link href="/use-cases/autonomous-agents" className="text-sm text-accent hover:text-accent-dark transition-colors">
                Autonomous Agents →
              </Link>
              <Link href="/security" className="text-sm text-accent hover:text-accent-dark transition-colors">
                Security →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
