import { images } from "../data/images";

export default function Experience() {
  return (
    <section className="experience split">
      <div className="photo reveal">
        <img src={images.whiteProfile} alt="Paola Leite Eikeset" />
      </div>
      <div className="copy reveal">
        <p className="kicker">Experiência. Estratégia. Confiança.</p>
        <h2>Mais de 10 anos de experiência.</h2>
        <p>
          Prestamos assessoria jurídica estratégica a particulares e empresas que desenvolvem a sua atividade
          entre Portugal e os países nórdicos, conciliando conhecimento técnico, proximidade e uma visão internacional.
        </p>
        <div className="metrics">
          <div><strong>+10</strong><span>anos de experiência</span></div>
          <div><strong>PT ⇄ NO</strong><span>Portugal e Países Nórdicos</span></div>
          <div><strong>4</strong><span>idiomas de trabalho</span></div>
          <div><strong>Boutique</strong><span>atendimento personalizado</span></div>
        </div>
      </div>
    </section>
  );
}
