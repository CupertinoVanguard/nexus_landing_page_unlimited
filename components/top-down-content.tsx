"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, Check, ChevronRight, Loader2 } from "lucide-react";
import { runBusinessAnalysis, checkStatus, terminate } from "@/app/api/analysis/analysis";

interface IntegrationField {
  key: string;
  label: string;
  placeholder: string;
  type: string;
}

interface Integration {
  id: "posthog" | "langfuse";
  name: string;
  description: string;
  logo: string;
  fields: IntegrationField[];
}

interface PosthogCred {
  apiKey: string;
  projectId: string;
}

interface LangfuseCred {
  publicKey: string;
  secretKey: string;
}

interface AnalysisResult {
  silent_failures_number: number;
  monitoring_need: string;
  report: string;
}
const integrations: Integration[] = [
  {
    id: "posthog",
    name: "PostHog",
    description: "Product analytics & session replay",
    logo: "/images/posthog.png",
    fields: [
      { key: "apiKey", label: "PostHog API Key", placeholder: "phx_...", type: "password" },
      { key: "projectId", label: "Project ID", placeholder: "12345", type: "text" },
    ],
  },
  {
    id: "langfuse",
    name: "Langfuse",
    description: "LLM observability & tracing",
    logo: "/images/langfuse_logo.png",
    fields: [
      { key: "publicKey", label: "Public Key", placeholder: "pk-lf-...", type: "text" },
      { key: "secretKey", label: "Secret Key", placeholder: "sk-lf-...", type: "password" },
    ],
  },
];

