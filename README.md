# NovaesWeb - Site oficial

Site da NovaesWeb Solucoes Digitais: pagina inicial, planos, criacao visual e sobre.

## Rodar no computador

```bash
bun install
bun run dev
```

## Paginas

- `/` - inicio
- `/planos` - planos, comparativo, adicionais e perguntas frequentes
- `/criacao-visual` - modelos, fotos e pacotes de videos e imagens
- `/sobre` - quem somos, missao, visao e valores

No rodape de todas as paginas ficam "Termos de uso e condicoes comerciais" e
"Politica de privacidade", que abrem uma janelinha com o texto.

## Onde fica cada coisa

- Valores dos planos, prazos, adicionais e perguntas frequentes: `src/data/plans.ts`
- Pacotes de videos e imagens: `videoPacks` em `src/data/plans.ts`
- Textos de termos e privacidade: `src/data/legal.ts`
- Cabecalho do menu: `src/components/SiteHeader.tsx`
- Rodape com a janelinha dos textos: `src/components/SiteFooter.tsx`
- Fotos usadas no site: `public/fotos/`

## Testes

```bash
bunx vitest run
```
