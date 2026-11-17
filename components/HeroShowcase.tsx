'use client'

/* Hero showcase: Keel on the web, the Keel mobile app, and Keel over text message.
   PIN_MOTION turns on the travelling "pinned surfaces" strip that runs through the web canvas
   and the phone in step. It is off in production and on in the hero-motion test branch. */

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useReducedMotion } from 'framer-motion'
import { KeelWindow, label } from '@/components/showcase/KeelUI'
import { AppPhone, SmsPhone, PINS, PinTile } from '@/components/showcase/Phones'

export const PIN_MOTION = false

const TILE_W = 112
const GAP = 10
const LOOP_W = PINS.length * (TILE_W + GAP)

/** One window onto a single, shared, endlessly moving row of pins. Every window uses the same
    animation and is shifted by its own left edge, so a pin leaving one device enters the next. */
function PinWindow({ originX, height = 64 }: { originX: number; height?: number }) {
  return (
    <div className="relative overflow-hidden rounded-2xl" style={{ height }}>
      <div className="absolute top-0 pin-track flex" style={{ left: -originX - LOOP_W, gap: GAP, height }}>
        {[0, 1, 2, 3].flatMap((r) => PINS.map((p) => (
          <PinTile key={r + p.id} pin={p} className="flex-shrink-0 h-full" />
        ))).map((el, i) => <div key={i} style={{ width: TILE_W }} className="flex-shrink-0 h-full [&>div]:h-full">{el}</div>)}
      </div>
    </div>
  )
}

export default function HeroShowcase() {
  const reduce = useReducedMotion()
  const frozen = !!reduce
  const motionOn = PIN_MOTION && !frozen

  const root = useRef<HTMLDivElement>(null)
  const webSlot = useRef<HTMLDivElement>(null)
  const phoneSlot = useRef<HTMLDivElement>(null)
  const [origins, setOrigins] = useState({ web: 0, phone: 0 })

  useEffect(() => {
    if (!motionOn) return
    const measure = () => {
      const r = root.current?.getBoundingClientRect()
      const w = webSlot.current?.getBoundingClientRect()
      const p = phoneSlot.current?.getBoundingClientRect()
      if (r && w && p) setOrigins({ web: w.left - r.left, phone: p.left - r.left })
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (root.current) ro.observe(root.current)
    window.addEventListener('resize', measure)
    return () => { ro.disconnect(); window.removeEventListener('resize', measure) }
  }, [motionOn])

  const webStrip = motionOn ? (
    <div className="hidden md:block mt-3">
      <p className={`${label} text-ink-soft mb-1.5`}>Pinned</p>
      <div ref={webSlot}><PinWindow originX={origins.web} /></div>
    </div>
  ) : undefined

  const phoneRow = motionOn ? (
    <div ref={phoneSlot}><PinWindow originX={origins.phone} height={150} /></div>
  ) : undefined

  return (
    <div ref={root} className="relative mx-auto max-w-[82rem]" style={{ ['--pin-loop' as string]: `${LOOP_W}px` }} aria-label="Keel on the web, the Keel mobile app, and Keel over text message">
      {/* Web */}
      <div className="xl:mr-[21.5rem]">
        <KeelWindow frozen={frozen} pinStrip={webStrip} canvasClass="xl:pr-24" />
      </div>

      {/* Phones */}
      <div className="mt-10 flex items-end justify-center gap-3 [zoom:0.78] sm:[zoom:1] xl:mt-0 xl:absolute xl:right-0 xl:-bottom-14">
        <AppPhone pinRow={phoneRow} className="relative z-10" />
        <div className="flex flex-col items-center xl:mb-12">
          <SmsPhone frozen={frozen} />
          <Link href="/roadmap" className="mt-3 inline-flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-wider px-3 py-1.5 rounded-full glass text-ink-soft hover:text-accent transition-colors whitespace-nowrap">
            Text Keel · on the roadmap
          </Link>
        </div>
      </div>
    </div>
  )
}
