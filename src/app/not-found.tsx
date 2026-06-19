import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[calc(100dvh-var(--header-h))] items-center overflow-hidden">
      <div className="horizon-soft absolute inset-0 -z-10" />
      <div className="container-x py-24 text-center">
        <p className="font-script text-7xl leading-none text-clay sm:text-8xl">404</p>
        <h1 className="display-2 mx-auto mt-4 max-w-[18ch] text-ink">
          This page wandered off the map.
        </h1>
        <p className="lede mx-auto mt-5 max-w-xl">
          The page you&rsquo;re looking for has moved on to its next chapter. Let&rsquo;s get
          you back to somewhere wonderful.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" size="lg" variant="solid">
            Back home
          </Button>
          <Button href="/plan-your-trip" size="lg" variant="outline">
            Plan a trip
          </Button>
        </div>

        <nav className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink/70">
          <Link href="/experiences" className="transition-colors hover:text-clay">
            Experiences
          </Link>
          <Link href="/how-it-works" className="transition-colors hover:text-clay">
            How it works
          </Link>
          <Link href="/about" className="transition-colors hover:text-clay">
            About
          </Link>
          <Link href="/faq" className="transition-colors hover:text-clay">
            FAQ
          </Link>
        </nav>
      </div>
    </section>
  );
}
