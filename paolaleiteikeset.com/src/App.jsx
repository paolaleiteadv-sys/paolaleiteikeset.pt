import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const CALENDAR_URL = "https://calendar.app.google/jpvJzFyvvqbBJvU36";
const WHATSAPP_URL =
  "https://wa.me/351926483420?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20Paola%20Leite%20Eikeset.";

const images = {
  logo: "/logo-pl.png",
  logoLight: "/logo-pl-light.png",
  logoFull: "/logo-full.jpg",
  hero: "/paola-hero-azul.png",
  reflexao: "/paola-reflexao.png",
  sorriso: "/paola-sorriso.png",
  laptop: "/paola-laptop-modern.jpeg",
  preto: "/paola-preto-retrato.png",
  branco: "/paola-branco-perfil.png",
};

const content = {
  pt: {
    nav: ["Início", "Serviços", "A Nossa Abordagem", "Portugal–Noruega", "Direito Laboral", "Direito Português", "Traduções", "Artigos", "Contacto"],
    headerButton: "Agendar consulta",
    heroTitle: "PAOLA LEITE EIKESET",
    heroSubtitle: "ADVOCACIA INTERNACIONAL & FISCALIDADE NÓRDICA",
    heroText: "Assessoria jurídica internacional para particulares, empresas e investidores entre Portugal e os países nórdicos.",
    heroNote: "Rigor jurídico, estratégia e acompanhamento personalizado em matérias de direito internacional, fiscalidade transfronteiriça e traduções certificadas.",
    heroPrimary: "Agendar Consulta",
    heroSecondary: "Enviar Pedido para Análise",

    servicesLabel: "Serviços",
    servicesTitle: "Soluções jurídicas para realidades internacionais.",
    servicesIntro: "Atuação especializada para clientes com interesses pessoais, profissionais, fiscais ou patrimoniais entre Portugal e os países nórdicos.",
    services: [
      { icon: "01", title: "Fiscalidade Internacional PT–NO", text: "Residência fiscal, trabalhadores deslocados, tributação transfronteiriça e articulação com autoridades portuguesas e norueguesas." },
      { icon: "02", title: "Advocacia Internacional", text: "Apoio jurídico em Portugal para clientes com interesses, residência, trabalho, património ou família na Noruega e restantes países nórdicos." },
      { icon: "03", title: "Consultoria Jurídica Estratégica", text: "Análise preventiva, pareceres, orientação documental e estratégia para decisões sensíveis antes do conflito escalar." },
      { icon: "04", title: "Tradução Certificada PT–NO–EN", text: "Traduções jurídicas certificadas para tribunais, bancos, NAV, Skatteetaten, UDI, conservatórias e autoridades internacionais." },
    ],

    approachLabel: "A Nossa Abordagem",
    approachTitle: "Confiança, estratégia e rigor técnico.",
    approachText:
      "Cada processo representa uma decisão importante. Por isso, o acompanhamento jurídico deve começar pela compreensão da realidade concreta de cada cliente, assentar numa estratégia cuidadosamente delineada e desenvolver-se através de comunicação clara, transparente e permanente.",
    approachButton: "Conheça a nossa abordagem",

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

    articlesLabel: "Artigos",
    articlesTitle: "Conhecimento jurídico internacional.",
    articlesIntro: "Artigos sobre fiscalidade internacional, residência fiscal, trabalho na Noruega, heranças internacionais e questões jurídicas entre Portugal e os países nórdicos.",

    contactLabel: "Contacto",
    contactTitle: "Envie o seu pedido para análise.",
    contactText: "Descreva brevemente a situação e, quando aplicável, anexe os documentos relevantes para uma primeira avaliação.",
    scheduleText: "Prefere uma análise em tempo real?",
    scheduleButton: "Agendar Consulta",
    formName: "Nome",
    formEmail: "Email",
    formPhone: "Telefone / WhatsApp",
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
    formAttachment: "Anexar documentos",
    formSubmit: "Enviar pedido",
    officesLabel: "Locais de Atendimento",
    footerRights: "Todos os direitos reservados.",
    footerText: "Advocacia Internacional · Fiscalidade Nórdica · Traduções Certificadas",
  },

  en: {
    nav: ["Home", "Services", "Our Approach", "Portugal–Norway", "Employment Law", "Portuguese Law", "Translations", "Articles", "Contact"],
    headerButton: "Book consultation",
    heroTitle: "PAOLA LEITE EIKESET",
    heroSubtitle: "INTERNATIONAL LAW & NORDIC TAXATION",
    heroText: "International legal advisory for individuals, companies and investors between Portugal and the Nordic countries.",
    heroNote: "Legal precision, strategy and personalised support in international law, cross-border taxation and certified translations.",
    heroPrimary: "Book Consultation",
    heroSecondary: "Submit Request",

    servicesLabel: "Services",
    servicesTitle: "Legal solutions for international realities.",
    servicesIntro: "Specialised support for clients with personal, professional, tax or asset-related interests between Portugal and the Nordic countries.",
    services: [
      { icon: "01", title: "International Taxation PT–NO", text: "Tax residence, cross-border workers, international taxation and coordination with Portuguese and Norwegian authorities." },
      { icon: "02", title: "International Legal Practice", text: "Legal support in Portugal for clients with interests, residence, work, assets or family matters in Norway and the Nordic countries." },
      { icon: "03", title: "Strategic Legal Consulting", text: "Preventive analysis, legal opinions, document guidance and strategy for sensitive decisions before disputes escalate." },
      { icon: "04", title: "Certified Translation PT–NO–EN", text: "Certified legal translations for courts, banks, NAV, Skatteetaten, UDI, registries and international authorities." },
    ],

    approachLabel: "Our Approach",
    approachTitle: "Trust, strategy and technical precision.",
    approachText:
      "Every matter represents an important decision. Legal support must begin by understanding each client’s reality, rest on a carefully designed strategy and develop through clear, transparent and continuous communication.",
    approachButton: "Discover our approach",

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

    articlesLabel: "Articles",
    articlesTitle: "International legal knowledge.",
    articlesIntro: "Articles on international taxation, tax residence, employment in Norway, international estates and legal matters between Portugal and the Nordic countries.",

    contactLabel: "Contact",
    contactTitle: "Send your request for review.",
    contactText: "Briefly describe the matter and, where applicable, attach relevant documents for an initial assessment.",
    scheduleText: "Prefer a real-time consultation?",
    scheduleButton: "Book Consultation",
    formName: "Name",
    formEmail: "Email",
    formPhone: "Phone / WhatsApp",
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
    formAttachment: "Attach documents",
    formSubmit: "Submit request",
    officesLabel: "Service Locations",
    footerRights: "All rights reserved.",
    footerText: "International Law · Nordic Taxation · Certified Translations",
  },
};

