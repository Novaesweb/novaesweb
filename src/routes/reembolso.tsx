import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/reembolso")({
  head: () => ({ meta: [
    { title: "Cancelamento e Reembolso — NovaesWeb" },
    { name: "description", content: "Orientações para cancelar serviços NovaesWeb, solicitar restituição e exercer direitos previstos no Código de Defesa do Consumidor." },
    { property: "og:title", content: "Cancelamento e Reembolso — NovaesWeb" },
    { property: "og:description", content: "Cancelamento, restituição e direito de arrependimento quando aplicável." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <LegalPage id="reembolso" />,
});