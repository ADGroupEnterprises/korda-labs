import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import { Zoe } from '@/components/marks/Brand'
import { APP_SIGNUP_URL } from '@/lib/links'

export const metadata: Metadata = {
  title: 'What we believe — Korda Labs',
  description: 'Start with what you want. Privacy as a freedom, no lock-in, and AI used on purpose so you can act in the real world.',
}

const beliefs = [
  {
    n: '01',
    title: 'Your goals come first.',
    body: (
      <>
        Keel starts with a goal you set. Everything it plans, drafts and schedules has to{' '}
        <span className="hl">answer to that goal</span>. If a task doesn&apos;t move you closer, it doesn&apos;t
        belong on your day.
      </>
    ),
  },
  {
    n: '02',
    title: 'Privacy is a freedom.',
    body: (
      <>
        What you are working toward is <span className="hl">nobody else&apos;s business</span>. Your data is never
        used for training and never sold. You decide what each integration can see, and sensitive work can stay on
        models running on your own machine.
      </>
    ),
  },
  {
    n: '03',
    title: 'No lock-in.',
    body: (
      <>
        Bring your own keys. Pick the model for each agent. Swap it when something better ships. Finished work lands
        in your own storage. We would rather <span className="hl-warm">earn next month</span> than trap it.
      </>
    ),
  },
  {
    n: '04',
    title: 'AI that works for one person.',
    body: (
      <>
        An assistant should take orders from you and nobody else. Nothing in Keel runs until you switch it on. Every
        action is logged. <span className="hl">One tap stops any agent.</span>
      </>
    ),
  },
  {
    n: '05',
    title: 'Use it on purpose.',
    body: (
      <>
        AI is not a place to spend the day. Hand over the research, the drafts, the scheduling and the follow-ups.
        Review what comes back. <span className="hl-warm">Then close the laptop.</span>
      </>
    ),
  },
  {
    n: '06',
    title: 'The point is the real world.',
    body: (
      <>
        The measure is not how much you asked an AI. It is what changed off the screen: the proposal sent, the trip
        booked, <span className="hl">the run you didn&apos;t skip</span>.
      </>
    ),
  },
]

export default function BelievePage() {
  return (
    <main>
      <article className="px-6">
        {/* Title */}
        <header className="max-w-3xl mx-auto pt-24 sm:pt-36 pb-20 sm:pb-28 text-center">
          <p className="eyebrow text-accent mb-8">What we believe</p>
          <h1 className="font-display font-bold text-ink text-[3.25rem] leading-[0.98] sm:text-8xl">
            Start with
            <br />
            what you want.
          </h1>
        </header>

        {/* Opening */}
        <div className="max-w-xl mx-auto space-y-16 sm:space-y-20 text-xl sm:text-2xl leading-relaxed text-ink">
          <p>
            Most software starts with what it wants from you. Your time. Your attention. Your data.{' '}
            <span className="line-through decoration-2 decoration-copper/70 text-ink-soft">Your engagement.</span>
          </p>
          <p>
            AI made that easier to hide. A helpful voice on top, and the{' '}
            <span className="hl-warm">same old incentives</span> underneath.
          </p>
          <p className="font-display font-bold text-3xl sm:text-4xl leading-tight">
            We think it should run the other way.
          </p>
        </div>

        {/* Beliefs */}
        <div className="max-w-xl mx-auto mt-24 sm:mt-32 space-y-20 sm:space-y-24">
          {beliefs.map((b) => (
            <section key={b.n}>
              <p className="font-mono text-sm text-accent mb-4">{b.n}</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight text-ink mb-5">{b.title}</h2>
              <p className="text-xl sm:text-2xl leading-relaxed text-ink">{b.body}</p>
            </section>
          ))}
        </div>

        {/* Close */}
        <div className="max-w-3xl mx-auto text-center pt-32 sm:pt-44 pb-28">
          <div className="flex justify-center mb-10">
            <Zoe pose="salute-right" className="w-32 sm:w-40 h-auto" />
          </div>
          <p className="font-display font-bold text-ink text-4xl sm:text-6xl leading-[1.02] mb-10">
            AI that takes orders.
            <br />
            <span className="text-accent">So you can get on with it.</span>
          </p>
          <a
            href={APP_SIGNUP_URL}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-accent text-paper btn-pillow transition-all duration-300"
          >
            Get Keel
          </a>
        </div>
      </article>
      <Footer />
    </main>
  )
}
