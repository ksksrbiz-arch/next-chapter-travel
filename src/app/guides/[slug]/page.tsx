import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/ui/reveal";
import { Schema, breadcrumb, SITE_URL } from "@/components/schema";
import { unsplash } from "@/lib/images";
import { guides, getGuide } from "@/components/content-guides";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) {
    return { title: "Guide not found" };
  }
  return {
    title: guide.title,
    description: guide.summary,
    openGraph: {
      title: guide.title,
      description: guide.summary,
      images: [{ url: unsplash(guide.photo.id, 1200) }],
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) {
    notFound();
  }

  const guideSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.summary,
    image: unsplash(guide.photo.id, 1200),
    author: { "@type": "Organization", name: "Next Chapter Travel, LLC" },
    publisher: {
      "@type": "Organization",
      name: "Next Chapter Travel, LLC",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon` },
    },
    mainEntityOfPage: `${SITE_URL}/guides/${guide.slug}`,
  };
  const crumbs = breadcrumb([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: guide.title, path: `/guides/${guide.slug}` },
  ]);

  return (
    <>
      <Schema data={guideSchema} />
      <Schema data={crumbs} />
      <PageHero
        eyebrow={guide.kicker}
        title={guide.title}
        intro={guide.intro}
        photo={guide.photo}
      />

      <section className="section">
        <div className="container-x">
          <Reveal>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-clay transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              All guides
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 max-w-prose">{guide.body}</div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-12 max-w-prose border-t border-ink/10 pt-8 text-ink/70">
              This is a starting point, not a substitute for a plan built around
              you. Bring us your dates and the people you&apos;re traveling with,
              and we&apos;ll tailor the rest — no planning fee, ever.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
