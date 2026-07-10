import { images } from "../data/images";
import { CALENDAR_URL } from "../config";

export default function TaxSection() {
  return (
    <section className="tax">
      <div className="taxImage reveal">
        <img src={images.taxBook} alt="Direito Tributário" />
      </div>
      <div className="taxText reveal">
        <p className="kicker">Especialização</p>
        <h2>Fiscalidade Internacional.</h2>
        <p>Acompanhamento estratégico para particulares e empresas que vivem, trabalham ou investem entre Portugal e a Noruega.</p>
        <ul>
          <li>Planeamento fiscal internacional</li>
          <li>Residência fiscal</li>
          <li>Dupla tributação</li>
          <li>Rendimentos e património transfronteiriço</li>
        </ul>
        <a className="btn gold" href={CALENDAR_URL} target="_blank" rel="noreferrer">Agendar consulta</a>
      </div>
    </section>
  );
}
