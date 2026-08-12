import Image, { type StaticImageData } from "next/image";

import FoundersInc from "@/public/images/logos/founders-inc.png";
import Cornell from "@/public/images/logos/cornell.svg";
import AmazonRobotics from "@/public/images/logos/amazon-robotics.svg";
import Amazon from "@/public/images/logos/amazon.svg";

/* Credibility strip under the hero.
 *
 * Assets are pre-flattened to a single dark tone (#57534e, matches
 * fg-muted) so the row reads as one monochrome set on the light backdrop;
 * `height` is tuned per mark for optical balance rather than matched pixels
 * (the Amazon wordmarks carry a descender-like smile, so they sit smaller).
 */
type Brand = {
  name: string;
  src: StaticImageData;
  /** Rendered height in px — tuned so the marks look the same weight. */
  height: number;
  wordmark?: string;
};

const brands: Brand[] = [
  { name: "Founders Inc", src: FoundersInc, height: 34, wordmark: "Founders Inc" },
  { name: "Cornell University", src: Cornell, height: 21 },
  // The Robotics mark stacks an arrow above its wordmark, so it needs more
  // box height than plain Amazon to land at the same apparent text size.
  { name: "Amazon Robotics", src: AmazonRobotics, height: 36 },
  { name: "Amazon", src: Amazon, height: 27 },
];

export default function LogoStrip() {
  return (
    <section className="relative w-full bg-bg pt-2 pb-14 sm:pt-3 sm:pb-16">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow text-center">Built by engineers from</p>

        <ul className="mobile-rail mt-8 flex snap-x snap-mandatory items-center gap-12 overflow-x-auto px-6 pb-2 sm:mt-10 sm:gap-16 sm:px-10 lg:justify-center lg:gap-20">
          {brands.map((brand) => (
            <li
              key={brand.name}
              className="flex shrink-0 snap-center items-center gap-2.5"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                height={brand.height}
                style={{ height: brand.height, width: "auto" }}
                className="opacity-80 transition-opacity duration-200 hover:opacity-100"
                unoptimized
              />
              {brand.wordmark ? (
                <span className="whitespace-nowrap text-[18px] font-semibold tracking-[-0.02em] text-fg-muted opacity-80">
                  {brand.wordmark}
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
