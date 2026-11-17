'use client'
import { APP_SIGNUP_URL } from '@/lib/links'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { KeelLockup } from '@/components/marks/Brand'

const HeroShowcase = dynamic(() => import('@/components/HeroShowcase'), { ssr: false })

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6">
      <div className="absolute inset-0 bg-chart [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" aria-hidden="true" />
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-14 pb-24 lg:pt-20 lg:pb-44">
        {/* Copy */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div style={{ animationDelay: '0.1s' }} className="rise mb-7">
            <p className="eyebrow text-ink-soft mb-3">Introducing</p>
            <KeelLockup className="h-10 w-auto mx-auto" />
          </div>

          <h1 style={{ animationDelay: '0.2s' }} className="rise text-[2.75rem] sm:text-6xl xl:text-7xl font-display font-bold leading-[1.02] mb-6 text-ink">
            One app for tasks &amp; calendars,{' '}
            <span className="text-accent">powered by AI that does them.</span>
          </h1>

          <p style={{ animationDelay: '0.35s' }} className="rise text-lg sm:text-xl text-ink-soft max-w-xl mb-9 leading-relaxed">
            Plan your day in Keel. Its agents research, draft, schedule and follow up. You approve.
          </p>

          <div style={{ animationDelay: '0.5s' }} className="rise flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href={APP_SIGNUP_URL}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-accent text-paper btn-pillow transition-all duration-300"
            >
              Get Keel
            </Link>
            <Link
              href="/products/keel"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full btn-glass text-ink hover:border-accent/40 hover:text-accent transition-all duration-300"
            >
              How it works
            </Link>
          </div>

          <p style={{ animationDelay: '0.75s' }} className="rise eyebrow text-ink-soft mt-6">
            Free on web <span className="text-accent">·</span> Every action logged
          </p>
        </div>

        {/* Showcase: chat + canvas window, and Keel over text */}
        <div style={{ animationDelay: '0.5s' }} className="rise mt-14 lg:mt-20 min-h-[30rem]">
          <HeroShowcase />
        </div>
      </div>
    </section>
  )
}
