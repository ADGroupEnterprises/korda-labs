import type { Metadata } from 'next'
import { Lora, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

// TYPE: JetBrains Mono — code, log lines, terminal output, version strings only.
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Korda Labs',
  description: 'Korda Labs is an AI product studio. Its first product, Zoe, is a dedicated AI partner that does the work — connecting your goals, calendar, and tools into one intelligent layer.',
  metadataBase: new URL('https://kordalabs.com'), // Replace with your actual domain
  openGraph: {
    title: 'Korda Labs',
    description: 'Not a chatbot. A dedicated AI partner that does the work.',
    type: 'website',
    url: 'https://kordalabs.com', // Replace with your actual domain
    siteName: 'Korda Labs',
    images: [
      {
        url: '/og-image.jpg', // You'll need to create this image
        width: 1200,
        height: 630,
        alt: 'Korda Labs — AI product studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Korda Labs',
    description: 'Not a chatbot. A dedicated AI partner that does the work.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${dmSans.variable} ${jetbrainsMono.variable} bg-paper text-ink antialiased`}>
        <Nav />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  )
}
