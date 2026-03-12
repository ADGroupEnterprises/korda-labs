import type { Metadata } from 'next'
import ComingSoonContent from './ComingSoonContent'

export const metadata: Metadata = {
  title: 'Coming Soon — Korda Labs',
  description: 'Zoe is almost ready. Join the waitlist to be among the first to experience your personal AI operating system.',
}

export default function ComingSoonPage() {
  return <ComingSoonContent />
}
