import { describe, expect, it } from "vitest";
import { commercialPlans, commercialComparison, commercialWhatsMsg, launchSaving, contentChangeRules, separateModules } from "@/data/commercial-plans";
import { addons } from "@/data/plans";

describe("estrutura comercial da página de Planos", () => {
  it("preserva os preços aprovados", () => {
    expect(commercialPlans.map(p => [p.setup, p.monthly])).toEqual([[630, 0], [578, 190], [980, 270]]);
  });
  it("usa o preço anterior informado e economia real de 260", () => {
    const start = commercialPlans.find(p => p.id === "start");
    if (!start) throw new Error("Start ausente");
    expect(start.previousSetup).toBe(890);
    expect(launchSaving(start)).toBe(260);
    expect(commercialPlans.filter(p => p.id !== "start").map(p => p.previousSetup)).toEqual([null, null]);
  });
  it("Start exige 315 na contratação e 315 antes da publicação", () => {
    expect(commercialPlans.find(p => p.id === "start")?.setupPayment).toEqual({ upfront: 315, remainder: 315, remainderDue: "before-publication" });
  });
  it("suporte opcional custa 80 e não é automaticamente contratado", () => {
    const start = commercialPlans.find(p => p.id === "start");
    if (!start) throw new Error("Start ausente");
    expect(start.optionalSupportMonthly).toBe(80);
    expect(commercialWhatsMsg(start)).not.toContain("Quero contratar também");
    expect(commercialWhatsMsg(start, true)).toContain("R$ 80,00 por mês");
  });
  it("Business e Premium têm até 4 solicitações mensais, Start não tem", () => {
    expect(commercialPlans.map(p => p.contentRequestsPerMonth)).toEqual([0, 4, 4]);
    expect(contentChangeRules.requestsPerMonth).toBe(4);
  });
  it("solicitações não são cumulativas", () => { expect(contentChangeRules.cumulative).toBe(false); });
  it("edições do cliente não consomem a franquia", () => { expect(contentChangeRules.clientEditsConsumeRequests).toBe(false); });
  it("correções de defeitos da NovaesWeb não consomem a franquia", () => { expect(contentChangeRules.providerDefectCorrectionsConsumeRequests).toBe(false); });
  it("novas páginas, redesign, novas funcionalidades e integrações são fora do escopo", () => {
    expect(contentChangeRules.excludedScopes).toEqual(["new-pages", "redesign", "new-features", "integrations"]);
  });
  it("complexidade e prazo são definidos no contrato", () => { expect(contentChangeRules.complexityAndDeadline).toBe("contract"); });
  it("módulos especializados não fazem parte dos planos", () => {
    expect(commercialPlans.map(p => p.includedModules)).toEqual([[], [], []]);
    expect(separateModules).toEqual(["Novaes Finance", "Novaes Fideliza", "Novaes Mesa", "Novaes TV", "Novaes Gift", "Novaes OS", "Novaes Promo", "Novaes Insights", "Novaes Marketing", "Novaes Equipe", "WhatsApp Notify", "Integrações especiais", "Desenvolvimento sob medida"]);
  });
  it("Business e Premium incluem hospedagem, manutenção e suporte; Start não", () => {
    expect(commercialComparison.find(r => r[0] === "Hospedagem recorrente incluída")?.slice(1)).toEqual([false, true, true]);
    expect(commercialComparison.find(r => r[0] === "Manutenção técnica incluída")?.slice(1)).toEqual([false, true, true]);
    expect(commercialComparison.find(r => r[0] === "Suporte técnico")?.slice(1)).toEqual(["Opcional: R$ 80/mês", true, true]);
  });
  it("preserva 25 registros de adicionais com IDs únicos", () => {
    expect(addons).toHaveLength(25);
    expect(new Set(addons.map(a => a.id)).size).toBe(25);
  });
});