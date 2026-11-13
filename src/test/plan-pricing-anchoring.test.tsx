import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { commercialPlans } from "@/data/commercial-plans";
import { getAnnualAnchoring } from "@/data/plans";
import { PlanCard } from "@/routes/planos";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

function mockViewport(width: number) {
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    writable: true,
    value: width,
  });
  vi.spyOn(window, "matchMedia").mockImplementation((query: string) => ({
    matches: query.includes("max-width: 767px") ? width < 768 : false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

describe("Ancoragem de preço anual e renomeação Business -> Pro", () => {
  const proPlan = commercialPlans.find((p) => p.id === "business");
  const premiumPlan = commercialPlans.find((p) => p.id === "premium");
  const startPlan = commercialPlans.find((p) => p.id === "start");

  if (!proPlan || !premiumPlan || !startPlan) {
    throw new Error("Planos esperados não encontrados em commercial-plans.ts");
  }

  it.each([
    { label: "Desktop", width: 1280 },
    { label: "Mobile", width: 375 },
  ])("Pro alterna Anual <-> Mensal no mesmo card com ancoragem correta em $label ($width px)", ({
    width,
  }) => {
    mockViewport(width);
    const anchoring = getAnnualAnchoring(proPlan);
    expect(anchoring).not.toBeNull();

    const { container } = render(<PlanCard p={proPlan} />);
    const card = container.querySelector("#plano-business");
    expect(card).not.toBeNull();
    expect(screen.getByRole("heading", { name: "NOVAES PRO" })).toBeInTheDocument();
    expect(card?.textContent).not.toMatch(/\bBusiness\b/i);

    const toggleGroup = screen.getByRole("group", { name: "Ciclo de pagamento do plano Novaes Pro" });
    expect(toggleGroup).toBeInTheDocument();

    const btnMensal = screen.getByRole("button", { name: "Mensal" });
    const btnAnual = screen.getByRole("button", { name: /Anual \(-16,7%\)/ });
    expect(btnAnual).toHaveAttribute("aria-pressed", "true");
    expect(btnMensal).toHaveAttribute("aria-pressed", "false");

    // Estado Anual: equivalente mensal em destaque e total anual pequeno e legível abaixo
    expect(screen.getByTestId("price-main-business")).toHaveTextContent("158,33");
    expect(screen.getByTestId("price-main-business")).toHaveClass("text-white");
    expect(screen.getByTestId("price-main-business")).not.toHaveClass("text-neon");
    expect(screen.getByTestId("annual-total-business")).toHaveTextContent(
      "Total de R$ 1.900,00 cobrado anualmente (12 meses)",
    );
    expect(screen.getByText("Economize 16,7% (R$ 380,00/ano)")).toBeInTheDocument();
    expect(screen.queryByTestId("total-checkout-business")).not.toBeInTheDocument();
    expect(screen.queryByText(/Total a pagar para contratar/)).not.toBeInTheDocument();

    const ctaAnual = screen.getByRole("link", { name: /Solicitar orçamento — Novaes Pro \(Anual\)/ });
    expect(decodeURIComponent(ctaAnual.getAttribute("href") ?? "")).toContain(
      "Total para contratar (1º ano): R$ 2.190,00",
    );

    // Troca para Mensal no mesmo card sem recarregar nem perder benefícios
    fireEvent.click(btnMensal);
    expect(container.querySelector("#plano-business")).toBe(card);
    expect(btnMensal).toHaveAttribute("aria-pressed", "true");
    expect(btnAnual).toHaveAttribute("aria-pressed", "false");

    expect(screen.getByTestId("price-main-business")).toHaveTextContent("190,00");
    expect(screen.queryByTestId("annual-total-business")).not.toBeInTheDocument();
    expect(screen.queryByTestId("total-checkout-business")).not.toBeInTheDocument();
    expect(screen.getByText(/Cobrança mensal recorrente \(R\$ 2\.280,00 em 12 meses\)/)).toBeInTheDocument();
    expect(screen.getByText(/No plano anual sai por R\$ 158,33\/mês/)).toBeInTheDocument();

    const ctaMensal = screen.getByRole("link", {
      name: /Solicitar orçamento — Novaes Pro \(Mensal\)/,
    });
    expect(decodeURIComponent(ctaMensal.getAttribute("href") ?? "")).toContain(
      "total inicial criação + 1ª mensalidade: R$ 480,00",
    );

    // Benefícios preservados e aba Pagamento reflete o ciclo selecionado
    expect(screen.getByText(proPlan.items[0])).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Pagamento" }));
    expect(screen.getByText("Mensalidade (340 pedidos aceitos incl.)")).toBeInTheDocument();
    expect(screen.getByText("Total inicial (criação + 1º mês)")).toBeInTheDocument();

    fireEvent.click(btnAnual);
    expect(screen.getByText("Anuidade (equivalente a R$ 158,33/mês)")).toBeInTheDocument();
    expect(screen.getByText("R$ 1.900,00/ano")).toBeInTheDocument();
    expect(screen.getByText("Total cobrado no 1º ano (criação + anual)")).toBeInTheDocument();
  });

  it.each([
    { label: "Desktop", width: 1280 },
    { label: "Mobile", width: 375 },
  ])("Premium aplica ancoragem anual real (225,00/mês e total R$ 2.700,00) em $label ($width px)", ({
    width,
  }) => {
    mockViewport(width);
    const { container } = render(<PlanCard p={premiumPlan} />);
    const card = container.querySelector("#plano-premium");
    expect(card).not.toBeNull();
    expect(screen.getByRole("heading", { name: "NOVAES PREMIUM" })).toBeInTheDocument();

    expect(screen.getByTestId("price-main-premium")).toHaveTextContent("225,00");
    expect(screen.getByTestId("price-main-premium")).toHaveClass("text-white");
    expect(screen.getByTestId("annual-total-premium")).toHaveTextContent(
      "Total de R$ 2.700,00 cobrado anualmente (12 meses)",
    );
    expect(screen.getByText("Economize 16,7% (R$ 540,00/ano)")).toBeInTheDocument();
    expect(screen.queryByTestId("total-checkout-premium")).not.toBeInTheDocument();
    expect(screen.queryByText(/Total a pagar para contratar/)).not.toBeInTheDocument();

    const btnMensal = screen.getByRole("button", { name: "Mensal" });
    fireEvent.click(btnMensal);
    expect(container.querySelector("#plano-premium")).toBe(card);
    expect(screen.getByTestId("price-main-premium")).toHaveTextContent("270,00");
    expect(screen.queryByTestId("total-checkout-premium")).not.toBeInTheDocument();

    const ctaMensal = screen.getByRole("link", {
      name: /Solicitar orçamento — Novaes Premium \(Mensal\)/,
    });
    expect(decodeURIComponent(ctaMensal.getAttribute("href") ?? "")).toContain(
      "total inicial criação + 1ª mensalidade: R$ 760,00",
    );
  });

  it("Start permanece inalterado sem alternador Mensal/Anual", () => {
    mockViewport(375);
    render(<PlanCard p={startPlan} />);
    expect(screen.getByRole("heading", { name: "NOVAES START" })).toBeInTheDocument();
    expect(screen.queryByRole("group", { name: /Ciclo de pagamento/i })).not.toBeInTheDocument();
    expect(screen.queryByTestId("total-checkout-start")).not.toBeInTheDocument();
    expect(screen.getByText("630,00")).toBeInTheDocument();
    expect(screen.getByText(/Adicionar suporte opcional — R\$ 80,00\/mês/)).toBeInTheDocument();
  });
});
