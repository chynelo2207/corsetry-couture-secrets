import { createFileRoute } from "@tanstack/react-router";
import LowTicketSalesPage from "@/components/LowTicketSalesPage";

const TITLE = "Curso de Corselet Clássico — Mirian Serrano";
const DESC =
  "Aprenda o Corselet Clássico em tule transparente, do molde ao acabamento. Aula completa, molde em PDF, suporte e acesso imediato.";

const CHECKOUT_URL = "https://pay.wiapy.com/xKa8OJCEivJ";

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
  component: () => <LowTicketSalesPage checkoutUrl={CHECKOUT_URL} />,
});
