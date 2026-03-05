"use client"

import { Shield, TrendingUp, Sparkles, Star, FileText, CreditCard, BarChart3, Brain, Bot, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-16 h-16 bg-white/15 rounded-full blur-md animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <Star className="absolute top-32 left-1/4 w-6 h-6 text-white/30 animate-pulse" />
        <Sparkles
          className="absolute bottom-32 right-1/3 w-8 h-8 text-white/20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <Star
          className="absolute top-1/2 right-20 w-4 h-4 text-white/40 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <FileText
          className="absolute top-40 right-1/4 w-5 h-5 text-white/25 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <CreditCard
          className="absolute bottom-40 left-1/3 w-6 h-6 text-white/30 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <BarChart3
          className="absolute top-2/3 left-20 w-5 h-5 text-white/35 animate-pulse"
          style={{ animationDelay: "2.5s" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 py-32">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 text-balance leading-tight">
            Empodera
            <br />
            <span className="relative inline-block">
              12 Millones
              <div className="absolute -inset-2 bg-white/10 rounded-2xl blur-xl animate-pulse" />
            </span>
            <br />
            de PYMEs LATAM
          </h1>

          <div className="inline-flex items-center space-x-2 glass-dark rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-white/90 text-sm font-medium">Tecnología Colibird IA End-to-End</span>
          </div>
        </div>

        <p className="text-white/90 text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-pretty leading-relaxed font-light">
          Ayuda a jugadores de Factoring y SCF a desbloquear capital para PYMEs LATAM con nuestra
          <span className="font-semibold text-white"> tecnología de procesamiento de facturas</span> escalable y
          eficiente.
          <span className="font-semibold text-white"> Onboarding en 5 minutos</span>,{" "}
          <span className="font-semibold text-white">Trading en 1 click</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { icon: Brain, text: "IA First", color: "from-purple-400 to-pink-500" },
            { icon: Bot, text: "MCP Agents", color: "from-pink-400 to-orange-500" },
            { icon: Users, text: "Client Centric UX", color: "from-orange-400 to-purple-500" },
          ].map((feature, index) => (
            <div
              key={index}
              className="glass-dark rounded-2xl px-6 py-3 hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`p-2 rounded-xl bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium">{feature.text}</span>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
