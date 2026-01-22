'use client'

export default function DeepDive() {
  const rootCauseCards = [
    {
      status: "Logs",
      message: "Analyzing logs reveals agent repeatedly provides responses that don't fully address user intent. Pattern detected: agent gives technically correct answers but misses the underlying user need or context.",
    },
    {
      status: "Prompt",
      message: "Reviewing system prompt shows agent makes assumptions without validating user requirements. Agent provides solutions that don't align with stated goals or user expectations.",
    },
    {
      status: "Code",
      message: "Root cause identified: agent configuration needs model switch for specific scenarios. Current model lacks capabilities for this use case, requiring a different model that better handles the context and requirements.",
    }
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Header and Content Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            {/* Left Column - Header */}
            <div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-1 w-1 rounded-full bg-[#02B8CC]"></div>
                  <span className="text-sm font-medium text-gray-400">
                    Root-Cause
                  </span>
                </div>
                <h2 className="font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl lg:text-5xl mb-6">
                  Autonomous Deep Dives and Triaging
                </h2>
              </div>
              <p className="text-md text-gray-300 max-w-md">
                <span className="text-gray-200">Nexus deep dives into issues to find and investigate the root cause for you while triaging across logs, usage patterns, AI traces, previous fixes, and more autonmously.</span>
              </p>
            </div>

            {/* Right Column - Root-Cause Analysis Cards */}
            <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 rounded-2xl p-2 backdrop-blur-sm">
              {/* Cards Container - Top-down stacking */}
              <div className="flex flex-col gap-4">
                {rootCauseCards.map((card, idx) => {
                  const opacity = idx === 0 ? 1 : idx === 1 ? 0.8 : 0.6; // Fade effect for stacked look
                  
                  return (
                    <div
                      key={idx}
                      className="relative bg-gray-800/60 rounded-lg p-4 border border-gray-700/60 transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg"
                      style={{
                        opacity: opacity,
                        backdropFilter: 'blur(8px)',
                        zIndex: rootCauseCards.length - idx
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-200">{card.status}</span>
                      </div>
                      <p className="text-sm text-gray-300 mb-2 leading-relaxed">{card.message}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

