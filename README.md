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

## Testes

```bash
bunx vitest run
```
