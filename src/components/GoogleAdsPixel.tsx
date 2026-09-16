import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "mirian_google_ads_consent";
const GOOGLE_PIXEL_ID = "6aa85e74a3751a5dff98be16";
const GOOGLE_PIXEL_SRC = "https://cdn.utmify.com.br/scripts/pixel/pixel-google.js";
const CONSENT_REGIONS = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR",
  "GR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "NL", "NO",
  "PL", "PT", "RO", "SE", "SI", "SK", "GB", "CH", "XX", "T1",
]);

type ConsentChoice = "accepted" | "rejected";

declare global {
  interface Window {
    googlePixelId?: string;
  }
}

function loadGooglePixel() {
  if (document.querySelector(`script[src="${GOOGLE_PIXEL_SRC}"]`)) return;

  window.googlePixelId = GOOGLE_PIXEL_ID;
  const script = document.createElement("script");
  script.src = GOOGLE_PIXEL_SRC;
  script.async = true;
  script.defer = true;
  script.dataset.googleAdsPixel = GOOGLE_PIXEL_ID;
  document.head.appendChild(script);
}

async function requiresConsent() {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 2000);

  try {
    const response = await fetch("/cdn-cgi/trace", { signal: controller.signal });
    if (!response.ok) return true;
    const text = await response.text();
    const country = text.match(/^loc=([A-Z0-9]{2})$/m)?.[1] ?? "XX";
    return CONSENT_REGIONS.has(country);
  } catch {
    return true;
  } finally {
    window.clearTimeout(timeout);
  }
}

export function GoogleAdsPixel() {
  const [showConsent, setShowConsent] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const savedChoice = localStorage.getItem(CONSENT_KEY) as ConsentChoice | null;
    if (savedChoice === "accepted") {
      loadGooglePixel();
      return;
    }
    if (savedChoice === "rejected") return;

    void requiresConsent().then((required) => {
      if (required) setShowConsent(true);
      else loadGooglePixel();
    });
  }, []);

  const saveChoice = (choice: ConsentChoice) => {
    localStorage.setItem(CONSENT_KEY, choice);
    setShowConsent(false);
    if (choice === "accepted") loadGooglePixel();
  };

  const reopenSettings = () => {
    localStorage.removeItem(CONSENT_KEY);
    setShowPrivacy(false);
    setShowConsent(true);
  };

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => setShowPrivacy(true)}
        className="fixed bottom-3 left-3 z-40 h-8 bg-background/95 text-xs shadow-sm"
      >
        Privacidade
      </Button>

      {showConsent && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background p-4 shadow-elegant">
          <div className="mx-auto flex max-w-4xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm leading-relaxed text-foreground">
              Usamos o pixel do Google Ads para medir visitas e compras e melhorar nossos anúncios.
              Você pode aceitar ou recusar, e alterar sua escolha depois em “Privacidade”.
            </p>
            <div className="flex shrink-0 gap-2">
              <Button type="button" variant="outline" onClick={() => saveChoice("rejected")}>
                Recusar
              </Button>
              <Button type="button" onClick={() => saveChoice("accepted")}>
                Aceitar
              </Button>
            </div>
          </div>
        </div>
      )}

      {showPrivacy && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/55 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-title"
        >
          <div className="w-full max-w-lg rounded-lg border border-border bg-card p-6 shadow-elegant">
            <h2 id="privacy-title" className="text-2xl font-bold text-primary">
              Privacidade e anúncios
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                Quando permitido, o pixel do Google Ads e da Utmify registra dados de navegação,
                origem da visita e ações de compra para mensuração e otimização de anúncios.
              </p>
              <p>
                Esses dados podem incluir identificadores do navegador e são enviados ao Google e
                à Utmify. Não enviamos seu nome, e-mail ou dados de pagamento por este pixel.
              </p>
              <p>
                Sua escolha fica salva neste navegador. Você pode retirá-la a qualquer momento
                usando o botão abaixo.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setShowPrivacy(false)}>
                Fechar
              </Button>
              <Button type="button" onClick={reopenSettings}>
                Alterar escolha
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}