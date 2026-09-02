import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import CategoryIcon from "@/components/icons/CategoryIcon";
import { posts, getPost, getPostsPorCategoria, imagemDoPost } from "@/lib/posts";
import { getCategoria } from "@/lib/categorias";
import { getProdutosPorCategoria, getProduto } from "@/lib/produtos";
import { NEGOCIO, linkWhatsApp } from "@/lib/negocio";
import { articleSchema, breadcrumbSchema, faqSchema, howToSchema } from "@/lib/schema";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const post = getPost(params.slug);
  if (!post) return {};
  const imagem = imagemDoPost(post);
  const url = `https://${NEGOCIO.dominio}/blog/${post.slug}/`;
  const imagens = imagem
    ? [{ url: `https://${NEGOCIO.dominio}${imagem}`, width: 1200, height: 630 }]
    : [{ url: "/og-cover.svg", width: 1200, height: 630 }];
  return {
    title: { absolute: post.titulo },
    description: post.descricao,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: post.titulo,
      description: post.descricao,
      type: "article",
      images: imagens,
    },
    twitter: {
      card: "summary_large_image",
      title: post.titulo,
      description: post.descricao,
      images: imagens.map((i) => i.url),
    },
  };
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = getPost(params.slug);
  if (!post) notFound();

  const categoria = getCategoria(post.categoriaRelacionada);
  const produtoRelacionado = post.produtoRelacionado ? getProduto(post.produtoRelacionado) : undefined;
  const imagem = imagemDoPost(post);

  const schemaGraph: Record<string, unknown>[] = [
    articleSchema(post),
    faqSchema(post.faq),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog/" },
      { name: post.titulo, url: `/blog/${post.slug}/` },
    ]),
  ];
  if (post.howTo) schemaGraph.push(howToSchema(post.howTo));

  const schema = { "@context": "https://schema.org", "@graph": schemaGraph };

  // Produtos relacionados: complementar-categoria mostra só os 2-3 produtos citados
  // no texto (regra de interlinkagem da seção 4.3); pilar-categoria/pilar-produto
  // mostram o catálogo completo da categoria.
  const produtosRelacionados =
    post.tipo === "complementar-categoria" && post.produtosRelacionados
      ? post.produtosRelacionados
          .map((slug) => getProduto(slug))
          .filter((p): p is NonNullable<typeof p> => Boolean(p))
      : categoria
        ? getProdutosPorCategoria(categoria.slug)
        : [];

  // Artigos relacionados: outros posts da mesma categoria, exceto este — limitado
  // para não virar uma lista enorme em categorias com muitos complementares.
  const artigosRelacionados = getPostsPorCategoria(post.categoriaRelacionada)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 8);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog/" }, { name: post.titulo }]} />
      <article className="mx-auto max-w-3xl px-8 py-16">
        <h1 className="font-serif text-[32px] font-medium md:text-[40px]">{post.titulo}</h1>

        {produtoRelacionado && (
          <p className="mt-4 text-sm text-ink-soft">
            Conteúdo sobre o produto{" "}
            <Link href={`/produtos/${produtoRelacionado.slug}/`} className="text-brass-dark hover:underline">
              {produtoRelacionado.nome}
            </Link>
            .
          </p>
        )}

        <div className="relative mt-8 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-[3px] border border-line bg-gradient-to-br from-paper to-[#E3E6DB]">
          {imagem ? (
            <Image
              src={imagem}
              alt={produtoRelacionado?.nome || post.titulo}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          ) : (
            <CategoryIcon icon={categoria?.icon || "variados"} className="h-20 w-20 text-ink-soft" />
          )}
        </div>

        <div
          className="prose prose-headings:font-serif prose-headings:font-medium prose-a:text-brass-dark prose-table:text-sm mt-8 max-w-none text-[15px] leading-relaxed text-ink-soft"
          dangerouslySetInnerHTML={{ __html: post.conteudoHtml }}
        />

        {post.howTo && (
          <div className="mt-14 border-t border-line pt-8">
            <h2 className="font-serif text-2xl font-medium text-ink">{post.howTo.titulo}</h2>
            <ol className="mt-5 space-y-3">
              {post.howTo.passos.map((passo, i) => (
                <li key={i} className="flex gap-3 text-sm text-ink-soft">
                  <span className="mono shrink-0 font-mono text-xs font-semibold text-brass-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{passo}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="mt-14 border-t border-line pt-8">
          <h2 className="font-serif text-2xl font-medium text-ink">Perguntas frequentes</h2>
          <div className="mt-6 space-y-6">
            {post.faq.map((f) => (
              <div key={f.pergunta} className="border-t border-line pt-5">
                <h3 className="text-[15px] font-semibold text-ink">{f.pergunta}</h3>
                <p className="mt-2 text-sm text-ink-soft">{f.resposta}</p>
              </div>
            ))}
          </div>
        </div>

        {produtosRelacionados.length > 0 && (
          <div className="mt-14 border-t border-line pt-8">
            <h2 className="mb-6 font-serif text-2xl font-medium text-ink">Produtos desta categoria</h2>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
              {produtosRelacionados.slice(0, 6).map((p) => (
                <ProductCard key={p.slug} produto={p} />
              ))}
            </div>
          </div>
        )}

        {artigosRelacionados.length > 0 && (
          <div className="mt-14 border-t border-line pt-8">
            <h2 className="mb-4 font-serif text-2xl font-medium text-ink">Artigos relacionados</h2>
            <ul className="space-y-3">
              {artigosRelacionados.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}/`} className="text-sm text-brass-dark hover:underline">
                    {p.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-16 flex flex-col items-start gap-4 rounded-[3px] border border-line bg-paper-2 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-xl font-medium">
              {produtoRelacionado ? `Pronto para pedir ${produtoRelacionado.nome.toLowerCase()}?` : "Pronto para pedir?"}
            </h2>
            <p className="mt-1 text-sm text-ink-soft">Fale agora pelo WhatsApp ou peça um orçamento em lote.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={linkWhatsApp(
                produtoRelacionado ? `Olá! Quero orçamento de ${produtoRelacionado.nome}.` : "Olá! Vi o blog e quero um orçamento."
              )}
              className="btn"
            >
              Pedir pelo WhatsApp
            </a>
            <Link href="/orcamento/" className="btn btn-outline">
              Orçamento em lote
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
