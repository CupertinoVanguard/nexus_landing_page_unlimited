import { WAITLIST_URL, DEMO_URL } from "@/lib/links";

export default function HeroHome() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-bg pt-24 pb-16">
      {/* Static ambient wash — no motion. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-1/2 top-1/2 h-[760px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(37,99,235,0.22), rgba(37,99,235,0.05) 55%, transparent 75%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="relative mx-auto w-full max-w-4xl px-6 text-center">
        <a
          href="https://www.character.vc/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-edge-strong bg-surface/70 px-3.5 py-1.5 text-[13px] text-fg-muted backdrop-blur-sm transition-colors hover:border-fg-ghost hover:text-fg"
          data-aos="fade-up"
        >
          <span>Backed by</span>
          <span className="rounded-sm bg-accent px-1.5 py-0.5 text-[11px] font-semibold tracking-tight text-white">
            Character Capital
          </span>
        </a>

        <h1
          className="mt-8 text-[40px] font-normal leading-[1.05] tracking-[-0.03em] text-fg sm:text-[56px]"
          data-aos="fade-up"
        >
          Your AI deployment brain
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl font-mono text-[15px] leading-relaxed text-fg-muted"
          data-aos="fade-up"
        >
          Break the silos and operate an AI FDE that never forgets anything for
          your deployment motion
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          data-aos="fade-up"
        >
          <a
            href={WAITLIST_URL}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-accent-hover sm:w-auto"
          >
            Join the waitlist
            <span aria-hidden="true">&rarr;</span>
          </a>
          <a
            href={DEMO_URL}
            className="inline-flex w-full items-center justify-center rounded-full border border-edge-strong px-6 py-3 text-[15px] text-fg-muted transition-colors hover:border-fg-ghost hover:text-fg sm:w-auto"
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}
