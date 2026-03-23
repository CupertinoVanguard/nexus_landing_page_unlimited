"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";

const NAVY = "#1e3a5f";

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 shadow-sm backdrop-blur-md"
          : "py-4"
      }`}
      style={{
        background: scrolled ? "rgba(235, 241, 248, 0.92)" : "transparent",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>

          <ul className="flex items-center gap-3 sm:gap-4">
            {/* <li>
              <Link
                href="https://nexus-ba-platform.vercel.app/register"
                className="text-sm font-semibold transition-colors"
                style={{ fontFamily: "Helvetica, Arial, sans-serif", color: NAVY }}
              >
                Log In
              </Link>
            </li> */}
            <li>
              <Link
                href="/blogs"
                className="text-sm font-semibold transition-colors"
                style={{ fontFamily: "Helvetica, Arial, sans-serif", color: NAVY }}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="https://cal.com/nikhilpillai/nexus-15-min-intro-call"
                className="text-sm px-4 py-2 font-semibold text-white hover:opacity-90 transition-colors rounded"
                style={{ fontFamily: "Helvetica, Arial, sans-serif", background: NAVY }}
              >
                Book a Demo <span className="ml-1 opacity-50">&rarr;</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
