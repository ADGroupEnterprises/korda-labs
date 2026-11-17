'use client'

/* Hero showcase: Keel on the web (a gallery of screens), the Keel mobile app, and Keel in Messages.
   Everything pauses when the showcase is off screen or the tab is hidden. */

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useReducedMotion } from 'framer-motion'
import { KeelWindow } from '@/components/showcase/KeelUI'
import { AppPhone, SmsPhone, PINS, PinTile } from '@/components/showcase/Phones'

export const PIN_MOTION = true

const TILE_W = 112
const GAP = 8
const LOOP_W = PINS.length * (TILE_W + GAP)

/** The phone's pinned row: one endless line of surfaces drifting past. */
function PinCarousel({ height = 104 }: { height?: number }) {
  return (
    <div className="relative overflow-hidden rounded-[1.15rem] -mx-3.5 px-3.5" style={{ height, ['--pin-loop' as string]: `${LOOP_W}px` }}>
      <div className="absolute top-0 pin-track flex" style={{ left: -LOOP_W, gap: GAP, height }}>
        {[0, 1].flatMap((r) => PINS.map((p) => (
          <div key={r + p.id} style={{ width: TILE_W }} className="flex-shrink-0 h-full"><PinTile pin={p} className="h-full" /></div>
        )))}
      </div>
    </div>
  )
}

export default function HeroShowcase() {
  const reduce = useReducedMotion()
  const frozen = !!reduce
  const root = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    let onScreen = true
    const sync = () => setPaused(!onScreen || document.hidden)
    const io = new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; sync() }, { rootMargin: '120px' })
    if (root.current) io.observe(root.current)
    document.addEventListener('visibilitychange', sync)
    return () => { io.disconnect(); document.removeEventListener('visibilitychange', sync) }
  }, [])

  const pinRow = PIN_MOTION && !frozen ? <PinCarousel /> : undefined

  return (
    <div ref={root} className={`relative mx-auto max-w-[82rem] ${paused ? 'showcase-paused' : ''}`} aria-label="Keel on the web, the Keel mobile app, and Keel in Messages">
      {/* Colour behind the devices, so the glass rims have something to sit on. One painted layer, no blur. */}
      <div className="pointer-events-none absolute -inset-x-16 -inset-y-16 -z-10" aria-hidden="true"
        style={{ maskImage: 'radial-gradient(60% 60% at 50% 50%, #000 55%, transparent 100%)', WebkitMaskImage: 'radial-gradient(60% 60% at 50% 50%, #000 55%, transparent 100%)', backgroundImage: 'radial-gradient(38% 46% at 16% 26%, rgba(167,215,255,0.60), transparent 70%), radial-gradient(34% 40% at 52% 96%, rgba(242,184,174,0.45), transparent 70%), radial-gradient(30% 52% at 90% 30%, rgba(61,100,174,0.30), transparent 70%), radial-gradient(22% 30% at 74% 92%, rgba(224,169,109,0.28), transparent 70%)' }} />

      {/* Web */}
      <div className="xl:mr-[21rem]">
        <KeelWindow frozen={frozen} paused={paused} framed />
      </div>

      {/* Phones */}
      <div className="mt-10 flex items-end justify-center gap-3 [zoom:0.78] sm:[zoom:1] xl:mt-0 xl:absolute xl:right-0 xl:-bottom-8">
        <AppPhone pinRow={pinRow} frozen={frozen} paused={paused} className="relative z-10" />
        <div className="flex flex-col items-center xl:mb-12">
          <SmsPhone frozen={frozen} paused={paused} />
          <Link href="/roadmap" className="mt-3 inline-flex items-center gap-1.5 font-mono font-semibold text-[0.6rem] uppercase tracking-[0.14em] px-3 py-1.5 rounded-full glass text-ink-soft hover:text-accent transition-colors whitespace-nowrap">
            Text Keel · on the roadmap
          </Link>
        </div>
      </div>
    </div>
  )
}
