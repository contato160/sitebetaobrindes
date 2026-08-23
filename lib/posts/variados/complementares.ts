import type { Post } from "../../posts";
import { getImagemProduto } from "../../imagens";
import { ctaWhatsAppHtml, produtoLink, pilarProdutoLink, categoriaLink } from "../../postBlocks";

const linkCategoria = categoriaLink("Brindes Variados", "variados");
const linkPilarCategoria = `<a href="/blog/guia-completo-brindes-variados-personalizados/">guia completo de brindes variados</a>`;

function produtoComPilar(nome: string, slugVenda: string, slugPilar: string) {
  return `${produtoLink(nome, slugVenda)} (veja também o ${pilarProdutoLink("guia completo do produto", slugPilar)})`;
}

const chaveiroCouroLink = produtoComPilar("Chaveiro de Couro Personalizado", "chaveiro-couro-personalizado", "chaveiro-couro-personalizado-guia");
const chaveiroAirtagLink = produtoComPilar("Chaveiro para AirTag Personalizado", "chaveiro-airtag-personalizado", "chaveiro-airtag-personalizado-guia");
const portaVinhoLink = produtoComPilar("Porta-Vinho Personalizado", "porta-vinho-personalizado", "porta-vinho-personalizado-guia");
const mascaraDormirLink = produtoComPilar("Máscara de Dormir Personalizada", "mascara-dormir-personalizada", "mascara-dormir-personalizada-guia");
const mousePadLink = produtoComPilar("Mouse Pad Personalizado (Desk Mat)", "mouse-pad-personalizado", "mouse-pad-personalizado-guia");
const jogoAmericanoLink = produtoComPilar("Jogo Americano Personalizado", "jogo-americano-personalizado", "jogo-americano-personalizado-guia");
const portaTagBotaoLink = produtoComPilar("Porta-Tag de Mala com Botão Personalizado", "porta-tag-mala-botao-personalizado", "porta-tag-mala-botao-personalizado-guia");
const portaTagLink = produtoComPilar("Porta-Tag de Mala Personalizado", "porta-tag-mala-personalizado", "porta-tag-mala-personalizado-guia");
const portaOculos1Link = produtoComPilar("Porta-Óculos Personalizado (Couro Liso)", "porta-oculos-personalizado-1", "porta-oculos-personalizado-1-guia");
const portaOculos2Link = produtoComPilar("Porta-Óculos Personalizado (Glitter)", "porta-oculos-personalizado-2", "porta-oculos-personalizado-2-guia");

const preco: Post = {
  slug: "quanto-custa-brindes-variados-personalizados-tabela-precos",
  titulo: "Quanto Custa Brindes Variados Personalizados? Tabela de Preços",
  descricao:
    "Como o preço varia entre chaveiro, mouse pad e porta-vinho personalizados, os diferentes itens da categoria de brindes variados.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "variados",
  imagemCapa: getImagemProduto("chaveiro-couro-personalizado"),
  produtosRelacionados: ["chaveiro-couro-personalizado", "mouse-pad-personalizado", "porta-vinho-personalizado"],
  dataPublicacao: "2026-03-04T09:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Por que os preços variam tanto entre os itens dessa categoria?",
      resposta:
        "Porque são produtos de tamanho, material e complexidade muito diferentes entre si — um chaveiro pequeno custa naturalmente menos que um mouse pad grande ou um porta-vinho, por exemplo.",
    },
  ],
  conteudoHtml: `
<p>A categoria de ${linkCategoria} reúne itens bem diferentes entre si, o que gera faixas de preço variadas.</p>

<h2>O que influencia o preço de cada item</h2>

<p>O ${chaveiroCouroLink}, sendo um item pequeno, tende a ter o menor custo por unidade. Já o ${mousePadLink}, maior, e o ${portaVinhoLink}, com mais estrutura, custam mais.</p>

<h2>Como calcular o orçamento de um pedido misto</h2>

<p>Como cada item tem seu próprio pedido mínimo de 20 unidades, avalie se o objetivo é um único produto em volume ou uma combinação de itens diferentes (por exemplo, um kit de boas-vindas com chaveiro e mouse pad juntos).</p>

${ctaWhatsAppHtml("Olá! Quero saber o preço dos brindes variados personalizados.", "Consultar preço agora pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para comparar todos os modelos em detalhe.</p>
`,
};

