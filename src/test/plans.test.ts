import { describe, it, expect } from "vitest";
import { plans, half, whatsLink, planWhatsMsg, videoPacks, packWhatsMsg } from "@/data/plans";

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

describe("pacotes de criação visual", () => {
  it("cada pacote traz o conteúdo, o valor e a economia informados", () => {
    expect(videoPacks.map((p) => [p.name, p.videos, p.images, p.price, p.savings])).toEqual([
      ["Divulgação Rápida", "2 vídeos de 10s", "3 imagens", 89, 9],
      ["Apresentação da Loja", "1 vídeo de 30s", "3 imagens", 89, 7],
      ["Mais Conteúdo", "1 vídeo de 30s", "4 imagens", 109, 9],
    ]);
  });
  it("nenhum pacote tem mensalidade", () => {
    expect(videoPacks.every((p) => !("monthly" in p))).toBe(true);
  });
  it("mensagem do whatsapp traz o pacote e o valor", () => {
    expect(packWhatsMsg(videoPacks[0]!)).toContain("pacote Divulgação Rápida");
    expect(packWhatsMsg(videoPacks[2]!)).toContain("R$ 109,00");
  });
});
