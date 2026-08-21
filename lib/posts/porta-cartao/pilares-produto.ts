import type { Post } from "../../posts";
import { ctaWhatsAppHtml, produtoLink, categoriaLink } from "../../postBlocks";

const linkCategoria = categoriaLink("Porta-cartões Personalizados", "porta-cartao");
const linkPilarCategoria = `<a href="/blog/guia-completo-porta-cartoes-personalizados/">guia completo de porta-cartões personalizados</a>`;

const portaCartaoCouro1: Post = {
  slug: "porta-cartao-couro-personalizado-1-guia",
  titulo: "Porta-Cartão em Couro Personalizado (Aberto): Guia Completo",
  descricao:
    "Guia do Porta-Cartão em Couro Personalizado, formato aberto com slots visíveis: personalização, ocasiões de uso e como pedir com a marca da sua empresa.",
  tipo: "pilar-produto",
  categoriaRelacionada: "porta-cartao",
  produtoRelacionado: "porta-cartao-couro-personalizado-1",
  dataPublicacao: "2026-02-16T10:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  howTo: {
    titulo: "Como cuidar do seu Porta-Cartão em Couro",
    passos: [
      "Limpe com pano seco ou levemente úmido, evitando álcool ou solventes sobre o couro.",
      "Aplique hidratante de couro a cada poucos meses, para manter a flexibilidade do material.",
      "Evite deixar na traseira da calça sentando por longos períodos, o que pode deformar a peça com o tempo.",
      "Evite exposição prolongada ao sol, que resseca e desbota o couro.",
    ],
  },
  faq: [
    {
      pergunta: "Quantos cartões este porta-cartão comporta?",
      resposta:
        "O formato aberto tem dois slots visíveis na face frontal, além de um compartimento traseiro mais amplo — na prática, comporta de 4 a 6 cartões confortavelmente, dependendo da espessura de cada um.",
    },
    {
      pergunta: "Qual a diferença para o outro porta-cartão de couro do catálogo?",
      resposta:
        "Este é aberto, com os slots visíveis na parte frontal. O outro modelo é fechado no formato bifold (dobra ao meio como uma mini carteira), protegendo os cartões de forma mais discreta.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de porta-cartões.",
    },
    {
      pergunta: "Como é feita a personalização?",
      resposta:
        "A logo é gravada ou aplicada na face externa do couro, respeitando os slots. Você aprova a prova digital antes da produção.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>O <strong>Porta-Cartão em Couro Personalizado</strong> em formato aberto tem dois slots visíveis na face frontal e um compartimento mais amplo na traseira, comportando de 4 a 6 cartões confortavelmente. Dentro da categoria de ${linkCategoria}, é um dos modelos mais diretos e versáteis — fácil de personalizar e de baixo volume para carregar no bolso.</p>

<h2>Personalização disponível</h2>

<p>A logo da empresa é gravada ou aplicada na face externa do couro, com área de aplicação que respeita os slots visíveis, sem cobri-los. Você aprova uma prova digital antes de qualquer unidade entrar em produção.</p>

<h2>Ocasiões de uso</h2>
<ul>
<li><strong>Brindes corporativos de fim de ano</strong> — item de bolso clássico, baixo custo por unidade e alta utilidade.</li>
<li><strong>Kits de boas-vindas para novos colaboradores</strong> — reforça a marca da empresa em item de uso diário.</li>
<li><strong>Presentes de formatura</strong> — peça prática e discreta para quem está começando a vida profissional.</li>
<li><strong>Brindes para eventos e feiras</strong> — fácil de distribuir em volume, ocupa pouco espaço em caixas de transporte.</li>
</ul>

${ctaWhatsAppHtml("Olá! Quero orçamento do Porta-Cartão em Couro Personalizado (aberto).", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Compare os modelos no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "porta-cartao-couro-personalizado-1")}.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre o Porta-Cartão em Couro.", "Tirar dúvida pelo WhatsApp")}
`,
};

const portaCartaoCouro2: Post = {
  slug: "porta-cartao-couro-personalizado-2-guia",
  titulo: "Porta-Cartão em Couro Personalizado (Bifold): Guia Rápido",
  descricao:
    "Porta-Cartão em Couro Personalizado formato bifold, que dobra ao meio como uma mini carteira: ocasiões de uso e como pedir.",
  tipo: "pilar-produto",
  categoriaRelacionada: "porta-cartao",
  produtoRelacionado: "porta-cartao-couro-personalizado-2",
  dataPublicacao: "2026-02-16T11:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Como funciona o formato bifold deste porta-cartão?",
      resposta:
        "A peça dobra ao meio, como uma mini carteira, protegendo os cartões dos dois lados internos — diferente do modelo aberto, que deixa os slots visíveis mesmo fechado.",
    },
    {
      pergunta: "Qual a diferença para o outro modelo de couro do catálogo?",
      resposta:
        "O outro modelo é aberto, com slots visíveis na frente. Este é fechado, dobrando ao meio para proteger os cartões de forma mais discreta — visual mais próximo de uma carteira tradicional compacta.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de porta-cartões.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>O <strong>Porta-Cartão em Couro Personalizado</strong> em formato bifold dobra ao meio, como uma mini carteira, protegendo os cartões dos dois lados internos. Está na categoria de ${linkCategoria} como a versão fechada e mais discreta entre os dois modelos de couro do catálogo.</p>

<h2>Personalização e ocasiões de uso</h2>

<p>A logo é aplicada na face externa, visível quando a peça está fechada — o formato mais comum de exposição de marca nesse tipo de produto. Funciona nos mesmos contextos do modelo aberto (brindes corporativos, kits de boas-vindas, presentes de formatura), sendo a escolha certa para quem prefere um visual mais próximo de carteira tradicional compacta.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento do Porta-Cartão em Couro Personalizado (bifold).", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Compare os modelos no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "porta-cartao-couro-personalizado-2")}.</p>
`,
};

const portaCartaoSintetico: Post = {
  slug: "porta-cartao-sintetico-personalizado-guia",
  titulo: "Porta-Cartão Sintético Personalizado: Guia Rápido",
  descricao:
    "Porta-Cartão Sintético Personalizado: alternativa de menor custo ao couro, ocasiões de uso e como pedir com a arte da sua marca.",
  tipo: "pilar-produto",
  categoriaRelacionada: "porta-cartao",
  produtoRelacionado: "porta-cartao-sintetico-personalizado",
  dataPublicacao: "2026-02-16T12:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual a diferença entre o material sintético e o couro?",
      resposta:
        "O sintético é um material que imita a aparência do couro por um custo de produção geralmente menor, mantendo o mesmo formato aberto de slots. É a escolha indicada quando o orçamento por unidade é uma variável decisiva para viabilizar o pedido em volume maior.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de porta-cartões.",
    },
    {
      pergunta: "Como é feita a personalização?",
      resposta: "A logo é aplicada na face externa da peça, com técnica confirmada no orçamento.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>O <strong>Porta-Cartão Sintético Personalizado</strong> é a alternativa de material sintético dentro da categoria de ${linkCategoria}, com o mesmo formato aberto de slots visto no modelo em couro, mas com custo de produção geralmente menor — indicado para pedidos em volume maior onde o orçamento por unidade pesa na decisão.</p>

<h2>Personalização e ocasiões de uso</h2>

<p>A arte é aplicada na face externa, técnica confirmada no orçamento conforme o acabamento sintético específico. É indicado para brindes de distribuição ampla — feiras, eventos com muitos participantes, campanhas corporativas de grande alcance — onde o objetivo é maximizar o número de pessoas atendidas dentro de um orçamento definido.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento do Porta-Cartão Sintético Personalizado.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja mais no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "porta-cartao-sintetico-personalizado")}.</p>
`,
};

const portaCartaoCosturado: Post = {
  slug: "porta-cartao-costurado-personalizado-guia",
  titulo: "Porta-Cartão Costurado Personalizado: Guia Completo, Preço e Como Pedir",
  descricao:
    "Guia do Porta-Cartão Costurado Personalizado, com costura decorativa em relevo: personalização, ocasiões de uso e como pedir com a marca da sua empresa.",
  tipo: "pilar-produto",
  categoriaRelacionada: "porta-cartao",
  produtoRelacionado: "porta-cartao-costurado-personalizado",
  dataPublicacao: "2026-02-16T13:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "O que diferencia este modelo dos demais porta-cartões?",
      resposta:
        "A costura decorativa em relevo, num padrão chevron (formato de V empilhados), que dá textura e um diferencial visual à peça — os demais modelos do catálogo têm acabamento liso, sem esse detalhe de costura.",
    },
    {
      pergunta: "A costura decorativa atrapalha a aplicação da logo?",
      resposta:
        "Não, a logo é aplicada numa área específica que respeita o padrão de costura, geralmente na parte superior da peça — a prova digital mostra exatamente como a arte fica posicionada em relação à costura decorativa antes da produção.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de porta-cartões.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>O <strong>Porta-Cartão Costurado Personalizado</strong> tem costura decorativa em relevo, num padrão chevron que dá textura e destaque visual à peça — um diferencial sobre os modelos de acabamento liso do catálogo. Está na categoria de ${linkCategoria} como a opção com mais personalidade de design entre os porta-cartões disponíveis.</p>

<h2>Personalização disponível</h2>

<p>A logo é aplicada numa área específica que respeita o padrão de costura decorativa, geralmente na parte superior da peça, sem competir visualmente com o relevo do chevron. A prova digital mostra exatamente esse posicionamento antes da produção.</p>

<h2>Ocasiões de uso</h2>
<ul>
<li><strong>Brindes com apelo de design</strong> — quando o objetivo é um brinde corporativo com visual mais elaborado que o padrão do mercado.</li>
<li><strong>Presentes pessoais</strong> — para quem quer um porta-cartão com identidade visual própria, além da simples personalização de logo.</li>
<li><strong>Kits de fim de ano com upgrade de padrão</strong> — alternativa mais sofisticada aos modelos lisos, para clientes ou lideranças.</li>
</ul>

${ctaWhatsAppHtml("Olá! Quero orçamento do Porta-Cartão Costurado Personalizado.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja mais no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "porta-cartao-costurado-personalizado")}.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre o Porta-Cartão Costurado.", "Tirar dúvida pelo WhatsApp")}
`,
};