const comparacaoTecnicas: Post = {
  slug: "gravacao-em-couro-vs-sublimacao-brindes-variados",
  titulo: "Gravação em Couro vs Sublimação: Como Cada Técnica se Aplica aos Brindes Variados",
  descricao:
    "Por que o chaveiro de couro usa uma técnica diferente do mouse pad na personalização, e o que isso significa para o resultado final.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "variados",
  imagemCapa: getImagemProduto("chaveiro-couro-personalizado"),
  produtosRelacionados: ["chaveiro-couro-personalizado", "mouse-pad-personalizado"],
  dataPublicacao: "2026-03-04T10:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Por que nem todos os produtos da categoria usam a mesma técnica?",
      resposta:
        "Porque cada material pede uma técnica diferente — o que funciona bem em couro nem sempre funciona em tecido ou plástico, por isso a categoria combina mais de uma técnica de personalização.",
    },
  ],
  conteudoHtml: `
<p>Como a categoria de ${linkCategoria} reúne materiais diferentes, mais de uma técnica de personalização é usada — veja como cada uma se aplica.</p>

<h2>Gravação em couro</h2>

<p>No ${chaveiroCouroLink}, a personalização é feita por gravação diretamente no couro, resultando em um efeito de baixo relevo que não desbota nem descasca, já que não é uma camada aplicada sobre a superfície.</p>

<h2>Sublimação em tecido</h2>

<p>No ${mousePadLink}, a sublimação é aplicada sobre o tecido que reveste a base emborrachada, integrando a tinta às fibras — resultado com cores vivas e fidelidade a fotos ou artes coloridas.</p>

<h2>Por que a técnica certa importa</h2>

<p>Usar a técnica errada para o material comprometeria a durabilidade ou a fidelidade da imagem — por isso cada produto da categoria usa a técnica mais adequada ao seu material específico.</p>

${ctaWhatsAppHtml("Olá! Quero entender melhor as técnicas de personalização dos brindes.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais detalhes técnicos.</p>
`,
};

const guiaOcasiao: Post = {
  slug: "brindes-variados-personalizados-viagem-guia",
  titulo: "Porta-Tag de Mala e Chaveiro para AirTag: Guia de Brindes para Viagem",
  descricao:
    "Como o porta-tag de mala e o chaveiro para AirTag personalizados ajudam a identificar bagagem e pertences em viagem.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "variados",
  imagemCapa: getImagemProduto("porta-tag-mala-personalizado"),
  produtosRelacionados: ["porta-tag-mala-personalizado", "chaveiro-airtag-personalizado"],
  dataPublicacao: "2026-03-04T11:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "O chaveiro para AirTag funciona com qualquer modelo de rastreador?",
      resposta:
        "O encaixe é pensado para o formato padrão do AirTag da Apple — confirme a compatibilidade se for usar outro tipo de rastreador.",
    },
  ],
  conteudoHtml: `
<p>Alguns produtos de ${linkCategoria} têm apelo direto para quem viaja — veja como aproveitar.</p>

<h2>Identificação de bagagem</h2>

<p>O ${portaTagLink}, com nome e contato visíveis, facilita a identificação da mala na esteira do aeroporto e ajuda na recuperação em caso de extravio.</p>

<h2>Rastreamento de pertences</h2>

<p>O ${chaveiroAirtagLink} protege e facilita o transporte do rastreador Bluetooth junto de chaves, mochilas ou bagagem, com a personalização servindo também como identificação visual rápida.</p>

<h2>Como presente de viagem</h2>

<p>Os dois produtos funcionam bem juntos como parte de um kit de presente de viagem, especialmente quando personalizados com o nome do destino ou da pessoa.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento de porta-tag de mala e chaveiro para AirTag.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais ideias de uso.</p>
`,
};

