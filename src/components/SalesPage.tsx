import { useEffect, useState } from "react";
import { Check, X, Shield, Lock, Award, Sparkles, Scissors, Crown, Star, ShoppingBag, Flame, Users, TrendingUp, Heart, MessageCircle, PlayCircle } from "lucide-react";
import heroMockup from "@/assets/mirian-serrano-hero.png.asset.json";
import bonusModules from "@/assets/metodo-miriam-serrano-livros.png.asset.json";
import mirianPhoto from "@/assets/mirian-serrano.png.asset.json";
import mirianAtelierNoiva from "@/assets/mirian-nova-17.png.asset.json";
import mirianVestidoCabide from "@/assets/mirian-nova-18.png.asset.json";
import croquiDesenho from "@/assets/mirian-nova-19.png.asset.json";
import moldeDecotes from "@/assets/molde-corset-decotes.png.asset.json";
import noivaCorsetRenda from "@/assets/noiva-corset-renda.webp.asset.json";

import moldeVariacoes from "@/assets/molde-corsets-variacoes.png.asset.json";
import moldePatente from "@/assets/molde-corset-patente.png.asset.json";
import mirianVestidoRose from "@/assets/mirian-vestido-rose.png.asset.json";
import mirianAjusteNoiva from "@/assets/mirian-ajuste-noiva.png.asset.json";
import depoimento1 from "@/assets/depoimento-1.jpeg.asset.json";
import depoimento2 from "@/assets/depoimento-2.jpeg.asset.json";
import depoimento3 from "@/assets/depoimento-3.jpeg.asset.json";
import depoimento4 from "@/assets/depoimento-4.png.asset.json";
import depoimento5 from "@/assets/depoimento-5.jpeg.asset.json";
import depoimento6 from "@/assets/depoimento-6.png.asset.json";
import depoimento7 from "@/assets/depoimento-7.png.asset.json";
import depoimento8 from "@/assets/depoimento-8.png.asset.json";
import depoimento9 from "@/assets/depoimento-9.png.asset.json";
import avatar1 from "@/assets/avatar-1.jpg.asset.json";
import avatar2 from "@/assets/avatar-2.jpg.asset.json";
import avatar3 from "@/assets/avatar-3.jpg.asset.json";
import avatar4 from "@/assets/avatar-4.jpg.asset.json";
import courseModulesVideo from "@/assets/gravacao-area-membros.mp4.asset.json";
import { SALES_COPY, type Lang, type SalesCopy } from "@/lib/salesCopy";

const WistiaPlayer = "wistia-player" as unknown as React.FC<{ "media-id": string; aspect?: string; className?: string }>;

export type SalesVariant = {
  eyebrow?: string;
  headline: React.ReactNode;
  subheadline: string;
  ctaLabel: string;
  hookTitle?: string;
  hookParagraphs?: string[];
  planSupport?: string;
  incomeAngle?: boolean;
  singlePlan?: boolean;
  lowTicket?: boolean;
};


const CHECKOUT_URL = "https://pay.wiapy.com/iWJwRQvGe-si";
const CHECKOUT_URL_PRODUTO_2 = "https://pay.cakto.com.br/4cgckir_988285";


