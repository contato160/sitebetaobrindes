import type { Post } from "../../posts";
import { getImagemProduto } from "../../imagens";
import { ctaWhatsAppHtml, produtoLink, pilarProdutoLink, categoriaLink } from "../../postBlocks";

const linkCategoria = categoriaLink("Porta-cartões Personalizados", "porta-cartao");
const linkPilarCategoria = `<a href="/blog/guia-completo-porta-cartoes-personalizados/">guia completo de porta-cartões personalizados</a>`;

function produtoComPilar(nome: string, slugVenda: string, slugPilar: string) {
  return `${produtoLink(nome, slugVenda)} (veja também o ${pilarProdutoLink("guia completo do produto", slugPilar)})`;
}

const couro1Link = produtoComPilar("Porta-Cartão em Couro Personalizado (Aberto)", "porta-cartao-couro-personalizado-1", "porta-cartao-couro-personalizado-1-guia");
const couro2Link = produtoComPilar("Porta-Cartão em Couro Personalizado (Bifold)", "porta-cartao-couro-personalizado-2", "porta-cartao-couro-personalizado-2-guia");
const sinteticoLink = produtoComPilar("Porta-Cartão Sintético Personalizado", "porta-cartao-sintetico-personalizado", "porta-cartao-sintetico-personalizado-guia");
const costuradoLink = produtoComPilar("Porta-Cartão Costurado Personalizado", "porta-cartao-costurado-personalizado", "porta-cartao-costurado-personalizado-guia");
const notasLink = produtoComPilar("Porta-Notas Personalizado", "porta-notas-personalizado", "porta-notas-personalizado-guia");
const carteiraSlimLink = produtoComPilar("Carteira Slim em Couro Personalizada", "carteira-slim-couro-personalizada", "carteira-slim-couro-personalizada-guia");

const preco: Post = {
  slug: "quanto-custa-porta-cartao-personalizado-tabela-precos",
  titulo: "Quanto Custa Porta-cartão Personalizado? Tabela de Preços por Modelo",
  descricao:
    "Como o preço varia entre porta-cartão de couro, sintético, costurado e a carteira slim personalizados, por quantidade.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "porta-cartao",
  imagemCapa: getImagemProduto("porta-cartao-sintetico-personalizado"),
  produtosRelacionados: ["porta-cartao-sintetico-personalizado", "porta-cartao-couro-personalizado-1", "carteira-slim-couro-personalizada"],
  dataPublicacao: "2026-03-01T09:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "O porta-cartão sintético é sempre a opção mais barata?",
      resposta:
        "Costuma ser a entrada de preço da categoria, mas a diferença para os modelos de couro não é tão grande quanto se imagina — vale comparar as faixas antes de decidir só pelo custo.",
    },
  ],
  conteudoHtml: `
<p>A categoria de ${linkCategoria} reúne seis modelos de material e complexidade diferentes, com faixas de preço variadas.</p>

<h2>O que influencia o preço entre os modelos</h2>

<p>O ${sinteticoLink} costuma ser a opção de entrada em preço. Os modelos de couro, como o ${couro1Link}, e a mais completa ${carteiraSlimLink}, com fole para múltiplos cartões, têm custo de material e costura mais elevado, refletido no preço final.</p>

<h2>Como decidir com base no orçamento</h2>

<p>Para brindes de distribuição ampla, o modelo sintético rende mais peças pelo mesmo orçamento. Para brindes de maior percepção de valor, como presentes corporativos a clientes ou parceiros, os modelos de couro justificam o investimento maior.</p>

${ctaWhatsAppHtml("Olá! Quero saber o preço dos porta-cartões personalizados.", "Consultar preço agora pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para comparar os seis modelos em detalhe.</p>
`,
};

