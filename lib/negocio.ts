export const NEGOCIO = {
  nome: "Essenza Brindes",
  dominio: "essenzabrindes.com.br",
  whatsapp: "5511970139447",
  telefoneDisplay: "(11) 97013-9447",
  email: "contato@essenzabrindes.com.br",
  // Perfil ainda não criado — preencher com o link assim que o Instagram existir.
  // Enquanto vazio, o card de contato e o schema.org (sameAs) ocultam o Instagram automaticamente.
  instagram: "",
  pedidoMinimoPadrao: 20,
  prazoProducaoPadrao: "10–20 dias úteis",
} as const;

export function linkWhatsApp(mensagem: string) {
  return `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
