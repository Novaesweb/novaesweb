export type LegalSection = { h: string; p?: string[]; list?: string[] };
export type LegalDoc = { id: "termos" | "privacidade" | "reembolso"; title: string; short: string; updated: string; intro: string; sections: LegalSection[] };

export const legalDocs: LegalDoc[] = [
  {
    "id": "termos",
    "title": "Termos de Serviço",
    "short": "Termos de Serviço",
    "updated": "21/10/2026",
    "intro": "Estes termos apresentam os serviços e as condições gerais da NovaesWeb. O escopo específico é definido em proposta ou contrato, sem afastar direitos obrigatórios previstos na legislação brasileira.",
    "sections": [
      {
        "h": "1. Serviços e canal de atendimento",
        "p": [
          "A NovaesWeb — Soluções Digitais desenvolve sites, cardápios digitais, lojas, sistemas personalizados e identidade visual, conforme o escopo contratado. Contato comercial e suporte: WhatsApp +55 51 99118-9293."
        ]
      },
      {
        "h": "2. Proposta, contratação e pagamento",
        "list": [
          "A proposta deve apresentar o plano, o escopo, os materiais necessários, o prazo e os valores. A contratação é formalizada de acordo com a proposta ou o contrato aceitos.",
          "A criação é uma cobrança única: 50% para iniciar o projeto e 50% na entrega. A mensalidade é separada e começa na ativação do site no ar.",
          "Serviços extras e custos de terceiros devem ser informados e combinados antes da execução. Não se presume autorização para despesas adicionais."
        ]
      },
      {
        "h": "3. Planos e prazos estimados",
        "list": [
          "Novaes Start — criação R$ 238,00 + mensalidade R$ 59,90; prazo estimado de 2 a 4 dias úteis.",
          "Novaes Business — criação R$ 498,00 + mensalidade R$ 109,90; prazo estimado de 5 a 8 dias úteis.",
          "Novaes Premium — criação R$ 898,00 + mensalidade R$ 209,90; prazo estimado de 10 a 15 dias úteis.",
          "Os prazos começam após o recebimento dos materiais e das informações necessários. Mudanças de escopo e eventuais impedimentos devem ser comunicados e ajustados com o cliente.",
          "A descrição do plano e a proposta determinam os recursos incluídos. Módulos em planejamento ou sob consulta não são promessa de disponibilidade imediata."
        ]
      },
      {
        "h": "4. Conteúdo e responsabilidades",
        "list": [
          "O Start não possui painel administrativo: a NovaesWeb realiza as alterações solicitadas, incluindo 1 alteração simples de conteúdo por mês. Business e Premium têm edição pelo painel, conforme os recursos do plano.",
          "O cliente deve fornecer informações corretas e manter preços, produtos, contatos, horários e dados de entrega atualizados. Deve possuir direitos ou autorização para textos, marcas, fotografias e outros materiais que fornecer.",
          "Cada parte responde pelas atividades e obrigações sob sua responsabilidade. O cliente não assume falhas atribuíveis à NovaesWeb, e estes termos não afastam responsabilidade legal por vícios, defeitos ou descumprimento do serviço.",
          "Sites de demonstração ilustram possibilidades de apresentação. Não garantem resultados comerciais, volume de pedidos, posições em buscas ou faturamento."
        ]
      },
      {
        "h": "5. Direitos autorais e materiais",
        "p": [
          "A proposta ou o contrato deve definir a licença ou a eventual cessão dos materiais criados, a entrega dos arquivos, o acesso ao código e as permissões de uso. A contratação não implica automaticamente cessão de todos os direitos nem entrega de materiais não previstos.",
          "Componentes de terceiros, fontes, imagens, ferramentas e programas continuam sujeitos às respectivas licenças. A NovaesWeb deve respeitar essas licenças e não apresentar material de terceiros como criação própria. O uso de marca, imagem, depoimento ou projeto do cliente para divulgação requer autorização adequada."
        ]
      },
      {
        "h": "6. Adicionais, suporte e terceiros",
        "list": [
          "Adicionais compatíveis com o plano são contratados à parte, mediante confirmação de disponibilidade e orçamento. Tarifas de serviços externos, como as da Meta para mensagens automáticas, não estão incluídas, salvo indicação expressa na proposta.",
          "Suporte de segunda a sexta-feira, das 9h às 18h, horário de Brasília. Atendimento em fins de semana e feriados é extraordinário, mediante disponibilidade: R$ 50 por até 30 minutos, com contratação prévia.",
          "Falhas críticas de responsabilidade da NovaesWeb não são cobradas. Demandas fora do escopo são orçadas antes da execução.",
          "Dependências de hospedagem, domínios e integrações externas devem ser descritas na proposta. Não se garante disponibilidade ininterrupta nem se afasta o dever de corrigir falhas e prestar o serviço contratado."
        ]
      },
      {
        "h": "7. Uso lícito, dados e segurança",
        "p": [
          "O site e os serviços não devem ser utilizados para fraude, violação de direitos, disseminação de conteúdo ilícito ou acesso indevido a sistemas. Credenciais de painéis devem ser mantidas sob proteção; acessos e permissões devem corresponder às funções autorizadas.",
          "O tratamento de dados de clientes finais e a responsabilidade de cada parte em projetos com cadastros, pedidos ou integrações devem ser definidos no contrato, conforme a LGPD. A Política de privacidade deste site trata do contato institucional, não substituindo a política de cada negócio atendido."
        ]
      },
      {
        "h": "8. Cancelamento, reembolso e direitos",
        "p": [
          "Cancelamento e restituição seguem a Política de Cancelamento e Reembolso, a proposta e as normas aplicáveis. Multas, prazo de aviso, bloqueio por atraso e regras de saída não foram definidos como condições gerais e não podem ser presumidos.",
          "Quando houver relação de consumo, prevalecem os direitos do Código de Defesa do Consumidor. Estes termos não limitam o acesso aos órgãos de defesa do consumidor nem impõem foro que retire direitos legais."
        ]
      },
      {
        "h": "9. Versões e alterações",
        "p": [
          "Mudanças futuras no site não alteram retroativamente o contrato aceito. Alterações contratuais devem ser comunicadas e pactuadas quando necessário, respeitando a legislação. Consulte a proposta e guarde sua versão das condições na contratação."
        ]
      }
    ]
  },
  {
    "id": "privacidade",
    "title": "Política de privacidade",
    "short": "Política de privacidade",
    "updated": "21/10/2026",
    "intro": "Esta política descreve o tratamento de dados no site institucional da NovaesWeb, conforme a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018). Sites desenvolvidos para clientes podem ter operações e políticas próprias.",
    "sections": [
      {
        "h": "1. Responsável e contato",
        "p": [
          "A NovaesWeb — Soluções Digitais é responsável pelas finalidades do tratamento dos contatos recebidos neste site. Para questões de privacidade e exercício de direitos, fale pelo WhatsApp +55 51 99118-9293 e identifique sua solicitação como assunto de privacidade."
        ]
      },
      {
        "h": "2. Dados e finalidades deste site",
        "list": [
          "No formulário de contato: nome, WhatsApp com DDD, plano ou serviço de interesse e mensagem opcional. Esses dados são utilizados para responder à sua solicitação e preparar eventual proposta.",
          "Não solicitamos CPF, documentos, dados bancários ou dados pessoais sensíveis no formulário. Evite incluí-los na mensagem livre.",
          "Ao usar um link para o WhatsApp, você passa a utilizar um serviço externo da Meta e suas próprias políticas. As mensagens enviadas nesse serviço não são coletadas automaticamente pelo formulário do site.",
          "A hospedagem pode processar informações técnicas necessárias à entrega e proteção das páginas, como endereço IP e registros de requisições. O site guarda a escolha de privacidade no armazenamento local do navegador."
        ]
      },
      {
        "h": "3. Bases legais",
        "p": [
          "O atendimento de um pedido de orçamento pode se apoiar nos procedimentos preliminares relacionados a contrato, realizados a seu pedido (art. 7º, V, da LGPD). O envio de um pedido não implica adesão a publicidade nem consentimento genérico para qualquer uso dos dados.",
          "Quando houver tratamento necessário para cumprir obrigação legal, aplica-se a respectiva base legal. Cookies de medição opcionais dependem de escolha afirmativa, que pode ser revogada. Eventual legítimo interesse exige análise de necessidade, proporcionalidade e respeito aos seus direitos; não autoriza coleta indiscriminada."
        ]
      },
      {
        "h": "4. Destinatários e transferências",
        "p": [
          "Os contatos são armazenados pelo Lovable Cloud, infraestrutura utilizada para o formulário. A hospedagem da versão acessada também participa da entrega das páginas. Pessoas autorizadas pela NovaesWeb devem acessar os contatos apenas para atendimento e gestão da solicitação.",
          "Serviços de infraestrutura e de comunicação podem tratar dados fora do Brasil. Quando houver transferência internacional, a NovaesWeb deve observar as salvaguardas aplicáveis da LGPD e da regulamentação da ANPD. Não vendemos os contatos enviados pelo formulário.",
          "O site institucional não possui checkout: dados de pedidos ou meios de pagamento de sites dos clientes não são automaticamente enviados à NovaesWeb por esta página."
        ]
      },
      {
        "h": "5. Retenção e exclusão",
        "p": [
          "Os contatos devem ser mantidos apenas enquanto necessários ao atendimento, à negociação ou à relação contratual que dela resulte. Encerrada a finalidade, deve haver exclusão ou anonimização, ressalvadas hipóteses legais de conservação, obrigações fiscais e exercício regular de direitos.",
          "Não há prazo fixo de retenção nem rotina de exclusão automática declarados para o formulário. Para verificar a situação do seu contato ou solicitar exclusão, utilize o canal de privacidade. Prazos legais específicos prevalecem quando aplicáveis."
        ]
      },
      {
        "h": "6. Direitos dos titulares",
        "list": [
          "Você pode pedir confirmação do tratamento, acesso, correção e informações sobre compartilhamento; também pode solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou tratados irregularmente.",
          "Quando cabíveis, você pode solicitar portabilidade, exclusão de dados tratados com consentimento, revogação do consentimento e informação sobre as consequências de não consentir, nos termos da legislação e da regulamentação.",
          "Faça o pedido pelo WhatsApp +55 51 99118-9293. Podemos solicitar confirmação proporcional de identidade para proteger seus dados, sem exigir informações excessivas. Os pedidos seguem os prazos e requisitos legais; quando aplicável, confirmação e acesso podem ser fornecidos de forma simplificada imediatamente ou por declaração completa em até 15 dias.",
          "Você pode apresentar reclamação à ANPD ou aos órgãos de defesa do consumidor. Recusar cookies opcionais não impede o uso do site."
        ]
      },
      {
        "h": "7. Cookies e preferências",
        "p": [
          "Cookies estritamente necessários e armazenamento necessário à operação são separados da medição opcional. A sua escolha é registrada somente neste navegador; se apagar o armazenamento ou usar outro dispositivo, deverá escolher novamente.",
          "Google Analytics e Google Tag Manager não estão ativados nesta implementação. A integração de medição permanece desativada até aprovação e configuração pela NovaesWeb, e só poderá carregar para visitantes que autorizarem os opcionais.",
          "As opções Aceitar opcionais, Recusar opcionais e Personalizar preferências permitem escolher. O link Preferências de privacidade, no rodapé, permite revisar a escolha. Não solicitamos autorização de publicidade nem enviamos os campos do formulário à medição opcional."
        ]
      },
      {
        "h": "8. Segurança e incidentes",
        "p": [
          "As medidas de proteção devem ser proporcionais aos riscos, com acesso restrito aos contatos, comunicação protegida e acompanhamento da infraestrutura. Nenhum sistema permite garantir segurança absoluta. As restrições de leitura existentes no projeto não substituem verificações periódicas do ambiente publicado.",
          "Se identificar exposição ou uso indevido, comunique a NovaesWeb pelo canal de privacidade. Incidentes que possam acarretar risco ou dano relevante aos titulares devem ser avaliados e comunicados à ANPD e aos titulares quando exigido pela regulamentação."
        ]
      },
      {
        "h": "9. Atualizações",
        "p": [
          "A data acima identifica esta versão. Alterações relevantes de finalidades, destinatários ou cookies devem ser informadas com clareza; uma mudança nesta política não substitui nova autorização quando ela for exigida."
        ]
      }
    ]
  },
  {
    "id": "reembolso",
    "title": "Política de Cancelamento e Reembolso",
    "short": "Cancelamento e reembolso",
    "updated": "21/10/2026",
    "intro": "Esta política orienta solicitações de cancelamento e restituição, sem criar multas, descontos obrigatórios ou restrições não aprovadas. As condições específicas devem constar da proposta e respeitar a legislação aplicável.",
    "sections": [
      {
        "h": "1. Como solicitar",
        "p": [
          "Entre em contato pelo WhatsApp +55 51 99118-9293, informando seu nome, o projeto ou contratação e o pedido de cancelamento ou reembolso. Evite enviar dados bancários e documentos além do necessário. Guarde os registros da solicitação e da contratação."
        ]
      },
      {
        "h": "2. Direito de arrependimento",
        "p": [
          "Nas relações de consumo em que a contratação ocorrer fora do estabelecimento comercial, inclusive pela internet ou por telefone, o art. 49 do Código de Defesa do Consumidor prevê, quando cabível, 7 dias para desistência, contados da assinatura ou do recebimento do produto ou serviço, conforme a situação.",
          "Quando o direito de arrependimento for aplicável e exercido no prazo, os valores pagos devem ser devolvidos de imediato, monetariamente atualizados, conforme a lei. Não é exigida justificativa nem aplicada multa pelo exercício desse direito.",
          "O caráter personalizado de um site ou o início do trabalho não elimina automaticamente o direito de arrependimento. Sua aplicação deve considerar o caso concreto e as regras legais, sem cláusulas de renúncia a direitos obrigatórios."
        ]
      },
      {
        "h": "3. Cancelamento fora das hipóteses de arrependimento",
        "p": [
          "Fora do direito legal de arrependimento, a solicitação deve ser analisada conforme a proposta, os serviços efetivamente prestados e a legislação. Não há percentual fixo de retenção, multa de cancelamento ou prazo de aviso definidos nesta política.",
          "Eventual apuração de valores deve ser transparente, comprovável e proporcional, sem cobrança abusiva nem retenção automática de todo o pagamento. Condições específicas precisam ser apresentadas antes da contratação e não podem suprimir direitos legais."
        ]
      },
      {
        "h": "4. Falhas ou descumprimento do serviço",
        "p": [
          "Problemas de qualidade, divergência do escopo ou não prestação devem ser comunicados para apuração. Quando o CDC for aplicável, permanecem asseguradas as alternativas e garantias legais, incluindo as previstas no art. 20: reexecução sem custo, restituição ou abatimento proporcional, conforme a hipótese.",
          "Esta política não reduz prazos legais para reclamar, não condiciona direitos a aprovação discricionária e não exclui reparação de danos quando cabível."
        ]
      },
      {
        "h": "5. Mensalidade, saída e materiais",
        "p": [
          "A mensalidade começa na ativação do site. Ao cancelar, a data de encerramento, eventual apuração de cobranças, acesso a materiais, domínio, dados e continuidade da hospedagem devem ser informados conforme o contrato e os direitos aplicáveis.",
          "Não há fidelidade, multa, transferência automática de domínio ou entrega irrestrita de código estabelecidas por este texto. Esses pontos precisam de definição expressa na proposta; dados pessoais devem ser tratados e disponibilizados quando exigido pela legislação."
        ]
      },
      {
        "h": "6. Forma de restituição e atendimento",
        "p": [
          "A forma de restituição deve ser informada ao solicitante, observando o meio de pagamento e os requisitos legais. Prazos operacionais de bancos ou intermediários não podem ser usados para afastar o dever legal de restituição.",
          "Se houver discordância, o consumidor pode recorrer ao Procon, aos demais órgãos competentes e ao Poder Judiciário. Esta política não exige arbitragem nem impede o exercício desses direitos."
        ]
      }
    ]
  }
];
