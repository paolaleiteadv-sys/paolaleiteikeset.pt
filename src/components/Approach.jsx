import { images } from "../data/images";

export default function Approach() {
  return (
    <section id="abordagem" className="approach">
      <div className="approachTitle">
        <p className="eyebrow light">A Nossa Abordagem</p>
        <h2>Cada situação merece mais do que uma resposta jurídica.</h2>
        <p className="accentText">Merece uma estratégia.</p>
      </div>

      <div className="approachPhoto">
        <img src={images.bookLaptop} alt="Análise e preparação jurídica" />
      </div>

      <div className="approachSteps">
        <article><span>01</span><h3>Analisar</h3><p>Compreender o contexto jurídico, documental e estratégico.</p></article>
        <article><span>02</span><h3>Estruturar</h3><p>Avaliar riscos e definir o caminho mais seguro.</p></article>
        <article><span>03</span><h3>Executar</h3><p>Atuar com rigor, discrição e acompanhamento próximo.</p></article>
      </div>
    </section>
  );
}
