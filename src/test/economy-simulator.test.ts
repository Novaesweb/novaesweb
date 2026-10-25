import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
import { plans } from "@/data/plans";
import {
  buildSimulatorWhatsLink,
  calculateEconomySimulation,
  defaultSimulationInput,
  homepageIllustrativeExample,
  platformPresets,
  sitePlanOptions,
} from "@/data/economy-simulator";

describe("Simulador de Economia — Rota e preços oficiais", () => {
  it("possui rota acessível em /simulador-de-economia", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes("/simulador-de-economia").at(-1)?.routeId).toBe(
      "/simulador-de-economia",
    );
  });

  it("utiliza exclusivamente os preços e franquias oficiais dos planos NovaesWeb sem inventar valores", () => {
    const business = plans.find((p) => p.id === "business");
    const premium = plans.find((p) => p.id === "premium");
    const start = plans.find((p) => p.id === "start");

    const businessOpt = sitePlanOptions.find((o) => o.id === "business");
    const premiumOpt = sitePlanOptions.find((o) => o.id === "premium");
    const startOpt = sitePlanOptions.find((o) => o.id === "start");

    expect(businessOpt?.monthly).toBe(business?.monthly);
    expect(businessOpt?.setup).toBe(business?.setup);
    expect(businessOpt?.includedOrders).toBe(340);
    expect(businessOpt?.overageOrderPrice).toBe(0.2);

    expect(premiumOpt?.monthly).toBe(premium?.monthly);
    expect(premiumOpt?.setup).toBe(premium?.setup);
    expect(premiumOpt?.includedOrders).toBe(750);
    expect(premiumOpt?.overageOrderPrice).toBe(0.15);

    expect(startOpt?.monthly).toBe(start?.monthly);
    expect(startOpt?.setup).toBe(start?.setup);
    expect(startOpt?.includedOrders).toBe(0);
  });

  it("identifica as plataformas iFood, 99Food e personalizada com referências públicas e notas editáveis", () => {
    expect(Object.keys(platformPresets)).toEqual(["ifood", "99food", "custom"]);
    expect(platformPresets.ifood.commissionPct).toBe(12);
    expect(platformPresets.ifood.paymentFeePct).toBe(3.2);
    expect(platformPresets.ifood.monthlyFee).toBe(110);
    expect(platformPresets.ifood.referenceNote).toContain("ilustrativa");
    expect(platformPresets["99food"].commissionPct).toBe(8.9);
    expect(platformPresets["99food"].referenceNote).toContain("ilustrativos");
  });
});

