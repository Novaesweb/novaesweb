import { createFileRoute } from "@tanstack/react-router";
import {
  Globe, ShoppingBag, Cpu, Megaphone, Target, Eye, ShieldCheck, Lightbulb, Handshake,
  Rocket, Heart, MessageCircle, ArrowRight,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { whatsLink } from "@/data/plans";
import portrait from "@/assets/portrait.jpg.asset.json";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a NovaesWeb — Sua ideia merece ganhar espaço no digital" },
      { name: "description", content: "Conheça a NovaesWeb: criamos sites, lojas virtuais, sistemas e conteúdos digitais que transformam ideias em presença digital." },
      { property: "og:title", content: "Sobre a NovaesWeb — Soluções Digitais" },
      { property: "og:description", content: "Transformamos ideias em soluções digitais modernas, acessíveis e funcionais." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sobre,
});

const WHATS = whatsLink();

const fazemos = [
  { I: Globe, t: "Sites e Landing Pages", d: "Páginas profissionais que apresentam sua empresa com beleza e funcionam de verdade — no celular e no computador." },
  { I: ShoppingBag, t: "Lojas Virtuais e Delivery", d: "Catálogo, carrinho e pedidos na palma da mão. Conforme o plano, você ainda gerencia produtos e pedidos por um painel." },
  { I: Cpu, t: "Sistemas Personalizados", d: "Soluções sob medida: a gente senta com você e constrói exatamente o que a sua operação precisa." },
  { I: Megaphone, t: "Design e Divulgação Digital", d: "Imagens e vídeos promocionais que fazem sua marca ser vista, lembrada e escolhida." },
];

const valores = [
  { I: ShieldCheck, t: "Transparência", d: "Comunicação clara sobre serviços, valores e condições." },
  { I: Lightbulb, t: "Criatividade", d: "Soluções que valorizam a identidade de cada marca." },
  { I: Target, t: "Compromisso", d: "Atenção às necessidades e aos objetivos de cada projeto." },
  { I: Rocket, t: "Inovação", d: "Busca constante por novas possibilidades digitais." },
  { I: Handshake, t: "Parceria", d: "Relacionamento próximo com você, do início ao fim." },
];

function Sobre() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader active="Sobre" />

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-y-0 right-0 w-full md:w-3/5">
          <img src={portrait.url} alt="Equipe NovaesWeb" className="h-full w-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-[1800px] px-4 pb-20 pt-16 sm:px-8 xl:px-14">
          <div className="max-w-xl 2xl:max-w-2xl">
            <span className="inline-block rounded-full border border-neon-pink px-4 py-1 text-xs font-semibold tracking-[0.2em]">QUEM SOMOS</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
              Sua ideia merece <span className="text-neon">ganhar espaço</span> no mundo digital
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              A NovaesWeb nasceu com um propósito: transformar ideias em soluções digitais modernas, acessíveis e funcionais.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa história */}
      <section className="mx-auto max-w-[1800px] px-4 pb-6 sm:px-8 xl:px-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border-2 border-neon-pink bg-card p-7 shadow-neon lg:col-span-2">
            <h2 className="text-2xl font-bold sm:text-3xl">Mais que sites: criamos o espaço da sua marca na internet</h2>
            <p className="mt-4 text-muted-foreground">
              Somos uma empresa de criação de sites, lojas virtuais, sistemas personalizados e conteúdos digitais. Nosso objetivo é ajudar empreendedores e empresas a fortalecer sua presença na internet, apresentar seus serviços e facilitar o contato com seus clientes.
            </p>
            <p className="mt-3 text-muted-foreground">
              Acreditamos que cada negócio tem sua própria identidade. Por isso, desenvolvemos soluções que respeitam as necessidades de cada cliente — com atenção ao visual, à facilidade de uso e ao funcionamento.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 rounded-2xl border border-border bg-card/80 p-7">
            <div className="flex items-start gap-4">
              <Target className="h-9 w-9 shrink-0 text-neon-pink" />
              <div>
                <h3 className="font-display text-xl font-bold text-neon">Missão</h3>
                <p className="mt-1 text-sm text-muted-foreground">Tornar a tecnologia acessível a todo empreendedor: soluções que simplificam processos, valorizam marcas e criam novas oportunidades de negócio.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Eye className="h-9 w-9 shrink-0 text-neon-pink" />
              <div>
                <h3 className="font-display text-xl font-bold text-neon">Visão</h3>
                <p className="mt-1 text-sm text-muted-foreground">Crescer como uma empresa reconhecida pela criatividade, qualidade e compromisso — acompanhando a evolução de cada negócio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="mx-auto max-w-[1800px] px-4 py-14 sm:px-8 xl:px-14">
        <div className="text-sm font-semibold tracking-[0.25em] text-neon-pink">O QUE FAZEMOS</div>
        <h2 className="mt-2 text-4xl font-bold">Tudo o que sua marca precisa, em um só lugar</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {fazemos.map(({ I, t, d }) => (
            <article key={t} className="rounded-2xl border border-border bg-card p-6 transition hover:border-neon-pink/60 hover:shadow-neon">
              <I className="h-10 w-10 text-neon-pink" />
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="mx-auto max-w-[1800px] px-4 pb-14 sm:px-8 xl:px-14">
        <div className="text-sm font-semibold tracking-[0.25em] text-neon-pink">NOSSOS VALORES</div>
        <h2 className="mt-2 text-4xl font-bold">O que move a gente todos os dias</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {valores.map(({ I, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card/80 p-6 text-center transition hover:shadow-neon">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-neon-pink/50 bg-neon/10">
                <I className="h-7 w-7 text-neon-pink" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Por que escolher */}
      <section className="mx-auto max-w-[1800px] px-4 pb-14 sm:px-8 xl:px-14">
        <div className="flex flex-col items-center gap-6 rounded-2xl border-2 border-neon-pink bg-card p-8 text-center shadow-neon md:p-12">
          <Heart className="h-12 w-12 text-neon-pink" />
          <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">Um site bonito é bom. Um site com propósito é melhor.</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Seja para apresentar sua empresa, receber pedidos, organizar informações ou divulgar seus produtos, criamos ferramentas práticas para o dia a dia do seu negócio.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-[1800px] px-4 pb-16 sm:px-8 xl:px-14">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border bg-card p-7 shadow-neon">
          <div className="flex items-center gap-5">
            <Rocket className="h-12 w-12 text-neon-pink" />
            <div>
              <h3 className="text-2xl font-bold">Vamos transformar sua ideia em realidade?</h3>
              <p className="text-muted-foreground">NovaesWeb — Sua marca, seu espaço, sua presença digital. Conte o que você deseja criar.</p>
            </div>
          </div>
          <a href={WHATS} className="flex items-center gap-3 rounded-full bg-neon px-8 py-4 font-semibold shadow-neon">
            <MessageCircle className="h-5 w-5" /> Falar no WhatsApp <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
