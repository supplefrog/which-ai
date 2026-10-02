"use client";
import { memo, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import s from "./designs.module.css";

export const Reveal = memo(function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  // Keep SSR and hydration attributes identical. CSS supplies the immediate
  // reduced-motion presentation before client preference detection completes.
  return <motion.div className={`${s.reveal} ${className}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .1 }} transition={{ duration: reduce ? 0 : .65, delay: reduce ? 0 : delay, ease: [.16, 1, .3, 1] }}>{children}</motion.div>;
});
