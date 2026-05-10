import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Wreath } from "./svgs";

export const Section8Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const yBack = useTransform(scrollYProgress, [0, 1], [20, -10]);
  const yMid = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const yFront = useTransform(scrollYProgress, [0, 1], [70, -40]);

  return (
    <section ref={ref} className="relative pt-24 pb-12 px-6 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #FDFAF5 0%, #5C4220 50%, #1A1208 100%)" }}>
      <div className="text-center text-cream relative z-10 pb-40">
        <div className="flex justify-center mb-6 relative">
          <Wreath />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-display italic text-2xl md:text-3xl text-cream">Ahmed & Nour</p>
            <p className="font-ui text-[10px] text-gold-light mt-2">June 2025</p>
          </div>
        </div>
        <p className="font-display italic text-cream/90 text-lg mt-6">May Allah bless this union. <span className="font-arabic text-gold-light">آمين</span></p>
        <p className="font-body text-cream/60 text-sm mt-2">Kindly Created By <a href="https://wa.link/izxj50" target="_blank" rel="noopener noreferrer" className="text-gold-light hover:underline">Bad Labs</a>.</p>
      </div>

      {/* Layer 1 — distant (lightest, smallest) */}
      <motion.svg viewBox="0 0 1200 200" className="absolute bottom-0 left-0 w-full"
        preserveAspectRatio="none" style={{ y: yBack, height: 160, opacity: 0.3 }}>
        <path d="M0 200 L0 160 Q80 120 160 150 Q260 110 360 145 Q460 115 560 150 Q660 120 760 145 Q860 110 960 150 Q1060 120 1160 150 L1200 160 L1200 200 Z" fill="#0E0905" />
        {[120, 320, 540, 780, 1020].map((x, i) => (
          <circle key={i} cx={x} cy={150} r={10} fill="#0E0905" />
        ))}
      </motion.svg>

      {/* Layer 2 — mid */}
      <motion.svg viewBox="0 0 1200 200" className="absolute bottom-0 left-0 w-full"
        preserveAspectRatio="none" style={{ y: yMid, height: 200, opacity: 0.6 }}>
        <path d="M0 200 L0 150 Q60 110 130 140 Q220 90 320 135 Q420 105 520 140 Q620 100 720 135 Q820 90 920 140 Q1020 110 1120 140 L1200 150 L1200 200 Z" fill="#0E0905" />
        {[180, 420, 680, 940, 1120].map((x, i) => (
          <g key={i}>
            <rect x={x - 2} y={130} width="3" height="60" fill="#0E0905" />
            <circle cx={x} cy={125} r={16} fill="#0E0905" />
          </g>
        ))}
      </motion.svg>

      {/* Layer 3 — foreground (darkest, tallest) */}
      <motion.svg viewBox="0 0 1200 200" className="absolute bottom-0 left-0 w-full"
        preserveAspectRatio="none" style={{ y: yFront, height: 240, opacity: 0.9 }}>
        <path d="M0 200 L0 140 Q50 80 100 130 Q150 60 200 120 Q260 40 320 110 Q380 70 440 130 Q500 50 560 120 Q620 90 680 130 Q740 60 800 110 Q860 40 920 130 Q980 80 1040 120 Q1100 50 1160 130 Q1180 100 1200 140 L1200 200 Z" fill="#0E0905" />
        {[80, 240, 460, 720, 980, 1140].map((x, i) => (
          <g key={i}>
            <rect x={x - 2} y={140 - (i % 2) * 10} width="4" height="80" fill="#0E0905" />
            <circle cx={x} cy={130 - (i % 2) * 10} r={i % 2 ? 22 : 28} fill="#0E0905" />
          </g>
        ))}
        {[150, 380, 600, 850, 1080].map((x, i) => (
          <g key={`f${i}`}>
            <line x1={x} y1="200" x2={x} y2="170" stroke="#0E0905" strokeWidth="2" />
            <circle cx={x} cy="168" r="5" fill="#0E0905" />
          </g>
        ))}
      </motion.svg>
    </section>
  );
};
