import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Clock,
  Plane,
  HeartHandshake,
  Wrench,
  BadgeCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Accordion } from "@/components/ui/accordion";
import { Schema, breadcrumb } from "@/components/schema";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { photos } from "@/lib/images";
import { AGENT_APPLICATION_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Become a travel agent",
  description:
    "Join Next Chapter Travel as a travel agent. No experience required — get hands-on training and mentorship from specialists Wendy and Jessica, established supplier relationships, the booking tools, and a supportive team. Work from anywhere, set your own hours, and earn commission on every booking. Apply today.",
  alternates: { canonical: "/join" },
};

// Why join — the core pitch, four ways.
const reasons = [
  {
    icon: GraduationCap,
    title: "Real training, no experience needed",
    copy: "We teach you the business from the ground up — suppliers, booking, and how to plan a trip start to finish. If you love travel, we can build the rest.",
  },
  {
    icon: HeartHandshake,
    title: "Mentorship from day one",
    copy: "Learn directly from Wendy (theme parks) and Jessica (cruises & resorts). You're never figuring it out alone — there's always someone to ask.",
  },
  {
    icon: Clock,
    title: "Your business, your schedule",
    copy: "Work from anywhere, part-time or full-time. Build it around your life — your family, your other work, your pace.",
  },
  {
    icon: Plane,
    title: "Earn commission & travel perks",
    copy: "Earn commission on every booking you make, and unlock the agent rates, familiarization trips, and perks that come with the industry.",
  },
];

// What's included once you're on the team.
const included = [
  {
    icon: Wrench,
    title: "The tools & the suppliers",
    copy: "Our booking platform and established relationships with cruise lines, Disney, Universal, resorts, and tour operators — ready for you on day one.",
  },
  {
    icon: BadgeCheck,
    title: "Credentials & certifications",
    copy: "Get set up under the agency's accreditations and work toward your own — CLIA, Disney, Universal, and cruise-line training programs.",
  },
  {
    icon: Sparkles,
    title: "Brand, marketing & community",
    copy: "Plan under a name clients already trust, with marketing support and a close-knit team that celebrates the wins together.",
  },
];

// The path to becoming an agent — tied to the brand's "chapter" device.
const steps = [
  { no: "01", title: "Apply", copy: "Fill out the short application — it takes just a few minutes. Tell us a little about you and why travel." },
  { no: "02", title: "Let's talk", copy: "If it looks like a fit, you'll have a relaxed conversation with Jess or Wendy about the opportunity and your questions." },
  { no: "03", title: "Onboard & train", copy: "Get set up with the tools and suppliers, and start training at a pace that works for you." },
  { no: "04", title: "Start booking", copy: "Plan your first trips with our team right beside you — and build your business from there." },
];

const faqs = [
  {
    q: "Do I need experience to become a travel agent?",
    a: "No. Most of our agents started with nothing more than a love of travel and a willingness to learn. We provide the training, the mentorship, and the supplier relationships — you bring the enthusiasm and the people skills.",
  },
  {
    q: "Is this a job or my own business?",
    a: "It's your own business. Agents are independent contractors (1099) running their own travel business under the Next Chapter Travel umbrella — with our brand, tools, suppliers, and support behind you. We'll walk you through exactly how it works during your conversation with us.",
  },
  {
    q: "How do agents get paid?",
    a: "Agents earn commission from the suppliers they book — cruise lines, resorts, theme parks, and tour operators pay a commission on each trip. We'll explain the details and what to expect when we talk.",
  },
  {
    q: "How much time does it take?",
    a: "That's up to you. Some of our agents do this full-time; others build it around a day job or family. You set your own hours and your own pace.",
  },
  {
    q: "Where can I work from?",
    a: "Anywhere in the United States. The whole business runs by phone, email, and text, so you can plan trips from home, on the road, or wherever you are.",
  },
  {
    q: "Does it cost anything to join?",
    a: "There's no cost to join Next Chapter Travel. Some standard industry certification and setup costs can apply as you get established, and we'll point you to those — but joining the agency itself is free. We're upfront about all of it before you commit to anything.",
  },
];

