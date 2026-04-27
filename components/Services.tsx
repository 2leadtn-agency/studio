"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Site Vitrine",
    description:
      "Un site qui incarne votre marque et transforme vos visiteurs en prospects. Conçu pour être rapide, crédible, et mémorable.",
    tags: ["Design", "Développement", "SEO"],
  },
  {
    title: "Identité Digitale",
    description:
      "Logo, charte graphique, système de design — une identité cohérente qui vous distingue immédiatement et inspire confiance.",
    tags: ["Branding", "UI System", "Brand Assets"],
  },
  {
    title: "Plateforme Web",
    description:
      "Application web, SaaS, e-commerce — des interfaces complexes rendues simples et intuitives pour vos utilisateurs.",
    tags: ["UX Research", "UI Design", "Développement"],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-12 py-32 md:py-44 bg-cream">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-medium tracking-[0.35em] text-mint uppercase mb-8"
        >
          04 / Services
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, delay: 0.05 }}
          className="font-heading font-bold leading-[0.92] text-ink mb-20 md:mb-24"
          style={{ fontSize: "clamp(2.4rem, 6vw, 7rem)" }}
        >
          Ce qu&apos;on peut construire ensemble.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-ink/10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group relative p-10 md:p-12 border-b md:border-b-0 md:border-r border-ink/10 last:border-r-0 last:border-b-0 transition-all duration-300 hover:bg-ink/[0.02] overflow-hidden"
            >
              <div className="absolute inset-0 border-2 border-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="font-heading font-bold text-2xl text-ink mb-5">
                {service.title}
              </h3>

              <p className="text-ink/50 leading-relaxed mb-10 text-sm">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-ink/35 border border-ink/15 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-mint text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span>Démarrer</span>
                <span className="text-base">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-mint text-white font-medium rounded transition-all duration-300 hover:opacity-90"
          >
            Démarrer un projet
          </a>
        </motion.div>
      </div>
    </section>
  );
}
