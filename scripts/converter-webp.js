// Converte as imagens de produto (jpeg/jpg/png) para WebP IN PLACE, mantendo
// o mesmo nome de arquivo e caminho (só troca os bytes internos do arquivo,
// não a extensão) — para não precisar tocar em lib/imagens.ts nem em nenhum
// componente de exibição. Uso único/manual: node scripts/converter-webp.js
//
// Requer o pacote "sharp" instalado localmente (não é dependência do projeto
// em produção, só uma ferramenta de conversão pontual).

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const DIR = path.join(__dirname, "..", "public", "images", "produtos");
const EXT_ALVO = new Set([".jpg", ".jpeg", ".png"]);

function listarArquivos(dir) {
  const resultado = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) resultado.push(...listarArquivos(full));
    else resultado.push(full);
  }
  return resultado;
}

async function converter() {
  const arquivos = listarArquivos(DIR).filter((f) => EXT_ALVO.has(path.extname(f).toLowerCase()));
  console.log(`Convertendo ${arquivos.length} imagens para WebP (mesmo nome/caminho)...`);

  let totalAntes = 0;
  let totalDepois = 0;
  let falhas = 0;

  for (const arquivo of arquivos) {
    const antes = fs.statSync(arquivo).size;
    try {
      // Lê como Buffer (em vez de passar o caminho direto pro sharp): o
      // libvips no Windows falha ao abrir arquivos com caminho contendo
      // caracteres acentuados (ex: "BETÃO"), então deixamos o Node ler o
      // arquivo e passamos só os bytes.
      const inputBuffer = fs.readFileSync(arquivo);
      const webpBuffer = await sharp(inputBuffer).webp({ quality: 82 }).toBuffer();
      fs.writeFileSync(arquivo, webpBuffer);
      const depois = webpBuffer.length;
      totalAntes += antes;
      totalDepois += depois;
      console.log(
        `${path.relative(DIR, arquivo)}: ${(antes / 1024).toFixed(0)}KB -> ${(depois / 1024).toFixed(0)}KB`
      );
    } catch (err) {
      falhas++;
      console.error(`FALHA em ${arquivo}: ${err.message}`);
    }
  }

  console.log("---");
  console.log(`Total antes: ${(totalAntes / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total depois: ${(totalDepois / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Economia: ${(100 - (totalDepois / totalAntes) * 100).toFixed(1)}%`);
  console.log(`Falhas: ${falhas}`);
}

converter();
