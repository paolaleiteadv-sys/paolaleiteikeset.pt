import { images } from "../data/images";
import { CALENDAR_URL, FORMSPREE_ENDPOINT } from "../config";

const subjectGroups = [
  { label: "Portugal–Noruega", options: ["Fiscalidade Internacional PT–NO", "Residência Fiscal", "NAV", "Skatteetaten", "Trabalhador na Noruega", "Herança Internacional"] },
  { label: "Direito Laboral Norueguês", options: ["Contrato de Trabalho", "Despedimento", "Baixa Médica", "Salários e Horas Extra", "Sindicato / Arbeidstilsynet"] },
  { label: "Direito Português", options: ["Direito Civil", "Sucessões", "Direito Criminal", "Direito Laboral", "Direito Societário"] },
  { label: "Traduções Certificadas", options: ["Português → Norueguês", "Norueguês → Português", "Inglês", "Tradução Jurídica"] },
];

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="contactImage reveal">
        <img src={images.sofaBeige} alt="Paola Leite Eikeset" />
      </div>
      <div className="contactBox reveal">
        <p className="kicker light">Contacto</p>
        <h2>Cada decisão importante merece uma estratégia jurídica à sua altura.</h2>
        <p>Agende uma consulta ou envie o seu pedido para uma primeira análise.</p>
        <div className="contactActions">
          <a className="btn gold" href={CALENDAR_URL} target="_blank" rel="noreferrer">Agendar consulta</a>
          <a className="btn darkGhost" href="#formulario">Enviar pedido</a>
        </div>
        <form id="formulario" className="contactForm" action={FORMSPREE_ENDPOINT} method="POST" encType="multipart/form-data">
          <input type="hidden" name="subject" value="Novo pedido de contacto - Paola Leite Eikeset" />
          <input name="nome" placeholder="Nome" required />
          <input name="email" placeholder="Email" type="email" required />
          <input name="telefone" placeholder="Telefone / WhatsApp" />
          <select name="tipo_de_assunto" required defaultValue="">
            <option value="" disabled>Tipo de assunto</option>
            {subjectGroups.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map((option) => <option key={option}>{option}</option>)}
              </optgroup>
            ))}
            <option>Outro assunto</option>
          </select>
          <textarea name="mensagem" placeholder="Mensagem" required />
          <label className="fileInput">Anexar documentos<input type="file" name="anexos" multiple /></label>
          <button type="submit" className="btn gold">Enviar pedido para análise</button>
        </form>
      </div>
    </section>
  );
}
