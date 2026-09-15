import { useEffect, useState } from "react";
import { Check, Flame, Lock, Shield, ShoppingBag, Star } from "lucide-react";
import banner from "@/assets/banner-inicial-corsets.png.asset.json";
import depoimento1 from "@/assets/depoimento-1.jpeg.asset.json";
import depoimento2 from "@/assets/depoimento-2.jpeg.asset.json";
import depoimento3 from "@/assets/depoimento-3.jpeg.asset.json";
import depoimento4 from "@/assets/depoimento-4.png.asset.json";
import depoimento5 from "@/assets/depoimento-5.jpeg.asset.json";
import depoimento6 from "@/assets/depoimento-6.png.asset.json";
import depoimento7 from "@/assets/depoimento-7.png.asset.json";
import depoimento8 from "@/assets/depoimento-8.png.asset.json";
import depoimento9 from "@/assets/depoimento-9.png.asset.json";

const BENEFITS = [
  "Aula passo a passo",
  "Molde exclusivo em PDF",
  "Construção do início ao fim",
  "Orientação sobre materiais",
  "Suporte para dúvidas",
  "Acesso imediato",
];

const LESSONS = [
  { number: "01", title: "O molde", text: "Tenha acesso ao molde em PDF para acompanhar a construção da peça." },
  { number: "02", title: "Corte e preparação", text: "Entenda como preparar os materiais e começar a construção." },
  { number: "03", title: "Montagem", text: "Acompanhe o passo a passo da montagem da peça." },
  { number: "04", title: "Estrutura", text: "Aprenda os detalhes necessários para dar estrutura ao corselet." },
  { number: "05", title: "Acabamento", text: "Veja como finalizar a peça e cuidar dos detalhes que fazem diferença no resultado." },
];

const PURCHASES = ["Elaine", "Juliana", "Patrícia", "Fernanda", "Mariana"];

function trackedUrl(url: string) {
  if (typeof window === "undefined") return url;
  try {
    const checkout = new URL(url);
    const live = new URLSearchParams(window.location.search);
    let stored: Record<string, string> = {};
    try {
      stored = JSON.parse(localStorage.getItem("_utms") || "{}");
    } catch {
      stored = {};
    }
    live.forEach((value, key) => {
      if (value) stored[key] = value;
    });
    Object.entries(stored).forEach(([key, value]) => {
      if (value && !checkout.searchParams.has(key)) checkout.searchParams.set(key, value);
    });
    return checkout.toString();
  } catch {
    return url;
  }
}

function CheckoutButton({ checkoutUrl, label = "Quero aprender o Corselet Clássico" }: { checkoutUrl: string; label?: string }) {
  return (
    <a
      href={checkoutUrl}
      onClick={(event) => {
        event.preventDefault();
        window.location.href = trackedUrl(checkoutUrl);
      }}
      className="btn-cta pulse-cta inline-flex min-h-16 w-full max-w-2xl items-center justify-center rounded-lg px-5 py-4 text-center text-sm font-bold uppercase md:text-lg"
    >
      {label} →
    </a>
  );
}

