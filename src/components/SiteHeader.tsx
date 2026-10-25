import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import logo from "@/assets/logo-mark.webp";
import { whatsLink } from "@/data/plans";
import { Button } from "@/components/ui/button";
export const WHATS = whatsLink();

const nav: {
  label: string;
  to: "/" | "/planos" | "/simulador-de-economia" | "/comparativo" | "/quem-somos";
  hash?: string;
}[] = [
  { label: "Início", to: "/" },
  { label: "Serviços", to: "/", hash: "servicos" },
  { label: "Planos", to: "/planos" },
  { label: "Simulador", to: "/simulador-de-economia" },
  { label: "Comparativo", to: "/comparativo" },
  { label: "Quem Somos", to: "/quem-somos" },
  { label: "Contato", to: "/", hash: "cadastro" },
];

export function SiteHeader({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-[1800px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-8 lg:flex lg:justify-between xl:px-14">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="NovaesWeb"
            className="h-10 w-10 shrink-0 rounded-full object-cover shadow-neon sm:h-12 sm:w-12"
          />
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-xl font-bold sm:text-2xl">
              Novaes<span className="text-neon-pink">Web</span>
            </div>
            <div className="text-xs text-muted-foreground">Soluções Digitais</div>
          </div>
        </Link>
        <nav className="hidden gap-7 text-sm font-medium lg:flex">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              hash={n.hash}
              className={
                n.label === active
                  ? "border-b-2 border-neon-pink pb-1 font-semibold text-neon-pink"
                  : "text-foreground/90 transition hover:text-neon-pink"
              }
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={WHATS}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="flex items-center gap-2 rounded-xl bg-neon px-3 py-3 text-sm font-semibold shadow-neon sm:px-5"
          >
            <MessageCircle className="h-5 w-5" />{" "}
            <span className="hidden sm:inline">Falar no WhatsApp</span>
          </a>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="menu-celular"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid h-11 w-11 place-items-center rounded-xl border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {open && (
        <nav
          id="menu-celular"
          aria-label="Menu principal no celular"
          className="border-t border-border/40 px-4 pb-4 animate-in fade-in slide-in-from-top-2 lg:hidden"
        >
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              hash={n.hash}
              onClick={() => setOpen(false)}
              className={`block border-b border-border/30 py-3 ${
                n.label === active ? "font-semibold text-neon-pink" : ""
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
