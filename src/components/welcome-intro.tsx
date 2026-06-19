"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { photos, unsplash } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Home "Welcome" section — the brand's warm, plain-spoken introduction. */
export function WelcomeIntro() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Track the collage as it moves through the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Gentle, opposing parallax on the two layers — eased with a spring so the
  // motion settles rather than tracking the scrollbar 1:1.
  const tallRaw = useTransform(scrollYProgress, [0, 1], [36, -36]);
  const insetRaw = useTransform(scrollYProgress, [0, 1], [-48, 28]);
  const tallY = useSpring(tallRaw, { stiffness: 120, damping: 30, mass: 0.4 });
  const insetY = useSpring(insetRaw, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section className="section bg-cream">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Left — copy */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="eyebrow items-start">Welcome</p>
          <h2 className="display-2 mt-3 max-w-[18ch] text-ink">
            Where every journey begins a new chapter
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/80">
            <p>
              At Next Chapter Travel, we believe travel should be effortless,
              exciting, and completely tailored to you.
            </p>
            <p>
              Whether you&rsquo;re dreaming of turquoise waters, magical theme parks,
              romantic getaways, or bucket-list adventures across the globe, we handle
              every detail so you can focus on what matters most: the experience.
            </p>
            <p>
              From the first idea to the moment you return home, we&rsquo;re here to
              guide you every step of the way.
            </p>
            <p className="font-script text-3xl text-clay">
              ✨ Your next adventure starts here.
            </p>
          </div>

          <div className="mt-8">
            <Button href="/plan-your-trip" size="lg" variant="solid">
              Start planning
            </Button>
          </div>
        </motion.div>

        {/* Right — layered photo collage with scroll-parallax depth */}
        <div
          ref={ref}
          className="relative mx-auto aspect-[4/5] w-full max-w-md lg:mr-0"
        >
          {/* Soft warm halo seats the collage in the cream band */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-paper/50 blur-2xl"
          />
          {/* Tall hero image */}
          <motion.div
            style={reduce ? undefined : { y: tallY }}
            className="group absolute inset-x-6 top-0 bottom-10 overflow-hidden rounded-xl2 shadow-lift ring-1 ring-ink/10"
          >
            <Image
              src={unsplash(photos.overwater.id, 1200)}
              alt={photos.overwater.alt}
              fill
              sizes="(min-width: 1024px) 32rem, 90vw"
              className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-105"
            />
            {/* Warm depth wash to seat the image in the cream section */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
          </motion.div>

          {/* Offset inset — glass-framed, sits in front for depth */}
          <motion.div
            style={reduce ? undefined : { y: insetY }}
            className="group absolute -bottom-2 -right-1 w-2/5 overflow-hidden rounded-2xl bg-cream/70 p-1.5 shadow-lift ring-1 ring-ink/10 backdrop-blur-md sm:-right-4"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src={unsplash(photos.santorini.id, 900)}
                alt={photos.santorini.alt}
                fill
                sizes="(min-width: 1024px) 13rem, 36vw"
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
