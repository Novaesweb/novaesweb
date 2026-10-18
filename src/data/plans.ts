export const WHATS_NUMBER = "5551981964238";
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

export const addons: [string, string][] = [
  ["Notificações automáticas WhatsApp", "R$ 25/mês"],
  ["Configuração inicial WhatsApp Cloud API", "R$ 100 (único)"],
  ["Cupons e promoções (Business)", "R$ 15/mês"],
  ["Financeiro avançado (Business)", "R$ 30/mês"],
  ["Gestão de funcionários (Business)", "R$ 20/mês"],
  ["Relatórios avançados (Business)", "R$ 20/mês"],
  ["Marketing (Business)", "R$ 35/mês"],
  ["Domínio próprio", "R$ 50 + registro"],
  ["Treinamento adicional", "R$ 70/hora"],
  ["Alteração simples fora da franquia", "R$ 15"],
  ["Troca de banner", "R$ 25"],
  ["Cadastro de até 10 produtos", "R$ 35"],
  ["Atendimento extraordinário", "R$ 50"],
  ["Funcionalidades personalizadas", "Sob orçamento"],
  ["Integrações externas", "Sob orçamento"],
  ["Impressão automática especial", "Sob orçamento"],
];

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
