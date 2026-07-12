import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Approach from "../components/Approach";
import Services from "../components/Services";
import Nordic from "../components/Nordic";
import Tax from "../components/Tax";
import EditorialBand from "../components/EditorialBand";
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
        <Experience />
        <Approach />
        <Services />
        <Nordic />
        <Tax />
        <EditorialBand />
        <Articles />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
