import Image from "next/image";
import Workflow1 from "@/public/images/workflow-01.png";
import Workflow2 from "@/public/images/workflow-02.png";
import Workflow3 from "@/public/images/workflow-03.png";

export default function HowItWorks() {
  const cards = [
    {
      title: "Design your AI teammate in minutes",
      body: "Set up roles, tasks, and workflows instantly, no coding required.",
      image: Workflow1,
      alt: "Design AI teammate",
    },
    {
      title: "Integrate in one click",
      body: "Connect with your favorite tools effortlessly and start running right away.",
      image: Workflow2,
      alt: "Integrate tools",
    },
    {
      title: "Watch AI handle the work",
      body: "Free your team from repetitive tasks, so they can focus on high-value work.",
      image: Workflow3,
      alt: "AI handling work",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl pb-8 text-center">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              How it Works
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
              >
                <div className="mb-4 aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-700/30">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    className="h-full w-full object-cover"
                    priority={idx === 0}
                  />
                </div>
                <h4 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">
                  {card.title}
                </h4>
                <p className="text-gray-300/80 text-base leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


