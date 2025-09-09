"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import TestimonialImg01 from "@/public/images/recurring_and_proactive.png";
import TestimonialImg02 from "@/public/images/workflow-01.png";
import TestimonialImg03 from "@/public/images/workflow-02.png";
import TestimonialImg04 from "@/public/images/workflow-03.png";
import TestimonialImg05 from "@/public/images/features.png";
import ClientImg01 from "@/public/images/client-logo-01.svg";
import ClientImg02 from "@/public/images/client-logo-02.svg";
import ClientImg03 from "@/public/images/client-logo-03.svg";
import ClientImg04 from "@/public/images/client-logo-04.svg";
import ClientImg05 from "@/public/images/client-logo-05.svg";
import ClientImg06 from "@/public/images/client-logo-06.svg";
import ClientImg07 from "@/public/images/client-logo-07.svg";
import ClientImg08 from "@/public/images/client-logo-08.svg";
import ClientImg09 from "@/public/images/client-logo-09.svg";
import { Plus, X } from "lucide-react";

const testimonials_1 = [
  {
    img: TestimonialImg01,
    // clientImg: ClientImg01,
    agent_name: "High-Value Customer Churn Risk Agent",
    status: "Recurring",
    integration_list: ["Amplitude"],
    summary: "Proactively monitors high-value customers to identify and prevent churn risks.",
    content:
      "Monitors high-value (Tier 1) customers to proactively identify, analyze, and alert on potential churn risks and significant behavioral shifts. Detects subtle warning signs, performs root cause analysis, and generates actionable insights to help you prevent customer attrition and retain your most valuable clients.",
    categories: [1, 5],
  },
  {
    img: TestimonialImg02,
    // clientImg: ClientImg02,
    agent_name: "Subscription Churn Risk Analysis Agent",
    status: "Non-Recurring",
    integration_list: ["Mixpanel"],
    summary: "Analyzes subscription-based churn patterns to identify high-risk segments.",
    content:
      "Analyzes customer churn patterns within subscription-based businesses by leveraging relational database schemas. Identifies high-risk segments, uncovers seasonal trends, and provides actionable insights to minimize attrition. Defines churn, segments customers, and pinpoints product-specific churn drivers for targeted retention strategies.",
    categories: [1, 2, 4],
  },
  {
    img: TestimonialImg03,
    // clientImg: ClientImg03,
    agent_name: "Customer Churn Pattern Analysis Agent",
    status: "Non-Recurring",
    integration_list: ["Google Analytics",'Hubspot'],
    summary: "Leverages demographic data to understand why customers leave.",
    content:
      "Identifies and analyzes customer churn patterns by leveraging demographic and transactional data. Defines churn, performs cohort analysis, and investigates behavioral trends to uncover why customers leave. Segments customers and pinpoints high-risk groups for proactive retention efforts.",
    categories: [1, 2, 5],
  },
  {
    img: TestimonialImg04,
    // clientImg: ClientImg04,
    agent_name: "Customer Behavior Pattern Agent",
    status: "Recurring",
    integration_list: ["Posthog",'Hubspot'],
    summary: "Analyzes behavioral patterns of customers while using your platform.",
    content:
      "Uncovers customer churn drivers and behavioral patterns by analyzing historical data for trends, correlations, and anomalies. Segments customers, identifies key behavioral indicators, and provides actionable insights for retention strategies and targeted marketing. Pinpoints critical touchpoints to reduce attrition.",
    categories: [1, 4],
  },
  {
    img: TestimonialImg04,
    // clientImg: ClientImg04,
    agent_name: "Feature Adoption Analysis Agent",
    status: "Recurring",
    integration_list: ["Posthog"],
    summary: "Analyzes how customers are interacting with your specific features.",
    content:
      "Uncovers customer churn drivers and behavioral patterns by analyzing historical data for trends, correlations, and anomalies. Segments customers, identifies key behavioral indicators, and provides actionable insights for retention strategies and targeted marketing. Pinpoints critical touchpoints to reduce attrition.",
    categories: [1, 4],
  },
  {
    img: TestimonialImg04,
    // clientImg: ClientImg04,
    agent_name: "Customer Retention Analysis Agent",
    status: "Recurring",
    integration_list: ["Posthog",'Neon','ClickUp'],
    summary: "Understands what features keep customers engaged with your platform.",
    content:
      "Uncovers customer churn drivers and behavioral patterns by analyzing historical data for trends, correlations, and anomalies. Segments customers, identifies key behavioral indicators, and provides actionable insights for retention strategies and targeted marketing. Pinpoints critical touchpoints to reduce attrition.",
    categories: [1, 3, 4],
  },
  // {
  //   img: TestimonialImg05,
  //   // clientImg: ClientImg05,
  //   agent_name: "High-Value Customer Churn Analyst",
  //   status: "Recurring",
  //   integration_list: ["Postgres"],
  //   summary: "Detects churn risk and recommends actions for high-value customers.",
  //   content:
  //     "Focuses on high-value (Tier 1) customers to proactively detect churn risk, analyze changes in purchase behavior, and deliver actionable retention insights. Flags critical anomalies, prioritizes alerts for your most valuable clients, and recommends immediate actions to maximize customer lifetime value.",
  //   categories: [1, 3, 5],
  // },
];

