'use client'
import Image from "next/image";
import PostHog from "@/public/images/posthog.png";
import Braintrust from "@/public/images/braintrust_logo.png";
import GitHub from "@/public/images/github_logo.png";
import Slack from "@/public/images/slack.png";
import Linear from "@/public/images/linear.png";
import Langfuse from "@/public/images/langfuse_logo.png";
import LangSmith from "@/public/images/langsmith.png";

const NAVY = "#1a56a0";

const LOGOS = [
  { src: Langfuse,   alt: "Langfuse",   invert: false },
  { src: Braintrust, alt: "Braintrust", invert: false },
  { src: LangSmith,  alt: "LangSmith",  invert: true  },
  { src: PostHog,    alt: "PostHog",    invert: false },
  { src: GitHub,     alt: "GitHub",     invert: true  },
  { src: Linear,     alt: "Linear",     invert: false },
  { src: Slack,      alt: "Slack",      invert: false },
];

export default function IntegrationSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-16">
          {/* Divider top */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent mb-12" />

          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-nacelle text-2xl font-semibold text-gray-900 md:text-3xl mb-3">
              Connect with tools you already use
            </h2>
          </div>

          {/* Logo row */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-10">
            {LOGOS.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center h-12 w-12 rounded-lg bg-white border border-gray-200 shadow-sm"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain"
                  width={28}
                  height={28}
                  style={logo.invert ? { filter: "invert(1)" } : {}}
                />
              </div>
            ))}
          </div>

          {/* Nexus fallback */}
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-3">
              Don&apos;t have observability?
            </p>
            <div className="inline-flex flex-col items-center gap-2">
              <p className="text-base font-semibold" style={{ color: NAVY }}>
                Just use Nexus.
              </p>
              <span
                className="inline-flex items-center px-4 py-2 text-sm font-mono font-medium rounded"
                style={{ borderWidth: 1, borderStyle: "solid", borderColor: NAVY, color: NAVY, background: `${NAVY}0d` }}
              >
                pip install nexus-library
              </span>
            </div>
          </div>

          {/* Divider bottom */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent mt-12" />
        </div>
      </div>
    </section>
  );
}
