import { images } from "../data/images";
import { CALENDAR_URL, FORMSPREE_ENDPOINT, WHATSAPP_URL } from "../config";

const groups = [
  ["Portugal–Noruega", ["Fiscalidade Internacional PT–NO", "Residência Fiscal", "NAV", "Skatteetaten", "Trabalhador na Noruega", "Herança Internacional"]],
  ["Direito Laboral", ["Contrato de Trabalho", "Despedimento", "Baixa Médica", "Salários e Horas Extra", "Sindicato / Arbeidstilsynet"]],
  ["Direito Português", ["Direito Civil", "Família e Menores", "Direito Criminal", "Direito Laboral Português", "Empresas e Sociedades", "Direito Marítimo"]],
  ["Traduções Certificadas", ["Português → Norueguês", "Norueguês → Português", "Português → Inglês", "Inglês → Português", "Espanhol", "Tradução Jurídica"]]
];

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="contactPhoto"><img src={images.sofaBeige} alt="Paola Leite Eikeset" /></div>
      <div className="contactContent">
        <p className="eyebrow light">Contacto</p>
        <h2>Cada decisão importante merece uma estratégia jurídica à sua altura.</h2>
        <p>Agende uma consulta ou envie o seu pedido para uma primeira análise.</p>

        <div className="contactLinks">
          <a className="button gold" href={CALENDAR_URL} target="_blank" rel="noreferrer">Agendar no Google Calendar</a>
          <a className="button outline" href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>

        <form action={FORMSPREE_ENDPOINT} method="POST" encType="multipart/form-data">
          <input type="hidden" name="_subject" value="Novo pedido de contacto — Paola Leite Eikeset" />
          <input type="text" name="_gotcha" className="honeypot" tabIndex="-1" autoComplete="off" />

          <div className="twoCols">
            <label>Nome<input name="nome" required /></label>
            <label>Email<input type="email" name="email" required /></label>
          </div>

          <div className="twoCols">
            <label>Telefone / WhatsApp<input name="telefone" /></label>
            <label>Tipo de assunto
              <select name="assunto" required defaultValue="">
                <option value="" disabled>Selecione</option>
                {groups.map(([label, options]) => (
                  <optgroup key={label} label={label}>
                    {options.map(option => <option key={option}>{option}</option>)}
                  </optgroup>
                ))}
                <option>Outro assunto</option>
              </select>
            </label>
          </div>

          <label>Mensagem<textarea name="mensagem" required /></label>

          <label>Anexar documentos
            <input type="file" name="anexos" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" />
          </label>

          <label className="consent">
            <input type="checkbox" required />
            <span>Autorizo o tratamento dos dados enviados exclusivamente para resposta ao meu pedido.</span>
          </label>

          <button className="button gold" type="submit">Enviar pedido para análise</button>
        </form>
      </div>
    </section>
  );
}
