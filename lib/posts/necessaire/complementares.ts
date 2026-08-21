import type { Post } from "../../posts";
import { ctaWhatsAppHtml, produtoLink, pilarProdutoLink, categoriaLink } from "../../postBlocks";

const linkCategoria = categoriaLink("Necessaires Personalizadas", "necessaire");
const linkPilarCategoria = `<a href="/blog/guia-completo-necessaires-personalizadas/">guia completo de necessaires personalizadas</a>`;

function produtoComPilar(nome: string, slugVenda: string, slugPilar: string) {
  return `${produtoLink(nome, slugVenda)} (veja também o ${pilarProdutoLink("guia completo do produto", slugPilar)})`;
}

const cristalLink = produtoComPilar("Necessaire Cristal Personalizada", "necessaire-cristal-personalizada", "necessaire-cristal-personalizada-guia");
const couroLink = produtoComPilar("Necessaire de Couro Personalizada", "necessaire-couro-personalizada", "necessaire-couro-personalizada-guia");
const pufferLink = produtoComPilar("Necessaire Puffer Personalizada", "necessaire-puffer-personalizada", "necessaire-puffer-personalizada-guia");
const estetoscopio1Link = produtoComPilar("Porta-Estetoscópio Personalizado (Capa Simples)", "porta-estetoscopio-personalizado-1", "porta-estetoscopio-personalizado-1-guia");
const estetoscopio2Link = produtoComPilar("Porta-Estetoscópio Personalizado (Organizador Roll-Up)", "porta-estetoscopio-personalizado-2", "porta-estetoscopio-personalizado-2-guia");
const foneLink = produtoComPilar("Porta-Fone Personalizado", "porta-fone-personalizado", "porta-fone-personalizado-guia");

const preco: Post = {
  slug: "quanto-custa-necessaire-personalizada-tabela-precos",
  titulo: "Quanto Custa Necessaire Personalizada? Tabela de Preços por Material",
  descricao:
    "Como o preço da necessaire personalizada varia entre os modelos cristal, couro e puffer do catálogo, por quantidade.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "necessaire",
  produtosRelacionados: ["necessaire-cristal-personalizada", "necessaire-couro-personalizada", "necessaire-puffer-personalizada"],
  dataPublicacao: "2026-02-28T09:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual necessaire tem o menor custo por unidade?",
      resposta:
        "Em geral a necessaire cristal, por usar um material de PVC transparente mais simples de trabalhar, tende a ter o menor custo — mas confirme a faixa exata no orçamento, já que muda com a quantidade.",
    },
  ],
  conteudoHtml: `
<p>A categoria de ${linkCategoria} tem três modelos de material, o que gera faixas de preço diferentes entre eles.</p>

<h2>O que muda o preço entre os materiais</h2>

<p>A ${cristalLink}, em PVC transparente, costuma ser a opção de entrada em preço. A ${couroLink}, com material sintético de couro e acabamento mais elaborado, e a ${pufferLink}, com enchimento acolchoado, têm custo de material mais alto, refletido no preço final.</p>

<h2>Como decidir com base no orçamento</h2>

<p>Para brindes de distribuição ampla (kits de boas-vindas, feiras), a necessaire cristal costuma ser a mais econômica. Para brindes de maior percepção de valor, como presentes corporativos a clientes VIP, os modelos de couro ou puffer justificam o investimento maior.</p>

${ctaWhatsAppHtml("Olá! Quero saber o preço das necessaires personalizadas.", "Consultar preço agora pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para comparar os modelos em detalhe.</p>
`,
};

const comparacaoTecnicas: Post = {
  slug: "necessaire-cristal-couro-ou-puffer-comparacao-materiais",
  titulo: "Necessaire Cristal, Couro ou Puffer: Comparação de Materiais",
  descricao:
    "Diferenças entre os três materiais de necessaire personalizada do catálogo — PVC cristal, couro sintético e puffer acolchoado.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "necessaire",
  produtosRelacionados: ["necessaire-cristal-personalizada", "necessaire-couro-personalizada", "necessaire-puffer-personalizada"],
  dataPublicacao: "2026-02-28T10:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "O material transparente da necessaire cristal desbota com o tempo?",
      resposta:
        "O PVC em si não desbota facilmente, mas a arte aplicada por sublimação ou DTF deve seguir as recomendações de limpeza para manter a nitidez por mais tempo.",
    },
  ],
  conteudoHtml: `
<p>Cada material de ${linkCategoria} tem características bem diferentes — veja o que esperar de cada um.</p>

<h2>${cristalLink}: transparência e praticidade</h2>

<p>Feita em PVC transparente, permite ver o conteúdo sem precisar abrir a peça — prática para uso em viagem (identificação rápida na esteira do aeroporto ou revista de segurança) e para necessaires de maquiagem, onde a visibilidade do conteúdo é útil.</p>

<h2>${couroLink}: elegância e durabilidade</h2>

<p>O couro sintético dá um acabamento mais elegante e resistente ao manuseio diário, sendo a escolha mais associada a presentes corporativos de maior valor percebido.</p>

<h2>${pufferLink}: conforto e proteção</h2>

<p>O enchimento acolchoado da necessaire puffer oferece proteção extra ao conteúdo contra pequenos impactos, além de um visual atual bastante associado a tendências de moda.</p>

${ctaWhatsAppHtml("Olá! Quero entender melhor as diferenças entre os materiais das necessaires.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais detalhes sobre cada material.</p>
`,
};

