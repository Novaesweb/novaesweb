import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

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
    setErro(null);
    const r = schema.safeParse(form);
    if (!r.success) return setErro(r.error.issues[0]?.message ?? "Confira os campos");
    setStatus("sending");
    const { error } = await supabase.from("leads").insert({
      ...r.data,
      mensagem: r.data.mensagem || null,
    });
    if (error) {
      setStatus("idle");
      return setErro("Não foi possível enviar agora. Tente de novo ou chame no WhatsApp.");
    }
    setStatus("ok");
  }

  if (status === "ok")
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-neon-pink" />
        <h3 className="text-xl font-bold">Cadastro recebido!</h3>
        <p className="text-muted-foreground">Obrigado, {form.nome.split(" ")[0]}. Vamos te chamar no WhatsApp em breve.</p>
      </div>
    );

  return (
    <form onSubmit={enviar} className="grid gap-4 md:grid-cols-2">
      <input className={field} placeholder="Seu nome" maxLength={100} value={form.nome}
        onChange={(e) => setForm({ ...form, nome: e.target.value })} aria-label="Nome" />
      <input className={field} placeholder="WhatsApp com DDD" inputMode="tel" maxLength={20} value={form.whatsapp}
        onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} aria-label="WhatsApp" />
      <select className={`${field} md:col-span-2`} value={form.interesse} aria-label="Plano ou serviço"
        onChange={(e) => setForm({ ...form, interesse: e.target.value })}>
        <option value="">Qual plano ou serviço te interessa?</option>
        {interesses.map((i) => <option key={i} value={i}>{i}</option>)}
      </select>
      <textarea className={`${field} md:col-span-2 min-h-28`} placeholder="Conte um pouco do que você precisa (opcional)"
        maxLength={1000} value={form.mensagem} aria-label="Mensagem"
        onChange={(e) => setForm({ ...form, mensagem: e.target.value })} />
      {erro && <p className="text-sm text-destructive md:col-span-2">{erro}</p>}
      <button type="submit" disabled={status === "sending"}
        className="neon-pulse inline-flex items-center justify-center gap-2 rounded-full bg-neon px-7 py-3 font-semibold shadow-neon disabled:opacity-60 md:col-span-2 md:justify-self-start">
        <Send className="h-5 w-5" /> {status === "sending" ? "Enviando..." : "Quero ser chamado"}
      </button>
    </form>
  );
}
