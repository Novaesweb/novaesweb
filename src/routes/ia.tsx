import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Bot, Check, ChevronRight, Clock3, MessageCircle, Play, Settings2, ShieldCheck, Sparkles, Store, TrendingUp, Users, Workflow, X } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { whatsLink } from "@/data/plans";
import "./ia.css";

export const Route = createFileRoute("/ia")({
  head: () => ({
    meta: [
      { title: "Novaes IA | Atendimento inteligente pelo WhatsApp — NovaesWeb" },
      { name: "description", content: "Conheça a Novaes IA, projeto de atendimento inteligente pelo WhatsApp da NovaesWeb. Saiba como funciona e solicite uma demonstração." },
      { property: "og:title", content: "Novaes IA — Atendimento inteligente para o seu negócio" },
      { property: "og:description", content: "Conheça o projeto de atendimento inteligente da NovaesWeb e solicite uma demonstração." },
      { property: "og:url", content: "https://novaesweb.com.br/ia" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://novaesweb.com.br/ia" }],
  }),
  component: NovaesIaPage,
});

const demoUrl = whatsLink("Olá! Quero conhecer a Novaes IA e saber sobre uma demonstração.");
const features = [
  { Icon: MessageCircle, title: "Atendimento inteligente", text: "Prepare respostas baseadas nas informações autorizadas da empresa." },
  { Icon: Store, title: "Seu negócio, sua linguagem", text: "Uma experiência adaptada aos serviços e à identidade de cada estabelecimento." },
  { Icon: Users, title: "Conversas organizadas", text: "Centralize o acompanhamento de atendimentos em uma interface." },
  { Icon: TrendingUp, title: "Visão operacional", text: "Evolução planejada para acompanhar o histórico e a operação." },
  { Icon: Settings2, title: "Configuração simples", text: "Controles pensados para o lojista, sem exigir conhecimento técnico sobre modelos." },
];
const steps = [
  { Icon: Workflow, title: "Conecte o WhatsApp", text: "Configuração acompanhada, após a validação técnica da integração." },
  { Icon: Store, title: "Apresente o negócio", text: "Horários, serviços, dúvidas frequentes e orientações aprovadas." },
  { Icon: Bot, title: "Prepare a Novaes IA", text: "Teste as respostas e ajuste as regras antes de habilitar o atendimento." },
  { Icon: TrendingUp, title: "Acompanhe a operação", text: "Evolua o atendimento com histórico e controles por empresa." },
];
// Referência do catálogo técnico do CRM (Lkazin/crm-novaees).
// Não representam preços, recursos homologados ou ofertas disponíveis para contratação.
const plans = [
  { title: "Start", description: "Estrutura inicial para pequenos negócios.", quota: "500 atendimentos/mês", team: "1 operador", whatsapp: "1 conexão WhatsApp", bullets: ["Atendimento com IA (previsto)", "Central de atendimento humano (prevista)", "Simulador de testes (previsto)"] },
  { title: "Business", description: "Estrutura prevista para empresas em crescimento.", quota: "2.000 atendimentos/mês", team: "Até 3 operadores", whatsapp: "1 conexão WhatsApp", bullets: ["Recursos do Start", "Horários e etiquetas comerciais (previstos)", "Resumos e alertas (previstos)", "Rota reserva de IA (em validação)"], featured: true },
  { title: "Premium", description: "Estrutura para operações com maior volume.", quota: "5.000 atendimentos/mês", team: "Até 10 operadores", whatsapp: "Até 3 conexões WhatsApp", bullets: ["Recursos do Business", "Relatórios avançados (previstos)", "Configuração para maior volume", "Avaliação comercial individual"] },
];
const faqs = [
  { question: "A Novaes IA já atende clientes automaticamente?", answer: "Ainda não. O CRM está em desenvolvimento e o envio automático para clientes reais depende de homologação técnica, testes de segurança e liberação." },
  { question: "Preciso trocar o número do meu WhatsApp?", answer: "A compatibilidade e a forma de conectar o número serão avaliadas durante a configuração. Não recomendamos desconectar ou migrar números antes dessa avaliação." },
  { question: "Uma pessoa pode assumir a conversa?", answer: "A transferência entre IA e atendente humano faz parte dos recursos planejados. O fluxo completo ainda precisa ser validado antes de ser oferecido como serviço ativo." },
  { question: "A IA vai conhecer meus produtos, serviços e horários?", answer: "A proposta é configurar uma base de informações aprovadas pelo responsável do negócio. A integração dessa base às respostas automáticas ainda está em desenvolvimento." },
  { question: "Quanto custa e quantos atendimentos estão incluídos?", answer: "Existem referências técnicas para os planos Start, Business e Premium, mas preços, franquias finais e condições comerciais ainda não foram homologados. Consulte a NovaesWeb." },
  { question: "O sistema funciona 24 horas sem parar?", answer: "A automação contínua é um objetivo do produto, mas não há garantia de operação ininterrupta nesta fase. Disponibilidade, limites e suporte dependerão da infraestrutura e do plano homologado." },
];

function DemoPhone() {
  return <div className="nia-phone" role="img" aria-label="Ilustração de um smartphone moderno com conversa fictícia de atendimento via WhatsApp; não é um chat funcional">
    <div className="nia-phone-metal" aria-hidden="true"/>
    <div className="nia-phone-screen" aria-hidden="true">
      <div className="nia-phone-island"/>
      <div className="nia-phone-status"><strong>9:41</strong><div className="nia-status-symbols"><span className="nia-status-bars"><i/><i/><i/><i/></span><span className="nia-status-wifi">◕</span><span className="nia-status-battery"><i/></span></div></div>
      <div className="nia-chat-head">
        <span className="nia-chat-back">‹</span>
        <span className="nia-avatar">N</span>
        <div className="nia-chat-contact"><strong>Novaes IA <span className="nia-chat-verified">✓</span></strong><small>Atendimento comercial</small></div>
        <span className="nia-chat-video">▣</span><span className="nia-chat-call">☎</span>
      </div>
      <div className="nia-chat-body">
        <span className="nia-chat-date">HOJE</span>
        <span className="nia-chat-safe">As mensagens abaixo são uma simulação ilustrativa.</span>
        <p className="nia-bubble nia-sent">Olá! Vocês estão abertos hoje?<small>9:40 <span className="nia-ticks">✓✓</span></small></p>
        <p className="nia-bubble nia-received">Olá! 👋 Que bom ter você aqui. Posso ajudar com horários, produtos e informações do negócio.<small>9:40</small></p>
        <p className="nia-bubble nia-sent">Quero ver o cardápio!<small>9:41 <span className="nia-ticks">✓✓</span></small></p>
        <div className="nia-chat-product">
          <div className="nia-chat-product-photo">🍔</div>
          <div className="nia-chat-product-details"><strong>Cardápio do negócio</strong><span>Informações configuradas pelo responsável.</span><small>9:41</small></div>
        </div>
      </div>
      <div className="nia-chat-compose"><span className="nia-compose-plus">＋</span><div className="nia-compose-box"><span>Mensagem</span><span className="nia-compose-camera">◉</span></div><span className="nia-compose-mic">●</span></div>
      <div className="nia-phone-home"/>
    </div>
    <span className="nia-phone-power" aria-hidden="true"/><span className="nia-phone-volume" aria-hidden="true"/>
  </div>;
}
function RobotMascot() {
  const [mood, setMood] = useState<"welcome" | "hello" | "guide">("welcome");
  const [tipOpen, setTipOpen] = useState(false);

  const interact = () => {
    setMood(current => current === "welcome" ? "hello" : current === "hello" ? "guide" : "hello");
    setTipOpen(true);
  };
  const message = mood === "guide"
    ? "Quer conhecer o projeto? Toque em “Solicitar demonstração”. ✨"
    : "Oi! Eu sou o mascote da Novaes IA. Que bom te ver aqui! 💜";

  return <div className="nia-mascot-wrap">
    {tipOpen && (
      <div className="nia-bot-speech" role="status" aria-live="polite">
        <button type="button" className="nia-bot-speech-close" aria-label="Fechar mensagem do mascote" onClick={() => setTipOpen(false)}><X size={13}/></button>
        {message}
        <small>Sou um mascote interativo, não um atendimento por IA.</small>
      </div>
    )}
    <button type="button" className={`nia-bot-art nia-bot-clickable nia-bot-${mood}`}
      aria-label="Interagir com o mascote Novaes IA"
      title="Toque para falar com o mascote"
      onClick={interact}>
      <span className="nia-bot-spark nia-bot-spark-one" aria-hidden="true">✦</span>
      <span className="nia-bot-spark nia-bot-spark-two" aria-hidden="true">✧</span>
      <span className="nia-bot-figure" aria-hidden="true">
        <span className="nia-bot-antenna"><i/></span>
        <span className="nia-bot-ear nia-bot-ear-left"/>
        <span className="nia-bot-ear nia-bot-ear-right"/>
        <span className="nia-bot-head">
          <span className="nia-bot-face">
            <span className="nia-bot-brow nia-bot-brow-left"/>
            <span className="nia-bot-brow nia-bot-brow-right"/>
            <span className="nia-eye nia-eye-left"/>
            <span className="nia-eye nia-eye-right"/>
            <span className="nia-bot-cheek nia-bot-cheek-left"/>
            <span className="nia-bot-cheek nia-bot-cheek-right"/>
            <span className="nia-bot-smile"/>
          </span>
        </span>
        <span className="nia-bot-neck"/>
        <span className="nia-bot-body"><span className="nia-bot-emblem">N<span className="nia-bot-led"/></span></span>
        <span className="nia-bot-hand nia-bot-left">✦</span>
        <span className="nia-bot-hand nia-bot-right">♥</span>
        <span className="nia-bot-foot nia-bot-foot-left"/>
        <span className="nia-bot-foot nia-bot-foot-right"/>
      </span>
      <span className="nia-bot-hint">TOQUE EM MIM <span aria-hidden="true">✦</span></span>
    </button>
  </div>;
}
function NovaesIaPage() {
  const [showDemo, setShowDemo] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!showDemo) return;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setShowDemo(false);
      }
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]'));
        if (!focusable.length) return;
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.removeEventListener("keydown", onKeyDown); triggerRef.current?.focus(); };
  }, [showDemo]);
  return <div className="nia-page">
    <SiteHeader active="Novaes IA" />
    <div className="nia-content">
      <section className="nia-hero" aria-labelledby="nia-title">
        <div className="nia-hero-glow" aria-hidden="true"/>
        <div className="nia-hero-copy">
          <span className="nia-kicker"><Sparkles size={16}/> NOVAES IA</span>
          <h1 id="nia-title">Atendimento inteligente <span>para o seu negócio</span></h1>
          <p>Conheça a proposta da NovaesWeb para organizar conversas e preparar o atendimento com inteligência artificial pelo WhatsApp.</p>
          <div className="nia-hero-actions"><a className="nia-button nia-button-primary" href={demoUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={20}/> Solicitar demonstração</a><button ref={triggerRef} className="nia-button nia-button-outline" type="button" onClick={() => setShowDemo(true)} aria-haspopup="dialog"><Play size={18}/> Ver como funciona</button></div>
          <div className="nia-hero-points"><span><Clock3 size={17}/> Respostas planejadas</span><span><TrendingUp size={17}/> Mais organização</span><span><ShieldCheck size={17}/> Controles por empresa</span></div>
          <p className="nia-disclaimer">Projeto em desenvolvimento. O atendimento automático para clientes reais ainda depende de homologação.</p>
        </div>
        <div className="nia-hero-visual"><span className="nia-visual-n" aria-hidden="true">N</span><div className="nia-wa-mark" aria-hidden="true"><MessageCircle size={38}/></div><DemoPhone/><RobotMascot/></div>
      </section>
      <section className="nia-benefits" aria-label="Benefícios planejados">{features.map(({Icon,title,text})=><article key={title}><Icon size={29}/><div><h2>{title}</h2><p>{text}</p></div></article>)}</section>
      <section className="nia-section nia-steps" id="como-funciona"><div className="nia-section-head"><h2>Como <span>funciona?</span></h2><p>Um processo acompanhado, do primeiro contato à validação das respostas.</p></div><div className="nia-steps-list">{steps.map(({Icon,title,text},i)=><div className="nia-step-wrap" key={title}><article className="nia-step"><Icon size={32}/><div><h3>{i+1}. {title}</h3><p>{text}</p></div></article>{i<steps.length-1&&<ChevronRight className="nia-step-arrow" size={20}/>}</div>)}</div></section>
      <section className="nia-section nia-plans" id="planos"><div className="nia-section-head"><h2>Planos da <span>Novaes IA</span></h2><p>Start, Business e Premium são referências do catálogo técnico do CRM. Franquias, valores e funcionalidades ainda precisam de validação comercial e homologação.</p></div><div className="nia-plan-grid">{plans.map((plan)=><article className={`nia-plan ${plan.featured?"nia-plan-featured":""}`} key={plan.title}>{plan.featured&&<span className="nia-popular">Opção em destaque</span>}<div className="nia-plan-symbol">{plan.featured?"♛":"✧"}</div><h3>{plan.title}</h3><p className="nia-plan-intro">{plan.description}</p><div className="nia-plan-capacity"><span>{plan.quota}</span><span>{plan.team}</span><span>{plan.whatsapp}</span></div><strong className="nia-price">Sob consulta</strong><p className="nia-plan-note">Limites de referência técnica · sujeitos a validação. Não disponível para contratação.</p><ul>{plan.bullets.map(t=><li key={t}><Check size={15}/>{t}</li>)}</ul><a href={demoUrl} target="_blank" rel="noopener noreferrer" className={`nia-button ${plan.featured?"nia-button-primary":"nia-button-outline"}`}>Solicitar informações</a></article>)}</div></section>
      <section className="nia-section nia-faq" id="perguntas-frequentes" aria-labelledby="nia-faq-title">
        <div className="nia-section-head"><h2 id="nia-faq-title">Perguntas <span>frequentes</span></h2><p>Respostas claras sobre o estágio atual da Novaes IA.</p></div>
        <div className="nia-faq-list">{faqs.map(({question, answer}) => <details key={question} className="nia-faq-item"><summary>{question}<span className="nia-faq-plus" aria-hidden="true">＋</span></summary><p>{answer}</p></details>)}</div>
      </section>
      <section className="nia-final"><div><h2>Pronto para conhecer o atendimento <span>do seu negócio?</span></h2><p>Converse com a NovaesWeb, tire suas dúvidas e acompanhe a evolução do projeto.</p></div><a className="nia-button nia-button-primary" href={demoUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={20}/> Solicitar demonstração agora</a></section>
      <div className="nia-back"><Link to="/servicos">Conheça também os outros serviços da NovaesWeb <ArrowRight size={17}/></Link></div>
    </div><SiteFooter/>
    {showDemo && <div className="nia-modal-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) setShowDemo(false); }}>
      <section ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="nia-modal-title" aria-describedby="nia-modal-description" className="nia-modal">
        <button ref={closeRef} type="button" className="nia-modal-close" aria-label="Fechar demonstração" onClick={() => setShowDemo(false)}><X size={22}/></button>
        <span className="nia-kicker">DEMONSTRAÇÃO EXPLICATIVA</span>
        <h2 id="nia-modal-title">Como a Novaes IA foi pensada para funcionar</h2>
        <p id="nia-modal-description">Este é o fluxo proposto, não uma demonstração de atendimento conectado ou disponível para clientes reais.</p>
        <ol className="nia-demo-flow">
          {steps.map(({Icon,title,text}, i) => <li key={title}><span className="nia-demo-step-icon"><Icon size={19}/></span><div><strong>{i + 1}. {title}</strong><p>{text}</p></div></li>)}
        </ol>
        <p className="nia-demo-pending"><ShieldCheck size={18}/> Integração, envio e transferência humana ainda dependem de homologação.</p>
        <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="nia-button nia-button-primary">Solicitar informações <ArrowRight size={17}/></a>
      </section>
    </div>}
  </div>;
}
