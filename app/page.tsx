import { KordaHero, BridgeSection, GapSection, KordaSection } from '@/components/HomeSections'
import HomeProduct from '@/components/HomeProduct'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <KordaHero />
      <BridgeSection />
      <GapSection />
      <KordaSection />
      <HomeProduct />
      <Footer />
    </main>
  )
}
