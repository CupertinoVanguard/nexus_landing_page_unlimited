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

const logosCol1: Logo[] = [
  { src: HubSpot, alt: "HubSpot" },
  { src: Mixpanel, alt: "Mixpanel" },
  { src: GoogleAnalytics, alt: "Google Analytics" },
  { src: Amplitude, alt: "Amplitude" },
  { src: Posthog, alt: "PostHog" },
];

const logosCol2: Logo[] = [
  { src: Snowflake, alt: "Snowflake" },
  { src: Neon, alt: "Neon" },
  { src: Supabase, alt: "Supabase" },
  { src: ClickUp, alt: "ClickUp" },
  { src: GoogleAnalytics, alt: "Google Analytics" },
];

export default function IntegrationsTicker() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-16">
          <div className="relative flex items-center justify-between gap-6">
            <div className="shrink-0">
              <TickerColumn logos={logosCol1} durationSec={50} />
            </div>
            <div className="flex-1 flex h-full items-center justify-center px-2">
              <h2 className="font-nacelle whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white text-center">
                Integrates with all your tools
              </h2>
            </div>
            <div className="shrink-0">
              <TickerColumn logos={logosCol2} durationSec={58} reverse />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeY {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marqueeYReverse {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

function TickerColumn({ logos, durationSec, reverse = false }: { logos: Logo[]; durationSec: number; reverse?: boolean }) {
  const items = [...logos, ...logos, ...logos, ...logos];
  return (
    <div className="h-56 overflow-hidden">
      <ul
        className="flex flex-col items-center gap-3"
        style={{
          height: "400%",
          animation: `${reverse ? "marqueeYReverse" : "marqueeY"} ${durationSec}s linear infinite`,
        }}
      >
        {items.map((logo, idx) => (
          <li key={idx} className="flex-shrink-0">
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-white">
              <Image src={logo.src} alt={logo.alt} className="object-contain" width={36} height={36} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


