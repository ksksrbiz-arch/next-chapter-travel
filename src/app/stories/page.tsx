import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Trip ideas, planning guides, and destination inspiration from the Next Chapter Travel team.",
};

/** Placeholder posts. Swap for a Neon `blog_posts` query when content
 *  is ready (see lib/db.ts and db/schema.sql). */
const posts = [
  { slug: "first-disney-trip", title: "Planning your first Disney trip without losing your mind", expert: "Wendy", read: "6 min", category: "Theme parks" },
  { slug: "choosing-a-cruise", title: "How to choose a cruise when every ship looks the same", expert: "Jessica", read: "7 min", category: "Cruises" },
  { slug: "multigen-travel", title: "The multi-generation trip: one vacation, every age happy", expert: "Wendy & Jessica", read: "5 min", category: "Family" },
  { slug: "all-inclusive-worth-it", title: "Are all-inclusive resorts actually worth it?", expert: "Jessica", read: "4 min", category: "Resorts" },
];

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Stories"
        title="Ideas for your next chapter."
        intro="Planning guides, honest takes, and destination inspiration — written by the two people who plan these trips for a living."
      />

      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08}>
              <Link
                href={`/stories/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl2 border border-ink/10 bg-paper shadow-card transition-shadow hover:shadow-lift"
              >
                <div className="horizon-soft aspect-[16/9]" />
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-eyebrow text-gold">
                    <span>{p.category}</span>
                    <span className="text-stone">· {p.read}</span>
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-ink transition-colors group-hover:text-gold">
                    {p.title}
                  </h2>
                  <p className="mt-auto pt-5 text-sm text-stone">By {p.expert}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="container-x mt-12 text-center text-sm text-stone">
          Article pages are scaffolded as <code className="text-ink/70">/stories/[slug]</code> —
          wire them to the <code className="text-ink/70">blog_posts</code> table to publish.
        </p>
      </section>

      <CtaBanner />
    </>
  );
}
