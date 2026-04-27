"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(target: number, duration = 2200) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, duration]);

  return { count, ref };
}

interface StatItemProps {
  numericValue: number;
  suffix: string;
  label: string;
  index: number;
}

function StatItem({ numericValue, suffix, label, index }: StatItemProps) {
  const { count, ref } = useCountUp(numericValue);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: 0.15 * index }}
      className="border-t border-cream/10 pt-10"
    >
      <p
        ref={ref as React.Ref<HTMLParagraphElement>}
        className="font-heading font-bold leading-none text-cream mb-5"
        style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)" }}
      >
        {count}
        {suffix}
      </p>
      <p className="text-cream/40 text-sm leading-relaxed max-w-[260px]">
        {label}
      </p>
    </motion.div>
  );
}

const stats: StatItemProps[] = [
  {
    numericValue: 88,
    suffix: "%",
    label: "des visiteurs ne reviennent pas après une mauvaise expérience utilisateur",
    index: 0,
  },
  {
    numericValue: 75,
    suffix: "%",
    label: "des gens jugent la crédibilité d'une entreprise sur son design",
    index: 1,
  },
  {
    numericValue: 2,
    suffix: " sec",
    label: "pour convaincre ou perdre un visiteur — sans deuxième chance",
    index: 2,
  },
];

export default function WhyItMatters() {
  return (
    <section id="why" className="px-6 md:px-12 py-32 md:py-44 bg-ink">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-medium tracking-[0.35em] text-mint uppercase mb-8"
        >
          03 / Pourquoi ça compte
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, delay: 0.05 }}
          className="font-heading font-bold leading-[0.92] text-cream mb-20 md:mb-28"
          style={{ fontSize: "clamp(2.4rem, 6vw, 7rem)" }}
        >
          Le design, c&apos;est du business.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.suffix + stat.numericValue} {...stat} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 md:mt-28 pt-10 border-t border-cream/8 text-sm text-cream/30 max-w-2xl leading-relaxed"
        >
          Les entreprises qui investissent dans le design surperforment leurs
          concurrents de{" "}
          <span className="text-cream/60 font-medium">219%.</span>
        </motion.p>
      </div>
    </section>
  );
}
