import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { LeadForm } from "@/components/lead-form";
import { ConvTrustStrip } from "@/components/conv-trust-strip";
import { ConvNextSteps } from "@/components/conv-next-steps";
import { ConvFormAssurances } from "@/components/conv-form-assurances";
import { Reveal } from "@/components/ui/reveal";
import { photos } from "@/lib/images";

export const metadata: Metadata = {
  title: "Plan your trip",
  description:
    "Tell us about the trip you've been meaning to take. Theme parks, cruises, or both — one of our agents will build a plan around you.",
};

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
              <p className="lede mt-5 max-w-[46ch]">
                Share a little and we&apos;ll match you with an agent who
                specializes in your kind of trip — no obligation, never a fee.
              </p>
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
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Why travelers start here
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  A few honest promises before you share anything.
                </p>
              </div>

              <ConvFormAssurances />

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

      <ConvNextSteps />
    </>
  );
}
