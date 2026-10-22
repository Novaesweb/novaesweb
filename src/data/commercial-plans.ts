import { plans as legacyPlans, brl } from "@/data/plans";

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

const pageDetails = {
  start: {
    tag: "Sua empresa no digital.",
    items: ["Uma landing page profissional e responsiva", "Apresentação do estabelecimento", "Serviços ou produtos em destaque", "Botão para WhatsApp", "Informações de contato e redes sociais", "SEO básico"],
    excludes: "Sem painel administrativo, hospedagem recorrente, manutenção ou alterações mensais incluídas. Suporte recorrente, domínio e serviços extras somente mediante contratação separada.",
    includedModules: [],
    contentRequestsPerMonth: 0,
  },
  business: {
    tag: "Seu site com mais autonomia.",
    items: ["Site profissional responsivo com estrutura ampliada", "Integração de contato com WhatsApp", "Painel administrativo básico para o proprietário", "Edição de horários de funcionamento", "Edição de telefone, contatos e redes sociais", "Edição de textos e avisos", "Atualização de banners", "Cadastro e edição de produtos", "Edição de preços e disponibilidade", "Hospedagem incluída", "Suporte técnico e manutenção técnica incluídos", "Até 4 solicitações de alteração de conteúdo por mês pela NovaesWeb"],
    excludes: "Não inclui gestão financeira, relatórios avançados, automações ou módulos comerciais especializados. Funcionalidades adicionais são contratadas separadamente, conforme compatibilidade e disponibilidade.",
    includedModules: [],
    contentRequestsPerMonth: contentChangeRules.requestsPerMonth,
  },
  premium: {
    tag: "Mais possibilidades de gerenciamento.",
    items: ["Todas as funcionalidades do Business", "Painel administrativo ampliado", "Organização de categorias de produtos", "Gestão de fotos e destaques", "Gerenciamento de tamanhos e opções adicionais de produtos", "Configurações simples de personalização de itens", "Mais possibilidades de gerenciamento de conteúdo", "Hospedagem incluída", "Suporte técnico e manutenção técnica incluídos", "Até 4 solicitações de alteração de conteúdo por mês pela NovaesWeb"],
    excludes: "Os módulos abaixo não estão automaticamente incluídos; são adicionais sujeitos à compatibilidade, disponibilidade e contratação separada.",
    includedModules: [],
    contentRequestsPerMonth: contentChangeRules.requestsPerMonth,
  },
};

export const commercialPlans = legacyPlans.map((plan) => ({
  ...plan,
  ...pageDetails[plan.id],
  popular: false,
  previousSetup: plan.id === "start" ? 890 : null,
  setupPayment: { upfront: plan.setup / 2, remainder: plan.setup / 2, remainderDue: plan.id === "start" ? "before-publication" : "delivery" },
}));

export type CommercialPlan = (typeof commercialPlans)[number];
export const launchSaving = (plan: CommercialPlan) => plan.previousSetup === null ? 0 : plan.previousSetup - plan.setup;
export const commercialWhatsMsg = (plan: CommercialPlan, withSupport = false) =>
  plan.id === "start"
    ? `Olá, NovaesWeb! Tenho interesse no ${plan.label}, com criação de R$ ${brl(plan.setup)}, pagamento único e sem mensalidade obrigatória. ${withSupport && plan.optionalSupportMonthly ? `Quero contratar também o suporte opcional de R$ ${brl(plan.optionalSupportMonthly)} por mês.` : "Somente a criação, sem suporte contratado."} Entendo que o pagamento da criação é de R$ ${brl(plan.setupPayment.upfront)} na contratação e R$ ${brl(plan.setupPayment.remainder)} antes da publicação. Gostaria de conversar sobre a contratação.`
    : `Olá, NovaesWeb! Tenho interesse no ${plan.label}, com criação de R$ ${brl(plan.setup)} e mensalidade de R$ ${brl(plan.monthly)}. Entendo que estão incluídas até ${plan.contentRequestsPerMonth} solicitações mensais de alteração de conteúdo, não cumulativas e conforme o contrato; módulos adicionais são contratados separadamente. Gostaria de conversar sobre a contratação.`;

export const commercialComparison: [string, boolean | string, boolean | string, boolean | string][] = [
  ["Site responsivo", "Landing page", "Estrutura ampliada", "Estrutura ampliada"],
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