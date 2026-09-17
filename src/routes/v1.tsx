import { createFileRoute } from "@tanstack/react-router";
import SalesPage from "@/components/SalesPage";

const TITLE = "Curso de Corselets — Método Mirian Serrano";
const DESC =
  "Crie corselets de Alto Designer com caimento impecável. Modelagem, costura de precisão e acabamento de luxo.";

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
            Crie <span className="text-primary italic">corselets de Alto Designer</span> com caimento impecável
          </>
        ),
        subheadline: "Do molde à peça vestida sem ajustes — domine a arte que transforma cada silhueta.",
        ctaLabel: "QUERO CRIAR MEUS CORSELETS",
        planSupport: "Comece hoje o Método Mirian Serrano",
        singlePlan: true,
      }}
    />
  ),
});