const blogArticles = [
  {
    slug: "planeamento-fiscal-portugal-noruega",
    title: "Planeamento Fiscal Internacional: A Convenção entre Portugal e Noruega",
    description: "Saiba como funciona a Convenção para Evitar a Dupla Tributação entre Portugal e Noruega e como proteger os seus rendimentos e património.",
    date: "2026-06-02",
    category: "Fiscalidade Internacional PT–NO",
    author: "Dra. Paola Leite Eikeset",
    image: images.laptop,
    keywords: "planeamento fiscal Portugal Noruega, Convenção dupla tributação Portugal Noruega, residência fiscal Portugal Noruega, fiscalidade internacional PT NO",
    content: [
      { heading: "Introdução", text: "Para profissionais portugueses estabelecidos na Noruega ou investidores noruegueses com interesses em Portugal, a gestão da carga tributária é uma prioridade estratégica. A questão central é invariavelmente a mesma: como mitigar o risco de bitributação sobre o rendimento e o património?" },
      { heading: "A Convenção para Evitar a Dupla Tributação", text: "A Convenção para Evitar a Dupla Tributação celebrada entre Portugal e Noruega visa coordenar as competências tributárias dos dois Estados, garantindo que o contribuinte não seja penalizado fiscalmente por operar em múltiplas jurisdições." },
      { heading: "Residência fiscal", text: "A determinação da residência fiscal é o ponto de partida de qualquer planeamento fiscal internacional. A análise não depende apenas do critério dos 183 dias, devendo considerar habitação permanente, centro de interesses vitais, relações familiares e ligações patrimoniais." },
      { heading: "Conclusão", text: "A Convenção constitui um instrumento fundamental de segurança jurídica. Um planeamento adequado permite proteger rendimentos, evitar tributação indevida e garantir conformidade legal nos dois países." },
    ],
  },
  {
    slug: "comprei-imovel-portugal-vivo-noruega",
    title: "Comprei imóvel em Portugal, mas vivo na Noruega: quais são as consequências fiscais?",
    description: "A compra de um imóvel em Portugal por residentes fiscais na Noruega pode gerar implicações relacionadas com IMI, AIMI, rendimentos prediais, mais-valias e residência fiscal.",
    date: "2026-06-05",
    category: "Fiscalidade Internacional PT–NO",
    author: "Dra. Paola Leite Eikeset",
    image: images.reflexao,
    keywords: "imóvel em Portugal residente na Noruega, residência fiscal Portugal Noruega, IMI emigrantes Noruega, dupla tributação Portugal Noruega",
    content: [
      { heading: "Introdução", text: "A aquisição de um imóvel em Portugal por residentes fiscais na Noruega é cada vez mais frequente. Seja para férias, investimento, regresso futuro ao país ou utilização pela família, a compra pode gerar diversas obrigações fiscais." },
      { heading: "Residência fiscal", text: "A compra de um imóvel em Portugal não altera automaticamente a residência fiscal. Contudo, a existência de habitação em território português pode ser analisada pela Autoridade Tributária quando existe dúvida sobre a residência efetiva." },
      { heading: "IMI, AIMI e rendimentos prediais", text: "O proprietário fica sujeito ao pagamento de IMI e, em determinadas situações, ao AIMI. Quando o imóvel é arrendado, os rendimentos obtidos em Portugal podem ter de ser declarados também na Noruega." },
      { heading: "Conclusão", text: "A compra de imóvel em Portugal é compatível com a manutenção da residência fiscal na Noruega, mas exige atenção às obrigações fiscais portuguesas e norueguesas." },
    ],
  },
  {
    slug: "como-evitar-dupla-tributacao-portugal-noruega",
    title: "Como evitar a dupla tributação entre Portugal e Noruega",
    description: "Conheça as regras da Convenção para Evitar a Dupla Tributação entre Portugal e Noruega e saiba como proteger os seus rendimentos.",
    date: "2026-06-13",
    category: "Fiscalidade Internacional PT–NO",
    author: "Dra. Paola Leite Eikeset",
    image: images.branco,
    keywords: "dupla tributação Portugal Noruega, convenção Portugal Noruega, residência fiscal Noruega, impostos Portugal Noruega",
    content: [
      { heading: "Introdução", text: "Muitos contribuintes possuem rendimentos, património ou interesses económicos em Portugal e na Noruega. Surge então uma questão essencial: será necessário pagar imposto duas vezes sobre o mesmo rendimento?" },
      { heading: "O que é a dupla tributação internacional?", text: "A dupla tributação ocorre quando dois países pretendem tributar o mesmo contribuinte relativamente ao mesmo rendimento e ao mesmo período temporal." },
      { heading: "A Convenção entre Portugal e Noruega", text: "Portugal e Noruega celebraram uma Convenção para Evitar a Dupla Tributação destinada a coordenar as competências tributárias dos dois Estados e evitar uma carga fiscal duplicada." },
      { heading: "Conclusão", text: "A Convenção é um instrumento essencial para trabalhadores, empresários, investidores e pensionistas com ligações aos dois países." },
    ],
  },
  {
    slug: "baixa-medica-noruega-direitos-trabalhador-portugues",
    title: "Baixa médica na Noruega: direitos do trabalhador português",
    description: "Conheça os principais direitos dos trabalhadores portugueses em situação de baixa médica na Noruega e os cuidados a ter perante empregador, NAV e entidades públicas.",
    date: "2026-07-09",
    category: "Direito Laboral Norueguês",
    author: "Dra. Paola Leite Eikeset",
    image: images.preto,
    keywords: "baixa médica Noruega, trabalhador português Noruega, NAV baixa médica, direitos laborais Noruega",
    content: [
      { heading: "Introdução", text: "A baixa médica na Noruega pode gerar dúvidas relevantes para trabalhadores portugueses, sobretudo quando existe pressão do empregador, comunicação com a NAV ou risco de perda de rendimentos." },
      { heading: "Proteção do trabalhador", text: "O trabalhador em situação de doença deve assegurar que a documentação médica está correta, que os prazos são cumpridos e que a comunicação com empregador e NAV é feita de forma prudente e documentada." },
      { heading: "Erros frequentes", text: "Entre os erros mais comuns estão responder informalmente a pressões patronais, não guardar provas, não consultar notificações da NAV e aceitar propostas sem compreender as consequências jurídicas." },
      { heading: "Conclusão", text: "A análise jurídica preventiva é essencial para proteger direitos laborais, rendimentos e estabilidade profissional durante uma situação de doença." },
    ],
  },
];

