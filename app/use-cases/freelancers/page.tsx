import { APP_SIGNUP_URL } from '@/lib/links'
import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Keel for Freelancers — Korda Labs',
  description: 'Keel for freelancers. Clients, deadlines and calendar in one app, with a crew that handles the admin.',
}

const features = [
  { label: 'Project & deadline tracking', body: 'Connect Notion, Todoist, or your preferred tool. Keel surfaces what\'s due, what\'s at risk, and what to work on today — without you having to check everything manually.' },
  { label: 'Client context, always available', body: 'Keel remembers your clients, their deadlines, and your commitments. No more digging through email threads to remember what you promised and when.' },
  { label: 'Personal goals alongside client work', body: 'Your professional development, fitness, and personal goals don\'t disappear when client work gets busy. Compass keeps them alive — scheduled into the gaps that exist.' },
  { label: 'AI planning that works around your life', body: 'Freelance schedules are fluid. Task Manager adapts your plan in real time as client requests come in, deadlines shift, or you simply need a different kind of day.' },
]

export default function FreelancersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <p className="text-accent eyebrow mb-4">For freelancers</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-6 max-w-3xl">
            Clients, deadlines, calendar.
            <br />
            <span className="text-ink">One app.</span>
          </h1>
          <p className="text-ink text-xl leading-relaxed max-w-2xl mb-10">
            A chief of staff for a company of one. Keel tracks your clients, deadlines and goals, and its agents handle the admin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={APP_SIGNUP_URL}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-accent text-paper hover:bg-navy transition-all duration-300"
            >
              Get Keel
            </Link>
            <Link
              href="/products/keel"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full border border-ink/15 text-ink hover:border-mist hover:bg-mist transition-all duration-300"
            >
              See how Keel works
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-ink mb-10">Available now</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
            {features.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border border-mist bg-mist">
                <div className="w-1 h-5 rounded-full bg-accent mb-4" />
                <h3 className="text-ink font-medium mb-2">{f.label}</h3>
                <p className="text-ink text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-4">
              A crew for a company of one.
            </h2>
            <p className="text-ink mb-8">Free on web.</p>
            <Link
              href={APP_SIGNUP_URL}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-accent text-paper hover:bg-navy transition-all duration-300"
            >
              Get Keel
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
