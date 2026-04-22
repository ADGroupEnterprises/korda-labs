import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Desktop Bridge — Zoe by Korda Labs',
  description: 'The Desktop Bridge runs quietly on your home machine. From your phone or anywhere — Zoe accesses local files, runs scripts, and controls your machine.',
}

const features = [
  { title: 'Local file access', body: 'Read, write, and organize files on your home machine — even when you\'re away. Agents access exactly the directories you approve, nothing more.' },
  { title: 'Script & subprocess execution', body: 'Run local scripts, automations, and processes via agents. Whether it\'s a data pipeline, a build script, or a local app — Zoe can trigger it remotely.' },
  { title: 'iCloud & local storage', body: 'Access your iCloud Drive and local folders as first-class storage destinations. No OAuth required — the bridge handles it securely from your machine.' },
  { title: 'End-to-end encrypted', body: 'All bridge communication is encrypted end-to-end. Only you hold the keys. Zoe\'s servers never see your local file contents.' },
  { title: 'SSE-based, always-on', body: 'The bridge maintains a persistent connection via Server-Sent Events. Agents dispatch work to your machine and receive results in real time.' },
  { title: 'Workspace-sandboxed', body: 'All file and script operations are sandboxed to your configured workspace path. Agents cannot access paths outside what you\'ve explicitly approved.' },
]

export default function DesktopBridgePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <p className="text-accent text-[0.9rem] font-bold tracking-widest uppercase mb-4">Desktop Bridge</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight mb-6 max-w-3xl">
            Your home machine,
            <br />
            <span className="text-ink">fully under Zoe&apos;s control.</span>
          </h1>
          <p className="text-ink text-xl leading-relaxed max-w-2xl mb-10">
            The Desktop Bridge runs quietly on your home computer. From your phone, your office, or anywhere —
            Zoe can read your local files, run scripts, organize folders, and execute local automations
            as if you were sitting right there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-accent text-paper hover:bg-accent-dark transition-all duration-200 shadow-[0_0_24px_#8A4E2844] hover:shadow-[0_0_36px_#8A4E2866]">
              Get started free
            </Link>
            <Link href="/security" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl border border-paper-100 text-ink hover:border-ink transition-all duration-200">
              How we keep it safe
            </Link>
          </div>
        </div>
      </section>

      {/* No competitor has this */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
            <div className="p-6 rounded-2xl border border-paper-100 bg-paper-100">
              <p className="text-[0.9rem] font-bold tracking-widest uppercase text-accent mb-3">Every other AI tool</p>
              <p className="text-ink text-sm leading-relaxed">
                Lives in the cloud. Can&apos;t touch your local files. Can&apos;t run your scripts. Can&apos;t access the apps
                installed on your machine. The moment you close the browser, it stops.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-accent bg-paper-100">
              <p className="text-[0.9rem] font-bold tracking-widest uppercase text-accent mb-3">Zoe + Desktop Bridge</p>
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
          <p className="text-[0.9rem] font-bold tracking-widest uppercase text-accent mb-10">What the bridge enables</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
            {features.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border border-paper-100 bg-paper-100">
                <div className="w-1 h-5 rounded-full bg-accent mb-4" />
                <h3 className="text-ink font-semibold mb-2">{f.title}</h3>
                <p className="text-ink text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>

          {/* Example workflow */}
          <div className="p-8 rounded-2xl border border-paper-100 bg-paper-100 mb-16">
            <p className="text-[0.9rem] font-bold tracking-widest uppercase text-accent mb-6">Example workflow</p>
            <div className="space-y-3">
              {[
                { label: 'You\'re at the office', detail: 'Phone in hand. Home machine sitting at your desk.' },
                { label: 'Ask Zoe: "Run my weekly export script"', detail: 'Natural language request via the Orb on your phone.' },
                { label: 'Bridge receives the task', detail: 'Dispatched via SSE to your home machine in real time.' },
                { label: 'Script runs in your workspace sandbox', detail: 'Output captured, logged to audit trail.' },
                { label: 'Results delivered to your phone', detail: 'CSV exported, notification sent, task marked complete.' },
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-ink text-xs font-sans flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="text-ink text-sm font-medium">{step.label}</p>
                    <p className="text-ink text-xs">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight mb-4">
              Your machine. Your agents.
              <br />
              <span className="text-ink">From anywhere.</span>
            </h2>
            <p className="text-ink mb-8">Free to start. No credit card.</p>
            <Link href="#" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-accent text-paper hover:bg-accent-dark transition-all duration-200 shadow-[0_0_24px_#8A4E2844] hover:shadow-[0_0_36px_#8A4E2866]">
              Get started with Zoe
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
