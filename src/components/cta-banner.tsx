import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CtaBanner() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-xl2 px-6 py-16 text-center text-paper sm:px-16 sm:py-20">
            <div className="horizon absolute inset-0 -z-10" />
            <p className="eyebrow justify-center text-gold-soft before:bg-gold-soft/70">
              Chapter 01 — The Dream
            </p>
            <h2 className="display-2 mx-auto mt-4 max-w-[20ch] text-paper">
              Tell us where you've been meaning to go.
            </h2>
            <p className="lede mx-auto mt-5 max-w-xl text-paper/85">
              Share a few details and one of us will be in touch — no pressure, no
              planning fee on most trips. Just a real plan for your next chapter.
            </p>
            <div className="mt-9 flex justify-center">
              <Button href="/plan-your-trip" size="lg">
                Start planning
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