export default function TopDownContent() {

  const [posthogCred, setPosthogCred] = useState<PosthogCred>();
  const [langfuseCred, setLangfuseCred] = useState<LangfuseCred>();
  const [jobId, setJobId] = useState<string>("");

  const posthogCredCallback = (apiKey: string, projectId: string) => {
    setPosthogCred({
      apiKey,
      projectId,
    });
  }

  const langfuseCredCallback = (publicKey: string, secretKey: string) => {
    setLangfuseCred({
      publicKey,
      secretKey,
    });
  }

  const pollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  async function runAnalysis() {
    setIsLoading(true);
    setAnalysisResult({ silent_failures_number: 0, monitoring_need: "", report: "" });
    const taskId = await runBusinessAnalysis(posthogCred, langfuseCred);
    if (taskId) {
      setJobId(taskId);
      // Poll for results
      let poll_count = 0;
      pollIntervalRef.current = setInterval(async () => {
        const result = await checkStatus(taskId);
        if (result.status) {
          if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
          setAnalysisResult(result.content);
          setIsLoading(false);
        }

        if (poll_count > 100) {
          if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
          setIsLoading(false);
          setAnalysisResult({ silent_failures_number: 0, monitoring_need: "Analysis timed out", report: "" });
        }
        poll_count++;

      }, 2000);
    } else {
      setIsLoading(false);
    }
  }

  async function terminateAnalysis() {
    if (pollIntervalRef.current) {
      clearInterval(pollIntervalRef.current);
    }
    if (jobId) {
      await terminate(jobId);
    }
    setIsLoading(false);
    setAnalysisResult({ silent_failures_number: 0, monitoring_need: "Analysis terminated", report: "" });
  }

  const [activePanel, setActivePanel] = useState<"posthog" | "langfuse" | null>(null);
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult>({ silent_failures_number: 0, monitoring_need: "", report: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const activeIntegration = integrations.find((i) => i.id === activePanel);

  return (
    <div className="relative w-full font-inter pt-30 pb-16">
      {/* Header Area */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-6 md:px-8 max-w-5xl mx-auto w-full mb-12">
        <h1 className="text-lg md:text-xl font-semibold font-nacelle text-white">
          Link your account so our agent can triage your last 100 alerts.
        </h1>

        {posthogCred && langfuseCred && (
          <button
            className={`px-4 py-2 border rounded-full text-sm font-medium text-white transition-colors whitespace-nowrap ${isLoading
              ? "border-red-500 hover:bg-red-500/20"
              : "border-gray-700 hover:bg-gray-800/50"
              }`}
            onClick={isLoading ? terminateAnalysis : runAnalysis}
          >
            {isLoading ? "Terminate" : "Run Analysis"}
          </button>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col items-center justify-center px-6 md:px-8">
        <div className="w-full max-w-3xl min-h-[280px] border border-white/20 rounded-xl flex items-center justify-center relative bg-gray-900/30 backdrop-blur-sm transition-all duration-500 ease-in-out py-3">

          {/* Integration Cards - expand inline when clicked */}
          <div className="flex gap-6 md:gap-10 animate-in fade-in zoom-in duration-300">
            {integrations.map((integration) => {
              const isExpanded = activePanel === integration.id;
              const cred = integration.id === "posthog" ? posthogCred : langfuseCred;

              return (
                <div
                  key={integration.id}
                  className="group relative flex rounded-2xl bg-gray-800/80 backdrop-blur-sm transition-all duration-500 ease-in-out overflow-hidden cursor-pointer"
                  onClick={() => !isExpanded && setActivePanel(integration.id)}
                >
                  {/* Logo + Name Section - aspect square */}
                  <div className="flex flex-col items-center justify-center gap-3 p-5 aspect-square shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 relative transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={integration.logo}
                        alt={`${integration.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="block text-base font-medium font-nacelle text-gray-200 group-hover:text-white transition-colors font-semibold whitespace-nowrap">
                      {integration.name}
                    </span>
                  </div>

                  {/* Expanded Form Section - slides in/out */}
                  <div
                    className={`flex items-center transition-all duration-500 ease-in-out ${isExpanded ? "max-w-[280px] opacity-100 border-l border-gray-700/50" : "max-w-0 opacity-0"
                      }`}
                  >
                    <div className="p-4 space-y-3 min-w-[250px]">
                      {integration.fields.map((field) => (
                        <div key={field.key} className="space-y-1">
                          <label htmlFor={`${integration.id}-${field.key}`} className="block text-xs font-medium text-gray-400 text-left">
                            {field.label}
                          </label>
                          <input
                            id={`${integration.id}-${field.key}`}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={
                              formValues[field.key] !== undefined
                                ? formValues[field.key]
                                : cred && field.key in cred
                                  ? (cred as any)[field.key]
                                  : ""
                            }
                            onChange={(e) => setFormValues((prev) => ({ ...prev, [field.key]: e.target.value }))}
                            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all"
                          />
                        </div>
                      ))}
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActivePanel(null);
                            setFormValues({});
                          }}
                          className="px-3 py-1.5 rounded-lg border border-gray-600 text-white text-xs font-medium hover:bg-gray-800 transition-colors hover:cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (integration.id === "posthog") {
                              posthogCredCallback(formValues["apiKey"] || "", formValues["projectId"] || "");
                            } else if (integration.id === "langfuse") {
                              langfuseCredCallback(formValues["publicKey"] || "", formValues["secretKey"] || "");
                            }
                            setActivePanel(null);
                            setFormValues({});
                          }}
                          className="px-3 py-1.5 rounded-lg bg-white text-gray-900 text-xs font-medium hover:bg-gray-100 transition-all flex items-center gap-1 hover:cursor-pointer"
                        >
                          <Check className="w-3 h-3" />
                          Connect
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Analysis Results Dashboard */}
        {posthogCred && langfuseCred && (
          <div className="w-full max-w-3xl mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Silent Failures Count */}
              <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-sm font-medium text-gray-400 mb-1 relative z-10">Silent Failures Detected</h3>
                <div className="flex items-baseline gap-2 relative z-10">
                  <span className="text-4xl font-bold font-nacelle text-white">
                    {isLoading ? "-" : analysisResult.silent_failures_number}
                  </span>
                  <span className="text-sm text-gray-500">last 100 alerts</span>
                </div>
              </div>

              {/* Monitoring Need */}
              <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-sm font-medium text-gray-400 mb-1 relative z-10">Monitoring Status</h3>
                <div className="flex items-center h-10 relative z-10">
                  {isLoading ? (
                    <span className="text-gray-500 animate-pulse">Analyzing...</span>
                  ) : (
                    <span className={`text-lg font-medium ${analysisResult.monitoring_need ? "text-blue-400" : "text-gray-500"
                      }`}>
                      {analysisResult.monitoring_need || "Pending Analysis"}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Detailed Report */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-400 ml-1">Analysis Report</label>
              <div className="relative">
                <textarea
                  value={analysisResult.report}
                  placeholder="Detailed analysis report will appear here..."
                  className="w-full h-64 bg-gray-900/50 border border-gray-700 rounded-xl px-5 py-4 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all resize-none font-mono leading-relaxed"
                  readOnly
                />

                {/* Loading Overlay */}
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50">
                    <Loader2 className="w-10 h-10 text-blue-400 animate-spin mb-3" />
                    <span className="text-sm font-medium text-gray-300 animate-pulse">Running Business Analysis...</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
