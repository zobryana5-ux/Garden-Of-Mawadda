import { motion } from "framer-motion";
import { FloralOrnament } from "./svgs";

export const Section2FirstVerse = () => {
  return (
    <section className="relative bg-earth text-cream py-32 px-6 min-h-screen flex items-center justify-center">
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <FloralOrnament className="w-32 mx-auto mb-10" color="var(--gold-light)" />

        <motion.p className="font-arabic text-[24px] md:text-[30px] text-gold-light leading-[2.2]"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 1 }}>
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
        </motion.p>

        <motion.p className="font-ui text-[10px] text-cream/70 mt-8"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}>
          Surah Ar-Rum · Ayah 21
        </motion.p>

        <motion.div className="h-px bg-gold-light/60 w-32 mx-auto my-8"
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.8 }} />

        <div className="font-display italic text-cream text-lg md:text-[20px] leading-[1.9] max-w-[560px] mx-auto">
          {[
            "And of His signs is that He created for you",
            "from yourselves mates that you may find tranquility in them;",
            "and He placed between you affection and mercy.",
            "Indeed in that are signs for a people who give thought.",
          ].map((line, i) => (
            <motion.span key={i} className="block"
              initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 2.2 + i * 0.3, duration: 0.6 }}>
              {line}
            </motion.span>
          ))}
        </div>

        <FloralOrnament className="w-32 mx-auto mt-12 rotate-180" color="var(--gold-light)" />
      </div>
    </section>
  );
};
