import { useState } from "react";

export const ShareButton = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";
  const copy = async () => { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      {open && (
        <div className="mb-3 p-4 rounded-xl bg-aged-paper border border-gold/40 shadow-xl w-56 font-body">
          <p className="font-ui text-[10px] text-ink/60 mb-2">Share the garden</p>
          <a className="block py-1 text-sage-deep hover:text-rose-dusty"
            href={`https://wa.me/?text=${encodeURIComponent("Join our garden: " + url)}`} target="_blank" rel="noreferrer">
            ✿ WhatsApp
          </a>
          <button onClick={copy} className="block py-1 text-sage-deep hover:text-rose-dusty">
            ✿ {copied ? "Copied!" : "Copy link"}
          </button>
        </div>
      )}
      <button onClick={() => setOpen((v) => !v)}
        className="w-12 h-12 rounded-full bg-rose-dusty text-white shadow-lg flex items-center justify-center hover:scale-110 transition"
        aria-label="Share">
        <svg viewBox="0 0 24 24" width="22" height="22">
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <ellipse key={a} cx="12" cy="12" rx="3.5" ry="6" fill="white" opacity="0.9"
              transform={`rotate(${a} 12 12) translate(0 -3.5)`} />
          ))}
          <circle cx="12" cy="12" r="2.5" fill="var(--gold-light)" />
        </svg>
      </button>
    </div>
  );
};
