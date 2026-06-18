"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import * as React from "react";

const EASE = [0.16, 1, 0.3, 1] as const;
const DEFAULT_DURATION = 0.7;
const DEFAULT_Y = 16;

export type RevealVariant = "up" | "fade" | "left" | "right" | "mask";

/** Initial offset for each variant, given a y override. */
function initialOffset(variant: RevealVariant, y: number) {
  switch (variant) {
    case "up":
      return { opacity: 0, y };
    case "fade":
      return { opacity: 0 };
    case "left":
      return { opacity: 0, x: -y };
    case "right":
      return { opacity: 0, x: y };
    case "mask":
      return { opacity: 0, y };
    default:
      return { opacity: 0, y };
  }
}

/** Build framer variants for a Reveal child participating in a RevealGroup. */
function buildChildVariants(
  variant: RevealVariant,
  y: number,
  duration: number,
): Variants {
  return {
    hidden: initialOffset(variant, y),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: EASE },
    },
  };
}

/**
 * Context provided by RevealGroup. When present, a Reveal renders as a
 * variant-driven child (no self viewport trigger) so the group can stagger it.
 */
const RevealGroupContext = React.createContext<boolean>(false);

/** Scroll-triggered reveal. Respects prefers-reduced-motion automatically. */
export function Reveal({
  children,
  delay = 0,
  className,
  variant = "up",
  y = DEFAULT_Y,
  duration = DEFAULT_DURATION,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
  y?: number;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  const inGroup = React.useContext(RevealGroupContext);

  // Reduced motion: render a plain block with no transforms.
  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  // Inside a RevealGroup: participate as a variant-driven child (group triggers).
  if (inGroup) {
    const variants = buildChildVariants(variant, y, duration);
    if (variant === "mask") {
      return (
        <div className={className} style={{ overflow: "hidden" }}>
          <motion.div variants={variants}>{children}</motion.div>
        </div>
      );
    }
    return (
      <motion.div className={className} variants={variants}>
        {children}
      </motion.div>
    );
  }

  // Standalone: self-trigger on viewport.
  const initial = initialOffset(variant, y);
  const animate = { opacity: 1, x: 0, y: 0 };
  const transition = { duration, ease: EASE, delay };

  if (variant === "mask") {
    return (
      <div className={className} style={{ overflow: "hidden" }}>
        <motion.div
          initial={initial}
          whileInView={animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={transition}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggers its direct Reveal children. Each Reveal inside picks up the group's
 * stagger via context and animates as the group scrolls into view.
 * Reduced motion → plain container, no transforms.
 */
export function RevealGroup({
  children,
  stagger = 0.08,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  return (
    <RevealGroupContext.Provider value={true}>
      <motion.div
        className={className}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {children}
      </motion.div>
    </RevealGroupContext.Provider>
  );
}