function PurchaseNotification() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const initial = window.setTimeout(() => setVisible(true), 3500);
    const rotation = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((current) => (current + 1) % PURCHASES.length);
        setVisible(true);
      }, 500);
    }, 7000);
    return () => {
      window.clearTimeout(initial);
      window.clearInterval(rotation);
    };
  }, []);

  return (
    <div className={`fixed bottom-3 left-3 right-3 z-50 flex items-center gap-3 rounded-lg border border-gold/40 bg-card p-3 shadow-elegant transition-all duration-300 md:right-auto md:w-72 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cta/15 text-cta"><ShoppingBag className="h-5 w-5" /></span>
      <div className="min-w-0 text-left">
        <p className="text-xs font-semibold text-foreground"><span className="text-primary">{PURCHASES[index]}</span> acabou de comprar</p>
        <p className="mt-0.5 text-[11px] text-muted-foreground">Corselet Clássico · acesso liberado</p>
      </div>
      <Check className="ml-auto h-4 w-4 shrink-0 text-cta" />
    </div>
  );
}

function Rating() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
      <span className="flex gap-0.5 text-gold" aria-label="5 estrelas">
        {[0, 1, 2, 3, 4].map((star) => <Star key={star} className="h-5 w-5 fill-current" />)}
      </span>
      <strong>4,9</strong>
      <span className="text-muted-foreground">avaliação das alunas</span>
    </div>
  );
}

export default function LowTicketSalesPage({ checkoutUrl }: { checkoutUrl: string }) {
  return (
    <main className="min-h-screen overflow-hidden">
      <PurchaseNotification />
      <div className="flex items-center justify-center gap-2 bg-cta px-4 py-2.5 text-center text-xs font-semibold text-cta-foreground md:text-sm">
        <Flame className="h-4 w-4 shrink-0" /> Oferta disponível somente hoje
      </div>

      <section className="px-5 pb-14 pt-10 text-center md:pb-20 md:pt-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase text-gold md:text-sm">Método Mirian Serrano</p>
          <h1 className="mt-5 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-6xl">
            Você não precisa aprender 10 modelos de uma vez.
            <span className="mt-2 block text-foreground">Comece pelo Corselet Clássico.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl">
            Aprenda a construir um corselet clássico em tule transparente, do molde ao acabamento final.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Uma aula prática, direta e completa para você entender como essa peça é construída e começar a colocar a técnica em prática.
          </p>

          <img src={banner.url} alt="Curso Corselet Clássico em tule transparente" width={1365} height={768} className="mx-auto mt-8 w-full max-w-3xl rounded-lg shadow-elegant" />

          <div className="mx-auto mt-8 max-w-2xl"><CheckoutButton checkoutUrl={checkoutUrl} /></div>
          <div className="mt-5"><Rating /></div>
          <ul className="mx-auto mt-7 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-sm font-medium md:text-base">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-cta" /> {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-primary px-5 py-14 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-gold md:text-5xl">Por que começar por esse modelo?</h2>
          <p className="mt-6 text-base leading-relaxed text-primary-foreground/90 md:text-lg">
            Porque antes de querer fazer vários tipos de corselet, você precisa entender a base da construção.
          </p>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/90 md:text-lg">Neste treinamento, você acompanha o processo completo de uma peça:</p>
          <p className="mt-7 font-display text-xl font-bold uppercase text-gold md:text-3xl">Molde → Corte → Montagem → Estrutura → Acabamento</p>
          <p className="mt-6 font-semibold">Sem pular as etapas importantes.</p>
        </div>
      </section>

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl font-bold text-primary md:text-5xl">Veja o que você vai aprender</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {LESSONS.map((lesson) => (
              <article key={lesson.number} className="border-t-2 border-gold bg-card p-5 shadow-soft">
                <span className="font-display text-3xl font-bold text-gold">{lesson.number}.</span>
                <h3 className="mt-3 text-lg font-bold uppercase text-primary">{lesson.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{lesson.text}</p>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-2xl text-center"><CheckoutButton checkoutUrl={checkoutUrl} /></div>
        </div>
      </section>

      <section className="bg-secondary px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase text-gold">E tem uma coisa que não está no molde...</p>
          <h2 className="mt-3 font-display text-5xl font-bold text-primary md:text-7xl">O caimento.</h2>
          <p className="mt-6 text-lg font-semibold">Não basta cortar as partes e juntar tudo.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">Você precisa entender como a peça deve se comportar no corpo.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">Por isso, durante o treinamento, você também aprende detalhes que ajudam a buscar um resultado mais preciso na primeira prova.</p>
        </div>
      </section>

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary md:text-5xl">“Mas eu não tenho muita experiência.”</h2>
            <p className="mt-5 text-lg font-semibold">Tudo bem.</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">Você não precisa dominar todos os tipos de corselet para começar.</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">A proposta aqui é justamente começar por uma construção específica, acompanhar o processo e entender cada etapa.</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">Depois, se quiser avançar, você poderá conhecer as outras formações do Método Mirian Serrano.</p>
          </div>
          <div className="border-l-2 border-gold bg-card p-7 shadow-soft md:p-9">
            <p className="text-xs font-bold uppercase text-gold">Uma única aula. Uma peça.</p>
            <p className="mt-4 font-display text-3xl font-bold leading-tight text-primary">Uma nova técnica para colocar no seu portfólio.</p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Se você já costura e quer começar a trabalhar com corseletes, esse pode ser o seu primeiro passo.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50 px-5 py-14 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase text-gold">Resultados de quem já aprendeu com Mirian</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">Veja o que as alunas dizem</h2>
          <div className="mt-4"><Rating /></div>
        </div>
        <div className="relative mt-8 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track flex w-max items-stretch gap-5">
            {[...Array(2)].flatMap((_, duplicate) => [depoimento1, depoimento2, depoimento3, depoimento4, depoimento5, depoimento6, depoimento7, depoimento8, depoimento9].map((image, index) => (
              <div key={`${duplicate}-${index}`} className="h-72 w-56 shrink-0 overflow-hidden rounded-lg border border-border/50 md:h-96 md:w-72">
                <img src={image.url} alt="Depoimento de aluna do Método Mirian Serrano" loading="lazy" className="h-full w-full object-contain" />
              </div>
            )))}
          </div>
        </div>
      </section>

      <section id="oferta" className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-bold uppercase text-gold">O que você recebe hoje</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">Corselet Clássico em Tule Transparente</h2>
          <div className="mt-8 border-2 border-gold bg-card p-6 shadow-elegant md:p-9">
            <ul className="space-y-3 text-left">
              {[...BENEFITS.slice(0, 2), "Passo a passo do corte ao acabamento", ...BENEFITS.slice(3)].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm font-medium md:text-base"><Check className="mt-0.5 h-5 w-5 shrink-0 text-cta" /> {item}</li>
              ))}
            </ul>
            <div className="mt-9 border-t border-border pt-8">
              <p className="text-base text-muted-foreground line-through">De R$ 97</p>
              <p className="mt-2 text-xs font-bold uppercase text-muted-foreground">Hoje por apenas</p>
              <p className="mt-1 font-display text-6xl font-bold leading-none text-primary md:text-7xl">R$ 27<span className="text-3xl">,98</span></p>
              <p className="mt-3 text-sm font-bold uppercase text-cta">Acesso imediato</p>
            </div>
            <div className="mt-8"><CheckoutButton checkoutUrl={checkoutUrl} /></div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Lock className="h-4 w-4" /> Pagamento seguro</span>
              <span className="flex items-center gap-1"><Shield className="h-4 w-4 text-cta" /> Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Shield className="mx-auto h-10 w-10 text-gold" />
          <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">Você tem 7 dias para conhecer.</h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-primary-foreground/80 md:text-lg">Comece as aulas, veja o conteúdo e decida se faz sentido para você.</p>
          <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-primary-foreground/80 md:text-lg">Se dentro do prazo da garantia perceber que não é o que esperava, você pode solicitar o reembolso conforme as condições da garantia.</p>
          <p className="mt-9 font-display text-2xl font-bold uppercase text-gold md:text-4xl">Comece pelo clássico.<br />Domine uma construção antes de partir para as próximas.</p>
          <div className="mx-auto mt-9 max-w-2xl"><CheckoutButton checkoutUrl={checkoutUrl} /></div>
        </div>
      </section>

      <footer className="px-5 py-8 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Método Mirian Serrano. Todos os direitos reservados.</p>
        <a href="https://amaroads.com" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block underline underline-offset-4">Contato via amaroads.com</a>
      </footer>
    </main>
  );
}