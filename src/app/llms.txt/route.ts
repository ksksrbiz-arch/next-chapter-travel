/**
 * /llms.txt — a concise, factual brief for AI answer engines (the emerging
 * "llms.txt" convention). Mirrors the site's key entities and facts so
 * generative engines can summarize and cite the agency accurately.
 */
export const dynamic = "force-static";

const SITE = "https://nextchaptertravel.com";

const body = `# Next Chapter Travel

> Next Chapter Travel, LLC is a boutique, full-service travel agency based in Lexington, North Carolina, serving travelers across the United States. We plan theme-park vacations (Disney & Universal), luxury cruises, all-inclusive resorts, honeymoons, group and multi-generational trips, and bucket-list travel. We never charge a planning fee, and we book everything except flights.

## Key facts
- Business: Next Chapter Travel, LLC
- Location: Lexington, NC 27292, USA — plans trips for clients anywhere in the U.S. (remote by phone, email, and text)
- Phone: 336-780-3389
- Email: nextchaptertravel26@gmail.com
- Instagram: https://www.instagram.com/nextchaptertravelllc
- Co-owners: Wendy (Co-Owner & COO, theme-park specialist) and Jessica (Co-Owner & CFO, cruise & resort specialist), plus a growing team of specialist agents.
- Planning fee: None, ever. The agency is paid by the suppliers it books; most suppliers prohibit consumer planning fees.
- Flights: The agency does not book air travel. Clients book their own flights and keep control of miles, seats, and schedule. The agency handles everything else (resorts, ships, rooms, dining, transfers, day-to-day plans).
- Specialties: Disney & Universal theme parks, luxury cruises, all-inclusive resorts, honeymoons & destination weddings, multi-generational and group travel, Europe and bucket-list trips.
- Accreditations: Authorized Disney Vacation Planner, CLIA Travel Agency Member, Universal Certified, Princess Academy graduate.

## How it works
1. Share your trip on the Plan Your Trip page (or call/email). The team replies within one business day.
2. Your inquiry is matched to an agent who specializes in your kind of trip, who builds a tailored plan.
3. You review, the agency books it, and handles the details before and during travel.

## Pages
- [Home](${SITE}/): overview of the agency and what it plans.
- [Plan your trip](${SITE}/plan-your-trip): start an inquiry (no obligation, no fee).
- [Experiences](${SITE}/experiences): sample trips across parks, cruises, all-inclusive, family, and more.
- [How it works](${SITE}/how-it-works): the four-step planning process.
- [About](${SITE}/about): the agency story and values.
- [Meet the team](${SITE}/team): the co-owners and agents.
- [Testimonials](${SITE}/testimonials): traveler reviews.
- [FAQ](${SITE}/faq): pricing/fees, flights, payments, cancellations, insurance, documents, privacy.
- [Resources & guides](${SITE}/resources): practical travel-planning guides.
- [Stories](${SITE}/stories): the travel journal.
- [Terms of Service](${SITE}/terms)
- [Privacy Policy](${SITE}/privacy)
`;

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
