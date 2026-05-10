import { motion } from "framer-motion";
import { Flower } from "./svgs";

const milestones = [
  { type: "daisy", title: "Where it was planted", year: "2019", text: "[A humble beginning in a quiet city — placeholder memory of where it all began.]" },
  { type: "rose", title: "The first bloom", year: "2020", text: "[The first conversation, the first laugh — placeholder for the moment they first met.]" },
  { type: "sunflower", title: "Growing season", year: "2021", text: "[Sunlit afternoons, long evenings of learning each other — placeholder.]" },
  { type: "wildflower", title: "Through every storm", year: "2022", text: "[A challenge weathered together; roots deepened — placeholder of resilience.]" },
  { type: "peony", title: "In full bloom", year: "2024", text: "[The proposal under a sky of golden hour — placeholder for the moment they knew.]" },
] as const;

export const Section3Story = () => {
  return (
    <section className="relative bg-paper py-32 px-6">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="font-display text-5xl md:text-6xl text-ink heading-leaves">Our Garden</h2>
        <p className="font-display italic text-ink/70 text-lg mt-4">Every love story is a seed. Here is how theirs grew.</p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-sage/40 -translate-x-1/2 hidden md:block" />

        {milestones.map((m, i) => (
          <div key={i}>
            <div className={`grid md:grid-cols-2 gap-8 items-center mb-24 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className={`flex ${i % 2 ? "md:justify-start" : "md:justify-end"} justify-center`}>
                <Flower type={m.type} />
              </div>
              <motion.div className={`text-center ${i % 2 ? "md:text-left" : "md:text-right"}`}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.8 }}>
                <p className="font-ui text-[10px] text-gold mb-2">{m.year}</p>
                <h3 className="font-display text-2xl md:text-3xl text-ink mb-3">{m.title}</h3>
                <p className="font-display italic text-ink/70 max-w-sm mx-auto md:mx-0">{m.text}</p>
              </motion.div>
            </div>

            {i === 2 && (
              <motion.div className="my-20 max-w-3xl mx-auto bg-sage text-cream rounded-2xl px-8 py-12 text-center relative"
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.8 }}>
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10" viewBox="0 0 40 40">
                  <path d="M5 20 Q15 10 25 20 Q15 30 5 20Z" fill="var(--cream)" opacity="0.7" />
                  <circle cx="30" cy="20" r="3" fill="var(--gold-light)" />
                </svg>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 scale-x-[-1]" viewBox="0 0 40 40">
                  <path d="M5 20 Q15 10 25 20 Q15 30 5 20Z" fill="var(--cream)" opacity="0.7" />
                  <circle cx="30" cy="20" r="3" fill="var(--gold-light)" />
                </svg>
                <p className="font-arabic text-[22px] md:text-[26px] text-cream mb-4">
                  هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَّهُنَّ
                </p>
                <p className="font-ui text-[10px] text-cream/80 mb-3">Surah Al-Baqarah · Ayah 187</p>
                <p className="font-display italic text-cream text-base md:text-lg">
                  "They are a garment for you and you are a garment for them."
                </p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
