"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.4,
    },
  },
};

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const line = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-28 pb-20"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={line}
            className="text-[11px] font-medium tracking-[0.35em] text-ink/35 uppercase mb-14"
          >
            UX/UI Design Studio — Tunis, Tunisie
          </motion.p>

          <div className="overflow-hidden mb-1">
            <motion.h1
              variants={line}
              className="font-heading font-bold leading-[0.88] text-ink"
              style={{ fontSize: "clamp(3.2rem, 9.5vw, 10rem)" }}
            >
              Conçu pour
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-10">
            <motion.h1
              variants={line}
              className="font-heading font-bold leading-[0.88] text-mint"
              style={{ fontSize: "clamp(3.2rem, 9.5vw, 10rem)" }}
            >
              convertir.
            </motion.h1>
          </div>

          <motion.p
            variants={line}
            className="max-w-lg text-base md:text-lg text-ink/55 leading-relaxed mb-12"
          >
            J&apos;aide les entreprises ambitieuses à transformer leurs visiteurs
            en clients grâce à un design pensé performance.
          </motion.p>

          <motion.div
            variants={line}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-mint text-white font-medium rounded transition-all duration-300 hover:opacity-90"
            >
              Démarrer un projet
            </a>
            <a
              href="#what-i-do"
              className="inline-flex items-center justify-center px-8 py-4 border border-ink/25 text-ink font-medium rounded transition-all duration-300 hover:border-mint hover:text-mint"
            >
              Voir mes services
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] text-ink/25 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [0.2, 1, 0.2], opacity: [0.2, 0.6, 0.2] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="origin-top w-px h-12 bg-gradient-to-b from-ink/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
