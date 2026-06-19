"use client";

import * as React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Wraps a card in a subtle pointer-driven 3D tilt plus a soft cursor spotlight.
 * Purely an enhancement layer — children render normally; under
 * prefers-reduced-motion it returns a plain wrapper with no motion.
 */
export function TiltCard({
  children,
  className,
  max = 6,
  spotlight = true,
}: {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees on each axis. */
  max?: number;
  spotlight?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const [hover, setHover] = React.useState(false);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const springRx = useSpring(rx, { stiffness: 200, damping: 18 });
  const springRy = useSpring(ry, { stiffness: 200, damping: 18 });
  const spot = useMotionTemplate`radial-gradient(240px circle at ${px}% ${py}%, rgba(255,255,255,0.18), transparent 60%)`;

  if (reduce) return <div className={className}>{children}</div>;

  function handleMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    ry.set((x - 0.5) * max * 2);
    rx.set(-(y - 0.5) * max * 2);
    px.set(x * 100);
    py.set(y * 100);
  }

  function reset() {
    rx.set(0);
    ry.set(0);
    setHover(false);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={reset}
      style={{ rotateX: springRx, rotateY: springRy, transformPerspective: 1000 }}
      className={cn("relative [transform-style:preserve-3d]", className)}
    >
      {children}
      {spotlight && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-xl2 transition-opacity duration-300"
          style={{ background: spot, opacity: hover ? 1 : 0 }}
        />
      )}
    </motion.div>
  );
}
