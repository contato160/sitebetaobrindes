import type { Post } from "../../posts";
import { ctaWhatsAppHtml, produtoLink, categoriaLink } from "../../postBlocks";

const linkCategoria = categoriaLink("Porcelanas Personalizadas", "porcelanas");
const linkPilarCategoria = `<a href="/blog/guia-completo-porcelanas-personalizadas/">guia completo de porcelanas personalizadas</a>`;

const caneca100ml: Post = {
  slug: "caneca-porcelana-100ml-guia",
  titulo: "Caneca de Porcelana 100ml Personalizada: Guia Completo, Preço e Como Pedir",
  descricao:
    "Guia da Caneca de Porcelana 100ml Personalizada, o modelo mais buscado da categoria: personalização, ocasiões de uso, cuidados e como pedir.",
  tipo: "pilar-produto",
  categoriaRelacionada: "porcelanas",
  produtoRelacionado: "caneca-porcelana-100ml-personalizada",
  dataPublicacao: "2026-02-17T10:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  howTo: {
    titulo: "Como cuidar da sua Caneca de Porcelana 100ml",
    passos: [
      "Lave à mão com água morna e detergente neutro, evitando esponjas abrasivas na área da arte impressa.",
      "Evite deixar café ou chá parado por muitas horas, o que pode manchar o interior com o tempo.",
      "Prefira lavagem manual à lava-louças, para preservar a nitidez da arte por mais tempo.",
      "Não use a caneca para bebidas muito ácidas por longos períodos sem lavar logo em seguida.",
    ],
  },
  faq: [
    {
      pergunta: "Por que este é o modelo mais buscado da categoria?",
      resposta:
        "Porque o tamanho compacto (100ml) e o formato clássico atendem praticamente qualquer uso — café expresso, brinde de mesa, presente simples — sem exigir uma ocasião específica. É a escolha mais segura quando você não tem certeza de qual porcelana pedir.",
    },
    {
      pergunta: "Esse tamanho é indicado para café ou só decoração?",
      resposta:
        "Funciona bem para café, expresso ou doses pequenas de bebida quente — o volume de 100ml é compatível com o uso real de bebida, não é só um item decorativo em miniatura.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de porcelanas personalizadas.",
    },
    {
      pergunta: "Como é feita a personalização desta caneca?",
      resposta:
        "Por sublimação, cobrindo toda a superfície externa disponível. Você aprova a prova digital da arte antes de qualquer unidade entrar em produção.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, contados a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Caneca de Porcelana 100ml Personalizada</strong> é o modelo mais buscado dentro da categoria de ${linkCategoria} — tamanho compacto e formato clássico, que atende praticamente qualquer uso sem exigir uma ocasião específica. É a escolha mais segura quando você não tem certeza de qual porcelana pedir.</p>

<h2>Personalização disponível</h2>

<p>A arte é aplicada por <strong>sublimação</strong>, cobrindo toda a superfície externa disponível da caneca. Como em todo o catálogo, a produção só começa após você aprovar a prova digital, garantindo que o resultado final saia exatamente como planejado.</p>

<h2>Ocasiões de uso</h2>
<ul>
<li><strong>Brindes corporativos de fim de ano</strong> — item clássico, de baixo custo por unidade e alta aceitação.</li>
<li><strong>Café de reunião e mesa de escritório</strong> — volume compacto ideal para expresso ou dose pequena.</li>
<li><strong>Presentes simples e diretos</strong> — para pessoa física que quer um mimo sem gasto elevado por unidade.</li>
<li><strong>Kits de boas-vindas de pousadas</strong> — item de decoração e uso prático no quarto do hóspede.</li>
</ul>

${ctaWhatsAppHtml("Olá! Quero orçamento da Caneca de Porcelana 100ml Personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja o comparativo completo no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "caneca-porcelana-100ml-personalizada")}.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre a Caneca de Porcelana 100ml.", "Tirar dúvida pelo WhatsApp")}
`,
};

const canecaBiona300ml: Post = {
  slug: "caneca-porcelana-biona-300ml-guia",
  titulo: "Caneca de Porcelana Biona 300ml Personalizada: Guia Rápido",
  descricao:
    "Caneca de Porcelana Biona 300ml Personalizada: o formato clássico de volume padrão, ocasiões de uso e como pedir com a arte da sua marca.",
  tipo: "pilar-produto",
  categoriaRelacionada: "porcelanas",
  produtoRelacionado: "caneca-porcelana-biona-300ml-personalizada",
  dataPublicacao: "2026-02-17T11:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual a diferença entre esta caneca e a de 100ml do catálogo?",
      resposta:
        "O volume: 300ml contra 100ml. Esta é o tamanho padrão de caneca de café/chá do dia a dia, enquanto a de 100ml é mais compacta, voltada a doses menores como expresso.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de porcelanas.",
    },
    {
      pergunta: "Como é feita a personalização?",
      resposta:
        "Por sublimação, cobrindo a superfície externa da caneca. A prova digital é aprovada por você antes da produção.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Caneca de Porcelana Biona 300ml Personalizada</strong> é o formato clássico de volume padrão dentro da categoria de ${linkCategoria} — sem detalhes extras de cor, é a opção mais neutra e versátil para quem quer o volume tradicional de caneca de café ou chá do dia a dia.</p>

<h2>Personalização e ocasiões de uso</h2>

<p>A arte é aplicada por <strong>sublimação</strong> na superfície externa, com o mesmo processo de prova digital de aprovação usado em todo o catálogo. É indicada para brindes corporativos de distribuição ampla, presentes simples e qualquer contexto onde o volume padrão de 300ml é mais adequado que o formato compacto de 100ml.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento da Caneca de Porcelana Biona 300ml Personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Compare com os demais modelos no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "caneca-porcelana-biona-300ml-personalizada")}.</p>
`,
};

const canecaInteriorColorida: Post = {
  slug: "caneca-porcelana-interior-alca-colorida-guia",
  titulo: "Caneca de Porcelana com Interior e Alça Colorida Personalizada: Guia Completo",
  descricao:
    "Guia da Caneca de Porcelana com Interior e Alça Colorida Personalizada: como usar a cor para diferenciar setores ou dar identidade ao brinde, ocasiões de uso e como pedir.",
  tipo: "pilar-produto",
  categoriaRelacionada: "porcelanas",
  produtoRelacionado: "caneca-porcelana-interior-alca-colorida-personalizada",
  dataPublicacao: "2026-02-17T12:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Quais cores estão disponíveis para o interior e a alça?",
      resposta:
        "A disponibilidade de cor no momento do seu pedido é confirmada no orçamento, já que pode variar conforme o lote em estoque. É comum encontrar opções como vermelho, azul, verde e preto, entre outras.",
    },
    {
      pergunta: "Por que escolher esta caneca em vez do modelo todo branco?",
      resposta:
        "O toque de cor no interior e na alça ajuda a diferenciar visualmente o brinde — útil para empresas que querem usar cores diferentes por setor ou nível hierárquico, ou simplesmente para dar mais identidade visual ao produto além da arte impressa.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de porcelanas.",
    },
    {
      pergunta: "Como é feita a personalização desta caneca?",
      resposta:
        "A arte é aplicada por sublimação na área externa branca da caneca — a parte colorida (interior e alça) não recebe a impressão, servindo como elemento de contraste visual.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Caneca de Porcelana com Interior e Alça Colorida Personalizada</strong> soma um toque de cor ao design branco clássico — o corpo externo permanece branco para receber a arte por sublimação, enquanto o interior e a alça ganham uma cor de contraste. Dentro da categoria de ${linkCategoria}, é a opção certa quando você quer diferenciar visualmente o brinde além da arte impressa.</p>

<h2>Como usar a cor a seu favor</h2>

<p>Empresas que pedem essa caneca para mais de um setor ou nível hierárquico costumam usar cores diferentes como código visual simples — por exemplo, uma cor para a equipe operacional e outra para a liderança, mantendo a mesma arte de logo em ambas. Para presentes pessoais, a cor pode simplesmente refletir a preferência de quem vai receber.</p>

<h2>Personalização disponível</h2>

<p>A arte é aplicada por <strong>sublimação</strong> na área externa branca da caneca — a parte colorida (interior e alça) não recebe impressão, funcionando como elemento de contraste visual que emoldura a arte aplicada.</p>

<h2>Ocasiões de uso</h2>
<ul>
<li><strong>Diferenciação de setores em brindes corporativos</strong> — cor como código visual entre equipes ou níveis hierárquicos.</li>
<li><strong>Kits com identidade de marca mais forte</strong> — quando a paleta de cores da empresa é parte importante do brinde.</li>
<li><strong>Presentes personalizados por preferência de cor</strong> — pessoa física que quer escolher a cor favorita de quem vai receber.</li>
</ul>

${ctaWhatsAppHtml(
  "Olá! Quero orçamento da Caneca de Porcelana com Interior e Alça Colorida.",
  "Pedir orçamento pelo WhatsApp"
)}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja mais no ${linkPilarCategoria} ou acesse a ${produtoLink(
    "página do produto",
    "caneca-porcelana-interior-alca-colorida-personalizada"
  )}.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre a Caneca com Interior e Alça Colorida.", "Tirar dúvida pelo WhatsApp")}
`,
};

const canecaAlcaCoracao: Post = {
  slug: "caneca-porcelana-alca-coracao-guia",
  titulo: "Caneca de Porcelana com Alça Coração Personalizada: Guia Completo, Preço e Como Pedir",
  descricao:
    "Guia da Caneca de Porcelana com Alça Coração Personalizada: o presente afetivo mais pedido da categoria, ocasiões de uso e como pedir com fotos ou mensagens.",
  tipo: "pilar-produto",
  categoriaRelacionada: "porcelanas",
  produtoRelacionado: "caneca-porcelana-alca-coracao-personalizada",
  dataPublicacao: "2026-02-17T13:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  howTo: {
    titulo: "Como cuidar da sua Caneca com Alça Coração",
    passos: [
      "Lave à mão com água morna e detergente neutro, com cuidado extra na curvatura da alça em formato de coração.",
      "Evite lava-louças, que pode desgastar a arte impressa mais rápido que a lavagem manual.",
      "Seque bem antes de guardar, evitando manchas de água no acabamento.",
      "Evite impactos diretos na alça, que é mais fina que uma alça convencional pelo formato decorativo.",
    ],
  },
  faq: [
    {
      pergunta: "Que tipo de arte funciona melhor nesta caneca?",
      resposta:
        "Fotos de casal, mensagens de amor, datas especiais (aniversário de namoro, casamento) e nomes combinados são os usos mais comuns — o formato de coração da alça já comunica a intenção afetiva do presente antes mesmo de olhar a arte impressa.",
    },
    {
      pergunta: "Posso pedir só uma ou duas unidades para presentear?",
      resposta:
        "O pedido mínimo é de 20 unidades, mesmo para presente individual. Uma saída comum é dividir o pedido com outras pessoas — por exemplo, madrinhas e padrinhos de casamento que quiserem uma lembrança igual — para viabilizar o pedido dentro do mínimo.",
    },
    {
      pergunta: "Qual a quantidade mínima para pedidos corporativos?",
      resposta:
        "20 unidades, o mesmo padrão de toda a categoria. Empresas que vendem produtos ou serviços para casais (fotógrafos de casamento, buffets, cerimonialistas) costumam usar esta caneca como brinde de parceria com esse público.",
    },
    {
      pergunta: "Como é feita a personalização?",
      resposta:
        "Por sublimação, na área externa da caneca. Você aprova a prova digital antes de qualquer unidade entrar em produção.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, contados a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Caneca de Porcelana com Alça Coração Personalizada</strong> tem a alça no formato de coração — um apelo afetivo forte que comunica a intenção do presente antes mesmo de olhar a arte impressa. Dentro da categoria de ${linkCategoria}, é o modelo mais associado a presentes de casal, casamento e datas românticas.</p>

<h2>Personalização disponível</h2>

<p>A arte é aplicada por <strong>sublimação</strong> na área externa da caneca. Fotos de casal, mensagens de amor e datas especiais são os usos mais comuns — a prova digital garante que a composição fique posicionada exatamente como você espera antes da produção.</p>

<h2>Ocasiões de uso</h2>
<ul>
<li><strong>Presentes de casamento e aniversário de namoro</strong> — o uso mais direto do formato de coração da alça.</li>
<li><strong>Lembrancinhas de casamento para madrinhas e padrinhos</strong> — pedido dividido entre convidados para viabilizar o mínimo.</li>
<li><strong>Brindes de parceria para fotógrafos, buffets e cerimonialistas</strong> — empresas que atendem casais podem usar como brinde alinhado ao público.</li>
<li><strong>Presente de Dia dos Namorados</strong> — item sazonal recorrente nessa data comemorativa.</li>
</ul>

${ctaWhatsAppHtml("Olá! Quero orçamento da Caneca de Porcelana com Alça Coração.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja mais no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "caneca-porcelana-alca-coracao-personalizada")}.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre a Caneca com Alça Coração.", "Tirar dúvida pelo WhatsApp")}
`,
};

const canecaFall350ml: Post = {
  slug: "caneca-porcelana-fall-350ml-guia",
  titulo: "Caneca de Porcelana Fall 350ml Personalizada: Guia Completo, Preço e Como Pedir",
  descricao:
    "Guia da Caneca de Porcelana Fall 350ml Personalizada: design mais elaborado, maior volume da linha, ocasiões de uso e como pedir com a marca da sua empresa.",
  tipo: "pilar-produto",
  categoriaRelacionada: "porcelanas",
  produtoRelacionado: "caneca-porcelana-fall-350ml-personalizada",
  dataPublicacao: "2026-02-17T14:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "O que diferencia esta caneca das demais do catálogo?",
      resposta:
        "O design: corpo afunilado e alça curva, um formato mais elaborado que as canecas cilíndricas clássicas, somado ao maior volume da linha (350ml) — a combinação dá um visual mais sofisticado, indicado para brindes de maior valor percebido.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de porcelanas.",
    },
    {
      pergunta: "Como é feita a personalização?",
      resposta:
        "Por sublimação, na superfície externa disponível do formato afunilado. A prova digital é aprovada por você antes da produção, considerando a curvatura específica desta peça.",
    },
    {
      pergunta: "Essa caneca é indicada para brinde corporativo de maior padrão?",
      resposta:
        "Sim, é uma das opções mais indicadas quando o objetivo é um brinde de porcelana com visual acima do padrão comum — kits para clientes VIP, parceiros estratégicos ou lideranças.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Caneca de Porcelana Fall 350ml Personalizada</strong> tem design mais elaborado — corpo afunilado e alça curva — além do maior volume entre as canecas do catálogo. Dentro da categoria de ${linkCategoria}, é a opção indicada para brindes de porcelana com visual acima do padrão comum, quando o objetivo é comunicar mais sofisticação que uma caneca cilíndrica clássica.</p>

<h2>Personalização disponível</h2>

<p>A arte é aplicada por <strong>sublimação</strong> na superfície externa disponível, considerando a curvatura específica do formato afunilado. Você aprova uma prova digital antes de qualquer unidade entrar em produção, garantindo que a composição se adapte bem ao formato da peça.</p>

<h2>Ocasiões de uso</h2>
<ul>
<li><strong>Brindes corporativos de maior valor percebido</strong> — kits para clientes VIP, parceiros estratégicos ou lideranças.</li>
<li><strong>Presentes de fim de ano diferenciados</strong> — alternativa mais sofisticada às canecas clássicas do catálogo.</li>
<li><strong>Kits de boas-vindas premium de pousadas</strong> — reforça padrão superior de hospitalidade no quarto do hóspede.</li>
<li><strong>Uso pessoal por quem valoriza design</strong> — presente para quem aprecia peças com visual mais elaborado no dia a dia.</li>
</ul>

${ctaWhatsAppHtml("Olá! Quero orçamento da Caneca de Porcelana Fall 350ml Personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja mais no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "caneca-porcelana-fall-350ml-personalizada")}.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre a Caneca Fall 350ml.", "Tirar dúvida pelo WhatsApp")}
`,
};

const xicaraPetit90ml: Post = {
  slug: "xicara-petit-pires-90ml-guia",
  titulo: "Xícara Petit com Pires 90ml Personalizada: Guia Completo, Preço e Como Pedir",
  descricao:
    "Guia da Xícara Petit com Pires 90ml Personalizada: conjunto de café expresso com cor no interior e no pires, ocasiões de uso e como pedir.",
  tipo: "pilar-produto",
  categoriaRelacionada: "porcelanas",
  produtoRelacionado: "xicara-petit-pires-90ml-personalizada",
  dataPublicacao: "2026-02-17T15:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Esse conjunto é indicado para café expresso?",
      resposta:
        "Sim, o volume de 90ml e o formato são pensados especificamente para café expresso ou doses pequenas de bebida quente — um conjunto elegante para servir café de forma diferenciada em reuniões ou em casa.",
    },
    {
      pergunta: "O pires também é personalizado?",
      resposta:
        "O pires acompanha a mesma cor de contraste da xícara (interior e alça), mas a arte por sublimação é aplicada na xícara — o pires funciona como parte do conjunto visual, sem impressão própria.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de porcelanas.",
    },
    {
      pergunta: "Qual a diferença para o conjunto de xícara com pires de 180ml?",
      resposta:
        "Além do volume (90ml contra 180ml), este conjunto petit tem cor de contraste no interior/alça/pires, enquanto o de 180ml é todo branco — um visual mais formal e clássico.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Xícara Petit com Pires 90ml Personalizada</strong> é um conjunto compacto no formato de café expresso, com cor de contraste no interior, na alça e no pires. Dentro da categoria de ${linkCategoria}, é a opção mais elegante para servir café de forma diferenciada — em reuniões, recepção de clientes ou uso pessoal em casa.</p>

<h2>Personalização e ocasiões de uso</h2>

<p>A arte é aplicada por <strong>sublimação</strong> na área externa branca da xícara, com o pires acompanhando a mesma cor de contraste do conjunto. É indicado para brindes corporativos de recepção — escritórios que servem café para clientes e parceiros —, kits de boas-vindas premium de pousadas, e presentes para quem aprecia café expresso.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento da Xícara Petit com Pires 90ml Personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Veja mais no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "xicara-petit-pires-90ml-personalizada")}.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre a Xícara Petit com Pires.", "Tirar dúvida pelo WhatsApp")}
`,
};

const xicaraPires180ml: Post = {
  slug: "xicara-pires-porcelana-180ml-guia",
  titulo: "Xícara com Pires de Porcelana 180ml Personalizada: Guia Rápido",
  descricao:
    "Xícara com Pires de Porcelana 180ml Personalizada: conjunto todo branco de visual clássico, ocasiões de uso e como pedir.",
  tipo: "pilar-produto",
  categoriaRelacionada: "porcelanas",
  produtoRelacionado: "xicara-pires-porcelana-180ml-personalizada",
  dataPublicacao: "2026-02-17T16:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual a diferença para o conjunto petit de 90ml do catálogo?",
      resposta:
        "Este conjunto é todo branco, sem cor de contraste, com volume maior (180ml) — mais indicado para chá ou café em porção maior, com visual mais formal e clássico que o conjunto petit colorido.",
    },
    {
      pergunta: "Qual a quantidade mínima?",
      resposta: "20 unidades, o padrão de toda a categoria de porcelanas.",
    },
    {
      pergunta: "Como é feita a personalização?",
      resposta:
        "Por sublimação, na área externa da xícara. Você aprova a prova digital antes de qualquer unidade entrar em produção.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta: "10 a 20 dias úteis, a partir da aprovação da arte enviada.",
    },
  ],
  conteudoHtml: `
<p>A <strong>Xícara com Pires de Porcelana 180ml Personalizada</strong> é um conjunto todo branco, de visual formal e clássico, com volume maior que o conjunto petit do catálogo — indicado para chá ou café em porção maior. Está na categoria de ${linkCategoria} como a opção mais neutra entre os dois conjuntos de xícara com pires disponíveis.</p>

<h2>Personalização e ocasiões de uso</h2>

<p>A arte é aplicada por <strong>sublimação</strong> na área externa da xícara, técnica confirmada no orçamento. É indicado para brindes corporativos de recepção mais formais, kits de boas-vindas de hotéis e pousadas com padrão clássico, e presentes que priorizam um visual atemporal sobre um toque de cor.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento da Xícara com Pires de Porcelana 180ml.", "Pedir orçamento pelo WhatsApp")}

<p>O pedido mínimo é de 20 unidades, com prazo de 10 a 20 dias úteis após aprovação da arte, e preço por quantidade sob consulta. Compare com o conjunto petit no ${linkPilarCategoria} ou acesse a ${produtoLink("página do produto", "xicara-pires-porcelana-180ml-personalizada")}.</p>
`,
};

export const porcelanasPilaresProduto: Post[] = [
  caneca100ml,
  canecaBiona300ml,
  canecaInteriorColorida,
  canecaAlcaCoracao,
  canecaFall350ml,
  xicaraPetit90ml,
  xicaraPires180ml,
];
