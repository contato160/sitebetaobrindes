import type { Post } from "../../posts";
import { getImagemProduto } from "../../imagens";
import { ctaWhatsAppHtml, produtoLink, pilarProdutoLink, categoriaLink } from "../../postBlocks";

const linkCategoria = categoriaLink("Porcelanas Personalizadas", "porcelanas");
const linkPilarCategoria = `<a href="/blog/guia-completo-porcelanas-personalizadas/">guia completo de porcelanas personalizadas</a>`;

function produtoComPilar(nome: string, slugVenda: string, slugPilar: string) {
  return `${produtoLink(nome, slugVenda)} (veja também o ${pilarProdutoLink("guia completo do produto", slugPilar)})`;
}

const caneca100Link = produtoComPilar("Caneca de Porcelana 100ml Personalizada", "caneca-porcelana-100ml-personalizada", "caneca-porcelana-100ml-guia");
const canecaBionaLink = produtoComPilar("Caneca de Porcelana Biona 300ml Personalizada", "caneca-porcelana-biona-300ml-personalizada", "caneca-porcelana-biona-300ml-guia");
const canecaAlcaColoridaLink = produtoComPilar("Caneca de Porcelana com Interior e Alça Colorida Personalizada", "caneca-porcelana-interior-alca-colorida-personalizada", "caneca-porcelana-interior-alca-colorida-guia");
const canecaCoracaoLink = produtoComPilar("Caneca de Porcelana com Alça Coração Personalizada", "caneca-porcelana-alca-coracao-personalizada", "caneca-porcelana-alca-coracao-guia");
const canecaFallLink = produtoComPilar("Caneca de Porcelana Fall 350ml Personalizada", "caneca-porcelana-fall-350ml-personalizada", "caneca-porcelana-fall-350ml-guia");
const xicaraPetitLink = produtoComPilar("Xícara Petit com Pires 90ml Personalizada", "xicara-petit-pires-90ml-personalizada", "xicara-petit-pires-90ml-guia");
const xicara180Link = produtoComPilar("Xícara com Pires de Porcelana 180ml Personalizada", "xicara-pires-porcelana-180ml-personalizada", "xicara-pires-porcelana-180ml-guia");

const preco: Post = {
  slug: "quanto-custa-caneca-porcelana-personalizada-tabela-precos",
  titulo: "Quanto Custa Caneca de Porcelana Personalizada? Tabela de Preços",
  descricao:
    "Como o preço da caneca e xícara de porcelana personalizada varia por tamanho, acabamento e quantidade.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "porcelanas",
  imagemCapa: getImagemProduto("caneca-porcelana-100ml-personalizada"),
  produtosRelacionados: ["caneca-porcelana-100ml-personalizada", "caneca-porcelana-fall-350ml-personalizada", "xicara-petit-pires-90ml-personalizada"],
  dataPublicacao: "2026-03-02T09:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Uma caneca com alça ou acabamento colorido é mais cara que uma caneca branca simples?",
      resposta:
        "Sim, modelos com detalhes de acabamento como interior ou alça colorida têm um custo de material extra em relação à porcelana branca padrão, refletido no preço por unidade.",
    },
  ],
  conteudoHtml: `
<p>A categoria de ${linkCategoria} reúne sete modelos de tamanho e acabamento diferentes, com faixas de preço variadas.</p>

<h2>O que influencia o preço</h2>

<p>O tamanho é o primeiro fator — a ${caneca100Link}, mais compacta, tende a ter o menor custo, enquanto a ${canecaFallLink}, maior, custa mais. Detalhes de acabamento, como o interior ou alça colorida, também acrescentam custo ao modelo padrão branco.</p>

<h2>Xícaras vs canecas</h2>

<p>A ${xicaraPetitLink}, por vir com pires e ter um propósito mais decorativo (café expresso, chá), costuma ter precificação própria, diferente das canecas de uso diário.</p>

${ctaWhatsAppHtml("Olá! Quero saber o preço das canecas de porcelana personalizadas.", "Consultar preço agora pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para comparar os sete modelos em detalhe.</p>
`,
};

