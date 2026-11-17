import Link from 'next/link'

/* Three pages that are not in the Explore menu. Every Keel page carries this strip so they stay
   one click away. */
const links = [
  { label: 'Daily planning', line: 'A briefing at 7. A review at day’s end.', href: '/use-cases/daily-planning' },
  { label: 'For founders', line: 'Run the company. Keel runs the day.', href: '/use-cases/founders' },
  { label: 'For freelancers', line: 'Clients, deadlines, calendar. One app.', href: '/use-cases/freelancers' },
]

export default function UseCaseLinks() {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow text-ink-soft mb-4 text-center">Keel for your day</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="group glass rounded-2xl p-5 transition-colors">
              <span className="flex items-center justify-between font-display font-bold text-lg text-ink group-hover:text-accent transition-colors">
                {l.label}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="text-accent transition-transform group-hover:translate-x-0.5"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <span className="block text-sm text-ink-soft mt-1">{l.line}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
