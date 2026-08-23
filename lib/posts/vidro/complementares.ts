import type { Post } from "../../posts";
import { getImagemProduto } from "../../imagens";
import { ctaWhatsAppHtml, produtoLink, pilarProdutoLink, categoriaLink } from "../../postBlocks";

const linkCategoria = categoriaLink("Produtos em Vidro Personalizados", "vidro");
const linkPilarCategoria = `<a href="/blog/guia-completo-produtos-vidro-personalizados/">guia completo de produtos em vidro personalizados</a>`;

function produtoComPilar(nome: string, slugVenda: string, slugPilar: string) {
  return `${produtoLink(nome, slugVenda)} (veja também o ${pilarProdutoLink("guia completo do produto", slugPilar)})`;
}

const chopp475TransLink = produtoComPilar("Caneca de Chopp de Vidro 475ml Transparente Personalizada", "caneca-chopp-vidro-475ml-transparente-personalizada", "caneca-chopp-vidro-475ml-transparente-guia");
const chopp475FoscaLink = produtoComPilar("Caneca de Chopp de Vidro 475ml Fosca Personalizada", "caneca-chopp-vidro-475ml-fosca-personalizada", "caneca-chopp-vidro-475ml-fosca-guia");
const chopp340TransLink = produtoComPilar("Caneca de Chopp de Vidro 340ml Transparente Personalizada", "caneca-chopp-vidro-340ml-transparente-personalizada", "caneca-chopp-vidro-340ml-transparente-guia");
const chopp340FoscaLink = produtoComPilar("Caneca de Chopp de Vidro 340ml Fosca Personalizada", "caneca-chopp-vidro-340ml-fosca-personalizada", "caneca-chopp-vidro-340ml-fosca-guia");
const canecaKleinLink = produtoComPilar("Caneca de Vidro 320ml Transparente Personalizada", "caneca-vidro-320ml-transparente-personalizada", "caneca-vidro-320ml-transparente-guia");
const whiskyLink = produtoComPilar("Copo de Whisky de Vidro 266ml Personalizado", "copo-whisky-vidro-266ml-personalizado", "copo-whisky-vidro-266ml-guia");
const tacaTransLink = produtoComPilar("Taça de Vidro 300ml Transparente Personalizada", "taca-vidro-300ml-transparente-personalizada", "taca-vidro-300ml-transparente-guia");
const tacaFoscaLink = produtoComPilar("Taça de Vidro 300ml Fosca Personalizada", "taca-vidro-300ml-fosca-personalizada", "taca-vidro-300ml-fosca-guia");
const copoDoseLink = produtoComPilar("Copo Dose de Vidro 48ml Personalizado", "copo-dose-vidro-48ml-personalizado", "copo-dose-vidro-48ml-guia");

const preco: Post = {
  slug: "quanto-custa-produtos-vidro-personalizados-tabela-precos",
  titulo: "Quanto Custa Produtos em Vidro Personalizados? Tabela de Preços",
  descricao:
    "Como o preço varia entre caneca de chopp, taça e copo de vidro personalizados, por tamanho, acabamento e quantidade.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "vidro",
  imagemCapa: getImagemProduto("caneca-chopp-vidro-475ml-transparente-personalizada"),
  produtosRelacionados: ["caneca-chopp-vidro-475ml-transparente-personalizada", "taca-vidro-300ml-transparente-personalizada", "copo-dose-vidro-48ml-personalizado"],
  dataPublicacao: "2026-03-03T09:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "O acabamento fosco custa mais que o transparente?",
      resposta:
        "A diferença de preço entre fosco e transparente costuma ser pequena — o fator que mais pesa no preço é o tamanho da peça, não o tipo de acabamento.",
    },
  ],
  conteudoHtml: `
<p>A categoria de ${linkCategoria} reúne nove modelos de tamanho, formato e acabamento diferentes, com faixas de preço variadas.</p>

<h2>O que influencia o preço</h2>

<p>O tamanho é o fator principal — a ${chopp475TransLink}, maior, custa mais que modelos menores como o ${copoDoseLink}. O tipo de peça (caneca de chopp, taça, copo de dose) também influencia, já que cada formato tem custo de produção próprio.</p>

<h2>Fosco vs transparente</h2>

<p>A diferença de preço entre acabamento fosco e transparente costuma ser pequena — a escolha aqui é mais sobre estilo visual do que sobre orçamento.</p>

${ctaWhatsAppHtml("Olá! Quero saber o preço dos produtos em vidro personalizados.", "Consultar preço agora pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para comparar os nove modelos em detalhe.</p>
`,
};

