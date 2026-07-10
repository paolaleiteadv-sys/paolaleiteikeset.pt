import { services } from "../data/services";
import { images } from "../data/images";

export default function Services() {
  return (
    <section id="servicos" className="servicesSection">
      <div className="container">
        <div className="sectionIntro reveal">
          <p className="kicker">Áreas de atuação</p>
          <h2>Soluções jurídicas para realidades internacionais.</h2>
        </div>
        <div className="servicesLayout">
          <div className="serviceList reveal">
            {services.map((service, index) => (
              <article className="serviceRow" key={service.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.subtitle}</p>
                  <small>{service.description}</small>
                </div>
                <a href="#contacto" aria-label={`Contactar sobre ${service.title}`}>→</a>
              </article>
            ))}
          </div>
          <div className="serviceImage reveal">
            <img src={images.laptopLogo} alt="Trabalho jurídico internacional" />
          </div>
        </div>
      </div>
    </section>
  );
}
