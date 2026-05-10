import { motion } from "framer-motion";

export const FloralOrnament = ({ className = "", color = "var(--gold)" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 120 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 12 L20 12" stroke={color} strokeWidth="0.5" />
    <path d="M60 12 L100 12" stroke={color} strokeWidth="0.5" />
    <circle cx="60" cy="12" r="2" fill={color} />
    <path d="M50 12 Q55 6 60 12 Q55 18 50 12Z" fill={color} opacity="0.7" />
    <path d="M70 12 Q65 6 60 12 Q65 18 70 12Z" fill={color} opacity="0.7" />
    <circle cx="20" cy="12" r="1.5" fill={color} />
    <circle cx="100" cy="12" r="1.5" fill={color} />
  </svg>
);

export const LeafDivider = ({ className = "", color = "var(--sage)" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 80 14" className={className} fill="none">
    <path d="M5 7 Q15 0 25 7 Q15 14 5 7Z" fill={color} />
    <circle cx="40" cy="7" r="2" fill="var(--gold)" />
    <path d="M75 7 Q65 0 55 7 Q65 14 75 7Z" fill={color} />
  </svg>
);

export const GrowingBranch = ({ side = "left" }: { side?: "left" | "right" }) => {
  const flip = side === "right" ? "scale(-1,1) translate(-100%,0)" : "";
  return (
    <svg viewBox="0 0 200 600" className="absolute top-0 h-full" style={{ [side]: 0, transform: flip } as any}
      preserveAspectRatio="none">
      <motion.path
        d="M20 600 Q40 450 60 350 Q80 220 100 80 Q110 30 120 10"
        stroke="var(--sage-deep)" strokeWidth="2.5" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeOut" }}
      />
      {[
        { cx: 40, cy: 480, r: 14 }, { cx: 70, cy: 380, r: 16 },
        { cx: 55, cy: 290, r: 14 }, { cx: 90, cy: 200, r: 18 },
        { cx: 80, cy: 110, r: 16 },
      ].map((l, i) => (
        <motion.path key={i}
          d={`M${l.cx} ${l.cy} Q${l.cx + l.r} ${l.cy - l.r} ${l.cx + l.r * 1.6} ${l.cy} Q${l.cx + l.r} ${l.cy + l.r * 0.4} ${l.cx} ${l.cy}Z`}
          fill="var(--sage)"
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.9 }}
          transition={{ delay: 0.8 + i * 0.3, duration: 0.6 }}
          style={{ transformOrigin: `${l.cx}px ${l.cy}px` }}
        />
      ))}
      {/* Flower at tip */}
      <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.4, duration: 1, ease: "backOut" }}
        style={{ transformOrigin: "120px 10px" }}>
        <circle cx="120" cy="10" r="8" fill="var(--rose-dusty)" />
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <ellipse key={a} cx="120" cy="10" rx="5" ry="9"
            fill="var(--peach)" opacity="0.85"
            transform={`rotate(${a} 120 10) translate(0 -8)`} />
        ))}
        <circle cx="120" cy="10" r="3" fill="var(--gold)" />
      </motion.g>
    </svg>
  );
};

export const CornerOrn = ({ rotate = 0 }: { rotate?: number }) => (
  <svg viewBox="0 0 40 40" className="corner-orn w-10 h-10" style={{ transform: `rotate(${rotate}deg)` }}>
    <path d="M2 2 Q20 4 38 2 M2 2 Q4 20 2 38" stroke="var(--gold)" strokeWidth="0.6" fill="none" />
    <path d="M2 2 Q14 6 12 14 Q6 12 2 2Z" fill="var(--gold)" opacity="0.6" />
    <circle cx="14" cy="14" r="2" fill="var(--gold-light)" />
    <path d="M18 6 Q22 10 18 14 Q14 10 18 6Z" fill="var(--gold)" opacity="0.5" />
  </svg>
);

