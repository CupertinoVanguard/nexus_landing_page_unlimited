export const metadata = {
  title: "Nexus",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import DataEngPromo from "@/components/data-eng-promo";
import Principles from "@/components/principles";
import FeaturesGrid from "@/components/features-grid";

export default function Home() {
  return (
    <>
      {/* <PageIllustration /> */}
      <Hero />
      <DataEngPromo />
      <Principles />
      <FeaturesGrid />
      <Features />
      {/* <Testimonials /> */}
      {/* <Workflows /> */}
      {/* <Cta /> */}
    </>
  );
}
