import { ArrowRight, GraduationCap, Clock, Plane, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

/**
 * Home-page recruitment band. Jess and Wendy are growing the team, so the
 * agency site invites prospective agents alongside travelers — this is the
 * front-door pitch that links to the full /join page.
 */
const perks = [
  { icon: GraduationCap, label: "Training & mentorship", copy: "No experience needed — we teach you the business." },
  { icon: Clock, label: "Your own hours", copy: "Work from anywhere, part-time or full-time." },
  { icon: Plane, label: "Earn & travel", copy: "Commission on every booking, plus agent travel perks." },
  { icon: HeartHandshake, label: "A real team", copy: "Mentored by specialists, never on your own." },
];

export function BecomeAgent() {
  return (
    <section className="section bg-ink text-cream">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <Reveal>
          <p className="eyebrow !text-cream/90">Join our team</p>
          <h2 className="display-2 mt-4 max-w-[18ch] text-cream">
            Turn your love of travel into your next chapter.
          </h2>
          <p className="mt-5 max-w-xl text-cream/80">
            Next Chapter Travel is growing. We&rsquo;re bringing on new agents and
            training them from the ground up — the suppliers, the tools, and the
            know-how to plan trips people rave about. If you love travel and love
            helping people, there&rsquo;s a place for you here.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/join" variant="paper" size="lg">
              Become an agent <ArrowRight className="h-4 w-4" />
            </Button>
            <span className="text-sm text-cream/70">
              Mentored by Wendy &amp; Jessica.
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid gap-4 sm:grid-cols-2">
            {perks.map(({ icon: Icon, label, copy }) => (
              <li
                key={label}
                className="rounded-xl2 bg-cream/[0.06] p-6 ring-1 ring-inset ring-cream/15"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/20 text-gold-soft">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-cream">{label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cream/70">{copy}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
