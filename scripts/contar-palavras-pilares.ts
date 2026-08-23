// Auditoria de contagem de palavras dos artigos pilares (categoria e
// produto) já publicados, contra os mínimos da seção 4.1/4.3 do prompt
// master: 2500 palavras para pilar completo, 1200-1500 para pilar enxuto.
//
// Uso: npx tsx scripts/contar-palavras-pilares.ts

import { posts } from "../lib/posts";

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function contarPalavras(texto: string): number {
  return texto.split(/\s+/).filter(Boolean).length;
}

function classificarTier(titulo: string): "completo" | "enxuto" | "indefinido" {
  if (/Guia Completo/i.test(titulo)) return "completo";
  if (/Guia Rápido/i.test(titulo)) return "enxuto";
  return "indefinido";
}

const MIN_COMPLETO = 2500;
const MIN_ENXUTO = 1200;

const pilares = posts.filter((p) => p.tipo === "pilar-categoria" || p.tipo === "pilar-produto");

const resultados = pilares.map((p) => {
  const texto = stripHtml(p.conteudoHtml);
  const palavras = contarPalavras(texto);
  const tier =
    p.tipo === "pilar-categoria" ? "completo" : classificarTier(p.titulo);
  const minimo = tier === "completo" ? MIN_COMPLETO : tier === "enxuto" ? MIN_ENXUTO : null;
  const ok = minimo === null ? null : palavras >= minimo;
  return { slug: p.slug, tipo: p.tipo, titulo: p.titulo, tier, palavras, minimo, ok };
});

resultados.sort((a, b) => a.palavras - b.palavras);

console.log("=== TODOS OS PILARES (ordenado por contagem de palavras, crescente) ===\n");
for (const r of resultados) {
  const status = r.ok === null ? "?" : r.ok ? "OK" : "ABAIXO";
  console.log(
    `[${status}] ${r.palavras}p (min ${r.minimo ?? "?"}) tier=${r.tier} tipo=${r.tipo} — ${r.slug}`
  );
}

const abaixo = resultados.filter((r) => r.ok === false);
const indefinidos = resultados.filter((r) => r.tier === "indefinido");

console.log(`\n=== RESUMO ===`);
console.log(`Total de pilares: ${resultados.length}`);
console.log(`Abaixo do mínimo: ${abaixo.length}`);
console.log(`Tier indefinido (título não bate com "Guia Completo"/"Guia Rápido"): ${indefinidos.length}`);

if (abaixo.length > 0) {
  console.log(`\n=== LISTA DOS QUE PRECISAM DE EXPANSÃO ===`);
  for (const r of abaixo) {
    console.log(`${r.slug} | ${r.palavras}/${r.minimo} palavras | ${r.titulo}`);
  }
}

if (indefinidos.length > 0) {
  console.log(`\n=== TIER INDEFINIDO (checar manualmente) ===`);
  for (const r of indefinidos) {
    console.log(`${r.slug} | ${r.palavras} palavras | ${r.titulo}`);
  }
}
