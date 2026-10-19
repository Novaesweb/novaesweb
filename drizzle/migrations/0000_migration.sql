CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL CHECK (char_length(nome) BETWEEN 2 AND 100),
  whatsapp text NOT NULL CHECK (char_length(whatsapp) BETWEEN 10 AND 20),
  interesse text NOT NULL CHECK (char_length(interesse) BETWEEN 2 AND 60),
  mensagem text CHECK (mensagem IS NULL OR char_length(mensagem) <= 1000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.leads TO anon, authenticated;
GRANT ALL ON public.leads TO service_role;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitantes podem enviar cadastro" ON public.leads FOR INSERT TO anon, authenticated WITH CHECK (true);