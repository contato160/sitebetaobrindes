import type { Post } from "../../posts";
import { ctaWhatsAppHtml, produtoLink, categoriaLink } from "../../postBlocks";

const linkCategoria = categoriaLink("Bolsas Personalizadas", "bolsas");
const linkPilarCategoria = `<a href="/blog/guia-completo-bolsas-personalizadas/">guia completo de bolsas personalizadas</a>`;

const shoulderBagTecido: Post = {
  slug: "shoulder-bag-tecido-personalizada-guia",
  titulo: "Shoulder Bag de Tecido Personalizada: Guia Completo, Preço e Como Pedir",
  descricao:
    "Guia da Shoulder Bag de Tecido Personalizada: bolsa transversal compacta com bolso frontal, ocasiões de uso e como pedir com a arte da sua marca.",
  tipo: "pilar-produto",
  categoriaRelacionada: "bolsas",
  produtoRelacionado: "shoulder-bag-tecido-personalizada",
  dataPublicacao: "2026-02-20T18:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "O que cabe nesta shoulder bag?",
      resposta:
        "O compartimento principal com zíper acomoda itens pessoais do dia a dia — celular, carteira, chaves — sendo uma bolsa compacta, não dimensionada para grandes volumes como um mochilão ou tote.",
    },
    {
      pergunta: "Qual a diferença para a versão em neoprene do catálogo?",
      resposta:
        "Esta é em tecido bicolor com bolso frontal extra; a versão em neoprene é toda preta, com visual mais minimalista e um único compartimento com aba. A escolha é de estilo e material.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de bolsas personalizadas.",
    },
    {
      pergunta: "Como é feita a personalização?",
      resposta:
        "A logo é aplicada na face externa da bolsa, com técnica confirmada no orçamento. Você aprova a prova digital antes da produção.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Shoulder Bag de Tecido Personalizada</strong> é uma bolsa transversal compacta, com bolso frontal extra e alça ajustável — pensada para itens pessoais do dia a dia, com as mãos livres. Dentro da categoria de ${linkCategoria}, é indicada para brindes de uso casual e prático.</p>

<h2>Personalização disponível</h2>

<p>A logo é aplicada na face externa da bolsa, com técnica confirmada no orçamento. A produção só começa após você aprovar a prova digital da arte.</p>

<h2>Ocasiões de uso</h2>
<ul>
<li><strong>Brindes de eventos e ativações de marca</strong> — item prático para o participante circular com as mãos livres.</li>
<li><strong>Campanhas com público mais jovem</strong> — formato alinhado a tendências de moda casual.</li>
<li><strong>Presentes de aniversário e datas comemorativas</strong> — para pessoa física que busca um acessório versátil.</li>
<li><strong>Kits de passeio de pousadas</strong> — item leve para levar o essencial durante atividades externas.</li>
</ul>

${ctaWhatsAppHtml("Olá! Quero orçamento da Shoulder Bag de Tecido Personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja mais no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "shoulder-bag-tecido-personalizada")}.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre a Shoulder Bag de Tecido.", "Tirar dúvida pelo WhatsApp")}
`,
};

const shoulderBagNeoprene: Post = {
  slug: "shoulder-bag-neoprene-personalizada-guia",
  titulo: "Shoulder Bag de Neoprene Personalizada: Guia Rápido",
  descricao:
    "Shoulder Bag de Neoprene Personalizada: visual minimalista em material emborrachado, ocasiões de uso e como pedir.",
  tipo: "pilar-produto",
  categoriaRelacionada: "bolsas",
  produtoRelacionado: "shoulder-bag-neoprene-personalizada",
  dataPublicacao: "2026-02-20T19:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual a diferença para a shoulder bag de tecido do catálogo?",
      resposta:
        "Esta é em neoprene, material emborrachado, com visual todo preto e minimalista, único compartimento com aba. A versão de tecido é bicolor, com bolso frontal extra — um formato mais casual e colorido.",
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
<p>A <strong>Shoulder Bag de Neoprene Personalizada</strong> tem visual todo preto e minimalista, com único compartimento fechado por aba — alternativa de material e estilo à shoulder bag de tecido do catálogo. Está na categoria de ${linkCategoria} como opção mais sóbria entre as duas bolsas transversais disponíveis.</p>

<h2>Personalização e ocasiões de uso</h2>

<p>A logo é aplicada na face externa, com técnica confirmada no orçamento. É indicada para brindes com posicionamento mais discreto e minimalista, onde o preto e o material emborrachado combinam melhor com a identidade da marca do que um tecido bicolor.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento da Shoulder Bag de Neoprene Personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Compare com a versão de tecido no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "shoulder-bag-neoprene-personalizada")}.</p>
`,
};

