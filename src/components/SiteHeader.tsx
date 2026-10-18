import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import logo from "@/assets/logo.jpg.asset.json";
import { whatsLink } from "@/data/plans";
export const WHATS = whatsLink();

const nav: { label: string; to: "/" | "/planos" | "/criacao-visual" }[] = [
  { label: "Início", to: "/" },
  { label: "Serviços", to: "/" },
  { label: "Modelos", to: "/" },
  { label: "Planos", to: "/planos" },
  { label: "Criação Visual", to: "/criacao-visual" },
  { label: "Sobre", to: "/" },
  { label: "Contato", to: "/" },
];

export function SiteHeader({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="mx-auto grid max-w-[1800px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-8 lg:flex lg:justify-between xl:px-14">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img src={logo.url} alt="NovaesWeb" className="h-10 w-10 shrink-0 rounded-full object-cover shadow-neon sm:h-12 sm:w-12" />
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-xl font-bold sm:text-2xl">Novaes<span className="text-neon-pink">Web</span></div>
            <div className="text-xs text-muted-foreground">Soluções Digitais</div>
          </div>
        </Link>
        <nav className="hidden gap-7 text-sm lg:flex">
          {nav.map((n) => (
            <Link key={n.label} to={n.to} className={n.label === active ? "border-b-2 border-neon-pink pb-1 text-neon-pink" : "hover:text-neon-pink"}>{n.label}</Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a href={WHATS} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp" className="flex items-center gap-2 rounded-xl bg-neon px-3 py-3 text-sm font-semibold shadow-neon sm:px-5">
            <MessageCircle className="h-5 w-5" /> <span className="hidden sm:inline">Falar no WhatsApp</span>
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Abrir menu" className="grid h-11 w-11 place-items-center rounded-xl border border-border lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border/40 px-4 pb-4 animate-in fade-in slide-in-from-top-2 lg:hidden">
          {nav.map((n) => (
            <Link key={n.label} to={n.to} onClick={() => setOpen(false)} className={`block border-b border-border/30 py-3 ${n.label === active ? "text-neon-pink" : ""}`}>{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
