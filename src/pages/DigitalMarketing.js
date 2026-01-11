import Navbar from "../components/Navbar";
import DmHero from "../components/digital/DmHero";
import DmIntro from "../components/digital/DmIntro";
import DmServices from "../components/digital/DmServices";
import DmWhyChoose from "../components/digital/DmWhyChoose";
import DmSteps from "../components/digital/DmSteps";
import DmCTA from "../components/digital/DmCTA";
import Footer from "../components/Footer";

export default function DigitalMarketing() {
  return (
    <>
      <Navbar />
      <DmHero />
      <DmIntro />
      <DmServices />
      <DmWhyChoose />
      <DmSteps />
      <DmCTA />
      <Footer />
    </>
  );
}
