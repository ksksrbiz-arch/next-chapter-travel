import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { guides } from "@/components/content-guides";

/**
 * Premium "authority" guide cards for the Resources page. Each links to its
 * full /guides/[slug] page. Copy is genuine, honest travel-planning advice.
 */
export function GuideCards() {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {guides.map((g, i) => (
        <Reveal key={g.slug} delay={(i % 2) * 0.08}>
          <Link
            href={`/guides/${g.slug}`}
            className="surface group flex h-full flex-col p-8 transition-shadow duration-200 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-paper-deep text-gold">
                <g.icon className="h-6 w-6" aria-hidden />
              </span>
              <p className="font-script text-xl text-clay">{g.kicker}</p>
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-ink">
              {g.title}
            </h3>
            <p className="mt-3 text-ink/70">{g.summary}</p>
            <ul className="mt-6 space-y-2 border-t border-ink/10 pt-6 text-sm text-ink/75">
              {g.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <span className="mt-6 inline-flex items-center gap-2 font-bold tracking-wide text-clay">
              Read the guide
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover:translate-x-1"
                aria-hidden
              />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
