import { useMemo } from "react";

export const Petals = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const petals = useMemo(() => Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 6,
    size: 6 + Math.random() * 10, // 6-16px
    drift: -60 + Math.random() * 120,
    rotate: -45 + Math.random() * 90, // -45 to 45
    color: variant === "dark"
      ? (i % 2 ? "#D4A843" : "#EDE0C4")
      : (i % 2 ? "#C9647A" : "#E8A87C"),
    opacity: 0.3 + Math.random() * 0.3, // 0.3-0.6
  })), [variant]);
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
      {petals.map((p) => (
        <svg key={p.id} viewBox="0 0 20 24"
          style={{
            position: "absolute",
            left: `${p.left}%`,
            width: p.size, height: p.size * 1.2,
            ["--drift" as any]: `${p.drift}px`,
            ["--petal-opacity" as any]: p.opacity,
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
            transform: `rotate(${p.rotate}deg)`,
          }}>
          <path d="M10 0 Q18 8 10 24 Q2 8 10 0Z" fill={p.color} />
        </svg>
      ))}
    </div>
  );
};
