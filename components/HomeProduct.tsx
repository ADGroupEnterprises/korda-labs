'use client'

/* Home: the first product. One card, one still of the Keel phone, two ways on. The full
   showcase lives on the Keel page. */

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { APP_SIGNUP_URL } from '@/lib/links'
import { KeelLockup, Zoe } from '@/components/marks/Brand'

const AppPhone = dynamic(() => import('@/components/showcase/Phones').then((m) => m.AppPhone), { ssr: false })

export default function HomeProduct() {
  return (
    <section className="relative px-6 pb-28 pt-36">
      <div className="relative max-w-6xl mx-auto">
        <Zoe pose="peek" decorative className="absolute left-10 sm:left-16 -top-[7.4rem] w-56 h-auto z-0" />
        <div className="relative z-10 rounded-[2rem] bg-gradient-to-br from-accent to-navy text-paper overflow-hidden grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_20rem] gap-6">
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <p className="eyebrow text-sky mb-5">Our first product</p>
            <KeelLockup className="h-9 w-auto brightness-0 invert mb-6 self-start" />
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-[1.05] mb-4">Your life, in working order.</h2>
            <p className="text-paper/80 text-lg leading-relaxed max-w-lg mb-8">
              Keel starts with your goals, connects your calendar and tools, plans your days and does the work in between. Privately, and on your say.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/products/keel" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-paper text-ink hover:bg-sky transition-all duration-300">
                Meet Keel
              </Link>
              <Link href={APP_SIGNUP_URL} className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border border-paper/40 text-paper hover:bg-paper/10 transition-all duration-300">
                Get Keel
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block min-h-[24rem]" aria-hidden="true">
            <div className="absolute left-1/2 -translate-x-1/2 top-10">
              <AppPhone frozen />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
