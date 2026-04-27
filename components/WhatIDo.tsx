"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "UX Strategy",
    desc: "Comprendre vos utilisateurs avant de dessiner quoi que ce soit. Recherche, architecture, parcours utilisateur — les fondations qui rendent tout le reste possible.",
  },
  {
    num: "02",
    title: "UI Design",
    desc: "Interfaces élégantes et intuitives qui reflètent votre identité et guident chaque visiteur vers l'action. Chaque pixel est une décision.",
  },
  {
    num: "03",
    title: "Développement Web",
    desc: "Sites rapides, modernes, optimisés pour Google — construits avec les meilleures technologies pour convertir et performer sur tous les écrans.",
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="px-6 md:px-12 py-32 md:py-44">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-medium tracking-[0.35em] text-mint uppercase mb-8"
        >
          01 / Ce que je fais
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, delay: 0.05 }}
          className="font-heading font-bold leading-[0.92] text-ink mb-5"
          style={{ fontSize: "clamp(2.4rem, 6vw, 7rem)" }}
        >
          Pas juste de beaux sites.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="max-w-2xl text-base md:text-lg text-ink/55 leading-relaxed mb-20 md:mb-28"
        >
          Des interfaces qui travaillent pour vous 24h/24 — pensées pour guider,
          convaincre, convertir.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-ink/10">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="pt-10 pb-10 md:pr-12 md:border-r border-ink/10 last:border-r-0 md:pl-0 first:pl-0 [&:not(:first-child)]:md:pl-12 border-b md:border-b-0 last:border-b-0"
            >
              <span className="font-heading font-bold text-[2.5rem] text-mint leading-none block mb-6">
                {p.num}
              </span>
              <h3 className="font-heading font-bold text-xl text-ink mb-3">
                {p.title}
              </h3>
              <p className="text-ink/50 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
