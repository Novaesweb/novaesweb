import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { PrivacyPreferences } from "@/components/PrivacyPreferences";
import { Button } from "@/components/ui/button";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Não foi possível carregar agora. Tente novamente ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </Button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}

const rootJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://novaesweb.com.br/#organization",
      name: "NovaesWeb — Soluções Digitais",
      url: "https://novaesweb.com.br",
      logo: "https://novaesweb.com.br/favicon.png",
      description:
        "Criação de sites profissionais, cardápios digitais para delivery sem comissão e sistemas sob medida para empresas.",
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        availableLanguage: "Portuguese",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://novaesweb.com.br/#website",
      url: "https://novaesweb.com.br",
      name: "NovaesWeb",
      publisher: {
        "@id": "https://novaesweb.com.br/#organization",
      },
      inLanguage: "pt-BR",
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NovaesWeb — Sites Profissionais e Delivery Sem Comissão" },
      {
        name: "description",
        content:
          "Criação de sites profissionais, cardápios digitais e sistemas para delivery sem comissão. Fortaleça sua marca e pare de pagar taxas abusivas.",
      },
      {
        name: "keywords",
        content:
          "site delivery sem comissao, cardapio digital whatsapp, criacao de sites profissionais, novaesweb, alternativas ifood, site para hamburgueria, site para pizzaria",
      },
      { name: "author", content: "NovaesWeb — Soluções Digitais" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:site_name", content: "NovaesWeb" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800&family=Figtree:wght@400;500;600&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(rootJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-background focus:p-4 focus:text-foreground"
      >
        Ir para o conteúdo
      </a>
      <main id="conteudo-principal" tabIndex={-1}>
        <Outlet />
      </main>
      <FloatingWhatsApp />
      <PrivacyPreferences />
    </QueryClientProvider>
  );
}