const b2b: Post = {
  slug: "brindes-variados-personalizados-kits-corporativos-empresas",
  titulo: "Chaveiro e Mouse Pad Personalizados para Kits Corporativos: Guia",
  descricao:
    "Como empresas usam o chaveiro de couro e o mouse pad personalizados em kits de boas-vindas e brindes de escritório.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "variados",
  imagemCapa: getImagemProduto("chaveiro-couro-personalizado"),
  produtosRelacionados: ["chaveiro-couro-personalizado", "mouse-pad-personalizado"],
  dataPublicacao: "2026-03-04T12:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Por que chaveiro e mouse pad são combinados com frequência em kits corporativos?",
      resposta:
        "Porque são itens de baixo custo unitário e uso constante — o chaveiro acompanha o dia a dia fora do escritório, e o mouse pad fica na mesa de trabalho, reforçando a marca em dois contextos diferentes.",
    },
  ],
  conteudoHtml: `
<p>Dois dos itens mais recorrentes de ${linkCategoria} em pedidos corporativos são o chaveiro e o mouse pad — veja como empresas costumam usá-los.</p>

<h2>Chaveiro como brinde de baixo custo e alta circulação</h2>

<p>O ${chaveiroCouroLink}, com a logo da empresa, é usado como brinde de feiras, eventos e distribuição em massa, por ter custo unitário baixo e alta visibilidade no dia a dia de quem recebe.</p>

<h2>Mouse pad como brinde de escritório</h2>

<p>O ${mousePadLink} é comum em kits de boas-vindas de home office ou brindes de escritório, mantendo a marca visível durante o trabalho diário do colaborador ou cliente.</p>

<h2>Kits combinados</h2>

<p>É comum combinar os dois itens no mesmo kit de boas-vindas, junto de outros produtos do catálogo, criando um conjunto de brindes com propósitos complementares.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento corporativo de chaveiros e mouse pads personalizados.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais aplicações corporativas.</p>
`,
};

const b2c: Post = {
  slug: "brindes-variados-personalizados-presente-poucas-unidades",
  titulo: "Máscara de Dormir e Porta-Óculos Personalizados como Presente: Como Pedir Poucas Unidades",
  descricao:
    "Como pedir a máscara de dormir ou o porta-óculos personalizado em pequena quantidade para presentear.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "variados",
  imagemCapa: getImagemProduto("mascara-dormir-personalizada"),
  produtosRelacionados: ["mascara-dormir-personalizada", "porta-oculos-personalizado-1"],
  dataPublicacao: "2026-03-04T13:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "A máscara de dormir personalizada é um bom presente de chá de lingerie ou despedida de solteira?",
      resposta:
        "Sim, é uma das ideias mais populares para essas ocasiões, especialmente quando personalizada com o nome da convidada ou uma frase divertida.",
    },
  ],
  conteudoHtml: `
<p>Como o pedido mínimo de cada modelo de ${linkCategoria} é de 20 unidades, quem quer presentear só uma pessoa costuma se organizar em grupo.</p>

<h2>Ideias de presente</h2>

<p>A ${mascaraDormirLink}, com nome ou frase personalizada, é uma ideia popular de presente para despedida de solteira, chá de lingerie ou amigo secreto.</p>

<p>O ${portaOculos1Link} funciona bem como presente para quem usa óculos de grau ou de sol no dia a dia, com nome ou iniciais gravados na peça.</p>

<h2>Como viabilizar o pedido pequeno</h2>

<p>A forma mais comum é reunir um grupo de amigas ou familiares que também querem presentear pessoas diferentes na mesma ocasião, dividindo o pedido mínimo entre todas.</p>

${ctaWhatsAppHtml("Olá! Quero fazer um pedido pequeno de brinde personalizado.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais ideias de presente.</p>
`,
};

