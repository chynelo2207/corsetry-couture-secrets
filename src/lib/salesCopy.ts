export type Lang = "pt" | "es" | "en";

export type SalesCopy = {
  locale: string;
  bannerOffer: string;
  ratingCount: string;
  justBought: string;
  onlineNow: string;
  studentsBadge: string;
  studentAlt: string;
  heroAlt: string;
  bullets: string[];
  immediateAccess: string;
  secure: string;
  ssl: string;
  certificate: string;
  purchaseAlerts: { name: string; city: string; time: string }[];
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
  modulesEyebrow: string;
  modulesTitle: string;
  modulesIntro: string;
  modules: { n: string; title: string; desc: string }[];
  modulesCta: string;
  guaranteeShort: string;
  goldTitleA: string;
  goldTitleB: string;
  goldSub: string;
  goldAlt: string;
  goldItems: string[];
  mentorEyebrow: string;
  mentorTitle: string;
  mentorPhotoAlt: string;
  bioParts: { a: string; b: string; c: string; d: string }[];
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
  planEyebrowSingle: string;
  planEyebrowMulti: string;
  planTitleDefault: string;
  planBadgeSingle: string;
  planBadgeMulti: string;
  plan1TitleA: string;
  plan1TitleB: string;
  featuresSingle: { t: string; ok: boolean }[];
  featuresMulti: { t: string; ok: boolean }[];
  fromPrice: string;
  onlyFor: string;
  ctaSingle: string;
  ctaClassic: string;
  recommended: string;
  plan2Badge: string;
  plan2TitleA: string;
  plan2TitleB: string;
  plan2Features: string[];
  plan2From: string;
  ctaPro: string;
  guaranteeDays: string;
  guaranteeTitle: string;
  guaranteeText: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  footerHook: string;
  footerText: string;
  footerLink: string;
  rights: string;
  close: string;
  popupAlt: string;
};

