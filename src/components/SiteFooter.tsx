import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import apiArt from "@/assets/api-whatsapp.webp";
import { legalDocs } from "@/data/legal";
import { whatsLink } from "@/data/plans";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 px-4 py-6 sm:px-8 xl:px-14">
      <div className="mx-auto mb-6 flex max-w-[1800px] flex-col items-center gap-5 rounded-2xl border border-neon-violet/40 bg-card/70 p-5 text-center shadow-neon backdrop-blur sm:flex-row sm:gap-7 sm:p-6 sm:text-left">
        <img
          src={apiArt}
          alt="Integração com WhatsApp API"
          loading="lazy"
          className="h-36 w-36 shrink-0 rounded-xl border border-neon-violet/40 object-cover shadow-neon sm:h-44 sm:w-44"
        />
        <div className="min-w-0 flex-1">
          <span className="inline-block rounded-full bg-neon px-3 py-1 text-[11px] font-semibold tracking-[0.18em]">NOVIDADE</span>
          <h2 className="mt-3 font-display text-xl font-bold">Agora trabalhamos com integração ao WhatsApp</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Conectamos seu site, loja ou sistema ao WhatsApp API: mensagens automáticas, avisos de pedido e atendimento centralizado no seu número.
          </p>
        </div>
        <a
          href={whatsLink("Olá, NovaesWeb! Quero saber mais sobre a integração com o WhatsApp API.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-neon px-5 py-3 text-sm font-semibold shadow-neon"
        >
          <MessageCircle className="h-4 w-4" /> Quero essa integração <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="mx-auto flex max-w-[1800px] flex-col items-center gap-3 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
        <span>© 2026 NovaesWeb — Soluções Digitais</span>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {legalDocs.map((d) => (
            <Link
              key={d.id}
              to={d.id === "termos" ? "/termos" : d.id === "privacidade" ? "/privacidade" : "/reembolso"}
              className="inline-flex min-h-11 items-center underline decoration-border underline-offset-4 transition hover:text-neon-pink hover:decoration-neon-pink"
            >
              {d.short}
            </Link>
          ))}
          <Button variant="link" onClick={() => window.dispatchEvent(new Event("novaes:privacy-open"))} className="min-h-11 h-auto whitespace-normal px-0 text-muted-foreground underline underline-offset-4 hover:text-neon-pink">Preferências de privacidade</Button>
        </div>
      </div>

    </footer>
  );
}
