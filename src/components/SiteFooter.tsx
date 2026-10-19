import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle, X } from "lucide-react";
import apiArt from "@/assets/api-whatsapp.webp";
import { legalDocs, type LegalDoc } from "@/data/legal";
import { whatsLink } from "@/data/plans";

export function SiteFooter() {
  const [doc, setDoc] = useState<LegalDoc | null>(null);

  useEffect(() => {
    if (!doc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDoc(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [doc]);

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
          <h3 className="mt-3 font-display text-xl font-bold">Agora trabalhamos com integração ao WhatsApp</h3>
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
            <button
              key={d.id}
              onClick={() => setDoc(d)}
              className="underline decoration-border underline-offset-4 transition hover:text-neon-pink hover:decoration-neon-pink"
            >
              {d.short}
            </button>
          ))}
        </div>
      </div>

      {doc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={doc.title}
          onClick={() => setDoc(null)}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-neon-violet/40 bg-card shadow-neon animate-in fade-in slide-in-from-bottom-4"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border/50 bg-neon px-5 py-4">
              <div className="min-w-0">
                <h2 className="font-display text-lg font-bold leading-tight sm:text-xl">{doc.title}</h2>
                <p className="mt-1 text-xs opacity-80">Atualizado em {doc.updated}</p>
              </div>
              <button
                onClick={() => setDoc(null)}
                aria-label="Fechar"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 transition hover:bg-white/15"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-5">
              <p className="text-sm text-muted-foreground">{doc.intro}</p>
              <div className="mt-5 space-y-5">
                {doc.sections.map((s) => (
                  <section key={s.h}>
                    <h3 className="font-display text-base font-semibold text-foreground">{s.h}</h3>
                    {s.p?.map((t) => (
                      <p key={t} className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {t}
                      </p>
                    ))}
                    {s.list && (
                      <ul className="mt-2 space-y-2">
                        {s.list.map((t) => (
                          <li key={t} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-pink" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            </div>

            <div className="border-t border-border/50 px-5 py-3">
              <button
                onClick={() => setDoc(null)}
                className="w-full rounded-xl bg-neon px-5 py-3 text-sm font-semibold shadow-neon"
              >
                Entendi, fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
