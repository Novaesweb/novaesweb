export const WHATS_NUMBER = "5551991189293";
export const whatsLink = (msg = "Olá, NovaesWeb! Gostaria de conversar sobre um projeto.") =>
  `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(msg)}`;

export const brl = (v: number) => v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export type PlanId = "start" | "business" | "premium";

export const plans = [
  {
    id: "start" as PlanId, name: "NOVAES START", label: "Novaes Start", tag: "Sua empresa no digital.",
    setup: 238, monthly: 59.9, deadline: "2 a 4 dias úteis",
    desc: "Landing page personalizada para apresentar sua empresa e receber contatos pelo WhatsApp.",
    items: ["Landing page personalizada", "Logo, banner e identidade visual", "Produtos/serviços com fotos e preços fixos", "Horário, endereço e localização", "Links para redes sociais", "Botão de WhatsApp com mensagem pronta", "Adaptado para celular, tablet e computador", "Hospedagem, manutenção e suporte", "1 alteração simples de conteúdo por mês"],
    excludes: "Sem painel administrativo, carrinho, checkout ou registro de pedidos.",
  },
  {
    id: "business" as PlanId, name: "NOVAES BUSINESS", label: "Novaes Business", tag: "Seu delivery com autonomia.", popular: true,
    setup: 498, monthly: 109.9, deadline: "5 a 8 dias úteis",
    desc: "Cardápio digital com carrinho, checkout e painel simplificado para gerenciar pedidos e produtos.",
    items: ["Tudo que for aplicável do Start", "Cardápio digital dinâmico", "Carrinho e checkout", "CEP automático e dados salvos do cliente", "Pix, dinheiro e cartão na entrega", "Acompanhamento do pedido pelo site", "Painel simplificado: pedidos, produtos, preços e categorias", "Abrir/fechar loja, horário e taxa de entrega"],
    excludes: "Não inclui financeiro avançado, funcionários, marketing, cupons e WhatsApp automático (disponíveis como adicionais).",
  },
  {
    id: "premium" as PlanId, name: "NOVAES PREMIUM", label: "Novaes Premium", tag: "Sua operação inteira em uma plataforma.",
    setup: 898, monthly: 209.9, deadline: "10 a 15 dias úteis",
    desc: "Plataforma completa no padrão Burger House, com autonomia total para administrar sua loja.",
    items: ["Tudo do Business", "Combos e personalização de produtos", "Cupons e promoções", "Avaliações da comida e da entrega", "Painel completo com dashboard e relatórios", "Financeiro e fechamento de caixa", "Equipe, permissões e marketing", "Impressão de comandas e pedidos manuais"],
    excludes: "Não inclui WhatsApp automático, tarifas da Meta, domínio próprio e integrações personalizadas.",
  },
];

export const half = (v: number) => v / 2;
export const planWhatsMsg = (p: (typeof plans)[number]) =>
  `Olá, NovaesWeb! Tenho interesse no ${p.label}, com criação de R$ ${brl(p.setup)} e mensalidade de R$ ${brl(p.monthly)}. Gostaria de conversar sobre a contratação.`;

// value per plan: true = incluído, false = não, string = observação
export const comparison: [string, boolean | string, boolean | string, boolean | string][] = [
  ["Landing page", true, true, true],
  ["Cardápio", "Estático", "Dinâmico", "Dinâmico"],
  ["Produtos", true, true, true],
  ["Categorias", true, true, true],
  ["Carrinho", false, true, true],
  ["Checkout", false, true, true],
  ["Pedidos", false, true, true],
  ["Acompanhamento", false, true, true],
  ["Painel administrativo", "Sem painel", "Simplificado", "Completo"],
  ["Edição de produtos", false, true, true],
  ["Edição de preços", false, true, true],
  ["Gestão de pedidos", false, true, true],
  ["Financeiro", false, "Adicional", true],
  ["Funcionários", false, "Adicional", true],
  ["Marketing", false, "Adicional", true],
  ["Cupons", false, "Adicional", true],
  ["Combos", false, false, true],
  ["Relatórios", false, "Adicional", true],
  ["Avaliações", false, false, true],
  ["Impressão", false, false, true],
  ["Pedidos manuais", false, false, true],
  ["WhatsApp automático", false, "Adicional", "Adicional"],
  ["Suporte", true, true, true],
];

export const addonCategories = [
  { id: "premium", name: "Funcionalidades Premium" },
  { id: "integrations", name: "Automações e Integrações" },
  { id: "management", name: "Gestão e Crescimento" },
  { id: "services", name: "Serviços Avulsos" },
] as const;

export type AddonCategory = (typeof addonCategories)[number]["id"];
export type Addon = {
  id: string;
  name: string;
  price: string;
  category: AddonCategory;
  description: string;
  status?: "planning" | "proposal";
};

