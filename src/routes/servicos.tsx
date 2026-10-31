import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { whatsLink } from "@/data/plans";
import { ArrowRight, MessageCircle, Smartphone, TrendingUp, ShieldCheck } from "lucide-react";
import s0 from "@/assets/s0.webp";
import s1 from "@/assets/s1.webp";
import s2 from "@/assets/s2.webp";
import s3 from "@/assets/s3.webp";
import s4 from "@/assets/s4.webp";
import apiArt from "@/assets/api-whatsapp.webp";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — NovaesWeb | Sites, delivery, design e sistemas" },
      { name: "description", content: "Conheça os serviços da NovaesWeb: sites profissionais, cardápios digitais, sistemas personalizados, identidade visual e conteúdo para redes sociais." },
      { property: "og:title", content: "Serviços — NovaesWeb" },
      { property: "og:description", content: "Soluções digitais para sua marca e sua operação, com escopo definido para cada projeto." },
      { property: "og:url", content: "https://novaesweb.com.br/servicos" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://novaesweb.com.br/servicos" }],
  }),
  component: Servicos,
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
  ["04", "Pronto para começar", "Concluímos a entrega conforme a proposta. As condições ficam definidas na proposta."],
];

function Servicos() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader active="Serviços" />
      <section className="mx-auto max-w-[1800px] px-4 py-12 sm:px-8 xl:px-14">
        <p className="text-sm font-semibold tracking-[0.25em] text-neon-pink">O QUE FAZEMOS</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Soluções para o seu negócio</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Da presença digital à organização da sua operação. Conheça as possibilidades e alinhe o escopo com a NovaesWeb.</p>
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

      </section>
      {/* Passos e Metodologia */}
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

      <section id="whatsapp-api" className="mx-auto max-w-[1800px] px-4 pb-10 sm:px-8 xl:px-14">
      {/* Banner de Integração WhatsApp */}
      <div className="mx-auto mb-8 flex max-w-[1800px] flex-col items-center gap-5 rounded-2xl border border-neon-violet/40 bg-card/70 p-5 text-center shadow-neon backdrop-blur sm:flex-row sm:gap-7 sm:p-6 sm:text-left">
        <img
          src={apiArt}
          alt="Integração com WhatsApp API"
          loading="lazy"
          className="h-36 w-36 shrink-0 rounded-xl border border-neon-violet/40 object-cover shadow-neon sm:h-44 sm:w-44"
        />
        <div className="min-w-0 flex-1">
          <span className="inline-block rounded-full bg-neon px-3 py-1 text-[11px] font-semibold tracking-[0.18em]">
            NOVIDADE
          </span>
          <h2 className="mt-3 font-display text-xl font-bold">
            Agora trabalhamos com integração ao WhatsApp
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Conectamos seu site, loja ou sistema ao WhatsApp API: mensagens automáticas, avisos de pedido e atendimento centralizado no seu número.
          </p>
        </div>
        <a
          href={whatsLink("Olá, NovaesWeb! Quero saber mais sobre a integração com o WhatsApp API.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-neon px-5 py-3 text-sm font-semibold shadow-neon"
        >
          <MessageCircle className="h-4 w-4" /> Quero essa integração <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      </section>
      <section className="mx-auto flex max-w-[1800px] flex-wrap items-center gap-4 px-4 pb-12 sm:px-8 xl:px-14">
        <Link to="/contato" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-neon px-6 py-3 font-semibold shadow-neon">Conversar sobre meu projeto <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        <Link to="/planos" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-neon-pink px-6 py-3 font-semibold">Conhecer planos <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
      </section>
      <SiteFooter />
    </div>
  );
}
