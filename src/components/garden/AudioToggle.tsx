import { useState } from "react";

export const AudioToggle = () => {
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => setOn((v) => !v)}
      aria-label={on ? "Mute ambient" : "Play ambient"}
      className="fixed top-4 right-4 z-[60] w-10 h-10 rounded-full bg-earth/40 backdrop-blur flex items-center justify-center text-gold border border-gold/30 hover:scale-110 transition">
      <svg viewBox="0 0 24 24" width="18" height="18">
        <path d="M12 2 Q20 8 12 22 Q4 8 12 2Z" fill="currentColor" opacity={on ? 1 : 0.5} />
        {!on && <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth="1.5" />}
      </svg>
    </button>
  );
};