const comparacaoTecnicas: Post = {
  slug: "vidro-fosco-vs-transparente-personalizado-qual-escolher",
  titulo: "Vidro Fosco vs Transparente Personalizado: Qual Escolher?",
  descricao:
    "Diferenças visuais e práticas entre o acabamento fosco e o transparente nos produtos de vidro personalizados por sublimação.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "vidro",
  imagemCapa: getImagemProduto("caneca-chopp-vidro-475ml-fosca-personalizada"),
  produtosRelacionados: ["caneca-chopp-vidro-475ml-fosca-personalizada", "caneca-chopp-vidro-475ml-transparente-personalizada"],
  dataPublicacao: "2026-03-03T10:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "A sublimação aparece melhor no vidro fosco ou no transparente?",
      resposta:
        "No vidro fosco, a imagem tende a ter uma aparência mais opaca e uniforme; no transparente, a imagem se destaca com mais contraste contra o líquido visível através do vidro.",
    },
  ],
  conteudoHtml: `
<p>Boa parte dos modelos de ${linkCategoria} está disponível em versão fosca e transparente — veja as diferenças antes de escolher.</p>

<h2>${chopp475FoscaLink}: fosco</h2>

<p>O acabamento fosco dá um visual mais moderno e opaco à peça, e costuma disfarçar pequenas marcas de dedo mais do que o vidro transparente.</p>

<h2>${chopp475TransLink}: transparente</h2>

<p>Permite ver a cor e a espuma da bebida através do vidro, um visual mais tradicional para caneca de chopp — a imagem impressa se destaca com bom contraste contra o líquido.</p>

<h2>Qual escolher</h2>

<p>Para brindes com apelo mais visual e moderno, o fosco costuma agradar mais. Para uma experiência mais tradicional de bar ou chopperia, o transparente é a escolha mais clássica.</p>

${ctaWhatsAppHtml("Olá! Quero entender a diferença entre vidro fosco e transparente.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais detalhes sobre os acabamentos.</p>
`,
};

const guiaOcasiao: Post = {
  slug: "produtos-vidro-personalizados-despedida-solteiro-churrasco-guia",
  titulo: "Produtos em Vidro Personalizados para Despedida de Solteiro e Churrasco: Guia",
  descricao:
    "Como escolher entre caneca de chopp, copo de whisky e taça de vidro personalizados para despedida de solteiro, churrasco ou happy hour.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "vidro",
  imagemCapa: getImagemProduto("caneca-chopp-vidro-340ml-transparente-personalizada"),
  produtosRelacionados: ["caneca-chopp-vidro-340ml-transparente-personalizada", "copo-whisky-vidro-266ml-personalizado"],
  dataPublicacao: "2026-03-03T11:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual modelo é mais indicado para despedida de solteiro?",
      resposta:
        "A caneca de chopp personalizada com o nome de cada participante é uma das escolhas mais tradicionais, funcionando tanto como item do evento quanto como lembrança depois.",
    },
  ],
  conteudoHtml: `
<p>Produtos de ${linkCategoria} são um clássico de eventos sociais — veja qual combina com cada ocasião.</p>

<h2>Para despedida de solteiro e churrasco</h2>

<p>A ${chopp340TransLink}, com o nome de cada convidado, é uma escolha tradicional para esses eventos — funciona como item de uso durante a confraternização e como lembrança depois.</p>

<h2>Para happy hour e presentes para quem aprecia destilados</h2>

<p>O ${whiskyLink} é uma escolha mais sofisticada, indicada para presentear quem aprecia whisky ou outros destilados, com o nome ou uma frase personalizada gravada na peça.</p>

<h2>Como lembrancinha de evento</h2>

<p>Ambos os modelos funcionam bem como lembrancinha personalizada, desde que o pedido mínimo de 20 unidades seja compatível com o número de convidados do evento.</p>

${ctaWhatsAppHtml("Olá! Quero pedir produtos em vidro personalizados para um evento.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais ideias por ocasião.</p>
`,
};

