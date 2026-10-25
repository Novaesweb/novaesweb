import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calculator,
  HeartHandshake,
  ShieldAlert,
  Sparkles,
  Store,
  TrendingDown,
} from "lucide-react";
import { brl } from "@/data/plans";
import { homepageIllustrativeExample } from "@/data/economy-simulator";

export function EconomyTeaserSection() {
  const { input, result } = homepageIllustrativeExample;
  const appBarPct = 100;
  const siteBarPct =
    result.appOnly.totalMonthlyCost > 0
      ? Math.max(
          8,
          Math.round((result.directOnly.totalMonthlyCost / result.appOnly.totalMonthlyCost) * 100),
        )
      : 25;

  return (
    <section
      id="simulador-resumo"
      aria-labelledby="titulo-simulador-resumo"
      className="mx-auto max-w-[1800px] px-4 py-14 sm:px-8 xl:px-14"
    >
      <div className="rounded-3xl border border-neon-violet/40 bg-card/85 p-6 shadow-neon backdrop-blur sm:p-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Coluna de texto, benefícios de marca e CTA */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-neon-pink px-4 py-1 text-xs font-semibold tracking-[0.2em] text-neon-pink">
              <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
              SIMULADOR DE ECONOMIA
            </span>
            <h2
              id="titulo-simulador-resumo"
              className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl"
            >
              Quanto você poderia economizar com seu <span className="text-neon">próprio site?</span>
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Descubra quanto seu negócio paga em taxas de aplicativos e simule os custos de receber
              pedidos diretamente pelo seu próprio site.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-background/60 p-4">
                <HeartHandshake className="mt-0.5 h-7 w-7 shrink-0 text-neon-pink" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold">Relacionamento direto com clientes</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Atenda sem intermediários, facilite a recompra e mantenha um canal direto no
                    WhatsApp e no navegador do seu cliente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-background/60 p-4">
                <Sparkles className="mt-0.5 h-7 w-7 shrink-0 text-neon-pink" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold">Fortalecimento da sua marca</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Destaque sua identidade visual, seus produtos e suas promoções em uma vitrine
                    própria, sem dividir espaço com concorrentes.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                to="/simulador-de-economia"
                className="inline-flex items-center gap-3 rounded-full bg-neon px-7 py-4 font-semibold shadow-neon transition"
              >
                <Calculator className="h-5 w-5" aria-hidden="true" />
                Simular minha economia
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <span className="text-xs text-muted-foreground">
                100% editável · Com cenário gradual de transição
              </span>
            </div>
          </div>

          {/* Coluna de comparação visual resumida + exemplo numérico ilustrativo */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-neon-violet/50 bg-background/75 p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-neon/20 px-3 py-1 text-[11px] font-semibold tracking-wider text-neon-pink">
                  EXEMPLO NUMÉRICO ILUSTRATIVO
                </span>
                <span className="text-xs text-muted-foreground">
                  {input.monthlyOrders} pedidos/mês × R$ {brl(input.averageTicket)} (R${" "}
                  {brl(result.grossMonthlyRevenue)}/mês)
                </span>
              </div>

              <div className="mt-5 space-y-4" role="group" aria-label="Comparação ilustrativa de custos mensais">
                {/* Barra Aplicativo */}
                <div className="rounded-xl border border-border bg-card/80 p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Aplicativo de delivery (100% dos pedidos)
                      </span>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        Comissão {input.platformCommissionPct}% + pagamento{" "}
                        {input.platformPaymentFeePct}% + mensalidade R${" "}
                        {brl(input.platformMonthlyFee)}
                      </p>
                    </div>
                    <span className="font-display text-xl font-bold text-foreground">
                      R$ {brl(result.appOnly.totalMonthlyCost)}/mês
                    </span>
                  </div>
                  <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-muted-foreground/70"
                      style={{ width: `${appBarPct}%` }}
                    />
                  </div>
                </div>

                {/* Barra Site Próprio */}
                <div className="rounded-xl border border-neon-pink/60 bg-card/90 p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neon-pink">
                        <Store className="h-3.5 w-3.5" aria-hidden="true" />
                        Site próprio NovaesWeb (100% vendas diretas)
                      </span>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        Novaes Business R$ {brl(input.siteMonthlyCost)}/mês + pagamento{" "}
                        {input.sitePaymentFeePct}% + divulgação R${" "}
                        {brl(input.siteMarketingInvestment)}
                      </p>
                    </div>
                    <span className="font-display text-xl font-bold text-neon">
                      R$ {brl(result.directOnly.totalMonthlyCost)}/mês
                    </span>
                  </div>
                  <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-neon"
                      style={{ width: `${siteBarPct}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Resumo de diferenças (Cenário combinado vs 100% direto) */}
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-neon-violet/40 bg-card/70 p-3.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-neon-pink">
                    <TrendingDown className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Cenário combinado ({input.migratedOrdersPct}% no site)
                  </div>
                  <div className="mt-1 font-display text-lg font-bold">
                    R$ {brl(result.combined.monthlyDifferenceVsAppOnly)}/mês
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    R$ {brl(result.combined.annualDifferenceVsAppOnly)}/ano mantendo{" "}
                    {result.combined.remainingAppPct}% no aplicativo
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card/70 p-3.5">
                  <div className="text-xs font-semibold text-muted-foreground">
                    Comparação direta (100% canal próprio)
                  </div>
                  <div className="mt-1 font-display text-lg font-bold text-neon">
                    R$ {brl(result.directComparison.monthlyDifference)}/mês
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    Diferença anual estimada: R$ {brl(result.directComparison.annualDifference)}
                  </p>
                </div>
              </div>

              <p className="mt-4 flex items-start gap-2 text-[11px] leading-relaxed text-muted-foreground">
                <ShieldAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neon-pink" aria-hidden="true" />
                <span>
                  Simulação meramente ilustrativa, não representa promessa de lucro garantido ou
                  migração automática de clientes. Custos de entrega, divulgação, meios de pagamento e
                  criação única do site variam conforme cada operação.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
