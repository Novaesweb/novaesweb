import { Link } from "@tanstack/react-router";
import {
  ArrowRight, Calculator, CheckCircle2, Code2, Globe, Handshake,
  Scale, ShoppingBag, Sparkles,
} from "lucide-react";
import { commercialPlans } from "@/data/commercial-plans";
import { brl } from "@/data/plans";

const section = "mx-auto max-w-[1800px] px-4 py-8 sm:px-8 xl:px-14";
const primaryLink = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-neon px-6 py-3 text-center text-sm font-semibold shadow-neon focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-pink";
const secondaryLink = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-neon-pink px-6 py-3 text-center text-sm font-semibold transition hover:bg-neon-pink/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-pink";

const services = [
  { Icon: Globe, title: "Sites profissionais", text: "Apresente sua empresa, valorize sua marca e facilite o contato dos clientes." },
  { Icon: ShoppingBag, title: "Delivery e cardápio", text: "Uma vitrine própria para seus produtos, com recursos de pedidos conforme o plano." },
  { Icon: Code2, title: "Sistemas sob medida", text: "Ferramentas pensadas para as necessidades e os processos do seu negócio." },
];

export function ServiceHighlights() {
  return (
    <section id="servicos" aria-labelledby="servicos-resumo-titulo" className={section}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-neon-pink">O QUE PODEMOS CRIAR</p>
          <h2 id="servicos-resumo-titulo" className="mt-2 text-2xl font-bold sm:text-3xl">Tecnologia para o seu próximo passo</h2>
        </div>
        <Link to="/servicos" className={secondaryLink}>Conhecer todos os serviços <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></Link>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {services.map(({ Icon, title, text }) => (
          <article key={title} className="flex items-start gap-4 rounded-2xl border border-border bg-card/80 p-5">
            <Icon className="h-7 w-7 shrink-0 text-neon-pink" aria-hidden="true" />
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function BusinessHighlight() {
  const plan = commercialPlans.find((item) => item.id === "business");
  if (!plan) return null;
  const quota = plan.orderQuota;
  const benefits = [
    `${quota.includedAcceptedOrders} pedidos aceitos por mês incluídos`,
    `Até ${quota.maxProducts} produtos e ${quota.maxAdmins} administradores no painel`,
    "Hospedagem, suporte e manutenção técnica incluídos",
  ];

  return (
    <section aria-labelledby="plano-destaque-titulo" className={section}>
      <div className="grid overflow-hidden rounded-3xl border border-neon-pink/60 bg-card/90 shadow-neon lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-neon-pink/50 px-3 py-1 text-xs font-semibold text-neon-pink"><Sparkles className="h-4 w-4" aria-hidden="true" /> DESTAQUE PARA DELIVERY</span>
          <h2 id="plano-destaque-titulo" className="mt-4 text-2xl font-bold sm:text-3xl">Uma estrutura para o seu delivery evoluir</h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">Conheça uma das opções da NovaesWeb para apresentar seus produtos, receber pedidos e gerenciar as informações da sua loja.</p>
          <p className="mt-3 text-sm text-muted-foreground">Quer começar com outra estrutura? Compare os planos e escolha o que faz sentido para o seu momento.</p>
        </div>
        <article aria-labelledby="business-resumo-titulo" className="border-t border-neon-violet/30 bg-background/50 p-6 sm:p-8 lg:border-l lg:border-t-0">
          <h3 id="business-resumo-titulo" className="text-xl font-bold">{plan.label}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs text-muted-foreground">Mensalidade</p>
              <p className="mt-1 text-3xl font-extrabold text-neon">R$ {brl(plan.monthly)}<span className="text-sm font-medium text-foreground">/mês</span></p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Criação, cobrada à parte</p>
              <p className="mt-1 text-2xl font-bold">R$ {brl(plan.setup)}</p>
              <p className="text-xs text-muted-foreground">Pagamento único na implantação</p>
            </div>
          </div>
          <ul className="mt-5 space-y-2.5 text-sm">
            {benefits.map((benefit) => <li key={benefit} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-neon-pink" aria-hidden="true" /><span>{benefit}</span></li>)}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">Pedidos aceitos excedentes: R$ {brl(quota.overageOrderPrice ?? 0)} cada. Mensalidade a partir da ativação. Consulte as condições completas.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/planos" hash="plano-business" className={primaryLink}>Conhecer este plano <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></Link>
            <Link to="/planos" hash="comparativo-planos" className={secondaryLink}>Comparar todos os planos <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export function AboutHighlight() {
  return (
    <section aria-labelledby="sobre-resumo-titulo" className={section}>
      <div className="grid gap-6 rounded-2xl border border-border bg-card/70 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-neon-pink"><Handshake className="h-5 w-5" aria-hidden="true" /> SOBRE A NOVAESWEB</p>
          <h2 id="sobre-resumo-titulo" className="mt-3 text-2xl font-bold sm:text-3xl">Tecnologia com parceria de verdade</h2>
        </div>
        <div>
          <p className="text-sm leading-relaxed text-muted-foreground">Criamos soluções que respeitam a identidade do seu negócio e podem evoluir conforme suas necessidades. Cada etapa começa com uma conversa clara sobre o que você precisa.</p>
          <Link to="/quem-somos" className={`${secondaryLink} mt-5`}>Conhecer a NovaesWeb <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}

export function DecisionHighlights() {
  return (
    <section aria-labelledby="ferramentas-resumo-titulo" className={section}>
      <p className="text-xs font-semibold tracking-[0.2em] text-neon-pink">ESCOLHA COM MAIS CLAREZA</p>
      <h2 id="ferramentas-resumo-titulo" className="mt-2 text-2xl font-bold sm:text-3xl">Ferramentas para ajudar na sua decisão</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <article className="flex flex-col items-start rounded-2xl border border-border bg-card/80 p-5">
          <h3 className="inline-flex items-center gap-3 text-lg font-semibold"><Calculator className="h-6 w-6 text-neon-pink" aria-hidden="true" /> Simulador de custos</h3>
          <p className="mb-5 mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">Use os números da sua operação para comparar cenários de custos de delivery. A estimativa depende dos dados informados.</p>
          <Link to="/simulador-de-economia" className={secondaryLink}>Simular meus custos <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></Link>
        </article>
        <article className="flex flex-col items-start rounded-2xl border border-border bg-card/80 p-5">
          <h3 className="inline-flex items-center gap-3 text-lg font-semibold"><Scale className="h-6 w-6 text-neon-pink" aria-hidden="true" /> Compare as possibilidades</h3>
          <p className="mb-5 mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">Entenda as diferenças entre aplicativos, plataformas de link e um site próprio antes de escolher sua estrutura.</p>
          <Link to="/comparativo" className={secondaryLink}>Comparar soluções <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></Link>
        </article>
      </div>
    </section>
  );
}
