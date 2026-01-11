import Navbar from "../components/Navbar";
import PricingHero from "../components/pricing/PricingHero";
import PricingCards from "../components/pricing/PricingCards";
import PricingFeatures from "../components/pricing/PricingFeatures";
import PricingCTA from "../components/pricing/PricingCTA";
import Footer from "../components/Footer";

export default function Pricing() {
  return (
    <>
      <Navbar />
      <PricingHero />
      <PricingCards />
      <PricingFeatures />
      <PricingCTA />
      <Footer />
    </>
  );
}