export default function JoinPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Schema
        data={breadcrumb([
          { name: "Home", path: "/" },
          { name: "Become an agent", path: "/join" },
        ])}
      />
      <Schema data={faqSchema} />

      <PageHero
        eyebrow="Join our team"
        title="Your next chapter could be helping others plan theirs."
        intro="Next Chapter Travel is growing — and we're looking for new agents to grow with us. No experience required. Just a love of travel, a heart for people, and the drive to build something of your own."
        photo={photos.flatlay}
      />

      {/* The opportunity, in plain terms. */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">The opportunity</p>
            <h2 className="display-2 mt-4 max-w-[18ch]">
              We&rsquo;ll teach you everything. You bring the passion.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4 text-ink/80">
              <p>
                Becoming a travel agent doesn&rsquo;t require a special degree or
                years in the industry. It takes someone who loves to travel,
                loves to help people, and is ready to learn. We handle the rest.
              </p>
              <p>
                As part of Next Chapter Travel, you&rsquo;ll be mentored by
                specialists, backed by an established agency, and set up with the
                suppliers and tools that take most agents years to build on their
                own. You focus on your clients and your growth — we&rsquo;ve got
                your back.
              </p>
              <p>
                Whether you&rsquo;re looking for a full-time career or a flexible
                side business, this is a real chance to turn the thing you love
                into the thing you do.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why join */}
      <section className="section bg-paper-deep">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">Why join us</p>
            <h2 className="display-2 mt-4 max-w-[20ch]">
              Everything you need to start strong.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, copy }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="surface h-full p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-paper text-clay">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-ink/70">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">What&rsquo;s included</p>
            <h2 className="display-2 mt-4 max-w-[20ch]">
              A head start most agents never get.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {included.map(({ icon: Icon, title, copy }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-paper text-clay">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to become an agent — the chapter device */}
      <section className="section bg-ink text-cream">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow !text-cream/90">How it works</p>
            <h2 className="display-2 mt-4 max-w-[20ch] text-cream">
              From application to your first booking.
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.no} delay={i * 0.08}>
                <li className="relative rounded-xl2 bg-cream/[0.06] p-7 ring-1 ring-inset ring-cream/15">
                  <span className="chapter-no !text-gold-soft">Step {s.no}</span>
                  <h3 className="mt-3 font-display text-xl font-bold text-cream">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/75">{s.copy}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-paper-deep">
        <div className="container-x max-w-3xl">
          <Reveal>
            <p className="eyebrow">Good to know</p>
            <h2 className="display-2 mt-4 max-w-[18ch]">
              Questions from future agents.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8">
              <Accordion items={faqs} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Apply CTA → Typeform */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-xl2 px-6 py-16 text-center text-cream sm:px-16 sm:py-20">
              <div className="horizon absolute inset-[-12%] -z-10" />
              <p className="eyebrow mx-auto !text-cream/90">Ready when you are</p>
              <h2 className="display-2 mx-auto mt-4 max-w-[20ch] text-cream">
                Start your next chapter.
              </h2>
              <p className="lede mx-auto mt-5 max-w-xl !text-cream/85">
                The application takes just a few minutes. Tell us about yourself —
                Jess and Wendy read every one, and we&rsquo;ll be in touch.
              </p>
              <div className="mt-9 flex justify-center">
                <Button href={AGENT_APPLICATION_URL} size="lg" variant="paper">
                  Apply to become an agent <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-5 text-sm text-cream/70">
                Looking to plan a trip instead?{" "}
                <Link
                  href="/plan-your-trip"
                  className="font-semibold text-cream underline underline-offset-4 hover:text-gold-soft"
                >
                  Start here
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
