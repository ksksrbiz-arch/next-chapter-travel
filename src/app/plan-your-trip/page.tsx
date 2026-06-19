import type { Metadata } from "next";
import { Clock, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { LeadForm } from "@/components/lead-form";
import { ConvTrustStrip } from "@/components/conv-trust-strip";
import { Reveal } from "@/components/ui/reveal";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Plan your trip",
  description:
    "Tell us about the trip you've been meaning to take. Theme parks, cruises, or both — one of our agents will build a plan around you.",
};

const assurances = [
  { icon: Clock, title: "One business day", copy: "That's how fast you'll hear back from a real person — a real agent, not an auto-reply." },
  { icon: ShieldCheck, title: "Never a planning fee", copy: "We're paid by the suppliers we book, not by you — most of them actually prohibit planning fees. Full-service planning, no added cost." },
  { icon: Sparkles, title: "Matched to you", copy: "Your inquiry goes to an agent who specializes in the kind of trip you're planning, so you're in expert hands from day one." },
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
          <div>
            <Reveal variant="fade" className="mb-6">
              <p className="eyebrow">Start your inquiry</p>
              <h2 className="display-2 mt-3 max-w-[18ch]">
                Tell us about the trip.
              </h2>
            </Reveal>

            {/*
              TravelJoy inquiry embed — replace LeadForm below with the TravelJoy
              <iframe> when the owners provide the embed URL. Keep this wrapper so
              the page layout stays intact; drop the LeadForm import once the
              iframe is live. Example shape:

              <iframe
                src="https://app.traveljoy.com/inquiry/REPLACE-WITH-URL"
                title="Plan your trip inquiry form"
                className="surface min-h-[640px] w-full"
                loading="lazy"
              />
            */}
            <LeadForm />
          </div>

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

              <ConvTrustStrip />

              <div className="surface p-6">
                <p className="text-sm leading-relaxed text-ink/75">
                  Prefer to talk it through first? Email{" "}
                  <a href="mailto:nextchaptertravel26@gmail.com" className="font-semibold text-gold hover:text-ink">
                    nextchaptertravel26@gmail.com
                  </a>{" "}
                  or call{" "}
                  <a href="tel:+13367803389" className="font-semibold text-gold hover:text-ink">
                    336-780-3389
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
