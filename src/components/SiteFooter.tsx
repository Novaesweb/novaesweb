import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { legalDocs } from "@/data/legal";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 px-4 py-6 sm:px-8 xl:px-14">
      <div className="mx-auto mb-4 flex max-w-[1800px] flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <Link to="/" className="font-display text-lg font-bold">Novaes<span className="text-neon-pink">Web</span></Link>
        <nav aria-label="Navegação do rodapé" className="flex flex-wrap gap-x-5 text-sm text-muted-foreground">
          <Link to="/servicos" className="inline-flex min-h-11 items-center hover:text-neon-pink">Serviços</Link>
          <Link to="/planos" className="inline-flex min-h-11 items-center hover:text-neon-pink">Planos</Link>
          <Link to="/simulador-de-economia" className="inline-flex min-h-11 items-center hover:text-neon-pink">Simulador</Link>
          <Link to="/comparativo" className="inline-flex min-h-11 items-center hover:text-neon-pink">Comparativo</Link>
          <Link to="/quem-somos" className="inline-flex min-h-11 items-center hover:text-neon-pink">Quem Somos</Link>
          <Link to="/contato" className="inline-flex min-h-11 items-center hover:text-neon-pink">Contato</Link>
        </nav>
      </div>
      {/* Linha Final de Copyright e Links Legais */}
      <div className="mx-auto flex max-w-[1800px] flex-col items-center gap-3 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
        <span>© 2026 NovaesWeb — Soluções Digitais. Todos os direitos reservados.</span>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
          {legalDocs.map((d) => (
            <Link
              key={d.id}
              to={d.id === "termos" ? "/termos" : d.id === "privacidade" ? "/privacidade" : "/reembolso"}
              className="inline-flex min-h-9 items-center underline decoration-border underline-offset-4 transition hover:text-neon-pink hover:decoration-neon-pink"
            >
              {d.short}
            </Link>
          ))}
          <Button
            variant="link"
            onClick={() => window.dispatchEvent(new Event("novaes:privacy-open"))}
            className="min-h-9 h-auto whitespace-normal px-0 text-muted-foreground underline underline-offset-4 hover:text-neon-pink"
          >
            Preferências de privacidade
          </Button>
        </div>
      </div>
    </footer>
  );
}
