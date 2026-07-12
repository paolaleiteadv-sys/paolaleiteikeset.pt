export default function Nordic() {
  return (
    <section className="nordic">
      <div className="nordicMap">
        <span className="pt">Portugal</span>
        <svg viewBox="0 0 900 420" aria-hidden="true">
          <path d="M130 310 C250 220 390 235 540 140 S720 58 790 70" />
          <circle cx="130" cy="310" r="8" />
          <circle cx="790" cy="70" r="8" />
        </svg>
        <span className="no">Noruega</span>
      </div>
      <div className="nordicText">
        <p className="eyebrow light">Portugal ⇄ Países Nórdicos</p>
        <h2>Quando dois sistemas jurídicos se cruzam, os detalhes decidem o resultado.</h2>
        <p>Conhecimento das legislações, compreensão das culturas e soluções aplicáveis em ambos os lados.</p>
      </div>
    </section>
  );
}
