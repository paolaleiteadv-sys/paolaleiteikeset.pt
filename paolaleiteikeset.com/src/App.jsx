import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const content = {
  pt: {
    nav: ["Início", "Serviços", "Portugal–Noruega", "Direito Laboral", "Direito Português", "Traduções", "Contacto"],
    headerButton: "Agendar consulta",
    heroTitle: "Advocacia especializada em Portugal e Noruega",
    heroText: "Advocacia Internacional • Fiscalidade Nórdica • Traduções Certificadas",
    heroPrimary: "Agendar consulta",
    servicesLabel: "Serviços",
    servicesTitle: "Precisão jurídica. Presença internacional. Identidade nórdica.",
    services: [
      { icon: "◎", title: "Fiscalidade Internacional PT–NO", text: "Residência fiscal, trabalhadores deslocados, tributação transfronteiriça e articulação com autoridades portuguesas e norueguesas." },
      { icon: "§", title: "Advocacia Internacional", text: "Apoio jurídico em Portugal para clientes com interesses, residência, trabalho, património ou família na Noruega." },
      { icon: "◆", title: "Consultoria Jurídica Estratégica", text: "Análise preventiva, pareceres, orientação documental e estratégia para decisões sensíveis antes do conflito escalar." },
      { icon: "NO", title: "Tradução Certificada PT–NO–EN", text: "Traduções jurídicas certificadas para tribunais, bancos, NAV, Skatteetaten, UDI, conservatórias e autoridades internacionais." },
    ],
    highlights: [
      { icon: "⚖", title: "Atendimento personalizado", text: "Soluções jurídicas à medida das suas necessidades." },
      { icon: "◎", title: "Portugal & Noruega", text: "Experiência jurídica em ambos os países." },
      { icon: "◇", title: "Sigilo & confiança", text: "A sua informação está sempre protegida." },
      { icon: "◷", title: "Resposta rápida", text: "Análise célere do seu caso e orientação eficaz." },
      { icon: "▤", title: "Resultados", text: "Compromisso com soluções jurídicas eficazes." },
    ],
    ptNoLabel: "Portugal–Noruega",
    ptNoTitle: "Quando dois sistemas jurídicos se cruzam, os detalhes decidem o resultado.",
    ptNoText: "O acompanhamento certo evita atrasos, indeferimentos, bloqueios bancários, perda de direitos sociais, problemas fiscais e documentos recusados por autoridades estrangeiras.",
    ptNoItems: ["Residência fiscal Portugal–Noruega", "Trabalhadores portugueses na Noruega", "NAV, Skatteetaten, UDI e entidades públicas", "Heranças, bancos e documentação internacional", "Procurações, certidões, decisões judiciais e contratos"],
    labourLabel: "Direito Laboral Norueguês",
    labourTitle: "Apoio jurídico para trabalhadores portugueses na Noruega.",
    labourText: "Orientação estratégica em conflitos laborais, despedimentos, baixas médicas, contratos, direitos perante empregadores noruegueses e articulação com NAV, sindicatos e entidades públicas.",
    labourItems: ["Análise de contratos de trabalho noruegueses", "Despedimento, pressão patronal e ambiente hostil", "Baixa médica, doença prolongada e proteção do trabalhador", "Salários, horas extra, férias e direitos económicos", "Abono de menores", "Licença parental", "Comunicação com empregador, sindicato, NAV e Arbeidstilsynet", "Estratégia documental antes de reclamação ou litígio"],
    portugueseLawLabel: "Advocacia em Portugal",
    portugueseLawTitle: "Atuação nas principais áreas do Direito Português.",
    portugueseLawText: "Prestação de serviços jurídicos a particulares, empresas e investidores, com atuação nacional e especial atenção a situações com dimensão internacional.",
    portugueseLawAreas: [
      { title: "Direito Civil", text: "Contratos, responsabilidade civil, propriedade, posse, indemnizações e litígios entre particulares." },
      { title: "Sucessões", text: "Heranças, partilhas, habilitação de herdeiros, testamentos e património em Portugal ou no estrangeiro." },
      { title: "Direito Criminal", text: "Defesa em inquérito, instrução, julgamento, recursos e acompanhamento estratégico em processo penal." },
      { title: "Direito Laboral", text: "Despedimentos, créditos laborais, assédio, acidentes de trabalho e conflitos entre trabalhador e empregador." },
      { title: "Direito Societário", text: "Constituição de sociedades, alterações societárias, pactos sociais, quotistas, gerência e administração." },
      { title: "Direito Empresarial", text: "Contratos comerciais, recuperação de crédito, assessoria jurídica, compliance e expansão internacional." },
    ],
    translationsTitle: "Tradução certificada",
    translationsText: "Traduções de documentos jurídicos, administrativos e fiscais, com declaração de exatidão, identificação da tradutora e formatação adequada para apresentação institucional.",
    documents: ["Certidões", "Decisões judiciais", "Procurações", "Escrituras", "Documentos fiscais", "Contratos", "Documentos sucessórios", "Cartas institucionais"],
    processLabel: "Como funciona",
    steps: ["Envio dos documentos", "Análise preliminar", "Orçamento", "Execução do serviço", "Entrega e acompanhamento"],
    contactLabel: "Contacto",
    contactTitle: "Envie o seu pedido para análise.",
    contactText: "Descreva brevemente a situação e, quando aplicável, envie os documentos relevantes para uma primeira avaliação.",
    formName: "Nome",
    formEmail: "Email",
    formSubject: "Tipo de assunto",
    formGroups: [
      { label: "Portugal–Noruega", options: ["Fiscalidade Internacional PT–NO", "Residência Fiscal", "NAV", "Skatteetaten", "Trabalhador na Noruega", "Herança Internacional", "Bancos e Património Internacional"] },
      { label: "Direito Laboral Norueguês", options: ["Contrato de Trabalho", "Despedimento", "Baixa Médica", "Salários e Horas Extra", "Abono de Menores", "Licença Parental", "Sindicato / Arbeidstilsynet", "Assédio Laboral"] },
      { label: "Direito Português", options: ["Direito Civil", "Direito das Sucessões", "Direito Criminal", "Direito Laboral", "Direito Societário", "Direito Empresarial"] },
      { label: "Traduções Certificadas", options: ["Português → Norueguês", "Norueguês → Português", "Inglês", "Tradução Jurídica", "Apostilha de Haia"] },
    ],
    otherSubject: "Outro Assunto",
    urgencyLabel: "Grau de Urgência",
    urgencyOptions: ["Urgente (24 horas)", "Prioridade Alta (72 horas)", "Normal", "Apenas pedido de orçamento"],
    formMessage: "Mensagem",
    formSubmit: "Enviar pedido",
    officesLabel: "Locais de Atendimento",
    footerRights: "Todos os direitos reservados.",
    footerText: "Advocacia Internacional · Fiscalidade Nórdica · Responsabilidade Limitada",
  },
  en: {
    nav: ["Home", "Services", "Portugal–Norway", "Employment Law", "Portuguese Law", "Translations", "Contact"],
    headerButton: "Book consultation",
    heroTitle: "Legal practice specialised in Portugal and Norway",
    heroText: "International Law • Nordic Taxation • Certified Translations",
    heroPrimary: "Book consultation",
    servicesLabel: "Services",
    servicesTitle: "Legal precision. International presence. Nordic identity.",
    services: [
      { icon: "◎", title: "International Taxation PT–NO", text: "Tax residence, cross-border workers, international taxation and coordination with Portuguese and Norwegian authorities." },
      { icon: "§", title: "International Legal Practice", text: "Legal support in Portugal for clients with interests, residence, work, assets or family matters in Norway." },
      { icon: "◆", title: "Strategic Legal Consulting", text: "Preventive analysis, legal opinions, document guidance and strategy for sensitive decisions before disputes escalate." },
      { icon: "NO", title: "Certified Translation PT–NO–EN", text: "Certified legal translations for courts, banks, NAV, Skatteetaten, UDI, registries and international authorities." },
    ],
    highlights: [
      { icon: "⚖", title: "Personalised service", text: "Legal solutions tailored to your needs." },
      { icon: "◎", title: "Portugal & Norway", text: "Legal experience in both countries." },
      { icon: "◇", title: "Confidentiality & trust", text: "Your information is always protected." },
      { icon: "◷", title: "Fast response", text: "Prompt case review and effective guidance." },
      { icon: "▤", title: "Results", text: "Committed to effective legal solutions." },
    ],
    ptNoLabel: "Portugal–Norway",
    ptNoTitle: "When two legal systems intersect, details decide the outcome.",
    ptNoText: "Proper support helps prevent delays, refusals, bank restrictions, loss of social rights, tax problems and documents being rejected by foreign authorities.",
    ptNoItems: ["Tax residence Portugal–Norway", "Portuguese workers in Norway", "NAV, Skatteetaten, UDI and public authorities", "Estates, banks and international documentation", "Powers of attorney, certificates, court decisions and contracts"],
    labourLabel: "Norwegian Employment Law",
    labourTitle: "Legal support for Portuguese workers in Norway.",
    labourText: "Strategic guidance in employment disputes, dismissals, sick leave, contracts, rights before Norwegian employers and coordination with NAV, unions and public authorities.",
    labourItems: ["Review of Norwegian employment contracts", "Dismissal, employer pressure and hostile work environment", "Sick leave, long-term illness and worker protection", "Wages, overtime, holiday pay and financial rights", "Child Benefit", "Parental Benefit", "Communication with employer, union, NAV and Arbeidstilsynet", "Document strategy before complaint or litigation"],
    portugueseLawLabel: "Legal Practice in Portugal",
    portugueseLawTitle: "Legal services across the main areas of Portuguese law.",
    portugueseLawText: "Legal services for individuals, companies and investors, with national practice and particular attention to matters with an international dimension.",
    portugueseLawAreas: [
      { title: "Civil Law", text: "Contracts, civil liability, property, possession, compensation claims and disputes between private parties." },
      { title: "Estate and Succession Law", text: "Inheritance, estate division, heirship documents, wills and assets located in Portugal or abroad." },
      { title: "Criminal Law", text: "Defence during investigation, pre-trial stages, trial, appeals and strategic support in criminal proceedings." },
      { title: "Employment Law", text: "Dismissals, employment credits, harassment, workplace accidents and disputes between employee and employer." },
      { title: "Corporate Law", text: "Company incorporation, corporate changes, articles of association, shareholders, managers and directors." },
      { title: "Business Law", text: "Commercial contracts, debt recovery, legal advisory, compliance and international expansion." },
    ],
    translationsTitle: "Certified translation",
    translationsText: "Translations of legal, administrative and tax documents, with a certificate of accuracy, translator identification and institutional formatting.",
    documents: ["Certificates", "Court decisions", "Powers of attorney", "Deeds", "Tax documents", "Contracts", "Estate documents", "Institutional letters"],
    processLabel: "How it works",
    steps: ["Document submission", "Preliminary review", "Quote", "Service execution", "Delivery and follow-up"],
    contactLabel: "Contact",
    contactTitle: "Send your request for review.",
    contactText: "Briefly describe the matter and, where applicable, send the relevant documents for an initial assessment.",
    formName: "Name",
    formEmail: "Email",
    formSubject: "Type of matter",
    formGroups: [
      { label: "Portugal–Norway", options: ["International Taxation PT–NO", "Tax Residence", "NAV", "Skatteetaten", "Worker in Norway", "International Estate", "Banks and International Assets"] },
      { label: "Norwegian Employment Law", options: ["Employment Contract", "Dismissal", "Sick Leave", "Wages and Overtime", "Child Benefit", "Parental Benefit", "Union / Arbeidstilsynet", "Workplace Harassment"] },
      { label: "Portuguese Law", options: ["Civil Law", "Estate and Succession Law", "Criminal Law", "Employment Law", "Corporate Law", "Business Law"] },
      { label: "Certified Translations", options: ["Portuguese → Norwegian", "Norwegian → Portuguese", "English", "Legal Translation", "Hague Apostille"] },
    ],
    otherSubject: "Other Matter",
    urgencyLabel: "Urgency Level",
    urgencyOptions: ["Urgent (24 hours)", "High Priority (72 hours)", "Normal", "Quote request only"],
    formMessage: "Message",
    formSubmit: "Submit request",
    officesLabel: "Service Locations",
    footerRights: "All rights reserved.",
    footerText: "International Law · Nordic Taxation · Limited Liability",
  },
};