const comparacaoTecnicas: Post = {
  slug: "sublimacao-em-porcelana-como-funciona-personalizacao",
  titulo: "Sublimação em Porcelana: Como Funciona a Personalização de Canecas?",
  descricao:
    "Como a sublimação transforma uma caneca de porcelana branca em uma peça personalizada, e por que a técnica resiste bem ao uso diário.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "porcelanas",
  imagemCapa: getImagemProduto("caneca-porcelana-100ml-personalizada"),
  produtosRelacionados: ["caneca-porcelana-100ml-personalizada", "caneca-porcelana-biona-300ml-personalizada"],
  dataPublicacao: "2026-03-02T10:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "A imagem sai desbotada depois de algumas lavagens?",
      resposta:
        "Não, quando bem produzida — a sublimação integra a tinta ao revestimento cerâmico da peça, resultando em uma imagem que resiste bem a lavagens repetidas, diferente de um adesivo colado.",
    },
  ],
  conteudoHtml: `
<p>Todos os modelos de ${linkCategoria} usam sublimação como técnica de personalização — veja como o processo funciona.</p>

<h2>Como a tinta se integra à porcelana</h2>

<p>Na sublimação, a tinta se transforma em gás sob calor e penetra no revestimento cerâmico da caneca, como a ${caneca100Link} e a ${canecaBionaLink}, integrando-se à peça em vez de ficar só na superfície.</p>

<h2>Por que a técnica resiste bem ao uso diário</h2>

<p>Diferente de um adesivo ou impressão comum, que descasca com o atrito e a lavagem, a imagem por sublimação não risca nem descola com o manuseio normal, incluindo lavagens frequentes com esponja.</p>

<h2>Limitação da técnica</h2>

<p>A sublimação exige um revestimento branco (ou muito claro) na porcelana para que as cores reproduzam fielmente — por isso todos os modelos do catálogo partem de uma base branca ou clara antes da personalização.</p>

${ctaWhatsAppHtml("Olá! Quero entender melhor como funciona a sublimação nas canecas.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais detalhes técnicos.</p>
`,
};

const guiaOcasiao: Post = {
  slug: "caneca-porcelana-personalizada-casamento-cha-de-bebe-guia",
  titulo: "Caneca de Porcelana Personalizada para Casamento e Chá de Bebê: Guia",
  descricao:
    "Como escolher entre os modelos de caneca e xícara de porcelana personalizada para lembrancinha de casamento, chá de bebê ou aniversário.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "porcelanas",
  imagemCapa: getImagemProduto("caneca-porcelana-alca-coracao-personalizada"),
  produtosRelacionados: ["caneca-porcelana-alca-coracao-personalizada", "xicara-petit-pires-90ml-personalizada"],
  dataPublicacao: "2026-03-02T11:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual modelo é mais indicado como lembrancinha de casamento?",
      resposta:
        "A caneca com alça coração costuma ser a preferida para essa ocasião, pelo apelo visual romântico que combina com o tema do evento.",
    },
  ],
  conteudoHtml: `
<p>Canecas e xícaras de porcelana são um clássico de lembrancinha — dentro de ${linkCategoria}, veja qual combina com cada ocasião.</p>

<h2>Para casamento</h2>

<p>A ${canecaCoracaoLink}, com o formato de alça em coração, é uma das lembrancinhas mais procuradas para casamento, com os nomes do casal e a data do evento.</p>

<h2>Para chá de bebê e batizado</h2>

<p>A ${xicaraPetitLink}, mais delicada e compacta, funciona bem como lembrancinha de chá de bebê ou batizado, associada a um café ou chá servido durante a comemoração.</p>

<h2>Para aniversário e datas comemorativas</h2>

<p>Modelos de maior capacidade, para uso diário, funcionam melhor como presente de aniversário — a pessoa vai usar a caneca no dia a dia, não só guardá-la como lembrança.</p>

${ctaWhatsAppHtml("Olá! Quero pedir canecas personalizadas para um evento.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais ideias por ocasião.</p>
`,
};

