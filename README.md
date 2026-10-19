# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Colocar no ar na Vercel

O site ja esta preparado para a Vercel. O arquivo `vercel.json` diz como instalar
e construir, e a propria build reconhece que o destino e a Vercel.

1. Em vercel.com, faca login com a conta GitHub `Novaesweb`.
2. Escolha **Add New... -> Project** e importe o repositorio `Novaesweb/novaesweb`.
3. Confirme os comandos (instalacao `bun install`, build `bun run build`) e clique
   em **Deploy**.

Depois disso, cada envio novo para a branch `main` publica o site de novo
sozinho.

> Atencao: o endereco `novaesweb.vercel.app` hoje mostra um site antigo, de outro
> projeto. Ao importar este repositorio a Vercel cria um endereco novo. Se quiser
> usar `novaesweb.vercel.app`, apague o projeto antigo ou troque o dominio no
> painel da Vercel.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
