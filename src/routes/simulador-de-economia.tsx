import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Calculator,
  CheckCircle2,
  HeartHandshake,
  Info,
  MessageCircle,
  RotateCcw,
  Scale,
  ShieldAlert,
  Sparkles,
  Store,
  Smartphone,
  TrendingDown,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { brl } from "@/data/plans";
import {
  buildSimulatorWhatsLink,
  calculateEconomySimulation,
  defaultSimulationInput,
  platformPresets,
  sitePlanOptions,
  type PlatformId,
  type SimulationInput,
  type SitePlanPresetId,
} from "@/data/economy-simulator";

export const Route = createFileRoute("/simulador-de-economia")({
  head: () => ({
    meta: [
      { title: "Simulador de Economia NovaesWeb — Compare custos de aplicativos e site próprio" },
      {
        name: "description",
        content:
          "Compare custos, descubra oportunidades de economia e entenda as vantagens de ter seu próprio canal de vendas com o Simulador de Economia NovaesWeb.",
      },
      { property: "og:title", content: "Simulador de Economia NovaesWeb" },
      {
        property: "og:description",
        content:
          "Compare custos, descubra oportunidades de economia e entenda as vantagens de ter seu próprio canal de vendas.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://image-to-web-workshop.lovable.app/simulador-de-economia",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://image-to-web-workshop.lovable.app/simulador-de-economia",
      },
    ],
  }),
  component: SimuladorDeEconomiaPage,
});

const inputClass =
  "w-full rounded-xl border border-neon-violet/40 bg-background/80 px-4 py-2.5 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-neon-pink focus:outline-none";

function formatDiffLabel(value: number): { prefix: string; amount: string; isPositive: boolean } {
  if (value >= 0) {
    return { prefix: "R$", amount: brl(value), isPositive: true };
  }
  return { prefix: "-R$", amount: brl(Math.abs(value)), isPositive: false };
}

