import { Playfair_Display } from "next/font/google";
import ContextGraph from "./context-graph";
import { DEMO_URL } from "@/lib/links";

/* Closing card: a single full-bleed panel with a big serif line and one
 * CTA. The backdrop is a still frame of the same context graph the hero
 * animates, which bookends the page on the product's core idea without
 * running a second live canvas (and its rAF loop) further down the page.
 * Serif headline is the one deliberate typographic break from the rest of
 * the sans + mono site.
 */
const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export default function ClosingCta() {
  return (
    <section id="book-a-demo" className="w-full scroll-mt-16 bg-bg px-4 py-20 sm:px-10 sm:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-edge-strong">
        {/* Dawn gradient standing in for a photo backdrop. */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(180deg, #eaf1fd 0%, #f6f8fb 55%, #ffffff 100%)",
          }}
        />
        {/* Horizon glow — an echo of the hero's field, toned down. */}
        <div
          className="pointer-events-none absolute left-1/2 top-[38%] h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 blur-[120px]"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(closest-side, rgba(37,99,235,0.2), transparent 72%)",
          }}
        />
        {/* Still frame of the hero's context graph. */}
        <ContextGraph
          animated={false}
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
        {/* Film grain. */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05] mix-blend-overlay"
          aria-hidden="true"
        >
          <filter id="closing-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#closing-grain)" />
        </svg>
        {/* Vignette — a soft warm-gray edge fade instead of a dark one, just
            enough to frame the card without muddying a light panel. */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 40%, rgba(28,25,23,0.06) 100%)",
          }}
        />

        <div className="relative flex min-h-[300px] flex-col items-center justify-center px-3 py-14 text-center min-[380px]:px-4 sm:min-h-[380px] sm:px-8 sm:py-16">
          <h2
            className={`${serif.className} max-w-4xl text-[clamp(19px,6vw,48px)] leading-[1.12] tracking-[-0.02em] text-fg`}
          >
            <span className="block whitespace-nowrap">Let context speed up, not slow down</span>
            <span className="block whitespace-nowrap">your deployment motion today.</span>
          </h2>

          <a
            href={DEMO_URL}
            className="mt-10 inline-flex items-center gap-2 bg-fg px-6 py-3 text-[15px] font-medium text-bg transition-colors hover:bg-fg-muted"
          >
            Book a demo
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
