import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Posthog from "@/public/images/posthog.png";

export default function Features() {
  const cards = [
    {card_title: "Always-On - need to cut wording below", card_body: "Catching and correlating patterns across user replays and incoming customer signals for production issues on autopilot ", img: Posthog},
    {card_title: "Autonomous Deep Dive - need to cut wording below", card_body: "Issues that are automatically root-caused to understand exactly why and its customer impact, past patterns, revenue impact ", img: Posthog},
    {card_title: "Fixes made easy - need to cut wording below or split into two", card_body: "Context-filled engineering tickets with steps on how to repoduce the issue and custom context ready-to-go to automate fixes through AI code tools", img: Posthog},
  ]
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Main Title */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
               What Nexus Agents Can Do For You
              </span>
            </div>
            <h2 className="font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl lg:text-5xl">
                Don't waste engineering time on non-engineering tasks 
            </h2>
          </div>

          {/* Feature 1 - Text Left, Image Right */}
          {cards.map((card, idx) => {
            // even idx: text left, image right; odd idx: text right, image left
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx}
                className="grid gap-8 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:grid-cols-2 md:items-center md:gap-12"
              >
                {isEven ? (
                  <>
                    {/* Text left */}
                    <div className="order-2 md:order-1">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-indigo-500">
                        {card.card_title}
                      </p>
                      <h3 className="mb-4 font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl">
                        {card.card_body}
                      </h3>
                    </div>
                    {/* Image right */}
                    <div className="order-1 md:order-2 flex justify-center">
                      <Image className="bg-blue-500" src={card.img} alt={card.card_title} width={500} height={500} />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image left */}
                    <div className="order-2 md:order-1 flex justify-center">
                      <Image src={card.img} alt={card.card_title} width={500} height={500} />
                    </div>
                    {/* Text right */}
                    <div className="order-1 md:order-2">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-indigo-500">
                        {card.card_title}
                      </p>
                      <h3 className="mb-4 font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl">
                        {card.card_body}
                      </h3>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
