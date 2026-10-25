import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
import { comparisonDimensions, comparisonFaqs } from "@/data/delivery-comparison";

describe("Página de Comparativo e Dimensões de Mercado", () => {
  it("possui rota própria e acessível em /comparativo", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes("/comparativo").at(-1)?.routeId).toBe("/comparativo");
  });

  it("contém dimensões comparativas fundamentais (comissão, marca, franquia, implantação)", () => {
    expect(comparisonDimensions.length).toBeGreaterThanOrEqual(5);

    const comissao = comparisonDimensions.find((d) => d.title.includes("Comissão"));
    expect(comissao).toBeDefined();
    expect(comissao?.novaesweb.label).toContain("0%");
    expect(comissao?.marketplaces.label).toContain("12%");

    const marca = comparisonDimensions.find((d) => d.title.includes("marca"));
    expect(marca).toBeDefined();
    expect(marca?.novaesweb.label).toContain("Site próprio");
  });

  it("contém FAQs diretas esclarecendo a convivência com marketplaces e regras de franquia", () => {
    expect(comparisonFaqs.length).toBeGreaterThanOrEqual(4);
    expect(comparisonFaqs[0].q).toContain("iFood");
  });
});
