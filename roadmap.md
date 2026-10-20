# Roadmap — NovaesWeb

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
- [ ] Revisar os textos de "Termos de uso" e "Política de privacidade" (escritos pela IA, aguardando aprovação da cliente)
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
