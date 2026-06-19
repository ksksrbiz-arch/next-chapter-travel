import { CalendarCheck, Compass, Wallet } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/ui/reveal";

/** Honest, benefit-led reassurance on how the engagement works financially. */
const points = [
  {
    icon: Wallet,
    title: "We never charge a planning fee",
    copy: "For the trips we plan most — parks, cruises, and all-inclusive escapes — our planning comes at no added cost to you.",
  },
  {
    icon: Compass,
    title: "Custom-quoted, never templated",
    copy: "Every itinerary is priced for the trip you actually want, with the options laid out plainly so you can choose with confidence.",
  },
  {
    icon: CalendarCheck,
    title: "Handled start to finish",
    copy: "From the first quote to the day you fly home, the bookings, perks, and details are managed for you — not handed back as homework.",
  },
] as const;

export function ExpReassurance() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="surface rounded-xl2 p-8 sm:p-12">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-clay">How it works</p>
            <h2 className="display-2 mt-4 text-ink">
              Premium planning, plainly priced
            </h2>
            <p className="lede mt-5 text-ink/75">
              Working with a specialist shouldn&apos;t mean a surprise invoice. Here&apos;s how
              the money side actually works.
            </p>
          </Reveal>

          <RevealGroup
            className="mt-12 grid gap-8 sm:grid-cols-3"
            stagger={0.08}
          >
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title}>
                  <div className="flex h-full flex-col">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-clay">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/75">{p.copy}</p>
                  </div>
                </Reveal>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
