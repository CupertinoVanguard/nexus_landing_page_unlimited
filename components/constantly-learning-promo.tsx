import Image from "next/image";
import learningImage from "@/public/images/secondary-illustration.svg";

export default function ConstantlyLearningPromo() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-nacelle text-3xl font-semibold text-white md:text-5xl">
                Constantly learning
              </h2>
              <p className="mt-4 text-lg text-indigo-200/80">
                Like any great teammate, your AI workforce learns from you and constantly adapts over time to deliver more accurate and consistent results.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src={learningImage}
                alt="Constantly learning"
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


