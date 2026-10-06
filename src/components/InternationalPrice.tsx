import { useEffect, useState } from "react";

const BASE_EUR = 23.87;
const FALLBACK = "€ 23,87";
const COUNTRY_CURRENCIES: Record<string, { currency: string; locale: string }> = {
  ES: { currency: "EUR", locale: "es-ES" },
  PT: { currency: "EUR", locale: "pt-PT" },
  MX: { currency: "MXN", locale: "es-MX" },
  CO: { currency: "COP", locale: "es-CO" },
  AR: { currency: "ARS", locale: "es-AR" },
  CL: { currency: "CLP", locale: "es-CL" },
  PE: { currency: "PEN", locale: "es-PE" },
  BR: { currency: "BRL", locale: "pt-BR" },
  US: { currency: "USD", locale: "en-US" },
  UY: { currency: "UYU", locale: "es-UY" },
  PY: { currency: "PYG", locale: "es-PY" },
  BO: { currency: "BOB", locale: "es-BO" },
  CR: { currency: "CRC", locale: "es-CR" },
  GT: { currency: "GTQ", locale: "es-GT" },
  HN: { currency: "HNL", locale: "es-HN" },
  DO: { currency: "DOP", locale: "es-DO" },
};

const CURRENCY_LABELS: Record<string, string> = {
  MXN: "MX$", COP: "COP $", ARS: "AR$", CLP: "CLP $", USD: "US$",
  UYU: "UYU $", PYG: "₲", BOB: "Bs", CRC: "₡", GTQ: "Q", HNL: "L", DOP: "RD$",
};

// No rates are hardcoded or persisted: each visit requests the current daily feed.
export default function InternationalPrice() {
  const [price, setPrice] = useState(FALLBACK);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 8000);

    async function convert() {
      try {
        const regionResponse = await fetch("https://api.country.is/", {
          signal: controller.signal, credentials: "omit", referrerPolicy: "no-referrer",
        });
        if (!regionResponse.ok) return;
        const region: unknown = await regionResponse.json();
        if (!region || typeof region !== "object" || !("country" in region) || typeof region.country !== "string") return;
        const target = COUNTRY_CURRENCIES[region.country.toUpperCase()];
        // Unknown countries and euro countries keep the immutable EUR offer.
        if (!target || target.currency === "EUR") return;

        const response = await fetch("https://open.er-api.com/v6/latest/EUR", {
          signal: controller.signal, credentials: "omit", referrerPolicy: "no-referrer",
        });
        if (!response.ok) return;
        const data = await response.json() as {
          result?: string; base_code?: string; time_last_update_unix?: number;
          rates?: Record<string, number>;
        };
        const rate = data.rates?.[target.currency];
        const updated = data.time_last_update_unix;
        const now = Date.now() / 1000;
        if (data.result !== "success" || data.base_code !== "EUR" ||
          typeof rate !== "number" || !Number.isFinite(rate) || rate <= 0 ||
          typeof updated !== "number" || !Number.isFinite(updated) ||
          now - updated > 48 * 3600 || updated > now + 3600) return;

        const amount = BASE_EUR * rate;
        if (!Number.isFinite(amount)) return;
        const formatted = new Intl.NumberFormat(target.locale, {
          style: "currency", currency: target.currency,
        }).formatToParts(amount).map(part => part.type === "currency"
          ? CURRENCY_LABELS[target.currency] ?? part.value : part.value).join("");
        if (!controller.signal.aborted) setPrice(formatted);
      } catch {
        // Country/rate failures and timeouts never replace the visible EUR price.
      } finally {
        window.clearTimeout(timeout);
      }
    }

    void convert();
    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <p aria-live="polite" data-testid="international-price"
        className={`font-display ${price.length > 12 ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"} font-bold text-primary leading-none mt-1 break-words`}>
        {price}
      </p>
      <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
        Precio convertido según tu región. El importe final se confirma en Hotmart.
      </p>
    </>
  );
}