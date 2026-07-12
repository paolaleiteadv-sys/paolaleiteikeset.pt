import { services } from "../data/services";
import { images } from "../data/images";

export default function Services() {
  return (
    <section id="servicos" className="services">
      <div className="sectionHeader">
        <div>
          <p className="eyebrow">Áreas de Atuação</p>
          <h2>Soluções jurídicas para realidades internacionais.</h2>
        </div>
        <p>
          Intervenção estratégica em matérias nacionais e transfronteiriças, com especial ligação entre Portugal e os países nórdicos.
        </p>
      </div>

      <div className="servicesLayout">
        <div className="servicesList">
          {services.map((service, index) => (
            <article key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.subtitle}</p>
              </div>
              <a href="#contacto">→</a>
            </article>
          ))}
        </div>

        <div className="servicesImage">
          <img src={images.laptopWork} alt="Trabalho jurídico internacional" />
          <div>
            <p className="eyebrow light">Atendimento personalizado</p>
            <h3>Soluções jurídicas à medida de cada cliente.</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