const pt: SalesCopy = {
  locale: "pt-BR",
  bannerOffer: "Oferta disponível somente hoje",
  ratingCount: "· +2.147 avaliações",
  justBought: "acabou de comprar",
  onlineNow: "236 pessoas online agora",
  studentsBadge: "+2.000 costureiras já dominam o método",
  studentAlt: "Aluna do curso",
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
  quote: "Cada corselet é uma escultura vestível. Você aprende a construir peças que valorizam cada silhueta com precisão de Alto Designer.",
  modulesEyebrow: "O que você vai aprender",
  modulesTitle: "Módulos do Curso",
  modulesIntro: "Cada módulo é uma variação de corselet — do clássico ao autoral — com aulas passo a passo de modelagem, costura e prova.",
  modules: [
    { n: "01", title: "Corselet Clássico", desc: "A base do método. Modelagem tradicional com estrutura impecável." },
    { n: "02", title: "Corselet de Noiva", desc: "Delicadeza e luxo para peças únicas e inesquecíveis." },
    { n: "03", title: "Corselet Estilizado", desc: "Variações criativas para looks autorais e editoriais." },
    { n: "04", title: "Corselet Sob Medida", desc: "Aula de vestir a primeira peça — zero ajustes, encaixe perfeito." },
    { n: "05", title: "Corselet Avançado", desc: "Técnicas em método internacional para peças de alta complexidade." },
    { n: "06", title: "Acabamento Alto Padrão", desc: "Técnicas profissionais de estrutura, montagem e acabamento de luxo." },
  ],
  modulesCta: "QUERO APRENDER TODAS AS VARIAÇÕES",
  guaranteeShort: "Garantia de 7 dias • Acesso imediato",
  goldTitleA: "Aulas com ",
  goldTitleB: "dicas de ouro",
  goldSub: "O diferencial deste curso: segredos que só quem faz há décadas conhece.",
  goldAlt: "Método Miriam Serrano - Livros de corsets",
  goldItems: [
    "Molde base infalível para qualquer manequim",
    "Segredo do caimento sem ajustes na primeira prova",
    "Escolha de barbatanas, entretelas e tecidos nobres",
    "Acabamento interno digno de atelier de Alto Designer",
  ],
  mentorEyebrow: "Conheça a mentora",
  mentorTitle: "Quem é Mirian Serrano",
  mentorPhotoAlt: "Estilista Mirian Serrano em seu atelier",
  bioParts: [
    { a: "Sou a ", b: "Estilista internacional Mirian Serrano", c: ", atuo nesta profissão desde 2015. Passei por muitas partes da costura, porém escolhi a área de ", d: "moda festa." },
    { a: "Hoje atuo com destreza trazendo ", b: "técnicas internacionais", c: " para um acabamento de requinte. Uma peça bem feita agrega história e se torna ", d: "memória visual." },
    { a: "Atendo ", b: "dentro e fora do Brasil", c: ", presencial e on-line, com técnicas assertivas de medidas. Já fiz coleção para marcas e já vesti ", d: "celebridades." },
  ],
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
  planEyebrowSingle: "Oferta especial",
  planEyebrowMulti: "Escolha seu plano",
  planTitleDefault: "Qual jornada é a sua?",
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
  fromPrice: "De R$ 597,00",
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
  plan2From: "De R$ 897,00",
  ctaPro: "QUERO O PLANO PROFISSIONAL",
  guaranteeDays: "dias",
  guaranteeTitle: "Garantia incondicional de 7 dias",
  guaranteeText: "Se em 7 dias você sentir que o método não é para você, devolvemos 100% do seu investimento. Sem perguntas.",
  faqTitle: "Perguntas frequentes",
  faq: [
    { q: "Preciso saber costurar para começar?", a: "O curso é progressivo. Se você tem noções básicas de costura, consegue acompanhar tranquilamente cada módulo." },
    { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento você recebe o acesso por e-mail." },
    { q: "Quais materiais vou precisar?", a: "Você aprenderá a escolher barbatanas, entretelas e tecidos nobres. Na primeira aula entregamos uma lista completa de fornecedores." },
    { q: "Terei suporte para tirar dúvidas?", a: "Sim. Além das aulas gravadas, você conta com acompanhamento em grupo exclusivo para alunas e suporte da equipe." },
  ],
  footerHook: "Gostou da estrutura deste lançamento?",
  footerText:
    "Este curso foi lançado com estratégia de copy, página de vendas e tráfego feitos sob medida. Se você tem um produto ou conhecimento para transformar em curso, a gente cuida do lançamento do começo ao fim.",
  footerLink: "Fale com a gente em amaroads.com",
  rights: "Método Mirian Serrano — Todos os direitos reservados.",
  close: "Fechar",
  popupAlt: "Oferta especial - Método Miriam Serrano",
};

const es: SalesCopy = {
  locale: "es-ES",
  bannerOffer: "Oferta disponible solo hoy",
  ratingCount: "· +2.147 valoraciones",
  justBought: "acaba de comprar",
  onlineNow: "236 personas conectadas ahora",
  studentsBadge: "+2.000 costureras ya dominan el método",
  studentAlt: "Alumna del curso",
  heroAlt: "Mirian Serrano en su taller con un corselete y el laptop del curso",
  bullets: [
    "Método exclusivo Mirian Serrano",
    "Técnicas de precisión en costura",
    "Acabado de lujo",
    "Patronaje profesional",
    "Piezas con caída impecable",
    "Clases para probar la pieza a medida",
  ],
  immediateAccess: "Acceso inmediato • 7 días de garantía",
  secure: "Compra segura",
  ssl: "SSL cifrado",
  certificate: "Certificado",
  purchaseAlerts: [
    { name: "Elena M.", city: "Madrid, ES", time: "hace 2 minutos" },
    { name: "Juliana R.", city: "Bogotá, CO", time: "hace 4 minutos" },
    { name: "Patricia S.", city: "Ciudad de México, MX", time: "hace 7 minutos" },
    { name: "Fernanda L.", city: "Buenos Aires, AR", time: "hace 9 minutos" },
    { name: "Mariana T.", city: "Santiago, CL", time: "hace 12 minutos" },
    { name: "Camila O.", city: "Lima, PE", time: "hace 15 minutos" },
    { name: "Roberta P.", city: "Barcelona, ES", time: "hace 18 minutos" },
    { name: "Alina C.", city: "Montevideo, UY", time: "hace 21 minutos" },
  ],
  incomeEyebrow: "La cuenta que nadie hace",
  incomeTitle: "Cuánto dinero estás dejando sobre la mesa",
  incomeCards: [
    { t: "Cobras por hora, no por valor", d: "Los arreglos y la costura simple pagan poco y consumen todo el día. El ticket nunca sube." },
    { t: "Rechazas el trabajo mejor pagado", d: "Cuando llega un vestido estructurado, recomiendas a otra profesional — y el dinero se va." },
    { t: "Tu agenda depende del volumen", d: "Sin una especialización, el mes solo cierra si aceptas todo, a cualquier precio." },
  ],
  mechanismEyebrow: "El mecanismo",
  mechanismTitle: "Por qué las piezas de lujo cuestan caro",
  mechanismP1a: "Lo que sostiene un vestido de fiesta o de novia no es la tela: es el",
  mechanismP1b: " corselete estructurado",
  mechanismP1c: " por dentro. Es él quien da la caída, el soporte y el cuerpo que hacen que la clienta pague sin discutir el precio.",
  mechanismP2: "Quien sabe construir esa estructura entrega una pieza que calza en la primera prueba — y cobra por ello.",
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
  quote: "Cada corselete es una escultura vestible. Aprendes a construir piezas que realzan cada silueta con precisión de Alto Diseño.",
  modulesEyebrow: "Lo que vas a aprender",
  modulesTitle: "Módulos del Curso",
  modulesIntro: "Cada módulo es una variación de corselete — del clásico al de autor — con clases paso a paso de patronaje, costura y prueba.",
  modules: [
    { n: "01", title: "Corselete Clásico", desc: "La base del método. Patronaje tradicional con estructura impecable." },
    { n: "02", title: "Corselete de Novia", desc: "Delicadeza y lujo para piezas únicas e inolvidables." },
    { n: "03", title: "Corselete Estilizado", desc: "Variaciones creativas para looks de autor y editoriales." },
    { n: "04", title: "Corselete a Medida", desc: "Clase de prueba de la primera pieza — cero ajustes, calce perfecto." },
    { n: "05", title: "Corselete Avanzado", desc: "Técnicas de método internacional para piezas de alta complejidad." },
    { n: "06", title: "Acabado de Alto Nivel", desc: "Técnicas profesionales de estructura, montaje y acabado de lujo." },
  ],
  modulesCta: "QUIERO APRENDER TODAS LAS VARIACIONES",
  guaranteeShort: "Garantía de 7 días • Acceso inmediato",
  goldTitleA: "Clases con ",
  goldTitleB: "consejos de oro",
  goldSub: "El diferencial de este curso: secretos que solo conoce quien lleva décadas haciéndolo.",
  goldAlt: "Método Mirian Serrano - Libros de corseletes",
  goldItems: [
    "Patrón base infalible para cualquier maniquí",
    "El secreto de la caída sin ajustes en la primera prueba",
    "Elección de ballenas, entretelas y telas nobles",
    "Acabado interno digno de un taller de Alto Diseño",
  ],
  mentorEyebrow: "Conoce a la mentora",
  mentorTitle: "Quién es Mirian Serrano",
  mentorPhotoAlt: "La estilista Mirian Serrano en su taller",
  bioParts: [
    { a: "Soy la ", b: "estilista internacional Mirian Serrano", c: ", ejerzo esta profesión desde 2015. Pasé por muchas áreas de la costura, pero elegí la de ", d: "moda de fiesta." },
    { a: "Hoy trabajo con destreza aplicando ", b: "técnicas internacionales", c: " para un acabado refinado. Una pieza bien hecha suma historia y se convierte en ", d: "memoria visual." },
    { a: "Atiendo ", b: "dentro y fuera de Brasil", c: ", presencial y online, con técnicas certeras de medidas. He creado colecciones para marcas y he vestido a ", d: "celebridades." },
  ],
  mentorTags: ["Desde 2015", "Vistió celebridades", "Atención internacional"],
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
    { n: "Ana Beatriz", c: "Madrid, ES", t: "Hice mi primer corselete y calzó perfecto en la primera prueba. Lloré de emoción — nunca imaginé lograr este nivel de acabado." },
    { n: "Claudia Menezes", c: "Bogotá, CO", t: "Los consejos de acabado cambiaron por completo el nivel de mi taller. Ya triplico el valor de mis piezas." },
    { n: "Renata Oliveira", c: "Ciudad de México, MX", t: "Método claro, directo y con un nivel de detalle que no encontré en ningún otro curso. Vale cada centavo." },
    { n: "Fernanda Lopes", c: "Buenos Aires, AR", t: "Vendí 8 corseletes en el primer mes después del curso. El método Mirian marcó un antes y un después en mi carrera." },
    { n: "Juliana Ramos", c: "Santiago, CL", t: "La clase de prueba sin ajustes es increíble. Mi clienta lloró al probárselo. Lo recomiendo con los ojos cerrados." },
    { n: "Patricia Souza", c: "Lima, PE", t: "Llevo 20 años cosiendo y aun así aprendí secretos valiosos. Mirian entrega oro en cada clase." },
  ],
  verifiedPurchase: "Compra verificada",
  testimonialsCta: "QUIERO SER UNA REFERENTE EN CORSELETES",
  testimonialsCtaSub: "+2.000 alumnas ya transformaron su costura",
  dmEyebrow: "Mensajes de las alumnas",
  dmTitle: "Lo que nos escriben después de entrar",
  dmAlt: "Testimonio de alumna del Método Mirian Serrano",
  planEyebrowSingle: "Oferta especial",
  planEyebrowMulti: "Elige tu plan",
  planTitleDefault: "¿Cuál es tu camino?",
  planBadgeSingle: "Acceso completo al método",
  planBadgeMulti: "Curso Corselete Clásico",
  plan1TitleA: "Curso Completo de Corseletes",
  plan1TitleB: "Método Mirian Serrano",
  featuresSingle: [
    { t: "Clases con variaciones de corselete", ok: true },
    { t: "Clases de prueba de pieza a medida (cero ajustes)", ok: true },
    { t: "Clases con consejos de oro exclusivos", ok: true },
    { t: "Patrones listos para descargar", ok: true },
    { t: "Técnicas de precisión en costura y acabado de lujo", ok: true },
    { t: "Soporte en el grupo exclusivo de alumnas", ok: true },
    { t: "Certificado de finalización", ok: true },
    { t: "Acceso de por vida + actualizaciones", ok: true },
  ],
  featuresMulti: [
    { t: "Clases con variaciones de corselete", ok: true },
    { t: "Clases de prueba de pieza a medida (cero ajustes)", ok: true },
    { t: "Patrones listos para descargar", ok: true },
    { t: "Certificado de finalización", ok: true },
    { t: "Acceso de por vida + actualizaciones", ok: true },
    { t: "Clases de crepé", ok: false },
    { t: "Interpretación de modelo - Penélope", ok: false },
    { t: "Clases de medidas certeras para piezas a medida", ok: false },
    { t: "Corselete estructurado en telas delicadas", ok: false },
    { t: "Técnicas internacionales avanzadas", ok: false },
    { t: "Corselete para Novia y Moda de Fiesta completo", ok: false },
  ],
  fromPrice: "Antes R$ 597,00",
  onlyFor: "SOLO POR",
  ctaSingle: "QUIERO ASEGURAR MI PLAZA",
  ctaClassic: "QUIERO EL PLAN CLÁSICO",
  recommended: "⭐ Recomendado",
  plan2Badge: "🔥 Curso Profesional Completo",
  plan2TitleA: "Curso Profesional de Corselete",
  plan2TitleB: "Novia y Moda de Fiesta",
  plan2Features: [
    "Cómo montar un patrón",
    "Clases de crepé",
    "Interpretación de modelo - Penélope",
    "Consejo de oro",
    "Clases de medidas certeras",
    "Clases de medidas para piezas a medida",
    "Variación de modelos a partir de un único patrón",
    "Corselete estructurado en tela plana",
    "Corselete estructurado en telas delicadas",
    "Corselete avanzado - técnicas de método internacional",
    "Técnicas profesionales de estructura, montaje y acabado de alto nivel",
    "Certificado de finalización",
    "Acceso de por vida + actualizaciones",
  ],
  plan2From: "Antes R$ 897,00",
  ctaPro: "QUIERO EL PLAN PROFESIONAL",
  guaranteeDays: "días",
  guaranteeTitle: "Garantía incondicional de 7 días",
  guaranteeText: "Si en 7 días sientes que el método no es para ti, te devolvemos el 100% de tu inversión. Sin preguntas.",
  faqTitle: "Preguntas frecuentes",
  faq: [
    { q: "¿Necesito saber coser para empezar?", a: "El curso es progresivo. Si tienes nociones básicas de costura, puedes seguir cada módulo sin problema." },
    { q: "¿Cómo recibo el acceso?", a: "Inmediatamente después de confirmar el pago recibes el acceso por correo electrónico." },
    { q: "¿Qué materiales voy a necesitar?", a: "Aprenderás a elegir ballenas, entretelas y telas nobles. En la primera clase entregamos una lista completa de proveedores." },
    { q: "¿Tendré soporte para resolver dudas?", a: "Sí. Además de las clases grabadas, cuentas con acompañamiento en un grupo exclusivo de alumnas y soporte del equipo." },
  ],
  footerHook: "¿Te gustó la estructura de este lanzamiento?",
  footerText:
    "Este curso se lanzó con estrategia de copy, página de ventas y tráfico hechos a medida. Si tienes un producto o conocimiento para transformar en curso, nosotros cuidamos del lanzamiento de principio a fin.",
  footerLink: "Habla con nosotros en amaroads.com",
  rights: "Método Mirian Serrano — Todos los derechos reservados.",
  close: "Cerrar",
  popupAlt: "Oferta especial - Método Mirian Serrano",
};

