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
    const listeners = new Map<string, () => void>();
    const reducedMotion = {
      matches: true,
      addEventListener: vi.fn((_event, listener) => {
        listeners.set("(prefers-reduced-motion: reduce)", listener);
      }),
      removeEventListener: vi.fn(),
    };
    const forcedColors = {
      matches: false,
      addEventListener: vi.fn((_event, listener) => {
        listeners.set("(forced-colors: active)", listener);
      }),
      removeEventListener: vi.fn(),
    };
    const mobileViewport = {
      matches: false,
      addEventListener: vi.fn((_event, listener) => {
        listeners.set("(max-width: 767px)", listener);
      }),
      removeEventListener: vi.fn(),
    };
    vi.spyOn(window, "matchMedia").mockImplementation((query) => {
      if (query === "(prefers-reduced-motion: reduce)") return reducedMotion as unknown as MediaQueryList;
      if (query === "(max-width: 767px)") return mobileViewport as unknown as MediaQueryList;
      return forcedColors as unknown as MediaQueryList;
    });
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(
      {} as CanvasRenderingContext2D,
    );
    const { unmount } = render(<HeroTechText />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "O seu crescimento é parte do nosso sucesso.",
    );
    expect(screen.queryAllByTestId("animated-line")).toHaveLength(0);
    act(() => {
      reducedMotion.matches = false;
      listeners.get("(prefers-reduced-motion: reduce)")?.();
    });
    expect(screen.getAllByTestId("animated-line")).toHaveLength(2);
    act(() => {
      reducedMotion.matches = true;
      listeners.get("(prefers-reduced-motion: reduce)")?.();
    });
    expect(screen.queryAllByTestId("animated-line")).toHaveLength(0);
    unmount();
    expect(reducedMotion.removeEventListener).toHaveBeenCalledWith(
      "change",
      listeners.get("(prefers-reduced-motion: reduce)"),
    );
    expect(forcedColors.removeEventListener).toHaveBeenCalledWith(
      "change",
      listeners.get("(forced-colors: active)"),
    );
    expect(mobileViewport.removeEventListener).toHaveBeenCalledWith(
      "change",
      listeners.get("(max-width: 767px)"),
    );
  });
  it("uses normal static text on mobile and short animation on desktop", () => {
    const mobileQuery = {
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    };
    vi.spyOn(window, "matchMedia").mockImplementation((query) =>
      (query === "(max-width: 767px)"
        ? mobileQuery
        : { matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() }) as unknown as MediaQueryList,
    );
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(
      {} as CanvasRenderingContext2D,
    );

    render(<HeroTechText />);
    expect(screen.queryAllByTestId("animated-line")).toHaveLength(0);
    expect(screen.getByText("O seu crescimento é parte do nosso sucesso.")).toHaveClass(
      "hero-tech-static",
    );

    cleanup();
    mobileQuery.matches = false;
    render(<HeroTechText />);
    expect(screen.getAllByTestId("animated-line")).toHaveLength(2);
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
