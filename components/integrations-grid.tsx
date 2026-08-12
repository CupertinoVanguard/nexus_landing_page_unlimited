import { DEMO_URL } from "@/lib/links";

/* Integrations section — a two-column split: copy on the left, a rounded
 * blue gradient card on the right holding the integration marks.
 *
 * The card's tiles are arranged in staggered columns that drift slowly in
 * alternating directions and bleed past the card's top and bottom edges, so
 * the set reads as "more than fits on screen" rather than a finite list.
 * Tiles are white with the brand marks in their own colors — the three
 * single-tone brand blacks (Notion, OpenAI, GitHub) are dark fills here
 * for exactly that reason; they'd vanish if flipped to white.
 *
 * Column count is switchable: `<IntegrationsGrid columns={2} />` or
 * `columns={3}` (the default). Everything below — tile density, drift
 * timing, stagger offsets — derives from that one number, so switching is
 * a single-prop change with nothing else to keep in sync.
 */

type Integration = {
  name: string;
  src: string;
};

/* One flat ordered list; columns are sliced from it at render time so the
   2 vs 3 switch doesn't need hand-maintained per-column arrays. */
const INTEGRATIONS: Integration[] = [
  { name: "Slack", src: "/images/logos/integrations/slack.svg" },
  { name: "Microsoft Teams", src: "/images/logos/integrations/microsoft-teams.svg" },
  { name: "Notion", src: "/images/logos/integrations/notion.svg" },
  { name: "Confluence", src: "/images/logos/integrations/confluence.svg" },
  { name: "Google Drive", src: "/images/logos/integrations/googledrive.svg" },
  { name: "OneDrive", src: "/images/logos/integrations/onedrive.svg" },
  { name: "Linear", src: "/images/logos/integrations/linear.svg" },
  { name: "Jira", src: "/images/logos/integrations/jira.svg" },
  { name: "GitHub", src: "/images/logos/integrations/github.svg" },
  { name: "SharePoint", src: "/images/logos/integrations/sharepoint.svg" },
  { name: "OpenAI", src: "/images/logos/integrations/openai.svg" },
  { name: "Claude", src: "/images/logos/integrations/claude.svg" },
  { name: "Fathom", src: "/images/logos/integrations/fathom.png" },
  { name: "Fireflies", src: "/images/logos/integrations/fireflies.png" },
  { name: "Granola", src: "/images/logos/integrations/granola.png" },
  { name: "Read AI", src: "/images/logos/integrations/readai.png" },
  { name: "Pylon", src: "/images/logos/integrations/pylon.png" },
  { name: "Email", src: "/images/logos/integrations/email.svg" },
  { name: "Lark", src: "/images/logos/integrations/lark.png" },
];

/* Round-robin rather than contiguous slices, so each column ends up with a
   mix of categories instead of e.g. every chat tool stacked in column 1. */
function splitIntoColumns(items: Integration[], count: number): Integration[][] {
  const columns: Integration[][] = Array.from({ length: count }, () => []);
  items.forEach((item, i) => columns[i % count].push(item));
  return columns;
}

/* A drifting strip is one "period" rendered twice and translated by -50%.
 * For the card to stay covered at every point in that cycle, a single
 * period must be at least as tall as the card — otherwise, at the moment
 * the strip has travelled a full period, the tail end scrolls into view
 * and leaves blank gradient behind it. Splitting 19 items across 3 columns
 * leaves some with only 6, which is well short of the card, so repeat each
 * column's list until one period comfortably overfills the card. */
function buildPeriod(items: Integration[], minCount: number): Integration[] {
  if (items.length === 0) return items;
  const out: Integration[] = [];
  while (out.length < minCount) out.push(...items);
  return out;
}

function Tile({
  integration,
  compact,
}: {
  integration: Integration;
  compact: boolean;
}) {
  return (
    <div
      className={`flex items-center rounded-xl bg-white shadow-sm ${
        compact ? "gap-2 px-3 py-2.5" : "gap-2.5 px-4 py-3"
      }`}
    >
      <span
        className={`flex flex-shrink-0 items-center justify-center ${
          compact ? "h-[18px] w-[18px]" : "h-5 w-5"
        }`}
      >
        <img
          src={integration.src}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain"
        />
      </span>
      <span
        className={`truncate font-medium text-gray-800 ${
          compact ? "text-[12px]" : "text-[13px]"
        }`}
      >
        {integration.name}
      </span>
    </div>
  );
}

