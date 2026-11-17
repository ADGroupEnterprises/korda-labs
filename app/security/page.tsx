import { APP_SIGNUP_URL } from '@/lib/links'
import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import UseCaseLinks from '@/components/UseCaseLinks'
import { Zoe } from '@/components/marks/Brand'

export const metadata: Metadata = {
  title: 'Security — Keel by Korda Labs',
  description: "How Keel is secured: default-deny policies, immutable audit logs, end-to-end encryption and abort control.",
}

const principles = [
  { tag: 'Permission', title: 'Off until you turn it on', body: 'Keel can read files, search the web, use a browser and run tasks on your computer. Each one stays off until you switch it on. By default Keel asks, and you approve.' },
  { tag: 'Boundaries', title: 'You set the boundaries', body: 'Choose the folders, websites and services Keel can touch. It stays inside them.' },
  { tag: 'Limits', title: 'Daily limits', body: 'Set how many actions of each kind Keel may take in a day. Near the limit, it stops and asks.' },
  { tag: 'Record', title: 'Everything is on the record', body: 'Every action is logged with the time, the result and what it cost, whether it ran or was blocked. The log cannot be edited, and it is kept for at least 30 days.' },
  { tag: 'Stop', title: 'Stop any time', body: 'One tap stops a running agent. Keel tells you what it finished first. Finished work is not undone automatically.' },
  { tag: 'Encryption', title: 'Your keys are locked up', body: 'The keys and sign-ins you connect are stored encrypted, never as plain text.' },
  { tag: 'Confidential', title: 'Private work stays home', body: 'Mark a task confidential and it runs only on a model on your own computer, through Bridge. It never goes to a cloud model.' },
  { tag: 'Models', title: 'Your models', body: 'Bring your own keys for OpenAI, Anthropic, Gemini or a model on your own machine. You pay the provider directly.' },
  { tag: 'Sign-in', title: 'Signed in safely on every device', body: 'On the web, on desktop and on your phone, your sign-in is kept in the secure storage that device provides.' },
  { tag: 'Web', title: 'Careful on the web', body: 'Web pages are cleaned before an agent reads them, so a page cannot slip in instructions or code.' },
  { tag: 'Files', title: 'Careful with files', body: 'Where a file will be saved is fixed when you approve the task. It cannot be changed afterwards.' },
  { tag: 'Non-negotiable', title: 'The rules live in the software', body: 'Keel never asks an AI model whether something is safe. The checks are built in, and a model cannot talk its way past them.' },
]

export default function SecurityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <Zoe pose="walk-left" eager className="hidden md:block absolute right-0 bottom-0 w-32 lg:w-40 h-auto" />
          <p className="text-accent eyebrow mb-4">Security & trust</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-6 max-w-3xl">
            Keel acts in the world.
            <br />
            <span className="text-ink">Only on your say.</span>
          </h1>
          <p className="text-ink text-xl leading-relaxed max-w-2xl mb-10">
            Keel can read files, search the web, use a browser and run tasks on your computer. Every one of those is off until you turn it on. This page explains how.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-8 px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
            {principles.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl glass">
                <p className="text-accent eyebrow mb-3">{p.tag}</p>
                <h3 className="text-ink font-medium mb-2">{p.title}</h3>
                <p className="text-ink text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          {/* Non-negotiables callout */}
          <div className="p-8 rounded-2xl glass mb-16">
            <p className="eyebrow text-accent mb-4">The non-negotiables</p>
            <ul className="space-y-3">
              {[
                'An AI model never decides what is safe. The software does.',
                'If something breaks, Keel stops. It never carries on unchecked.',
                'Each key is used for one job only.',
                'Your sign-in is never put in a web address.',
              ].map((rule, i) => (
                <li key={i} className="flex gap-3 text-sm text-ink">
                  <span className="text-accent flex-shrink-0">—</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <p className="text-ink text-sm mb-6">Questions about security?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={APP_SIGNUP_URL} className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-accent text-paper btn-pillow hover:bg-navy transition-all duration-300">
                Get Keel
              </Link>
              <a href="mailto:security@kordalabs.com" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full btn-glass text-ink hover:border-accent/40 transition-all duration-300">
                Contact security team
              </a>
            </div>
          </div>
        </div>
      </section>

      <UseCaseLinks />
      <Footer />
    </div>
  )
}
