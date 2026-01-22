import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Posthog from "@/public/images/posthog.png";
import Linear from "@/public/images/linear.webp";
import NexusSlack from "@/public/images/nexus-screenshot-2.png";
// import LinearContext from "@/public/images/Linear-Example-fst.png";
import LinearRootCause from "@/public/images/Linear-Example-snd.png";
import LinearNextSteps from "@/public/images/Linear-Next-Steps.png";
import NexusMainPage from "@/public/images/mainpage_nexus.png";
import ReproNexus from "@/public/images/repro_nexus.png";
import IssueFixNexus from "@/public/images/issue_fix_nexus.png";
import VibeFixNexus from "@/public/images/vibe_fix_nexus.png";
import ZendeskLogo from "@/public/images/zendesk.svg";


export default function Features() {
  const cards = [
    {card_title: "Always-On", card_body: "Catch and correlate patterns across user replays and incoming customer signals for production issues on autopilot ", img: NexusSlack},
    // {card_title: "Always-On - need to cut wording below", card_body: "Catching and correlating patterns across user replays and incoming customer signals for production issues on autopilot ", img: Posthog},
    {card_title: "Autonomous Deep Dive", card_body: "Issues that are automatically root-caused to understand exactly why and its customer impact, past patterns, revenue impact ", img: NexusSlack},
    {card_title: "Fixes made easy", card_body: "Context-filled engineering tickets with steps on how to repoduce the issue and custom context to automate fixes with AI", img: LinearNextSteps},
  ]
  return (
    <section className="relative" id="features-rundown">
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
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">
               What Nexus Agents Can Do For You
              </span>
            </div>
            <h2 className="font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl lg:text-5xl">
                Don't waste engineering time on non-engineering tasks 
            </h2>
          </div>

          {/* Feature Cards */}
          {cards.map((card, idx) => {
            // even idx: text left, image right; odd idx: text right, image left
            const isEven = idx % 2 === 0;
            const isFirstCard = idx === 0; // "Always-On"
            const isThirdCard = idx === 2; // "Fixes made easy"
            
            return (
              <div 
                key={idx}
                className="grid gap-8 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:grid-cols-2 md:items-center md:gap-12"
              >
                {isFirstCard ? (
                  // Custom layout for first card showing inputs flowing into Nexus
                  <>
                    {/* Text left */}
                    <div className="order-2 md:order-1">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-blue-500">
                        {card.card_title}
                      </p>
                      <h3 className="mb-4 font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl">
                        {card.card_body}
                      </h3>
                    </div>
                    {/* Custom flow visual - inputs to Nexus */}
                    <div className="order-1 md:order-2 flex items-center justify-center p-7 min-h-[300px]">
                      <div className="relative w-full max-w-3xl flex items-center justify-center">
                        {/* Input box */}
                        <div className="border border-gray-600 rounded-xl p-3 min-w-[240px] items-center justify-center">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center overflow-hidden">
                              <Image
                                src={ZendeskLogo}
                                alt=""
                                width={24}
                                height={24}
                                className="opacity-70 brightness-0 invert"
                              />
                            </div>
                            <span className="text-gray-300 text-sm font-medium">Customer Support Tickets</span>
                          </div>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center overflow-hidden">
                              <Image
                                src="/images/posthog.png"
                                alt=""
                                width={24}
                                height={24}
                                className="opacity-70 brightness-0 invert"
                              />
                            </div>
                            <span className="text-gray-300 text-sm font-medium">User Replays</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center overflow-hidden">
                              <Image
                                src="/images/linear.png"
                                alt=""
                                width={24}
                                height={24}
                                className="opacity-70"
                              />
                            </div>
                            <span className="text-gray-300 text-sm font-medium">Past Tickets</span>
                          </div>
                        </div>
                        
                        {/* Animated dotted line */}
                        <svg className="flex-shrink-0" width="100" height="4" viewBox="0 0 200 4">
                          <line
                            x1="0"
                            y1="2"
                            x2="200"
                            y2="2"
                            stroke="#60a5fa"
                            strokeWidth="4"
                            strokeDasharray="6,6"
                            opacity="0.8"
                          >
                            <animate
                              attributeName="stroke-dashoffset"
                              values="0;-8"
                              dur="1s"
                              repeatCount="indefinite"
                            />
                          </line>
                        </svg>
                        
                        {/* Nexus logo */}
                        <div className="flex-shrink-0">
                          
                            <Image
                              src="/images/nexuslogo (3) (1).png"
                              alt="Nexus"
                              width={80}
                              height={80}
                              className="object-contain"
                            />
                        </div>
                      </div>
                    </div>
                  </>
                ) : isThirdCard ? (
                  // Custom layout for third card with three correlated images
                  <>
                    {/* Text left */}
                    <div className="order-2 md:order-1">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-blue-500">
                        {card.card_title}
                      </p>
                      <h3 className="mb-4 font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl">
                        {card.card_body}
                      </h3>
                    </div>
                    {/* Three correlated images right - Creative layout with center focus */}
                    <div className="order-1 md:order-2 relative flex items-center justify-center p-7 min-h-[500px]">
                      <div className="relative w-full max-w-5xl h-[500px]">
                        {/* Center image - IssueFixNexus (larger, prominent) */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                          <Image 
                            className="rounded-xl border-2 border-blue-500/50 shadow-2xl shadow-blue-500/30 transform hover:scale-105 transition-transform" 
                            src={IssueFixNexus} 
                            alt="IssueFixNexus"
                            width={380}
                            height={260}
                          />
                        </div>
                        
                        {/* Left bottom corner "ear" - ReproNexus */}
                        <div className="absolute left-0 bottom-0 transform -rotate-6 hover:rotate-0 transition-transform z-30">
                          <Image 
                            className="rounded-xl border-2 border-blue-500/40 shadow-lg shadow-blue-500/20" 
                            src={ReproNexus} 
                            alt="ReproNexus"
                            width={260}
                            height={180}
                          />
                        </div>
                        
                        {/* Right top corner "ear" - VibeFixNexus */}
                        <div className="absolute right-0 top-0 transform rotate-6 hover:rotate-0 transition-transform z-30">
                          <Image 
                            className="rounded-xl border-2 border-blue-500/40 shadow-lg shadow-blue-500/20" 
                            src={VibeFixNexus} 
                            alt="VibeFixNexus"
                            width={260}
                            height={180}
                          />
                        </div>
                        
                        {/* Connecting lines from corners to center */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 500">
                          <path 
                            d="M 50,450 Q 200,300 500,250" 
                            stroke="rgba(59, 130, 246, 0.3)" 
                            strokeWidth="2" 
                            fill="none" 
                            strokeDasharray="5,5"
                          />
                          <path 
                            d="M 950,50 Q 800,200 500,250" 
                            stroke="rgba(59, 130, 246, 0.3)" 
                            strokeWidth="2" 
                            fill="none" 
                            strokeDasharray="5,5"
                          />
                        </svg>
                      </div>
                    </div>
                  </>
                ) : isEven ? (
                  <>
                    {/* Text left */}
                    <div className="order-2 md:order-1">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-blue-500">
                        {card.card_title}
                      </p>
                      <h3 className="mb-4 font-nacelle text-3xl font-semibold text-gray-200 md:text-4xl">
                        {card.card_body}
                      </h3>
                    </div>
                    {/* Image right */}
                    <div className="order-1 md:order-2 flex justify-center p-7">
                      <Image className="rounded-xl" src={card.img} alt={card.card_title} />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image left */}
                    <div className="order-2 md:order-1 flex justify-center p-7">
                      <Image className="rounded-xl" src={card.img} alt={card.card_title} />
                    </div>
                    {/* Text right */}
                    <div className="order-1 md:order-2">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-blue-500">
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
