import { images } from "../data/images";

export default function About() {
  return (
    <section id="quem-sou" className="about split">
      <div className="photo reveal">
        <img src={images.whiteProfile} alt="Paola Leite Eikeset" />
      </div>
      <div className="copy reveal">
        <p className="kicker">Quem sou</p>
        <h2>O Direito como instrumento para criar segurança.</h2>
        <p>Acredito que cada situação exige mais do que conhecimento jurídico: exige compreensão, estratégia e visão.</p>
        <p>Atuo entre Portugal, Noruega e os países nórdicos, com especial enfoque em Direito Internacional, Fiscalidade Transfronteiriça e Traduções Certificadas.</p>
      </div>
    </section>
  );
}
