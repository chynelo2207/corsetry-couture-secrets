import { createFileRoute } from "@tanstack/react-router";
import SalesPage from "@/components/SalesPage";

const TITLE = "Corselet Course — The Mirian Serrano Method";
const DESC =
  "Create High Design corselets with flawless drape. Pattern making, precision sewing and luxury finishing.";

export const Route = createFileRoute("/en")({
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
      lang="en"
      variant={{
        headline: (
          <>
            Create <span className="text-primary italic">High Design corselets</span> with flawless drape
          </>
        ),
        subheadline: "From pattern to a garment that fits with zero adjustments — master the craft that enhances every silhouette.",
        ctaLabel: "I WANT TO CREATE MY CORSELETS",
      }}
    />
  ),
});
