"use client";

export default function ProblemStatement() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative border border-gray-800 rounded-3xl overflow-hidden bg-gradient-to-b from-gray-700 to-gray-950 py-12 md:py-16">
          {/* Decorative ellipse/circle */}
          {/* <h1 className="font-nacelle text-md sm:text-md md:text-md lg:text-md font-semibold text-white mb-4">
            [Problem Statement]
          </h1> */}
          {/* Content wrapper */}
          <div className="relative">
            {/* Header section */}
            <div className="px-4 sm:px-6 mb-8 md:mb-12">
              <h2 className="font-nacelle text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">
               "If something is not working, we don't really have that much visibility unless I go in and look at the traces."
              </h2>
            </div>
            {/* Attribution - bottom right corner, below quote */}
            <div className="px-4 sm:px-6 text-right">
              <p className="text-sm md:text-base text-gray-200 font-bold">
                - Product & AI Engineering Head
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeY {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marqueeYReverse {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        @keyframes marqueeX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeXReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}


