import { plans as legacyPlans, brl, whatsLink } from "@/data/plans";

// Page-only commercial presentation: the legacy FAQ/legal records stay unchanged.
export const contentChangeRules = {
  requestsPerMonth: 4,
  cumulative: false,
  clientEditsConsumeRequests: false,
  providerDefectCorrectionsConsumeRequests: false,
  excludedScopes: ["new-pages", "redesign", "new-features", "integrations"],
  complexityAndDeadline: "contract",
} as const;

export const separateModules = [
  "Novaes Finance", "Novaes Fideliza", "Novaes Mesa", "Novaes TV", "Novaes Gift",
  "Novaes OS", "Novaes Promo", "Novaes Insights", "Novaes Marketing", "Novaes Equipe",
  "WhatsApp Notify", "Integrações especiais", "Desenvolvimento sob medida",
] as const;

export type OrderQuotaDetails = {
  hasOnlineOrders: boolean;
  includedAcceptedOrders: number | null;
  overageOrderPrice: number | null;
  maxProducts: number | null;
  maxAdmins: number | null;
  headline: string;
  description: string;
  noBlockBadge: string | null;
};

const pageDetails = {
  start: {
    tag: "Sua empresa no digital.",
    items: [
      "Site institucional (landing page profissional e responsiva)",
      "Não inclui sistema de pedidos online",
      "Apresentação do estabelecimento",
      "Serviços ou produtos em destaque",
      "Botão para WhatsApp",
      "Informações de contato e redes sociais",
      "SEO básico",
    ],
    excludes: "Sem sistema de pedidos online, painel administrativo, hospedagem recorrente, manutenção ou alterações mensais incluídas. Suporte recorrente, domínio e serviços extras somente mediante contratação separada.",
    includedModules: [],
    contentRequestsPerMonth: 0,
    orderQuota: {
      hasOnlineOrders: false,
      includedAcceptedOrders: null,
      overageOrderPrice: null,
      maxProducts: null,
      maxAdmins: null,
      headline: "Site institucional · Não inclui sistema de pedidos online.",
      description: "Ideal para apresentar sua empresa na internet e direcionar o visitante para atendimento direto no WhatsApp.",
      noBlockBadge: null,
    } satisfies OrderQuotaDetails,
  },
  business: {
    tag: "Seu site com mais autonomia.",
    items: [
      "340 pedidos aceitos por mês incluídos (excedente: R$ 0,20 por pedido aceito)",
      "Até 200 produtos cadastrados",
      "Até 2 administradores no painel",
      "Site profissional responsivo com estrutura ampliada",
      "Integração de contato com WhatsApp",
      "Painel administrativo básico para o proprietário",
      "Edição de horários de funcionamento",
      "Edição de telefone, contatos e redes sociais",
      "Edição de textos e avisos",
      "Atualização de banners",
      "Cadastro e edição de produtos",
      "Edição de preços e disponibilidade",
      "Hospedagem incluída",
      "Suporte técnico e manutenção técnica incluídos",
      "Até 4 solicitações de alteração de conteúdo por mês pela NovaesWeb",
    ],
    excludes: "Não inclui gestão financeira, relatórios avançados, automações ou módulos comerciais especializados. Funcionalidades adicionais são contratadas separadamente, conforme compatibilidade e disponibilidade.",
    includedModules: [],
    contentRequestsPerMonth: contentChangeRules.requestsPerMonth,
    orderQuota: {
      hasOnlineOrders: true,
      includedAcceptedOrders: 340,
      overageOrderPrice: 0.2,
      maxProducts: 200,
      maxAdmins: 2,
      headline: "340 pedidos aceitos incluídos por mês.",
      description: "Seu delivery continua recebendo pedidos após atingir a franquia. Cada pedido aceito adicional custa apenas R$ 0,20.",
      noBlockBadge: "Sem bloqueio ao atingir a franquia",
    } satisfies OrderQuotaDetails,
  },
  premium: {
    tag: "Mais possibilidades de gerenciamento.",
    items: [
      "750 pedidos aceitos por mês incluídos (excedente: R$ 0,15 por pedido aceito)",
      "Até 500 produtos cadastrados",
      "Até 5 administradores no painel",
      "Todas as funcionalidades do Business",
      "Painel administrativo ampliado",
      "Organização de categorias de produtos",
      "Gestão de fotos e destaques",
      "Gerenciamento de tamanhos e opções adicionais de produtos",
      "Configurações simples de personalização de itens",
      "Mais possibilidades de gerenciamento de conteúdo",
      "Hospedagem incluída",
      "Suporte técnico e manutenção técnica incluídos",
      "Até 4 solicitações de alteração de conteúdo por mês pela NovaesWeb",
    ],
    excludes: "Os módulos abaixo não estão automaticamente incluídos; são adicionais sujeitos à compatibilidade, disponibilidade e contratação separada.",
    includedModules: [],
    contentRequestsPerMonth: contentChangeRules.requestsPerMonth,
    orderQuota: {
      hasOnlineOrders: true,
      includedAcceptedOrders: 750,
      overageOrderPrice: 0.15,
      maxProducts: 500,
      maxAdmins: 5,
      headline: "750 pedidos aceitos incluídos por mês.",
      description: "Seu negócio continua recebendo pedidos mesmo após atingir a franquia. Cada pedido aceito adicional custa apenas R$ 0,15.",
      noBlockBadge: "Sem bloqueio ao atingir a franquia",
    } satisfies OrderQuotaDetails,
  },
};

