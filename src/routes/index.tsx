import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, Shield, Lock, Clock, Award, Sparkles, Scissors, Crown, Star, ShoppingBag, Flame, Users, TrendingUp, Heart } from "lucide-react";
import heroMockup from "@/assets/course-mockup.jpg";
import bonusModules from "@/assets/bonus-modules.jpg";

export const Route = createFileRoute("/")({
  component: SalesPage,
});

const CHECKOUT_URL = "#comprar";

function Countdown() {
  const [seconds, setSeconds] = useState(15 * 60);
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return (
    <div className="flex items-center justify-center gap-3 font-display text-3xl md:text-4xl font-bold tabular-nums">
      <span className="bg-primary text-primary-foreground rounded-md px-4 py-2 shadow-lg">{m}</span>
      <span className="text-primary-foreground/90">:</span>
      <span className="bg-primary text-primary-foreground rounded-md px-4 py-2 shadow-lg">{s}</span>
    </div>
  );
}


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
      className={`fixed bottom-4 left-4 z-50 max-w-xs bg-card border border-gold/40 rounded-xl shadow-elegant p-3 flex items-center gap-3 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="w-10 h-10 rounded-full bg-cta/15 text-cta flex items-center justify-center shrink-0">
        <ShoppingBag className="w-5 h-5" />
      </div>
      <div className="text-left">
        <p className="text-xs font-semibold text-foreground leading-tight">
          <span className="text-primary">{alert.name}</span> acabou de comprar
        </p>
        <p className="text-[11px] text-muted-foreground mt-0.5">{alert.city} · {alert.time}</p>
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

function CTAButton({ label = "QUERO CRIAR MEUS CORSELETS" }: { label?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      className="btn-cta pulse-cta inline-flex items-center justify-center rounded-xl px-8 py-5 text-base md:text-lg font-bold uppercase tracking-wide w-full max-w-2xl"
    >
      {label} →
    </a>
  );
}

function SalesPage() {
  const modules = [
    { n: "01", title: "Corselet Clássico", desc: "A base do método. Modelagem tradicional com estrutura impecável." },
    { n: "02", title: "Corselet Underbust", desc: "Peça marcante para valorizar a silhueta com precisão." },
    { n: "03", title: "Corselet Overbust", desc: "Sofisticação e sustentação com caimento de alta costura." },
    { n: "04", title: "Corselet de Noiva", desc: "Delicadeza e luxo para peças únicas e inesquecíveis." },
    { n: "05", title: "Corselet Estilizado", desc: "Variações criativas para looks autorais e editoriais." },
    { n: "06", title: "Corselet Sob Medida", desc: "Aula de vestir a primeira peça — zero ajustes, encaixe perfeito." },
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
      <div className="w-full bg-secondary text-secondary-foreground text-xs md:text-sm text-center py-2 font-medium">
        <Shield className="inline w-4 h-4 mr-1.5 -mt-0.5" />
        SITE OFICIAL E SEGURO — COMPRE COM TOTAL SEGURANÇA
      </div>

      <div className="w-full bg-primary text-primary-foreground py-4 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase text-xs md:text-sm font-semibold tracking-wider mb-2 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" /> OFERTA ESPECIAL DE LANÇAMENTO ENCERRA EM:
          </p>
          <Countdown />
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-5 pt-12 md:pt-16 pb-8 text-center">
        <div className="inline-flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-widest mb-6">
          <Crown className="w-4 h-4" /> Método Mirian Serrano <Crown className="w-4 h-4" />
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight text-foreground">
          Crie <span className="text-primary italic">corselets de alta costura</span> com caimento impecável
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Do molde à peça vestida sem ajustes — domine a arte que transforma cada silhueta.
        </p>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-accent border-2 border-background" />
            ))}
          </div>
          <span>+2.000 costureiras já dominam o método</span>
        </div>

        <img
          src={heroMockup}
          alt="Curso de Corselets Método Mirian Serrano em laptop e celular"
          width={1408}
          height={1200}
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
          <CTAButton />
          <p className="mt-4 text-sm text-muted-foreground">Acesso imediato • 7 dias de garantia</p>
          <div className="mt-4 flex items-center justify-center gap-5 text-xs text-muted-foreground uppercase font-medium flex-wrap">
            <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-cta" /> Compra segura</span>
            <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> SSL criptografado</span>
            <span className="flex items-center gap-1"><Award className="w-4 h-4" /> Certificado</span>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24 px-5 border-y border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary leading-tight">
            Transforme sua técnica e crie corselets que transcendem
          </h2>
          <p className="mt-6 text-lg text-muted-foreground italic font-display">
            "Cada corselet é uma escultura vestível. Você aprende a construir peças que valorizam cada silhueta com precisão de alta costura."
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
            src={bonusModules}
            alt="Módulos bônus do curso de corselets"
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
              "Acabamento interno digno de atelier de alta costura",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3 bg-primary-foreground/10 rounded-lg p-4">
                <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">
        <h2 className="text-center font-display text-3xl md:text-4xl font-bold text-primary mb-12">
          Alunas que já transformaram sua costura
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: "Ana Beatriz", t: "Fiz meu primeiro corselet e vestiu perfeito na primeira prova. Chorei." },
            { n: "Cláudia Menezes", t: "As dicas de acabamento mudaram completamente o padrão do meu atelier." },
            { n: "Renata Oliveira", t: "Método claro, direto e com um nível de detalhe que não encontrei em nenhum outro curso." },
          ].map((r) => (
            <div key={r.n} className="bg-card rounded-xl p-6 border border-border shadow-soft">
              <div className="flex gap-1 text-gold mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm text-foreground italic">"{r.t}"</p>
              <p className="mt-4 text-sm font-semibold text-primary">— {r.n}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="comprar" className="px-5 py-16 md:py-24">
        <div className="max-w-2xl mx-auto bg-card rounded-2xl border-2 border-gold shadow-elegant overflow-hidden">
          <div className="bg-gold text-gold-foreground text-center py-3 font-bold uppercase tracking-widest text-sm">
            🔥 Oferta especial de lançamento
          </div>
          <div className="p-8 md:p-10 text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary">
              Curso Completo de Corselets<br />
              <span className="text-gold">Método Mirian Serrano</span>
            </h3>

            <div className="mt-6 space-y-2 text-left max-w-md mx-auto">
              {[
                "6 módulos com variações de corselet",
                "Aulas de vestir peça sob medida (zero ajustes)",
                "Aulas com dicas de ouro exclusivas",
                "Moldes prontos para download",
                "Certificado de conclusão",
                "Acesso vitalício + atualizações",
              ].map((b) => (
                <div key={b} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-cta shrink-0 mt-0.5" />
                  <span className="text-sm">{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm text-muted-foreground line-through">De R$ 997,00</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">Por apenas 12x de</p>
              <p className="font-display text-6xl md:text-7xl font-bold text-primary leading-none mt-1">
                R$ 29<span className="text-3xl">,70</span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">ou R$ 297 à vista</p>
            </div>

            <div className="mt-8">
              <CTAButton label="GARANTIR MINHA VAGA AGORA" />
            </div>

            <div className="mt-6 flex items-center justify-center gap-5 text-xs text-muted-foreground uppercase font-medium flex-wrap">
              <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-cta" /> Compra segura</span>
              <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> SSL</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Acesso imediato</span>
            </div>
          </div>
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
            { q: "Por quanto tempo tenho acesso?", a: "Acesso vitalício ao curso e a todas as atualizações futuras." },
            { q: "Recebo certificado?", a: "Sim, ao concluir todos os módulos você recebe o certificado do Método Mirian Serrano." },
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
          <CTAButton />
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground/70 text-center py-8 text-xs px-5">
        <p>© {new Date().getFullYear()} Método Mirian Serrano — Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