const en: SalesCopy = {
  locale: "en-US",
  bannerOffer: "Offer available today only",
  ratingCount: "· 2,147+ reviews",
  justBought: "just bought",
  onlineNow: "236 people online right now",
  studentsBadge: "2,000+ seamstresses already master the method",
  studentAlt: "Course student",
  heroAlt: "Mirian Serrano in her atelier with a corset and the course laptop",
  bullets: [
    "Exclusive Mirian Serrano method",
    "Precision sewing techniques",
    "Luxury finishing",
    "Professional pattern making",
    "Pieces with flawless fit",
    "Fitting classes for made-to-measure pieces",
  ],
  immediateAccess: "Instant access • 7-day guarantee",
  secure: "Secure checkout",
  ssl: "SSL encrypted",
  certificate: "Certificate",
  purchaseAlerts: [
    { name: "Elaine M.", city: "London, UK", time: "2 minutes ago" },
    { name: "Julia R.", city: "New York, NY", time: "4 minutes ago" },
    { name: "Patricia S.", city: "Toronto, CA", time: "7 minutes ago" },
    { name: "Fernanda L.", city: "Miami, FL", time: "9 minutes ago" },
    { name: "Marianne T.", city: "Dublin, IE", time: "12 minutes ago" },
    { name: "Camille O.", city: "Sydney, AU", time: "15 minutes ago" },
    { name: "Roberta P.", city: "Chicago, IL", time: "18 minutes ago" },
    { name: "Alina C.", city: "Los Angeles, CA", time: "21 minutes ago" },
  ],
  incomeEyebrow: "The math nobody does",
  incomeTitle: "How much money you are leaving on the table",
  incomeCards: [
    { t: "You charge by the hour, not by value", d: "Alterations and simple sewing pay little and eat up the whole day. Your ticket never goes up." },
    { t: "You turn down the best-paid work", d: "When a structured gown comes in, you refer another professional — and the money walks away." },
    { t: "Your calendar depends on volume", d: "Without a specialty, the month only closes if you accept everything, at any price." },
  ],
  mechanismEyebrow: "The mechanism",
  mechanismTitle: "Why luxury pieces cost so much",
  mechanismP1a: "What holds up an evening or bridal gown is not the fabric: it is the",
  mechanismP1b: " structured corset",
  mechanismP1c: " inside. It creates the drape, the support and the body that make the client pay without questioning the price.",
  mechanismP2: "Whoever can build that structure delivers a piece that fits at the first fitting — and charges for it.",
  compareEyebrow: "Value comparison",
  compareTitle: "Simple dress vs. structured dress",
  compareSimpleTitle: "Simple dress",
  compareSimple: ["Competition on every corner", "The client haggles the price", "Many hours, thin margin", "Forgettable piece"],
  compareStructuredTitle: "Dress with a structured corset",
  compareStructured: ["Very few professionals know how", "The client pays for the result", "Much higher ticket per piece", "Turns into referrals and visual memory"],
  marqueeEyebrow: "Inspiration for seamstresses",
  marqueeTitle: "Patterns, techniques and pieces you'll love",
  marqueeAlt: "Corset pattern and inspiration",
  quoteTitle: "Transform your craft and create corsets that transcend",
  quote: "Every corset is a wearable sculpture. You learn to build pieces that enhance every silhouette with high-design precision.",
  modulesEyebrow: "What you will learn",
  modulesTitle: "Course Modules",
  modulesIntro: "Each module is a corset variation — from classic to signature — with step-by-step lessons on pattern making, sewing and fitting.",
  modules: [
    { n: "01", title: "Classic Corset", desc: "The foundation of the method. Traditional pattern making with flawless structure." },
    { n: "02", title: "Bridal Corset", desc: "Delicacy and luxury for unique, unforgettable pieces." },
    { n: "03", title: "Styled Corset", desc: "Creative variations for signature and editorial looks." },
    { n: "04", title: "Made-to-Measure Corset", desc: "First-fitting lesson — zero alterations, perfect fit." },
    { n: "05", title: "Advanced Corset", desc: "International-method techniques for highly complex pieces." },
    { n: "06", title: "High-End Finishing", desc: "Professional techniques for structure, assembly and luxury finishing." },
  ],
  modulesCta: "I WANT TO LEARN EVERY VARIATION",
  guaranteeShort: "7-day guarantee • Instant access",
  goldTitleA: "Lessons with ",
  goldTitleB: "golden tips",
  goldSub: "What sets this course apart: secrets only decades of practice reveal.",
  goldAlt: "Mirian Serrano Method - Corset books",
  goldItems: [
    "Foolproof base pattern for any dress form",
    "The secret to perfect drape with no alterations at the first fitting",
    "Choosing boning, interfacing and fine fabrics",
    "Inner finishing worthy of a high-design atelier",
  ],
  mentorEyebrow: "Meet your mentor",
  mentorTitle: "Who is Mirian Serrano",
  mentorPhotoAlt: "Designer Mirian Serrano in her atelier",
  bioParts: [
    { a: "I am ", b: "international designer Mirian Serrano", c: ", working in this profession since 2015. I went through many areas of sewing, but I chose ", d: "eveningwear." },
    { a: "Today I work skillfully bringing ", b: "international techniques", c: " to a refined finish. A well-made piece carries a story and becomes ", d: "a visual memory." },
    { a: "I serve clients ", b: "in Brazil and abroad", c: ", in person and online, with precise measuring techniques. I have created collections for brands and dressed ", d: "celebrities." },
  ],
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
    { n: "Ana Beatriz", c: "London, UK", t: "I made my first corset and it fit perfectly at the very first fitting. I cried — I never imagined reaching this level of finishing." },
    { n: "Claudia Menezes", c: "New York, NY", t: "The finishing tips completely changed the standard of my atelier. I now charge three times more for my pieces." },
    { n: "Renata Oliveira", c: "Toronto, CA", t: "Clear, straight-to-the-point method with a level of detail I found in no other course. Worth every penny." },
    { n: "Fernanda Lopes", c: "Miami, FL", t: "I sold 8 corsets in the first month after the course. Mirian's method was a turning point in my career." },
    { n: "Juliana Ramos", c: "Sydney, AU", t: "The no-alteration fitting lesson is unreal. My client cried when she tried it on. I recommend it with my eyes closed." },
    { n: "Patricia Souza", c: "Chicago, IL", t: "I have been sewing for 20 years and still learned precious secrets. Mirian delivers gold in every lesson." },
  ],
  verifiedPurchase: "Verified purchase",
  testimonialsCta: "I WANT TO BECOME A GO-TO CORSET MAKER",
  testimonialsCtaSub: "2,000+ students have already transformed their sewing",
  dmEyebrow: "Messages from students",
  dmTitle: "What they send us after joining",
  dmAlt: "Student testimonial about the Mirian Serrano Method",
  planEyebrowSingle: "Special offer",
  planEyebrowMulti: "Choose your plan",
  planTitleDefault: "Which journey is yours?",
  planBadgeSingle: "Full access to the method",
  planBadgeMulti: "Classic Corset Course",
  plan1TitleA: "Complete Corset Course",
  plan1TitleB: "Mirian Serrano Method",
  featuresSingle: [
    { t: "Lessons with corset variations", ok: true },
    { t: "Made-to-measure fitting lessons (zero alterations)", ok: true },
    { t: "Lessons with exclusive golden tips", ok: true },
    { t: "Ready-to-download patterns", ok: true },
    { t: "Precision sewing and luxury finishing techniques", ok: true },
    { t: "Support in the exclusive students group", ok: true },
    { t: "Certificate of completion", ok: true },
    { t: "Lifetime access + updates", ok: true },
  ],
  featuresMulti: [
    { t: "Lessons with corset variations", ok: true },
    { t: "Made-to-measure fitting lessons (zero alterations)", ok: true },
    { t: "Ready-to-download patterns", ok: true },
    { t: "Certificate of completion", ok: true },
    { t: "Lifetime access + updates", ok: true },
    { t: "Crepe technique lessons", ok: false },
    { t: "Model interpretation - Penélope", ok: false },
    { t: "Precise measuring lessons for made-to-measure pieces", ok: false },
    { t: "Structured corset in delicate fabrics", ok: false },
    { t: "Advanced international techniques", ok: false },
    { t: "Complete Bridal and Eveningwear corset", ok: false },
  ],
  fromPrice: "Was R$ 597.00",
  onlyFor: "NOW ONLY",
  ctaSingle: "I WANT TO SECURE MY SPOT",
  ctaClassic: "I WANT THE CLASSIC PLAN",
  recommended: "⭐ Recommended",
  plan2Badge: "🔥 Complete Professional Course",
  plan2TitleA: "Professional Corset Course",
  plan2TitleB: "Bridal and Eveningwear",
  plan2Features: [
    "How to build a pattern",
    "Crepe technique lessons",
    "Model interpretation - Penélope",
    "Golden tip",
    "Precise measuring lessons",
    "Measuring lessons for made-to-measure pieces",
    "Model variations from a single pattern",
    "Structured corset in woven fabric",
    "Structured corset in delicate fabrics",
    "Advanced corset - international method techniques",
    "Professional techniques for structure, assembly and high-end finishing",
    "Certificate of completion",
    "Lifetime access + updates",
  ],
  plan2From: "Was R$ 897.00",
  ctaPro: "I WANT THE PROFESSIONAL PLAN",
  guaranteeDays: "days",
  guaranteeTitle: "Unconditional 7-day guarantee",
  guaranteeText: "If within 7 days you feel the method is not for you, we refund 100% of your investment. No questions asked.",
  faqTitle: "Frequently asked questions",
  faq: [
    { q: "Do I need to know how to sew to start?", a: "The course is progressive. If you have basic sewing knowledge, you can follow every module comfortably." },
    { q: "How do I get access?", a: "Right after your payment is confirmed you receive access by email." },
    { q: "Which materials will I need?", a: "You will learn how to choose boning, interfacing and fine fabrics. In the first lesson we share a complete supplier list." },
    { q: "Will I have support for my questions?", a: "Yes. Besides the recorded lessons, you get guidance in an exclusive students group plus team support." },
  ],
  footerHook: "Liked the structure of this launch?",
  footerText:
    "This course was launched with tailor-made copy strategy, sales page and traffic. If you have a product or expertise to turn into a course, we handle the launch from start to finish.",
  footerLink: "Talk to us at amaroads.com",
  rights: "Mirian Serrano Method — All rights reserved.",
  close: "Close",
  popupAlt: "Special offer - Mirian Serrano Method",
};

export const SALES_COPY: Record<Lang, SalesCopy> = { pt, es, en };
