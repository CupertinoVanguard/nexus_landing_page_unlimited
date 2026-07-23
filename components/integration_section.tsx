'use client'
import Image from "next/image";
import PostHog from "@/public/images/posthog.png";
import Braintrust from "@/public/images/braintrust_logo.png";
import GitHub from "@/public/images/github_logo.png";
import Slack from "@/public/images/slack.png";
import Linear from "@/public/images/linear.png";
import Langfuse from "@/public/images/langfuse_logo.png";
import LangSmith from "@/public/images/langsmith.png";

const LOGOS = [
  { src: Langfuse, alt: "Langfuse" },
  { src: Braintrust, alt: "Braintrust" },
  { src: LangSmith, alt: "LangSmith" },
  { src: PostHog, alt: "PostHog" },
  { src: GitHub, alt: "GitHub" },
  { src: Linear, alt: "Linear" },
  { src: Slack, alt: "Slack" },
];

export default function IntegrationSection() {
  return (
    <section className="relative border-t border-edge">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-16 md:py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="eyebrow mb-4">Integrations</p>
            <h2 className="font-nacelle text-2xl font-normal tracking-[-0.02em] text-fg md:text-3xl">
              Connect the tools you already use
            </h2>
          </div>

          {/* Logos are flattened to a single ink so the mixed source marks
              read as one system on the dark surface. */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
            {LOGOS.map((logo) => (
              <div
                key={logo.alt}
                title={logo.alt}
                className="group flex h-14 w-14 items-center justify-center rounded-xl border border-edge bg-surface transition-colors hover:border-edge-strong"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain opacity-60 transition-opacity group-hover:opacity-100"
                  width={26}
                  height={26}
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
            ))}
          </div>

          {/* Nexus fallback */}
          <div className="mt-14 text-center">
            <p className="font-mono text-[13px] text-fg-subtle">
              Don&apos;t have observability?
            </p>
            <p className="mt-3 text-lg font-medium tracking-tight text-fg">
              Just use Nexus.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-md border border-accent/50 bg-accent/10 px-4 py-2 font-mono text-sm text-accent-hover">
              <span className="text-fg-subtle">$</span>
              pip install nexus-library
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
