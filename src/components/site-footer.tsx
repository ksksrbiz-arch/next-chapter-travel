import Link from "next/link";
import { Instagram, MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-paper-deep";

const cols = [
  {
    title: "Plan",
    links: [
      { href: "/plan-your-trip", label: "Plan your trip" },
      { href: "/experiences", label: "Experiences" },
      { href: "/how-it-works", label: "How it works" },
    ],
  },
  {
    title: "Agency",
    links: [
      { href: "/about", label: "About us" },
      { href: "/team", label: "Meet the team" },
      { href: "/join", label: "Become an agent" },
      { href: "/testimonials", label: "Testimonials" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/stories", label: "Stories" },
      { href: "/resources", label: "Travel guides" },
      { href: "/faq", label: "FAQ" },
    ],
  },
];

// Agency accreditations, shown as text badges until licensed logos are dropped in.
const credentials = [
  "Authorized Disney Vacation Planner",
  "CLIA 2026 Travel Agency Member",
  "Universal Certified",
  "Princess Academy Graduate",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/15 bg-paper-deep">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <Link
            href="/"
            className={cn(
              "inline-block rounded-sm font-script text-3xl leading-none text-ink transition-colors duration-200 hover:text-clay",
              focusRing,
            )}
          >
            Next Chapter Travel
          </Link>
          <p className="mt-3 font-script text-xl text-clay">
            Where every journey begins a new chapter
          </p>
          <p className="mt-5 text-sm leading-relaxed text-ink/70">
            A boutique travel agency for theme-park adventures and luxury cruises.
            Real specialists, one agency, every detail handled.
          </p>

          <div className="mt-6 space-y-2 text-sm text-ink/80">
            <p className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
              <span>Next Chapter Travel, LLC · Lexington, NC 27292</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-clay" />
              <a
                href="tel:+13367803389"
                className={cn(
                  "inline-block rounded-sm py-0.5 underline-offset-4 transition-colors hover:text-clay hover:underline",
                  focusRing,
                )}
              >
                336-780-3389
              </a>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-clay" />
              <a
                href="mailto:nextchaptertravel26@gmail.com"
                className={cn(
                  "inline-block rounded-sm py-0.5 underline-offset-4 transition-colors hover:text-clay hover:underline",
                  focusRing,
                )}
              >
                nextchaptertravel26@gmail.com
              </a>
            </p>
          </div>

          <p className="mt-5 flex items-start gap-2.5 text-xs leading-relaxed text-ink/60">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-clay" aria-hidden="true" />
            <span>Your details stay private &mdash; no spam, ever.</span>
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.instagram.com/nextchaptertravelllc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Next Chapter Travel on Instagram"
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink/80 transition duration-200 ease-out hover:border-clay hover:bg-clay hover:text-cream motion-safe:hover:scale-110",
                focusRing,
              )}
            >
              <Instagram className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h3 className="text-xs font-bold uppercase tracking-eyebrow text-stone">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-1">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={cn(
                      "inline-block rounded-sm py-1.5 text-sm text-ink/75 underline-offset-4 transition-colors hover:text-clay hover:underline",
                      focusRing,
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Accreditations */}
      <div className="border-t border-ink/15">
        <ul
          aria-label="Agency accreditations"
          className="container-x flex flex-wrap items-center justify-center gap-3 py-7"
        >
          {credentials.map((c) => (
            <li
              key={c}
              className="rounded-full border border-ink/20 bg-paper px-4 py-1.5 text-xs font-semibold text-ink/75 transition-colors duration-200 ease-out hover:border-clay/50 hover:text-ink"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-ink/15">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-ink/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Next Chapter Travel, LLC. All rights reserved.</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/terms" className={cn("transition-colors hover:text-clay", focusRing)}>
              Terms of Service
            </Link>
            <Link href="/privacy" className={cn("transition-colors hover:text-clay", focusRing)}>
              Privacy Policy
            </Link>
            <Link href="/faq" className={cn("transition-colors hover:text-clay", focusRing)}>
              FAQ
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