function SimuladorDeEconomiaPage() {
  const [inputs, setInputs] = useState<SimulationInput>(defaultSimulationInput);
  const [selectedSitePlan, setSelectedSitePlan] = useState<SitePlanPresetId>("business");
  const [shareSimulationConfirmed, setShareSimulationConfirmed] = useState(false);

  const result = calculateEconomySimulation(inputs);
  const {
    sanitizedInput: s,
    grossMonthlyRevenue,
    grossAnnualRevenue,
    appOnly,
    directOnly,
    directComparison,
    combined,
  } = result;

  const currentPlatformPreset = platformPresets[s.platform];
  const currentSitePlanObj =
    sitePlanOptions.find((o) => o.id === selectedSitePlan) ?? sitePlanOptions[0]!;

  function handlePlatformChange(platform: PlatformId) {
    const preset = platformPresets[platform];
    setInputs((prev) => ({
      ...prev,
      platform,
      platformCommissionPct: preset.commissionPct,
      platformPaymentFeePct: preset.paymentFeePct,
      platformMonthlyFee: preset.monthlyFee,
    }));
  }

  function handleSitePlanChange(planId: SitePlanPresetId) {
    setSelectedSitePlan(planId);
    const found = sitePlanOptions.find((o) => o.id === planId);
    if (found && planId !== "custom") {
      setInputs((prev) => ({
        ...prev,
        siteMonthlyCost: found.monthly,
        siteIncludedOrders: found.includedOrders,
        siteOverageOrderPrice: found.overageOrderPrice,
      }));
    }
  }

  function updateNumberField<K extends keyof SimulationInput>(key: K, rawValue: string) {
    const parsed = rawValue === "" ? 0 : Number(rawValue.replace(",", "."));
    const numericVal = Number.isNaN(parsed) ? 0 : parsed;

    if (
      key === "siteMonthlyCost" ||
      key === "siteIncludedOrders" ||
      key === "siteOverageOrderPrice"
    ) {
      const nextMonthly = key === "siteMonthlyCost" ? numericVal : inputs.siteMonthlyCost;
      const nextIncluded = key === "siteIncludedOrders" ? numericVal : inputs.siteIncludedOrders;
      const nextOverage =
        key === "siteOverageOrderPrice" ? numericVal : inputs.siteOverageOrderPrice;

      const matchingPlan = sitePlanOptions.find(
        (p) =>
          p.id !== "custom" &&
          p.monthly === nextMonthly &&
          p.includedOrders === nextIncluded &&
          p.overageOrderPrice === nextOverage,
      );
      setSelectedSitePlan(matchingPlan ? matchingPlan.id : "custom");
    }

    setInputs((prev) => ({
      ...prev,
      [key]: numericVal,
    }));
  }

  function resetDefaults() {
    setInputs(defaultSimulationInput);
    setSelectedSitePlan("business");
  }

  // Escala dos gráficos comparativos
  const maxCost = Math.max(
    appOnly.totalMonthlyCost,
    combined.totalCombinedMonthlyCost,
    directOnly.totalMonthlyCost,
    1,
  );
  const appBarWidth = Math.max(4, Math.round((appOnly.totalMonthlyCost / maxCost) * 100));
  const combinedBarWidth = Math.max(
    4,
    Math.round((combined.totalCombinedMonthlyCost / maxCost) * 100),
  );
  const directBarWidth = Math.max(
    4,
    Math.round((directOnly.totalMonthlyCost / maxCost) * 100),
  );

  const combinedMonthlyFormatted = formatDiffLabel(combined.monthlyDifferenceVsAppOnly);
  const combinedAnnualFormatted = formatDiffLabel(combined.annualDifferenceVsAppOnly);
  const directMonthlyFormatted = formatDiffLabel(directComparison.monthlyDifference);
  const directAnnualFormatted = formatDiffLabel(directComparison.annualDifference);

  const whatsQuoteHref = buildSimulatorWhatsLink(result, shareSimulationConfirmed);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader active="Simulador" />

      {/* Cabeçalho da Página */}
      <section className="relative border-b border-border/40">
        <div className="mx-auto max-w-[1800px] px-4 pb-12 pt-12 sm:px-8 xl:px-14">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-neon-pink px-4 py-1 text-xs font-semibold tracking-[0.2em] text-neon-pink">
              <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
              FERRAMENTA DE PLANEJAMENTO COMERCIAL
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] sm:text-5xl md:text-6xl">
              Simulador de Economia <span className="text-neon">NovaesWeb</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Compare custos, descubra oportunidades de economia e entenda as vantagens de ter seu
              próprio canal de vendas.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-card/80 p-4">
              <HeartHandshake className="mt-0.5 h-7 w-7 shrink-0 text-neon-pink" aria-hidden="true" />
              <div>
                <h2 className="text-sm font-bold">Relacionamento direto</h2>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Construa recorrência falando diretamente com quem compra do seu negócio.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-card/80 p-4">
              <Sparkles className="mt-0.5 h-7 w-7 shrink-0 text-neon-pink" aria-hidden="true" />
              <div>
                <h2 className="text-sm font-bold">Marca em evidência</h2>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Seu cardápio ou catálogo com a identidade visual da sua empresa, sem concorrentes
                  na mesma tela.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 rounded-2xl border border-border bg-card/80 p-4">
              <Scale className="mt-0.5 h-7 w-7 shrink-0 text-neon-emerald" aria-hidden="true" />
              <div>
                <h2 className="text-sm font-bold">Simulação transparente</h2>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Todos os campos são editáveis, incluindo franquia de pedidos aceitos, excedentes e
                  transição gradual entre canais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Painel de Configuração + Resultados em Tempo Real */}
      <section
        aria-label="Parâmetros e resultados da simulação"
        className="mx-auto max-w-[1800px] px-4 py-12 sm:px-8 xl:px-14"
      >
        <div className="grid gap-8 xl:grid-cols-12">
          {/* Coluna Esquerda: Campos Editáveis */}
          <div className="xl:col-span-5">
            <div className="rounded-3xl border border-neon-violet/40 bg-card p-6 shadow-neon sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-neon-pink">
                    DADOS DA SIMULAÇÃO
                  </span>
                  <h2 className="mt-1 text-xl font-bold sm:text-2xl">
                    Personalize com os números do seu negócio
                  </h2>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={resetDefaults}
                  className="min-h-10 h-auto rounded-full border border-border px-3.5 py-2 text-xs font-semibold text-muted-foreground hover:border-neon-pink hover:text-neon-pink"
                >
                  <RotateCcw className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                  Restaurar exemplo
                </Button>
              </div>

              <div className="mt-6 space-y-6">
                {/* 1. Plataforma e Volume */}
                <fieldset className="space-y-4">
                  <legend className="text-sm font-bold uppercase tracking-wider text-neon-pink">
                    1. Plataforma e volume mensal
                  </legend>

                  <div>
                    <label htmlFor="sim-platform" className="block text-sm font-medium">
                      Plataforma de referência
                    </label>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {(["ifood", "99food", "custom"] as const).map((platId) => {
                        const active = s.platform === platId;
                        return (
                          <button
                            key={platId}
                            type="button"
                            aria-pressed={active}
                            onClick={() => handlePlatformChange(platId)}
                            className={`min-h-11 rounded-xl border px-3 py-2 text-xs font-semibold transition sm:text-sm ${
                              active
                                ? "border-neon-pink bg-neon text-primary-foreground shadow-neon"
                                : "border-border bg-background/60 text-muted-foreground hover:border-neon-pink/60 hover:text-foreground"
                            }`}
                          >
                            {platformPresets[platId].shortLabel}
                          </button>
                        );
                      })}
                    </div>
                    <select
                      id="sim-platform"
                      aria-label="Selecionar plataforma de delivery"
                      value={s.platform}
                      onChange={(e) => handlePlatformChange(e.target.value as PlatformId)}
                      className="sr-only"
                    >
                      <option value="ifood">iFood</option>
                      <option value="99food">99Food</option>
                      <option value="custom">Taxa personalizada</option>
                    </select>
                    <p className="mt-2 rounded-xl border border-border/60 bg-background/50 p-3 text-xs leading-relaxed text-muted-foreground">
                      <Info className="mr-1.5 inline h-3.5 w-3.5 text-neon-pink" aria-hidden="true" />
                      {currentPlatformPreset.referenceNote}
                    </p>
                    {s.platform === "ifood" && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setInputs((prev) => ({
                              ...prev,
                              platformCommissionPct: 12,
                              platformPaymentFeePct: 3.2,
                              platformMonthlyFee: 110,
                            }))
                          }
                          className="rounded-full border border-neon-violet/50 bg-background/60 px-3 py-1 text-[11px] font-medium text-muted-foreground hover:border-neon-pink hover:text-foreground"
                        >
                          Usar ref. Plano Básico (12% + 3,2% + R$ 110)
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setInputs((prev) => ({
                              ...prev,
                              platformCommissionPct: 23,
                              platformPaymentFeePct: 3.2,
                              platformMonthlyFee: 150,
                            }))
                          }
                          className="rounded-full border border-neon-violet/50 bg-background/60 px-3 py-1 text-[11px] font-medium text-muted-foreground hover:border-neon-pink hover:text-foreground"
                        >
                          Usar ref. Plano Entrega (23% + 3,2% + R$ 150)
                        </button>
                      </div>
                    )}
                    {s.platform === "99food" && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setInputs((prev) => ({
                              ...prev,
                              platformCommissionPct: 8.9,
                              platformPaymentFeePct: 3.2,
                              platformMonthlyFee: 0,
                            }))
                          }
                          className="rounded-full border border-neon-violet/50 bg-background/60 px-3 py-1 text-[11px] font-medium text-muted-foreground hover:border-neon-pink hover:text-foreground"
                        >
                          Usar ref. Entrega Própria (8,9% + 3,2% + R$ 0)
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setInputs((prev) => ({
                              ...prev,
                              platformCommissionPct: 12,
                              platformPaymentFeePct: 3.2,
                              platformMonthlyFee: 0,
                            }))
                          }
                          className="rounded-full border border-neon-violet/50 bg-background/60 px-3 py-1 text-[11px] font-medium text-muted-foreground hover:border-neon-pink hover:text-foreground"
                        >
                          Usar ref. Entrega Parceira (12% + 3,2% + R$ 0)
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="sim-monthly-orders" className="block text-sm font-medium">
                        Quantidade de pedidos mensais
                      </label>
                      <input
                        id="sim-monthly-orders"
                        type="number"
                        min={0}
                        max={100000}
                        step={10}
                        value={inputs.monthlyOrders}
                        onChange={(e) => updateNumberField("monthlyOrders", e.target.value)}
                        className={`mt-1.5 ${inputClass}`}
                      />
                    </div>
                    <div>
                      <label htmlFor="sim-average-ticket" className="block text-sm font-medium">
                        Valor médio de cada pedido (R$)
                      </label>
                      <input
                        id="sim-average-ticket"
                        type="number"
                        min={0}
                        max={10000}
                        step={1}
                        value={inputs.averageTicket}
                        onChange={(e) => updateNumberField("averageTicket", e.target.value)}
                        className={`mt-1.5 ${inputClass}`}
                      />
                    </div>
                  </div>
                </fieldset>

                {/* 2. Custos na Plataforma de Delivery */}
                <fieldset className="space-y-4 border-t border-border pt-5">
                  <legend className="text-sm font-bold uppercase tracking-wider text-neon-pink">
                    2. Taxas e custos no aplicativo
                  </legend>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="sim-platform-commission" className="block text-sm font-medium">
                        Comissão da plataforma (%)
                      </label>
                      <input
                        id="sim-platform-commission"
                        type="number"
                        min={0}
                        max={100}
                        step={0.5}
                        value={inputs.platformCommissionPct}
                        onChange={(e) => updateNumberField("platformCommissionPct", e.target.value)}
                        className={`mt-1.5 ${inputClass}`}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="sim-platform-payment-fee"
                        className="block text-sm font-medium"
                      >
                        Taxa de pagamento no app (%)
                      </label>
                      <input
                        id="sim-platform-payment-fee"
                        type="number"
                        min={0}
                        max={100}
                        step={0.1}
                        value={inputs.platformPaymentFeePct}
                        onChange={(e) => updateNumberField("platformPaymentFeePct", e.target.value)}
                        className={`mt-1.5 ${inputClass}`}
                      />
                    </div>
                    <div>
                      <label htmlFor="sim-platform-monthly" className="block text-sm font-medium">
                        Mensalidade da plataforma (R$)
                      </label>
                      <input
                        id="sim-platform-monthly"
                        type="number"
                        min={0}
                        max={50000}
                        step={10}
                        value={inputs.platformMonthlyFee}
                        onChange={(e) => updateNumberField("platformMonthlyFee", e.target.value)}
                        className={`mt-1.5 ${inputClass}`}
                      />
                    </div>
                    <div>
                      <label htmlFor="sim-app-additional" className="block text-sm font-medium">
                        Custos adicionais no app (R$/mês)
                      </label>
                      <input
                        id="sim-app-additional"
                        type="number"
                        min={0}
                        max={100000}
                        step={10}
                        value={inputs.appAdditionalCosts}
                        onChange={(e) => updateNumberField("appAdditionalCosts", e.target.value)}
                        className={`mt-1.5 ${inputClass}`}
                      />
                    </div>
                  </div>
                </fieldset>

                {/* 3. Custos no Site Próprio NovaesWeb */}
                <fieldset className="space-y-4 border-t border-border pt-5">
                  <legend className="text-sm font-bold uppercase tracking-wider text-neon-pink">
                    3. Custos e franquia no site próprio NovaesWeb
                  </legend>

                  <div>
                    <label htmlFor="sim-site-plan-preset" className="block text-sm font-medium">
                      Plano de referência NovaesWeb
                    </label>
                    <select
                      id="sim-site-plan-preset"
                      value={selectedSitePlan}
                      onChange={(e) => handleSitePlanChange(e.target.value as SitePlanPresetId)}
                      className={`mt-1.5 ${inputClass}`}
                    >
                      {sitePlanOptions.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {currentSitePlanObj.note}
                    </p>
                    {selectedSitePlan === "start" && (
                      <p className="mt-2 rounded-xl border border-amber-400/50 bg-amber-500/10 p-3 text-xs leading-relaxed text-amber-200">
                        <strong>Atenção:</strong> O plano <strong>Novaes Start</strong> é um site
                        institucional e não inclui sistema de pedidos online. Para receber pedidos
                        no site próprio, selecione <strong>Novaes Business</strong> (340 pedidos
                        incluídos) ou <strong>Novaes Premium</strong> (750 pedidos incluídos).
                      </p>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="sim-site-monthly-cost" className="block text-sm font-medium">
                        Mensalidade do plano NovaesWeb (R$)
                      </label>
                      <input
                        id="sim-site-monthly-cost"
                        type="number"
                        min={0}
                        max={50000}
                        step={10}
                        value={inputs.siteMonthlyCost}
                        onChange={(e) => updateNumberField("siteMonthlyCost", e.target.value)}
                        className={`mt-1.5 ${inputClass}`}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="sim-site-included-orders"
                        className="block text-sm font-medium"
                      >
                        Pedidos aceitos incluídos/mês (franquia)
                      </label>
                      <input
                        id="sim-site-included-orders"
                        type="number"
                        min={0}
                        max={1000000}
                        step={10}
                        value={inputs.siteIncludedOrders}
                        onChange={(e) => updateNumberField("siteIncludedOrders", e.target.value)}
                        className={`mt-1.5 ${inputClass}`}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="sim-site-overage-price"
                        className="block text-sm font-medium"
                      >
                        Pedido aceito excedente (R$/pedido)
                      </label>
                      <input
                        id="sim-site-overage-price"
                        type="number"
                        min={0}
                        max={100}
                        step={0.05}
                        value={inputs.siteOverageOrderPrice}
                        onChange={(e) =>
                          updateNumberField("siteOverageOrderPrice", e.target.value)
                        }
                        className={`mt-1.5 ${inputClass}`}
                      />
                    </div>
                    <div>
                      <label htmlFor="sim-site-payment-fee" className="block text-sm font-medium">
                        Taxa de pagamento pelo site (%)
                      </label>
                      <input
                        id="sim-site-payment-fee"
                        type="number"
                        min={0}
                        max={100}
                        step={0.1}
                        value={inputs.sitePaymentFeePct}
                        onChange={(e) => updateNumberField("sitePaymentFeePct", e.target.value)}
                        className={`mt-1.5 ${inputClass}`}
                      />
                    </div>
                    <div>
                      <label htmlFor="sim-site-marketing" className="block text-sm font-medium">
                        Investimento em divulgação do site (R$)
                      </label>
                      <input
                        id="sim-site-marketing"
                        type="number"
                        min={0}
                        max={100000}
                        step={25}
                        value={inputs.siteMarketingInvestment}
                        onChange={(e) =>
                          updateNumberField("siteMarketingInvestment", e.target.value)
                        }
                        className={`mt-1.5 ${inputClass}`}
                      />
                    </div>
                    <div>
                      <label htmlFor="sim-site-additional" className="block text-sm font-medium">
                        Custos adicionais no site (R$/mês)
                      </label>
                      <input
                        id="sim-site-additional"
                        type="number"
                        min={0}
                        max={100000}
                        step={10}
                        value={inputs.siteAdditionalCosts}
                        onChange={(e) => updateNumberField("siteAdditionalCosts", e.target.value)}
                        className={`mt-1.5 ${inputClass}`}
                      />
                    </div>
                  </div>
                </fieldset>

                {/* 4. Percentual de Direcionamento para o Site Próprio */}
                <fieldset className="space-y-3 border-t border-border pt-5">
                  <legend className="text-sm font-bold uppercase tracking-wider text-neon-pink">
                    4. Meta de transição gradual (Cenário Combinado)
                  </legend>

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <label htmlFor="sim-migrated-pct" className="text-sm font-medium">
                        Percentual de pedidos direcionados para o site próprio (%)
                      </label>
                      <span className="rounded-full bg-neon px-3 py-0.5 text-xs font-bold text-primary-foreground">
                        {s.migratedOrdersPct}% no site · {combined.remainingAppPct}% no app
                      </span>
                    </div>

                    <div className="mt-3 flex items-center gap-4">
                      <input
                        id="sim-migrated-pct-range"
                        aria-label="Controle deslizante do percentual de pedidos no site próprio"
                        type="range"
                        min={0}
                        max={100}
                        step={5}
                        value={s.migratedOrdersPct}
                        onChange={(e) => updateNumberField("migratedOrdersPct", e.target.value)}
                        className="h-2 flex-1 cursor-pointer accent-neon-pink"
                      />
                      <input
                        id="sim-migrated-pct"
                        type="number"
                        min={0}
                        max={100}
                        step={1}
                        value={inputs.migratedOrdersPct}
                        onChange={(e) => updateNumberField("migratedOrdersPct", e.target.value)}
                        className="w-24 rounded-xl border border-neon-violet/40 bg-background/80 px-3 py-2 text-center text-sm font-bold text-foreground focus:border-neon-pink focus:outline-none"
                      />
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Equivale a <strong>{combined.siteOrders} pedidos/mês</strong> pelo site
                      próprio (R$ {brl(combined.siteRevenue)}) e{" "}
                      <strong>{combined.appOrders} pedidos/mês</strong> permanecendo no aplicativo
                      (R$ {brl(combined.appRevenue)}).
                    </p>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Resultados, Cards Lado a Lado, Gráficos e Fórmulas */}
          <div className="space-y-8 xl:col-span-7">
            {/* Faixa Superior de Faturamento Bruto Considerado */}
            <div className="grid gap-4 rounded-2xl border border-neon-violet/40 bg-card/90 p-5 shadow-neon sm:grid-cols-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Faturamento bruto considerado
                </span>
                <div className="mt-1 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                  R$ {brl(grossMonthlyRevenue)}
                  <span className="text-xs font-normal text-muted-foreground">/mês</span>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  R$ {brl(grossAnnualRevenue)}/ano ({s.monthlyOrders} pedidos × R${" "}
                  {brl(s.averageTicket)})
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-neon-emerald">
                  Diferença mensal ({s.migratedOrdersPct}% no site)
                </span>
                <div className="mt-1 font-display text-2xl font-extrabold text-neon-emerald sm:text-3xl">
                  {combinedMonthlyFormatted.prefix} {combinedMonthlyFormatted.amount}
                  <span className="text-xs font-normal text-muted-foreground">/mês</span>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {combinedMonthlyFormatted.isPositive
                    ? "Redução estimada no cenário combinado"
                    : "Custo superior com os parâmetros atuais"}
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-neon-pink">
                  Diferença anual ({s.migratedOrdersPct}% no site)
                </span>
                <div className="mt-1 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                  {combinedAnnualFormatted.prefix} {combinedAnnualFormatted.amount}
                  <span className="text-xs font-normal text-muted-foreground">/ano</span>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Em 100% vendas diretas: {directAnnualFormatted.prefix}{" "}
                  {directAnnualFormatted.amount}/ano
                </p>
              </div>
            </div>

            {/* 3 Cards Lado a Lado: 1. Aplicativos | 2. Site Próprio | 3. Resultado da Simulação */}
            <div>
              <h2 className="text-xl font-bold sm:text-2xl">
                Comparação visual entre canais
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Veja lado a lado os custos estimados mantendo 100% dos pedidos no aplicativo, 100%
                em vendas diretas pelo site e o resultado da simulação.
              </p>

              <div className="mt-4 grid gap-5 lg:grid-cols-3">
                {/* Card 1: Aplicativos de delivery */}
                <article className="flex flex-col rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2.5">
                    <Smartphone className="h-6 w-6 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        CANAL 1 · 100% NO APP
                      </span>
                      <h3 className="text-lg font-bold">Aplicativos de delivery</h3>
                    </div>
                  </div>

                  <div className="mt-4 border-y border-border/60 py-3">
                    <span className="text-xs text-muted-foreground">
                      Custos estimados com o aplicativo
                    </span>
                    <div className="mt-1 font-display text-3xl font-extrabold">
                      R$ {brl(appOnly.totalMonthlyCost)}
                      <span className="text-xs font-normal text-muted-foreground">/mês</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Equivale a {brl(appOnly.effectiveRatePct)}% do faturamento bruto
                    </span>
                  </div>

                  <dl className="mt-4 flex-1 space-y-2 text-xs">
                    <div className="flex justify-between gap-2">
                      <dt className="text-muted-foreground">
                        Comissão ({s.platformCommissionPct}%)
                      </dt>
                      <dd className="font-semibold">R$ {brl(appOnly.commissionCost)}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-muted-foreground">
                        Taxa de pagamento ({s.platformPaymentFeePct}%)
                      </dt>
                      <dd className="font-semibold">R$ {brl(appOnly.paymentFeeCost)}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-muted-foreground">Mensalidade da plataforma</dt>
                      <dd className="font-semibold">R$ {brl(appOnly.monthlyFeeCost)}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-muted-foreground">Custos adicionais no app</dt>
                      <dd className="font-semibold">R$ {brl(appOnly.additionalCost)}</dd>
                    </div>
                  </dl>
                </article>

                {/* Card 2: Site próprio NovaesWeb */}
                <article className="flex flex-col rounded-2xl border border-neon-violet/60 bg-card p-5">
                  <div className="flex items-center gap-2.5">
                    <Store className="h-6 w-6 shrink-0 text-neon-emerald" aria-hidden="true" />
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-neon-emerald">
                        CANAL 2 · 100% DIRETO
                      </span>
                      <h3 className="text-lg font-bold">Site próprio NovaesWeb</h3>
                    </div>
                  </div>

                  <div className="mt-4 border-y border-border/60 py-3">
                    <span className="text-xs text-muted-foreground">
                      Custos estimados com vendas diretas
                    </span>
                    <div className="mt-1 font-display text-3xl font-extrabold text-neon-emerald">
                      R$ {brl(directOnly.totalMonthlyCost)}
                      <span className="text-xs font-normal text-muted-foreground">/mês</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Equivale a {brl(directOnly.effectiveRatePct)}% do faturamento bruto
                    </span>
                  </div>

                  <dl className="mt-4 flex-1 space-y-2 text-xs">
                    <div className="flex justify-between gap-2">
                      <dt className="text-muted-foreground">Comissão sobre o valor da venda</dt>
                      <dd className="font-semibold text-neon-emerald">R$ 0,00 (0%)</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-muted-foreground">Mensalidade do site NovaesWeb</dt>
                      <dd className="font-semibold">R$ {brl(directOnly.monthlyFeeCost)}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-muted-foreground">
                        Pedidos excedentes (
                        {s.siteIncludedOrders > 0
                          ? `${directOnly.overageOrders} após ${s.siteIncludedOrders} incluídos`
                          : "sem franquia ativa"}
                        )
                      </dt>
                      <dd className="font-semibold">R$ {brl(directOnly.overageCost)}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-muted-foreground">
                        Taxa de pagamento no site ({s.sitePaymentFeePct}%)
                      </dt>
                      <dd className="font-semibold">R$ {brl(directOnly.paymentFeeCost)}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-muted-foreground">Investimento em divulgação</dt>
                      <dd className="font-semibold">R$ {brl(directOnly.marketingCost)}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-muted-foreground">Custos adicionais no site</dt>
                      <dd className="font-semibold">R$ {brl(directOnly.additionalCost)}</dd>
                    </div>
                  </dl>
                </article>

                {/* Card 3: Resultado da simulação */}
                <article className="flex flex-col rounded-2xl border-2 border-neon-pink bg-card p-5 shadow-neon">
                  <div className="flex items-center gap-2.5">
                    <TrendingDown className="h-6 w-6 shrink-0 text-neon-pink" aria-hidden="true" />
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-neon-pink">
                        SÍNTESE COMPARATIVA
                      </span>
                      <h3 className="text-lg font-bold">Resultado da simulação</h3>
                    </div>
                  </div>

                  <div className="mt-4 border-y border-border/60 py-3">
                    <span className="text-xs text-muted-foreground">
                      Diferença mensal (100% direto vs. 100% app)
                    </span>
                    <div className="mt-1 font-display text-3xl font-extrabold text-neon">
                      {directMonthlyFormatted.prefix} {directMonthlyFormatted.amount}
                      <span className="text-xs font-normal text-muted-foreground">/mês</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Diferença anual: {directAnnualFormatted.prefix} {directAnnualFormatted.amount}
                    </span>
                  </div>

                  <div className="mt-4 flex-1 space-y-2.5 text-xs">
                    <div className="rounded-xl border border-neon-emerald/40 bg-background/70 p-3">
                      <div className="font-semibold text-neon-emerald">
                        Cenário combinado ({s.migratedOrdersPct}% migrado ao site)
                      </div>
                      <div className="mt-1 flex justify-between">
                        <span className="text-muted-foreground">Custo combinado total:</span>
                        <span className="font-bold">
                          R$ {brl(combined.totalCombinedMonthlyCost)}/mês
                        </span>
                      </div>
                      <div className="mt-1 flex justify-between">
                        <span className="text-muted-foreground">Diferença mensal estimada:</span>
                        <span className="font-bold text-neon-emerald">
                          {combinedMonthlyFormatted.prefix} {combinedMonthlyFormatted.amount}
                        </span>
                      </div>
                      <div className="mt-1 flex justify-between">
                        <span className="text-muted-foreground">Diferença anual estimada:</span>
                        <span className="font-bold">
                          {combinedAnnualFormatted.prefix} {combinedAnnualFormatted.amount}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            {/* Gráficos Simples e Responsivos + Detalhamento do Cenário Combinado */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-2.5">
                <BarChart3 className="h-6 w-6 text-neon-pink" aria-hidden="true" />
                <div>
                  <h2 className="text-lg font-bold sm:text-xl">
                    Gráfico comparativo e Cenário Combinado ({combined.remainingAppPct}% App +{" "}
                    {s.migratedOrdersPct}% Site)
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Simulação realista onde parte dos pedidos permanece nos aplicativos e parte
                    acontece pelo site próprio.
                  </p>
                </div>
              </div>

              {/* Barra de Divisão dos Pedidos */}
              <div className="mt-5">
                <div className="flex flex-wrap justify-between gap-2 text-xs font-semibold">
                  <span className="text-muted-foreground">
                    No aplicativo: {combined.remainingAppPct}% ({combined.appOrders} pedidos · R${" "}
                    {brl(combined.appRevenue)})
                  </span>
                  <span className="text-neon-emerald">
                    No site próprio: {s.migratedOrdersPct}% ({combined.siteOrders} pedidos · R${" "}
                    {brl(combined.siteRevenue)})
                  </span>
                </div>
                <div
                  className="mt-2 flex h-4 w-full overflow-hidden rounded-full bg-secondary"
                  role="img"
                  aria-label={`Divisão de pedidos: ${combined.remainingAppPct}% no aplicativo e ${s.migratedOrdersPct}% no site próprio`}
                >
                  <div
                    className="h-full bg-muted-foreground/60 transition-all"
                    style={{ width: `${combined.remainingAppPct}%` }}
                  />
                  <div
                    className="h-full bg-neon transition-all"
                    style={{ width: `${s.migratedOrdersPct}%` }}
                  />
                </div>
              </div>

              {/* Gráfico de Barras Comparando Custos Mensais nos 3 Cenários */}
              <div
                className="mt-6 space-y-4"
                role="region"
                aria-label="Gráfico de comparação de custos mensais"
              >
                <div>
                  <div className="flex justify-between text-xs">
                    <span className="font-medium">1. Mantendo 100% dos pedidos no aplicativo</span>
                    <span className="font-bold">R$ {brl(appOnly.totalMonthlyCost)}/mês</span>
                  </div>
                  <div className="mt-1.5 h-3.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-muted-foreground/75 transition-all"
                      style={{ width: `${appBarWidth}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-neon-pink">
                      2. Cenário combinado ({combined.remainingAppPct}% no app +{" "}
                      {s.migratedOrdersPct}% no site próprio)
                    </span>
                    <span className="font-bold text-neon-pink">
                      R$ {brl(combined.totalCombinedMonthlyCost)}/mês
                    </span>
                  </div>
                  <div className="mt-1.5 h-3.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-neon-violet transition-all"
                      style={{ width: `${combinedBarWidth}%` }}
                    />
                  </div>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Parcela no app: R$ {brl(combined.appPortionCost)} (taxas variáveis R${" "}
                    {brl(combined.appVariableCost)} + fixos R$ {brl(combined.appFixedCost)}) ·
                    Parcela no site: R$ {brl(combined.sitePortionCost)} (pagamento R${" "}
                    {brl(combined.siteVariableCost)} + excedentes R${" "}
                    {brl(combined.siteOverageCost)} + fixos R$ {brl(combined.siteFixedCost)})
                  </p>
                </div>

                <div>
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-neon-emerald">
                      3. Recebendo 100% desse volume pelo site próprio
                    </span>
                    <span className="font-bold text-neon-emerald">
                      R$ {brl(directOnly.totalMonthlyCost)}/mês
                    </span>
                  </div>
                  <div className="mt-1.5 h-3.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-neon transition-all"
                      style={{ width: `${directBarWidth}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Detalhamento das Fórmulas e Premissas */}
            <details className="group rounded-2xl border border-border bg-card p-6" open>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold sm:text-xl">
                    Detalhamento das fórmulas e premissas de cálculo
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Confira exatamente como cada valor acima foi calculado, sem arredondamentos
                    ocultos.
                  </p>
                </div>
                <span className="rounded-full border border-neon-pink px-3 py-1 text-xs font-semibold text-neon-pink">
                  Memória de cálculo
                </span>
              </summary>

              <div className="mt-5 grid gap-4 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground sm:grid-cols-2">
                <div className="rounded-xl border border-border/60 bg-background/50 p-4">
                  <h3 className="font-bold text-foreground">Fórmulas aplicadas</h3>
                  <ul className="mt-2 space-y-1.5">
                    <li>
                      • <strong>Faturamento bruto mensal:</strong> Pedidos mensais (
                      {s.monthlyOrders}) × Valor médio (R$ {brl(s.averageTicket)}) ={" "}
                      <strong className="text-foreground">R$ {brl(grossMonthlyRevenue)}</strong>.
                    </li>
                    <li>
                      • <strong>Custos no aplicativo (100%):</strong> Faturamento × (
                      {s.platformCommissionPct}% + {s.platformPaymentFeePct}%) + Mensalidade (R${" "}
                      {brl(appOnly.monthlyFeeCost)}) + Adicionais no app (R${" "}
                      {brl(appOnly.additionalCost)}) ={" "}
                      <strong className="text-foreground">
                        R$ {brl(appOnly.totalMonthlyCost)}/mês
                      </strong>
                      .
                    </li>
                    <li>
                      • <strong>Custos em vendas diretas (100%):</strong> Faturamento ×{" "}
                      {s.sitePaymentFeePct}% + Mensalidade do site (R${" "}
                      {brl(directOnly.monthlyFeeCost)}) + Excedentes de pedidos (
                      {directOnly.overageOrders} × R$ {brl(s.siteOverageOrderPrice)} = R${" "}
                      {brl(directOnly.overageCost)}) + Divulgação (R${" "}
                      {brl(directOnly.marketingCost)}) + Adicionais no site (R${" "}
                      {brl(directOnly.additionalCost)}) ={" "}
                      <strong className="text-foreground">
                        R$ {brl(directOnly.totalMonthlyCost)}/mês
                      </strong>
                      .
                    </li>
                    <li>
                      • <strong>Cenário combinado ({s.migratedOrdersPct}% no site):</strong> Soma os
                      custos variáveis e fixos da parcela que permanece no aplicativo (R${" "}
                      {brl(combined.appPortionCost)}) com os custos variáveis, excedentes de
                      pedidos (R$ {brl(combined.siteOverageCost)}) e fixos da parcela atendida no
                      site próprio (R$ {brl(combined.sitePortionCost)}) ={" "}
                      <strong className="text-foreground">
                        R$ {brl(combined.totalCombinedMonthlyCost)}/mês
                      </strong>
                      .
                    </li>
                    <li>
                      • <strong>Diferença anual:</strong> Diferença mensal multiplicada por 12
                      meses.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-border/60 bg-background/50 p-4">
                  <h3 className="font-bold text-foreground">Premissas e custos operacionais</h3>
                  <ul className="mt-2 space-y-1.5">
                    <li>
                      • <strong>Franquia de pedidos aceitos e excedentes:</strong> No Business são
                      incluídos 340 pedidos aceitos/mês (excedente R$ 0,20/pedido) e no Premium 750
                      pedidos aceitos/mês (excedente R$ 0,15/pedido), sem bloqueio de vendas ao
                      ultrapassar a franquia.
                    </li>
                    <li>
                      • <strong>Taxa de criação única do site:</strong> A implantação inicial do
                      site NovaesWeb é cobrada uma única vez (ex.: R$ 578,00 no Business, R$ 980,00
                      no Premium ou R$ 630,00 no Start) e não faz parte da mensalidade recorrente.
                    </li>
                    <li>
                      • <strong>Custos fixos no cenário combinado:</strong> Enquanto o negócio
                      mantiver operação simultânea no aplicativo e no site próprio, as mensalidades
                      e custos fixos de ambos os canais permanecem contabilizados integralmente.
                    </li>
                    <li>
                      • <strong>Logística e entrega:</strong> Caso você utilize entregadores
                      parceiros do aplicativo hoje e passe a operar entrega própria no site, inclua
                      a diferença operacional no campo{" "}
                      <em>Custos adicionais no site (R$/mês)</em>.
                    </li>
                  </ul>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Seção de Transparência e Modelo Comercial */}
      <section
        aria-labelledby="transparencia-heading"
        className="mx-auto max-w-[1800px] px-4 pb-12 sm:px-8 xl:px-14"
      >
        <div className="rounded-2xl border border-border bg-card/80 p-6 sm:p-8">
          <div className="flex items-start gap-3.5">
            <ShieldAlert className="mt-1 h-7 w-7 shrink-0 text-neon-pink" aria-hidden="true" />
            <div>
              <h2 id="transparencia-heading" className="text-xl font-bold">
                Compromisso de transparência NovaesWeb
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Informações importantes para uma decisão comercial consciente e segura:
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 text-xs leading-relaxed text-muted-foreground sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border/60 bg-background/50 p-4">
              <strong className="block text-foreground">
                1. Estimativa matemática, não lucro garantido
              </strong>
              Os resultados exibidos representam uma estimativa matemática baseada exclusivamente
              nos dados informados por você nos campos acima, não configurando promessa de lucro
              líquido ou garantia financeira.
            </div>
            <div className="rounded-xl border border-border/60 bg-background/50 p-4">
              <strong className="block text-foreground">
                2. Sem promessa de vendas automáticas
              </strong>
              Ter um site próprio fortalece sua marca e facilita o atendimento direto, mas não gera
              aumento automático de pedidos nem garante fidelização vitalícia sem trabalho contínuo
              de divulgação, produto e atendimento.
            </div>
            <div className="rounded-xl border border-border/60 bg-background/50 p-4">
              <strong className="block text-foreground">
                3. Migração gradual de clientes
              </strong>
              Não afirmamos que todos os clientes dos aplicativos migrarão para o seu site. Os
              aplicativos continuam sendo um canal de descoberta; por isso destacamos o Cenário
              Combinado de convivência entre canais.
            </div>
            <div className="rounded-xl border border-border/60 bg-background/50 p-4">
              <strong className="block text-foreground">
                4. Custos de operação, entrega e divulgação
              </strong>
              Vendas diretas podem envolver investimentos em tráfego pago, embalagens, motoboys,
              taxas de meios de pagamento (Pix/cartão) e operação de atendimento. Utilize os campos
              de divulgação e custos adicionais para refletir sua realidade.
            </div>
            <div className="rounded-xl border border-border/60 bg-background/50 p-4">
              <strong className="block text-foreground">
                5. Taxas das plataformas são variáveis
              </strong>
              Os valores iniciais de iFood e 99Food são referências ilustrativas e totalmente
              editáveis. Verifique sempre o extrato e o contrato vigente da sua loja na plataforma.
            </div>
            <div className="rounded-xl border border-border/60 bg-background/50 p-4">
              <strong className="block text-foreground">
                6. Licença de uso e titularidade
              </strong>
              A contratação segue o modelo comercial de licença de uso dos sistemas e recursos
              conforme a proposta e os{" "}
              <Link to="/termos" className="underline underline-offset-4 hover:text-neon-pink">
                Termos de Serviço
              </Link>
              , respeitando a identidade, a marca e os dados do cliente.
            </div>
          </div>
        </div>
      </section>

      {/* Seção Final de Conversão */}
      <section
        aria-labelledby="conversao-simulador-heading"
        className="mx-auto max-w-[1800px] px-4 pb-16 sm:px-8 xl:px-14"
      >
        <div className="rounded-3xl border-2 border-neon-pink bg-card p-7 shadow-neon sm:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-block rounded-full bg-neon px-3.5 py-1 text-xs font-semibold tracking-widest text-primary-foreground">
                PRÓXIMO PASSO
              </span>
              <h2
                id="conversao-simulador-heading"
                className="mt-4 text-3xl font-extrabold sm:text-4xl"
              >
                Pronto para fortalecer as vendas diretas do seu negócio?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Tenha um site profissional com a identidade da sua empresa e um canal próprio para
                atender seus clientes.
              </p>

              {/* Confirmação explícita antes de compartilhar dados da simulação */}
              <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-2xl border border-neon-violet/50 bg-background/70 p-4 text-sm">
                <input
                  type="checkbox"
                  checked={shareSimulationConfirmed}
                  onChange={(e) => setShareSimulationConfirmed(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 accent-neon-pink"
                />
                <span>
                  <span className="font-semibold text-foreground">
                    Desejo incluir os dados desta simulação na mensagem de orçamento pelo WhatsApp
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    Opcional. Marcando esta opção, o resumo numérico simulado acima será preenchido
                    automaticamente na sua conversa do WhatsApp para agilizar o atendimento. Nenhum
                    dado da simulação é salvo ou enviado sem a sua confirmação.
                  </span>
                </span>
              </label>
            </div>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row lg:col-span-5 lg:flex-col">
              <a
                href={whatsQuoteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-neon px-8 py-4 text-center font-semibold shadow-neon transition"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                Quero meu site próprio
                <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
              </a>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Link
                  to="/planos"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-2 border-neon-pink px-5 py-3 text-center text-sm font-semibold transition hover:bg-neon-pink/10"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-neon-emerald" aria-hidden="true" />
                  Ver planos e valores
                </Link>
                <a
                  href="/#cadastro"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-5 py-3 text-center text-sm font-semibold text-muted-foreground transition hover:border-neon-pink hover:text-foreground"
                >
                  Pedir contato pelo formulário
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
