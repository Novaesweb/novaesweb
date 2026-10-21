import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { legalDocs, type LegalDoc } from "@/data/legal";

export function LegalPage({ id }: { id: LegalDoc["id"] }) {
  const doc = legalDocs.find((item) => item.id === id);
  if (!doc) return null;
  return <div className="min-h-dvh">
    <SiteHeader active="" />
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-8 sm:py-16">
      <p className="text-sm font-semibold text-neon-pink">NOVAESWEB · INFORMAÇÕES LEGAIS</p>
      <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{doc.title}</h1>
      <p className="mt-3 text-sm text-muted-foreground">Atualizado em {doc.updated}</p>
      <p className="mt-6 leading-relaxed text-muted-foreground">{doc.intro}</p>
      <div className="mt-10 space-y-8">
        {doc.sections.map((section) => <section key={section.h}>
          <h2 className="text-xl font-semibold">{section.h}</h2>
          {section.p?.map((text) => <p key={text} className="mt-3 leading-relaxed text-muted-foreground">{text}</p>)}
          {section.list && <ul className="mt-3 list-disc space-y-3 pl-5 text-muted-foreground">{section.list.map((text) => <li key={text} className="leading-relaxed">{text}</li>)}</ul>}
        </section>)}
      </div>
    </article>
    <SiteFooter />
  </div>;
}