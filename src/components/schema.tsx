/**
 * Helpers for per-page structured data (JSON-LD). Crawlers and AI answer
 * engines read these to understand the page's entities. Render <Schema /> with
 * any schema.org object; use breadcrumb() for BreadcrumbList trails.
 */

export const SITE_URL = "https://nextchaptertravel.com";

export function Schema({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
