import { brl, plans, whatsLink, type PlanId } from "@/data/plans";
import { commercialPlans } from "@/data/commercial-plans";

export type PlatformId = "ifood" | "99food" | "custom";

export type PlatformPreset = {
  id: PlatformId;
  label: string;
  shortLabel: string;
  commissionPct: number;
  paymentFeePct: number;
  monthlyFee: number;
  referenceNote: string;
};

export const platformPresets: Record<PlatformId, PlatformPreset> = {
  ifood: {
    id: "ifood",
    label: "iFood (referência ilustrativa editável)",
    shortLabel: "iFood",
    commissionPct: 12,
    paymentFeePct: 3.2,
    monthlyFee: 110,
    referenceNote:
      "Referência pública ilustrativa baseada nas tabelas divulgadas pelo iFood: Plano Básico (Entrega Própria) com 12% de comissão + 3,2% de taxa de pagamento online + R$ 110,00 de mensalidade (aplicável para faturamento acima de R$ 1.800/mês; isento abaixo disso). No Plano Entrega (logística parceira iFood), a referência é de 23% de comissão + 3,2% de pagamento online + R$ 150,00 de mensalidade. Condições reais variam conforme contrato e região — edite livremente.",
  },
  "99food": {
    id: "99food",
    label: "99Food / Outros apps (referência ilustrativa editável)",
    shortLabel: "99Food",
    commissionPct: 8.9,
    paymentFeePct: 3.2,
    monthlyFee: 0,
    referenceNote:
      "Valores meramente ilustrativos e editáveis baseados em referências públicas divulgadas para 99Food (comissões de referência entre 8,9% na entrega própria e 12% na entrega parceira + 3,2% de taxa de pagamento online e mensalidade R$ 0,00). A disponibilidade de operação e as taxas reais variam conforme cidade, campanha e contrato vigente.",
  },
  custom: {
    id: "custom",
    label: "Taxa personalizada",
    shortLabel: "Personalizada",
    commissionPct: 18,
    paymentFeePct: 3.5,
    monthlyFee: 100,
    referenceNote:
      "Modo livre para informar exatamente o percentual de comissão, taxa de pagamento e mensalidade cobrados pelo aplicativo ou marketplace utilizado pelo seu negócio.",
  },
};

export type SitePlanPresetId = PlanId | "custom";

export type SitePlanOption = {
  id: SitePlanPresetId;
  label: string;
  monthly: number;
  setup: number | null;
  includedOrders: number;
  overageOrderPrice: number;
  note: string;
};

const businessPlan = plans.find((p) => p.id === "business");
const premiumPlan = plans.find((p) => p.id === "premium");
const startPlan = plans.find((p) => p.id === "start");

const businessCommercial = commercialPlans.find((p) => p.id === "business");
const premiumCommercial = commercialPlans.find((p) => p.id === "premium");

