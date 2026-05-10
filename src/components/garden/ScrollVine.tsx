import { useEffect, useState } from "react";

export const ScrollVine = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const length = 800;
  return (
    <svg className="fixed right-3 top-0 h-screen w-8 z-[40] pointer-events-none" viewBox="0 0 30 800" preserveAspectRatio="none">
      <path d="M15 0 Q5 200 15 400 Q25 600 15 800" stroke="var(--sage-deep)" strokeWidth="1.5" fill="none" opacity="0.3" />
      <path d="M15 0 Q5 200 15 400 Q25 600 15 800"
        stroke="var(--sage-deep)" strokeWidth="2" fill="none"
        strokeDasharray={length}
        strokeDashoffset={length * (1 - progress)} />
      {[0.15, 0.35, 0.55, 0.75, 0.92].map((t, i) => {
        const passed = progress >= t;
        const y = t * 800;
        const x = 15 + (i % 2 ? 10 : -10);
        return (
          <path key={i} d={`M15 ${y} Q${x} ${y - 6} ${x + (i % 2 ? 6 : -6)} ${y} Q${x} ${y + 4} 15 ${y}Z`}
            fill={passed ? "var(--gold)" : "var(--sage)"} opacity={passed ? 0.95 : 0.5} />
        );
      })}
    </svg>
  );
};
