import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Zoe for Freelancers — Korda Labs',
  description: 'Client work, personal goals, and your calendar — one intelligent layer. Independent professionals don\'t have a chief of staff. Zoe is the next best thing.',
}

const features = [
  { label: 'Project & deadline tracking', body: 'Connect Notion, Todoist, or your preferred tool. Zoe surfaces what\'s due, what\'s at risk, and what to work on today — without you having to check everything manually.' },
  { label: 'Client context, always available', body: 'Zoe remembers your clients, their deadlines, and your commitments. No more digging through email threads to remember what you promised and when.' },
  { label: 'Personal goals alongside client work', body: 'Your professional development, fitness, and personal goals don\'t disappear when client work gets busy. Compass keeps them alive — scheduled into the gaps that exist.' },
  { label: 'AI planning that works around your life', body: 'Freelance schedules are fluid. Task Manager adapts your plan in real time as client requests come in, deadlines shift, or you simply need a different kind of day.' },
]

export default function FreelancersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <p className="text-accent text-[0.9rem] font-bold tracking-[0.16em] uppercase mb-4">For freelancers</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-serif tracking-tight mb-6 max-w-3xl">
            Client work, personal goals,
            <br />
            <span className="text-ink">and your calendar — one intelligent layer.</span>
          </h1>
          <p className="text-ink text-xl leading-relaxed max-w-2xl mb-10">
            Independent professionals don't have a chief of staff. Zoe is the next best thing —
            tracking your clients, your deadlines, your goals, and your health, so you can
            focus on the work that actually earns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-accent text-paper hover:bg-mahogany transition-all duration-300"
            >
              Get started free
            </Link>
            <Link
              href="/products/zoe"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl border border-linen text-ink hover:border-linen hover:bg-linen transition-all duration-300"
            >
              See how Zoe works
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
              <div key={i} className="p-6 rounded-2xl border border-linen bg-linen">
                <div className="w-1 h-5 rounded-full bg-accent mb-4" />
                <h3 className="text-ink font-medium mb-2">{f.label}</h3>
                <p className="text-ink text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-medium font-serif tracking-tight mb-4">
              Your dedicated AI partner for independent work.
            </h2>
            <p className="text-ink mb-8">Free to start. No credit card.</p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-accent text-paper hover:bg-mahogany transition-all duration-300"
            >
              Get started with Zoe
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
