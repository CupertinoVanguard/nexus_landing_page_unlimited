'use client'
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function LaunchSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Header and GIF Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            {/* Left Column - Header */}
            <div>
              <a href="/ai" className="group">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-1 w-1 rounded-full bg-[#02B8CC]"></div>
                  <span className="text-sm font-medium text-gray-400 flex items-center gap-1.5 group-hover:text-gray-300 transition-colors">
                    AI
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
                <h2 className="font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl lg:text-5xl group-hover:text-white transition-colors mb-6">
                  Adaptive Agents
                </h2>
              </a>
              <p className="text-lg text-gray-300 max-w-md">
                <span className=" text-gray-200">Launch agents that adapt to the subset of tools you integrate and works within constraints you set with a click of a button</span>
              </p>
            </div>

            {/* Right Column - GIF */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden bg-gray-900/50 border border-gray-700/50">
                <Image
                  src="/images/main_nexus_page.png"
                  alt="Launch Interface"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

