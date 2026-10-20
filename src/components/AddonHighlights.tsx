import { ArrowRight, Info, QrCode, Star, Gift, Tv, type LucideIcon } from "lucide-react";
import { addons, whatsLink } from "@/data/plans";

export const showcaseIds = ["tv", "loyalty", "tables", "gift"] as const;
type ShowcaseId = (typeof showcaseIds)[number];

const showcaseIcons: Record<ShowcaseId, LucideIcon> = {
  tv: Tv,
  loyalty: Star,
  tables: QrCode,
  gift: Gift,
};

export const extrasWhatsMsg =
  "Olá, NovaesWeb! Gostaria de conhecer as funcionalidades adicionais que a NovaesWeb pode oferecer para o meu site.";

/** Vitrine pública dos adicionais: apenas 4 exemplos, sem preços e sem botão de solicitação por item. */
export function AddonHighlights() {
  const showcase = showcaseIds.map((id) => {
    const addon = addons.find((a) => a.id === id);
    if (!addon) throw new Error(`Showcase addon "${id}" não encontrado em src/data/plans.ts`);
    return { ...addon, Icon: showcaseIcons[id] };
  });

  return (
    <section className="mt-10 border-t border-border pt-10" aria-labelledby="extras-heading">
      <p className="text-xs font-semibold tracking-[0.3em] text-neon-pink">MAIS POSSIBILIDADES PARA SUA EMPRESA</p>
      <h2 id="extras-heading" className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
        Seu site começa completo. E cresce junto com o seu negócio.
      </h2>
      <p className="mt-3 max-w-3xl text-muted-foreground">
        A NovaesWeb vai além da criação de sites. Oferecemos funcionalidades adicionais que ampliam as possibilidades do
        seu negócio, conforme suas necessidades.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {showcase.map(({ Icon, name, description, id }) => (
          <article
            key={id}
            aria-labelledby={`extras-title-${id}`}
            className="group rounded-2xl border border-neon-violet/50 bg-card/80 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-neon-pink hover:shadow-neon motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neon-pink/40 bg-neon-violet/10 transition group-hover:scale-110 motion-reduce:group-hover:scale-100">
                <Icon aria-hidden="true" className="h-6 w-6 text-neon-pink" />
              </span>
              <h3 id={`extras-title-${id}`} className="text-xl font-bold">{name}</h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{description}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-neon-pink/60 bg-card p-6 text-center shadow-neon sm:p-8">
        <h3 className="text-2xl font-extrabold sm:text-3xl">E isso é só o começo.</h3>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Essas são apenas algumas das possibilidades que a NovaesWeb pode oferecer. Temos diversas outras
          funcionalidades para personalizar e ampliar seu site conforme o crescimento do seu negócio.
        </p>
        <p className="mt-4 font-display text-lg font-semibold text-neon-pink">
          Mais recursos. Mais possibilidades. Tudo em um só lugar.
        </p>
        <a
          href={whatsLink(extrasWhatsMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-neon px-8 py-4 font-semibold shadow-neon transition hover:gap-5 motion-reduce:transition-none"
        >
          Conhecer possibilidades <ArrowRight aria-hidden="true" className="h-5 w-5" />
        </a>
        <p className="mx-auto mt-6 flex max-w-2xl items-start justify-center gap-2 text-xs leading-5 text-muted-foreground">
          <Info aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          Os recursos adicionais são opcionais e estão sujeitos à disponibilidade, compatibilidade técnica e orçamento.
          Clientes da NovaesWeb poderão consultar as opções disponíveis em seu painel, conforme a implementação dessa
          funcionalidade.
        </p>
      </div>
    </section>
  );
}
