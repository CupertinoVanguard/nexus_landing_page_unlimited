'use client'

import { useState } from "react";
import Image from "next/image";
import AlertImg from "@/public/images/catch_new_mode.gif";
import RootCauseImg from "@/public/images/rootcausefix.gif";
import FixImg from "@/public/images/track_nexus.gif";

type Tab = {
  label: string;
  image: any;
  alt: string;
};

const TABS: Tab[] = [
  {
    label: "Catch",
    image: AlertImg,
    alt: "Catch screenshot",
  },
  {
    label: "Root-Cause",
    image: RootCauseImg,
    alt: "Root-Cause screenshot",
  },
  {
    label: "Track",
    image: FixImg,
    alt: "Track screenshot",
  },
];

export default function AlertRootCauseFix() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const active = TABS[activeIdx];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section heading */}
          <h2
            className="text-center font-nacelle text-gray-900 text-2xl md:text-4xl font-normal mb-10"
            data-aos="fade-up"
          >
            One platform to catch and improve agent behavior
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-8 justify-center mb-8">
            {TABS.map((tab, idx) => (
              <button
                key={tab.label}
                className={`relative px-2 py-3 text-base md:text-lg transition-all duration-200 ${
                  activeIdx === idx
                    ? "text-gray-900 font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1e3a5f]"
                    : "text-gray-500 hover:text-gray-700 font-medium"
                }`}
                onClick={() => setActiveIdx(idx)}
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Screenshot Display */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              <div className="relative rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                <Image
                  src={active.image}
                  alt={active.alt}
                  className="w-full h-auto object-contain"
                  priority={activeIdx === 0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
