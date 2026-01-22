'use client'
import Image from "next/image";
import Braintrust from "@/public/images/braintrust_logo.png";
import Linear from "@/public/images/linear.png";
import Langfuse from "@/public/images/langfuse_logo.png";
import GitHub from "@/public/images/github_logo.png";
import Slack from "@/public/images/slack.png";

type Logo = { src: any; alt: string };

const allLogos: Logo[] = [
  { src: Braintrust, alt: "Braintrust" },
  { src: Linear, alt: "Linear" },
  { src: Langfuse, alt: "Langfuse" },
  { src: GitHub, alt: "GitHub" },
  { src: Slack, alt: "Slack" },
];

export default function IntegrationTickerGraphic() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-scroll {
          width: 200%;
          animation: marqueeX 30s linear infinite;
        }
      `}} />
      {/* Scrolling ticker for small screens */}
      <div className="w-full overflow-hidden sm:hidden">
        <ul className="flex flex-row items-center gap-4 ticker-scroll">
          {[...allLogos, ...allLogos].map((logo, idx) => (
            <li key={idx} className="flex-shrink-0">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="object-contain" 
                  width={24} 
                  height={24}
                  style={logo.alt === "GitHub" ? { filter: "invert(1)" } : undefined}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Stationary logos for larger screens */}
      <div className="hidden sm:flex w-full justify-center">
        <ul className="flex flex-row items-center gap-4">
          {allLogos.map((logo, idx) => (
            <li key={idx} className="flex-shrink-0">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="object-contain" 
                  width={24} 
                  height={24}
                  style={logo.alt === "GitHub" ? { filter: "invert(1)" } : undefined}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

