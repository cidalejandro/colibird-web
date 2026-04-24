"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { Link2, CreditCard, FileText, Globe, Shield, Zap, Database, BarChart3, Layers, ArrowRight, Bot } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Financiamiento: <Link2 size={16} />,
  Financing: <Link2 size={16} />,
  "Pagos B2B": <CreditCard size={16} />,
  "B2B Payments": <CreditCard size={16} />,
  "Compliance & Data": <FileText size={16} />,
  "Infraestructura Core": <Layers size={16} />,
  "Core Infrastructure": <Layers size={16} />,
};

const productIcons = [
  <BarChart3 key="scf" size={20} />,
  <ArrowRight key="conf" size={20} />,
  <FileText key="echeqs" size={20} />,
  <CreditCard key="opp" size={20} />,
  <Zap key="ctp" size={20} />,
  <Globe key="gateway" size={20} />,
  <Globe key="radian" size={20} />,
  <Database key="einv" size={20} />,
  <Shield key="dec" size={20} />,
  <Shield key="trust" size={20} />,
  <Link2 key="api" size={20} />,
  <Bot key="mcp" size={20} />,
];

const categoryColors: Record<string, string> = {
  purple: "border-purple-500/20 bg-purple-500/5 text-purple-300",
  pink: "border-pink-500/20 bg-pink-500/5 text-pink-300",
  violet: "border-violet-500/20 bg-violet-500/5 text-violet-300",
};

const tagColors: Record<string, string> = {
  SCF: "bg-purple-500/15 text-purple-300 border-purple-500/20",
  Confirming: "bg-blue-500/15 text-blue-300 border-blue-500/20",
  Argentina: "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
  Adquirentes: "bg-pink-500/15 text-pink-300 border-pink-500/20",
  Acquirers: "bg-pink-500/15 text-pink-300 border-pink-500/20",
  Embedded: "bg-orange-500/15 text-orange-300 border-orange-500/20",
  Gateway: "bg-green-500/15 text-green-300 border-green-500/20",
  Colombia: "bg-yellow-500/15 text-yellow-300 border-yellow-500/20",
  "Multi-País": "bg-blue-500/15 text-blue-300 border-blue-500/20",
  "Multi-Country": "bg-blue-500/15 text-blue-300 border-blue-500/20",
  IA: "bg-purple-500/15 text-purple-300 border-purple-500/20",
  AI: "bg-purple-500/15 text-purple-300 border-purple-500/20",
  "5 min": "bg-green-500/15 text-green-300 border-green-500/20",
  "API-First": "bg-violet-500/15 text-violet-300 border-violet-500/20",
  "AI Agents": "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/20",
};

export default function Products() {
  const { t, lang } = useLang();
  const [activeCategory, setActiveCategory] = useState(0);

  const category = t.products.categories[activeCategory];
  let iconOffset = 0;
  for (let i = 0; i < activeCategory; i++) {
    iconOffset += t.products.categories[i].items.length;
  }

  return (
    <section id="productos" className="py-24 relative overflow-hidden bg-brand-dark">
      <div className="section-glow-right" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-magenta/10 border border-brand-magenta/20 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-4">
            {t.products.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.products.headline}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.products.sub}
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {t.products.categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                activeCategory === i
                  ? "bg-brand-gradient text-white border-transparent shadow-lg shadow-purple-900/30"
                  : "text-gray-400 border-brand-border hover:border-brand-purple/30 hover:text-gray-200 bg-brand-card"
              }`}
            >
              <span>{categoryIcons[cat.name]}</span>
              {cat.name}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeCategory === i ? "bg-white/20" : "bg-brand-muted"}`}>
                {cat.items.length}
              </span>
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {category.items.map((product, i) => {
            const globalIndex = iconOffset + i;
            const tagClass = tagColors[product.tag] || "bg-gray-500/15 text-gray-300 border-gray-500/20";
            const slug = (product as { slug?: string }).slug;
            const CardWrapper = slug
              ? ({ children }: { children: React.ReactNode }) => (
                  <Link href={`/productos/${slug}`} className="glow-border rounded-2xl p-6 group cursor-pointer relative overflow-hidden block hover:scale-[1.01] transition-all duration-200">
                    {children}
                  </Link>
                )
              : ({ children }: { children: React.ReactNode }) => (
                  <div className="glow-border rounded-2xl p-6 group cursor-default relative overflow-hidden">
                    {children}
                  </div>
                );
            return (
              <CardWrapper key={i}>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-purple/5 -translate-y-8 translate-x-8 group-hover:bg-brand-purple/10 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex p-2.5 rounded-xl bg-brand-gradient text-white shadow-lg shadow-purple-900/20">
                      {productIcons[globalIndex % productIcons.length]}
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${tagClass}`}>
                      {product.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:gradient-text transition-all">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{product.desc}</p>
                  {slug && (
                    <div className="mt-4 flex items-center gap-1 text-xs text-purple-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {lang === "es" ? "Ver producto" : "View product"} <ArrowRight size={12} />
                    </div>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>

        {/* All products summary */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-surface/40 border border-brand-border/60 text-center">
          <p className="text-gray-400 text-sm mb-3">
            {lang === "es"
              ? "Todos los módulos disponibles como plataforma integrada o de forma independiente."
              : "All modules available as an integrated platform or independently."}
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm text-purple-300 font-medium hover:text-purple-200 transition-colors"
          >
            {lang === "es" ? "Consultá por tu caso de uso" : "Ask about your use case"}
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
