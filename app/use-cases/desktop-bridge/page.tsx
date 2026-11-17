import { APP_SIGNUP_URL } from '@/lib/links'
import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bridge — Keel by Korda Labs',
  description: 'Bridge runs quietly on your home machine. From your phone or anywhere — Keel accesses local files, runs scripts, and controls your machine.',
}

const features = [
  { title: 'Local file access', body: 'Read, write, and organize files on your home machine — even when you\'re away. Agents access exactly the directories you approve, nothing more.' },
  { title: 'Run things at home', body: 'Start a script, an export or an app on your computer from wherever you are.' },
  { title: 'iCloud & local storage', body: 'Save to iCloud Drive and folders on your computer. No extra sign-in needed.' },
  { title: 'End-to-end encrypted', body: 'All bridge communication is encrypted end-to-end. Only you hold the keys. Keel\'s servers never see your local file contents.' },
  { title: 'Always on', body: 'Bridge stays connected, so work reaches your computer and results come back right away.' },
  { title: 'Stays in its lane', body: 'Bridge only works inside the folders you approve. Nothing outside them.' },
]

export default function DesktopBridgePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <p className="text-accent eyebrow mb-4">Bridge</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-6 max-w-3xl">
            Your home machine,
            <br />
            <span className="text-ink">from anywhere.</span>
          </h1>
          <p className="text-ink text-xl leading-relaxed max-w-2xl mb-10">
            Bridge runs on your home computer. From your phone or the office, Keel reads local files, runs scripts, organizes folders and executes local automations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={APP_SIGNUP_URL} className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-accent text-paper btn-pillow hover:bg-navy transition-all duration-300">
              Get Keel
            </Link>
            <Link href="/security" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full btn-glass text-ink hover:border-accent/40 transition-all duration-300">
              How we keep it safe
            </Link>
          </div>
        </div>
      </section>

      {/* No competitor has this */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
            <div className="p-6 rounded-2xl glass">
              <p className="text-xs font-medium tracking-widest uppercase text-ink mb-3">Every other AI tool</p>
              <p className="text-ink text-sm leading-relaxed">
                Lives in the cloud. Can&apos;t touch your local files. Can&apos;t run your scripts. Can&apos;t access the apps
                installed on your machine. The moment you close the browser, it stops.
              </p>
            </div>
            <div className="p-6 rounded-2xl glass">
              <p className="eyebrow text-accent mb-3">Keel + Bridge</p>
              <p className="text-ink text-sm leading-relaxed">
                Your home machine is always available to your agents — local files, local scripts, local apps.
                Encrypted end-to-end. Sandboxed to the paths you approve. Controlled by your policy settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase text-ink mb-10">What the bridge enables</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
            {features.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl glass">
                <div className="w-1 h-5 rounded-full bg-accent mb-4" />
                <h3 className="text-ink font-medium mb-2">{f.title}</h3>
                <p className="text-ink text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>

          {/* Example workflow */}
          <div className="p-8 rounded-2xl glass mb-16">
            <p className="text-xs font-medium tracking-widest uppercase text-ink mb-6">Example workflow</p>
            <div className="space-y-3">
              {[
                { label: 'You\'re at the office', detail: 'Phone in hand. Home machine sitting at your desk.' },
                { label: 'Ask Keel: "Run my weekly export script"', detail: 'Typed or spoken, from your phone.' },
                { label: 'Bridge receives the task', detail: 'Sent to your computer right away.' },
                { label: 'It runs in the folder you approved', detail: 'The result is saved and logged.' },
                { label: 'Results delivered to your phone', detail: 'CSV exported, notification sent, task marked complete.' },
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-ink text-xs font-mono flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="text-ink text-sm font-medium">{step.label}</p>
                    <p className="text-ink text-xs">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-4">
              Your machine.
              <br />
              <span className="text-ink">Your crew.</span>
            </h2>
            <p className="text-ink mb-8">Free on web.</p>
            <Link href={APP_SIGNUP_URL} className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-accent text-paper btn-pillow hover:bg-navy transition-all duration-300">
              Get Keel
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
