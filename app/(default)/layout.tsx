"use client";

import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/ui/footer";

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [posthogInitialized, setPosthogInitialized] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });

    // Initialize PostHog only on client side
    if (typeof window !== 'undefined' && !posthog.__loaded) {
      posthog.init("phc_A3c4wBC7ZxZ1uOpnJ8Jdb7qaoJdUvdY4sV2WOTeCklo", {
        api_host: "https://us.i.posthog.com",
        loaded: (posthog) => {
          setPosthogInitialized(true);
        },
        defaults: "2025-05-24",
      });
    } else if (posthog.__loaded) {
      setPosthogInitialized(true);
    }
  }, []);

  return (
    <>
      {posthogInitialized ? (
        <PostHogProvider client={posthog}>
          <main className="relative flex grow flex-col">{children}</main>
          <Footer />
        </PostHogProvider>
      ) : (
        <>
          <main className="relative flex grow flex-col">{children}</main>
          <Footer />
        </>
      )}
    </>
  );
}
