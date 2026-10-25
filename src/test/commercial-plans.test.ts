import { describe, expect, it } from "vitest";
import {
  commercialPlans,
  commercialComparison,
  commercialWhatsMsg,
  launchSaving,
  contentChangeRules,
  separateModules,
  enterprisePlan,
  overageSectionCopy,
  overageBillingExamples,
  orderCountingRules,
  plansPageFaqs,
} from "@/data/commercial-plans";
import { addons } from "@/data/plans";

describe("estrutura comercial da página de Planos", () => {
  it("preserva os preços aprovados", () => {
    expect(commercialPlans.map((p) => [p.setup, p.monthly])).toEqual([
      [630, 0],
      [578, 190],
      [980, 270],
    ]);
  });

  it("usa o preço anterior informado e economia real de 260", () => {
    const start = commercialPlans.find((p) => p.id === "start");
    if (!start) throw new Error("Start ausente");
    expect(start.previousSetup).toBe(890);
    expect(launchSaving(start)).toBe(260);
    expect(commercialPlans.filter((p) => p.id !== "start").map((p) => p.previousSetup)).toEqual([
      null,
      null,
    ]);
  });

  it("Start exige 315 na contratação e 315 antes da publicação", () => {
    expect(commercialPlans.find((p) => p.id === "start")?.setupPayment).toEqual({
      upfront: 315,
      remainder: 315,
      remainderDue: "before-publication",
    });
  });

  it("suporte opcional custa 80 e não é automaticamente contratado", () => {
    const start = commercialPlans.find((p) => p.id === "start");
    if (!start) throw new Error("Start ausente");
    expect(start.optionalSupportMonthly).toBe(80);
    expect(commercialWhatsMsg(start)).not.toContain("Quero contratar também");
    expect(commercialWhatsMsg(start, true)).toContain("R$ 80,00 por mês");
  });

  it("Business e Premium têm até 4 solicitações mensais, Start não tem", () => {
    expect(commercialPlans.map((p) => p.contentRequestsPerMonth)).toEqual([0, 4, 4]);
    expect(contentChangeRules.requestsPerMonth).toBe(4);
  });

  it("solicitações não são cumulativas", () => {
    expect(contentChangeRules.cumulative).toBe(false);
  });

  it("edições do cliente não consomem a franquia", () => {
    expect(contentChangeRules.clientEditsConsumeRequests).toBe(false);
  });

  it("correções de defeitos da NovaesWeb não consomem a franquia", () => {
    expect(contentChangeRules.providerDefectCorrectionsConsumeRequests).toBe(false);
  });

  it("novas páginas, redesign, novas funcionalidades e integrações são fora do escopo", () => {
    expect(contentChangeRules.excludedScopes).toEqual([
      "new-pages",
      "redesign",
      "new-features",
      "integrations",
    ]);
  });

  it("complexidade e prazo são definidos no contrato", () => {
    expect(contentChangeRules.complexityAndDeadline).toBe("contract");
  });

  it("módulos especializados não fazem parte dos planos", () => {
    expect(commercialPlans.map((p) => p.includedModules)).toEqual([[], [], []]);
    expect(separateModules).toEqual([
      "Novaes Finance",
      "Novaes Fideliza",
      "Novaes Mesa",
      "Novaes TV",
      "Novaes Gift",
      "Novaes OS",
      "Novaes Promo",
      "Novaes Insights",
      "Novaes Marketing",
      "Novaes Equipe",
      "WhatsApp Notify",
      "Integrações especiais",
      "Desenvolvimento sob medida",
    ]);
  });

  it("Business e Premium incluem hospedagem, manutenção e suporte; Start não", () => {
    expect(
      commercialComparison.find((r) => r[0] === "Hospedagem recorrente incluída")?.slice(1),
    ).toEqual([false, true, true]);
    expect(
      commercialComparison.find((r) => r[0] === "Manutenção técnica incluída")?.slice(1),
    ).toEqual([false, true, true]);
    expect(commercialComparison.find((r) => r[0] === "Suporte técnico")?.slice(1)).toEqual([
      "Opcional: R$ 80/mês",
      true,
      true,
    ]);
  });

  it("preserva 25 registros de adicionais com IDs únicos", () => {
    expect(addons).toHaveLength(25);
    expect(new Set(addons.map((a) => a.id)).size).toBe(25);
  });

  it("apresenta as franquias de pedidos aceitos, limites e excedentes aprovados em Start, Business, Premium e Empresarial", () => {
    const start = commercialPlans.find((p) => p.id === "start")!;
    const business = commercialPlans.find((p) => p.id === "business")!;
    const premium = commercialPlans.find((p) => p.id === "premium")!;

    expect(start.orderQuota.hasOnlineOrders).toBe(false);
    expect(start.orderQuota.includedAcceptedOrders).toBeNull();

    expect(business.orderQuota).toEqual({
      hasOnlineOrders: true,
      includedAcceptedOrders: 340,
      overageOrderPrice: 0.2,
      maxProducts: 200,
      maxAdmins: 2,
      headline: "340 pedidos aceitos incluídos por mês.",
      description:
        "Seu delivery continua recebendo pedidos após atingir a franquia. Cada pedido aceito adicional custa apenas R$ 0,20.",
      noBlockBadge: "Sem bloqueio ao atingir a franquia",
    });

    expect(premium.orderQuota).toEqual({
      hasOnlineOrders: true,
      includedAcceptedOrders: 750,
      overageOrderPrice: 0.15,
      maxProducts: 500,
      maxAdmins: 5,
      headline: "750 pedidos aceitos incluídos por mês.",
      description:
        "Seu negócio continua recebendo pedidos mesmo após atingir a franquia. Cada pedido aceito adicional custa apenas R$ 0,15.",
      noBlockBadge: "Sem bloqueio ao atingir a franquia",
    });

    expect(enterprisePlan.name).toBe("NOVAES EMPRESARIAL");
    expect(enterprisePlan.priceLabel).toBe("Valores sob consulta");
  });

  it("calcula exatamente os exemplos de cobrança de mês completo para Business (500 pedidos) e Premium (1.500 pedidos)", () => {
    expect(overageBillingExamples).toEqual([
      {
        planId: "business",
        planLabel: "Novaes Business",
        title: "Business com 500 pedidos aceitos",
        totalAcceptedOrders: 500,
        includedOrders: 340,
        overageOrders: 160,
        overageUnitPrice: 0.2,
        overageTotalCost: 32,
        baseMonthly: 190,
        totalMonthlyBill: 222,
      },
      {
        planId: "premium",
        planLabel: "Novaes Premium",
        title: "Premium com 1.500 pedidos aceitos",
        totalAcceptedOrders: 1500,
        includedOrders: 750,
        overageOrders: 750,
        overageUnitPrice: 0.15,
        overageTotalCost: 112.5,
        baseMonthly: 270,
        totalMonthlyBill: 382.5,
      },
    ]);
  });

  it("mantém as 9 regras de contabilização, os 3 benefícios de continuidade e não inventa teto financeiro ou pedidos ilimitados grátis", () => {
    expect(overageSectionCopy.title).toBe("Seu negócio não precisa parar de vender");
    expect(overageSectionCopy.benefits).toHaveLength(3);
    expect(orderCountingRules).toHaveLength(9);
    expect(plansPageFaqs.length).toBeGreaterThanOrEqual(6);

    const allTexts = JSON.stringify({
      commercialPlans,
      enterprisePlan,
      overageSectionCopy,
      overageBillingExamples,
      orderCountingRules,
      plansPageFaqs,
    }).toLowerCase();

    expect(allTexts).not.toContain("ilimitados grátis");
    expect(allTexts).not.toContain("teto máximo");
    expect(allTexts).not.toContain("teto financeiro");
  });
});
