import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { legalDocs, type LegalDoc } from "@/data/legal";

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
