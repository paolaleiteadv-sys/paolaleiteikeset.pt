import { useEffect, useState } from "react";
import { images } from "../data/images";
import { CALENDAR_URL } from "../config";

export default function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSolid(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${solid ? "solid" : ""}`}>
      <a className="brand" href="/#inicio" aria-label="Paola Leite Eikeset">
        <img src={images.logoFullGold} alt="Paola Leite Eikeset" />
      </a>
      <nav className="nav">
        <a href="/#inicio">Início</a>
        <a href="/#quem-sou">Quem Sou</a>
        <a href="/#abordagem">A Nossa Abordagem</a>
        <a href="/#servicos">Áreas</a>
        <a href="/#artigos">Artigos</a>
        <a href="/#contacto">Contacto</a>
      </nav>
      <a className="headerButton" href={CALENDAR_URL} target="_blank" rel="noreferrer">Agendar consulta</a>
    </header>
  );
}
