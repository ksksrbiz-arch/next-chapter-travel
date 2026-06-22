import type { Metadata } from "next";
import { LegalDoc, P, Ul, Li, S, type LegalSection } from "@/components/legal-doc";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Next Chapter Travel collects, uses, shares, and protects your personal information when you use our website and our travel-planning services.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "June 22, 2026";

const sections: LegalSection[] = [
  {
    id: "overview",
    heading: "Overview",
    body: (
      <>
        <P>
          <S>Next Chapter Travel, LLC</S> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
          respects your privacy. This Privacy Policy explains what information we collect when you
          use our website or ask us to plan or book travel, how we use it, when we share it, and the
          choices you have.
        </P>
        <P>
          We collect only what we need to help you travel well, we never sell your personal
          information, and we ask the same care of the partners who handle data for us.
        </P>
      </>
    ),
  },
  {
    id: "what-we-collect",
    heading: "Information we collect",
    body: (
      <>
        <P>
          <S>Information you give us.</S> When you submit an inquiry, request a quote, or book travel,
          you may provide:
        </P>
        <Ul>
          <Li>Contact details &mdash; name, email address, and phone number.</Li>
          <Li>
            Trip details &mdash; destinations, dates, party size, budget, occasion, and preferences.
          </Li>
          <Li>
            Traveler details needed to book &mdash; for each traveler, the information a Supplier
            requires, which can include full legal name, date of birth, and (for some international
            or cruise bookings) passport or other document information.
          </Li>
          <Li>
            Anything else you choose to share in messages, emails, calls, or forms.
          </Li>
        </Ul>
        <P>
          <S>Information collected automatically.</S> Like most websites, when you visit we may
          receive basic technical and usage data &mdash; such as IP address, device and browser
          type, pages viewed, and referring links &mdash; through cookies and similar technologies
          and through our hosting and analytics providers.
        </P>
        <P>
          We do not knowingly collect more sensitive information than a booking requires, and we ask
          that you share document numbers (like passport details) only when a confirmed booking
          actually calls for them, and through a secure method we point you to.
        </P>
      </>
    ),
  },
  {
    id: "how-we-use",
    heading: "How we use your information",
    body: (
      <>
        <P>We use the information we collect to:</P>
        <Ul>
          <Li>Respond to your inquiry and prepare quotes and itineraries.</Li>
          <Li>Plan, book, and service your travel with the relevant Suppliers.</Li>
          <Li>Communicate with you about your trip, including reminders and documents.</Li>
          <Li>
            Route your inquiry to the agent on our team best suited to your kind of trip.
          </Li>
          <Li>Improve our website and services.</Li>
          <Li>
            Comply with legal obligations and protect our rights, our travelers, and our business.
          </Li>
          <Li>
            Send occasional updates or offers <S>only if</S> you&rsquo;ve asked to hear from us &mdash;
            you can opt out at any time.
          </Li>
        </Ul>
      </>
    ),
  },
  {
    id: "how-we-share",
    heading: "How we share your information",
    body: (
      <>
        <P>We share personal information only as needed to provide our services:</P>
        <Ul>
          <Li>
            <S>Travel Suppliers.</S> To book and service your travel, we share the relevant traveler
            information with the cruise lines, resorts, hotels, theme parks, tour operators, and
            other Suppliers involved in your trip. They use it under their own privacy policies.
          </Li>
          <Li>
            <S>Service providers.</S> We use trusted vendors to run our business &mdash; for example,
            website hosting, our inquiry/booking-form and client-management tools, and email. They
            may process your information on our behalf and are expected to protect it and use it only
            for the services they provide to us.
          </Li>
          <Li>
            <S>Our host agency / accreditation partners,</S> where required to process or service a
            booking.
          </Li>
          <Li>
            <S>Legal and safety.</S> When required by law, or to protect the rights, property, or
            safety of our travelers, the public, or us.
          </Li>
          <Li>
            <S>Business transfers.</S> In connection with a merger, sale, or other business
            transaction, consistent with this policy.
          </Li>
        </Ul>
        <P>
          <S>We do not sell your personal information,</S> and we do not share it for third-party
          advertising.
        </P>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies and analytics",
    body: (
      <P>
        We use cookies and similar technologies to keep the site working, remember preferences, and
        understand how the site is used so we can improve it. You can control cookies through your
        browser settings; blocking some cookies may affect how parts of the site function. If we use
        analytics tools, they help us see aggregate trends &mdash; not to identify you personally.
      </P>
    ),
  },
  {
    id: "retention",
    heading: "How long we keep it",
    body: (
      <P>
        We keep personal information for as long as needed to provide our services, maintain your
        travel history so future planning is easier, and meet legal, accounting, and recordkeeping
        requirements. When information is no longer needed, we take reasonable steps to delete or
        de-identify it. You can ask us to delete your information sooner (see your choices below).
      </P>
    ),
  },
  {
    id: "your-choices",
    heading: "Your choices and rights",
    body: (
      <>
        <P>You can, at any time:</P>
        <Ul>
          <Li>Ask what personal information we hold about you and request a copy.</Li>
          <Li>Ask us to correct or update inaccurate information.</Li>
          <Li>
            Ask us to delete your information, subject to bookings in progress and records we must
            keep by law.
          </Li>
          <Li>Opt out of marketing emails &mdash; every message includes a way to unsubscribe.</Li>
        </Ul>
        <P>
          Depending on where you live, you may have additional rights under applicable privacy laws.
          To exercise any of these, just contact us using the details below; we may need to verify
          your identity before acting on a request.
        </P>
      </>
    ),
  },
  {
    id: "security",
    heading: "How we protect your information",
    body: (
      <P>
        We use reasonable administrative, technical, and physical safeguards to protect personal
        information. No method of transmission or storage is completely secure, however, so we
        can&rsquo;t guarantee absolute security. Please send sensitive details (like passport
        numbers) only through the secure method we provide, and never include them in a plain email
        unless we&rsquo;ve asked you to.
      </P>
    ),
  },
  {
    id: "children",
    heading: "Children’s privacy",
    body: (
      <P>
        Our website is intended for adults planning travel. We don&rsquo;t knowingly collect
        personal information directly from children under 13. We do collect details about minors{" "}
        <S>from the booking adult</S> when a trip includes them (for example, a child&rsquo;s name
        and age for a family vacation), and we handle that information with the same care described
        here. If you believe a child has provided us information directly, please contact us and
        we&rsquo;ll delete it.
      </P>
    ),
  },
  {
    id: "third-parties",
    heading: "Third-party websites",
    body: (
      <P>
        Our site links to Supplier sites and tools that have their own privacy practices. This
        policy covers only Next Chapter Travel. We encourage you to review the privacy policies of
        any third-party site you visit or any booking tool you use.
      </P>
    ),
  },
  {
    id: "us-note",
    heading: "Where your information is handled",
    body: (
      <P>
        We are based in the United States and operate here. If you contact us from outside the U.S.,
        you understand your information will be processed in the U.S., where privacy laws may differ
        from those in your location.
      </P>
    ),
  },
  {
    id: "changes-policy",
    heading: "Changes to this policy",
    body: (
      <P>
        We may update this Privacy Policy from time to time. We&rsquo;ll revise the &ldquo;Last
        updated&rdquo; date above and, for material changes, take reasonable steps to let you know.
        Your continued use of the site after an update means you accept the revised policy.
      </P>
    ),
  },
  {
    id: "contact",
    heading: "Contact us",
    body: (
      <>
        <P>To ask a question or exercise a privacy right, reach us at:</P>
        <Ul>
          <Li>
            <S>Next Chapter Travel, LLC</S> &middot; Lexington, NC 27292
          </Li>
          <Li>
            Email:{" "}
            <a className="font-semibold text-clay hover:underline" href="mailto:nextchaptertravel26@gmail.com">
              nextchaptertravel26@gmail.com
            </a>
          </Li>
          <Li>
            Phone:{" "}
            <a className="font-semibold text-clay hover:underline" href="tel:+13367803389">
              336-780-3389
            </a>
          </Li>
        </Ul>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Privacy Policy"
      intro="What we collect, how we use it, and the choices you have. We collect only what we need to help you travel well — and we never sell your information."
      updated={UPDATED}
      sections={sections}
    />
  );
}
