import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

const CONSENT_KEY = "mirian_advertising_consent";
const NOTICE_VERSION = "2026-09-18";
const REGULATED_REGIONS = new Set([
  "AT", "BE", "BG", "BR", "HR", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR",
  "GB", "GR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "NL", "NO",
  "PL", "PT", "RO", "SE", "SI", "SK", "CH",
]);

type ConsentChoice = "accepted" | "rejected";

type ConsentRecord = {
  choice: ConsentChoice;
  decidedAt: string;
  noticeVersion: string;
  visitorId: string;
};

declare global {
  interface Window {
    pixelId?: string;
    tikTokPixelId?: string;
    googlePixelId?: string;
  }
}

function readConsent(): ConsentRecord | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    if (!value) return null;
    const parsed = JSON.parse(value) as Partial<ConsentRecord>;
    if (
      (parsed.choice !== "accepted" && parsed.choice !== "rejected") ||
      parsed.noticeVersion !== NOTICE_VERSION ||
      typeof parsed.decidedAt !== "string" ||
      typeof parsed.visitorId !== "string"
    ) return null;
    return parsed as ConsentRecord;
  } catch {
    return null;
  }
}

function appendScript(src: string, id: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

function persistAttribution() {
  const keys = [
    "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id",
    "utm_campaign_id", "utm_adset_id", "utm_ad_id", "utm_source_platform", "fbclid",
    "fbc", "fbp", "xcod", "sck", "gclid", "ttclid", "src",
  ];
  const params = new URLSearchParams(window.location.search);
  let stored: Record<string, string> = {};
  try {
    stored = JSON.parse(window.localStorage.getItem("_utms") ?? "{}") as Record<string, string>;
  } catch {
    stored = {};
  }
  keys.forEach((key) => {
    const value = params.get(key);
    if (value) stored[key] = value;
  });
  window.localStorage.setItem("_utms", JSON.stringify(stored));
}

function loadAdvertising() {
  persistAttribution();
  appendScript("https://cdn.utmify.com.br/scripts/utms/latest.js", "utmify-utms");
  window.pixelId = "6a4fdf0cea6d4bfe03f92c1c";
  appendScript("https://cdn.utmify.com.br/scripts/pixel/pixel.js", "utmify-meta-pixel");
  window.tikTokPixelId = "6a5d4aff71d8f00e4cfa0452";
  appendScript("https://cdn.utmify.com.br/scripts/pixel/pixel-tiktok.js", "utmify-tiktok-pixel-primary");
  window.setTimeout(() => {
    window.tikTokPixelId = "6a7a79abfe61d9c780c846fe";
    appendScript("https://cdn.utmify.com.br/scripts/pixel/pixel-tiktok.js", "utmify-tiktok-pixel-secondary");
  }, 2500);
  window.googlePixelId = "6aa85e74a3751a5dff98be16";
  appendScript("https://cdn.utmify.com.br/scripts/pixel/pixel-google.js", "utmify-google-pixel");
}

async function requiresConsent() {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 2000);
  try {
    const response = await fetch("/cdn-cgi/trace", { signal: controller.signal });
    if (!response.ok) return true;
    const location = (await response.text()).match(/^loc=(.+)$/m)?.[1]?.trim().toUpperCase();
    return !location || location === "XX" || location === "T1" || REGULATED_REGIONS.has(location);
  } catch {
    return true;
  } finally {
    window.clearTimeout(timeout);
  }
}

export function AdvertisingConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    let active = true;
    const saved = readConsent();
    if (saved?.choice === "accepted") loadAdvertising();
    else if (!saved) {
      void requiresConsent().then((required) => {
        if (!active) return;
        if (required) setShowBanner(true);
        else loadAdvertising();
      });
    }

    const syncConsent = (event: StorageEvent) => {
      if (event.key !== CONSENT_KEY) return;
      if (readConsent()?.choice === "accepted") loadAdvertising();
      else window.location.reload();
    };
    window.addEventListener("storage", syncConsent);
    return () => {
      active = false;
      window.removeEventListener("storage", syncConsent);
    };
  }, []);

  const saveChoice = (choice: ConsentChoice) => {
    const existing = readConsent();
    const record: ConsentRecord = {
      choice,
      decidedAt: new Date().toISOString(),
      noticeVersion: NOTICE_VERSION,
      visitorId: existing?.visitorId ?? crypto.randomUUID(),
    };
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
    setShowBanner(false);
    setShowSettings(false);
    if (choice === "accepted") loadAdvertising();
    else if (existing?.choice === "accepted") window.location.reload();
  };

  const panelOpen = showBanner || showSettings;

  return (
    <>
      {panelOpen && (
        <section
          aria-label="Preferências de privacidade"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-xl rounded-lg border border-border bg-card p-5 shadow-elegant md:inset-x-auto md:right-6"
        >
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h2 className="font-body text-base font-semibold text-card-foreground">Sua privacidade importa</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Usamos pixels de publicidade para medir campanhas e melhorar anúncios. Você pode aceitar ou
                recusar; sua escolha não impede o acesso ao site. Consulte nossa{" "}
                <Link to="/privacidade" className="font-medium text-primary underline underline-offset-2">
                  Política de Privacidade
                </Link>.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full" onClick={() => saveChoice("rejected")}>
                  Recusar
                </Button>
                <Button className="w-full" onClick={() => saveChoice("accepted")}>
                  Aceitar
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {!panelOpen && (
        <Button
          variant="secondary"
          size="sm"
          className="fixed bottom-3 left-3 z-[90] border border-border shadow-soft"
          onClick={() => setShowSettings(true)}
          aria-label="Abrir configurações de privacidade"
        >
          <ShieldCheck aria-hidden="true" />
          Privacidade
        </Button>
      )}
    </>
  );
}