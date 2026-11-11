/* Brand marks — brand architecture v2.0.
   Korda Labs = the company (compass). Keel = the product (sailboat). Zoe = the otter, skipper of the crew.
   All files in /public/brand are reproduced from Marketing/01 - Assets; do not recolour or redraw. */

type ImgProps = { className?: string; alt?: string }

/** Korda Labs compass mark — company surfaces: masthead, footer, legal, favicon. */
export function KordaMark({ size = 32, className }: { size?: number; className?: string }) {
  return <img src="/brand/korda-labs-mark.svg" width={size} height={size} alt="" aria-hidden="true" className={className} />
}

/** Korda Labs horizontal lockup (compass + wordmark). */
export function KordaLockup({ className = 'h-9 w-auto', alt = 'Korda Labs' }: ImgProps) {
  return <img src="/brand/korda-labs-lockup.svg" alt={alt} className={className} />
}

/** Keel sailboat mark — product surfaces: app icon, product pages, pricing, compare. */
export function KeelMark({ size = 28, className }: { size?: number; className?: string }) {
  return <img src="/brand/keel-mark.svg" width={size} height={size} alt="" aria-hidden="true" className={className} />
}

/** Keel horizontal lockup (sailboat + wordmark). */
export function KeelLockup({ className = 'h-9 w-auto', alt = 'Keel' }: ImgProps) {
  return <img src="/brand/keel-lockup.svg" alt={alt} className={className} />
}

/** Zoe at the helm — her badge. Use as the assistant avatar wherever Zoe "speaks". */
export function ZoeBadge({ size = 24, variant = 'color', className }: { size?: number; variant?: 'color' | 'inverse'; className?: string }) {
  return <img src={`/brand/zoe-helm-${variant}.svg`} width={size} height={size} alt="" aria-hidden="true" className={className} />
}

/** Crew marks — Compass (owl with a telescope) and Task Manager (penguin with a clipboard). */
export function CrewMark({ agent, size = 28, className }: { agent: 'compass' | 'task-manager'; size?: number; className?: string }) {
  return <img src={`/brand/${agent}-mark.svg`} width={size} height={size} alt="" aria-hidden="true" className={className} />
}

/* Zoe poses (v2 render, 2026-11-11). Most poses come in a left and a right version:
   pick the one that faces or gestures INTO the content beside her. */
export type ZoePose =
  | 'wave-left' | 'wave-right'
  | 'salute-left' | 'salute-right'
  | 'point-left' | 'point-right'
  | 'walk-left' | 'walk-right'
  | 'lounge-left' | 'lounge-right'
  | 'peek' | 'peek-wave'

const POSE_ALT: Record<string, string> = {
  wave: 'Zoe the otter, in her captain’s coat and cap, waving hello',
  salute: 'Zoe the otter saluting',
  point: 'Zoe the otter pointing the way',
  walk: 'Zoe the otter striding off to get things done',
  lounge: 'Zoe the otter relaxing on a beanbag',
  peek: 'Zoe the otter peeking over the edge',
}

/** Zoe illustration. One pose per section, never two in the same viewport. */
export function Zoe({ pose, className, decorative = false, eager = false }: { pose: ZoePose; className?: string; decorative?: boolean; eager?: boolean }) {
  return (
    <img
      src={`/zoe/zoe-${pose}.webp`}
      alt={decorative ? '' : POSE_ALT[pose.split('-')[0]]}
      aria-hidden={decorative || undefined}
      loading={eager ? 'eager' : 'lazy'}
      draggable={false}
      className={`select-none pointer-events-none ${className ?? ''}`}
    />
  )
}
