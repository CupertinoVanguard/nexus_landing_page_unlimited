'use client'
import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import NexusThumbnail from "@/public/images/nexus_thumbnail.png"
import FlowGraphic from "@/components/flow-graphic";
 

export default function HeroHome() {
  return (
    <section>
       {/* <div className="mx-auto max-w-3xl text-center rounded-xl bg-gradient-to-tr from-blue-500 via-transparent to-blue-300 p-10 shadow-md shadow-gray-800">
            */}
      <div className="mx-auto max-w-8xl px-4 sm:px-6 bg-gradient-to-tr from-blue-500 via-transparent to-blue-300 pt-10 pr-10 pl-10 shadow-md shadow-gray-800">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mt-6 md:mt-10 pb-2 md:pb-3">
            <div className="flex justify-center mb-4">
              <a
                href="https://cal.com/nexus-ai-sf"
                className="relative inline-flex items-center rounded-full border border-white/30 px-4 py-1.5 text-sm text-white transition-colors hover:bg-white/10"
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                <span>New: Backed by Character Capital</span>
              </a>
            </div>
            <h1 
              className="pb-5 font-nacelle text-white text-4xl font-normal text-center md:text-6xl"
              data-aos="fade-up"
            >
               {/* AI agents that help you make faster product decisions */}
               AI Workers for your Product Goals 
              {/*Have to change this title*/}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="mb-8 text-xl text-indigo-200/95 font-nacelle text-center"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {/* Launch specialized AI agents that understand how your platform and latest features are performing with customers. */}
                Nexus saves you time with always-on AI agents that orchestrate insights across all your tools to completely handle the end-to-end of your product tasks.
                {/* Orchestrating product tasks made simple. */}
              </p>
              <div className="flex justify-center mt-2 md:mt-4">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn-sm py-[5px] bg-white text-black hover:bg-gray-100"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                    href="https://cal.com/nexus-ai-sf"
                  >
                    Book a Demo <span className="ml-1 tracking-normal text-black/50 transition-transform group-hover:translate-x-0.5">&rarr;</span>
                  </a>
                </div>
              </div>
              <br />
              <FlowGraphic />
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
