import type { Metadata } from 'next'
import ComingSoonContent from './ComingSoonContent'

export const metadata: Metadata = {
  title: 'Coming Soon — Korda Labs',
  description: 'Keel is close. Leave your email to hear when it opens.',
}

export default function ComingSoonPage() {
  return <ComingSoonContent />
}
