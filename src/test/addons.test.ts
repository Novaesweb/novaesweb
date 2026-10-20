import { describe, it, expect } from "vitest";
import { addons, addonCategories, addonWhatsMsg, whatsLink } from "@/data/plans";

describe("catálogo de adicionais", () => {
  const existing = [
    ["Novaes WhatsApp Notify", "R$ 25/mês"], ["Ativação WhatsApp Oficial", "R$ 100 (único)"],
    ["Novaes Promo", "R$ 15/mês"], ["Novaes Finance", "R$ 30/mês"],
    ["Novaes Equipe", "R$ 20/mês"], ["Novaes Insights", "R$ 20/mês"],
    ["Novaes Marketing", "R$ 35/mês"], ["Configuração de Domínio", "R$ 50 + registro"],
    ["Treinamento Personalizado", "R$ 70/hora"], ["Ajuste Avulso", "R$ 15"],
    ["Atualização de Banner", "R$ 25"], ["Cadastro de Produtos — Pacote 10", "R$ 35"],
    ["Suporte Extraordinário", "R$ 50"], ["Desenvolvimento Sob Medida", "Sob orçamento"],
    ["Integrações Personalizadas", "Sob orçamento"], ["Novaes Print Connect", "Sob orçamento"],
  ];
  it.each(existing)("preserva preço e um único registro: %s", (name, price) => {
    const matches = addons.filter((addon) => addon.name === name);
    expect(matches).toHaveLength(1);
    expect(matches[0]?.price).toBe(price);
    expect(matches[0]?.status).toBeUndefined();
  });
  it("contém 16 existentes e 9 novos, sem IDs duplicados", () => {
    expect(addons).toHaveLength(25);
    expect(new Set(addons.map((addon) => addon.id)).size).toBe(25);
  });
  it.each(["Novaes Fideliza", "Novaes OS", "Novaes Mesa", "Novaes Gift", "Novaes TV"])("%s permanece sob orçamento e em planejamento", (name) => {
    expect(addons.find((addon) => addon.name === name)).toMatchObject({ price: "Sob orçamento", category: "premium", status: "planning" });
  });
  it.each([
    ["Novaes Backup Plus", "R$ 15/mês"], ["Novaes Multiusuário", "R$ 15/mês"],
    ["Novaes Multiunidade", "A partir de R$ 39/mês"], ["Novaes Import", "R$ 49 por importação"],
  ])("%s tem preço provisório e não é anunciado como disponível", (name, price) => {
    expect(addons.find((addon) => addon.name === name)).toMatchObject({ price, status: "proposal" });
  });
  it.each([
    ["premium", ["Novaes Fideliza", "Novaes OS", "Novaes Mesa", "Novaes Gift", "Novaes TV"]],
    ["integrations", ["Novaes WhatsApp Notify", "Ativação WhatsApp Oficial", "Novaes Print Connect", "Integrações Personalizadas", "Novaes Backup Plus"]],
    ["management", ["Novaes Promo", "Novaes Finance", "Novaes Equipe", "Novaes Insights", "Novaes Marketing", "Novaes Multiusuário", "Novaes Multiunidade"]],
    ["services", ["Configuração de Domínio", "Treinamento Personalizado", "Ajuste Avulso", "Atualização de Banner", "Cadastro de Produtos — Pacote 10", "Suporte Extraordinário", "Desenvolvimento Sob Medida", "Novaes Import"]],
  ])("organiza corretamente a categoria %s", (id, names) => {
    expect(addonCategories.some((category) => category.id === id)).toBe(true);
    expect(addons.filter((addon) => addon.category === id).map((addon) => addon.name).sort()).toEqual([...names].sort());
  });
  it.each(addons)("solicitação inclui nome e preço de $name", (addon) => {
    const url = new URL(whatsLink(addonWhatsMsg(addon)));
    expect(url.pathname).toBe("/5551991189293");
    expect(url.searchParams.get("text")).toContain(`${addon.name} (${addon.price})`);
    if (addon.status === "planning") expect(url.searchParams.get("text")).toContain("em planejamento");
    if (addon.status === "proposal") expect(url.searchParams.get("text")).toContain("valor provisório sujeito à aprovação");
  });
});