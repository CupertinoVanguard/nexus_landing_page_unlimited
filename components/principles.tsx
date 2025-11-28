import Workflow1 from "@/public/images/workflow-01.png";
import Workflow2 from "@/public/images/workflow-02.png";
import Workflow3 from "@/public/images/workflow-03.png";
import DelegationImg from "@/public/images/delegation_img.jpg";
import AdaptiveIntelligence from "@/public/images/adaptive_intelligence.jpg";
import StackContext from "@/public/images/stack_context.jpg";
export default function Principles() {
  const cards = [
    // {
    //   title: "Workforce of AI teammates",
    //   body:
    //     "Build a reliable workforce of AI teammates that integrate seamlessly into your team, work around the clock, and collaborate with each other to get more done.",
    // },
    // {
    //   title: "Company knowledge base",
    //   body:
    //     "AI that adapts to your company’s unique workflows and organizational structure, integrating seamlessly into your operations.",
    // },
    // {
    //   title: "Constantly learning",
    //   body:
    //     "Like any great teammate, your AI workforce learns from you and constantly adapts over time to deliver more accurate and consistent results.",
    // },
    {
      title: "Monitor for issues and trends",
      body: `
       Nexus autonomously keeps up with issues across replays, customer feedback, and logs to spot trends and patterns early.
      `,
      image: DelegationImg,
    },
    {
      title: "Context that adapts",
      body: `
      Issues  are root-caused across your tools to automatically prioritize fixes based on product and customer impact
      `,
      image: StackContext,
    },
    {
      title: "Accelerated fixes",
      body: `
       Agents file  engineering tickets, generte steps to reproduce errors, and even make fixes in code when possible.
      `,
      image: AdaptiveIntelligence,
    },
    // {
    //   title: "Always on",
    //   body:
    //     "Autonomously learns & grows to evolving goals",
    //   image: "/images/clock (1).svg",
    // },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Ship faster with the root cause and the fix already taken care of [not a fan]
            </h2>
            {/* <p className="text-md text-indigo-200/65">
            Specialized AI agents that autonomously handle product tasks across feature rollouts, engagement, churn, and more by connecting insights across all your sources so your team can focus on decisions.            </p> */}
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
              >
                <div className="mb-4 aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-700/30 flex items-center justify-center">
                  <img
                    src={card.image.src}
                    alt={card.title}
                    className="h-full w-full object-cover"
                    style={{ margin: "0 auto", opacity: "0.75" }}
                  />
                </div>
                <h4 className="mb-2 font-nacelle text-xl font-semibold text-gray-200 text-center">
                  {card.title}
                </h4>
                <p className="text-gray-300/80 text-base leading-relaxed text-center">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


