"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Découverte",
    desc: "Comprendre votre marché, vos objectifs et vos utilisateurs. On pose les bonnes questions avant de donner des réponses.",
  },
  {
    num: "02",
    title: "Architecture",
    desc: "Structurer l'information et définir les parcours utilisateurs. La logique avant l'esthétique.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Créer une interface qui incarne votre marque et pousse à l'action. Chaque détail est intentionnel.",
  },
  {
    num: "04",
    title: "Livraison",
    desc: "Développement, tests rigoureux, lancement et accompagnement. Livré comme promis, quand promis.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="px-6 md:px-12 py-32 md:py-44 bg-cream border-t border-ink/6"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-medium tracking-[0.35em] text-mint uppercase mb-8"
        >
          02 / Mon processus
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, delay: 0.05 }}
          className="font-heading font-bold leading-[0.92] text-ink mb-20 md:mb-28"
          style={{ fontSize: "clamp(2.4rem, 6vw, 7rem)" }}
        >
          Méthodique. Précis. Livré.
        </motion.h2>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:flex">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.15 * i }}
              className="flex-1 flex flex-col"
            >
              <div className="flex items-center mb-10">
                <span className="font-heading font-bold text-3xl text-mint shrink-0">
                  {step.num}
                </span>
                {i < steps.length - 1 && (
                  <div className="flex-1 h-px bg-mint/20 mx-5" />
                )}
              </div>
              <div className="pr-10">
                <h3 className="font-heading font-bold text-lg text-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-ink/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden flex flex-col">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="flex gap-6 pb-10 relative"
            >
              {i < steps.length - 1 && (
                <div className="absolute left-[14px] top-9 bottom-0 w-px bg-mint/20" />
              )}
              <span className="font-heading font-bold text-2xl text-mint shrink-0 leading-none pt-0.5">
                {step.num}
              </span>
              <div>
                <h3 className="font-heading font-bold text-lg text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-ink/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
