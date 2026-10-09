import { useEffect, useState } from "react";
import { captureLocalOfferAction } from "@/lib/checkout-intent";
import { salesImageProps, type SalesMedia } from "@/lib/sales-media";
import { loadWistia } from "@/lib/wistia-loader";
import { Check, X, Shield, Lock, Clock, Award, Sparkles, Scissors, Crown, Star, ShoppingBag, Flame, Users, TrendingUp, Heart } from "lucide-react";
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
  professionalPrice?: string;
  professionalCheckoutUrl?: string;
  testimonialImages?: { url: string }[];
  internationalPrice?: React.ReactNode;
  media?: SalesMedia;
  lang?: "pt" | "es";
};


const CHECKOUT_URL = "https://pay.wiapy.com/xKa8OJCEivJ";
const CHECKOUT_URL_PRODUTO_2 = "https://pay.cakto.com.br/4cgckir_988285";
const UPGRADE_CHECKOUT_URL = "https://pay.wiapy.com/KktHTpviGsp";



const PURCHASE_ALERTS = [
  { name: "Elaine M.", city: "São Paulo, SP", time: "há 2 minutos" },
  { name: "Juliana R.", city: "Belo Horizonte, MG", time: "há 4 minutos" },
  { name: "Patrícia S.", city: "Curitiba, PR", time: "há 7 minutos" },
  { name: "Fernanda L.", city: "Rio de Janeiro, RJ", time: "há 9 minutos" },
  { name: "Mariana T.", city: "Porto Alegre, RS", time: "há 12 minutos" },
  { name: "Camila O.", city: "Salvador, BA", time: "há 15 minutos" },
  { name: "Roberta P.", city: "Recife, PE", time: "há 18 minutos" },
  { name: "Aline C.", city: "Fortaleza, CE", time: "há 21 minutos" },
];

function PurchaseNotification() {
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
        setIdx((i) => (i + 1) % PURCHASE_ALERTS.length);
        setVisible(true);
      }, 500);
    }, 6000);
    return () => clearInterval(cycle);
  }, [visible]);

  const alert = PURCHASE_ALERTS[idx];
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
          <span className="text-primary">{alert.name}</span> acabou de comprar
        </p>
        <p className="text-[10px] md:text-[11px] text-muted-foreground mt-0.5 truncate">{alert.city} · {alert.time}</p>
      </div>
      <Check className="w-4 h-4 text-cta shrink-0" />
    </div>
  );
}

function StarRating({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6" };
  const text = { sm: "text-sm", md: "text-base", lg: "text-lg" };
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      <div className="flex gap-0.5 text-gold">
        {[...Array(5)].map((_, i) => <Star key={i} className={`${sizes[size]} fill-current`} />)}
      </div>
      <span className={`font-bold text-foreground ${text[size]}`}>4,9</span>
      <span className={`text-muted-foreground ${text[size]}`}>· +2.147 avaliações</span>
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

function CTAButton({ label = "QUERO CRIAR MEUS CORSELETS", href = "#comprar", onClick }: { label?: string; href?: string; onClick?: () => void }) {
  const isAnchor = href.startsWith("#");

  const baseClasses =
    "btn-cta inline-flex items-center justify-center rounded-xl px-6 md:px-8 py-4 md:py-5 text-sm md:text-base lg:text-lg font-bold uppercase tracking-wide w-full max-w-2xl break-words whitespace-normal";

  if (isAnchor) {
    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      captureLocalOfferAction(e, () => {
        (window as any).__ctaJustClicked = true;
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
          (window as any).__ctaJustClicked = false;
        }, 2000);
      });
    };

    return (
      <a href={href} onClickCapture={handleAnchorClick} className={baseClasses}>
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
    <button type="button" onClickCapture={onClick ? (e) => {
      captureLocalOfferAction(e, () => {
        (window as any).__ctaJustClicked = true;
        onClick();
        setTimeout(() => {
          (window as any).__ctaJustClicked = false;
        }, 2000);
      });
    } : undefined} onClick={onClick ? undefined : handleClick} className={baseClasses}>
      {label} →
    </button>
  );
}

