import { describe, it, expect } from "vitest";
import { plans, half, whatsLink, planWhatsMsg, videoPacks, packWhatsMsg, faqs, comparison } from "@/data/plans";
import { allFaqs, faqsShown } from "@/data/faqs";

describe("planos", () => {
  it("valores oficiais", () => {
     expect(plans.map((p) => [p.setup, p.monthly])).toEqual([[630, 0], [578, 190], [980, 270]]);
  });
  it("entrada de 50%", () => {
     expect(plans.map((p) => half(p.setup))).toEqual([315, 289, 490]);
  });
  it("whatsapp", () => {
    expect(whatsLink("x")).toBe("https://wa.me/5551991189293?text=x");
    const premium = plans.find((p) => p.id === "premium");
    if (!premium) throw new Error("Premium ausente");
    expect(planWhatsMsg(premium)).toContain("Novaes Premium, com criação de R$ 980,00 e mensalidade de R$ 270,00");
  });
  it("Business custa 578 de criação e 190 por mês", () => {
    const business = plans.find((p) => p.id === "business");
    expect(business?.setup).toBe(578);
    expect(business?.monthly).toBe(190);
    if (!business) throw new Error("Business ausente");
    expect(planWhatsMsg(business)).toContain("criação de R$ 578,00 e mensalidade de R$ 190,00");
  });
  it("Premium custa 980 de criação e 270 por mês", () => {
    const premium = plans.find((p) => p.id === "premium");
    expect(premium?.setup).toBe(980);
    expect(premium?.monthly).toBe(270);
  });
  it("Premium mantém WhatsApp automático como adicional, não inclui tudo", () => {
    expect(comparison.find(([name]) => name === "WhatsApp automático")?.[3]).toBe("Adicional");
  });
  it("Start tem criação única de 630 e nenhuma mensalidade obrigatória", () => {
    const start = plans.find((p) => p.id === "start");
    expect(start?.setup).toBe(630);
    expect(start?.monthly).toBe(0);
    if (!start) throw new Error("Start ausente");
    expect(planWhatsMsg(start)).toContain("sem mensalidade obrigatória");
    expect(planWhatsMsg(start)).toContain("sem suporte contratado");
  });
  it("suporte opcional do Start custa 80 por mês e exige seleção", () => {
    const start = plans.find((p) => p.id === "start");
    expect(start?.optionalSupportMonthly).toBe(80);
    if (!start) throw new Error("Start ausente");
    expect(planWhatsMsg(start, true)).toContain("suporte opcional de R$ 80,00 por mês");
    expect(planWhatsMsg(start)).not.toContain("Quero contratar também");
  });
  it("Start não inclui serviços recorrentes", () => {
    expect(comparison.find(([name]) => name === "Suporte")?.[1]).toBe("Opcional: R$ 80/mês");
    expect(comparison.find(([name]) => name === "Manutenção inclusa")?.[1]).toBe(false);
    expect(comparison.find(([name]) => name === "Hospedagem recorrente inclusa")?.[1]).toBe(false);
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

describe("dúvidas da tela inicial", () => {
  it("não fala só de plano: cobre vídeos, identidade visual e WhatsApp API", () => {
    const perguntas = allFaqs.map(([q]) => q).join(" | ");
    expect(perguntas).toContain("vídeos e artes para as redes sociais");
    expect(perguntas).toContain("logo e as artes da minha marca");
    expect(perguntas).toContain("integração com o WhatsApp API");
  });
  it("mantém as dúvidas dos planos dentro da lista", () => {
    expect(allFaqs.length).toBeGreaterThan(faqs.length);
    expect(allFaqs).toContainEqual(faqs[0]!);
  });
  it("toda dúvida tem resposta escrita", () => {
    expect(allFaqs.every(([, a]) => a.trim().length > 10)).toBe(true);
  });
  it("a tela inicial mostra poucas dúvidas, entre 8 e 10", () => {
    expect(faqsShown).toBeGreaterThanOrEqual(8);
    expect(faqsShown).toBeLessThanOrEqual(10);
    expect(allFaqs.length).toBeGreaterThan(faqsShown);
  });
});
