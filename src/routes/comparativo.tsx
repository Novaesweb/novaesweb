import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calculator,
  Check,
  CheckCircle2,
  Crown,
  HeartHandshake,
  HelpCircle,
  MessageCircle,
  Minus,
  Plus,
  Scale,
  ShieldCheck,
  Sparkles,
  Store,
  X,
  Zap,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { whatsLink } from "@/data/plans";
import {
  comparisonDimensions,
  comparisonFaqs,
} from "@/data/delivery-comparison";

export const Route = createFileRoute("/comparativo")({
  head: () => ({
    meta: [
      {
        title: "Comparativo de Delivery: NovaesWeb vs. Aplicativos e Plataformas SaaS",
      },
      {
        name: "description",
        content:
          "Descubra as diferenças reais entre vender por marketplaces (iFood, 99Food), links genéricos (Anota AI, Goomer) e ter seu próprio site profissional com 0% de comissão na NovaesWeb.",
      },
      {
        name: "keywords",
        content:
          "comparativo ifood, alternativa anota ai, alternativa goomer, site delivery sem comissao, cardapio digital proprio, novaesweb delivery",
      },
      {
        property: "og:title",
        content: "NovaesWeb vs. Aplicativos: Qual o melhor canal para seu delivery?",
      },
      {
        property: "og:description",
        content:
          "Compare comissão, marca própria, fidelização de clientes e suporte. Veja por que ter seu site próprio é o caminho mais lucrativo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://novaesweb.com.br/comparativo" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://novaesweb.com.br/comparativo" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Comparativo de Canais de Delivery — NovaesWeb",
          description:
            "Comparativo transparente entre aplicativos de delivery, plataformas de link e site próprio NovaesWeb.",
          url: "https://novaesweb.com.br/comparativo",
          mainEntity: {
            "@type": "FAQPage",
            mainEntity: comparisonFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          },
        }),
      },
    ],
  }),
  component: ComparativoPage,
});

