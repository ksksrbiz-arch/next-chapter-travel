import * as React from "react";
import { PageHero } from "@/components/page-hero";

/**
 * Shared presentation for long-form legal/policy pages (Terms, Privacy).
 * Renders a PageHero, a sticky in-page table of contents, and numbered
 * sections with anchor links. Content lives in each page; this only styles it.
 *
 * NOTE FOR THE OWNERS: this is a thorough, plain-English starting point written
 * for a host-agency travel business. Have a licensed attorney review it against
 * your suppliers' and host agency's requirements before relying on it.
 */
export type LegalSection = { id: string; heading: string; body: React.ReactNode };

// Small prose primitives so the page content stays readable.
export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-ink/80 leading-relaxed">{children}</p>;
}
export function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="ml-1 space-y-2">{children}</ul>;
}
export function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-ink/80 leading-relaxed">
      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay/60" />
      <span>{children}</span>
    </li>
  );
}
export function S({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}

export function LegalDoc({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="chapter-no text-clay">On this page</p>
              <nav aria-label="On this page" className="mt-4 border-l border-ink/10">
                {sections.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-ink/65 transition-colors hover:border-clay hover:text-clay"
                  >
                    <span className="tabular-nums text-ink/40">{String(i + 1).padStart(2, "0")}</span>{" "}
                    {s.heading}
                  </a>
                ))}
              </nav>
              <p className="mt-8 pl-4 text-xs text-stone">Last updated: {updated}</p>
            </div>
          </aside>

          {/* Body */}
          <div className="max-w-prose">
            {/* Mobile-only jump list (the sticky TOC above is desktop-only). A native
                <details> keeps it collapsible and keyboard-operable with no JS. */}
            <details className="group mb-8 rounded-xl2 border border-ink/10 bg-cream/40 lg:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-2 px-4 py-3 text-sm font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                On this page
                <span
                  aria-hidden
                  className="text-clay transition-transform group-open:rotate-180"
                >
                  ▾
                </span>
              </summary>
              <nav aria-label="On this page" className="border-t border-ink/10 px-2 pb-2">
                {sections.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex min-h-[44px] items-center gap-2 rounded-lg px-2 text-sm text-ink/70 transition-colors hover:text-clay"
                  >
                    <span className="tabular-nums text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                    {s.heading}
                  </a>
                ))}
              </nav>
            </details>
            <p className="text-sm text-stone lg:hidden">Last updated: {updated}</p>
            <div className="mt-2 space-y-12 lg:mt-0">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="font-display text-2xl font-bold text-ink">
                    <span className="text-clay">{String(i + 1).padStart(2, "0")}.</span>{" "}
                    {s.heading}
                  </h2>
                  <div className="mt-4 space-y-4">{s.body}</div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
