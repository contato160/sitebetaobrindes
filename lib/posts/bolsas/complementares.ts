import type { Post } from "../../posts";
import { getImagemProduto } from "../../imagens";
import { ctaWhatsAppHtml, produtoLink, pilarProdutoLink, categoriaLink } from "../../postBlocks";

const linkCategoria = categoriaLink("Bolsas Personalizadas", "bolsas");
const linkPilarCategoria = `<a href="/blog/guia-completo-bolsas-personalizadas/">guia completo de bolsas personalizadas</a>`;

function produtoComPilar(nome: string, slugVenda: string, slugPilar: string) {
  return `${produtoLink(nome, slugVenda)} (veja também o ${pilarProdutoLink("guia completo do produto", slugPilar)})`;
}

const ecobagLink = produtoComPilar("Ecobag Personalizada", "ecobag-personalizada", "ecobag-personalizada-guia");
const mochilaoLink = produtoComPilar("Mochilão Personalizado", "mochilao-personalizado", "mochilao-personalizado-guia");
const toteBagLink = produtoComPilar("Tote Bag Personalizada", "tote-bag-personalizada", "tote-bag-personalizada-guia");
const toteBlackLink = produtoComPilar("Tote Bag Black Personalizada", "tote-bag-black-personalizada", "tote-bag-black-personalizada-guia");
const toteMinimalistaLink = produtoComPilar("Tote Minimalista Personalizada", "tote-minimalista-personalizada", "tote-minimalista-personalizada-guia");
const bolsaLonaCruaLink = produtoComPilar("Bolsa de Lona Crua Personalizada", "bolsa-lona-crua-personalizada", "bolsa-lona-crua-personalizada-guia");
const bolsaLonaPretaLink = produtoComPilar("Bolsa de Lona Preta Personalizada", "bolsa-lona-preta-personalizada", "bolsa-lona-preta-personalizada-guia");
const bolsaLonaPULink = produtoComPilar("Bolsa de Lona com Alça em PU Personalizada", "bolsa-lona-alca-pu-personalizada", "bolsa-lona-alca-pu-personalizada-guia");
const shoulderTecidoLink = produtoComPilar("Shoulder Bag de Tecido Personalizada", "shoulder-bag-tecido-personalizada", "shoulder-bag-tecido-personalizada-guia");
const shoulderNeopreneLink = produtoComPilar("Shoulder Bag de Neoprene Personalizada", "shoulder-bag-neoprene-personalizada", "shoulder-bag-neoprene-personalizada-guia");
const pocheteLonaLink = produtoComPilar("Pochete de Lona Personalizada", "pochete-lona-personalizada", "pochete-lona-personalizada-guia");
const athleta1Link = produtoComPilar("Bolsa Atheta Personalizada", "bolsa-atheta-personalizada-1", "bolsa-atheta-personalizada-1-guia");
const transporteRoupasLink = produtoComPilar("Bolsa de Transporte para Roupas Personalizada", "bolsa-transporte-roupas-personalizada", "bolsa-transporte-roupas-personalizada-guia");
const bolsaPufferLink = produtoComPilar("Bolsa Puffer Personalizada", "bolsa-puffer-personalizada", "bolsa-puffer-personalizada-guia");

const preco: Post = {
  slug: "quanto-custa-bolsa-personalizada-tabela-precos",
  titulo: "Quanto Custa Bolsa Personalizada? Tabela de Preços por Modelo",
  descricao:
    "Como o preço varia entre ecobag, mochilão e tote bag personalizados, os modelos mais pedidos da categoria de bolsas.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "bolsas",
  imagemCapa: getImagemProduto("ecobag-personalizada"),
  produtosRelacionados: ["ecobag-personalizada", "mochilao-personalizado", "tote-bag-personalizada"],
  dataPublicacao: "2026-03-05T09:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "A ecobag é sempre o modelo mais barato da categoria?",
      resposta:
        "Costuma ser uma das opções de entrada em preço, junto com a tote bag simples, mas modelos com mais estrutura como o mochilão têm custo de material e costura mais alto.",
    },
  ],
  conteudoHtml: `
<p>A categoria de ${linkCategoria} reúne 15 modelos de material, tamanho e estrutura diferentes, com faixas de preço variadas.</p>

<h2>O que influencia o preço</h2>

<p>A ${ecobagLink} e a ${toteBagLink}, com estrutura mais simples, costumam ter o custo mais acessível. Já o ${mochilaoLink}, com mais compartimentos e reforços estruturais, tem custo de material e costura mais alto, refletido no preço final.</p>

<h2>Como decidir com base no orçamento</h2>

<p>Para brindes de distribuição ampla (feiras, eventos com muitos participantes), os modelos mais simples rendem mais peças pelo mesmo orçamento. Para brindes de maior percepção de valor, modelos com mais estrutura justificam o investimento maior.</p>

${ctaWhatsAppHtml("Olá! Quero saber o preço das bolsas personalizadas.", "Consultar preço agora pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para comparar os 15 modelos em detalhe.</p>
`,
};

