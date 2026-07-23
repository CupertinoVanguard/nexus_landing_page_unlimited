'use client'

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/section-heading";
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
          <SectionHeading
            eyebrow="The loop"
            title="One platform to catch and improve agent behavior"
          />

          {/* Tabs — segmented control */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex gap-1 rounded-full border border-edge bg-surface p-1">
              {TABS.map((tab, idx) => (
                <button
                  key={tab.label}
                  className={`rounded-full px-5 py-2 font-mono text-[13px] transition-colors ${
                    activeIdx === idx
                      ? "bg-accent text-white"
                      : "text-fg-subtle hover:text-fg"
                  }`}
                  onClick={() => setActiveIdx(idx)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Screenshot Display */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl">
              {/* soft bloom behind the product shot */}
              <div
                className="pointer-events-none absolute -inset-x-16 -inset-y-10 blur-[90px]"
                aria-hidden="true"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(37,99,235,0.16), transparent 70%)",
                }}
              />
              <div className="relative overflow-hidden rounded-xl border border-edge bg-surface">
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
