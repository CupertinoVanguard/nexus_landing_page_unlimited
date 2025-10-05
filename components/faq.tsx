export default function Faq() {
  const faqs = [
    {
      q: "What makes Nexus different from other AI platforms?",
      a: "Nexus provides specialized, autonomous agents that integrate with your existing stack and continuously run product workflows, reducing manual toil and accelerating decision-making.",
    },
    {
      q: "How quickly can I get started with Nexus?",
      a: "Most teams connect tools and deploy their first agent in minutes. Our opinionated templates help you ship fast without heavy setup.",
    },
    {
      q: "Is Nexus secure for enterprise use?",
      a: "Yes. Data access is scoped to your integrations, and actions are observable with guardrails. We follow best practices for encryption and access control.",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-nacelle text-3xl font-semibold text-white md:text-4xl">Questions?</h2>
            <p className="mt-3 text-lg text-indigo-200/75">
              Here are some common questions from teams getting started with AI automation.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4">
            {faqs.map((item, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-gray-800/60 bg-gray-900/40 p-4 backdrop-blur-xs"
              >
                <summary className="list-none cursor-pointer">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-medium text-gray-100">{item.q}</h3>
                    <span className="ml-2 rounded-full border border-gray-700/60 p-1 text-gray-400 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>
                <div className="mt-3 text-gray-300/85">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


