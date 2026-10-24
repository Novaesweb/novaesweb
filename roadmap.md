# Roadmap — NovaesWeb

## Página Quem Somos — 24/10
- [x] Criar a página /quem-somos (apresentação, o que fazemos, missão, segmentos, soluções, diferenciais, resumo dos 4 planos e chamada de orçamento) e colocar "Quem Somos" no menu do topo e do celular.
- [x] Conferir no navegador no computador e no celular: página renderiza, link do menu funciona, sem corte lateral; 99 testes passaram.
- [x] Versão de 24/10 enviada ao GitHub (commit 602974a8, 135 arquivos conferidos byte a byte; nada de chaves ou arquivos internos enviado).

## Atualização oficial dos planos — 22/10
- [x] Incorporar ajustes finais: lançamento Start de R$ 890 por R$ 630 (economia R$ 260) informado pela empresa e franquia de 4 solicitações mensais no Business/Premium.
- [x] Registrar requisitos comerciais oficiais e preparar resumo da alteração restrita à página de Planos.
- [x] Aplicar ajustes aprovados somente em Planos: campanha Start, pagamento antes da publicação, regras das 4 solicitações, comparativo e Personalizado; catálogo e demais páginas preservados. 98 testes passaram; controles e WhatsApp conferidos em 390, 650 e 1280px, sem rolagem lateral ou erros. Sem envio ao GitHub ou publicação.
- [ ] Validar recursos comerciais dos painéis e módulos antes de anunciá-los como disponíveis — depende da confirmação da cliente sobre os sistemas entregues fora deste site.

## Valores e apresentação dos planos — 22/10
- [x] Dar destaque comercial aos valores reais, sem inventar preço anterior, desconto ou prazo promocional.
- [x] Destacar R$ 0/mês no Start com criação única menor abaixo; Business R$ 578 + R$ 190/mês; Premium R$ 980 + R$ 270/mês.
- [x] Retirar promessas de oferta completa do Premium e apresentar todas as possibilidades no Personalizado, sob orçamento; 77 testes passaram, preços, entradas, suporte e mensagens conferidos na página, sem erros ou rolagem lateral em 390 e 650px.

## Novaes Start — 22/10
- [x] Atualizar criação para R$ 630, sem mensalidade obrigatória ou serviços recorrentes inclusos; suporte opcional R$ 80/mês.
- [x] Ajustar cartão, comparativo, WhatsApp, dúvidas e termos; 74 testes passaram, escolha de suporte e valores de entrada/entrega conferidos na página, sem rolagem lateral em 650px.

## Adequação jurídica — 21/10
- [x] Auditar dados, rastreadores, acessibilidade, depoimentos e origem das imagens; prioridades apresentadas e registradas em docs/auditoria-privacidade.md.
- [x] Integrar Privacidade, Termos e Cancelamento/Reembolso ao site, sem criar regras comerciais.
- [x] Implementar escolhas de cookies e preparação do Analytics desativada até aprovação; aceitar/recusar/personalizar e reabrir conferidos, nenhum rastreador opcional carregado.
- [x] Reduzir acesso de rastreadores de treinamento de IA mantendo buscas convencionais — regras voluntárias, sem garantia de bloqueio.
- [x] Corrigir problemas de acessibilidade prioritários e verificar os novos caminhos; 79 testes passaram, páginas e preferências conferidas em computador/celular, build OK.
- [x] Versão de 21/10 enviada ao GitHub (commit 31051c96, 131 arquivos conferidos byte a byte; nada de chaves ou arquivos internos enviado).
- [ ] Confirmar identificação legal da empresa, retenção operacional e comprovação dos indicadores/imagens — depende das informações da cliente; documento enviado termina incompleto no item 5.
- [ ] Revisar antiabuso, acesso operacional aos contatos e exclusão automática — depende da definição de responsáveis e retenção; esta revisão não alterou permissões nem certificou o ambiente publicado.

## Catálogo de adicionais — 20/10
- [x] Renomear os 16 adicionais sem alterar preços; adicionar 9 propostas sinalizadas.
- [x] Organizar categorias, filtros e detalhes acessíveis na página de Planos.
- [x] Conferir solicitações por WhatsApp, testes e visualização no celular e computador.
- [x] Versão de 20/10 enviada ao GitHub (commit 7dc48fd, 120 arquivos conferidos um a um).
- [x] Correção no envio ao GitHub: os arquivos estavam chegando codificados como texto (causa do "vercel.json inválido"). Reenviados com conteúdo real, commit 244565b, 120 arquivos conferidos byte a byte.

