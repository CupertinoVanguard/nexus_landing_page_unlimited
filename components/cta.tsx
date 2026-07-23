export default function Cta() {
  return (
    <section id="cta" className="relative overflow-hidden border-t border-edge">
      {/* soft wash behind the closing statement */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(37,99,235,0.16), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="py-24 text-center md:py-32">
          <h2
            className="text-[34px] font-normal leading-[1.1] tracking-[-0.03em] text-fg md:text-[46px]"
            data-aos="fade-up"
          >
            Don&apos;t let AI bugs in prod
            <br className="hidden sm:block" /> reach your customers
          </h2>

          <p
            className="mx-auto mt-6 max-w-lg font-mono text-[14px] leading-relaxed text-fg-muted"
            data-aos="fade-up"
          >
            See Nexus catch a silent failure in your own agent, live.
          </p>

          <div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            data-aos="fade-up"
          >
            <a
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-accent-hover"
              href="https://cal.com/nikhilpillai/nexus-15-min-intro-call"
            >
              Book a demo
              <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-edge-strong px-6 py-3 text-[15px] text-fg-muted transition-colors hover:border-fg-ghost hover:text-fg"
              href="https://docs.trynexus.io"
            >
              Read the docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
