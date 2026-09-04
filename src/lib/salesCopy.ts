export type Lang = "pt" | "es" | "en";

export type SalesCopy = {
  locale: string;
  rating: string;
  ratingCount: string;
  justBought: string;
  purchaseAlerts: { name: string; city: string; time: string }[];
  close: string;
  popupAlt: string;
  bannerOffer: string;
  eyebrowDefault: string;
  onlineNow: string;
  studentAlt: string;
  studentsBadge: string;
  heroAlt: string;
  bullets: string[];
  immediateAccess: string;
  secure: string;
  ssl: string;
  certificate: string;

  incomeEyebrow: string;
  incomeTitle: string;
  incomeCards: { t: string; d: string }[];
  mechanismEyebrow: string;
  mechanismTitle: string;
  mechanismP1a: string;
  mechanismP1b: string;
  mechanismP1c: string;
  mechanismP2: string;
  compareEyebrow: string;
  compareTitle: string;
  compareSimpleTitle: string;
  compareSimple: string[];
  compareStructuredTitle: string;
  compareStructured: string[];

  marqueeEyebrow: string;
  marqueeTitle: string;
  marqueeAlt: string;

  quoteTitle: string;
  quote: string;
  quoteAuthor: string;

  learnEyebrow: string;
  lowTicketTitle: string;
  lowTicketIntro: string;
  lowTicketCards: { t: string; d: string }[];
  lowTicketOutro: string;

  modulesTitle: string;
  modulesIntro: string;
  modules: { n: string; title: string; desc: string }[];
  modulesCta: string;
  modulesCtaSub: string;
  courseRevealEyebrow: string;
  courseRevealTitle: string;
  courseRevealLead: string;
  courseRevealVideoLabel: string;
  courseRevealItems: string[];
  courseRevealRangeTitle: string;
  courseRevealRangeText: string;
  courseRevealNotOnlyTitle: string;
  courseRevealNotOnlyText: string;
  courseRevealSummary: string;

  goldTitleA: string;
  goldTitleB: string;
  goldSub: string;
  goldAlt: string;
  goldItems: string[];

  mentorEyebrow: string;
  mentorTitle: string;
  mentorPhotoAlt: string;
  bio1a: string;
  bio1b: string;
  bio1c: string;
  bio1d: string;
  bio2a: string;
  bio2b: string;
  bio2c: string;
  bio2d: string;
  bio3a: string;
  bio3b: string;
  bio3c: string;
  bio3d: string;
  mentorTags: string[];
  videoLabel: string;

  stats: { n: string; l: string }[];

  testimonialsEyebrow: string;
  testimonialsTitle: string;
  testimonials: { n: string; c: string; t: string }[];
  verifiedPurchase: string;
  testimonialsCta: string;
  testimonialsCtaSub: string;

  dmEyebrow: string;
  dmTitle: string;
  dmAlt: string;

  offerEyebrowSingle: string;
  offerEyebrowMulti: string;
  planTitleDefault: string;

  ltBadge: string;
  ltTitle: string;
  ltSub: string;
  ltFeatures: string[];
  ltFrom: string;
  ltCta: string;
  ltGuarantee: string;
  ltUpsellPre: string;
  ltUpsellLink: string;
  ltUpsellSee: string;

  planBadgeSingle: string;
  planBadgeMulti: string;
  plan1TitleA: string;
  plan1TitleB: string;
  featuresSingle: { t: string; ok: boolean }[];
  featuresMulti: { t: string; ok: boolean }[];
  fromPrice1: string;
  onlyFor: string;
  ctaSingle: string;
  ctaClassic: string;
  recommended: string;
  plan2Badge: string;
  plan2TitleA: string;
  plan2TitleB: string;
  plan2Features: string[];
  fromPrice2: string;
  ctaPro: string;

  guaranteeDays: string;
  guaranteeDaysLabel: string;
  guaranteeTitle: string;
  guaranteeText: string;

  faqTitle: string;
  faqLowTicket: { q: string; a: string }[];
  faq: { q: string; a: string }[];

  footerHook: string;
  footerText: string;
  footerLink: string;
  rights: string;
};

