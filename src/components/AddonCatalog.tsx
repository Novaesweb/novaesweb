import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp, MessageCircle, Settings, Tags, Wallet, Users, BarChart3, Megaphone, Globe, GraduationCap, Pencil, Image, PackagePlus, Headphones, Code2, Plug, Printer, Heart, ClipboardList, QrCode, Gift, Tv, DatabaseBackup, UserCog, Building2, FileSpreadsheet, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { addons, addonCategories, addonWhatsMsg, whatsLink, type AddonCategory } from "@/data/plans";

const addonIcons: Record<string, LucideIcon> = {
  "whatsapp-notify": MessageCircle, "whatsapp-activation": Settings, promo: Tags,
  finance: Wallet, team: Users, insights: BarChart3, marketing: Megaphone,
  domain: Globe, training: GraduationCap, adjustment: Pencil, banner: Image,
  "products-10": PackagePlus, "extra-support": Headphones, "custom-development": Code2,
  "custom-integrations": Plug, print: Printer, loyalty: Heart, "service-orders": ClipboardList,
  tables: QrCode, gift: Gift, tv: Tv, backup: DatabaseBackup, multiuser: UserCog,
  multibranch: Building2, import: FileSpreadsheet,
};

export function AddonCatalog() {
  const [filter, setFilter] = useState<AddonCategory | "all">("all");
  const [expanded, setExpanded] = useState<Partial<Record<AddonCategory, string>>>({});

  return (
    <section className="mt-10 border-t border-border pt-8" aria-labelledby="addons-heading">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id="addons-heading" className="text-2xl font-bold">Adicionais</h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">Recursos opcionais para o seu site, conforme a compatibilidade com o plano. Tarifas da Meta não estão incluídas.</p>
        </div>
        <span className="text-sm text-neon-pink">{addons.length} recursos e serviços</span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filtrar adicionais por categoria">
        {[{ id: "all" as const, name: "Todos" }, ...addonCategories].map((category) => (
          <Button key={category.id} type="button" variant="outline" aria-pressed={filter === category.id}
            onClick={() => { setFilter(category.id); setExpanded({}); }}
            className={`h-auto min-h-10 whitespace-normal border-border px-4 py-2 text-left motion-reduce:transition-none ${filter === category.id ? "bg-neon text-primary-foreground border-neon-pink hover:text-primary-foreground" : "bg-card text-muted-foreground hover:bg-card hover:text-foreground"}`}>
            {category.name}
          </Button>
        ))}
      </div>
      {addonCategories.filter((category) => filter === "all" || filter === category.id).map((category) => (
        <div key={category.id} className="mt-8" role="region" aria-labelledby={`category-${category.id}`}>
          <div className="mb-4 flex items-center gap-3">
            <h3 id={`category-${category.id}`} className="text-lg font-semibold">{category.name}</h3>
            <span className="text-xs text-muted-foreground">{addons.filter((addon) => addon.category === category.id).length}</span>
            <div className="h-px flex-1 bg-border/50" />
          </div>
          <div className="grid items-start gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {addons.filter((addon) => addon.category === category.id).map((addon) => {
              const Icon = addonIcons[addon.id] ?? Plug;
              const open = expanded[category.id] === addon.id;
              const descriptionId = `addon-description-${addon.id}`;
              return (
                <article key={addon.id} aria-labelledby={`addon-title-${addon.id}`} className={`min-w-0 rounded-lg border bg-card/80 p-5 transition-colors duration-200 motion-reduce:transition-none ${open ? "border-neon-pink" : "border-border/60 hover:border-neon-violet"}`}>
                  <div className="flex items-start gap-3">
                    <Icon aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-neon-pink" />
                    <h4 id={`addon-title-${addon.id}`} className="min-h-12 min-w-0 text-base font-semibold leading-6 break-words">{addon.name}</h4>
                  </div>
                  <p className="mt-4 min-h-7 font-display text-lg font-semibold text-neon-pink">{addon.price}</p>
                  <div className="mt-2 min-h-10 text-xs leading-5 text-muted-foreground">
                    {addon.status === "planning" ? <span className="font-medium text-neon-pink">Em planejamento · Sob consulta</span> : addon.status === "proposal" ? <><span className="font-medium text-neon-pink">Proposta nova · Sob consulta</span><br />Valor provisório, sujeito à aprovação.</> : null}
                  </div>
                  <Button type="button" variant="ghost" aria-expanded={open} aria-controls={descriptionId}
                    aria-label={`${open ? "Recolher" : "Ver"} detalhes de ${addon.name}`}
                    onClick={() => setExpanded((previous) => ({ ...previous, [category.id]: open ? undefined : addon.id }))}
                    className="mt-1 w-full justify-between px-0 text-muted-foreground hover:bg-transparent hover:text-foreground">
                    {open ? "Recolher detalhes" : "Ver detalhes"}{open ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                  <div id={descriptionId} aria-hidden={!open} className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="min-h-0 overflow-hidden">
                      <p className="pb-4 pt-2 text-sm leading-6 text-muted-foreground">{addon.description}</p>
                      {addon.status && <p className="pb-4 text-xs leading-5 text-muted-foreground">{addon.status === "planning" ? "Módulo opcional do site NovaesWeb, ainda em planejamento. Disponibilidade e prazo dependem de avaliação." : "Serviço proposto, sem disponibilidade imediata confirmada. Escopo e valor final dependem de aprovação."}</p>}
                    </div>
                  </div>
                  <Button asChild variant="outline" className="mt-3 w-full border-neon-violet bg-transparent text-foreground hover:border-neon-pink hover:bg-transparent hover:text-foreground">
                    <a href={whatsLink(addonWhatsMsg(addon))} target="_blank" rel="noopener noreferrer" aria-label={`Solicitar adicional ${addon.name}`}>Solicitar adicional<ArrowRight aria-hidden="true" /></a>
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}