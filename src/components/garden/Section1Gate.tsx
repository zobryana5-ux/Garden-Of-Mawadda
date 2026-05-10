import { motion } from "framer-motion";
import { GrowingBranch, FloralOrnament, LeafDivider } from "./svgs";

const NAME_1 = "Ahmed";
const NAME_2 = "Nour";

export const Section1Gate = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-paper flex items-center justify-center px-6"
      style={{ animation: "radial-bloom 2s ease-out" }}>
      <GrowingBranch side="left" />
      <GrowingBranch side="right" />

      <motion.div className="relative z-10 text-center max-w-2xl mx-auto py-24"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2, duration: 1.2 }}>
        <p className="font-ui text-[10px] md:text-xs text-gold mb-6">In the name of Allah, the Most Gracious</p>
        <p className="font-arabic text-[28px] md:text-[34px] text-sage-deep mb-6">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        <FloralOrnament className="w-32 mx-auto mb-8" />

        <h1 className="font-display italic text-ink text-[64px] md:text-[80px] leading-[0.95] font-light">{NAME_1}</h1>
        <p className="font-display text-gold text-3xl md:text-4xl my-2 italic">&</p>
        <h1 className="font-display italic text-ink text-[64px] md:text-[80px] leading-[0.95] font-light">{NAME_2}</h1>

        <LeafDivider className="w-20 mx-auto my-6" />
        <p className="font-display italic text-ink/70 text-lg md:text-xl">invite you to their garden</p>
        <p className="font-ui text-[10px] text-ink/50 mt-6">JUNE 2025 · [CITY]</p>
      </motion.div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }}
        style={{ animation: "soft-bounce 2.4s ease-in-out 4s infinite" }}>
        <p className="font-ui text-[10px] text-ink/50">Scroll to enter the garden ↓</p>
      </motion.div>
    </section>
  );
};
