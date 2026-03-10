import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Korda Labs',
  description: 'Zoe is your personal AI operating system — connecting your goals, tools, calendar, health, and life into one intelligent layer that works for you.',
  openGraph: {
    title: 'Korda Labs',
    description: 'Not a chatbot. A personal OS that puts AI to work for your life.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-dark text-white antialiased">
        <Nav />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  )
}
