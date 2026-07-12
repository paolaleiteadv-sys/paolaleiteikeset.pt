import { images } from "../data/images";

export default function Footer() {
  return (
    <footer>
      <div className="footerTop">
        <img src={images.logoHorizontalWhite} alt="Paola Leite Eikeset" />
        <p>Advocacia Internacional & Fiscalidade Nórdica</p>
      </div>
      <div className="footerGrid">
        <div><strong>Contacto</strong><span>info@paolaleiteikeset.pt</span><span>+351 926 483 420</span></div>
        <div><strong>Porto</strong><span>Rua de Camões, 219, 4.º Esq.</span><span>4000-145 Porto</span></div>
        <div><strong>Atuação</strong><span>Portugal</span><span>Noruega e Países Nórdicos</span></div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Paola Leite Eikeset. Todos os direitos reservados.</p>
    </footer>
  );
}