export const Flower = ({ type, delay = 0 }: { type: "daisy" | "rose" | "sunflower" | "wildflower" | "peony"; delay?: number }) => {
  const palettes: Record<string, { petal: string; center: string }> = {
    daisy: { petal: "var(--lavender)", center: "var(--gold-light)" },
    rose: { petal: "var(--rose-dusty)", center: "var(--rose-deep)" },
    sunflower: { petal: "var(--gold-light)", center: "var(--earth)" },
    wildflower: { petal: "var(--lavender)", center: "var(--gold)" },
    peony: { petal: "var(--peach)", center: "var(--rose-dusty)" },
  };
  const p = palettes[type];
  const petalCount = type === "sunflower" ? 14 : type === "daisy" ? 10 : type === "peony" ? 12 : 8;
  return (
    <svg viewBox="0 0 160 200" className="w-40 h-52">
      <motion.path d="M80 200 L80 110" stroke="var(--sage-deep)" strokeWidth="2.5" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.8, delay }} />
      {/* leaves */}
      {[{ y: 160, dir: 1 }, { y: 130, dir: -1 }].map((lf, i) => (
        <motion.path key={i}
          d={`M80 ${lf.y} Q${80 + 25 * lf.dir} ${lf.y - 12} ${80 + 35 * lf.dir} ${lf.y} Q${80 + 25 * lf.dir} ${lf.y + 6} 80 ${lf.y}Z`}
          fill="var(--sage)"
          initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: delay + 0.6 + i * 0.15 }}
          style={{ transformOrigin: "80px " + lf.y + "px" }} />
      ))}
      {/* bloom — petals unfurl one by one */}
      {Array.from({ length: petalCount }).map((_, i) => {
        const angle = (360 / petalCount) * i;
        const ry = type === "sunflower" ? 28 : type === "peony" ? 22 : 24;
        const rx = type === "sunflower" ? 8 : type === "peony" ? 16 : 12;
        return (
          <g key={i} transform={`rotate(${angle} 80 80)`}>
            <motion.ellipse cx="80" cy={80 - (ry - 4)} rx={rx} ry={ry}
              fill={p.petal}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: type === "peony" ? 0.85 : 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: delay + 1 + i * 0.1, ease: "backOut" }}
              style={{ transformOrigin: `80px 80px` }} />
          </g>
        );
      })}
      {type === "peony" && Array.from({ length: 6 }).map((_, i) => (
        <g key={`inner${i}`} transform={`rotate(${i * 60 + 30} 80 80)`}>
          <motion.ellipse cx="80" cy={72} rx="10" ry="14"
            fill="var(--rose-dusty)" opacity="0.9"
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + 1 + petalCount * 0.1 + i * 0.1, ease: "backOut" }}
            style={{ transformOrigin: `80px 80px` }} />
        </g>
      ))}
      <motion.circle cx="80" cy="80" r={type === "sunflower" ? 14 : 8} fill={p.center}
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 1 + petalCount * 0.1, ease: "backOut" }}
        style={{ transformOrigin: "80px 80px" }} />
    </svg>
  );
};

export const Wreath = () => (
  <svg viewBox="0 0 240 240" className="w-60 h-60">
    <circle cx="120" cy="120" r="90" stroke="var(--gold)" strokeWidth="0.8" fill="none" opacity="0.4" />
    {Array.from({ length: 18 }).map((_, i) => {
      const a = (360 / 18) * i;
      const x = 120 + Math.cos((a * Math.PI) / 180) * 90;
      const y = 120 + Math.sin((a * Math.PI) / 180) * 90;
      return (
        <g key={i} transform={`rotate(${a + 90} ${x} ${y})`}>
          <path d={`M${x} ${y} Q${x + 8} ${y - 10} ${x + 16} ${y} Q${x + 8} ${y + 4} ${x} ${y}Z`} fill="var(--gold)" opacity="0.7" />
          {i % 3 === 0 && <circle cx={x} cy={y} r="4" fill="var(--rose-dusty)" opacity="0.8" />}
        </g>
      );
    })}
  </svg>
);
