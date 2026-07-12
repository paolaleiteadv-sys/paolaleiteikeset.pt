import { useEffect, useState } from "react";
import { images } from "../data/images";
import { CALENDAR_URL } from "../config";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`siteHeader ${solid ? "solid" : ""}`}>
      <a href="/#inicio" className="brand">
        <img src={images.logoGold} alt="Logótipo PL com asas" />
        <div>
          <strong>Paola Leite Eikeset</strong>
          <span>Advocacia Internacional & Fiscalidade Nórdica</span>
        </div>
      </a>

      <button className="menuToggle" onClick={() => setOpen(!open)} aria-label="Abrir menu">
        <span></span><span></span><span></span>
      </button>

      <nav className={open ? "open" : ""}>
        <a href="/#abordagem" onClick={() => setOpen(false)}>A Nossa Abordagem</a>
        <a href="/#servicos" onClick={() => setOpen(false)}>Áreas de Atuação</a>
        <a href="/#publicacoes" onClick={() => setOpen(false)}>Publicações</a>
        <a href="/#contacto" onClick={() => setOpen(false)}>Contacto</a>
      </nav>

      <a className="headerCta" href={CALENDAR_URL} target="_blank" rel="noreferrer">Agendar consulta</a>
    </header>
  );
}
