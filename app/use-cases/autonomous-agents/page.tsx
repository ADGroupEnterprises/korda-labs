import { APP_SIGNUP_URL } from '@/lib/links'
import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Autonomous Agents — Keel by Korda Labs',
  description: "Keel's agents research, write, automate and deliver finished output. Every step policy-gated and logged.",
}

const capabilities = [
  {
    tag: 'File operations',
    title: 'Read, write & manage files',
    body: 'Agents access Google Drive, OneDrive, iCloud, and your local disk. They read context, draft documents, organize folders, and deliver outputs — directly to your approved storage destinations.',
    detail: 'Every file write is reviewed before delivery. Agents never overwrite without your policy allowing it.',
  },
  {
    tag: 'Web research & automation',
    title: 'Search, browse & automate the web',
    body: 'Agents run web searches, fetch full page content, fill forms, extract data, and navigate web apps — building research briefs, checking facts, and handling the work that used to take 30 minutes of your time.',
    detail: 'Responses are sanitized to structured JSON. Runs in a policy-gated instance. No file downloads without explicit approval.',
  },
  {
    tag: 'Integrations',
    title: 'Connect to anything',
    body: 'Google Calendar, Notion, Todoist, Gmail, Apple Calendar, Apple Health, Strava, Whoop, Oura Ring, Garmin, Fitbit, MyFitnessPal, Spotify, Readwise, Kindle, Audible, GitHub, Zapier, and any webhook-capable service.',
    detail: 'All webhook URLs validated against private IP ranges at both creation and delivery time.',
  },
  {
    tag: 'Persona agents',
    title: 'Specialist agents created as needed',
    body: 'Researcher. Writer. Analyst. Builder. Designer. Keel creates the right agent and selects the best model for the job — automatically — based on task type and complexity.',
    detail: 'Agents work under your direction, coordinating with Compass and Task Manager for goal and schedule context.',
  },
  {
    tag: 'Desktop access',
    title: 'Access your desktop as needed',
    body: 'The Desktop Bridge lets agents access local files and run tasks on your machine when needed — perfect for sensitive work you want to keep on local models only.',
    detail: 'Requires explicit policy configuration. All execution logged to audit trail.',
  },
]

const workflowExamples = [
  {
    name: 'Personal goal planning',
    steps: [
      'You set a goal: "Run a marathon in 6 months"',
      'Compass breaks it into weekly milestones',
      'Task Manager schedules training runs around your calendar',
      'Keel monitors your progress via Apple Health',
      'Weekly check-ins notify you of adjustments needed',
      'You execute the plan — Keel keeps you on track',
    ],
  },
  {
    name: 'Founder weekly review',
    steps: [
      'Every Sunday, Keel reviews your week automatically',
      'Analyzes completed tasks, goal progress, and time spent',
      'Identifies what got done vs. what shifted',
      'Prepares next week\'s priorities based on your goals',
      'Summary delivered to your phone',
      'You review and adjust — Keel handles the scheduling',
    ],
  },
  {
    name: 'Freelancer client workflow',
    steps: [
      'New client project added to Notion',
      'Task Manager breaks it into deliverables',
      'Schedules work blocks around your other commitments',
      'Keel tracks deadlines and sends proactive reminders',
      'Research agent prepares briefs when needed',
      'You execute the work — Keel manages the logistics',
    ],
  },
]

export default function AutonomousAgentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <p className="text-accent eyebrow mb-4">Autonomous agents</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-6 max-w-3xl">
            Agents that
            <br />
            <span className="text-ink">finish the job.</span>
          </h1>
          <p className="text-ink text-xl leading-relaxed max-w-2xl mb-10">
            Keel&apos;s agents run multi-turn loops, up to hundreds of tool calls per task. The output lands in your storage. Every step is policy-gated and logged.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={APP_SIGNUP_URL} className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-accent text-paper hover:bg-navy transition-all duration-300">
              Get Keel
            </Link>
            <Link href="/security" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full border border-ink/15 text-ink hover:border-mist hover:bg-mist transition-all duration-300">
              How we keep it safe
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-ink mb-10">What agents can do</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-24">
            {capabilities.map((cap, i) => (
              <div key={i} className="p-6 rounded-2xl border border-mist bg-mist">
                <p className="text-accent eyebrow mb-3">{cap.tag}</p>
                <h3 className="text-ink font-medium mb-2">{cap.title}</h3>
                <p className="text-ink text-sm leading-relaxed mb-3">{cap.body}</p>
                <p className="text-ink text-xs leading-relaxed border-t border-mist pt-3">{cap.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow examples */}
      <section className="py-8 px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-medium tracking-widest uppercase text-ink mb-4">End-to-end examples</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
              The job,
              <br />
              <span className="text-ink">start to finish.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20">
            {workflowExamples.map((ex, i) => (
              <div key={i} className="p-6 rounded-2xl border border-mist bg-mist">
                <h3 className="text-ink font-medium mb-4">{ex.name}</h3>
                <ol className="space-y-2">
                  {ex.steps.map((step, j) => (
                    <li key={j} className="flex gap-2.5">
                      <span className="text-ink text-xs flex-shrink-0 mt-0.5 font-mono">{j + 1}</span>
                      <span className="text-ink text-xs leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          {/* Safety note */}
          <div className="p-6 rounded-2xl border border-mist bg-mist mb-12">
            <p className="eyebrow text-accent mb-3">Built-in safety model</p>
            <p className="text-ink text-sm leading-relaxed">
              You control what models can access which storage and integrations. Every capability is off by default.
              You enable exactly what you want and set policies for where work gets done and saved. Every action is logged
              in an immutable audit trail. Abort any running agent with one tap.
            </p>
          </div>

          <div className="text-center">
            <Link href={APP_SIGNUP_URL} className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-accent text-paper hover:bg-navy transition-all duration-300">
              Get Keel
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
