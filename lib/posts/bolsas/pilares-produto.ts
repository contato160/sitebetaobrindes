import type { Post } from "../../posts";
import { ctaWhatsAppHtml, produtoLink, categoriaLink } from "../../postBlocks";

const linkCategoria = categoriaLink("Bolsas Personalizadas", "bolsas");
const linkPilarCategoria = `<a href="/blog/guia-completo-bolsas-personalizadas/">guia completo de bolsas personalizadas</a>`;

const ecobag: Post = {
  slug: "ecobag-personalizada-guia",
  titulo: "Ecobag Personalizada: Guia Completo, Preço e Como Pedir",
  descricao:
    "Guia da Ecobag Personalizada, o modelo mais buscado da categoria: personalização, ocasiões de uso e como pedir com a marca da sua empresa.",
  tipo: "pilar-produto",
  categoriaRelacionada: "bolsas",
  produtoRelacionado: "ecobag-personalizada",
  dataPublicacao: "2026-02-20T10:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  howTo: {
    titulo: "Como cuidar da sua Ecobag Personalizada",
    passos: [
      "Lave à máquina em ciclo suave e água fria, ou à mão, para preservar a arte impressa por mais tempo.",
      "Evite alvejante e amaciante em excesso sobre a área da estampa.",
      "Seque à sombra, evitando secadora em temperatura alta.",
      "Dobre para guardar, sem amassar com peso sobre a área impressa por longos períodos.",
    ],
  },
  faq: [
    {
      pergunta: "Por que este é o modelo mais buscado da categoria?",
      resposta:
        "Porque combina baixo custo por unidade, formato simples e dobrável (fácil de guardar) e um apelo de sustentabilidade que reforça positivamente a marca — é o brinde mais fácil de justificar em qualquer campanha de grande alcance.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de bolsas personalizadas.",
    },
    {
      pergunta: "Como é feita a personalização desta ecobag?",
      resposta:
        "A técnica exata (serigrafia ou outra aplicação, conforme o tecido) é confirmada no orçamento. Você aprova a prova digital da arte antes de qualquer unidade entrar em produção.",
    },
    {
      pergunta: "A ecobag suporta qual peso de compras?",
      resposta:
        "O tecido resistente da ecobag suporta bem o uso cotidiano de compras de supermercado ou feira — não é dimensionada para cargas muito pesadas ou pontiagudas, que podem forçar as costuras das alças com o tempo.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, contados a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Ecobag Personalizada</strong> é o modelo mais buscado dentro da categoria de ${linkCategoria} — bolsa de tecido resistente, dobrável, com apelo de sustentabilidade que reforça positivamente qualquer marca aplicada. É a escolha mais segura para brindes de grande alcance com orçamento controlado.</p>

<h2>Personalização disponível</h2>

<p>A arte é aplicada na face externa da ecobag, com técnica confirmada no orçamento conforme o tecido específico. A produção só começa após você aprovar a prova digital.</p>

<h2>Ocasiões de uso</h2>
<ul>
<li><strong>Brindes corporativos de fim de ano</strong> — item versátil, de baixo custo e alta aceitação.</li>
<li><strong>Feiras e eventos de grande porte</strong> — fácil de distribuir em volume e de carregar dobrada.</li>
<li><strong>Campanhas de sustentabilidade</strong> — reforça posicionamento de marca consciente, substituindo sacolas plásticas.</li>
<li><strong>Kits de boas-vindas de pousadas</strong> — item prático para compras e passeios durante a estadia.</li>
</ul>

${ctaWhatsAppHtml("Olá! Quero orçamento da Ecobag Personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja mais no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "ecobag-personalizada")}.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre a Ecobag Personalizada.", "Tirar dúvida pelo WhatsApp")}
`,
};

const mochilao: Post = {
  slug: "mochilao-personalizado-guia",
  titulo: "Mochilão Personalizado: Guia Completo, Preço e Como Pedir",
  descricao:
    "Guia do Mochilão Personalizado: formato de mochila espaçosa, ocasiões de uso e como pedir com a marca da sua empresa ou evento.",
  tipo: "pilar-produto",
  categoriaRelacionada: "bolsas",
  produtoRelacionado: "mochilao-personalizado",
  dataPublicacao: "2026-02-20T11:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  howTo: {
    titulo: "Como cuidar do seu Mochilão Personalizado",
    passos: [
      "Limpe a superfície externa com pano levemente úmido, evitando imersão total em água.",
      "Esvazie os bolsos internos periodicamente, verificando itens esquecidos que possam manchar o forro.",
      "Seque à sombra caso a mochila fique molhada, evitando secadora ou fonte de calor direta.",
      "Evite sobrecarga além da capacidade indicada, para não forçar as costuras das alças.",
    ],
  },
  faq: [
    {
      pergunta: "Qual a capacidade deste mochilão?",
      resposta:
        "O formato espaçoso é pensado para uso de viagem ou dia a dia com bastante volume — notebook, roupas para um pernoite, materiais de trabalho. A capacidade exata em litros é confirmada na ficha técnica do orçamento.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de bolsas personalizadas.",
    },
    {
      pergunta: "Como é feita a personalização deste mochilão?",
      resposta:
        "A logo é aplicada na face externa, com técnica confirmada no orçamento. Você aprova a prova digital antes de qualquer unidade entrar em produção.",
    },
    {
      pergunta: "Esse mochilão é indicado para kit de formatura?",
      resposta:
        "Sim, é um dos itens recorrentes em kits de formatura e brindes universitários, junto com as bolsas Atheta do catálogo — o formato prático de mochila tem boa aceitação entre estudantes e recém-formados.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>O <strong>Mochilão Personalizado</strong> é uma mochila espaçosa, indicada para uso de viagem ou dia a dia com bastante volume de itens. Dentro da categoria de ${linkCategoria}, é o modelo certo quando o brinde precisa comportar mais que uma bolsa de mão comum — notebook, materiais de trabalho, roupa para um pernoite.</p>

<h2>Personalização disponível</h2>

<p>A logo é aplicada na face externa do mochilão, com técnica confirmada no orçamento. A produção só começa após você aprovar a prova digital da arte.</p>

<h2>Ocasiões de uso</h2>
<ul>
<li><strong>Kits de formatura e brindes universitários</strong> — item prático de uso diário para estudantes e recém-formados.</li>
<li><strong>Brindes corporativos para equipes de campo</strong> — quem carrega notebook e materiais de trabalho se beneficia do volume maior.</li>
<li><strong>Kits de viagem corporativos</strong> — colaboradores que viajam a trabalho com frequência.</li>
<li><strong>Presentes práticos para o dia a dia</strong> — pessoa física que precisa de uma mochila resistente e espaçosa.</li>
</ul>

${ctaWhatsAppHtml("Olá! Quero orçamento do Mochilão Personalizado.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja mais no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "mochilao-personalizado")}.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre o Mochilão.", "Tirar dúvida pelo WhatsApp")}
`,
};

const toteBag: Post = {
  slug: "tote-bag-personalizada-guia",
  titulo: "Tote Bag Personalizada: Guia Completo, Preço e Como Pedir",
  descricao:
    "Guia da Tote Bag Personalizada: formato clássico com mais estrutura que a ecobag, ocasiões de uso e como pedir com a marca da sua empresa.",
  tipo: "pilar-produto",
  categoriaRelacionada: "bolsas",
  produtoRelacionado: "tote-bag-personalizada",
  dataPublicacao: "2026-02-20T12:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual a diferença entre esta tote bag e a ecobag do catálogo?",
      resposta:
        "A tote bag tem mais estrutura — mantém a forma mesmo vazia, diferente da ecobag, que é mais fina e dobrável. Isso dá um visual mais elegante, adequado para brindes de maior valor percebido.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de bolsas personalizadas.",
    },
    {
      pergunta: "Como é feita a personalização?",
      resposta:
        "A arte é aplicada na face externa, com técnica confirmada no orçamento. Você aprova a prova digital antes da produção.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Tote Bag Personalizada</strong> tem formato clássico com mais estrutura que a ecobag, mantendo a forma mesmo vazia — um visual mais elegante para brindes de maior valor percebido. Dentro da categoria de ${linkCategoria}, é uma alternativa intermediária entre a simplicidade da ecobag e as bolsas de lona mais elaboradas.</p>

<h2>Personalização e ocasiões de uso</h2>

<p>A arte é aplicada na face externa da bolsa, técnica confirmada no orçamento. É indicada para brindes corporativos com apelo um pouco mais sofisticado que uma ecobag comum, kits de boas-vindas de hotéis de padrão superior e presentes que combinam praticidade com bom visual.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento da Tote Bag Personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja mais no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "tote-bag-personalizada")}.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre a Tote Bag.", "Tirar dúvida pelo WhatsApp")}
`,
};

const toteBagBlack: Post = {
  slug: "tote-bag-black-personalizada-guia",
  titulo: "Tote Bag Black Personalizada: Guia Rápido",
  descricao:
    "Tote Bag Black Personalizada: a versão preta da tote bag do catálogo, ocasiões de uso e como pedir com a arte da sua marca.",
  tipo: "pilar-produto",
  categoriaRelacionada: "bolsas",
  produtoRelacionado: "tote-bag-black-personalizada",
  dataPublicacao: "2026-02-20T13:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual a diferença para a tote bag natural do catálogo?",
      resposta:
        "Só a cor: esta é preta, a outra tem o tom natural da lona. O formato e a estrutura são os mesmos — a escolha é puramente estética, conforme a paleta de cores da sua marca.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de bolsas personalizadas.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Tote Bag Black Personalizada</strong> é a versão preta da tote bag do catálogo, mantendo o mesmo formato estruturado com um visual mais sóbrio e versátil. Está na categoria de ${linkCategoria} como alternativa de cor à versão em tom natural de lona.</p>

<h2>Personalização e ocasiões de uso</h2>

<p>A arte é aplicada na face externa, com técnica confirmada no orçamento. Funciona nos mesmos contextos da versão natural — brindes corporativos, kits de boas-vindas — sendo a escolha certa quando a paleta de cores da marca combina melhor com preto.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento da Tote Bag Black Personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Compare com a versão natural no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "tote-bag-black-personalizada")}.</p>
`,
};

