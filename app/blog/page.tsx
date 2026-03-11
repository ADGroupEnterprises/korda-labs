import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog — Korda Labs',
  description: 'Thinking on AI, productivity, and the future of personal operating systems.',
}

const posts = [
  {
    slug: 'what-autonomous-agents-actually-do',
    title: 'What autonomous agents actually do — and what they don\'t',
    excerpt: 'AI agents can browse the web, read your files, run scripts on your machine, and execute multi-turn workflows with hundreds of tool calls. Here\'s exactly what that looks like in practice.',
    date: 'Coming soon',
    tag: 'Execution',
  },
  {
    slug: 'why-time-blocking-isnt-enough',
    title: 'Why scheduling your work isn\'t the same as doing your work',
    excerpt: 'Motion blocks time. Akiflow consolidates tasks. But at the end of the day, you still have to do the research, write the brief, and handle the follow-ups. That\'s what Zoe changes.',
    date: 'Coming soon',
    tag: 'Productivity',
  },
  {
    slug: 'proactive-ai-what-7am-briefings-actually-look-like',
    title: 'Proactive AI: what 7am automated briefings actually look like',
    excerpt: 'Zoe\'s proactive engine runs 7 types of automated triggers — morning briefings, stale task alerts, goal momentum checks, and more. No app, no prompt. Here\'s how each one works.',
    date: 'Coming soon',
    tag: 'AI',
  },
  {
    slug: 'default-deny-why-agent-security-matters',
    title: 'Default-deny: why every AI agent needs a permission model',
    excerpt: 'Giving an AI access to your files and calendar is powerful. Doing it without resource pattern policies, daily limits, and an immutable audit log is reckless. Here\'s how Zoe handles it.',
    date: 'Coming soon',
    tag: 'Security',
  },
  {
    slug: 'akiflow-motion-notion-why-professionals-still-feel-scattered',
    title: 'Akiflow, Motion, Notion — why organizing work isn\'t the same as finishing it',
    excerpt: 'Three tools, each excellent at what they do. None of them execute anything. The gap between a good plan and actual output is where Zoe lives.',
    date: 'Coming soon',
    tag: 'Comparison',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto">
          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif tracking-tight mb-6">
            Thinking on AI, productivity,
            <br />
            <span className="text-ink/50">and the tools that should work for you.</span>
          </h1>
        </div>
      </section>

      {/* Posts */}
      <section className="py-8 px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {posts.map((post, i) => (
              <div
                key={i}
                className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-6 rounded-2xl border border-ink/8 bg-ink/[0.02]"
              >
                <div className="sm:col-span-1">
                  <span className="inline-block text-xs font-medium tracking-widest uppercase px-2.5 py-1 rounded-full border border-ink/10 bg-ink/[0.04] text-ink/35 mb-2">
                    {post.tag}
                  </span>
                  <p className="text-ink/25 text-xs mt-1">{post.date}</p>
                </div>
                <div className="sm:col-span-3">
                  <h2 className="text-ink font-semibold text-lg mb-2">{post.title}</h2>
                  <p className="text-ink/45 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl border border-accent/15 bg-accent/[0.03] text-center">
            <p className="text-ink/50 text-sm mb-4">Posts are in production. Join early access to get notified when we publish.</p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-medium bg-accent text-white hover:bg-accent-light transition-all duration-200 shadow-[0_0_16px_#C4973A44]"
            >
              Join early access
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
