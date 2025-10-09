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
      title: "Always on",
      body:
        "Proactively manage and deliver insights.",
      image: "/images/clock (1).svg",
    },
    {
      title: "Always on",
      body:
        "Connects indicators and updates across platformss.",
      image: "/images/clock (1).svg",
    },
    {
      title: "Learning with you",
      body:
        "Independently monitors for essential task trends.",
      image: "/images/clock (1).svg",
    },
    {
      title: "Always on",
      body:
        "Updates internal context.",
      image: "/images/clock (1).svg",
    },
    {
      title: "Always on",
      body:
        "Autonomously learns & grows to evolving goals",
      image: "/images/clock (1).svg",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 md:py-20 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
          <div className="mx-auto max-w-3xl pb-8 text-center">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-3xl font-semibold font-nacelle text-transparent md:text-4xl">
              What Our Agents Do 
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] relative"
              >
                {/* <h3 className="mb-2 text-xl font-semibold font-nacelle text-center text-gray-200">{card.title}</h3> */}
                
                <img  src={card.image} alt={card.title} width={70} height={70} style={{ margin: "0 auto", opacity: "0.75" }} />


                <p className="text-gray-300/80 text-base leading-relaxed p-1 font-nacelle text-center">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


