"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/experiences", label: "Experiences" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/stories", label: "Stories" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        scrolled ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="container-x flex h-[var(--header-h)] items-center justify-between">
        <Link href="/" className="group flex items-baseline" aria-label="Next Chapter Travel home">
          <span className="font-script text-3xl leading-none text-ink transition-colors group-hover:text-clay">
            Next Chapter Travel
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium text-ink/70 transition-colors hover:text-ink",
                pathname.startsWith(item.href) && "text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/plan-your-trip" size="sm">
            Plan your trip
          </Button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-paper md:hidden">
          <nav className="container-x flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink/80 hover:bg-ink/5"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/plan-your-trip" className="mt-2 w-full">
              Plan your trip
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
