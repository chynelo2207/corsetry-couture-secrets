import { createFileRoute } from "@tanstack/react-router";
import SalesPage from "@/components/SalesPage";

const TITLE = "Curso de Corseletes — Método Mirian Serrano";
const DESC =
  "Crea corseletes de Alto Diseño con una caída impecable. Patronaje, costura de precisión y acabado de lujo.";

export const Route = createFileRoute("/es")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <SalesPage
      lang="es"
      variant={{
        headline: (
          <>
            Crea <span className="text-primary italic">corseletes de Alto Diseño</span> con una caída impecable
          </>
        ),
        subheadline: "Del patrón a la pieza puesta sin retoques — domina el arte que realza cada silueta.",
        ctaLabel: "QUIERO CREAR MIS CORSELETES",
      }}
    />
  ),
});