interface ModalState {
  isOpen: boolean;
  testimonial: {
    img: StaticImageData;
    agent_name: string;
    content: string;
  } | null;
}

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    testimonial: null,
  });

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Explore Sample Agents
          </h2>
          <p className="text-lg text-indigo-200/65"> 
            Get started with one of our pre-built agents for different tasks 
          </p>
        </div>

        <div>
          {/* Buttons */}
          <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
            <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
              {/* Button #1 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 1 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 1}
                onClick={() => setCategory(1)}
              >
                <svg
                  className={`fill-current ${category === 1 ? "text-blue-500" : "text-gray-600"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <path d="M.062 10.003a1 1 0 0 1 1.947.455c-.019.08.01.152.078.19l5.83 3.333c.052.03.115.03.168 0l5.83-3.333a.163.163 0 0 0 .078-.188 1 1 0 0 1 1.947-.459 2.161 2.161 0 0 1-1.032 2.384l-5.83 3.331a2.168 2.168 0 0 1-2.154 0l-5.83-3.331a2.162 2.162 0 0 1-1.032-2.382Zm7.854-7.981-5.83 3.332a.17.17 0 0 0 0 .295l5.828 3.33c.054.031.118.031.17.002l5.83-3.333a.17.17 0 0 0 0-.294L8.085 2.023a.172.172 0 0 0-.17-.001ZM9.076.285l5.83 3.332c1.458.833 1.458 2.935 0 3.768l-5.83 3.333c-.667.38-1.485.38-2.153-.001l-5.83-3.332c-1.457-.833-1.457-2.935 0-3.767L6.925.285a2.173 2.173 0 0 1 2.15 0Z" />
                </svg>
                <span>View All</span>
              </button>
              {/* Button #2 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 2 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 2}
                onClick={() => setCategory(2)}
              >
                <svg
                  className={`fill-current ${category === 2 ? "text-blue-500" : "text-gray-600"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <path d="M6.5 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM9 6.855A3.502 3.502 0 0 0 8 0a3.5 3.5 0 0 0-1 6.855v1.656L5.534 9.65a3.5 3.5 0 1 0 1.229 1.578L8 10.267l1.238.962a3.5 3.5 0 1 0 1.229-1.578L9 8.511V6.855Zm2.303 4.74c.005-.005.01-.01.013-.016l.012-.016a1.5 1.5 0 1 1-.025.032ZM3.5 11A1.497 1.497 0 0 1 5 12.5 1.5 1.5 0 1 1 3.5 11Z" />
                </svg>
                <span>Customer Churn Agents</span>
              </button>
              {/* Button #3 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 3 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 3}
                onClick={() => setCategory(3)}
              >
                <svg
                  className={`fill-current ${category === 3 ? "text-blue-500" : "text-gray-600"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <path d="M2.428 10c.665-1.815 1.98-3.604 3.44-4.802-.6-1.807-1.443-3.079-2.29-3.18-1.91-.227-2.246 2.04-.174 2.962a1 1 0 1 1-.813 1.827C-1.407 5.028-.589-.491 3.815.032c1.605.191 2.925 1.811 3.79 4.07.979-.427 1.937-.51 2.735-.092.818.429 1.143 1.123 1.294 2.148.015.1.022.149.043.32.542-.537 1.003-.797 1.693-.622.64.162.894.493 1.195 1.147l.018.04a1 1 0 0 1 1.133 1.61c-.46.47-1.12.574-1.744.398a1.661 1.661 0 0 1-.87-.592 2.127 2.127 0 0 1-.224-.349 3.225 3.225 0 0 1-.55.477c-.377.253-.8.368-1.259.267-.993-.218-1.21-.779-1.367-2.05-.027-.22-.033-.262-.046-.353-.067-.452-.144-.617-.244-.67-.225-.118-.665-.013-1.206.278.297 1.243.475 2.587.516 3.941H15a1 1 0 0 1 0 2H8.68l-.025.285c-.173 1.918-.906 3.381-2.654 3.668-1.5.246-3.013-.47-3.677-1.858-.29-.637-.39-1.35-.342-2.095H1a1 1 0 0 1 0-2h1.428Zm2.11 0h2.175a18.602 18.602 0 0 0-.284-2.577c-.205.202-.408.42-.606.654A9.596 9.596 0 0 0 4.537 10Zm2.135 2H3.942c-.032.465.03.888.194 1.25.258.538.89.836 1.54.73.546-.09.888-.772.988-1.875L6.673 12Z" />
                </svg>
                <span>Retention Agents</span>
              </button>
              {/* Button #4 */}
              <button
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 4 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                aria-pressed={category === 4}
                onClick={() => setCategory(4)}
              >
                <svg
                  className={`fill-current ${category === 4 ? "text-blue-500" : "text-gray-600"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height={16}
                >
                  <path d="M3.757 3.758a6 6 0 0 1 8.485 8.485 5.992 5.992 0 0 1-5.301 1.664 1 1 0 1 0-.351 1.969 8 8 0 1 0-4.247-2.218 1 1 0 0 0 1.415-.001L9.12 8.294v1.827a1 1 0 1 0 2 0v-4.2a.997.997 0 0 0-1-1.042H5.879a1 1 0 1 0 0 2h1.829l-4.599 4.598a6 6 0 0 1 .648-7.719Z" />
                </svg>
                <span>Customer Behavior Agents</span>
              </button>
              {/* Button #5 */}
              <a href="https://nexus-ba-platform.vercel.app/" className="cursor-pointer flex items-center h-8">
                <button
                  className={`flex h-8 flex-1 items-center hover:cursor-pointer gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 5 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
                >
                  <svg
                    className={`fill-current ${category === 5 ? "text-blue-500" : "text-gray-600"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height={16}
                  >
                    <path d="M13.95.879a3 3 0 0 0-4.243 0L1.293 9.293a1 1 0 0 0-.274.51l-1 5a1 1 0 0 0 1.177 1.177l5-1a1 1 0 0 0 .511-.273l1.16-1.16a1 1 0 0 0-1.414-1.414l-.946.946-3.232.646.646-3.232 8.2-8.2a1 1 0 0 1 1.414 0l1.172 1.172a1 1 0 0 1 0 1.414l-.55.549a1 1 0 0 0 1.415 1.414l.55-.55a3 3 0 0 0 0-4.241L13.948.879ZM3.25 4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm11.474 6.029-1.521-.752-.752-1.521c-.168-.341-.73-.341-.896 0l-.752 1.52-1.521.753a.498.498 0 0 0 0 .896l1.52.752.753 1.52a.5.5 0 0 0 .896 0l.752-1.52 1.52-.752a.498.498 0 0 0 0-.896Z" />
                  </svg>
                  <span>Build Your Own</span>
                </button>
              </a>
            </div>
          </div>

          {/* Cards */}
          <div
            className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
            ref={masonryContainer}
          >
            {testimonials_1.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial 
                  testimonial={testimonial} 
                  category={category}
                  onExpand={(t) => setModal({ isOpen: true, testimonial: t })}
                >
                  {testimonial.content}
                </Testimonial>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 transition-opacity duration-300 ${modal.isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div 
          className={`fixed inset-0 bg-gray-900/75 backdrop-blur-sm transition-opacity duration-300 ${modal.isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setModal({ isOpen: false, testimonial: null })}
        ></div>
        {modal.testimonial && (
          <div className={`relative max-h-[90vh] w-full px-10 item-center justify-center max-w-2xl overflow-auto rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] transition-all duration-300 ${modal.isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0'}`}>
            <div className="flex justify-end mb-2">
              <button
                className="rounded-full p-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 transition-colors"
                onClick={() => setModal({ isOpen: false, testimonial: null })}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* <div className="mb-6 aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-700/50">
              <Image
                src={modal.testimonial.img}
                alt={modal.testimonial.agent_name}
                className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                width={1200}
                height={675}
              />
            </div> */}
            
            <h3 className="mb-4 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-2xl font-semibold text-transparent md:text-3xl">
              {modal.testimonial.agent_name}
            </h3>
            
            <p className="text-base text-gray-200/80 leading-relaxed">
              {modal.testimonial.content}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  category,
  children,
  onExpand,
}: {
  testimonial: {
    img: StaticImageData;
    // clientImg: StaticImageData;
    agent_name: string;
    status: string;
    integration_list: string[];
    summary: string;
    content: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
  onExpand: (testimonial: { img: StaticImageData; agent_name: string; content: string }) => void;
}) {
  return (
    <article
      className={`relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ${!testimonial.categories.includes(category) ? "opacity-30" : ""}`}
    >
      <div className="flex flex-col gap-2">
        {/* <div className="mb-4 aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-700/50">
          <Image
            src={testimonial.img}
            alt={testimonial.agent_name}
            className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
            width={800}
            height={450}
          />
        </div> */}
        <h4 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle font-semibold text-transparent text-2xl md:text-2xl">
          {testimonial.agent_name}
        </h4>
        <p className="text-indigo-200/65 break-words">
          {testimonial.summary}
        </p>
        <div className="flex items-center gap-3">
          <div className="text-sm font-medium text-gray-200 w-full">
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex justify-between items-center">
                <span className="flex flex-row flex-wrap gap-1 pr-4">
                  {testimonial.integration_list.map((integration, index) => (
                    <span key={index} className="transition-colors hover:text-indigo-500 flex flex-row items-center gap-1 font-bold">
                      {integration}
                      {index < testimonial.integration_list.length - 1 && (
                        <span className="text-gray-500">·</span>
                      )}
                    </span>
                  ))}
                </span>
                <button
                  className="h-7 w-7 flex items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 hover:bg-gray-700/65 transition-colors flex-shrink-0 hover:cursor-pointer"
                  onClick={() => onExpand({ img: testimonial.img, agent_name: testimonial.agent_name, content: testimonial.content })}
                  aria-label="View full testimonial"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full mt-6">
          <button
            className="mx-auto px-8 py-2 bg-linear-to-t font-nacelle font-semibold from-blue-400 to-blue-800 bg-[length:100%_100%] bg-[bottom] flex w-full items-center justify-center rounded-xl border border-gray-700/50 bg-blue-800/65 text-gray-200 hover:bg-blue-700/65 transition-colors hover:cursor-pointer"
            aria-label="Use agent now"
          >
            Use Agent Now
          </button>
        </div>
      </div>
    </article>
  );
}
