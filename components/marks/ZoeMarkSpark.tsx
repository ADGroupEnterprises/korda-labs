// Canonical Zoe mark (ZOE-001a) with the ZOE-002 spark overlay — light-background variant.
// Reproduced verbatim from `Marketing/01 - Assets/Zoe/Logo/zoe-logo-animation.html`.
// SPARK-01: fourteen neural-spark elements, copper + cream, staggered 1.6–2.6s timing.
// SPARK-02: default state invisible (opacity 0); sparks fire on hover only.
// SPARK-03: runs only while hover is active, stops when it ends, respects prefers-reduced-motion.
// NOTE: the hex values below are part of the canonical mark — do not "palette-correct" them.
export default function ZoeMarkSpark({ size = 80, className }: { size?: number; className?: string }) {
  const height = Math.round(size * (423.24 / 472.797))
  return (
    <span className={`zoe-spark-wrapper ${className ?? ''}`}>
      <style>{`
        .zoe-spark-wrapper { display: inline-flex; }
        .zoe-spark-wrapper .zoe-spark { opacity: 0; }
        .zoe-spark-wrapper:hover .sp1  { animation: zoe-spk 2.2s 0.00s infinite; }
        .zoe-spark-wrapper:hover .sp2  { animation: zoe-spk 1.9s 0.35s infinite; }
        .zoe-spark-wrapper:hover .sp3  { animation: zoe-spk 2.5s 0.70s infinite; }
        .zoe-spark-wrapper:hover .sp4  { animation: zoe-spk 1.7s 1.05s infinite; }
        .zoe-spark-wrapper:hover .sp5  { animation: zoe-spk 2.0s 0.15s infinite; }
        .zoe-spark-wrapper:hover .sp6  { animation: zoe-spk 2.3s 0.50s infinite; }
        .zoe-spark-wrapper:hover .sp7  { animation: zoe-spk 1.8s 0.85s infinite; }
        .zoe-spark-wrapper:hover .sp8  { animation: zoe-spk 2.4s 0.28s infinite; }
        .zoe-spark-wrapper:hover .sp9  { animation: zoe-spk 1.6s 0.62s infinite; }
        .zoe-spark-wrapper:hover .sp10 { animation: zoe-spk 2.1s 0.97s infinite; }
        .zoe-spark-wrapper:hover .sp11 { animation: zoe-spk 2.6s 0.42s infinite; }
        .zoe-spark-wrapper:hover .sp12 { animation: zoe-spk 1.8s 0.78s infinite; }
        .zoe-spark-wrapper:hover .sp13 { animation: zoe-spk 2.2s 0.20s infinite; }
        .zoe-spark-wrapper:hover .sp14 { animation: zoe-spk 1.9s 0.55s infinite; }
        @keyframes zoe-spk {
          0%,  7% { opacity: 0; }
          9%      { opacity: 1; }
          14%     { opacity: 0.3; }
          16%     { opacity: 1; }
          24%     { opacity: 0; }
          100%    { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .zoe-spark-wrapper .zoe-spark { animation: none !important; opacity: 0 !important; }
        }
      `}</style>
      <svg viewBox="0 0 472.797 423.24" width={size} height={height} xmlns="http://www.w3.org/2000/svg" aria-label="Zoe logo" role="img">
        <path fill="none" stroke="#8b4e27" strokeWidth="12.189" strokeMiterlimit={10} d="M300.714,22.235C229.885,6.343,170.333-6.043,102.775,26.593c-26.996,13.041-57.366,28.335-77.623,68.629C4.377,136.546-.989,194.67,16.959,240.65c24.915,63.831,103.709,91.744,142.309,91.505,7.543-.047,40.698-7.158,66.842,2.179,5.208,1.86,8.845,5.268,11.207,10.349,11.006,23.671-21.167,73.644-22.851,72.442-.877-.627-.19-19.897,6.601-31.804,9.048-15.864,29.245-27.166,79.647-38.459,52.297-11.717,49.292-6.185,79.779-12.528,14.712-3.06,42.868-23.248,63.824-62.093,5.532-10.254,25.41-48.302,21.993-100.765-.363-5.577-2.806-38.779-18.543-69.174-27.025-52.195-76.785-64.301-147.053-80.067Z" />
        <path fill="none" stroke="#d1cdc7" strokeWidth="8.504" strokeMiterlimit={10} d="M290.817,41.158c-59.929-13.446-110.317-23.927-167.479,3.687-22.842,11.034-48.538,23.974-65.678,58.068-17.578,34.965-22.118,84.144-6.933,123.049,21.081,54.008,87.75,77.626,120.41,77.424,6.383-.039,34.435-6.056,56.556,1.843,4.407,1.574,35.721,13.318,63.124,10.6,44.829-4.447,41.706-5.233,67.502-10.6,12.448-2.59,36.271-19.671,54.002-52.538,4.681-8.676,21.5-40.869,18.609-85.259-.307-4.718-2.374-32.812-15.69-58.529-22.866-44.163-64.969-54.406-124.424-67.746Z" />
        <g className="zoe-spark sp1" transform="translate(150,145)"><path fill="none" stroke="#d1cdc7" strokeWidth="0.8" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-12,0 L-12,8 L-5,8 L-5,14" /><path fill="none" stroke="#d1cdc7" strokeWidth="0.5" strokeLinecap="square" strokeLinejoin="miter" d="M-12,0 L-18,-7" /></g>
        <g className="zoe-spark sp2" transform="translate(178,190)"><path fill="none" stroke="#d1cdc7" strokeWidth="0.8" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L0,-11 L9,-11 L9,-5 L15,-5" /><path fill="none" stroke="#d1cdc7" strokeWidth="0.5" strokeLinecap="square" strokeLinejoin="miter" d="M0,-11 L-6,-17" /></g>
        <g className="zoe-spark sp3" transform="translate(195,222)"><path fill="none" stroke="#8A4E28" strokeWidth="1.2" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-8,-7 L-17,-7 L-17,-15 L-10,-15 L-10,-22" /><path fill="none" stroke="#8A4E28" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-17,-7 L-22,2" /></g>
        <g className="zoe-spark sp4" transform="translate(220,258)"><path fill="none" stroke="#8A4E28" strokeWidth="1.0" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L7,-9 L7,-18 L-1,-18 L-1,-25" /><path fill="none" stroke="#8A4E28" strokeWidth="0.5" strokeLinecap="square" strokeLinejoin="miter" d="M7,-9 L14,-7" /></g>
        <g className="zoe-spark sp5" transform="translate(245,112)"><path fill="none" stroke="#d1cdc7" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-7,-13 L-16,-13 L-16,-5 L-24,-5 L-24,-15 L-17,-15" /><path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-16,-13 L-9,-21 L-9,-28" /><path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-24,-5 L-31,-11" /></g>
        <g className="zoe-spark sp6" transform="translate(314,128)"><path fill="none" stroke="#d1cdc7" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-9,0 L-9,-12 L0,-12 L0,-21 L-9,-21" /><path fill="none" stroke="#d1cdc7" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-9,-12 L-15,-7 L-22,-12" /><path fill="none" stroke="#d1cdc7" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M0,-12 L6,-7" /></g>
        <g className="zoe-spark sp7" transform="translate(348,162)"><path fill="none" stroke="#d1cdc7" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-7,-9 L-7,-20 L2,-20 L2,-28" /><path fill="none" stroke="#d1cdc7" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-7,-20 L-15,-16 L-20,-23" /><path fill="none" stroke="#d1cdc7" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M2,-20 L8,-16" /></g>
        <g className="zoe-spark sp8" transform="translate(288,148)"><path fill="none" stroke="#8A4E28" strokeWidth="2.0" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-4,-15 L-13,-15 L-13,-6 L-22,-6 L-22,-16" /><path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-13,-15 L-7,-23 L-13,-30" /><path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-4,-15 L4,-11 L4,-19" /></g>
        <g className="zoe-spark sp9" transform="translate(355,210)"><path fill="none" stroke="#8A4E28" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L0,-13 L-9,-13 L-9,-5 L-18,-5 L-18,-15" /><path fill="none" stroke="#8A4E28" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-9,-13 L-3,-21 L-9,-27" /><path fill="none" stroke="#8A4E28" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-18,-5 L-25,-11" /></g>
        <g className="zoe-spark sp10" transform="translate(378,238)"><path fill="none" stroke="#8A4E28" strokeWidth="2.0" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-9,-7 L-9,-19 L-2,-19 L-2,-28 L-11,-28" /><path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-9,-19 L-17,-14 L-24,-20" /><path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-2,-19 L5,-15" /></g>
        <g className="zoe-spark sp11" transform="translate(264,198)"><path fill="none" stroke="#8A4E28" strokeWidth="3.0" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-11,-13 L-11,-26 L-3,-26 L-3,-36" /><path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-11,-13 L-22,-9 L-30,-16" /><path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-11,-26 L-21,-22 L-29,-29" /><path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-3,-26 L8,-22 L15,-30" /><path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L11,-5 L11,-17 L4,-17" /><path fill="none" stroke="#8A4E28" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-4,11 L-13,11 L-13,4" /></g>
        <g className="zoe-spark sp12" transform="translate(184,228)"><path fill="none" stroke="#d1cdc7" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-7,-13 L-7,-24 L2,-24 L2,-34 L-7,-34" /><path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-7,-13 L-18,-9 L-24,-16" /><path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-7,-24 L-17,-20" /><path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M2,-24 L11,-20 L16,-28" /></g>
        <g className="zoe-spark sp13" transform="translate(308,194)"><path fill="none" stroke="#8A4E28" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L-9,-7 L-16,-7 L-16,-16 L-7,-16 L-7,-24" /><path fill="none" stroke="#8A4E28" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-16,-7 L-23,-14 L-28,-9" /><path fill="none" stroke="#8A4E28" strokeWidth="0.6" strokeLinecap="square" strokeLinejoin="miter" d="M-7,-16 L0,-22" /></g>
        <g className="zoe-spark sp14" transform="translate(357,268)"><path fill="none" stroke="#d1cdc7" strokeWidth="2.0" strokeLinecap="square" strokeLinejoin="miter" d="M0,0 L0,-13 L-9,-13 L-9,-22 L-2,-22 L-2,-31" /><path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-9,-13 L-17,-9 L-22,-16" /><path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-9,-22 L-17,-27" /><path fill="none" stroke="#d1cdc7" strokeWidth="0.7" strokeLinecap="square" strokeLinejoin="miter" d="M-2,-22 L5,-18" /></g>
      </svg>
    </span>
  )
}
