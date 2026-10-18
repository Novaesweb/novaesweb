# NovaesWeb - Site oficial

Site da NovaesWeb Solucoes Digitais, em portugues do Brasil, com tema escuro neon.

## Rodar no computador

```bash
bun install
bun run dev
```

## Paginas

- `/` - inicio: apresentacao, servicos, secao "Sem complicacao" (4 passos),
  duvidas comuns e respostas claras
- `/planos` - tres planos, comparativo, adicionais, pagamento e suporte
- `/criacao-visual` - modelos, fotos e pacotes de videos e imagens
- `/sobre` - quem somos, missao, visao e valores

No rodape de todas as paginas ficam "Termos de uso e condicoes comerciais" e
"Politica de privacidade", que abrem uma janelinha com o texto. Esses dois
textos ainda esperam revisao da dona do site.

No rodape tambem fica o aviso de que a NovaesWeb trabalha com integracao ao
WhatsApp API.

## Onde fica cada coisa

- Valores dos planos, prazos, adicionais: `src/data/plans.ts`
- Pacotes de videos e imagens: `videoPacks` em `src/data/plans.ts`
- Duvidas da tela inicial: `src/data/faqs.ts` (`faqsShown` diz quantas aparecem
  antes de abrir todas)
- Textos de termos e privacidade: `src/data/legal.ts`
- Cabecalho do menu: `src/components/SiteHeader.tsx`
- Rodape com a janelinha dos textos: `src/components/SiteFooter.tsx`
- Fotos usadas no site: `src/assets/` (copias em `public/fotos/`)
- Icone da aba do navegador: `public/favicon.png`

## Colocar no ar na Vercel

O site ja esta preparado para a Vercel: `vercel.json` na raiz diz como instalar e
construir, e a build reconhece sozinha que o destino e a Vercel.

1. Em vercel.com, faca login com a conta GitHub `Novaesweb`.
2. **Add New... -> Project** e importe o repositorio `Novaesweb/novaesweb`.
3. Confirme os comandos (instalacao `bun install`, build `bun run build`) e clique
   em **Deploy**.

Cada envio novo para a branch `main` publica o site de novo sozinho.

> Atencao: `novaesweb.vercel.app` hoje mostra um site antigo, de outro projeto.
> Ao importar este repositorio a Vercel cria um endereco novo; para usar
> `novaesweb.vercel.app`, apague o projeto antigo ou troque o dominio no painel.

## Testes

```bash
bunx vitest run
```