const b2b: Post = {
  slug: "produtos-vidro-personalizados-bares-cervejarias",
  titulo: "Produtos em Vidro Personalizados para Bares e Cervejarias: Guia Corporativo",
  descricao:
    "Como bares, cervejarias e distribuidoras usam a caneca de chopp e a taça de vidro personalizadas como brinde e material promocional.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "vidro",
  imagemCapa: getImagemProduto("caneca-chopp-vidro-475ml-transparente-personalizada"),
  produtosRelacionados: ["caneca-chopp-vidro-475ml-transparente-personalizada", "taca-vidro-300ml-fosca-personalizada"],
  dataPublicacao: "2026-03-03T12:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Cervejarias artesanais costumam personalizar canecas com a própria marca?",
      resposta:
        "Sim, é uma prática comum tanto para venda no próprio estabelecimento quanto como brinde promocional em eventos e degustações.",
    },
  ],
  conteudoHtml: `
<p>Produtos de ${linkCategoria} têm um encaixe natural com o segmento de bebidas — veja como bares e cervejarias costumam usá-los.</p>

<h2>Material promocional de cervejarias</h2>

<p>A ${chopp475TransLink}, com a marca da cervejaria, é usada tanto para venda no próprio bar quanto como brinde promocional em festivais e eventos de degustação.</p>

<h2>Taças para vinícolas e distribuidoras</h2>

<p>A ${tacaFoscaLink} funciona bem como brinde de vinícolas, distribuidoras de bebidas ou eventos de degustação de vinho, reforçando a marca em um item de uso repetido pelo cliente.</p>

<h2>Planejando o pedido para eventos</h2>

<p>Para festivais e eventos com grande público, planeje a quantidade com antecedência considerando o prazo de produção de 10 a 20 dias úteis a partir da aprovação da arte.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento de produtos em vidro personalizados para meu bar/cervejaria.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais aplicações corporativas.</p>
`,
};

const b2c: Post = {
  slug: "produtos-vidro-personalizados-presente-poucas-unidades",
  titulo: "Produtos em Vidro Personalizados como Presente: Como Pedir Poucas Unidades",
  descricao:
    "Como pedir a caneca de chopp, taça ou copo de vidro personalizado em pequena quantidade para presentear.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "vidro",
  imagemCapa: getImagemProduto("caneca-vidro-320ml-transparente-personalizada"),
  produtosRelacionados: ["caneca-vidro-320ml-transparente-personalizada", "copo-dose-vidro-48ml-personalizado"],
  dataPublicacao: "2026-03-03T13:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "O copo dose personalizado é um bom presente de dia dos pais?",
      resposta:
        "Sim, é um presente comum nessa data, especialmente combinado com uma bebida de presente — a personalização com nome ou frase dá um toque pessoal ao item.",
    },
  ],
  conteudoHtml: `
<p>Como o pedido mínimo de cada modelo de ${linkCategoria} é de 20 unidades, quem quer presentear só uma pessoa costuma se organizar em grupo.</p>

<h2>Ideias de presente</h2>

<p>A ${canecaKleinLink}, com formato clássico, é uma ideia de presente versátil para amantes de cerveja artesanal.</p>

<p>O ${copoDoseLink}, pequeno e de baixo custo por unidade, é uma opção de presente para dia dos pais, aniversário ou amigo secreto, muitas vezes combinado com uma garrafa de bebida.</p>

<h2>Como viabilizar o pedido pequeno</h2>

<p>A forma mais comum é reunir um grupo de amigos ou familiares que também querem presentear pessoas diferentes na mesma ocasião, dividindo o pedido mínimo entre todos.</p>

${ctaWhatsAppHtml("Olá! Quero fazer um pedido pequeno de produtos em vidro personalizados.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais ideias de presente.</p>
`,
};

