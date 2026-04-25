"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { ArrowRight, Zap, Shield, Globe, Brain } from "lucide-react";

const pillIcons = [Zap, Brain, Shield, Globe];

export default function Hero() {
  const { t } = useLang();
  const pills = [t.hero.pill1, t.hero.pill2, t.hero.pill3, t.hero.pill4];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-brand-dark" />
      <div className="hero-glow" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-purple/10 blur-3xl animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-brand-magenta/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-brand-violet/10 blur-2xl animate-float" style={{ animationDelay: "4s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-up">
          <Image src="/logo.png" alt="Colibird" width={220} height={66} className="h-16 w-auto object-contain" priority />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-purple-300 text-sm font-medium mb-8 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
          {t.hero.badge}
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <span className="text-white">{t.hero.headline1} </span>
          <br />
          <span className="gradient-text">{t.hero.headline2}</span>
          <br />
          <span className="text-white">{t.hero.headline3}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          {t.hero.sub}
        </p>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-up" style={{ animationDelay: "0.25s", opacity: 0 }}>
          {pills.map((pill, i) => {
            const Icon = pillIcons[i];
            return (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-card border border-brand-border text-sm text-gray-300"
              >
                <Icon size={13} className="text-purple-400" />
                {pill}
              </span>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-gradient text-white font-semibold text-base shadow-lg shadow-purple-900/40 hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
          >
            {t.hero.cta_primary}
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#plataforma"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-brand-border text-gray-300 font-semibold text-base hover:border-brand-purple/50 hover:text-white hover:bg-brand-card/50 transition-all duration-200"
          >
            {t.hero.cta_secondary}
          </a>
        </div>

        {/* Platform visual hint */}
        <div className="mt-20 relative animate-fade-up" style={{ animationDelay: "0.5s", opacity: 0 }}>
          <div className="relative mx-auto max-w-3xl">
            {/* Central platform card */}
            <div className="glow-border rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 animate-shimmer" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-brand-purple" />
                    <div className="w-3 h-3 rounded-full bg-brand-magenta" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-gray-500 font-mono">colibird.platform</span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {["SCF", "eCheqs", "OPP", "Confirming", "Click to Pay", "RADIAN", "Risk Engine", "KYC", "Pagos B2B", "Open Finance"].map((mod) => (
                    <div
                      key={mod}
                      className="bg-brand-surface border border-brand-border rounded-lg px-2 py-1.5 text-center"
                    >
                      <span className="text-xs text-gray-300 font-mono">{mod}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 h-1 rounded-full bg-brand-border overflow-hidden">
                  <div className="h-full w-3/4 bg-brand-gradient rounded-full" />
                </div>
                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>API-First Integration</span>
                  <span className="text-green-400">● Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent" />
    </section>
  );
}
