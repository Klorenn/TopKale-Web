"use client";

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Sprout, Users, Zap, Crown, Gamepad2, TrendingUp } from 'lucide-react';
import Image from 'next/image';


const PixelCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border-2 border-blue-400 bg-blue-900/20 backdrop-blur-sm ${className}`}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

const TopKaleWebsite: React.FC = () => {
  const textControls = useAnimation();
  const [showCommands, setShowCommands] = useState(false);
  const [language, setLanguage] = useState<'en' | 'es' | 'pt'>('en');

  const translations = {
    en: {
      nav: {
        features: "Features",
        stats: "Stats",
        invite: "Invite Bot"
      },
      hero: {
        title: "TopKale",
        subtitle: "Track Kale Token Prices, Rankings & Analytics",
        addButton: "Add to Discord",
        commandsButton: "View Commands"
      },
      features: {
        title: "Features",
        items: [
          {
            title: "Price Tracking",
            description: "Get real-time Kale token prices and market data"
          },
          {
            title: "Rankings",
            description: "View top 5 Kale holders and check your ranking position"
          },
          {
            title: "Farm Integration",
            description: "Direct access to Kale Farm platform for token farming"
          },
          {
            title: "Multi-Language",
            description: "Change bot language to support global communities"
          },
          {
            title: "Wallet Analytics",
            description: "Track your holdings history and balance changes"
          },
          {
            title: "Smart Alerts",
            description: "Configure custom alerts for balance and price changes"
          }
        ]
      },
      stats: {
        title: "Stats",
        items: [
          { label: "Active Users", value: "2,500+" },
          { label: "Discord Servers", value: "150+" },
          { label: "Commands Used", value: "50K+" },
          { label: "Price Updates", value: "24/7" }
        ]
      },
      commands: {
        title: "Kale Bot Help",
        subtitle: "Available Commands:",
        basicTitle: "🌿 Basic Commands",
        analyticsTitle: "💼 Wallet & Analytics",
        whatIsKale: "🌿 What is Kale?",
        whatIsKaleDesc: "Kale is a digital token on the Stellar blockchain that is part of the Kale Farm ecosystem. It is a cryptocurrency that allows users to participate in the farming system and earn rewards for their activities.",
        whatIsKaleFarm: "🌾 What is Kale Farm?",
        whatIsKaleFarmDesc: "Kale Farm is the official platform where you can farm (obtain) KALE tokens. It is a reward system that allows you to earn KALE tokens by performing different activities and tasks on the platform.",
        poweredBy: "Powered by Hoops Finance API (api.hoops.finance)",
        closeButton: "Close Commands",
        commandList: {
          kale: "Shows the main Kale bot commands",
          top: "Shows the top 5 Kale holders ranking",
          price: "Shows the current Kale token price",
          farm: "🌾 Redirects to the official Kale Farm page to farm tokens",
          invite: "🔗 Generates a link to invite the bot to your server",
          language: "🌐 Changes the bot language",
          rank: "🏆 Shows a wallet's position in the ranking",
          stats: "📊 Shows global Kale token statistics",
          alerts: "🔔 Configure balance change alerts",
          history: "📈 Shows holdings change history"
        }
      },
      cta: {
        title: "Ready to Track Kale?",
        description: "Join thousands of users tracking Kale token prices and analytics!",
        button: "Add TopKale to Discord"
      },
      footer: {
        madeBy: "Made with 💚 by",
        using: "using the"
      }
    },
    es: {
      nav: {
        features: "Características",
        stats: "Estadísticas",
        invite: "Invitar Bot"
      },
      hero: {
        title: "TopKale",
        subtitle: "Rastrea Precios, Rankings y Análisis del Token Kale",
        addButton: "Añadir a Discord",
        commandsButton: "Ver Comandos"
      },
      features: {
        title: "Características",
        items: [
          {
            title: "Seguimiento de Precios",
            description: "Obtén precios en tiempo real del token Kale y datos de mercado"
          },
          {
            title: "Rankings",
            description: "Ve los top 5 holders de Kale y verifica tu posición en el ranking"
          },
          {
            title: "Integración con Farm",
            description: "Acceso directo a la plataforma Kale Farm para farmear tokens"
          },
          {
            title: "Multi-idioma",
            description: "Cambia el idioma del bot para apoyar comunidades globales"
          },
          {
            title: "Analíticas de Wallet",
            description: "Rastrea el historial de tus holdings y cambios de balance"
          },
          {
            title: "Alertas Inteligentes",
            description: "Configura alertas personalizadas para cambios de balance y precio"
          }
        ]
      },
      stats: {
        title: "Estadísticas",
        items: [
          { label: "Usuarios Activos", value: "2,500+" },
          { label: "Servidores Discord", value: "150+" },
          { label: "Comandos Usados", value: "50K+" },
          { label: "Actualizaciones de Precio", value: "24/7" }
        ]
      },
      commands: {
        title: "Ayuda del Bot Kale",
        subtitle: "Comandos disponibles:",
        basicTitle: "🌿 Comandos Básicos",
        analyticsTitle: "💼 Wallet y Analíticas",
        whatIsKale: "🌿 ¿Qué es Kale?",
        whatIsKaleDesc: "Kale es un token digital en la blockchain de Stellar que forma parte del ecosistema de Kale Farm. Es una criptomoneda que permite a los usuarios participar en el sistema de farmeo y obtener recompensas por sus actividades.",
        whatIsKaleFarm: "🌾 ¿Qué es Kale Farm?",
        whatIsKaleFarmDesc: "Kale Farm es la plataforma oficial donde puedes farmear (obtener) tokens KALE. Es un sistema de recompensas que te permite ganar tokens KALE realizando diferentes actividades y tareas en la plataforma.",
        poweredBy: "Powered by Hoops Finance API (api.hoops.finance)",
        closeButton: "Cerrar Comandos",
        commandList: {
          kale: "Muestra los comandos principales del bot de Kale",
          top: "Muestra el ranking de top 5 holders de Kale",
          price: "Muestra el precio actual del token Kale",
          farm: "🌾 Redirige a la página oficial de Kale Farm para farmear tokens",
          invite: "🔗 Genera un enlace para invitar el bot a tu servidor",
          language: "🌐 Cambia el idioma del bot",
          rank: "🏆 Muestra la posición de una dirección en el ranking",
          stats: "📊 Muestra estadísticas globales del token Kale",
          alerts: "🔔 Configura alertas de cambios de balance",
          history: "📈 Muestra el histórico de cambios en holdings"
        }
      },
      cta: {
        title: "¿Listo para Rastrear Kale?",
        description: "¡Únete a miles de usuarios rastreando precios y analíticas del token Kale!",
        button: "Añadir TopKale a Discord"
      },
      footer: {
        madeBy: "Hecho con 💚 por",
        using: "usando la"
      }
    },
    pt: {
      nav: {
        features: "Recursos",
        stats: "Estatísticas",
        invite: "Convidar Bot"
      },
      hero: {
        title: "TopKale",
        subtitle: "Rastreie Preços, Rankings e Análises do Token Kale",
        addButton: "Adicionar ao Discord",
        commandsButton: "Ver Comandos"
      },
      features: {
        title: "Recursos",
        items: [
          {
            title: "Rastreamento de Preços",
            description: "Obtenha preços em tempo real do token Kale e dados de mercado"
          },
          {
            title: "Rankings",
            description: "Veja os top 5 holders de Kale e verifique sua posição no ranking"
          },
          {
            title: "Integração com Farm",
            description: "Acesso direto à plataforma Kale Farm para farmear tokens"
          },
          {
            title: "Multi-idioma",
            description: "Mude o idioma do bot para apoiar comunidades globais"
          },
          {
            title: "Analíticas de Wallet",
            description: "Rastreie o histórico dos seus holdings e mudanças de saldo"
          },
          {
            title: "Alertas Inteligentes",
            description: "Configure alertas personalizadas para mudanças de saldo e preço"
          }
        ]
      },
      stats: {
        title: "Estatísticas",
        items: [
          { label: "Usuários Ativos", value: "2,500+" },
          { label: "Servidores Discord", value: "150+" },
          { label: "Comandos Usados", value: "50K+" },
          { label: "Atualizações de Preço", value: "24/7" }
        ]
      },
      commands: {
        title: "Ajuda do Bot Kale",
        subtitle: "Comandos disponíveis:",
        basicTitle: "🌿 Comandos Básicos",
        analyticsTitle: "💼 Wallet e Analíticas",
        whatIsKale: "🌿 O que é Kale?",
        whatIsKaleDesc: "Kale é um token digital na blockchain Stellar que faz parte do ecossistema Kale Farm. É uma criptomoeda que permite aos usuários participar no sistema de farming e obter recompensas por suas atividades.",
        whatIsKaleFarm: "🌾 O que é Kale Farm?",
        whatIsKaleFarmDesc: "Kale Farm é a plataforma oficial onde você pode farmear (obter) tokens KALE. É um sistema de recompensas que permite ganhar tokens KALE realizando diferentes atividades e tarefas na plataforma.",
        poweredBy: "Powered by Hoops Finance API (api.hoops.finance)",
        closeButton: "Fechar Comandos",
        commandList: {
          kale: "Mostra os comandos principais do bot Kale",
          top: "Mostra o ranking dos top 5 holders de Kale",
          price: "Mostra o preço atual do token Kale",
          farm: "🌾 Redireciona para a página oficial do Kale Farm para farmear tokens",
          invite: "🔗 Gera um link para convidar o bot para seu servidor",
          language: "🌐 Muda o idioma do bot",
          rank: "🏆 Mostra a posição de um endereço no ranking",
          stats: "📊 Mostra estatísticas globais do token Kale",
          alerts: "🔔 Configura alertas de mudanças de saldo",
          history: "📈 Mostra o histórico de mudanças nos holdings"
        }
      },
      cta: {
        title: "Pronto para Rastrear Kale?",
        description: "Junte-se a milhares de usuários rastreando preços e analíticas do token Kale!",
        button: "Adicionar TopKale ao Discord"
      },
      footer: {
        madeBy: "Feito com 💚 por",
        using: "usando a"
      }
    }
  };

  const t = translations[language];

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    textControls.start(i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    }));

    return () => {
      document.head.removeChild(link);
    };
  }, [textControls]);

  const features = [
    { icon: <TrendingUp className="h-8 w-8" /> },
    { icon: <Crown className="h-8 w-8" /> },
    { icon: <Zap className="h-8 w-8" /> },
    { icon: <Users className="h-8 w-8" /> },
    { icon: <Sprout className="h-8 w-8" /> },
    { icon: <Gamepad2 className="h-8 w-8" /> }
  ];

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-blue-800 via-blue-600 to-blue-400 text-white overflow-x-hidden"
      style={{ 
        fontFamily: "'Press Start 2P', monospace",
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(80, 191, 234, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(37, 99, 235, 0.2) 0%, transparent 50%)
        `
      }}
    >
      {/* Pixel Background Pattern */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-50 p-6"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image 
              src="/logo.png" 
              alt="TopKale Logo" 
              width={48} 
              height={48}
              className="w-12 h-12"
            />
            <span className="text-2xl font-bold text-blue-200">TopKale</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 text-sm">
              <a href="#features" className="hover:text-blue-200 transition-colors">{t.nav.features}</a>
              <a href="#stats" className="hover:text-blue-200 transition-colors">{t.nav.stats}</a>
              <a 
                href="https://discord.com/api/oauth2/authorize?client_id=1414030545083433001&permissions=2048&scope=bot%20applications.commands"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
              >
                {t.nav.invite}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value as 'en' | 'es' | 'pt')}
                className="bg-blue-800/50 border border-blue-400 text-blue-100 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="en">🇺🇸 English</option>
                <option value="es">🇪🇸 Español</option>
                <option value="pt">🇵🇹 Português</option>
              </select>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="mb-6 flex justify-center">
              <Image 
                src="/logo.png" 
                alt="TopKale Logo" 
                width={120} 
                height={120}
                className="w-32 h-32"
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-blue-100 drop-shadow-lg">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a 
              href="https://discord.com/api/oauth2/authorize?client_id=1414030545083433001&permissions=2048&scope=bot%20applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-lg border-4 border-blue-300 shadow-lg transform hover:scale-105 transition-all duration-200 inline-block"
            >
              {t.hero.addButton}
            </a>
            <button 
              onClick={() => setShowCommands(!showCommands)}
              className="px-8 py-4 bg-transparent border-4 border-blue-300 text-blue-100 font-bold rounded-lg hover:bg-blue-300 hover:text-blue-800 transition-all duration-200"
            >
              {t.hero.commandsButton}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Commands Section */}
      {showCommands && (
        <motion.section 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 px-6 py-20"
        >
          <div className="max-w-4xl mx-auto">
            <PixelCard className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-100">
                  {t.commands.title}
                </h2>
                <p className="text-blue-200 text-lg">
                  {t.commands.subtitle}
                </p>
              </div>

              {/* Basic Commands */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2">
                  {t.commands.basicTitle}
                </h3>
                <div className="bg-blue-800/30 rounded-lg p-4 mb-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <code className="bg-blue-700 px-3 py-1 rounded text-blue-100 font-mono text-sm">/kale</code>
                      <span className="text-blue-200">{t.commands.commandList.kale}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <code className="bg-blue-700 px-3 py-1 rounded text-blue-100 font-mono text-sm">/top</code>
                      <span className="text-blue-200">{t.commands.commandList.top}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <code className="bg-blue-700 px-3 py-1 rounded text-blue-100 font-mono text-sm">/price</code>
                      <span className="text-blue-200">{t.commands.commandList.price}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <code className="bg-blue-700 px-3 py-1 rounded text-blue-100 font-mono text-sm">/farm</code>
                      <span className="text-blue-200">{t.commands.commandList.farm}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <code className="bg-blue-700 px-3 py-1 rounded text-blue-100 font-mono text-sm">/invite</code>
                      <span className="text-blue-200">{t.commands.commandList.invite}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <code className="bg-blue-700 px-3 py-1 rounded text-blue-100 font-mono text-sm">/language</code>
                      <span className="text-blue-200">{t.commands.commandList.language}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wallet & Analytics */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2">
                  {t.commands.analyticsTitle}
                </h3>
                <div className="bg-blue-800/30 rounded-lg p-4 mb-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <code className="bg-blue-700 px-3 py-1 rounded text-blue-100 font-mono text-sm">/rank</code>
                      <span className="text-blue-200">{t.commands.commandList.rank}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <code className="bg-blue-700 px-3 py-1 rounded text-blue-100 font-mono text-sm">/stats</code>
                      <span className="text-blue-200">{t.commands.commandList.stats}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <code className="bg-blue-700 px-3 py-1 rounded text-blue-100 font-mono text-sm">/alerts</code>
                      <span className="text-blue-200">{t.commands.commandList.alerts}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <code className="bg-blue-700 px-3 py-1 rounded text-blue-100 font-mono text-sm">/history</code>
                      <span className="text-blue-200">{t.commands.commandList.history}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Information Sections */}
              <div className="space-y-6">
                <div className="bg-blue-800/20 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-blue-300 flex items-center gap-2">
                    {t.commands.whatIsKale}
                  </h4>
                  <p className="text-blue-200 leading-relaxed">
                    {t.commands.whatIsKaleDesc}
                  </p>
                </div>

                <div className="bg-blue-800/20 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-blue-300 flex items-center gap-2">
                    {t.commands.whatIsKaleFarm}
                  </h4>
                  <p className="text-blue-200 leading-relaxed">
                    {t.commands.whatIsKaleFarmDesc}
                  </p>
                </div>

                <div className="text-center pt-4 border-t border-blue-600">
                  <p className="text-blue-300 text-sm">
                    {t.commands.poweredBy}
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <button 
                  onClick={() => setShowCommands(false)}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-lg border-2 border-blue-300 transition-all duration-200"
                >
                  {t.commands.closeButton}
                </button>
              </div>
            </PixelCard>
          </div>
        </motion.section>
      )}

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-blue-100"
          >
            {t.features.title}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.items.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PixelCard className="p-6 h-full">
                  <div className="text-blue-400 mb-4">
                    {features[index].icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-100">
                    {feature.title}
                  </h3>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-blue-100"
          >
            {t.stats.title}
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.stats.items.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PixelCard className="p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-sm">
                    {stat.label}
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="invite" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <PixelCard className="p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-100">
                {t.cta.title}
              </h2>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                {t.cta.description}
              </p>
              <button className="px-12 py-6 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-lg border-4 border-blue-300 shadow-lg transform hover:scale-105 transition-all duration-200 text-lg">
                {t.cta.button}
              </button>
            </PixelCard>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t-4 border-blue-400">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Image 
              src="/logo.png" 
              alt="TopKale Logo" 
              width={32} 
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-blue-200">TopKale Bot</span>
          </div>
          <p className="text-blue-300 text-sm mb-4">
            {t.footer.madeBy} <a href="https://x.com/kl0ren" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors underline">Pau</a> {t.footer.using} <a href="https://hoops.finance" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors underline">Hoops Finance API</a>
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="text-blue-200 hover:text-white transition-colors">Support</a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TopKaleWebsite;
