import Navbar from "../components/Navbar";
import CrmHero from "../components/crm/CrmHero";
import CrmStats from "../components/crm/CrmStats";
import CrmFeatures from "../components/crm/CrmFeatures";
import CrmPricing from "../components/crm/CrmPricing";
import CrmIntegrations from "../components/crm/CrmIntegrations";
import CrmWhyChoose from "../components/crm/CrmWhyChoose";
import Footer from "../components/Footer";

export default function CrmSoftware() {
  return (
    <>
      <Navbar />
      <CrmHero />
      <CrmStats />
      <CrmFeatures />
      <CrmPricing />
      <CrmIntegrations />
      <CrmWhyChoose />
      <Footer />
    </>
  );
}