function UpgradePopup({ onClose, es }: { onClose: () => void; es?: boolean }) {
  return (
    <div className="fixed inset-0 z-[110] bg-foreground/80 flex items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border-2 border-gold bg-card shadow-elegant" onClick={(e) => e.stopPropagation()}>
        <button type="button" aria-label="Fechar" onClick={onClose} className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-xl font-bold text-secondary-foreground">
          ×
        </button>
        <div className="bg-gold px-6 py-4 text-center font-bold uppercase tracking-widest text-gold-foreground">
          Oferta exclusiva
        </div>
        <div className="p-6 text-center md:p-8">
          <Sparkles className="mx-auto h-9 w-9 text-gold" />
          <h3 className="mt-4 font-display text-3xl font-bold text-primary">Leve o {es ? "Curso Profesional Completo" : "Curso Profissional Completo"}</h3>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Aproveite esta oportunidade para receber todas as aulas profissionais, técnicas avançadas e modelagens.
          </p>
          <p className="mt-6 text-sm text-muted-foreground line-through">De R$ 89,90</p>
          <p className="mt-1 font-display text-5xl font-bold text-primary">R$ 69<span className="text-2xl">,43</span></p>
          <div className="mt-7">
            <CTAButton label="SIM, QUERO O CURSO COMPLETO" href={UPGRADE_CHECKOUT_URL} />
          </div>
          <a href={withTracking(CHECKOUT_URL)} className="mt-5 inline-block text-sm font-semibold text-muted-foreground underline underline-offset-4">
            Não, quero continuar apenas com o Curso Clássico por R$ 27,89
          </a>
        </div>
      </div>
    </div>
  );
}


