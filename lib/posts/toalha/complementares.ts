import type { Post } from "../../posts";
import { getImagemProduto } from "../../imagens";
import { ctaWhatsAppHtml, produtoLink, pilarProdutoLink, categoriaLink } from "../../postBlocks";

const linkCategoria = categoriaLink("Toalhas Personalizadas", "toalha");
const linkPilarCategoria = `<a href="/blog/guia-completo-toalhas-personalizadas/">guia completo de toalhas personalizadas</a>`;

function produtoComPilar(nome: string, slugVenda: string, slugPilar: string) {
  return `${produtoLink(nome, slugVenda)} (veja também o ${pilarProdutoLink("guia completo do produto", slugPilar)})`;
}

const lavaboLink = produtoComPilar("Toalha de Lavabo Personalizada 29x45cm", "toalha-lavabo-29x45-personalizada", "toalha-lavabo-29x45-guia");
const lavabinhoLink = produtoComPilar("Toalha Lavabinho Personalizada 21x38cm", "toalha-lavabinho-21x38-personalizada", "toalha-lavabinho-21x38-guia");

const preco: Post = {
  slug: "quanto-custa-toalha-personalizada-tabela-precos",
  titulo: "Quanto Custa Toalha Personalizada? Tabela de Preços por Quantidade",
  descricao:
    "Como funciona o preço da toalha de lavabo personalizada por tamanho e quantidade, e como pedir um orçamento certeiro.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "toalha",
  imagemCapa: getImagemProduto("toalha-lavabo-29x45-personalizada"),
  produtosRelacionados: ["toalha-lavabo-29x45-personalizada", "toalha-lavabinho-21x38-personalizada"],
  dataPublicacao: "2026-02-25T09:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "A toalha menor é sempre mais barata que a maior?",
      resposta:
        "Em geral sim, por usar menos tecido, mas a diferença de preço entre as duas não é tão grande quanto a diferença de tamanho sugere — vale consultar as duas faixas antes de decidir só pelo custo.",
    },
  ],
  conteudoHtml: `
<p>As duas opções de ${linkCategoria} — ${lavaboLink} e ${lavabinhoLink} — seguem o modelo de preço decrescente por quantidade, com pedido mínimo de 20 unidades cada.</p>

<h2>O que muda entre os dois tamanhos</h2>

<p>A toalha de lavabo (29x45cm) usa mais tecido e tem área de sublimação maior que a lavabinho (21x38cm), o que reflete em uma diferença de preço por unidade entre as duas — mas essa diferença costuma ser proporcionalmente menor do que a diferença de tamanho.</p>

<h2>Como decidir com base no orçamento</h2>

<p>Se o orçamento é fechado e a quantidade de peças é o mais importante (por exemplo, um evento com muitos convidados), a lavabinho rende mais peças pelo mesmo valor. Se a peça é para presente individual ou uso residencial de lavabo, a versão maior costuma ser preferida independente do custo.</p>

${ctaWhatsAppHtml("Olá! Quero saber o preço das toalhas personalizadas.", "Consultar preço agora pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para entender melhor as diferenças entre os produtos.</p>
`,
};