## Vitrine de adicionais — 20/10
- [x] Retirar o catálogo completo de adicionais (com preços e botões de solicitação) da página pública de Planos.
- [x] Nova seção "Seu site começa completo" com só 4 exemplos (Novaes TV, Fideliza, Mesa, Gift), sem preços, e chamada "E isso é só o começo" com botão "Conhecer possibilidades" no WhatsApp.
- [x] Dados completos dos adicionais preservados em src/data/plans.ts para uso futuro no painel Master e no painel do cliente (nada foi apagado).
- [x] Testes atualizados (58 passando) e página conferida no computador e no celular, sem rolagem lateral.
- [x] Versão de 20/10 enviada ao GitHub (commit ff2d9d6, 121 arquivos conferidos byte a byte).

## Feito nesta rodada
- [x] Logo nova (emblema neon) no topo de todas as páginas + ícone do site
- [x] Rodapé: arte + aviso de que agora trabalhamos com integração ao WhatsApp
- [x] Tela inicial: foto da moça mostrando mais do corpo no computador
- [x] Dúvidas dos planos movidas da tela de Planos para a tela inicial
- [x] Seção rebatizada "Dúvidas sobre tudo", com perguntas de sites, identidade visual, vídeos e WhatsApp API

## Pendente
- [x] Investigar Vercel: as fotos ficavam só nos servidores da Lovable; agora vão dentro do repositório (deploy na Vercel precisa ser refeito pra pegar a versão nova)
- [x] Tela inicial: modelos Olympus Burger e Pet em Casa adicionados, cartões em tamanho médio
- [x] Tela inicial: seção "Sem complicação" com os 4 passos e os 3 destaques
- [x] Título da seção de dúvidas: "Dúvidas comuns e respostas claras"
- [x] Tela inicial mostra só 9 dúvidas, com botão para abrir todas
- [x] Página Criação Visual retirada do site a pedido da cliente (menu, cadastro, dúvidas e termos ajustados)
- [x] Barra de destaques da tela inicial reduzida a 3 itens (tirado "Entrega ágil / A partir de 2 dias úteis")
- [x] Dúvidas comuns: perguntas mais longas com espaço extra para o "+" não apertar as letras
- [x] Versão de 19/10 enviada ao GitHub (commit 1beb769, 119 arquivos; página Criação Visual apagada do repositório)
- [x] Revisar os textos de "Termos de uso" e "Política de privacidade"; novas minutas de 21/10 publicadas no preview, confirmação operacional/jurídica pendente conforme lista acima.
- [x] Enviar novidades para o GitHub
- [x] Tela inicial: foto ampla da Novaes aparecendo inteira no computador e abaixo do texto no celular
- [x] Botão flutuante "Fale conosco" no canto de todas as páginas + seção de depoimentos na tela inicial
- [x] Versão de 19/10 enviada ao GitHub (commit 60794b6, 125 arquivos conferidos um a um)
- [x] Trocar o número do WhatsApp para 51 99118-9293
- [x] Site preparado para a Vercel: vercel.json na raiz e a build reconhece a Vercel sozinha; as 4 páginas e todas as fotos conferidas na versão construída
- [x] Fotos convertidas para WebP: Criação Visual de 3,9 MB para 541 KB, tela inicial de 656 KB para 321 KB, Planos e Sobre de 782 KB para 174 KB — as 4 páginas conferidas, nenhuma foto quebrada
- [x] Cadastro de contato "Deixe seu contato e a gente te chama" na tela inicial, guardando na lista de leads
- [x] Versão de 19/10 enviada ao GitHub (commit 33c850d, 120 arquivos conferidos um a um; readme reescrito explicando o projeto)
- [x] Imagens dos 5 serviços refeitas em alta, todas com texto em português, e a de Identidade Visual mostrando a marca NovaesWeb
- [x] Versão de 19/10 enviada ao GitHub (commit 564b4a6, 119 arquivos conferidos um a um)
- [ ] Importar o repositório Novaesweb/novaesweb na Vercel (precisa ser feito na conta da cliente) e conferir o endereço novo
- [ ] Passar as duas chaves do backend para a Vercel (Settings → Environment Variables) para o formulário de contato funcionar lá
- [x] Página "Quem Somos" (/quem-somos) criada conforme o documento da cliente: apresentação, o que fazemos, missão, segmentos atendidos, soluções que evoluem, diferenciais, resumo dos planos com botão para /planos e chamada final — menu do topo e do celular atualizados, testes e visual conferidos; sem push/deploy sem autorização
