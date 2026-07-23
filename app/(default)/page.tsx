export const metadata = {
  title: "Nexus",
  description: "Page description",
};

import Hero from "@/components/hero-home";

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
      {/* <AlertRootCauseFix /> */}
      {/* <CatchIssues /> */}
      {/* <DeepDive /> */}
      {/* <IssueAction /> */}
      {/* <IntegrationSection /> */}
      {/* <Cta /> */}
    </>
  );
}
