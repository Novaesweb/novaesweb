import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { HeroTechText } from "@/components/HeroTechText";

vi.mock("@/components/TechText", () => ({
  default: ({ text }: { text: string }) => <span data-testid="animated-line">{text}</span>,
}));
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("Hero TechText motion preference", () => {
  it("switches between animation and readable HTML when the preference changes, and removes its listener", () => {
    let change = () => {};
    const preference = {
      matches: true,
      addEventListener: vi.fn((_event, listener) => {
        change = listener;
      }),
      removeEventListener: vi.fn(),
    };
    vi.spyOn(window, "matchMedia").mockReturnValue(preference as unknown as MediaQueryList);
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(
      {} as CanvasRenderingContext2D,
    );
    const { unmount } = render(<HeroTechText />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "O seu crescimento é parte do nosso sucesso.",
    );
    expect(screen.queryAllByTestId("animated-line")).toHaveLength(0);
    act(() => {
      preference.matches = false;
      change();
    });
    expect(screen.getAllByTestId("animated-line")).toHaveLength(2);
    act(() => {
      preference.matches = true;
      change();
    });
    expect(screen.queryAllByTestId("animated-line")).toHaveLength(0);
    unmount();
    expect(preference.removeEventListener).toHaveBeenCalledWith("change", change);
  });
  it("keeps the phrase visible without Canvas support", () => {
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(null);
    render(<HeroTechText />);
    expect(screen.queryAllByTestId("animated-line")).toHaveLength(0);
    expect(screen.getByText("O seu crescimento é parte do nosso sucesso.")).toHaveClass(
      "hero-tech-static",
    );
  });
});