const cuidados: Post = {
  slug: "como-cuidar-jogo-americano-porta-vinho-personalizados",
  titulo: "Como Cuidar do Jogo Americano e do Porta-Vinho Personalizados",
  descricao:
    "Dicas de limpeza e conservação para o jogo americano e o porta-vinho personalizados manterem o visual por mais tempo.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "variados",
  imagemCapa: getImagemProduto("jogo-americano-personalizado"),
  produtosRelacionados: ["jogo-americano-personalizado", "porta-vinho-personalizado"],
  dataPublicacao: "2026-03-04T14:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Posso lavar o jogo americano na máquina de lavar roupa?",
      resposta:
        "Não é recomendado — a lavagem manual com pano úmido preserva melhor tanto o material quanto a área personalizada.",
    },
  ],
  conteudoHtml: `
<p>O ${jogoAmericanoLink} e o ${portaVinhoLink}, produtos de ${linkCategoria}, mantêm o visual por mais tempo com alguns cuidados simples.</p>

<h2>Cuidados com o jogo americano</h2>

<p>Limpe com pano úmido após o uso, evitando deixar líquidos ou alimentos em contato prolongado com a superfície. Evite lavagem na máquina, que pode danificar a estrutura e desbotar a estampa.</p>

<h2>Cuidados com o porta-vinho</h2>

<p>Limpe com pano seco ou levemente úmido, evitando produtos abrasivos que podem danificar a área personalizada. Guarde em local seco entre usos.</p>

<h2>Armazenamento</h2>

<p>Guarde ambos os itens em local seco e arejado, evitando dobrar ou empilhar de forma que marque o material permanentemente.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre cuidados com meu brinde personalizado.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais informações sobre os produtos.</p>
`,
};

const comoEscolher: Post = {
  slug: "porta-tag-mala-com-ou-sem-botao-como-escolher",
  titulo: "Porta-Tag de Mala Com ou Sem Botão? Como Escolher o Modelo Certo",
  descricao:
    "Comparação entre os dois modelos de porta-tag de mala personalizado — com botão e sem botão — para ajudar a decidir qual pedir.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "variados",
  imagemCapa: getImagemProduto("porta-tag-mala-botao-personalizado"),
  produtosRelacionados: ["porta-tag-mala-botao-personalizado", "porta-tag-mala-personalizado"],
  dataPublicacao: "2026-03-04T15:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "O botão realmente faz diferença na segurança da etiqueta?",
      resposta:
        "Sim — o fechamento com botão reduz o risco de o porta-tag se soltar da alça da mala durante o transporte, comparado ao modelo sem esse reforço.",
    },
  ],
  conteudoHtml: `
<p>A categoria de ${linkCategoria} tem dois modelos de porta-tag de mala. Veja qual escolher para o seu caso.</p>

<h2>${portaTagBotaoLink}: com botão</h2>
<p>O fechamento com botão dá mais segurança à fixação na alça da mala, reduzindo o risco de a etiqueta se soltar durante o transporte ou manuseio pela companhia aérea.</p>

<h2>${portaTagLink}: sem botão</h2>
<p>Modelo mais simples de colocar e retirar, indicado para quem prioriza praticidade no dia a dia e não costuma despachar a bagagem com frequência.</p>

<h2>Qual escolher</h2>

<p>Para viagens de avião com despacho de bagagem, o modelo com botão costuma ser mais seguro. Para uso em bolsas de mão ou malas de cabine, o modelo sem botão já atende bem.</p>

${ctaWhatsAppHtml("Olá! Quero ajuda para escolher o modelo de porta-tag de mala.", "Pedir ajuda pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para conhecer os dois modelos em detalhe.</p>
`,
};

