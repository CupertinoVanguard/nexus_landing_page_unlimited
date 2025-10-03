"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex items-center justify-between gap-3">
          {/* Site branding */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex items-center justify-end gap-3">
            <li>
              <Link
                href="https://tally.so/r/3l187v"
                className="btn-sm relative py-[5px] text-white before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                Join the Waitlist
              </Link>
            </li>
            <li>
              <Link
                href="https://calendly.com/nikilpillai2002/30min?month=2025-08"
                className="btn-sm py-[5px] bg-white text-black hover:bg-gray-100"
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                Schedule Demo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
