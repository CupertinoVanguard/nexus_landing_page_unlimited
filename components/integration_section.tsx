'use client'
import Image from "next/image";
import IntegrationTickerGraphic from "./integration-ticker-graphic"


export default function IntegrationSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Two Column Layout: Graphic Left, Text Right */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            {/* Left Column - Graphics */}
            <div className="order-2 md:order-1">
              {/* One-Click Integrations Image */}
              <div className="mb-3">
                <div className="relative rounded-lg overflow-hidden bg-gray-900/50 border border-gray-700/50">
                  <Image
                    src="/images/integrations_change.gif"
                    alt="One-Click Integrations"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Integration Ticker */}
              <div className="p-3">
                <div className="relative">
                  <IntegrationTickerGraphic />
                </div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="order-1 md:order-2">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-1 w-1 rounded-full bg-[#02B8CC]"></div>
                  <span className="text-sm font-medium text-gray-400">
                    Integrations
                  </span>
                </div>
                <h2 className="font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl lg:text-5xl mb-6">
                  Connect Tools
                </h2>
              </div>
              
              <p className="text-lg text-gray-300 mb-6 max-w-md">
                Add Slack for alerts and pull in additional engineering context with GitHub and Linear.
              </p>

              <div className="mb-6 max-w-md">
                <p className="text-gray-300 text-sm leading-relaxed">
                  We meet you where you're at. Directly hook Nexus to where your logs already live with Braintrust, Langsmith, or Langfuse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

