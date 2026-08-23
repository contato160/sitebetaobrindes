// Envia todas as URLs do sitemap para o IndexNow (Bing, Yandex e outros
// buscadores participantes), pedindo rastreamento imediato em vez de
// esperar o ciclo normal de descoberta via sitemap.
//
// Uso: node scripts/submit-indexnow.js
// Rode depois de cada deploy com conteúdo novo/alterado.

const fs = require("fs");
const path = require("path");

const HOST = "essenzabrindes.com.br";
const KEY = "18490abc29a94739893f750319e9d99c";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = path.join(__dirname, "..", "public", "sitemap-0.xml");

function lerUrlsDoSitemap() {
  const xml = fs.readFileSync(SITEMAP_PATH, "utf8");
  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
  return matches.map((m) => m[1]);
}

async function enviar() {
  const urlList = lerUrlsDoSitemap();
  console.log(`Enviando ${urlList.length} URLs para o IndexNow...`);

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });

  console.log(`Status: ${res.status} ${res.statusText}`);
  if (res.status === 200 || res.status === 202) {
    console.log("Envio aceito com sucesso.");
  } else {
    const body = await res.text().catch(() => "");
    console.error("Falha no envio.", body);
    process.exitCode = 1;
  }
}

enviar().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
