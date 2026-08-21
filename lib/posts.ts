export type PostFaq = { pergunta: string; resposta: string };
export type PostHowTo = { titulo: string; passos: string[] };

export type Post = {
  slug: string;
  titulo: string;
  descricao: string;
  tipo: "pilar-categoria" | "complementar-categoria" | "pilar-produto";
  categoriaRelacionada: string; // slug da categoria
  produtoRelacionado?: string; // slug do produto (obrigatório para pilar-produto)
  // Produtos citados no corpo do artigo — usado por complementar-categoria,
  // que costuma referenciar 2-3 produtos específicos (ver seção 4.3 do
  // prompt master: regra de interlinkagem). Cada produto citado deve ter
  // link tanto para seu pilar quanto para sua página de venda no texto.
  produtosRelacionados?: string[];
  dataPublicacao: string; // ISO
  dataAtualizacao: string; // ISO
  conteudoHtml: string; // corpo do artigo, sem FAQ (FAQ é renderizado à parte)
  faq: PostFaq[];
  howTo?: PostHowTo;
  // Imagem de capa explícita — só necessária quando o post NÃO tem produtoRelacionado
  // (pilar de categoria, por exemplo). Para pilar-produto, a foto é resolvida
  // automaticamente a partir do produtoRelacionado, sem precisar declarar aqui.
  imagemCapa?: string;
};

import { getImagemProduto } from "./imagens";
import { termicosPilarCategoria } from "./posts/termicos/pilar-categoria";
import { termicosPilaresProdutoParte1 } from "./posts/termicos/pilares-produto";
import { termicosPilaresProdutoParte2 } from "./posts/termicos/pilares-produto-2";
import { termicosComplementares } from "./posts/termicos/complementares";
import { relogioPilarCategoria } from "./posts/relogio/pilar-categoria";
import { relogioPilaresProduto } from "./posts/relogio/pilares-produto";
import { relogioComplementares } from "./posts/relogio/complementares";
import { neoprenePilarCategoria } from "./posts/neoprene/pilar-categoria";
import { neoprenePilaresProduto } from "./posts/neoprene/pilares-produto";
import { neopreneComplementares } from "./posts/neoprene/complementares";
import { toalhaPilarCategoria } from "./posts/toalha/pilar-categoria";
import { toalhaPilaresProduto } from "./posts/toalha/pilares-produto";
import { toalhaComplementares } from "./posts/toalha/complementares";
import { squeezePilarCategoria } from "./posts/squeeze/pilar-categoria";
import { squeezePilaresProduto } from "./posts/squeeze/pilares-produto";
import { portaDocumentosPilarCategoria } from "./posts/porta-documentos/pilar-categoria";
import { portaDocumentosPilaresProduto } from "./posts/porta-documentos/pilares-produto";
import { necessairePilarCategoria } from "./posts/necessaire/pilar-categoria";
import { necessairePilaresProduto } from "./posts/necessaire/pilares-produto";
import { portaCartaoPilarCategoria } from "./posts/porta-cartao/pilar-categoria";
import { portaCartaoPilaresProduto } from "./posts/porta-cartao/pilares-produto";
import { porcelanasPilarCategoria } from "./posts/porcelanas/pilar-categoria";
import { porcelanasPilaresProduto } from "./posts/porcelanas/pilares-produto";
import { vidroPilarCategoria } from "./posts/vidro/pilar-categoria";
import { vidroPilaresProduto } from "./posts/vidro/pilares-produto";
import { variadosPilarCategoria } from "./posts/variados/pilar-categoria";
import { variadosPilaresProduto } from "./posts/variados/pilares-produto";
import { bolsasPilarCategoria } from "./posts/bolsas/pilar-categoria";
import { bolsasPilaresProdutoParte1 } from "./posts/bolsas/pilares-produto";
import { bolsasPilaresProdutoParte2 } from "./posts/bolsas/pilares-produto-2";

export const posts: Post[] = [
  termicosPilarCategoria,
  ...termicosPilaresProdutoParte1,
  ...termicosPilaresProdutoParte2,
  ...termicosComplementares,
  relogioPilarCategoria,
  ...relogioPilaresProduto,
  ...relogioComplementares,
  neoprenePilarCategoria,
  ...neoprenePilaresProduto,
  ...neopreneComplementares,
  toalhaPilarCategoria,
  ...toalhaPilaresProduto,
  ...toalhaComplementares,
  squeezePilarCategoria,
  ...squeezePilaresProduto,
  portaDocumentosPilarCategoria,
  ...portaDocumentosPilaresProduto,
  necessairePilarCategoria,
  ...necessairePilaresProduto,
  portaCartaoPilarCategoria,
  ...portaCartaoPilaresProduto,
  porcelanasPilarCategoria,
  ...porcelanasPilaresProduto,
  vidroPilarCategoria,
  ...vidroPilaresProduto,
  variadosPilarCategoria,
  ...variadosPilaresProduto,
  bolsasPilarCategoria,
  ...bolsasPilaresProdutoParte1,
  ...bolsasPilaresProdutoParte2,
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getPilarCategoria(categoriaSlug: string) {
  return posts.find((p) => p.tipo === "pilar-categoria" && p.categoriaRelacionada === categoriaSlug);
}

export function getPilarProduto(produtoSlug: string) {
  return posts.find((p) => p.tipo === "pilar-produto" && p.produtoRelacionado === produtoSlug);
}

export function getPostsPorCategoria(categoriaSlug: string) {
  return posts.filter((p) => p.categoriaRelacionada === categoriaSlug);
}

export function getComplementaresPorCategoria(categoriaSlug: string) {
  return posts.filter((p) => p.tipo === "complementar-categoria" && p.categoriaRelacionada === categoriaSlug);
}

// Complementares que citam um produto específico — usado na seção
// "Artigos relacionados" da página de venda do produto.
export function getComplementaresPorProduto(produtoSlug: string) {
  return posts.filter(
    (p) => p.tipo === "complementar-categoria" && p.produtosRelacionados?.includes(produtoSlug)
  );
}

export function imagemDoPost(post: Post): string | undefined {
  if (post.imagemCapa) return post.imagemCapa;
  if (post.produtoRelacionado) return getImagemProduto(post.produtoRelacionado);
  return undefined;
}
