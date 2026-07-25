import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import AgentDifferentiator from '@/components/AgentDifferentiator'
import ExecutionCapabilities from '@/components/ExecutionCapabilities'
import StudioSection from '@/components/StudioSection'
import KordaSection from '@/components/KordaSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <AgentDifferentiator />
      <ExecutionCapabilities />
      <StudioSection />
      <KordaSection />
      <Footer />
    </main>
  )
}
