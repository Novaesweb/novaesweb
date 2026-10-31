import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import portrait from "@/assets/portrait-wide.webp";
import mBurger from "@/assets/modelo-burge-house.webp";
import mAcai from "@/assets/modelo-a-a-royal-two.webp";
import mFogo from "@/assets/modelo-fogo-na-brasa.jpg";
import mOlympus from "@/assets/modelo-olympus-burger.webp";
import mPet from "@/assets/modelo-pet-em-casa.webp";
import mBarber from "@/assets/modelo-dom-barber.png";
import mAcaiPremium from "@/assets/modelo-acai-premium.png";
import { whatsLink } from "@/data/plans";

const WHATS = whatsLink();

const modelos = [
  { nome: "Burger House", nicho: "Hamburgueria · Delivery", url: "https://burge-house.vercel.app/", img: mBurger, d: "Cardápio digital, carrinho, checkout e acompanhamento do pedido, com painel para o dono." },
  { nome: "Açaí Royal", nicho: "Açaiteria", url: "https://a-a-royal-two.vercel.app/", img: mAcai, d: "O cliente monta o açaí, escolhe os adicionais e pede direto pelo WhatsApp." },
  { nome: "Dom Barber", nicho: "Barbearia · Agendamento", url: "https://barber-inky-alpha.vercel.app/", img: mBarber, d: "Site responsivo pensado principalmente para celular, com serviços, preços e agendamento de horário." },
  { nome: "Fogo na Brasa", nicho: "Churrascaria · Lanches", url: "https://fogo-na-brasa.vercel.app/", img: mFogo, d: "Hambúrgueres, churrasco e lanches em uma vitrine que dá fome e leva ao pedido." },
  { nome: "Olympus Burger", nicho: "Hamburgueria · Artesanal", url: "https://olympus-burger-menu-ashen.vercel.app/", img: mOlympus, d: "Cardápio com cara de marca premium: destaque para os lançamentos e pedido rápido." },
  { nome: "Pet em Casa", nicho: "Pet Shop · Banho e Tosa", url: "https://pet-em-casa-liard.vercel.app/", img: mPet, d: "Serviços de banho e tosa com agendamento direto pelo site, do jeitinho que o pet merece." },
  { nome: "Açaí Premium", nicho: "Açaiteria · Cardápio digital", url: "https://acaipremium-five.vercel.app/", img: mAcaiPremium, d: "Site responsivo pensado para celular, com cardápio, preços e montagem do pedido." },
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
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NovaesWeb — Sites, Delivery e Sistemas Personalizados" },
      {
        name: "description",
        content:
          "Criamos sites profissionais, lojas virtuais, cardápios digitais e sistemas sob medida para fortalecer sua marca e apoiar a evolução do seu negócio.",
      },
      {
        name: "keywords",
        content:
          "site para delivery, cardapio digital whatsapp, site sem comissao, criacao de sites, novaesweb, sistema para restaurante, delivery proprio",
      },
      { property: "og:title", content: "NovaesWeb — O seu crescimento é parte do nosso sucesso" },
      {
        property: "og:description",
        content:
          "Sites, lojas virtuais e sistemas personalizados para fortalecer sua marca, facilitar sua operação e evoluir com o seu negócio.",
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

function Index() {
  const [mostrarTodosModelos, setMostrarTodosModelos] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader active="Início" />

      {/* Hero original com imagem cobrindo toda a tela de início */}
      <section id="inicio" className="relative">
        <div className="absolute inset-0 w-full overflow-hidden pointer-events-none">
          <img
            src={portrait}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-105 object-cover object-[center_20%] opacity-30 blur-2xl"
          />
          <img
            src={portrait}
            alt="Imagem de apresentação da marca NovaesWeb"
            className="absolute inset-0 h-full w-full object-cover object-[center_top] md:object-[right_center] lg:object-[78%_center]"
          />
          <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-[#080512]/92 via-[#080512]/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080512] via-[#080512]/60 to-transparent" />
          {/* Linha luminosa no final da imagem em harmonia com a paleta neon */}
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-85 shadow-[0_0_16px_rgba(236,72,153,0.7)]" />
        </div>
        <div className="relative mx-auto max-w-[1800px] px-4 sm:px-8 xl:px-14 py-10 md:py-16">
          <div className="max-w-xl 2xl:max-w-2xl">
            <span className="inline-block rounded-full border border-neon-pink px-4 py-1 text-xs font-semibold tracking-[0.2em]">
              SITES E SISTEMAS SOB MEDIDA
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
              O seu crescimento é parte do <span className="text-neon">nosso sucesso.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Criamos sites, lojas virtuais e sistemas personalizados para fortalecer sua marca,
              facilitar sua operação e acompanhar a evolução do seu negócio.
            </p>
            <img
              src={portrait}
              alt="Imagem de apresentação da marca NovaesWeb"
              className="mt-6 w-full rounded-2xl border border-neon-violet/30 object-cover shadow-neon md:hidden"
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={WHATS}
                className="flex items-center gap-3 rounded-full bg-neon px-7 py-4 font-semibold shadow-neon"
              >
                <MessageCircle className="h-5 w-5" /> Solicitar orçamento <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#modelos"
                className="flex items-center gap-3 rounded-full border-2 border-neon-pink px-8 py-4 font-semibold"
              >
                Ver projetos funcionando <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
          <p className="absolute right-8 top-10 hidden rotate-[-12deg] font-display text-2xl italic md:block">
            Mais que sites, criamos identidade!
          </p>
        </div>
      </section>

      <section id="servicos" aria-label="Conheça a NovaesWeb" className="mx-auto flex max-w-[1800px] flex-wrap items-center justify-between gap-4 px-4 py-6 sm:px-8 xl:px-14">
        <p className="text-sm text-muted-foreground">Sites profissionais · Delivery · Sistemas sob medida</p>
        <div className="flex flex-wrap gap-5 text-sm font-semibold text-neon-pink">
          <Link to="/servicos" className="inline-flex min-h-11 items-center gap-2 hover:underline">Conhecer serviços <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          <Link to="/planos" className="inline-flex min-h-11 items-center gap-2 hover:underline">Ver planos <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </section>
      <section className="mx-auto max-w-[1800px] px-4 pb-10 sm:px-8 xl:px-14">
        {/* Modelos de Demonstração */}
        <div id="modelos" className="scroll-mt-24">
          <div className="text-sm font-semibold tracking-[0.25em] text-neon-pink">VEJA FUNCIONANDO</div>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold sm:text-4xl">Veja nossos projetos</h2>
            <p className="max-w-xl text-muted-foreground">Explore os modelos e teste a experiência de quem visita o seu site.</p>
          </div>
          <div id="lista-modelos" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modelos.map((m, index) => (
              <a key={m.url} href={m.url} target="_blank" rel="noopener noreferrer"
                className={`group ${index < 3 || mostrarTodosModelos ? "flex" : "hidden"} flex-col overflow-hidden rounded-xl border border-neon-violet/40 bg-card transition hover:-translate-y-1 hover:border-neon-pink hover:shadow-neon`}>
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
          {modelos.length > 3 && (
            <div className="mt-6 text-center">
              <button
                type="button"
                aria-expanded={mostrarTodosModelos}
                aria-controls="lista-modelos"
                onClick={() => setMostrarTodosModelos((aberto) => !aberto)}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-neon-pink px-6 py-3 font-semibold transition hover:bg-neon-pink/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon-pink"
              >
                {mostrarTodosModelos ? "Mostrar menos" : `Ver mais ${modelos.length - 3} demonstrações`}
                <ChevronDown aria-hidden="true" className={`h-4 w-4 ${mostrarTodosModelos ? "rotate-180" : ""}`} />
              </button>
            </div>
          )}
        </div>

        {/* Banner de Contato Rápido */}
        <div id="contato" className="mt-8 flex flex-wrap items-center justify-between gap-6 rounded-2xl border-2 border-neon-pink bg-card p-7 shadow-neon">
          <div className="flex items-center gap-5">
            <MessageCircle className="hidden h-10 w-10 shrink-0 text-neon-pink sm:block" />
            <div>
              <h3 className="text-2xl font-bold">Vamos conversar sobre o seu projeto?</h3>
              <p className="text-muted-foreground">Conte sua ideia e receba uma proposta alinhada ao que você precisa.</p>
            </div>
          </div>
          <Link id="cadastro" to="/contato" className="inline-flex min-h-11 items-center gap-3 rounded-full bg-neon px-6 py-3 font-semibold shadow-neon">
            Entrar em contato <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