const b2b: Post = {
  slug: "caneca-porcelana-personalizada-empresas-escritorio",
  titulo: "Caneca de Porcelana Personalizada para Empresas: Guia de Brinde de Escritório",
  descricao:
    "Como empresas usam a caneca de porcelana personalizada como brinde de escritório, kit de boas-vindas ou lembrança institucional.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "porcelanas",
  imagemCapa: getImagemProduto("caneca-porcelana-biona-300ml-personalizada"),
  produtosRelacionados: ["caneca-porcelana-biona-300ml-personalizada", "caneca-porcelana-fall-350ml-personalizada"],
  dataPublicacao: "2026-03-02T12:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Por que a caneca é um dos brindes corporativos mais recorrentes?",
      resposta:
        "Porque tem uso diário garantido no ambiente de trabalho (café, chá, água), mantendo a marca da empresa visível repetidamente, diferente de brindes de uso ocasional.",
    },
  ],
  conteudoHtml: `
<p>A caneca de porcelana é um dos brindes corporativos mais tradicionais de ${linkCategoria} — veja como diferentes empresas costumam usá-la.</p>

<h2>Brinde de escritório com uso diário</h2>

<p>A ${canecaBionaLink}, com boa capacidade, é usada por empresas como brinde de mesa de trabalho, mantendo a marca visível todos os dias durante o café ou chá dos colaboradores.</p>

<h2>Kits de boas-vindas</h2>

<p>A ${canecaFallLink} aparece com frequência em kits de onboarding de novos colaboradores, junto de outros itens de escritório, reforçando a cultura da empresa desde o primeiro dia.</p>

<h2>Padronização em pedidos grandes</h2>

<p>Pedidos corporativos costumam usar a mesma arte (logo + cores institucionais) em todas as peças, o que simplifica a produção e reduz o custo por unidade.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento corporativo de canecas personalizadas.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais aplicações corporativas.</p>
`,
};

const b2c: Post = {
  slug: "caneca-porcelana-personalizada-presente-poucas-unidades",
  titulo: "Caneca de Porcelana Personalizada como Presente: Como Pedir Poucas Unidades",
  descricao:
    "Como pedir a caneca ou xícara de porcelana personalizada em pequena quantidade, dividindo o pedido mínimo entre amigos ou família.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "porcelanas",
  imagemCapa: getImagemProduto("caneca-porcelana-interior-alca-colorida-personalizada"),
  produtosRelacionados: ["caneca-porcelana-interior-alca-colorida-personalizada", "xicara-pires-porcelana-180ml-personalizada"],
  dataPublicacao: "2026-03-02T13:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Posso pedir canecas com fotos diferentes no mesmo lote?",
      resposta:
        "Sim — é comum quando o grupo divide o pedido mínimo, cada caneca saindo com uma foto ou arte diferente dentro do mesmo pedido.",
    },
  ],
  conteudoHtml: `
<p>Como o pedido mínimo de cada modelo de ${linkCategoria} é de 20 unidades, quem quer presentear só uma pessoa costuma se organizar em grupo.</p>

<h2>Ideias de presente</h2>

<p>A ${canecaAlcaColoridaLink}, com o interior e a alça em cor viva, é uma escolha popular de presente por seu visual diferenciado em relação à caneca branca tradicional.</p>

<p>A ${xicara180Link}, com pires, funciona bem como presente mais elaborado, associado a um momento de chá ou café da manhã especial.</p>

<h2>Como viabilizar o pedido pequeno</h2>

<p>A forma mais comum é reunir um grupo de amigos ou familiares que também querem presentear pessoas diferentes na mesma ocasião, dividindo o pedido mínimo entre todos.</p>

${ctaWhatsAppHtml("Olá! Quero fazer um pedido pequeno de caneca personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais ideias de presente.</p>
`,
};