export const sitePlanOptions: SitePlanOption[] = [
  {
    id: "business",
    label: `${businessPlan?.label ?? "Novaes Business"} (R$ ${brl(businessPlan?.monthly ?? 190)}/mês · ${businessCommercial?.includedOrders ?? 340} pedidos incluídos)`,
    monthly: businessPlan?.monthly ?? 190,
    setup: businessPlan?.setup ?? 578,
    includedOrders: businessCommercial?.includedOrders ?? 340,
    overageOrderPrice: businessCommercial?.overageOrderPrice ?? 0.2,
    note: `Inclui ${businessCommercial?.includedOrders ?? 340} pedidos aceitos/mês na assinatura (excedente: R$ ${brl(businessCommercial?.overageOrderPrice ?? 0.2)} por pedido aceito adicional, sem bloqueio). Criação única de R$ ${brl(businessPlan?.setup ?? 578)} cobrada à parte na implantação.`,
  },
  {
    id: "premium",
    label: `${premiumPlan?.label ?? "Novaes Premium"} (R$ ${brl(premiumPlan?.monthly ?? 270)}/mês · ${premiumCommercial?.includedOrders ?? 750} pedidos incluídos)`,
    monthly: premiumPlan?.monthly ?? 270,
    setup: premiumPlan?.setup ?? 980,
    includedOrders: premiumCommercial?.includedOrders ?? 750,
    overageOrderPrice: premiumCommercial?.overageOrderPrice ?? 0.15,
    note: `Inclui ${premiumCommercial?.includedOrders ?? 750} pedidos aceitos/mês na assinatura (excedente: R$ ${brl(premiumCommercial?.overageOrderPrice ?? 0.15)} por pedido aceito adicional, sem bloqueio). Criação única de R$ ${brl(premiumPlan?.setup ?? 980)} cobrada à parte na implantação.`,
  },
  {
    id: "start",
    label: `${startPlan?.label ?? "Novaes Start"} (R$ ${brl(startPlan?.monthly ?? 0)}/mês — site institucional sem sistema de pedidos)`,
    monthly: startPlan?.monthly ?? 0,
    setup: startPlan?.setup ?? 630,
    includedOrders: 0,
    overageOrderPrice: 0,
    note: `Site institucional com botão para WhatsApp (criação única de R$ ${brl(startPlan?.setup ?? 630)}; suporte opcional R$ ${brl(startPlan?.optionalSupportMonthly ?? 80)}/mês). Não inclui sistema de pedidos online, carrinho ou checkout.`,
  },
  {
    id: "custom",
    label: "Valor mensal e franquia personalizados",
    monthly: businessPlan?.monthly ?? 190,
    setup: null,
    includedOrders: 0,
    overageOrderPrice: 0,
    note: "Informe manualmente a mensalidade, a franquia de pedidos incluídos e o valor unitário de excedente para projetos sob medida.",
  },
];

export type SimulationInput = {
  platform: PlatformId;
  monthlyOrders: number;
  averageTicket: number;
  platformCommissionPct: number;
  platformPaymentFeePct: number;
  platformMonthlyFee: number;
  siteMonthlyCost: number;
  siteIncludedOrders: number;
  siteOverageOrderPrice: number;
  sitePaymentFeePct: number;
  siteMarketingInvestment: number;
  appAdditionalCosts: number;
  siteAdditionalCosts: number;
  migratedOrdersPct: number;
};

export const defaultSimulationInput: SimulationInput = {
  platform: "ifood",
  monthlyOrders: 300,
  averageTicket: 65,
  platformCommissionPct: platformPresets.ifood.commissionPct,
  platformPaymentFeePct: platformPresets.ifood.paymentFeePct,
  platformMonthlyFee: platformPresets.ifood.monthlyFee,
  siteMonthlyCost: businessPlan?.monthly ?? 190,
  siteIncludedOrders: businessCommercial?.includedOrders ?? 340,
  siteOverageOrderPrice: businessCommercial?.overageOrderPrice ?? 0.2,
  sitePaymentFeePct: 1.5,
  siteMarketingInvestment: 200,
  appAdditionalCosts: 0,
  siteAdditionalCosts: 0,
  migratedOrdersPct: 40,
};

export type ChannelBreakdown = {
  commissionCost: number;
  paymentFeeCost: number;
  monthlyFeeCost: number;
  overageOrders: number;
  overageCost: number;
  marketingCost: number;
  additionalCost: number;
  totalMonthlyCost: number;
  effectiveRatePct: number;
};

export type CombinedScenarioBreakdown = {
  migratedOrdersPct: number;
  remainingAppPct: number;
  siteOrders: number;
  appOrders: number;
  siteRevenue: number;
  appRevenue: number;
  appVariableCost: number;
  appFixedCost: number;
  appPortionCost: number;
  siteVariableCost: number;
  siteOverageOrders: number;
  siteOverageCost: number;
  siteFixedCost: number;
  sitePortionCost: number;
  totalCombinedMonthlyCost: number;
  monthlyDifferenceVsAppOnly: number;
  annualDifferenceVsAppOnly: number;
};

