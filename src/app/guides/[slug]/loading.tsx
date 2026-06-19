import { Skeleton } from "@/components/ui/skeleton";

function HeroBand() {
  return (
    <section className="horizon-soft border-b border-ink/10">
      <div className="container-x pb-16 pt-[calc(var(--header-h)*0.4+3rem)] sm:pb-20 sm:pt-[calc(var(--header-h)*0.4+4rem)]">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="mt-5 h-14 w-[min(100%,30rem)]" />
        <Skeleton className="mt-6 h-5 w-[min(100%,34rem)]" />
        <Skeleton className="mt-3 h-5 w-[min(100%,26rem)]" />
      </div>
    </section>
  );
}

export default function GuideLoading() {
  return (
    <div aria-busy="true" aria-label="Loading">
      <HeroBand />
      <section className="section">
        <div className="container-x">
          <Skeleton className="h-5 w-28" />
          <div className="mt-8 max-w-prose space-y-4">
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
            <Skeleton className="mt-8 h-8 w-2/3" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
          </div>
        </div>
      </section>
    </div>
  );
}
