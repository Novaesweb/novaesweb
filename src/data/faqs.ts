import { faqs as planFaqs } from "@/data/plans";

// Dúvidas que não são só de plano: sites, identidade visual, vídeos e integração.
export const generalFaqs: [string, string][] = [
  ["Que tipos de site e serviço vocês fazem?", "Sites profissionais, cardápio com pedidos pelo WhatsApp, lojas virtuais, sistemas sob medida, identidade visual (logo e artes) e conteúdo para redes sociais."],
  ["Vocês criam a logo e as artes da minha marca?", "Sim. Cuidamos da identidade visual: logo, artes e materiais profissionais, com as cores e o estilo do seu negócio."],
  ["Vocês fazem vídeos e artes para as redes sociais?", "Sim, na Criação Visual. São pacotes avulsos de vídeos e imagens, sem mensalidade: Divulgação Rápida, Apresentação da Loja e Mais Conteúdo."],
  ["O que é a integração com o WhatsApp API?", "É a conexão do seu site, loja ou sistema com o WhatsApp para enviar mensagens automáticas, avisos de pedido e centralizar o atendimento no seu número. A configuração inicial custa R$ 100 e as notificações automáticas, R$ 25/mês — as tarifas da Meta não estão inclusas."],
  ["O que eu preciso ter para começar?", "O nome e a logo da sua marca (se ainda não tiver, a gente cria), as fotos e os textos do seu negócio e o número de WhatsApp para onde os clientes vão falar."],
  ["Meu site vai aparecer bem no Google?", "O site é criado com carregamento rápido e estrutura amigável ao Google. A posição nas buscas depende de conteúdo e do tempo de análise do Google, então não prometemos a primeira posição — prometemos um site bem feito."],
  ["Já tenho um site. Dá para reformar?", "Depende do caso. Me conte pelo WhatsApp o que você tem hoje e o que quer mudar, e a gente avalia antes de orçar."],
  ["Como vejo o andamento do meu projeto?", "Pelo WhatsApp, com a nossa equipe, de segunda a sexta-feira, das 9h às 18h (horário de Brasília)."],
  ["Como combinamos o pagamento?", "As formas de pagamento são combinadas na proposta, de acordo com o que ficar melhor para você."],
];

export const allFaqs: [string, string][] = [...generalFaqs, ...planFaqs];

// Quantas dúvidas aparecem na tela inicial antes de abrir todas as outras.
export const faqsShown = 9;
