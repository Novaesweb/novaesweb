import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/termos")({
  head: () => ({ meta: [
    { title: "Termos de Serviço — NovaesWeb" },
    { name: "description", content: "Condições de desenvolvimento de sites NovaesWeb: escopo, pagamento, responsabilidades, direitos autorais e suporte." },
    { property: "og:title", content: "Termos de Serviço — NovaesWeb" },
    { property: "og:description", content: "Conheça as condições gerais dos serviços de desenvolvimento NovaesWeb." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <LegalPage id="termos" />,
});