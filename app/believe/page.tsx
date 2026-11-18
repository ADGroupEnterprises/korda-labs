import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import { Zoe } from '@/components/marks/Brand'

export const metadata: Metadata = {
  title: 'What we believe — Korda Labs',
  description: 'Korda Labs bridges the new world of AI to the life you already live. Products that are personal, private, and in service of your goals.',
}

const beliefs = [
  {
    n: '01',
    title: 'Your goals come first.',
    body: (
      <>
        Everything we build starts with a goal you set. What it plans, drafts and schedules has to{' '}
        <span className="hl">answer to that goal</span>. If something doesn&apos;t move you closer, it doesn&apos;t
        belong on your day.
      </>
    ),
  },
  {
    n: '02',
    title: 'Meet people where they live.',
    body: (
      <>
        You should not have to rebuild your life around a new tool. Our products connect to the calendar, the files
        and the apps you already use, and <span className="hl-warm">do their work there</span>.
      </>
    ),
  },
  {
    n: '03',
    title: 'Personal means one person.',
    body: (
      <>
        A product of ours takes orders from you and nobody else. Nothing runs until you switch it on. Every action
        is logged. <span className="hl">One tap stops it.</span>
      </>
    ),
  },
  {
    n: '04',
    title: 'Privacy is a freedom.',
    body: (
      <>
        What you are working toward is <span className="hl">nobody else&apos;s business</span>. Your data is never
        used for training and never sold. You decide what each connection can see, and sensitive work can stay on
        your own machine.
      </>
    ),
  },
  {
    n: '05',
    title: 'No lock-in.',
    body: (
      <>
        Bring your own models. Swap them when something better ships. Finished work lands in your own storage. We
        would rather <span className="hl-warm">earn next month</span> than trap it.
      </>
    ),
  },
  {
    n: '06',
    title: 'Use it on purpose.',
    body: (
      <>
        AI is not a place to spend the day. Hand over the research, the drafts, the scheduling and the follow-ups.
        Review what comes back. <span className="hl-warm">Then close the laptop.</span>
      </>
    ),
  },
  {
    n: '07',
    title: 'The point is your life.',
    body: (
      <>
        The measure is not how much you asked an AI. It is what changed off the screen: the proposal sent, the goal
        you kept, <span className="hl">the run you didn&apos;t skip</span>.
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
            AI is arriving as a new world. New tools, new words, something else to learn{' '}
            <span className="hl-warm">every week</span>.
          </p>
          <p>
            Your life is already here. A calendar. An inbox. People who need you. Goals you have carried for years.
          </p>
          <p>
            Most software asks you to move. Give it your time. Your attention. Your data.{' '}
            <span className="line-through decoration-2 decoration-copper/70 text-ink-soft">Your engagement.</span>
          </p>
          <p className="font-display font-bold text-3xl sm:text-4xl leading-tight">
            Korda Labs builds the bridge. AI that comes to where you already live.
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
          <p className="text-lg text-ink-soft mb-8">Keel is the first product we built on these.</p>
          <a
            href="/products/keel"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-accent text-paper btn-pillow transition-all duration-300"
          >
            Meet Keel
          </a>
        </div>
      </article>
      <Footer />
    </main>
  )
}
