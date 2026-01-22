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
import Jira from "@/public/images/jira_background_removed.png";
import Zendesk from "@/public/images/zendesk.svg";
import Slack from "@/public/images/slack.png";
import FlowGraphic from "./flow-graphic";
import FlowGraphicCircular from "./flow-graphic-circular";
type Logo = { src: any; alt: string };

const logosCol1: Logo[] = [
  { src: HubSpot, alt: "HubSpot" },
  { src: Mixpanel, alt: "Mixpanel" },
  { src: GoogleAnalytics, alt: "Google Analytics" },
  { src: Amplitude, alt: "Amplitude" },
];

const logosCol2: Logo[] = [
  { src: Posthog, alt: "PostHog" },
  { src: Snowflake, alt: "Snowflake" },
  { src: Neon, alt: "Neon" },
  { src: Supabase, alt: "Supabase" },
];

const logosCol3: Logo[] = [
  { src: ClickUp, alt: "ClickUp" },
  { src: Jira, alt: "Jira" },
  { src: Zendesk, alt: "Zendesk" },
  { src: Slack, alt: "Slack" },
  // You can add two more logos here if you want to keep all columns at 4, or leave as is if only 10 total
];

export default function IntegrationsTicker() {
  return (
    <section className="relative" id="integration-ticker">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative border border-gray-800 rounded-3xl overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
          {/* Decorative ellipse/circle */}
          {/* <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" /> */}
          
          {/* Content wrapper */}
          <div className="relative md:flex md:flex-row md:items-center">
            {/* Header section */}
            <div className="px-4 sm:px-6 mb-8 md:mb-12">
              <h2 className="font-nacelle text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
                Integrates with all your tools.
              </h2>
              <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto font-medium tracking-tight leading-relaxed">
                Bring your company's insights and feedback platforms together from product analytics platforms, CRM's, ticketing platforms, communication tools, and more.
              </p>
            </div>

            {/* Ticker section - hidden on mobile, visible on md+ */}
            {/* <div className="hidden md:flex items-center justify-center gap-6 px-4">
              <div className="shrink-0">
                <TickerColumn logos={logosCol1} durationSec={15} />
              </div>
              <div className="shrink-0">
                <TickerColumn logos={logosCol2} durationSec={18} reverse />
              </div>
              <div className="shrink-0">
                <TickerColumn logos={logosCol3} durationSec={20} />
              </div>
            </div> */}

            {/* Mobile grid view - visible only on mobile - md:hidden (according to chat)*/}
            {/* <div className="md:hidden px-4">
              <div className="grid grid-cols-3 gap-3 max-w-full mx-auto">
                {[...logosCol1, ...logosCol2].slice(0, 9).map((logo, idx) => (
                  <div key={idx} className="flex items-center justify-center h-20 w-full rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-3">
                    <Image src={logo.src} alt={logo.alt} className="object-contain" width={40} height={40} />
                  </div>
                ))}
                
                
              </div>
            </div> */}
            {/* <div className="md:hidden gap-6 space-y-3 px-4">
              <div className="shrink-0">
                <HorizonalTickerColumn logos={logosCol1} durationSec={15} />
              </div>
              <div className="shrink-0">
                <HorizonalTickerColumn logos={logosCol2} durationSec={18} reverse />
              </div>
              <div className="shrink-0">
                <HorizonalTickerColumn logos={logosCol3} durationSec={20} />
              </div>
            </div> */}
            <FlowGraphic />
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
        @keyframes marqueeX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeXReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
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

function HorizonalTickerColumn({ logos, durationSec, reverse = false }: { logos: Logo[]; durationSec: number; reverse?: boolean }) {
  const items = [...logos, ...logos, ...logos, ...logos];
  return (
    <div className="w-full overflow-hidden">
      <ul
        className="flex flex-row items-center gap-3"
        style={{
          width: "400%",
          animation: `${reverse ? "marqueeXReverse" : "marqueeX"} ${durationSec}s linear infinite`,
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