const pt: SalesCopy = {
  locale: "pt-BR",
  rating: "4,9",
  ratingCount: "· +2.147 avaliações",
  justBought: "acabou de comprar",
  purchaseAlerts: [
    { name: "Elaine M.", city: "São Paulo, SP", time: "há 2 minutos" },
    { name: "Juliana R.", city: "Belo Horizonte, MG", time: "há 4 minutos" },
    { name: "Patrícia S.", city: "Curitiba, PR", time: "há 7 minutos" },
    { name: "Fernanda L.", city: "Rio de Janeiro, RJ", time: "há 9 minutos" },
    { name: "Mariana T.", city: "Porto Alegre, RS", time: "há 12 minutos" },
    { name: "Camila O.", city: "Salvador, BA", time: "há 15 minutos" },
    { name: "Roberta P.", city: "Recife, PE", time: "há 18 minutos" },
    { name: "Aline C.", city: "Fortaleza, CE", time: "há 21 minutos" },
  ],
  close: "Fechar",
  popupAlt: "Oferta especial - Método Mirian Serrano",
  bannerOffer: "Oferta disponível somente hoje",
  eyebrowDefault: "Método Mirian Serrano",
  onlineNow: "236 pessoas online agora",
  studentAlt: "Aluna do curso",
  studentsBadge: "+2.000 costureiras já dominam o método",
  heroAlt: "Mirian Serrano em seu ateliê com corselet e laptop do curso",
  bullets: [
    "Método exclusivo Mirian Serrano",
    "Técnicas de precisão de costura",
    "Acabamento de luxo",
    "Modelagem profissional",
    "Peças com caimento impecável",
    "Aulas de vestir a peça sob medida",
  ],
  immediateAccess: "Acesso imediato • 7 dias de garantia",
  secure: "Compra segura",
  ssl: "SSL criptografado",
  certificate: "Certificado",

  incomeEyebrow: "A conta que ninguém faz",
  incomeTitle: "Quanto dinheiro você está deixando na mesa",
  incomeCards: [
    { t: "Você cobra por hora, não por valor", d: "Ajustes e costura simples pagam pouco e consomem o dia inteiro. O ticket nunca sobe." },
    { t: "Você recusa o serviço mais bem pago", d: "Quando chega um vestido estruturado, você indica outra profissional — e o dinheiro vai embora." },
    { t: "Sua agenda depende de volume", d: "Sem uma especialização, o mês só fecha se você aceitar tudo, por qualquer preço." },
  ],
  mechanismEyebrow: "O mecanismo",
  mechanismTitle: "Por que peças de luxo custam caro",
  mechanismP1a: "O que sustenta um vestido de festa ou de noiva não é o tecido: é o",
  mechanismP1b: " corselete estruturado",
  mechanismP1c: " por dentro. É ele que dá o caimento, a sustentação e o corpo que fazem a cliente pagar sem discutir preço.",
  mechanismP2: "Quem sabe construir essa estrutura entrega uma peça que veste na primeira prova — e cobra por isso.",
  compareEyebrow: "Comparativo de valor",
  compareTitle: "Vestido simples x vestido estruturado",
  compareSimpleTitle: "Vestido simples",
  compareSimple: ["Concorrência em cada esquina", "Cliente pechincha o preço", "Muitas horas, margem baixa", "Peça esquecível"],
  compareStructuredTitle: "Vestido com corselete estruturado",
  compareStructured: ["Pouquíssimas profissionais sabem fazer", "Cliente paga pelo resultado", "Ticket muito mais alto por peça", "Vira indicação e memória visual"],

  marqueeEyebrow: "Inspiração para costureiras",
  marqueeTitle: "Moldes, técnicas e peças que apaixonam",
  marqueeAlt: "Molde e inspiração de corselet",

  quoteTitle: "Transforme sua técnica e crie corselets que transcendem",
  quote: "\"Cada corselet é uma escultura vestível. Você aprende a construir peças que valorizam cada silhueta com precisão de Alto Designer.\"",
  quoteAuthor: "— Mirian Serrano",

  learnEyebrow: "O que você vai aprender",
  lowTicketTitle: "O Corselet que vai elevar seu portfólio",
  lowTicketIntro: "Um único modelo, ensinado com o nível de detalhe que a maioria dos cursos não entrega:",
  lowTicketCards: [
    { t: "Vídeo aula passo a passo", d: "Do corte ao acabamento final, sem pular etapas" },
    { t: "PDF exclusivo do molde", d: "Pronto pra você construir a peça com precisão" },
    { t: "Segredos do caimento perfeito", d: "A peça vestindo sem ajustes na primeira prova" },
    { t: "Suporte direto", d: "Tire suas dúvidas enquanto constrói" },
  ],
  lowTicketOutro: "Este é o curso de entrada do Método Mirian Serrano — o primeiro passo pra quem quer se tornar uma corseleteira de referência.",

  modulesTitle: "Módulos do Curso",
  modulesIntro: "Cada módulo é uma variação de corselet — do clássico ao autoral — com aulas passo a passo de modelagem, costura e prova.",
  modules: [
    { n: "01", title: "Corselet Clássico", desc: "A base do método. Modelagem tradicional com estrutura impecável." },
    { n: "02", title: "Corselet de Noiva", desc: "Delicadeza e luxo para peças únicas e inesquecíveis." },
    { n: "03", title: "Corselet Avançado", desc: "Técnicas em método internacional para peças de alta complexidade." },
    { n: "04", title: "Acabamento Alto Padrão", desc: "Técnicas profissionais de estrutura, montagem e acabamento de luxo." },
  ],
  modulesCta: "QUERO APRENDER TODAS AS VARIAÇÕES",
  modulesCtaSub: "Garantia de 7 dias • Acesso imediato",
  courseRevealEyebrow: "Curso exclusivo — único no Brasil",
  courseRevealTitle: "Técnicas Avançadas de Corselet",
  courseRevealLead: "Você terá acesso a 6 modelagens prontas para construção e aprenderá 5 tipos de corselet, cada um com uma proposta e técnica de construção diferente.",
  courseRevealVideoLabel: "Veja por dentro todos os módulos do curso",
  courseRevealItems: [
    "5 tipos de corselet",
    "6 modelagens prontas para construção",
    "Técnica de Moulage",
    "Técnica de Crepagem",
    "Medidas assertivas",
    "Construção da base sob medida",
    "Aula de Interpretação de Modelo",
    "Corselet estruturado — técnica avançada",
    "Corselet com técnica avançada de construção",
    "Corselet em tecido delicado",
    "Corselet em tule e tecido transparente",
    "Qual tule é o certo para a construção do corselet",
    "Como escolher o material adequado para cada proposta",
    "Aplicação de renda",
    "Técnicas de acabamento para corselet",
    "Dicas de Ouro — aprenda o segredo que ninguém te ensina",
  ],
  courseRevealRangeTitle: "Do estruturado ao delicado",
  courseRevealRangeText: "Aprenda diferentes técnicas de construção e trabalhe com diversos tecidos e materiais, desenvolvendo 5 tipos de corselet, desde modelos estruturados até propostas delicadas, com tule, transparência e aplicações sofisticadas de renda.",
  courseRevealNotOnlyTitle: "Não é apenas um curso de corselet",
  courseRevealNotOnlyText: "Você vai aprender a interpretar o modelo, desenvolver a modelagem, construir e finalizar diferentes tipos de corselets, entendendo também qual material escolher para cada construção.",
  courseRevealSummary: "5 tipos de corselet + 6 modelagens prontas + Moulage + Crepagem + medidas assertivas + construção sob medida + Interpretação de Modelo + técnicas avançadas + aplicação de renda + escolha correta do tule + acabamentos + Dicas de Ouro. Tudo reunido em uma formação exclusiva.",

  goldTitleA: "Aulas com ",
  goldTitleB: "dicas de ouro",
  goldSub: "O diferencial deste curso: segredos que só quem faz há décadas conhece.",
  goldAlt: "Método Mirian Serrano - Livros de corselets",
  goldItems: [
    "Molde base infalível para qualquer manequim",
    "Segredo do caimento sem ajustes na primeira prova",
    "Escolha de barbatanas, entretelas e tecidos nobres",
    "Acabamento interno digno de atelier de Alto Designer",
  ],

  mentorEyebrow: "Conheça a mentora",
  mentorTitle: "Quem é Mirian Serrano",
  mentorPhotoAlt: "Estilista Mirian Serrano em seu atelier",
  bio1a: "Sou a ",
  bio1b: "Estilista internacional Mirian Serrano",
  bio1c: ", atuo nesta profissão desde 2015. Passei por muitas partes da costura, porém escolhi a área de ",
  bio1d: "moda festa",
  bio2a: "Hoje atuo com destreza trazendo ",
  bio2b: "técnicas internacionais",
  bio2c: " para um acabamento de requinte. Uma peça bem feita agrega história e se torna ",
  bio2d: "memória visual",
  bio3a: "Atendo ",
  bio3b: "dentro e fora do Brasil",
  bio3c: ", presencial e on-line, com técnicas assertivas de medidas. Já fiz coleção para marcas e já vesti ",
  bio3d: "celebridades",
  mentorTags: ["Desde 2015", "Vestiu celebridades", "Atendimento internacional"],
  videoLabel: "Reportagem com Mirian",

  stats: [
    { n: "+2.147", l: "Alunas ativas" },
    { n: "4,9/5", l: "Nota das alunas" },
    { n: "97%", l: "Concluem o curso" },
    { n: "+15 anos", l: "De experiência" },
  ],

  testimonialsEyebrow: "Depoimentos reais",
  testimonialsTitle: "Alunas que já transformaram sua costura",
  testimonials: [
    { n: "Ana Beatriz", c: "São Paulo, SP", t: "Fiz meu primeiro corselet e vestiu perfeito na primeira prova. Chorei de emoção — nunca imaginei conseguir esse nível de acabamento." },
    { n: "Cláudia Menezes", c: "Belo Horizonte, MG", t: "As dicas de acabamento mudaram completamente o padrão do meu atelier. Já triplico o valor das minhas peças." },
    { n: "Renata Oliveira", c: "Curitiba, PR", t: "Método claro, direto e com um nível de detalhe que não encontrei em nenhum outro curso. Vale cada centavo." },
    { n: "Fernanda Lopes", c: "Rio de Janeiro, RJ", t: "Vendi 8 corselets no primeiro mês depois do curso. O método Mirian é um divisor de águas na minha carreira." },
    { n: "Juliana Ramos", c: "Porto Alegre, RS", t: "A aula de vestir sem ajustes é surreal. Minha cliente chorou quando provou. Recomendo de olhos fechados." },
    { n: "Patrícia Souza", c: "Salvador, BA", t: "Sou costureira há 20 anos e ainda aprendi segredos preciosos. A Mirian entrega ouro em cada aula." },
  ],
  verifiedPurchase: "Compra verificada",
  testimonialsCta: "QUERO SER UMA CORSELETEIRA DE REFERÊNCIA",
  testimonialsCtaSub: "+2.000 alunas já transformaram suas costuras",

  dmEyebrow: "Mensagens das alunas",
  dmTitle: "O que elas mandam depois de entrar",
  dmAlt: "Depoimento de aluna do Método Mirian Serrano",

  offerEyebrowSingle: "Oferta especial",
  offerEyebrowMulti: "Escolha seu plano",
  planTitleDefault: "Qual jornada é a sua?",

  ltBadge: "Corselet Clássico em Tule Transparente",
  ltTitle: "Corselet Clássico em Tule Transparente",
  ltSub: "O modelo que toda costureira precisa saber fazer",
  ltFeatures: [
    "Vídeo aula passo a passo completa",
    "PDF do molde exclusivo",
    "Suporte para tirar dúvidas",
    "Acesso imediato e vitalício",
  ],
  ltFrom: "De R$ 97,00",
  ltCta: "QUERO DOMINAR O CORSELET CLÁSSICO",
  ltGuarantee: "7 dias de garantia • Compra 100% segura",
  ltUpsellPre: "🔥 Já dominou o Clássico? Alunas como você estão migrando pro ",
  ltUpsellLink: "Método Completo (Underbust, Noiva, Estilizado, Sob Medida) por R$ 247",
  ltUpsellSee: "veja o que vem incluso →",

  planBadgeSingle: "Acesso completo ao método",
  planBadgeMulti: "Curso Corselet Clássico",
  plan1TitleA: "Curso Completo de Corselets",
  plan1TitleB: "Método Mirian Serrano",
  featuresSingle: [
    { t: "Aulas com variações de corselet", ok: true },
    { t: "Aulas de vestir peça sob medida (zero ajustes)", ok: true },
    { t: "Aulas com dicas de ouro exclusivas", ok: true },
    { t: "Moldes prontos para download", ok: true },
    { t: "Técnicas de precisão de costura e acabamento de luxo", ok: true },
    { t: "Suporte no grupo exclusivo de alunas", ok: true },
    { t: "Certificado de conclusão", ok: true },
    { t: "Acesso vitalício + atualizações", ok: true },
  ],
  featuresMulti: [
    { t: "Aulas com variações de corselet", ok: true },
    { t: "Aulas de vestir peça sob medida (zero ajustes)", ok: true },
    { t: "Moldes prontos para download", ok: true },
    { t: "Certificado de conclusão", ok: true },
    { t: "Acesso vitalício + atualizações", ok: true },
    { t: "Aulas de Crepagem", ok: false },
    { t: "Interpretação de modelo - Penélope", ok: false },
    { t: "Aulas de medidas assertivas para peças sob medida", ok: false },
    { t: "Corselet estruturado em tecidos delicados", ok: false },
    { t: "Técnicas internacionais avançadas", ok: false },
    { t: "Corselet para Noiva e Moda Festa completo", ok: false },
  ],
  fromPrice1: "De R$ 597,00",
  onlyFor: "POR APENAS",
  ctaSingle: "QUERO GARANTIR MINHA VAGA",
  ctaClassic: "QUERO O PLANO CLÁSSICO",
  recommended: "⭐ Recomendado",
  plan2Badge: "🔥 Curso Profissional Completo",
  plan2TitleA: "Curso Profissional Corselet",
  plan2TitleB: "Noiva e Moda Festa",
  plan2Features: [
    "Como montar um molde / molde",
    "Aulas de Crepagem",
    "Interpretação de modelo - Penélope",
    "Dica de Ouro",
    "Aulas de medidas assertivas",
    "Aulas de medida para peças sob medida",
    "Variação de modelos através de um único molde",
    "Corselet estruturado em tecido plano",
    "Corselet estruturado em tecidos delicados",
    "Corselet avançado - técnicas de método internacional",
    "Técnicas profissionais de estrutura, montagem e acabamento de alto padrão",
    "Certificado de conclusão",
    "Acesso vitalício + atualizações",
  ],
  fromPrice2: "De R$ 897,00",
  ctaPro: "QUERO O PLANO PROFISSIONAL",

  guaranteeDays: "7",
  guaranteeDaysLabel: "dias",
  guaranteeTitle: "Garantia incondicional de 7 dias",
  guaranteeText: "Se em 7 dias você sentir que o método não é para você, devolvemos 100% do seu investimento. Sem perguntas.",

  faqTitle: "Perguntas frequentes",
  faqLowTicket: [
    { q: "Esse curso ensina só um modelo de corselet?", a: "Sim — e é por isso que ele é tão completo nesse modelo específico. O Corselet Clássico em tule é a base técnica de todos os outros. Depois de dominá-lo, muitas alunas avançam pro Método Completo pra aprender as demais variações." },
  ],
  faq: [
    { q: "Preciso saber costurar para começar?", a: "O curso é progressivo. Se você tem noções básicas de costura, consegue acompanhar tranquilamente cada aula." },
    { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento você recebe o acesso por e-mail." },
    { q: "Quais materiais vou precisar?", a: "Você aprenderá a escolher barbatanas, entretelas e tecidos nobres. Na primeira aula entregamos uma lista completa de fornecedores." },
    { q: "Terei suporte para tirar dúvidas?", a: "Sim. Além das aulas gravadas, você conta com acompanhamento em grupo exclusivo para alunas e suporte da equipe." },
  ],

  footerHook: "Gostou da estrutura deste lançamento?",
  footerText:
    "Este curso foi lançado com estratégia de copy, página de vendas e tráfego feitos sob medida. Se você tem um produto ou conhecimento para transformar em curso, a gente cuida do lançamento do começo ao fim.",
  footerLink: "Fale com a gente em amaroads.com",
  rights: "Método Mirian Serrano — Todos os direitos reservados.",
};

const es: SalesCopy = {
  locale: "es-ES",
  rating: "4,9",
  ratingCount: "· +2.147 valoraciones",
  justBought: "acaba de comprar",
  purchaseAlerts: [
    { name: "Elena M.", city: "Madrid, ES", time: "hace 2 minutos" },
    { name: "Julia R.", city: "Ciudad de México, MX", time: "hace 4 minutos" },
    { name: "Patricia S.", city: "Bogotá, CO", time: "hace 7 minutos" },
    { name: "Fernanda L.", city: "Buenos Aires, AR", time: "hace 9 minutos" },
    { name: "Mariana T.", city: "Santiago, CL", time: "hace 12 minutos" },
    { name: "Camila O.", city: "Lima, PE", time: "hace 15 minutos" },
    { name: "Roberta P.", city: "Barcelona, ES", time: "hace 18 minutos" },
    { name: "Alina C.", city: "Montevideo, UY", time: "hace 21 minutos" },
  ],
  close: "Cerrar",
  popupAlt: "Oferta especial - Método Mirian Serrano",
  bannerOffer: "Oferta disponible solo hoy",
  eyebrowDefault: "Método Mirian Serrano",
  onlineNow: "236 personas conectadas ahora",
  studentAlt: "Alumna del curso",
  studentsBadge: "+2.000 costureras ya dominan el método",
  heroAlt: "Mirian Serrano en su taller con un corselete y el portátil del curso",
  bullets: [
    "Método exclusivo Mirian Serrano",
    "Técnicas de precisión de costura",
    "Acabado de lujo",
    "Patronaje profesional",
    "Piezas con caída impecable",
    "Clases para probar la pieza a medida",
  ],
  immediateAccess: "Acceso inmediato • 7 días de garantía",
  secure: "Compra segura",
  ssl: "SSL cifrado",
  certificate: "Certificado",

  incomeEyebrow: "La cuenta que nadie hace",
  incomeTitle: "Cuánto dinero estás dejando sobre la mesa",
  incomeCards: [
    { t: "Cobras por hora, no por valor", d: "Los arreglos y la costura simple pagan poco y consumen todo el día. El ticket nunca sube." },
    { t: "Rechazas el trabajo mejor pagado", d: "Cuando llega un vestido estructurado, derivas a otra profesional — y el dinero se va." },
    { t: "Tu agenda depende del volumen", d: "Sin una especialización, el mes solo cierra si aceptas todo, a cualquier precio." },
  ],
  mechanismEyebrow: "El mecanismo",
  mechanismTitle: "Por qué las piezas de lujo cuestan caro",
  mechanismP1a: "Lo que sostiene un vestido de fiesta o de novia no es la tela: es el",
  mechanismP1b: " corselete estructurado",
  mechanismP1c: " por dentro. Es él quien da la caída, la sujeción y el cuerpo que hacen que la clienta pague sin discutir el precio.",
  mechanismP2: "Quien sabe construir esa estructura entrega una pieza que ajusta en la primera prueba — y cobra por ello.",
  compareEyebrow: "Comparativa de valor",
  compareTitle: "Vestido simple vs. vestido estructurado",
  compareSimpleTitle: "Vestido simple",
  compareSimple: ["Competencia en cada esquina", "La clienta regatea el precio", "Muchas horas, margen bajo", "Pieza olvidable"],
  compareStructuredTitle: "Vestido con corselete estructurado",
  compareStructured: ["Muy pocas profesionales saben hacerlo", "La clienta paga por el resultado", "Ticket mucho más alto por pieza", "Se convierte en recomendación y memoria visual"],

  marqueeEyebrow: "Inspiración para costureras",
  marqueeTitle: "Patrones, técnicas y piezas que enamoran",
  marqueeAlt: "Patrón e inspiración de corselete",

  quoteTitle: "Transforma tu técnica y crea corseletes que trascienden",
  quote: "\"Cada corselete es una escultura vestible. Aprendes a construir piezas que realzan cada silueta con precisión de Alto Diseño.\"",
  quoteAuthor: "— Mirian Serrano",

  learnEyebrow: "Lo que vas a aprender",
  lowTicketTitle: "El corselete que va a elevar tu portafolio",
  lowTicketIntro: "Un único modelo, enseñado con el nivel de detalle que la mayoría de los cursos no entrega:",
  lowTicketCards: [
    { t: "Videoclase paso a paso", d: "Del corte al acabado final, sin saltarte etapas" },
    { t: "PDF exclusivo del patrón", d: "Listo para que construyas la pieza con precisión" },
    { t: "Secretos de la caída perfecta", d: "La pieza ajustando sin retoques en la primera prueba" },
    { t: "Soporte directo", d: "Resuelve tus dudas mientras construyes" },
  ],
  lowTicketOutro: "Este es el curso de entrada del Método Mirian Serrano — el primer paso para quien quiere convertirse en una corseletera de referencia.",

  modulesTitle: "Módulos del curso",
  modulesIntro: "Cada módulo es una variación de corselete — del clásico al de autor — con clases paso a paso de patronaje, costura y prueba.",
  modules: [
    { n: "01", title: "Corselete Clásico", desc: "La base del método. Patronaje tradicional con estructura impecable." },
    { n: "02", title: "Corselete de Novia", desc: "Delicadeza y lujo para piezas únicas e inolvidables." },
    { n: "03", title: "Corselete Estilizado", desc: "Variaciones creativas para looks de autor y editoriales." },
    { n: "04", title: "Corselete a Medida", desc: "Clase de prueba de la primera pieza — cero retoques, ajuste perfecto." },
    { n: "05", title: "Corselete Avanzado", desc: "Técnicas de método internacional para piezas de alta complejidad." },
    { n: "06", title: "Acabado de Alto Nivel", desc: "Técnicas profesionales de estructura, montaje y acabado de lujo." },
  ],
  modulesCta: "QUIERO APRENDER TODAS LAS VARIACIONES",
  modulesCtaSub: "Garantía de 7 días • Acceso inmediato",
  courseRevealEyebrow: "Curso exclusivo — único en Brasil",
  courseRevealTitle: "Técnicas Avanzadas de Corset",
  courseRevealLead: "Tendrás acceso a 6 patrones listos para confeccionar y aprenderás 5 tipos de corset, cada uno con una propuesta y técnica de construcción diferente.",
  courseRevealVideoLabel: "Mira por dentro todos los módulos del curso",
  courseRevealItems: [
    "5 tipos de corset",
    "6 patrones listos para confeccionar",
    "Técnica de moulage",
    "Técnica de crepado",
    "Medidas precisas",
    "Construcción de la base a medida",
    "Clase de interpretación de modelos",
    "Corset estructurado — técnica avanzada",
    "Corset con técnica avanzada de construcción",
    "Corset en tejido delicado",
    "Corset en tul y tejido transparente",
    "Cómo elegir el tul correcto para construir el corset",
    "Cómo elegir el material adecuado para cada propuesta",
    "Aplicación de encaje",
    "Técnicas de acabado para corset",
    "Consejos de Oro — aprende el secreto que nadie te enseña",
  ],
  courseRevealRangeTitle: "Del estructurado al delicado",
  courseRevealRangeText: "Aprende diferentes técnicas de construcción y trabaja con diversos tejidos y materiales, desarrollando 5 tipos de corset: desde modelos estructurados hasta propuestas delicadas con tul, transparencias y sofisticadas aplicaciones de encaje.",
  courseRevealNotOnlyTitle: "No es solo un curso de corset",
  courseRevealNotOnlyText: "Aprenderás a interpretar el modelo, desarrollar el patrón, construir y terminar diferentes tipos de corsets, entendiendo también qué material elegir para cada construcción.",
  courseRevealSummary: "5 tipos de corset + 6 patrones listos + Moulage + Crepado + medidas precisas + construcción a medida + Interpretación de Modelos + técnicas avanzadas + aplicación de encaje + elección correcta del tul + acabados + Consejos de Oro. Todo reunido en una formación exclusiva.",

  goldTitleA: "Clases con ",
  goldTitleB: "consejos de oro",
  goldSub: "El diferencial de este curso: secretos que solo conoce quien lleva décadas haciéndolo.",
  goldAlt: "Método Mirian Serrano - Libros de corsés",
  goldItems: [
    "Patrón base infalible para cualquier maniquí",
    "El secreto de la caída sin retoques en la primera prueba",
    "Elección de ballenas, entretelas y tejidos nobles",
    "Acabado interno digno de un taller de Alto Diseño",
  ],

  mentorEyebrow: "Conoce a la mentora",
  mentorTitle: "Quién es Mirian Serrano",
  mentorPhotoAlt: "La estilista Mirian Serrano en su taller",
  bio1a: "Soy la ",
  bio1b: "estilista internacional Mirian Serrano",
  bio1c: ", trabajo en esta profesión desde 2015. Pasé por muchas áreas de la costura, pero elegí la de ",
  bio1d: "moda de fiesta",
  bio2a: "Hoy trabajo con destreza aplicando ",
  bio2b: "técnicas internacionales",
  bio2c: " para un acabado de refinamiento. Una pieza bien hecha suma historia y se convierte en ",
  bio2d: "memoria visual",
  bio3a: "Atiendo ",
  bio3b: "dentro y fuera de Brasil",
  bio3c: ", presencial y online, con técnicas asertivas de medidas. Ya hice colección para marcas y he vestido a ",
  bio3d: "celebridades",
  mentorTags: ["Desde 2015", "Vistió a celebridades", "Atención internacional"],
  videoLabel: "Reportaje con Mirian",

  stats: [
    { n: "+2.147", l: "Alumnas activas" },
    { n: "4,9/5", l: "Nota de las alumnas" },
    { n: "97%", l: "Terminan el curso" },
    { n: "+15 años", l: "De experiencia" },
  ],

  testimonialsEyebrow: "Testimonios reales",
  testimonialsTitle: "Alumnas que ya transformaron su costura",
  testimonials: [
    { n: "Ana Beatriz", c: "Madrid, ES", t: "Hice mi primer corselete y quedó perfecto en la primera prueba. Lloré de emoción — nunca imaginé lograr ese nivel de acabado." },
    { n: "Claudia Menezes", c: "Ciudad de México, MX", t: "Los consejos de acabado cambiaron por completo el estándar de mi taller. Ya triplico el valor de mis piezas." },
    { n: "Renata Oliveira", c: "Bogotá, CO", t: "Método claro, directo y con un nivel de detalle que no encontré en ningún otro curso. Vale cada centavo." },
    { n: "Fernanda Lopes", c: "Buenos Aires, AR", t: "Vendí 8 corseletes en el primer mes después del curso. El método Mirian marcó un antes y un después en mi carrera." },
    { n: "Juliana Ramos", c: "Santiago, CL", t: "La clase de prueba sin retoques es increíble. Mi clienta lloró cuando se lo probó. Lo recomiendo con los ojos cerrados." },
    { n: "Patricia Souza", c: "Lima, PE", t: "Llevo 20 años como costurera y aun así aprendí secretos valiosos. Mirian entrega oro en cada clase." },
  ],
  verifiedPurchase: "Compra verificada",
  testimonialsCta: "QUIERO SER UNA CORSELETERA DE REFERENCIA",
  testimonialsCtaSub: "+2.000 alumnas ya transformaron su costura",

  dmEyebrow: "Mensajes de las alumnas",
  dmTitle: "Lo que nos escriben después de entrar",
  dmAlt: "Testimonio de alumna del Método Mirian Serrano",

  offerEyebrowSingle: "Oferta especial",
  offerEyebrowMulti: "Elige tu plan",
  planTitleDefault: "¿Cuál es tu camino?",

  ltBadge: "Corselete Clásico en Tul Transparente",
  ltTitle: "Corselete Clásico en Tul Transparente",
  ltSub: "El modelo que toda costurera necesita saber hacer",
  ltFeatures: [
    "Videoclase paso a paso completa",
    "PDF del patrón exclusivo",
    "Soporte para resolver dudas",
    "Acceso inmediato y de por vida",
  ],
  ltFrom: "De R$ 97,00",
  ltCta: "QUIERO DOMINAR EL CORSELETE CLÁSICO",
  ltGuarantee: "7 días de garantía • Compra 100% segura",
  ltUpsellPre: "🔥 ¿Ya dominas el Clásico? Alumnas como tú están pasando al ",
  ltUpsellLink: "Método Completo (Underbust, Novia, Estilizado, A Medida) por R$ 247",
  ltUpsellSee: "mira lo que incluye →",

  planBadgeSingle: "Acceso completo al método",
  planBadgeMulti: "Curso Corselete Clásico",
  plan1TitleA: "Curso Completo de Corseletes",
  plan1TitleB: "Método Mirian Serrano",
  featuresSingle: [
    { t: "Clases con variaciones de corselete", ok: true },
    { t: "Clases de prueba de pieza a medida (cero retoques)", ok: true },
    { t: "Clases con consejos de oro exclusivos", ok: true },
    { t: "Patrones listos para descargar", ok: true },
    { t: "Técnicas de precisión de costura y acabado de lujo", ok: true },
    { t: "Soporte en el grupo exclusivo de alumnas", ok: true },
    { t: "Certificado de finalización", ok: true },
    { t: "Acceso de por vida + actualizaciones", ok: true },
  ],
  featuresMulti: [
    { t: "Clases con variaciones de corselete", ok: true },
    { t: "Clases de prueba de pieza a medida (cero retoques)", ok: true },
    { t: "Patrones listos para descargar", ok: true },
    { t: "Certificado de finalización", ok: true },
    { t: "Acceso de por vida + actualizaciones", ok: true },
    { t: "Clases de crepado", ok: false },
    { t: "Interpretación de modelo - Penélope", ok: false },
    { t: "Clases de medidas asertivas para piezas a medida", ok: false },
    { t: "Corselete estructurado en tejidos delicados", ok: false },
    { t: "Técnicas internacionales avanzadas", ok: false },
    { t: "Corselete para Novia y Moda de Fiesta completo", ok: false },
  ],
  fromPrice1: "De R$ 597,00",
  onlyFor: "SOLO POR",
  ctaSingle: "QUIERO ASEGURAR MI PLAZA",
  ctaClassic: "QUIERO EL PLAN CLÁSICO",
  recommended: "⭐ Recomendado",
  plan2Badge: "🔥 Curso Profesional Completo",
  plan2TitleA: "Curso Profesional Corselete",
  plan2TitleB: "Novia y Moda de Fiesta",
  plan2Features: [
    "Cómo montar un patrón",
    "Clases de crepado",
    "Interpretación de modelo - Penélope",
    "Consejo de oro",
    "Clases de medidas asertivas",
    "Clases de medidas para piezas a medida",
    "Variación de modelos a partir de un único patrón",
    "Corselete estructurado en tejido plano",
    "Corselete estructurado en tejidos delicados",
    "Corselete avanzado - técnicas de método internacional",
    "Técnicas profesionales de estructura, montaje y acabado de alto nivel",
    "Certificado de finalización",
    "Acceso de por vida + actualizaciones",
  ],
  fromPrice2: "De R$ 897,00",
  ctaPro: "QUIERO EL PLAN PROFESIONAL",

  guaranteeDays: "7",
  guaranteeDaysLabel: "días",
  guaranteeTitle: "Garantía incondicional de 7 días",
  guaranteeText: "Si en 7 días sientes que el método no es para ti, te devolvemos el 100% de tu inversión. Sin preguntas.",

  faqTitle: "Preguntas frecuentes",
  faqLowTicket: [
    { q: "¿Este curso enseña solo un modelo de corselete?", a: "Sí — y justamente por eso es tan completo en ese modelo específico. El Corselete Clásico en tul es la base técnica de todos los demás. Después de dominarlo, muchas alumnas avanzan al Método Completo para aprender las demás variaciones." },
  ],
  faq: [
    { q: "¿Necesito saber coser para empezar?", a: "El curso es progresivo. Si tienes nociones básicas de costura, puedes seguir cada clase sin problema." },
    { q: "¿Cómo recibo el acceso?", a: "Inmediatamente después de confirmar el pago recibes el acceso por correo electrónico." },
    { q: "¿Qué materiales voy a necesitar?", a: "Aprenderás a elegir ballenas, entretelas y tejidos nobles. En la primera clase entregamos una lista completa de proveedores." },
    { q: "¿Tendré soporte para resolver dudas?", a: "Sí. Además de las clases grabadas, cuentas con acompañamiento en un grupo exclusivo para alumnas y soporte del equipo." },
  ],

  footerHook: "¿Te gustó la estructura de este lanzamiento?",
  footerText:
    "Este curso se lanzó con una estrategia de copy, página de ventas y tráfico hechos a medida. Si tienes un producto o conocimiento para convertir en curso, nos encargamos del lanzamiento de principio a fin.",
  footerLink: "Habla con nosotros en amaroads.com",
  rights: "Método Mirian Serrano — Todos los derechos reservados.",
};

const en: SalesCopy = {
  locale: "en-US",
  rating: "4.9",
  ratingCount: "· 2,147+ reviews",
  justBought: "just purchased",
  purchaseAlerts: [
    { name: "Elaine M.", city: "London, UK", time: "2 minutes ago" },
    { name: "Julia R.", city: "New York, NY", time: "4 minutes ago" },
    { name: "Patricia S.", city: "Toronto, CA", time: "7 minutes ago" },
    { name: "Fernanda L.", city: "Los Angeles, CA", time: "9 minutes ago" },
    { name: "Mariana T.", city: "Sydney, AU", time: "12 minutes ago" },
    { name: "Camila O.", city: "Dublin, IE", time: "15 minutes ago" },
    { name: "Roberta P.", city: "Chicago, IL", time: "18 minutes ago" },
    { name: "Aline C.", city: "Miami, FL", time: "21 minutes ago" },
  ],
  close: "Close",
  popupAlt: "Special offer - Mirian Serrano Method",
  bannerOffer: "Offer available today only",
  eyebrowDefault: "Mirian Serrano Method",
  onlineNow: "236 people online right now",
  studentAlt: "Course student",
  studentsBadge: "2,000+ seamstresses already master the method",
  heroAlt: "Mirian Serrano in her atelier with a corselet and the course laptop",
  bullets: [
    "Exclusive Mirian Serrano Method",
    "Precision sewing techniques",
    "Luxury finishing",
    "Professional pattern making",
    "Garments with flawless drape",
    "Fitting lessons for made-to-measure pieces",
  ],
  immediateAccess: "Instant access • 7-day guarantee",
  secure: "Secure checkout",
  ssl: "SSL encrypted",
  certificate: "Certificate",

  incomeEyebrow: "The math nobody does",
  incomeTitle: "How much money you're leaving on the table",
  incomeCards: [
    { t: "You charge by the hour, not by value", d: "Alterations and simple sewing pay little and eat up the whole day. Your ticket never goes up." },
    { t: "You turn down the best-paid work", d: "When a structured gown comes in, you refer it to someone else — and the money walks away." },
    { t: "Your calendar depends on volume", d: "Without a specialty, the month only closes if you accept everything, at any price." },
  ],
  mechanismEyebrow: "The mechanism",
  mechanismTitle: "Why luxury pieces command high prices",
  mechanismP1a: "What holds up an evening or bridal gown isn't the fabric: it's the",
  mechanismP1b: " structured corselet",
  mechanismP1c: " inside. It creates the drape, the support and the body that make the client pay without arguing over price.",
  mechanismP2: "Whoever can build that structure delivers a garment that fits at the first fitting — and charges for it.",
  compareEyebrow: "Value comparison",
  compareTitle: "Simple dress vs. structured dress",
  compareSimpleTitle: "Simple dress",
  compareSimple: ["Competition on every corner", "Client haggles over price", "Long hours, thin margins", "Forgettable piece"],
  compareStructuredTitle: "Dress with a structured corselet",
  compareStructured: ["Very few professionals can make it", "Client pays for the result", "Far higher ticket per piece", "Turns into referrals and visual memory"],

  marqueeEyebrow: "Inspiration for seamstresses",
  marqueeTitle: "Patterns, techniques and pieces you'll fall for",
  marqueeAlt: "Corselet pattern and inspiration",

  quoteTitle: "Transform your technique and create corselets that transcend",
  quote: "\"Every corselet is a wearable sculpture. You learn to build pieces that enhance every silhouette with High Design precision.\"",
  quoteAuthor: "— Mirian Serrano",

  learnEyebrow: "What you'll learn",
  lowTicketTitle: "The corselet that will elevate your portfolio",
  lowTicketIntro: "A single model, taught with the level of detail most courses never deliver:",
  lowTicketCards: [
    { t: "Step-by-step video lesson", d: "From cutting to final finishing, no skipped steps" },
    { t: "Exclusive pattern PDF", d: "Ready for you to build the piece with precision" },
    { t: "Perfect-drape secrets", d: "The piece fitting with no adjustments at the first fitting" },
    { t: "Direct support", d: "Get your questions answered while you build" },
  ],
  lowTicketOutro: "This is the entry course of the Mirian Serrano Method — the first step for anyone who wants to become a reference corset maker.",

  modulesTitle: "Course modules",
  modulesIntro: "Each module is a corselet variation — from classic to signature — with step-by-step pattern, sewing and fitting lessons.",
  modules: [
    { n: "01", title: "Classic Corselet", desc: "The foundation of the method. Traditional pattern making with flawless structure." },
    { n: "02", title: "Bridal Corselet", desc: "Delicacy and luxury for unique, unforgettable pieces." },
    { n: "03", title: "Styled Corselet", desc: "Creative variations for signature and editorial looks." },
    { n: "04", title: "Made-to-Measure Corselet", desc: "First-fitting lesson — zero adjustments, perfect fit." },
    { n: "05", title: "Advanced Corselet", desc: "International-method techniques for highly complex pieces." },
    { n: "06", title: "High-End Finishing", desc: "Professional structure, assembly and luxury finishing techniques." },
  ],
  modulesCta: "I WANT TO LEARN EVERY VARIATION",
  modulesCtaSub: "7-day guarantee • Instant access",
  courseRevealEyebrow: "Exclusive course — the only one of its kind in Brazil",
  courseRevealTitle: "Advanced Corset Techniques",
  courseRevealLead: "You will receive 6 ready-to-use patterns and learn 5 types of corset, each with a different purpose and construction technique.",
  courseRevealVideoLabel: "See every course module from the inside",
  courseRevealItems: [
    "5 types of corset",
    "6 ready-to-use construction patterns",
    "Draping technique",
    "Creping technique",
    "Accurate measurements",
    "Made-to-measure base construction",
    "Model interpretation lesson",
    "Structured corset — advanced technique",
    "Corset with advanced construction technique",
    "Corset in delicate fabric",
    "Corset in tulle and sheer fabric",
    "How to choose the right tulle for corset construction",
    "How to choose the right material for each design",
    "Lace application",
    "Corset finishing techniques",
    "Golden Tips — learn the secret no one teaches you",
  ],
  courseRevealRangeTitle: "From structured to delicate",
  courseRevealRangeText: "Learn different construction techniques and work with a range of fabrics and materials as you develop 5 types of corset—from structured designs to delicate pieces with tulle, sheers and sophisticated lace applications.",
  courseRevealNotOnlyTitle: "This is more than a corset course",
  courseRevealNotOnlyText: "You will learn to interpret a design, develop the pattern, construct and finish different types of corsets, while understanding which material to choose for every construction.",
  courseRevealSummary: "5 types of corset + 6 ready-to-use patterns + Draping + Creping + accurate measurements + made-to-measure construction + Model Interpretation + advanced techniques + lace application + the right tulle choice + finishing + Golden Tips. Everything brought together in one exclusive training.",

  goldTitleA: "Lessons with ",
  goldTitleB: "golden tips",
  goldSub: "What sets this course apart: secrets only decades of practice reveal.",
  goldAlt: "Mirian Serrano Method - Corset books",
  goldItems: [
    "A foolproof base pattern for any body",
    "The secret to perfect drape with no first-fitting adjustments",
    "Choosing boning, interfacing and fine fabrics",
    "Inner finishing worthy of a High Design atelier",
  ],

  mentorEyebrow: "Meet your mentor",
  mentorTitle: "Who is Mirian Serrano",
  mentorPhotoAlt: "Fashion designer Mirian Serrano in her atelier",
  bio1a: "I'm ",
  bio1b: "international fashion designer Mirian Serrano",
  bio1c: ", working in this profession since 2015. I went through many areas of sewing, but I chose ",
  bio1d: "eveningwear",
  bio2a: "Today I work with mastery, bringing ",
  bio2b: "international techniques",
  bio2c: " to a refined finish. A well-made piece carries a story and becomes a ",
  bio2d: "visual memory",
  bio3a: "I serve clients ",
  bio3b: "inside and outside Brazil",
  bio3c: ", in person and online, with precise measuring techniques. I've created collections for brands and dressed ",
  bio3d: "celebrities",
  mentorTags: ["Since 2015", "Dressed celebrities", "International clients"],
  videoLabel: "Feature story with Mirian",

  stats: [
    { n: "2,147+", l: "Active students" },
    { n: "4.9/5", l: "Student rating" },
    { n: "97%", l: "Complete the course" },
    { n: "15+ years", l: "Of experience" },
  ],

  testimonialsEyebrow: "Real testimonials",
  testimonialsTitle: "Students who already transformed their sewing",
  testimonials: [
    { n: "Ana Beatriz", c: "London, UK", t: "I made my first corselet and it fit perfectly at the first fitting. I cried — I never imagined reaching this level of finishing." },
    { n: "Claudia Menezes", c: "New York, NY", t: "The finishing tips completely changed the standard of my atelier. I've already tripled my prices." },
    { n: "Renata Oliveira", c: "Toronto, CA", t: "Clear, direct method with a level of detail I couldn't find in any other course. Worth every penny." },
    { n: "Fernanda Lopes", c: "Los Angeles, CA", t: "I sold 8 corselets in the first month after the course. Mirian's method was a turning point in my career." },
    { n: "Juliana Ramos", c: "Sydney, AU", t: "The no-adjustment fitting lesson is unreal. My client cried when she tried it on. I recommend it with my eyes closed." },
    { n: "Patricia Souza", c: "Dublin, IE", t: "I've been sewing for 20 years and still learned precious secrets. Mirian delivers gold in every lesson." },
  ],
  verifiedPurchase: "Verified purchase",
  testimonialsCta: "I WANT TO BECOME A REFERENCE CORSET MAKER",
  testimonialsCtaSub: "2,000+ students already transformed their sewing",

  dmEyebrow: "Messages from students",
  dmTitle: "What they send us after joining",
  dmAlt: "Testimonial from a Mirian Serrano Method student",

  offerEyebrowSingle: "Special offer",
  offerEyebrowMulti: "Choose your plan",
  planTitleDefault: "Which journey is yours?",

  ltBadge: "Classic Corselet in Sheer Tulle",
  ltTitle: "Classic Corselet in Sheer Tulle",
  ltSub: "The model every seamstress needs to know how to make",
  ltFeatures: [
    "Complete step-by-step video lesson",
    "Exclusive pattern PDF",
    "Support for your questions",
    "Instant, lifetime access",
  ],
  ltFrom: "Was R$ 97.00",
  ltCta: "I WANT TO MASTER THE CLASSIC CORSELET",
  ltGuarantee: "7-day guarantee • 100% secure checkout",
  ltUpsellPre: "🔥 Already mastered the Classic? Students like you are moving on to the ",
  ltUpsellLink: "Complete Method (Underbust, Bridal, Styled, Made-to-Measure) for R$ 247",
  ltUpsellSee: "see what's included →",

  planBadgeSingle: "Full access to the method",
  planBadgeMulti: "Classic Corselet Course",
  plan1TitleA: "Complete Corselet Course",
  plan1TitleB: "Mirian Serrano Method",
  featuresSingle: [
    { t: "Lessons with corselet variations", ok: true },
    { t: "Made-to-measure fitting lessons (zero adjustments)", ok: true },
    { t: "Lessons with exclusive golden tips", ok: true },
    { t: "Ready-to-download patterns", ok: true },
    { t: "Precision sewing and luxury finishing techniques", ok: true },
    { t: "Support in the exclusive student group", ok: true },
    { t: "Certificate of completion", ok: true },
    { t: "Lifetime access + updates", ok: true },
  ],
  featuresMulti: [
    { t: "Lessons with corselet variations", ok: true },
    { t: "Made-to-measure fitting lessons (zero adjustments)", ok: true },
    { t: "Ready-to-download patterns", ok: true },
    { t: "Certificate of completion", ok: true },
    { t: "Lifetime access + updates", ok: true },
    { t: "Crepe-work lessons", ok: false },
    { t: "Model interpretation - Penélope", ok: false },
    { t: "Precise measuring lessons for made-to-measure pieces", ok: false },
    { t: "Structured corselet in delicate fabrics", ok: false },
    { t: "Advanced international techniques", ok: false },
    { t: "Full Bridal and Eveningwear Corselet", ok: false },
  ],
  fromPrice1: "Was R$ 597.00",
  onlyFor: "NOW ONLY",
  ctaSingle: "I WANT TO SECURE MY SPOT",
  ctaClassic: "I WANT THE CLASSIC PLAN",
  recommended: "⭐ Recommended",
  plan2Badge: "🔥 Complete Professional Course",
  plan2TitleA: "Professional Corselet Course",
  plan2TitleB: "Bridal and Eveningwear",
  plan2Features: [
    "How to build a pattern",
    "Crepe-work lessons",
    "Model interpretation - Penélope",
    "Golden tip",
    "Precise measuring lessons",
    "Measuring lessons for made-to-measure pieces",
    "Model variations from a single pattern",
    "Structured corselet in woven fabric",
    "Structured corselet in delicate fabrics",
    "Advanced corselet - international method techniques",
    "Professional structure, assembly and high-end finishing techniques",
    "Certificate of completion",
    "Lifetime access + updates",
  ],
  fromPrice2: "Was R$ 897.00",
  ctaPro: "I WANT THE PROFESSIONAL PLAN",

  guaranteeDays: "7",
  guaranteeDaysLabel: "days",
  guaranteeTitle: "Unconditional 7-day guarantee",
  guaranteeText: "If within 7 days you feel the method isn't for you, we refund 100% of your investment. No questions asked.",

  faqTitle: "Frequently asked questions",
  faqLowTicket: [
    { q: "Does this course teach only one corselet model?", a: "Yes — and that's exactly why it's so complete on that specific model. The Classic Corselet in tulle is the technical foundation of all the others. After mastering it, many students move on to the Complete Method to learn the remaining variations." },
  ],
  faq: [
    { q: "Do I need to know how to sew to start?", a: "The course is progressive. If you have basic sewing knowledge, you can follow every lesson comfortably." },
    { q: "How do I get access?", a: "Immediately after payment confirmation you receive access by email." },
    { q: "What materials will I need?", a: "You'll learn to choose boning, interfacing and fine fabrics. In the first lesson we hand you a complete supplier list." },
    { q: "Will I have support for my questions?", a: "Yes. Besides the recorded lessons, you get guidance in an exclusive student group plus team support." },
  ],

  footerHook: "Liked the structure of this launch?",
  footerText:
    "This course was launched with tailor-made copy strategy, sales page and traffic. If you have a product or knowledge to turn into a course, we handle the launch from start to finish.",
  footerLink: "Talk to us at amaroads.com",
  rights: "Mirian Serrano Method — All rights reserved.",
};

export const SALES_COPY: Record<Lang, SalesCopy> = { pt, es, en };
