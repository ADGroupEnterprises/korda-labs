import type { Metadata } from 'next'
import { Bricolage_Grotesque, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

// Display: Bricolage Grotesque — chunky and a little playful, to sit with the Keel wordmark and Zoe.
const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

// JetBrains Mono — eyebrows, labels, code, log lines.
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Korda Labs — Bridging AI to the life you already live',
  description: 'Korda Labs builds personal AI products that bridge the new world of AI to the life you already live. Our first is Keel.',
  metadataBase: new URL('https://kordalabs.com'),
  applicationName: 'Korda Labs',
  openGraph: {
    title: 'Korda Labs',
    description: 'Korda Labs builds personal AI products that bridge the new world of AI to the life you already live. Our first is Keel.',
    type: 'website',
    url: 'https://kordalabs.com',
    siteName: 'Korda Labs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Keel by Korda Labs — Zoe the otter, skipper of your AI crew',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Korda Labs',
    description: 'Korda Labs builds personal AI products that bridge the new world of AI to the life you already live. Our first is Keel.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${dmSans.variable} ${jetbrainsMono.variable} text-ink antialiased`}>
        <Nav />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  )
}
