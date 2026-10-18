import { describe, it, expect } from "vitest";
import { plans, half, whatsLink, planWhatsMsg } from "@/data/plans";

describe("planos", () => {
  it("valores oficiais", () => {
    expect(plans.map((p) => [p.setup, p.monthly])).toEqual([[238, 59.9], [498, 109.9], [898, 209.9]]);
  });
  it("entrada de 50%", () => {
    expect(plans.map((p) => half(p.setup))).toEqual([119, 249, 449]);
  });
  it("whatsapp", () => {
    expect(whatsLink("x")).toBe("https://wa.me/5551981964238?text=x");
    expect(planWhatsMsg(plans[2]!)).toContain("Novaes Premium, com criação de R$ 898,00 e mensalidade de R$ 209,90");
  });
});