describe("Simulador de Economia — Cálculos, franquia de pedidos e cenários", () => {
  it("calcula corretamente o exemplo ilustrativo padrão (300 pedidos × R$ 65 dentro da franquia de 340 do Business)", () => {
    const res = calculateEconomySimulation(defaultSimulationInput);

    // Faturamento bruto: 300 * 65 = 19.500,00
    expect(res.grossMonthlyRevenue).toBe(19500);
    expect(res.grossAnnualRevenue).toBe(234000);

    // Aplicativo (100%): 12% comissão (2.340) + 3,2% pagamento (624) + 110 mensalidade = 3.074,00
    expect(res.appOnly.commissionCost).toBe(2340);
    expect(res.appOnly.paymentFeeCost).toBe(624);
    expect(res.appOnly.monthlyFeeCost).toBe(110);
    expect(res.appOnly.totalMonthlyCost).toBe(3074);

    // Vendas diretas (100%): 300 pedidos <= 340 franquia -> 0 excedentes
    // 1,5% pagamento (292,50) + 190 site + 0 excedentes + 200 divulgação = 682,50
    expect(res.directOnly.paymentFeeCost).toBe(292.5);
    expect(res.directOnly.monthlyFeeCost).toBe(190);
    expect(res.directOnly.overageOrders).toBe(0);
    expect(res.directOnly.overageCost).toBe(0);
    expect(res.directOnly.marketingCost).toBe(200);
    expect(res.directOnly.totalMonthlyCost).toBe(682.5);

    // Diferença direta: 3.074,00 - 682,50 = 2.391,50/mês | 28.698,00/ano
    expect(res.directComparison.monthlyDifference).toBe(2391.5);
    expect(res.directComparison.annualDifference).toBe(28698);

    // Cenário combinado (40% no site = 120 pedidos / R$ 7.800; 60% no app = 180 pedidos / R$ 11.700)
    expect(res.combined.siteOrders).toBe(120);
    expect(res.combined.appOrders).toBe(180);
    expect(res.combined.siteRevenue).toBe(7800);
    expect(res.combined.appRevenue).toBe(11700);

    // Custos combinados:
    // App (60%): 11.700 * 15,2% (1.778,40) + 110 fixo = 1.888,40
    // Site (40%): 7.800 * 1,5% (117,00) + 0 excedentes + (190 + 200) fixos = 507,00
    // Total combinado = 2.395,40 -> Diferença vs 100% App (3.074,00) = 678,60/mês (8.143,20/ano)
    expect(res.combined.appPortionCost).toBe(1888.4);
    expect(res.combined.sitePortionCost).toBe(507);
    expect(res.combined.totalCombinedMonthlyCost).toBe(2395.4);
    expect(res.combined.monthlyDifferenceVsAppOnly).toBe(678.6);
    expect(res.combined.annualDifferenceVsAppOnly).toBe(8143.2);
  });

  it("contabiliza corretamente os pedidos aceitos excedentes no Business (500 pedidos -> 160 excedentes = R$ 32,00) e no Premium (1.500 pedidos -> 750 excedentes = R$ 112,50)", () => {
    const business500 = calculateEconomySimulation({
      ...defaultSimulationInput,
      monthlyOrders: 500,
      siteMonthlyCost: 190,
      siteIncludedOrders: 340,
      siteOverageOrderPrice: 0.2,
      sitePaymentFeePct: 0,
      siteMarketingInvestment: 0,
      siteAdditionalCosts: 0,
      migratedOrdersPct: 100,
    });

    expect(business500.directOnly.overageOrders).toBe(160);
    expect(business500.directOnly.overageCost).toBe(32);
    expect(business500.directOnly.totalMonthlyCost).toBe(222);
    expect(business500.combined.siteOverageOrders).toBe(160);
    expect(business500.combined.siteOverageCost).toBe(32);
    expect(business500.combined.totalCombinedMonthlyCost).toBe(222);

    const premium1500 = calculateEconomySimulation({
      ...defaultSimulationInput,
      monthlyOrders: 1500,
      siteMonthlyCost: 270,
      siteIncludedOrders: 750,
      siteOverageOrderPrice: 0.15,
      sitePaymentFeePct: 0,
      siteMarketingInvestment: 0,
      siteAdditionalCosts: 0,
      migratedOrdersPct: 100,
    });

    expect(premium1500.directOnly.overageOrders).toBe(750);
    expect(premium1500.directOnly.overageCost).toBe(112.5);
    expect(premium1500.directOnly.totalMonthlyCost).toBe(382.5);
  });

  it("quando migração é 0%, o cenário combinado iguala o custo de 100% no aplicativo", () => {
    const res = calculateEconomySimulation({
      ...defaultSimulationInput,
      migratedOrdersPct: 0,
    });
    expect(res.combined.totalCombinedMonthlyCost).toBe(res.appOnly.totalMonthlyCost);
    expect(res.combined.monthlyDifferenceVsAppOnly).toBe(0);
  });

  it("quando migração é 100%, o cenário combinado iguala o custo de 100% vendas diretas", () => {
    const res = calculateEconomySimulation({
      ...defaultSimulationInput,
      migratedOrdersPct: 100,
    });
    expect(res.combined.totalCombinedMonthlyCost).toBe(res.directOnly.totalMonthlyCost);
    expect(res.combined.monthlyDifferenceVsAppOnly).toBe(res.directComparison.monthlyDifference);
  });

  it("considera custos adicionais de cada canal e exibe diferença negativa com transparência quando o site custa mais", () => {
    const res = calculateEconomySimulation({
      ...defaultSimulationInput,
      monthlyOrders: 10,
      averageTicket: 30,
      siteMarketingInvestment: 600,
      siteAdditionalCosts: 250,
      appAdditionalCosts: 20,
      migratedOrdersPct: 50,
    });

    expect(res.appOnly.additionalCost).toBe(20);
    expect(res.directOnly.additionalCost).toBe(250);
    expect(res.directComparison.monthlyDifference).toBeLessThan(0);
    expect(res.combined.monthlyDifferenceVsAppOnly).toBeLessThan(0);
  });

  it("higieniza entradas inválidas ou negativas sem quebrar o cálculo", () => {
    const res = calculateEconomySimulation({
      ...defaultSimulationInput,
      monthlyOrders: -50,
      averageTicket: -10,
      migratedOrdersPct: 180,
    });

    expect(res.sanitizedInput.monthlyOrders).toBe(0);
    expect(res.sanitizedInput.averageTicket).toBe(0);
    expect(res.sanitizedInput.migratedOrdersPct).toBe(100);
    expect(res.grossMonthlyRevenue).toBe(0);
    expect(res.appOnly.totalMonthlyCost).toBe(0);
    expect(res.directOnly.totalMonthlyCost).toBe(0);
  });

  it("só compartilha os dados da simulação no link do WhatsApp mediante confirmação explícita", () => {
    const { result } = homepageIllustrativeExample;

    const linkWithoutConfirmation = decodeURIComponent(buildSimulatorWhatsLink(result, false));
    expect(linkWithoutConfirmation).not.toContain("19.500,00");
    expect(linkWithoutConfirmation).not.toContain("678,60");

    const linkWithConfirmation = decodeURIComponent(buildSimulatorWhatsLink(result, true));
    expect(linkWithConfirmation).toContain("autorizo compartilhar");
    expect(linkWithConfirmation).toContain("19.500,00");
    expect(linkWithConfirmation).toContain("678,60");
  });
});
