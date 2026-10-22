import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Zap, Settings, ShieldCheck, Rocket, Crown, Gem, CheckCircle2, ArrowRight, BarChart3, Headphones,
  MessageCircle, Globe, Database, Palette, RefreshCw, Search, Plus,
} from "lucide-react";
import portrait from "@/assets/portrait.webp";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AddonHighlights } from "@/components/AddonHighlights";
import { brl, whatsLink } from "@/data/plans";
import { commercialPlans as plans, commercialComparison as comparison, commercialWhatsMsg as planWhatsMsg, launchSaving, contentChangeRules, separateModules } from "@/data/commercial-plans";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: "Planos — NovaesWeb" },
      { name: "description", content: "Novaes Start: criação única por R$ 630 e R$ 0/mês. Business: R$ 190/mês. Premium: R$ 270/mês. Projetos personalizados sob orçamento." },
      { property: "og:title", content: "Planos que se adaptam ao seu negócio — NovaesWeb" },
      { property: "og:description", content: "Criação avulsa no Start, planos Business e Premium e soluções personalizadas sob orçamento." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Planos,
});

const icons = { start: Rocket, business: Crown, premium: Gem };

function Planos() {
  return (
    <div data-commercial-plans className="min-h-screen overflow-x-hidden">
      <style>{"html:has([data-commercial-plans]), body:has([data-commercial-plans]) { overflow-x: hidden; } body:has([data-commercial-plans]) { position: relative; }"}</style>
      <SiteHeader active="Planos" />

      <section className="relative">
        <div className="absolute inset-y-0 right-0 w-full md:w-3/5">
          <img src={portrait} alt="Imagem de apresentação da marca NovaesWeb" className="h-full w-full object-cover object-[center_20%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="relative mx-auto max-w-[1800px] px-4 sm:px-8 xl:px-14 pb-16 pt-12">
          <div className="max-w-xl 2xl:max-w-2xl">
            <span className="inline-block rounded-full border border-neon-pink px-4 py-1 text-xs font-semibold tracking-[0.2em]">PLANOS NOVAESWEB</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl 2xl:text-7xl">Planos que se adaptam ao seu <span className="text-neon">negócio</span></h1>
             <p className="mt-4 text-lg text-muted-foreground">Escolha entre a criação avulsa do Start e os planos Business e Premium, com mensalidade, suporte e manutenção.</p>
            <div className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
               {[[Zap, "Ativação rápida", "Seu projeto no ar"], [Settings, "Suporte especializado", "Conforme contratação"], [ShieldCheck, "Criação em duas etapas", "Start: saldo antes da publicação"]].map(([I, a, b]: any) => (
                <div key={a} className="flex items-center gap-3"><I className="h-8 w-8 shrink-0 text-neon-pink" /><div><div className="font-semibold">{a}</div><div className="text-xs text-muted-foreground">{b}</div></div></div>
              ))}
            </div>
          </div>
          <p className="absolute right-8 top-10 hidden rotate-[-12deg] font-display text-2xl italic md:block">Mais que sites, criamos identidade!</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1800px] px-4 sm:px-8 xl:px-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-y border-neon-pink/50 py-5">
          <div className="flex items-center gap-3"><Zap aria-hidden="true" className="h-7 w-7 shrink-0 text-neon-pink" /><h2 className="text-xl font-bold">Seu negócio online por um preço mais acessível!</h2></div>
          <p className="text-base font-semibold">De R$ 890 por R$ 630. Economize R$ 260 na criação da sua landing page!</p>
          <p className="w-full text-sm text-muted-foreground">Comece com R$ 315 e pague o restante antes da publicação. Pagamento único, sem mensalidade obrigatória. Suporte recorrente, manutenção, hospedagem recorrente, domínio e extras não incluídos, salvo contratação separada.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
          {plans.map((p) => <PlanCard key={p.id} p={p} />)}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 rounded-2xl border border-border bg-card/80 p-6 md:grid-cols-4">
           {[[BarChart3, "Presença digital", "Apresente seu negócio"], [Settings, "Atualizações", "Conforme contratação"], [Headphones, "Suporte de verdade", "Incluso ou opcional no Start"], [ShieldCheck, "Manutenção técnica", "Business e Premium"]].map(([I, a, b]: any) => (
            <div key={a} className="flex items-center gap-4"><I className="h-9 w-9 shrink-0 text-neon-pink" /><div><div className="font-semibold">{a}</div><div className="text-sm text-muted-foreground">{b}</div></div></div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex gap-4">
              <Settings className="h-10 w-10 shrink-0 text-neon-pink" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-neon-pink">NOVAES PERSONALIZADO</p>
                <h3 className="mt-2 text-xl font-bold">Seu projeto é diferente? A NovaesWeb cria com você.</h3>
                <p className="mt-1 text-sm text-muted-foreground">Solicite um site, painel ou funcionalidades específicas para o seu negócio. Você recebe uma proposta individual com escopo, compatibilidade, disponibilidade, valores e prazo. Hospedagem, manutenção e limites de alterações serão definidos na proposta, quando aplicáveis.</p>
                <Button asChild variant="outline" className="mt-4 h-auto w-full whitespace-normal rounded-full border-2 border-neon-pink px-4 py-3"><a href={whatsLink("Olá, NovaesWeb! Gostaria de solicitar um orçamento personalizado para um site, painel ou funcionalidades específicas, com escopo, preço, prazo, hospedagem, manutenção e limites de alterações definidos em proposta individual.")} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5 shrink-0" /> Solicitar orçamento personalizado <ArrowRight className="h-5 w-5 shrink-0" /></a></Button>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
             <h3 className="font-bold">Business e Premium incluem</h3>
            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {[[Globe, "Domínio próprio", "(adicional)"], [Database, "Hospedagem", "inclusa"], [Palette, "Design", "personalizado"], [MessageCircle, "Suporte", "via WhatsApp"], [RefreshCw, "Manutenção", "técnica"], [Search, "Site otimizado", "para Google"]].map(([I, a, b]: any) => (
                <div key={a} className="flex flex-col items-center rounded-lg border border-border/60 p-2 text-center text-xs"><I className="mb-2 h-6 w-6 text-neon-pink" /><span className="font-semibold">{a}</span><span className="text-muted-foreground">{b}</span></div>
              ))}
            </div>
          </div>
        </div>


        <details className="group mt-10 rounded-2xl border border-border bg-card p-6">
          <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-4">
            <div><h2 className="text-2xl font-bold">Comparativo dos planos</h2><p className="text-sm text-muted-foreground">Start sem painel · Business painel básico · Premium painel ampliado</p></div>
            <span className="flex shrink-0 items-center gap-2 rounded-full border-2 border-neon-pink px-4 py-2 text-sm font-semibold"><span className="group-open:hidden">Ver comparativo</span><span className="hidden group-open:inline">Fechar</span><Plus className="h-4 w-4 transition group-open:rotate-45" /></span>
          </summary>
          <p className="mt-4 text-xs text-muted-foreground">Painéis e recursos de gerenciamento: disponibilidade sob consulta, conforme validação para o projeto contratado.</p>
          <div className="mt-4 max-w-full overflow-x-auto [contain:inline-size]" role="region" aria-label="Tabela comparativa dos planos" tabIndex={0}>
            <table className="w-full min-w-[520px] text-sm">
              <thead><tr className="border-b border-border text-left"><th className="py-2">Recurso</th>{plans.map((p) => <th key={p.id} className="py-2 text-center text-neon-pink">{p.label}</th>)}</tr></thead>
              <tbody>
                {comparison.map(([f, ...v]) => (
                  <tr key={f} className="border-b border-border/40">
                    <td className="py-2">{f}</td>
                    {v.map((x, i) => <td key={i} className="py-2 text-center">{x === true ? <><CheckCircle2 aria-hidden="true" className="mx-auto h-5 w-5 text-neon-pink" /><span className="sr-only">Incluído</span></> : x === false ? <><span aria-hidden="true" className="text-muted-foreground">—</span><span className="sr-only">Não incluído</span></> : <span className="text-xs font-semibold">{x}</span>}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>

        <section className="mt-8 border-y border-border py-6" aria-labelledby="content-rules-heading">
          <h2 id="content-rules-heading" className="text-2xl font-bold">Alterações de conteúdo: clareza em cada mês</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            <li>Business e Premium incluem até <strong className="text-foreground">{contentChangeRules.requestsPerMonth} solicitações de alteração de conteúdo por mês</strong> realizadas pela NovaesWeb.</li>
            {!contentChangeRules.clientEditsConsumeRequests && <li>Alterações feitas diretamente pelo cliente no painel não consomem essas solicitações.</li>}
            {!contentChangeRules.cumulative && <li>As solicitações não são cumulativas para os meses seguintes.</li>}
            <li>Criação de novas páginas, redesigns, funcionalidades inéditas e integrações não fazem parte das alterações simples e podem exigir orçamento separado.</li>
            {!contentChangeRules.providerDefectCorrectionsConsumeRequests && <li>Correções de defeitos de responsabilidade da NovaesWeb não consomem as solicitações.</li>}
            <li>Os limites exatos de complexidade e prazo de atendimento devem constar no contrato.</li>
          </ul>
        </section>
        <AddonHighlights />

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-xl font-bold">Como funciona o pagamento</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• 50% de entrada para iniciar a criação.</li>
              <li>• Start: 50% restantes antes da publicação. Business e Premium: 50% restantes na entrega.</li>
               <li>• Start: criação de R$ 630,00, sem mensalidade obrigatória e sem pagamento mensal da criação.</li>
               <li>• Business e Premium: criação única; mensalidade recorrente a partir da ativação do site.</li>
              <li>• Prazos estimados, contados após o recebimento dos materiais e informações.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-xl font-bold">Suporte</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
               <li>• Start: sem suporte incluso. Contratação opcional por R$ 80,00 por mês, separada da criação.</li>
               <li>• Business e Premium: suporte incluso na mensalidade.</li>
              <li>• Segunda a sexta-feira, das 9h às 18h (horário de Brasília).</li>
              <li>• Fins de semana e feriados: atendimento extraordinário mediante disponibilidade, R$ 50 por até 30 minutos.</li>
              <li>• Falhas críticas de responsabilidade da NovaesWeb não são cobradas.</li>
              <li>• Demandas fora do escopo são orçadas antes da execução.</li>
            </ul>
          </div>
        </div>

        <div className="my-12 flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-2xl border-2 border-neon-pink bg-card p-6 shadow-neon">
          <div className="flex items-center gap-5">
            <img src={portrait} alt="" className="hidden h-24 w-24 rounded-full object-cover object-[60%_25%] sm:block" />
            <div>
              <h3 className="text-2xl font-bold">Vamos criar algo incrível para o seu negócio?</h3>
              <p className="text-muted-foreground">Fale agora com a nossa equipe e receba uma proposta personalizada.</p>
            </div>
          </div>
          <a href={whatsLink("Olá, NovaesWeb! Gostaria de solicitar um orçamento.")} className="flex items-center gap-3 rounded-full bg-neon px-8 py-4 font-semibold shadow-neon"><MessageCircle className="h-5 w-5" /> Solicitar orçamento <ArrowRight className="h-5 w-5" /></a>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

type Plan = (typeof plans)[number];

function PlanCard({ p }: { p: Plan }) {
  const [tab, setTab] = useState<"inclui" | "pagamento">("inclui");
  const [all, setAll] = useState(false);
  const [withSupport, setWithSupport] = useState(false);
  const isOneTime = p.monthly === 0;
  const I = icons[p.id];
  const items = all ? p.items : p.items.slice(0, 4);
  return (
    <article className={`group relative flex flex-col rounded-2xl bg-card/90 p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-neon ${p.popular ? "border-2 border-neon-pink shadow-neon md:-mt-3" : "border border-border hover:border-neon-pink"}`}>

      <div className="flex items-center gap-4">
        <I className="h-10 w-10 shrink-0 text-neon-pink transition group-hover:scale-110" />
        <div className="min-w-0"><h2 className="text-2xl font-bold">{p.name}</h2><div className="text-sm text-neon-pink">{p.tag}</div></div>
      </div>
      {isOneTime ? <div className="mt-5">
        <p className="text-sm text-muted-foreground">Criação: de <s>R$ {brl(p.previousSetup ?? p.setup)}</s> por</p>
        <div className="mt-1 flex flex-wrap items-baseline gap-2"><span className="text-xl font-bold">R$</span><span className="font-display text-5xl font-bold">{brl(p.setup)}</span></div>
        <p className="mt-1 text-sm font-semibold text-neon-pink">Economize R$ {brl(launchSaving(p))} · pagamento único</p>
        <p className="mt-3 text-xl font-bold">R$ {brl(p.monthly)}/mês</p>
        <p className="mt-1 text-xs text-muted-foreground">Sem mensalidade obrigatória. A criação é paga uma única vez, não é gratuita.</p>
      </div> : <div className="mt-5 flex flex-wrap items-baseline gap-2"><span className="text-xl font-bold">R$</span><span className="font-display text-5xl font-bold">{brl(p.monthly)}</span><span className="text-muted-foreground">/mês</span></div>}
      <div className="mt-2 flex flex-wrap gap-2 text-xs">
         <span className="rounded-full border border-neon-violet px-3 py-1">{isOneTime ? "Sem mensalidade obrigatória" : `Criação R$ ${brl(p.setup)}`}</span>
        <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">{p.deadline}</span>
      </div>

      <details className="mt-3 text-xs text-muted-foreground" open={isOneTime || undefined}>
        <summary className="flex cursor-pointer items-center gap-2 font-semibold text-foreground">Não incluído no plano <Plus className="h-4 w-4 shrink-0" /></summary>
        <p className="mt-2 leading-5">{p.excludes}</p>
        {p.id === "premium" && <ul className="mt-2 space-y-1 leading-5">{separateModules.map(name => <li key={name}>• {name}</li>)}</ul>}
      </details>
      {!isOneTime && <p className="mt-2 text-xs leading-5 text-muted-foreground">Painel e recursos de gerenciamento: disponibilidade sob consulta, conforme validação para o seu projeto.</p>}
       {p.optionalSupportMonthly !== null && <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 text-sm"><input type="checkbox" checked={withSupport} onChange={(event) => setWithSupport(event.target.checked)} className="mt-1 h-4 w-4 shrink-0" /><span><span className="font-semibold">Adicionar suporte opcional — R$ {brl(p.optionalSupportMonthly)}/mês</span><span className="mt-1 block text-xs text-muted-foreground">Contratado separadamente. Não é parcela da criação.</span></span></label>}

      <div className="mt-5 grid grid-cols-2 rounded-full border border-border p-1 text-sm">
        {(["inclui", "pagamento"] as const).map((t) => (
          <Button variant="ghost" key={t} aria-pressed={tab === t} onClick={() => setTab(t)} className={`min-h-11 h-auto whitespace-normal rounded-full py-1.5 font-semibold transition ${tab === t ? "bg-neon shadow-neon" : "text-muted-foreground"}`}>{t === "inclui" ? "O que inclui" : "Pagamento"}</Button>
        ))}
      </div>

      <div className="mt-4 flex-1">
        {tab === "inclui" ? (
          <>
            <ul className="space-y-2.5 text-sm">
              {items.map((i) => <li key={i} className="flex items-center gap-3 animate-in fade-in"><CheckCircle2 className="h-5 w-5 shrink-0 text-neon-pink" />{i}</li>)}
            </ul>
            <Button variant="link" aria-expanded={all} onClick={() => setAll(!all)} className="mt-3 min-h-11 h-auto px-0 text-sm font-semibold text-neon-pink">{all ? "Mostrar menos" : `+ ${p.items.length - 4} recursos`}</Button>

          </>
        ) : (
          <div className="space-y-3 text-sm animate-in fade-in">
            <div className="flex flex-wrap justify-between gap-2 rounded-lg border border-border/60 p-3"><span>Na contratação (50%)</span><span className="shrink-0 font-bold">R$ {brl(p.setupPayment.upfront)}</span></div>
            <div className="flex flex-wrap justify-between gap-2 rounded-lg border border-border/60 p-3"><span>{p.setupPayment.remainderDue === "before-publication" ? "Antes da publicação (50%)" : "Na entrega (50%)"}</span><span className="shrink-0 font-bold">R$ {brl(p.setupPayment.remainder)}</span></div>
             {!isOneTime && <div className="flex flex-wrap justify-between gap-2 rounded-lg border border-neon-pink p-3"><span>Mensalidade</span><span className="font-bold">R$ {brl(p.monthly)}</span></div>}
             <p className="text-xs text-muted-foreground">{isOneTime ? "Criação com cobrança única: R$ 315,00 na contratação e R$ 315,00 antes da publicação. Sem pagamento mensal da criação. Suporte opcional contratado separadamente." : "Criação é pagamento único. A mensalidade começa na ativação do site."}</p>
          </div>
        )}
      </div>
      <Button asChild variant="outline" className={`mt-6 h-auto whitespace-normal rounded-full border-2 py-3 ${isOneTime ? "border-neon-pink bg-neon shadow-neon" : "border-neon-violet"}`}><a href={whatsLink(planWhatsMsg(p, withSupport))} target="_blank" rel="noopener noreferrer">Contratar {p.label} <ArrowRight className="h-5 w-5 shrink-0" /></a></Button>
    </article>
  );
}

