export const metadata = {
  title: "Nexus",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Cta from "@/components/cta";
import Principles from "@/components/principles";
import FeaturesGrid from "@/components/features-grid";
// import FeatureCards from "@/components/feature-cards";
import WorkforcePromo from "@/components/workforce-promo";
import KnowledgeBasePromo from "@/components/knowledge-base-promo";
import ConstantlyLearningPromo from "@/components/constantly-learning-promo";
import HowItWorks from "@/components/how-it-works";
import IntegrationsTicker from "@/components/integrations-ticker";
import Faq from "@/components/faq";
import AgentTaskforce from "@/components/agent-taskforce";
import Testimonials from "@/components/testimonials";
import ProblemStatement from "@/components/problem-statement";
import SlackExamples from "@/components/slack-examples";
import IntegrationSection from "@/components/integration_section";
import LaunchSection from "@/components/launch_section";
import CatchIssues from "@/components/catch_issues";
import DeepDive from "@/components/deep_dive";
import IssueAction from "@/components/issue_action";
import AlertRootCauseFix from "@/components/alert-rootcause-fix";

export default function Home() {
  return (
    <>
      {/* <PageIllustration /> */}
      <Hero />
      <AlertRootCauseFix />
      <CatchIssues />
      <DeepDive />
      <IntegrationSection />
      <IssueAction />
      {/* <Principles /> */}
      {/* <ProblemStatement /> */}
      {/* <Features/> */}
      {/* <WorkforcePromo />
      <KnowledgeBasePromo />
      <ConstantlyLearningPromo /> */}
      {/* <SlackExamples /> */}
      
      {/* <Testimonials /> */}
      {/* <FeaturesGrid /> */}
      {/* <IntegrationsTicker /> */}
      {/* <Features /> */}
      {/* <HowItWorks /> */}
      {/* <Faq /> */}
      {/* <Testimonials /> */}
      {/* <Workflows /> */}
      <Cta />
      {/* <Faq /> */}
    </>
  );
}