function runSelfTests() {
  const languages = ["pt", "en"];
  const tests = [
    ["both languages exist", Boolean(content.pt && content.en)],
    ["both languages have seven nav labels", languages.every((l) => content[l].nav.length === 7)],
    ["both languages have four services", languages.every((l) => content[l].services.length === 4)],
    ["both languages have five highlights", languages.every((l) => content[l].highlights.length === 5)],
    ["both languages have eight employment law items", languages.every((l) => content[l].labourItems.length === 8)],
    ["both languages have six Portuguese law areas", languages.every((l) => content[l].portugueseLawAreas.length === 6)],
    ["both languages have four form groups", languages.every((l) => content[l].formGroups.length === 4)],
    ["both addresses are present", "Rua de Camões, 219, 4.º Esquerdo · 4000-145 Porto".includes("Porto") && "Av. Manuel Pereira Soares, 81, Loja 8 · 4630-296 Marco de Canaveses".includes("Marco")],
  ];
  tests.forEach(([name, pass]) => {
    if (!pass) console.error(`Website test failed: ${name}`);
  });
}
runSelfTests();

function ArrowIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Button({ children, variant = "primary", className = "", ...props }) {
  return <button className={`btn ${variant === "outline" ? "btn-outline" : "btn-primary"} ${className}`} {...props}>{children}</button>;
}

