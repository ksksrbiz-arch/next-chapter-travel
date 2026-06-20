import { SITE_URL } from "@/components/schema";

/**
 * Site-wide structured data (JSON-LD) rendered once in the root layout. Models
 * the agency as a TravelAgency/LocalBusiness and declares the WebSite, so
 * search engines and AI answer engines can surface an accurate, citable
 * picture of the business — who we are, where, what we do, and how to reach us.
 */
export function JsonLd() {
  const org = {
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: "Next Chapter Travel, LLC",
    legalName: "Next Chapter Travel, LLC",
    description:
      "A boutique, full-service travel agency planning theme-park vacations, luxury cruises, all-inclusive resorts, honeymoons, and bucket-list trips. We never charge a planning fee, and we book everything except flights so travelers keep control of their own air.",
    slogan: "Where every journey begins a new chapter",
    url: SITE_URL,
    telephone: "+1-336-780-3389",
    email: "nextchaptertravel26@gmail.com",
    image: `${SITE_URL}/opengraph-image`,
    logo: `${SITE_URL}/icon`,
    priceRange: "No planning fee",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lexington",
      addressRegion: "NC",
      postalCode: "27292",
      addressCountry: "US",
    },
    // Approximate Lexington, NC coordinates (city/ZIP centroid). Google uses
    // the Business Profile as the source of truth for the exact pin.
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.824,
      longitude: -80.2534,
    },
    // Placeholder availability — confirm/adjust to the agency's real hours.
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    areaServed: { "@type": "Country", name: "United States" },
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lexington",
        addressRegion: "NC",
        addressCountry: "US",
      },
    },
    founder: [
      { "@type": "Person", name: "Wendy", jobTitle: "Co-Owner & COO" },
      { "@type": "Person", name: "Jessica", jobTitle: "Co-Owner & CFO" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-336-780-3389",
      email: "nextchaptertravel26@gmail.com",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
    knowsAbout: [
      "Disney vacation planning",
      "Universal Orlando vacation planning",
      "Luxury cruise planning",
      "All-inclusive resorts",
      "Honeymoons and destination weddings",
      "Multi-generational family travel",
      "Europe and bucket-list travel",
    ],
    makesOffer: [
      "Theme-park vacation planning (Disney & Universal)",
      "Luxury cruise planning",
      "All-inclusive resort planning",
      "Honeymoon & romance travel",
      "Group & multi-generational travel",
    ].map((name) => ({
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "0",
        priceCurrency: "USD",
        description: "No planning fee",
      },
      itemOffered: {
        "@type": "Service",
        name,
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    })),
    sameAs: ["https://www.instagram.com/nextchaptertravelllc"],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Next Chapter Travel",
    description:
      "Boutique travel agency for theme parks, cruises, all-inclusive resorts, and bucket-list trips. No planning fees.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };

  const schema = { "@context": "https://schema.org", "@graph": [org, website] };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
