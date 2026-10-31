import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Rocket,
  Crown,
  Gem,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Database,
  Palette,
  RefreshCw,
  Search,
  MessageCircle,
  BarChart3,
  Settings,
  Headphones,
  Plus,
  Building2,
  BellRing,
  ReceiptText,
  ShoppingBag,
  MessagesSquare,
  Sparkles,
  Calculator,
  Scale,
} from "lucide-react";
import portrait from "@/assets/portrait-wide.webp";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AddonHighlights } from "@/components/AddonHighlights";
import { brl, whatsLink } from "@/data/plans";
import {
  commercialPlans as plans,
  commercialComparison as comparison,
  commercialWhatsMsg as planWhatsMsg,
  launchSaving,
  contentChangeRules,
  separateModules,
  enterprisePlan,
  overageSectionCopy,
  overageBillingExamples,
  orderCountingRules,
  plansPageFaqs,
} from "@/data/commercial-plans";
import { Button } from "@/components/ui/button";

const plansJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Planos Comerciais NovaesWeb",
  url: "https://novaesweb.com.br/planos",
  description:
    "Planos de criação de site institucional, delivery com franquia de pedidos sem bloqueio e soluções sob medida.",
  itemListElement: [
    {
      "@type": "Offer",
      name: "Novaes Start",
      description: "Site institucional sem sistema de pedidos. Pagamento único de R$ 630. Sem mensalidade obrigatória.",
      price: "630.00",
      priceCurrency: "BRL",
    },
    {
      "@type": "Offer",
      name: "Novaes Business",
      description:
        "Site de delivery com 340 pedidos aceitos/mês incluídos. R$ 578 criação + R$ 190/mês. Pedido excedente: R$ 0,20.",
      price: "190.00",
      priceCurrency: "BRL",
    },
    {
      "@type": "Offer",
      name: "Novaes Premium",
      description:
        "Site de delivery com 750 pedidos aceitos/mês incluídos. R$ 980 criação + R$ 270/mês. Pedido excedente: R$ 0,15.",
      price: "270.00",
      priceCurrency: "BRL",
    },
    {
      "@type": "Offer",
      name: "Novaes Empresarial",
      description: "Solução sob medida para redes e operações de alto volume. Condições personalizadas.",
      priceCurrency: "BRL",
    },
  ],
};

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: "Planos e Preços — NovaesWeb | Start, Business, Premium e Empresarial" },
      {
        name: "description",
        content:
          "Novaes Start: R$ 630 criação única sem mensalidade. Business: R$ 190/mês (340 pedidos aceitos incluídos, excedente R$ 0,20). Premium: R$ 270/mês (750 pedidos aceitos incluídos, excedente R$ 0,15). Sem bloqueio de vendas.",
      },
      {
        name: "keywords",
        content:
          "planos novaesweb, preco site delivery, site para restaurante precos, plano delivery sem comissao, quanto custa um site para pizzaria",
      },
      { property: "og:title", content: "Planos que se adaptam ao seu negócio — NovaesWeb" },
      {
        property: "og:description",
        content:
          "Conheça os planos Start, Business, Premium e Empresarial da NovaesWeb, com franquia de pedidos aceitos e continuidade sem bloqueio de vendas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://novaesweb.com.br/planos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://novaesweb.com.br/planos" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(plansJsonLd),
      },
    ],
  }),
  component: Planos,
});

const icons = { start: Rocket, business: Crown, premium: Gem };
const benefitIcons = [ShoppingBag, ReceiptText, BellRing] as const;

