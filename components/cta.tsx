import { CalendarIcon } from "lucide-react";

const NAVY = "#1e3a5f";

export default function Cta() {
  return (
    <section id="cta" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center rounded-2xl p-12">
            <h2
              className="pb-8 font-nacelle text-3xl font-semibold text-gray-900 md:text-4xl"
              data-aos="fade-up"
            >
              Don&apos;t let AI bugs in prod affect your customer&apos;s experience. Use Nexus.
            </h2>
            <br />
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">
              <div data-aos="fade-up" data-aos-delay={600}>
                <a
                  className="btn relative w-full gap-2 items-center text-white hover:opacity-90 transition-all duration-300 sm:w-auto"
                  style={{ background: NAVY }}
                  href="https://cal.com/nikhilpillai/nexus-15-min-intro-call"
                >
                  <CalendarIcon size={15} />
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
