import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI Daily Planning — Zoe by Korda Labs',
  description: 'Your AI morning briefing. Your AI end-of-day review. Zoe automates the daily planning ritual so you can focus on the work that matters.',
}

const morningSteps = [
  {
    time: 'Morning',
    title: 'Your briefing, ready before you are.',
    body: 'Zoe reviews your goals, checks your calendar, weighs your energy levels from your health data, and hands you a prioritized plan. No inbox triage. No manual scheduling. Just a clear day, ready to go.',
  },
  {
    time: 'During the day',
    title: 'Agents running in the background.',
    body: "Task Manager tracks what's getting done, adjusts your queue as priorities shift, and surfaces anything that needs your attention — without interrupting your flow. Compass keeps your long-term goals in view even when the day gets loud.",
  },
  {
    time: 'End of day',
    title: 'Log it. Learn from it. Prep for tomorrow.',
    body: "Zoe reviews what got done, notes what shifted, and automatically prepares your plan for tomorrow — factoring in what's still open, what's coming up, and how you're tracking toward your goals.",
  },
]

export default function DailyPlanningPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="relative max-w-3xl mx-auto">
          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">Use case</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight mb-6">
            Your AI morning briefing.
            <br />
            <span className="text-ink">Your AI end-of-day review.</span>
          </h1>
          <p className="text-ink text-lg leading-relaxed max-w-2xl mx-auto">
            Tools like Akiflow and Sunsama give you a structured planning ritual. Zoe automates it —
            so the discipline is built in, not something you have to summon every morning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-accent text-paper hover:bg-accent-dark transition-all duration-200 shadow-[0_0_24px_#8A4E2844] hover:shadow-[0_0_36px_#8A4E2866]"
            >
              Get started free
            </Link>
            <Link
              href="/products/zoe"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl border border-paper-100 text-ink hover:border-ink transition-all duration-200"
            >
              Learn about Zoe
            </Link>
          </div>
        </div>
      </section>

      {/* The contrast */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-24">
            <div className="p-6 rounded-2xl border border-paper-100 bg-paper-100">
              <p className="text-xs font-medium tracking-widest uppercase text-accent mb-3">Manual daily planning</p>
              <ul className="space-y-2.5 text-sm text-ink leading-relaxed">
                <li>— Open 4+ apps to see what's due</li>
                <li>— Manually decide what to work on first</li>
                <li>— Drag tasks onto your calendar one by one</li>
                <li>— Re-plan mid-day when priorities shift</li>
                <li>— Do it all again tomorrow</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-accent bg-paper-100">
              <p className="text-xs font-medium tracking-widest uppercase text-accent mb-3">Zoe daily planning</p>
              <ul className="space-y-2.5 text-sm text-ink leading-relaxed">
                <li>✓ Agents review your goals, calendar, and health overnight</li>
                <li>✓ Wake up to a prioritized, scheduled day</li>
                <li>✓ Agents adjust in real time as things shift</li>
                <li>✓ End-of-day review and tomorrow's plan — automatic</li>
                <li>✓ Gets smarter the longer you use it</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The ritual, automated */}
      <section className="py-8 px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">The ritual — automated</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight">
              The planning that used to take
              <br />
              <span className="text-ink">30 minutes. Now runs in the background.</span>
            </h2>
          </div>

          <div className="space-y-5">
            {morningSteps.map((step, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-6 rounded-2xl border border-paper-100 bg-paper-100">
                <div>
                  <span className="inline-block text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-paper-100 bg-paper-100 text-accent">
                    {step.time}
                  </span>
                </div>
                <div className="sm:col-span-3">
                  <h3 className="text-ink font-semibold mb-2">{step.title}</h3>
                  <p className="text-ink text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight mb-4">
              Let Zoe own your daily planning.
            </h2>
            <p className="text-ink mb-8">Start free. No credit card required.</p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-accent text-paper hover:bg-accent-dark transition-all duration-200 shadow-[0_0_24px_#8A4E2844] hover:shadow-[0_0_36px_#8A4E2866]"
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
