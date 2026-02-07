'use client'
import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import NexusThumbnail from "@/public/images/nexus_thumbnail.png"
import FlowGraphic from "@/components/flow-graphic";
import { SparklesIcon } from "lucide-react";


export default function HeroHome() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-8xl px-8 sm:px-12 pt-10 pr-10 pl-10">
        {/* Hero content */}
        <div className=" md:py-20 space-y-10">
          {/* Section header */}
          <div className="mt-6 md:mt-10 pb-2 md:pb-3 space-y-5">
            <div className="flex justify-center mb-4">
              <a
                href="https://cal.com/nikhilpillai/nexus-15-min-intro-call"
                className="relative gap-2 inline-flex items-center rounded-full border border-white/30 px-4 py-1.5 text-sm text-white transition-colors hover:bg-white/10"
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                <SparklesIcon className="w-4 h-4 ml-1" />
                <span>Backed by <b>Character Capital</b></span>
              </a>
            </div>
            <br></br>
            <h1
              className="pb-5 font-nacelle text-white text-3xl font-normal text-center md:text-5xl"
              data-aos="fade-up"
            >
              {/* AI agents that help you make faster product decisions */}

              {/* This is the old title */}
              {/* AI Workers for your Product Goals  */}

              {/* This is an option that incorporates wording from Dhavan and also kind of like Karumi */}
              {/* Don't lose visibility on your product  */}

              Detect and heal silent failures faster with your AI agents in production
              {/*Have to change this title*/}
            </h1>
            <div className="max-w-3xl mx-auto">
              {/* <p
                className="mb-8 text-xl text-indigo-200/95 font-nacelle text-center"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Launch specialized AI agents that understand how your platform and latest features are performing with customers.
                Nexus catches and deep dives on production bugs to ship context-filled tickets and fixes automatically
                Orchestrating product tasks made simple.
              </p> */}
              <div className="flex flex-row justify-center mt-2 md:mt-4 gap-5">
                {/* <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn-md bg-black text-white hover:bg-gray-800 hover:scale-105 transition-all duration-300"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                    href="/top-down"
                  >
                    Check the Impact<span className="ml-1 tracking-normal text-white transition-transform group-hover:translate-x-0.5">&rarr;</span>
                  </a>
                </div> */}
                <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn-md bg-gray-700 text-white hover:bg-gray-700 transition-all duration-300 px-6"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                    href="/top-down"
                  >
                    See Business Impact
                  </a>

                  {/* <span className="mt-2 text-sm text-white text-center opacity-90" style={{ maxWidth: 250 }}>
                    (Coming Soon)
                  </span> */}
                </div>
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn-md bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                    style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                    href="https://cal.com/nikhilpillai/nexus-15-min-intro-call"
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
              <br />
              {/* <FlowGraphic /> */}
            </div>
          </div>
          {/* This is the screenshot/image of the platform/demonstrating the actions that Nexus can take. */}
          {/* <div className="flex flex-row justify-center mt-2 md:mt-4 gap-5">
            <img src="/images/nexus-screenshot-2.png" alt="Nexus Screenshot" className="w-auto max-w-sm h-auto rounded-lg" />
          </div> */}
          {/* Strictly for prototype (from Decipher) */}

          {/* <div className="flex flex-row justify-center mt-2 md:mt-4 gap-5">
            <p>[Image of value prop]</p>
            <img src="/images/slack-issue creation.png" alt="Slack Screenshot from Decipher" className="w-auto max-w-sm h-auto rounded-lg" />
          </div> */}


          {/* <div className="flex flex-row justify-center mt-2 md:mt-4 gap-5 overflow-x-auto">
            <img src="/images/main_nexus_page.png" alt="Nexus Main Page Screenshot" className="w-auto max-w-5/6 h-auto rounded-lg" />
          </div> */}

          {/* <img src="/images/nexus-screenshot-2.png" alt="Nexus Screenshot" className="w-auto max-w-sm h-auto rounded-lg" />
           */}
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

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
      </div>
    </section>
  );
}
