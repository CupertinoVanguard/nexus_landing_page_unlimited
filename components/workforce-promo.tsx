import Image from "next/image";
import workforceImage from "@/public/images/recurring_and_proactive.png";

export default function WorkforcePromo() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-nacelle text-3xl font-semibold text-white md:text-5xl">
                Workforce of AI teammates
              </h2>
              <p className="mt-4 text-lg text-indigo-200/80">
                Build a reliable workforce of AI teammates that integrate seamlessly into your team, work around the clock, and collaborate with each other to get more done.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src={workforceImage}
                alt="Workforce of AI teammates"
                className="rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