const toteMinimalista: Post = {
  slug: "tote-minimalista-personalizada-guia",
  titulo: "Tote Minimalista Personalizada: Guia Completo, Preço e Como Pedir",
  descricao:
    "Guia da Tote Minimalista Personalizada, com alças de couro: o modelo de maior valor percebido entre os totes do catálogo, ocasiões de uso e como pedir.",
  tipo: "pilar-produto",
  categoriaRelacionada: "bolsas",
  produtoRelacionado: "tote-minimalista-personalizada",
  dataPublicacao: "2026-02-20T14:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  howTo: {
    titulo: "Como cuidar da sua Tote Minimalista",
    passos: [
      "Lave o corpo de lona à mão ou em ciclo suave, evitando molhar as alças de couro.",
      "Limpe as alças de couro com pano seco ou levemente úmido, sem imersão em água.",
      "Aplique hidratante de couro nas alças a cada poucos meses, para manter a flexibilidade.",
      "Seque à sombra, longe de fonte de calor direta.",
    ],
  },
  faq: [
    {
      pergunta: "O que diferencia esta tote das demais do catálogo?",
      resposta:
        "As alças de couro genuíno, que somam um toque de sofisticação ao corpo de lona natural — um design mais minimalista e elegante, com bolso frontal com puxador em couro, indicado para brindes de maior valor percebido.",
    },
    {
      pergunta: "As alças de couro aguentam o mesmo peso que as alças de tecido?",
      resposta:
        "Sim, o couro é resistente e adequado para o uso pretendido da bolsa — mas como qualquer peça de couro, se beneficia de cuidado com hidratação periódica para manter a flexibilidade e durabilidade ao longo do tempo.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de bolsas personalizadas.",
    },
    {
      pergunta: "Como é feita a personalização?",
      resposta:
        "A arte é aplicada no corpo de lona da bolsa, com técnica confirmada no orçamento. Você aprova a prova digital antes da produção.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, contados a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Tote Minimalista Personalizada</strong> tem alças de couro genuíno somadas ao corpo de lona natural — design mais elegante e discreto, com bolso frontal e puxador em couro. Dentro da categoria de ${linkCategoria}, é o modelo de maior valor percebido entre os totes do catálogo.</p>

<h2>Personalização disponível</h2>

<p>A arte é aplicada no corpo de lona da bolsa, técnica confirmada no orçamento, respeitando o bolso frontal e as alças de couro que não recebem impressão. A produção só começa após você aprovar a prova digital.</p>

<h2>Ocasiões de uso</h2>
<ul>
<li><strong>Brindes corporativos de maior valor percebido</strong> — kits para clientes VIP, parceiros estratégicos ou lideranças.</li>
<li><strong>Kits de boas-vindas premium de pousadas</strong> — reforça posicionamento de padrão superior.</li>
<li><strong>Presentes de fim de ano diferenciados</strong> — alternativa mais sofisticada às ecobags e totes comuns.</li>
<li><strong>Uso pessoal do dia a dia</strong> — para quem valoriza design minimalista em acessórios.</li>
</ul>

${ctaWhatsAppHtml("Olá! Quero orçamento da Tote Minimalista Personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja mais no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "tote-minimalista-personalizada")}.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre a Tote Minimalista.", "Tirar dúvida pelo WhatsApp")}
`,
};

const bolsaLonaCrua: Post = {
  slug: "bolsa-lona-crua-personalizada-guia",
  titulo: "Bolsa de Lona Crua Personalizada: Guia Completo, Preço e Como Pedir",
  descricao:
    "Guia da Bolsa de Lona Crua Personalizada, com bolsos laterais reforçados: personalização, ocasiões de uso e como pedir com a marca da sua empresa.",
  tipo: "pilar-produto",
  categoriaRelacionada: "bolsas",
  produtoRelacionado: "bolsa-lona-crua-personalizada",
  dataPublicacao: "2026-02-20T15:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Para que servem os bolsos laterais desta bolsa?",
      resposta:
        "Os bolsos laterais em tecido listrado acomodam itens que você quer separar do compartimento principal — garrafa de água, guarda-chuva pequeno, celular — um diferencial funcional sobre bolsas de compartimento único.",
    },
    {
      pergunta: "Qual a diferença para a versão preta do catálogo?",
      resposta:
        "Só a cor do corpo principal: esta é em tom natural de lona crua, a outra é preta. O formato, os bolsos laterais e a estrutura são os mesmos.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de bolsas personalizadas.",
    },
    {
      pergunta: "Como é feita a personalização?",
      resposta:
        "A arte é aplicada no corpo principal da bolsa, com técnica confirmada no orçamento. Você aprova a prova digital antes da produção.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Bolsa de Lona Crua Personalizada</strong> tem bolsos laterais reforçados com tecido listrado, além do compartimento principal — um diferencial funcional que separa itens específicos (garrafa, guarda-chuva) do restante do conteúdo. Dentro da categoria de ${linkCategoria}, é uma das bolsas mais estruturadas e práticas do catálogo.</p>

<h2>Personalização disponível</h2>

<p>A arte é aplicada no corpo principal da bolsa, respeitando os bolsos laterais que mantêm o padrão listrado como elemento de design. A produção só começa após você aprovar a prova digital.</p>

<h2>Ocasiões de uso</h2>
<ul>
<li><strong>Brindes corporativos de fim de ano</strong> — item estruturado com boa percepção de valor.</li>
<li><strong>Kits de praia ou piquenique para pousadas</strong> — os bolsos laterais acomodam bem itens separados como garrafa de água.</li>
<li><strong>Presentes para o dia a dia</strong> — pessoa física que quer uma bolsa prática e organizada.</li>
<li><strong>Brindes de feiras e eventos</strong> — item com apelo visual mais elaborado que uma ecobag simples.</li>
</ul>

${ctaWhatsAppHtml("Olá! Quero orçamento da Bolsa de Lona Crua Personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja mais no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "bolsa-lona-crua-personalizada")}.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre a Bolsa de Lona Crua.", "Tirar dúvida pelo WhatsApp")}
`,
};

const bolsaLonaPreta: Post = {
  slug: "bolsa-lona-preta-personalizada-guia",
  titulo: "Bolsa de Lona Preta Personalizada: Guia Rápido",
  descricao:
    "Bolsa de Lona Preta Personalizada, com bolsos laterais reforçados: a versão preta da bolsa de lona do catálogo, ocasiões de uso e como pedir.",
  tipo: "pilar-produto",
  categoriaRelacionada: "bolsas",
  produtoRelacionado: "bolsa-lona-preta-personalizada",
  dataPublicacao: "2026-02-20T16:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual a diferença para a versão crua/natural do catálogo?",
      resposta:
        "Só a cor do corpo principal: esta é preta, a outra é em tom natural de lona. Os bolsos laterais reforçados e a estrutura são os mesmos.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de bolsas personalizadas.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Bolsa de Lona Preta Personalizada</strong> tem os mesmos bolsos laterais reforçados e estrutura da versão em lona crua do catálogo, em corpo preto — visual mais sóbrio e versátil. Está na categoria de ${linkCategoria} como alternativa de cor à versão em tom natural.</p>

<h2>Personalização e ocasiões de uso</h2>

<p>A arte é aplicada no corpo principal da bolsa, técnica confirmada no orçamento. Funciona nos mesmos contextos da versão crua — brindes corporativos, kits de praia, presentes práticos — sendo a escolha certa quando o preto combina melhor com a paleta de cores da marca.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento da Bolsa de Lona Preta Personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Compare com a versão crua no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "bolsa-lona-preta-personalizada")}.</p>
`,
};

const bolsaLonaAlcaPU: Post = {
  slug: "bolsa-lona-alca-pu-personalizada-guia",
  titulo: "Bolsa de Lona com Alça em PU Personalizada: Guia Rápido",
  descricao:
    "Bolsa de Lona com Alça em PU Personalizada: alças em material sintético resistente, ocasiões de uso e como pedir com a arte da sua marca.",
  tipo: "pilar-produto",
  categoriaRelacionada: "bolsas",
  produtoRelacionado: "bolsa-lona-alca-pu-personalizada",
  dataPublicacao: "2026-02-20T17:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "O que é a alça em PU e por que ela é usada nesta bolsa?",
      resposta:
        "PU (poliuretano) é um material sintético que imita a aparência do couro, com boa resistência e menor custo de produção — usado aqui nas alças para dar um acabamento mais elaborado ao corpo de lona sem o custo de alças em couro genuíno.",
    },
    {
      pergunta: "Qual a diferença para a tote minimalista, que também tem alça diferenciada?",
      resposta:
        "A tote minimalista tem alças em couro genuíno; esta bolsa tem alças em PU sintético, com custo de produção geralmente menor mantendo um acabamento visualmente parecido.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de bolsas personalizadas.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Bolsa de Lona com Alça em PU Personalizada</strong> tem corpo em lona resistente e alças em material sintético (PU), que imita a aparência do couro com custo de produção geralmente menor. Dentro da categoria de ${linkCategoria}, é uma alternativa intermediária entre as bolsas de lona simples e a tote minimalista com alças em couro genuíno.</p>

<h2>Personalização e ocasiões de uso</h2>

<p>A arte é aplicada no corpo de lona da bolsa, com técnica confirmada no orçamento. É indicada para brindes que querem um acabamento mais elaborado que uma bolsa de lona comum, sem o investimento das alças em couro genuíno — bom equilíbrio entre visual e custo por unidade.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento da Bolsa de Lona com Alça em PU.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja mais no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "bolsa-lona-alca-pu-personalizada")}.</p>
`,
};

export const bolsasPilaresProdutoParte1: Post[] = [
  ecobag,
  mochilao,
  toteBag,
  toteBagBlack,
  toteMinimalista,
  bolsaLonaCrua,
  bolsaLonaPreta,
  bolsaLonaAlcaPU,
];
