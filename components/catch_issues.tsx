'use client'
import Image from "next/image";
import CustomerFeedbackCards from "./customer_feedback_cards";
import PatternMatchingGraphic from "./pattern_matching_graphic";

export default function CatchIssues() {
  const features = [
    {
      title: "Customize silent failure conditions",
      description: "Add silent failure conditions you want to look for in your agent. Define custom patterns and behaviors that indicate your agent is failing.",
      image: "/images/main_nexus_page.png", // Placeholder - replace with actual image
    },
    {
      title: "Uncover patterns",
      description: "Identifies recurring issues and patterns across interactions to surface systemic problems before they escalate",
      image: "/images/main_nexus_page.png", // Placeholder - replace with actual image
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Title Section */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[repeat(13,minmax(0,1fr))] mb-5 md:mb-10">
            {/* Left Column - Title */}
            <div className="md:col-span-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-[#02B8CC]"></div>
                    <span className="text-sm font-medium text-gray-400">
                      Catch Issues
                    </span>
                  </div>
                  <span className="text-gray-500">→</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono bg-gray-800/50 border border-gray-700/50 text-gray-300">
                    pip install nexus-library
                  </span>
                </div>
                <h2 className="font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl lg:text-5xl">
                Detect Silent Failures
                </h2>
              </div>
            </div>

            {/* Right Column - Description */}
            {/* <div className="md:col-span-5">
              <p className="text-lg text-gray-300 mb-6 max-w-md">
                <span className="font-semibold text-gray-200">Linear for Agents.</span> Choose from a variety of AI agents and start delegating work, from code generation to other technical tasks.
              </p>
              <a
                href="/agents"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 border border-gray-700 rounded-lg hover:border-gray-600 hover:text-gray-300 transition-colors"
              >
                Learn more
                <ChevronRight className="w-4 h-4" />
              </a>
            </div> */}
          </div>    

          {/* Content Wrap */}
          <div className="relative">
            {/* Feature Detail */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mx-auto rounded-lg border-2 border-white/20 overflow-hidden" style={{ width: '95%' }}>
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className={`relative overflow-hidden ${
                    idx === 0 
                      ? 'border-r border-white/20' 
                      : ''
                  }`}
                >
                  {/* Feature Item */}
                  
                  {/* Graphic or Customer Feedback Cards */}
                  {idx === 0 ? (
                    <div className="relative w-full aspect-video p-4 flex items-center">
                      <div className="w-full h-full">
                        <CustomerFeedbackCards />
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full aspect-video p-6">
                      <PatternMatchingGraphic />
                    </div>
                  )}

                  {/* Title */}
                  <div className="px-6 pb-6">
                    <div className="mb-3 text-center">
                      <p className="font-nacelle text-xl font-semibold text-gray-200">
                        {feature.title}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

