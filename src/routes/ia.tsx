import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Bot, Check, ChevronRight, Clock3, Headphones, MessageCircle, Play, Send, Settings2, ShieldCheck, Sparkles, Store, TrendingUp, Users, Workflow, X } from "lucide-react";
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
const plans = [
  { title: "Essencial", description: "Para quem quer começar a organizar o atendimento.", bullets: ["Atendimentos em um painel", "Informações do negócio", "Configuração acompanhada"] },
  { title: "Profissional", description: "Para empresas que querem estruturar melhor o atendimento.", bullets: ["Recursos do Essencial", "Fluxos de atendimento planejados", "Base de conhecimento", "Acompanhamento operacional"], featured: true },
  { title: "Empresarial", description: "Para operações que precisam de uma proposta personalizada.", bullets: ["Recursos sob avaliação", "Necessidades de equipe e volume", "Integrações sob análise", "Proposta personalizada"] },
];

function DemoPhone() {
  const [reply, setReply] = useState(false);
  return <div className="nia-phone" aria-label="Simulação visual de conversa com a Novaes IA">
    <div className="nia-phone-top"><span>14:27</span><span className="nia-phone-signal">●●● ▰</span></div>
    <div className="nia-chat-head"><span className="nia-avatar">N</span><div><strong>Seu Negócio</strong><small>demonstração de atendimento</small></div><span className="nia-menu-dot">⋮</span></div>
    <div className="nia-chat-body">
      <span className="nia-demo-tag">EXEMPLO ILUSTRATIVO</span>
      <p className="nia-bubble nia-sent">Olá! Vocês estão abertos hoje?<small>14:26 ✓✓</small></p>
      <p className="nia-bubble nia-received">Olá! 👋 Posso te ajudar com nossos horários e serviços.<small>14:26</small></p>
      <p className="nia-bubble nia-sent">Quero conhecer o cardápio!<small>14:27 ✓✓</small></p>
      <div className="nia-product"><span className="nia-product-img" aria-hidden="true">🍔</span><div><strong>Informações do negócio</strong><small>Respostas com base em conteúdo aprovado.</small></div></div>
      {reply && <p className="nia-bubble nia-received">A equipe pode configurar as informações que a IA utiliza para responder. ✨<small>Exemplo</small></p>}
    </div>
    <button type="button" className="nia-phone-cta" onClick={() => setReply(v => !v)}>{reply ? "Reiniciar exemplo" : "Ver resposta de exemplo"} <Send size={14}/></button>
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
  return <div className="nia-page">
    <SiteHeader active="Novaes IA" />
    <main>
      <section className="nia-hero" aria-labelledby="nia-title">
        <div className="nia-hero-glow" aria-hidden="true"/>
        <div className="nia-hero-copy">
          <span className="nia-kicker"><Sparkles size={16}/> NOVAES IA</span>
          <h1 id="nia-title">Atendimento inteligente <span>para o seu negócio</span></h1>
          <p>Conheça a proposta da NovaesWeb para organizar conversas e preparar o atendimento com inteligência artificial pelo WhatsApp.</p>
          <div className="nia-hero-actions"><a className="nia-button nia-button-primary" href={demoUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={20}/> Solicitar demonstração</a><button className="nia-button nia-button-outline" type="button" onClick={() => setShowDemo(true)}><Play size={18}/> Ver como funciona</button></div>
          <div className="nia-hero-points"><span><Clock3 size={17}/> Respostas planejadas</span><span><TrendingUp size={17}/> Mais organização</span><span><ShieldCheck size={17}/> Controles por empresa</span></div>
          <p className="nia-disclaimer">Projeto em desenvolvimento. O atendimento automático para clientes reais ainda depende de homologação.</p>
        </div>
        <div className="nia-hero-visual"><span className="nia-visual-n" aria-hidden="true">N</span><div className="nia-wa-mark" aria-hidden="true"><MessageCircle size={38}/></div><DemoPhone/><RobotMascot/></div>
      </section>
      <section className="nia-benefits" aria-label="Benefícios planejados">{features.map(({Icon,title,text})=><article key={title}><Icon size={29}/><div><h2>{title}</h2><p>{text}</p></div></article>)}</section>
      <section className="nia-section nia-steps" id="como-funciona"><div className="nia-section-head"><h2>Como <span>funciona?</span></h2><p>Um processo acompanhado, do primeiro contato à validação das respostas.</p></div><div className="nia-steps-list">{steps.map(({Icon,title,text},i)=><div className="nia-step-wrap" key={title}><article className="nia-step"><Icon size={32}/><div><h3>{i+1}. {title}</h3><p>{text}</p></div></article>{i<steps.length-1&&<ChevronRight className="nia-step-arrow" size={20}/>}</div>)}</div></section>
      <section className="nia-section nia-plans" id="planos"><div className="nia-section-head"><h2>Planos da <span>Novaes IA</span></h2><p>Três possibilidades para conversar sobre o seu negócio. Valores e recursos finais serão definidos após os testes.</p></div><div className="nia-plan-grid">{plans.map((plan)=><article className={`nia-plan ${plan.featured?"nia-plan-featured":""}`} key={plan.title}>{plan.featured&&<span className="nia-popular">Opção em destaque</span>}<div className="nia-plan-symbol">{plan.featured?"♛":"✧"}</div><h3>{plan.title}</h3><p className="nia-plan-intro">{plan.description}</p><strong className="nia-price">Sob consulta</strong><p className="nia-plan-note">Proposta ilustrativa · contratação indisponível</p><ul>{plan.bullets.map(t=><li key={t}><Check size={15}/>{t}</li>)}</ul><a href={demoUrl} target="_blank" rel="noopener noreferrer" className={`nia-button ${plan.featured?"nia-button-primary":"nia-button-outline"}`}>Solicitar informações</a></article>)}</div></section>
      <section className="nia-final"><div><h2>Pronto para conhecer o atendimento <span>do seu negócio?</span></h2><p>Converse com a NovaesWeb, tire suas dúvidas e acompanhe a evolução do projeto.</p></div><a className="nia-button nia-button-primary" href={demoUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={20}/> Solicitar demonstração agora</a></section>
      <div className="nia-back"><Link to="/servicos">Conheça também os outros serviços da NovaesWeb <ArrowRight size={17}/></Link></div>
    </main><SiteFooter/>
    {showDemo&&<div className="nia-modal-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)setShowDemo(false)}}><section role="dialog" aria-modal="true" aria-labelledby="nia-modal-title" className="nia-modal"><button type="button" className="nia-modal-close" aria-label="Fechar demonstração" onClick={()=>setShowDemo(false)}><X size={22}/></button><span className="nia-kicker">COMO FUNCIONA</span><h2 id="nia-modal-title">A Novaes IA está em preparação</h2><p>A experiência mostrada na página é uma simulação visual. Já existem recursos de painel e testes de IA, mas o envio automático para clientes reais ainda não está habilitado.</p><div className="nia-modal-points"><p><Headphones size={20}/> Atendimento configurado de acordo com a empresa</p><p><ShieldCheck size={20}/> Testes e homologação antes de qualquer ativação</p><p><MessageCircle size={20}/> Demonstração solicitada diretamente à NovaesWeb</p></div><a href={demoUrl} target="_blank" rel="noopener noreferrer" className="nia-button nia-button-primary">Quero saber mais <ArrowRight size={17}/></a></section></div>}
  </div>;
}
