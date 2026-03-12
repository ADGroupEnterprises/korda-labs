import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Security — Zoe by Korda Labs',
  description: "Zoe acts in the world. Here's how we make that safe — default-deny policies, immutable audit logs, end-to-end encryption, and full abort control.",
}

const principles = [
  {
    title: 'Default-deny execution',
    body: "Every autonomous capability is off until you explicitly enable it. File access, web search, browser automation, script execution — none of it runs without your policy allowing it. The default state is: Zoe asks, you approve.",
    tag: 'Policy model',
  },
  {
    title: 'Resource pattern policies',
    body: "You don't just turn capabilities on — you specify exactly what they can touch. Define which folders, domains, and services agents can access. Agents are bounded to the paths and services you define.",
    tag: 'Scope control',
  },
  {
    title: 'Daily action limits',
    body: "Set a maximum number of file writes, web searches, browser actions, or tool calls per day — per action type. Zoe checks the counter before every tool call and stops at 95% of your limit to prompt before exceeding it.",
    tag: 'Rate limits',
  },
  {
    title: 'Immutable audit log',
    body: 'Every tool call — allowed or blocked — is written to an immutable audit log with timestamp, result, and cost estimate. Security events (delivery blocked, symlink rejected, tool budget exceeded) are logged separately. 30-day minimum retention.',
    tag: 'Audit trail',
  },
  {
    title: 'Abort at any time',
    body: 'Running agent doing something unexpected? One tap stops it mid-execution. Zoe polls for abort requests before every model call. When stopped, it tells you exactly what actions completed before the abort — and notes that completed work is not automatically reversed.',
    tag: 'Abort control',
  },
  {
    title: 'End-to-end encryption',
    body: 'All API keys, OAuth tokens, and webhook secrets are encrypted using industry-standard encryption. Keys are never stored in plaintext. Your credentials stay secure.',
    tag: 'Encryption',
  },
  {
    title: 'Confidential task routing',
    body: 'Tasks marked as confidential or private are never routed to cloud models — they run exclusively on local models via your Desktop Bridge. Storage access is limited. Agent names and domains are excluded from logs.',
    tag: 'Data sensitivity',
  },
  {
    title: 'BYO API keys',
    body: 'You connect your own API keys for OpenAI, Anthropic, Gemini, or local models via Ollama. We never hold your model credentials. Your usage, your billing, your control.',
    tag: 'Model ownership',
  },
  {
    title: 'Three-surface auth',
    body: 'Web app uses secure session cookies. Desktop app stores credentials in your system Keychain. Phone app uses secure device storage. All authentication tokens are stored securely and never exposed.',
    tag: 'Authentication',
  },
  {
    title: 'Network security',
    body: "Webhook URLs are validated to prevent security attacks. Web content is sanitized before agents see it — agents never receive raw web data that could contain malicious code.",
    tag: 'Network security',
  },
  {
    title: 'File safety',
    body: "Files are read and written with security protections to prevent attacks. Delivery destinations are validated at task approval time so they can't be changed between approval and delivery.",
    tag: 'File safety',
  },
  {
    title: 'No security delegated to LLMs',
    body: 'Security enforcement lives in code, not in prompts. We never rely on an AI model to decide whether an action is safe. All policy checks, rate limits, and security boundaries are enforced at the infrastructure layer.',
    tag: 'Non-negotiable',
  },
]

export default function SecurityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">Security & trust</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-tight mb-6 max-w-3xl">
            Zoe acts in the world.
            <br />
            <span className="text-ink/50">Here&apos;s how we make that safe.</span>
          </h1>
          <p className="text-ink/50 text-xl leading-relaxed max-w-2xl mb-10">
            When an AI can read your files, search the web, automate your browser, and run scripts on your machine,
            the safety model matters. Here&apos;s exactly how Zoe&apos;s security infrastructure works — and why it starts
            from a position of default-deny, not default-trust.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-8 px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
            {principles.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl border border-ink/8 bg-ink/[0.02]">
                <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">{p.tag}</p>
                <h3 className="text-ink font-semibold mb-2">{p.title}</h3>
                <p className="text-ink/45 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          {/* Non-negotiables callout */}
          <div className="p-8 rounded-2xl border border-accent/15 bg-accent/[0.02] mb-16">
            <p className="text-xs font-medium tracking-widest uppercase text-accent/60 mb-4">The non-negotiables</p>
            <ul className="space-y-3">
              {[
                'No security decision is ever delegated to an AI model — enforcement lives in code, not prompts',
                'When the database is unavailable, Zoe returns an error — it never fails open',
                'Encryption keys are used only for their intended purpose and never cross purposes',
                'Session tokens are never passed in URLs',
                'All security comparisons use constant-time equality to prevent timing attacks',
              ].map((rule, i) => (
                <li key={i} className="flex gap-3 text-sm text-ink/60">
                  <span className="text-accent/60 flex-shrink-0">—</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <p className="text-ink/35 text-sm mb-6">Questions about our security model?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-accent text-white hover:bg-accent-light transition-all duration-200 shadow-[0_0_24px_#0D948844] hover:shadow-[0_0_36px_#0D948866]">
                Get started free
              </Link>
              <a href="mailto:security@kordalabs.com" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl border border-ink/15 text-ink hover:border-ink/25 hover:bg-ink/5 transition-all duration-200">
                Contact security team
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
