"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const SHOW_AFTER = 600;
// Mirrors the key the cookie banner writes once a choice is made.
const COOKIE_KEY = "nct-cookie-consent";

/**
 * Floating round "back to top" button anchored bottom-right. It fades in once
 * the visitor has scrolled past ~600px and smooth-scrolls to the top on click
 * (instant under reduced-motion). While the cookie-consent banner is still
 * showing (no stored choice yet) the button lifts itself well above the banner
 * so the two never share the bottom-right corner; once consent is recorded the
 * banner is gone and the button drops to its resting position.
 */
export function BackToTop() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = React.useState(false);
  const [bannerOpen, setBannerOpen] = React.useState(false);

  React.useEffect(() => {
    try {
      setBannerOpen(!window.localStorage.getItem(COOKIE_KEY));
    } catch {
      // localStorage unavailable — assume no banner, keep resting position.
    }
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: reduce ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "fixed right-6 z-[55] flex h-12 w-12 items-center justify-center rounded-full",
            "bg-ink text-cream shadow-lg shadow-ink/20 transition-[background-color,bottom] duration-300 hover:bg-clay",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
            // Lift clear of the cookie banner while it's open; rest low otherwise.
            bannerOpen ? "bottom-40 sm:bottom-32" : "bottom-6",
          )}
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
