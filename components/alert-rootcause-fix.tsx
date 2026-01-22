'use client'

import { useState } from "react";
import Image from "next/image";
import AlertImg from "@/public/images/filter_area.gif";
import RootCauseImg from "@/public/images/root_cause_nexus.gif";
import FixImg from "@/public/images/action_area_nexus.gif";

type Tab = {
  label: string;
  image: any;
  alt: string;
};

const TABS: Tab[] = [
  {
    label: "Alert",
    image: AlertImg,
    alt: "Alert screenshot",
  },
  {
    label: "Root-Cause",
    image: RootCauseImg,
    alt: "Root-Cause screenshot",
  },
  {
    label: "Fix",
    image: FixImg,
    alt: "Fix screenshot",
  },
];

export default function AlertRootCauseFix() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const active = TABS[activeIdx];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Tabs */}
          <div className="flex flex-wrap gap-8 justify-center mb-8">
            {TABS.map((tab, idx) => (
              <button
                key={tab.label}
                className={`relative px-2 py-3 text-base md:text-lg transition-all duration-200 ${
                  activeIdx === idx
                    ? "text-white font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white"
                    : "text-gray-400 hover:text-gray-300 font-medium"
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
              <div className="relative rounded-lg overflow-hidden bg-gray-900/50 border border-gray-700/50">
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