const guiaOcasiao: Post = {
  slug: "necessaire-personalizada-viagem-presente-guia",
  titulo: "Necessaire e Porta-Fone Personalizados para Viagem: Guia de Uso",
  descricao:
    "Como a necessaire cristal e o porta-fone personalizados ajudam a organizar itens de viagem e uso diário.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "necessaire",
  produtosRelacionados: ["necessaire-cristal-personalizada", "porta-fone-personalizado"],
  dataPublicacao: "2026-02-28T11:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "A necessaire cristal é aceita em bagagem de mão em viagens aéreas?",
      resposta:
        "O modelo transparente facilita a identificação de líquidos durante a inspeção de segurança, mas confirme sempre as regras específicas de tamanho e volume da companhia aérea antes de viajar.",
    },
  ],
  conteudoHtml: `
<p>Dentro de ${linkCategoria}, alguns produtos têm apelo direto para quem viaja ou organiza itens do dia a dia — veja como aproveitar.</p>

<h2>Necessaire cristal para viagem</h2>

<p>A ${cristalLink}, por ser transparente, facilita a identificação de itens durante a inspeção de segurança em aeroportos e mantém tudo organizado dentro da bagagem de mão.</p>

<h2>Porta-fone para organização diária</h2>

<p>O ${foneLink} resolve um problema comum de quem carrega fones de ouvido soltos na bolsa ou mochila — evita fios embolados e protege o equipamento contra pequenos impactos.</p>

<h2>Como presente de viagem</h2>

<p>Os dois produtos funcionam bem como parte de um kit de presente de viagem, especialmente quando personalizados com o nome ou destino da viagem.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento de necessaires e porta-fones personalizados.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais ideias de uso.</p>
`,
};

const b2b: Post = {
  slug: "necessaire-personalizada-kits-boas-vindas-area-saude",
  titulo: "Necessaire Personalizada para Kits Corporativos e Porta-Estetoscópio para Área da Saúde",
  descricao:
    "Como empresas e instituições de saúde usam a necessaire de couro e o porta-estetoscópio personalizados como brinde corporativo.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "necessaire",
  produtosRelacionados: ["necessaire-couro-personalizada", "porta-estetoscopio-personalizado-2"],
  dataPublicacao: "2026-02-28T12:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "O porta-estetoscópio é um brinde comum para formandos de medicina?",
      resposta:
        "Sim, é um dos brindes mais associados a essa formatura, junto com jalecos e outros itens de início de carreira na área da saúde.",
    },
  ],
  conteudoHtml: `
<p>Além do uso geral como kit de boas-vindas, ${linkCategoria} atende também um público bastante específico: profissionais da área da saúde.</p>

<h2>Kits de boas-vindas corporativos</h2>

<p>A ${couroLink}, com acabamento mais elegante, é usada por empresas em kits de boas-vindas a novos colaboradores ou como brinde institucional para parceiros e clientes.</p>

<h2>Brinde para formandos e profissionais da saúde</h2>

<p>O ${estetoscopio2Link}, com organizador roll-up, é um brinde de alta relevância para formandos de medicina, enfermagem e áreas afins — um item de uso diário profissional que carrega a marca de quem presenteou (faculdade, plano de saúde, hospital) por anos.</p>

<h2>Planejando o pedido institucional</h2>

<p>Instituições de ensino da área da saúde costumam fechar pedidos de porta-estetoscópio personalizado por turma de formandos, com a arte da faculdade ou curso aplicada em todas as peças.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento corporativo de necessaires ou porta-estetoscópio.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais aplicações corporativas.</p>
`,
};

