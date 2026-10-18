import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Zap, Settings, ShieldCheck, Rocket, Crown, Gem, CheckCircle2, ArrowRight, BarChart3, Headphones,
  MessageCircle, Globe, Database, Palette, RefreshCw, Search, MessagesSquare, Plus,
} from "lucide-react";
import portrait from "@/assets/portrait.jpg.asset.json";
import { SiteHeader, WHATS } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { plans, faqs, comparison, addons, brl, half, whatsLink, planWhatsMsg } from "@/data/plans";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: "Planos — NovaesWeb" },
      { name: "description", content: "Planos Novaes Start, Business e Premium para ter um site ou sistema profissional com suporte e atualizações." },
      { property: "og:title", content: "Planos que se adaptam ao seu negócio — NovaesWeb" },
      { property: "og:description", content: "Escolha o plano ideal: Novaes Start, Business ou Premium." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Planos,
});

const icons = { start: Rocket, business: Crown, premium: Gem };

function Planos() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader active="Planos" />

      <section className="relative">
        <div className="absolute inset-y-0 right-0 w-full md:w-3/5">
          <img src={portrait.url} alt="Equipe NovaesWeb" className="h-full w-full object-cover object-[center_20%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="relative mx-auto max-w-[1800px] px-4 sm:px-8 xl:px-14 pb-16 pt-12">
          <div className="max-w-xl 2xl:max-w-2xl">
            <span className="inline-block rounded-full border border-neon-pink px-4 py-1 text-xs font-semibold tracking-[0.2em]">PLANOS NOVAESWEB</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl 2xl:text-7xl">Planos que se adaptam ao seu <span className="text-neon">negócio</span></h1>
            <p className="mt-4 text-lg text-muted-foreground">Escolha o plano ideal e tenha um site ou sistema profissional, com suporte, atualizações e tudo que você precisa para crescer na internet.</p>
            <div className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
              {[[Zap, "Ativação rápida", "Seu projeto no ar"], [Settings, "Suporte especializado", "Durante todo o plano"], [ShieldCheck, "50% na entrada", "50% na entrega"]].map(([I, a, b]: any) => (
                <div key={a} className="flex items-center gap-3"><I className="h-8 w-8 shrink-0 text-neon-pink" /><div><div className="font-semibold">{a}</div><div className="text-xs text-muted-foreground">{b}</div></div></div>
              ))}
            </div>
          </div>
          <p className="absolute right-8 top-10 hidden rotate-[-12deg] font-display text-2xl italic md:block">Mais que sites, criamos identidade!</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1800px] px-4 sm:px-8 xl:px-14">
        <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
          {plans.map((p) => <PlanCard key={p.id} p={p} />)}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-card/80 p-6 md:grid-cols-4">
          {[[BarChart3, "Resultados reais", "Mais visibilidade e vendas"], [Settings, "Atualizações inclusas", "Seu site sempre moderno"], [Headphones, "Suporte de verdade", "Fale direto com nossa equipe"], [ShieldCheck, "Segurança e estabilidade", "Seu site sempre no ar"]].map(([I, a, b]: any) => (
            <div key={a} className="flex items-center gap-4"><I className="h-9 w-9 shrink-0 text-neon-pink" /><div><div className="font-semibold">{a}</div><div className="text-sm text-muted-foreground">{b}</div></div></div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex gap-4">
              <Settings className="h-10 w-10 shrink-0 text-neon-pink" />
              <div>
                <h3 className="text-xl font-bold">Precisa de algo personalizado?</h3>
                <p className="mt-1 text-sm text-muted-foreground">Criamos planos sob medida para o seu negócio. Fale com a nossa equipe e receba uma proposta personalizada.</p>
                <a href={whatsLink("Olá, NovaesWeb! Gostaria de solicitar um orçamento personalizado.")} className="mt-4 inline-flex items-center gap-3 rounded-full border-2 border-neon-pink px-6 py-2.5 font-semibold"><MessageCircle className="h-5 w-5" /> Falar no WhatsApp <ArrowRight className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-bold">Todos os planos incluem</h3>
            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {[[Globe, "Domínio próprio", "(adicional)"], [Database, "Hospedagem", "inclusa"], [Palette, "Design", "personalizado"], [MessageCircle, "Suporte", "via WhatsApp"], [RefreshCw, "Manutenção", "técnica"], [Search, "Site otimizado", "para Google"]].map(([I, a, b]: any) => (
                <div key={a} className="flex flex-col items-center rounded-lg border border-border/60 p-2 text-center text-xs"><I className="mb-2 h-6 w-6 text-neon-pink" /><span className="font-semibold">{a}</span><span className="text-muted-foreground">{b}</span></div>
              ))}
            </div>
          </div>
        </div>


        <details className="group mt-10 rounded-2xl border border-border bg-card p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
            <div><h2 className="text-2xl font-bold">Comparativo dos planos</h2><p className="text-sm text-muted-foreground">Start sem painel · Business painel simplificado · Premium painel completo</p></div>
            <span className="flex shrink-0 items-center gap-2 rounded-full border-2 border-neon-pink px-4 py-2 text-sm font-semibold"><span className="group-open:hidden">Ver comparativo</span><span className="hidden group-open:inline">Fechar</span><Plus className="h-4 w-4 transition group-open:rotate-45" /></span>
          </summary>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[520px] text-sm">
              <thead><tr className="border-b border-border text-left"><th className="py-2">Recurso</th>{plans.map((p) => <th key={p.id} className="py-2 text-center text-neon-pink">{p.label}</th>)}</tr></thead>
              <tbody>
                {comparison.map(([f, ...v]) => (
                  <tr key={f} className="border-b border-border/40">
                    <td className="py-2">{f}</td>
                    {v.map((x, i) => <td key={i} className="py-2 text-center">{x === true ? <CheckCircle2 className="mx-auto h-5 w-5 text-neon-pink" /> : x === false ? <span className="text-muted-foreground">—</span> : <span className="text-xs font-semibold">{x}</span>}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>

        <Addons />

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-xl font-bold">Como funciona o pagamento</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• 50% de entrada para iniciar a criação.</li>
              <li>• 50% restantes na entrega.</li>
              <li>• A criação é cobrança única; a mensalidade é recorrente e começa na ativação do site.</li>
              <li>• Prazos estimados, contados após o recebimento dos materiais e informações.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-xl font-bold">Suporte</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Segunda a sexta-feira, das 9h às 18h (horário de Brasília).</li>
              <li>• Fins de semana e feriados: atendimento extraordinário mediante disponibilidade, R$ 50 por até 30 minutos.</li>
              <li>• Falhas críticas de responsabilidade da NovaesWeb não são cobradas.</li>
              <li>• Demandas fora do escopo são orçadas antes da execução.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_3fr]">
          <div className="flex items-center gap-3"><MessagesSquare className="h-10 w-10 text-neon-pink" /><h2 className="text-2xl font-bold">Dúvidas sobre nossos planos?</h2></div>
          <div className="grid gap-3 md:grid-cols-2">
            {faqs.map(([q, a]) => (
              <details key={q} className="group rounded-md border border-border bg-card px-4 py-2 text-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between">{q}<Plus className="h-4 w-4 transition group-open:rotate-45" /></summary>
                <p className="mt-2 text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="my-12 flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-2xl border-2 border-neon-pink bg-card p-6 shadow-neon">
          <div className="flex items-center gap-5">
            <img src={portrait.url} alt="" className="hidden h-24 w-24 rounded-full object-cover object-[60%_25%] sm:block" />
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
  const I = icons[p.id];
  const items = all ? p.items : p.items.slice(0, 4);
  return (
    <article className={`group relative flex flex-col rounded-2xl bg-card/90 p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-neon ${p.popular ? "border-2 border-neon-pink shadow-neon md:-mt-3" : "border border-border hover:border-neon-pink"}`}>
      {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-md bg-neon px-4 py-1 text-xs font-bold tracking-widest">MAIS POPULAR</span>}
      <div className="flex items-center gap-4">
        <I className="h-10 w-10 text-neon-pink transition group-hover:scale-110" />
        <div><h2 className="text-2xl font-bold">{p.name}</h2><div className="text-sm text-neon-pink">{p.tag}</div></div>
      </div>
      <div className="mt-5 flex items-baseline gap-2"><span className="text-xl font-bold">R$</span><span className="font-display text-5xl font-bold">{brl(p.monthly)}</span><span className="text-muted-foreground">/mês</span></div>
      <div className="mt-2 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full border border-neon-violet px-3 py-1">Criação R$ {brl(p.setup)}</span>
        <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">{p.deadline}</span>
      </div>

      <div className="mt-5 grid grid-cols-2 rounded-full border border-border p-1 text-sm">
        {(["inclui", "pagamento"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`rounded-full py-1.5 font-semibold transition ${tab === t ? "bg-neon shadow-neon" : "text-muted-foreground"}`}>{t === "inclui" ? "O que inclui" : "Pagamento"}</button>
        ))}
      </div>

      <div className="mt-4 flex-1">
        {tab === "inclui" ? (
          <>
            <ul className="space-y-2.5 text-sm">
              {items.map((i) => <li key={i} className="flex items-center gap-3 animate-in fade-in"><CheckCircle2 className="h-5 w-5 shrink-0 text-neon-pink" />{i}</li>)}
            </ul>
            <button onClick={() => setAll(!all)} className="mt-3 text-sm font-semibold text-neon-pink">{all ? "Mostrar menos" : `+ ${p.items.length - 4} recursos`}</button>
            {all && <p className="mt-3 text-xs text-muted-foreground animate-in fade-in">{p.excludes}</p>}
          </>
        ) : (
          <div className="space-y-3 text-sm animate-in fade-in">
            <div className="flex justify-between rounded-lg border border-border/60 p-3"><span>Entrada (50%)</span><span className="font-bold">R$ {brl(half(p.setup))}</span></div>
            <div className="flex justify-between rounded-lg border border-border/60 p-3"><span>Na entrega (50%)</span><span className="font-bold">R$ {brl(half(p.setup))}</span></div>
            <div className="flex justify-between rounded-lg border border-neon-pink p-3"><span>Mensalidade</span><span className="font-bold">R$ {brl(p.monthly)}</span></div>
            <p className="text-xs text-muted-foreground">Criação é pagamento único. A mensalidade começa na ativação do site.</p>
          </div>
        )}
      </div>
      <a href={whatsLink(planWhatsMsg(p))} target="_blank" rel="noopener noreferrer" className={`mt-6 flex items-center justify-center gap-3 rounded-full py-3 font-semibold transition hover:gap-5 ${p.popular ? "bg-neon shadow-neon" : "border-2 border-neon-violet"}`}>Contratar {p.label} <ArrowRight className="h-5 w-5" /></a>
    </article>
  );
}

const addonFilters = [
  ["Todos", () => true],
  ["Mensais", (v: string) => v.includes("/mês")],
  ["Avulsos", (v: string) => !v.includes("/mês") && !v.includes("orçamento")],
  ["Sob orçamento", (v: string) => v.includes("orçamento")],
] as const;

function Addons() {
  const [f, setF] = useState(0);
  const list = addons.filter(([, v]) => addonFilters[f]![1](v));
  return (
    <div className="mt-6 rounded-2xl border border-border bg-card p-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Adicionais</h2>
          <p className="mt-1 text-sm text-muted-foreground">Disponíveis quando compatíveis com o seu plano. Tarifas da Meta não estão incluídas.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {addonFilters.map(([n], i) => (
            <button key={n} onClick={() => setF(i)} className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${f === i ? "bg-neon shadow-neon" : "border border-border text-muted-foreground"}`}>{n}</button>
          ))}
        </div>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {list.map(([n, v]) => (
          <a key={n} href={whatsLink(`Olá, NovaesWeb! Gostaria de solicitar o adicional: ${n} (${v}).`)} target="_blank" rel="noopener noreferrer" className="group flex flex-col rounded-lg border border-border/60 p-3 text-sm transition animate-in fade-in hover:-translate-y-0.5 hover:border-neon-pink">
            <span className="font-semibold">{n}</span><span className="text-neon-pink">{v}</span><span className="mt-1 text-xs text-muted-foreground group-hover:text-foreground">Solicitar adicional →</span>
          </a>
        ))}
      </div>
    </div>
  );
}
