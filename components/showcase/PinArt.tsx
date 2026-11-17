'use client'

import { useId } from 'react'

/* Full-bleed artwork for pinned surfaces. Each pin gets its own generated-looking picture:
   a route at dusk, a progress ring, a molecule, a table of friends, a growth curve, a shelf. */

/* Ids are per instance: a gradient defined inside a hidden copy of a tile cannot be referenced. */
const useUid = () => useId().replace(/[^a-zA-Z0-9]/g, '')

const box = { viewBox: '0 0 128 96', preserveAspectRatio: 'xMaxYMid slice', className: 'absolute inset-0 w-full h-full', 'aria-hidden': true } as const

function Runs() {
  const u = useUid()
  return (
    <svg {...box}>
      <defs>
        <linearGradient id={`pa-run${u}`} x1="0" y1="0" x2="0.5" y2="1"><stop offset="0" stopColor="#1B3558" /><stop offset="0.55" stopColor="#3D64AE" /><stop offset="1" stopColor="#F2B8AE" /></linearGradient>
        <radialGradient id={`pa-run-sun${u}`} cx="0.82" cy="0.72" r="0.5"><stop offset="0" stopColor="#FBEBDC" stopOpacity="0.95" /><stop offset="1" stopColor="#FBEBDC" stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="128" height="96" fill={`url(#pa-run${u})`} /><rect width="128" height="96" fill={`url(#pa-run-sun${u})`} />
      <path d="M-4 78 C 20 60, 34 84, 54 66 S 86 40, 100 52 S 122 44, 134 30 V100 H-4Z" fill="#0F2942" opacity="0.5" />
      <path d="M-4 88 C 22 74, 44 92, 68 78 S 108 66, 134 70 V100 H-4Z" fill="#0F2942" opacity="0.75" />
      <path d="M10 70 C 28 52, 40 74, 58 58 S 84 34, 98 44 S 112 36, 120 26" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="0.1 5.2" />
      <circle cx="10" cy="70" r="3.2" fill="#fff" /><circle cx="120" cy="26" r="4.4" fill="#E0A96D" stroke="#fff" strokeWidth="1.6" />
    </svg>
  )
}

