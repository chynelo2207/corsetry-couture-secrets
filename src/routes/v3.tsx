import { createFileRoute } from "@tanstack/react-router";
import SalesPage from "@/components/SalesPage";

const TITLE = "A técnica de alta costura que o mercado paga caro — Método Mirian Serrano";
const DESC =
  "Corseletes estruturados: a habilidade por trás dos vestidos mais valorizados do mercado.";

export const Route = createFileRoute("/v3")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <SalesPage
      variant={{
        eyebrow: "Oportunidade de mercado",
        headline: (
          <>
            Existe uma técnica de alta costura que o mercado está <span className="text-primary italic">pagando caro</span> — e quase ninguém aprendeu ainda
          </>
        ),
        subheadline:
          "Enquanto a maioria das costureiras ainda faz apenas o básico, o Método Mirian Serrano te ensina a construir corseletes estruturados: a habilidade por trás dos vestidos mais valorizados do mercado.",
        ctaLabel: "QUERO APRENDER ANTES QUE TODO MUNDO SAIBA",
        hookTitle: "O motivo é simples",
        hookParagraphs: [
          "Vestidos de festa e noiva com corselete estruturado estão entre os mais vendidos e mais bem pagos do mercado de alta costura.",
          "E o motivo de tão poucas costureiras cobrarem esse valor é simples: quase ninguém sabe construir essa estrutura corretamente.",
        ],
        planSupport: "Qual caminho te aproxima mais da sua nova renda?",
        incomeAngle: true,
      }}
    />
  ),
});
