import type { MetadataRoute } from "next";

const BASE_URL = "https://nextchaptertravel.com";

const routes = [
  "/",
  "/about",
  "/team",
  "/experiences",
  "/how-it-works",
  "/plan-your-trip",
  "/testimonials",
  "/stories",
  "/resources",
  "/faq",
  "/terms",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
