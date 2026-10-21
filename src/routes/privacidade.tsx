import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/privacidade")({
  head: () => ({ meta: [
    { title: "Política de privacidade — NovaesWeb" },
    { name: "description", content: "Dados de contato, finalidades, direitos LGPD e preferências de privacidade no site NovaesWeb." },
    { property: "og:title", content: "Política de privacidade — NovaesWeb" },
    { property: "og:description", content: "Conheça o tratamento de dados e os canais para exercer seus direitos." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <LegalPage id="privacidade" />,
});