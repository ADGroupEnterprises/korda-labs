// Canonical Korda Labs compass mark — light-background variant.
// Reproduced verbatim from the brand asset `Marketing/01 - Assets/Korda Labs/Logo/korda-labs-logo light.svg`.
// MARK-06: viewBox, path data, and colours are fixed; the only permitted change is
// scaling via width/height. Class names are namespaced (km-) for safe inline embedding.
// NOTE: the hex values below are part of the canonical mark — do not "palette-correct" them.
export default function KordaMark({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 436.222 436.222"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <style>{`
          .km-1 { fill: #dddad4; }
          .km-2 { fill: #d1cdc7; }
          .km-3 { fill: #512b19; }
          .km-4 { stroke: #512b19; stroke-dasharray: 2.784 28.508; stroke-width: 17.008px; }
          .km-4, .km-5, .km-6 { fill: none; }
          .km-4, .km-6 { stroke-miterlimit: 10; }
          .km-7 { fill: #60351d; }
          .km-8 { fill: #66381f; }
          .km-9 { fill: #8a4e28; }
          .km-5 { stroke: #8a4e28; stroke-miterlimit: 25; stroke-width: 12.394px; }
          .km-6 { stroke: #d1cdc7; stroke-width: 8.504px; }
        `}</style>
      </defs>
      <polygon className="km-1" points="239.771 208.428 239.771 234.244 303.836 221.336 239.771 208.428" />
      <polygon className="km-2" points="239.848 208.23 239.848 220.512 303.913 221.138 239.848 208.23" />
      <circle className="km-4" cx="219.393" cy="217.725" r="184.26" />
      <polygon className="km-1" points="203.42 208.329 203.42 234.145 139.354 221.237 203.42 208.329" />
      <polygon className="km-2" points="203.343 208.131 203.343 220.413 139.278 221.039 203.343 208.131" />
      <polygon className="km-1" points="237.748 214.007 201.653 212.345 207.879 387.374 237.748 214.007" />
      <polygon className="km-9" points="236.914 212.144 200.837 214.172 206.283 51.769 236.914 212.144" />
      <polygon className="km-8" points="218.483 209.845 200.463 210.858 205.908 48.455 218.483 209.845" />
      <polygon className="km-2" points="219.575 211.321 201.545 210.49 207.772 385.519 219.575 211.321" />
      <polygon className="km-1" points="203.724 223.271 233.394 212.069 328.76 349.063 203.724 223.271" />
      <polygon className="km-2" points="203.105 222.304 217.936 216.705 328.141 348.096 203.105 222.304" />
      <polygon className="km-1" points="205.327 215.08 234.388 228.339 338.519 98.007 205.327 215.08" />
      <polygon className="km-2" points="205.246 214.83 219.071 221.138 338.438 97.757 205.246 214.83" />
      <circle className="km-7" cx="217.161" cy="218.168" r="18.75" />
      <path className="km-3" d="M217.865,199.305c9.895,0,17.917,8.395,17.917,18.75s-8.022,18.75-17.917,18.75" />
      <circle className="km-5" cx="218.111" cy="218.111" r="211.914" />
      <circle className="km-6" cx="219.509" cy="217.751" r="188.704" />
    </svg>
  )
}