const comparacaoTecnicas: Post = {
  slug: "lona-tecido-ou-neoprene-bolsa-personalizada-comparacao",
  titulo: "Lona, Tecido ou Neoprene: Comparação de Materiais de Bolsa Personalizada",
  descricao:
    "Diferenças entre os principais materiais usados nas bolsas personalizadas do catálogo — lona, tecido e neoprene.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "bolsas",
  imagemCapa: getImagemProduto("bolsa-lona-crua-personalizada"),
  produtosRelacionados: ["bolsa-lona-crua-personalizada", "shoulder-bag-tecido-personalizada", "shoulder-bag-neoprene-personalizada"],
  dataPublicacao: "2026-03-05T10:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual material é mais resistente ao uso diário?",
      resposta:
        "A lona costuma ser a mais resistente ao desgaste e ao peso, enquanto o neoprene se destaca pela resistência à umidade — a escolha ideal depende mais do uso pretendido do que de qual material é 'melhor' de forma geral.",
    },
  ],
  conteudoHtml: `
<p>Cada material de ${linkCategoria} tem características bem diferentes — veja o que esperar de cada um.</p>

<h2>${bolsaLonaCruaLink}: lona</h2>

<p>Material resistente e de textura mais rústica, ideal para peso e uso frequente — é o material mais tradicional para bolsas personalizadas de uso diário ou brinde corporativo.</p>

<h2>${shoulderTecidoLink}: tecido</h2>

<p>Mais leve e maleável que a lona, com boa aceitação de estampas por sublimação — indicado para um visual mais casual e leve no dia a dia.</p>

<h2>${shoulderNeopreneLink}: neoprene</h2>

<p>Material emborrachado, resistente à umidade e com boa flexibilidade — bom para uso em contextos onde a peça pode entrar em contato com água ou suor, como academia ou praia.</p>

${ctaWhatsAppHtml("Olá! Quero entender melhor os materiais das bolsas personalizadas.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais detalhes sobre cada material.</p>
`,
};

const guiaOcasiao: Post = {
  slug: "bolsa-personalizada-feira-viagem-dia-a-dia-guia",
  titulo: "Ecobag, Pochete e Mochilão Personalizados: Guia por Ocasião de Uso",
  descricao:
    "Como escolher entre ecobag, pochete de lona e mochilão personalizados conforme o uso: feira, viagem ou dia a dia.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "bolsas",
  imagemCapa: getImagemProduto("ecobag-personalizada"),
  produtosRelacionados: ["ecobag-personalizada", "pochete-lona-personalizada", "mochilao-personalizado"],
  dataPublicacao: "2026-03-05T11:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual modelo é mais indicado para brinde de feira de negócios?",
      resposta:
        "A ecobag é a escolha mais tradicional para esse contexto, por ser leve, dobrável e prática para carregar material impresso e outros brindes recebidos durante o evento.",
    },
  ],
  conteudoHtml: `
<p>Cada modelo de ${linkCategoria} se encaixa melhor em um tipo de uso — veja como escolher conforme a ocasião.</p>

<h2>Para feiras e eventos</h2>

<p>A ${ecobagLink} é a escolha mais tradicional para esse contexto — leve, dobrável e prática para carregar catálogos, brindes e outros materiais recebidos durante o evento.</p>

<h2>Para viagem e uso hands-free</h2>

<p>A ${pocheteLonaLink} é indicada para quem quer as mãos livres durante passeios ou viagens curtas, carregando apenas o essencial (celular, carteira, chaves).</p>

<h2>Para dia a dia com mais volume</h2>

<p>O ${mochilaoLink}, com mais compartimentos e estrutura, atende quem precisa carregar notebook, material de trabalho ou itens de academia no dia a dia.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento de bolsas personalizadas.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais ideias por ocasião.</p>
`,
};

