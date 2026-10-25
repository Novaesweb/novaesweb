export type ComparisonDimension = {
  title: string;
  category: "financeiro" | "marca" | "operacao" | "crescimento";
  marketplaces: {
    label: string;
    description: string;
    status: "ruim" | "neutro" | "bom";
  };
  genericSaaS: {
    label: string;
    description: string;
    status: "ruim" | "neutro" | "bom";
  };
  novaesweb: {
    label: string;
    description: string;
    status: "bom";
  };
};

export const comparisonDimensions: ComparisonDimension[] = [
  {
    title: "Comissão sobre as vendas",
    category: "financeiro",
    marketplaces: {
      label: "12% a 27% por pedido",
      description: "Parte expressiva do seu faturamento bruto fica retida na plataforma todo mês.",
      status: "ruim",
    },
    genericSaaS: {
      label: "0% de comissão direta",
      description: "Sem comissão sobre pratos, mas mensalidade sobe à medida que seu volume de pedidos cresce.",
      status: "neutro",
    },
    novaesweb: {
      label: "0% de comissão por venda",
      description: "Todo o valor faturado no seu cardápio ou site é 100% da sua empresa. Sem cobrança de porcentagem sobre a receita.",
      status: "bom",
    },
  },
  {
    title: "Identidade visual e marca",
    category: "marca",
    marketplaces: {
      label: "Marca dividida com concorrentes",
      description: "Sua loja disputa espaço na mesma tela com dezenas de restaurantes vizinhos e cupons de terceiros.",
      status: "ruim",
    },
    genericSaaS: {
      label: "Link padronizado genérico",
      description: "Layout engessado em um endereço compartilhado (ex.: anota.ai/loja ou goomer.app/loja) idêntico a milhares de outros.",
      status: "neutro",
    },
    novaesweb: {
      label: "Site próprio com a sua marca",
      description: "Endereço próprio (sualoja.com.br), layout exclusivo, cores da sua empresa e sem concorrentes no mesmo ambiente.",
      status: "bom",
    },
  },
  {
    title: "Quem monta e configura o site?",
    category: "operacao",
    marketplaces: {
      label: "Você cadastra tudo",
      description: "Processo manual sujeito a aprovação de cardápio e regras da plataforma.",
      status: "neutro",
    },
    genericSaaS: {
      label: "Faça você mesmo (self-service)",
      description: "Você precisa fotografar, subir produtos, desenhar banners e configurar o sistema por conta própria.",
      status: "ruim",
    },
    novaesweb: {
      label: "Implantação feita por especialistas",
      description: "A equipe da NovaesWeb desenvolve o site, estrutura as categorias, organiza o cardápio e entrega pronto para vender.",
      status: "bom",
    },
  },
  {
    title: "Continuidade de vendas e franquia",
    category: "operacao",
    marketplaces: {
      label: "Sem franquia, mas com custo alto",
      description: "Não bloqueia, mas cada venda adicional continua pagando até 27% de comissão.",
      status: "neutro",
    },
    genericSaaS: {
      label: "Salto de faixa ou excedente caro",
      description: "Algumas cobram até R$ 1,39 por pedido excedente; outras pulam automaticamente para mensalidades de R$ 299/mês.",
      status: "ruim",
    },
    novaesweb: {
      label: "Sem bloqueio com excedente acessível",
      description: "Franquia generosa (340 pedidos no Business e 750 no Premium) e excedente a partir de apenas R$ 0,15 por pedido adicional.",
      status: "bom",
    },
  },
  {
    title: "Dados dos clientes e fidelização",
    category: "crescimento",
    marketplaces: {
      label: "Clientes pertencem à plataforma",
      description: "Você não tem o contato direto do cliente para fazer pós-venda, remarketing ou mensagens próprias.",
      status: "ruim",
    },
    genericSaaS: {
      label: "Dados presos na ferramenta",
      description: "Se você cancelar a assinatura mensal, perde a base e o link do seu cardápio sai do ar.",
      status: "neutro",
    },
    novaesweb: {
      label: "Relacionamento direto no WhatsApp",
      description: "Seu cliente fala e pede direto com o seu negócio. Os pedidos chegam estruturados no seu canal próprio.",
      status: "bom",
    },
  },
  {
    title: "Presença no Google (SEO)",
    category: "crescimento",
    marketplaces: {
      label: "Google indexa o marketplace",
      description: "A busca do Google fortalece o marketplace geral, não a sua marca individual.",
      status: "ruim",
    },
    genericSaaS: {
      label: "Quase nula para o seu domínio",
      description: "A página fica hospedada no subdomínio da plataforma, gerando pouca relevância para a sua marca.",
      status: "ruim",
    },
    novaesweb: {
      label: "Site indexado no Google",
      description: "Desenvolvido com boas práticas de SEO, metatags, schema markup e carregamento rápido para aparecer nas buscas da sua região.",
      status: "bom",
    },
  },
  {
    title: "Opção sem mensalidade fixa",
    category: "financeiro",
    marketplaces: {
      label: "Inexistente",
      description: "Mesmo em planos sem mensalidade, a cobrança sobre as vendas é obrigatória e perpétua.",
      status: "ruim",
    },
    genericSaaS: {
      label: "Raro ou com excedente proibitivo",
      description: "Planos gratuitos costumam limitar a 30 pedidos e cobrar até R$ 1,39 por pedido extra.",
      status: "ruim",
    },
    novaesweb: {
      label: "Plano Novaes Start (R$ 630 único)",
      description: "Site institucional completo com pagamento único de criação e R$ 0 de mensalidade obrigatória.",
      status: "bom",
    },
  },
];

export const comparisonFaqs = [
  {
    q: "Devo sair imediatamente do iFood e de outros aplicativos?",
    a: "Não recomendamos sair abruptamente. Os aplicativos continuam sendo úteis como vitrine de atração de novos clientes. A estratégia mais lucrativa é o modelo combinado: atrair o primeiro pedido pelo app e direcionar a recompra para o seu site próprio com 0% de comissão.",
  },
  {
    q: "Qual a diferença entre a NovaesWeb e sistemas como Anota AI ou Goomer?",
    a: "Essas ferramentas são aplicativos padronizados onde você mesmo precisa configurar tudo e ganha um link genérico igual a milhares de restaurantes. A NovaesWeb cria um site profissional sob medida com a identidade visual da sua empresa, domínio próprio e estrutura completa, além de oferecer tarifas de excedentes muito menores e suporte humano.",
  },
  {
    q: "O que acontece se meu delivery vender mais do que a franquia do plano?",
    a: "Sua loja continua recebendo pedidos normalmente sem qualquer interrupção. Cada pedido aceito adicional custa apenas R$ 0,20 (no Business) ou R$ 0,15 (no Premium), apurado com transparência no mês seguinte.",
  },
  {
    q: "Posso usar meu próprio domínio no site da NovaesWeb?",
    a: "Sim! Seu site pode funcionar com o endereço www.suaempresa.com.br, fortalecendo a autoridade da sua marca no Google e na cabeça dos seus clientes.",
  },
];
