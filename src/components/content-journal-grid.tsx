import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { unsplash } from "@/lib/images";
import { articles } from "@/components/content-articles";

/** Grid of published journal articles, each linking to /stories/[slug]. */
export function JournalGrid() {
  return (
    <>
      <div className="grid gap-8 md:grid-cols-2">
        {articles.map((a, i) => (
          <Reveal key={a.slug} delay={(i % 2) * 0.08}>
            <Link
              href={`/stories/${a.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl2 border border-ink/10 bg-paper shadow-card transition-shadow hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={unsplash(a.photo.id, 1200)}
                  alt={a.photo.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:scale-[1.04]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold uppercase tracking-eyebrow text-ink shadow-card">
                  {a.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-eyebrow text-gold">
                  <span>{a.dateLabel}</span>
                  <span className="text-stone">· {a.readTime} read</span>
                </div>
                <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-ink">
                  {a.title}
                </h2>
                <p className="mt-3 text-sm text-ink/70">{a.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-clay">
                  Read the article
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <p className="mt-12 text-center text-sm text-stone">
        More articles are on the way — we add to the journal as we write.
      </p>
    </>
  );
}
