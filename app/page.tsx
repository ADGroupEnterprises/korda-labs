import Hero from '@/components/Hero'
import { StatsStrip, CrewSection, WorkSection, ControlSection, StudioCta } from '@/components/HomeSections'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <CrewSection />
      <WorkSection />
      <ControlSection />
      <StudioCta />
      <Footer />
    </main>
  )
}
