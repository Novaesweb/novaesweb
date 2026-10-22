import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import {
  Globe, Palette, Zap, Headphones, ArrowRight, Box, Users, Rocket, ChevronRight, MessageCircle,
  MessagesSquare, Plus, Smartphone, TrendingUp, ShieldCheck, ChevronDown,
} from "lucide-react";
import portrait from "@/assets/portrait-wide.webp";
import s0 from "@/assets/s0.webp";
import s1 from "@/assets/s1.webp";
import s2 from "@/assets/s2.webp";
import s3 from "@/assets/s3.webp";
import s4 from "@/assets/s4.webp";
import mBurger from "@/assets/modelo-burge-house.webp";
import mAcai from "@/assets/modelo-a-a-royal-two.webp";
import mFogo from "@/assets/modelo-fogo-na-brasa.jpg";
import mOlympus from "@/assets/modelo-olympus-burger.webp";
import mPet from "@/assets/modelo-pet-em-casa.webp";

const modelos = [
  { nome: "Burger House", nicho: "Hamburgueria · Delivery", url: "https://burge-house.vercel.app/", img: mBurger, d: "Cardápio digital, carrinho, checkout e acompanhamento do pedido, com painel para o dono." },
  { nome: "Açaí Royal", nicho: "Açaiteria", url: "https://a-a-royal-two.vercel.app/", img: mAcai, d: "O cliente monta o açaí, escolhe os adicionais e pede direto pelo WhatsApp." },
  { nome: "Fogo na Brasa", nicho: "Churrascaria · Lanches", url: "https://fogo-na-brasa.vercel.app/", img: mFogo, d: "Hambúrgueres, churrasco e lanches em uma vitrine que dá fome e leva ao pedido." },
  { nome: "Olympus Burger", nicho: "Hamburgueria · Artesanal", url: "https://olympus-burger-menu-ashen.vercel.app/", img: mOlympus, d: "Cardápio com cara de marca premium: destaque para os lançamentos e pedido rápido." },
  { nome: "Pet em Casa", nicho: "Pet Shop · Banho e Tosa", url: "https://pet-em-casa-liard.vercel.app/", img: mPet, d: "Serviços de banho e tosa com agendamento direto pelo site, do jeitinho que o pet merece." },
];

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
import { allFaqs, faqsShown } from "@/data/faqs";
const WHATS = whatsLink();
const services = [
  { img: s0, t: "Sites Profissionais", d: "Sites modernos, rápidos e otimizados para vender mais." },
  { img: s1, t: "Delivery e Cardápio", d: "Receba pedidos pelo WhatsApp com um site completo." },
  { img: s2, t: "Sistemas Personalizados", d: "Soluções sob medida para o seu negócio." },
  { img: s3, t: "Identidade Visual", d: "Logos, artes e materiais profissionais." },
  { img: s4, t: "Redes Sociais", d: "Artes e vídeos que destacam sua marca." },
];

const steps = [
  ["01", "Vamos entender", "Você conta sua ideia. Definimos o escopo, o plano e as condições na proposta."],
  ["02", "Hora de criar", "Com os materiais recebidos e a proposta alinhada, começamos o desenvolvimento."],
  ["03", "Você acompanha", "Apresentamos o projeto para revisão e alinhamos os detalhes da entrega."],
  ["04", "Pronto para começar", "Concluímos a entrega conforme a proposta. Start sem mensalidade obrigatória; Business e Premium com mensalidade na ativação."],
];