export const enterprisePlan = {
  id: "empresarial" as const,
  name: "NOVAES EMPRESARIAL",
  label: "Novaes Empresarial",
  tag: "Solução sob medida para operações maiores.",
  priceLabel: "Valores sob consulta",
  items: [
    "Valores sob consulta",
    "Quantidade de pedidos personalizada",
    "Limites e infraestrutura conforme contrato",
    "Solução sob medida",
  ],
  description:
    "Para redes, alto volume de pedidos ou necessidades específicas. Defina franquia de pedidos, limites de produtos, administradores, módulos e infraestrutura em proposta individual.",
  whatsHref: whatsLink(
    "Olá, NovaesWeb! Gostaria de solicitar um orçamento para o plano Novaes Empresarial, com quantidade de pedidos personalizada e condições definidas sob medida.",
  ),
};

export const commercialPlans = legacyPlans.map((plan) => ({
  ...plan,
  ...pageDetails[plan.id],
  popular: false,
  previousSetup: plan.id === "start" ? 890 : null,
  setupPayment: {
    upfront: plan.setup / 2,
    remainder: plan.setup / 2,
    remainderDue: plan.id === "start" ? "before-publication" : "delivery",
  },
}));

export type CommercialPlan = (typeof commercialPlans)[number];
export const launchSaving = (plan: CommercialPlan) =>
  plan.previousSetup === null ? 0 : plan.previousSetup - plan.setup;

export const commercialWhatsMsg = (plan: CommercialPlan, withSupport = false) =>
  plan.id === "start"
    ? `Olá, NovaesWeb! Tenho interesse no ${plan.label}, com criação de R$ ${brl(plan.setup)}, pagamento único e sem mensalidade obrigatória. ${withSupport && plan.optionalSupportMonthly ? `Quero contratar também o suporte opcional de R$ ${brl(plan.optionalSupportMonthly)} por mês.` : "Somente a criação, sem suporte contratado."} Entendo que o pagamento da criação é de R$ ${brl(plan.setupPayment.upfront)} na contratação e R$ ${brl(plan.setupPayment.remainder)} antes da publicação. Gostaria de conversar sobre a contratação.`
    : `Olá, NovaesWeb! Tenho interesse no ${plan.label}, com criação de R$ ${brl(plan.setup)} e mensalidade de R$ ${brl(plan.monthly)} (${plan.orderQuota.includedAcceptedOrders} pedidos aceitos/mês incluídos; excedente de R$ ${brl(plan.orderQuota.overageOrderPrice ?? 0)} por pedido aceito). Entendo que estão incluídas até ${plan.contentRequestsPerMonth} solicitações mensais de alteração de conteúdo, não cumulativas e conforme o contrato; módulos adicionais são contratados separadamente. Gostaria de conversar sobre a contratação.`;

export const overageSectionCopy = {
  title: "Seu negócio não precisa parar de vender",
  paragraphs: [
    "Nos planos Business e Premium, a quantidade mensal de pedidos representa a franquia incluída na assinatura, não um bloqueio de vendas.",
    "Ao ultrapassar essa quantidade, sua loja continua recebendo pedidos normalmente. Você paga apenas pelos pedidos aceitos que excederem a franquia, conforme a tarifa do seu plano.",
  ],
  benefits: [
    {
      title: "Continue recebendo pedidos",
      description: "Atingir a franquia não bloqueia o delivery.",
    },
    {
      title: "Cobrança transparente",
      description: "Saiba quanto custa cada pedido aceito excedente.",
    },
    {
      title: "Acompanhe seu crescimento",
      description: "Alertas previstos ao atingir 80% e 100% da franquia.",
    },
  ],
} as const;

export type OverageBillingExample = {
  planId: "business" | "premium";
  planLabel: string;
  title: string;
  totalAcceptedOrders: number;
  includedOrders: number;
  overageOrders: number;
  overageUnitPrice: number;
  overageTotalCost: number;
  baseMonthly: number;
  totalMonthlyBill: number;
};

export const overageBillingExamples: OverageBillingExample[] = [
  {
    planId: "business",
    planLabel: "Novaes Business",
    title: "Business com 500 pedidos aceitos",
    totalAcceptedOrders: 500,
    includedOrders: 340,
    overageOrders: 160,
    overageUnitPrice: 0.2,
    overageTotalCost: 32,
    baseMonthly: 190,
    totalMonthlyBill: 222,
  },
  {
    planId: "premium",
    planLabel: "Novaes Premium",
    title: "Premium com 1.500 pedidos aceitos",
    totalAcceptedOrders: 1500,
    includedOrders: 750,
    overageOrders: 750,
    overageUnitPrice: 0.15,
    overageTotalCost: 112.5,
    baseMonthly: 270,
    totalMonthlyBill: 382.5,
  },
];

