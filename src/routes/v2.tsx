import { createFileRoute } from "@tanstack/react-router";
import SalesPage from "@/components/SalesPage";

const TITLE = "Pare de competir por preço — Método Mirian Serrano";
const DESC =
  "A especialização em corseletes estruturados que tira você da disputa por serviço barato.";

export const Route = createFileRoute("/v2")({
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
        eyebrow: "Especialização rara em costura",
        headline: (
          <>
            Pare de competir por preço. Aprenda a técnica que <span className="text-primary italic">só uma em cada dez costureiras</span> sabe fazer
          </>
        ),
        subheadline:
          "O Método Mirian Serrano ensina a construção de corseletes estruturados — a especialização que te tira da disputa por serviço barato e te coloca no grupo de quem cobra pelo que sabe, não pelo que faz.",
        ctaLabel: "QUERO SAIR DA GUERRA DE PREÇO",
        hookTitle: "Por que tão poucas cobram 5x mais",
        hookParagraphs: [
          "Toda cidade tem dezenas de costureiras fazendo ajuste e costura simples, brigando pelo mesmo cliente.",
          "Muito poucas sabem estruturar um corselete de alta costura. É exatamente por isso que essas poucas cobram 5x mais pela mesma peça.",
        ],
        planSupport: "Qual caminho te aproxima mais da sua nova renda?",
        incomeAngle: true,
      }}
    />
  ),
});
