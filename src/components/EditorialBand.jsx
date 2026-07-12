import { images } from "../data/images";

export default function EditorialBand() {
  return (
    <section className="editorialBand" aria-label="Trabalho jurídico em detalhe">
      <img src={images.laptopWork} alt="Trabalho jurídico e análise documental" loading="lazy" />
      <div>
        <p className="kicker light">Rigor em cada detalhe</p>
        <h2>Estratégia construída com análise, documentação e acompanhamento próximo.</h2>
      </div>
      <img src={images.blackPortrait} alt="Retrato profissional de Paola Leite Eikeset" loading="lazy" />
    </section>
  );
}
