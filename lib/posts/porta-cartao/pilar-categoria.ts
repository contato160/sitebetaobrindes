import type { Post } from "../../posts";
import { ctaWhatsAppHtml, produtoLink } from "../../postBlocks";
import { getImagemProduto } from "../../imagens";

export const portaCartaoPilarCategoria: Post = {
  slug: "guia-completo-porta-cartoes-personalizados",
  titulo:
    "Guia Completo de Porta-Cartões Personalizados: Como Escolher, Preços e Onde Comprar em 2026",
  descricao:
    "Guia sobre porta-cartões e carteiras slim personalizados em couro e sintético: como escolher entre os modelos do catálogo, ocasiões de uso e diferenças de estilo e fechamento.",
  tipo: "pilar-categoria",
  categoriaRelacionada: "porta-cartao",
  imagemCapa: getImagemProduto("carteira-slim-couro-personalizada"),
  dataPublicacao: "2026-02-16T09:00:00-03:00",
  dataAtualizacao: "2026-08-21T09:00:00-03:00",
  faq: [
    {
      pergunta: "Qual a quantidade mínima para pedir porta-cartões personalizados?",
      resposta:
        "O pedido mínimo padrão é de 20 unidades por modelo. É uma quantidade comum para brindes de fim de ano, kits de boas-vindas corporativos e presentes de formatura.",
    },
    {
      pergunta: "Qual a diferença entre os modelos de porta-cartão do catálogo?",
      resposta:
        "Variam em material (couro ou sintético), formato (aberto com slots visíveis, ou fechado tipo carteira dobrável) e detalhe de acabamento (costura decorativa, fecho de botão). A escolha depende mais de estilo pessoal do que de função, já que todos cumprem o mesmo papel básico de guardar cartões.",
    },
    {
      pergunta: "Qual a diferença entre porta-cartão, porta-notas e a carteira slim?",
      resposta:
        "O porta-cartão é focado só em cartões (slots abertos ou bolso simples); o porta-notas tem fechamento com aba e botão, pensado também para guardar dinheiro em espécie; a carteira slim soma um compartimento com fole que comporta mais cartões e ainda cabe no bolso com discrição.",
    },
    {
      pergunta: "Como é feita a personalização destes produtos?",
      resposta:
        "A técnica varia conforme o material — normalmente gravação ou aplicação de logo na face externa da peça, respeitando os slots e costuras internas. A técnica exata de cada modelo é confirmada no orçamento.",
    },
    {
      pergunta: "Qual o prazo de produção?",
      resposta:
        "O prazo padrão é de 10 a 20 dias úteis, contado a partir da aprovação da arte enviada por você.",
    },
  ],
  conteudoHtml: `
<p><strong>Porta-cartões personalizados</strong> reúnem seis modelos no catálogo — de porta-cartões simples e abertos a uma carteira slim mais completa — pensados para brindes corporativos de bolso, presentes de formatura e kits de fim de ano. É uma categoria onde a escolha entre os modelos costuma ser mais sobre estilo visual do que sobre diferença funcional.</p>

<h2>Os produtos desta categoria</h2>

<p>Dois modelos de <strong>Porta-Cartão em Couro Personalizado</strong> (${produtoLink("modelo 1", "porta-cartao-couro-personalizado-1")} e ${produtoLink(
    "modelo 2",
    "porta-cartao-couro-personalizado-2"
  )}) — o primeiro em formato aberto, com slots visíveis; o segundo em formato bifold, fechado tipo carteira dobrável.</p>

<p>${produtoLink("Porta-Cartão Sintético Personalizado", "porta-cartao-sintetico-personalizado")} é a opção de material sintético, com custo geralmente mais baixo que o couro, mantendo o formato aberto de slots.</p>

<p>${produtoLink("Porta-Cartão Costurado Personalizado", "porta-cartao-costurado-personalizado")} tem costura decorativa em relevo (padrão chevron), um diferencial visual sobre os modelos lisos.</p>

<p>${produtoLink("Porta-Notas Personalizado", "porta-notas-personalizado")} tem formato de envelope com fecho de botão, pensado também para guardar notas de dinheiro, não só cartões.</p>

<p>${produtoLink("Carteira Slim em Couro Personalizada", "carteira-slim-couro-personalizada")} é o modelo mais completo — um fole interno que comporta mais cartões, mantendo perfil discreto no bolso.</p>

<h2>Como escolher entre os modelos</h2>

<p>Se o objetivo é um brinde de bolso simples e direto, os modelos abertos (couro modelo 1, sintético ou costurado) atendem bem. Se quem recebe também costuma carregar dinheiro em espécie, o porta-notas com fecho é mais adequado. Para quem quer uma peça um pouco mais robusta, com mais capacidade de cartões e ainda discreta, a carteira slim é a escolha mais completa da categoria.</p>

<h2>Ocasiões de uso</h2>
<ul>
<li><strong>Brindes corporativos de fim de ano</strong> — item de bolso de baixo custo por unidade e alta utilidade, clássico em kits natalinos.</li>
<li><strong>Kits de boas-vindas para novos colaboradores</strong> — reforça identidade da empresa em um item de uso diário discreto.</li>
<li><strong>Presentes de formatura</strong> — peça prática que acompanha a transição para a vida profissional.</li>
<li><strong>Brindes para eventos e feiras</strong> — item leve e fácil de distribuir em volume.</li>
</ul>

<h2>Preço e prazo</h2>

<p>O preço por unidade cai conforme a quantidade do pedido aumenta. Como os modelos têm materiais e complexidade diferentes, a faixa de preço é sempre fornecida sob consulta, por modelo escolhido.</p>

${ctaWhatsAppHtml(
  "Olá! Quero saber o preço de porta-cartões personalizados por quantidade.",
  "Consultar preço por quantidade"
)}

<p>O prazo de produção é de 10 a 20 dias úteis após a aprovação da arte, o mesmo padrão de todo o catálogo.</p>

${ctaWhatsAppHtml(
  "Olá! Quero ajuda para escolher entre os modelos de porta-cartão.",
  "Pedir ajuda para escolher pelo WhatsApp"
)}
`,
};
