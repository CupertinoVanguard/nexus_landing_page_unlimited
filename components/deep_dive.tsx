'use client'
import { useState, useEffect } from "react";

const NAVY = "#1e3a5f";

const WINDOWS = [
  {
    badge: "Autopilot Analysis",
    title: "Pull in context from code, logs, and prompts",
    body:
      "Every issue gets automatically analyzed with runtime context from code, ticketing, traces, and prompts to pinpoint the root-cause.",
    panel: "context",
    visualSide: "right",
  },
  {
    badge: "High-Signal Triage",
    title: "Surface only issues that matter",
    body:
      "Issues are cross-referenced across patterns so only high-signal ones get surfaced.",
    panel: "signal",
    visualSide: "left",
  },
  {
    badge: "Performance Tracking",
    title: "Track failure modes and agent performance over time",
    body:
      "Track which failure modes fire most and how the agent trajectories are responding for each custom mode",
    panel: "dashboard",
    visualSide: "right",
  },
] as const;

const PANEL_CLASS =
  "rounded-none border border-gray-900 bg-white shadow-sm overflow-hidden flex flex-col";
const PANEL_MIN_H = "min-h-[420px]";

/* ── Panel 1: Context Fusion ── */
function ContextFusionPanel() {
  return (
    <div className={`${PANEL_CLASS} ${PANEL_MIN_H} p-5`}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes dotPulse {
              0%, 100% { opacity: 0.7; r: 3; }
              50% { opacity: 1; r: 4; }
            }
            .dot-pulse { animation: dotPulse 2.8s ease-in-out infinite; }
          `,
        }}
      />
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-none border border-gray-900 bg-gray-50 p-3">
          <p className="text-[11px] uppercase tracking-[0.08em] text-gray-500 mb-2">Code</p>
          <div className="font-mono text-[10px] leading-relaxed space-y-0.5 text-gray-500">
            <p><span className="text-gray-400">41</span> def summarize_deal_flow(</p>
            <p><span className="text-gray-400">42</span>   self, date_range):</p>
            <p className="bg-red-50 border-l-2 border-red-300 pl-1 text-red-700">
              <span className="text-gray-400">43</span>   range = fallback(90)
            </p>
            <p><span className="text-gray-400">44</span>   return self.query(range)</p>
          </div>
        </div>
        <div className="rounded-none border border-gray-900 bg-gray-50 p-3">
          <p className="text-[11px] uppercase tracking-[0.08em] text-gray-500 mb-2">Traces</p>
          <div className="font-mono text-[10px] leading-relaxed space-y-0.5 text-gray-500">
            <p className="text-gray-400">__start__</p>
            <p className="pl-2"><span style={{ color: NAVY }}>&#9656;</span> retrieve_deals <span className="text-gray-400">0.3s</span></p>
            <p className="pl-2 bg-red-50 border-l-2 border-red-300 pl-1 text-red-700">
              <span>&#9656;</span> summarize_deal_flow <span className="text-gray-400">1.2s</span>
            </p>
            <p className="pl-2"><span style={{ color: NAVY }}>&#9656;</span> format_output <span className="text-gray-400">0.4s</span></p>
            <p className="text-gray-400">__end__</p>
          </div>
        </div>
        <div className="rounded-none border border-gray-900 bg-gray-50 p-3">
          <p className="text-[11px] uppercase tracking-[0.08em] text-gray-500 mb-2">Prompts</p>
          <div className="text-[10px] leading-relaxed space-y-0.5 text-gray-500">
            <p>Summarize pipeline deals</p>
            <p>for the given date range.</p>
            <p className="bg-amber-50 border-l-2 border-amber-300 pl-1 text-amber-700">
              No mention of actual_range_used
            </p>
          </div>
        </div>
      </div>

      <div className="my-2 flex-shrink-0">
        <svg viewBox="0 0 300 56" className="w-full h-auto overflow-visible">
          <path d="M 50,2 C 50,30 150,30 150,52" fill="none" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 150,2 C 150,20 150,34 150,52" fill="none" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 250,2 C 250,30 150,30 150,52" fill="none" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="150" cy="52" r="4" fill="#D1D5DB" className="dot-pulse" />
          <circle r="3.5" fill="#F87171" className="dot-pulse">
            <animateMotion dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" path="M 50,2 C 50,30 150,30 150,52" />
          </circle>
          <circle r="3.5" fill={NAVY} className="dot-pulse">
            <animateMotion dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" path="M 150,2 C 150,20 150,34 150,52" />
          </circle>
          <circle r="3.5" fill="#818CF8" className="dot-pulse">
            <animateMotion dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" path="M 250,2 C 250,30 150,30 150,52" />
          </circle>
        </svg>
      </div>

      <div className="rounded-none border border-gray-900 bg-gray-50 p-3 md:p-4 mt-auto">
        <p className="text-xs font-medium text-gray-900 mb-2">Root-cause identified</p>
        <p className="text-xs text-gray-600 leading-relaxed">
          <span className="font-medium">summarize_deal_flow</span> silently overrides date_range to &quot;last 90 days&quot; via probabilistic fallback. System prompt does not instruct agent to use <span className="font-medium">actual_range_used</span>.
        </p>
      </div>
    </div>
  );
}

/* ── Panel 2: Cross-Reference Signal ── */
const ISSUES = [
  { id: "ISS-401", text: "summarize_deal_flow returns wrong date range silently", patterns: 4, signal: true },
  { id: "ISS-402", text: "Agent uses verbose formatting on low-complexity queries", patterns: 0, signal: false },
  { id: "ISS-403", text: "Agent misrepresents actual_range_used in summary", patterns: 3, signal: true },
  { id: "ISS-404", text: "Agent occasionally re-fetches cached tool results", patterns: 0, signal: false },
  { id: "ISS-405", text: "Prompt fails to enforce actual_range_used over requested_range", patterns: 5, signal: true },
];

function SignalPanel() {
  return (
    <div className={`${PANEL_CLASS} ${PANEL_MIN_H} p-4 md:p-5`}>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-medium text-gray-900">Cross-reference check</p>
        <span className="text-[11px] text-gray-500">5 issues &rarr; 3 high-signal</span>
      </div>

      <div className="space-y-1.5 mb-4 flex-1">
        {ISSUES.map((iss) => (
          <div
            key={iss.id}
            className={`flex items-center gap-2 rounded-none px-2.5 py-2 text-[11px] border ${
              iss.signal
                ? "bg-white border-gray-900 text-gray-900"
                : "bg-gray-50 border-gray-200 text-gray-400"
            }`}
          >
            <span className="font-mono text-[10px] text-gray-400 flex-shrink-0">{iss.id}</span>
            <span className="flex-1">{iss.text}</span>
            {iss.signal ? (
              <span className="flex items-center gap-1 flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: NAVY }} />
                <span className="text-[10px] font-medium" style={{ color: NAVY }}>
                  {iss.patterns} pattern matches
                </span>
              </span>
            ) : (
              <span className="text-[10px] text-gray-400 flex-shrink-0">no match</span>
            )}
          </div>
        ))}
      </div>

      <div className="rounded-none border border-gray-900 bg-gray-50 p-3 mt-auto">
        <p className="text-xs text-gray-700">
          <span className="font-medium">3 high-signal issues</span> cross-referenced across patterns. 2 filtered as noise
        </p>
      </div>
    </div>
  );
}

/* ── Panel 3: Dashboard, two alternating panes ── */

// Proportional 100% bar chart data
const BAR_DATA = [
  { mode: "Tool hallucination",  fine: 45, recovered: 18, degraded: 23 },
  { mode: "Extended date range", fine: 52, recovered: 22, degraded: 12 },
  { mode: "Skips confirmation",  fine: 68, recovered:  9, degraded:  8 },
];

const FREQ_MODES = [
  { name: "Tool hallucination", type: "built-in", count: 23, pct: 18, color: "#9CA3AF" },
  { name: "Extended date range", type: "custom", count: 41, pct: 32, color: NAVY },
  { name: "Skips confirmation", type: "custom", count: 15, pct: 12, color: NAVY },
];

function DashboardPanel() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % 2), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={`${PANEL_CLASS} ${PANEL_MIN_H} overflow-hidden`}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes trajReveal {
              from { clip-path: inset(0 100% 0 0); }
              to   { clip-path: inset(0 0% 0 0); }
            }
            .traj-animate { animation: trajReveal 2s ease-out both; }
          `,
        }}
      />

      <div className="relative flex-1">
        {/* Pane 0: Proportional 100% bar chart */}
        <div
          className={`absolute inset-0 flex flex-col p-5 transition-opacity duration-500 ${
            slide === 0 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center justify-between mb-5">
            <p className="text-xs font-medium text-gray-900">Agent trajectories</p>
            <div className="flex items-center gap-3">
              {[
                { label: "Success",    color: "#6EE7B7", text: "#065F46" },
                { label: "Concerning", color: "#FDE68A", text: "#92400E" },
                { label: "Failed",     color: "#FCA5A5", text: "#991B1B" },
              ].map((l) => (
                <span key={l.label} className="flex items-center gap-1 text-[10px]" style={{ color: l.text }}>
                  <span className="w-2 h-2 rounded-sm inline-block" style={{ background: l.color }} />
                  {l.label}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 flex-1 flex flex-col justify-center">
            {BAR_DATA.map((d) => {
              const total = d.fine + d.recovered + d.degraded;
              const segs = [
                { pct: (d.fine      / total) * 100, color: "#6EE7B7", textColor: "#065F46" },
                { pct: (d.recovered / total) * 100, color: "#FDE68A", textColor: "#92400E" },
                { pct: (d.degraded  / total) * 100, color: "#FCA5A5", textColor: "#991B1B" },
              ];
              return (
                <div key={d.mode}>
                  <p className="text-[11px] text-gray-500 mb-1.5">{d.mode}</p>
                  <div className="flex h-6 rounded-full overflow-hidden">
                    {segs.map((s, i) => (
                      <div
                        key={i}
                        style={{ width: `${s.pct}%`, background: s.color }}
                        className="flex items-center justify-center"
                      >
                        {s.pct > 13 && (
                          <span className="text-[9px] font-semibold" style={{ color: s.textColor }}>
                            {Math.round(s.pct)}%
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pane 1: Frequency cards */}
        <div
          className={`absolute inset-0 flex flex-col p-4 md:p-5 transition-opacity duration-500 ${
            slide === 1 ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <p className="text-xs font-medium text-gray-900 mb-3">Failure mode frequency</p>
          <div className="space-y-2 flex-1">
            {FREQ_MODES.map((m) => (
              <div key={m.name} className="border border-gray-200 bg-gray-50 p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: m.color }} />
                    <p className="text-xs font-medium text-gray-800">{m.name}</p>
                    <span
                      className="text-[10px] px-1.5 py-0.5 font-medium"
                      style={
                        m.type === "custom"
                          ? { background: `${NAVY}15`, color: NAVY }
                          : { background: "#F3F4F6", color: "#9CA3AF" }
                      }
                    >
                      {m.type}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{m.count}</p>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-1 rounded-full" style={{ width: `${m.pct}%`, background: m.color }} />
                </div>
                <p className="text-[10px] text-gray-400 mt-1">{m.pct}% of all issues</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="flex justify-center gap-1.5 py-3 border-t border-gray-100">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              slide === i ? "w-5 bg-gray-900" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function renderPanel(panel: (typeof WINDOWS)[number]["panel"]) {
  if (panel === "context") return <ContextFusionPanel />;
  if (panel === "signal") return <SignalPanel />;
  return <DashboardPanel />;
}

export default function DeepDive() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 w-1 rounded-full" style={{ background: NAVY }} />
              <span className="text-sm font-medium text-gray-500">
                Deep Analysis
              </span>
            </div>
            <h2 className="font-nacelle text-3xl font-semibold text-gray-900 md:text-4xl lg:text-5xl mb-4">
              Root-cause on autopilot
            </h2>
            <p className="text-md text-gray-600">
              Analyze, triage, and track issues in one continuous flow.
            </p>
          </div>

          <div className="space-y-8 md:space-y-10">
            {WINDOWS.map((window, idx) => {
              const textLeft = idx % 2 === 0; // row 0,2 → text left; row 1 → text right

              const textEl = (
                <div className="flex items-center order-first md:order-none">
                  <div className="p-6 md:p-7">
                    <p className="text-xs uppercase tracking-[0.12em] mb-3" style={{ color: NAVY }}>
                      {window.badge}
                    </p>
                    <h3 className="font-nacelle text-2xl md:text-3xl text-gray-900 mb-3">
                      {window.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {window.body}
                    </p>
                  </div>
                </div>
              );

              const panelEl = (
                <div>{renderPanel(window.panel)}</div>
              );

              return (
                <div
                  key={window.title}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center"
                >
                  {textLeft ? <>{textEl}{panelEl}</> : <>{panelEl}{textEl}</>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
