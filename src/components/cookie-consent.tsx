"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "nct-cookie-consent";

/**
 * Lightweight cookie-consent banner. Remembers the visitor's choice in
 * localStorage so it shows only once, links to the Privacy Policy, and renders
 * nothing until mounted (avoids a hydration mismatch). If you later add
 * analytics/marketing scripts, gate them on a stored value of "accepted".
 */
export function CookieConsent() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // localStorage unavailable (e.g. privacy mode) — just don't show it.
    }
  }, []);

  const decide = (choice: "accepted" | "declined") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="region"
          aria-label="Cookie consent"
          aria-live="polite"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: reduce ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div className="glass mx-auto flex max-w-3xl flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
            <Cookie className="hidden h-8 w-8 shrink-0 text-clay sm:block" aria-hidden="true" />
            <p className="flex-1 text-sm leading-relaxed text-ink/80">
              We use cookies to keep the site working and to understand how it&rsquo;s used so we
              can make it better. See our{" "}
              <Link href="/privacy" className="font-semibold text-clay underline-offset-2 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <Button onClick={() => decide("declined")} size="sm" variant="ghost">
                Decline
              </Button>
              <Button onClick={() => decide("accepted")} size="sm" variant="solid">
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
