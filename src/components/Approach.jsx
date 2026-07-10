import { images } from "../data/images";

export default function Approach() {
  return (
    <section id="abordagem" className="approach">
      <div className="approachText reveal">
        <p className="kicker light">A Nossa Abordagem</p>
        <h2>Cada situação merece mais do que uma resposta jurídica. Merece uma estratégia.</h2>
        <p className="approachLead">
          A nossa intervenção assenta numa análise rigorosa dos factos, na compreensão dos objetivos do cliente
          e na definição de uma estratégia jurídica sólida.
        </p>
        <div className="method">
          <div><span>01</span><h3>Analisar</h3><p>Compreendemos o contexto jurídico, documental e estratégico de cada situação.</p></div>
          <div><span>02</span><h3>Estruturar</h3><p>Avaliamos riscos, enquadramos juridicamente o caso e definimos o melhor caminho.</p></div>
          <div><span>03</span><h3>Executar</h3><p>Representamos os interesses do cliente com rigor técnico, discrição e acompanhamento próximo.</p></div>
        </div>
      </div>
      <div className="approachImage reveal">
        <img src={images.bookLaptop} alt="Preparação jurídica" />
      </div>
    </section>
  );
}