export const addons: Addon[] = [
  { id: "whatsapp-notify", name: "Novaes WhatsApp Notify", price: "R$ 25/mês", category: "integrations", description: "Envie notificações automáticas pelo WhatsApp sobre eventos importantes do negócio, como atualizações de pedidos e outras ações configuradas. Depende de integração compatível e das regras do WhatsApp." },
  { id: "whatsapp-activation", name: "Ativação WhatsApp Oficial", price: "R$ 100 (único)", category: "integrations", description: "Serviço de configuração inicial da WhatsApp Cloud API para habilitar integrações oficiais, conforme os requisitos da Meta. Eventuais custos de mensagens não estão incluídos." },
  { id: "promo", name: "Novaes Promo", price: "R$ 15/mês", category: "management", description: "Ferramentas adicionais para criar e administrar cupons de desconto e campanhas promocionais no site. Adicional para o plano Business." },
  { id: "finance", name: "Novaes Finance", price: "R$ 30/mês", category: "management", description: "Recursos avançados de controle financeiro, permitindo acompanhar movimentações, despesas e resultados conforme as funcionalidades disponíveis no painel. Adicional para o plano Business." },
  { id: "team", name: "Novaes Equipe", price: "R$ 20/mês", category: "management", description: "Gerenciamento de colaboradores, organização de acessos e acompanhamento de informações da equipe, conforme o sistema contratado. Adicional para o plano Business." },
  { id: "insights", name: "Novaes Insights", price: "R$ 20/mês", category: "management", description: "Relatórios detalhados para acompanhar vendas, pedidos e indicadores do negócio, ajudando na análise dos resultados. Adicional para o plano Business." },
  { id: "marketing", name: "Novaes Marketing", price: "R$ 35/mês", category: "management", description: "Recursos adicionais para organizar campanhas e ações de divulgação relacionadas ao site e aos produtos da empresa. Adicional para o plano Business." },
  { id: "domain", name: "Configuração de Domínio", price: "R$ 50 + registro", category: "services", description: "Configuração técnica para conectar um domínio personalizado ao site. O registro ou a renovação do domínio são cobrados separadamente." },
  { id: "training", name: "Treinamento Personalizado", price: "R$ 70/hora", category: "services", description: "Treinamento adicional para aprender a utilizar o painel administrativo e os recursos contratados." },
  { id: "adjustment", name: "Ajuste Avulso", price: "R$ 15", category: "services", description: "Pequena alteração solicitada fora da franquia de ajustes incluída no plano, mediante avaliação do escopo." },
  { id: "banner", name: "Atualização de Banner", price: "R$ 25", category: "services", description: "Substituição de um banner existente por uma nova arte fornecida ou previamente aprovada, conforme o escopo do serviço." },
  { id: "products-10", name: "Cadastro de Produtos — Pacote 10", price: "R$ 35", category: "services", description: "Serviço de cadastro assistido de até dez produtos no catálogo, utilizando as informações e imagens fornecidas pelo cliente." },
  { id: "extra-support", name: "Suporte Extraordinário", price: "R$ 50", category: "services", description: "Atendimento excepcional fora do horário regular, sujeito à disponibilidade e às condições informadas pela NovaesWeb. Até 30 minutos por atendimento; falhas críticas de responsabilidade da NovaesWeb não são cobradas." },
  { id: "custom-development", name: "Desenvolvimento Sob Medida", price: "Sob orçamento", category: "services", description: "Criação de funcionalidades personalizadas conforme as necessidades do negócio, com análise técnica e orçamento individual." },
  { id: "custom-integrations", name: "Integrações Personalizadas", price: "Sob orçamento", category: "integrations", description: "Conexão do site com sistemas ou serviços externos compatíveis, mediante avaliação de viabilidade, segurança e custos." },
  { id: "print", name: "Novaes Print Connect", price: "Sob orçamento", category: "integrations", description: "Integração especial para impressão automatizada de pedidos ou documentos em equipamentos compatíveis, mediante avaliação técnica." },
  { id: "loyalty", name: "Novaes Fideliza", price: "Sob orçamento", category: "premium", status: "planning", description: "Programa de fidelidade digital integrado ao site, permitindo que clientes acumulem pontos ou benefícios e resgatem recompensas conforme as regras do estabelecimento." },
  { id: "service-orders", name: "Novaes OS", price: "Sob orçamento", category: "premium", status: "planning", description: "Sistema de ordens de serviço integrado ao site, com cadastro de clientes, acompanhamento de serviços, atualização de status e organização dos atendimentos." },
  { id: "tables", name: "Novaes Mesa", price: "Sob orçamento", category: "premium", status: "planning", description: "Sistema de pedidos por QR Code nas mesas, com identificação da mesa e acompanhamento dos pedidos pela equipe do estabelecimento." },
  { id: "gift", name: "Novaes Gift", price: "Sob orçamento", category: "premium", status: "planning", description: "Sistema de cartões-presente digitais com códigos individuais, valores ou benefícios definidos pelo estabelecimento e controle de utilização." },
  { id: "tv", name: "Novaes TV", price: "Sob orçamento", category: "premium", status: "planning", description: "Transforma produtos, imagens, preços, ofertas e vídeos já cadastrados no site em apresentações para televisões, com gerenciamento pelo mesmo painel." },
  { id: "backup", name: "Novaes Backup Plus", price: "R$ 15/mês", category: "integrations", status: "proposal", description: "Cópias de segurança adicionais, histórico ampliado de versões e possibilidade de restauração assistida, além da proteção básica do serviço." },
  { id: "multiuser", name: "Novaes Multiusuário", price: "R$ 15/mês", category: "management", status: "proposal", description: "Recursos avançados de usuários e permissões, permitindo organizar diferentes níveis de acesso ao painel administrativo. Escopo a definir para não duplicar os recursos de Novaes Equipe." },
  { id: "multibranch", name: "Novaes Multiunidade", price: "A partir de R$ 39/mês", category: "management", status: "proposal", description: "Gerenciamento de diferentes unidades de uma mesma empresa, com configurações e informações organizadas por estabelecimento." },
  { id: "import", name: "Novaes Import", price: "R$ 49 por importação", category: "services", status: "proposal", description: "Importação assistida de produtos e informações por planilhas compatíveis, reduzindo o trabalho de cadastro manual." },
];

