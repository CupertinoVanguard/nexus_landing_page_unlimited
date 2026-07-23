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
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-edge bg-bg/80 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex items-center justify-between">
          <Logo />

          <nav className="flex items-center gap-2 sm:gap-3">
            <Link
              href={DEMO_URL}
              className="rounded-full border border-edge-strong px-4 py-1.5 text-sm text-fg-muted transition-colors hover:border-fg-ghost hover:text-fg"
            >
              Book a demo
            </Link>

            <Link
              href={WAITLIST_URL}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Join the waitlist
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
