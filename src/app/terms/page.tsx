import type { Metadata } from "next";
import { LegalDoc, P, Ul, Li, S, type LegalSection } from "@/components/legal-doc";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the Next Chapter Travel website and our travel-planning services, including our role as a travel agency intermediary.",
  alternates: { canonical: "/terms" },
};

const UPDATED = "June 19, 2026";

const sections: LegalSection[] = [
  {
    id: "agreement",
    heading: "Agreement to these terms",
    body: (
      <>
        <P>
          These Terms of Service (the &ldquo;Terms&rdquo;) govern your access to and use of the
          website and the travel-planning services offered by{" "}
          <S>Next Chapter Travel, LLC</S> (&ldquo;Next Chapter Travel,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a limited liability company based in Lexington,
          North Carolina.
        </P>
        <P>
          By using our website, submitting an inquiry, or asking us to plan or book travel, you
          agree to these Terms. If you do not agree, please do not use the site or our services.
          If you are booking on behalf of others, you represent that you are authorized to accept
          these Terms for every traveler in your party and that you will share the relevant
          information and supplier terms with them.
        </P>
      </>
    ),
  },
  {
    id: "our-role",
    heading: "Our role — we act as your travel agent",
    body: (
      <>
        <P>
          Next Chapter Travel is a <S>travel agency that acts as an intermediary</S> between you and
          the third parties who actually provide your travel &mdash; cruise lines, resorts, hotels,
          theme parks, tour operators, transfer companies, and other suppliers
          (&ldquo;Suppliers&rdquo;). We arrange and book travel on your behalf; we do not own,
          operate, or control any Supplier or the services they provide.
        </P>
        <P>
          Every booking is also subject to the Supplier&rsquo;s own terms and conditions
          (for example, fare rules, deposit and payment schedules, change and cancellation
          policies, and conditions of carriage). Those Supplier terms are a contract between you and
          the Supplier. Where a Supplier&rsquo;s terms conflict with ours regarding the travel
          product itself, the Supplier&rsquo;s terms control for that product. We will make Supplier
          terms available to you before you commit to a booking.
        </P>
      </>
    ),
  },
  {
    id: "fees",
    heading: "How we are paid — no planning fees",
    body: (
      <>
        <P>
          <S>We do not charge planning or service fees.</S> For the large majority of bookings we
          are compensated by the Suppliers we book through commissions, and many of those Suppliers
          prohibit us from charging consumer planning fees. You pay the Supplier&rsquo;s published
          price for your travel; our planning comes at no added cost to you.
        </P>
        <P>
          In the rare event a particular request ever involved a third-party fee outside this model,
          we would disclose it clearly and obtain your written approval before doing any work or
          collecting anything.
        </P>
      </>
    ),
  },
  {
    id: "flights",
    heading: "Air travel (flights)",
    body: (
      <>
        <P>
          <S>We do not book airline tickets or arrange air travel.</S> For insurance and
          accreditation reasons, flights fall outside the services we provide. You are responsible
          for arranging and purchasing your own air travel.
        </P>
        <P>
          We recommend you do not purchase non-refundable flights until your land or cruise
          arrangements are confirmed, and that you allow sensible connection times around embarkation,
          park days, and check-in. We are happy to tell you the airports, dates, and timing your
          itinerary calls for &mdash; but the flight booking, any schedule changes, and any airline
          disputes remain between you and the airline.
        </P>
      </>
    ),
  },
  {
    id: "quotes",
    heading: "Quotes, pricing, and availability",
    body: (
      <>
        <P>
          Quotes and itineraries we prepare are proposals based on information available at the time.
          Prices, promotions, taxes, fees, and availability are set by the Suppliers and{" "}
          <S>are not guaranteed until your booking is confirmed and any required deposit is paid.</S>{" "}
          Until then, they may change or sell out.
        </P>
        <P>
          We work hard to keep information accurate, but we are not responsible for typographical
          errors, Supplier pricing mistakes, or changes a Supplier makes to its products, schedules,
          or policies.
        </P>
      </>
    ),
  },
  {
    id: "booking",
    heading: "Bookings, deposits, and payment",
    body: (
      <>
        <P>
          When you authorize a booking, you agree to the applicable Supplier&rsquo;s deposit and
          payment schedule. Payments are typically made to the Supplier or processed for the
          Supplier&rsquo;s account; we do not store your full payment card details.
        </P>
        <Ul>
          <Li>
            You authorize the charges associated with the travel you ask us to book, including
            deposits and final payments by their due dates.
          </Li>
          <Li>
            <S>Missed payment deadlines can cause a Supplier to cancel your booking</S> and may
            trigger the Supplier&rsquo;s cancellation penalties &mdash; please watch the dates we
            give you.
          </Li>
          <Li>
            You are responsible for reviewing your confirmation and documents promptly and telling
            us right away if anything is wrong.
          </Li>
        </Ul>
      </>
    ),
  },
  {
    id: "changes",
    heading: "Changes, cancellations, and refunds",
    body: (
      <>
        <P>
          Changes, cancellations, and refunds are governed by the <S>Supplier&rsquo;s</S> terms for
          your specific booking. Many travel products carry non-refundable deposits or cancellation
          penalties that increase as the travel date approaches, and some are non-refundable
          entirely.
        </P>
        <P>
          We will help you understand a Supplier&rsquo;s policy and assist with requesting changes or
          cancellations, but we cannot waive Supplier penalties, and any refund is issued by the
          Supplier on the Supplier&rsquo;s timeline. Because we charge no fees, we have nothing to
          refund on our side.
        </P>
      </>
    ),
  },
  {
    id: "insurance",
    heading: "Travel insurance",
    body: (
      <P>
        We <S>strongly recommend travel protection</S> for most trips, especially cruises,
        international travel, and anything booked far in advance. Travel insurance can help with
        cancellations, interruptions, medical emergencies, and more. We can share options, but the
        decision is yours; if you decline coverage, you accept the financial risk of cancellation
        or interruption. Always read a policy&rsquo;s terms so you know what is and isn&rsquo;t
        covered.
      </P>
    ),
  },
  {
    id: "documents",
    heading: "Travel documents, passports, visas, and health",
    body: (
      <>
        <P>
          <S>You are responsible for ensuring every traveler has valid travel documents</S> and
          meets all entry, health, and other requirements for the destinations on your itinerary,
          including passports, visas, and any required vaccinations or testing. Requirements vary by
          citizenship and can change.
        </P>
        <Ul>
          <Li>
            Names on your booking must <S>exactly match each traveler&rsquo;s government-issued
            ID/passport.</S> Name corrections may incur Supplier fees or require rebooking.
          </Li>
          <Li>
            Many destinations require a passport valid for at least six months beyond your travel
            dates.
          </Li>
          <Li>
            We can point you to official resources, but we do not provide legal, immigration, or
            medical advice and are not liable for denied boarding or entry due to documentation.
          </Li>
        </Ul>
      </>
    ),
  },
  {
    id: "your-info",
    heading: "Accuracy of the information you give us",
    body: (
      <P>
        You agree to provide accurate, complete, and current information for every traveler and to
        keep it up to date. We rely on what you give us to prepare quotes and make bookings, and we
        are not responsible for losses caused by inaccurate or incomplete information.
      </P>
    ),
  },
  {
    id: "suppliers",
    heading: "Third-party Suppliers and links",
    body: (
      <P>
        Your travel is delivered by independent Suppliers, and our site may link to third-party
        websites and booking tools (for example, a Supplier&rsquo;s site or our inquiry-form
        provider). We are not responsible for the content, products, services, or privacy practices
        of those third parties, and including a link does not imply our endorsement.
      </P>
    ),
  },
  {
    id: "liability",
    heading: "Disclaimers and limitation of liability",
    body: (
      <>
        <P>
          Because we act only as an agent arranging travel with independent Suppliers,{" "}
          <S>we are not liable for the acts, errors, omissions, or default of any Supplier or third
          party,</S> or for personal injury, death, property damage, delay, or other loss arising
          from a Supplier&rsquo;s products or services or from events beyond our reasonable control.
        </P>
        <P>
          Such events include, without limitation, weather, natural disasters, illness or epidemics,
          strikes, mechanical or itinerary changes, Supplier insolvency, government actions, civil
          unrest, and other circumstances commonly described as <S>force majeure.</S>
        </P>
        <P>
          The site and our planning assistance are provided &ldquo;as is&rdquo; without warranties of
          any kind. To the fullest extent permitted by law, and except where prohibited, our total
          liability to you for any claim relating to our services is limited to the amount of fees
          you paid <S>to Next Chapter Travel</S> for the service at issue &mdash; which, because we
          charge no planning fees, is typically zero. Nothing in these Terms limits liability that
          cannot be limited under applicable law.
        </P>
      </>
    ),
  },
  {
    id: "indemnity",
    heading: "Indemnification",
    body: (
      <P>
        You agree to indemnify and hold harmless Next Chapter Travel, LLC and its owners, employees,
        and agents from claims, losses, and expenses (including reasonable attorneys&rsquo; fees)
        arising out of your use of the site or services, your violation of these Terms, or your
        violation of a Supplier&rsquo;s terms or any law.
      </P>
    ),
  },
  {
    id: "ip",
    heading: "Intellectual property",
    body: (
      <P>
        The Next Chapter Travel name, logo, site design, and original content are owned by or
        licensed to us and are protected by intellectual-property laws. You may view and share the
        site for personal, non-commercial use, but you may not copy, reproduce, or use our branding
        or content for commercial purposes without our written permission.
      </P>
    ),
  },
  {
    id: "law",
    heading: "Governing law and disputes",
    body: (
      <P>
        These Terms are governed by the laws of the <S>State of North Carolina</S>, without regard
        to its conflict-of-laws rules. You agree that any dispute relating to these Terms or our
        services will be brought in the state or federal courts located in North Carolina, and you
        consent to their jurisdiction &mdash; except where applicable consumer-protection law gives
        you a non-waivable right to proceed elsewhere.
      </P>
    ),
  },
  {
    id: "changes-terms",
    heading: "Changes to these Terms",
    body: (
      <P>
        We may update these Terms from time to time. When we do, we&rsquo;ll revise the &ldquo;Last
        updated&rdquo; date above. Material changes take effect when posted, and your continued use
        of the site or our services after that means you accept the updated Terms.
      </P>
    ),
  },
  {
    id: "contact",
    heading: "Contact us",
    body: (
      <>
        <P>Questions about these Terms? We&rsquo;re happy to help.</P>
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

export default function TermsPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Terms of Service"
      intro="The plain-English terms that govern our website and our travel-planning services. Please read them — they explain our role as your travel agent and how bookings work."
      updated={UPDATED}
      sections={sections}
    />
  );
}