function Index() {
  const [faqsAbertas, setFaqsAbertas] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader active="Início" />

      <section id="inicio" className="relative">
        <div className="absolute inset-y-0 right-0 hidden w-full overflow-hidden md:block md:w-3/5">
          <img src={portrait} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-40 blur-2xl" />
          <img src={portrait} alt="Imagem de apresentação da marca NovaesWeb" className="absolute inset-y-0 right-0 h-full w-full object-cover object-[70%_center] md:w-auto md:max-w-none md:object-right" />
          <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-[1800px] px-4 sm:px-8 xl:px-14 pb-24 pt-16">
          <div className="max-w-xl 2xl:max-w-2xl">
            <span className="inline-block rounded-full border border-neon-pink px-4 py-1 text-xs font-semibold tracking-[0.2em]">SUA MARCA EM DESTAQUE NA INTERNET</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
              Sites que vendem e uma <RotatingWord /> para o seu negócio
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">Criamos sites, sistemas e identidade visual completos para sua empresa se destacar e atrair mais clientes.</p>
            <img src={portrait} alt="Imagem de apresentação da marca NovaesWeb" className="mt-6 w-full rounded-2xl border border-neon-violet/30 object-cover shadow-neon md:hidden" />
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
          <div className="grid grid-cols-1 gap-6 rounded-2xl border border-border bg-card/80 p-6 shadow-neon backdrop-blur sm:grid-cols-3">
            {[[Box, "+30", "Projetos entregues"], [Users, "100%", "Clientes satisfeitos"], [Headphones, "Suporte", "via WhatsApp"]].map(([I, a, b]: any) => (
              <div key={a} className="flex items-center justify-center gap-4">
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

        <div id="modelos" className="mt-16">
          <div className="text-sm font-semibold tracking-[0.25em] text-neon-pink">VEJA FUNCIONANDO</div>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold sm:text-4xl">Sites de demonstração para verificar</h2>
            <p className="max-w-xl text-muted-foreground">Abra, clique e teste como se fosse cliente. É assim que o seu negócio pode aparecer na internet.</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {modelos.map((m) => (
              <a key={m.url} href={m.url} target="_blank" rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-xl border border-neon-violet/40 bg-card transition hover:-translate-y-1 hover:border-neon-pink hover:shadow-neon">
                <div className="flex items-center gap-1.5 border-b border-border px-2.5 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-neon-pink/70" />
                  <span className="h-2 w-2 rounded-full bg-neon-violet/70" />
                  <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                  <span className="ml-1.5 truncate text-[11px] text-muted-foreground">{m.url.replace("https://", "")}</span>
                </div>
                <div className="overflow-hidden">
                  <img src={m.img} alt={`Site ${m.nome}`} loading="lazy" className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <span className="w-fit rounded-full border border-neon-violet/50 px-2.5 py-0.5 text-[11px] text-neon-pink">{m.nicho}</span>
                  <h3 className="mt-2 text-lg font-bold">{m.nome}</h3>
                  <p className="mt-1 flex-1 text-xs leading-relaxed text-muted-foreground">{m.d}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-neon-pink">Ver site ao vivo <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href={whatsLink("Olá! Vi os modelos no site da NovaesWeb e quero um site assim para o meu negócio.")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-neon px-7 py-3 font-semibold shadow-neon">
              <MessageCircle className="h-5 w-5" /> Quero um site assim
            </a>
          </div>
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

      <section className="mx-auto max-w-[1800px] px-4 py-14 sm:px-8 xl:px-14">
        <div className="text-sm font-semibold tracking-[0.25em] text-neon-pink">SEM COMPLICAÇÃO</div>
        <h2 className="mt-2 text-4xl font-bold">Da conversa ao seu site no ar</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(([n, t, d]) => (
            <div key={n} className="rounded-xl border border-border bg-card p-5 transition hover:shadow-neon">
              <div className="font-display text-3xl font-extrabold text-neon">{n}</div>
              <h3 className="mt-3 text-lg font-semibold">{t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {[[Smartphone, "Em todas as telas", "Navegação pensada para celular, tablet e computador."],
            [TrendingUp, "Estrutura para evoluir", "Comece com o que precisa e avalie novos recursos conforme seu negócio cresce."],
            [ShieldCheck, "Clareza em cada etapa", "Valores, escopo e condições alinhados antes da contratação."]].map(([I, t, d]: any) => (
            <div key={t} className="flex items-start gap-4 rounded-xl border border-border bg-card/60 p-5">
              <I className="h-8 w-8 shrink-0 text-neon-pink" />
              <div>
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="cadastro" className="mx-auto max-w-[1800px] px-4 pb-14 sm:px-8 xl:px-14">
        <div className="mx-auto max-w-3xl rounded-3xl border border-neon-violet/30 bg-card/60 p-6 shadow-neon sm:p-10">
          <p className="text-sm font-semibold tracking-widest text-neon-pink">FALE COM A GENTE</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Deixe seu contato e a gente te chama</h2>
          <p className="mt-2 mb-6 text-muted-foreground">Preencha rapidinho e retornamos pelo WhatsApp.</p>
          <LeadForm />
        </div>
      </section>


      <section className="mx-auto max-w-[1800px] px-4 pb-14 sm:px-8 xl:px-14">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <MessagesSquare className="h-10 w-10 shrink-0 text-neon-pink" />
            <div>
              <h2 className="text-2xl font-bold">Dúvidas comuns e respostas claras</h2>
              <p className="mt-1 text-sm text-muted-foreground">As perguntas que mais recebemos — de sites e identidade visual a vídeos e integração no WhatsApp.</p>
            </div>
          </div>
          <a href={WHATS} className="inline-flex items-center gap-2 rounded-full border-2 border-neon-pink px-5 py-3 text-sm font-semibold">
            <MessageCircle className="h-4 w-4" /> Não achou a sua? Fale com a gente
          </a>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {(faqsAbertas ? allFaqs : allFaqs.slice(0, faqsShown)).map(([q, a]) => (
            <details key={q} className="group rounded-md border border-border bg-card px-4 py-2 text-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-1 leading-snug">{q}<Plus className="h-4 w-4 shrink-0 transition group-open:rotate-45" /></summary>
              <p className="mt-2 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
        {allFaqs.length > faqsShown && (
          <div className="mt-6 flex justify-center">
            <Button
              variant="outline"
              type="button"
              aria-expanded={faqsAbertas}
              onClick={() => setFaqsAbertas((v) => !v)}
              className="min-h-11 h-auto whitespace-normal inline-flex items-center gap-2 rounded-full border border-neon-violet px-6 py-3 text-sm font-semibold text-neon-pink transition hover:bg-neon-violet/10"
            >
              {faqsAbertas ? "Mostrar menos dúvidas" : `Ver todas as ${allFaqs.length} dúvidas`}
              <ChevronDown className={`h-4 w-4 transition ${faqsAbertas ? "rotate-180" : ""}`} />
            </Button>
          </div>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}

const words = ["identidade de marca", "presença digital", "vitrine que vende"];
function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % words.length), 2500);
    return () => clearInterval(t);
  }, []);
  return <span key={i} className="block text-neon animate-in fade-in slide-in-from-bottom-3 duration-500">{words[i]}</span>;
}