const comparacaoTecnicas: Post = {
  slug: "porta-cartao-couro-vs-sintetico-qual-escolher",
  titulo: "Porta-Cartão de Couro vs Sintético: Qual Escolher?",
  descricao:
    "Diferenças entre o porta-cartão de couro legítimo/sintético e o modelo sintético mais econômico, e qual escolher conforme o objetivo.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "porta-cartao",
  imagemCapa: getImagemProduto("porta-cartao-couro-personalizado-1"),
  produtosRelacionados: ["porta-cartao-couro-personalizado-1", "porta-cartao-sintetico-personalizado"],
  dataPublicacao: "2026-03-01T10:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "O porta-cartão sintético parece 'mais barato' visualmente?",
      resposta:
        "O acabamento é bem trabalhado e não costuma parecer inferior à primeira vista — a diferença aparece mais na textura ao toque e na durabilidade a longo prazo do que na aparência inicial.",
    },
  ],
  conteudoHtml: `
<p>Dentro de ${linkCategoria}, a escolha entre couro e sintético é uma das mais recorrentes. Veja as diferenças.</p>

<h2>${couro1Link}: couro</h2>

<p>Tem uma textura mais nobre ao toque e tende a envelhecer bem com o uso, ganhando um aspecto naturalmente desgastado que muitos consideram parte do charme da peça. É a escolha mais indicada para brindes de maior percepção de valor.</p>

<h2>${sinteticoLink}: sintético</h2>

<p>Com acabamento visualmente similar ao couro, mas custo mais acessível, é uma boa opção para brindes de distribuição em maior volume, onde o orçamento por peça é mais restrito.</p>

<h2>Qual escolher</h2>

<p>Se o brinde é para reforço de marca em grande escala (feiras, eventos com muitos participantes), o sintético atende bem. Se é para um público mais seleto (diretoria, clientes VIP), o couro tende a ser mais valorizado.</p>

${ctaWhatsAppHtml("Olá! Quero entender a diferença entre porta-cartão de couro e sintético.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais detalhes sobre os materiais.</p>
`,
};

const guiaOcasiao: Post = {
  slug: "porta-cartao-personalizado-formatura-networking-guia",
  titulo: "Porta-Cartão Personalizado para Formatura e Eventos de Networking: Guia",
  descricao:
    "Como escolher o modelo de porta-cartão personalizado para formaturas, eventos de networking e feiras de negócios.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "porta-cartao",
  imagemCapa: getImagemProduto("porta-cartao-costurado-personalizado"),
  produtosRelacionados: ["porta-cartao-costurado-personalizado", "carteira-slim-couro-personalizada"],
  dataPublicacao: "2026-03-01T11:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Porta-cartão é um bom brinde para eventos de networking?",
      resposta:
        "Sim, é um dos brindes mais associados a esse contexto, já que o próprio uso do produto (guardar cartões de visita) reforça o propósito do evento.",
    },
  ],
  conteudoHtml: `
<p>O porta-cartão é um clássico de brinde corporativo — dentro de ${linkCategoria}, veja qual modelo combina com cada ocasião.</p>

<h2>Para formatura</h2>

<p>A ${carteiraSlimLink}, por também funcionar como carteira compacta, é uma escolha versátil de presente de formatura — um item que o formando vai usar no dia a dia profissional, não só para cartões de visita.</p>

<h2>Para eventos de networking e feiras</h2>

<p>O ${costuradoLink}, com acabamento resistente ao manuseio frequente, é indicado para distribuir a participantes de feiras e eventos, reforçando a marca da empresa em um item de uso direto durante o evento (troca de cartões).</p>

<h2>Como brinde de fim de ano</h2>

<p>Empresas costumam distribuir porta-cartões personalizados como brinde de fim de ano para clientes e parceiros, aproveitando o início do novo ano para reforçar a marca em um item de uso profissional constante.</p>

${ctaWhatsAppHtml("Olá! Quero pedir porta-cartões personalizados para um evento.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais ideias por ocasião.</p>
`,
};