export function ComparativoPage() {
  const whatsMsg = whatsLink(
    "Olá, NovaesWeb! Vi o comparativo no site e gostaria de saber mais sobre ter meu site próprio sem comissão sobre as vendas.",
  );

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader active="Comparativo" />

      {/* Hero da Página de Comparativo */}
      <section className="relative border-b border-border/40">
        <div className="mx-auto max-w-[1800px] px-4 pb-12 pt-12 sm:px-8 xl:px-14">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-neon-pink px-4 py-1 text-xs font-semibold tracking-[0.2em] text-neon-pink">
              <Scale className="h-3.5 w-3.5" aria-hidden="true" />
              ANÁLISE COMPARATIVA DE MERCADO
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] sm:text-5xl md:text-6xl">
              Qual a melhor escolha para o seu <span className="text-neon">delivery vender mais?</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Entenda lado a lado as diferenças entre vender pelos aplicativos de entrega, contratar
              plataformas de links genéricos ou ter seu próprio site profissional com a sua marca.
            </p>
          </div>

          {/* 3 Pilares Resumidos */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card/70 p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                CANAL 1
              </span>
              <h2 className="mt-1 text-xl font-bold">Marketplaces de Delivery</h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Ótimos para descobrir novos clientes, mas cobram de <strong>12% a 27% de comissão</strong> sobre
                cada venda e retêm a base de contatos do seu negócio.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card/70 p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                CANAL 2
              </span>
              <h2 className="mt-1 text-xl font-bold">Plataformas SaaS de Link</h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Sem comissão por venda, mas oferecem um <strong>link padronizado idêntico</strong> a milhares de
                outros restaurantes e exigem que você configure tudo sozinho.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-neon-pink bg-card p-5 shadow-neon">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neon-pink">
                <Crown className="h-3.5 w-3.5" aria-hidden="true" />
                CANAL PRÓPRIO
              </span>
              <h2 className="mt-1 text-xl font-bold text-foreground">Site Próprio NovaesWeb</h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                <strong>0% de comissão por venda</strong>, site feito sob medida com a sua marca,
                franquia de pedidos sem bloqueio e equipe que entrega pronto para faturar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabela Comparativa Detalhada */}
      <section
        aria-label="Tabela comparativa completa"
        className="mx-auto max-w-[1800px] px-4 py-12 sm:px-8 xl:px-14"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-neon-pink">
              COMPARAÇÃO DIRETA
            </span>
            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
              Comparativo detalhado item por item
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Veja como cada opção impacta o seu lucro, a sua operação diária e a sua marca no mercado.
            </p>
          </div>

          <Link
            to="/simulador-de-economia"
            className="inline-flex items-center gap-2 rounded-full border-2 border-neon-pink px-5 py-2.5 text-sm font-semibold transition hover:bg-neon-pink/10"
          >
            <Calculator className="h-4 w-4 text-neon-pink" aria-hidden="true" />
            Simular em números no seu negócio
          </Link>
        </div>

        {/* Tabela Responsiva */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-neon">
          <div className="max-w-full overflow-x-auto [contain:inline-size]">
            <table className="w-full min-w-[700px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="w-1/4 px-5 py-4 font-bold">Critério avaliado</th>
                  <th className="w-1/4 px-5 py-4 font-semibold text-muted-foreground">
                    Marketplaces (iFood, 99Food)
                  </th>
                  <th className="w-1/4 px-5 py-4 font-semibold text-muted-foreground">
                    Plataformas SaaS (Anota AI, Goomer)
                  </th>
                  <th className="w-1/4 bg-neon/10 px-5 py-4 font-bold text-neon-pink">
                    NovaesWeb (Site Próprio)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {comparisonDimensions.map((dim) => (
                  <tr key={dim.title} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-4 align-top font-bold text-foreground">
                      {dim.title}
                    </td>

                    {/* Marketplaces */}
                    <td className="px-5 py-4 align-top text-muted-foreground">
                      <div className="flex items-start gap-2">
                        {dim.marketplaces.status === "ruim" ? (
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" aria-hidden="true" />
                        ) : (
                          <Minus className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                        )}
                        <div>
                          <span className="font-semibold text-foreground">
                            {dim.marketplaces.label}
                          </span>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {dim.marketplaces.description}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Generic SaaS */}
                    <td className="px-5 py-4 align-top text-muted-foreground">
                      <div className="flex items-start gap-2">
                        {dim.genericSaaS.status === "ruim" ? (
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" aria-hidden="true" />
                        ) : dim.genericSaaS.status === "neutro" ? (
                          <Minus className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
                        ) : (
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-neon-emerald" aria-hidden="true" />
                        )}
                        <div>
                          <span className="font-semibold text-foreground">
                            {dim.genericSaaS.label}
                          </span>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {dim.genericSaaS.description}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* NovaesWeb */}
                    <td className="bg-neon/5 px-5 py-4 align-top">
                      <div className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-neon-emerald"
                          aria-hidden="true"
                        />
                        <div>
                          <span className="font-bold text-neon-emerald">
                            {dim.novaesweb.label}
                          </span>
                          <p className="mt-1 text-xs leading-relaxed text-foreground/80">
                            {dim.novaesweb.description}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4 Vantagens Centrais da NovaesWeb */}
        <div className="mt-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-neon-pink">
              POR QUE A NOVAESWEB?
            </span>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Quatro motivos para ter seu próprio canal de vendas
            </h2>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col rounded-2xl border border-border bg-card p-5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-neon/15 text-neon-pink">
                <Zap className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-bold">Zero comissão por venda</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Toda venda no seu site é sua. O dinheiro cai no seu Pix ou conta sem intermediários
                mordendo de 12% a 27% do faturamento.
              </p>
            </div>

            <div className="flex flex-col rounded-2xl border border-border bg-card p-5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-neon/15 text-neon-pink">
                <Store className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-bold">Sua marca em primeiro lugar</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Seu site tem o seu logotipo, suas cores e seu domínio próprio. Seus clientes pedem
                sem ver ofertas dos concorrentes na mesma tela.
              </p>
            </div>

            <div className="flex flex-col rounded-2xl border border-border bg-card p-5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-neon-emerald/15 text-neon-emerald">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-bold">Sem bloqueio ao atingir a franquia</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Se seu delivery bombar no fim de semana, as vendas não param. Cada pedido aceito
                excedente custa apenas R$ 0,20 (Business) ou R$ 0,15 (Premium).
              </p>
            </div>

            <div className="flex flex-col rounded-2xl border border-border bg-card p-5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-neon/15 text-neon-pink">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-bold">Implantação profissional</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Não gaste horas sofrendo com sistemas complexos. Nossa equipe desenvolve e entrega
                seu site pronto para operar e receber pedidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Conexão com o Simulador */}
      <section className="mx-auto max-w-[1800px] px-4 pb-12 sm:px-8 xl:px-14">
        <div className="rounded-3xl border-2 border-neon-violet bg-card/90 p-6 shadow-neon sm:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-neon/20 px-3.5 py-1 text-xs font-semibold text-neon-pink">
                <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
                SIMULADOR INTERATIVO
              </span>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Quanto dinheiro o seu negócio economizaria todo mês?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Utilize nossa calculadora com os números reais do seu delivery: informe quantidade
                de pedidos, ticket médio e veja o comparativo de custos com transição gradual.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:justify-end">
              <Link
                to="/simulador-de-economia"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-neon px-6 py-3 font-semibold shadow-neon transition"
              >
                <Calculator className="h-5 w-5" aria-hidden="true" />
                Abrir simulador de economia
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                to="/planos"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-muted-foreground transition hover:border-neon-pink hover:text-foreground"
              >
                Ver planos e valores oficiais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ do Comparativo */}
      <section
        aria-labelledby="faq-comparativo-heading"
        className="mx-auto max-w-[1800px] px-4 pb-16 sm:px-8 xl:px-14"
      >
        <div className="rounded-2xl border border-border bg-card/80 p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <HelpCircle className="h-8 w-8 shrink-0 text-neon-pink" aria-hidden="true" />
            <div>
              <h2 id="faq-comparativo-heading" className="text-2xl font-bold">
                Perguntas frequentes sobre a comparação de canais
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Tire suas dúvidas para tomar a decisão mais estratégica para o seu delivery.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {comparisonFaqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-border bg-background/70 px-4 py-3 text-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold leading-snug">
                  {faq.q}
                  <Plus className="h-4 w-4 shrink-0 text-neon-pink transition group-open:rotate-45" />
                </summary>
                <p className="mt-2.5 leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-2xl border-2 border-neon-pink bg-card p-6 shadow-neon sm:p-8">
          <div>
            <h3 className="text-2xl font-bold">Pronto para criar o site próprio do seu delivery?</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Converse com a equipe da NovaesWeb pelo WhatsApp e tire suas dúvidas sem compromisso.
            </p>
          </div>
          <a
            href={whatsMsg}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-3 rounded-full bg-neon px-8 py-3.5 font-semibold shadow-neon transition"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Falar com a equipe no WhatsApp
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
