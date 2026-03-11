import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog — Korda Labs',
  description: 'Thinking on AI, productivity, and the future of personal operating systems.',
}

const posts = [
  {
    slug: 'why-time-blocking-isnt-enough',
    title: 'Why time-blocking alone isn\'t enough anymore',
    excerpt: 'Time-blocking is a great methodology. But it still puts the work on you. Here\'s what happens when AI takes over the scheduling entirely.',
    date: 'Coming soon',
    tag: 'Productivity',
  },
  {
    slug: 'the-problem-with-managing-your-productivity-tools',
    title: 'The problem with managing your productivity tools',
    excerpt: 'You have Notion for notes, Todoist for tasks, Akiflow for planning, and a calendar that doesn\'t talk to any of them. That\'s the problem Zoe was built to solve.',
    date: 'Coming soon',
    tag: 'Tools',
  },
  {
    slug: 'how-ai-agents-are-replacing-the-daily-planning-ritual',
    title: 'How AI agents are replacing the daily planning ritual',
    excerpt: 'Sunsama and Akiflow turned daily planning into a structured ritual. Zoe automates it — so the discipline is built in, not something you have to summon.',
    date: 'Coming soon',
    tag: 'AI',
  },
  {
    slug: 'akiflow-motion-notion-why-professionals-still-feel-scattered',
    title: 'Akiflow, Motion, Notion — why professionals still feel scattered',
    excerpt: 'Three great tools. Still context-switching between five apps. Still spending 30 minutes planning every morning. Here\'s why, and what actually fixes it.',
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
