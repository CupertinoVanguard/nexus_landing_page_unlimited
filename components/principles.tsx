export default function Principles() {
  const cards = [
    {
      title: "Autonomy by default",
      body:
        "Agents run routine product workflows without hand-holding, so your team can focus on strategy.",
    },
    {
      title: "Observable and safe",
      body:
        "Every action is logged with context and guardrails. Override or approve when you need to.",
    },
    {
      title: "Fast feedback loops",
      body:
        "Shorten time from event to insight with continuous monitoring, alerts, and summaries.",
    },
    {
      title: "Composable by design",
      body:
        "Mix integrations and behaviors to build agents tailored to your product needs.",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 md:py-20 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
          <div className="mx-auto max-w-3xl pb-8 text-center">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Our Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] relative"
              >
                <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">{card.title}</h3>
                <p className="text-gray-300/80 text-base leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


