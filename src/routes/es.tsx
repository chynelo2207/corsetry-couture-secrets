import { createFileRoute } from "@tanstack/react-router";
import SalesPage from "@/components/SalesPage";

const TITLE = "Curso de Corsés — Método Mirian Serrano";
const DESC = "Aprende a crear corsés de alta costura con caída impecable, patronaje profesional, costura de precisión y acabados de lujo.";

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
      variant={{
        lang: "es",
        eyebrow: "Método Mirian Serrano",
        headline: (
          <>
            Crea <span className="text-primary italic">corsés de alta costura</span> con una caída impecable
          </>
        ),
        subheadline: "Del patrón a la prenda terminada — domina la técnica que transforma y realza cada silueta.",
        ctaLabel: "QUIERO CREAR MIS CORSÉS",
        professionalPrice: "R$ 89,90",
        professionalCheckoutUrl: "https://pay.wiapy.com/iWJwRQvGe-si",
      }}
    />
  ),
});
