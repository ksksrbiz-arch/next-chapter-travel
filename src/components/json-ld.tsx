/**
 * Structured data (JSON-LD) for the agency. Rendered once in the root layout so
 * search engines and rich-result tools can surface the business identity,
 * service area, and contact details.
 */
export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Next Chapter Travel, LLC",
    description:
      "A boutique travel agency for theme-park adventures and luxury cruises. Two specialists, one agency, every detail handled.",
    url: "https://nextchaptertravel.com",
    telephone: "+1-336-780-3389",
    email: "nextchaptertravel26@gmail.com",
    image: "https://nextchaptertravel.com/opengraph-image",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lexington",
      addressRegion: "NC",
      postalCode: "27292",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    knowsAbout: [
      "Disney vacation planning",
      "Universal vacation planning",
      "Luxury cruise planning",
      "All-inclusive resorts",
      "Family travel",
    ],
    sameAs: ["https://www.instagram.com/nextchaptertravelllc"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
