"use client";

import Link from "next/link";
import { WAITLIST_URL, DEMO_URL } from "@/lib/links";

const COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Join the waitlist", href: WAITLIST_URL },
      { label: "Book a demo", href: DEMO_URL },
    ],
  },
  {
    heading: "Social",
    links: [
      { label: "X", href: "https://x.com/nikpil06" },
      { label: "LinkedIn", href: "https://linkedin.com/company/nexus-ai-core" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-bg">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2">
          <div>
            <p className="text-[15px] font-semibold tracking-tight text-fg">
              Nexus
            </p>
            <p className="mt-2 font-mono text-[13px] text-fg-subtle">
              The AI context engine for your deployments
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:justify-items-end">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="mb-4 text-[13px] text-fg-subtle">{col.heading}</p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-fg-muted transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-edge py-6">
          <span className="font-mono text-[12px] text-fg-subtle">
            © 2026 trynexus.io
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="text-fg-subtle transition-colors hover:text-fg"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
