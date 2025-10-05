// Static SVG graphic: three source logos on the left merge at the center hub (Nexus),
// then flow to the destination (Slack) on the right.

export default function FlowGraphic() {
  return (
    <div className="mx-auto my-1 w-full">
      <svg
        viewBox="0 0 2000 220"
        role="img"
        aria-label="Integrations flowing through Nexus to Slack"
        className="w-full h-[220px] sm:h-[260px] md:h-[300px]"
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

        {/* main backbone (base, neon blue faint) */}
       
        <line x1="40" y1="120" x2="1960" y2="120" stroke="#00e5ff" strokeWidth="7" opacity="0.25" />
        {/* twin sweeps meeting in the middle at the same time */}
        {/* left half: 40 -> 1000 (starts immediately) */}
        <line
          x1="40"
          y1="120"
          x2="1000"
          y2="120"
          stroke="#00e5ff"
          strokeWidth="12"
          strokeDasharray="960"
          strokeDashoffset="960"
        >
          <animate attributeName="stroke-dashoffset" from="960" to="0" dur="3s" begin="0s" repeatCount="indefinite" />
        </line>
        {/* right half: 1960 -> 1000 (starts simultaneously) */}
        <line
          x1="1960"
          y1="120"
          x2="1000"
          y2="120"
          stroke="#00e5ff"
          strokeWidth="12"
          strokeDasharray="960"
          strokeDashoffset="960"
          opacity="0.9"
        >
          <animate attributeName="stroke-dashoffset" from="960" to="0" dur="3s" begin="0s" repeatCount="indefinite" />
        </line>

        {/* remove vertical branches - all logos sit on the main line */}

        {/* center hub (Nexus) */}
        <circle cx="1000" cy="120" r="110" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="3" />
        <image
          href="/images/nexuslogo (3) (1).png"
          x="890"
          y="10"
          width="220"
          height="220"
          preserveAspectRatio="xMidYMid meet"
        />

        {/* path from hub to destination (overlay for emphasis) */}
        <polyline points="1000,120 1800,120 1800,120" stroke="#00e5ff" strokeWidth="7" fill="none" filter="url(#glow)" />

        {/* source logos (left on the main line, wider spacing, smaller size) */}
        <g transform="translate(40,120)">
          {/* white background behind logo */}
          <circle cx="0" cy="0" r="36" fill="#ffffff" />
          {/* ring */}
          <circle cx="0" cy="0" r="36" fill="none" stroke="#ffffff" strokeWidth="2" />
          <image
            href="/images/snowflake.png"
            x="-32"
            y="-32"
            width="64"
            height="64"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
        {/* additional logos before hub (same size and style) */}
        <g transform="translate(580,120)">
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
        </g>
        <g transform="translate(220,120)">
          <circle cx="0" cy="0" r="36" fill="#ffffff" />
          <circle cx="0" cy="0" r="36" fill="none" stroke="#ffffff" strokeWidth="2" />
          <image
            href="/images/hubspot.png"
            x="-32"
            y="-32"
            width="64"
            height="64"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
        <g transform="translate(400,120)">
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
        </g>

        {/* additional logos after hub (same spacing) */}
        <g transform="translate(1310,120)">
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
        </g>
        <g transform="translate(1490,120)">
          <circle cx="0" cy="0" r="36" fill="#ffffff" />
          <circle cx="0" cy="0" r="36" fill="none" stroke="#ffffff" strokeWidth="2" />
          <image
            href="/images/neon_logo.png"
            x="-32"
            y="-32"
            width="64"
            height="64"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
        <g transform="translate(1670,120)">
          <circle cx="0" cy="0" r="36" fill="#ffffff" />
          <circle cx="0" cy="0" r="36" fill="none" stroke="#ffffff" strokeWidth="2" />
          <image
            href="/images/supabase_background_removed.png"
            x="-32"
            y="-32"
            width="64"
            height="64"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>

        {/* destination (Slack) */}
        <g transform="translate(1920,120)">
          {/* white background behind Slack logo */}
          <circle cx="0" cy="0" r="40" fill="#ffffff" />
          {/* ring */}
          <circle cx="0" cy="0" r="46" fill="none" stroke="rgba(255,255,255,0.3)" />
          <image
            href="https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png"
            x="-40"
            y="-40"
            width="80"
            height="80"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
      </svg>
    </div>
  );
}