export const addonWhatsMsg = (addon: Addon) =>
  `Olá, NovaesWeb! Gostaria de solicitar o adicional: ${addon.name} (${addon.price}).${addon.status === "planning" ? " Entendo que está em planejamento e gostaria de consultar a viabilidade e o prazo." : addon.status === "proposal" ? " Entendo que é uma proposta nova, com valor provisório sujeito à aprovação e disponibilidade sob consulta." : ""}`;

const CONTRATO = "As condições são apresentadas na proposta ou no contrato.";
export const faqs: [string, string][] = [
  ["Preciso pagar a criação e a mensalidade?", "Sim. A criação é uma cobrança única e a mensalidade é recorrente. A mensalidade não é parcela da criação."],
  ["Como funciona a entrada de 50%?", "Você paga 50% do valor da criação para iniciarmos o projeto."],
  ["Quando pago o restante?", "Os outros 50% da criação são pagos na entrega."],
  ["Quando começa a mensalidade?", "A mensalidade começa na ativação do site."],
  ["Quanto tempo demora a criação?", "Start: 2 a 4 dias úteis. Business: 5 a 8. Premium: 10 a 15. Os prazos são estimados e começam após o recebimento dos materiais e informações."],
  ["Posso editar meu site?", "No Start, as alterações são solicitadas à NovaesWeb. No Business e no Premium, você edita produtos, preços e configurações pelo painel."],
  ["O Start possui painel?", "Não. O Start não possui painel administrativo nem login do proprietário."],
  ["O Business possui painel?", "Sim, um painel simplificado para pedidos, produtos, categorias e configurações básicas da loja."],
  ["O Premium possui todas as ferramentas?", "O Premium inclui o painel completo com todos os módulos próprios concluídos e homologados. WhatsApp automático, domínio e integrações personalizadas são contratados à parte."],
  ["O WhatsApp automático está incluído?", "Não. É um adicional de R$ 25/mês, mais R$ 100 de configuração inicial. Tarifas da Meta não estão incluídas. O cliente acompanha o pedido pelo site mesmo sem esse adicional."],
  ["Posso contratar adicionais?", "Sim, sempre que forem compatíveis com o seu plano."],
  ["Posso mudar de plano?", CONTRATO],
  ["Posso usar meu domínio?", "Sim. A configuração custa R$ 50, mais o custo do registro do domínio."],
  ["Quem cuida da hospedagem?", "A NovaesWeb. A hospedagem está incluída na mensalidade."],
  ["Como funciona o suporte?", "Segunda a sexta-feira, das 9h às 18h (horário de Brasília). Não oferecemos atendimento humano 24 horas."],
  ["Posso pedir atendimento fora do horário?", "Sim, mediante disponibilidade: R$ 50 por atendimento de até 30 minutos. Falhas críticas de responsabilidade da NovaesWeb não são cobradas."],
  ["Quanto custam alterações?", "O Start inclui 1 alteração simples por mês. Alterações simples extras custam R$ 15; troca de banner, R$ 25."],
  ["Como funciona o cancelamento?", CONTRATO],
];

export type PackId = "divulgacao" | "apresentacao" | "conteudo";

export const videoPacks = [
  {
    id: "divulgacao" as PackId,
    name: "Divulgação Rápida",
    tag: "Várias divulgações curtas para manter a loja sempre em movimento.",
    videos: "2 vídeos de 10s",
    images: "3 imagens",
    price: 89,
    savings: 9,
  },
  {
    id: "apresentacao" as PackId,
    name: "Apresentação da Loja",
    tag: "Uma apresentação mais completa do seu negócio.",
    videos: "1 vídeo de 30s",
    images: "3 imagens",
    price: 89,
    savings: 7,
  },
  {
    id: "conteudo" as PackId,
    name: "Mais Conteúdo",
    tag: "Mais material pronto para as redes sociais.",
    videos: "1 vídeo de 30s",
    images: "4 imagens",
    price: 109,
    savings: 9,
  },
];

export const packWhatsMsg = (p: (typeof videoPacks)[number]) =>
  `Olá, NovaesWeb! Tenho interesse no pacote ${p.name}: ${p.videos} + ${p.images}, por R$ ${brl(p.price)}. Gostaria de conversar.`;

