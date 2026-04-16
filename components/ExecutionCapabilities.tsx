'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const capabilities = [
  {
    title: 'Read, write & manage files',
    body: 'Agents access Google Drive, OneDrive, iCloud, and your local disk. They read context, draft documents, and deliver outputs — directly to your storage.',
    tag: 'File operations',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    title: 'Search & browse the web',
    body: 'Agents run web searches and fetch page content autonomously — building research briefs, fact-checking, and surfacing information without you switching tabs.',
    tag: 'Web research',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    title: 'Automate your browser',
    body: 'Headless browser automation lets agents fill forms, extract data, and interact with web services — the work that used to take 30 minutes of your time.',
    tag: 'Browser automation',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    title: 'Connect via webhooks',
    body: 'GitHub, Zapier, and any webhook-capable service can trigger Zoe agents — or receive HMAC-signed notifications when agent work completes.',
    tag: 'Webhooks',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    ),
  },
  {
    title: 'Spawn specialist agents',
    body: 'Researcher. Writer. Analyst. Builder. Designer. Zoe selects the right agent and model for the job — automatically. They run until the work is done.',
    tag: 'Persona agents',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: 'Run scripts on your machine',
    body: 'The Desktop Bridge lets agents run local scripts, access local files, and control your home machine — securely, end-to-end encrypted, from anywhere.',
    tag: 'Desktop Bridge',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
      </svg>
    ),
  },
  {
    title: 'Acts without being asked',
    body: 'Morning briefings at 7am. Stale task alerts. Goal momentum checks. Weekly retrospectives. Zoe runs your operating rhythm automatically — no app needed.',
    tag: 'Proactive engine',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    title: 'Default-deny. Always.',
    body: "Every capability is off until you enable it. Set resource patterns, daily limits, and review policies. Every action is audit-logged. Abort any agent mid-execution.",
    tag: 'Policy & audit',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

export default function ExecutionCapabilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-40 px-6 overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/8 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end"
        >
          <div>
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">What agents can do</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight leading-tight">
              Your agents don&apos;t just plan.
              <br />
              <span className="text-ink">They act.</span>
            </h2>
          </div>
          <div>
            <p className="text-ink leading-relaxed text-lg">
              Zoe&apos;s agents run autonomous multi-turn loops — up to hundreds of tool calls per task —
              to complete real work. Not suggestions. Not summaries. Actual output, delivered to your storage,
              with a full audit trail of every action taken.
            </p>
          </div>
        </motion.div>

        {/* Capability grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              className="flex gap-4 p-5 rounded-2xl border border-ink/8 bg-ink/[0.02] hover:border-ink/14 hover:bg-ink/[0.035] transition-colors duration-200"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-ink/[0.04] flex items-center justify-center text-ink">
                {cap.icon}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="text-ink font-medium text-sm">{cap.title}</h3>
                </div>
                <p className="text-xs font-medium text-accent mb-1.5 tracking-wide">{cap.tag}</p>
                <p className="text-ink text-sm leading-relaxed">{cap.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-ink/8"
        >
          <p className="text-ink text-sm leading-relaxed max-w-xl">
            Every tool call checked against your policies. Every action logged. Every output reviewed before delivery to your storage.
          </p>
          <Link
            href="/use-cases/autonomous-agents"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-dark transition-colors"
          >
            Learn how execution works
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 4l3.5 3L8 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
