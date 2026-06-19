"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Surface the error for monitoring; replace with your logging service.
    console.error(error);
  }, [error]);

  return (
    <section className="relative isolate flex min-h-[calc(100dvh-var(--header-h))] items-center overflow-hidden">
      <div className="horizon-soft absolute inset-0 -z-10" />
      <div className="container-x py-24 text-center">
        <p className="font-script text-6xl leading-none text-clay sm:text-7xl">Well, that&rsquo;s odd.</p>
        <h1 className="display-2 mx-auto mt-4 max-w-[20ch] text-ink">
          Something went sideways on our end.
        </h1>
        <p className="lede mx-auto mt-5 max-w-xl">
          Sorry about that — a hiccup kept this page from loading. Try again, and if it keeps
          happening, email us at{" "}
          <a className="font-semibold text-clay hover:underline" href="mailto:nextchaptertravel26@gmail.com">
            nextchaptertravel26@gmail.com
          </a>{" "}
          and we&rsquo;ll sort it out.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button onClick={() => reset()} size="lg" variant="solid">
            Try again
          </Button>
          <Button href="/" size="lg" variant="outline">
            Back home
          </Button>
        </div>
        {error.digest && (
          <p className="mt-8 text-xs text-stone">Reference: {error.digest}</p>
        )}
      </div>
    </section>
  );
}
