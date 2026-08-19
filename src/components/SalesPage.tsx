import { useEffect, useState } from "react";
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
};


const CHECKOUT_URL = "https://pay.cakto.com.br/3bzxs3o_1010395";
const CHECKOUT_URL_PRODUTO_2 = "https://pay.cakto.com.br/4cgckir_988285";
const EXIT_CHECKOUT_URL = "https://pay.cakto.com.br/zm297ju";



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

function CTAButton({ label = "QUERO CRIAR MEUS CORSELETS", href = "#comprar" }: { label?: string; href?: string }) {
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


function ExitIntentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("exit_popup_shown") === "1") return;

    let armed = true;
    let suppressUntil = 0;
    const trigger = () => {
      if (!armed) return;
      armed = false;
      sessionStorage.setItem("exit_popup_shown", "1");
      setOpen(true);
    };

    const suppressDuringInteraction = () => {
      suppressUntil = Date.now() + 2000;
    };

    const suppressDuringScroll = () => {
      suppressUntil = Date.now() + 500;
    };

    const onMouseOut = (e: MouseEvent) => {
      if ((window as any).__ctaJustClicked) return;
      if (Date.now() < suppressUntil || !document.hasFocus()) return;
      if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
      const leftThroughBrowserTop = e.clientY <= 5 && e.clientX >= 0 && e.clientX <= window.innerWidth;
      if (leftThroughBrowserTop && !e.relatedTarget) trigger();
    };
    // mobile fallback: back-button
    const onPopState = () => {
      if ((window as any).__ctaJustClicked || Date.now() < suppressUntil) return;
      trigger();
    };
    history.pushState({ exitGuard: true }, "");

    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("pointerdown", suppressDuringInteraction, true);
    window.addEventListener("scroll", suppressDuringScroll, { passive: true });
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("pointerdown", suppressDuringInteraction, true);
      window.removeEventListener("scroll", suppressDuringScroll);
      window.removeEventListener("popstate", onPopState);
    };

  }, []);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 overflow-y-auto"
      onClick={() => setOpen(false)}
    >
      <div className="relative max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          aria-label="Fechar"
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center text-xl font-bold hover:bg-black"
        >
          ×
        </button>
        <a href={withTracking(EXIT_CHECKOUT_URL)} target="_blank" rel="noopener noreferrer" className="block">
          <img
            src="/nova-oferta.png"
            alt="Oferta especial - Método Miriam Serrano"
            className="w-full h-auto rounded-xl shadow-2xl"
          />
        </a>
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
  const modules = [
    { n: "01", title: "Corselet Clássico", desc: "A base do método. Modelagem tradicional com estrutura impecável." },
    { n: "02", title: "Corselet de Noiva", desc: "Delicadeza e luxo para peças únicas e inesquecíveis." },
    { n: "03", title: "Corselet Estilizado", desc: "Variações criativas para looks autorais e editoriais." },
    { n: "04", title: "Corselet Sob Medida", desc: "Aula de vestir a primeira peça — zero ajustes, encaixe perfeito." },
  ];

  const bullets = [
    "Método exclusivo Mirian Serrano",
    "Técnicas de precisão de costura",
    "Acabamento de luxo",
    "Modelagem profissional",
    "Peças com caimento impecável",
    "Aulas de vestir a peça sob medida",
  ];

  return (
    <div className="min-h-screen">
      <PurchaseNotification />
      <ExitIntentPopup />
      <div className="w-full bg-cta text-cta-foreground text-xs md:text-sm text-center py-2 font-semibold flex items-center justify-center gap-2">
        <Flame className="w-4 h-4" /> &nbsp;Oferta disponível somente hoje <TodayDate />
      </div>




      <section className="max-w-4xl mx-auto px-5 pt-12 md:pt-16 pb-8 text-center">
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

        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-cta/10 px-3 py-1.5 text-xs font-medium text-cta">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cta" />
          </span>
          236 pessoas online agora
        </div>

        <div className="mt-4 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <div className="flex -space-x-2">
            <img
              src={avatar1.url}
              alt="Aluna do curso"
              width={32}
              height={32}
              loading="lazy"
              className="w-8 h-8 rounded-full object-cover border-2 border-background"
            />
            <img
              src={avatar2.url}
              alt="Aluna do curso"
              width={32}
              height={32}
              loading="lazy"
              className="w-8 h-8 rounded-full object-cover border-2 border-background"
            />
            <img
              src={avatar3.url}
              alt="Aluna do curso"
              width={32}
              height={32}
              loading="lazy"
              className="w-8 h-8 rounded-full object-cover border-2 border-background"
            />
            <img
              src={avatar4.url}
              alt="Aluna do curso"
              width={32}
              height={32}
              loading="lazy"
              className="w-8 h-8 rounded-full object-cover border-2 border-background"
            />
          </div>
          <span>+2.000 costureiras já dominam o método</span>
        </div>

        <img
          src={heroMockup.url}
          alt="Mirian Serrano em seu ateliê com corselet e laptop do curso"
          width={1354}
          height={1161}
          className="mt-10 mx-auto rounded-2xl shadow-elegant w-full max-w-3xl"
        />

        <div className="mt-10 max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-3 text-left mb-8">
            {bullets.map((b) => (
              <div key={b} className="flex items-start gap-2">
                <span className="text-gold mt-0.5"><Sparkles className="w-5 h-5" /></span>
                <span className="text-sm md:text-base font-medium text-foreground">{b}</span>
              </div>
            ))}
          </div>
          <CTAButton label={variant.ctaLabel} />
          <p className="mt-4 text-sm text-muted-foreground">Acesso imediato • 7 dias de garantia</p>
          <div className="mt-4 flex items-center justify-center gap-5 text-xs text-muted-foreground uppercase font-medium flex-wrap">
            <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-cta" /> Compra segura</span>
            <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> SSL criptografado</span>
            <span className="flex items-center gap-1"><Award className="w-4 h-4" /> Certificado</span>
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
          <span className="text-xs uppercase tracking-widest text-gold font-bold">Inspiração para costureiras</span>
          <h2 className="mt-2 font-display text-2xl md:text-4xl font-bold text-primary">
            Moldes, técnicas e peças que apaixonam
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
            Transforme sua técnica e crie corselets que transcendem
          </h2>
          <p className="mt-6 text-lg text-muted-foreground italic font-display">
            "Cada corselet é uma escultura vestível. Você aprende a construir peças que valorizam cada silhueta com precisão de Alto Designer."
          </p>
          <p className="mt-4 text-sm uppercase tracking-widest text-gold font-semibold">— Mirian Serrano</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">O que você vai aprender</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">Módulos do Curso</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Cada módulo é uma variação de corselet — do clássico ao autoral — com aulas passo a passo de modelagem, costura e prova.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {modules.map((m) => (
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
          <CTAButton label="QUERO APRENDER TODAS AS VARIAÇÕES" />
          <p className="mt-3 text-sm text-muted-foreground">Garantia de 7 dias • Acesso imediato</p>
        </div>
      </section>


      <section className="bg-primary text-primary-foreground py-16 md:py-24 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <Scissors className="w-10 h-10 mx-auto text-gold mb-4" />
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Aulas com <span className="text-gold italic">dicas de ouro</span>
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            O diferencial deste curso: segredos que só quem faz há décadas conhece.
          </p>

          <img
            src={bonusModules.url}
            alt="Método Miriam Serrano - Livros de corsets"
            width={1200}
            height={912}
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
          <span className="text-xs uppercase tracking-widest text-gold font-bold">Conheça a mentora</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary">Quem é Mirian Serrano</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={mirianPhoto.url}
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

        <div className="mt-14 max-w-4xl mx-auto px-0">
          <p className="text-center text-xs uppercase tracking-widest text-gold font-bold mb-4">Reportagem com Mirian</p>
          <div className="rounded-2xl overflow-hidden shadow-elegant border border-border w-full">
            <WistiaPlayer media-id="a5jnm5622k" aspect="1.7777777777777777" className="w-full" />
          </div>
        </div>
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
          <span className="text-xs uppercase tracking-widest text-gold font-bold">Depoimentos reais</span>
        </div>
        <h2 className="text-center font-display text-3xl md:text-5xl font-bold text-primary mb-4">
          Alunas que já transformaram sua costura
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
          <CTAButton label="QUERO SER UMA CORSELETEIRA DE REFERÊNCIA" />
          <p className="mt-3 text-sm text-muted-foreground">+2.000 alunas já transformaram suas costuras</p>
        </div>
      </section>

      <section className="py-12 md:py-16 overflow-hidden bg-secondary/40 border-y border-border">
        <div className="text-center mb-8 px-5">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">Mensagens das alunas</span>
          <h2 className="mt-2 font-display text-2xl md:text-4xl font-bold text-primary">
            O que elas mandam depois de entrar
          </h2>
        </div>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track flex gap-6 w-max items-stretch">
            {[...Array(2)].flatMap((_, dup) =>
              [depoimento1, depoimento2, depoimento3].map((img, i) => (
                <div
                  key={`dep-${dup}-${i}`}
                  className="shrink-0 w-64 md:w-80 rounded-2xl overflow-hidden shadow-elegant border border-border bg-card"
                >
                  <img
                    src={img.url}
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
            {variant.singlePlan ? "Oferta especial" : "Escolha seu plano"}
          </span>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold text-primary">
            {variant.planSupport ?? "Qual jornada é a sua?"}
          </h2>
        </div>

        <div className={`mx-auto grid gap-6 md:gap-8 items-stretch ${variant.singlePlan ? "max-w-xl" : "max-w-5xl md:grid-cols-2"}`}>


          {/* PRODUTO 1 - Básico */}
          <div id="comprar" className="bg-card rounded-2xl border-2 border-border shadow-soft overflow-hidden flex flex-col">
            <div className="bg-secondary text-secondary-foreground text-center py-3 font-bold uppercase tracking-widest text-sm">
              {variant.singlePlan ? "Acesso completo ao método" : "Curso Corselet Clássico"}
            </div>
            <div className="p-6 md:p-8 text-center flex flex-col flex-1">
              <h3 className="font-display text-lg md:text-xl font-bold text-primary">
                <span className="block">Curso Completo de Corselets</span>
                <span className="text-gold block mt-1">Método Mirian Serrano</span>
              </h3>

              <div className="mt-6 space-y-2 text-left max-w-md mx-auto">
                {(variant.singlePlan
                  ? [
                      { t: "Aulas com variações de corselet", ok: true },
                      { t: "Aulas de vestir peça sob medida (zero ajustes)", ok: true },
                      { t: "Aulas com dicas de ouro exclusivas", ok: true },
                      { t: "Moldes prontos para download", ok: true },
                      { t: "Técnicas de precisão de costura e acabamento de luxo", ok: true },
                      { t: "Suporte no grupo exclusivo de alunas", ok: true },
                      { t: "Certificado de conclusão", ok: true },
                      { t: "Acesso vitalício + atualizações", ok: true },
                    ]
                  : [
                      { t: "Aulas com variações de corselet", ok: true },
                      { t: "Aulas de vestir peça sob medida (zero ajustes)", ok: true },
                      { t: "Moldes prontos para download", ok: true },
                      { t: "Certificado de conclusão", ok: true },
                      { t: "Acesso vitalício + atualizações", ok: true },
                      { t: "Aulas de Crepagem", ok: false },
                      { t: "Interpretação de modelo - Penélope", ok: false },
                      { t: "Aulas de medidas assertivas para peças sob medida", ok: false },
                      { t: "Corselet estruturado em tecidos delicados", ok: false },
                      { t: "Técnicas internacionais avançadas", ok: false },
                      { t: "Corselet para Noiva e Moda Festa completo", ok: false },
                    ]
                ).map((b) => (
                  <div key={b.t} className="flex items-start gap-2">
                    {b.ok ? (
                      <Check className="w-5 h-5 text-cta shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground/50 shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${b.ok ? "" : "text-muted-foreground/60"}`}>{b.t}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-sm text-muted-foreground line-through">De R$ 597,00</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">POR APENAS&nbsp;</p>
                <p className="font-display text-4xl md:text-5xl font-bold text-primary leading-none mt-1">
                  R$ 27<span className="text-xl md:text-2xl">,70</span>
                </p>
              </div>

              <div className="mt-8 mt-auto pt-8">
                <CTAButton label={variant.singlePlan ? "QUERO GARANTIR MINHA VAGA" : "QUERO O PLANO CLÁSSICO"} href={CHECKOUT_URL} />
              </div>


              <div className="mt-6 flex items-center justify-center gap-5 text-xs text-muted-foreground uppercase font-medium flex-wrap">
                <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-cta" /> Compra segura</span>
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
              🔥 Curso Profissional Completo
            </div>
            <div className="p-6 md:p-8 text-center flex flex-col flex-1">
              <h3 className="font-display text-lg md:text-xl font-bold text-primary">
                <span className="block">Curso Profissional Corselet</span>
                <span className="text-gold block mt-1">Noiva e Moda Festa</span>
              </h3>

              <div className="mt-6 space-y-2 text-left max-w-md mx-auto">
                {[
                  "Como montar um molde / molde",
                  "Aulas de Crepagem",
                  "Interpretação de modelo - Penélope",
                  "Dica de Ouro",
                  "Aulas de medidas assertivas",
                  "Aulas de medida para peças sob medida",
                  "Variação de modelos através de um único molde",
                  "Corselet estruturado em tecido plano",
                  "Corselet estruturado em tecidos delicados",
                  "Corselet avançado - técnicas de método internacional",
                  "Técnicas profissionais de estrutura, montagem e acabamento de alto padrão",
                  "Certificado de conclusão",
                  "Acesso vitalício + atualizações",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cta shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-sm text-muted-foreground line-through">De R$ 897,00</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">POR APENAS&nbsp;</p>
                <p className="font-display text-4xl md:text-5xl font-bold text-primary leading-none mt-1">
                  R$ 47<span className="text-xl md:text-2xl">,98</span>
                </p>
              </div>

              <div className="mt-8 mt-auto pt-8">
                <CTAButton label="QUERO O PLANO PROFISSIONAL" href={CHECKOUT_URL_PRODUTO_2} />
              </div>

              <div className="mt-6 flex items-center justify-center gap-5 text-xs text-muted-foreground uppercase font-medium flex-wrap">
                <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-cta" /> Compra segura</span>
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
            <h4 className="font-display text-xl font-bold text-primary">Garantia incondicional de 7 dias</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Se em 7 dias você sentir que o método não é para você, devolvemos 100% do seu investimento. Sem perguntas.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 pb-20">
        <h2 className="text-center font-display text-3xl md:text-4xl font-bold text-primary mb-10">Perguntas frequentes</h2>
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
          <p>© {new Date().getFullYear()} Método Mirian Serrano — Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  );
}
