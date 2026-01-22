'use client'
import Image from "next/image";

export default function IssueAction() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Two Column Layout: Text Left, Graphics Right */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            {/* Left Column - Cards */}
            <div className="order-2 md:order-1">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-1 w-1 rounded-full bg-[#02B8CC]"></div>
                  <span className="text-sm font-medium text-gray-400">
                    Automated Action
                  </span>
                </div>
                <h2 className="font-nacelle text-2xl font-semibold text-gray-200 md:text-3xl lg:text-4xl mb-6">
                  Automate changes through AI with complete context
                </h2>
              </div>
              
              {/* Two Options: Automated Action + Context/MCP */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Automated Action Option */}
                <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 rounded-xl p-4 border border-gray-700/50 backdrop-blur-sm">
                  <h3 className="font-nacelle text-lg font-semibold text-gray-200 mb-1">
                    Automated Action
                  </h3>
                  <p className="text-gray-400 text-xs">
                    Trigger AI-driven PR's and changes by approving actions.
                  </p>
                </div>

                {/* Context/MCP Option */}
                <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 rounded-xl p-4 border border-gray-700/50 backdrop-blur-sm">
                  <h3 className="font-nacelle text-lg font-semibold text-gray-200 mb-1">
                    Context/MCP
                  </h3>
                  <p className="text-gray-400 text-xs">
                    Code using coding agent with complete control over the context with your coding agent of choice.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Graphics */}
            <div className="order-1 md:order-2">
              {/* Main Image */}
              <div className="relative w-full">
                <div className="relative rounded-lg overflow-hidden bg-gray-900/50 border border-gray-700/50">
                  <Image
                    src="/images/action_area_nexus.gif"
                    alt="Automated Action Interface"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

