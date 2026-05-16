'use client'
import { SparklesIcon } from "lucide-react";
import { useState, useEffect } from "react";

const NAVY = "#1e3a5f";

const CYCLE_PHRASES = [
  "agent loops",
  "agent tool errors",
  "user frustration",
  "agent hallucinations",
  "custom failure modes for your agents",
];

export default function HeroHome() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % CYCLE_PHRASES.length);
        setVisible(true);
      }, 500);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ background: "#f0f4f8", height: "90vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "64px" }}>
      <div className="relative mx-auto max-w-7xl px-8 sm:px-12 w-full">
        {/* Hero content, centered */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="mb-6" data-aos="fade-up">
            <a
              href="https://www.character.vc/"
              className="relative gap-2 inline-flex items-center rounded-full border border-gray-300 px-4 py-1.5 text-sm text-gray-900 transition-colors hover:bg-white/60"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              <SparklesIcon className="w-4 h-4 ml-1" style={{ color: NAVY }} />
              <span>Backed by <b>Character Capital</b></span>
            </a>
          </div>

          <h1
            className="pb-3 font-nacelle text-gray-900 text-4xl font-normal md:text-5xl lg:text-6xl leading-tight"
            data-aos="fade-up"
          >
            Monitor your AI agents in{" "}
            <span className="whitespace-nowrap">production with <span style={{ color: "#2563eb", fontWeight: 600 }}>complete context</span></span>
          </h1>

          <div className="mt-4 flex items-center justify-center" data-aos="fade-up">
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed text-center" style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
              The AI engineer that watches and fixes your agents in realtime
            </p>
          </div>

          {/* <div className="flex flex-row gap-4 mt-8" data-aos="fade-up" data-aos-delay={400}>
            <a
              className="btn-md text-white hover:opacity-90 transition-all duration-300 px-8 py-3 text-base"
              style={{ fontFamily: "Helvetica, Arial, sans-serif", background: NAVY }}
              href="/top-down"
            >
              See Business Impact
            </a>
            <a
              className="btn-md bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 hover:scale-105 transition-all duration-300 px-8 py-3 text-base"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              href="https://cal.com/nikhilpillai/nexus-15-min-intro-call"
            >
              Book a Demo
            </a>
          </div> */}
        </div>

        {/* Right column: live monitoring graphic (commented out for now)
        <div className="flex-1 flex items-center justify-center" data-aos="fade-left" data-aos-delay={300}>
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes heroScan { 0% { left: -2px; } 100% { left: 100%; } }
            @keyframes heroPulseWarn { 0%,100% { box-shadow: 0 0 0 0 rgba(245,158,11,0.5); } 50% { box-shadow: 0 0 0 5px rgba(245,158,11,0); } }
            @keyframes heroPulseFail { 0%,100% { box-shadow: 0 0 0 0 rgba(239,68,68,0.5); } 50% { box-shadow: 0 0 0 5px rgba(239,68,68,0); } }
            @keyframes heroFadeIn { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
            @keyframes heroDotMove { 0% { transform: translateX(0); opacity:0; } 5% { opacity:1; } 90% { opacity:1; } 100% { transform: translateX(var(--travel)); opacity:0; } }
            .hero-scan { animation: heroScan 3.5s ease-in-out infinite; }
            .hero-pw { animation: heroPulseWarn 2s ease-in-out infinite; }
            .hero-pf { animation: heroPulseFail 1.8s ease-in-out infinite; }
            .hero-fi-1 { animation: heroFadeIn 0.5s ease-out 0.8s both; }
            .hero-fi-2 { animation: heroFadeIn 0.5s ease-out 1.4s both; }
            .hero-fi-3 { animation: heroFadeIn 0.5s ease-out 2.0s both; }
            .hero-fi-4 { animation: heroFadeIn 0.5s ease-out 2.6s both; }
            .hero-dot { animation: heroDotMove var(--dur) linear infinite; animation-delay: var(--delay, 0s); }
          `}} />
          <div className="relative w-full max-w-lg rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 bg-gray-50/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-semibold text-gray-500 tracking-wide uppercase">Live Monitoring</span>
              </div>
              <span className="text-[10px] text-gray-400">4 active sessions</span>
            </div>
            <div className="relative px-5 pt-5 pb-4">
              <div className="absolute top-0 bottom-0 w-px hero-scan z-10" style={{ background: `${NAVY}40` }} />
              <div className="space-y-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-[52px] shrink-0 text-[10px] font-medium text-gray-400">Agent 1</span>
                  <div className="relative flex items-center gap-[6px] flex-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div className="h-px flex-1 bg-gray-200" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div className="h-px flex-1 bg-gray-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 hero-pw" />
                    <div className="h-px flex-1 bg-amber-200" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div className="h-px flex-1 bg-gray-200" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1.5 h-1.5 rounded-full hero-dot" style={{ background: NAVY, "--travel": "280px", "--dur": "3s", "--delay": "0s" } as React.CSSProperties} />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-[52px] shrink-0 text-[10px] font-medium text-gray-400">Agent 2</span>
                  <div className="relative flex items-center gap-[6px] flex-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div className="h-px flex-1 bg-gray-200" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div className="h-px flex-1 bg-gray-200" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div className="h-px flex-1 bg-gray-200" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div className="h-px flex-1 bg-gray-200" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1.5 h-1.5 rounded-full hero-dot" style={{ background: NAVY, "--travel": "280px", "--dur": "3.8s", "--delay": "0.6s" } as React.CSSProperties} />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-[52px] shrink-0 text-[10px] font-medium text-gray-400">Agent 3</span>
                  <div className="relative flex items-center gap-[6px] flex-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div className="h-px flex-1 bg-gray-200" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div className="h-px flex-1 bg-gray-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400 hero-pf" />
                    <div className="h-px flex-1 bg-red-200/60" />
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                    <div className="h-px flex-1 bg-gray-200/40" />
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1.5 h-1.5 rounded-full hero-dot" style={{ background: NAVY, "--travel": "280px", "--dur": "3.2s", "--delay": "1.2s" } as React.CSSProperties} />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-[52px] shrink-0 text-[10px] font-medium text-gray-400">Agent 4</span>
                  <div className="relative flex items-center gap-[6px] flex-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div className="h-px flex-1 bg-gray-200" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div className="h-px flex-1 bg-gray-200" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div className="h-px flex-1 bg-gray-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 hero-pw" />
                    <div className="h-px flex-1 bg-amber-200" />
                    <div className="w-2 h-2 rounded-full bg-amber-400/50" />
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1.5 h-1.5 rounded-full hero-dot" style={{ background: NAVY, "--travel": "280px", "--dur": "4s", "--delay": "0.3s" } as React.CSSProperties} />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5 space-y-1.5">
              <div className="hero-fi-1 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200/80">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span className="text-[10px] font-semibold text-amber-700">Silent Failure</span>
                <span className="text-[9px] text-amber-400 ml-auto">Agent 1 · Step 3</span>
              </div>
              <div className="hero-fi-2 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 border border-red-200/80">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                <span className="text-[10px] font-semibold text-red-700">Hallucination</span>
                <span className="text-[9px] text-red-400 ml-auto">Agent 3 · Step 3</span>
              </div>
              <div className="hero-fi-3 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200/80">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span className="text-[10px] font-semibold text-amber-700">Loop Detected</span>
                <span className="text-[9px] text-amber-400 ml-auto">Agent 4 · Step 4</span>
              </div>
            </div>
            <div className="p-5 hero-fi-4">
              <div className="rounded-lg border border-gray-200 p-3" style={{ background: `${NAVY}08` }}>
                <div className="flex items-center gap-1.5 mb-1">
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: NAVY }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[11px] font-semibold text-gray-700">Root Cause Identified</span>
                </div>
                <p className="text-[10px] text-gray-500 leading-relaxed pl-5">
                  Probabilistic fallback in <span className="font-mono text-gray-600">summarize_deal_flow</span> silently overrides <span className="font-mono text-gray-600">date_range</span> parameter
                </p>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent"></div>
      </div>
    </section>
  );
}
