import { createFileRoute } from "@tanstack/react-router";
import SalesPage from "@/components/SalesPage";
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

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{
      rel: "preload", as: "image", href: heroLarge.url,
      imageSrcSet: `${heroSmall.url} 768w, ${heroLarge.url} 1354w`,
      imageSizes: "(min-width: 808px) 768px, calc(100vw - 40px)",
      fetchPriority: "high",
    }],
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
        lang: "pt",
        internationalOffer: true,
        media: spanishMedia,
        checkoutUrl: "https://pay.wiapy.com/iWJwRQvGe-si",
        classicPrice: (
          <p className="font-display text-4xl md:text-5xl font-bold text-primary leading-none mt-1">
            R$ 27<span className="text-xl md:text-2xl">,90</span>
          </p>
        ),
        singlePlan: true,
        planSupport: "Comece hoje com o Método Mirian Serrano",
        modulesEyebrow: "Acesso imediato",
        modulesTitle: "O que você recebe hoje",
        modulesSubtitle: "Tudo o que você recebe ao entrar no curso:",
        modules: [
          { n: "01", title: "Curso completo de Corselet Clássico" },
          { n: "02", title: "Molde do Corselet Clássico para download" },
          { n: "03", title: "PDF de apoio passo a passo" },
          { n: "04", title: "Conteúdos e materiais complementares" },
          { n: "05", title: "Aulas gravadas para estudar no seu ritmo" },
          { n: "06", title: "Acesso imediato após a compra" },
          { n: "07", title: "Acesso vitalício ao curso" },
          { n: "08", title: "Garantia incondicional de 7 dias" },
        ],
        testimonialImages: [depEs1, depEs2, depEs3, depEs4, depEs5, depEs6, depEs7, depEs8],
        headline: (
          <>
            Crie <span className="text-primary italic">corselets de Alto Designer</span> com um caimento impecável
          </>
        ),
        subheadline: "Do molde à peça pronta — domine a técnica que transforma e valoriza cada silhueta.",
        ctaLabel: "QUERO CRIAR MEUS CORSELETS",
      }}
    />
  ),
});
