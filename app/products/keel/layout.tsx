import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Keel — Your life, in working order',
  description: 'Keel starts with you: your goals, your calendar, your tools. It connects them, plans your days, and does the work in between. Privately, and on your say. Keel by Korda Labs.',
  openGraph: {
    title: 'Keel by Korda Labs',
    description: 'Your life, in working order. Keel connects your goals, calendar and tools, plans your days and does the work in between.',
  },
}

export default function KeelLayout({ children }: { children: React.ReactNode }) {
  return children
}
