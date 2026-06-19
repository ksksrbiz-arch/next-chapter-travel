"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * Slim fixed reading-progress bar pinned to the very top of the viewport,
 * above the site header. Its horizontal scale tracks how far the visitor has
 * scrolled through the page, so it reads as empty at the top and full at the
 * bottom. Purely decorative (aria-hidden). Under reduced motion the spring is
 * skipped so the bar tracks scroll position directly without easing.
 */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: reduce ? scrollYProgress : smooth }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-clay to-gold"
    />
  );
}
