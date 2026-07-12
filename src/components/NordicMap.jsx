export default function NordicMap() {
  return (
    <section className="nordic">
      <div className="mapCard reveal">
        <span className="mapLabel portugal">Portugal</span>
        <svg viewBox="0 0 900 420" aria-hidden="true">
          <path d="M130 310 C260 210 390 220 535 140 S720 55 790 70" />
          <circle cx="130" cy="310" r="8" />
          <circle cx="790" cy="70" r="8" />
        </svg>
        <span className="mapLabel norway">Noruega</span>
      </div>
      <div className="nordicText reveal">
        <p className="kicker light">Portugal ⇄ Países Nórdicos</p>
        <h2>Quando dois sistemas jurídicos se cruzam, os detalhes decidem o resultado.</h2>
        <p>Conhecimento das legislações, compreensão das culturas e soluções que funcionam em ambos os lados.</p>
      </div>
    </section>
  );
}
