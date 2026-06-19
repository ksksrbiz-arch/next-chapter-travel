import { Compass, ShieldCheck, UserRound, BadgeCheck } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/ui/reveal";

/**
 * "Why work with us" value-prop band. Every claim here is already true in the
 * site's existing copy — specialist expertise, every detail handled, one
 * dedicated point of contact, and no planning fee on most trips. Kept honest:
 * no invented stats or awards.
 */
const props = [
  {
    icon: Compass,
    title: "Genuine specialist expertise",
    copy: "Not a booking engine — two specialists who plan these trips for a living and know where the magic (and the pitfalls) hide.",
  },
  {
    icon: ShieldCheck,
    title: "Every detail handled",
    copy: "Flights, rooms, dining, transfers, the little upgrades — we map it all so nothing is left to chance or to you.",
  },
  {
    icon: UserRound,
    title: "One dedicated point of contact",
    copy: "You work directly with Wendy or Jessica from first idea to welcome-home — never a call center, never a stranger.",
  },
  {
    icon: BadgeCheck,
    title: "No planning fee on most trips",
    copy: "Our planning comes at no extra cost on most trips. You get expert guidance without paying a premium for it.",
  },
];

export function HomeValueProps() {
  return (
    <section className="section bg-cream-deep">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Why work with us</p>
            <h2 className="display-2 mt-4 max-w-[20ch] text-ink">
              The difference is in who&rsquo;s planning it.
            </h2>
            <p className="lede mt-5">
              Anyone can book a trip. We design the kind you talk about for
              years — and we carry the weight of the details so you don&rsquo;t.
            </p>
          </div>
        </Reveal>

        <RevealGroup
          stagger={0.08}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {props.map(({ icon: Icon, title, copy }) => (
            <Reveal
              key={title}
              className="surface flex h-full flex-col p-7 transition-shadow duration-300 hover:shadow-lift"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-paper text-clay">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-extrabold text-ink">
                {title}
              </h3>
              <p className="mt-3 text-ink/75">{copy}</p>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
