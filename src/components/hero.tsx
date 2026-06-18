"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
        };

  return (
    <section className="relative isolate overflow-hidden">
      {/* Photo slot — replace .horizon with a full-bleed destination image
          (next/image, priority) once licensed photography is uploaded. */}
      <div className="horizon absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 bg-ink/25" />

      <div className="container-x flex min-h-[calc(100dvh-var(--header-h))] flex-col justify-center py-24 text-paper">
        <motion.p {...rise(0.05)} className="eyebrow text-gold-soft before:bg-gold-soft/70">
          Theme parks &amp; cruises · One agency
        </motion.p>

        <motion.h1 {...rise(0.12)} className="display-1 mt-5 max-w-[16ch] text-paper">
          Your next chapter of travel
        </motion.h1>

        <motion.p {...rise(0.22)} className="lede mt-6 max-w-xl text-paper/85">
          The trip you keep meaning to take — planned end to end by two specialists
          who handle the parks, the ships, and every detail in between.
        </motion.p>

        <motion.div {...rise(0.32)} className="mt-9 flex flex-wrap items-center gap-4">
          <Button href="/plan-your-trip" size="lg">
            Plan your trip
          </Button>
          <Button href="/experiences" size="lg" variant="outline" className="border-paper/40 text-paper hover:bg-paper hover:text-ink">
            Browse experiences
          </Button>
        </motion.div>

        {/* The two-path motif, introduced quietly in the hero */}
        <motion.div
          {...rise(0.44)}
          className="mt-16 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-xl2 border border-paper/20 text-sm"
        >
          <div className="bg-paper/10 px-5 py-4 backdrop-blur-sm">
            <p className="chapter-no text-gold-soft">Path 01</p>
            <p className="mt-1 font-display text-lg text-paper">Theme parks &amp; adventures</p>
          </div>
          <div className="bg-paper/10 px-5 py-4 backdrop-blur-sm">
            <p className="chapter-no text-gold-soft">Path 02</p>
            <p className="mt-1 font-display text-lg text-paper">Luxury cruises &amp; resorts</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
