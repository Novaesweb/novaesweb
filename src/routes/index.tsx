import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import {
  Globe, Palette, Zap, Headphones, ArrowRight, Box, Users, Rocket, ChevronRight, MessageCircle,
} from "lucide-react";
import portrait from "@/assets/portrait.jpg.asset.json";
import logo from "@/assets/logo.jpg.asset.json";
import s0 from "@/assets/s0.jpg.asset.json";
import s1 from "@/assets/s1.jpg.asset.json";
import s2 from "@/assets/s2.jpg.asset.json";
import s3 from "@/assets/s3.jpg.asset.json";
import s4 from "@/assets/s4.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NovaesWeb — Sites que vendem e uma identidade para o seu negócio" },
      { name: "description", content: "Criamos sites, sistemas e identidade visual completos para sua empresa se destacar e atrair mais clientes." },
      { property: "og:title", content: "NovaesWeb — Soluções Digitais" },
      { property: "og:description", content: "Sites, sistemas e identidade visual completos para sua empresa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

import { whatsLink } from "@/data/plans";
const WHATS = whatsLink();
const nav = ["Início", "Serviços", "Modelos", "Planos", "Criação Visual", "Sobre", "Contato"];
const services = [
  { img: s0.url, t: "Sites Profissionais", d: "Sites modernos, rápidos e otimizados para vender mais." },
  { img: s1.url, t: "Delivery e Cardápio", d: "Receba pedidos pelo WhatsApp com um site completo." },
  { img: s2.url, t: "Sistemas Personalizados", d: "Soluções sob medida para o seu negócio." },
  { img: s3.url, t: "Identidade Visual", d: "Logos, artes e materiais profissionais." },
  { img: s4.url, t: "Redes Sociais", d: "Artes e vídeos que destacam sua marca." },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader active="Início" />

      <section id="inicio" className="relative">
        <div className="absolute inset-y-0 right-0 w-full md:w-3/5">
          <img src={portrait.url} alt="Equipe NovaesWeb" className="h-full w-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-[1800px] px-4 sm:px-8 xl:px-14 pb-24 pt-16">
          <div className="max-w-xl 2xl:max-w-2xl">
            <span className="inline-block rounded-full border border-neon-pink px-4 py-1 text-xs font-semibold tracking-[0.2em]">SUA MARCA EM DESTAQUE NA INTERNET</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
              Sites que vendem e uma <RotatingWord /> para o seu negócio
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">Criamos sites, sistemas e identidade visual completos para sua empresa se destacar e atrair mais clientes.</p>
            <div className="mt-7 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              {[[Globe, "Sites Profissionais"], [Palette, "Design Moderno"], [Zap, "Entrega Rápida"], [Headphones, "Suporte Especializado"]].map(([I, t]: any) => (
                <div key={t} className="flex items-center gap-2"><I className="h-6 w-6 shrink-0 text-neon-pink" />{t}</div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={WHATS} className="flex items-center gap-3 rounded-full bg-neon px-7 py-4 font-semibold shadow-neon">
                <MessageCircle className="h-5 w-5" /> Solicitar orçamento <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#servicos" className="flex items-center gap-3 rounded-full border-2 border-neon-pink px-8 py-4 font-semibold">
                Ver modelos <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
          <p className="absolute right-8 top-10 hidden rotate-[-12deg] font-display text-2xl italic md:block">Mais que sites, criamos identidade!</p>
        </div>
        <div className="relative mx-auto max-w-[1800px] px-4 sm:px-8 xl:px-14 pb-12">
          <div className="grid grid-cols-2 gap-6 rounded-2xl border border-border bg-card/80 p-6 shadow-neon backdrop-blur md:grid-cols-4">
            {[[Box, "+30", "Projetos entregues"], [Users, "100%", "Clientes satisfeitos"], [Headphones, "Suporte", "via WhatsApp"], [Rocket, "Entrega ágil", "A partir de 2 dias úteis"]].map(([I, a, b]: any) => (
              <div key={a} className="flex items-center gap-4">
                <I className="h-10 w-10 text-neon-pink" />
                <div><div className="font-display text-2xl font-bold text-neon">{a}</div><div className="text-sm">{b}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-[1800px] px-4 sm:px-8 xl:px-14 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold tracking-[0.25em] text-neon-pink">NOSSOS SERVIÇOS</div>
            <h2 className="mt-2 text-4xl font-bold">Tudo o que seu negócio precisa</h2>
            <p className="mt-2 text-lg text-muted-foreground">Os 5 passos que a sua marca precisa para crescer na internet.</p>
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((s, i) => (
            <article key={s.t} className="relative flex flex-col rounded-xl border border-border bg-card p-2 transition hover:shadow-neon">
              <span className="absolute left-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-neon font-display font-bold shadow-neon">{i + 1}</span>
              <img src={s.img} alt={s.t} className="aspect-[3/2] w-full rounded-lg object-cover" loading="lazy" />
              <div className="flex flex-1 flex-col p-3">
                <h3 className="text-lg font-semibold">{s.t}</h3>
                <p className="mt-1 flex-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </article>
          ))}
        </div>

        <div id="contato" className="mt-14 flex flex-wrap items-center justify-between gap-6 rounded-2xl border-2 border-neon-pink bg-card p-7 shadow-neon">
          <div className="flex items-center gap-5">
            <Rocket className="h-12 w-12 text-neon-pink" />
            <div>
              <h3 className="text-2xl font-bold">Vamos criar algo incrível para o seu negócio?</h3>
              <p className="text-muted-foreground">Fale agora com a nossa equipe e receba uma proposta personalizada.</p>
            </div>
          </div>
          <a href={WHATS} className="flex items-center gap-3 rounded-full bg-neon px-8 py-4 font-semibold shadow-neon">
            <MessageCircle className="h-5 w-5" /> Falar no WhatsApp <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
      <footer className="border-t border-border/40 py-6 text-center text-sm text-muted-foreground">© 2026 NovaesWeb — Soluções Digitais</footer>
    </div>
  );
}

const words = ["identidade de marca", "presença digital", "vitrine que vende"];
function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % words.length), 2500);
    return () => clearInterval(t);
  }, []);
  return <span key={i} className="block whitespace-nowrap text-neon animate-in fade-in slide-in-from-bottom-3 duration-500">{words[i]}</span>;
}