function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function SectionLabel({ children, light = false }) {
  return <p className={`section-label ${light ? "section-label-light" : ""}`}>{children}</p>;
}

function ContactIcon({ children }) {
  return <span className="contact-icon">{children}</span>;
}

function LanguageToggle({ lang, setLang }) {
  return (
    <div className="language-toggle" aria-label="Language selector">
      <button type="button" onClick={() => setLang("pt")} className={lang === "pt" ? "active" : ""} aria-pressed={lang === "pt"}>PT</button>
      <button type="button" onClick={() => setLang("en")} className={lang === "en" ? "active" : ""} aria-pressed={lang === "en"}>EN</button>
    </div>
  );
}

function BrandHeader() {
  return (
    <a href="#inicio" className="brand-header">
      <img src="/logo.jpg" alt="Paola Leite Eikeset Advocacia" />
      <div className="brand-header-text">
        <p>PAOLA LEITE EIKESET</p>
        <div><span /> <strong>ADVOCACIA</strong> <span /></div>
      </div>
    </a>
  );
}

export default function App() {
  const [lang, setLang] = useState("pt");
  const t = useMemo(() => content[lang], [lang]);

  const links = [
    ["#inicio", t.nav[0]],
    ["#servicos", t.nav[1]],
    ["#portugal-noruega", t.nav[2]],
    ["#direito-laboral", t.nav[3]],
    ["#direito-portugues", t.nav[4]],
    ["#traducoes", t.nav[5]],
    ["#contacto", t.nav[6]],
  ];

  return (
    <div className="site">
      <header className="header">
        <div className="header-inner">
          <BrandHeader />
          <nav className="nav">{links.map(([href, label], index) => <a key={href} href={href} className={index === 0 ? "active" : ""}>{label}</a>)}</nav>
          <div className="header-actions">
            <LanguageToggle lang={lang} setLang={setLang} />
            <a href="#contacto" className="desktop-only"><Button variant="outline">{t.headerButton}</Button></a>
          </div>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-bg" />
          <div className="hero-inner">
            <motion.img src="/logo.jpg" alt="Paola Leite Eikeset Advocacia" className="hero-logo" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} />
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <h1>PAOLA LEITE EIKESET</h1>
              <div className="hero-word"><span /> <p>ADVOCACIA</p> <span /></div>
              <p className="hero-title">{t.heroTitle}</p>
              <p className="hero-text">{t.heroText}</p>
              <a href="#contacto" className="hero-cta"><Button>{t.heroPrimary}<ArrowIcon className="arrow" /></Button></a>
            </motion.div>
          </div>

          <div className="highlights">
            <div className="highlights-grid">
              {t.highlights.map((item) => (
                <div key={item.title} className="highlight">
                  <div className="highlight-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="servicos" className="section">
          <div className="container">
            <div className="section-heading">
              <SectionLabel>{t.servicesLabel}</SectionLabel>
              <h2>{t.servicesTitle}</h2>
            </div>
            <div className="grid-four">
              {t.services.map((service) => (
                <Card key={service.title}>
                  <div className="card-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="portugal-noruega" className="section section-dark">
          <div className="container split">
            <div>
              <SectionLabel light>{t.ptNoLabel}</SectionLabel>
              <h2>{t.ptNoTitle}</h2>
              <p className="lead light-text">{t.ptNoText}</p>
            </div>
            <div className="list">
              {t.ptNoItems.map((item) => <div key={item} className="list-item"><CheckIcon /> <span>{item}</span></div>)}
            </div>
          </div>
        </section>

        <section id="direito-laboral" className="section">
          <div className="container split">
            <div>
              <SectionLabel>{t.labourLabel}</SectionLabel>
              <h2>{t.labourTitle}</h2>
              <p className="lead">{t.labourText}</p>
              <a href="#contacto"><Button>{t.headerButton}<ArrowIcon className="arrow" /></Button></a>
            </div>
            <div className="list">
              {t.labourItems.map((item) => <div key={item} className="list-item light"><CheckIcon /> <span>{item}</span></div>)}
            </div>
          </div>
        </section>

        <section id="direito-portugues" className="section section-white">
          <div className="container">
            <div className="section-heading">
              <SectionLabel>{t.portugueseLawLabel}</SectionLabel>
              <h2>{t.portugueseLawTitle}</h2>
              <p className="lead">{t.portugueseLawText}</p>
            </div>
            <div className="grid-three">
              {t.portugueseLawAreas.map((area, index) => (
                <Card key={area.title}>
                  <div className="card-number">{String(index + 1).padStart(2, "0")}</div>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="traducoes" className="section">
          <div className="container split">
            <Card>
              <div className="card-icon">T</div>
              <h2>{t.translationsTitle}</h2>
              <p>{t.translationsText}</p>
            </Card>
            <div className="grid-two">
              {t.documents.map((item) => <div key={item} className="doc-card">{item}</div>)}
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container">
            <SectionLabel>{t.processLabel}</SectionLabel>
            <div className="grid-five">
              {t.steps.map((step, index) => (
                <div key={step} className="step"><span>0{index + 1}</span><h3>{step}</h3></div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section">
          <div className="container contact-box">
            <div>
              <SectionLabel light>{t.contactLabel}</SectionLabel>
              <h2>{t.contactTitle}</h2>
              <p className="lead light-text">{t.contactText}</p>
              <div className="contact-details">
                <p><ContactIcon>T</ContactIcon> +351 926 483 420</p>
                <p><ContactIcon>@</ContactIcon> @paola.leite.adv</p>
                <p><ContactIcon>E</ContactIcon> paola.leite.adv@gmail.com</p>
                <div className="offices">
                  <p className="offices-label">{t.officesLabel}</p>
                  <p><ContactIcon>P</ContactIcon> Rua de Camões, 219, 4.º Esquerdo · 4000-145 Porto</p>
                  <p><ContactIcon>M</ContactIcon> Av. Manuel Pereira Soares, 81, Loja 8 · 4630-296 Marco de Canaveses</p>
                </div>
              </div>
            </div>
            <form className="form" onSubmit={(event) => event.preventDefault()}>
              <input placeholder={t.formName} type="text" />
              <input placeholder={t.formEmail} type="email" />
              <select defaultValue="">
                <option value="" disabled>{t.formSubject}</option>
                {t.formGroups.map((group) => <optgroup key={group.label} label={group.label}>{group.options.map((option) => <option key={option}>{option}</option>)}</optgroup>)}
                <option>{t.otherSubject}</option>
              </select>
              <select defaultValue="">
                <option value="" disabled>{t.urgencyLabel}</option>
                {t.urgencyOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
              <textarea placeholder={t.formMessage} />
              <Button>{t.formSubmit}</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Paola Leite Eikeset Advocacia. {t.footerRights}</p>
          <p>{t.footerText}</p>
        </div>
      </footer>
    </div>
  );
}
