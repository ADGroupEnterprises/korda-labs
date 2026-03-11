import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import AgentDifferentiator from '@/components/AgentDifferentiator'
import ExecutionCapabilities from '@/components/ExecutionCapabilities'
import OrbSection from '@/components/OrbSection'
import KordaSection from '@/components/KordaSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <AgentDifferentiator />
      <ExecutionCapabilities />
      <OrbSection />
      <KordaSection />
      <Footer />
    </main>
  )
}
