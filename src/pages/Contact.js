import Navbar from "../components/Navbar";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactCards from "../components/contact/ContactCards";
import ContactMap from "../components/contact/ContactMap";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <ContactCards />
      <ContactMap />
      <Footer />
    </>
  );
}
