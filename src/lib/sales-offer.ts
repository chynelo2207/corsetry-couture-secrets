export function getClassicOffer(lang: "pt" | "es" = "pt", internationalOffer = false) {
  const international = lang === "es" || internationalOffer;
  return {
    international,
    checkoutUrl: international
      ? "https://pay.hotmart.com/R107917706S?checkoutMode=10"
      : "https://pay.wiapy.com/xKa8OJCEivJ",
    benefits: lang === "es" ? [
      "Curso completo de Corsé Clásico",
      "Molde del Corsé Clásico para descargar",
      "PDF de apoyo paso a paso",
      "Contenidos y materiales complementarios",
      "Clases grabadas para estudiar a tu ritmo",
      "Acceso inmediato después de la compra",
      "Acceso vitalicio al curso",
      "Garantía incondicional de 7 días",
    ] : international ? [
      "Curso completo de Corselet Clássico",
      "Molde do Corselet Clássico para download",
      "PDF de apoio passo a passo",
      "Conteúdos e materiais complementares",
      "Aulas gravadas para estudar no seu ritmo",
      "Acesso imediato após a compra",
      "Acesso vitalício ao curso",
      "Garantia incondicional de 7 dias",
    ] : [
      "Módulo completo do Corselet Clássico",
      "Molde do Corselet Clássico para download",
      "PDF de apoio passo a passo",
      "Conteúdos e materiais extras",
    ],
  };
}