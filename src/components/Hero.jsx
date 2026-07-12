import { images } from "../data/images";
import { CALENDAR_URL } from "../config";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="heroCopy">
        <p className="eyebrow">Boutique Jurídica Internacional</p>
        <h1>Direito internacional com estratégia, clareza e rigor.</h1>
        <p className="heroLead">
          Assessoria jurídica para particulares, empresas e investidores entre Portugal e os países nórdicos.
        </p>
        <div className="heroButtons">
          <a className="button gold" href={CALENDAR_URL} target="_blank" rel="noreferrer">Agendar consulta</a>
          <a className="button outline" href="#contacto">Enviar pedido para análise</a>
        </div>
      </div>

      <div className="heroVisual">
        <div className="heroMonogram">PL</div>
        <img src={images.hero} alt="Paola Leite Eikeset" />
      </div>
    </section>
  );
}