function Goal() {
  const u = useUid()
  const r = 30, c = 2 * Math.PI * r
  return (
    <svg {...box}>
      <defs>
        <radialGradient id={`pa-goal${u}`} cx="0.75" cy="0.3" r="0.9"><stop offset="0" stopColor="#3D64AE" /><stop offset="0.6" stopColor="#16304F" /><stop offset="1" stopColor="#0F2942" /></radialGradient>
        <linearGradient id={`pa-goal-arc${u}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#DCEEFF" /><stop offset="1" stopColor="#A7D7FF" /></linearGradient>
        <filter id={`pa-goal-glow${u}`} x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3.5" /></filter>
      </defs>
      <rect width="128" height="96" fill={`url(#pa-goal${u})`} />
      <g transform="translate(92 42) rotate(-90)">
        {[44, 30, 16].map((q, i) => <circle key={q} r={q} fill="none" stroke="#fff" strokeOpacity={0.06 + i * 0.03} strokeWidth="7" />)}
        <circle r={r} fill="none" stroke="#A7D7FF" strokeWidth="7" strokeLinecap="round" strokeDasharray={`${c * 0.62} ${c}`} filter={`url(#pa-goal-glow${u})`} opacity="0.8" />
        <circle r={r} fill="none" stroke={`url(#pa-goal-arc${u})`} strokeWidth="7" strokeLinecap="round" strokeDasharray={`${c * 0.62} ${c}`} />
      </g>
    </svg>
  )
}

function Study() {
  const u = useUid()
  const hex = (cx: number, cy: number, s: number) => Array.from({ length: 6 }, (_, i) => { const a = (Math.PI / 3) * i + Math.PI / 6; return `${(cx + s * Math.cos(a)).toFixed(1)},${(cy + s * Math.sin(a)).toFixed(1)}` }).join(' ')
  return (
    <svg {...box}>
      <defs>
        <linearGradient id={`pa-st${u}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#E7F0FA" /><stop offset="0.5" stopColor="#A7D7FF" /><stop offset="1" stopColor="#6E9BE0" /></linearGradient>
        <radialGradient id={`pa-st-l${u}`} cx="0.2" cy="0.1" r="0.7"><stop offset="0" stopColor="#fff" stopOpacity="0.9" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="128" height="96" fill={`url(#pa-st${u})`} /><rect width="128" height="96" fill={`url(#pa-st-l${u})`} />
      <g fill="none" stroke="#fff" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round">
        <polygon points={hex(84, 34, 17)} /><polygon points={hex(113.4, 51, 17)} opacity="0.75" />
        <polygon points={hex(84, 34, 10)} strokeWidth="1.6" opacity="0.7" />
        <path d="M69.3 42.5 L54 51 M54 51 L42 44 M54 51 L54 66" /><path d="M84 17 L84 4" opacity="0.8" />
      </g>
      {[[54, 51, 4.5, '#3D64AE'], [42, 44, 3.4, '#fff'], [54, 66, 3.4, '#F2B8AE'], [84, 4, 3.2, '#fff']].map(([x, y, q, f]) => <circle key={`${x}${y}`} cx={x as number} cy={y as number} r={q as number} fill={f as string} stroke="#fff" strokeWidth="1.4" />)}
    </svg>
  )
}

function Reunion() {
  const u = useUid()
  const seats = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => { const a = (Math.PI * 2 * i) / 8 - Math.PI / 2; return [88 + 31 * Math.cos(a), 44 + 31 * Math.sin(a)] })
  const fills = ['#3D64AE', '#E0A96D', '#27405A', '#F2B8AE', '#9A6646', '#A7D7FF']
  return (
    <svg {...box}>
      <defs>
        <linearGradient id={`pa-re${u}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FBEBDC" /><stop offset="0.6" stopColor="#F2B8AE" /><stop offset="1" stopColor="#E0A96D" /></linearGradient>
        <radialGradient id={`pa-re-t${u}`} cx="0.5" cy="0.4" r="0.6"><stop offset="0" stopColor="#fff" /><stop offset="1" stopColor="#FBEBDC" /></radialGradient>
      </defs>
      <rect width="128" height="96" fill={`url(#pa-re${u})`} />
      <circle cx="88" cy="44" r="20" fill={`url(#pa-re-t${u})`} stroke="#fff" strokeWidth="1.5" />
      <circle cx="88" cy="44" r="4" fill="#E0A96D" opacity="0.7" /><circle cx="88" cy="44" r="9" fill="none" stroke="#E0A96D" strokeOpacity="0.35" />
      {seats.map(([x, y], i) => i < 6
        ? <circle key={i} cx={x} cy={y} r="7.5" fill={fills[i]} stroke="#fff" strokeWidth="2" />
        : <circle key={i} cx={x} cy={y} r="7" fill="#fff" fillOpacity="0.35" stroke="#fff" strokeWidth="1.6" strokeDasharray="2.5 2.5" />)}
    </svg>
  )
}

function Update() {
  const u = useUid()
  const line = 'M-2 74 C 14 70, 22 62, 36 64 S 56 50, 70 46 S 92 36, 104 24 S 122 14, 132 8'
  return (
    <svg {...box}>
      <defs>
        <linearGradient id={`pa-up${u}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FFFFFF" /><stop offset="1" stopColor="#E7F0FA" /></linearGradient>
        <linearGradient id={`pa-up-a${u}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3D64AE" stopOpacity="0.45" /><stop offset="1" stopColor="#A7D7FF" stopOpacity="0" /></linearGradient>
        <linearGradient id={`pa-up-l${u}`} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#A7D7FF" /><stop offset="1" stopColor="#3D64AE" /></linearGradient>
      </defs>
      <rect width="128" height="96" fill={`url(#pa-up${u})`} />
      {[24, 44, 64].map((y) => <path key={y} d={`M0 ${y}H128`} stroke="#0F2942" strokeOpacity="0.06" />)}
      <path d={`${line} V100 H-2Z`} fill={`url(#pa-up-a${u})`} />
      <path d={line} fill="none" stroke={`url(#pa-up-l${u})`} strokeWidth="3" strokeLinecap="round" />
      <circle cx="104" cy="24" r="8" fill="#3D64AE" opacity="0.18" /><circle cx="104" cy="24" r="4" fill="#3D64AE" stroke="#fff" strokeWidth="2" />
    </svg>
  )
}

function Shelf() {
  const u = useUid()
  const books: [number, number, number, string][] = [[62, 9, 26, '#FBEBDC'], [72, 7, 30, '#A7D7FF'], [80, 10, 23, '#F2B8AE'], [91, 6, 28, '#FBF9F4'], [98, 9, 25, '#E0A96D'], [108, 8, 31, '#DCEEFF']]
  return (
    <svg {...box}>
      <defs>
        <linearGradient id={`pa-sh${u}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#6B4630" /><stop offset="0.55" stopColor="#9A6646" /><stop offset="1" stopColor="#E0A96D" /></linearGradient>
        <linearGradient id={`pa-sh-p${u}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#5A3A27" /><stop offset="1" stopColor="#3F2819" /></linearGradient>
      </defs>
      <rect width="128" height="96" fill={`url(#pa-sh${u})`} />
      {[10, 26, 40, 58, 74, 88].map((y, i) => <path key={y} d={`M-4 ${y} C 30 ${y - 5 + i}, 70 ${y + 5 - i}, 132 ${y - 2}`} fill="none" stroke="#3F2819" strokeOpacity="0.16" strokeWidth="1.4" />)}
      {books.map(([x, w, h, f]) => <rect key={x} x={x} y={48 - h} width={w} height={h} rx="1.5" fill={f} />)}
      <rect x="54" y="48" width="78" height="5" rx="1" fill={`url(#pa-sh-p${u})`} />
      <rect x="54" y="84" width="78" height="5" rx="1" fill={`url(#pa-sh-p${u})`} />
    </svg>
  )
}

export const PIN_ART = { runs: Runs, goal: Goal, study: Study, reunion: Reunion, update: Update, shelf: Shelf }