const comparacaoTecnicas: Post = {
  slug: "sublimacao-vs-bordado-toalha-personalizada-qual-escolher",
  titulo: "Sublimação vs Bordado em Toalha Personalizada: Qual Escolher?",
  descricao:
    "Diferenças entre sublimação e bordado na personalização de toalhas de lavabo, e por que a sublimação é usada neste catálogo.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "toalha",
  imagemCapa: getImagemProduto("toalha-lavabo-29x45-personalizada"),
  produtosRelacionados: ["toalha-lavabo-29x45-personalizada", "toalha-lavabinho-21x38-personalizada"],
  dataPublicacao: "2026-02-25T10:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "O bordado não seria mais elegante que a sublimação?",
      resposta:
        "É uma questão de estilo e não de qualidade — o bordado tem um acabamento mais tradicional, mas a sublimação permite reproduzir cores, fotos e gradientes que o bordado não consegue, além de ter um custo por unidade mais baixo em volume.",
    },
  ],
  conteudoHtml: `
<p>Ao pesquisar sobre ${linkCategoria}, é comum encontrar tanto sublimação quanto bordado como opções no mercado. Veja as diferenças antes de decidir.</p>

<h2>Sublimação: mais opções visuais, menor custo em volume</h2>

<p>A sublimação permite reproduzir fotos, gradientes de cor e artes complexas com fidelidade, algo que o bordado não realiza. Para pedidos corporativos em volume, como o de ${lavaboLink} e ${lavabinhoLink}, a sublimação também tende a ter custo por unidade mais baixo que o bordado.</p>

<h2>Bordado: acabamento mais tradicional, limitações visuais</h2>

<p>O bordado funciona melhor para logotipos simples em poucas cores e tem uma textura em relevo que alguns associam a um padrão hoteleiro mais tradicional — mas não reproduz fotos ou artes com muitos detalhes ou gradientes.</p>

<h2>Por que este catálogo usa sublimação</h2>

<p>A sublimação viabiliza personalização completa da toalha (não só um logo pequeno no canto), com cores vivas e fidelidade à arte enviada, mantendo o custo competitivo mesmo em pedidos grandes.</p>

${ctaWhatsAppHtml("Olá! Quero entender melhor a técnica de personalização da toalha.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais detalhes sobre o processo.</p>
`,
};

const guiaOcasiao: Post = {
  slug: "toalha-personalizada-casamento-cha-de-casa-nova-guia",
  titulo: "Toalha Personalizada para Casamento e Chá de Casa Nova: Guia de Compra",
  descricao:
    "Como escolher entre os tamanhos de toalha personalizada para presente de casamento, chá de casa nova ou uso hoteleiro.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "toalha",
  imagemCapa: getImagemProduto("toalha-lavabo-29x45-personalizada"),
  produtosRelacionados: ["toalha-lavabo-29x45-personalizada", "toalha-lavabinho-21x38-personalizada"],
  dataPublicacao: "2026-02-25T11:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual tamanho é mais indicado para presente de casamento?",
      resposta:
        "A toalha de lavabo 29x45cm costuma ser preferida como presente individual por ter mais presença visual, enquanto a lavabinho 21x38cm é mais usada em lembrancinhas de festa, onde a quantidade importa mais que o tamanho.",
    },
  ],
  conteudoHtml: `
<p>Toalhas personalizadas são um clássico de presente e lembrancinha — dentro de ${linkCategoria}, veja qual opção combina com cada ocasião.</p>

<h2>Para casamento e chá de casa nova</h2>

<p>A ${lavaboLink}, com os nomes do casal ou a data do casamento, é uma escolha tradicional de presente — o tamanho maior dá mais destaque à personalização e funciona bem como peça de decoração do lavabo.</p>

<h2>Para lembrancinhas de festa</h2>

<p>A ${lavabinhoLink}, por ser menor e ter pedido mínimo mais acessível em relação ao tamanho, é mais usada como lembrancinha para convidados de festas, chás de bebê ou eventos com muitos participantes.</p>

<h2>Para uso hoteleiro e pousadas</h2>

<p>Hotéis e pousadas costumam usar a toalha de lavabo maior com a logo do estabelecimento como item de amenities, reforçando a identidade visual do espaço em cada banheiro.</p>

${ctaWhatsAppHtml("Olá! Quero pedir toalhas personalizadas para um casamento/evento.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais ideias por ocasião.</p>
`,
};

