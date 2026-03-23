import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  fallback: ["cursive"],
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <div className={lora.className}>{children}</div>;
}