const b2b: Post = {
  slug: "bolsa-personalizada-brinde-corporativo-empresas",
  titulo: "Bolsa Personalizada como Brinde Corporativo: Guia para Empresas",
  descricao:
    "Como empresas usam a ecobag e a tote bag black personalizadas como brinde institucional em feiras, eventos e kits de boas-vindas.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "bolsas",
  imagemCapa: getImagemProduto("ecobag-personalizada"),
  produtosRelacionados: ["ecobag-personalizada", "tote-bag-black-personalizada"],
  dataPublicacao: "2026-03-05T12:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Por que a ecobag é um dos brindes corporativos mais recorrentes?",
      resposta:
        "Porque tem baixo custo unitário, uso prático no dia a dia e ainda carrega uma mensagem de sustentabilidade, o que reforça positivamente a imagem da empresa que a distribui.",
    },
  ],
  conteudoHtml: `
<p>A bolsa personalizada é um dos brindes corporativos mais versáteis de ${linkCategoria} — veja como diferentes empresas costumam usá-la.</p>

<h2>Ecobag para distribuição ampla</h2>

<p>A ${ecobagLink}, com a logo da empresa, é usada em feiras, congressos e ações de marketing de rua, por ter baixo custo unitário e ser um item que as pessoas realmente reutilizam.</p>

<h2>Tote bag black para brinde de maior formalidade</h2>

<p>A ${toteBlackLink}, com visual mais sóbrio, é indicada para brindes de maior formalidade — clientes VIP, eventos corporativos de perfil executivo ou parceiros estratégicos.</p>

<h2>Padronização em pedidos grandes</h2>

<p>Pedidos corporativos costumam usar a mesma arte (logo + cores institucionais) em todas as peças, simplificando a produção e reduzindo o custo por unidade.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento corporativo de bolsas personalizadas.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais aplicações corporativas.</p>
`,
};

const b2c: Post = {
  slug: "bolsa-personalizada-presente-poucas-unidades",
  titulo: "Bolsa Personalizada como Presente: Como Pedir Poucas Unidades",
  descricao:
    "Como pedir a bolsa puffer ou a tote minimalista personalizada em pequena quantidade para presentear.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "bolsas",
  imagemCapa: getImagemProduto("bolsa-puffer-personalizada"),
  produtosRelacionados: ["bolsa-puffer-personalizada", "tote-minimalista-personalizada"],
  dataPublicacao: "2026-03-05T13:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "A bolsa puffer é uma boa ideia de presente para adolescentes?",
      resposta:
        "Sim, o visual atual e o material acolchoado costumam agradar esse público, especialmente quando personalizada com nome ou uma frase.",
    },
  ],
  conteudoHtml: `
<p>Como o pedido mínimo de cada modelo de ${linkCategoria} é de 20 unidades, quem quer presentear só uma pessoa costuma se organizar em grupo.</p>

<h2>Ideias de presente</h2>

<p>A ${bolsaPufferLink}, com visual atual e acolchoado confortável, é uma ideia de presente popular entre jovens e adultos que acompanham tendências de moda.</p>

<p>A ${toteMinimalistaLink}, com design mais discreto, funciona bem como presente para quem prefere peças mais clean e versáteis para o dia a dia.</p>

<h2>Como viabilizar o pedido pequeno</h2>

<p>A forma mais comum é reunir um grupo de amigos ou familiares que também querem presentear pessoas diferentes na mesma ocasião, dividindo o pedido mínimo entre todos.</p>

${ctaWhatsAppHtml("Olá! Quero fazer um pedido pequeno de bolsa personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais ideias de presente.</p>
`,
};

