import { KordaHero, BridgeSection, KordaSection } from '@/components/HomeSections'
import HomeProduct from '@/components/HomeProduct'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <KordaHero />
      <BridgeSection />
      <KordaSection />
      <HomeProduct />
      <Footer />
    </main>
  )
}
