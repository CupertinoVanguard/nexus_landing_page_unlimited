"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";

/* Vertical click-through: a stacked list of steps on the left, a media
 * panel on the right that swaps to match whichever step is active.
 *
 * Each step uses a 16:9 product GIF. The media frame and the reserved active
 * copy height stay fixed, so switching steps never resizes the section.
 */
type Step = {
  id: string;
  title: string;
  body: string;
  media?: string;
};

const STEPS: Step[] = [
  {
    id: "capture",
    title: "Add Your Deployment",
    body: "Set up a new or existing deployment in natural language. Nexus sorts every relevant thread, ticket, code snippet, and stored doc into a self-updating knowledge graph automatically.",
    media: "/images/product/section-1.gif",
  },
  {
    id: "contextualize",
    title: "Contextualize",
    body: "Ask questions of one deployment or across all of them. The graph keeps learning and re-shaping the relationships between active deployments as work moves, and your agents query that same live context.",
    media: "/images/product/section-2.gif",
  },
  {
    id: "operate",
    title: "Leverage",
    body: "Auto-surface priorities and tasks for any deployment, plus the requests and complaints that repeat across them. Route any of it straight to your agents.",
    media: "/images/product/section-3.gif",
  },
  {
    id: "remember",
    title: "Unify",
    body: "Codify the processes, decisions, and skills that worked on similar deployments and use cases, so every new one starts on the shoulders of the last.",
    media: "/images/product/section-4.gif",
  },
];

/* Small per-step glyphs — just enough visual identity to tell the
 * placeholders apart at a glance until real footage replaces them. */
const ICONS: Record<string, ReactNode> = {
  capture: (
    <path
      d="M4 12h4l1.5 3h5L16 12h4M4 12l1.6-6.4A2 2 0 0 1 7.5 4h9a2 2 0 0 1 1.9 1.6L20 12M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  contextualize: (
    <path
      d="M12 3 3 8l9 5 9-5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  operate: (
    <path
      d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  remember: (
    <path
      d="M4 6c0-1.1 3.6-2 8-2s8 .9 8 2-3.6 2-8 2-8-.9-8-2Zm0 0v12c0 1.1 3.6 2 8 2s8-.9 8-2V6M4 12c0 1.1 3.6 2 8 2s8-.9 8-2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

function PlaceholderMedia({ step }: { step: Step }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden bg-surface">
      {/* faint grid, purely decorative */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-edge-strong) 1px, transparent 1px), linear-gradient(to bottom, var(--color-edge-strong) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* scan line, implies motion until a real capture lands here */}
      <div
        className="pointer-events-none absolute inset-x-0 h-px bg-accent/40"
        style={{ animation: "scan 3.2s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="relative h-9 w-9 text-fg-subtle"
        aria-hidden="true"
      >
        {ICONS[step.id]}
      </svg>
      <span className="relative font-mono text-[11px] uppercase tracking-[0.14em] text-fg-subtle">
        {step.title} preview
      </span>

      <style
        dangerouslySetInnerHTML={{
          __html: `@keyframes scan { 0% { top: 8%; opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { top: 92%; opacity: 0; } }`,
        }}
      />
    </div>
  );
}

export default function CapabilityShowcase() {
  const [active, setActive] = useState(0);
  const activeStep = STEPS[active];

  return (
    <section
      id="how-it-works"
      className="theme-dark relative w-full scroll-mt-16 bg-bg py-20 [--color-fg-muted:#cbc7c3] [--color-fg-subtle:#918b87] sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[320px_minmax(0,1fr)] xl:items-start xl:gap-12">
          {/* Vertical click-through list */}
          <ol className="relative flex flex-col border-l border-edge">
            {STEPS.map((s, i) => {
              const isActive = i === active;
              return (
                <li
                  key={s.id}
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className="group relative block h-full w-full py-4 pl-5 pr-3 text-left focus-visible:bg-surface/40 focus-visible:outline-none focus-visible:[box-shadow:inset_2px_0_0_var(--color-accent)] sm:pl-6 sm:pr-4"
                  >
                    <span
                      className={`absolute -left-px top-0 h-full w-px transition-colors duration-300 ${
                        isActive ? "bg-accent" : "bg-transparent group-hover:bg-edge-strong"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="mb-1.5 block font-mono text-[11px] tracking-[0.14em] text-fg-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`block text-[19px] font-normal tracking-[-0.01em] transition-colors ${
                        isActive ? "text-fg" : "text-fg-muted group-hover:text-fg"
                      }`}
                    >
                      {s.title}
                    </span>
                    <span
                      className={`grid transition-all duration-300 ${
                        isActive
                          ? "mt-2 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <span className="overflow-hidden">
                        <span className="block h-36 max-w-sm font-mono text-[14px] leading-relaxed text-fg-muted">
                          {s.body}
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Media panel — pops to match whichever step is active */}
          <div className="relative aspect-video w-full max-w-[860px] self-start justify-self-end overflow-hidden rounded-md border border-edge-strong bg-white">
            <div key={activeStep.id} className="absolute inset-0">
              {activeStep.media ? (
                <Image
                  src={activeStep.media}
                  alt={`${activeStep.title} product preview`}
                  fill
                  unoptimized
                  sizes="(min-width: 1280px) 860px, 100vw"
                  className="object-contain"
                />
              ) : (
                <PlaceholderMedia step={activeStep} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