function TodayDate() {
  const [today, setToday] = useState("");
  useEffect(() => {
    const update = () =>
      setToday(
        new Date().toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      );
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);
  if (!today) return null;
  return <span>— {today}</span>;
}


export default function SalesPage({ variant }: { variant: SalesVariant }) {
  const es = variant.lang === "es";
  const [upgradeOpen, setUpgradeOpen] = useState(false);
  useEffect(() => {
    if (!es) loadWistia(document);
  }, [es]);
  const modules = [
    { n: "01", title: "Corselet Clássico", desc: "A base do método. Modelagem tradicional com estrutura impecável." },
    { n: "02", title: "Corselet de Noiva", desc: "Delicadeza e luxo para peças únicas e inesquecíveis." },
    { n: "03", title: "Corselet Estilizado", desc: "Variações criativas para looks autorais e editoriais." },
    { n: "04", title: "Corselet Sob Medida", desc: "Aula de vestir a primeira peça — zero ajustes, encaixe perfeito." },
    { n: "05", title: "Corselet Avançado", desc: "Técnicas em método internacional para peças de alta complexidade." },
    { n: "06", title: "Acabamento Alto Padrão", desc: "Técnicas profissionais de estrutura, montagem e acabamento de luxo." },
  ];

  const modulesEs = [
    { n: "01", title: "Corsé Clásico", desc: "La base del método. Patronaje tradicional con estructura impecable." },
    { n: "02", title: "Corsé de Novia", desc: "Delicadeza y lujo para prendas únicas e inolvidables." },
    { n: "03", title: "Corsé Estilizado", desc: "Variaciones creativas para looks de autor y editoriales." },
    { n: "04", title: "Corsé a Medida", desc: "Prueba de la primera prenda, ajuste y precisión sobre el cuerpo." },
    { n: "05", title: "Corsé Avanzado", desc: "Técnicas internacionales para prendas de alta complejidad." },
    { n: "06", title: "Acabado de Alto Nivel", desc: "Técnicas profesionales de estructura, montaje y acabado de lujo." },
  ];
  const activeModules = es ? modulesEs : modules;

  const bullets = [
    "Método exclusivo Mirian Serrano",
    "Técnicas de precisão de costura",
    "Acabamento de luxo",
    "Modelagem profissional",
    "Peças com caimento impecável",
    "Aulas de vestir a peça sob medida",
  ];

  const bulletsEs = [
    "Método exclusivo Mirian Serrano",
    "Técnicas de costura de precisión",
    "Acabado de lujo",
    "Patronaje profesional",
    "Prendas con caída impecable",
    "Clases de prueba de prendas a medida",
  ];
  const activeBullets = es ? bulletsEs : bullets;

  return (
    <div className="min-h-screen">
{!es && upgradeOpen && <UpgradePopup es={es} onClose={() => setUpgradeOpen(false)} />}
      <div className="w-full bg-cta text-cta-foreground text-xs md:text-sm text-center py-2 font-semibold flex items-center justify-center gap-2">
        <Flame className="w-4 h-4" /> &nbsp;{es ? "Oferta disponible hoy" : "Oferta disponível somente hoje"} {!es && <TodayDate />}
      </div>




      <section className="max-w-4xl mx-auto px-5 pt-8 md:pt-12 pb-8 text-center">
        <div className="inline-flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-widest mb-6">
          <Crown className="w-4 h-4" /> {variant.eyebrow ?? "Método Mirian Serrano"} <Crown className="w-4 h-4" />
        </div>
        <h1 className="font-display text-[1.65rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] sm:leading-tight text-foreground break-words">
          {variant.headline}
        </h1>
        <p className="mt-6 text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
          {variant.subheadline}
        </p>

        <div className="mt-6"><StarRating size="md" /></div>

        <div className="mt-4 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <div className="flex -space-x-2">
            <img
              {...salesImageProps(avatar1, variant.media)}
              alt="Aluna do curso"
              width={32}
              height={32}
              loading="lazy"
              className="w-8 h-8 rounded-full object-cover border-2 border-background"
            />
            <img
              {...salesImageProps(avatar2, variant.media)}
              alt="Aluna do curso"
              width={32}
              height={32}
              loading="lazy"
              className="w-8 h-8 rounded-full object-cover border-2 border-background"
            />
            <img
              {...salesImageProps(avatar3, variant.media)}
              alt="Aluna do curso"
              width={32}
              height={32}
              loading="lazy"
              className="w-8 h-8 rounded-full object-cover border-2 border-background"
            />
            <img
              {...salesImageProps(avatar4, variant.media)}
              alt="Aluna do curso"
              width={32}
              height={32}
              loading="lazy"
              className="w-8 h-8 rounded-full object-cover border-2 border-background"
            />
          </div>
          <span>{es ? "+2.000 costureras ya conocen el método" : "+2.000 costureiras já dominam o método"}</span>
        </div>

        <img
          alt="Mirian Serrano em seu ateliê com corselet e laptop do curso"
          width={1354}
          height={1161}
          {...salesImageProps(heroMockup, variant.media, "(min-width: 808px) 768px, calc(100vw - 40px)")}
          loading={variant.media ? "eager" : undefined}
          fetchPriority={variant.media ? "high" : undefined}
          className="mt-7 mx-auto rounded-2xl shadow-elegant w-full max-w-3xl"
        />

        <div className="mt-10 max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-3 text-left mb-8">
            {activeBullets.map((b) => (
              <div key={b} className="flex items-start gap-2">
                <span className="text-gold mt-0.5"><Sparkles className="w-5 h-5" /></span>
                <span className="text-sm md:text-base font-medium text-foreground">{b}</span>
              </div>
            ))}
          </div>
          <CTAButton label={variant.ctaLabel} />
          <p className="mt-4 text-sm text-muted-foreground">{es ? "Acceso inmediato • 7 días de garantía" : "Acesso imediato • 7 dias de garantia"}</p>
          <div className="mt-4 flex items-center justify-center gap-5 text-xs text-muted-foreground uppercase font-medium flex-wrap">
            <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-cta" /> {es ? "Compra segura" : "Compra segura"}</span>
            <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> SSL criptografado</span>
            <span className="flex items-center gap-1"><Award className="w-4 h-4" /> {es ? "Certificado" : "Certificado"}</span>
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
              <span className="text-xs uppercase tracking-widest text-gold font-bold">A conta que ninguém faz</span>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">
                Quanto dinheiro você está deixando na mesa
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { t: "Você cobra por hora, não por valor", d: "Ajustes e costura simples pagam pouco e consomem o dia inteiro. O ticket nunca sobe." },
                { t: "Você recusa o serviço mais bem pago", d: "Quando chega um vestido estruturado, você indica outra profissional — e o dinheiro vai embora." },
                { t: "Sua agenda depende de volume", d: "Sem uma especialização, o mês só fecha se você aceitar tudo, por qualquer preço." },
              ].map((c) => (
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
              <span className="text-xs uppercase tracking-widest text-gold font-bold">O mecanismo</span>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary leading-tight">
                Por que peças de luxo custam caro
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                O que sustenta um vestido de festa ou de noiva não é o tecido: é o
                <span className="text-primary font-semibold"> corselete estruturado</span> por dentro. É ele que dá o caimento,
                a sustentação e o corpo que fazem a cliente pagar sem discutir preço.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Quem sabe construir essa estrutura entrega uma peça que veste na primeira prova — e cobra por isso.
              </p>
            </div>
          </section>

          <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">Comparativo de valor</span>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">
                Vestido simples x vestido estruturado
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary rounded-2xl p-7 border border-border">
                <h3 className="font-display text-xl font-bold text-primary">Vestido simples</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {["Concorrência em cada esquina", "Cliente pechincha o preço", "Muitas horas, margem baixa", "Peça esquecível"].map((i) => (
                    <li key={i} className="flex items-start gap-2"><X className="w-4 h-4 mt-0.5 shrink-0" />{i}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-7 border-2 border-gold shadow-elegant">
                <h3 className="font-display text-xl font-bold text-primary">Vestido com corselete estruturado</h3>
                <ul className="mt-4 space-y-3 text-sm text-foreground">
                  {["Pouquíssimas profissionais sabem fazer", "Cliente paga pelo resultado", "Ticket muito mais alto por peça", "Vira indicação e memória visual"].map((i) => (
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
          <span className="text-xs uppercase tracking-widest text-gold font-bold">{es ? "Inspiración para costureras" : "Inspiração para costureiras"}</span>
          <h2 className="mt-2 font-display text-2xl md:text-4xl font-bold text-primary">
            {es ? "Moldes, técnicas y prendas que enamoran" : "Moldes, técnicas e peças que apaixonam"}
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
                    {...salesImageProps(img, variant.media)}
                    alt="Molde e inspiração de corselet"
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24 px-5 border-y border-border">

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary leading-tight">
            {es ? "Transforma tu técnica y crea corsés que trascienden" : "Transforme sua técnica e crie corselets que transcendem"}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground italic font-display">
            "{es ? "Cada corsé es una escultura para vestir. Aprendes a construir prendas que realzan cada silueta con precisión de alta costura." : "Cada corselet é uma escultura vestível. Você aprende a construir peças que valorizam cada silhueta com precisão de Alto Designer."}"
          </p>
          <p className="mt-4 text-sm uppercase tracking-widest text-gold font-semibold">— Mirian Serrano</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">{es ? "Lo que vas a aprender" : "O que você vai aprender"}</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">{es ? "Módulos del Curso" : "Módulos do Curso"}</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {es ? "Cada módulo presenta una variación de corsé —del clásico al creativo— con clases paso a paso de patronaje, costura y prueba." : "Cada módulo é uma variação de corselet — do clássico ao autoral — com aulas passo a passo de modelagem, costura e prova."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {activeModules.map((m) => (
            <div key={m.n} className="bg-card rounded-xl p-6 border border-border shadow-soft hover:-translate-y-1 transition-transform">
              <div className="flex items-start gap-4">
                <div className="font-display text-4xl font-bold text-gold leading-none">{m.n}</div>
                <div>
                  <h3 className="font-display text-xl font-bold text-primary">{m.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <CTAButton label={es ? "QUIERO APRENDER TODAS LAS VARIACIONES" : "QUERO APRENDER TODAS AS VARIAÇÕES"} />
          <p className="mt-3 text-sm text-muted-foreground">{es ? "Garantía de 7 días • Acceso inmediato" : "Garantia de 7 dias • Acesso imediato"}</p>
        </div>
      </section>


      <section className="bg-primary text-primary-foreground py-16 md:py-24 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <Scissors className="w-10 h-10 mx-auto text-gold mb-4" />
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            {es ? <>Clases con <span className="text-gold italic">consejos de oro</span></> : <>Aulas com <span className="text-gold italic">dicas de ouro</span></>}
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            {es ? "El diferencial de este curso: secretos que solo conoce quien lleva años trabajando con esta técnica." : "O diferencial deste curso: segredos que só quem faz há décadas conhece."}
          </p>

          <img
            alt="Método Miriam Serrano - Livros de corsets"
            width={1200}
            height={912}
            {...salesImageProps(bonusModules, variant.media, "(min-width: 712px) 672px, calc(100vw - 40px)")}
            loading="lazy"
            className="mt-10 mx-auto rounded-2xl shadow-elegant w-full max-w-2xl"
          />

          <div className="mt-10 grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              "Molde base infalível para qualquer manequim",
              "Segredo do caimento sem ajustes na primeira prova",
              "Escolha de barbatanas, entretelas e tecidos nobres",
              "Acabamento interno digno de atelier de Alto Designer",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3 bg-primary-foreground/10 rounded-lg p-4">
                <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">{es ? "Conoce a la mentora" : "Conheça a mentora"}</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">{es ? "Quién es Mirian Serrano" : "Quem é Mirian Serrano"}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            {...salesImageProps(mirianPhoto, variant.media, "(min-width: 488px) 448px, calc(100vw - 40px)")}
            alt="Estilista Mirian Serrano em seu atelier"
            className="rounded-2xl shadow-elegant w-full max-w-md mx-auto"
            loading="lazy"
          />
          <div className="space-y-5 text-foreground">
            <p className="text-base md:text-lg leading-relaxed">
              Sou a <span className="font-semibold text-primary">Estilista internacional Mirian Serrano</span>, atuo nesta profissão desde <span className="font-semibold">2015</span>. Passei por muitas partes da costura, porém escolhi a área de <span className="italic text-gold">moda festa</span>.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Hoje atuo com destreza trazendo <span className="font-semibold">técnicas internacionais</span> para um acabamento de requinte. Uma peça bem feita agrega história e se torna <span className="italic">memória visual</span>.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Atendo <span className="font-semibold">dentro e fora do Brasil</span>, presencial e on-line, com técnicas assertivas de medidas. Já fiz coleção para marcas e já vesti <span className="font-semibold text-gold">celebridades</span>.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm"><Crown className="w-5 h-5 text-gold" /> Desde 2015</div>
              <div className="flex items-center gap-2 text-sm"><Award className="w-5 h-5 text-gold" /> Vestiu celebridades</div>
              <div className="flex items-center gap-2 text-sm"><Sparkles className="w-5 h-5 text-gold" /> Atendimento internacional</div>
            </div>
          </div>
        </div>

        {!es && (
          <div className="mt-14 max-w-4xl mx-auto px-0">
            <p className="text-center text-xs uppercase tracking-widest text-gold font-bold mb-4">Reportagem com Mirian</p>
            <div className="rounded-2xl overflow-hidden shadow-elegant border border-border w-full">
              <WistiaPlayer media-id="a5jnm5622k" aspect="1.7777777777777777" className="w-full" />
            </div>
          </div>
        )}
      </section>

      <section className="bg-secondary py-14 md:py-20 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, n: "+2.147", l: "Alunas ativas" },
              { icon: Star, n: "4,9/5", l: "Nota das alunas" },
              { icon: TrendingUp, n: "97%", l: "Concluem o curso" },
              { icon: Heart, n: "+15 anos", l: "De experiência" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col items-center">
                <s.icon className="w-7 h-7 text-gold mb-2" />
                <div className="font-display text-3xl md:text-4xl font-bold text-primary leading-none">{s.n}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wide">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">
        <div className="text-center mb-4">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">{es ? "Testimonios reales" : "Depoimentos reais"}</span>
        </div>
        <h2 className="text-center font-display text-3xl md:text-5xl font-bold text-primary mb-4">
          {es ? "Alumnas que ya transformaron su costura" : "Alunas que já transformaram sua costura"}
        </h2>
        <div className="mb-12"><StarRating size="md" /></div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: "Ana Beatriz", c: "São Paulo, SP", t: "Fiz meu primeiro corselet e vestiu perfeito na primeira prova. Chorei de emoção — nunca imaginei conseguir esse nível de acabamento." },
            { n: "Cláudia Menezes", c: "Belo Horizonte, MG", t: "As dicas de acabamento mudaram completamente o padrão do meu atelier. Já triplico o valor das minhas peças." },
            { n: "Renata Oliveira", c: "Curitiba, PR", t: "Método claro, direto e com um nível de detalhe que não encontrei em nenhum outro curso. Vale cada centavo." },
            { n: "Fernanda Lopes", c: "Rio de Janeiro, RJ", t: "Vendi 8 corselets no primeiro mês depois do curso. O método Mirian é um divisor de águas na minha carreira." },
            { n: "Juliana Ramos", c: "Porto Alegre, RS", t: "A aula de vestir sem ajustes é surreal. Minha cliente chorou quando provou. Recomendo de olhos fechados." },
            { n: "Patrícia Souza", c: "Salvador, BA", t: "Sou costureira há 20 anos e ainda aprendi segredos preciosos. A Mirian entrega ouro em cada aula." },
          ].map((r) => (
            <div key={r.n} className="bg-card rounded-xl p-6 border border-border shadow-soft">
              <div className="flex gap-1 text-gold mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm text-foreground italic">"{r.t}"</p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-primary">— {r.n}</p>
                <p className="text-xs text-muted-foreground">{r.c} · Compra verificada</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center max-w-2xl mx-auto">
          <CTAButton label={es ? "QUIERO CONVERTIRME EN UNA REFERENCIA EN CORSÉS" : "QUERO SER UMA CORSELETEIRA DE REFERÊNCIA"} />
          <p className="mt-3 text-sm text-muted-foreground">{es ? "+2.000 alumnas ya transformaron su costura" : "+2.000 alunas já transformaram suas costuras"}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 overflow-hidden bg-secondary/40 border-y border-border">
        <div className="text-center mb-8 px-5">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">{es ? "Mensajes de las alumnas" : "Mensagens das alunas"}</span>
          <h2 className="mt-2 font-display text-2xl md:text-4xl font-bold text-primary">
            {es ? "Lo que nos envían después de entrar" : "O que elas mandam depois de entrar"}
          </h2>
        </div>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track flex gap-6 w-max items-stretch">
            {[...Array(2)].flatMap((_, dup) =>
              (variant.testimonialImages ?? [depoimento1, depoimento2, depoimento3, depoimento4, depoimento5, depoimento6, depoimento7, depoimento8, depoimento9]).map((img, i) => (
                <div
                  key={`dep-${dup}-${i}`}
                  className="shrink-0 w-64 md:w-80 h-80 md:h-[26rem] rounded-2xl overflow-hidden shadow-soft border border-border/30 bg-transparent"
                >
                  <img
                    {...salesImageProps(img, variant.media)}
                    alt="Depoimento de aluna do Método Mirian Serrano"
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </section>





      <section className="px-5 py-16 md:py-24">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">
            {variant.singlePlan ? es ? "Oferta especial" : "Oferta especial" : es ? "Elige tu plan" : "Escolha seu plano"}
          </span>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold text-primary">
            {variant.planSupport ?? (es ? "¿Cuál es tu camino?" : "Qual jornada é a sua?")}
          </h2>
        </div>

        <div className={`mx-auto grid gap-6 md:gap-8 items-stretch ${variant.singlePlan ? "max-w-xl" : "max-w-5xl md:grid-cols-2"}`}>


          {/* PRODUTO 1 - Básico */}
          <div id="comprar" className="bg-card rounded-2xl border-2 border-border shadow-soft overflow-hidden flex flex-col">
            <div className="bg-secondary text-secondary-foreground text-center py-3 font-bold uppercase tracking-widest text-sm">
              {es ? "Curso Corsé Clásico" : "Curso Corselet Clássico"}
            </div>
            <div className="p-6 md:p-8 text-center flex flex-col flex-1">
              <h3 className="font-display text-lg md:text-xl font-bold text-primary">
                <span className="block">{es ? "Curso Corsé Clásico" : "Curso Corselet Clássico"}</span>
                <span className="text-gold block mt-1">Método Mirian Serrano</span>
              </h3>

              <div className="mt-6 space-y-2 text-left max-w-md mx-auto">
                {(es ? [
                  "Curso completo de Corsé Clásico",
                  "Molde del Corsé Clásico para descargar",
                  "PDF de apoyo paso a paso",
                  "Contenidos y materiales complementarios",
                  "Clases grabadas para estudiar a tu ritmo",
                  "Acceso inmediato después de la compra",
                  "Acceso vitalicio al curso",
                  "Garantía incondicional de 7 días",
                ] : [
                  "Módulo completo do Corselet Clássico",
                  "Molde do Corselet Clássico para download",
                  "PDF de apoio passo a passo",
                  "Conteúdos e materiais extras",
                ]).map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cta shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                {!es && <p className="text-sm text-muted-foreground line-through">De R$ 597,00</p>}
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{es ? "POR SOLO" : "POR APENAS"}&nbsp;</p>
                {es ? variant.internationalPrice : (
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary leading-none mt-1">
                    R$ 27<span className="text-xl md:text-2xl">,89</span>
                  </p>
                )}
              </div>

              <div className="mt-8 mt-auto pt-8">
                <CTAButton
                  label={es ? "QUIERO EL CURSO CLÁSICO" : "QUERO O CURSO CLÁSSICO"}
                  href={es ? "https://pay.hotmart.com/R107917706S?checkoutMode=10" : CHECKOUT_URL}
                  onClick={es ? undefined : () => window.setTimeout(() => setUpgradeOpen(true), 0)}
                />
              </div>


              <div className="mt-6 flex items-center justify-center gap-5 text-xs text-muted-foreground uppercase font-medium flex-wrap">
                <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-cta" /> {es ? "Compra segura" : "Compra segura"}</span>
                <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> SSL</span>
              </div>
            </div>
          </div>

          {/* PRODUTO 2 - Profissional / Recomendado */}
          {!variant.singlePlan && (
          <div id="comprar-2" className="relative bg-card rounded-2xl border-2 border-gold shadow-elegant overflow-hidden flex flex-col md:-translate-y-2">
            <div className="absolute top-3 right-3 bg-cta text-cta-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg z-10">
              ⭐ Recomendado
            </div>
            <div className="bg-gold text-gold-foreground text-center py-3 font-bold uppercase tracking-widest text-sm">
              🔥 {es ? "Curso Profesional Completo" : "Curso Profissional Completo"}
            </div>
            <div className="p-6 md:p-8 text-center flex flex-col flex-1">
              <h3 className="font-display text-lg md:text-xl font-bold text-primary">
                <span className="block">{es ? "Curso Profesional de Corsé" : "Curso Profissional Corselet"}</span>
                <span className="text-gold block mt-1">{es ? "Novia y Moda de Fiesta" : "Noiva e Moda Festa"}</span>
              </h3>

              <div className="mt-6 space-y-2 text-left max-w-md mx-auto">
                {(es ? [
                  "5 tipos de corsé",
                  "Técnica de moulage",
                  "Medidas precisas",
                  "Clase de interpretación de modelos",
                  "Corsé con técnica avanzada de construcción",
                  "Corsé en tul y tejido transparente",
                  "Cómo elegir el material adecuado para cada propuesta",
                  "Técnicas de acabado para corsé",
                  "6 patrones listos para confeccionar",
                  "Técnica de crepado",
                  "Construcción de la base a medida",
                  "Corsé estructurado — técnica avanzada",
                  "Corsé en tejido delicado",
                  "Cómo elegir el tul correcto para construir el corsé",
                  "Aplicación de encaje",
                  "Consejos de Oro — aprende detalles que marcan la diferencia",
                ] : [
                  "5 tipos de corset",
                  "Técnica de Moulage",
                  "Medidas assertivas",
                  "Aula de Interpretação de Modelo",
                  "Corset com técnica avançada de construção",
                  "Corset em tule e tecido transparente",
                  "Como escolher o material adequado para cada proposta",
                  "Técnicas de acabamento para corset",
                  "6 modelagens prontas para construção",
                  "Técnica de Crepagem",
                  "Construção da base sob medida",
                  "Corset estruturado — técnica avançada",
                  "Corset em tecido delicado",
                  "Qual tule é o certo para a construção do corset",
                  "Aplicação de renda",
                  "Dicas de Ouro — aprenda o segredo que ninguém te ensina",
                ]).map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cta shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-sm text-muted-foreground line-through">De R$ 897,00</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{es ? "POR SOLO" : "POR APENAS"}&nbsp;</p>
                <p className="font-display text-4xl md:text-5xl font-bold text-primary leading-none mt-1">
                  {variant.professionalPrice ?? "R$ 47,98"}
                </p>
              </div>

              <div className="mt-8 mt-auto pt-8">
                <CTAButton label={es ? "QUIERO EL PLAN PROFESIONAL" : "QUERO O PLANO PROFISSIONAL"} href={variant.professionalCheckoutUrl ?? CHECKOUT_URL_PRODUTO_2} />
              </div>

              <div className="mt-6 flex items-center justify-center gap-5 text-xs text-muted-foreground uppercase font-medium flex-wrap">
                <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-cta" /> {es ? "Compra segura" : "Compra segura"}</span>
                <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> SSL</span>
              </div>
            </div>
          </div>
          )}
        </div>

        <div className="max-w-2xl mx-auto mt-10 bg-secondary rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="w-24 h-24 rounded-full bg-cta text-cta-foreground flex flex-col items-center justify-center shrink-0 shadow-lg">
            <span className="font-display text-3xl font-bold leading-none">7</span>
            <span className="text-xs uppercase font-bold">dias</span>
          </div>
          <div>
            <h4 className="font-display text-xl font-bold text-primary">{es ? "Garantía incondicional de 7 días" : "Garantia incondicional de 7 dias"}</h4>
            <p className="text-sm text-muted-foreground mt-2">
              {es ? "Si en 7 días sientes que el método no es para ti, te devolvemos el 100% de tu inversión." : "Se em 7 dias você sentir que o método não é para você, devolvemos 100% do seu investimento. Sem perguntas."}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 pb-20">
        <h2 className="text-center font-display text-3xl md:text-4xl font-bold text-primary mb-10">{es ? "Preguntas frecuentes" : "Perguntas frequentes"}</h2>
        <div className="space-y-3">
          {[
            { q: "Preciso saber costurar para começar?", a: "O curso é progressivo. Se você tem noções básicas de costura, consegue acompanhar tranquilamente cada módulo." },
            { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento você recebe o acesso por e-mail." },
            { q: "Quais materiais vou precisar?", a: "Você aprenderá a escolher barbatanas, entretelas e tecidos nobres. Na primeira aula entregamos uma lista completa de fornecedores." },
            { q: "Terei suporte para tirar dúvidas?", a: "Sim. Além das aulas gravadas, você conta com acompanhamento em grupo exclusivo para alunas e suporte da equipe." },
          ].map((f) => (
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
              Gostou da estrutura deste lançamento?
            </p>
            <p className="leading-relaxed">
              Este curso foi lançado com estratégia de copy, página de vendas e tráfego feitos sob medida.
              Se você tem um produto ou conhecimento para transformar em curso, a gente cuida do lançamento
              do começo ao fim.
            </p>
            <a
              href="https://amaroads.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 underline underline-offset-4 text-primary-foreground font-medium hover:opacity-80 transition-opacity"
            >
              Fale com a gente em amaroads.com
            </a>
          </div>
          <p>© {new Date().getFullYear()} Método Mirian Serrano — {es ? "Todos los derechos reservados." : "Todos os direitos reservados."}</p>
        </div>
      </footer>

    </div>
  );
}
