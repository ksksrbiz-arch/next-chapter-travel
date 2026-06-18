import Link from "next/link";

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

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-paper-deep">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-xs">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="chapter-no">N°</span>
            <span className="font-display text-xl font-semibold text-ink">Next Chapter Travel</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-ink/60">
            A boutique travel agency for theme-park adventures and luxury cruises.
            Two specialists, one agency, every detail handled.
          </p>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-stone">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink/70 transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-ink/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Next Chapter Travel, LLC. All rights reserved.</p>
          <p>Curated travel · Theme parks &amp; cruises · Independent agency</p>
        </div>
      </div>
    </footer>
  );
}
