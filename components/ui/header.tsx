"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
import { WAITLIST_URL, DEMO_URL } from "@/lib/links";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b border-edge bg-bg/85 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "py-3 shadow-sm" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 min-[380px]:px-5 sm:px-10">
        <div className="flex items-center justify-between">
          <Logo />

          <nav className="flex items-center gap-3 sm:gap-8">
            <Link
              href="/blogs"
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-fg-muted transition-colors hover:text-fg sm:text-xs sm:tracking-[0.14em]"
            >
              Blog
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href={DEMO_URL}
                className="hidden items-center gap-1.5 bg-fg px-4 py-1.5 text-sm font-medium text-bg transition-colors hover:bg-fg-muted sm:inline-flex"
              >
                Book a demo
                <span aria-hidden="true">&rarr;</span>
              </Link>

              <Link
                href={WAITLIST_URL}
                className="inline-flex items-center gap-1.5 whitespace-nowrap bg-accent px-3 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-accent-hover sm:px-4 sm:text-sm"
              >
                <span className="sm:hidden">Waitlist</span>
                <span className="hidden sm:inline">Join the waitlist</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