const cuidados: Post = {
  slug: "como-cuidar-bolsa-lona-personalizada-durar-mais",
  titulo: "Como Cuidar da Bolsa de Lona Personalizada para Durar Mais",
  descricao:
    "Dicas de limpeza e conservação para a bolsa de lona preta e a bolsa com alça em PU personalizadas manterem o visual por mais tempo.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "bolsas",
  imagemCapa: getImagemProduto("bolsa-lona-preta-personalizada"),
  produtosRelacionados: ["bolsa-lona-preta-personalizada", "bolsa-lona-alca-pu-personalizada"],
  dataPublicacao: "2026-03-05T14:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Posso lavar a bolsa de lona na máquina?",
      resposta:
        "É preferível lavar à mão para preservar a estampa e a estrutura da peça por mais tempo — a máquina pode acelerar o desgaste tanto do tecido quanto da área personalizada.",
    },
  ],
  conteudoHtml: `
<p>A ${bolsaLonaPretaLink} e a ${bolsaLonaPULink}, produtos de ${linkCategoria}, mantêm o visual por mais tempo com alguns cuidados simples.</p>

<h2>Lavagem</h2>

<p>Prefira lavar à mão com água fria ou morna e sabão neutro, evitando esfregar diretamente sobre a área personalizada. Evite a máquina de lavar, que pode acelerar o desgaste da peça.</p>

<h2>Cuidados com a alça em PU</h2>

<p>A alça em PU (poliuretano) da ${bolsaLonaPULink} deve ser limpa com pano levemente úmido, evitando molhar excessivamente, o que pode ressecar ou craquelar o material com o tempo.</p>

<h2>Secagem</h2>

<p>Seque à sombra, evitando sol direto, que pode desbotar tanto o tecido quanto a estampa personalizada ao longo do tempo.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre cuidados com minha bolsa personalizada.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais informações sobre os produtos.</p>
`,
};

const comoEscolher: Post = {
  slug: "tote-bag-tote-black-ou-minimalista-como-escolher",
  titulo: "Tote Bag, Tote Black ou Tote Minimalista? Como Escolher o Modelo Certo",
  descricao:
    "Comparação entre as três variações de tote bag personalizada do catálogo para ajudar a decidir qual pedir.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "bolsas",
  imagemCapa: getImagemProduto("tote-bag-personalizada"),
  produtosRelacionados: ["tote-bag-personalizada", "tote-bag-black-personalizada", "tote-minimalista-personalizada"],
  dataPublicacao: "2026-03-05T15:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "As três totes têm o mesmo tamanho?",
      resposta:
        "As dimensões são próximas entre os três modelos — a principal diferença está na cor, no acabamento e no estilo visual, não no volume de carga.",
    },
  ],
  conteudoHtml: `
<p>A categoria de ${linkCategoria} tem três variações de tote bag. Veja qual escolher para o seu caso.</p>

<h2>${toteBagLink}: clássica</h2>
<p>Modelo tradicional, com boa versatilidade para qualquer tipo de arte ou logo — a escolha mais segura para brindes de público amplo.</p>

<h2>${toteBlackLink}: visual sóbrio</h2>
<p>Com a base preta, tem um visual mais sofisticado e discreto — indicada para brindes de maior formalidade ou marcas com identidade visual mais séria.</p>

<h2>${toteMinimalistaLink}: design clean</h2>
<p>Com design mais minimalista, é indicada para marcas que valorizam uma estética mais despojada e atual.</p>

<h2>Como decidir</h2>

<p>A escolha entre as três depende mais da identidade visual da marca e do público-alvo do que de diferenças funcionais — todas cumprem bem o papel de bolsa de uso versátil no dia a dia.</p>

${ctaWhatsAppHtml("Olá! Quero ajuda para escolher entre os modelos de tote bag.", "Pedir ajuda pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para conhecer os três modelos em detalhe.</p>
`,
};

