"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Plane } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Signature brand flourish: a dotted "flight path" that wipes in left-to-right
 * as it scrolls into view, with a little plane settling at the destination.
 * Echoes the agency's travel-journal motif. Decorative + reduced-motion safe.
 */
export function FlightPath({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className={cn("pointer-events-none relative mx-auto w-full max-w-3xl px-6", className)}>
      <motion.div
        initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
        whileInView={reduce ? undefined : { clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.5, ease: EASE }}
      >
        <svg viewBox="0 0 1200 150" fill="none" className="w-full text-clay">
          {/* origin marker */}
          <circle cx="26" cy="118" r="7" className="fill-clay/70" />
          <circle cx="26" cy="118" r="13" className="fill-none stroke-clay/30" strokeWidth="2" />
          {/* dotted travel line */}
          <path
            d="M 26 118 C 320 30, 520 30, 660 82 S 980 140, 1174 44"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="0.1 26"
            className="opacity-70"
          />
        </svg>
      </motion.div>

      {/* plane settles at the destination after the line draws */}
      <motion.div
        className="absolute right-[3%] top-[12%] text-clay"
        initial={reduce ? false : { opacity: 0, scale: 0.6 }}
        whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ delay: reduce ? 0 : 1.35, duration: 0.5, ease: EASE }}
      >
        <motion.span
          className="block"
          animate={reduce ? undefined : { y: [0, -6, 0], rotate: [-18, -22, -18] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        >
          <Plane className="h-7 w-7 fill-clay/15" strokeWidth={1.75} />
        </motion.span>
      </motion.div>
    </div>
  );
}
