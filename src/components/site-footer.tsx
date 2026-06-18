import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

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
      { href: "/testimonials", label: "Testimonials" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/stories", label: "Stories" },
      { href: "/resources", label: "Guides & FAQ" },
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
          <Link href="/" className="font-script text-3xl leading-none text-ink">
            Next Chapter Travel
          </Link>
          <p className="mt-3 font-script text-xl text-clay">
            Where every journey begins a new chapter
          </p>
          <p className="mt-5 text-sm leading-relaxed text-ink/70">
            A boutique travel agency for theme-park adventures and luxury cruises.
            Two specialists, one agency, every detail handled.
          </p>

          <div className="mt-6 space-y-2 text-sm text-ink/80">
            <p className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
              <span>Next Chapter Travel, LLC · Lexington, NC 27292</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-clay" />
              <a href="tel:+13367803389" className="transition-colors hover:text-clay">
                336-780-3389
              </a>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-clay" />
              <a href="mailto:hello@nextchaptertravel.com" className="transition-colors hover:text-clay">
                hello@nextchaptertravel.com
              </a>
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.facebook.com/"
              aria-label="Next Chapter Travel on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink/80 transition-colors hover:border-clay hover:bg-clay hover:text-cream"
            >
              <Facebook className="h-[18px] w-[18px]" />
            </a>
            <a
              href="https://www.instagram.com/"
              aria-label="Next Chapter Travel on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink/80 transition-colors hover:border-clay hover:bg-clay hover:text-cream"
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
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink/75 transition-colors hover:text-clay">
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
        <div className="container-x flex flex-wrap items-center justify-center gap-x-3 gap-y-3 py-7">
          {credentials.map((c) => (
            <span
              key={c}
              className="rounded-full border border-ink/20 bg-paper px-4 py-1.5 text-xs font-semibold text-ink/75"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-ink/15">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Next Chapter Travel, LLC. All rights reserved.</p>
          <p>Curated travel · Theme parks &amp; cruises · Independent agency</p>
        </div>
      </div>
    </footer>
  );
}
