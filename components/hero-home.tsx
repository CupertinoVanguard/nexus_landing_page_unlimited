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
          <div className="mt-16 md:mt-28 pb-12 md:pb-20">
            <div className="flex justify-center mb-4">
              <a
                href="#"
                className="inline-flex items-center rounded-full border border-white/30 px-4 py-1.5 text-sm text-white transition-colors hover:bg-white/10"
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                new: try session replay agent
              </a>
            </div>
            <h1 
              className="pb-5 font-nacelle text-white text-4xl font-normal text-center md:text-6xl"
              data-aos="fade-up"
            >
               {/* AI agents that help you make faster product decisions */}
               ETL, AI/ML Ops, Data Orchestration.
              {/*Have to change this title*/}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="mb-8 text-xl text-indigo-200/95 font-nacelle text-center"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {/* Launch specialized AI agents that understand how your platform and latest features are performing with customers. */}
                Have your product tasks always running. 
                {/* Orchestrating product tasks made simple. */}
              </p>
              <div className="flex justify-center mt-16 md:mt-28">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group px-10 py-5 text-2xl md:text-3xl font-semibold rounded-2xl bg-linear-to-t from-blue-400 to-blue-800 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                    href="#"
                  >
                    <span className="relative inline-flex items-center">
                      Launch
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <ModalVideo
            thumb={NexusThumbnail}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="https://nexus-software-access.s3.us-east-2.amazonaws.com/ImprovedNexusDemo.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
        </div>
      </div>
    </section>
  );
}
