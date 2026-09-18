import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

const TITLE = "Política de Privacidade — Método Mirian Serrano";
const DESCRIPTION = "Saiba como dados de navegação são usados para medição e publicidade no Método Mirian Serrano.";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-12 text-foreground md:py-20">
      <article className="mx-auto max-w-3xl">
        <Button asChild variant="ghost" className="mb-8 px-0 hover:bg-transparent">
          <Link to="/">
            <ArrowLeft aria-hidden="true" /> Voltar ao site
          </Link>
        </Button>

        <div className="mb-8 flex items-center gap-3">
          <ShieldCheck className="size-7 text-primary" aria-hidden="true" />
          <h1 className="font-display text-4xl font-bold text-primary md:text-5xl">Política de Privacidade</h1>
        </div>

        <div className="space-y-8 text-sm leading-7 text-muted-foreground md:text-base">
          <section>
            <h2 className="mb-2 font-body text-lg font-semibold text-foreground">Dados utilizados</h2>
            <p>
              Quando você autoriza publicidade, podemos usar dados de navegação, identificadores de anúncios,
              endereço IP, informações do dispositivo, páginas visitadas e parâmetros de campanha, como UTM,
              gclid, fbclid e ttclid. Não incluímos nome, e-mail ou telefone nesses parâmetros.
            </p>
          </section>
          <section>
            <h2 className="mb-2 font-body text-lg font-semibold text-foreground">Finalidades e destinatários</h2>
            <p>
              Esses dados são usados para medir resultados, atribuir vendas às campanhas e otimizar anúncios.
              Para essas finalidades, são utilizados serviços da Google, Meta e TikTok, instalados por meio da
              plataforma Utmify. Cada plataforma também trata os dados conforme sua própria política.
            </p>
          </section>
          <section>
            <h2 className="mb-2 font-body text-lg font-semibold text-foreground">Sua escolha</h2>
            <p>
              Em regiões que exigem consentimento, os pixels publicitários ficam bloqueados até você aceitar.
              Recusar não limita o acesso ao conteúdo. Fora dessas regiões, a medição pode iniciar sem aviso,
              respeitando os direitos de oposição previstos na legislação aplicável.
            </p>
          </section>
          <section>
            <h2 className="mb-2 font-body text-lg font-semibold text-foreground">Como retirar o consentimento</h2>
            <p>
              Use o botão “Privacidade”, disponível no canto inferior da página, para alterar sua escolha a
              qualquer momento. A nova preferência é aplicada imediatamente e permanece salva neste navegador.
              Eventos bloqueados enquanto houver recusa não serão enviados depois.
            </p>
          </section>
          <section>
            <h2 className="mb-2 font-body text-lg font-semibold text-foreground">Registro da escolha e contato</h2>
            <p>
              Para comprovar sua preferência, guardamos neste navegador um identificador aleatório, a decisão,
              a data, o horário e a versão do aviso apresentado. Para dúvidas sobre privacidade, entre em contato
              por meio de amaroads.com.
            </p>
          </section>
          <p className="border-t border-border pt-6 text-xs">Última atualização: 18 de setembro de 2026.</p>
        </div>
      </article>
    </main>
  );
}