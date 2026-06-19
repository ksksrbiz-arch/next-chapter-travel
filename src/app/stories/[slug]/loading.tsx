import { Skeleton } from "@/components/ui/skeleton";

function HeroBand() {
  return (
    <section className="horizon-soft border-b border-ink/10">
      <div className="container-x pb-16 pt-[calc(var(--header-h)*0.4+3rem)] sm:pb-20 sm:pt-[calc(var(--header-h)*0.4+4rem)]">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="mt-6 h-6 w-28" />
        <Skeleton className="mt-4 h-14 w-[min(100%,32rem)]" />
        <Skeleton className="mt-6 h-5 w-[min(100%,36rem)]" />
        <Skeleton className="mt-3 h-5 w-[min(100%,24rem)]" />
        <Skeleton className="mt-7 h-5 w-56" />
      </div>
    </section>
  );
}

export default function StoryLoading() {
  return (
    <div aria-busy="true" aria-label="Loading">
      <HeroBand />
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-prose space-y-4">
            <Skeleton className="h-5 w-44" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
            <Skeleton className="mt-8 h-7 w-2/3" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
          </div>
        </div>
      </section>
    </div>
  );
}
