import { motion } from "framer-motion";
import { CornerOrn } from "./svgs";

const cards = [
  {
    arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    ref: "Surah Al-Furqan · Ayah 74",
    en: "Our Lord, grant us from among our wives and offspring comfort to our eyes, and make us a leader for the righteous.",
  },
  {
    arabic: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    ref: "Hadith · Tirmidhi",
    en: "May Allah bless you, and may He send blessings upon you, and may He unite you both in goodness.",
  },
  {
    arabic: "وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    ref: "Surah Ar-Rum · Ayah 21",
    en: "And He placed between you affection and mercy.",
  },
];

export const Section4Prayers = () => {
  return (
    <section className="relative bg-earth py-32 px-6 overflow-hidden">
      {/* botanical wallpaper */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><path d='M40 10 Q50 30 40 50 Q30 30 40 10Z' fill='%23D4A843'/><path d='M10 40 Q30 50 50 40 Q30 30 10 40Z' fill='%236B8F5E'/></svg>")`,
        }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-cream heading-leaves">Prayers for Them</h2>
          <p className="font-display italic text-cream/70 text-lg mt-4">These words were written for moments like this.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <motion.div key={i}
              className="prayer-card relative bg-earth-soft rounded-2xl p-8 border border-gold/30"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.25, duration: 0.7 }}>
              <div className="absolute top-2 left-2"><CornerOrn /></div>
              <div className="absolute top-2 right-2"><CornerOrn rotate={90} /></div>
              <div className="absolute bottom-2 left-2"><CornerOrn rotate={-90} /></div>
              <div className="absolute bottom-2 right-2"><CornerOrn rotate={180} /></div>

              <p className="font-arabic text-gold text-[22px] md:text-[26px] text-center mt-4 mb-6">
                {c.arabic}
              </p>
              <p className="font-ui text-[10px] text-cream/70 text-center mb-4">{c.ref}</p>
              <div className="h-px bg-gold/30 w-16 mx-auto mb-4" />
              <p className="font-display italic text-cream/90 text-[15px] text-center leading-relaxed">{c.en}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
