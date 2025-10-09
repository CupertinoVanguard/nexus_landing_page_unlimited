import Image from "next/image";
import featuresImage from "@/public/images/features.png";

export default function KnowledgeBasePromo() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-nacelle text-3xl font-semibold text-white md:text-5xl">
                Company knowledge base
              </h2>
              <p className="mt-4 text-lg text-indigo-200/80">
                AI that adapts to your company’s unique workflows and organizational structure, integrating seamlessly into your operations.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src={featuresImage}
                alt="Company knowledge base"
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


