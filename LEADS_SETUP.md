# Leads do site oficial da NovaesWeb

O formulário envia contatos para a Edge Function `novaesweb-lead-intake` do projeto Supabase central usado pelo Painel Master. Ele não grava mais diretamente na tabela `leads` do projeto Supabase separado deste site.

## Variáveis públicas do site

Configure estas variáveis no projeto da Vercel em Production, Preview e Development:

- `VITE_NOVAESWEB_MASTER_SUPABASE_URL`: URL do projeto Supabase central do Painel Master.
- `VITE_NOVAESWEB_MASTER_SUPABASE_PUBLISHABLE_KEY`: chave pública/publishable do mesmo projeto.

Essas variáveis são públicas e ficam no pacote do navegador. Nunca use `service_role`, `sb_secret` ou credenciais administrativas no site.

## Preparação necessária no Supabase central

Antes de publicar o formulário conectado:

1. Aplicar a migration `novaesweb_official_leads` do Painel Master.
2. Implantar a Edge Function `novaesweb-lead-intake` com a verificação JWT desativada apenas para esse endpoint público, que valida origem, conteúdo e limite de envios.
3. Configurar os secrets `LEADS_RATE_LIMIT_SALT` e `LEADS_ALLOWED_ORIGINS` na função. Use a URL HTTPS pública do site em `LEADS_ALLOWED_ORIGINS`.
4. Configurar as duas variáveis públicas acima na Vercel e fazer um novo deployment.
5. Enviar um contato de teste e confirmar que ele aparece em **Leads do site oficial** no Painel Master.

O backend associa cada lead à origem estável `novaesweb-oficial`; o UUID da origem é gerado pelo banco e não é enviado pelo navegador. O formulário não pode criar lojas clientes ou escolher um `store_id`.

Se a antiga tabela `leads` do projeto separado já tiver registros, eles permanecem naquele banco; importar históricos é uma etapa separada que exige revisão dos dados.
