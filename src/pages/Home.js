import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Capabilities from "../components/Capabilities";
import WhyOptimista from "../components/WhyOptimista";
import FeaturedProducts from "../components/FeaturedProducts";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Capabilities />
      <WhyOptimista />
      <FeaturedProducts />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}