export type SimulationResult = {
  sanitizedInput: SimulationInput;
  grossMonthlyRevenue: number;
  grossAnnualRevenue: number;
  appOnly: ChannelBreakdown;
  directOnly: ChannelBreakdown;
  directComparison: {
    monthlyDifference: number;
    annualDifference: number;
  };
  combined: CombinedScenarioBreakdown;
};

export const round2 = (value: number): number => {
  if (!Number.isFinite(value)) return 0;
  return Math.round((value + Number.EPSILON) * 100) / 100;
};

const clampNonNegative = (value: number, max = 1_000_000_000): number => {
  if (!Number.isFinite(value) || Number.isNaN(value)) return 0;
  return Math.min(Math.max(0, value), max);
};

export function sanitizeSimulationInput(input: SimulationInput): SimulationInput {
  return {
    platform: input.platform in platformPresets ? input.platform : "ifood",
    monthlyOrders: Math.round(clampNonNegative(input.monthlyOrders, 1_000_000)),
    averageTicket: round2(clampNonNegative(input.averageTicket, 100_000)),
    platformCommissionPct: round2(clampNonNegative(input.platformCommissionPct, 100)),
    platformPaymentFeePct: round2(clampNonNegative(input.platformPaymentFeePct, 100)),
    platformMonthlyFee: round2(clampNonNegative(input.platformMonthlyFee, 100_000)),
    siteMonthlyCost: round2(clampNonNegative(input.siteMonthlyCost, 100_000)),
    siteIncludedOrders: Math.round(clampNonNegative(input.siteIncludedOrders, 1_000_000)),
    siteOverageOrderPrice: round2(clampNonNegative(input.siteOverageOrderPrice, 1_000)),
    sitePaymentFeePct: round2(clampNonNegative(input.sitePaymentFeePct, 100)),
    siteMarketingInvestment: round2(clampNonNegative(input.siteMarketingInvestment, 1_000_000)),
    appAdditionalCosts: round2(clampNonNegative(input.appAdditionalCosts, 1_000_000)),
    siteAdditionalCosts: round2(clampNonNegative(input.siteAdditionalCosts, 1_000_000)),
    migratedOrdersPct: round2(clampNonNegative(input.migratedOrdersPct, 100)),
  };
}

