import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

describe("Banner principal da NovaesWeb (#inicio)", () => {
  const indexSource = fs.readFileSync(
    path.resolve(process.cwd(), "src/routes/index.tsx"),
    "utf8",
  );
  const heroMatch = indexSource.match(/<section id="inicio"[\s\S]*?<\/section>/);
  const heroSection = heroMatch?.[0] ?? "";

  it("separa texto/botões na coluna esquerda e modelo na coluna direita no computador e notebook", () => {
    expect(heroSection).toContain("lg:grid");
    expect(heroSection).toContain("xl:grid-cols-[minmax(0,580px)_minmax(0,1fr)]");
    expect(heroSection).toContain('data-testid="hero-text-column"');
    expect(heroSection).toContain('data-testid="hero-media-column"');
    expect(heroSection).toContain("hidden lg:flex lg:flex-col lg:items-end");
  });

  it("não usa retrato em fundo absoluto sobrepondo texto ou botões no banner principal", () => {
    expect(heroSection).not.toContain("hero-portrait absolute inset-0");
    expect(heroSection).toContain("object-contain");
  });

  it("mantém layout empilhado sem sobreposição nem cortes no tablet e celular (< lg)", () => {
    expect(heroSection).toContain("lg:hidden");
    expect(heroSection).toContain("w-full rounded-2xl");
  });

  it("preserva imagem, textos e botões originais", () => {
    expect(heroSection).toContain("SITES E SISTEMAS SOB MEDIDA");
    expect(heroSection).toContain("Solicitar orçamento");
    expect(heroSection).toContain("Ver projetos funcionando");
    expect(heroSection).toContain("Mais que sites, criamos identidade!");
  });
});