const sustentabilidade: Post = {
  slug: "ecobag-bolsa-lona-alternativa-sacola-plastica",
  titulo: "Ecobag e Bolsa de Lona: Uma Alternativa Real à Sacola Plástica",
  descricao:
    "Por que a ecobag e a bolsa de lona crua personalizadas, sendo reutilizáveis, reduzem o consumo de sacolas plásticas descartáveis.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "bolsas",
  imagemCapa: getImagemProduto("ecobag-personalizada"),
  produtosRelacionados: ["ecobag-personalizada", "bolsa-lona-crua-personalizada"],
  dataPublicacao: "2026-03-05T16:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "A ecobag realmente reduz o consumo de sacolas plásticas?",
      resposta:
        "Sim, é um dos argumentos de sustentabilidade mais diretos entre os brindes do catálogo — cada ecobag reutilizada substitui dezenas de sacolas plásticas de uso único ao longo de sua vida útil.",
    },
  ],
  conteudoHtml: `
<p>Dentro de ${linkCategoria}, o argumento de sustentabilidade é direto: cada bolsa reutilizável substitui um consumo repetido de sacolas plásticas descartáveis.</p>

<h2>O impacto da reutilização</h2>

<p>A ${ecobagLink}, usada nas compras do dia a dia em vez de sacolas plásticas do supermercado, substitui dezenas dessas sacolas ao longo de sua vida útil, sendo lavada e reutilizada indefinidamente.</p>

<h2>Bolsa de lona como alternativa duradoura</h2>

<p>A ${bolsaLonaCruaLink}, com material resistente, tem vida útil de anos — diferente de sacolas descartáveis, não precisa de reposição frequente, reduzindo o consumo repetido de materiais de uso único.</p>

<h2>Ecobag como reforço de mensagem institucional</h2>

<p>Empresas que distribuem ecobags como brinde, muitas vezes dentro de campanhas de sustentabilidade, reforçam esse hábito entre clientes e colaboradores, associando a marca a uma escolha mais consciente.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento de ecobags e bolsas de lona personalizadas.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais informações.</p>
`,
};

const erros: Post = {
  slug: "5-erros-comprar-bolsa-personalizada",
  titulo: "5 Erros ao Comprar Bolsa Personalizada (e Como Evitar)",
  descricao:
    "Os erros mais comuns na hora de pedir bolsa Atheta, bolsa de transporte para roupas ou shoulder bag personalizada — e como evitá-los.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "bolsas",
  imagemCapa: getImagemProduto("bolsa-atheta-personalizada-1"),
  produtosRelacionados: ["bolsa-atheta-personalizada-1", "bolsa-transporte-roupas-personalizada", "shoulder-bag-tecido-personalizada"],
  dataPublicacao: "2026-03-05T17:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual desses erros é o mais comum?",
      resposta:
        "Escolher o modelo sem considerar o propósito real de uso — pedir uma bolsa de uso casual quando o objetivo era transporte de itens específicos, como roupas, por exemplo.",
    },
  ],
  conteudoHtml: `
<p>Alguns erros se repetem em pedidos de ${linkCategoria}. Veja os cinco mais comuns antes de fechar o seu.</p>

<h2>1. Escolher o modelo sem considerar o propósito de uso</h2>

<p>A ${transporteRoupasLink} tem um propósito bem específico (transporte de roupas), diferente de bolsas de uso casual como a ${athleta1Link} — avalie o objetivo antes de decidir.</p>

<h2>2. Não considerar o material para o contexto de uso</h2>

<p>A ${shoulderTecidoLink}, mais leve, pode não ser a melhor escolha para uso muito pesado ou frequente — avalie a resistência necessária antes de decidir só pelo visual.</p>

<h2>3. Lavar na máquina</h2>

<p>Pode acelerar o desgaste do material e da estampa — prefira lavagem manual para todos os modelos de tecido e lona da categoria.</p>

<h2>4. Pular a prova digital da arte</h2>

<p>A prova mostra como a logo ou arte vai ficar posicionada na peça antes da produção — pular essa etapa aumenta o risco de resultado diferente do esperado.</p>

<h2>5. Não considerar o mínimo separado por modelo</h2>

<p>Cada modelo de ${linkCategoria} tem seu próprio pedido mínimo de 20 unidades — não é possível combinar quantidades de modelos diferentes para atingir um único mínimo.</p>

${ctaWhatsAppHtml("Olá! Quero tirar dúvidas antes de pedir minha bolsa personalizada.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para evitar surpresas no seu pedido.</p>
`,
};

export const bolsasComplementares: Post[] = [
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
