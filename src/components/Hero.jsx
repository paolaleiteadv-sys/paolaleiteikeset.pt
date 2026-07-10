import { images } from "../data/images";
import { CALENDAR_URL } from "../config";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="heroText reveal">
        <p className="kicker">Boutique Jurídica Internacional</p>
        <h1>Cada decisão jurídica importante começa muito antes de um tribunal.</h1>
        <p className="heroStatement">Começa com uma estratégia.</p>
        <p>Assessoria jurídica internacional para quem vive, trabalha ou investe entre Portugal e os Países Nórdicos.</p>
        <div className="heroActions">
          <a className="btn gold" href={CALENDAR_URL} target="_blank" rel="noreferrer">Agendar consulta</a>
          <a className="btn ghost" href="#contacto">Enviar pedido para análise</a>
        </div>
      </div>
      <div className="heroImage reveal">
        <img src={images.hero} alt="Paola Leite Eikeset" />
      </div>
    </section>
  );
}
