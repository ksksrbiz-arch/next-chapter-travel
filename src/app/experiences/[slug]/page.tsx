import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { ExpDetailBody } from "@/components/exp-detail-body";
import { ExpDetailRelated } from "@/components/exp-detail-related";
import { getExpDetailContent } from "@/components/exp-detail-content";
import { Schema, breadcrumb, SITE_URL } from "@/components/schema";
import { experiences } from "@/lib/data";
import { categoryPhoto, photos } from "@/lib/images";

export function generateStaticParams() {
  return experiences.map((exp) => ({ slug: exp.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const exp = experiences.find((e) => e.slug === slug);
  if (!exp) return { title: "Experience not found" };

  return {
    title: exp.title,
    description: exp.blurb,
  };
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exp = experiences.find((e) => e.slug === slug);
  if (!exp) notFound();

  const content = getExpDetailContent(exp.slug);
  const photo = categoryPhoto[exp.category] ?? photos.themePark;

  const related = experiences.filter((e) => e.slug !== exp.slug).slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: exp.title,
    description: exp.blurb,
    serviceType: "Travel planning",
    areaServed: exp.location,
    provider: { "@id": `${SITE_URL}/#organization` },
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "0",
        priceCurrency: "USD",
        description: "No planning fee — custom-quoted",
      },
    },
  };
  const crumbs = breadcrumb([
    { name: "Home", path: "/" },
    { name: "Experiences", path: "/experiences" },
    { name: exp.title, path: `/experiences/${exp.slug}` },
  ]);

  return (
    <>
      <Schema data={serviceSchema} />
      <Schema data={crumbs} />
      <PageHero
        eyebrow="Experience"
        title={exp.title}
        intro={exp.blurb}
        photo={photo}
      />

      <div className="container-x pt-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink/70">
          <Link
            href="/experiences"
            className="tap inline-flex items-center gap-1.5 font-medium text-clay transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All experiences
          </Link>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-gold" aria-hidden />
            {exp.location}
          </span>
          {exp.duration && (
            <span className="text-ink/60">{exp.duration}</span>
          )}
        </div>
      </div>

      <ExpDetailBody
        exp={exp}
        overview={content.overview}
        included={content.included}
        forYou={content.forYou}
      />

      <ExpDetailRelated items={related} />

      <CtaBanner />
    </>
  );
}
