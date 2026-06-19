"use client";

import * as React from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Gives its child a gentle "magnetic" pull toward the cursor on hover — a
 * premium micro-interaction for primary CTAs. Inline-block wrapper; no motion
 * under prefers-reduced-motion.
 */
export function Magnetic({
  children,
  className,
  strength = 0.35,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 14, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 220, damping: 14, mass: 0.3 });

  if (reduce) return <span className={cn("inline-block", className)}>{children}</span>;

  function move(e: React.MouseEvent) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={move}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.span>
  );
}
