import { createFileRoute } from "@tanstack/react-router";
import SalesPage from "@/components/SalesPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Curso de Corselets — Método Mirian Serrano" },
      { name: "description", content: "Crie corselets de Alto Designer com caimento impecável. Modelagem, costura de precisão e acabamento de luxo." },
      { property: "og:title", content: "Curso de Corselets — Método Mirian Serrano" },
      { property: "og:description", content: "Crie corselets de Alto Designer com caimento impecável. Modelagem, costura de precisão e acabamento de luxo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
      }}
    />
  ),
});
