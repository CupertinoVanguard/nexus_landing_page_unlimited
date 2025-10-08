// Static SVG graphic: three source logos on the left merge at the center hub (Nexus),
// then flow to the destination (Slack) on the right.

export default function FlowGraphic() {
  return (
    <div className="mx-auto my-1 w-full">
      <svg
        viewBox="-15 0 2000 220"
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




        {/* vertical branch from hub to destination */}
        <line x1="1050" y1="0" x2="1050" y2="305" stroke="#00e5ff" strokeWidth="12"  />
        {/* horizontal branch from previous vertical branch to the right */}
        <line x1="1400" y1="300" x2="1045" y2="300" stroke="#00e5ff" strokeWidth="12"   />

         {/* vertical branch from hub to destination */}
         <line x1="950" y1="0" x2="950" y2="305" stroke="#00e5ff" strokeWidth="12" />
        {/* horizontal branch from previous vertical branch to the left */}
        <line x1="600" y1="300" x2="955" y2="300" stroke="#00e5ff" strokeWidth="12" opacity="0.25"/>

         {/* vertical branch from hub to destination */}
         <line x1="1050" y1="0" x2="1050" y2="-105" stroke="#00e5ff" strokeWidth="12" />
        {/* horizontal branch from previous vertical branch to the right */}
        <line x1="1400" y1="-100" x2="1045" y2="-100" stroke="#00e5ff" strokeWidth="12" opacity="0.25" />


         {/* vertical branch from hub to destination */}
         <line x1="950" y1="0" x2="950" y2="-105" stroke="#00e5ff" strokeWidth="12"  />
        {/* horizontal branch from previous vertical branch to the left */}
        <line x1="600" y1="-100" x2="955" y2="-100" stroke="#00e5ff" strokeWidth="12"    />

        



        {/* center hub (Nexus) */}
        <circle cx="1000" cy="120" r="110" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="3" />
        <image
          href="/images/nexuslogo (3) (1).png"
          x="820"
          y="-60"
          width="350"
          height="350"
          preserveAspectRatio="xMidYMid meet"
        />

        {/* path from hub to destination (overlay for emphasis) */}
        <polyline points="1000,120 1800,120 1800,120" stroke="#00e5ff" strokeWidth="7" fill="none" filter="url(#glow)" />

        {/* source logos (left on the main line, wider spacing, smaller size) */}
        <g transform="translate(40,120)">
          {/* white background behind logo */}
          <circle cx="0" cy="0" r="55" fill="#ffffff" />
          {/* ring */}
          <circle cx="0" cy="0" r="36" fill="none" stroke="#ffffff" strokeWidth="2" />
          <image
            href="/images/posthog.png"
            x="-50"
            y="-50"
            width="100"
            height="100"
            preserveAspectRatio="xMidYMid meet"
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
        <g transform="translate(600,-100)">
          <circle cx="0" cy="0" r="36" fill="#ffffff" />
          <circle cx="0" cy="0" r="36" fill="none" stroke="#ffffff" strokeWidth="2" />
          <image
            href="/images/hubspot_transparent.png"
            x="-32"
            y="-30"
            width="64"
            height="64"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
        <g transform="translate(600,300)">
          <circle cx="0" cy="0" r="36" fill="#ffffff" />
          <circle cx="0" cy="0" r="36" fill="none" stroke="#ffffff" strokeWidth="2" />
          <image
            href="/images/zendesk.svg"
            x="-27"
            y="-25"
            width="54"
            height="54"
            preserveAspectRatio="xMidYMid meet"
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
        <g transform="translate(1400,-100)">
          <circle cx="0" cy="0" r="36" fill="#ffffff" />
          <circle cx="0" cy="0" r="36" fill="none" stroke="#ffffff" strokeWidth="2" />
          <image
            href="/images/neon.avif"
            x="-27"
            y="-27"
            width="54"
            height="54"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
        <g transform="translate(1400,300)">
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
          <circle cx="0" cy="0" r="55" fill="#ffffff" />
          {/* ring */}
          <circle cx="0" cy="0" r="46" fill="none" stroke="rgba(255,255,255,0.3)" />
          <image
            href="/images/slack.png"
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


