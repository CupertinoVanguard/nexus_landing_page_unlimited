import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import NexusThumbnail from "@/public/images/nexus_thumbnail.png"

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h1 
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-3xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              AI agents that help you make faster product decisions
              {/*Have to change this title*/}
            </h1>
            <div className="max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/95 font-nacelle"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Launch specialized AI agents that understand how your platform and latest features are performing with customers.
              </p>
              <div className="max-w-xs sm:flex sm:max-w-none xs:items-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 px-4 py-2 w-full bg-linear-to-t from-blue-400 to-blue-800 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="https://nexus-ba-platform.vercel.app/"
                  >
                    <span className="relative inline-flex items-center">
                      Start Building
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative px-4 py-2 w-full text-gray-100 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800 sm:ml-4 sm:w-auto"
                    href="https://calendly.com/nikilpillai2002/30min?month=2025-08"
                  >
                    Schedule Demo
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                    </span>
                  </a>
                </div>

              </div>
            </div>
          </div>

          <ModalVideo
            thumb={NexusThumbnail}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//NexusYCDemoAug4.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