function Planos() {
  return (
    <div data-commercial-plans className="min-h-screen overflow-x-hidden">
      <style>
        {
          "html:has([data-commercial-plans]), body:has([data-commercial-plans]) { overflow-x: hidden; } body:has([data-commercial-plans]) { position: relative; }"
        }
      </style>
      <SiteHeader active="Planos" />

      <section className="relative overflow-hidden min-h-[520px] md:min-h-[580px] flex flex-col justify-center">
        <div className="absolute inset-0 w-full overflow-hidden pointer-events-none">
          <img
            src={portrait}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-105 object-cover object-[center_20%] opacity-30 blur-2xl"
          />
          <img
            src={portrait}
            alt="Imagem de apresentação da marca NovaesWeb"
            className="absolute inset-0 h-full w-full object-cover object-[center_top] md:object-[right_center] lg:object-[78%_center]"
          />
          <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-[#080512]/92 via-[#080512]/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080512] via-[#080512]/60 to-transparent" />
          {/* Linha luminosa no final da imagem em harmonia com a paleta neon */}
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-85 shadow-[0_0_16px_rgba(236,72,153,0.7)]" />
        </div>
        <div className="relative mx-auto w-full max-w-[1800px] px-4 pb-16 pt-16 sm:px-8 xl:px-14">
          <div className="max-w-xl 2xl:max-w-2xl">
            <span className="inline-block rounded-full border border-neon-pink px-4 py-1 text-xs font-semibold tracking-[0.2em]">
              PLANOS OFICIAIS
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl md:text-6xl">
              Planos que se adaptam ao seu <span className="text-neon">negócio</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Escolha entre o site institucional do Start, os planos Business e Premium com franquia
              mensal de pedidos aceitos sem bloqueio de vendas, ou a solução sob medida do
              Empresarial.
            </p>
            <div className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
              {[
                [Zap, "Sem bloqueio de vendas", "Continue recebendo após a franquia"],
                [Settings, "Suporte especializado", "Conforme contratação"],
                [ShieldCheck, "Criação em duas etapas", "Start: saldo antes da publicação"],
              ].map(([I, a, b]: any) => (
                <div key={a} className="flex items-center gap-3">
                  <I className="h-8 w-8 shrink-0 text-neon-pink" />
                  <div>
                    <div className="font-semibold">{a}</div>
                    <div className="text-xs text-muted-foreground">{b}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="absolute right-8 top-10 hidden rotate-[-12deg] font-display text-2xl italic md:block">
            Mais que sites, criamos identidade!
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1800px] px-4 sm:px-8 xl:px-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-y border-neon-pink/50 py-5">
          <div className="flex items-center gap-3">
            <Zap aria-hidden="true" className="h-7 w-7 shrink-0 text-neon-pink" />
            <h2 className="text-xl font-bold">
              Seu negócio online por um preço mais acessível!
            </h2>
          </div>
          <p className="text-base font-semibold">
            De R$ 890 por R$ 630. Economize R$ 260 na criação da sua landing page!
          </p>
          <p className="w-full text-sm text-muted-foreground">
            Comece com R$ 315 e pague o restante antes da publicação. Pagamento único, sem
            mensalidade obrigatória. Suporte recorrente, manutenção, hospedagem recorrente, domínio
            e extras não incluídos, salvo contratação separada.
          </p>
        </div>

        {/* Cards dos Planos: Start, Business e Premium */}
        <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
          {plans.map((p) => (
            <PlanCard key={p.id} p={p} />
          ))}
        </div>

        {/* Card Oficial NOVAES EMPRESARIAL */}
        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <article className="flex flex-col justify-between rounded-2xl border-2 border-neon-violet bg-card/90 p-6 shadow-neon lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Building2 className="h-10 w-10 shrink-0 text-neon-pink" aria-hidden="true" />
                  <div>
                    <span className="text-xs font-semibold tracking-wider text-neon-pink">
                      SOLUÇÃO CORPORATIVA E ALTO VOLUME
                    </span>
                    <h2 className="text-2xl font-bold">{enterprisePlan.name}</h2>
                  </div>
                </div>
                <span className="rounded-full border border-neon-pink bg-neon/15 px-4 py-1.5 font-display text-sm font-bold text-neon-pink">
                  {enterprisePlan.priceLabel}
                </span>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">{enterprisePlan.description}</p>

              <ul className="mt-4 grid gap-2.5 text-sm sm:grid-cols-2">
                {enterprisePlan.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-neon-emerald" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                Hospedagem, manutenção, franquia de pedidos, limites de alterações e infraestrutura
                definidos em proposta individual conforme o contrato.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                asChild
                variant="outline"
                className="min-h-11 h-auto whitespace-normal rounded-full border-2 border-neon-pink bg-neon px-6 py-3 font-semibold text-primary-foreground shadow-neon"
              >
                <a href={enterprisePlan.whatsHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  Solicitar orçamento Empresarial
                  <ArrowRight className="h-5 w-5 shrink-0" />
                </a>
              </Button>
              <a
                href="#comparativo-planos"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-neon-violet px-5 py-2.5 text-sm font-semibold hover:border-neon-pink hover:text-neon-pink"
              >
                Ver detalhes do plano
              </a>
            </div>
          </article>

          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 lg:col-span-5">
            <div>
              <h3 className="text-lg font-bold">Business e Premium incluem</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Estrutura recorrente completa para manter sua loja em operação:
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  [Globe, "Domínio próprio", "(adicional)"],
                  [Database, "Hospedagem", "inclusa"],
                  [Palette, "Design", "personalizado"],
                  [MessageCircle, "Suporte", "via WhatsApp"],
                  [RefreshCw, "Manutenção", "técnica"],
                  [Search, "Site otimizado", "para Google"],
                ].map(([I, a, b]: any) => (
                  <div
                    key={a}
                    className="flex flex-col items-center rounded-lg border border-border/60 p-3 text-center text-xs"
                  >
                    <I className="mb-2 h-6 w-6 text-neon-pink" />
                    <span className="font-semibold">{a}</span>
                    <span className="text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. SEÇÃO EXPLICATIVA: Seu negócio não precisa parar de vender */}
        <section
          aria-labelledby="continuidade-pedidos-heading"
          className="mt-10 rounded-3xl border border-neon-violet/50 bg-card/90 p-6 shadow-neon sm:p-10"
        >
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-neon-emerald/60 bg-neon-emerald/15 px-3.5 py-1 text-xs font-semibold tracking-widest text-neon-emerald">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              CONTINUIDADE DO RECEBIMENTO DE PEDIDOS
            </span>
            <h2
              id="continuidade-pedidos-heading"
              className="mt-4 text-3xl font-extrabold sm:text-4xl"
            >
              {overageSectionCopy.title}
            </h2>
            {overageSectionCopy.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          {/* 3 Benefícios Visuais */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {overageSectionCopy.benefits.map((b, idx) => {
              const BenefitIcon = benefitIcons[idx] ?? ShieldCheck;
              return (
                <div
                  key={b.title}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-background/70 p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-neon-emerald/50 bg-neon-emerald/10">
                    <BenefitIcon className="h-6 w-6 text-neon-emerald" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {b.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4. EXEMPLOS DE COBRANÇA */}
          <div className="mt-10 border-t border-border pt-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-neon-pink">
                  EXEMPLOS PRÁTICOS DE COBRANÇA
                </span>
                <h3 className="mt-1 text-2xl font-bold">
                  Como funciona na prática quando sua loja vende além da franquia
                </h3>
              </div>
              <span className="rounded-full border border-border bg-background/70 px-3.5 py-1 text-xs text-muted-foreground">
                Simulações de um mês completo, sem condições contratuais especiais
              </span>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {overageBillingExamples.map((ex) => (
                <article
                  key={ex.planId}
                  className="rounded-2xl border border-neon-violet/40 bg-background/80 p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3">
                    <h4 className="text-lg font-bold text-foreground">{ex.title}</h4>
                    <span className="rounded-full bg-neon/20 px-3 py-1 text-xs font-semibold text-neon-pink">
                      Simulação de mês completo
                    </span>
                  </div>

                  <dl className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
                    <div className="rounded-xl border border-border/60 bg-card/70 p-3">
                      <dt className="text-xs text-muted-foreground">Pedidos incluídos</dt>
                      <dd className="mt-1 font-display text-lg font-bold">
                        {ex.includedOrders.toLocaleString("pt-BR")}
                      </dd>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-card/70 p-3">
                      <dt className="text-xs text-muted-foreground">Pedidos excedentes</dt>
                      <dd className="mt-1 font-display text-lg font-bold">
                        {ex.overageOrders.toLocaleString("pt-BR")}
                      </dd>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-card/70 p-3">
                      <dt className="text-xs text-muted-foreground">
                        Valor em excedentes (R$ {brl(ex.overageUnitPrice)}/un.)
                      </dt>
                      <dd className="mt-1 font-display text-lg font-bold text-neon-pink">
                        R$ {brl(ex.overageTotalCost)}
                      </dd>
                    </div>
                    <div className="rounded-xl border border-neon-emerald/60 bg-card p-3">
                      <dt className="text-xs font-semibold text-neon-emerald">Total mensal</dt>
                      <dd className="mt-1 font-display text-lg font-extrabold text-neon-emerald">
                        R$ {brl(ex.totalMonthlyBill)}
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-3 text-xs text-muted-foreground">
                    Memória: Mensalidade base de R$ {brl(ex.baseMonthly)} ({ex.includedOrders}{" "}
                    pedidos aceitos incluídos) + {ex.overageOrders} pedidos aceitos excedentes × R${" "}
                    {brl(ex.overageUnitPrice)} (R$ {brl(ex.overageTotalCost)}) ={" "}
                    <strong className="text-foreground">R$ {brl(ex.totalMonthlyBill)}</strong>.
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* 5. REGRAS IMPORTANTES DE CONTABILIZAÇÃO E FRANQUIA */}
          <div className="mt-8 rounded-2xl border border-border bg-background/60 p-6">
            <h3 className="text-lg font-bold">
              Regras importantes sobre franquia e pedidos excedentes
            </h3>
            <ul className="mt-4 grid gap-2.5 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-3">
              {orderCountingRules.map((rule) => (
                <li key={rule} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-neon-emerald"
                    aria-hidden="true"
                  />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Banner de Interligação: Simulador de Economia e Comparativo de Canais */}
        <section
          aria-label="Ferramentas interativas de decisão"
          className="mt-8 rounded-3xl border-2 border-neon-pink/70 bg-card/90 p-6 shadow-neon sm:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-neon/20 px-3 py-1 text-xs font-bold tracking-wider text-neon-pink">
                <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
                ECONOMIA REAL NO SEU DELIVERY
              </span>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Quer saber exatamente quanto seu negócio economiza?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Compare as taxas do iFood e outros aplicativos com a mensalidade da NovaesWeb no
                nosso Simulador de Economia interativo ou veja o comparativo completo com outras
                plataformas.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:justify-end">
              <Link
                to="/simulador-de-economia"
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-neon px-6 py-3 font-semibold shadow-neon transition"
              >
                <Calculator className="h-5 w-5 shrink-0" aria-hidden="true" />
                Simular economia agora
                <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
              </Link>
              <Link
                to="/comparativo"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-neon-violet px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-neon-pink hover:text-neon-pink"
              >
                <Scale className="h-4 w-4 shrink-0 text-neon-pink" aria-hidden="true" />
                Ver comparativo com Anota AI / Goomer
              </Link>
            </div>
          </div>
        </section>

        <div className="mt-8 grid grid-cols-1 gap-6 rounded-2xl border border-border bg-card/80 p-6 sm:grid-cols-2 md:grid-cols-4">
          {[
            [BarChart3, "Presença digital", "Apresente seu negócio"],
            [Settings, "Atualizações", "Conforme contratação"],
            [Headphones, "Suporte de verdade", "Incluso ou opcional no Start"],
            [ShieldCheck, "Manutenção técnica", "Business e Premium"],
          ].map(([I, a, b]: any) => (
            <div key={a} className="flex items-center gap-4">
              <I className="h-9 w-9 shrink-0 text-neon-pink" />
              <div>
                <div className="font-semibold">{a}</div>
                <div className="text-sm text-muted-foreground">{b}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabela Comparativa Completa */}
        <details
          id="comparativo-planos"
          className="group mt-10 rounded-2xl border border-border bg-card p-6"
          open
        >
          <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Comparativo completo dos planos</h2>
              <p className="text-sm text-muted-foreground">
                Start institucional · Business (340 pedidos aceitos/mês) · Premium (750 pedidos
                aceitos/mês)
              </p>
            </div>
            <span className="flex shrink-0 items-center gap-2 rounded-full border-2 border-neon-pink px-4 py-2 text-sm font-semibold">
              <span className="group-open:hidden">Ver comparativo</span>
              <span className="hidden group-open:inline">Fechar</span>
              <Plus className="h-4 w-4 transition group-open:rotate-45" />
            </span>
          </summary>
          <p className="mt-4 text-xs text-muted-foreground">
            Painéis e recursos de gerenciamento: disponibilidade sob consulta, conforme validação
            para o projeto contratado. Para volumes personalizados, consulte o plano Novaes
            Empresarial.
          </p>
          <div
            className="mt-4 max-w-full overflow-x-auto [contain:inline-size]"
            role="region"
            aria-label="Tabela comparativa dos planos"
            tabIndex={0}
          >
            <table className="w-full min-w-[520px] text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="py-2">Recurso</th>
                  {plans.map((p) => (
                    <th key={p.id} className="py-2 text-center text-neon-pink">
                      {p.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map(([f, ...v]) => (
                  <tr key={f} className="border-b border-border/40">
                    <td className="py-2">{f}</td>
                    {v.map((x, i) => (
                      <td key={i} className="py-2 text-center">
                        {x === true ? (
                          <>
                            <CheckCircle2
                              aria-hidden="true"
                              className="mx-auto h-5 w-5 text-neon-emerald"
                            />
                            <span className="sr-only">Incluído</span>
                          </>
                        ) : x === false ? (
                          <>
                            <span aria-hidden="true" className="text-muted-foreground">
                              —
                            </span>
                            <span className="sr-only">Não incluído</span>
                          </>
                        ) : (
                          <span className="text-xs font-semibold">{x}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>

        <section
          className="mt-8 border-y border-border py-6"
          aria-labelledby="content-rules-heading"
        >
          <h2 id="content-rules-heading" className="text-2xl font-bold">
            Alterações de conteúdo: clareza em cada mês
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            <li>
              Business e Premium incluem até{" "}
              <strong className="text-foreground">
                {contentChangeRules.requestsPerMonth} solicitações de alteração de conteúdo por mês
              </strong>{" "}
              realizadas pela NovaesWeb.
            </li>
            {!contentChangeRules.clientEditsConsumeRequests && (
              <li>
                Alterações feitas diretamente pelo cliente no painel não consomem essas
                solicitações.
              </li>
            )}
            {!contentChangeRules.cumulative && (
              <li>As solicitações não são cumulativas para os meses seguintes.</li>
            )}
            <li>
              Criação de novas páginas, redesigns, funcionalidades inéditas e integrações não fazem
              parte das alterações simples e podem exigir orçamento separado.
            </li>
            {!contentChangeRules.providerDefectCorrectionsConsumeRequests && (
              <li>
                Correções de defeitos de responsabilidade da NovaesWeb não consomem as solicitações.
              </li>
            )}
            <li>Os limites exatos de complexidade e prazo de atendimento devem constar no contrato.</li>
          </ul>
        </section>

        <AddonHighlights />

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-xl font-bold">Como funciona o pagamento</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• 50% de entrada para iniciar a criação.</li>
              <li>
                • Start: 50% restantes antes da publicação. Business e Premium: 50% restantes na
                entrega.
              </li>
              <li>
                • Start: criação de R$ 630,00, sem mensalidade obrigatória e sem pagamento mensal da
                criação.
              </li>
              <li>
                • Business e Premium: criação única; mensalidade recorrente a partir da ativação do
                site (no primeiro mês, proporcional aos dias ativos).
              </li>
              <li>• Pedidos aceitos excedentes são apurados e cobrados no mês seguinte.</li>
              <li>
                • Prazos estimados, contados após o recebimento dos materiais e informações.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-xl font-bold">Suporte</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                • Start: sem suporte incluso. Contratação opcional por R$ 80,00 por mês, separada da
                criação.
              </li>
              <li>• Business e Premium: suporte incluso na mensalidade.</li>
              <li>• Segunda a sexta-feira, das 9h às 18h (horário de Brasília).</li>
              <li>
                • Fins de semana e feriados: atendimento extraordinário mediante disponibilidade, R$
                50 por até 30 minutos.
              </li>
              <li>• Falhas críticas de responsabilidade da NovaesWeb não são cobradas.</li>
              <li>• Demandas fora do escopo são orçadas antes da execução.</li>
            </ul>
          </div>
        </div>

        {/* Perguntas Frequentes da Página de Planos */}
        <section
          aria-labelledby="planos-faq-heading"
          className="mt-10 rounded-2xl border border-border bg-card/80 p-6 sm:p-8"
        >
          <div className="flex items-start gap-3">
            <MessagesSquare className="h-9 w-9 shrink-0 text-neon-pink" aria-hidden="true" />
            <div>
              <h2 id="planos-faq-heading" className="text-2xl font-bold">
                Perguntas frequentes sobre planos, franquia e excedentes
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Respostas diretas sobre quantidade de pedidos aceitos, cobrança de excedentes e
                regras de funcionamento.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {plansPageFaqs.map(([q, a]) => (
              <details
                key={q}
                className="group rounded-xl border border-border bg-background/70 px-4 py-3 text-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-1 font-semibold leading-snug">
                  {q}
                  <Plus className="h-4 w-4 shrink-0 text-neon-pink transition group-open:rotate-45" />
                </summary>
                <p className="mt-2 leading-relaxed text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="my-12 flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-2xl border-2 border-neon-pink bg-card p-6 shadow-neon">
          <div className="flex items-center gap-5">
            <img
              src={portrait}
              alt=""
              className="hidden h-24 w-24 rounded-full object-cover object-[60%_25%] sm:block"
            />
            <div>
              <h3 className="text-2xl font-bold">
                Vamos criar algo incrível para o seu negócio?
              </h3>
              <p className="text-muted-foreground">
                Fale agora com a nossa equipe e receba uma proposta personalizada.
              </p>
            </div>
          </div>
          <a
            href={whatsLink("Olá, NovaesWeb! Gostaria de solicitar um orçamento.")}
            className="flex items-center gap-3 rounded-full bg-neon px-8 py-4 font-semibold shadow-neon"
          >
            <MessageCircle className="h-5 w-5" /> Solicitar orçamento{" "}
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

type Plan = (typeof plans)[number];

function PlanCard({ p }: { p: Plan }) {
  const [tab, setTab] = useState<"inclui" | "pagamento">("inclui");
  const [all, setAll] = useState(false);
  const [withSupport, setWithSupport] = useState(false);
  const isOneTime = p.monthly === 0;
  const isHighlighted = p.id === "business";
  const I = icons[p.id];
  const items = all ? p.items : p.items.slice(0, 5);
  const q = p.orderQuota;

  return (
    <article
      id={`plano-${p.id}`}
      className={`group relative scroll-mt-24 flex flex-col rounded-2xl bg-card/90 p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-neon ${
        isHighlighted
          ? "border-2 border-neon-pink shadow-neon md:-mt-3"
          : "border border-border hover:border-neon-pink"
      }`}
    >
      {isHighlighted && (
        <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-neon px-3.5 py-1 text-xs font-bold tracking-wider text-primary-foreground shadow-neon">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          DESTAQUE PARA DELIVERY
        </span>
      )}

      <div className="flex items-center gap-3">
        <I className="h-8 w-8 shrink-0 text-neon-pink" />
        <div>
          <h3 className="text-2xl font-bold">{p.name}</h3>
          <p className="text-xs text-neon-pink">{p.tag}</p>
        </div>
      </div>

      <p className="mt-3 text-xs leading-5 text-muted-foreground">{p.idealFor}</p>

      <div className="mt-4 border-b border-border/60 pb-4">
        {isOneTime ? (
          <>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-bold">R$</span>
              <span className="font-display text-4xl font-extrabold">{brl(p.setup)}</span>
              <span className="text-xs text-muted-foreground">criação única</span>
            </div>
            <p className="mt-1 text-xs font-semibold text-neon-emerald">
              Sem mensalidade obrigatória · Suporte opcional: R$ {brl(p.optionalSupportMonthly ?? 80)}/mês
            </p>
          </>
        ) : (
          <>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-bold">R$</span>
              <span className="font-display text-4xl font-extrabold">{brl(p.monthly)}</span>
              <span className="text-xs text-muted-foreground">/mês</span>
            </div>
            <p className="mt-1 text-xs font-medium text-muted-foreground">
              Criação única de R$ {brl(p.setup)} cobrada à parte na implantação
            </p>
          </>
        )}
      </div>

      {/* Destaque visual das regras de pedidos aceitos e continuidade */}
      <div className="mt-4 rounded-xl border border-border/70 bg-background/60 p-3.5 text-xs">
        <div className="font-semibold text-foreground">
          {q.includedAcceptedOrders > 0
            ? `${q.includedAcceptedOrders} pedidos aceitos incluídos por mês.`
            : "Site institucional (sem pedidos online)."}
        </div>

        {q.includedAcceptedOrders > 0 ? (
          <>
            <p className="mt-1 text-muted-foreground">
              {p.id === "business"
                ? "Seu delivery continua recebendo pedidos após atingir a franquia. Cada pedido aceito adicional custa apenas R$ 0,20."
                : "Seu negócio continua recebendo pedidos mesmo após atingir a franquia. Cada pedido aceito adicional custa apenas R$ 0,15."}
            </p>
            <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-neon-emerald/50 bg-neon-emerald/10 px-2.5 py-0.5 text-[11px] font-semibold text-neon-emerald">
              <ShieldCheck className="h-3 w-3 shrink-0" aria-hidden="true" />
              Sem bloqueio ao atingir a franquia
            </div>
          </>
        ) : (
          <p className="mt-1 text-muted-foreground">
            Ideal para apresentação institucional de serviços com botão para o WhatsApp. Não inclui
            carrinho, checkout ou painel de pedidos.
          </p>
        )}
      </div>

      <details className="mt-3 text-xs text-muted-foreground" open={isOneTime || undefined}>
        <summary className="flex cursor-pointer items-center gap-2 font-semibold text-foreground">
          Não incluído no plano <Plus className="h-4 w-4 shrink-0" />
        </summary>
        <p className="mt-2 leading-5">{p.excludes}</p>
        {p.id === "premium" && (
          <ul className="mt-2 space-y-1 leading-5">
            {separateModules.map((name) => (
              <li key={name}>• {name}</li>
            ))}
          </ul>
        )}
      </details>

      {!isOneTime && (
        <p className="mt-2 text-xs leading-5 text-muted-foreground">
          Painel e recursos de gerenciamento: disponibilidade sob consulta, conforme validação para
          o seu projeto.
        </p>
      )}

      {p.optionalSupportMonthly !== null && (
        <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 text-sm">
          <input
            type="checkbox"
            checked={withSupport}
            onChange={(event) => setWithSupport(event.target.checked)}
            className="mt-1 h-4 w-4 shrink-0"
          />
          <span>
            <span className="font-semibold">
              Adicionar suporte opcional — R$ {brl(p.optionalSupportMonthly)}/mês
            </span>
            <span className="mt-1 block text-xs text-muted-foreground">
              Contratado separadamente. Não é parcela da criação.
            </span>
          </span>
        </label>
      )}

      <div className="mt-5 grid grid-cols-2 rounded-full border border-border p-1 text-sm">
        {(["inclui", "pagamento"] as const).map((t) => (
          <Button
            variant="ghost"
            key={t}
            aria-pressed={tab === t}
            onClick={() => setTab(t)}
            className={`min-h-11 h-auto whitespace-normal rounded-full py-1.5 font-semibold transition ${
              tab === t ? "bg-neon shadow-neon" : "text-muted-foreground"
            }`}
          >
            {t === "inclui" ? "O que inclui" : "Pagamento"}
          </Button>
        ))}
      </div>

      <div className="mt-4 flex-1">
        {tab === "inclui" ? (
          <>
            <ul className="space-y-2.5 text-sm">
              {items.map((i) => (
                <li key={i} className="flex items-center gap-3 animate-in fade-in">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-neon-emerald" />
                  {i}
                </li>
              ))}
            </ul>
            <Button
              variant="link"
              aria-expanded={all}
              onClick={() => setAll(!all)}
              className="mt-3 min-h-11 h-auto px-0 text-sm font-semibold text-neon-pink"
            >
              {all
                ? "Mostrar menos detalhes"
                : `Ver detalhes do plano (+${p.items.length - items.length} recursos)`}
            </Button>
          </>
        ) : (
          <div className="space-y-3 text-sm animate-in fade-in">
            <div className="flex flex-wrap justify-between gap-2 rounded-lg border border-border/60 p-3">
              <span>Na contratação (50%)</span>
              <span className="shrink-0 font-bold">R$ {brl(p.setupPayment.upfront)}</span>
            </div>
            <div className="flex flex-wrap justify-between gap-2 rounded-lg border border-border/60 p-3">
              <span>
                {p.setupPayment.remainderDue === "before-publication"
                  ? "Antes da publicação (50%)"
                  : "Na entrega (50%)"}
              </span>
              <span className="shrink-0 font-bold">R$ {brl(p.setupPayment.remainder)}</span>
            </div>
            {!isOneTime && (
              <div className="flex flex-wrap justify-between gap-2 rounded-lg border border-neon-pink p-3">
                <span>Mensalidade ({q.includedAcceptedOrders} pedidos aceitos incl.)</span>
                <span className="font-bold">R$ {brl(p.monthly)}</span>
              </div>
            )}
            <p className="text-xs text-muted-foreground">
              {isOneTime
                ? "Criação com cobrança única: R$ 315,00 na contratação e R$ 315,00 antes da publicação. Sem pagamento mensal da criação. Suporte opcional contratado separadamente."
                : `Criação é pagamento único. A mensalidade começa na ativação do site (proporcional no 1º mês). Pedidos aceitos excedentes custam R$ ${brl(q.overageOrderPrice ?? 0)} cada e são cobrados no mês seguinte.`}
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 grid gap-2.5">
        <Button
          asChild
          variant="outline"
          className={`h-auto whitespace-normal rounded-full border-2 py-3 ${
            isOneTime ? "border-neon-pink bg-neon shadow-neon" : "border-neon-violet bg-neon shadow-neon"
          }`}
        >
          <a href={whatsLink(planWhatsMsg(p, withSupport))} target="_blank" rel="noopener noreferrer">
            Solicitar orçamento — {p.label} <ArrowRight className="h-5 w-5 shrink-0" />
          </a>
        </Button>
      </div>
    </article>
  );
}
