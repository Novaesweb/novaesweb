import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, MessageCircle, Sparkles, Shirt, Image, Store, CheckCircle2, Video } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { whatsLink, videoPacks, packWhatsMsg, brl } from "@/data/plans";
import portrait from "@/assets/portrait.jpg.asset.json";
import a1 from "@/assets/amb1.jpg.asset.json";
import a2 from "@/assets/amb2.jpg.asset.json";
import a3 from "@/assets/amb3.jpg.asset.json";
import a4 from "@/assets/amb4.jpg.asset.json";

export const Route = createFileRoute("/criacao-visual")({
  head: () => ({
    meta: [
      { title: "Criação Visual — Vendedora virtual para sua loja | NovaesWeb" },
      { name: "description", content: "Criamos uma vendedora virtual com a identidade da sua loja: uniforme, logo e artes para o seu site e redes sociais." },
      { property: "og:title", content: "Criação Visual — NovaesWeb" },
      { property: "og:description", content: "Uma vendedora virtual com a identidade da sua loja." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CriacaoVisual,
});

const models = [
  { img: a3.url, t: "Com placa personalizada", d: "Segurando a mensagem da sua loja." },
  { img: a1.url, t: "Modelo Clássico", d: "Uniforme e logo da sua marca." },
  { img: a2.url, t: "Modelo Natural", d: "Visual leve e acolhedor." },
  { img: a4.url, t: "Modelo Moderno", d: "Presença forte e confiante." },
];

const steps = [
  [Store, "Você envia sua marca", "Logo, cores e o estilo da sua loja."],
  [Shirt, "Vestimos a vendedora", "Uniforme e logo da sua empresa."],
  [Image, "Criamos as artes", "Para o site, banners e redes sociais."],
  [Sparkles, "Sua loja ganha rosto", "Uma identidade só sua."],
] as const;

function CriacaoVisual() {
  const [sel, setSel] = useState(0);
  const m = models[sel]!;
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader active="Criação Visual" />
      <div className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <img src={portrait.url} alt="" className="h-full w-full object-cover object-top opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>
      <section className="relative mx-auto grid max-w-[1800px] items-center gap-10 px-4 sm:px-8 xl:px-14 py-12 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full border border-neon-pink px-4 py-1 text-xs font-semibold tracking-[0.2em]">CRIAÇÃO VISUAL</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl 2xl:text-7xl">Criamos a melhor <span className="text-neon">vendedora</span> pra sua loja</h1>
          <p className="mt-4 text-lg text-muted-foreground">Uma vendedora virtual com a identidade da sua marca: uniforme com o seu logo, cores da sua loja e artes prontas para o site e as redes sociais.</p>
          <div className="mt-6 space-y-2 text-sm">
            {["Logo da sua loja no uniforme", "Fundo com as cores da sua marca", "Artes para site, banner e Instagram"].map((x) => (
              <div key={x} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-neon-pink" />{x}</div>
            ))}
          </div>
          <a href={whatsLink("Olá, NovaesWeb! Quero criar uma vendedora virtual com a identidade da minha loja.")} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-neon px-8 py-4 font-semibold shadow-neon transition hover:gap-5">
            <MessageCircle className="h-5 w-5" /> Quero a minha vendedora <ArrowRight className="h-5 w-5" />
          </a>
        </div>
        <div>
          <div className="relative overflow-hidden rounded-2xl border-2 border-neon-pink shadow-neon">
            <img key={m.img} src={m.img} alt={m.t} className="aspect-[3/4] w-full object-cover animate-in fade-in duration-500" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-5">
              <div className="font-display text-xl font-bold">{m.t}</div>
              <div className="text-sm text-muted-foreground">{m.d}</div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {models.map((x, i) => (
              <button key={x.t} onClick={() => setSel(i)} aria-label={x.t} className={`overflow-hidden rounded-xl border-2 transition hover:-translate-y-1 ${i === sel ? "border-neon-pink shadow-neon" : "border-border opacity-70"}`}>
                <img src={x.img} alt="" loading="lazy" className="aspect-square w-full object-cover object-top" />
              </button>
            ))}
          </div>
        </div>
      </section>
      </div>

      <section className="mx-auto max-w-[1800px] px-4 sm:px-8 xl:px-14 pb-12">
        <h2 className="text-3xl font-bold">Como funciona</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([I, t, d], i) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-neon-pink">
              <div className="flex items-center justify-between"><I className="h-9 w-9 text-neon-pink" /><span className="font-display text-3xl font-bold text-neon">0{i + 1}</span></div>
              <div className="mt-4 font-semibold">{t}</div>
              <div className="text-sm text-muted-foreground">{d}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-[1800px] px-4 sm:px-8 xl:px-14 pb-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Pacotes de vídeos e imagens</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">Valores por pacote, sem mensalidade. A economia considera os valores avulsos.</p>
          </div>
          <span className="rounded-full border border-neon-violet px-4 py-1 text-xs font-semibold tracking-[0.2em]">SEM MENSALIDADE</span>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {videoPacks.map((p) => (
            <div key={p.name} className="flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-neon-pink">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <span className="shrink-0 rounded-full bg-neon px-3 py-1 text-xs font-bold">Economize R$ {p.savings}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{p.tag}</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="flex items-center gap-3"><Video className="h-5 w-5 text-neon-pink" />{p.videos}</li>
                <li className="flex items-center gap-3"><Image className="h-5 w-5 text-neon-pink" />{p.images}</li>
              </ul>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-extrabold text-neon">R$ {brl(p.price)}</span>
                <span className="text-sm text-muted-foreground">por pacote</span>
              </div>
              <a href={whatsLink(packWhatsMsg(p))} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-neon-pink px-5 py-3 font-semibold transition hover:gap-4">
                <MessageCircle className="h-5 w-5" /> Quero esse pacote
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-2xl border border-border bg-card/60 p-5 text-sm text-muted-foreground">
          Os dois primeiros pacotes têm o mesmo valor porque atendem a objetivos diferentes: várias divulgações curtas ou uma apresentação mais completa.
        </p>
      </section>
      <SiteFooter />
    </div>
  );
}
