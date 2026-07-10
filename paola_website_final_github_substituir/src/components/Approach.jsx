import { images } from "../data/images";

export default function Approach() {
  return (
    <section id="abordagem" className="approach">
      <div className="approachText reveal">
        <p className="kicker light">A Nossa Abordagem</p>
        <h2>Rigor antes da estratégia. Estratégia antes da ação.</h2>
        <div className="method">
          <div><span>01</span><h3>Analisar</h3><p>Estudo detalhado da situação, dos documentos e do enquadramento legal aplicável.</p></div>
          <div><span>02</span><h3>Estratégia</h3><p>Definição do caminho jurídico mais seguro, proporcional e eficaz.</p></div>
          <div><span>03</span><h3>Executar</h3><p>Atuação clara, documentada e orientada para proteger os interesses do cliente.</p></div>
        </div>
      </div>
      <div className="approachImage reveal">
        <img src={images.bookLaptop} alt="Preparação jurídica" />
      </div>
    </section>
  );
}
