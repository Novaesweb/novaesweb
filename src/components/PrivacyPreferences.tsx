import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { analyticsConfiguration, parsePreferences, PRIVACY_STORAGE_KEY, startApprovedAnalytics, trackApprovedPage, type PrivacyPreferences as Preferences } from "@/lib/privacy";

export function PrivacyPreferences() {
  const [choice, setChoice] = useState<Preferences | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [error, setError] = useState("");
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    try {
      const saved = parsePreferences(localStorage.getItem(PRIVACY_STORAGE_KEY));
      setChoice(saved);
      setAnalytics(saved?.analytics ?? false);
    } catch { /* Storage denied: optional tracking stays off. */ }
    setLoaded(true);
    const show = () => setOpen(true);
    window.addEventListener("novaes:privacy-open", show);
    return () => window.removeEventListener("novaes:privacy-open", show);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    startApprovedAnalytics(choice, analyticsConfiguration);
    trackApprovedPage(pathname, choice, analyticsConfiguration);
  }, [choice, loaded, pathname]);

  function save(accepted: boolean) {
    const next: Preferences = { version: 1, analytics: accepted, savedAt: new Date().toISOString() };
    try { localStorage.setItem(PRIVACY_STORAGE_KEY, JSON.stringify(next)); }
    catch {
      setError("Seu navegador não permitiu guardar a escolha. Os opcionais permanecerão desativados.");
      return;
    }
    setChoice(next);
    setAnalytics(accepted);
    setOpen(false);
    setError("");
    // A fresh page stops an already-loaded analytics library when consent is withdrawn.
    if (!accepted && document.querySelector("script[data-novaes-analytics]")) {
      const target = window as unknown as Record<string, unknown>;
      if (analyticsConfiguration) target[`ga-disable-${analyticsConfiguration.measurementId}`] = true;
      for (const cookie of document.cookie.split(";")) {
        const name = cookie.split("=")[0]?.trim();
        if (!name || (name !== "_ga" && !name.startsWith("_ga_"))) continue;
        document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
        const segments = window.location.hostname.split(".");
        for (let i = 0; i < segments.length - 1; i++) document.cookie = `${name}=; Max-Age=0; path=/; domain=.${segments.slice(i).join(".")}; SameSite=Lax`;
      }
      window.location.reload();
    }
  }

  return <>
    {loaded && !choice && <aside aria-label="Preferências de privacidade" className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background px-4 py-4 shadow-neon sm:px-8">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl"><h2 className="text-lg font-semibold">Sua privacidade importa</h2><p className="mt-1 text-sm text-muted-foreground">Guardamos sua escolha neste navegador. Cookies opcionais só são usados com sua autorização. Hoje, a medição opcional está desativada. <Link to="/privacidade" className="underline underline-offset-4">Política de privacidade</Link>.</p></div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="min-h-11 whitespace-normal" onClick={() => save(true)}>Aceitar opcionais</Button>
          <Button variant="outline" className="min-h-11 whitespace-normal" onClick={() => save(false)}>Recusar opcionais</Button>
          <Button variant="outline" className="min-h-11 whitespace-normal" onClick={() => setOpen(true)}>Personalizar preferências</Button>
        </div>
      </div>
      {error && <p role="alert" className="mt-2 text-sm text-destructive">{error}</p>}
    </aside>}
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[85dvh] max-w-[calc(100%-2rem)] overflow-y-auto border-neon-violet bg-card text-card-foreground sm:max-w-lg">
        <DialogHeader><DialogTitle>Preferências de privacidade</DialogTitle><DialogDescription>Você pode mudar sua escolha a qualquer momento pelo rodapé.</DialogDescription></DialogHeader>
        <div className="space-y-5 text-sm">
          <div><h3 className="font-semibold">Estritamente necessários — sempre ativos</h3><p className="mt-1 text-muted-foreground">Funcionamento do site, proteção oferecida pela hospedagem e registro desta escolha. Não dependem da autorização para cookies opcionais.</p></div>
          <div><label className="flex min-h-11 items-center gap-3 font-semibold"><input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="size-5 accent-primary" />Medição opcional de visitas</label><p className="mt-1 text-muted-foreground">Google Analytics está desativado. Sua escolha só permitirá medição caso a NovaesWeb aprove e configure o serviço; recusar não impede o uso do site.</p></div>
          <Link to="/privacidade" onClick={() => setOpen(false)} className="inline-flex min-h-11 items-center underline underline-offset-4">Ler a Política de privacidade</Link>
          {error && <p role="alert" className="text-destructive">{error}</p>}
        </div>
        <DialogFooter><Button variant="outline" className="min-h-11" onClick={() => save(false)}>Recusar opcionais</Button><Button className="min-h-11 bg-neon" onClick={() => save(analytics)}>Salvar preferências</Button></DialogFooter>
      </DialogContent>
    </Dialog>
  </>;
}