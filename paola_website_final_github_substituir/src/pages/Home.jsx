import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Manifesto from "../components/Manifesto";
import Approach from "../components/Approach";
import Services from "../components/Services";
import NordicMap from "../components/NordicMap";
import TaxSection from "../components/TaxSection";
import Articles from "../components/Articles";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Manifesto />
        <Approach />
        <Services />
        <NordicMap />
        <TaxSection />
        <Articles />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
