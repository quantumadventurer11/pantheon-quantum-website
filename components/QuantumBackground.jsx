"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function QuantumBackground() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.22], reduceMotion ? [0, 0] : [0, 90]);
  const imageScale = useTransform(scrollYProgress, [0, 0.22], reduceMotion ? [1, 1] : [1.02, 1.1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.22], [0.5, 0.18]);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-black">
      <motion.img
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        src="/images/quantum-hero-field.png"
        style={{ y: imageY, scale: imageScale, opacity: imageOpacity }}
      />
      <div className="quantum-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(235,238,242,.22),transparent_18rem),linear-gradient(180deg,rgba(0,0,0,.05),#050506_94%)]" />
      <motion.div
        animate={{ rotate: 360 }}
        className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        className="absolute left-1/2 top-1/2 h-[30rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-zinc-300/20"
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        className="absolute left-1/2 top-1/2 h-[52rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-zinc-500/20"
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        animate={{ x: ["-8%", "8%", "-8%"], opacity: [0.35, 0.75, 0.35] }}
        className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050506] to-transparent" />
    </div>
  );
}
