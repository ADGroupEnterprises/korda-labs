'use client'

/* Pinned surfaces: shared by the phone's home screen, the web Overview and the text link card. */

import { PIN_ART } from '@/components/showcase/PinArt'

const label = 'font-mono font-semibold text-[0.56rem] uppercase tracking-[0.14em] whitespace-nowrap'

export const PINS = [
  { id: 'runs', dark: true, title: 'Training', big: '3 runs', sub: '29 km this week' },
  { id: 'goal', dark: true, title: 'Goal', big: '62%', sub: 'Half marathon' },
  { id: 'study', dark: false, title: 'O-Chem II', big: 'Tue 8:00', sub: 'Ch. 7 · 60 min' },
  { id: 'reunion', dark: false, title: 'Reunion', big: '6 of 8', sub: 'Sat, Dec 12' },
  { id: 'update', dark: false, title: 'Investor update', big: 'Draft v2', sub: 'Needs your OK' },
  { id: 'shelf', dark: true, title: 'Bookshelf', big: '11 parts', sub: 'Shop · Sat 2 pm' },
] as const

export type Pin = (typeof PINS)[number]

/** A pinned surface: generated artwork edge to edge, a glass rim, the headline over it. */
export function PinTile({ pin, className = '', tall = false }: { pin: Pin; className?: string; tall?: boolean }) {
  const Art = PIN_ART[pin.id]
  const fg = pin.dark ? 'text-white' : 'text-ink'
  return (
    <div className={`relative isolate overflow-hidden rounded-[1.15rem] shadow-[0_10px_22px_-12px_rgba(15,41,66,0.5)] ${fg} ${className}`}>
      <Art />
      <div className={`absolute inset-0 ${pin.dark ? (tall ? 'bg-gradient-to-t from-black/55 via-black/5 to-black/15' : 'bg-gradient-to-r from-black/45 via-black/10 to-transparent') : (tall ? 'bg-gradient-to-t from-white/85 via-white/10 to-white/40' : 'bg-gradient-to-r from-white/80 via-white/25 to-transparent')}`} aria-hidden="true" />
      <div className="absolute inset-0 rounded-[1.15rem] ring-1 ring-inset ring-white/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]" aria-hidden="true" />
      <div className="relative h-full p-2.5 flex flex-col justify-between">
        <p className={`${label} !text-[0.5rem] whitespace-nowrap ${pin.dark ? 'text-white/85' : 'text-ink/70'}`}>{pin.title}</p>
        <div>
          <p className={`font-display font-bold ${tall ? 'text-[1.25rem]' : 'text-[1rem]'} leading-none tracking-tight whitespace-nowrap`}>{pin.big}</p>
          <p className={`text-[0.55rem] mt-1 font-medium whitespace-nowrap ${pin.dark ? 'text-white/80' : 'text-ink/70'}`}>{pin.sub}</p>
        </div>
      </div>
    </div>
  )
}

