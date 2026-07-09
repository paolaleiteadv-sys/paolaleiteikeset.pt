
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const content = {
  pt: {
    nav: ["Início", "Serviços", "Portugal–Noruega", "Direito Laboral", "Direito Português", "Traduções", "Artigos", "Contacto"],
    headerButton: "Agendar consulta",
    heroTitle: "Advocacia Internacional. Fiscalidade. Traduções Certificadas.",
    heroText: "Soluções jurídicas entre Portugal e os países nórdicos, com estratégia, rigor e acompanhamento personalizado.",
    heroPrimary: "Agendar consulta",
    heroSecondary: "Conheça a minha abordagem",
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

    aboutLabel: "Uma Advocacia sem Fronteiras",
    aboutTitle: "Muito mais do que um processo.",
    aboutLead: "Cada decisão jurídica representa uma escolha com impacto na vida de alguém.",
    aboutParagraphs: [
      "Foi essa convicção que me levou a construir uma prática jurídica orientada pela estratégia, pelo rigor técnico e pela proximidade com cada cliente.",
      "Ao longo do meu percurso, compreendi que os processos internacionais exigem muito mais do que um conhecimento aprofundado da lei. Exigem capacidade para interpretar diferentes sistemas jurídicos, compreender realidades culturais distintas e transformar essa complexidade em soluções claras, eficazes e seguras.",
      "É precisamente nessa interseção entre Portugal e os países nórdicos que desenvolvi a minha atividade, acompanhando trabalhadores, empresários, investidores e famílias que necessitam de apoio jurídico e fiscal além-fronteiras.",
      "Presto igualmente serviços de traduções certificadas para efeitos legais e administrativos, assegurando segurança documental perante entidades públicas e privadas.",
      "Acredito que a verdadeira advocacia não começa quando surge um problema. Começa muito antes, através da prevenção, da estratégia e da antecipação dos riscos.",
      "Mais do que representar clientes, represento os seus interesses, os seus projetos e, muitas vezes, momentos decisivos das suas vidas."
    ],
    aboutQuote: "Quando diferentes países, sistemas jurídicos e culturas se cruzam, cada decisão exige mais do que conhecimento jurídico. Exige estratégia.",
    methodLabel: "A minha forma de trabalhar",
    methodItems: [
      { title: "Estratégia antes da ação", text: "Cada decisão começa com uma análise cuidada, identificação de riscos e uma visão de longo prazo." },
      { title: "Rigor técnico", text: "O detalhe faz frequentemente a diferença entre uma solução aceitável e a melhor solução possível." },
      { title: "Comunicação clara", text: "Compreender o processo é tão importante quanto encontrar a melhor solução." },
      { title: "Compromisso", text: "Cada cliente merece acompanhamento próximo, confidencialidade e dedicação." },
    ],
    finalCtaTitle: "Vamos encontrar a melhor estratégia para o seu caso.",
    finalCtaText: "Cada situação exige uma análise própria. Se procura acompanhamento jurídico internacional, terei todo o gosto em analisar o seu pedido.",
    finalCtaButton: "Entrar em contacto",
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
    formSubmit: "Enviar pedido",
    officesLabel: "Locais de Atendimento",
    footerRights: "Todos os direitos reservados.",
    footerText: "Advocacia Internacional · Fiscalidade Nórdica · Responsabilidade Limitada",
  },
  en: {
    nav: ["Home", "Services", "Portugal–Norway", "Employment Law", "Portuguese Law", "Translations", "Articles", "Contact"],
    headerButton: "Book consultation",
    heroTitle: "International Law. Taxation. Certified Translations.",
    heroText: "Legal solutions between Portugal and the Nordic countries, with strategy, precision and personalised support.",
    heroPrimary: "Book consultation",
    heroSecondary: "Discover my approach",
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

    aboutLabel: "Legal Practice Without Borders",
    aboutTitle: "Much more than a case.",
    aboutLead: "Every legal decision represents a choice with an impact on someone’s life.",
    aboutParagraphs: [
      "This conviction led me to build a legal practice guided by strategy, technical precision and close support for each client.",
      "Throughout my career, I have understood that international matters require far more than legal knowledge. They require the ability to interpret different legal systems, understand distinct cultural realities and transform complexity into clear, effective and secure solutions.",
      "It is precisely at this intersection between Portugal and the Nordic countries that I have developed my work, assisting workers, entrepreneurs, investors and families who need cross-border legal and tax support.",
      "I also provide certified translations for legal and administrative purposes, ensuring documentary security before public and private entities.",
      "I believe true legal support does not begin only when a problem arises. It begins earlier, through prevention, strategy and risk anticipation.",
      "More than representing clients, I represent their interests, their projects and, often, decisive moments in their lives."
    ],
    aboutQuote: "When different countries, legal systems and cultures intersect, every decision requires more than legal knowledge. It requires strategy.",
    methodLabel: "My way of working",
    methodItems: [
      { title: "Strategy before action", text: "Every decision starts with careful analysis, risk identification and a long-term view." },
      { title: "Technical precision", text: "Detail often makes the difference between an acceptable solution and the best possible solution." },
      { title: "Clear communication", text: "Understanding the process is as important as finding the right solution." },
      { title: "Commitment", text: "Each client deserves close support, confidentiality and dedication." },
    ],
    finalCtaTitle: "Let us find the best strategy for your case.",
    finalCtaText: "Each situation requires its own assessment. If you need international legal support, I will be pleased to review your request.",
    finalCtaButton: "Get in touch",
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
    formSubmit: "Submit request",
    officesLabel: "Service Locations",
    footerRights: "All rights reserved.",
    footerText: "International Law · Nordic Taxation · Limited Liability",
  },
};