const cuidados: Post = {
  slug: "como-cuidar-produtos-vidro-personalizados-durar-mais",
  titulo: "Como Cuidar dos Produtos em Vidro Personalizados para Durar Mais",
  descricao:
    "Dicas de lavagem e uso para manter a estampa e a integridade da caneca de chopp e da taça de vidro personalizadas por mais tempo.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "vidro",
  imagemCapa: getImagemProduto("caneca-chopp-vidro-475ml-transparente-personalizada"),
  produtosRelacionados: ["caneca-chopp-vidro-475ml-transparente-personalizada", "taca-vidro-300ml-transparente-personalizada"],
  dataPublicacao: "2026-03-03T14:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Posso colocar a caneca de chopp personalizada no congelador?",
      resposta:
        "Evite deixar por longos períodos — mudanças bruscas de temperatura podem trincar o vidro. Prefira gelar na geladeira comum se possível, ou por poucos minutos no congelador.",
    },
  ],
  conteudoHtml: `
<p>A ${chopp475TransLink} e a ${tacaTransLink}, produtos de ${linkCategoria}, mantêm o visual e a integridade por mais tempo com alguns cuidados simples.</p>

<h2>Lavagem</h2>

<p>Lave à mão com esponja macia e detergente neutro, evitando esponjas abrasivas sobre a área personalizada. A sublimação em vidro resiste bem a lavagens repetidas quando não exposta a atrito excessivo.</p>

<h2>Evite choque térmico</h2>

<p>Evite deixar a peça por longos períodos no congelador ou expor a mudanças bruscas de temperatura (como água fervente logo após estar gelada) — isso pode trincar o vidro com o tempo.</p>

<h2>Manuseio</h2>

<p>Por ser vidro, evite quedas em superfícies duras. Guarde em local com boa estabilidade, longe de bordas de bancada onde possa ser derrubada facilmente.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre cuidados com meus produtos em vidro.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais informações sobre os produtos.</p>
`,
};

const comoEscolher: Post = {
  slug: "como-escolher-produtos-vidro-personalizados-guia-definitivo",
  titulo: "Como Escolher Produtos em Vidro Personalizados: Guia Definitivo",
  descricao:
    "Comparação entre os nove modelos de vidro personalizado do catálogo — caneca de chopp, taça, copo de whisky e copo dose.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "vidro",
  imagemCapa: getImagemProduto("caneca-chopp-vidro-475ml-transparente-personalizada"),
  produtosRelacionados: ["caneca-chopp-vidro-475ml-transparente-personalizada", "taca-vidro-300ml-transparente-personalizada", "copo-whisky-vidro-266ml-personalizado"],
  dataPublicacao: "2026-03-03T15:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual modelo é o mais versátil da categoria?",
      resposta:
        "A caneca de chopp de 475ml transparente é a mais versátil, adequada tanto para brinde corporativo quanto para presente pessoal e uso em eventos.",
    },
  ],
  conteudoHtml: `
<p>A categoria de ${linkCategoria} tem nove modelos com propostas diferentes. Veja como decidir entre eles.</p>

<h2>Para cerveja e chopp</h2>
<p>A ${chopp475TransLink} e suas variações são a escolha natural para quem quer um item de uso direto com cerveja ou chopp — disponíveis em dois tamanhos e dois acabamentos.</p>

<h2>Para destilados</h2>
<p>O ${whiskyLink} é a escolha certa para presentear ou brindar quem aprecia whisky e outros destilados servidos puros ou com gelo.</p>

<h2>Para vinho e brindes mais elegantes</h2>
<p>A ${tacaTransLink} funciona bem para eventos com apelo mais sofisticado, como confraternizações corporativas ou casamentos.</p>

<h2>Para doses e brindes de baixo custo</h2>
<p>O ${copoDoseLink} é a opção mais econômica, ideal para distribuição em maior volume ou como parte de um kit maior.</p>

${ctaWhatsAppHtml("Olá! Quero ajuda para escolher produtos em vidro personalizados.", "Pedir ajuda pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para conhecer os nove modelos em detalhe.</p>
`,
};

