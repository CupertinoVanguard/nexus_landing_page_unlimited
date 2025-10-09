export default function FeatureCards() {
  const cards = [
    {
      title: "Company knowledge base",
      body:
        "AI that adapts to your company’s unique workflows and organizational structure, integrating seamlessly into your operations.",
      image:
        "https://framerusercontent.com/images/vrR0gCG4mUUdBTjRYjZMEdaA8.png?width=1987&height=1348",
    },
    {
      title: "Constantly learning",
      body:
        "Like any great teammate, your AI workforce learns from you and constantly adapts over time to deliver more accurate and consistent results.",
      image:
        "https://framerusercontent.com/images/InmNaSSIJ9uE2Tq29nBQCmVD88.png?width=1986&height=1348",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
              >
                <div className="mb-4 aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-700/30">
                  <img
                    src={card.image}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="mb-2 font-nacelle text-xl font-semibold text-gray-200">
                  {card.title}
                </h3>
                <p className="text-gray-300/80 text-base leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


