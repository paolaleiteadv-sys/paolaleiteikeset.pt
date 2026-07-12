import { useEffect, useState } from "react";
import { images } from "../data/images";
import { CALENDAR_URL } from "../config";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSolid(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`header ${solid ? "solid" : ""}`}>
      <a className="brand brandIcon" href="/#inicio" aria-label="Paola Leite Eikeset">
        <img src={images.logoIconGold} alt="Logótipo PL com asas" />
        <span>
          <strong>Paola Leite Eikeset</strong>
          <small>Advocacia Internacional & Fiscalidade Nórdica</small>
        </span>
      </a>

      <button className="menuButton" type="button" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span></span><span></span><span></span>
      </button>

      <nav className={`nav ${open ? "open" : ""}`}>
        <a onClick={close} href="/#inicio">Início</a>
        <a onClick={close} href="/#abordagem">A Nossa Abordagem</a>
        <a onClick={close} href="/#servicos">Áreas de Atuação</a>
        <a onClick={close} href="/#publicacoes">Publicações</a>
        <a onClick={close} href="/#contacto">Contacto</a>
      </nav>

      <a className="headerButton" href={CALENDAR_URL} target="_blank" rel="noreferrer">Agendar consulta</a>
    </header>
  );
}
