import { createFileRoute } from "@tanstack/react-router";
import SalesPage from "@/components/SalesPage";
import InternationalPrice from "@/components/InternationalPrice";
import { spanishMedia } from "@/lib/spanish-media";
import heroSmall from "@/assets/es-fast-mirian-serrano-hero-768.webp.asset.json";
import heroLarge from "@/assets/es-fast-mirian-serrano-hero-1354.webp.asset.json";
import depEs1 from "@/assets/dep-es-1.png.asset.json";
import depEs2 from "@/assets/dep-es-2.png.asset.json";
import depEs3 from "@/assets/dep-es-3.png.asset.json";
import depEs4 from "@/assets/dep-es-4.png.asset.json";
import depEs5 from "@/assets/dep-es-5.png.asset.json";
import depEs6 from "@/assets/dep-es-6.png.asset.json";
import depEs7 from "@/assets/dep-es-7.png.asset.json";
import depEs8 from "@/assets/dep-es-8.png.asset.json";

const TITLE = "Curso de Corsés — Método Mirian Serrano";
const DESC = "Aprende a crear corsés de alta costura con caída impecable, patronaje profesional, costura de precisión y acabados de lujo.";

export const Route = createFileRoute("/es")({
  head: () => ({
    links: [
      {
        rel: "preload",
        as: "image",
        href: heroLarge.url,
        imageSrcSet: `${heroSmall.url} 768w, ${heroLarge.url} 1354w`,
        imageSizes: "(min-width: 808px) 768px, calc(100vw - 40px)",
        fetchPriority: "high",
      },
    ],
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
        media: spanishMedia,
        internationalPrice: <InternationalPrice />,
        eyebrow: "Método Mirian Serrano",
        headline: (
          <>
            Crea <span className="text-primary italic">corsés de alta costura</span> con una caída impecable
          </>
        ),
        subheadline: "Del patrón a la prenda terminada — domina la técnica que transforma y realza cada silueta.",
        ctaLabel: "QUIERO CREAR MIS CORSÉS",
        singlePlan: true,
        planSupport: "Empieza hoy con el Método Mirian Serrano",
        testimonialImages: [depEs1, depEs2, depEs3, depEs4, depEs5, depEs6, depEs7, depEs8],
      }}
    />
  ),
});
