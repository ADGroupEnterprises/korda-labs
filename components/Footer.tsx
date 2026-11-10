import Link from 'next/link'
import { KordaLockup, KeelMark, ZoeBadge } from '@/components/marks/Brand'

const columns = [
  {
    title: 'Keel',
    links: [
      { label: 'Overview', href: '/products/keel' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Security', href: '/security' },
      { label: 'Compare', href: '/compare' },
    ],
  },
  {
    title: 'How it works',
    links: [
      { label: 'Autonomous agents', href: '/use-cases/autonomous-agents' },
      { label: 'Proactive AI', href: '/use-cases/proactive-ai' },
      { label: 'Desktop Bridge', href: '/use-cases/desktop-bridge' },
      { label: 'Daily planning', href: '/use-cases/daily-planning' },
      { label: 'For founders', href: '/use-cases/founders' },
      { label: 'For freelancers', href: '/use-cases/freelancers' },
    ],
  },
  {
    title: 'Korda Labs',
    links: [
      { label: 'Products', href: '/products' },
      { label: 'Blog', href: '/blog' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-mist bg-paper pt-16 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2">
            <KordaLockup className="h-14 w-auto mb-5 -ml-1" />
            <p className="text-ink-soft text-sm leading-relaxed max-w-[260px]">
              An AI product studio. We build tools that keep you in command.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="eyebrow text-ink-soft mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-ink hover:text-accent transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-8 border-t border-mist">
          {/* Trust-moment signature: "Keel by Korda Labs" */}
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <KeelMark size={18} />
              <span className="text-ink text-xs font-medium">Keel by Korda Labs.</span>
            </span>
            <span className="hidden sm:flex items-center gap-2 text-ink-soft text-xs">
              <ZoeBadge size={18} />
              Skippered by Zoe.
            </span>
          </div>

          <p className="text-ink-soft text-xs">
            &copy; {new Date().getFullYear()} Korda Labs. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/korda-labs/about/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="text-ink-soft hover:text-accent transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://x.com/KordaLabs" target="_blank" rel="noopener noreferrer" aria-label="X"
              className="text-ink-soft hover:text-accent transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
