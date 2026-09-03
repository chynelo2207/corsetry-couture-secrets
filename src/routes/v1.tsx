import { createFileRoute } from "@tanstack/react-router";
import SalesPage from "@/components/SalesPage";

const TITLE = "Corselet Clássico em Tule Transparente — Método Mirian Serrano";
const DESC =
  "Domine o Corselet Clássico em Tule Transparente do molde à peça pronta. Vídeo aula passo a passo, PDF exclusivo do molde e suporte direto.";

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
        headline: (
          <>
            Domine a arte do <span className="text-primary italic">Corselet Clássico em Tule Transparente</span>
          </>
        ),
        subheadline: "Do molde à peça pronta — a técnica que separa quem 'só costura' de quem cria peças de tirar o fôlego.",
        ctaLabel: "QUERO DOMINAR O CORSELET CLÁSSICO",
        planSupport: "Oferta especial de lançamento",
        singlePlan: true,
        lowTicket: true,
      }}
    />
  ),
});