const sustentabilidade: Post = {
  slug: "brindes-variados-personalizados-escolha-duradoura",
  titulo: "Mouse Pad e Jogo Americano Personalizados: Escolhas Mais Duradouras",
  descricao:
    "Por que o mouse pad e o jogo americano personalizados, sendo reutilizáveis, são uma alternativa consciente a itens descartáveis do dia a dia.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "variados",
  imagemCapa: getImagemProduto("mouse-pad-personalizado"),
  produtosRelacionados: ["mouse-pad-personalizado", "jogo-americano-personalizado"],
  dataPublicacao: "2026-03-04T16:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "O jogo americano personalizado substitui algo descartável no dia a dia?",
      resposta:
        "Em certo sentido, sim — em ambientes que usariam guardanapos ou toalhas de papel para proteger a mesa, o jogo americano lavável reduz esse consumo repetido.",
    },
  ],
  conteudoHtml: `
<p>Dentro de ${linkCategoria}, alguns itens têm um argumento direto de durabilidade e reutilização frente a alternativas de uso único.</p>

<h2>Mouse pad como item de longa duração</h2>

<p>O ${mousePadLink}, com base emborrachada resistente, tem vida útil de anos de uso diário, evitando a troca frequente por desgaste que mouse pads de baixa qualidade exigiriam.</p>

<h2>Jogo americano lavável</h2>

<p>O ${jogoAmericanoLink}, sendo lavável e reutilizável, reduz o uso repetido de toalhas de papel ou guardanapos descartáveis para proteger a mesa nas refeições diárias.</p>

<h2>Um brinde de uso contínuo</h2>

<p>Diferente de brindes de vida útil curta, esses itens continuam em uso por muito tempo, mantendo a marca de quem presenteou visível continuamente.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento de brindes variados personalizados.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais informações.</p>
`,
};

const erros: Post = {
  slug: "5-erros-comprar-brindes-variados-personalizados",
  titulo: "5 Erros ao Comprar Brindes Variados Personalizados (e Como Evitar)",
  descricao:
    "Os erros mais comuns na hora de pedir chaveiro, porta-óculos ou máscara de dormir personalizada — e como evitá-los.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "variados",
  imagemCapa: getImagemProduto("chaveiro-airtag-personalizado"),
  produtosRelacionados: ["chaveiro-airtag-personalizado", "porta-oculos-personalizado-2", "mascara-dormir-personalizada"],
  dataPublicacao: "2026-03-04T17:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual desses erros é o mais comum?",
      resposta:
        "Não confirmar a compatibilidade do chaveiro para AirTag com o modelo exato do rastreador antes de fechar o pedido, o que pode gerar um encaixe imperfeito.",
    },
  ],
  conteudoHtml: `
<p>Alguns erros se repetem em pedidos de ${linkCategoria}. Veja os cinco mais comuns antes de fechar o seu.</p>

<h2>1. Não confirmar a compatibilidade do chaveiro para AirTag</h2>

<p>O ${chaveiroAirtagLink} é pensado para o formato padrão do AirTag da Apple — confirme a compatibilidade antes de pedir se for usar outro rastreador.</p>

<h2>2. Escolher o acabamento sem considerar o público</h2>

<p>O ${portaOculos2Link}, com glitter, tem apelo mais específico — avalie se combina com o perfil de quem vai receber antes de decidir só pelo visual.</p>

<h2>3. Não considerar o mínimo separado por item</h2>

<p>Cada item de ${linkCategoria} tem seu próprio pedido mínimo de 20 unidades — não é possível combinar quantidades de itens diferentes para atingir um único mínimo.</p>

<h2>4. Pular a prova digital da arte</h2>

<p>A prova mostra como a arte ou frase vai ficar posicionada na peça antes da produção — pular essa etapa aumenta o risco de resultado diferente do esperado, especialmente na ${mascaraDormirLink}, com área de personalização reduzida.</p>

<h2>5. Não planejar o prazo para eventos com data marcada</h2>

<p>O prazo de produção só começa após a aprovação da arte — para despedidas de solteira, viagens e eventos com data fixa, feche o pedido com antecedência.</p>

${ctaWhatsAppHtml("Olá! Quero tirar dúvidas antes de pedir meu brinde personalizado.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para evitar surpresas no seu pedido.</p>
`,
};

export const variadosComplementares: Post[] = [
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
