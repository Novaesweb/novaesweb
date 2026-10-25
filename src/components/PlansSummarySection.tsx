import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Crown,
  Gem,
  MessageCircle,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { brl, whatsLink } from "@/data/plans";
import {
  commercialPlans,
  commercialWhatsMsg,
  enterprisePlan,
} from "@/data/commercial-plans";

const planIcons = {
  start: Rocket,
  business: Crown,
  premium: Gem,
} as const;

export function PlansSummarySection() {
  return (
    <section
      id="planos-resumo"
      aria-labelledby="titulo-planos-resumo"
      className="mx-auto max-w-[1800px] px-4 py-14 sm:px-8 xl:px-14"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-sm font-semibold tracking-[0.25em] text-neon-pink">
            PLANOS OFICIAIS NOVAESWEB
          </span>
          <h2 id="titulo-planos-resumo" className="mt-2 text-3xl font-bold sm:text-4xl">
            Escolha a estrutura ideal para o seu negócio
          </h2>
          <p className="mt-2 max-w-2xl text-base text-muted-foreground">
            Do site institucional de pagamento único aos planos completos com franquia mensal de
            pedidos aceitos e continuidade garantida sem bloqueio de vendas.
          </p>
        </div>
        <Link
          to="/planos"
          className="inline-flex items-center gap-2 rounded-full border-2 border-neon-pink px-6 py-3 text-sm font-semibold transition hover:bg-neon-pink/10"
        >
          Ver comparativo e exemplos completos
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {commercialPlans.map((plan) => {
          const Icon = planIcons[plan.id];
          const isOneTime = plan.monthly === 0;
          const q = plan.orderQuota;

          return (
            <article
              key={plan.id}
              className="flex flex-col rounded-2xl border border-border bg-card/90 p-6 transition hover:-translate-y-1 hover:border-neon-pink hover:shadow-neon"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-8 w-8 shrink-0 text-neon-pink" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-xs text-neon-pink">{plan.tag}</p>
                </div>
              </div>

              <div className="mt-4 border-b border-border/60 pb-4">
                {isOneTime ? (
                  <>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm font-bold">R$</span>
                      <span className="font-display text-3xl font-extrabold">
                        {brl(plan.setup)}
                      </span>
                      <span className="text-xs text-muted-foreground">criação única</span>
                    </div>
                    <p className="mt-1 text-xs font-semibold text-neon-pink">
                      Sem mensalidade obrigatória · Suporte opcional: R${" "}
                      {brl(plan.optionalSupportMonthly ?? 80)}/mês
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm font-bold">R$</span>
                      <span className="font-display text-3xl font-extrabold">
                        {brl(plan.monthly)}
                      </span>
                      <span className="text-xs text-muted-foreground">/mês</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Criação única: <strong className="text-foreground">R$ {brl(plan.setup)}</strong>
                    </p>
                  </>
                )}
              </div>

              {/* Destaque de franquia de pedidos e excedente */}
              <div className="mt-4 rounded-xl border border-neon-violet/40 bg-background/70 p-3.5">
                {q.noBlockBadge && (
                  <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-neon px-2.5 py-0.5 text-[11px] font-bold text-primary-foreground">
                    <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    {q.noBlockBadge}
                  </span>
                )}
                <p className="text-sm font-bold text-foreground">{q.headline}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {q.description}
                </p>
              </div>

              {/* Resumo de capacidade */}
              <ul className="mt-4 flex-1 space-y-2 text-xs text-muted-foreground">
                {isOneTime ? (
                  <>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-neon-pink" aria-hidden="true" />
                      <span className="text-foreground">Site institucional responsivo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-neon-pink" aria-hidden="true" />
                      <span>Não inclui sistema de pedidos online</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-neon-pink" aria-hidden="true" />
                      <span>Contato direto pelo WhatsApp</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-neon-pink" aria-hidden="true" />
                      <span className="text-foreground">
                        {q.includedAcceptedOrders} pedidos aceitos por mês incluídos
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-neon-pink" aria-hidden="true" />
                      <span className="text-foreground">Até {q.maxProducts} produtos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-neon-pink" aria-hidden="true" />
                      <span className="text-foreground">Até {q.maxAdmins} administradores</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-neon-pink" aria-hidden="true" />
                      <span>
                        Pedido aceito excedente:{" "}
                        <strong className="text-neon-pink">
                          R$ {brl(q.overageOrderPrice ?? 0)}
                        </strong>
                      </span>
                    </li>
                  </>
                )}
              </ul>

              <div className="mt-5 grid gap-2.5">
                <Link
                  to="/planos"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-neon-violet px-4 py-2.5 text-xs font-semibold text-foreground transition hover:border-neon-pink hover:text-neon-pink"
                >
                  Ver detalhes do plano
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={whatsLink(commercialWhatsMsg(plan, false))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-neon px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-neon transition"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Solicitar orçamento
                </a>
              </div>
            </article>
          );
        })}

        {/* Card 4: NOVAES EMPRESARIAL */}
        <article className="flex flex-col rounded-2xl border border-neon-violet/60 bg-card/90 p-6 transition hover:-translate-y-1 hover:border-neon-pink hover:shadow-neon">
          <div className="flex items-center gap-3">
            <Building2 className="h-8 w-8 shrink-0 text-neon-pink" aria-hidden="true" />
            <div>
              <h3 className="text-xl font-bold">{enterprisePlan.name}</h3>
              <p className="text-xs text-neon-pink">{enterprisePlan.tag}</p>
            </div>
          </div>

          <div className="mt-4 border-b border-border/60 pb-4">
            <div className="font-display text-2xl font-extrabold text-neon">
              {enterprisePlan.priceLabel}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Proposta e escopo definidos sob medida
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-neon-violet/40 bg-background/70 p-3.5">
            <p className="text-sm font-bold text-foreground">
              Quantidade de pedidos personalizada
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {enterprisePlan.description}
            </p>
          </div>

          <ul className="mt-4 flex-1 space-y-2 text-xs text-muted-foreground">
            {enterprisePlan.items.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-neon-pink" aria-hidden="true" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 grid gap-2.5">
            <Link
              to="/planos"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-neon-violet px-4 py-2.5 text-xs font-semibold text-foreground transition hover:border-neon-pink hover:text-neon-pink"
            >
              Ver detalhes do plano
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={enterprisePlan.whatsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-neon px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-neon transition"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Solicitar orçamento
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
