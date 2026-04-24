"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { getProductBySlug } from "@/lib/products";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const colorMap: Record<string, { badge: string; icon: string; glow: string; step: string }> = {
  purple: {
    badge: "bg-purple-500/15 text-purple-300 border-purple-500/25",
    icon: "bg-gradient-to-br from-purple-600 to-purple-800",
    glow: "rgba(139,92,246,0.3)",
    step: "border-purple-500/30 text-purple-300",
  },
  pink: {
    badge: "bg-pink-500/15 text-pink-300 border-pink-500/25",
    icon: "bg-gradient-to-br from-pink-600 to-pink-800",
    glow: "rgba(236,72,153,0.3)",
    step: "border-pink-500/30 text-pink-300",
  },
  teal: {
    badge: "bg-teal-500/15 text-teal-300 border-teal-500/25",
    icon: "bg-gradient-to-br from-teal-600 to-teal-800",
    glow: "rgba(20,184,166,0.3)",
    step: "border-teal-500/30 text-teal-300",
  },
  blue: {
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/25",
    icon: "bg-gradient-to-br from-blue-600 to-blue-800",
    glow: "rgba(59,130,246,0.3)",
    step: "border-blue-500/30 text-blue-300",
  },
  green: {
    badge: "bg-green-500/15 text-green-300 border-green-500/25",
    icon: "bg-gradient-to-br from-green-600 to-green-800",
    glow: "rgba(34,197,94,0.3)",
    step: "border-green-500/30 text-green-300",
  },
  orange: {
    badge: "bg-orange-500/15 text-orange-300 border-orange-500/25",
    icon: "bg-gradient-to-br from-orange-600 to-orange-800",
    glow: "rgba(249,115,22,0.3)",
    step: "border-orange-500/30 text-orange-300",
  },
};

export default function ProductPage({ slug }: { slug: string }) {
  const { lang } = useLang();
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const data = product[lang];
  const c = colorMap[product.color] ?? colorMap.purple;

  return (
    <div className="flex flex-col min-h-screen bg-brand-dark">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
            style={{ background: `radial-gradient(ellipse at center, ${c.glow} 0%, transparent 70%)`, filter: "blur(60px)" }}
          />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link
              href="/#productos"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-200 transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              {lang === "es" ? "Volver a Productos" : "Back to Products"}
            </Link>

            <div className="mb-5">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border uppercase tracking-wider ${c.badge}`}>
                {data.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight leading-tight">
              {data.name}
            </h1>
            <p className="text-xl sm:text-2xl gradient-text font-medium mb-6">
              {data.tagline}
            </p>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              {data.description}
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="/#contacto"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-gradient text-white font-semibold shadow-xl shadow-purple-900/40 hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
              >
                {lang === "es" ? "Solicitar Demo" : "Book a Demo"}
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="/#developers"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-brand-border text-gray-300 font-semibold hover:border-brand-purple/50 hover:text-white hover:bg-brand-card/50 transition-all duration-200"
              >
                {lang === "es" ? "Ver Documentación" : "View Docs"}
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-brand-surface/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
              {lang === "es" ? "Capacidades clave" : "Key capabilities"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.features.map((feat, i) => (
                <div key={i} className="glow-border rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-2">{feat.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
              {lang === "es" ? "¿Cómo funciona?" : "How it works"}
            </h2>
            <div className="space-y-6">
              {data.steps.map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl border-2 flex items-center justify-center font-bold text-sm ${c.step}`}>
                    {step.number}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-base font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20 bg-brand-surface/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
              {lang === "es" ? "¿Para quién es?" : "Who is it for?"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.use_cases.map((uc, i) => (
                <div key={i} className="card-dark rounded-2xl p-6 border border-brand-border">
                  <h3 className="text-sm font-semibold text-white mb-3">{uc.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech specs */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-lg font-semibold text-gray-400 uppercase tracking-widest mb-6">
              {lang === "es" ? "Especificaciones técnicas" : "Technical specifications"}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {product.tech_specs.map((spec) => (
                <span key={spec} className="px-4 py-2 rounded-full bg-brand-card border border-brand-border text-sm text-gray-300 font-mono">
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-brand-surface/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {lang === "es"
                ? `¿Listo para integrar ${data.name}?`
                : `Ready to integrate ${data.name}?`}
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {lang === "es"
                ? "Hablá con nuestro equipo y arrancá con el sandbox en menos de un día."
                : "Talk to our team and get started with the sandbox in less than a day."}
            </p>
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-gradient text-white font-semibold shadow-xl shadow-purple-900/40 hover:opacity-90 transition-all"
            >
              {lang === "es" ? "Solicitar Demo" : "Book a Demo"}
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
