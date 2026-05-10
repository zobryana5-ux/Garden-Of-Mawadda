import { useEffect, useState } from "react";

export const RoseCursor = () => {
  const [pos, setPos] = useState({ x: -50, y: -50 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.body.style.cursor = "none";
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a,button,input,textarea,[role=button]"));
    };
    window.addEventListener("mousemove", onMove);
    return () => { window.removeEventListener("mousemove", onMove); document.body.style.cursor = ""; };
  }, []);

  return (
    <div className="fixed pointer-events-none z-[100] hidden md:block"
      style={{ left: pos.x - 10, top: pos.y - 10, transform: `scale(${hovering ? 1.4 : 1})`, transition: "transform .2s" }}>
      <svg viewBox="0 0 20 20" width="20" height="20">
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <ellipse key={a} cx="10" cy="10" rx="3" ry="5" fill="var(--rose-dusty)" opacity="0.85"
            transform={`rotate(${a} 10 10) translate(0 -3)`} />
        ))}
        <circle cx="10" cy="10" r="2" fill="var(--gold)" />
      </svg>
    </div>
  );
};
