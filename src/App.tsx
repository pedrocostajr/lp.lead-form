import React from 'react';
import {
  CheckCircle2,
  Smartphone,
  MousePointer2,
  Zap,
  BarChart3,
  Layers,
  Globe,
  Webhook,
  ShieldCheck,
  ArrowRight,
  Star,
  Layout,
  Download,
  Facebook,
  Palette
} from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass py-4">
    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
      <div className="flex items-center gap-2 font-display font-bold text-2xl text-emerald-600">
        <Zap className="fill-emerald-600" />
        <span>Lead <span className="text-slate-900">Form</span></span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#features" className="hover:text-emerald-600 transition-colors">Funcionalidades</a>
        <a href="#how-it-works" className="hover:text-emerald-600 transition-colors">Como Funciona</a>
        <a href="#pricing" className="hover:text-emerald-600 transition-colors">Preço</a>
      </div>
      <a href="#pricing" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all">
        Começar Agora
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-20 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold mb-6 border border-emerald-100">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Exclusivo para Corretores de Imóveis
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
          Crie formulários personalizados de captação de leads de <span className="gradient-text">alta conversão</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
          Saia do zero ao seu primeiro lead em menos de 5 minutos. O Lead Form é a ferramenta definitiva para transformar visitantes em clientes reais.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#pricing" className="btn-primary">
            Quero Aumentar Minhas Vendas <ArrowRight size={20} />
          </a>
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i + 10}/40/40`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" referrerPolicy="no-referrer" />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-slate-500 font-medium">+1.200 corretores ativos</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-900">
          <img
            src="https://leadsign.com.br/wp-content/uploads/2026/02/Captura-de-Tela-2026-02-24-as-08.57.46.png"
            alt="Lead Form Dashboard"
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-400/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-teal-400/20 blur-3xl rounded-full"></div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 -left-12 glass p-4 rounded-2xl shadow-xl hidden md:block"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Novo Lead</p>
              <p className="font-bold text-slate-900">Apartamento Jardins</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: <MousePointer2 className="text-emerald-600" />,
      title: "Editor Drag & Drop",
      description: "Construa formulários profissionais sem saber uma linha de código. Arraste, solte e publique."
    },
    {
      icon: <Layers className="text-emerald-600" />,
      title: "Fluxos em Etapas",
      description: "Quebre o formulário em passos (quizes) para diminuir o atrito e aumentar drasticamente a conversão."
    },
    {
      icon: <Palette className="text-emerald-600" />,
      title: "Integração Canva",
      description: "O único com integração direta para usar seus designs do Canva como fundo ou elementos visuais."
    },
    {
      icon: <Facebook className="text-emerald-600" />,
      title: "Rastreamento Nativo",
      description: "Disparo automático de Meta Pixel e GTM. Otimize suas campanhas de tráfego pago como um profissional."
    },
    {
      icon: <Webhook className="text-emerald-600" />,
      title: "Webhooks Globais",
      description: "Conecte com Zapier, Make, n8n ou qualquer CRM do mercado automaticamente."
    },
    {
      icon: <Smartphone className="text-emerald-600" />,
      title: "Mobile-First",
      description: "Seus formulários são otimizados para carregar instantaneamente em qualquer smartphone."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Tudo o que você precisa para dominar o mercado</h2>
          <p className="text-lg text-slate-600">Esqueça formulários estáticos e chatos. Crie experiências de captura que envolvem o cliente.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="card-feature"
            >
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Veja o Lead Form em Ação</h2>
        <p className="text-lg text-slate-600">Descubra como transformar sua captação de leads em poucos minutos.</p>
      </div>
      <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-900 relative" style={{ padding: '56.25% 0 0 0' }}>
        <iframe
          src="https://player.vimeo.com/video/1167735455?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          title="Lead Form"
        ></iframe>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-20 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
      <div>
        <p className="text-5xl font-extrabold text-emerald-400 mb-2">+300%</p>
        <p className="text-slate-400 font-medium">Aumento médio na conversão</p>
      </div>
      <div>
        <p className="text-5xl font-extrabold text-emerald-400 mb-2">5 min</p>
        <p className="text-slate-400 font-medium">Tempo médio para criar um fluxo</p>
      </div>
      <div>
        <p className="text-5xl font-extrabold text-emerald-400 mb-2">100%</p>
        <p className="text-slate-400 font-medium">Segurança dos seus dados (Google Cloud)</p>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Preço Justo e Transparente</h2>
        <p className="text-lg text-slate-600">Sem mensalidades abusivas. Pague uma vez e use para sempre.</p>
      </div>

      <div className="max-w-lg mx-auto">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-[2.5rem] p-10 shadow-2xl border-4 border-emerald-500 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-emerald-500 text-white px-8 py-2 rounded-bl-3xl font-bold text-sm uppercase tracking-widest">
            Oferta de Lançamento
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Plano Vitalício</h3>
            <p className="text-slate-500">Acesso completo a todas as funcionalidades.</p>
          </div>

          <div className="flex flex-col mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-slate-400 line-through text-2xl">R$ 297</span>
              <span className="text-6xl font-black text-slate-900">R$ 37</span>
              <span className="text-slate-500 font-medium">/ único</span>
            </div>
            <p className="text-emerald-600 font-bold text-lg mt-2">
              ou 8x de R$ 5,38*
            </p>
          </div>

          <ul className="space-y-4 mb-10">
            {[
              "Formulários Ilimitados",
              "Leads Ilimitados",
              "Integração com Canva",
              "Pixel do Facebook & GTM",
              "Exportação CSV",
              "Webhooks (Zapier/Make)",
              "Suporte Prioritário",
              "Atualizações Vitalícias"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="https://pay.kiwify.com.br/XbDFHgy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn-primary text-xl py-6"
          >
            GARANTIR MEU ACESSO AGORA
          </a>

          <p className="text-center mt-6 text-sm text-slate-500 flex items-center justify-center gap-2">
            <ShieldCheck size={16} /> Compra 100% Segura • 7 Dias de Garantia
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    {
      q: "Preciso saber programar?",
      a: "Não! O Lead Form foi feito para corretores. Se você sabe arrastar e soltar, você sabe criar formulários incríveis."
    },
    {
      q: "Funciona em qualquer imobiliária?",
      a: "Sim. Nossa estrutura multi-tenant permite que você crie sua própria 'Imobiliária Virtual' e gerencie seus leads de forma isolada e segura."
    },
    {
      q: "O pagamento é realmente único?",
      a: "Sim! Nesta oferta de lançamento, você paga apenas R$ 37 uma única vez e tem acesso vitalício à plataforma."
    },
    {
      q: "Como recebo os leads?",
      a: "Você pode visualizar no painel, exportar para CSV ou enviar automaticamente para seu CRM via Webhook."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Perguntas Frequentes</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 bg-slate-900 text-slate-400 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2 font-display font-bold text-2xl text-emerald-500">
        <Zap className="fill-emerald-500" />
        <span>Lead <span className="text-white">Form</span></span>
      </div>
      <p className="text-sm">© 2024 Lead Form. Todos os direitos reservados.</p>
      <div className="flex gap-6 text-sm">
        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        <a href="#" className="hover:text-white transition-colors">Privacidade</a>
      </div>
    </div>
  </footer>
);


export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <Stats />
        <Features />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