export function calculateEconomySimulation(rawInput: SimulationInput): SimulationResult {
  const s = sanitizeSimulationInput(rawInput);
  const hasOrders = s.monthlyOrders > 0 && s.averageTicket > 0;
  const grossMonthlyRevenue = round2(s.monthlyOrders * s.averageTicket);
  const grossAnnualRevenue = round2(grossMonthlyRevenue * 12);

  // 1. Cenário 100% no aplicativo
  const appCommissionCost = round2(grossMonthlyRevenue * (s.platformCommissionPct / 100));
  const appPaymentFeeCost = round2(grossMonthlyRevenue * (s.platformPaymentFeePct / 100));
  const appMonthlyFeeCost = hasOrders ? s.platformMonthlyFee : 0;
  const appAdditionalCost = hasOrders ? s.appAdditionalCosts : 0;
  const appTotalMonthlyCost = round2(
    appCommissionCost + appPaymentFeeCost + appMonthlyFeeCost + appAdditionalCost,
  );
  const appEffectiveRatePct =
    grossMonthlyRevenue > 0 ? round2((appTotalMonthlyCost / grossMonthlyRevenue) * 100) : 0;

  const appOnly: ChannelBreakdown = {
    commissionCost: appCommissionCost,
    paymentFeeCost: appPaymentFeeCost,
    monthlyFeeCost: appMonthlyFeeCost,
    overageOrders: 0,
    overageCost: 0,
    marketingCost: 0,
    additionalCost: appAdditionalCost,
    totalMonthlyCost: appTotalMonthlyCost,
    effectiveRatePct: appEffectiveRatePct,
  };

  // 2. Cenário 100% vendas diretas pelo site próprio
  const directPaymentFeeCost = round2(grossMonthlyRevenue * (s.sitePaymentFeePct / 100));
  const directMonthlyFeeCost = hasOrders ? s.siteMonthlyCost : 0;
  const directOverageOrders =
    hasOrders && s.siteIncludedOrders > 0
      ? Math.max(0, s.monthlyOrders - s.siteIncludedOrders)
      : 0;
  const directOverageCost = round2(directOverageOrders * s.siteOverageOrderPrice);
  const directMarketingCost = hasOrders ? s.siteMarketingInvestment : 0;
  const directAdditionalCost = hasOrders ? s.siteAdditionalCosts : 0;
  const directTotalMonthlyCost = round2(
    directPaymentFeeCost +
      directMonthlyFeeCost +
      directOverageCost +
      directMarketingCost +
      directAdditionalCost,
  );
  const directEffectiveRatePct =
    grossMonthlyRevenue > 0 ? round2((directTotalMonthlyCost / grossMonthlyRevenue) * 100) : 0;

  const directOnly: ChannelBreakdown = {
    commissionCost: 0,
    paymentFeeCost: directPaymentFeeCost,
    monthlyFeeCost: directMonthlyFeeCost,
    overageOrders: directOverageOrders,
    overageCost: directOverageCost,
    marketingCost: directMarketingCost,
    additionalCost: directAdditionalCost,
    totalMonthlyCost: directTotalMonthlyCost,
    effectiveRatePct: directEffectiveRatePct,
  };

  const directMonthlyDifference = round2(appOnly.totalMonthlyCost - directOnly.totalMonthlyCost);
  const directAnnualDifference = round2(directMonthlyDifference * 12);

  // 3. Cenário combinado (parte no aplicativo + parte no site próprio)
  const siteShare = s.migratedOrdersPct / 100;
  const remainingAppPct = round2(100 - s.migratedOrdersPct);
  const siteOrders = round2(s.monthlyOrders * siteShare);
  const appOrders = round2(s.monthlyOrders - siteOrders);
  const siteRevenue = round2(grossMonthlyRevenue * siteShare);
  const appRevenue = round2(grossMonthlyRevenue - siteRevenue);

  const appVariableCost = round2(
    appRevenue * ((s.platformCommissionPct + s.platformPaymentFeePct) / 100),
  );
  const appFixedCost =
    hasOrders && appOrders > 0 ? round2(s.platformMonthlyFee + s.appAdditionalCosts) : 0;
  const appPortionCost = round2(appVariableCost + appFixedCost);

  const siteVariableCost = round2(siteRevenue * (s.sitePaymentFeePct / 100));
  const siteOverageOrders =
    hasOrders && siteOrders > 0 && s.siteIncludedOrders > 0
      ? round2(Math.max(0, siteOrders - s.siteIncludedOrders))
      : 0;
  const siteOverageCost = round2(siteOverageOrders * s.siteOverageOrderPrice);
  const siteFixedCost =
    hasOrders && siteOrders > 0
      ? round2(s.siteMonthlyCost + s.siteMarketingInvestment + s.siteAdditionalCosts)
      : 0;
  const sitePortionCost = round2(siteVariableCost + siteOverageCost + siteFixedCost);

  const totalCombinedMonthlyCost = round2(appPortionCost + sitePortionCost);
  const combinedMonthlyDifference = round2(appOnly.totalMonthlyCost - totalCombinedMonthlyCost);
  const combinedAnnualDifference = round2(combinedMonthlyDifference * 12);

  return {
    sanitizedInput: s,
    grossMonthlyRevenue,
    grossAnnualRevenue,
    appOnly,
    directOnly,
    directComparison: {
      monthlyDifference: directMonthlyDifference,
      annualDifference: directAnnualDifference,
    },
    combined: {
      migratedOrdersPct: s.migratedOrdersPct,
      remainingAppPct,
      siteOrders,
      appOrders,
      siteRevenue,
      appRevenue,
      appVariableCost,
      appFixedCost,
      appPortionCost,
      siteVariableCost,
      siteOverageOrders,
      siteOverageCost,
      siteFixedCost,
      sitePortionCost,
      totalCombinedMonthlyCost,
      monthlyDifferenceVsAppOnly: combinedMonthlyDifference,
      annualDifferenceVsAppOnly: combinedAnnualDifference,
    },
  };
}

