"use client";

import Image from "next/image";
import HubSpot from "@/public/images/hubspot.png";
import Mixpanel from "@/public/images/mixpanel.png";
import GoogleAnalytics from "@/public/images/google-analytics.png";
import Amplitude from "@/public/images/amplitude.png";
import Posthog from "@/public/images/posthog.png";
import Snowflake from "@/public/images/snowflake.png";
import Neon from "@/public/images/neon_logo.png";
import Supabase from "@/public/images/supabase_background_removed.png";
import ClickUp from "@/public/images/clickup_background_removed.png";

type Logo = { src: any; alt: string };

const logosRow1: Logo[] = [
  { src: HubSpot, alt: "HubSpot" },
  { src: Mixpanel, alt: "Mixpanel" },
  { src: GoogleAnalytics, alt: "Google Analytics" },
  { src: Amplitude, alt: "Amplitude" },
  { src: Posthog, alt: "PostHog" },
];

const logosRow2: Logo[] = [
  { src: Snowflake, alt: "Snowflake" },
  { src: Neon, alt: "Neon" },
  { src: Supabase, alt: "Supabase" },
  { src: ClickUp, alt: "ClickUp" },
  { src: Amplitude, alt: "Amplitude" },
];

export default function IntegrationsTicker() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl pb-6 text-center">
            <h2 className="font-nacelle text-3xl md:text-4xl font-semibold text-white">
              Integrates with all your tools.
            </h2>
            <p className="mt-3 text-lg text-indigo-200/75">
              Bring your company knowledge together from ERPs, Microsoft Suite, Google Workspace, phone calls, communication tools, and more.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="relative"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                maskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <Ticker logos={logosRow1} durationSec={28} />
            </div>
            <div
              className="relative mt-6"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                maskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <Ticker logos={logosRow2} durationSec={32} reverse />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

function Ticker({ logos, durationSec, reverse = false }: { logos: Logo[]; durationSec: number; reverse?: boolean }) {
  const items = [...logos, ...logos];
  return (
    <div className="w-full">
      <ul
        className="flex items-center gap-6"
        style={{
          width: "200%",
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${durationSec}s linear infinite`,
        }}
      >
        {items.map((logo, idx) => (
          <li key={idx} className="flex-shrink-0">
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gray-800/40">
              <Image src={logo.src} alt={logo.alt} className="object-contain" width={40} height={40} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


