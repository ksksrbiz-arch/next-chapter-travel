import { Skeleton } from "@/components/ui/skeleton";

function HeroBand() {
  return (
    <section className="horizon-soft border-b border-ink/10">
      <div className="container-x pb-16 pt-[calc(var(--header-h)*0.4+3rem)] sm:pb-20 sm:pt-[calc(var(--header-h)*0.4+4rem)]">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="mt-5 h-14 w-[min(100%,28rem)]" />
        <Skeleton className="mt-6 h-5 w-[min(100%,34rem)]" />
      </div>
    </section>
  );
}

export default function LegalLoading() {
  return (
    <div aria-busy="true" aria-label="Loading">
      <HeroBand />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16">
          {/* Table of contents */}
          <div className="hidden space-y-3 lg:block">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-40" />
            ))}
          </div>
          {/* Body */}
          <div className="max-w-prose space-y-10">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-7 w-64" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
