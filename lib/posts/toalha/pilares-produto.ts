import type { Post } from "../../posts";
import { ctaWhatsAppHtml, produtoLink, categoriaLink } from "../../postBlocks";

const linkCategoria = categoriaLink("Toalhas Personalizadas", "toalha");
const linkPilarCategoria = `<a href="/blog/guia-completo-toalhas-personalizadas/">guia completo de toalhas personalizadas</a>`;

const toalhaLavabo: Post = {
  slug: "toalha-lavabo-29x45-guia",
  titulo: "Toalha de Lavabo Personalizada 29x45cm: Guia Completo, Preço e Como Pedir",
  descricao:
    "Tudo sobre a Toalha de Lavabo Personalizada 29x45cm: como funciona a sublimação na faixa de personalização, ocasiões de uso, cuidados e como pedir.",
  tipo: "pilar-produto",
  categoriaRelacionada: "toalha",
  produtoRelacionado: "toalha-lavabo-29x45-personalizada",
  dataPublicacao: "2026-02-12T10:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  howTo: {
    titulo: "Como cuidar da sua Toalha de Lavabo Personalizada",
    passos: [
      "Lave separadamente das primeiras vezes, para evitar transferência de cor de outras peças sobre a faixa personalizada.",
      "Use água morna a fria e sabão neutro, evitando alvejantes que possam desbotar a arte impressa com o tempo.",
      "Evite amaciante em excesso diretamente sobre a faixa de sublimação, que pode deixar uma leve película sobre a impressão.",
      "Seque à sombra ou em varal, evitando secadora em temperatura muito alta com frequência.",
      "Passe a ferro em temperatura baixa a média, se necessário, sempre pelo lado avesso da faixa personalizada.",
    ],
  },
  faq: [
    {
      pergunta: "Esse é o tamanho padrão de toalha de lavabo do mercado?",
      resposta:
        "Sim, 29x45cm é uma medida comum para toalhas de banheiro social e de hóspedes — a escolha mais segura quando você não tem certeza de qual tamanho pedir para esse uso específico.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta:
        "20 unidades. Pousadas e hotéis costumam pedir volumes maiores, considerando reposição por desgaste natural de uso e lavagem frequente ao longo dos meses.",
    },
    {
      pergunta: "Como é feita a personalização desta toalha?",
      resposta:
        "Por sublimação, aplicada na faixa de tecido claro preparada especificamente para essa técnica — o restante da toalha mantém a cor e textura normais do tecido felpudo.",
    },
    {
      pergunta: "Essas toalhas são indicadas para uso comercial de hotelaria?",
      resposta:
        "Sim, é um dos usos mais comuns deste produto — pousadas e hotéis personalizam com a marca do estabelecimento para reforçar identidade visual no quarto ou banheiro do hóspede.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, contados a partir da aprovação da arte enviada.",
    },
    {
      pergunta: "Posso pedir com o nome de um casal, para presente de casamento?",
      resposta:
        "Sim, é um uso comum para pessoa física — jogo de toalhas com os nomes ou iniciais do casal, item clássico de presente de casamento ou chá de casa nova, a partir do pedido mínimo de 20 unidades.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Toalha de Lavabo Personalizada 29x45cm</strong> é o tamanho padrão de mercado para banheiros sociais e de hóspedes, com uma faixa de tecido preparada para receber personalização por sublimação. Dentro da categoria de ${linkCategoria}, é o modelo mais versátil — a escolha certa quando você não tem certeza de qual tamanho pedir.</p>

<h2>Personalização disponível</h2>

<p>A arte é aplicada por <strong>sublimação</strong> na faixa de tecido claro específica para essa técnica, geralmente posicionada próxima a uma das bordas da toalha. Logos simples e nomes/iniciais tendem a funcionar melhor nessa faixa do que artes muito detalhadas, já que a área disponível é relativamente estreita.</p>

<h2>Ocasiões de uso</h2>
<ul>
<li><strong>Kits de boas-vindas de pousadas e hotéis</strong> — reforça a identidade visual do local diretamente no banheiro do hóspede.</li>
<li><strong>Presentes de casamento e chá de casa nova</strong> — jogo de toalhas com os nomes do casal, presente afetivo e de uso diário.</li>
<li><strong>Banheiro social de casa própria</strong> — pessoa física que quer toalhas personalizadas com o nome da família.</li>
<li><strong>Brindes corporativos para spas e clínicas parceiras</strong> — reforço de marca em ambientes que já oferecem toalhas como parte da experiência.</li>
</ul>

<h2>Comparando com o tamanho lavabinho</h2>

<p>Se o uso pretendido é especificamente uma toalha de mãos menor ou um kit de amenities mais compacto, vale considerar a Toalha Lavabinho 21x38cm do catálogo — mais barata por unidade, mas com área de personalização proporcionalmente menor. Para o uso mais comum (banheiro social, presente de casamento), este tamanho de 29x45cm costuma ser a escolha mais segura.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento da Toalha de Lavabo Personalizada 29x45cm.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja mais no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "toalha-lavabo-29x45-personalizada")}.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre a Toalha de Lavabo Personalizada.", "Tirar dúvida pelo WhatsApp")}
`,
};

const toalhaLavabinho: Post = {
  slug: "toalha-lavabinho-21x38-guia",
  titulo: "Toalha Lavabinho Personalizada 21x38cm: Guia Rápido",
  descricao:
    "Toalha Lavabinho Personalizada 21x38cm: a versão compacta das toalhas do catálogo, indicada para kits de amenities e pedidos com orçamento mais enxuto.",
  tipo: "pilar-produto",
  categoriaRelacionada: "toalha",
  produtoRelacionado: "toalha-lavabinho-21x38-personalizada",
  dataPublicacao: "2026-02-12T11:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual a diferença entre a lavabinho e a toalha de lavabo padrão do catálogo?",
      resposta:
        "O tamanho: 21x38cm contra 29x45cm. A lavabinho é indicada para toalha de mãos compacta ou kits de amenities, enquanto a de lavabo padrão atende melhor o uso geral de banheiro social. A técnica de personalização (sublimação) é a mesma nas duas.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de toalhas personalizadas.",
    },
    {
      pergunta: "Esse tamanho é usado em quais contextos?",
      resposta:
        "É comum em kits de amenities de pousadas menores, toalhas de mão para pia de cozinha ou lavabo secundário, e pedidos com orçamento por unidade mais enxuto que ainda queiram manter a personalização.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Toalha Lavabinho Personalizada 21x38cm</strong> é a versão mais compacta entre as toalhas do catálogo, mantendo a mesma faixa de sublimação para personalização em um tamanho menor — indicada para kits de amenities ou pedidos com orçamento por unidade mais enxuto. Faz parte da categoria de ${linkCategoria} como alternativa mais em conta à Toalha de Lavabo 29x45cm.</p>

<h2>Personalização e ocasiões de uso</h2>

<p>A técnica usada é a mesma da linha: <strong>sublimação</strong>, aplicada na faixa de tecido claro específica para essa finalidade. Pelo tamanho reduzido, a área de personalização é proporcionalmente menor — artes muito detalhadas ou textos longos tendem a ficar mais legíveis no tamanho padrão de 29x45cm; para logo simples ou iniciais, a lavabinho funciona bem.</p>

<p>É usada com frequência em kits de amenities menores, como toalha de mão de apoio em cozinha ou lavabo secundário, e em pedidos onde o orçamento total por unidade é uma variável decisiva.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento da Toalha Lavabinho Personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja o comparativo completo no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "toalha-lavabinho-21x38-personalizada")}.</p>
`,
};

export const toalhaPilaresProduto: Post[] = [toalhaLavabo, toalhaLavabinho];
