import { createFileRoute } from "@tanstack/react-router";
import SalesPage from "@/components/SalesPage";

const TITLE = "Trabalhe de casa com alta costura — Método Mirian Serrano";
const DESC =
  "Aprenda a construir corseletes estruturados e ganhe como especialista, no seu tempo e no seu ritmo.";

export const Route = createFileRoute("/v1")({
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
        eyebrow: "Renda extra com alta costura",
        headline: (
          <>
            Aprenda a técnica que te dá <span className="text-primary italic">liberdade para trabalhar de casa</span> e ganhar como uma especialista de alta costura
          </>
        ),
        subheadline:
          "O Método Mirian Serrano te ensina a construir corseletes estruturados — a habilidade que separa quem cobra pouco de quem monta o próprio negócio de alta costura, no seu tempo e no seu ritmo.",
        ctaLabel: "QUERO MINHA INDEPENDÊNCIA FINANCEIRA",
        hookTitle: "A diferença não é sorte",
        hookParagraphs: [
          "Enquanto muitas costureiras dependem de agenda cheia e clientes de última hora para fechar o mês, outras cobram centenas de reais por peça e escolhem quando trabalham.",
          "A diferença não é sorte. É dominar uma técnica que dá liberdade para precificar do seu jeito.",
        ],
        planSupport: "Qual caminho te aproxima mais da sua nova renda?",
        incomeAngle: true,
      }}
    />
  ),
});
