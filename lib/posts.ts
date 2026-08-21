export type PostFaq = { pergunta: string; resposta: string };
export type PostHowTo = { titulo: string; passos: string[] };

export type Post = {
  slug: string;
  titulo: string;
  descricao: string;
  tipo: "pilar-categoria" | "complementar-categoria" | "pilar-produto";
  categoriaRelacionada: string; // slug da categoria
  produtoRelacionado?: string; // slug do produto (obrigatório para pilar-produto)
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
import { relogioPilarCategoria } from "./posts/relogio/pilar-categoria";
import { relogioPilaresProduto } from "./posts/relogio/pilares-produto";
import { neoprenePilarCategoria } from "./posts/neoprene/pilar-categoria";
import { neoprenePilaresProduto } from "./posts/neoprene/pilares-produto";
import { toalhaPilarCategoria } from "./posts/toalha/pilar-categoria";
import { toalhaPilaresProduto } from "./posts/toalha/pilares-produto";

export const posts: Post[] = [
  termicosPilarCategoria,
  ...termicosPilaresProdutoParte1,
  ...termicosPilaresProdutoParte2,
  relogioPilarCategoria,
  ...relogioPilaresProduto,
  neoprenePilarCategoria,
  ...neoprenePilaresProduto,
  toalhaPilarCategoria,
  ...toalhaPilaresProduto,
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

export function imagemDoPost(post: Post): string | undefined {
  if (post.imagemCapa) return post.imagemCapa;
  if (post.produtoRelacionado) return getImagemProduto(post.produtoRelacionado);
  return undefined;
}