const blogArticles = [
  {
    slug: "planeamento-fiscal-portugal-noruega",
    title: "Planeamento Fiscal Internacional: A Convenção entre Portugal e Noruega",
    description:
      "Saiba como funciona a Convenção para Evitar a Dupla Tributação entre Portugal e Noruega e como proteger os seus rendimentos e património.",
    date: "2026-06-02",
    category: "Fiscalidade Internacional PT–NO",
    author: "Dra. Paola Leite Eikeset",
    keywords:
      "planeamento fiscal Portugal Noruega, Convenção dupla tributação Portugal Noruega, residência fiscal Portugal Noruega, fiscalidade internacional PT NO",
    content: [
      {
        heading: "Introdução",
        text:
          "Para profissionais portugueses estabelecidos na Noruega ou investidores noruegueses com interesses em Portugal, a gestão da carga tributária é uma prioridade estratégica. A questão central é invariavelmente a mesma: como mitigar o risco de bitributação sobre o rendimento e o património?",
      },
      {
        heading: "A Convenção para Evitar a Dupla Tributação",
        text:
          "A resposta reside na Convenção para Evitar a Dupla Tributação celebrada entre Portugal e Noruega. Este tratado internacional visa coordenar as competências tributárias dos dois Estados, garantindo que o contribuinte não seja penalizado fiscalmente por operar em múltiplas jurisdições.",
      },
      {
        heading: "O Fenómeno da Dupla Tributação Jurídica",
        text:
          "A dupla tributação ocorre quando dois Estados reivindicam o direito de tributar o mesmo rendimento, ao mesmo sujeito passivo e no mesmo período temporal. No contexto Portugal–Noruega, isto manifesta-se frequentemente em rendimentos do trabalho dependente ou independente, rendimentos prediais, dividendos, juros, mais-valias e pensões.",
      },
      {
        heading: "Mecanismos de Resolução da Convenção",
        text:
          "A Convenção estabelece critérios de desempate e métodos de eliminação da dupla tributação, incluindo a definição do Estado com competência tributária prioritária, a limitação de retenções na fonte e o reconhecimento do imposto pago no Estado da fonte.",
      },
      {
        heading: "O Pilar da Residência Fiscal",
        text:
          "A determinação da residência fiscal é o ponto de partida de qualquer planeamento fiscal internacional. A análise não depende apenas do critério dos 183 dias, devendo considerar a habitação permanente, o centro de interesses vitais, as relações familiares, a atividade económica predominante e as ligações pessoais e patrimoniais.",
      },
      {
        heading: "Situações Práticas Frequentes",
        text:
          "Entre os cenários mais relevantes estão os trabalhadores portugueses na Noruega, commuters entre os dois países, investidores imobiliários, pensionistas, empresários com atividade internacional e famílias com património distribuído entre Portugal e Noruega.",
      },
      {
        heading: "Porque Procurar Aconselhamento Jurídico?",
        text:
          "Erros na determinação da residência fiscal ou na aplicação da Convenção podem resultar em dupla tributação indevida, liquidações adicionais, coimas fiscais, inspeções tributárias e dificuldades junto da Autoridade Tributária ou do Skatteetaten.",
      },
      {
        heading: "Conclusão",
        text:
          "A Convenção para Evitar a Dupla Tributação entre Portugal e Noruega constitui um instrumento fundamental de segurança jurídica. Um planeamento fiscal adequado permite proteger rendimentos, evitar tributação indevida e garantir conformidade legal nos dois países.",
      },
    ],
  },
  {
    slug: "comprei-imovel-portugal-vivo-noruega",
    title: "Comprei imóvel em Portugal, mas vivo na Noruega: quais são as consequências fiscais?",
    description:
      "A compra de um imóvel em Portugal por residentes fiscais na Noruega pode gerar implicações relacionadas com IMI, AIMI, rendimentos prediais, mais-valias e residência fiscal.",
    date: "2026-06-05",
    category: "Fiscalidade Internacional PT–NO",
    author: "Dra. Paola Leite Eikeset",
    keywords:
      "imóvel em Portugal residente na Noruega, residência fiscal Portugal Noruega, IMI emigrantes Noruega, dupla tributação Portugal Noruega, comprar casa em Portugal vivendo na Noruega",
    content: [
      {
        heading: "Introdução",
        text:
          "A aquisição de um imóvel em Portugal por residentes fiscais na Noruega é uma situação cada vez mais frequente. Seja para férias, investimento, regresso futuro ao país ou utilização pela família, a compra de um imóvel pode gerar diversas obrigações fiscais que muitos proprietários desconhecem.",
      },
      {
        heading: "Comprar um imóvel em Portugal não altera automaticamente a residência fiscal",
        text:
          "A aquisição de um imóvel em Portugal não significa, por si só, que o proprietário passe a ser residente fiscal português. Contudo, a existência de uma habitação em território português pode ser um dos elementos analisados pela Autoridade Tributária quando existe dúvida sobre a efetiva residência fiscal de uma pessoa.",
      },
      {
        heading: "Imposto Municipal sobre Imóveis (IMI)",
        text:
          "Após a aquisição de um imóvel em Portugal, o proprietário fica sujeito ao pagamento anual de IMI. O valor depende de diversos fatores, incluindo o Valor Patrimonial Tributário, a taxa fixada pelo município, o tipo de imóvel e a sua localização. O IMI é devido independentemente de o proprietário residir em Portugal ou no estrangeiro.",
      },
      {
        heading: "Adicional ao IMI (AIMI)",
        text:
          "Em determinadas situações poderá também existir sujeição ao Adicional ao IMI. O AIMI incide sobre património imobiliário de valor mais elevado e pode afetar pessoas singulares e coletivas. A análise deve ser efetuada caso a caso, atendendo ao valor global do património imobiliário detido em Portugal.",
      },
      {
        heading: "Arrendamento do imóvel",
        text:
          "Quando o imóvel é arrendado, os rendimentos obtidos em Portugal ficam sujeitos a tributação portuguesa. Nestas situações, o proprietário poderá ter de declarar os rendimentos em Portugal, cumprir obrigações declarativas junto da Autoridade Tributária e declarar os mesmos rendimentos na Noruega, quando exigido pela legislação norueguesa.",
      },
      {
        heading: "Venda futura do imóvel",
        text:
          "Caso o imóvel venha a ser vendido no futuro, poderão surgir consequências fiscais relacionadas com as mais-valias imobiliárias. A tributação dependerá da data de aquisição, do valor de aquisição, do valor de venda, das despesas elegíveis e do regime fiscal aplicável à data da alienação.",
      },
      {
        heading: "A compra de casa em Portugal pode originar problemas de residência fiscal?",
        text:
          "Uma situação relativamente frequente ocorre quando a escritura é celebrada indicando que o imóvel se destina a habitação própria e permanente. Quando o comprador é efetivamente residente fiscal na Noruega, podem surgir dúvidas quanto à compatibilidade entre essa declaração e a residência fiscal declarada no estrangeiro.",
      },
      {
        heading: "Obrigações junto da Autoridade Tributária",
        text:
          "Os proprietários não residentes devem assegurar que o domicílio fiscal está corretamente registado, que as notificações eletrónicas são regularmente consultadas, que existe representante fiscal quando legalmente exigido e que as declarações fiscais são entregues dentro dos prazos legais.",
      },
      {
        heading: "Quando procurar aconselhamento jurídico?",
        text:
          "É aconselhável procurar aconselhamento especializado quando adquiriu imóvel em Portugal sendo residente fiscal na Noruega, recebeu notificações da Autoridade Tributária, existe dúvida quanto à residência fiscal, pretende arrendar ou vender o imóvel, ou beneficiou de isenções ou reduções fiscais na aquisição.",
      },
      {
        heading: "Conclusão",
        text:
          "A compra de um imóvel em Portugal por residentes fiscais na Noruega é perfeitamente compatível com a manutenção da residência fiscal naquele país. Contudo, a aquisição pode gerar implicações relacionadas com IMI, AIMI, rendimentos prediais, mais-valias e eventual escrutínio da situação de residência fiscal.",
      },
    ],
  },
  {
    slug: "como-evitar-dupla-tributacao-portugal-noruega",
    title: "Como evitar a dupla tributação entre Portugal e Noruega",
    description:
      "Conheça as regras da Convenção para Evitar a Dupla Tributação entre Portugal e Noruega e saiba como proteger os seus rendimentos.",
    date: "2026-06-13",
    category: "Fiscalidade Internacional PT–NO",
    author: "Dra. Paola Leite Eikeset",
    keywords:
      "dupla tributação Portugal Noruega, convenção Portugal Noruega, residência fiscal Noruega, impostos Portugal Noruega",
    content: [
      {
        heading: "Introdução",
        text:
          "Cada vez mais portugueses trabalham na Noruega, mantêm património em Portugal ou recebem rendimentos provenientes dos dois países. Da mesma forma, muitos cidadãos noruegueses possuem imóveis, investimentos ou interesses económicos em território português. Perante esta realidade, surge uma preocupação frequente: será necessário pagar imposto duas vezes sobre o mesmo rendimento?",
      },
      {
        heading: "O que é a dupla tributação internacional?",
        text:
          "A dupla tributação ocorre quando dois países pretendem tributar o mesmo contribuinte relativamente ao mesmo rendimento e ao mesmo período temporal. Isto pode acontecer, por exemplo, quando uma pessoa é residente fiscal na Noruega, mas recebe rendimentos prediais, pensões, dividendos ou mais-valias em Portugal.",
      },
      {
        heading: "A Convenção entre Portugal e Noruega",
        text:
          "Portugal e Noruega celebraram uma Convenção para Evitar a Dupla Tributação destinada a coordenar as competências tributárias dos dois Estados. A Convenção define qual o país com prioridade para tributar determinados rendimentos e estabelece mecanismos para evitar que o contribuinte suporte uma carga fiscal duplicada.",
      },
      {
        heading: "O primeiro passo: determinar a residência fiscal",
        text:
          "Antes de analisar qualquer rendimento, é essencial identificar corretamente a residência fiscal do contribuinte. Muitas pessoas acreditam que trabalhar num país significa automaticamente ser residente fiscal nesse Estado, mas a análise pode envolver outros fatores, como habitação permanente, centro dos interesses vitais, localização da família, atividade profissional e ligações económicas.",
      },
      {
        heading: "Rendimentos do trabalho",
        text:
          "Em regra, os rendimentos do trabalho dependente são tributados no país onde a atividade é exercida. Assim, um trabalhador que presta atividade na Noruega será normalmente tributado naquele país relativamente ao salário recebido, sem prejuízo de eventuais obrigações declarativas em Portugal, caso mantenha residência fiscal portuguesa ou outros rendimentos sujeitos a tributação.",
      },
      {
        heading: "Imóveis situados em Portugal",
        text:
          "Os rendimentos provenientes de imóveis localizados em Portugal são geralmente tributados em Portugal. Isto inclui rendas e mais-valias imobiliárias. Contudo, esses rendimentos podem ter de ser declarados na Noruega se o proprietário for residente fiscal norueguês, aplicando-se então os mecanismos previstos na Convenção para evitar a dupla tributação.",
      },
      {
        heading: "Pensões e outros rendimentos internacionais",
        text:
          "As pensões internacionais, dividendos, juros e outros rendimentos transfronteiriços exigem uma análise particularmente cuidadosa, porque diferentes categorias de rendimento podem estar sujeitas a regras distintas. A solução aplicável depende sempre da natureza do rendimento e da situação concreta do contribuinte.",
      },
      {
        heading: "Como é eliminada a dupla tributação?",
        text:
          "A dupla tributação pode ser eliminada através de mecanismos como o crédito de imposto, em que o imposto pago num país é considerado no outro dentro dos limites legais aplicáveis, ou através de métodos de isenção previstos na legislação interna e na Convenção.",
      },
      {
        heading: "Erros frequentes",
        text:
          "Entre os erros mais comuns encontram-se assumir que apenas é necessário declarar rendimentos num dos países, não comunicar alterações de residência fiscal, omitir património ou rendimentos estrangeiros, vender imóveis sem planeamento prévio e presumir que a tributação num país elimina automaticamente todas as obrigações no outro.",
      },
      {
        heading: "Quando procurar aconselhamento jurídico e fiscal?",
        text:
          "É recomendável procurar aconselhamento especializado quando trabalha na Noruega e possui rendimentos em Portugal, tem imóveis em Portugal, recebe pensões internacionais, pretende vender património imobiliário, recebeu notificações da Autoridade Tributária portuguesa ou do Skatteetaten, ou existe dúvida sobre a sua residência fiscal.",
      },
      {
        heading: "Conclusão",
        text:
          "A Convenção para Evitar a Dupla Tributação entre Portugal e Noruega é uma ferramenta essencial para trabalhadores, empresários, investidores, pensionistas e famílias com ligações aos dois países. Um adequado planeamento fiscal internacional permite evitar erros, reduzir riscos de litígios com as autoridades fiscais e assegurar o correto cumprimento das obrigações tributárias em Portugal e na Noruega.",
      },
    ],
  },
];