export const orderCountingRules = [
  "Somente pedidos aceitos são contabilizados.",
  "Pedidos rejeitados não contam.",
  "Cada pedido aceito é contado uma única vez.",
  "Pedidos aceitos e depois cancelados normalmente continuam contabilizados, salvo erro comprovado do sistema.",
  "Excedentes são cobrados no mês seguinte.",
  "Atingir a franquia não bloqueia o recebimento de pedidos.",
  "No primeiro mês, mensalidade e franquia são proporcionais aos dias ativos.",
  "Mudanças de plano passam a valer no mês seguinte.",
  "O Empresarial possui condições personalizadas.",
] as const;

export const plansPageFaqs: [string, string][] = [
  [
    "O que acontece se minha loja ultrapassar a franquia mensal de pedidos?",
    "Sua loja continua recebendo pedidos normalmente, sem bloqueio automático. No Business estão incluídos 340 pedidos aceitos/mês (excedente de R$ 0,20 por pedido aceito) e no Premium estão incluídos 750 pedidos aceitos/mês (excedente de R$ 0,15 por pedido aceito).",
  ],
  [
    "Quais pedidos entram na contagem da franquia?",
    "Somente pedidos aceitos são contabilizados, e cada pedido aceito é contado uma única vez. Pedidos rejeitados não entram na contagem. Pedidos aceitos e depois cancelados normalmente continuam contabilizados, salvo erro comprovado do sistema.",
  ],
  [
    "Quando e como os pedidos excedentes são cobrados?",
    "Os pedidos aceitos que ultrapassarem a franquia mensal do seu plano são apurados e cobrados no mês seguinte, conforme o valor unitário de excedente do plano contratado (R$ 0,20 no Business e R$ 0,15 no Premium).",
  ],
  [
    "Como ficam a mensalidade e a franquia no primeiro mês de uso?",
    "No primeiro mês, tanto a mensalidade quanto a franquia de pedidos incluídos são proporcionais aos dias ativos do site.",
  ],
  [
    "Se eu mudar de plano, quando a nova franquia passa a valer?",
    "Mudanças de plano passam a valer no mês seguinte, conforme as condições contratuais.",
  ],
  [
    "O plano Novaes Start possui sistema de pedidos online?",
    "Não. O Novaes Start é um site institucional (landing page) com pagamento único de criação (R$ 630,00) e sem mensalidade obrigatória, voltado para apresentação da empresa e contato via WhatsApp.",
  ],
  [
    "E se minha operação tiver um volume maior de pedidos, produtos ou administradores?",
    "O plano Novaes Empresarial oferece valores sob consulta, quantidade de pedidos personalizada e limites e infraestrutura definidos conforme contrato, em uma solução sob medida.",
  ],
];

export const commercialComparison: [string, boolean | string, boolean | string, boolean | string][] = [
  ["Site responsivo", "Landing page", "Estrutura ampliada", "Estrutura ampliada"],
  ["Sistema de pedidos online", false, true, true],
  ["Pedidos aceitos incluídos por mês", "Não inclui", "340 pedidos/mês", "750 pedidos/mês"],
  ["Pedido aceito excedente", "—", "R$ 0,20 / pedido", "R$ 0,15 / pedido"],
  ["Continuidade após atingir a franquia", "—", "Sem bloqueio", "Sem bloqueio"],
  ["Limite de produtos", "Em destaque", "Até 200 produtos", "Até 500 produtos"],
  ["Administradores no painel", "Sem painel", "Até 2 admins", "Até 5 admins"],
  ["Contato com WhatsApp", true, true, true],
  ["Contatos e redes sociais", true, true, true],
  ["SEO básico", true, true, true],
  ["Painel administrativo", "Sem painel", "Básico", "Ampliado"],
  ["Edição de horários, contatos, textos e banners pelo painel", false, true, true],
  ["Produtos", "Em destaque", "Cadastro e edição", "Cadastro e edição"],
  ["Preços e disponibilidade pelo painel", false, true, true],
  ["Categorias de produtos", false, false, true],
  ["Gestão de fotos e destaques", false, false, true],
  ["Tamanhos e opções adicionais", false, false, true],
  ["Personalização simples de produtos", false, false, true],
  ["Hospedagem recorrente incluída", false, true, true],
  ["Suporte técnico", "Opcional: R$ 80/mês", true, true],
  ["Manutenção técnica incluída", false, true, true],
  ["Solicitações de conteúdo pela NovaesWeb", "Não incluídas", "Até 4/mês", "Até 4/mês"],
  ["Módulos comerciais especializados e automações", false, "Contratação separada", "Contratação separada"],
  ["Domínio próprio", "Contratação separada", "Contratação separada", "Contratação separada"],
];
