'use client'

/* Hero showcase: Keel on the web, the Keel mobile app, and Keel in Messages.
   PIN_MOTION scrolls the pinned surfaces on the phone's home screen. */

import Link from 'next/link'
import { useReducedMotion } from 'framer-motion'
import { KeelWindow } from '@/components/showcase/KeelUI'
import { AppPhone, SmsPhone, PINS, PinTile } from '@/components/showcase/Phones'

export const PIN_MOTION = true

const TILE_W = 124
const GAP = 8
const LOOP_W = PINS.length * (TILE_W + GAP)

/** The phone's pinned row: one endless line of surfaces drifting past. */
function PinCarousel({ height = 150 }: { height?: number }) {
  return (
    <div className="relative overflow-hidden rounded-[1.15rem] -mx-3.5 px-3.5" style={{ height, ['--pin-loop' as string]: `${LOOP_W}px` }}>
      <div className="absolute top-0 pin-track flex" style={{ left: -LOOP_W, gap: GAP, height }}>
        {[0, 1, 2].flatMap((r) => PINS.map((p) => (
          <div key={r + p.id} style={{ width: TILE_W }} className="flex-shrink-0 h-full"><PinTile pin={p} tall className="h-full" /></div>
        )))}
      </div>
    </div>
  )
}

export default function HeroShowcase() {
  const reduce = useReducedMotion()
  const frozen = !!reduce
  const pinRow = PIN_MOTION && !frozen ? <PinCarousel /> : undefined

  return (
    <div className="relative mx-auto max-w-[82rem]" aria-label="Keel on the web, the Keel mobile app, and Keel in Messages">
      {/* Web */}
      <div className="xl:mr-[21.5rem]">
        <div className="rounded-[2rem] p-[9px] glass-bezel"><KeelWindow frozen={frozen} canvasClass="xl:pr-24" /></div>
      </div>

      {/* Phones */}
      <div className="mt-10 flex items-end justify-center gap-3 [zoom:0.78] sm:[zoom:1] xl:mt-0 xl:absolute xl:right-0 xl:-bottom-14">
        <AppPhone pinRow={pinRow} frozen={frozen} className="relative z-10" />
        <div className="flex flex-col items-center xl:mb-12">
          <SmsPhone frozen={frozen} />
          <Link href="/roadmap" className="mt-3 inline-flex items-center gap-1.5 font-mono font-semibold text-[0.6rem] uppercase tracking-[0.14em] px-3 py-1.5 rounded-full glass text-ink-soft hover:text-accent transition-colors whitespace-nowrap">
            Text Keel · on the roadmap
          </Link>
        </div>
      </div>
    </div>
  )
}