const b2c: Post = {
  slug: "necessaire-personalizada-presente-poucas-unidades",
  titulo: "Necessaire Personalizada como Presente: Como Pedir Poucas Unidades",
  descricao:
    "Como pedir a necessaire puffer ou o porta-fone personalizado em pequena quantidade para presentear.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "necessaire",
  produtosRelacionados: ["necessaire-puffer-personalizada", "porta-fone-personalizado"],
  dataPublicacao: "2026-02-28T13:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "A necessaire puffer é uma boa ideia de presente para adolescentes?",
      resposta:
        "Sim, o visual atual e o material acolchoado costumam agradar esse público, especialmente quando personalizada com nome ou uma frase de efeito.",
    },
  ],
  conteudoHtml: `
<p>Como o pedido mínimo de cada modelo de ${linkCategoria} é de 20 unidades, quem quer presentear só uma pessoa costuma se organizar em grupo.</p>

<h2>Ideias de presente</h2>

<p>A ${pufferLink}, com visual atual e acolchoado confortável, é uma ideia de presente popular entre adolescentes e jovens adultos, especialmente com o nome ou uma frase personalizada.</p>

<p>O ${foneLink} funciona bem como presente prático para quem usa fones no dia a dia — um item pequeno, mas de uso frequente.</p>

<h2>Como viabilizar o pedido pequeno</h2>

<p>A forma mais comum é reunir um grupo de amigos ou familiares que também querem presentear pessoas diferentes na mesma ocasião (aniversário, formatura, amigo secreto), dividindo o pedido mínimo entre todos.</p>

${ctaWhatsAppHtml("Olá! Quero fazer um pedido pequeno de necessaire personalizada.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais ideias de presente.</p>
`,
};

const cuidados: Post = {
  slug: "como-cuidar-necessaire-personalizada-durar-mais",
  titulo: "Como Cuidar da Necessaire Personalizada para Durar Mais",
  descricao:
    "Dicas de limpeza e conservação para a necessaire cristal e a necessaire de couro personalizadas manterem o visual por mais tempo.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "necessaire",
  produtosRelacionados: ["necessaire-cristal-personalizada", "necessaire-couro-personalizada"],
  dataPublicacao: "2026-02-28T14:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Posso lavar a necessaire cristal com água e sabão?",
      resposta:
        "Sim, água e sabão neutro funcionam bem para o PVC transparente — apenas seque completamente antes de guardar, para evitar acúmulo de umidade dentro da peça.",
    },
  ],
  conteudoHtml: `
<p>A ${cristalLink} e a ${couroLink}, produtos de ${linkCategoria}, pedem cuidados diferentes por causa do material. Veja as recomendações.</p>

<h2>Cuidados com a necessaire cristal</h2>

<p>Limpe com pano úmido e sabão neutro, e seque bem antes de guardar — o PVC transparente pode reter umidade e desenvolver mofo interno se guardado ainda úmido.</p>

<h2>Cuidados com a necessaire de couro</h2>

<p>Evite molhar excessivamente o couro sintético — use pano levemente úmido para limpeza e evite produtos de limpeza abrasivos, que podem ressecar ou opacar o material com o tempo.</p>

<h2>Armazenamento</h2>

<p>Guarde ambas em local seco e arejado, evitando dobrar sempre no mesmo vinco, o que pode marcar o material permanentemente ao longo do tempo.</p>

${ctaWhatsAppHtml("Olá! Tenho uma dúvida sobre cuidados com minha necessaire personalizada.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais informações sobre os produtos.</p>
`,
};

const comoEscolher: Post = {
  slug: "porta-estetoscopio-capa-simples-ou-roll-up-como-escolher",
  titulo: "Porta-Estetoscópio Capa Simples ou Roll-Up? Como Escolher o Modelo Certo",
  descricao:
    "Comparação entre os dois modelos de porta-estetoscópio personalizado para ajudar profissionais da saúde a decidir qual pedir.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "necessaire",
  produtosRelacionados: ["porta-estetoscopio-personalizado-1", "porta-estetoscopio-personalizado-2"],
  dataPublicacao: "2026-02-28T15:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "O modelo roll-up serve para guardar outros itens além do estetoscópio?",
      resposta:
        "Sim, o organizador roll-up costuma ter compartimentos extras que comportam outros pequenos instrumentos, como tesoura de ponta romba ou lanterna clínica.",
    },
  ],
  conteudoHtml: `
<p>A categoria de ${linkCategoria} tem dois modelos de porta-estetoscópio. Veja qual escolher para o seu caso.</p>

<h2>${estetoscopio1Link}: capa simples</h2>
<p>Modelo mais compacto, cobrindo o estetoscópio de forma prática — indicado para quem quer só proteção básica contra poeira e pequenos impactos no dia a dia.</p>

<h2>${estetoscopio2Link}: organizador roll-up</h2>
<p>Além de proteger o estetoscópio, costuma ter compartimentos extras para outros pequenos instrumentos — indicado para quem quer um item organizador mais completo, não só uma capa.</p>

<h2>Qual escolher como brinde institucional</h2>

<p>Para formandos ou profissionais recém-formados, o modelo roll-up costuma ter maior percepção de valor por sua funcionalidade extra, enquanto a capa simples é uma opção mais econômica para distribuição em maior volume.</p>

${ctaWhatsAppHtml("Olá! Quero ajuda para escolher o modelo de porta-estetoscópio.", "Pedir ajuda pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para conhecer os dois modelos em detalhe.</p>
`,
};

