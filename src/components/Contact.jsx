import { images } from "../data/images";
import { CALENDAR_URL, FORMSPREE_ENDPOINT, WHATSAPP_URL } from "../config";

const subjectGroups = [
  { label: "Portugal–Noruega", options: ["Fiscalidade Internacional PT–NO", "Residência Fiscal", "NAV", "Skatteetaten", "Trabalhador na Noruega", "Herança Internacional"] },
  { label: "Direito Laboral", options: ["Contrato de Trabalho", "Despedimento", "Baixa Médica", "Salários e Horas Extra", "Sindicato / Arbeidstilsynet"] },
  { label: "Direito Português", options: ["Direito Civil", "Família e Menores", "Direito Criminal", "Direito Laboral Português", "Empresas e Sociedades", "Direito Marítimo"] },
  { label: "Traduções Certificadas", options: ["Português → Norueguês", "Norueguês → Português", "Português → Inglês", "Inglês → Português", "Espanhol", "Tradução Jurídica"] },
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

        <div className="contactDetails">
          <p><strong>Email:</strong> info@paolaleiteikeset.pt</p>
          <p><strong>Telefone:</strong> +351 926 483 420</p>
          <p><strong>Porto:</strong> Rua de Camões, 219, 4.º Esq., 4000-145 Porto</p>
          <p><strong>Oslo:</strong> consultas presenciais e remotas</p>
        </div>

        <div className="contactActions">
          <a className="btn gold" href={CALENDAR_URL} target="_blank" rel="noreferrer">Agendar no Google Calendar</a>
          <a className="btn darkGhost" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Falar no WhatsApp</a>
        </div>

        <form id="formulario" className="contactForm" action={FORMSPREE_ENDPOINT} method="POST" encType="multipart/form-data">
          <input type="hidden" name="_subject" value="Novo pedido de contacto — Paola Leite Eikeset" />
          <input type="hidden" name="_language" value="pt" />
          <input type="text" name="_gotcha" className="honeypot" tabIndex="-1" autoComplete="off" />

          <div className="formGrid">
            <label><span>Nome</span><input name="nome" placeholder="Nome completo" required /></label>
            <label><span>Email</span><input name="email" placeholder="Email" type="email" required /></label>
          </div>

          <div className="formGrid">
            <label><span>Telefone / WhatsApp</span><input name="telefone" placeholder="+351..." /></label>
            <label>
              <span>Tipo de assunto</span>
              <select name="tipo_de_assunto" required defaultValue="">
                <option value="" disabled>Selecione o assunto</option>
                {subjectGroups.map((group) => (
                  <optgroup key={group.label} label={group.label}>
                    {group.options.map((option) => <option key={option}>{option}</option>)}
                  </optgroup>
                ))}
                <option>Outro assunto</option>
              </select>
            </label>
          </div>

          <label><span>Mensagem</span><textarea name="mensagem" placeholder="Descreva brevemente a situação" required /></label>

          <label className="fileInput">
            <span>Anexar documentos</span>
            <small>PDF, Word ou imagens.</small>
            <input type="file" name="anexos" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" />
          </label>

          <label className="consent">
            <input type="checkbox" name="consentimento" required />
            <span>Autorizo o tratamento dos dados enviados exclusivamente para resposta ao meu pedido.</span>
          </label>

          <button type="submit" className="btn gold">Enviar pedido para análise</button>
        </form>
      </div>
    </section>
  );
}
