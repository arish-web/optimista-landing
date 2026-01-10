import Navbar from "../components/Navbar";
import WebHero from "../components/webdev/WebHero";
import WebOverview from "../components/webdev/WebOverview";
import WebServices from "../components/webdev/WebServices";
import WebCaseHighlight from "../components/webdev/WebCaseHighlight";
import WebFeatures from "../components/webdev/WebFeatures";
import WebFeatureDetail from "../components/webdev/WebFeatureDetail";
import WebCTA from "../components/webdev/WebCTA";

export default function WebDevelopment() {
  return (
    <>
      <Navbar />
      <WebHero />
      <WebOverview />
      <WebServices />
      <WebCaseHighlight />
      <WebFeatures />
      <WebFeatureDetail />
      <WebCTA />
    </>
  );
}
