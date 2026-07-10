import { images } from "../data/images";
import { CALENDAR_URL } from "../config";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="heroText reveal">
        <p className="kicker">Direito Internacional · Fiscalidade · Traduções Certificadas</p>
        <h1>Estratégia jurídica internacional para quem vive, trabalha ou investe entre Portugal e os Países Nórdicos.</h1>
        <p>Uma boutique jurídica para decisões complexas, com rigor técnico, visão internacional e acompanhamento personalizado.</p>
        <div className="heroActions">
          <a className="btn gold" href={CALENDAR_URL} target="_blank" rel="noreferrer">Agendar consulta</a>
          <a className="btn ghost" href="#servicos">Áreas de atuação</a>
        </div>
      </div>
      <div className="heroImage reveal">
        <img src={images.hero} alt="Paola Leite Eikeset" />
      </div>
    </section>
  );
}
