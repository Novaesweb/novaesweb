import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsLink } from "@/data/plans";

export function FloatingWhatsApp() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const aoRolar = () => setVisivel(window.scrollY > 320);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <a
      href={whatsLink("Olá, NovaesWeb! Vim pelo site e quero tirar uma dúvida.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      aria-hidden={!visivel}
      tabIndex={visivel ? 0 : -1}
      className={`group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-neon px-4 py-4 font-semibold shadow-neon transition-all duration-300 hover:gap-4 sm:bottom-8 sm:right-8 ${
        visivel ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-neon-pink/50" style={{ animationDuration: "2.2s" }} />
      <MessageCircle className="relative h-6 w-6" />
      <span className="relative hidden text-sm sm:inline">Fale conosco</span>
    </a>
  );
}
