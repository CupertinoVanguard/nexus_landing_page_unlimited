'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/section-heading";

const CONDITIONS = [
  "User rephrases the agent multiple times, indicating dissatisfaction.",
  "Agent makes a choice without referencing available evidence or goals.",
  "agent answers from memory despite having an appropriate tool available to verify the information.",
  "agent uses MRR metric instead of ARR metric in revenue forecast calculation.",
];

const INITIAL_FILLED = 2;

export default function CatchIssues() {
  const [filledCount, setFilledCount] = useState(INITIAL_FILLED);
  const [typingText, setTypingText] = useState("");
  const [addIdx, setAddIdx] = useState(0);
  const [phase, setPhase] = useState<
    "waiting" | "typing" | "added" | "resetting"
  >("waiting");
  const [newSlot, setNewSlot] = useState<number | null>(null);
  const [fading, setFading] = useState(false);
  const [generation, setGeneration] = useState(0);
  const [plusActive, setPlusActive] = useState(false);

  const targetIdx = INITIAL_FILLED + addIdx;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "waiting") {
      if (filledCount >= CONDITIONS.length) {
        timeout = setTimeout(() => setPhase("resetting"), 2500);
      } else {
        timeout = setTimeout(() => setPhase("typing"), 1800);
      }
    } else if (phase === "typing") {
      const target = CONDITIONS[targetIdx];
      if (typingText.length < target.length) {
        timeout = setTimeout(() => {
          setTypingText(target.slice(0, typingText.length + 1));
        }, 30);
      } else {
        setPlusActive(true);
        timeout = setTimeout(() => {
          setPlusActive(false);
          setNewSlot(targetIdx);
          setFilledCount(targetIdx + 1);
          setTypingText("");
          setPhase("added");
        }, 600);
      }
    } else if (phase === "added") {
      timeout = setTimeout(() => {
        setNewSlot(null);
        setAddIdx((prev) => prev + 1);
        setPhase("waiting");
      }, 2000);
    } else if (phase === "resetting") {
      setFading(true);
      timeout = setTimeout(() => {
        setFilledCount(INITIAL_FILLED);
        setFading(false);
        setNewSlot(null);
        setAddIdx(0);
        setGeneration((g) => g + 1);
        setPhase("waiting");
      }, 600);
    }

    return () => clearTimeout(timeout);
  }, [phase, typingText, targetIdx, filledCount]);

  return (
    <section className="relative">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes slotIn {
              from { opacity: 0; transform: scale(0.95) translateY(6px); }
              to   { opacity: 1; transform: scale(1) translateY(0); }
            }
            .slot-enter { animation: slotIn 0.4s ease-out both; }
          `,
        }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Top title — centered */}
          <SectionHeading
            eyebrow="Catch Issues"
            title="Catch silent failures that impact users"
            body="Detect beyond basic failure modes in real-time. Customize modes based on your agent's goals and align closer to delivering user value."
          />

          {/* Two columns: panel + monitored out of box */}
          <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-6 items-start">

            {/* Animated panel */}
            <div>
              <div className="bg-surface border border-edge rounded-xl overflow-hidden">
                {/* Header bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-edge">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-3.5 h-3.5 text-fg-subtle"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span className="text-sm font-semibold text-fg-muted">
                      Failure Modes
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-fg-subtle"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                      />
                    </svg>
                  </div>
                </div>

                {/* 2x2 card grid */}
                <div
                  className={`grid grid-cols-2 gap-3 p-6 transition-opacity duration-500 h-[320px] content-start ${
                    fading ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {CONDITIONS.map((condition, i) => {
                    const isFilled = i < filledCount;
                    const isNew = i === newSlot;

                    if (!isFilled) {
                      return (
                        <div
                          key={`${generation}-empty-${i}`}
                          className="border border-dashed border-edge rounded-md p-4 min-h-[100px] flex items-center justify-center"
                        >
                          <svg
                            className="w-5 h-5 text-fg-ghost"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={`${generation}-${i}`}
                        className={`bg-surface-2 border border-edge rounded-md p-4 flex flex-col gap-3 overflow-hidden ${
                          isNew ? "slot-enter" : ""
                        }`}
                      >
                        <div>
                          <p className="text-xs font-medium text-fg-subtle mb-1.5">
                            Mode {i + 1}
                          </p>
                          <p className="text-sm text-fg-muted leading-relaxed">
                            {condition}
                          </p>
                        </div>
                        <div className="flex items-center justify-end mt-2">
                          <div className="w-4 h-4 rounded overflow-hidden">
                            <Image
                              src="/images/nexuslogo (3) (1).png"
                              alt="N"
                              width={16}
                              height={16}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Input area */}
                <div className="px-6 pb-6">
                  <div className="flex items-center gap-2 rounded-lg bg-surface-2 border border-edge px-3 h-[42px]">
                    <span className="text-sm flex-1 truncate">
                      {typingText ? (
                        <>
                          <span className="text-fg">{typingText}</span>
                          <span className="animate-pulse text-fg-subtle">|</span>
                        </>
                      ) : (
                        <span className="text-fg-subtle">
                          Add a failure condition...
                        </span>
                      )}
                    </span>
                    <button
                      className={`flex items-center justify-center w-6 h-6 rounded transition-colors ${
                        plusActive
                          ? "bg-accent text-white"
                          : "bg-edge-strong text-fg-subtle"
                      }`}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Monitored Out of the Box — second column */}
            <div className="rounded-xl border border-edge bg-surface p-6 h-full">
              <p className="text-xs uppercase tracking-[0.12em] text-fg-subtle mb-4">
                Custom modes in plain English
              </p>
              <ul className="flex flex-col gap-y-3 text-sm text-fg-muted leading-relaxed">
                <li>Failed tool calls</li>
                <li>User frustration in sessions</li>
                <li>Agent looping</li>
                <li>Information misrepresentation</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
