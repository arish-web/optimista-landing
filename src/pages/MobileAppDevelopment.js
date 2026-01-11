import Navbar from "../components/Navbar";
import MobileAppHero from "../components/mobiledev/MobileAppHero";
import MobileAppIntro from "../components/mobiledev/MobileAppIntro";
import MobileAppSteps from "../components/mobiledev/MobileAppSteps";
import MobileAppServices from "../components/mobiledev/MobileAppServices";
import MobileAppTestimonials from "../components/mobiledev/MobileAppTestimonials";
import MobileAppCTA from "../components/mobiledev/MobileAppCTA";
import Footer from "../components/Footer";
export default function MobileAppDevelopment() {
  return (
    <>
      <Navbar />
      <MobileAppHero />
      <MobileAppIntro />
      <MobileAppSteps />
      <MobileAppServices />
      <MobileAppTestimonials />
      <MobileAppCTA />
      <Footer />
    </>
  );
}