const b2b: Post = {
  slug: "toalha-personalizada-hoteis-pousadas-volume",
  titulo: "Toalha Personalizada para Hotéis e Pousadas: Guia de Pedido em Volume",
  descricao:
    "Como hotéis e pousadas usam a toalha de lavabo personalizada com a marca do estabelecimento, e como planejar o pedido em volume.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "toalha",
  imagemCapa: getImagemProduto("toalha-lavabo-29x45-personalizada"),
  produtosRelacionados: ["toalha-lavabo-29x45-personalizada", "toalha-lavabinho-21x38-personalizada"],
  dataPublicacao: "2026-02-25T12:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "É melhor pedir a toalha maior ou menor para uso hoteleiro?",
      resposta:
        "Depende do uso: para lavabos de área social ou recepção, a maior tem mais presença visual; para quartos com espaço reduzido, a lavabinho pode ser mais prática.",
    },
  ],
  conteudoHtml: `
<p>Hotéis e pousadas são um dos principais públicos de ${linkCategoria}, usando a toalha personalizada como reforço de marca em cada banheiro do estabelecimento.</p>

<h2>Reforço de identidade visual</h2>

<p>A ${lavaboLink} com a logo do hotel ou pousada aplicada reforça a identidade visual do estabelecimento em cada quarto, sem custo adicional de troca frequente — a peça acompanha o padrão de decoração escolhido.</p>

<h2>Planejando o volume do pedido</h2>

<p>Para calcular a quantidade, considere o número de quartos multiplicado pela quantidade de toalhas por lavabo, mais uma margem de reposição para peças com desgaste natural pelo uso e lavagens frequentes.</p>

<h2>Padronização entre quartos</h2>

<p>Pedidos hoteleiros costumam usar a mesma arte em todas as unidades, o que simplifica a produção e reduz o custo por peça em comparação com pedidos de artes variadas (como presentes individuais).</p>

${ctaWhatsAppHtml("Olá! Quero orçamento de toalhas personalizadas para meu hotel/pousada.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais informações sobre pedidos corporativos.</p>
`,
};

const b2c: Post = {
  slug: "toalha-personalizada-presente-poucas-unidades",
  titulo: "Toalha Personalizada como Presente: Como Pedir Poucas Unidades",
  descricao:
    "Como pedir a toalha de lavabo personalizada em pequena quantidade, dividindo o pedido mínimo entre amigos ou família.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "toalha",
  imagemCapa: getImagemProduto("toalha-lavabo-29x45-personalizada"),
  produtosRelacionados: ["toalha-lavabo-29x45-personalizada", "toalha-lavabinho-21x38-personalizada"],
  dataPublicacao: "2026-02-25T13:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Posso pedir toalhas com nomes diferentes no mesmo lote?",
      resposta:
        "Sim — é uma prática comum quando o grupo divide o pedido mínimo, cada peça saindo com o nome ou arte específica de cada pessoa dentro do mesmo pedido.",
    },
  ],
  conteudoHtml: `
<p>Como o pedido mínimo de cada produto de ${linkCategoria} é de 20 unidades, quem quer presentear só uma pessoa costuma se organizar em grupo — veja como viabilizar isso.</p>

<h2>Como funciona a divisão do pedido</h2>

<p>Grupos de amigos ou familiares que querem presentear pessoas diferentes (por exemplo, madrinhas presenteando cada convidada com sua própria toalha personalizada) podem dividir o pedido mínimo, com cada peça recebendo um nome ou arte diferente.</p>

<h2>Ideias de presente</h2>
<ul>
<li>${lavaboLink} — presente de casamento, aniversário ou dia das mães, com nome ou frase.</li>
<li>${lavabinhoLink} — lembrancinha de chá de bebê, batizado ou aniversário infantil.</li>
</ul>

<h2>Planejando com antecedência</h2>

<p>Reúna os nomes ou artes de todos que vão participar do pedido antes de fechar o orçamento — isso evita atraso na produção, já que o prazo só conta a partir da aprovação de todas as artes.</p>

${ctaWhatsAppHtml("Olá! Quero fazer um pedido pequeno de toalha personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais ideias.</p>
`,
};