const b2b: Post = {
  slug: "porta-cartao-personalizado-brinde-corporativo-empresas",
  titulo: "Porta-Cartão Personalizado como Brinde Corporativo: Guia para Empresas",
  descricao:
    "Como empresas usam o porta-cartão de couro e o porta-notas personalizados como brinde institucional para clientes e equipe.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "porta-cartao",
  imagemCapa: getImagemProduto("porta-cartao-couro-personalizado-2"),
  produtosRelacionados: ["porta-cartao-couro-personalizado-2", "porta-notas-personalizado"],
  dataPublicacao: "2026-03-01T12:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Porta-notas também funciona como brinde corporativo?",
      resposta:
        "Sim, é um item associado a organização financeira pessoal, funcionando bem como brinde institucional para clientes de bancos, corretoras e empresas do setor financeiro.",
    },
  ],
  conteudoHtml: `
<p>Dentro de ${linkCategoria}, os modelos de couro e o porta-notas são frequentemente usados como brinde institucional formal.</p>

<h2>Brinde para clientes e parceiros</h2>

<p>O ${couro2Link}, no formato bifold, tem um perfil mais discreto e elegante, adequado para brindes de maior formalidade — reuniões com clientes, parceiros estratégicos ou presentes de fim de ano.</p>

<h2>Setor financeiro e bancário</h2>

<p>O ${notasLink} tem apelo direto para empresas do setor financeiro (bancos, corretoras, contabilidade), reforçando a marca em um item associado a organização financeira pessoal.</p>

<h2>Padronização visual</h2>

<p>Pedidos corporativos costumam usar a mesma arte (logo + cores institucionais) em todas as peças, simplificando a produção e reduzindo o custo por unidade em relação a pedidos de artes variadas.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento corporativo de porta-cartões personalizados.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais aplicações corporativas.</p>
`,
};

const b2c: Post = {
  slug: "porta-cartao-personalizado-presente-poucas-unidades",
  titulo: "Porta-Cartão Personalizado como Presente: Como Pedir Poucas Unidades",
  descricao:
    "Como pedir o porta-cartão de couro ou a carteira slim personalizada em pequena quantidade para presentear.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "porta-cartao",
  imagemCapa: getImagemProduto("porta-cartao-couro-personalizado-1"),
  produtosRelacionados: ["porta-cartao-couro-personalizado-1", "carteira-slim-couro-personalizada"],
  dataPublicacao: "2026-03-01T13:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "A carteira slim funciona bem como presente de aniversário para homens?",
      resposta:
        "Sim, é uma das ideias de presente mais comuns dentro dessa categoria, especialmente com o nome ou as iniciais da pessoa gravados na peça.",
    },
  ],
  conteudoHtml: `
<p>Como o pedido mínimo de cada modelo de ${linkCategoria} é de 20 unidades, quem quer presentear só uma pessoa costuma se organizar em grupo.</p>

<h2>Ideias de presente</h2>

<p>O ${couro1Link}, com couro de boa textura, é uma ideia de presente clássica para o dia dos pais, aniversários ou formaturas.</p>

<p>A ${carteiraSlimLink}, por ser compacta e funcional como carteira, é uma opção de presente mais completa, com o nome ou as iniciais da pessoa gravados na peça.</p>

<h2>Como viabilizar o pedido pequeno</h2>

<p>A forma mais comum é reunir um grupo de amigos ou familiares que também querem presentear pessoas diferentes na mesma ocasião, dividindo o pedido mínimo entre todos, cada peça saindo com uma personalização diferente.</p>

${ctaWhatsAppHtml("Olá! Quero fazer um pedido pequeno de porta-cartão personalizado.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais ideias de presente.</p>
`,
};

