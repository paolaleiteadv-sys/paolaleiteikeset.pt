import { images } from "../data/images";

export default function Experience() {
  return (
    <section className="experience">
      <div className="experiencePhoto">
        <img src={images.whiteProfile} alt="Paola Leite Eikeset" />
      </div>
      <div className="experienceText">
        <p className="eyebrow">Experiência. Estratégia. Confiança.</p>
        <h2>Mais de 10 anos de experiência.</h2>
        <p>
          Acompanhamento jurídico nacional e internacional, com particular enfoque nas relações entre Portugal,
          Noruega e os restantes países nórdicos.
        </p>
        <div className="facts">
          <article><strong>+10</strong><span>anos de experiência</span></article>
          <article><strong>PT ⇄ NO</strong><span>atuação transfronteiriça</span></article>
          <article><strong>4</strong><span>idiomas de trabalho</span></article>
          <article><strong>Boutique</strong><span>atendimento personalizado</span></article>
        </div>
      </div>
    </section>
  );
}
