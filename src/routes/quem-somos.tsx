import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Globe, LayoutGrid, Cpu, Gauge, Sparkles, LifeBuoy,
  Store, UtensilsCrossed, Sandwich, Scissors, Truck, Wrench,
  ArrowRight, MessageCircle, Rocket, ShieldCheck, Palette, TrendingUp, Puzzle,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import portrait from "@/assets/portrait.webp";
import { whatsLink } from "@/data/plans";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — NovaesWeb | Sites e soluções digitais para o seu negócio" },
      { name: "description", content: "Conheça a NovaesWeb: empresa especializada em sites profissionais, catálogos digitais, sistemas para negócios e soluções digitais para pequenos e médios negócios." },
      { property: "og:title", content: "Quem Somos — NovaesWeb" },
      { property: "og:description", content: "Tecnologia e soluções digitais para ajudar seu negócio a evoluir." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://image-to-web-workshop.lovable.app/quem-somos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://image-to-web-workshop.lovable.app/quem-somos" }],
  }),
  component: QuemSomos,
});


const servicos = [
  { I: Globe, t: "Sites profissionais", d: "Páginas modernas e responsivas que apresentam sua empresa com credibilidade no celular e no computador." },
  { I: LayoutGrid, t: "Catálogos digitais", d: "Seus produtos organizados em um catálogo online, facilitando a apresentação e o contato dos clientes." },
  { I: Cpu, t: "Sistemas para negócios", d: "Ferramentas sob medida para organizar pedidos, produtos e processos do dia a dia da sua empresa." },
  { I: Gauge, t: "Painéis administrativos", d: "Áreas de gestão para acompanhar e atualizar as informações do seu site, conforme o plano contratado." },
  { I: Sparkles, t: "Soluções personalizadas", d: "Projetos construídos junto com você, respeitando as necessidades reais de cada negócio." },
  { I: LifeBuoy, t: "Manutenção e suporte", d: "Acompanhamento e ajustes para manter sua presença digital sempre funcionando, conforme o plano contratado." },
];

const segmentos = [
  { I: Store, t: "Lojas e comércios em geral" },
  { I: UtensilsCrossed, t: "Restaurantes e pizzarias" },
  { I: Sandwich, t: "Lanchonetes e delivery" },
  { I: Scissors, t: "Barbearias e salões de beleza" },
  { I: Truck, t: "Distribuidoras" },
  { I: Wrench, t: "Prestadores de serviços" },
];

const diferenciais = [
  { I: Palette, t: "Projetos personalizados", d: "Cada negócio tem sua identidade — e o site respeita a sua." },
  { I: Globe, t: "Design responsivo", d: "Experiência pensada para funcionar bem em qualquer tela." },
  { I: LayoutGrid, t: "Recursos organizados por plano", d: "Você contrata apenas o que faz sentido para o seu momento." },
  { I: TrendingUp, t: "Possibilidade de evolução", d: "Seu site cresce junto com o seu negócio, com novas funções conforme a necessidade." },
  { I: Puzzle, t: "Foco nas necessidades reais", d: "Soluções práticas para o dia a dia da sua empresa, sem complicação." },
];

const planos = [
  { nome: "Novaes Start", desc: "Para colocar sua empresa no digital com uma página profissional." },
  { nome: "Novaes Business", desc: "Para quem precisa de mais autonomia e recursos de gestão." },
  { nome: "Novaes Premium", desc: "Mais recursos para gerenciar a loja e acompanhar resultados." },
  { nome: "Personalizado", desc: "Para projetos sob medida, com escopo definido junto com você." },
];