const sustentabilidade: Post = {
  slug: "necessaire-personalizada-escolha-duradoura-menos-descarte",
  titulo: "Necessaire Personalizada: Uma Escolha Mais Duradoura que Sacolas Descartáveis",
  descricao:
    "Por que a necessaire de couro e a necessaire cristal personalizadas, sendo reutilizáveis, são uma alternativa consciente a saquinhos plásticos de uso único.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "necessaire",
  produtosRelacionados: ["necessaire-couro-personalizada", "necessaire-cristal-personalizada"],
  dataPublicacao: "2026-02-28T16:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Necessaires personalizadas substituem mesmo os saquinhos plásticos de amenities?",
      resposta:
        "Em boa parte do uso, sim — uma necessaire durável e reutilizável elimina a necessidade de trocar constantemente sacos plásticos de uso único para organizar itens pessoais.",
    },
  ],
  conteudoHtml: `
<p>Dentro de ${linkCategoria}, o argumento de sustentabilidade está na substituição do uso repetido de sacolas e saquinhos plásticos descartáveis.</p>

<h2>Alternativa a sacos plásticos de uso único</h2>

<p>A ${couroLink}, sendo durável e reutilizável, substitui o hábito de usar sacos plásticos descartáveis para organizar itens de higiene, maquiagem ou acessórios — um consumo repetido comum em viagens e no dia a dia.</p>

<h2>Necessaire cristal como organizador permanente</h2>

<p>A ${cristalLink}, por permitir visualizar o conteúdo sem abrir, elimina a necessidade de sacos plásticos transparentes de uso único, comuns em kits de viagem ou necessaires de maquiagem improvisadas.</p>

<h2>Um brinde de uso contínuo</h2>

<p>Diferente de brindes descartáveis, uma necessaire de qualidade continua em uso por anos, mantendo a personalização visível a cada uso — o que reforça a marca de quem presenteou de forma mais duradoura.</p>

${ctaWhatsAppHtml("Olá! Quero orçamento de necessaires personalizadas.", "Pedir orçamento pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para mais informações.</p>
`,
};

const erros: Post = {
  slug: "5-erros-comprar-necessaire-personalizada",
  titulo: "5 Erros ao Comprar Necessaire Personalizada (e Como Evitar)",
  descricao:
    "Os erros mais comuns na hora de pedir necessaire ou porta-fone personalizado — e como evitá-los antes de fechar o pedido.",
  tipo: "complementar-categoria",
  categoriaRelacionada: "necessaire",
  produtosRelacionados: ["necessaire-puffer-personalizada", "necessaire-cristal-personalizada", "porta-fone-personalizado"],
  dataPublicacao: "2026-02-28T17:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual desses erros é o mais comum?",
      resposta:
        "Escolher o material sem considerar o uso final — pedir a necessaire cristal para um público que valoriza mais discrição (conteúdo visível pode não ser ideal para todo mundo), por exemplo.",
    },
  ],
  conteudoHtml: `
<p>Alguns erros se repetem em pedidos de ${linkCategoria}. Veja os cinco mais comuns antes de fechar o seu.</p>

<h2>1. Escolher o material sem considerar o uso final</h2>

<p>A ${cristalLink} tem conteúdo visível, o que nem sempre é desejável — avalie se esse é o efeito pretendido antes de decidir só pelo preço.</p>

<h2>2. Guardar a necessaire cristal ainda úmida</h2>

<p>Pode reter umidade e desenvolver mofo interno — sempre seque bem antes de guardar.</p>

<h2>3. Não considerar o mínimo separado por modelo</h2>

<p>Cada modelo de ${linkCategoria} tem seu próprio pedido mínimo de 20 unidades — não é possível combinar quantidades de modelos diferentes para atingir um único mínimo.</p>

<h2>4. Pular a prova digital da arte</h2>

<p>A prova mostra como a arte vai ficar posicionada na peça antes da produção — pular essa etapa aumenta o risco de resultado diferente do esperado, especialmente na ${pufferLink}, com sua superfície acolchoada.</p>

<h2>5. Não considerar o prazo para eventos com data marcada</h2>

<p>O prazo de produção só começa após a aprovação da arte — para formaturas e eventos com data fixa, feche o pedido com antecedência. O mesmo vale para o ${foneLink} quando pedido junto de outros itens do mesmo evento.</p>

${ctaWhatsAppHtml("Olá! Quero tirar dúvidas antes de pedir minha necessaire personalizada.", "Tirar dúvida pelo WhatsApp")}

<p>Veja o ${linkPilarCategoria} para evitar surpresas no seu pedido.</p>
`,
};

export const necessaireComplementares: Post[] = [
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
