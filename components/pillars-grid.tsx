/* Four-up "why us" section, as an even 2x2 quadrant.
 *
 * Icons are thin wireframe line art in the spirit of Linear's feature
 * panels. They all share one square viewBox and are drawn to fill a
 * consistent inset within it, so the four read as a matched set at the
 * same optical weight — an earlier pass used a wide 200x150 box per icon
 * with wildly different content bounds, which made them look randomly
 * sized and left large dead space in each cell.
 *
 * Cells flow naturally (label -> icon -> title -> body) with tight,
 * uniform gaps rather than being pinned to the top and bottom of a tall
 * fixed-height box; the CSS grid equalises row heights on its own.
 */

type Pillar = {
  label: string;
  title: string;
  body: string;
  icon: React.ReactNode;
};

const ICON_CLASS = "h-24 w-24 sm:h-28 sm:w-28";
const ICON_VIEWBOX = "0 0 120 120";
const ICON_STROKE =
  "stroke-fg-subtle [stroke-width:1.1] fill-none [stroke-linecap:round] [stroke-linejoin:round]";

/* Context graph. Nodes are placed irregularly with varied sizes and
 * edges of uneven length, some crossing, so it reads as an organic graph
 * rather than a tidy hub-and-spoke diagram. */
function GraphIcon() {
  const nodes = [
    { x: 17, y: 33, r: 3.2 },
    { x: 41, y: 14, r: 2.6 },
    { x: 63, y: 39, r: 6 },
    { x: 92, y: 21, r: 3.4 },
    { x: 106, y: 51, r: 2.6 },
    { x: 79, y: 67, r: 4.4 },
    { x: 45, y: 73, r: 3.4 },
    { x: 19, y: 87, r: 2.8 },
    { x: 59, y: 105, r: 3.2 },
    { x: 99, y: 94, r: 2.8 },
  ];
  const solid = [
    [0, 2],
    [1, 2],
    [2, 3],
    [2, 5],
    [2, 6],
    [5, 9],
    [6, 7],
    [6, 8],
  ];
  const weak = [
    [0, 1],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 8],
    [8, 9],
  ];
  const line = ([a, b]: number[]) =>
    `M${nodes[a].x} ${nodes[a].y} ${nodes[b].x} ${nodes[b].y}`;

  return (
    <svg viewBox={ICON_VIEWBOX} className={ICON_CLASS} aria-hidden="true">
      <g className={ICON_STROKE}>
        {solid.map((e, i) => (
          <path key={`s${i}`} d={line(e)} />
        ))}
        <g strokeDasharray="3 4" opacity="0.5">
          {weak.map((e, i) => (
            <path key={`w${i}`} d={line(e)} />
          ))}
        </g>
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={n.r} />
        ))}
      </g>
    </svg>
  );
}

/* Two dividing walls, each broken open at the middle, with one flow
 * running straight through both breaches. Deliberately not columns or
 * bars, so it does not read as the chart in the next cell over. */
function SilosIcon() {
  return (
    <svg viewBox={ICON_VIEWBOX} className={ICON_CLASS} aria-hidden="true">
      <g className={ICON_STROKE}>
        {/* wall segments, with a gap left around y=60 */}
        <g opacity="0.75">
          <path d="M40 14V34" />
          <path d="M40 40V52" />
          <path d="M40 70V82" />
          <path d="M40 88V108" />
          <path d="M80 14V34" />
          <path d="M80 40V52" />
          <path d="M80 70V82" />
          <path d="M80 88V108" />
        </g>
        {/* what used to be blocked, now passing through both walls */}
        <path d="M8 61H110" />
        <path d="M101 53 110 61 101 69" />
        <circle cx="14" cy="61" r="3" />
      </g>
    </svg>
  );
}

/* Rising bars with a trend line breaking above them — output getting
 * better over time, not merely faster. */
function QualityIcon() {
  const bars = [
    { x: 16, y: 76 },
    { x: 40, y: 62 },
    { x: 64, y: 46 },
    { x: 88, y: 30 },
  ];
  return (
    <svg viewBox={ICON_VIEWBOX} className={ICON_CLASS} aria-hidden="true">
      <g className={ICON_STROKE}>
        <g opacity="0.5">
          {bars.map((b) => (
            <rect key={b.x} x={b.x} y={b.y} width="16" height={96 - b.y} />
          ))}
        </g>
        <path d="M14 72 40 56 64 40 94 16" />
        <path d="M84 16 94 16 94 26" />
      </g>
    </svg>
  );
}

/* A cycle closing back on itself around a core — learning compounding. */
function LoopIcon() {
  return (
    <svg viewBox={ICON_VIEWBOX} className={ICON_CLASS} aria-hidden="true">
      <g className={ICON_STROKE}>
        {/* near-full circle, open at the top-left, with a clockwise arrowhead */}
        <path d="M60 16 A44 44 0 1 1 29 29" />
        <path d="M51 8 61 16 51 25" />
        <circle cx="60" cy="60" r="22" strokeDasharray="3 4" opacity="0.6" />
        <circle cx="60" cy="60" r="5" opacity="0.85" />
      </g>
    </svg>
  );
}

const PILLARS: Pillar[] = [
  {
    label: "01",
    title: "Never scramble for context",
    body: "The context for a deployment is always current, with every piece automatically related to the others. You can ask what changed, why, and how it took shape without manually stitching across different tools and decisions.",
    icon: <GraphIcon />,
  },
  {
    label: "02",
    title: "Break silos",
    body: "Nexus is cross-deployment context aware. What worked for one customer is already known to the next deployment, while the decisions and successful processes behind it are codified into skills the whole team compounds on.",
    icon: <SilosIcon />,
  },
  {
    label: "03",
    title: "Ship better",
    body: "Ship customer-specific changes through the Nexus MCP with that customer's full deployment context, and loop patterns that proved out back into the core product.",
    icon: <QualityIcon />,
  },
  {
    label: "04",
    title: "Automate learning",
    body: "Every interaction feeds back into the knowledge graph, not just what sits in your tools but the thinking behind the decisions. Each new deployment starts a level higher than the last.",
    icon: <LoopIcon />,
  },
];

function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <div className="flex h-full flex-col px-8 py-10 sm:px-12 sm:py-12">
      <span className="inline-block self-start border border-accent px-2.5 py-1 font-mono text-[11px] tracking-[0.14em] text-accent">
        {pillar.label}
      </span>

      <div className="mt-7">{pillar.icon}</div>

      <h3 className="mt-7 text-[22px] font-normal tracking-[-0.02em] text-fg sm:text-[26px]">
        {pillar.title}
      </h3>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-fg-muted">
        {pillar.body}
      </p>
    </div>
  );
}

export default function PillarsGrid() {
  return (
    <section className="relative w-full bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12 max-w-4xl sm:mb-16">
          <p className="eyebrow">Why Nexus</p>
          <h2 className="mt-4 text-[32px] font-normal leading-[1.15] tracking-[-0.03em] text-fg sm:text-[42px]">
            Save time. Give your deployment motion a unified workspace driven
            by agents.
          </h2>
        </div>

        {/* Container carries the top+left edge; every cell carries its own
            right+bottom edge. Tiled across a 2x2 grid that pairs into a
            clean set of outer + internal divider lines, no per-cell
            conditionals needed. */}
        <div className="grid grid-cols-1 border-t border-l border-edge sm:grid-cols-2">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="border-r border-b border-edge">
              <PillarCard pillar={pillar} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