const cuidados: Post = {
  slug: "como-cuidar-toalha-personalizada-lavar-sem-desbotar",
  titulo: "Como Cuidar da Toalha Personalizada para Não Desbotar",
  descricao:
    "Dicas de lavagem e conservação para manter a estampa da toalha de lavabo personalizada por sublimação vívida por mais tempo.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "toalha",
  imagemCapa: getImagemProduto("toalha-lavabo-29x45-personalizada"),
  produtosRelacionados: ["toalha-lavabo-29x45-personalizada", "toalha-lavabinho-21x38-personalizada"],
  dataPublicacao: "2026-02-25T14:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Posso usar alvejante na toalha personalizada?",
      resposta:
        "Não é recomendado — o alvejante ataca diretamente os pigmentos da sublimação, desbotando a estampa de forma acelerada.",
    },
  ],
  conteudoHtml: `
<p>Tanto a ${lavaboLink} quanto a ${lavabinhoLink}, produtos de ${linkCategoria}, mantêm a estampa vívida por muito mais tempo com alguns cuidados simples na lavagem.</p>

<h2>Lavagem</h2>

<p>Lave em água fria ou morna, evitando temperaturas muito altas, que tendem a acelerar o desbotamento da sublimação. Evite alvejante, que ataca diretamente os pigmentos da imagem.</p>

<h2>Secagem</h2>

<p>Prefira secar à sombra ou em varal, evitando secadora em ciclos de calor alto — o calor excessivo repetido é o principal fator de desbotamento ao longo do tempo, mais que o próprio uso da toalha.</p>

<h2>Passar a ferro</h2>

<p>Se precisar passar, use temperatura baixa a média e, se possível, um pano entre o ferro e a área estampada, para não expor a imagem diretamente ao calor da chapa.</p>

<h2>Frequência de lavagem</h2>

<p>Para peças de uso hoteleiro com lavagem frequente, considere que o desbotamento gradual com o tempo é esperado — planeje reposição periódica das peças mais usadas.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre cuidados com minha toalha personalizada.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais informações sobre o produto.</p>
`,
};

const comoEscolher: Post = {
  slug: "toalha-lavabo-ou-lavabinho-como-escolher-tamanho",
  titulo: "Toalha de Lavabo ou Lavabinho? Como Escolher o Tamanho Certo",
  descricao:
    "Comparação entre a toalha de lavabo 29x45cm e a lavabinho 21x38cm para ajudar a decidir qual tamanho pedir.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "toalha",
  imagemCapa: getImagemProduto("toalha-lavabo-29x45-personalizada"),
  produtosRelacionados: ["toalha-lavabo-29x45-personalizada", "toalha-lavabinho-21x38-personalizada"],
  dataPublicacao: "2026-02-25T15:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "A diferença de tamanho afeta a qualidade da estampa?",
      resposta:
        "Não — a técnica de sublimação e a qualidade de impressão são as mesmas nos dois tamanhos, a diferença está apenas nas dimensões da peça.",
    },
  ],
  conteudoHtml: `
<p>A categoria de ${linkCategoria} tem dois tamanhos de toalha de lavabo. Veja qual escolher para o seu caso.</p>

<h2>Escolha a toalha de lavabo 29x45cm se...</h2>
<ul>
<li>O uso é como presente individual, com mais presença visual</li>
<li>É para uso hoteleiro em área social, onde o tamanho maior valoriza a decoração</li>
<li>Você quer mais espaço para uma arte mais elaborada ou uma foto</li>
</ul>

<h2>Escolha a lavabinho 21x38cm se...</h2>
<ul>
<li>O uso é como lembrancinha de festa em maior quantidade</li>
<li>O orçamento é mais restrito e o volume de peças importa mais que o tamanho individual</li>
<li>O espaço de uso (quarto, banheiro pequeno) pede uma peça mais compacta</li>
</ul>

<h2>Quando pedir os dois tamanhos</h2>

<p>Hotéis e pousadas às vezes combinam os dois — a ${lavaboLink} para áreas sociais e a ${lavabinhoLink} para quartos, mantendo a mesma identidade visual em toda a propriedade.</p>

${ctaWhatsAppHtml("Olá! Quero ajuda para escolher o tamanho da toalha personalizada.", "Pedir ajuda pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para conhecer os dois produtos em detalhe.</p>
`,
};

