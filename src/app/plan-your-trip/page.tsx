import type { Metadata } from "next";
import { Clock, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/ui/reveal";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Plan your trip",
  description:
    "Tell us about the trip you've been meaning to take. Theme parks, cruises, or both — one of our specialists will build a plan around you.",
};

const assurances = [
  { icon: Clock, title: "One business day", copy: "That's how fast you'll hear back from a real person — usually the one who'll plan your trip." },
  { icon: ShieldCheck, title: "No fee, most trips", copy: "We're paid by the suppliers, not you. Planning is free on the vast majority of bookings." },
  { icon: Sparkles, title: "Matched to you", copy: "You're routed to the specialist for your trip — parks to Wendy, cruises to Jessica." },
];

export default function PlanYourTripPage() {
  return (
    <>
      <PageHero
        eyebrow="The Dream"
        title="Let's plan your next chapter."
        intro="A few details is all we need to start. Tell us where you're dreaming of and who's coming — we'll take it from there."
        photo={photos.heroBeach}
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <LeadForm />

          <Reveal delay={0.1}>
            <div className="space-y-8 lg:pl-4">
              <h2 className="font-display text-2xl font-semibold text-ink">
                What happens next
              </h2>
              <ul className="space-y-6">
                {assurances.map((a) => (
                  <li key={a.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper-deep text-gold">
                      <a.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-ink">{a.title}</h3>
                      <p className="mt-1 text-sm text-ink/70">{a.copy}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="surface p-6">
                <p className="text-sm leading-relaxed text-ink/75">
                  Prefer to talk it through first? Email{" "}
                  <a href="mailto:hello@nextchaptertravel.com" className="font-semibold text-gold hover:text-ink">
                    hello@nextchaptertravel.com
                  </a>{" "}
                  and we'll set up a quick call.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
