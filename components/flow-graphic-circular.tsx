// Flow graphic showing integrations arranged in a circular arc connecting to Nexus

export default function FlowGraphicCircular() {
  // Circle center and radius - shifted more to the right
  const centerX = 850;
  const centerY = 450;
  const radius = 350;
  
  // Calculate positions on the circle
  // angle in degrees, converted to radians for calculation
  const getPosition = (degrees: number) => {
    const radians = (degrees * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(radians),
      y: centerY + radius * Math.sin(radians)
    };
  };
  
  // Position integrations along the left arc of the circle
  const hubspotPos = getPosition(135);      // top-left
  const salesforcePos = getPosition(170);   // left-upper  
  const attioPos = getPosition(200);        // left-lower
  const hubspot2Pos = getPosition(225);     // bottom-left
  const nexusPos = getPosition(0);          // right side (0 degrees)
  
  return (
    <div className="mx-auto my-1 w-full max-w-6xl">
      <svg
        viewBox="0 0 1600 900"
        role="img"
        aria-label="Integrations flowing to Nexus"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Dashed circle connecting all integrations and completing at Nexus */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="#ff6b6b"
          strokeWidth="3"
          strokeDasharray="10,10"
          opacity="0.5"
        />

        {/* Left side integrations - arranged along the circle */}
        
        {/* HubSpot - top left */}
        <g transform={`translate(${hubspotPos.x},${hubspotPos.y})`}>
          <rect x="-70" y="-70" width="140" height="140" rx="20" fill="#000000" />
          <image
            href="/images/hubspot_transparent.png"
            x="-50"
            y="-50"
            width="100"
            height="100"
            preserveAspectRatio="xMidYMid meet"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </g>
        
        {/* Salesforce - left */}
        <g transform={`translate(${salesforcePos.x},${salesforcePos.y})`}>
          <rect x="-110" y="-60" width="220" height="120" rx="60" fill="#000000" />
          <text 
            x="0" 
            y="10" 
            textAnchor="middle" 
            fill="#ffffff" 
            fontSize="32" 
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
          >
            salesforce
          </text>
        </g>
        
        {/* Attio - lower left */}
        <g transform={`translate(${attioPos.x},${attioPos.y})`}>
          <rect x="-70" y="-70" width="140" height="140" rx="20" fill="#000000" />
          <text 
            x="0" 
            y="10" 
            textAnchor="middle" 
            fill="#ffffff" 
            fontSize="36" 
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
          >
            attio
          </text>
        </g>
        
        {/* HubSpot text - bottom left */}
        <g transform={`translate(${hubspot2Pos.x},${hubspot2Pos.y})`}>
          <rect x="-70" y="-70" width="140" height="140" rx="20" fill="#000000" />
          <text 
            x="0" 
            y="10" 
            textAnchor="middle" 
            fill="#ffffff" 
            fontSize="32" 
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
          >
            HubSpot
          </text>
        </g>

        {/* Right side - Nexus logo where the circle completes (at 0 degrees) */}
        <g transform={`translate(${nexusPos.x},${nexusPos.y})`}>
          <image
            href="/images/nexuslogo (3) (1).png"
            x="-95"
            y="-95"
            width="190"
            height="190"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
      </svg>
    </div>
  );
}


