"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ScrollVisualPanel({ src, alt, label, className = "" }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-18, 18]);
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0.72, 1, 1, 0.78]);

  return (
    <motion.figure
      className={`metal-panel relative overflow-hidden rounded-lg ${className}`}
      ref={ref}
      style={{ opacity }}
    >
      <motion.img
        alt={alt}
        className="h-full min-h-72 w-full object-cover"
        src={src}
        style={{ y }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
      {label ? (
        <figcaption className="absolute bottom-5 left-5 right-5 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-200">
          {label}
        </figcaption>
      ) : null}
    </motion.figure>
  );
}
