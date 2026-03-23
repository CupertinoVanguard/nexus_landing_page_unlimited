"use client";

import { useState } from "react";
import { SparklesIcon } from "lucide-react";
import Header from "@/components/ui/header";

const NAVY = "#1e3a5f";

const SUB =
  "Nexus monitors your agents in production, catching silent failures and user frustration before users complain. Operate with complete context on the why, as Nexus root-causes issues for you automatically.";

const OPTIONS = [
  "Monitor your AI agents in production. Know when and why your agents are failing.",
  "Monitor your AI agents in production. Operate with complete context on what's failing.",
  "Monitor and automate reliability for your AI agents in production.",
  "Know when and understand why your AI agents fail in production.",
  "Stop chasing traces to know when and why your AI agents are failing.",
  "Automate monitoring and reliability for your AI agents in production.",
  "Stop waiting for users to complain to know when and why your agents are failing.",
];

export default function HeroPreviewPage() {
  const [idx, setIdx] = useState(0);
  const [size, setSize] = useState(56);

  const prev = () => setIdx((i) => (i - 1 + OPTIONS.length) % OPTIONS.length);
  const next = () => setIdx((i) => (i + 1) % OPTIONS.length);

  return (
    <>
      <Header />

      {/* Controls bar */}
      <div className="fixed top-16 left-0 right-0 z-40 border-b border-gray-200 bg-white px-6 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="px-3 py-1.5 rounded border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 font-bold text-sm transition-colors"
          >
            ←
          </button>
          <span className="text-sm font-semibold text-gray-700 min-w-[72px] text-center">
            Option {idx + 1} / {OPTIONS.length}
          </span>
          <button
            onClick={next}
            className="px-3 py-1.5 rounded border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 font-bold text-sm transition-colors"
          >
            →
          </button>
        </div>

        <div className="flex gap-2">
          {OPTIONS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="w-2.5 h-2.5 rounded-full transition-colors border"
              style={{
                background: i === idx ? NAVY : "white",
                borderColor: i === idx ? NAVY : "#d1d5db",
              }}
              aria-label={`Option ${i + 1}`}
            />
          ))}
        </div>

        <div className="h-5 w-px bg-gray-200 mx-2" />

        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
          Size
        </span>
        <input
          type="range"
          min={28}
          max={96}
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          className="w-40 accent-[#1e3a5f]"
        />
        <span className="text-sm tabular-nums text-gray-600 w-12">{size}px</span>
      </div>

      {/* Preview area */}
      <section
        className="flex flex-col items-center justify-center text-center px-8"
        style={{
          background: "#f0f4f8",
          minHeight: "100vh",
          paddingTop: "130px",
          paddingBottom: "60px",
        }}
      >
        {/* Badge */}
        <div className="mb-6">
          <a
            href="https://www.character.vc/"
            className="relative gap-2 inline-flex items-center rounded-full border border-gray-300 px-4 py-1.5 text-sm text-gray-900 transition-colors hover:bg-white/60"
          >
            <SparklesIcon className="w-4 h-4 ml-1" style={{ color: NAVY }} />
            <span>Backed by <b>Character Capital</b></span>
          </a>
        </div>

        {/* Headline */}
        <h1
          className="font-semibold text-gray-900 leading-tight max-w-4xl transition-all duration-200"
          style={{ fontSize: `${size}px` }}
        >
          {OPTIONS[idx]}
        </h1>

        {/* Static subheader */}
        <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-2xl">
          {SUB}
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-3 mt-8">
          <a
            className="text-white hover:opacity-90 transition-all duration-300 px-5 py-2 text-sm font-medium"
            style={{ background: "#1a56a8" }}
            href="/top-down"
          >
            See Business Impact
          </a>
          <a
            className="bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 transition-all duration-300 px-5 py-2 text-sm font-medium"
            href="https://cal.com/nikhilpillai/nexus-15-min-intro-call"
          >
            Book a Demo
          </a>
        </div>
      </section>
    </>
  );
}
