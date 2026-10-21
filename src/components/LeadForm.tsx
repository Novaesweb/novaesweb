import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const interesses = [
  "Novaes Start",
  "Novaes Business",
  "Novaes Premium",
"Integração WhatsApp API",
  "Ainda não sei",
];

const schema = z.object({
  nome: z.string().trim().min(2, "Digite seu nome").max(100),
  whatsapp: z
    .string()
    .trim()
    .transform((v) => v.replace(/\D/g, ""))
    .pipe(z.string().min(10, "WhatsApp com DDD").max(13, "Número inválido")),
  interesse: z.string().min(2, "Escolha uma opção"),
  mensagem: z.string().trim().max(1000, "Máximo de 1000 caracteres").optional(),
});

const field =
  "w-full rounded-xl border border-neon-violet/30 bg-background/60 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-neon-pink focus:outline-none";

export function LeadForm() {
  const [form, setForm] = useState({ nome: "", whatsapp: "", interesse: "", mensagem: "" });
  const [erro, setErro] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "ok">("idle");

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setErro(null);
    const r = schema.safeParse(form);
    if (!r.success) return setErro(r.error.issues[0]?.message ?? "Confira os campos");
    setStatus("sending");
    try {
      const { error } = await supabase.from("leads").insert({
        ...r.data,
        mensagem: r.data.mensagem || null,
      });
      if (error) throw error;
      setStatus("ok");
    } catch {
      setStatus("idle");
      return setErro("Não foi possível enviar agora. Tente de novo ou chame no WhatsApp.");
    }
  }

  if (status === "ok")
    return (
      <div role="status" className="flex flex-col items-center gap-3 py-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-neon-pink" />
        <h3 className="text-xl font-bold">Cadastro recebido!</h3>
        <p className="text-muted-foreground">Obrigado, {form.nome.split(" ")[0]}. Vamos te chamar no WhatsApp em breve.</p>
      </div>
    );

  return (
    <form onSubmit={enviar} className="grid gap-4 md:grid-cols-2">
      <label className="grid gap-2 text-sm font-medium">Seu nome *
      <input className={field} placeholder="Seu nome" autoComplete="name" required aria-describedby="lead-privacy lead-error" maxLength={100} value={form.nome}
        onChange={(e) => setForm({ ...form, nome: e.target.value })} aria-label="Nome" />
      </label>
      <label className="grid gap-2 text-sm font-medium">WhatsApp com DDD *
      <input className={field} placeholder="WhatsApp com DDD" type="tel" autoComplete="tel" required aria-describedby="lead-privacy lead-error" inputMode="tel" maxLength={20} value={form.whatsapp}
        onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} aria-label="WhatsApp" />
      </label>
      <label className="grid gap-2 text-sm font-medium md:col-span-2">Plano ou serviço *
      <select className={field} value={form.interesse} required aria-describedby="lead-privacy lead-error" aria-label="Plano ou serviço"
        onChange={(e) => setForm({ ...form, interesse: e.target.value })}>
        <option value="">Qual plano ou serviço te interessa?</option>
        {interesses.map((i) => <option key={i} value={i}>{i}</option>)}
      </select>
      </label>
      <label className="grid gap-2 text-sm font-medium md:col-span-2">Mensagem (opcional)
      <textarea className={`${field} min-h-28`} placeholder="Conte um pouco do que você precisa (opcional)" aria-describedby="lead-privacy lead-error"
        maxLength={1000} value={form.mensagem} aria-label="Mensagem"
        onChange={(e) => setForm({ ...form, mensagem: e.target.value })} />
      </label>
      <p id="lead-privacy" className="text-sm leading-relaxed text-muted-foreground md:col-span-2">Usaremos os dados para responder ao seu pedido e preparar uma proposta pelo WhatsApp. A mensagem é opcional: não envie documentos, senhas ou dados sensíveis. Este pedido não autoriza publicidade. Saiba sobre armazenamento e seus direitos na <Link to="/privacidade" className="underline underline-offset-4">Política de privacidade</Link>.</p>
      <p id="lead-error" role="alert" className="text-sm text-destructive md:col-span-2">{erro}</p>
      <Button type="submit" disabled={status === "sending"}
        className="neon-pulse min-h-11 h-auto whitespace-normal inline-flex items-center justify-center gap-2 rounded-full bg-neon px-7 py-3 font-semibold shadow-neon disabled:opacity-60 md:col-span-2 md:justify-self-start">
        <Send className="h-5 w-5" /> {status === "sending" ? "Enviando..." : "Quero ser chamado"}
      </Button>
    </form>
  );
}