const cuidados: Post = {
  slug: "como-cuidar-porta-cartao-couro-personalizado",
  titulo: "Como Cuidar do Porta-Cartão de Couro Personalizado para Durar Mais",
  descricao:
    "Dicas de limpeza e conservação para o porta-cartão de couro e a carteira slim personalizados manterem o visual por mais tempo.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "porta-cartao",
  imagemCapa: getImagemProduto("porta-cartao-couro-personalizado-1"),
  produtosRelacionados: ["porta-cartao-couro-personalizado-1", "carteira-slim-couro-personalizada"],
  dataPublicacao: "2026-03-01T14:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Posso usar produtos de limpeza de couro comuns nessas peças?",
      resposta:
        "Produtos específicos para couro sintético/legítimo em pequena quantidade funcionam bem — evite produtos muito oleosos ou solventes, que podem escurecer ou manchar a área personalizada.",
    },
  ],
  conteudoHtml: `
<p>O ${couro1Link} e a ${carteiraSlimLink}, produtos de ${linkCategoria}, mantêm o visual por mais tempo com alguns cuidados simples.</p>

<h2>Limpeza do dia a dia</h2>

<p>Use pano seco ou levemente umedecido para remover poeira e sujeira superficial. Para manchas mais persistentes, use produtos específicos para couro em pequena quantidade, evitando aplicar diretamente sobre a área personalizada.</p>

<h2>Evite exposição excessiva à umidade</h2>

<p>O couro pode manchar ou deformar com exposição prolongada à água — evite carregar a peça em situações de chuva forte sem proteção.</p>

<h2>Armazenamento</h2>

<p>Guarde em local seco e arejado, evitando dobrar sempre no mesmo vinco, o que pode marcar o couro permanentemente com o tempo.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre cuidados com meu porta-cartão de couro.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais informações sobre os produtos.</p>
`,
};

const comoEscolher: Post = {
  slug: "como-escolher-porta-cartao-personalizado-guia-definitivo",
  titulo: "Como Escolher o Porta-Cartão Personalizado Certo: Guia Definitivo",
  descricao:
    "Comparação entre os seis modelos de porta-cartão personalizado do catálogo para ajudar a decidir qual pedir.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "porta-cartao",
  imagemCapa: getImagemProduto("porta-cartao-couro-personalizado-2"),
  produtosRelacionados: ["porta-cartao-couro-personalizado-2", "porta-cartao-costurado-personalizado", "carteira-slim-couro-personalizada"],
  dataPublicacao: "2026-03-01T15:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual modelo é o mais completo da categoria?",
      resposta:
        "A carteira slim em couro, por combinar porta-cartões com espaço extra tipo fole, é o modelo mais completo — funciona tanto como porta-cartão quanto como carteira compacta do dia a dia.",
    },
  ],
  conteudoHtml: `
<p>A categoria de ${linkCategoria} tem seis modelos com propostas diferentes. Veja como decidir entre eles.</p>

<h2>${couro2Link}: bifold discreto</h2>
<p>Formato dobrável e compacto, com perfil mais discreto — bom para uso profissional formal.</p>

<h2>${costuradoLink}: resistência ao manuseio</h2>
<p>Costura reforçada, adequado para distribuição em eventos e uso frequente por múltiplas pessoas.</p>

<h2>${carteiraSlimLink}: o mais completo</h2>
<p>Combina porta-cartões com espaço tipo fole para múltiplos cartões, funcionando também como carteira compacta do dia a dia — o modelo de maior percepção de valor da categoria.</p>

<h2>Como decidir</h2>

<p>Para brinde de distribuição ampla, prefira os modelos mais simples e econômicos. Para presentes ou brindes de maior valor percebido (diretoria, clientes VIP, formatura), a carteira slim é a escolha mais indicada.</p>

${ctaWhatsAppHtml("Olá! Quero ajuda para escolher o porta-cartão personalizado ideal.", "Pedir ajuda pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para conhecer os seis modelos em detalhe.</p>
`,
};

