'use client'
import Image from "next/image";

export default function IntegrationHubGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Horizontal arrangement: Slack - Nexus - Linear */}
      <div className="flex items-center justify-center gap-4">
        {/* Left - Slack (smaller) */}
        <div className="w-10 h-10 rounded-xl bg-white shadow-lg flex items-center justify-center flex-shrink-0">
          <Image
            src="/images/slack.png"
            alt="Slack"
            width={40}
            height={40}
            className="w-full h-full object-contain p-1.5"
          />
        </div>

        {/* Center - Nexus icon (bigger) */}
        <div className="relative z-10 w-20 h-20 rounded-xl bg-blue-200 shadow-2xl flex items-center justify-center flex-shrink-0">
          <Image
            src="/images/nexuslogo (3) (1).png"
            alt="Nexus"
            width={80}
            height={80}
            className="w-full h-full object-contain p-2"
          />
        </div>

        {/* Right - Linear (smaller) */}
        <div className="w-10 h-10 rounded-xl bg-white shadow-lg flex items-center justify-center flex-shrink-0">
          <Image
            src="/images/linear.png"
            alt="Linear"
            width={40}
            height={40}
            className="w-full h-full object-contain p-1.5"
          />
        </div>
      </div>
    </div>
  );
}