const sustentabilidade: Post = {
  slug: "produtos-vidro-personalizados-alternativa-copo-descartavel",
  titulo: "Produtos em Vidro Personalizados: Uma Alternativa ao Copo Descartável em Eventos",
  descricao:
    "Por que a caneca de chopp e o copo de vidro personalizados, sendo reutilizáveis, reduzem o consumo de copos plásticos descartáveis em eventos.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "vidro",
  imagemCapa: getImagemProduto("caneca-chopp-vidro-340ml-fosca-personalizada"),
  produtosRelacionados: ["caneca-chopp-vidro-340ml-fosca-personalizada", "copo-dose-vidro-48ml-personalizado"],
  dataPublicacao: "2026-03-03T16:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Usar copo de vidro em vez de descartável faz diferença real em um evento?",
      resposta:
        "Sim — eventos que substituem copos plásticos descartáveis por vidro reutilizável reduzem drasticamente o volume de resíduo plástico gerado, além de o copo personalizado virar lembrança do evento.",
    },
  ],
  conteudoHtml: `
<p>Dentro de ${linkCategoria}, o argumento de sustentabilidade é direto: cada peça reutilizável substitui o consumo repetido de copos plásticos descartáveis em eventos.</p>

<h2>Redução de resíduo em eventos</h2>

<p>Festas, churrascos e confraternizações que usam a ${chopp340FoscaLink} em vez de copos plásticos descartáveis reduzem drasticamente o volume de resíduo gerado no evento, e a peça ainda vira lembrança depois.</p>

<h2>Copo dose como alternativa a copinhos plásticos</h2>

<p>O ${copoDoseLink} substitui os copinhos plásticos descartáveis comuns em festas, sendo lavado e reutilizado indefinidamente pelo convidado que leva a peça para casa.</p>

<h2>Durabilidade do vidro</h2>

<p>O vidro, quando bem cuidado, tem vida útil de muitos anos — um investimento único que substitui a compra repetida de descartáveis em cada novo evento.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento de produtos em vidro personalizados.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais informações.</p>
`,
};

const erros: Post = {
  slug: "5-erros-comprar-produtos-vidro-personalizados",
  titulo: "5 Erros ao Comprar Produtos em Vidro Personalizados (e Como Evitar)",
  descricao:
    "Os erros mais comuns na hora de pedir caneca de chopp, taça ou copo de vidro personalizado — e como evitá-los.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "vidro",
  imagemCapa: getImagemProduto("caneca-chopp-vidro-475ml-fosca-personalizada"),
  produtosRelacionados: ["caneca-chopp-vidro-475ml-fosca-personalizada", "taca-vidro-300ml-fosca-personalizada", "copo-dose-vidro-48ml-personalizado"],
  dataPublicacao: "2026-03-03T17:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual desses erros é o mais comum?",
      resposta:
        "Deixar a peça no congelador por muito tempo antes do evento, o que pode trincar o vidro com o choque térmico na hora de servir a bebida gelada.",
    },
  ],
  conteudoHtml: `
<p>Alguns erros se repetem em pedidos de ${linkCategoria}. Veja os cinco mais comuns antes de fechar o seu.</p>

<h2>1. Deixar a peça no congelador por muito tempo</h2>

<p>Pode causar choque térmico e trincar o vidro — para gelar a ${chopp475FoscaLink}, prefira a geladeira comum ou poucos minutos no congelador.</p>

<h2>2. Não considerar o tamanho certo para o uso pretendido</h2>

<p>O ${copoDoseLink} não substitui uma taça de uso mais robusto — avalie a capacidade necessária antes de decidir só pelo visual.</p>

<h2>3. Não considerar o mínimo separado por modelo</h2>

<p>Cada modelo tem seu próprio pedido mínimo de 20 unidades — não é possível combinar quantidades de modelos diferentes para atingir um único mínimo.</p>

<h2>4. Pular a prova digital da arte</h2>

<p>A prova mostra como a arte vai ficar posicionada na peça antes da produção, especialmente relevante na ${tacaFoscaLink}, com sua superfície curva.</p>

<h2>5. Não planejar o prazo para eventos com data marcada</h2>

<p>O prazo de produção só começa após a aprovação da arte — para despedidas de solteiro, casamentos e eventos com data fixa, feche o pedido com antecedência.</p>

${ctaWhatsAppHtml("Olá! Quero tirar dúvidas antes de pedir meus produtos em vidro.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para evitar surpresas no seu pedido.</p>
`,
};

export const vidroComplementares: Post[] = [
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
