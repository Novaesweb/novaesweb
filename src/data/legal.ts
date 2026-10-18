export type LegalSection = { h: string; p?: string[]; list?: string[] };
export type LegalDoc = {
  id: "termos" | "privacidade";
  title: string;
  short: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export const legalDocs: LegalDoc[] = [
  {
    id: "termos",
    title: "Termos de uso e condições comerciais",
    short: "Termos de uso",
    updated: "18/10/2026",
    intro:
      "Estas condições explicam como a NovaesWeb trabalha: o que está em cada plano, como é o pagamento, os prazos e o suporte. Ao contratar, você aceita o que está descrito aqui e na sua proposta.",
    sections: [
      {
        h: "1. Quem somos",
        p: [
          "A NovaesWeb — Soluções Digitais cria sites, cardápios digitais, sistemas de delivery, identidade visual e conteúdo digital para negócios.",
          "Todo contato comercial e suporte acontece pelo WhatsApp +55 51 98196-4238.",
        ],
      },
      {
        h: "2. Como funciona a contratação",
        list: [
          "Você fala com a gente e recebe uma proposta com o plano, o que está incluso e o prazo.",
          "A criação é uma cobrança única. Você paga 50% da criação para o projeto começar.",
          "Os outros 50% da criação são pagos na entrega do site.",
          "A mensalidade é um valor separado, recorrente, e começa a contar na ativação do site no ar.",
        ],
      },
      {
        h: "3. Planos, valores e prazos",
        list: [
          "Novaes Start — criação R$ 238,00 + mensalidade R$ 59,90. Prazo de 2 a 4 dias úteis.",
          "Novaes Business — criação R$ 498,00 + mensalidade R$ 109,90. Prazo de 5 a 8 dias úteis.",
          "Novaes Premium — criação R$ 898,00 + mensalidade R$ 209,90. Prazo de 10 a 15 dias úteis.",
          "Os prazos são estimados e começam depois que recebemos os materiais e as informações do seu negócio.",
          "Cada plano tem o que está na sua descrição. O que não está listado é contratado como adicional.",
        ],
      },
      {
        h: "4. Conteúdo, alterações e responsabilidade",
        list: [
          "O Start não tem painel administrativo: as alterações são pedidas para a NovaesWeb. São incluídas 1 alteração simples de conteúdo por mês.",
          "No Business e no Premium, você mesmo edita produtos, preços e configurações pelo painel.",
          "O cliente é responsável pelas informações, fotos, preços, descrições e pela veracidade do que publica na loja.",
          "O cliente também é responsável por manter os dados de entrega, horário e formas de pagamento atualizados.",
        ],
      },
      {
        h: "5. Adicionais e serviços fora do plano",
        p: [
          "Serviços extras podem ser contratados quando são compatíveis com o seu plano. Exemplos: notificações automáticas no WhatsApp, cupons, financeiro avançado, gestão de funcionários, marketing, domínio próprio, treinamento e funcionalidades personalizadas.",
          "Itens sob orçamento e integrações externas são combinados antes de começar. Tarifas de terceiros, como as da Meta no WhatsApp automático, não estão incluídas.",
        ],
      },
      {
        h: "6. Criação Visual (vídeos e imagens)",
        list: [
          "Pacotes avulsos, sem mensalidade: Divulgação Rápida R$ 89,00, Apresentação da Loja R$ 89,00 e Mais Conteúdo R$ 109,00.",
          "Cada pacote já diz quantos vídeos e quantas imagens ele entrega.",
        ],
      },
      {
        h: "7. Suporte e atendimento",
        list: [
          "Suporte de segunda a sexta-feira, das 9h às 18h, no horário de Brasília. Não há atendimento humano 24 horas.",
          "Atendimento fora do horário pode ser feito mediante disponibilidade: R$ 50 por atendimento de até 30 minutos.",
          "Falhas críticas que são responsabilidade da NovaesWeb não são cobradas.",
        ],
      },
      {
        h: "8. Mudanças, cancelamento e este documento",
        list: [
          "Troca de plano, cancelamento e condições de saída são apresentados na proposta ou no contrato.",
          "Estas condições podem ser atualizadas; a versão válida é sempre a que está publicada neste site.",
        ],
      },
    ],
  },
  {
    id: "privacidade",
    title: "Política de privacidade",
    short: "Política de privacidade",
    updated: "18/10/2026",
    intro:
      "Esta política diz quais dados coletamos, para que usamos e como você pode controlá-los, conforme a LGPD (Lei 13.709/2018).",
    sections: [
      {
        h: "1. Dados que coletamos",
        list: [
          "Dados de contato: nome, telefone/WhatsApp e e-mail.",
          "Dados do negócio: endereço, horário de funcionamento, produtos, preços e fotos.",
          "Dados de pedido, quando o site tem checkout: itens escolhidos, forma de pagamento, endereço e CEP de entrega.",
          "Mensagens que você envia pelo WhatsApp, formulário ou chat do site.",
        ],
      },
      {
        h: "2. Para que usamos",
        list: [
          "Responder orçamentos e conversar sobre o projeto.",
          "Executar o serviço contratado e manter seu site funcionando.",
          "Registrar e acompanhar pedidos quando a loja tem checkout.",
          "Prestar suporte e enviar avisos sobre a sua conta ou o seu site.",
        ],
      },
      {
        h: "3. Com quem compartilhamos",
        p: [
          "Não vendemos seus dados. Só compartilhamos quando é necessário para o serviço funcionar: empresas de hospedagem, meios de pagamento, e a Meta quando o WhatsApp automático é contratado.",
          "Também podemos guardar dados por obrigação legal, como notas e registros fiscais.",
        ],
      },
      {
        h: "4. Por quanto tempo guardamos",
        p: [
          "Enquanto a relação comercial durar. Depois, guardamos apenas o que a lei exige, como registros fiscais e de pedidos.",
        ],
      },
      {
        h: "5. Seus direitos",
        p: [
          "Você pode pedir acesso, correção, exclusão, portabilidade ou revogar o consentimento a qualquer momento.",
          "Basta chamar no WhatsApp +55 51 98196-4238 e dizer o que precisa. Respondemos sem custo.",
        ],
      },
      {
        h: "6. Cookies e medição de uso",
        p: [
          "O site usa cookies para funcionar bem e para entender, de forma resumida, quantas pessoas visitam e o que procuram.",
          "Você pode desativar cookies no navegador; algumas partes podem deixar de funcionar.",
        ],
      },
      {
        h: "7. Segurança",
        p: [
          "O site roda em ambiente protegido, com acesso restrito. Não expomos chaves, senhas ou credenciais em páginas públicas.",
          "Ainda assim, nenhum sistema é 100% seguro. Se você notar algo estranho, avise a gente na hora pelo WhatsApp.",
        ],
      },
      {
        h: "8. Atualizações desta política",
        p: [
          "Quando mudar, atualizamos esta página com a nova data. A versão válida é sempre a que está publicada aqui.",
        ],
      },
    ],
  },
];
