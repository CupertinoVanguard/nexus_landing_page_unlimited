'use client'
import Image from "next/image";

interface IntegrationGlobeProps {
  logos?: Array<{ src: string; alt: string }>;
}

export default function IntegrationGlobe({ logos }: IntegrationGlobeProps) {
  // Default logos - arranged in fan shape at top
  const defaultLogos = logos || [
    { src: "/images/posthog.png", alt: "PostHog" },
    { src: "/images/linear.png", alt: "Linear" },
    { src: "/images/slack.png", alt: "Slack" },
    { src: "/images/posthog.png", alt: "Tool 4" },
    { src: "/images/linear.png", alt: "Tool 5" },
  ];

  // Layout - 5 icons in fan at top, 1 central at bottom
  const svgWidth = 100;
  const svgHeight = 100;
  const centerX = 50;
  const topY = 20; // Top icons
  const bottomY = 80; // Bottom central icon
  
  // Calculate positions for fan arrangement at top
  const logoPositions = defaultLogos.map((_, index) => {
    // Spread across arc - wider spread
    const spread = 60; // Total spread percentage
    const startX = centerX - spread / 2;
    const spacing = spread / (defaultLogos.length - 1);
    const x = startX + (spacing * index);
    return {
      x,
      y: topY,
    };
  });

  return (
    <div className="relative w-full h-full min-h-[400px] flex flex-col items-center justify-between py-8">
      {/* Top row - logos in fan arrangement */}
      <div className="flex justify-center items-center gap-4 w-full px-4 relative z-10">
        {defaultLogos.map((logo, index) => (
          <div
            key={index}
            className="w-14 h-14 rounded-full overflow-hidden bg-gray-800 border-2 border-gray-700 shadow-lg flex-shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={56}
              height={56}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        ))}
      </div>

      {/* SVG for connecting lines */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: 'visible' }}
      >
        {/* Connection lines - simple curved lines from top to bottom */}
        {logoPositions.map((logoPos, index) => {
          const logoX = logoPos.x;
          const logoY = topY + 7; // Bottom of top icon
          const centerIconTop = bottomY - 10; // Top of bottom icon
          
          // Control point for slight curve
          const controlX = (logoX + centerX) / 2;
          const controlY = (logoY + centerIconTop) / 2;
          
          return (
            <path
              key={`line-${index}`}
              d={`M ${logoX} ${logoY} Q ${controlX} ${controlY} ${centerX} ${centerIconTop}`}
              stroke="#E5E7EB"
              strokeWidth="0.5"
              fill="transparent"
              strokeLinecap="round"
            />
          );
        })}
      </svg>

      {/* Central icon at bottom - with horizontal bars */}
      <div className="relative w-20 h-20 rounded-full bg-gray-800 border-2 border-gray-700 shadow-xl flex items-center justify-center flex-shrink-0 z-10">
        <div className="w-14 h-14 flex flex-col justify-center gap-1.5 px-2">
          {/* Horizontal bars - varying colors like description */}
          <div className="h-1.5 bg-pink-400 rounded-full" style={{ width: '40%' }}></div>
          <div className="h-1.5 bg-blue-300 rounded-full" style={{ width: '70%' }}></div>
          <div className="h-1.5 bg-white rounded-full" style={{ width: '30%' }}></div>
          <div className="h-1.5 bg-purple-400 rounded-full" style={{ width: '65%' }}></div>
          <div className="h-1.5 bg-green-400 rounded-full" style={{ width: '35%' }}></div>
        </div>
      </div>
    </div>
  );
}

