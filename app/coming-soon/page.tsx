import type { Metadata } from 'next'
import ComingSoonContent from './ComingSoonContent'

export const metadata: Metadata = {
  title: 'Coming Soon — Korda Labs',
  description: 'Zoe is almost ready. Join the waitlist to be among the first to use your dedicated AI partner that does the work.',
}

export default function ComingSoonPage() {
  return <ComingSoonContent />
}
