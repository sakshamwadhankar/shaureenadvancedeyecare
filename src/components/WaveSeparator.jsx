import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// ─────────────────────────────────────────────────────────────
// 1. HERO → MARQUEE
//    Torn paper / ripped edge going from light #f3f6ff into #1A1A1A
// ─────────────────────────────────────────────────────────────
export function TornEdge() {
  // Torn edge sits at the bottom of the hero (#f3f6ff bg).
  // The jagged path covers the BOTTOM of the hero block, revealing #1A1A1A beneath.
  // Points run L→R along the bottom; the fill is #f3f6ff (hero colour) so it
  // "tears" a rough hole into the dark marquee band below.
  const points =
    'M0,80 L0,25 C30,38 55,10 90,22 C125,34 148,8 185,19 C222,30 248,6 280,17 C312,28 338,4 372,15 C406,26 428,2 462,13 C496,24 520,0 558,11 C596,22 618,-2 654,10 C690,22 714,0 752,11 C790,22 812,0 850,12 C888,24 910,2 948,14 C986,26 1010,4 1050,16 C1090,28 1120,8 1200,20 L1200,80 Z';

  return (
    <div className="ws-torn" style={{ background: '#1A1A1A' }}>
      <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="ws-torn-svg">
        <path d={points} fill="#f3f6ff" />
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 2. MARQUEE → SKILLS
//    Ink splatter / drip border — dark bleeds into light
// ─────────────────────────────────────────────────────────────
export function InkDrip() {
  const drips = [
    { x: 80,  h: 44, w: 18 },
    { x: 160, h: 28, w: 14 },
    { x: 270, h: 56, w: 22 },
    { x: 390, h: 36, w: 16 },
    { x: 480, h: 62, w: 20 },
    { x: 580, h: 32, w: 15 },
    { x: 680, h: 50, w: 19 },
    { x: 790, h: 40, w: 17 },
    { x: 890, h: 68, w: 24 },
    { x: 980, h: 30, w: 14 },
    { x: 1080, h: 48, w: 18 },
    { x: 1150, h: 22, w: 12 },
  ];

  return (
    <div className="ws-drip">
      <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="ws-drip-svg">
        {/* solid bar */}
        <rect x="0" y="0" width="1200" height="2" fill="#1A1A1A" />
        {drips.map((d, i) => (
          <motion.g key={i}
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: `${d.x}px 0px` }}
          >
            {/* drip body */}
            <rect x={d.x - d.w / 2} y={0} width={d.w} height={d.h} fill="#1A1A1A" rx={d.w / 2} />
            {/* teardrop bulb */}
            <ellipse cx={d.x} cy={d.h + d.w * 0.7} rx={d.w * 0.85} ry={d.w * 0.9} fill="#1A1A1A" />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 3. SKILLS → TIMELINE
//    Diagonal slash with a lime accent stripe
// ─────────────────────────────────────────────────────────────
export function DiagonalSlash() {
  return (
    <div className="ws-slash">
      <svg viewBox="0 0 1200 90" preserveAspectRatio="none" className="ws-slash-svg">
        {/* main cut — light into blue */}
        <polygon points="0,0 1200,55 1200,90 0,90" fill="#3770bf" />
        {/* lime accent stripe */}
        <polygon points="0,0 1200,55 1200,62 0,7" fill="#cef26d" opacity="0.85" />
        {/* faint second stripe */}
        <polygon points="0,12 1200,67 1200,70 0,15" fill="#8dc2ff" opacity="0.3" />
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 4. TIMELINE → CONDITIONS
//    Jagged / seismic spike border — blue into white
// ─────────────────────────────────────────────────────────────
export function SeismicEdge() {
  // sharp zigzag points
  const seg = 80; // number of segments
  const W = 1200;
  const H = 70;
  const step = W / seg;
  const peaks = Array.from({ length: seg + 1 }, (_, i) => {
    const x = i * step;
    const amp = i % 2 === 0 ? 0 : (10 + ((i * 7) % 35));
    return `${x},${amp}`;
  });
  const d = `M0,${H} L${peaks.join(' L')} L${W},${H} Z`;

  return (
    <div className="ws-seismic">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="ws-seismic-svg">
        <path d={d} fill="#f3f6ff" />
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 5. CONDITIONS → JOURNEY  &  JOURNEY → BOTTOM
//    Scattered dots dissolve — light to gradient
//    variant='down' flips the dissolve direction
// ─────────────────────────────────────────────────────────────
export function DotDissolve({ topColor = '#f3f6ff', bottomColor = '#e8efff', variant = 'down' }) {
  const dots = [
    { x: 60,   y: 20, r: 12 }, { x: 150, y: 45, r: 8  }, { x: 240, y: 15, r: 16 },
    { x: 330,  y: 50, r: 6  }, { x: 420, y: 25, r: 14 }, { x: 510, y: 55, r: 10 },
    { x: 600,  y: 10, r: 18 }, { x: 690, y: 48, r: 8  }, { x: 780, y: 22, r: 12 },
    { x: 870,  y: 52, r: 7  }, { x: 960, y: 18, r: 15 }, { x: 1050,y: 44, r: 9 },
    { x: 1140, y: 28, r: 11 },
    { x: 100,  y: 65, r: 5  }, { x: 290, y: 70, r: 8  }, { x: 460, y: 68, r: 6 },
    { x: 640,  y: 72, r: 9  }, { x: 820, y: 66, r: 5  }, { x: 1000,y: 71, r: 7 },
    { x: 1160, y: 64, r: 4  },
  ];

  return (
    <div className="ws-dots" style={{ background: topColor }}>
      <svg viewBox="0 0 1200 90" preserveAspectRatio="none" className="ws-dots-svg">
        <defs>
          <linearGradient id={`dotGrad-${variant}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={topColor} />
            <stop offset="100%" stopColor={bottomColor} />
          </linearGradient>
        </defs>
        {/* smooth base fill */}
        <path
          d="M0,30 C200,10 400,50 600,30 C800,10 1000,50 1200,30 L1200,90 L0,90 Z"
          fill={bottomColor}
        />
        {/* dot scatter */}
        {dots.map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.x} cy={dot.y} r={dot.r}
            fill={bottomColor}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, delay: i * 0.03, ease: 'backOut' }}
          />
        ))}
      </svg>
    </div>
  );
}

// default export kept for backwards compat — maps to TornEdge
export default TornEdge;