const cuidados: Post = {
  slug: "como-cuidar-caneca-porcelana-personalizada-lavar-sem-desbotar",
  titulo: "Como Cuidar da Caneca de Porcelana Personalizada para Não Desbotar",
  descricao:
    "Dicas de lavagem e uso para manter a estampa por sublimação da caneca de porcelana personalizada vívida por mais tempo.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "porcelanas",
  imagemCapa: getImagemProduto("caneca-porcelana-100ml-personalizada"),
  produtosRelacionados: ["caneca-porcelana-100ml-personalizada", "caneca-porcelana-fall-350ml-personalizada"],
  dataPublicacao: "2026-03-02T14:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Posso lavar a caneca personalizada na máquina de lavar louça?",
      resposta:
        "É preferível lavar à mão para preservar a estampa por mais tempo — a lavagem na máquina, especialmente em ciclos de alta temperatura e produtos abrasivos, pode acelerar o desbotamento com o uso repetido.",
    },
  ],
  conteudoHtml: `
<p>A ${caneca100Link} e a ${canecaFallLink}, produtos de ${linkCategoria}, mantêm a estampa vívida por muito mais tempo com alguns cuidados simples.</p>

<h2>Lavagem</h2>

<p>Prefira lavar à mão com esponja macia e detergente neutro. Se for usar a máquina de lavar louça, use ciclos mais suaves — o calor e o atrito repetido de ciclos intensos tendem a acelerar o desbotamento da imagem com o tempo.</p>

<h2>Uso no micro-ondas</h2>

<p>A porcelana é segura para micro-ondas, mas evite períodos muito longos e verifique se a arte cobre toda a superfície ou deixa uma borda livre, conforme a recomendação do fabricante para esse tipo de uso.</p>

<h2>Evite mudanças bruscas de temperatura</h2>

<p>Evite colocar a caneca gelada diretamente em contato com líquido fervente ou vice-versa — o choque térmico pode trincar a peça com o tempo.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre cuidados com minha caneca personalizada.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais informações sobre os produtos.</p>
`,
};

const comoEscolher: Post = {
  slug: "como-escolher-caneca-porcelana-personalizada-guia-definitivo",
  titulo: "Como Escolher a Caneca de Porcelana Personalizada Certa: Guia Definitivo",
  descricao:
    "Comparação entre os sete modelos de caneca e xícara de porcelana personalizada do catálogo para ajudar a decidir qual pedir.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "porcelanas",
  imagemCapa: getImagemProduto("caneca-porcelana-biona-300ml-personalizada"),
  produtosRelacionados: ["caneca-porcelana-biona-300ml-personalizada", "caneca-porcelana-alca-coracao-personalizada", "xicara-pires-porcelana-180ml-personalizada"],
  dataPublicacao: "2026-03-02T15:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual modelo é mais indicado para uso diário no escritório?",
      resposta:
        "Modelos de maior capacidade, como a caneca Biona 300ml ou a Fall 350ml, são mais indicados para quem quer aproveitar bem o café ou chá ao longo do dia sem precisar reabastecer com frequência.",
    },
  ],
  conteudoHtml: `
<p>A categoria de ${linkCategoria} tem sete modelos com propostas diferentes. Veja como decidir entre eles.</p>

<h2>Para uso diário</h2>
<p>A ${canecaBionaLink}, de maior capacidade, é a escolha mais prática para quem quer aproveitar bem o café ou chá ao longo do dia sem reabastecer com frequência.</p>

<h2>Para presente com apelo romântico</h2>
<p>A ${canecaCoracaoLink}, com o formato de alça diferenciado, tem apelo visual mais afetivo — ideal para presentes de casamento, namoro ou datas comemorativas.</p>

<h2>Para momentos mais elaborados</h2>
<p>A ${xicara180Link}, com pires, é indicada para quem quer um item de decoração para café ou chá servido com mais cerimônia, não só uso corrido do dia a dia.</p>

${ctaWhatsAppHtml("Olá! Quero ajuda para escolher a caneca personalizada ideal.", "Pedir ajuda pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para conhecer os sete modelos em detalhe.</p>
`,
};

