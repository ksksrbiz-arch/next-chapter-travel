import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { CtaBanner } from "@/components/cta-banner";
import { unsplash } from "@/lib/images";
import { articles, getArticle } from "@/components/content-articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return { title: "Story not found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      images: [{ url: unsplash(article.photo.id, 1200), alt: article.photo.alt }],
    },
  };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <header className="relative isolate overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0 -z-10">
          <Image
            src={unsplash(article.photo.id, 2000)}
            alt={article.photo.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/55 to-ink/35" />
        </div>

        <div className="container-x pb-16 pt-[calc(var(--header-h)*0.4+3rem)] sm:pb-20 sm:pt-[calc(var(--header-h)*0.4+4rem)]">
          <Reveal>
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cream/85 transition-colors hover:text-cream"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to the journal
            </Link>
            <p className="eyebrow mt-6 text-cream/90">{article.category}</p>
            <h1 className="display-1 mt-4 max-w-[20ch] text-cream">
              {article.title}
            </h1>
            <p className="lede mt-6 max-w-2xl text-cream/85">{article.excerpt}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-cream/80">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <time dateTime={article.date}>{article.dateLabel}</time>
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {article.readTime} read
              </span>
            </div>
          </Reveal>
        </div>
      </header>

      <article className="section">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-prose">
              <p className="eyebrow text-clay">
                By {article.author}
              </p>
              <div className="mt-2 text-lg leading-relaxed">{article.body}</div>

              <hr className="mt-14 border-ink/10" />
              <p className="mt-8 text-sm text-stone">
                Written by the Next Chapter Travel team. We never charge a
                planning fee, and our agents work as a team to match you with the
                right fit for your trip.
              </p>
              <Link
                href="/stories"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-clay transition-colors hover:text-ink"
              >
                <ArrowLeft className="h-4 w-4" />
                More from the journal
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      <CtaBanner />
    </>
  );
}