function QuemSomos() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader active="Quem Somos" />

      {/* Apresentação */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-full overflow-hidden md:w-1/2 lg:w-3/5 pointer-events-none">
          <img
            src={portrait}
            alt="Equipe NovaesWeb — Apresentação da marca"
            className="h-full w-full object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080512] via-[#080512]/75 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080512] to-transparent" />
        </div>
        <div className="relative mx-auto max-w-[1800px] px-4 pb-16 pt-16 sm:px-8 xl:px-14">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-neon-pink px-4 py-1 text-xs font-semibold tracking-[0.2em]">QUEM SOMOS</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
              Conheça a <span className="text-neon">NovaesWeb</span>
            </h1>
            <p className="mt-4 text-lg font-semibold text-neon-pink">
              Tecnologia e soluções digitais para ajudar seu negócio a evoluir.
            </p>
            <p className="mt-5 text-muted-foreground">
              A NovaesWeb é uma empresa especializada no desenvolvimento de sites profissionais e soluções digitais para pequenos e médios negócios.
            </p>
            <p className="mt-3 text-muted-foreground">
              Criamos soluções modernas, responsivas e adaptadas às necessidades de diferentes empresas, ajudando empreendedores a apresentar produtos e serviços, fortalecer sua presença digital e organizar processos comerciais.
            </p>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="mx-auto max-w-[1800px] px-4 pb-14 sm:px-8 xl:px-14">
        <div className="text-sm font-semibold tracking-[0.25em] text-neon-pink">O QUE FAZEMOS</div>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Soluções digitais para o seu negócio</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map(({ I, t, d }) => (
            <article key={t} className="rounded-2xl border border-border bg-card p-6 transition hover:border-neon-pink/60 hover:shadow-neon">
              <I className="h-10 w-10 text-neon-pink" />
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Nossa missão */}
      <section className="mx-auto max-w-[1800px] px-4 pb-14 sm:px-8 xl:px-14">
        <div className="flex flex-col items-center gap-5 rounded-2xl border-2 border-neon-pink bg-card p-8 text-center shadow-neon md:p-12">
          <Rocket className="h-12 w-12 text-neon-pink" />
          <div className="text-sm font-semibold tracking-[0.25em] text-neon-pink">NOSSA MISSÃO</div>
          <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">Facilitar o acesso à tecnologia</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Ajudar negócios a construir uma presença digital profissional, com soluções que acompanham suas necessidades.
          </p>
        </div>
      </section>

      {/* Para quem desenvolvemos */}
      <section className="mx-auto max-w-[1800px] px-4 pb-14 sm:px-8 xl:px-14">
        <div className="text-sm font-semibold tracking-[0.25em] text-neon-pink">PARA QUEM DESENVOLVEMOS</div>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Empresas de diferentes segmentos</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {segmentos.map(({ I, t }) => (
            <div key={t} className="flex items-center gap-4 rounded-2xl border border-border bg-card/80 p-5 transition hover:border-neon-pink/60 hover:shadow-neon">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-neon-pink/50 bg-neon/10">
                <I className="h-6 w-6 text-neon-pink" />
              </span>
              <h3 className="font-semibold">{t}</h3>
            </div>
          ))}
          <div className="flex items-center gap-4 rounded-2xl border-2 border-neon-pink bg-card p-5 shadow-neon sm:col-span-2 lg:col-span-3">
            <ShieldCheck className="h-10 w-10 shrink-0 text-neon-pink" />
            <p className="font-semibold">
              Entre outros tipos de lojas, empresas e negócios.
            </p>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-muted-foreground">
          Seu segmento não está na lista? A NovaesWeb também desenvolve soluções para outros tipos de negócios. Entre em contato e descubra as possibilidades para sua empresa.
        </p>
      </section>

      {/* Soluções que evoluem */}
      <section className="mx-auto max-w-[1800px] px-4 pb-14 sm:px-8 xl:px-14">
        <div className="rounded-2xl border border-border bg-card p-7 shadow-neon sm:p-10">
          <div className="text-sm font-semibold tracking-[0.25em] text-neon-pink">SOLUÇÕES QUE EVOLUEM COM SUA EMPRESA</div>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Seu site pode crescer junto com o seu negócio</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            A NovaesWeb desenvolve funcionalidades adicionais, como fidelidade digital, cardápios para TV, relatórios comerciais e cartões-presente. Cada recurso é avaliado conforme a necessidade e a compatibilidade com o seu negócio.
          </p>
          <p className="mt-4 text-lg font-semibold text-neon">
            Temos mais funções para o seu negócio. Consulte as possibilidades disponíveis.
          </p>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="mx-auto max-w-[1800px] px-4 pb-14 sm:px-8 xl:px-14">
        <div className="text-sm font-semibold tracking-[0.25em] text-neon-pink">POR QUE ESCOLHER A NOVAESWEB?</div>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">O que torna o nosso trabalho diferente</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {diferenciais.map(({ I, t, d }) => (
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

      {/* Conheça nossos planos */}
      <section className="mx-auto max-w-[1800px] px-4 pb-14 sm:px-8 xl:px-14">
        <div className="text-sm font-semibold tracking-[0.25em] text-neon-pink">CONHEÇA NOSSOS PLANOS</div>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Um plano para cada momento do seu negócio</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {planos.map(({ nome, desc }) => (
            <div key={nome} className="rounded-2xl border border-border bg-card p-6 transition hover:border-neon-pink/60 hover:shadow-neon">
              <h3 className="font-display text-xl font-bold text-neon">{nome}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/planos"
            className="inline-flex items-center gap-3 rounded-full bg-neon px-8 py-4 font-semibold shadow-neon transition hover:gap-4"
          >
            Conhecer nossos planos <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Chamada final */}
      <section className="mx-auto max-w-[1800px] px-4 pb-16 sm:px-8 xl:px-14">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border bg-card p-7 shadow-neon">
          <div className="flex items-center gap-5">
            <Rocket className="h-12 w-12 text-neon-pink" />
            <div>
              <h3 className="text-2xl font-bold">Vamos transformar suas ideias em soluções digitais?</h3>
              <p className="text-muted-foreground">
                Conheça as possibilidades que a NovaesWeb oferece para criar uma presença online profissional e desenvolver ferramentas adequadas ao seu negócio.
              </p>
            </div>
          </div>
          <a
            href={whatsLink("Olá, NovaesWeb! Quero solicitar um orçamento para o meu negócio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-neon px-8 py-4 font-semibold shadow-neon"
          >
            <MessageCircle className="h-5 w-5" /> Solicitar orçamento <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