const sustentabilidade: Post = {
  slug: "caneca-porcelana-personalizada-alternativa-copo-descartavel",
  titulo: "Caneca de Porcelana Personalizada: Uma Alternativa Real ao Copo Descartável",
  descricao:
    "Por que a caneca de porcelana personalizada, sendo reutilizável, reduz o consumo de copos descartáveis no escritório ou em casa.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "porcelanas",
  imagemCapa: getImagemProduto("caneca-porcelana-biona-300ml-personalizada"),
  produtosRelacionados: ["caneca-porcelana-biona-300ml-personalizada", "caneca-porcelana-100ml-personalizada"],
  dataPublicacao: "2026-03-02T16:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Uma caneca reutilizável realmente reduz o consumo de descartáveis no escritório?",
      resposta:
        "Sim — em ambientes de trabalho onde o copo descartável é usado várias vezes ao dia por pessoa, adotar uma caneca fixa elimina esse consumo repetido quase por completo.",
    },
  ],
  conteudoHtml: `
<p>Dentro de ${linkCategoria}, o argumento de sustentabilidade é direto: cada caneca reutilizada substitui um consumo repetido de copos plásticos ou de papel descartáveis.</p>

<h2>Impacto no ambiente de trabalho</h2>

<p>Empresas que distribuem a ${canecaBionaLink} como brinde para os colaboradores, incentivando o uso fixo em vez do copo descartável da máquina de café, reduzem significativamente o consumo desses itens de uso único ao longo do ano.</p>

<h2>Impacto no uso doméstico</h2>

<p>A ${caneca100Link}, para café expresso, substitui copinhos descartáveis usados em cápsulas ou máquinas de café doméstico — outro ponto comum de consumo repetido de descartáveis.</p>

<h2>Durabilidade da porcelana</h2>

<p>Diferente de canecas plásticas ou de baixa qualidade, a porcelana bem cuidada tem vida útil de muitos anos, o que reforça o argumento de reutilização de longo prazo.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento de canecas de porcelana personalizadas.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais informações.</p>
`,
};

const erros: Post = {
  slug: "5-erros-comprar-caneca-porcelana-personalizada",
  titulo: "5 Erros ao Comprar Caneca de Porcelana Personalizada (e Como Evitar)",
  descricao:
    "Os erros mais comuns na hora de pedir caneca ou xícara de porcelana personalizada — e como evitá-los antes de fechar o pedido.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "porcelanas",
  imagemCapa: getImagemProduto("caneca-porcelana-fall-350ml-personalizada"),
  produtosRelacionados: ["caneca-porcelana-fall-350ml-personalizada", "xicara-petit-pires-90ml-personalizada", "caneca-porcelana-100ml-personalizada"],
  dataPublicacao: "2026-03-02T17:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual desses erros é o mais comum?",
      resposta:
        "Enviar uma foto de baixa resolução — é o erro que mais compromete o resultado final da sublimação, e o mais fácil de evitar revisando a qualidade da imagem antes de enviar.",
    },
  ],
  conteudoHtml: `
<p>Alguns erros se repetem em pedidos de ${linkCategoria}. Veja os cinco mais comuns antes de fechar o seu.</p>

<h2>1. Enviar foto de baixa resolução</h2>

<p>Fotos comprimidas ou de baixa qualidade saem borradas na peça final, seja na ${canecaFallLink} ou em qualquer outro modelo — sempre envie o arquivo original, na maior qualidade disponível.</p>

<h2>2. Escolher o tamanho errado para o uso pretendido</h2>

<p>A ${xicaraPetitLink}, mais compacta, não é indicada para quem quer uma caneca de uso diário com grande capacidade — avalie o propósito antes de decidir pelo tamanho.</p>

<h2>3. Lavar na máquina em ciclos intensos</h2>

<p>Pode acelerar o desbotamento da estampa com o tempo — prefira lavagem à mão ou ciclos suaves na máquina.</p>

<h2>4. Pular a prova digital da arte</h2>

<p>A prova mostra como a imagem vai ficar posicionada na peça antes da produção — pular essa etapa aumenta o risco de resultado diferente do esperado, especialmente na ${caneca100Link}, com área de impressão mais reduzida.</p>

<h2>5. Não considerar o prazo para eventos com data marcada</h2>

<p>O prazo de produção só começa após a aprovação da arte — para casamentos, chás e eventos com data fixa, feche o pedido com antecedência.</p>

${ctaWhatsAppHtml("Olá! Quero tirar dúvidas antes de pedir minha caneca personalizada.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para evitar surpresas no seu pedido.</p>
`,
};

export const porcelanasComplementares: Post[] = [
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
