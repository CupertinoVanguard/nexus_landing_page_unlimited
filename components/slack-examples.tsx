import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { CalendarIcon } from "lucide-react";

export default function SlackExamples() {
  return (
    <section id="cta" className="relative overflow-hidden">
       
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center bg-gradient-to-b from-blue/40 to-transparen rounded-2xl p-12">
            <h2
              className="pb-8 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl"
              data-aos="fade-up"
            >
              Nexus agents are always watching. 
              They surface insights, backtrace issues, and provide next steps.
            </h2>
            <br></br>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
