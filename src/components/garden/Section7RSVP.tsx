import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flower } from "./svgs";

export const Section7RSVP = () => {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const [burst, setBurst] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setBurst(true);
    setTimeout(() => setDone(true), 700);
  };

  return (
    <section className="bg-paper py-32 px-6">
      <div className="text-center mb-12">
        <h2 className="font-display text-5xl md:text-6xl text-ink heading-leaves">Will You Join the Garden?</h2>
        <p className="font-display italic text-ink/70 text-lg mt-4">Your presence would be the most beautiful bloom of all.</p>
      </div>

      <div className="relative max-w-md mx-auto">
        {/* hole */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-paper border border-ink/20 z-10" />
        <div className="absolute left-1/2 -translate-x-1/2 top-2 w-px h-12 bg-ink/30 z-0" />

        <div className="relative bg-aged-paper rounded-t-[120px] rounded-b-2xl pt-16 pb-10 px-8 shadow-2xl border border-ink/10">
          {/* botanical border */}
          <div className="absolute inset-3 rounded-t-[100px] rounded-b-xl border border-sage/40 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'><path d='M15 5 Q20 15 15 25 Q10 15 15 5Z' fill='none' stroke='%236B8F5E' stroke-width='0.5' opacity='0.4'/></svg>")`,
              backgroundRepeat: "repeat",
              backgroundSize: "30px 30px",
              backgroundPosition: "center",
              opacity: 0.4,
            }} />

          <div className="relative">
            <AnimatePresence mode="wait">
              {!done ? (
                <motion.form key="form" onSubmit={submit}
                  initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
                  className="space-y-5">
                  <div>
                    <label className="font-ui text-[10px] text-ink/60 block mb-2">Guest</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} required
                      placeholder="Your name, dear guest"
                      className="w-full bg-transparent border-b border-ink/30 px-1 py-2 font-display italic text-ink focus:outline-none focus:border-rose-dusty" />
                  </div>

                  <div>
                    <label className="font-ui text-[10px] text-ink/60 block mb-2">Will you attend</label>
                    <div className="flex gap-2">
                      <button type="button" onClick={() => setAttending("yes")}
                        className={`flex-1 py-2 px-3 rounded-full font-display italic text-sm transition btn-petal ${attending === "yes" ? "bg-rose-dusty text-white" : "bg-transparent border border-rose-dusty text-rose-dusty"}`}>
                        ✿ I will bloom there
                      </button>
                      <button type="button" onClick={() => setAttending("no")}
                        className={`flex-1 py-2 px-3 rounded-full font-display italic text-sm transition ${attending === "no" ? "bg-ink/70 text-white" : "bg-transparent border border-ink/40 text-ink/70"}`}>
                        ✿ I cannot attend
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="font-ui text-[10px] text-ink/60 block mb-2">Guests</label>
                    <div className="flex items-center justify-center gap-4">
                      <button type="button" onClick={() => setGuests((g) => Math.max(1, g - 1))}
                        className="w-9 h-9 flex items-center justify-center text-sage-deep hover:scale-110 transition" aria-label="less">
                        <svg viewBox="0 0 24 24" width="22" height="22"><path d="M4 12 Q12 6 20 12 Q12 18 4 12Z" fill="var(--sage)" /></svg>
                      </button>
                      <span className="font-display text-3xl text-ink w-10 text-center">{guests}</span>
                      <button type="button" onClick={() => setGuests((g) => g + 1)}
                        className="w-9 h-9 flex items-center justify-center text-sage-deep hover:scale-110 transition" aria-label="more">
                        <svg viewBox="0 0 24 24" width="22" height="22">
                          <path d="M4 12 Q12 6 20 12 Q12 18 4 12Z" fill="var(--sage)" />
                          <path d="M12 4 Q18 12 12 20 Q6 12 12 4Z" fill="var(--sage-deep)" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="font-ui text-[10px] text-ink/60 block mb-2">Wishes</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                      placeholder="Leave your wishes for the garden..." rows={3}
                      className="w-full bg-transparent border-b border-ink/30 px-1 py-2 font-display italic text-ink focus:outline-none focus:border-rose-dusty resize-none" />
                  </div>

                  <div className="flex justify-center pt-4">
                    <button type="submit"
                      className="seed-btn relative px-8 py-3 bg-sage-deep text-cream font-ui text-xs rounded-md shadow-md border-2 border-gold/40">
                      <span className="relative z-10">Plant My RSVP</span>
                      {burst && Array.from({ length: 12 }).map((_, i) => {
                        const a = (360 / 12) * i;
                        return (
                          <motion.span key={i}
                            className="absolute left-1/2 top-1/2 w-2 h-3 rounded-full"
                            style={{ background: i % 2 ? "var(--rose-dusty)" : "var(--peach)" }}
                            initial={{ x: 0, y: 0, opacity: 1 }}
                            animate={{
                              x: Math.cos((a * Math.PI) / 180) * 80,
                              y: Math.sin((a * Math.PI) / 180) * 80,
                              opacity: 0,
                              rotate: 360,
                            }}
                            transition={{ duration: 0.7 }}
                          />
                        );
                      })}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div key="done" className="text-center py-6"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                  <div className="flex justify-center"><Flower type="peony" /></div>
                  <p className="font-display italic text-2xl text-ink mt-4">Your name has been planted in our garden. ♡</p>
                  <p className="font-display text-ink/60 mt-2">We cannot wait to see you bloom.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