/* Contents are rendered twice so translating the strip by exactly -50%
 * lands back on an identical frame — the loop has no visible seam.
 *
 * Spacing is per-tile margin rather than flex `gap` on purpose: with `gap`,
 * a 2N-item strip is 2N*tile + (2N-1)*gap tall, so 50% of it lands half a
 * gap short of one full period and the loop visibly jumps. Margin folds the
 * spacing into each item, making the strip exactly 2 * (one period).
 */
function DriftColumn({
  items,
  direction,
  durationSec,
  offsetPx = 0,
  compact,
  minPeriodItems,
}: {
  items: Integration[];
  direction: "up" | "down";
  durationSec: number;
  /** Vertical head-start so neighbouring columns sit staggered, not in rows. */
  offsetPx?: number;
  compact: boolean;
  minPeriodItems: number;
}) {
  const gapClass = compact ? "mb-3" : "mb-4";
  const period = buildPeriod(items, minPeriodItems);
  // Rendered twice: translating by -50% lands on an identical frame.
  const strip = [...period, ...period];

  return (
    <div className="min-w-0 flex-1" style={{ marginTop: offsetPx }}>
      <div
        className="flex flex-col"
        style={{
          animation: `${
            direction === "up" ? "int-drift-up" : "int-drift-down"
          } ${durationSec}s linear infinite`,
        }}
      >
        {strip.map((integration, i) => (
          <div key={`${integration.name}-${i}`} className={gapClass}>
            <Tile integration={integration} compact={compact} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* Per-column drift settings, indexed by column. Durations are deliberately
   not multiples of each other so the columns don't visibly re-sync. */
const DRIFT = [
  { direction: "up" as const, durationSec: 38, offsetPx: 0 },
  { direction: "down" as const, durationSec: 44, offsetPx: -34 },
  { direction: "up" as const, durationSec: 41, offsetPx: -18 },
];

export default function IntegrationsGrid({
  columns = 3,
}: {
  /** 2 or 3 tile columns inside the gradient card. */
  columns?: 2 | 3;
}) {
  const compact = columns === 3;
  const columnItems = splitIntoColumns(INTEGRATIONS, columns);
  // Enough tiles that one drift period overfills the tallest card (480px);
  // compact tiles are shorter, so they need more of them.
  const minPeriodItems = compact ? 11 : 9;

  return (
    <section id="integrations" className="relative w-full scroll-mt-16 bg-bg py-20 sm:py-28">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes int-drift-up {
              from { transform: translateY(0); }
              to { transform: translateY(-50%); }
            }
            @keyframes int-drift-down {
              from { transform: translateY(-50%); }
              to { transform: translateY(0); }
            }
            @media (prefers-reduced-motion: reduce) {
              [data-int-drift] * { animation: none !important; }
            }
          `,
        }}
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <div>
            <h2 className="text-[34px] font-normal leading-[1.1] tracking-[-0.03em] text-fg sm:text-[44px]">
              Integrate with systems you already use
            </h2>

            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-fg-muted">
              Nexus operates across the tools your deployment motion already
              runs on: channels, docs, tickets, calls, and models.
            </p>

            <a
              href={DEMO_URL}
              className="mt-8 inline-flex items-center gap-2 bg-fg px-6 py-3 text-[14px] font-medium text-bg transition-colors hover:bg-fg-muted"
            >
              Book a demo
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          {/* Right — gradient card with drifting tile columns.
              Tiles repeat to fill the loop, so the card is marked
              decorative and the real list is exposed to assistive tech
              once, below, instead of each name being announced 2-3x. */}
          <div>
            <div
              data-int-drift
              aria-hidden="true"
              className="relative h-[420px] overflow-hidden rounded-2xl sm:h-[480px]"
              style={{
                background:
                  "linear-gradient(180deg, #1b2a4a 0%, #16233c 34%, #0e1626 66%, #0a0a0a 100%)",
              }}
            >
              {/* Generous inset + the column offsets keep plenty of the
                  gradient visible around and between the tiles, so the card
                  reads as a blue panel with marks floating on it rather than
                  a wall of white boxes. */}
              <div
                className={`flex ${
                  compact ? "gap-3 px-6 sm:px-7" : "gap-4 px-8 sm:gap-5 sm:px-10"
                }`}
              >
                {columnItems.map((items, i) => (
                  <DriftColumn
                    key={i}
                    items={items}
                    compact={compact}
                    minPeriodItems={minPeriodItems}
                    direction={DRIFT[i].direction}
                    durationSec={DRIFT[i].durationSec}
                    offsetPx={DRIFT[i].offsetPx}
                  />
                ))}
              </div>
            </div>

            <ul className="sr-only">
              {INTEGRATIONS.map((integration) => (
                <li key={integration.name}>{integration.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
