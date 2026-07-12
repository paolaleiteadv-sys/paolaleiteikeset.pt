import { images } from "../data/images";

export default function EditorialBand() {
  return (
    <section className="editorialBand">
      <img src={images.laptopLogo} alt="Trabalho jurídico e análise documental" />
      <div>
        <p className="eyebrow light">Rigor em cada detalhe</p>
        <h2>Estratégia construída com análise, documentação e acompanhamento próximo.</h2>
      </div>
      <img src={images.blackPortrait} alt="Paola Leite Eikeset" />
    </section>
  );
}