const sustentabilidade: Post = {
  slug: "toalha-personalizada-escolha-duradoura-menos-descarte",
  titulo: "Toalha Personalizada: Uma Escolha Mais Duradoura que Amenities Descartáveis",
  descricao:
    "Por que a toalha de lavabo personalizada, sendo reutilizável e lavável, é uma alternativa mais consciente a itens de banheiro descartáveis.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "toalha",
  imagemCapa: getImagemProduto("toalha-lavabo-29x45-personalizada"),
  produtosRelacionados: ["toalha-lavabo-29x45-personalizada", "toalha-lavabinho-21x38-personalizada"],
  dataPublicacao: "2026-02-25T16:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "A toalha de tecido é mais sustentável que toalha de papel descartável?",
      resposta:
        "Sim, no sentido de que é reutilizável centenas de vezes ao longo de sua vida útil, enquanto o papel descartável é usado uma única vez e descartado imediatamente.",
    },
  ],
  conteudoHtml: `
<p>Dentro de ${linkCategoria}, o argumento de sustentabilidade está na reutilização — uma peça de tecido lavável substitui o consumo repetido de itens descartáveis.</p>

<h2>Alternativa a toalhas de papel</h2>

<p>Em lavabos sociais e estabelecimentos comerciais, é comum o uso de toalhas de papel descartáveis, trocadas a cada uso. A ${lavaboLink} e a ${lavabinhoLink}, sendo laváveis, eliminam esse consumo repetido, sendo reutilizadas centenas de vezes ao longo de sua vida útil.</p>

<h2>Durabilidade do tecido e da estampa</h2>

<p>Com os cuidados de lavagem corretos, a estampa por sublimação se mantém por muitas lavagens, alongando a vida útil da peça e adiando a necessidade de reposição.</p>

<h2>Menos desperdício em eventos</h2>

<p>Em festas e eventos, a toalha personalizada como lembrancinha tem função dupla: além de decorativa, é um item de uso contínuo no dia a dia de quem recebe, ao contrário de lembrancinhas descartáveis usadas uma única vez.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento de toalhas personalizadas.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais informações.</p>
`,
};

const erros: Post = {
  slug: "5-erros-comprar-toalha-personalizada",
  titulo: "5 Erros ao Comprar Toalha Personalizada (e Como Evitar)",
  descricao:
    "Os erros mais comuns na hora de pedir toalha de lavabo personalizada — e como evitá-los antes de fechar o pedido.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "toalha",
  imagemCapa: getImagemProduto("toalha-lavabo-29x45-personalizada"),
  produtosRelacionados: ["toalha-lavabo-29x45-personalizada", "toalha-lavabinho-21x38-personalizada"],
  dataPublicacao: "2026-02-25T17:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual desses erros é o mais comum?",
      resposta:
        "Escolher o tamanho errado sem considerar o uso final — muita gente pede o tamanho maior sem necessidade, ou o menor quando queria mais destaque visual para a peça.",
    },
  ],
  conteudoHtml: `
<p>Alguns erros se repetem em pedidos de ${linkCategoria}. Veja os cinco mais comuns antes de fechar o seu.</p>

<h2>1. Escolher o tamanho sem considerar o uso final</h2>

<p>A ${lavaboLink} e a ${lavabinhoLink} atendem usos diferentes — avalie se o objetivo é presente individual, lembrancinha em quantidade ou uso hoteleiro antes de decidir pelo tamanho.</p>

<h2>2. Lavar com alvejante ou água muito quente</h2>

<p>Ambos aceleram o desbotamento da estampa sublimática — siga as recomendações de lavagem para preservar a peça por mais tempo.</p>

<h2>3. Não considerar o mínimo separado por tamanho</h2>

<p>Cada tamanho tem seu próprio pedido mínimo de 20 unidades — não é possível combinar as quantidades dos dois tamanhos para atingir um único mínimo.</p>

<h2>4. Pular a prova digital da arte</h2>

<p>A prova mostra como a arte vai ficar posicionada na peça antes da produção — pular essa etapa aumenta o risco de surpresas no resultado final.</p>

<h2>5. Não planejar o prazo para eventos com data marcada</h2>

<p>O prazo de produção só começa após a aprovação da arte. Para casamentos, chás e eventos com data fixa, feche o pedido com pelo menos um mês de antecedência.</p>

${ctaWhatsAppHtml("Olá! Quero tirar dúvidas antes de pedir minha toalha personalizada.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para evitar surpresas no seu pedido.</p>
`,
};

export const toalhaComplementares: Post[] = [
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
