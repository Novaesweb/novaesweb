# Auditoria de privacidade, acessibilidade e informações comerciais — 21/10/2026

## Prioridades encontradas antes das alterações

### Críticas para correção
- Formulário de contato sem aviso de privacidade junto à coleta: nome, WhatsApp, interesse e mensagem são enviados ao Lovable Cloud. Corrigido com finalidade, link, aviso sobre dados sensíveis e base pré-contratual nos textos, sem checkbox de consentimento genérico.
- Diálogo jurídico próprio não gerenciava foco e retorno pelo teclado. Substituído por páginas próprias; preferências usam o diálogo Radix existente.
- Imagem decorativa da tela inicial sem alt e documento com idioma inglês. Corrigidos; adicionado um único main e salto para conteúdo.

### Advertências
- Três depoimentos inventados pela IA, sem identificação ou comprovação: removidos, não substituídos por avaliações fictícias.
- +30 projetos e 100% de satisfação são afirmações fornecidas anteriormente pela cliente, sem documentação de prova no projeto. Preservadas aguardando comprovação; não se conclui que sejam falsas.
- Promessas de vendas e disponibilidade absoluta em Planos foram substituídas por descrições de recursos, sem alterar valores.
- Direitos/licenças e autorizações de imagens e capturas não estão comprovados pelos arquivos asset.json (estes identificam armazenamento, não licença). Imagens s0–s4 foram geradas por IA em conversas anteriores; manter registros de geração e validar materiais representados. Origem da foto de apresentação e autorizações das demonstrações precisam de confirmação.
- Campos tinham nomes acessíveis, mas não rótulos visíveis nem avisos anunciados. Corrigidos com rótulos, obrigatoriedade, mensagem de erro e sucesso anunciados. Áreas de toque e indicação de foco melhoradas; movimento reduzido respeitado.
- Metadados individuais existiam em Início, Planos e Sobre. Preservados e acrescentados aos três documentos legais. Imagens locais não recebem URLs sociais fictícias.

## Rastreamento e cookies
- Nenhum GA, GTM ou pixel publicitário ativo identificado na implementação. Fontes Google, hospedagem, recursos da plataforma e serviços externos podem gerar requisições técnicas; isso não equivale a comprovação de publicidade ou medição.
- Nenhum identificador Analytics criado ou serviço conectado. Preparação permanece desativada, dependente da aprovação da responsável, configuração real e consentimento do visitante.
- Preferências armazenadas localmente; opcionais desativados antes da escolha. Aceitação e recusa equivalentes; personalização e reabertura pelo rodapé.
- Regras voluntárias no robots.txt para agentes conhecidos de coleta para treinamento, mantendo Googlebot/Bingbot e previews sociais. Não bloqueiam agentes que ignorem as instruções nem garantem proteção contra treinamento. Não foram criadas barreiras de servidor ou alegações de bloqueio total.

## Segurança e limites da verificação
- Código do formulário faz validação no navegador; isso não constitui barreira de segurança, pois pode ser contornado. Tratamento de erro e proteção contra cliques repetidos melhorados, sem prometer proteção contra bots.
- Migração atual permite INSERT público de leads. Não demonstra limitação de volume ou CAPTCHA, nem processo de exclusão automática. Acesso ao banco em produção, GRANT/RLS efetivos, configuração de cadastro e perfis operacionais não foram verificados nesta revisão de apresentação. Nada de permissões foi ampliado.
- Antiabuso, validação no servidor, processo de retenção/exclusão, controle de acesso para responsáveis e monitoramento exigem revisão operacional separada; continuam pendentes, sem afirmar que estejam implementados.

## Informações que dependem da responsável
- Identificação legal (razão social/nome completo, CPF/CNPJ aplicável e endereço de atendimento), canal adicional se desejado e lista real de operadores/hospedagem por ambiente.
- Prazo operacional de retenção dos contatos, rotina de exclusão, salvaguardas de transferência internacional e canal de incidentes.
- Confirmação documental das condições comerciais existentes, incluindo suporte extraordinário, propriedade/licença de arquivos e condições de saída.
- Comprovação dos indicadores, autorização para depoimentos reais e direitos das imagens/demonstrações.
- O documento enviado termina no item 5, na frase “Quero reduzir o acesso de rastreadores de IA que utilizem conteúdo”. O restante não foi recebido e não foi presumido.

Os textos são minutas compatíveis com as informações disponíveis, não certificação de conformidade integral nem substituição de revisão jurídica profissional. Direitos legais prevalecem; não foram inventados percentuais de retenção, multas, fidelidade ou renúncia de arrependimento para serviços personalizados.