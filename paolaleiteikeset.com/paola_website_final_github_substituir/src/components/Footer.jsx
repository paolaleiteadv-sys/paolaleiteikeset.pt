import { images } from "../data/images";
import { WHATSAPP_URL } from "../config";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerCta">
        <h2>Cada decisão importante merece uma estratégia jurídica à sua altura.</h2>
        <img src={images.logoIconGold} alt="PL" />
        <a href="#contacto" className="btn gold">Agendar consulta</a>
      </div>
      <div className="footerBottom">
        <div>
          <img src={images.logoFullWhite} alt="Paola Leite Eikeset" className="footerLogo" />
          <p>Advocacia Internacional & Fiscalidade Nórdica</p>
        </div>
        <div><h4>Contacto</h4><p>info@paolaleiteikeset.pt</p><p>+351 926 483 420</p></div>
        <div><h4>Atuação</h4><p>Portugal</p><p>Noruega</p><p>Países Nórdicos</p></div>
        <div><h4>Online</h4><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a><p>LinkedIn · Instagram</p></div>
      </div>
    </footer>
  );
}
