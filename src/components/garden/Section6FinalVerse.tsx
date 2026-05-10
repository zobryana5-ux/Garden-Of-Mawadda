import { motion } from "framer-motion";

export const Section6FinalVerse = () => {
  return (
    <section className="relative bg-rose-deep py-32 px-6 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Rose watermark */}
      <motion.svg viewBox="0 0 300 300" className="absolute w-[300px] h-[300px] opacity-[0.12]"
        initial={{ scale: 0, rotate: -30 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }}
        transition={{ duration: 2 }}>
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
          <ellipse key={a} cx="150" cy="150" rx="20" ry="60" fill="none" stroke="var(--gold-light)" strokeWidth="1.2"
            transform={`rotate(${a} 150 150) translate(0 -40)`} />
        ))}
        <circle cx="150" cy="150" r="22" fill="none" stroke="var(--gold-light)" strokeWidth="1.2" />
      </motion.svg>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <p className="font-arabic text-[28px] md:text-[34px] text-gold-light leading-[2.2] mb-6">
          وَلَهُ الْحَمْدُ فِي السَّمَاوَاتِ وَالْأَرْضِ وَعَشِيًّا وَحِينَ تُظْهِرُونَ
        </p>
        <p className="font-ui text-[10px] text-cream/80 mb-4">Surah Ar-Rum · Ayah 18</p>
        <div className="h-px bg-gold-light/60 w-32 mx-auto my-6" />
        <p className="font-display italic text-cream text-lg max-w-[500px] mx-auto leading-relaxed">
          "And His is all praise throughout the heavens and the earth. And [exalted is He] at night and when you are at midday."
        </p>
        <p className="font-display italic text-cream text-2xl mt-10">
          "All praise is for the One who wrote their story."
        </p>
      </div>
    </section>
  );
};
