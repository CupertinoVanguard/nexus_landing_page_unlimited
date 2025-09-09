import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";
import ClickUp from "@/public/images/clickup_background_removed.png";
import Supabase from "@/public/images/supabase_background_removed.png";
import Snowflake from "@/public/images/snowflake.png";
import HubSpot from "@/public/images/hubspot.png"
import Neon from "@/public/images/neon_logo.png"
import Tableau from "@/public/images/tableau_logo.png"
import Amplitude from "@/public/images/amplitude.png"
import Mixpanel from "@/public/images/mixpanel.png"
import GoogleAnalytics from "@/public/images/google-analytics.png"
import Posthog from "@/public/images/posthog.png"

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Seamless Integration
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Integrate Your Business Tools
            </h2>
            <p className="text-lg text-indigo-200/65">
              Nexus agents seamlessly connect with your business tools to manage, monitor, and analyze them autonomously.
            </p>
          </div>
          {/* <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div> */}
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3 items-center">
            {/* New Row */}
            <article>
              <Image className="rounded-t rounded-b" src={Amplitude} alt="Amplitude Logo" width={32} height={32} />
              <div className="flex flex-row justify-between">
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                  Amplitude
                </h3>
                <p className="text-indigo-200">
                  Product Analytics
                </p>
              </div>
            </article>
            <article>
              <Image className="rounded-t rounded-b" src={Mixpanel} alt="Mixpanel Logo" width={32} height={32} />
              <div className="flex flex-row justify-between">
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                  Mixpanel
                </h3>
                <p className="text-indigo-200">
                  Product Analytics
                </p>
              </div>
            </article>
            <article>
              <Image className="rounded-t rounded-b" src={GoogleAnalytics} alt="Google Analytics Logo" width={32} height={32} />
              <div className="flex flex-row justify-between">
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                  Google Analytics
                </h3>
                <p className="text-indigo-200">
                  Product Analytics
                </p>
              </div>
            </article>

            {/* Original Articles */}
            <article>
              {/* <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                <path
                  fillOpacity=".48"
                  d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
                />
              </svg> */}
              <Image className="rounded-t rounded-b" src={HubSpot} alt="HubSpot Logo" width={32} height={32} />
              <div className="flex flex-row justify-between">
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                  Hubspot
                </h3>
                <p className="text-indigo-200">
                  CRM
                </p>
              </div>
              {/* <p className="text-indigo-200/65">
                Track progress across custom flows for your team. Find the right
                balance for the user, privacy and security.
              </p> */}
            </article>
            <article>
              <Image className="rounded-t rounded-b" src={Supabase} alt="Supabase Logo" width={32} height={32} />
              <div className="flex flex-row justify-between">
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                  Supabase
                </h3>
                <p className="text-indigo-200">
                  Database
                </p>
              </div>
              {/* <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Team Views
              </h3> */}
              {/* <p className="text-indigo-200/65">
                Track progress across custom flows for your team. Find the right
                balance for the user, privacy and security.
              </p> */}
            </article>
            <article>
              <Image className="rounded-t rounded-b" src={Neon} alt="Neon Logo" width={32} height={32} />
              <div className="flex flex-row justify-between">
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                  Neon
                </h3>
                <p className="text-indigo-200">
                  Database
                </p>
              </div>
              {/* <p className="text-indigo-200/65">
                Track progress across custom flows for your team. Find the right
                balance for the user, privacy and security.
              </p> */}
            </article>
            <article>
              <Image className="rounded-t rounded-b" src={ClickUp} alt="ClickUp Logo" width={32} height={32} />
              <div className="flex flex-row justify-between">
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                  ClickUp
                </h3>
                <p className="text-indigo-200">
                  CRM
                </p>
              </div>
              {/* <p className="text-indigo-200/65">
                Track progress across custom flows for your team. Find the right
                balance for the user, privacy and security.
              </p> */}
            </article>
            <article>
              {/* <Image className="rounded-t rounded-b" src={Tableau} alt="Tableau Logo" width={32} height={32} /> */}
              <Image className="rounded-t rounded-b" src={Posthog} alt="Posthog Logo" width={32} height={32} />
              <div className="flex flex-row justify-between">
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                  Posthog
                </h3>
                <p className="text-indigo-200">
                  Product Analytics
                </p>
              </div>
              {/* <p className="text-indigo-200/65">
                Track progress across custom flows for your team. Find the right
                balance for the user, privacy and security.
              </p> */}
            </article>
            <article>
              <Image className="rounded-t rounded-b" src={Snowflake} alt="Snowflake Logo" width={32} height={32} />
              <div className="flex flex-row justify-between">
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                  SnowFlake (Coming Soon)
                </h3>
                <p className="text-indigo-200">
                  Database
                </p>
              </div>
              {/* <p className="text-indigo-200/65">
                Track progress across custom flows for your team. Find the right
                balance for the user, privacy and security.
              </p> */}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