const sustentabilidade: Post = {
  slug: "porta-cartao-personalizado-escolha-duradoura",
  titulo: "Porta-Cartão Personalizado: Por Que é uma Escolha Mais Duradoura",
  descricao:
    "Por que o porta-cartão de couro e a carteira slim personalizados, sendo peças duráveis, são uma alternativa consciente a itens de baixa durabilidade.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "porta-cartao",
  imagemCapa: getImagemProduto("porta-cartao-couro-personalizado-1"),
  produtosRelacionados: ["porta-cartao-couro-personalizado-1", "carteira-slim-couro-personalizada"],
  dataPublicacao: "2026-03-01T16:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "O couro sintético é uma escolha consciente do ponto de vista de durabilidade?",
      resposta:
        "Sim — apesar de não ser couro legítimo, o material sintético usado é resistente ao manuseio diário e tem vida útil de anos quando bem cuidado, o que reduz a necessidade de reposição frequente.",
    },
  ],
  conteudoHtml: `
<p>Dentro de ${linkCategoria}, o argumento de sustentabilidade está na durabilidade — uma peça bem construída dura anos, ao contrário de acessórios de baixa qualidade descartados rapidamente.</p>

<h2>Durabilidade como economia de longo prazo</h2>

<p>O ${couro1Link}, com material resistente ao manuseio diário, tem vida útil de anos quando bem cuidado, evitando a compra repetida de acessórios de baixa qualidade que se deterioram rápido.</p>

<h2>Um item de uso contínuo</h2>

<p>A ${carteiraSlimLink}, por funcionar tanto como porta-cartão quanto carteira, substitui a necessidade de ter dois acessórios separados — menos itens fabricados e consumidos ao longo do tempo.</p>

<h2>Um brinde que continua em uso</h2>

<p>Diferente de brindes de vida útil curta, um porta-cartão de qualidade continua sendo usado no dia a dia profissional da pessoa por muito tempo, mantendo a marca de quem presenteou visível continuamente.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento de porta-cartões personalizados.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais informações.</p>
`,
};

const erros: Post = {
  slug: "5-erros-comprar-porta-cartao-personalizado",
  titulo: "5 Erros ao Comprar Porta-Cartão Personalizado (e Como Evitar)",
  descricao:
    "Os erros mais comuns na hora de pedir porta-cartão ou carteira slim personalizada — e como evitá-los antes de fechar o pedido.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "porta-cartao",
  imagemCapa: getImagemProduto("porta-cartao-sintetico-personalizado"),
  produtosRelacionados: ["porta-cartao-sintetico-personalizado", "carteira-slim-couro-personalizada", "porta-notas-personalizado"],
  dataPublicacao: "2026-03-01T17:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual desses erros é o mais comum?",
      resposta:
        "Escolher o modelo só pelo preço, sem considerar o público que vai receber — um porta-cartão sintético simples para um brinde de diretoria, por exemplo, pode transmitir uma mensagem diferente da pretendida.",
    },
  ],
  conteudoHtml: `
<p>Alguns erros se repetem em pedidos de ${linkCategoria}. Veja os cinco mais comuns antes de fechar o seu.</p>

<h2>1. Escolher o modelo só pelo preço, sem considerar o público</h2>

<p>O ${sinteticoLink}, mais econômico, pode não transmitir a mensagem certa para um brinde de maior formalidade — avalie o contexto antes de decidir.</p>

<h2>2. Confundir porta-cartão com porta-notas</h2>

<p>O ${notasLink} tem propósito diferente (guardar cédulas e moedas), não deve ser confundido com os modelos voltados só para cartões.</p>

<h2>3. Não considerar o mínimo separado por modelo</h2>

<p>Cada modelo tem seu próprio pedido mínimo de 20 unidades — não é possível combinar quantidades de modelos diferentes para atingir um único mínimo.</p>

<h2>4. Pular a prova digital da arte</h2>

<p>A prova mostra como a logo ou gravação vai ficar posicionada na peça antes da produção, especialmente relevante na ${carteiraSlimLink}, com múltiplas áreas de personalização possíveis.</p>

<h2>5. Não planejar o prazo para eventos com data marcada</h2>

<p>O prazo de produção só começa após a aprovação da arte — para formaturas e eventos com data fixa, feche o pedido com antecedência.</p>

${ctaWhatsAppHtml("Olá! Quero tirar dúvidas antes de pedir meu porta-cartão.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para evitar surpresas no seu pedido.</p>
`,
};

export const portaCartaoComplementares: Post[] = [
  preco,
  comparacaoTecnicas,
  guiaOcasiao,
  b2b,
  b2c,
  cuidados,
  comoEscolher,
  sustentabilidade,
  erros,
];
