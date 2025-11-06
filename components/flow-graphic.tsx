// Static SVG graphic: three source logos on the left merge at the center hub (Nexus),
// then flow to the destination (Slack) on the right.

export default function FlowGraphic() {
  return (
    <div className="mx-auto my-1 w-full">
      <svg
        viewBox="-100 -250 2200 600"
        role="img"
        aria-label="Integrations flowing through Nexus to Slack"
        className="w-full h-[250px] sm:h-[400px] md:h-[450px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* soft glow for lines */}
          {/* soft glow for lines */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Top center: Slack - straight down to hub */}
        <line x1="1000" y1="-420" x2="1000" y2="120" stroke="#00e5ff" strokeWidth="6" opacity="0.3" />
        {/* Slack animated pulse */}
        <line
          x1="1000"
          y1="-420"
          x2="1000"
          y2="120"
          stroke="#00e5ff"
          strokeWidth="12"
          strokeDasharray="140 400"
          strokeDashoffset="540"
          opacity="1"
        >
          <animate attributeName="stroke-dashoffset" from="540" to="0" dur="3s" begin="0.7s" repeatCount="indefinite" />
        </line>




        {/* Bottom right path - curved connection from Supabase to hub */}
        <path d="M 1750,420 L 1070,420 Q 1050,420 1050,400 L 1050,140 Q 1050,120 1030,120 L 1000,120" fill="none" stroke="#00e5ff" strokeWidth="6" opacity="0.3" />
        {/* Bottom right path - animated pulse */}
        <path d="M 1750,420 L 1070,420 Q 1050,420 1050,400 L 1050,140 Q 1050,120 1030,120 L 1000,120" fill="none" stroke="#00e5ff" strokeWidth="12" 
          strokeDasharray="140 850" strokeDashoffset="990" opacity="1" pathLength="990">
          <animate attributeName="stroke-dashoffset" from="990" to="0" dur="3s" begin="1.5s" repeatCount="indefinite" />
        </path>

         {/* Bottom left path - curved connection from Zendesk to hub */}
         <path d="M 250,420 L 930,420 Q 950,420 950,400 L 950,140 Q 950,120 970,120 L 1000,120" fill="none" stroke="#00e5ff" strokeWidth="6" opacity="0.3" />
         {/* Bottom left path - animated pulse */}
         <path d="M 250,420 L 930,420 Q 950,420 950,400 L 950,140 Q 950,120 970,120 L 1000,120" fill="none" stroke="#00e5ff" strokeWidth="12" 
          strokeDasharray="140 850" strokeDashoffset="990" opacity="1" pathLength="990">
          <animate attributeName="stroke-dashoffset" from="990" to="0" dur="3s" begin="2.3s" repeatCount="indefinite" />
        </path>

         {/* Top right path - curved connection from Posthog to hub */}
         <path d="M 1750,-220 L 1070,-220 Q 1050,-220 1050,-200 L 1050,100 Q 1050,120 1030,120 L 1000,120" fill="none" stroke="#00e5ff" strokeWidth="6" opacity="0.3" />
         {/* Top right path - animated pulse */}
         <path d="M 1750,-220 L 1070,-220 Q 1050,-220 1050,-200 L 1050,100 Q 1050,120 1030,120 L 1000,120" fill="none" stroke="#00e5ff" strokeWidth="12" 
          strokeDasharray="140 850" strokeDashoffset="990" opacity="1" pathLength="990">
          <animate attributeName="stroke-dashoffset" from="990" to="0" dur="3s" begin="4.1s" repeatCount="indefinite" />
        </path>


         {/* Top left path - curved connection from Hubspot to hub */}
         <path d="M 250,-220 L 930,-220 Q 950,-220 950,-200 L 950,100 Q 950,120 970,120 L 1000,120" fill="none" stroke="#00e5ff" strokeWidth="6" opacity="0.3" />
         {/* Top left path - animated pulse */}
         <path d="M 250,-220 L 930,-220 Q 950,-220 950,-200 L 950,100 Q 950,120 970,120 L 1000,120" fill="none" stroke="#00e5ff" strokeWidth="12" 
          strokeDasharray="140 850" strokeDashoffset="990" opacity="1" pathLength="990">
          <animate attributeName="stroke-dashoffset" from="990" to="0" dur="3s" begin="0.2s" repeatCount="indefinite" />
        </path>

        



        {/* center hub (Nexus) - much larger */}
        <circle cx="1000" cy="120" r="110" fill="rgba(40,20,30,0.9)" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
        <image
          href="/images/nexuslogo (3) (1).png"
          x="820"
          y="-60"
          width="360"
          height="360"
          preserveAspectRatio="xMidYMid meet"
        />

        {/* Slack logo - top center */}
        <g transform="translate(1000,-420)">
          <circle cx="0" cy="0" r="68" fill="rgba(30,30,40,0.8)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <image
            href="/images/slack.png"
            x="-42"
            y="-42"
            width="84"
            height="84"
            preserveAspectRatio="xMidYMid meet"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </g>
        {/* additional logos before hub (same size and style) */}
        {/* <g transform="translate(580,120)">
          <circle cx="0" cy="0" r="36" fill="#ffffff" />
          <circle cx="0" cy="0" r="36" fill="none" stroke="#ffffff" strokeWidth="2" />
          <image
            href="/images/amplitude.png"
            x="-32"
            y="-32"
            width="64"
            height="64"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
        <g transform="translate(760,120)">
          <circle cx="0" cy="0" r="36" fill="#ffffff" />
          <circle cx="0" cy="0" r="36" fill="none" stroke="#ffffff" strokeWidth="2" />
          <image
            href="/images/mixpanel.png"
            x="-32"
            y="-32"
            width="64"
            height="64"
            preserveAspectRatio="xMidYMid meet"
          />
        </g> */}
        {/* Hubspot - top left */}
        <g transform="translate(250,-220)">
          <circle cx="0" cy="0" r="68" fill="rgba(30,30,40,0.8)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <image
            href="/images/hubspot_transparent.png"
            x="-42"
            y="-42"
            width="84"
            height="84"
            preserveAspectRatio="xMidYMid meet"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </g>
        {/* Zendesk - bottom left */}
        <g transform="translate(250,420)">
          <circle cx="0" cy="0" r="68" fill="rgba(30,30,40,0.8)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <image
            href="/images/zendesk.svg"
            x="-42"
            y="-42"
            width="84"
            height="84"
            preserveAspectRatio="xMidYMid meet"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </g>
        {/* <g transform="translate(400,120)">
          <circle cx="0" cy="0" r="36" fill="#ffffff" />
          <circle cx="0" cy="0" r="36" fill="none" stroke="#ffffff" strokeWidth="2" />
          <image
            href="/images/posthog.png"
            x="-32"
            y="-32"
            width="64"
            height="64"
            preserveAspectRatio="xMidYMid meet"
          />
        </g> */}

        {/* additional logos after hub (same spacing) */}
        {/* <g transform="translate(1310,120)">
          <circle cx="0" cy="0" r="36" fill="#ffffff" />
          <circle cx="0" cy="0" r="36" fill="none" stroke="#ffffff" strokeWidth="2" />
          <image
            href="/images/google-analytics.png"
            x="-32"
            y="-32"
            width="64"
            height="64"
            preserveAspectRatio="xMidYMid meet"
          />
        </g> */}
        {/* Posthog - top right */}
        <g transform="translate(1750,-220)">
          <circle cx="0" cy="0" r="68" fill="rgba(30,30,40,0.8)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <image
            href="/images/posthog.png"
            x="-42"
            y="-42"
            width="84"
            height="84"
            preserveAspectRatio="xMidYMid meet"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </g>
        {/* Supabase - bottom right */}
        <g transform="translate(1750,420)">
          <circle cx="0" cy="0" r="68" fill="rgba(30,30,40,0.8)" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <image
            href="/images/supabase_background_removed.png"
            x="-42"
            y="-42"
            width="84"
            height="84"
            preserveAspectRatio="xMidYMid meet"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </g>
      </svg>
    </div>
  );
}


