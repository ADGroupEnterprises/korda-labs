// Canonical Zoe mark (ZOE-001a) — the organic speech-bubble, light-background variant.
// Reproduced verbatim from the brand asset `Marketing/01 - Assets/Zoe/Logo/Zoe logo.svg`.
// MARK-03: viewBox, path data, and stroke colours are fixed; the only permitted change
// is scaling via width/height. Class names are namespaced (zm-) for safe inline embedding.
// NOTE: the hex values below are part of the canonical mark — do not "palette-correct" them.
export default function ZoeMark({ size = 24, className }: { size?: number; className?: string }) {
  const height = Math.round(size * (423.24 / 472.797))
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={height}
      viewBox="0 0 472.797 423.24"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <style>{`
          .zm-1 { stroke: #8b4e27; stroke-width: 12.189px; }
          .zm-1, .zm-2 { fill: none; stroke-miterlimit: 10; }
          .zm-2 { stroke: #d1cdc7; stroke-width: 8.504px; }
        `}</style>
      </defs>
      <path
        className="zm-1"
        d="M300.714,22.235C229.885,6.343,170.333-6.043,102.775,26.593c-26.996,13.041-57.366,28.335-77.623,68.629C4.377,136.546-.989,194.67,16.959,240.65c24.915,63.831,103.709,91.744,142.309,91.505,7.543-.047,40.698-7.158,66.842,2.179,5.208,1.86,8.845,5.268,11.207,10.349,11.006,23.671-21.167,73.644-22.851,72.442-.877-.627-.19-19.897,6.601-31.804,9.048-15.864,29.245-27.166,79.647-38.459,52.297-11.717,49.292-6.185,79.779-12.528,14.712-3.06,42.868-23.248,63.824-62.093,5.532-10.254,25.41-48.302,21.993-100.765-.363-5.577-2.806-38.779-18.543-69.174-27.025-52.195-76.785-64.301-147.053-80.067Z"
      />
      <path
        className="zm-2"
        d="M290.817,41.158c-59.929-13.446-110.317-23.927-167.479,3.687-22.842,11.034-48.538,23.974-65.678,58.068-17.578,34.965-22.118,84.144-6.933,123.049,21.081,54.008,87.75,77.626,120.41,77.424,6.383-.039,34.435-6.056,56.556,1.843,4.407,1.574,35.721,13.318,63.124,10.6,44.829-4.447,41.706-5.233,67.502-10.6,12.448-2.59,36.271-19.671,54.002-52.538,4.681-8.676,21.5-40.869,18.609-85.259-.307-4.718-2.374-32.812-15.69-58.529-22.866-44.163-64.969-54.406-124.424-67.746Z"
      />
    </svg>
  )
}
