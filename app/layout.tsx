import "./css/style.css";

import { Manrope, IBM_Plex_Mono } from "next/font/google";

import Header from "@/components/ui/header";

// Geometric grotesque used for the display/UI stack.
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata = {
  title: "Nexus — Monitor your AI agents in production",
  description:
    "The AI engineer that watches and fixes your agents in realtime. Catch silent failures, get root-cause on autopilot, ship the fix.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Font variables live on <html> so the `@theme` font stacks, which are
    // emitted on :root, can resolve them.
    <html lang="en" className={`${manrope.variable} ${plexMono.variable}`}>
      <body className="font-sans bg-bg text-base text-fg antialiased">
        <div className="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
