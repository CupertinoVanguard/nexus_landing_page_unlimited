export const metadata = {
  title: "Nexus",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import CapabilityShowcase from "@/components/capability-showcase";
import PillarsGrid from "@/components/pillars-grid";
import IntegrationsGrid from "@/components/integrations-grid";
import ClosingCta from "@/components/closing-cta";

/* Mid-page sections are parked while the site is being revamped — the home
   page is hero + header + footer only for now. */
// import PageIllustration from "@/components/page-illustration";
// import AlertRootCauseFix from "@/components/alert-rootcause-fix";
// import CatchIssues from "@/components/catch_issues";
// import DeepDive from "@/components/deep_dive";
// import IssueAction from "@/components/issue_action";
// import IntegrationSection from "@/components/integration_section";
// import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilityShowcase />
      <PillarsGrid />
      {/* Swap to `columns={2}` for the wider two-column tile layout. */}
      <IntegrationsGrid columns={3} />
      <ClosingCta />
      {/* <AlertRootCauseFix /> */}
      {/* <CatchIssues /> */}
      {/* <DeepDive /> */}
      {/* <IssueAction /> */}
      {/* <IntegrationSection /> */}
      {/* <Cta /> */}
    </>
  );
}