function PurchaseNotification({ t }: { t: SalesCopy }) {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % t.purchaseAlerts.length);
        setVisible(true);
      }, 500);
    }, 6000);
    return () => clearInterval(cycle);
  }, [visible, t.purchaseAlerts.length]);

  const alert = t.purchaseAlerts[idx];
  return (
    <div
      className={`fixed z-50 bg-card border border-gold/40 rounded-xl shadow-elegant p-2.5 md:p-3 flex items-center gap-2.5 md:gap-3 transition-all duration-500 bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-auto md:max-w-xs ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-cta/15 text-cta flex items-center justify-center shrink-0">
        <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
      </div>
      <div className="text-left min-w-0 flex-1">
        <p className="text-[11px] md:text-xs font-semibold text-foreground leading-tight truncate">
          <span className="text-primary">{alert.name}</span> {t.justBought}
        </p>
        <p className="text-[10px] md:text-[11px] text-muted-foreground mt-0.5 truncate">{alert.city} · {alert.time}</p>
      </div>
      <Check className="w-4 h-4 text-cta shrink-0" />
    </div>
  );
}

function StarRating({ size = "md", t }: { size?: "sm" | "md" | "lg"; t: SalesCopy }) {
  const sizes = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6" };
  const text = { sm: "text-sm", md: "text-base", lg: "text-lg" };
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      <div className="flex gap-0.5 text-gold">
        {[...Array(5)].map((_, i) => <Star key={i} className={`${sizes[size]} fill-current`} />)}
      </div>
      <span className={`font-bold text-foreground ${text[size]}`}>{t.rating}</span>
      <span className={`text-muted-foreground ${text[size]}`}>{t.ratingCount}</span>
    </div>
  );
}

function withTracking(url: string): string {
  if (typeof window === "undefined") return url;
  if (url.startsWith("#")) return url;
  try {
    const u = new URL(url);
    let stored: Record<string, string> = {};
    try { stored = JSON.parse(localStorage.getItem("_utms") || "{}"); } catch { /* noop */ }
    const live = new URLSearchParams(window.location.search);
    live.forEach((v, k) => { if (v) stored[k] = v; });
    Object.entries(stored).forEach(([k, v]) => {
      if (v && !u.searchParams.has(k)) u.searchParams.set(k, v);
    });
    return u.toString();
  } catch {
    return url;
  }
}

// Lock global (fora do componente) — impede que qualquer clique duplicado,
// disparo repetido do evento (toque + clique sintético, StrictMode, animação
// pulse-cta, etc.) abra mais de uma aba de checkout ao mesmo tempo.
let ctaOpenLock = false;

function CTAButton({ label, href = "#comprar" }: { label: string; href?: string }) {
  const isAnchor = href.startsWith("#");

  const baseClasses =
    "btn-cta pulse-cta inline-flex items-center justify-center rounded-xl px-6 md:px-8 py-4 md:py-5 text-sm md:text-base lg:text-lg font-bold uppercase tracking-wide w-full max-w-2xl break-words whitespace-normal";

  if (isAnchor) {
    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      (window as any).__ctaJustClicked = true;
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        (window as any).__ctaJustClicked = false;
      }, 2000);
    };

    return (
      <a href={href} onClick={handleAnchorClick} className={baseClasses}>
        {label} →
      </a>
    );
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (ctaOpenLock) return;
    ctaOpenLock = true;

    (window as any).__ctaJustClicked = true;
    window.open(withTracking(href), "_blank", "noopener,noreferrer");

    setTimeout(() => {
      (window as any).__ctaJustClicked = false;
      ctaOpenLock = false;
    }, 1500);
  };

  return (
    <button type="button" onClick={handleClick} className={baseClasses}>
      {label} →
    </button>
  );
}


function TodayDate({ locale }: { locale: string }) {
  const [today, setToday] = useState("");
  useEffect(() => {
    const update = () =>
      setToday(
        new Date().toLocaleDateString(locale, {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      );
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, [locale]);
  if (!today) return null;
  return <span>— {today}</span>;
}


export default function SalesPage({ variant, lang = "pt" }: { variant: SalesVariant; lang?: Lang }) {
  const t = SALES_COPY[lang];

  return (
    <div className="min-h-screen">
      <PurchaseNotification t={t} />
      <div className="w-full bg-cta text-cta-foreground text-xs md:text-sm text-center py-2 font-semibold flex items-center justify-center gap-2">
        <Flame className="w-4 h-4" /> &nbsp;{t.bannerOffer} <TodayDate locale={t.locale} />
      </div>

      <section className="max-w-4xl mx-auto px-5 pt-12 md:pt-16 pb-8 text-center">
        <div className="inline-flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-widest mb-6">
          <Crown className="w-4 h-4" /> {variant.eyebrow ?? t.eyebrowDefault} <Crown className="w-4 h-4" />
        </div>
        <h1 className="font-display text-[1.65rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] sm:leading-tight text-foreground break-words">
          {variant.headline}
        </h1>
        <p className="mt-6 text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
          {variant.subheadline}
        </p>

        <div className="mt-6"><StarRating size="md" t={t} /></div>

        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-cta/10 px-3 py-1.5 text-xs font-medium text-cta">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cta" />
          </span>
          {t.onlineNow}
        </div>

        <div className="mt-4 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <div className="flex -space-x-2">
            {[avatar1, avatar2, avatar3, avatar4].map((a, i) => (
              <img
                key={i}
                src={a.url}
                alt={t.studentAlt}
                width={32}
                height={32}
                loading="lazy"
                className="w-8 h-8 rounded-full object-cover border-2 border-background"
              />
            ))}
          </div>
          <span>{t.studentsBadge}</span>
        </div>

        <img
          src={heroMockup.url}
          alt={t.heroAlt}
          width={1354}
          height={1161}
          className="mt-10 mx-auto rounded-2xl shadow-elegant w-full max-w-3xl"
        />

        <div className="mt-10 max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-3 text-left mb-8">
            {t.bullets.map((b) => (
              <div key={b} className="flex items-start gap-2">
                <span className="text-gold mt-0.5"><Sparkles className="w-5 h-5" /></span>
                <span className="text-sm md:text-base font-medium text-foreground">{b}</span>
              </div>
            ))}
          </div>
          <CTAButton label={variant.ctaLabel} />
          <p className="mt-4 text-sm text-muted-foreground">{t.immediateAccess}</p>
          <div className="mt-4 flex items-center justify-center gap-5 text-xs text-muted-foreground uppercase font-medium flex-wrap">
            <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-cta" /> {t.secure}</span>
            <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> {t.ssl}</span>
            <span className="flex items-center gap-1"><Award className="w-4 h-4" /> {t.certificate}</span>
          </div>
        </div>
      </section>

      {variant.hookParagraphs && variant.hookParagraphs.length > 0 && (
        <section className="bg-primary text-primary-foreground px-5 py-14 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            {variant.hookTitle && (
              <h2 className="font-display text-2xl md:text-4xl font-bold text-gold leading-tight">
                {variant.hookTitle}
              </h2>
            )}
            <div className="mt-6 space-y-5">
              {variant.hookParagraphs.map((p) => (
                <p key={p} className="text-base md:text-lg leading-relaxed text-primary-foreground/90">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {variant.incomeAngle && (
        <>
          <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">{t.incomeEyebrow}</span>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">
                {t.incomeTitle}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {t.incomeCards.map((c) => (
                <div key={c.t} className="bg-card rounded-xl p-6 border border-border shadow-soft">
                  <TrendingUp className="w-6 h-6 text-gold mb-3" />
                  <h3 className="font-display text-lg font-bold text-primary">{c.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-card border-y border-border px-5 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">{t.mechanismEyebrow}</span>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary leading-tight">
                {t.mechanismTitle}
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                {t.mechanismP1a}
                <span className="text-primary font-semibold">{t.mechanismP1b}</span>
                {t.mechanismP1c}
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                {t.mechanismP2}
              </p>
            </div>
          </section>

          <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">{t.compareEyebrow}</span>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">
                {t.compareTitle}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary rounded-2xl p-7 border border-border">
                <h3 className="font-display text-xl font-bold text-primary">{t.compareSimpleTitle}</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {t.compareSimple.map((i) => (
                    <li key={i} className="flex items-start gap-2"><X className="w-4 h-4 mt-0.5 shrink-0" />{i}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-7 border-2 border-gold shadow-elegant">
                <h3 className="font-display text-xl font-bold text-primary">{t.compareStructuredTitle}</h3>
                <ul className="mt-4 space-y-3 text-sm text-foreground">
                  {t.compareStructured.map((i) => (
                    <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-cta shrink-0" />{i}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center max-w-2xl mx-auto">
              <CTAButton label={variant.ctaLabel} />
            </div>
          </section>
        </>
      )}


      <section className="py-12 md:py-16 overflow-hidden bg-secondary/40 border-y border-border">
        <div className="text-center mb-8 px-5">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">{t.marqueeEyebrow}</span>
          <h2 className="mt-2 font-display text-2xl md:text-4xl font-bold text-primary">
            {t.marqueeTitle}
          </h2>
        </div>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track flex gap-6 w-max">
            {[...Array(2)].flatMap((_, dup) =>
              [mirianAtelierNoiva, mirianVestidoRose, moldeDecotes, mirianVestidoCabide, noivaCorsetRenda, mirianAjusteNoiva, moldeVariacoes, croquiDesenho, moldePatente].map((img, i) => (
                <div
                  key={`${dup}-${i}`}
                  className="shrink-0 w-64 md:w-80 h-80 md:h-96 rounded-2xl overflow-hidden shadow-elegant border border-border bg-white flex items-center justify-center p-3"
                >
                  <img
                    src={img.url}
                    alt={t.marqueeAlt}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {variant.lowTicket ? (
        <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">{t.learnEyebrow}</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">{t.lowTicketTitle}</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {t.lowTicketIntro}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {t.lowTicketCards.map((item, i) => {
              const Icon = [Sparkles, Scissors, Heart, MessageCircle][i] ?? Sparkles;
              return (
                <div key={item.t} className="bg-card rounded-xl p-6 border border-border shadow-soft hover:-translate-y-1 transition-transform">
                  <Icon className="w-8 h-8 text-gold mb-3" />
                  <h3 className="font-display text-lg font-bold text-primary">{item.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.d}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-10 text-center text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.lowTicketOutro}
          </p>
          <div className="mt-10 text-center max-w-2xl mx-auto">
            <CTAButton label={variant.ctaLabel} />
          </div>
        </section>
      ) : (
        <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">
          <div className="mt-16 border-y border-border py-12 md:py-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">✨ {t.courseRevealEyebrow} ✨</span>
              <h3 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">{t.courseRevealTitle}</h3>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{t.courseRevealLead}</p>
            </div>

            <div className="mt-10 max-w-4xl mx-auto">
              <p className="mb-4 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                <PlayCircle className="h-5 w-5 text-gold" /> {t.courseRevealVideoLabel}
              </p>
              <video
                className="w-full aspect-video rounded-xl border border-border bg-primary shadow-elegant"
                controls
                playsInline
                preload="metadata"
              >
                <source src={courseModulesVideo.url} type="video/mp4" />
              </video>
            </div>

            <div className="mt-12 max-w-4xl mx-auto">
              <h4 className="text-center font-display text-2xl md:text-3xl font-bold text-primary">✨ {t.learnEyebrow}</h4>
              <div className="mt-7 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {t.courseRevealItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cta shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-display text-2xl font-bold text-primary">🔥 {t.courseRevealRangeTitle}</h4>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{t.courseRevealRangeText}</p>
                </div>
                <div>
                  <h4 className="font-display text-2xl font-bold text-primary">🔥 {t.courseRevealNotOnlyTitle}</h4>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{t.courseRevealNotOnlyText}</p>
                </div>
              </div>

              <p className="mt-10 bg-secondary p-5 md:p-6 rounded-lg text-center font-semibold text-primary leading-relaxed">
                ✨ {t.courseRevealSummary}
              </p>
            </div>
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <CTAButton label={t.modulesCta} />
            <p className="mt-3 text-sm text-muted-foreground">{t.modulesCtaSub}</p>
          </div>
        </section>
      )}


      <section className="bg-primary text-primary-foreground py-16 md:py-24 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <Scissors className="w-10 h-10 mx-auto text-gold mb-4" />
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            {t.goldTitleA}<span className="text-gold italic">{t.goldTitleB}</span>
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            {t.goldSub}
          </p>

          <img
            src={bonusModules.url}
            alt={t.goldAlt}
            width={1200}
            height={912}
            loading="lazy"
            className="mt-10 mx-auto rounded-2xl shadow-elegant w-full max-w-2xl"
          />

          <div className="mt-10 grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {t.goldItems.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-primary-foreground/10 rounded-lg p-4">
                <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">{t.mentorEyebrow}</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">{t.mentorTitle}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={mirianPhoto.url}
            alt={t.mentorPhotoAlt}
            className="rounded-2xl shadow-elegant w-full max-w-md mx-auto"
            loading="lazy"
          />
          <div className="space-y-5 text-foreground">
            <p className="text-base md:text-lg leading-relaxed">
              {t.bio1a}<span className="font-semibold text-primary">{t.bio1b}</span>{t.bio1c}<span className="italic text-gold">{t.bio1d}</span>.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              {t.bio2a}<span className="font-semibold">{t.bio2b}</span>{t.bio2c}<span className="italic">{t.bio2d}</span>.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              {t.bio3a}<span className="font-semibold">{t.bio3b}</span>{t.bio3c}<span className="font-semibold text-gold">{t.bio3d}</span>.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              {t.mentorTags.map((tag, i) => {
                const Icon = [Crown, Award, Sparkles][i] ?? Crown;
                return (
                  <div key={tag} className="flex items-center gap-2 text-sm"><Icon className="w-5 h-5 text-gold" /> {tag}</div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 max-w-4xl mx-auto px-0">
          <p className="text-center text-xs uppercase tracking-widest text-gold font-bold mb-4">{t.videoLabel}</p>
          <div className="rounded-2xl overflow-hidden shadow-elegant border border-border w-full">
            <WistiaPlayer media-id="a5jnm5622k" aspect="1.7777777777777777" className="w-full" />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-14 md:py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.stats.map((s, i) => {
              const Icon = [Users, Star, TrendingUp, Heart][i] ?? Users;
              return (
                <div key={s.l} className="flex flex-col items-center">
                  <Icon className="w-7 h-7 text-gold mb-2" />
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary leading-none">{s.n}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wide">{s.l}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">
        <div className="text-center mb-4">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">{t.testimonialsEyebrow}</span>
        </div>
        <h2 className="text-center font-display text-3xl md:text-5xl font-bold text-primary mb-4">
          {t.testimonialsTitle}
        </h2>
        <div className="mb-12"><StarRating size="md" t={t} /></div>
        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.map((r) => (
            <div key={r.n} className="bg-card rounded-xl p-6 border border-border shadow-soft">
              <div className="flex gap-1 text-gold mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm text-foreground italic">"{r.t}"</p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-primary">— {r.n}</p>
                <p className="text-xs text-muted-foreground">{r.c} · {t.verifiedPurchase}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center max-w-2xl mx-auto">
          <CTAButton label={t.testimonialsCta} />
          <p className="mt-3 text-sm text-muted-foreground">{t.testimonialsCtaSub}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 overflow-hidden bg-secondary/40 border-y border-border">
        <div className="text-center mb-8 px-5">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">{t.dmEyebrow}</span>
          <h2 className="mt-2 font-display text-2xl md:text-4xl font-bold text-primary">
            {t.dmTitle}
          </h2>
        </div>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track flex gap-6 w-max items-stretch">
            {[...Array(2)].flatMap((_, dup) =>
              [depoimento1, depoimento2, depoimento3, depoimento4, depoimento5, depoimento6, depoimento7, depoimento8, depoimento9].map((img, i) => (
                <div
                  key={`dep-${dup}-${i}`}
                  className="shrink-0 w-64 md:w-80 h-80 md:h-[26rem] rounded-2xl overflow-hidden shadow-soft border border-border/30 bg-transparent"
                >
                  <img
                    src={img.url}
                    alt={t.dmAlt}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {variant.lowTicket ? (
        <section id="comprar" className="px-5 py-16 md:py-24 bg-secondary/30">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">{t.offerEyebrowSingle}</span>
              <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold text-primary">
                {variant.planSupport ?? t.planTitleDefault}
              </h2>
            </div>

            <div className="bg-card rounded-2xl border-2 border-gold shadow-elegant overflow-hidden">
              <div className="bg-gold text-gold-foreground text-center py-3 font-bold uppercase tracking-widest text-sm">
                {t.ltBadge}
              </div>
              <div className="p-6 md:p-8 text-center">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary">
                  {t.ltTitle}
                </h3>
                <p className="mt-2 text-muted-foreground">{t.ltSub}</p>

                <ul className="mt-6 space-y-3 text-left max-w-md mx-auto">
                  {t.ltFeatures.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-cta shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <p className="text-sm text-muted-foreground line-through">{t.ltFrom}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{t.onlyFor}&nbsp;</p>
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary leading-none mt-1">
                    R$ 27<span className="text-xl md:text-2xl">,70</span>
                  </p>
                </div>

                <div className="mt-8">
                  <CTAButton label={t.ltCta} href={CHECKOUT_URL} />
                </div>

                <p className="mt-4 text-xs text-muted-foreground">{t.ltGuarantee}</p>

                <div className="mt-6 flex items-center justify-center gap-5 text-xs text-muted-foreground uppercase font-medium flex-wrap">
                  <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-cta" /> {t.secure}</span>
                  <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> SSL</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                {t.ltUpsellPre}
                <a
                  href={withTracking(CHECKOUT_URL_PRODUTO_2)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cta font-semibold underline"
                >
                  {t.ltUpsellLink}
                </a>{" "}
                —{" "}
                <a
                  href={withTracking(CHECKOUT_URL_PRODUTO_2)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cta font-semibold underline"
                >
                  {t.ltUpsellSee}
                </a>
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-10 bg-secondary rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-24 h-24 rounded-full bg-cta text-cta-foreground flex flex-col items-center justify-center shrink-0 shadow-lg">
              <span className="font-display text-3xl font-bold leading-none">{t.guaranteeDays}</span>
              <span className="text-xs uppercase font-bold">{t.guaranteeDaysLabel}</span>
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-primary">{t.guaranteeTitle}</h4>
              <p className="text-sm text-muted-foreground mt-2">
                {t.guaranteeText}
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="px-5 py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">
              {t.offerEyebrowSingle}
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold text-primary">
              {variant.planSupport ?? t.planTitleDefault}
            </h2>
          </div>

          <div className="mx-auto max-w-xl">

            {/* PRODUTO 1 - Básico */}
            <div id="comprar" className="bg-card rounded-2xl border-2 border-border shadow-soft overflow-hidden flex flex-col">
              <div className="bg-secondary text-secondary-foreground text-center py-3 font-bold uppercase tracking-widest text-sm">
                {t.planBadgeSingle}
              </div>
              <div className="p-6 md:p-8 text-center flex flex-col flex-1">
                <h3 className="font-display text-lg md:text-xl font-bold text-primary">
                  <span className="block">{t.plan1TitleA}</span>
                  <span className="text-gold block mt-1">{t.plan1TitleB}</span>
                </h3>

                <div className="mt-6 space-y-2 text-left max-w-md mx-auto">
                  {t.featuresSingle.map((b) => (
                    <div key={b.t} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-cta shrink-0 mt-0.5" />
                      <span className="text-sm">{b.t}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-sm text-muted-foreground line-through">{t.fromPrice1}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{t.onlyFor}&nbsp;</p>
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary leading-none mt-1">
                    R$ 189<span className="text-xl md:text-2xl">,89</span>
                  </p>
                </div>

                <div className="mt-8 mt-auto pt-8">
                  <CTAButton label={t.ctaSingle} href={CHECKOUT_URL} />
                </div>

                <div className="mt-6 flex items-center justify-center gap-5 text-xs text-muted-foreground uppercase font-medium flex-wrap">
                  <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-cta" /> {t.secure}</span>
                  <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> SSL</span>
                </div>
              </div>
            </div>

          </div>

          <div className="max-w-2xl mx-auto mt-10 bg-secondary rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-24 h-24 rounded-full bg-cta text-cta-foreground flex flex-col items-center justify-center shrink-0 shadow-lg">
              <span className="font-display text-3xl font-bold leading-none">{t.guaranteeDays}</span>
              <span className="text-xs uppercase font-bold">{t.guaranteeDaysLabel}</span>
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-primary">{t.guaranteeTitle}</h4>
              <p className="text-sm text-muted-foreground mt-2">
                {t.guaranteeText}
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="max-w-3xl mx-auto px-5 pb-20">
        <h2 className="text-center font-display text-3xl md:text-4xl font-bold text-primary mb-10">{t.faqTitle}</h2>
        <div className="space-y-3">
          {(variant.lowTicket ? [...t.faqLowTicket, ...t.faq] : t.faq).map((f) => (
            <details key={f.q} className="bg-card rounded-xl border border-border p-5 group">
              <summary className="font-semibold text-primary cursor-pointer flex justify-between items-center list-none">
                {f.q}
                <span className="text-gold text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton label={variant.ctaLabel} />
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground/70 py-10 text-xs px-5">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="border border-primary-foreground/20 rounded-xl p-5">
            <p className="text-primary-foreground text-sm font-semibold mb-2">
              {t.footerHook}
            </p>
            <p className="leading-relaxed">
              {t.footerText}
            </p>
            <a
              href="https://amaroads.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 underline underline-offset-4 text-primary-foreground font-medium hover:opacity-80 transition-opacity"
            >
              {t.footerLink}
            </a>
          </div>
          <p>© {new Date().getFullYear()} {t.rights}</p>
        </div>
      </footer>

    </div>
  );
}