function openCalendar() {
  window.open(CALENDAR_URL, "_blank", "noopener,noreferrer");
}

function scrollToContact() {
  const el = document.getElementById("contacto");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function Button({ children, variant = "primary", className = "", ...props }) {
  return <button className={`btn ${variant === "outline" ? "btn-outline" : "btn-primary"} ${className}`} {...props}>{children}</button>;
}

function SectionLabel({ children, light = false }) {
  return <p className={`section-label ${light ? "light" : ""}`}>{children}</p>;
}

function Header({ lang, setLang, t }) {
  return (
    <header className="header">
      <a className="brand-symbol" href="/#inicio" aria-label="Paola Leite Eikeset">
        <img src={images.logo} alt="PL Paola Leite Eikeset" />
      </a>
      <nav className="nav">
        <a href="/#inicio">{t.nav[0]}</a>
        <a href="/#servicos">{t.nav[1]}</a>
        <a href="/nossa-abordagem">{t.nav[2]}</a>
        <a href="/#portugal-noruega">{t.nav[3]}</a>
        <a href="/#direito-laboral">{t.nav[4]}</a>
        <a href="/#direito-portugues">{t.nav[5]}</a>
        <a href="/#traducoes">{t.nav[6]}</a>
        <a href="/#artigos">{t.nav[7]}</a>
        <a href="/#contacto">{t.nav[8]}</a>
      </nav>
      <div className="header-actions">
        <div className="language-toggle">
          <button type="button" className={lang === "pt" ? "active" : ""} onClick={() => setLang("pt")}>PT</button>
          <button type="button" className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
        <Button type="button" onClick={openCalendar}>{t.headerButton}</Button>
      </div>
    </header>
  );
}

function Home({ lang, setLang }) {
  const t = useMemo(() => content[lang], [lang]);

  return (
    <div className="site">
      <SiteStyles />
      <Header lang={lang} setLang={setLang} t={t} />

      <main>
        <section id="inicio" className="hero-v3">
          <div className="hero-photo-wrap">
            <img src={images.hero} alt="Paola Leite Eikeset" className="hero-photo" />
          </div>

          <motion.div className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="eyebrow">{t.heroSubtitle}</p>
            <h1>{t.heroTitle}</h1>
            <div className="gold-line" />
            <p className="hero-main-text">{t.heroText}</p>
            <p className="hero-note">{t.heroNote}</p>
            <div className="hero-buttons">
              <Button type="button" onClick={openCalendar}>{t.heroPrimary}</Button>
              <Button type="button" variant="outline" onClick={scrollToContact}>{t.heroSecondary}</Button>
            </div>
          </motion.div>
        </section>

        <section id="servicos" className="section">
          <div className="container">
            <SectionLabel>{t.servicesLabel}</SectionLabel>
            <div className="section-head">
              <h2>{t.servicesTitle}</h2>
              <p>{t.servicesIntro}</p>
            </div>
            <div className="service-grid">
              {t.services.map((service) => (
                <article className="service-card" key={service.title}>
                  <span>{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach-preview">
          <div className="approach-image">
            <img src={images.branco} alt="Paola Leite Eikeset" />
          </div>
          <div className="approach-copy">
            <SectionLabel>{t.approachLabel}</SectionLabel>
            <h2>{t.approachTitle}</h2>
            <p>{t.approachText}</p>
            <a href="/nossa-abordagem" className="text-link">{t.approachButton} →</a>
          </div>
        </section>

        <section id="portugal-noruega" className="section section-dark">
          <div className="container split">
            <div>
              <SectionLabel light>{t.ptNoLabel}</SectionLabel>
              <h2>{t.ptNoTitle}</h2>
              <p>{t.ptNoText}</p>
            </div>
            <div className="check-list">
              {t.ptNoItems.map((item) => <div key={item}>✓ {item}</div>)}
            </div>
          </div>
        </section>

        <section id="direito-laboral" className="section">
          <div className="container split">
            <div>
              <SectionLabel>{t.labourLabel}</SectionLabel>
              <h2>{t.labourTitle}</h2>
              <p>{t.labourText}</p>
              <Button type="button" onClick={openCalendar}>{t.headerButton}</Button>
            </div>
            <div className="check-list light-list">
              {t.labourItems.map((item) => <div key={item}>✓ {item}</div>)}
            </div>
          </div>
        </section>

        <section id="direito-portugues" className="section section-soft">
          <div className="container">
            <SectionLabel>{t.portugueseLawLabel}</SectionLabel>
            <div className="section-head">
              <h2>{t.portugueseLawTitle}</h2>
              <p>{t.portugueseLawText}</p>
            </div>
            <div className="area-grid">
              {t.portugueseLawAreas.map((area) => (
                <article className="area-card" key={area.title}>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="traducoes" className="section">
          <div className="container split">
            <div>
              <SectionLabel>{t.translationsTitle}</SectionLabel>
              <h2>{t.translationsTitle}</h2>
              <p>{t.translationsText}</p>
            </div>
            <div className="doc-grid">
              {t.documents.map((item) => <div key={item}>{item}</div>)}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <SectionLabel>{t.processLabel}</SectionLabel>
            <div className="process-grid">
              {t.steps.map((step, index) => <div key={step}><span>0{index + 1}</span><h3>{step}</h3></div>)}
            </div>
          </div>
        </section>

        <ArticlesSection t={t} />

        <ContactSection t={t} />

      </main>

      <FloatingWhatsapp />
      <Footer t={t} />
    </div>
  );
}

function ArticlesSection({ t }) {
  return (
    <section id="artigos" className="section">
      <div className="container">
        <SectionLabel>{t.articlesLabel}</SectionLabel>
        <div className="section-head">
          <h2>{t.articlesTitle}</h2>
          <p>{t.articlesIntro}</p>
        </div>
        <div className="articles-grid">
          {blogArticles.map((article) => (
            <a className="article-card" href={`/blog/${article.slug}`} key={article.slug}>
              <img src={article.image} alt={article.title} />
              <div>
                <span>{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <small>{new Date(article.date).toLocaleDateString("pt-PT")} · Ler artigo →</small>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ t }) {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-photo">
        <img src={images.sorriso} alt="Paola Leite Eikeset" />
      </div>
      <div className="contact-panel">
        <SectionLabel light>{t.contactLabel}</SectionLabel>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactText}</p>

        <div className="schedule-box">
          <p>{t.scheduleText}</p>
          <Button type="button" onClick={openCalendar}>{t.scheduleButton}</Button>
        </div>

        <form className="form" action="https://formspree.io/f/mgoqjnzy" method="POST" encType="multipart/form-data">
          <input type="hidden" name="subject" value="Novo pedido de contacto - Paola Leite Eikeset Advocacia" />
          <input name="nome" placeholder={t.formName} type="text" required />
          <input name="email" placeholder={t.formEmail} type="email" required />
          <input name="telefone" placeholder={t.formPhone} type="tel" />
          <select name="tipo_de_assunto" defaultValue="" required>
            <option value="" disabled>{t.formSubject}</option>
            {t.formGroups.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map((option) => <option key={option}>{option}</option>)}
              </optgroup>
            ))}
            <option>{t.otherSubject}</option>
          </select>
          <select name="grau_de_urgencia" defaultValue="" required>
            <option value="" disabled>{t.urgencyLabel}</option>
            {t.urgencyOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
          <textarea name="mensagem" placeholder={t.formMessage} required />
          <label className="file-label">
            {t.formAttachment}
            <input type="file" name="anexos" multiple />
          </label>
          <Button type="submit">{t.formSubmit}</Button>
        </form>
      </div>
    </section>
  );
}

function ApproachPage({ lang, setLang }) {
  const t = content[lang];
  const a = {
    pt: {
      title: "A Nossa Abordagem",
      subtitle: "O Direito não deve criar barreiras entre países. Deve construir pontes entre pessoas, empresas e oportunidades.",
      blocks: [
        { image: images.reflexao, title: "Confiança e estratégia como alicerce", text: "Cada processo representa uma decisão importante. Por isso, acreditamos que o acompanhamento jurídico deve ir além da mera aplicação da lei. Deve começar por compreender a realidade de cada cliente, assentar numa estratégia cuidadosamente delineada e desenvolver-se através de comunicação clara, transparente e permanente." },
        { image: images.preto, title: "Uma visão internacional", text: "A prática jurídica internacional exige capacidade para interpretar diferentes sistemas jurídicos, compreender realidades culturais distintas e encontrar soluções eficazes em contextos complexos. É nessa interseção entre Portugal e os países nórdicos que desenvolvemos a nossa atividade." },
        { image: images.laptop, title: "Preparação antes de cada decisão", text: "Cada recomendação jurídica resulta de um processo rigoroso de análise, estudo e preparação. Uma estratégia sólida começa muito antes da primeira diligência, através da compreensão do enquadramento jurídico, fiscal e da realidade concreta de cada cliente." },
        { image: images.sorriso, title: "O nosso compromisso", text: "Não acompanhamos apenas processos. Acompanhamos decisões que podem marcar o futuro dos nossos clientes. Mais do que prestar serviços jurídicos, procuramos construir relações de confiança duradouras, baseadas no rigor, na transparência e numa estratégia preparada para cada realidade." },
      ],
    },
    en: {
      title: "Our Approach",
      subtitle: "Law should not create barriers between countries. It should build bridges between people, companies and opportunities.",
      blocks: [
        { image: images.reflexao, title: "Trust and strategy as a foundation", text: "Every matter represents an important decision. We believe legal support must go beyond the mere application of the law. It must begin by understanding each client’s reality, rest on a carefully designed strategy and develop through clear, transparent and continuous communication." },
        { image: images.preto, title: "An international vision", text: "International legal practice requires the ability to interpret different legal systems, understand distinct cultural realities and find effective solutions in complex contexts. Our work is developed precisely at the intersection between Portugal and the Nordic countries." },
        { image: images.laptop, title: "Preparation before every decision", text: "Every legal recommendation is the result of careful analysis, study and preparation. A solid strategy begins long before the first formal step, through a clear understanding of the legal, tax and personal context of each client." },
        { image: images.sorriso, title: "Our commitment", text: "We do not merely handle cases. We support decisions that may shape our clients’ future. More than providing legal services, we seek to build lasting relationships of trust based on precision, transparency and strategy." },
      ],
    },
  }[lang];

  return (
    <div className="site">
      <SiteStyles />
      <Header lang={lang} setLang={setLang} t={t} />
      <main className="approach-page">
        <section className="approach-hero">
          <img src={images.branco} alt="Paola Leite Eikeset" />
          <div>
            <p className="eyebrow">{t.heroSubtitle}</p>
            <h1>{a.title}</h1>
            <p>{a.subtitle}</p>
          </div>
        </section>
        {a.blocks.map((block, index) => (
          <section className={`approach-block ${index % 2 ? "reverse" : ""}`} key={block.title}>
            <img src={block.image} alt={block.title} />
            <div>
              <SectionLabel>{t.approachLabel}</SectionLabel>
              <h2>{block.title}</h2>
              <p>{block.text}</p>
            </div>
          </section>
        ))}
      </main>
      <Footer t={t} />
    </div>
  );
}

function BlogArticlePage() {
  const slug = window.location.pathname.replace("/blog/", "").replace(/\/$/, "");
  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) return <NotFound />;

  const canonicalUrl = `${window.location.origin}/blog/${article.slug}`;
  document.title = `${article.title} | Paola Leite Eikeset`;
  upsertMetaTag("description", article.description);
  upsertMetaTag("keywords", article.keywords);
  upsertMetaTag("author", article.author);
  upsertMetaTag("robots", "index, follow");
  upsertMetaTag("og:title", article.title, "property");
  upsertMetaTag("og:description", article.description, "property");
  upsertMetaTag("og:type", "article", "property");
  upsertMetaTag("og:url", canonicalUrl, "property");
  upsertCanonical(canonicalUrl);
  upsertJsonLd(article, canonicalUrl);

  return (
    <div className="site">
      <SiteStyles />
      <header className="header simple">
        <a className="brand-symbol" href="/"><img src={images.logo} alt="PL Paola Leite Eikeset" /></a>
        <nav className="nav"><a href="/">Início</a><a href="/#artigos">Artigos</a><a href="/#contacto">Contacto</a></nav>
      </header>
      <main className="article-page">
        <article className="article-shell">
          <img src={article.image} alt={article.title} className="article-hero-image" />
          <p className="section-label">{article.category}</p>
          <h1>{article.title}</h1>
          <p className="article-description">{article.description}</p>
          <p className="article-meta">{article.author} · {new Date(article.date).toLocaleDateString("pt-PT")}</p>
          {article.content.map((block) => (
            <section key={block.heading}>
              <h2>{block.heading}</h2>
              <p>{block.text}</p>
            </section>
          ))}
          <div className="article-cta">
            <h3>Necessita de apoio jurídico especializado?</h3>
            <p>Agende uma consulta ou envie o seu pedido para análise.</p>
            <Button type="button" onClick={openCalendar}>Agendar Consulta</Button>
          </div>
        </article>
      </main>
    </div>
  );
}

function NotFound() {
  return (
    <div className="site">
      <SiteStyles />
      <main className="section">
        <div className="container">
          <h1>Página não encontrada</h1>
          <a href="/">Voltar ao início</a>
        </div>
      </main>
    </div>
  );
}

function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <img src={images.logoLight} alt="PL Paola Leite Eikeset" />
        <div>
          <h3>PAOLA LEITE EIKESET</h3>
          <p>{t.footerText}</p>
          <p>© {new Date().getFullYear()} Paola Leite Eikeset. {t.footerRights}</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsapp() {
  return <a className="whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a>;
}

function upsertMetaTag(name, contentValue, attribute = "name") {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", contentValue || "");
}

function upsertCanonical(url) {
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", url);
}

function upsertJsonLd(article, canonicalUrl) {
  const existing = document.getElementById("article-json-ld");
  if (existing) existing.remove();
  const script = document.createElement("script");
  script.id = "article-json-ld";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: { "@type": "Person", name: article.author },
    publisher: { "@type": "Organization", name: "Paola Leite Eikeset" },
    datePublished: article.date,
    mainEntityOfPage: canonicalUrl,
  });
  document.head.appendChild(script);
}

export default function App() {
  const [lang, setLang] = useState("pt");

  if (window.location.pathname.startsWith("/blog/")) return <BlogArticlePage />;
  if (window.location.pathname.startsWith("/nossa-abordagem")) return <ApproachPage lang={lang} setLang={setLang} />;

  return <Home lang={lang} setLang={setLang} />;
}

function SiteStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');

      :root {
        --navy:#0f2747;
        --gold:#bfa15e;
        --ivory:#f8f6f2;
        --text:#243043;
        --muted:#647084;
        --line:rgba(15,39,71,.12);
        --shadow:0 24px 70px rgba(15,39,71,.10);
      }

      * { box-sizing:border-box; }
      html { scroll-behavior:smooth; }
      body { margin:0; background:#fff; color:var(--text); font-family:Inter, sans-serif; }
      a { color:inherit; }
      img { max-width:100%; display:block; }

      .site { min-height:100vh; background:#fff; }

      .header {
        position:sticky; top:0; z-index:50;
        height:82px; padding:0 clamp(18px,4vw,58px);
        display:flex; align-items:center; justify-content:space-between;
        background:rgba(255,255,255,.94); backdrop-filter:blur(18px);
        border-bottom:1px solid rgba(15,39,71,.08);
      }
      .brand-symbol img { width:58px; height:auto; object-fit:contain; }
      .nav { display:flex; align-items:center; gap:20px; font-size:.78rem; text-transform:uppercase; letter-spacing:.08em; font-weight:700; color:var(--navy); }
      .nav a { text-decoration:none; opacity:.86; }
      .nav a:hover { color:var(--gold); opacity:1; }
      .header-actions { display:flex; align-items:center; gap:14px; }
      .language-toggle { display:flex; border:1px solid var(--line); border-radius:999px; overflow:hidden; }
      .language-toggle button { border:0; background:transparent; padding:8px 10px; cursor:pointer; font-weight:800; color:var(--navy); }
      .language-toggle .active { background:var(--navy); color:#fff; }

      .btn { border:0; cursor:pointer; display:inline-flex; align-items:center; justify-content:center; gap:10px; border-radius:999px; padding:13px 20px; font-weight:800; letter-spacing:.02em; transition:.25s ease; font-family:Inter, sans-serif; }
      .btn-primary { background:var(--gold); color:#fff; box-shadow:0 12px 28px rgba(191,161,94,.24); }
      .btn-primary:hover { transform:translateY(-2px); background:#a98c4e; }
      .btn-outline { background:transparent; color:var(--navy); border:1px solid rgba(15,39,71,.22); }
      .btn-outline:hover { border-color:var(--gold); color:var(--gold); transform:translateY(-2px); }

      .hero-v3 { min-height:calc(100vh - 82px); display:grid; grid-template-columns:.95fr 1.05fr; align-items:center; background:linear-gradient(90deg,var(--ivory) 0%, #fff 54%); }
      .hero-photo-wrap { height:calc(100vh - 82px); min-height:640px; display:flex; align-items:stretch; overflow:hidden; }
      .hero-photo { width:100%; height:100%; object-fit:cover; object-position:center; }
      .hero-copy { padding:clamp(40px,7vw,110px); max-width:780px; }
      .eyebrow, .section-label { margin:0 0 18px; color:var(--gold); text-transform:uppercase; letter-spacing:.18em; font-size:.74rem; font-weight:900; }
      .section-label.light { color:#d9c68d; }
      .hero-copy h1, h2 { font-family:"Cormorant Garamond", serif; color:var(--navy); line-height:.95; letter-spacing:-.045em; margin:0; }
      .hero-copy h1 { font-size:clamp(3.5rem,7.6vw,8.3rem); }
      .gold-line { width:140px; height:2px; background:var(--gold); margin:28px 0; }
      .hero-main-text { font-family:"Cormorant Garamond", serif; font-size:clamp(1.75rem,2.8vw,3rem); line-height:1.08; color:var(--navy); margin:0 0 22px; }
      .hero-note { color:var(--muted); line-height:1.8; max-width:620px; margin-bottom:34px; }
      .hero-buttons { display:flex; gap:14px; flex-wrap:wrap; }

      .section { padding:clamp(72px,8vw,125px) 24px; }
      .container { max-width:1180px; margin:0 auto; }
      .section-head { display:grid; grid-template-columns:minmax(0,1fr) minmax(280px,.65fr); gap:42px; align-items:end; margin-bottom:46px; }
      h2 { font-size:clamp(2.35rem,4vw,4.8rem); }
      .section-head p, .split p, .approach-copy p { color:var(--muted); line-height:1.85; margin:0; }

      .service-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:var(--line); border:1px solid var(--line); }
      .service-card { background:#fff; padding:34px; min-height:300px; }
      .service-card span { color:var(--gold); font-weight:900; letter-spacing:.1em; }
      .service-card h3, .area-card h3, .article-card h3 { color:var(--navy); font-size:1.1rem; margin:22px 0 12px; }
      .service-card p, .area-card p, .article-card p { color:var(--muted); line-height:1.75; }

      .approach-preview { display:grid; grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr); align-items:center; background:var(--ivory); }
      .approach-image img { width:100%; height:auto; object-fit:contain; background:#fff; }
      .approach-copy { padding:clamp(48px,7vw,100px); }
      .approach-copy h2 { margin-bottom:24px; }
      .text-link { color:var(--navy); font-weight:900; text-decoration:none; border-bottom:1px solid var(--gold); padding-bottom:6px; display:inline-flex; margin-top:18px; }

      .section-dark { background:var(--navy); color:#fff; }
      .section-dark h2 { color:#fff; }
      .section-dark p { color:rgba(255,255,255,.75); }
      .split { display:grid; grid-template-columns:1fr 1fr; gap:clamp(40px,6vw,90px); align-items:center; }
      .check-list { display:grid; gap:14px; color:#fff; line-height:1.6; }
      .light-list { color:var(--navy); }

      .section-soft { background:var(--ivory); }
      .area-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
      .area-card { background:#fff; border:1px solid var(--line); padding:28px; border-radius:22px; }

      .doc-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:14px; }
      .doc-grid div { background:var(--ivory); border:1px solid var(--line); padding:18px; color:var(--navy); font-weight:800; }

      .process-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:0; border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
      .process-grid div { padding:26px 18px; border-right:1px solid var(--line); }
      .process-grid div:last-child { border-right:0; }
      .process-grid span { color:var(--gold); font-weight:900; }
      .process-grid h3 { color:var(--navy); font-size:1rem; }

      .articles-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:22px; }
      .article-card { text-decoration:none; background:#fff; border:1px solid var(--line); border-radius:26px; overflow:hidden; box-shadow:0 18px 45px rgba(15,39,71,.06); transition:.25s ease; }
      .article-card:hover { transform:translateY(-5px); box-shadow:var(--shadow); }
      .article-card img { width:100%; height:220px; object-fit:cover; }
      .article-card div { padding:24px; }
      .article-card span { color:var(--gold); text-transform:uppercase; font-size:.68rem; letter-spacing:.12em; font-weight:900; }
      .article-card small { color:var(--navy); font-weight:900; }

      .contact-section { display:grid; grid-template-columns:.95fr 1.05fr; background:var(--navy); color:#fff; }
      .contact-photo img { width:100%; height:100%; object-fit:cover; object-position:center; }
      .contact-panel { padding:clamp(48px,7vw,100px); }
      .contact-panel h2 { color:#fff; margin-bottom:18px; }
      .contact-panel p { color:rgba(255,255,255,.76); line-height:1.75; }
      .schedule-box { display:flex; justify-content:space-between; gap:20px; align-items:center; border:1px solid rgba(255,255,255,.16); border-radius:22px; padding:18px; margin:28px 0; }
      .form { display:grid; gap:14px; }
      .form input, .form select, .form textarea, .file-label { width:100%; padding:15px 16px; border-radius:14px; border:1px solid rgba(255,255,255,.18); background:rgba(255,255,255,.08); color:#fff; font:inherit; }
      .form input::placeholder, .form textarea::placeholder { color:rgba(255,255,255,.68); }
      .form select option, .form optgroup { color:#111; }
      .form textarea { min-height:130px; resize:vertical; }
      .file-label { cursor:pointer; color:rgba(255,255,255,.75); }
      .file-label input { margin-top:10px; padding:0; border:0; background:transparent; }

      .footer { background:#07172c; color:#fff; padding:42px 24px; }
      .footer-inner { max-width:1180px; margin:0 auto; display:flex; gap:26px; align-items:center; }
      .footer img { width:82px; }
      .footer h3 { margin:0 0 8px; letter-spacing:.08em; }
      .footer p { margin:5px 0; color:rgba(255,255,255,.7); }

      .whatsapp { position:fixed; right:18px; bottom:18px; z-index:60; background:#25D366; color:white; padding:14px 18px; border-radius:999px; font-weight:800; text-decoration:none; box-shadow:0 12px 28px rgba(0,0,0,.28); }

      .approach-page { background:#fff; }
      .approach-hero { display:grid; grid-template-columns:.95fr 1.05fr; align-items:center; background:var(--ivory); min-height:680px; padding-top:0; }
      .approach-hero img { width:100%; height:680px; object-fit:cover; }
      .approach-hero div { padding:clamp(46px,7vw,100px); }
      .approach-hero h1 { font-family:"Cormorant Garamond", serif; color:var(--navy); font-size:clamp(3.2rem,6vw,6.8rem); line-height:.95; margin:0 0 28px; }
      .approach-hero p { color:var(--muted); line-height:1.8; font-size:1.1rem; }
      .approach-block { display:grid; grid-template-columns:1fr 1fr; align-items:center; padding:clamp(70px,8vw,120px) max(24px,calc((100vw - 1180px)/2)); gap:clamp(38px,6vw,86px); }
      .approach-block.reverse img { order:2; }
      .approach-block.reverse div { order:1; }
      .approach-block img { border-radius:28px; box-shadow:var(--shadow); width:100%; height:auto; object-fit:contain; background:var(--ivory); }
      .approach-block h2 { margin-bottom:22px; }
      .approach-block p { color:var(--muted); line-height:1.9; }

      .article-page { background:linear-gradient(180deg,var(--ivory) 0%,#fff 35%); padding:130px 24px 80px; }
      .article-shell { max-width:840px; margin:0 auto; background:#fff; padding:clamp(28px,5vw,56px); border-radius:28px; border:1px solid var(--line); box-shadow:var(--shadow); }
      .article-hero-image { width:100%; height:360px; object-fit:cover; border-radius:22px; margin-bottom:36px; }
      .article-shell h1 { font-family:"Cormorant Garamond", serif; color:var(--navy); font-size:clamp(2.6rem,5vw,4.6rem); line-height:1; margin:0 0 20px; }
      .article-description { color:var(--muted); line-height:1.8; font-size:1.08rem; }
      .article-meta { color:#777; margin:20px 0 40px; }
      .article-shell section { margin-top:34px; }
      .article-shell h2 { font-size:2rem; margin-bottom:10px; }
      .article-shell p { line-height:1.9; color:#3f4856; }
      .article-cta { margin-top:48px; background:var(--ivory); padding:28px; border-radius:22px; }

      @media (max-width: 1120px) {
        .nav { display:none; }
        .service-grid, .articles-grid { grid-template-columns:repeat(2,1fr); }
        .process-grid { grid-template-columns:1fr 1fr; }
      }

      @media (max-width: 820px) {
        .header { height:auto; padding:14px 18px; }
        .brand-symbol img { width:50px; }
        .header-actions .btn { display:none; }
        .hero-v3, .approach-preview, .split, .contact-section, .approach-hero, .approach-block { grid-template-columns:1fr; }
        .hero-photo-wrap { height:auto; min-height:0; }
        .hero-photo { height:auto; object-fit:contain; }
        .hero-copy { padding:42px 24px 62px; }
        .hero-copy h1 { font-size:3.4rem; }
        .section-head { grid-template-columns:1fr; }
        .service-grid, .area-grid, .doc-grid, .articles-grid, .process-grid { grid-template-columns:1fr; }
        .contact-photo img { height:auto; }
        .footer-inner { flex-direction:column; align-items:flex-start; }
        .approach-block.reverse img, .approach-block.reverse div { order:initial; }
        .approach-hero img { height:auto; }
      }
    `}</style>
  );
}
