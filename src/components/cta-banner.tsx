"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CtaBanner() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Faint parallax + scale on the gradient so the panel breathes as it scrolls.
  const yRaw = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);
  const y = useSpring(yRaw, { stiffness: 120, damping: 30, mass: 0.4 });
  const scale = useSpring(scaleRaw, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div
            ref={ref}
            className="relative isolate overflow-hidden rounded-xl2 px-6 py-16 text-center text-cream sm:px-16 sm:py-20"
          >
            {/* Parallax gradient backdrop */}
            <motion.div
              style={reduce ? undefined : { y, scale }}
              className="horizon absolute inset-[-12%] -z-10"
            />
            {/* Floating soft accent for added depth */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-12 -z-10 h-48 w-48 rounded-full bg-gold/30 blur-3xl"
              animate={
                reduce ? undefined : { y: [0, -16, 0], opacity: [0.6, 0.9, 0.6] }
              }
              transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
            />

            <p className="eyebrow mx-auto !text-cream/90">Your next chapter</p>
            <h2 className="display-2 mx-auto mt-4 max-w-[20ch] text-cream">
              Tell us where you&apos;ve been meaning to go.
            </h2>
            <p className="lede mx-auto mt-5 max-w-xl !text-cream/85">
              Share a few details and one of us will be in touch — no pressure, no
              planning fee, ever. Just a real plan for your next chapter.
            </p>
            <div className="mt-9 flex justify-center">
              <Button
                href="/plan-your-trip"
                size="lg"
                variant="paper"
                className="transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5"
              >
                Start planning
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