const pocheteLona: Post = {
  slug: "pochete-lona-personalizada-guia",
  titulo: "Pochete de Lona Personalizada: Guia Completo, Preço e Como Pedir",
  descricao:
    "Guia da Pochete de Lona Personalizada: formato de cintura para uso esportivo e casual, ocasiões de uso e como pedir com a marca da sua empresa.",
  tipo: "pilar-produto",
  categoriaRelacionada: "bolsas",
  produtoRelacionado: "pochete-lona-personalizada",
  dataPublicacao: "2026-02-20T20:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Essa pochete serve para uso esportivo?",
      resposta:
        "Sim, o formato de cintura com fivela ajustável é bastante usado em corridas, trilhas e atividades físicas, mantendo as mãos livres — mas também funciona bem para uso casual do dia a dia ou em eventos.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de bolsas personalizadas.",
    },
    {
      pergunta: "Como é feita a personalização?",
      resposta:
        "A logo é aplicada na face externa do compartimento, com técnica confirmada no orçamento. Você aprova a prova digital antes da produção.",
    },
    {
      pergunta: "Essa pochete é indicada para brinde de corrida ou evento esportivo?",
      resposta:
        "Sim, é um dos formatos mais associados a esse uso — kits de corrida, eventos esportivos amadores e academias costumam personalizar pochetes com o nome do evento ou da marca patrocinadora.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Pochete de Lona Personalizada</strong> tem formato de cintura com fivela ajustável, pensada para uso esportivo ou casual com as mãos livres. Dentro da categoria de ${linkCategoria}, é o modelo certo para brindes de corrida, eventos esportivos e uso do dia a dia com praticidade.</p>

<h2>Personalização disponível</h2>

<p>A logo é aplicada na face externa do compartimento, com técnica confirmada no orçamento. A produção só começa após você aprovar a prova digital da arte.</p>

<h2>Ocasiões de uso</h2>
<ul>
<li><strong>Kits de corrida e eventos esportivos</strong> — item prático para carregar itens pessoais durante a atividade.</li>
<li><strong>Academias e estúdios de treino</strong> — brinde de boas-vindas com uso genuíno durante o treino.</li>
<li><strong>Festivais e eventos ao ar livre</strong> — formato prático para circular com as mãos livres.</li>
<li><strong>Presentes para o público mais jovem</strong> — item alinhado a tendências de moda casual.</li>
</ul>

${ctaWhatsAppHtml("Olá! Quero orçamento da Pochete de Lona Personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja mais no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "pochete-lona-personalizada")}.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre a Pochete de Lona.", "Tirar dúvida pelo WhatsApp")}
`,
};

const bolsaAtheta1: Post = {
  slug: "bolsa-atheta-personalizada-1-guia",
  titulo: "Bolsa Atheta Personalizada (Retangular): Guia Completo, Preço e Como Pedir",
  descricao:
    "Guia da Bolsa Atheta Personalizada retangular, com múltiplos bolsos externos: mala de viagem/academia, ocasiões de uso e como pedir.",
  tipo: "pilar-produto",
  categoriaRelacionada: "bolsas",
  produtoRelacionado: "bolsa-atheta-personalizada-1",
  dataPublicacao: "2026-02-20T21:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  howTo: {
    titulo: "Como cuidar da sua Bolsa Atheta Retangular",
    passos: [
      "Limpe a superfície externa com pano levemente úmido, evitando imersão total em água.",
      "Esvazie os bolsos externos periodicamente, verificando itens esquecidos.",
      "Seque à sombra caso a bolsa fique molhada, evitando fonte de calor direta.",
      "Evite sobrecarga além da capacidade indicada, para não forçar zíperes e alças.",
    ],
  },
  faq: [
    {
      pergunta: "Quantos compartimentos esta bolsa tem?",
      resposta:
        "O modelo retangular tem múltiplos bolsos externos além do compartimento principal — um bolso com aba na lateral e outro com zíper na frente, além do compartimento principal fechado por zíper duplo, útil para organizar itens separadamente durante viagens ou uso na academia.",
    },
    {
      pergunta: "Qual a diferença para o outro modelo de Bolsa Atheta do catálogo?",
      resposta:
        "Este é retangular, estruturado, com múltiplos bolsos externos organizados. O outro modelo é cilíndrico (formato barril), mais associado a kits de formatura que combinam mala + nécessaire com a mesma identidade visual.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de bolsas personalizadas.",
    },
    {
      pergunta: "Como é feita a personalização?",
      resposta:
        "A logo é aplicada no corpo da bolsa, com técnica confirmada no orçamento. Você aprova a prova digital antes da produção.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, contados a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Bolsa Atheta Personalizada</strong> em formato retangular tem múltiplos bolsos externos organizados, além do compartimento principal com zíper duplo — uma mala de mão versátil para viagem, academia ou uso de fim de semana. Dentro da categoria de ${linkCategoria}, é o modelo mais estruturado e organizacional entre as bolsas do catálogo.</p>

<h2>Personalização disponível</h2>

<p>A logo é aplicada no corpo da bolsa, com técnica confirmada no orçamento. A produção só começa após você aprovar a prova digital da arte.</p>

<h2>Ocasiões de uso</h2>
<ul>
<li><strong>Kits de academia e treino</strong> — os bolsos externos separam roupa suja, tênis e itens de higiene.</li>
<li><strong>Viagens de fim de semana</strong> — volume e organização adequados para pernoites curtos.</li>
<li><strong>Brindes corporativos de maior valor percebido</strong> — peça robusta com boa percepção de qualidade.</li>
<li><strong>Presentes práticos para o dia a dia</strong> — para quem viaja ou treina com frequência.</li>
</ul>

${ctaWhatsAppHtml("Olá! Quero orçamento da Bolsa Atheta Personalizada (retangular).", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Compare os dois modelos no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "bolsa-atheta-personalizada-1")}.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre a Bolsa Atheta Retangular.", "Tirar dúvida pelo WhatsApp")}
`,
};

