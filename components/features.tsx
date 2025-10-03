import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";
import ClickUp from "@/public/images/clickup_background_removed.png";
import Supabase from "@/public/images/supabase_background_removed.png";
import Snowflake from "@/public/images/snowflake.png";
import HubSpot from "@/public/images/hubspot.png";
import Neon from "@/public/images/neon_logo.png";
import Tableau from "@/public/images/tableau_logo.png";
import Amplitude from "@/public/images/amplitude.png";
import Mixpanel from "@/public/images/mixpanel.png";
import GoogleAnalytics from "@/public/images/google-analytics.png";
import PostHog from "@/public/images/posthog.png";

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
              Integrations
            </h2>
            <p className="text-lg text-indigo-200/65">
              Nexus agents seamlessly connect with your product analytics tools and more to manage, monitor, and analyze them autonomously.
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
          {/* Items: 3x3 card grid styled like Principles */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[{
              name: 'Amplitude', img: Amplitude
            }, {
              name: 'Mixpanel', img: Mixpanel
            }, {
              name: 'Google Analytics', img: GoogleAnalytics
            }, {
              name: 'Posthog', img: PostHog
            }, {
              name: 'HubSpot', img: HubSpot
            }, {
              name: 'ClickUp', img: ClickUp
            }, {
              name: 'Supabase', img: Supabase
            }, {
              name: 'Neon', img: Neon
            }, {
              name: 'Snowflake', img: Snowflake
            }].map(({ name, img }, idx) => (
              <article key={idx} className="relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="flex items-center gap-3">
                  <Image src={img} alt={`${name} Logo`} width={32} height={32} className="rounded" />
                  <h3 className="font-nacelle text-[1rem] font-semibold text-gray-200">{name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