const portaNotas: Post = {
  slug: "porta-notas-personalizado-guia",
  titulo: "Porta-Notas Personalizado: Guia Completo, Preço e Como Pedir",
  descricao:
    "Guia do Porta-Notas Personalizado, com fecho de botão para guardar dinheiro e cartões: ocasiões de uso, cuidados e como pedir.",
  tipo: "pilar-produto",
  categoriaRelacionada: "porta-cartao",
  produtoRelacionado: "porta-notas-personalizado",
  dataPublicacao: "2026-02-16T14:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual a diferença entre este produto e os demais porta-cartões?",
      resposta:
        "O porta-notas tem formato de envelope com fecho de botão de pressão, pensado para guardar notas de dinheiro dobradas junto com cartões — os demais modelos da categoria são focados só em cartões, sem essa função de guardar espécie.",
    },
    {
      pergunta: "Quantas notas e cartões cabem neste porta-notas?",
      resposta:
        "O compartimento comporta um maço de notas dobradas ao meio, mais alguns cartões — não é dimensionado para grandes volumes, funcionando melhor como carteira compacta de uso rápido, não como carteira principal do dia a dia.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de porta-cartões.",
    },
    {
      pergunta: "Como é feita a personalização?",
      resposta:
        "A logo é aplicada na face externa da aba, ficando visível mesmo com o porta-notas fechado. Você aprova a prova digital antes da produção.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>O <strong>Porta-Notas Personalizado</strong> tem formato de envelope com fecho de botão de pressão, pensado para guardar notas de dinheiro dobradas junto com alguns cartões. Dentro da categoria de ${linkCategoria}, é o único modelo pensado especificamente para espécie, não só cartões — uma opção prática para quem ainda lida com dinheiro físico no dia a dia.</p>

<h2>Personalização disponível</h2>

<p>A logo é aplicada na face externa da aba de fechamento, ficando visível mesmo com a peça fechada pelo botão de pressão — um bom espaço de exposição de marca, já que essa é a parte que fica à mostra na maior parte do tempo.</p>

<h2>Ocasiões de uso</h2>
<ul>
<li><strong>Brindes para feiras e eventos com transações em dinheiro</strong> — ambulantes, food trucks, feiras de artesanato que ainda recebem em espécie com frequência.</li>
<li><strong>Presentes práticos do dia a dia</strong> — para quem prefere uma carteira compacta em vez de uma carteira tradicional volumosa.</li>
<li><strong>Brindes corporativos de fim de ano</strong> — alternativa ao porta-cartão simples, com função extra de guardar dinheiro.</li>
</ul>

${ctaWhatsAppHtml("Olá! Quero orçamento do Porta-Notas Personalizado.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja mais no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "porta-notas-personalizado")}.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre o Porta-Notas Personalizado.", "Tirar dúvida pelo WhatsApp")}
`,
};

const carteiraSlim: Post = {
  slug: "carteira-slim-couro-personalizada-guia",
  titulo: "Carteira Slim em Couro Personalizada: Guia Completo, Preço e Como Pedir",
  descricao:
    "Guia da Carteira Slim em Couro Personalizada: o modelo mais completo da categoria de porta-cartões, com fole interno para mais cartões e perfil discreto.",
  tipo: "pilar-produto",
  categoriaRelacionada: "porta-cartao",
  produtoRelacionado: "carteira-slim-couro-personalizada",
  dataPublicacao: "2026-08-21T09:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  howTo: {
    titulo: "Como cuidar da sua Carteira Slim em Couro",
    passos: [
      "Limpe com pano seco ou levemente úmido, evitando álcool e solventes sobre o couro.",
      "Aplique hidratante de couro a cada poucos meses para manter a flexibilidade do fole interno.",
      "Evite sobrecarregar além da capacidade indicada, para não forçar as costuras do fole.",
      "Evite exposição prolongada ao sol, que resseca e desbota o couro com o tempo.",
    ],
  },
  faq: [
    {
      pergunta: "Quantos cartões a carteira slim comporta?",
      resposta:
        "Graças ao fole interno — a estrutura sanfonada que expande a capacidade sem aumentar muito o volume externo —, a carteira slim comporta mais cartões que um porta-cartão aberto comum, mantendo ainda assim um perfil discreto no bolso.",
    },
    {
      pergunta: "Está disponível em quais cores?",
      resposta:
        "O modelo aparece em opções que vão do marrom e preto tradicionais a tons mais específicos como azul-marinho — a disponibilidade exata de cada cor no momento do seu pedido é confirmada no orçamento, já que pode variar conforme o lote em estoque.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de porta-cartões personalizados.",
    },
    {
      pergunta: "Como é feita a personalização desta carteira?",
      resposta:
        "A logo é aplicada na face externa do couro, com técnica confirmada no orçamento. Você aprova a prova digital antes de qualquer unidade entrar em produção.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, contados a partir da aprovação da arte enviada.",
    },
    {
      pergunta: "Por que escolher esta carteira em vez de um porta-cartão simples?",
      resposta:
        "Quando quem recebe o brinde carrega mais que 4-5 cartões no dia a dia (documento, cartões de crédito, cartões de fidelidade), o fole interno da carteira slim resolve um problema real que os porta-cartões abertos não resolvem — mais capacidade sem abrir mão de um perfil compacto.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Carteira Slim em Couro Personalizada</strong> é o modelo mais completo dentro da categoria de ${linkCategoria} — um fole interno (estrutura sanfonada) expande a capacidade de cartões sem comprometer o perfil discreto da peça no bolso. É a escolha certa para quem carrega mais cartões que um porta-cartão aberto comum consegue acomodar.</p>

<h2>Por que o fole interno faz diferença</h2>

<p>Porta-cartões abertos comuns têm dois ou três slots fixos — funcionam bem para quem carrega poucos cartões, mas ficam apertados ou perdem cartões facilmente quando o número aumenta. O fole desta carteira se expande conforme a quantidade de cartões guardados, mantendo tudo organizado e no lugar, sem que a peça fique visivelmente "inchada" no bolso quando não está cheia.</p>

<h2>Personalização disponível</h2>

<p>A logo da empresa é aplicada na face externa do couro. Você aprova uma prova digital da arte antes de qualquer unidade entrar em produção, garantindo que o posicionamento saia exatamente como esperado.</p>

<h2>Ocasiões de uso</h2>
<ul>
<li><strong>Brindes corporativos de maior valor percebido</strong> — a estrutura mais elaborada justifica um brinde de "próximo nível" frente a porta-cartões simples.</li>
<li><strong>Kits de boas-vindas para executivos</strong> — peça prática e discreta para quem carrega vários cartões corporativos.</li>
<li><strong>Presentes de formatura e aniversário</strong> — presente pessoal com utilidade real e boa durabilidade.</li>
<li><strong>Substituição de carteira tradicional</strong> — para quem quer reduzir o volume que carrega no bolso sem abrir mão de capacidade.</li>
</ul>

<h2>Comparando com os demais porta-cartões do catálogo</h2>

<p>Os outros cinco modelos da categoria priorizam simplicidade e baixo custo por unidade; esta carteira slim prioriza capacidade e um acabamento mais elaborado (fole interno, mais de uma opção de cor), sendo a escolha certa quando o brinde precisa comunicar um pouco mais de cuidado do que um porta-cartão básico.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento da Carteira Slim em Couro Personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja o comparativo completo no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "carteira-slim-couro-personalizada")}.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre a Carteira Slim em Couro.", "Tirar dúvida pelo WhatsApp")}
`,
};

export const portaCartaoPilaresProduto: Post[] = [
  portaCartaoCouro1,
  portaCartaoCouro2,
  portaCartaoSintetico,
  portaCartaoCosturado,
  portaNotas,
  carteiraSlim,
];