const bolsaAtheta2: Post = {
  slug: "bolsa-atheta-personalizada-2-guia",
  titulo: "Bolsa Atheta Personalizada (Cilíndrica): Guia Completo, Preço e Como Pedir",
  descricao:
    "Guia da Bolsa Atheta Personalizada cilíndrica, comum em kits de formatura: como funciona o kit combinando mala e nécessaire, ocasiões de uso e como pedir.",
  tipo: "pilar-produto",
  categoriaRelacionada: "bolsas",
  produtoRelacionado: "bolsa-atheta-personalizada-2",
  dataPublicacao: "2026-02-20T22:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  howTo: {
    titulo: "Como cuidar da sua Bolsa Atheta Cilíndrica",
    passos: [
      "Limpe a superfície externa com pano levemente úmido, evitando imersão total em água.",
      "Esvazie os bolsos laterais periodicamente, verificando itens esquecidos.",
      "Seque à sombra caso a bolsa fique molhada, evitando fonte de calor direta.",
      "Guarde pendurada pela alça de mão quando possível, para preservar o formato cilíndrico.",
    ],
  },
  faq: [
    {
      pergunta: "Essa bolsa é vendida junto com uma nécessaire?",
      resposta:
        "A bolsa em si é vendida separadamente, mas é comum montar um kit combinando esta mala cilíndrica com uma nécessaire da mesma arte — um formato recorrente em kits de formatura, onde a turma recebe a mala e a nécessaire com a mesma identidade visual (nome da turma, curso, instituição).",
    },
    {
      pergunta: "Qual a diferença para o outro modelo de Bolsa Atheta do catálogo?",
      resposta:
        "Este é cilíndrico (formato barril), com pontas arredondadas e bolsos laterais. O outro modelo é retangular, com bolsos externos mais organizados — os dois cumprem função de mala de mão, mas com visual e proposta diferentes.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de bolsas personalizadas.",
    },
    {
      pergunta: "Como é feita a personalização?",
      resposta:
        "A arte — geralmente nome de turma, curso e instituição em kits de formatura — é aplicada no corpo cilíndrico da bolsa. Você aprova a prova digital antes da produção.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, contados a partir da aprovação da arte enviada.",
    },
    {
      pergunta: "Essa bolsa é indicada só para formatura de medicina?",
      resposta:
        "Não, apesar de ser um exemplo comum, o formato atende qualquer curso ou evento que queira uma mala personalizada em kit — enfermagem, direito, engenharia, ou até brindes corporativos de equipe que buscam esse mesmo formato robusto.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Bolsa Atheta Personalizada</strong> em formato cilíndrico (barril), com pontas arredondadas e bolsos laterais, é um dos modelos mais associados a kits de formatura — comum como mala combinada com uma nécessaire da mesma arte, formando um kit completo para a turma. Dentro da categoria de ${linkCategoria}, é a escolha certa quando o brinde precisa ter presença visual forte em um evento de celebração.</p>

<h2>O kit de formatura: mala + nécessaire</h2>

<p>Um uso recorrente deste modelo é compor um kit junto com uma nécessaire da categoria de necessaires do catálogo, ambas com a mesma arte — nome da turma, curso, instituição e ano de formatura. Esse tipo de kit é comum em formaturas de cursos como medicina, enfermagem, direito e engenharia, mas não é exclusivo a nenhum curso específico.</p>

<h2>Personalização disponível</h2>

<p>A arte é aplicada no corpo cilíndrico da bolsa, respeitando os bolsos laterais e a alça de transporte. A produção só começa após você aprovar a prova digital, o que é especialmente importante em kits de formatura, onde a arte costuma ter várias linhas de texto (nome do curso, turma, instituição).</p>

<h2>Ocasiões de uso</h2>
<ul>
<li><strong>Kits de formatura</strong> — o uso mais recorrente deste modelo, muitas vezes combinado com nécessaire.</li>
<li><strong>Brindes corporativos de equipe</strong> — quando o objetivo é uma mala robusta com boa presença visual.</li>
<li><strong>Viagens curtas e academia</strong> — mesmo fora do contexto de formatura, funciona como mala de mão prática.</li>
<li><strong>Presentes de encerramento de curso ou treinamento</strong> — marca o fim de um ciclo com um item de uso real.</li>
</ul>

${ctaWhatsAppHtml("Olá! Quero orçamento da Bolsa Atheta Personalizada (cilíndrica) para kit de formatura.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Compare os dois modelos no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "bolsa-atheta-personalizada-2")}.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre a Bolsa Atheta Cilíndrica.", "Tirar dúvida pelo WhatsApp")}
`,
};

const bolsaTransporteRoupas: Post = {
  slug: "bolsa-transporte-roupas-personalizada-guia",
  titulo: "Bolsa de Transporte para Roupas Personalizada: Guia Completo, Preço e Como Pedir",
  descricao:
    "Guia da Bolsa de Transporte para Roupas Personalizada: mala plana para roupas dobradas, ocasiões de uso e como pedir com a marca da sua empresa.",
  tipo: "pilar-produto",
  categoriaRelacionada: "bolsas",
  produtoRelacionado: "bolsa-transporte-roupas-personalizada",
  dataPublicacao: "2026-02-20T23:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Como essa bolsa transporta roupas sem amassar?",
      resposta:
        "O formato plano e espaçoso comporta peças dobradas de forma organizada, distribuindo melhor o espaço do que uma mala comum de compartimento único — não elimina totalmente o amassado, mas reduz bastante frente a compactar roupas em uma mochila ou mala redonda.",
    },
    {
      pergunta: "Essa bolsa é indicada para qual tipo de negócio?",
      resposta:
        "É um item de nicho, usado por marcas de moda, ateliês de costura, lojas de roupas e serviços de lavanderia/passadoria que precisam entregar ou transportar peças de vestuário para clientes de forma organizada e com a marca aplicada.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de bolsas personalizadas.",
    },
    {
      pergunta: "Como é feita a personalização?",
      resposta:
        "A logo é aplicada na face externa, com técnica confirmada no orçamento. Você aprova a prova digital antes da produção.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Bolsa de Transporte para Roupas Personalizada</strong> é uma mala plana e espaçosa, pensada para transportar roupas dobradas de forma organizada — um item de nicho dentro da categoria de ${linkCategoria}, relevante especificamente para negócios ligados à moda e vestuário.</p>

<h2>Para quem este produto faz sentido</h2>

<p>É um item usado por marcas de roupa, ateliês de costura e serviços de lavanderia ou passadoria que entregam peças de vestuário a clientes — a bolsa personalizada com a marca vira parte da experiência de entrega, reforçando a identidade visual do negócio a cada peça devolvida ou vendida.</p>

<h2>Personalização disponível</h2>

<p>A logo é aplicada na face externa da bolsa, com técnica confirmada no orçamento. A produção só começa após você aprovar a prova digital da arte.</p>

<h2>Ocasiões de uso</h2>
<ul>
<li><strong>Marcas de moda e ateliês</strong> — embalagem de entrega personalizada para clientes.</li>
<li><strong>Serviços de lavanderia e passadoria</strong> — transporte organizado de peças entre cliente e estabelecimento.</li>
<li><strong>Brindes para consultores de moda e personal stylists</strong> — item alinhado à natureza do serviço prestado.</li>
<li><strong>Uso pessoal para viagens</strong> — quem viaja com roupas sociais e quer evitar amassados.</li>
</ul>

${ctaWhatsAppHtml("Olá! Quero orçamento da Bolsa de Transporte para Roupas Personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja mais no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "bolsa-transporte-roupas-personalizada")}.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre a Bolsa de Transporte para Roupas.", "Tirar dúvida pelo WhatsApp")}
`,
};

const bolsaPuffer: Post = {
  slug: "bolsa-puffer-personalizada-guia",
  titulo: "Bolsa Puffer Personalizada: Guia Rápido",
  descricao:
    "Bolsa Puffer Personalizada: acabamento acolchoado e volumoso, ocasiões de uso e como pedir com a arte da sua marca.",
  tipo: "pilar-produto",
  categoriaRelacionada: "bolsas",
  produtoRelacionado: "bolsa-puffer-personalizada",
  dataPublicacao: "2026-02-21T09:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "O que significa o acabamento 'puffer' desta bolsa?",
      resposta:
        "É um acabamento acolchoado, com costuras em blocos que criam volume na superfície — o mesmo efeito visual usado em jaquetas puffer, dando um toque casual e moderno à bolsa, com boa capacidade de carga.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de bolsas personalizadas.",
    },
    {
      pergunta: "Como é feita a personalização?",
      resposta:
        "A logo é aplicada na face externa, com técnica confirmada no orçamento — a superfície acolchoada pode exigir um posicionamento específico de arte, avaliado na prova digital.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Bolsa Puffer Personalizada</strong> tem acabamento acolchoado, com costuras em blocos que criam volume na superfície — o mesmo efeito visual de uma jaqueta puffer, aplicado a uma bolsa grande de alças duplas. Está na categoria de ${linkCategoria} como a opção de visual mais casual e moderno entre as bolsas de maior volume do catálogo.</p>

<h2>Personalização e ocasiões de uso</h2>

<p>A arte é aplicada na face externa da bolsa, técnica confirmada no orçamento conforme a superfície acolchoada específica. É indicada para brindes com público mais jovem, marcas de lifestyle e streetwear, ou qualquer contexto onde o acabamento puffer reforça uma estética atual e destacada frente a bolsas de tecido liso.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento da Bolsa Puffer Personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja mais no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "bolsa-puffer-personalizada")}.</p>
`,
};

export const bolsasPilaresProdutoParte2: Post[] = [
  shoulderBagTecido,
  shoulderBagNeoprene,
  pocheteLona,
  bolsaAtheta1,
  bolsaAtheta2,
  bolsaTransporteRoupas,
  bolsaPuffer,
];
