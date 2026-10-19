# NovaesWeb — Site oficial

Site institucional da **NovaesWeb — Soluções Digitais**: planos de site, criação
visual (vídeos e imagens) e integração com a API do WhatsApp.

Tema escuro neon (violeta e rosa), fontes Outfit e Figtree, feito para levar o
visitante direto para uma conversa no WhatsApp.

## Páginas

| Endereço | O que tem |
| --- | --- |
| `/` | Tela inicial: apresentação, os 5 passos, sites de demonstração, "sem complicação", depoimentos, cadastro de contato e dúvidas frequentes |
| `/planos` | Novaes Start, Business e Premium com abas, tabela comparativa, adicionais e formas de pagamento |
| `/criacao-visual` | Vídeos e imagens: modelos prontos, pacotes e como funciona |
| `/sobre` | Missão, visão, o que fazemos e por que escolher a NovaesWeb |
| Rodapé | Termos de uso e condições comerciais + Política de privacidade (abrem em janela) |

## Onde ficam os textos e valores

Quase tudo que aparece no site está em três arquivos, fáceis de editar:

- `src/data/plans.ts` — número do WhatsApp, os 3 planos, a tabela comparativa,
  os adicionais e as dúvidas de planos.
- `src/data/faqs.ts` — as dúvidas gerais somadas às de planos.
- `src/data/legal.ts` — os textos de termos de uso e política de privacidade.
- `src/data/plans.ts` → `videoPacks` — os pacotes de vídeos e imagens.

O número de contato oficial fica em `WHATS_NUMBER` (`src/data/plans.ts`) e é
usado por todos os botões de WhatsApp do site.

## Rodar no computador

```sh
git clone https://github.com/Novaesweb/novaesweb.git
cd novaesweb
bun install
bun run dev
```

Abra o endereço que aparecer no terminal (normalmente `http://localhost:8080`).

Testes: `bun run test`

## Colocar no ar na Vercel

O site já está preparado para a Vercel. O arquivo `vercel.json` diz como
instalar e construir, e a própria build reconhece que o destino é a Vercel.

1. Em vercel.com, faça login com a conta GitHub `Novaesweb`.
2. Escolha **Add New... → Project** e importe o repositório `Novaesweb/novaesweb`.
3. Confirme os comandos (instalação `bun install`, build `bun run build`) e
   clique em **Deploy**.

Depois disso, cada envio novo para a branch `main` publica o site de novo sozinho.

> Atenção: o endereço `novaesweb.vercel.app` hoje mostra um site antigo, de outro
> projeto. Ao importar este repositório, a Vercel cria um endereço novo. Se quiser
> usar `novaesweb.vercel.app`, apague o projeto antigo ou troque o domínio no
> painel da Vercel.

### Formulário de contato na Vercel

O bloco "Deixe seu contato e a gente te chama" grava o cadastro em uma lista no
Lovable Cloud. Essa ligação **não** vai junto no GitHub, então na Vercel é preciso
informar dois valores em **Settings → Environment Variables**:

| Nome | Onde encontrar |
| --- | --- |
| `VITE_SUPABASE_URL` | O endereço do backend (Lovable Cloud → Advanced settings) |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | A chave pública do backend (Lovable Cloud → API Keys) |

Sem esses dois valores o formulário mostra "Não foi possível enviar agora" e o
restante do site funciona normalmente.

## Feito com

- TanStack Start (React 19 + TypeScript)
- Vite e Tailwind CSS
- Lovable Cloud (banco de dados dos cadastros de contato)
