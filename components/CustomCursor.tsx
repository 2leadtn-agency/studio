"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-20);
  const y = useMotionValue(-20);

  const springX = useSpring(x, { stiffness: 600, damping: 35 });
  const springY = useSpring(y, { stiffness: 600, damping: 35 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{
        x: springX,
        y: springY,
        top: -6,
        left: -6,
        width: 12,
        height: 12,
        borderRadius: "50%",
        backgroundColor: "#00C983",
      }}
    />
  );
}
