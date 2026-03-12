import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Korda Labs',
  description: 'Zoe is your personal AI operating system — connecting your goals, tools, calendar, health, and life into one intelligent layer that works for you.',
  metadataBase: new URL('https://kordalabs.com'), // Replace with your actual domain
  openGraph: {
    title: 'Korda Labs',
    description: 'Not a chatbot. A personal OS that puts AI to work for your life.',
    type: 'website',
    url: 'https://kordalabs.com', // Replace with your actual domain
    siteName: 'Korda Labs',
    images: [
      {
        url: '/og-image.jpg', // You'll need to create this image
        width: 1200,
        height: 630,
        alt: 'Korda Labs - Your Personal AI Operating System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Korda Labs',
    description: 'Not a chatbot. A personal OS that puts AI to work for your life.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} bg-paper text-ink antialiased`}>
        <Nav />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  )
}
