"use client";

import { useState } from "react";
import Image from "next/image";
import Img1 from "@/public/images/workflow-01.png";
import Img2 from "@/public/images/workflow-02.png";
import Img3 from "@/public/images/workflow-03.png";
import Img4 from "@/public/images/recurring_and_proactive.png";
import Img5 from "@/public/images/quicktimedeployment.png";

type Tab = {
  label: string;
  title: string;
  description: string;
  image: any;
  alt: string;
};

const TABS: Tab[] = [
  {
    label: "Procurement Operations",
    title: "PO Validator and 3 Way Match",
    description:
      "Review purchase orders, invoices, and goods receipts across ERP, contracts, and email threads to catch price and quantity errors early. Manage corrections with suppliers, produce clean match evidence for AP, and prevent overpayments before they happen.",
    image: Img1,
    alt: "PO validation",
  },
  {
    label: "Supplier Management",
    title: "Supplier Negotiation",
    description:
      "Review quotes, historical spend, and benchmarks to recommend the right targets and concessions for each supplier. Manage outreach, document agreements, and summarize tradeoffs so approvers can sign with confidence.",
    image: Img2,
    alt: "Supplier negotiation",
  },
  {
    label: "Planning and Intelligence",
    title: "Exception Handling",
    description:
      "Review blocked invoices, partial receipts, short ships, and compliance holds to identify the true root cause. Propose the next best step and close the loop with a written resolution in ERP.",
    image: Img3,
    alt: "Exception handling",
  },
  {
    label: "Logistics & Fulfillment",
    title: "Order Tracking & Alerts",
    description:
      "Continuously monitor shipment status, lead times, and SLAs across systems. Alert owners on delays and generate proactive resolution steps.",
    image: Img4,
    alt: "Logistics",
  },
  {
    label: "Supplier Collaboration",
    title: "Vendor Collaboration Hub",
    description:
      "Coordinate requests and updates with vendors via email or portals, unify threads, and keep ERP in sync automatically.",
    image: Img5,
    alt: "Supplier collaboration",
  },
];

export default function AgentTaskforce() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const active = TABS[activeIdx];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Header */}
          <div className="mx-auto max-w-3xl pb-8 text-center">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Agent Taskforce
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {TABS.map((tab, idx) => (
              <button
                key={tab.label}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${
                  activeIdx === idx
                    ? "bg-gray-900/70 text-white border-gray-700"
                    : "bg-gray-800/30 text-gray-300 border-gray-800 hover:bg-gray-800/50"
                }`}
                onClick={() => setActiveIdx(idx)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div className="mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h3 className="font-nacelle text-2xl md:text-3xl font-semibold text-white">
                {active.title}
              </h3>
              <p className="mt-3 text-indigo-200/80 text-base leading-relaxed">
                {active.description}
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="overflow-hidden rounded-xl bg-gray-800/40">
                <Image
                  src={active.image}
                  alt={active.alt}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


