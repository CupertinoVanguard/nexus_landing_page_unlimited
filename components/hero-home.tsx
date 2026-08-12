import { WAITLIST_URL, DEMO_URL } from "@/lib/links";
import ContextGraph from "./context-graph";
// import LogoStrip from "./logo-strip";

export default function HeroHome() {
  return (
    <>
      <section className="relative flex min-h-[86svh] flex-col overflow-hidden bg-bg">
        {/* Live context graph behind the copy. The canvas itself does not
            take pointer events; ContextGraph listens on the window so the
            graph still reacts while the CTAs stay clickable. */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          {/* soft field glow, keeps the graph from reading as loose specks */}
          <div
            className="absolute left-1/2 top-[42%] h-[85vh] w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
            style={{
              background:
                "radial-gradient(closest-side, rgba(37,99,235,0.16), rgba(37,99,235,0.05) 52%, transparent 76%)",
            }}
          />

          <ContextGraph className="absolute inset-0 h-full w-full" />

          {/* vignette so the graph fades out at the frame rather than
              being sliced off at the section edges */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 100% 92% at 50% 42%, transparent 40%, var(--color-bg) 100%)",
            }}
          />
          {/* legibility scrim under the copy, resolving to solid at the
              section edge so the hero meets the logo strip without a seam */}
          <div
            className="absolute inset-x-0 bottom-0 h-[52%]"
            style={{
              background:
                "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--color-bg) 72%, transparent) 55%, var(--color-bg) 100%)",
            }}
          />
        </div>

        <div className="relative flex flex-1 flex-col justify-end px-6 pt-32 pb-24 sm:px-10 sm:pb-32">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl" data-aos="fade-up">
              {/* Pill-outlined backer credit. Rounded rather than the
                  sharp corners used elsewhere on the page, to match the
                  reference this is modelled on. */}
              <p className="inline-flex items-center gap-1.5 rounded-full border border-edge-strong px-4 py-1.5 font-mono text-[12px] tracking-[0.06em]">
                <span className="text-fg-muted">Backed by</span>
                <span className="font-medium text-accent">Character Capital</span>
              </p>
              <h1 className="mt-5 text-[27px] font-normal leading-[1.05] tracking-[-0.035em] text-fg min-[360px]:text-[32px] sm:text-[46px] lg:text-[50px] xl:text-[56px]">
                <span className="block whitespace-nowrap">The AI context engine</span>
                <span className="block whitespace-nowrap">for your deployments</span>
              </h1>
            </div>

            <div className="w-full max-w-md lg:pb-1" data-aos="fade-up">
              <p className="font-mono text-[15px] leading-relaxed text-fg-muted">
                Nexus breaks your deployment silos and automatically manages
                the fast-moving context behind each of your deployments.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={WAITLIST_URL}
                  className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap bg-accent px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-accent-hover"
                >
                  Join the waitlist
                  <span aria-hidden="true">&rarr;</span>
                </a>
                <a
                  href={DEMO_URL}
                  className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap bg-fg px-6 py-3 text-[14px] font-medium text-bg transition-colors hover:bg-fg-muted"
                >
                  Book a demo
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility logo strip parked for now. */}
      {/* <LogoStrip /> */}
    </>
  );
}
