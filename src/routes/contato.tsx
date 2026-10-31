import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { whatsLink } from "@/data/plans";
import { useState } from "react";
import { ArrowRight, ChevronDown, MessageCircle, MessagesSquare, Plus } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import { generalFaqs, faqsShown } from "@/data/faqs";

const WHATS = whatsLink();

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — NovaesWeb | Converse sobre seu projeto" },
      { name: "description", content: "Fale com a NovaesWeb pelo WhatsApp ou envie seu contato para conversar sobre sites, sistemas e serviços digitais. Confira também as dúvidas gerais." },
      { property: "og:title", content: "Contato — NovaesWeb" },
      { property: "og:description", content: "Conte sua ideia e converse com a NovaesWeb sobre seu próximo projeto." },
      { property: "og:url", content: "https://novaesweb.com.br/contato" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://novaesweb.com.br/contato" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: generalFaqs.map(([question, answer]) => ({
        "@type": "Question", name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    }) }],
  }),
  component: Contato,
});

function Contato() {
  const [faqsAbertas, setFaqsAbertas] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader active="Contato" />
      <section className="mx-auto max-w-[1800px] px-4 py-12 sm:px-8 xl:px-14">
        <p className="text-sm font-semibold tracking-[0.25em] text-neon-pink">VAMOS CONVERSAR</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Conte sua ideia para a NovaesWeb</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Atendimento de segunda a sexta, das 9h às 18h (Brasília). Escolha conversar pelo WhatsApp ou deixar seu contato abaixo.</p>
        <a href={WHATS} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-neon px-6 py-3 font-semibold shadow-neon"><MessageCircle className="h-5 w-5" aria-hidden="true" /> Falar no WhatsApp <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
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
          {(faqsAbertas ? generalFaqs : generalFaqs.slice(0, faqsShown)).map(([q, a]) => (
            <details key={q} className="group rounded-md border border-border bg-card px-4 py-2 text-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-1 leading-snug">{q}<Plus className="h-4 w-4 shrink-0 transition group-open:rotate-45" /></summary>
              <p className="mt-2 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
        {generalFaqs.length > faqsShown && (
          <div className="mt-6 flex justify-center">
            <Button
              variant="outline"
              type="button"
              aria-expanded={faqsAbertas}
              onClick={() => setFaqsAbertas((v) => !v)}
              className="min-h-11 h-auto whitespace-normal inline-flex items-center gap-2 rounded-full border border-neon-violet px-6 py-3 text-sm font-semibold text-neon-pink transition hover:bg-neon-violet/10"
            >
              {faqsAbertas ? "Mostrar menos dúvidas" : `Ver todas as ${generalFaqs.length} dúvidas`}
              <ChevronDown className={`h-4 w-4 transition ${faqsAbertas ? "rotate-180" : ""}`} />
            </Button>
          </div>
        )}
      </section>
      <div className="mx-auto max-w-[1800px] px-4 pb-10 sm:px-8 xl:px-14">
        <Link to="/planos" className="inline-flex min-h-11 items-center gap-2 font-semibold text-neon-pink hover:underline">Valores, recursos e condições: veja a página de Planos <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
      </div>
      <SiteFooter />
    </div>
  );
}
