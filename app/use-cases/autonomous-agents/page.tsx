import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Autonomous Agents — Zoe by Korda Labs',
  description: "Zoe's agents don't just plan. They execute — research, write, automate, and deliver real outputs while you focus on what only you can do.",
}

const capabilities = [
  {
    tag: 'File operations',
    title: 'Read, write & manage files',
    body: 'Agents access Google Drive, OneDrive, iCloud, and your local disk. They read context, draft documents, organize folders, and deliver outputs — directly to your approved storage destinations.',
    detail: 'Every file write is reviewed before delivery. Agents never overwrite without your policy allowing it.',
  },
  {
    tag: 'Web research',
    title: 'Search & browse the web',
    body: 'Agents run web searches and fetch full page content — building research briefs, checking facts, and surfacing information without you switching tabs.',
    detail: 'Responses are sanitized to structured JSON. No raw HTML ever reaches agents.',
  },
  {
    tag: 'Browser automation',
    title: 'Automate your browser',
    body: 'Headless browser automation lets agents fill forms, extract data, navigate web apps, and interact with services — the work that used to take 30 minutes of your time.',
    detail: 'Runs in a policy-gated, role-restricted Playwright instance. No file downloads without explicit approval.',
  },
  {
    tag: 'Webhooks',
    title: 'Connect to anything',
    body: 'GitHub, Zapier, and any webhook-capable service can trigger Zoe agents or receive HMAC-signed notifications when agent work completes.',
    detail: 'All webhook URLs validated against private IP ranges at both creation and delivery time.',
  },
  {
    tag: 'Persona agents',
    title: 'Specialist agents on demand',
    body: 'Researcher. Writer. Analyst. Builder. Designer. Zoe selects the right agent and model for the job — automatically — based on task type and complexity.',
    detail: 'Agents run multi-turn loops until the work is done, coordinating with Compass and Task Manager for goal and schedule context.',
  },
  {
    tag: 'Script execution',
    title: 'Run scripts on your machine',
    body: 'The Desktop Bridge lets agents run local scripts, access local files, and control your home machine — securely, from anywhere, end-to-end encrypted.',
    detail: 'Requires execution_capable role + explicit policy configuration. All execution logged to audit trail.',
  },
]

const workflowExamples = [
  {
    name: 'Competitive research brief',
    steps: [
      'You set a goal: "Launch product in Q2"',
      'Compass flags a milestone: "Market research due"',
      'Researcher agent spawned automatically',
      'Searches 15 sources, fetches 8 pages, reads 3 competitor sites',
      '2-page brief drafted in your writing style',
      'Delivered to Google Drive — you review before it saves',
    ],
  },
  {
    name: 'Weekly file organization',
    steps: [
      'Task Manager schedules a monthly file audit',
      'Agent connects to your Drive via approved policy',
      'Reads folder structure, applies your naming convention',
      'Moves 43 files, renames 12, flags 3 for your review',
      'Manifest of all changes delivered to your phone',
      'You approve, changes apply — or abort any action',
    ],
  },
  {
    name: 'PR review assist',
    steps: [
      'GitHub webhook fires on new pull request',
      'Analyst agent reads the diff + your style guide',
      'Checks against your coding standards',
      'Identifies 2 potential issues, summarizes changes',
      'Review posted as PR comment in under 90 seconds',
      'Full action log reviewable in audit trail',
    ],
  },
]

export default function AutonomousAgentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">Autonomous agents</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight mb-6 max-w-3xl">
            Your agents don&apos;t just plan.
            <br />
            <span className="text-ink/50">They execute.</span>
          </h1>
          <p className="text-ink/50 text-xl leading-relaxed max-w-2xl mb-10">
            Zoe&apos;s agents run autonomous multi-turn loops — up to hundreds of tool calls per task — to complete real work.
            Not suggestions. Not summaries. Actual output, delivered to your storage, policy-gated and audit-logged.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-accent text-white hover:bg-accent-light transition-all duration-200 shadow-[0_0_24px_#C4973A44] hover:shadow-[0_0_36px_#C4973A66]">
              Get started free
            </Link>
            <Link href="/security" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl border border-ink/15 text-ink hover:border-ink/25 hover:bg-ink/5 transition-all duration-200">
              How we keep it safe
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-ink/30 mb-10">What agents can do</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-24">
            {capabilities.map((cap, i) => (
              <div key={i} className="p-6 rounded-2xl border border-ink/8 bg-ink/[0.02]">
                <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">{cap.tag}</p>
                <h3 className="text-ink font-semibold mb-2">{cap.title}</h3>
                <p className="text-ink/50 text-sm leading-relaxed mb-3">{cap.body}</p>
                <p className="text-ink/30 text-xs leading-relaxed border-t border-ink/6 pt-3">{cap.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow examples */}
      <section className="py-8 px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-medium tracking-widest uppercase text-ink/30 mb-4">End-to-end examples</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight">
              Real workflows.
              <br />
              <span className="text-ink/45">Real outputs.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20">
            {workflowExamples.map((ex, i) => (
              <div key={i} className="p-6 rounded-2xl border border-ink/8 bg-ink/[0.02]">
                <h3 className="text-ink font-semibold mb-4">{ex.name}</h3>
                <ol className="space-y-2">
                  {ex.steps.map((step, j) => (
                    <li key={j} className="flex gap-2.5">
                      <span className="text-ink/20 text-xs flex-shrink-0 mt-0.5 font-mono">{j + 1}</span>
                      <span className="text-ink/50 text-xs leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          {/* Safety note */}
          <div className="p-6 rounded-2xl border border-accent/15 bg-accent/[0.02] mb-12">
            <p className="text-xs font-medium tracking-widest uppercase text-accent/60 mb-3">Built-in safety model</p>
            <p className="text-ink/55 text-sm leading-relaxed">
              Every capability is off by default. You enable exactly what you want, set resource pattern policies
              (e.g. <code className="text-accent/70 bg-ink/5 px-1 rounded">work_projects/**</code>), and configure daily action limits.
              Every tool call is checked against your policies before it fires. Every action is logged in an immutable audit trail.
              Abort any running agent with one tap.
            </p>
          </div>

          <div className="text-center">
            <Link href="#" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-accent text-white hover:bg-accent-light transition-all duration-200 shadow-[0_0_24px_#C4973A44] hover:shadow-[0_0_36px_#C4973A66]">
              Get started free
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
