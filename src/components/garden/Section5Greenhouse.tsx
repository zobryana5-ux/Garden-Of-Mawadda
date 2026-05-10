import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LeafDivider } from "./svgs";

const TARGET = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000);

const Pot = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="font-display text-sage-deep text-5xl md:text-6xl mb-1 tabular-nums">{String(value).padStart(2, "0")}</div>
    <svg viewBox="0 0 100 90" className="w-24 h-24">
      {/* stem + leaves */}
      <path d="M50 28 L50 0" stroke="var(--sage-deep)" strokeWidth="1.5" />
      <path d="M50 10 Q56 6 60 10 Q56 14 50 10Z" fill="var(--sage)" />
      <path d="M50 6 Q44 2 40 6 Q44 10 50 6Z" fill="var(--sage)" />
      {/* pot body */}
      <path d="M14 32 L22 80 Q22 86 28 86 L72 86 Q78 86 78 80 L86 32 Z" fill="var(--terracotta)" />
      {/* shading */}
      <path d="M14 32 L22 80 Q22 86 28 86 L32 86 L26 32 Z" fill="#000" opacity="0.12" />
      <path d="M86 32 L78 80 Q78 86 72 86 L68 86 L74 32 Z" fill="#FFF" opacity="0.08" />
      {/* rim */}
      <rect x="8" y="24" width="84" height="12" rx="2" fill="#A8623A" />
      <rect x="8" y="24" width="84" height="3" fill="#FFF" opacity="0.15" />
      <rect x="8" y="33" width="84" height="3" fill="#000" opacity="0.18" />
      {/* drainage hole */}
      <ellipse cx="50" cy="84" rx="4" ry="1.5" fill="#3A1F12" opacity="0.7" />
    </svg>
    <p className="font-ui text-[10px] text-ink/60 mt-1">{label}</p>
  </div>
);

export const Section5Greenhouse = () => {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET.getTime() - Date.now());
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-paper py-32 px-6">
      <div className="text-center mb-16">
        <h2 className="font-display text-5xl md:text-6xl text-ink heading-leaves">An Evening in the Garden</h2>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Greenhouse SVG frame */}
        <svg viewBox="0 0 600 700" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          {/* roof */}
          <path d="M30 150 L300 30 L570 150 Z" stroke="var(--sage-deep)" strokeWidth="2" fill="none" />
          <line x1="300" y1="30" x2="300" y2="150" stroke="var(--sage-deep)" strokeWidth="1" />
          <line x1="100" y1="120" x2="500" y2="120" stroke="var(--sage-deep)" strokeWidth="0.8" />
          {/* pillars */}
          <line x1="30" y1="150" x2="30" y2="680" stroke="var(--sage-deep)" strokeWidth="3" />
          <line x1="570" y1="150" x2="570" y2="680" stroke="var(--sage-deep)" strokeWidth="3" />
          <line x1="30" y1="680" x2="570" y2="680" stroke="var(--sage-deep)" strokeWidth="3" />
          {/* climbing vines */}
          <motion.path d="M30 680 Q50 600 30 520 Q10 440 30 360 Q50 280 30 200"
            stroke="var(--sage)" strokeWidth="2" fill="none"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
            transition={{ duration: 2.5 }} />
          <motion.path d="M570 680 Q550 600 570 520 Q590 440 570 360 Q550 280 570 200"
            stroke="var(--sage)" strokeWidth="2" fill="none"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
            transition={{ duration: 2.5 }} />
          {[200, 320, 440, 580].map((y, i) => (
            <g key={i}>
              <circle cx={i % 2 ? 30 : 570} cy={y} r="6" fill="var(--rose-dusty)" opacity="0.85" />
              <circle cx={i % 2 ? 570 : 30} cy={y - 40} r="5" fill="var(--peach)" opacity="0.85" />
            </g>
          ))}
        </svg>

        <div className="relative z-10 px-12 md:px-20 py-24 text-center">
          <p className="font-ui text-[10px] text-gold mb-4">You are invited to</p>
          <h3 className="font-display text-4xl md:text-5xl text-ink mb-6">The Wedding Celebration</h3>
          <LeafDivider className="w-24 mx-auto mb-6" />
          <p className="font-display italic text-ink text-xl md:text-2xl mb-6">Ahmed & Nour</p>
          <div className="h-px bg-ink/20 w-12 mx-auto my-4" />
          <p className="font-body text-ink">Saturday · 28 June 2025</p>
          <p className="font-body text-ink">Seven in the Evening</p>
          <div className="h-px bg-ink/20 w-12 mx-auto my-4" />
          <p className="font-body italic text-ink">[Venue Name Placeholder]</p>
          <p className="font-body text-ink">[City, Country]</p>
          <div className="h-px bg-ink/20 w-12 mx-auto my-4" />
          <p className="font-ui text-[10px] text-ink/60">Dress Code: Garden Elegance</p>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
        <Pot value={t.d} label="Days" />
        <Pot value={t.h} label="Hrs" />
        <Pot value={t.m} label="Min" />
        <Pot value={t.s} label="Sec" />
      </div>
    </section>
  );
};