function runSelfTests() {
  const languages = ["pt", "en"];
  const tests = [
    ["both languages exist", Boolean(content.pt && content.en)],
    ["both languages have eight nav labels", languages.every((l) => content[l].nav.length === 8)],
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



function WebsiteVisualStyles() {
  return (
    <style>{`
      html { scroll-behavior: smooth; }
      .section { padding-top: clamp(92px, 9vw, 140px); padding-bottom: clamp(92px, 9vw, 140px); }
      .hero { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; padding-top: 96px; }
      .hero-inner {
        gap: clamp(38px, 6vw, 96px);
        display: grid;
        grid-template-columns: minmax(300px, 0.92fr) minmax(360px, 1.08fr);
        align-items: center;
        max-width: 1240px;
      }
      .hero-inner h1 {
        font-size: clamp(2.65rem, 5vw, 5.25rem);
        letter-spacing: -0.06em;
        line-height: .92;
      }
      .hero-title {
        font-size: clamp(1.55rem, 2.2vw, 2.45rem);
        max-width: 780px;
        line-height: 1.15;
      }
      .hero-text {
        max-width: 680px;
        font-size: clamp(1rem, 1.25vw, 1.18rem);
        line-height: 1.75;
      }
      .hero-portrait {
        width: min(520px, 43vw);
        height: clamp(560px, 72vh, 780px);
        object-fit: cover;
        object-position: center top;
        border-radius: 32px;
        box-shadow: 0 32px 86px rgba(15, 39, 71, 0.2);
        border: 1px solid rgba(191, 161, 94, 0.3);
      }
      .hero-actions-inline {
        display: flex;
        gap: 14px;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 28px;
      }
      .editorial-section { background: #ffffff; }
      .editorial-split {
        display: grid;
        grid-template-columns: minmax(280px, 0.85fr) minmax(320px, 1.15fr);
        gap: clamp(34px, 6vw, 86px);
        align-items: center;
      }
      .editorial-image-wrap { position: relative; }
      .editorial-image-wrap::before {
        content: "";
        position: absolute;
        inset: 18px -18px -18px 18px;
        border: 1px solid rgba(191, 161, 94, 0.42);
        border-radius: 28px;
        z-index: 0;
      }
      .editorial-image {
        position: relative;
        z-index: 1;
        width: 100%;
        min-height: 520px;
        max-height: 680px;
        object-fit: cover;
        object-position: center top;
        border-radius: 28px;
        box-shadow: 0 24px 64px rgba(15, 39, 71, 0.13);
      }
      .editorial-copy h2 { margin-bottom: 18px; }
      .editorial-kicker {
        font-size: 1.3rem;
        line-height: 1.55;
        color: #0f2747;
        font-weight: 650;
        margin-bottom: 22px;
      }
      .editorial-copy p { margin-bottom: 16px; }
      .signature-line {
        margin-top: 28px;
        padding-top: 22px;
        border-top: 1px solid rgba(191, 161, 94, 0.42);
        color: #0f2747;
        font-weight: 700;
      }
      .method-section { background: #ffffff; }
      .method-layout {
        display: grid;
        grid-template-columns: minmax(320px, 1fr) minmax(320px, 1fr);
        gap: clamp(28px, 5vw, 70px);
        align-items: center;
      }
      .method-photo {
        width: 100%;
        min-height: 430px;
        object-fit: cover;
        border-radius: 26px;
        box-shadow: 0 22px 54px rgba(15, 39, 71, 0.12);
      }
      .method-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;
      }
      .method-card {
        padding: clamp(28px, 3vw, 38px);
        border: 1px solid rgba(15, 39, 71, 0.08);
        border-top: 3px solid rgba(191, 161, 94, 0.75);
        border-radius: 20px;
        background: #fff;
        transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
      }
      .method-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 18px 38px rgba(15, 39, 71, 0.1);
        border-color: rgba(191, 161, 94, 0.32);
      }
      .method-card h3 { color: #0f2747; margin-bottom: 10px; }
      .quote-band {
        background: #ffffff;
        padding: clamp(70px, 9vw, 115px) 0;
        border-top: 1px solid rgba(15, 39, 71, 0.06);
        border-bottom: 1px solid rgba(15, 39, 71, 0.06);
      }
      .quote-band blockquote {
        max-width: 980px;
        margin: 0 auto;
        text-align: center;
        font-size: clamp(1.7rem, 3.2vw, 3rem);
        line-height: 1.25;
        color: #0f2747;
        font-weight: 650;
        letter-spacing: -0.04em;
      }
      .final-cta {
        display: grid;
        grid-template-columns: minmax(280px, .8fr) minmax(320px, 1.2fr);
        gap: clamp(30px, 5vw, 72px);
        align-items: center;
      }
      .final-cta img {
        width: 100%;
        max-height: 520px;
        object-fit: cover;
        object-position: center top;
        border-radius: 26px;
        box-shadow: 0 24px 60px rgba(15, 39, 71, 0.14);
      }
      .final-cta-copy h2 { margin-bottom: 16px; }
      .blog-editorial {
        display: grid;
        grid-template-columns: minmax(260px, .85fr) minmax(320px, 1.15fr);
        gap: clamp(28px, 5vw, 64px);
        align-items: center;
        margin-bottom: 52px;
      }
      .blog-editorial img {
        width: 100%;
        max-height: 420px;
        object-fit: cover;
        object-position: center top;
        border-radius: 24px;
        box-shadow: 0 18px 46px rgba(15, 39, 71, .11);
      }
      @media (max-width: 900px) {
        .hero-inner { grid-template-columns: 1fr; text-align: center; }
        .hero-portrait { width: min(520px, 92vw); margin: 0 auto; }
        .editorial-split, .method-layout, .final-cta, .blog-editorial { grid-template-columns: 1fr; }
        .method-grid { grid-template-columns: 1fr; }
        .editorial-image, .method-photo { min-height: 380px; }
      }
    `}</style>
  );
}

function AboutSection({ t }) {
  return (
    <section id="quem-sou" className="section editorial-section">
      <div className="container editorial-split">
        <motion.div className="editorial-image-wrap" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          <img className="editorial-image" src="/paola-janela.jpg" alt="Paola Leite Eikeset em ambiente profissional" />
        </motion.div>
        <motion.div className="editorial-copy" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.08 }}>
          <SectionLabel>{t.aboutLabel}</SectionLabel>
          <h2>{t.aboutTitle}</h2>
          <p className="editorial-kicker">{t.aboutLead}</p>
          {t.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p className="signature-line">Paola Leite Eikeset<br /><span>Advogada | Tradutora Certificada</span></p>
        </motion.div>
      </div>
    </section>
  );
}

function MethodSection({ t }) {
  return (
    <section className="section method-section">
      <div className="container method-layout">
        <motion.img className="method-photo" src="/paola-computador.jpg" alt="Paola Leite Eikeset a trabalhar no computador" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.08 }}>
          <SectionLabel>{t.methodLabel}</SectionLabel>
          <div className="method-grid">
            {t.methodItems.map((item) => (
              <div className="method-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function QuoteBand({ text }) {
  return (
    <section className="quote-band">
      <div className="container">
        <blockquote>“{text}”</blockquote>
      </div>
    </section>
  );
}

function FinalContactCta({ t, onClick }) {
  return (
    <section className="section section-white">
      <div className="container final-cta">
        <img src="/paola-riscas.jpg" alt="Paola Leite Eikeset" />
        <div className="final-cta-copy">
          <SectionLabel>{t.contactLabel}</SectionLabel>
          <h2>{t.finalCtaTitle}</h2>
          <p className="lead">{t.finalCtaText}</p>
          <Button type="button" onClick={onClick}>{t.finalCtaButton}<ArrowIcon className="arrow" /></Button>
        </div>
      </div>
    </section>
  );
}

function BlogList() {
  return (
    <section id="artigos" className="section section-white">
      <div className="container">
        <div className="blog-editorial">
          <img src="/paola-computador.jpg" alt="Paola Leite Eikeset a preparar artigos jurídicos" />
          <div className="section-heading" style={{ textAlign: "left", marginBottom: 0 }}>
            <SectionLabel>Artigos</SectionLabel>
            <h2>Conhecimento Jurídico Internacional</h2>
            <p className="lead">
              Artigos sobre fiscalidade internacional, residência fiscal, trabalho na Noruega,
              heranças internacionais e questões jurídicas entre Portugal e Noruega.
            </p>
          </div>
        </div>

        <div className="grid-three">
          {blogArticles.map((article) => (
            <Card key={article.slug}>
              <p className="section-label">{article.category}</p>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a
                href={`/blog/${article.slug}`}
                style={{ color: "#0f2747", fontWeight: 700, textDecoration: "none" }}
              >
                Ler artigo →
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


function upsertMetaTag(name, contentValue, attribute = "name") {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", contentValue);
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
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Paola Leite Eikeset Advocacia",
    },
    datePublished: article.date,
    mainEntityOfPage: canonicalUrl,
  });

  document.head.appendChild(script);
}

function BlogArticlePage() {
  const slug = window.location.pathname.replace("/blog/", "").replace(/\/$/, "");
  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    document.title = "Artigo não encontrado | Paola Leite Eikeset Advocacia";
    return (
      <div className="site">
        <main className="section section-white">
          <div className="container" style={{ maxWidth: "850px" }}>
            <a href="/" style={{ color: "#0f2747", fontWeight: 700, textDecoration: "none" }}>
              ← Voltar ao início
            </a>
            <h1 style={{ marginTop: "40px" }}>Artigo não encontrado</h1>
            <p>O artigo solicitado não foi encontrado.</p>
          </div>
        </main>
      </div>
    );
  }

  const canonicalUrl = `${window.location.origin}/blog/${article.slug}`;

  document.title = `${article.title} | Paola Leite Eikeset Advocacia`;
  upsertMetaTag("description", article.description);
  upsertMetaTag("keywords", article.keywords || "Portugal Noruega, fiscalidade internacional, residência fiscal, advocacia internacional");
  upsertMetaTag("author", article.author);
  upsertMetaTag("robots", "index, follow");
  upsertMetaTag("og:title", article.title, "property");
  upsertMetaTag("og:description", article.description, "property");
  upsertMetaTag("og:type", "article", "property");
  upsertMetaTag("og:url", canonicalUrl, "property");
  upsertMetaTag("og:site_name", "Paola Leite Eikeset Advocacia", "property");
  upsertCanonical(canonicalUrl);
  upsertJsonLd(article, canonicalUrl);

  return (
    <div className="site">
      <WebsiteVisualStyles />
      <header className="header">
        <div className="header-inner">
          <BrandHeader />
          <nav className="nav">
            <a href="/">Início</a>
            <a href="/#artigos" className="active">Artigos</a>
            <a href="/#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main
        className="section section-white"
        style={{
          background: "linear-gradient(180deg, #f8f6f2 0%, #ffffff 35%)",
          paddingTop: "130px",
          paddingBottom: "70px",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "780px",
            background: "#ffffff",
            padding: "56px",
            borderRadius: "20px",
            boxShadow: "0 20px 50px rgba(15, 39, 71, 0.08)",
            border: "1px solid rgba(15, 39, 71, 0.06)",
          }}
        >
          <a href="/" style={{ color: "#0f2747", fontWeight: 700, textDecoration: "none" }}>
            ← Voltar ao início
          </a>

          <p className="section-label" style={{ marginTop: "40px" }}>
            {article.category}
          </p>

          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "2.8rem",
              fontWeight: 700,
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
              color: "#0f2747",
              marginBottom: "20px",
            }}
          >
            {article.title}
          </h1>
          <p
            className="lead"
            style={{
              fontSize: "1.08rem",
              lineHeight: "1.75",
              color: "#555",
              marginBottom: "16px",
            }}
          >
            {article.description}
          </p>

          <p style={{ color: "#777", marginTop: "18px" }}>
            {article.author} · {new Date(article.date).toLocaleDateString("pt-PT")}
          </p>

          {article.content.map((block) => (
            <section key={block.heading} style={{ marginTop: "32px" }}>
              <h2
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#0f2747",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  marginTop: "32px",
                  marginBottom: "10px",
                }}
              >
                {block.heading}
              </h2>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.05rem",
                  lineHeight: "1.85",
                  color: "#444",
                  marginBottom: "0",
                }}
              >
                {block.text}
              </p>
            </section>
          ))}

          <div className="card" style={{ marginTop: "50px" }}>
            <h3>Necessita de apoio jurídico especializado?</h3>
            <p>
              A Dra. Paola Leite Eikeset presta assessoria jurídica especializada em
              fiscalidade internacional PT–NO, apoiando trabalhadores, empresários,
              investidores e famílias com interesses em Portugal e na Noruega.
            </p>
            <p>
              Agende uma consulta através do formulário de contacto ou envie um e-mail para
              info@paolaleiteikeset.pt.
            </p>
            <a
              href="/"
              style={{ color: "#0f2747", fontWeight: 700, textDecoration: "none" }}
            >
              Contactar →
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("pt");
  const t = useMemo(() => content[lang], [lang]);

  if (window.location.pathname.startsWith("/blog/")) {
    return <BlogArticlePage />;
  }

  const scrollToContact = () => {
  window.open(
    "https://calendar.app.google/jpvJzFyvvqbBJvU36",
    "_blank",
    "noopener,noreferrer"
  );
};
  const links = [
    ["#inicio", t.nav[0]],
    ["#servicos", t.nav[1]],
    ["#portugal-noruega", t.nav[2]],
    ["#direito-laboral", t.nav[3]],
    ["#direito-portugues", t.nav[4]],
    ["#traducoes", t.nav[5]],
    ["#artigos", t.nav[6]],
    ["#contacto", t.nav[7]],
  ];

  return (
    <div className="site">
      <WebsiteVisualStyles />
      <header className="header">
        <div className="header-inner">
          <BrandHeader />
          <nav className="nav">{links.map(([href, label], index) => <a key={href} href={href} className={index === 0 ? "active" : ""}>{label}</a>)}</nav>
          <div className="header-actions">
            <LanguageToggle lang={lang} setLang={setLang} />
            <Button type="button" variant="outline" className="desktop-only" onClick={scrollToContact}>{t.headerButton}</Button>
          </div>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-bg" />
          <div className="hero-inner">
            <motion.img src="/paola-hero.jpg" alt="Paola Leite Eikeset" className="hero-portrait" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} />
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <img src="/logo.jpg" alt="Paola Leite Eikeset Advocacia" className="hero-logo" />
              <h1>PAOLA LEITE EIKESET</h1>
              <div className="hero-word"><span /> <p>ADVOCACIA</p> <span /></div>
              <p className="hero-title">{t.heroTitle}</p>
              <p className="hero-text">{t.heroText}</p>
              <div className="hero-actions-inline">
                <Button type="button" className="hero-cta" onClick={scrollToContact}>{t.heroPrimary}<ArrowIcon className="arrow" /></Button>
                <Button type="button" variant="outline" onClick={() => document.getElementById("quem-sou")?.scrollIntoView({ behavior: "smooth" })}>{t.heroSecondary}</Button>
              </div>
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

        <AboutSection t={t} />

        <MethodSection t={t} />

        <QuoteBand text={t.aboutQuote} />

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
              <Button type="button" onClick={scrollToContact}>{t.headerButton}<ArrowIcon className="arrow" /></Button>
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

        <BlogList />

        <FinalContactCta t={t} onClick={scrollToContact} />

        <section id="contacto" className="section">
          <div className="container contact-box">
            <div>
              <SectionLabel light>{t.contactLabel}</SectionLabel>
              <h2>{t.contactTitle}</h2>
              <p className="lead light-text">{t.contactText}</p>
              <div className="contact-details">
                <p><ContactIcon>T</ContactIcon> +351 926 483 420</p>
                <p><ContactIcon>@</ContactIcon> @paola.leite.adv</p>
                <p><ContactIcon>E</ContactIcon> info@paolaleiteikeset.pt</p>
                <div className="offices">
                  <p className="offices-label">{t.officesLabel}</p>
                  <p><ContactIcon>P</ContactIcon> Rua de Camões, 219, 4.º Esquerdo · 4000-145 Porto</p>
                  <p><ContactIcon>M</ContactIcon> Av. Manuel Pereira Soares, 81, Loja 8 · 4630-296 Marco de Canaveses</p>
                  <p><ContactIcon>O</ContactIcon> Oslo, Noruega · Consultas presenciais e remotas mediante marcação</p>
                </div>
              </div>
            </div>
            <form className="form" action="https://formspree.io/f/mgoqjnzy" method="POST">
              <input type="hidden" name="subject" value="Novo pedido de contacto - Paola Leite Eikeset Advocacia" />
              <input name="nome" placeholder={t.formName} type="text" required />
              <input name="email" placeholder={t.formEmail} type="email" required />
              <input name="telefone" placeholder={t.formPhone} type="tel" />
              <select name="tipo_de_assunto" defaultValue="" required>
                <option value="" disabled>{t.formSubject}</option>
                {t.formGroups.map((group) => <optgroup key={group.label} label={group.label}>{group.options.map((option) => <option key={option}>{option}</option>)}</optgroup>)}
                <option>{t.otherSubject}</option>
              </select>
              <select name="grau_de_urgencia" defaultValue="" required>
                <option value="" disabled>{t.urgencyLabel}</option>
                {t.urgencyOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
              <textarea name="mensagem" placeholder={t.formMessage} required />
              <Button type="submit">{t.formSubmit}</Button>
            </form>
          </div>
        </section>
      </main>

      <a
        href="https://wa.me/351926483420?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20Paola%20Leite%20Eikeset%20Advocacia."
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        style={{
          position: "fixed",
          right: "18px",
          bottom: "18px",
          zIndex: 60,
          background: "#25D366",
          color: "white",
          padding: "14px 18px",
          borderRadius: "999px",
          fontWeight: 700,
          boxShadow: "0 12px 28px rgba(0,0,0,.28)"
        }}
      >
        WhatsApp
      </a>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Paola Leite Eikeset Advocacia. {t.footerRights}</p>
          <p>{t.footerText}</p>
        </div>
      </footer>
    </div>
  );
}