export const homepageIllustrativeExample = (() => {
  const input: SimulationInput = {
    ...defaultSimulationInput,
    monthlyOrders: 300,
    averageTicket: 65,
    platformCommissionPct: 12,
    platformPaymentFeePct: 3.2,
    platformMonthlyFee: 110,
    siteMonthlyCost: 190,
    siteIncludedOrders: 340,
    siteOverageOrderPrice: 0.2,
    sitePaymentFeePct: 1.5,
    siteMarketingInvestment: 200,
    appAdditionalCosts: 0,
    siteAdditionalCosts: 0,
    migratedOrdersPct: 40,
  };
  return {
    input,
    result: calculateEconomySimulation(input),
  };
})();

export function buildSimulatorWhatsLink(
  result: SimulationResult,
  shareSimulationData: boolean,
): string {
  if (!shareSimulationData) {
    return whatsLink(
      "Olá, NovaesWeb! Usei o Simulador de Economia no site e quero conversar sobre ter meu site próprio para fortalecer as vendas diretas do meu negócio.",
    );
  }

  const { sanitizedInput: s, grossMonthlyRevenue, combined, directComparison, directOnly } = result;
  const platformName = platformPresets[s.platform].shortLabel;
  const combinedLabel =
    combined.monthlyDifferenceVsAppOnly >= 0
      ? `economia estimada de R$ ${brl(combined.monthlyDifferenceVsAppOnly)}/mês (R$ ${brl(combined.annualDifferenceVsAppOnly)}/ano)`
      : `diferença estimada de -R$ ${brl(Math.abs(combined.monthlyDifferenceVsAppOnly))}/mês`;

  const overageSummary =
    s.siteIncludedOrders > 0
      ? ` (franquia ${s.siteIncludedOrders} pedidos/mês; excedente R$ ${brl(s.siteOverageOrderPrice)}/pedido; excedentes em 100% direto: ${directOnly.overageOrders} pedidos = R$ ${brl(directOnly.overageCost)})`
      : "";

  const msg = [
    "Olá, NovaesWeb! Fiz uma simulação no Simulador de Economia e autorizo compartilhar estes dados ilustrativos para solicitar um orçamento:",
    `• Plataforma comparada: ${platformName} (${s.platformCommissionPct}% comissão + ${s.platformPaymentFeePct}% pagamento + R$ ${brl(s.platformMonthlyFee)}/mês)`,
    `• Volume informado: ${s.monthlyOrders} pedidos/mês × ticket médio R$ ${brl(s.averageTicket)} (faturamento bruto R$ ${brl(grossMonthlyRevenue)}/mês)`,
    `• Site próprio considerado: R$ ${brl(s.siteMonthlyCost)}/mês${overageSummary}`,
    `• Cenário combinado (${s.migratedOrdersPct}% dos pedidos no site próprio): ${combinedLabel}`,
    `• Comparação 100% canal direto vs. 100% app: diferença de R$ ${brl(directComparison.monthlyDifference)}/mês`,
    "Gostaria de conhecer o plano ideal para o meu negócio.",
  ].join("\n");

  return whatsLink(msg);
}
