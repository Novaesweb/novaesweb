import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LeadForm } from "@/components/LeadForm";
import { EconomyTeaserSection } from "@/components/EconomyTeaserSection";
import { PlansSummarySection } from "@/components/PlansSummarySection";
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
import { whatsLink } from "@/data/plans";
import { allFaqs, faqsShown } from "@/data/faqs";

const WHATS = whatsLink();

const modelos = [
  { nome: "Burger House", nicho: "Hamburgueria · Delivery", url: "https://burge-house.vercel.app/", img: mBurger, d: "Cardápio digital, carrinho, checkout e acompanhamento do pedido, com painel para o dono." },
  { nome: "Açaí Royal", nicho: "Açaiteria", url: "https://a-a-royal-two.vercel.app/", img: mAcai, d: "O cliente monta o açaí, escolhe os adicionais e pede direto pelo WhatsApp." },
  { nome: "Fogo na Brasa", nicho: "Churrascaria · Lanches", url: "https://fogo-na-brasa.vercel.app/", img: mFogo, d: "Hambúrgueres, churrasco e lanches em uma vitrine que dá fome e leva ao pedido." },
  { nome: "Olympus Burger", nicho: "Hamburgueria · Artesanal", url: "https://olympus-burger-menu-ashen.vercel.app/", img: mOlympus, d: "Cardápio com cara de marca premium: destaque para os lançamentos e pedido rápido." },
  { nome: "Pet em Casa", nicho: "Pet Shop · Banho e Tosa", url: "https://pet-em-casa-liard.vercel.app/", img: mPet, d: "Serviços de banho e tosa com agendamento direto pelo site, do jeitinho que o pet merece." },
];

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "NovaesWeb — Criação de Sites e Delivery",
      url: "https://novaesweb.com.br",
      logo: "https://novaesweb.com.br/favicon.png",
      image: "https://novaesweb.com.br/favicon.png",
      description: "Criação de sites profissionais para delivery sem comissão, cardápios digitais para WhatsApp e sistemas sob medida.",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "BR",
      },
      areaServed: "BR",
    },
    {
      "@type": "FAQPage",
      mainEntity: allFaqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NovaesWeb — Sites que vendem, Delivery sem comissão e Identidade Visual" },
      {
        name: "description",
        content:
          "Criamos sites profissionais, cardápios digitais para delivery sem comissão no WhatsApp e sistemas sob medida para sua empresa se destacar e vender mais.",
      },
      {
        name: "keywords",
        content:
          "site para delivery, cardapio digital whatsapp, site sem comissao, criacao de sites, novaesweb, sistema para restaurante, delivery proprio",
      },
      { property: "og:title", content: "NovaesWeb — Sites que vendem e Delivery sem comissão" },
      {
        property: "og:description",
        content:
          "Sites, sistemas e identidade visual completos para sua empresa se destacar e receber pedidos diretos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://novaesweb.com.br/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://novaesweb.com.br/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(homeJsonLd),
      },
    ],
  }),
  component: Index,
});

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

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="mx-auto max-w-[1800px] px-4 py-16 sm:px-8 lg:py-24 xl:px-14">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-neon-pink px-4 py-1 text-xs font-semibold tracking-[0.2em] text-neon-pink">
                <Rocket className="h-3.5 w-3.5" /> AGÊNCIA DE SOLUÇÕES DIGITAIS
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-6xl md:text-7xl">
                Seu negócio com <RotatingWord />
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Criamos sites profissionais, cardápios de delivery com pedidos diretos pelo WhatsApp e sistemas sob medida para a sua empresa crescer sem pagar comissões sobre as vendas.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#cadastro"
                  className="inline-flex items-center gap-3 rounded-full bg-neon px-8 py-4 font-semibold shadow-neon transition"
                >
                  <MessageCircle className="h-5 w-5" /> Quero um orçamento gratuito <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#modelos"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 font-semibold text-muted-foreground transition hover:border-neon-pink hover:text-foreground"
                >
                  Ver modelos ao vivo
                </a>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8 text-center sm:text-left">
                <div>
                  <div className="font-display text-2xl font-bold sm:text-3xl text-foreground">100%</div>
                  <div className="text-xs text-muted-foreground">Mobile first e rápido</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold sm:text-3xl text-neon-pink">0%</div>
                  <div className="text-xs text-muted-foreground">Comissão por venda</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold sm:text-3xl text-neon-emerald">Suporte</div>
                  <div className="text-xs text-muted-foreground">Humanizado via WhatsApp</div>
                </div>
              </div>
            </div>
            <div className="relative lg:col-span-5">
              <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl border-2 border-neon-violet bg-card/60 p-3 shadow-neon">
                <img
                  src={portrait}
                  alt="NovaesWeb Soluções Digitais"
                  className="h-full w-full rounded-2xl object-cover object-[60%_25%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="mx-auto max-w-[1800px] px-4 py-16 sm:px-8 xl:px-14">
        <div className="text-sm font-semibold tracking-[0.25em] text-neon-pink">O QUE FAZEMOS</div>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-bold sm:text-4xl">Soluções completas para a sua presença online</h2>
          <p className="max-w-xl text-muted-foreground">Do design à entrega técnica: cuidamos de cada detalhe para você focar em atender seus clientes.</p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((s) => (
            <article key={s.t} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-neon-pink hover:shadow-neon">
              <img src={s.img} alt={s.t} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold">{s.t}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Modelos de Demonstração */}
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

        {/* Banner de Contato Rápido */}
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

      {/* Resumo Oficial dos Planos */}
      <PlansSummarySection />

      {/* Teaser do Simulador de Economia */}
      <EconomyTeaserSection />

      {/* Passos e Metodologia */}
      <section className="mx-auto max-w-[1800px] px-4 py-14 sm:px-8 xl:px-14">
        <div className="text-sm font-semibold tracking-[0.25em] text-neon-pink">COMO FUNCIONA</div>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Do primeiro contato ao site no ar</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([n, t, d]) => (
            <article key={n} className="rounded-2xl border border-border bg-card/60 p-6">
              <span className="font-display text-3xl font-bold text-neon-pink">{n}</span>
              <h3 className="mt-3 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{d}</p>
            </article>
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

      {/* Formulário de Lead */}
      <section id="cadastro" className="mx-auto max-w-[1800px] px-4 pb-14 sm:px-8 xl:px-14">
        <div className="mx-auto max-w-3xl rounded-3xl border border-neon-violet/30 bg-card/60 p-6 shadow-neon sm:p-10">
          <p className="text-sm font-semibold tracking-widest text-neon-pink">FALE COM A GENTE</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Deixe seu contato e a gente te chama</h2>
          <p className="mt-2 mb-6 text-muted-foreground">Preencha rapidinho e retornamos pelo WhatsApp.</p>
          <LeadForm />
        </div>
      </section>

      {/* Dúvidas Frequentes */}
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
