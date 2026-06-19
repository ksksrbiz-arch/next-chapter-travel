"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { unsplash, type Photo } from "@/lib/images";

export function PageHero({
  eyebrow,
  title,
  intro,
  photo,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  /** Optional full-bleed banner image. Omit for the gradient hero. */
  photo?: Photo;
}) {
  const sectionRef = React.useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Gentle parallax drift; disabled under reduced-motion.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12]);

  const hasPhoto = Boolean(photo);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden border-b border-ink/10"
    >
      {hasPhoto ? (
        <>
          <motion.div
            className="absolute inset-0 -z-10"
            style={reduce ? undefined : { y, scale }}
          >
            <Image
              src={unsplash(photo!.id, 2000)}
              alt={photo!.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/55 to-ink/30" />
        </>
      ) : (
        <div className="horizon-soft absolute inset-0 -z-10" />
      )}

      <div className="container-x pb-16 pt-[calc(var(--header-h)*0.4+3rem)] sm:pb-20 sm:pt-[calc(var(--header-h)*0.4+4rem)]">
        <Reveal>
          <p className={`eyebrow ${hasPhoto ? "text-cream/90" : ""}`}>{eyebrow}</p>
          {reduce ? (
            <h1
              className={`display-1 mt-5 max-w-[18ch] ${hasPhoto ? "text-cream" : ""}`}
            >
              {title}
            </h1>
          ) : (
            <div className="mt-5 overflow-hidden">
              <motion.h1
                className={`display-1 max-w-[18ch] ${hasPhoto ? "text-cream" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                {title}
              </motion.h1>
            </div>
          )}
          {intro && (
            <p className={`lede mt-6 max-w-2xl ${hasPhoto ? "text-cream/85" : ""}`}>
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
