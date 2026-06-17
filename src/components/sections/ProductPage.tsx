"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
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
              {product.external_url ? (
                <a
                  href={product.external_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-gradient text-white font-semibold shadow-xl shadow-purple-900/40 hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
                >
                  {lang === "es" ? "Descargar LMCP" : "Download LMCP"}
                  <ExternalLink size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              ) : (
                <a
                  href="/#contacto"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-gradient text-white font-semibold shadow-xl shadow-purple-900/40 hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
                >
                  {lang === "es" ? "Solicitar Demo" : "Book a Demo"}
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}
              <a
                href={product.external_url ? "https://local-mcp.com/guides?ref=colibird" : "/#developers"}
                target={product.external_url ? "_blank" : undefined}
                rel={product.external_url ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-brand-border text-gray-300 font-semibold hover:border-brand-purple/50 hover:text-white hover:bg-brand-card/50 transition-all duration-200"
              >
                {lang === "es" ? "Ver Documentación" : "View Docs"}
                {product.external_url && <ExternalLink size={16} />}
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

        {/* Financial institution use case (LMCP enterprise pattern) */}
        {data.fin_case && (
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
                  {data.fin_case.tag}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{data.fin_case.headline}</h2>
                <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">{data.fin_case.sub}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="glow-border rounded-2xl p-6">
                  <h3 className="text-sm font-semibold text-red-300/90 uppercase tracking-wide mb-3">
                    {data.fin_case.problem_title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{data.fin_case.problem}</p>
                </div>
                <div className="glow-border rounded-2xl p-6">
                  <h3 className="text-sm font-semibold text-purple-300/90 uppercase tracking-wide mb-3">
                    {data.fin_case.solution_title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{data.fin_case.solution}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">
                  <h3 className="text-sm font-semibold text-green-300/90 uppercase tracking-wide mb-3">
                    {data.fin_case.api_path_title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{data.fin_case.api_path}</p>
                </div>
                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
                  <h3 className="text-sm font-semibold text-cyan-300/90 uppercase tracking-wide mb-3">
                    {data.fin_case.direct_path_title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{data.fin_case.direct_path}</p>
                  <h4 className="text-xs font-semibold text-white/80 uppercase tracking-wide mb-2">
                    {data.fin_case.direct_path_how_title}
                  </h4>
                  <ol className="space-y-2">
                    {data.fin_case.direct_path_steps.map((step, i) => (
                      <li key={i} className="flex gap-2 text-xs text-gray-400 leading-relaxed">
                        <span className="text-cyan-400 font-mono flex-shrink-0">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="rounded-2xl border border-brand-border bg-brand-card/50 p-6 mb-10">
                <h3 className="text-sm font-semibold text-white mb-4">{data.fin_case.security_title}</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {data.fin_case.security_bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-400 leading-relaxed">
                      <Check size={14} className="flex-shrink-0 text-purple-400 mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-lg font-semibold text-white text-center mb-6">{data.fin_case.journeys_title}</h3>
              <div className="grid md:grid-cols-3 gap-5 mb-8">
                {data.fin_case.journeys.map((j, i) => (
                  <div key={i} className="card-dark rounded-2xl p-5 border border-brand-border">
                    <div className="text-xs font-semibold text-purple-300 uppercase tracking-wide mb-3">{j.persona}</div>
                    <blockquote className="text-sm text-white italic mb-4 border-l-2 border-fuchsia-500/40 pl-3">
                      &ldquo;{j.prompt}&rdquo;
                    </blockquote>
                    <ol className="space-y-2">
                      {j.steps.map((step, k) => (
                        <li key={k} className="text-xs text-gray-400 leading-relaxed flex gap-2">
                          <span className="text-purple-400 font-mono">{k + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {data.fin_case.metrics.map((m, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-brand-surface/40 border border-brand-border">
                    <div className="text-xl sm:text-2xl font-bold gradient-text mb-1">{m.value}</div>
                    <div className="text-xs font-semibold text-white mb-1">{m.label}</div>
                    <div className="text-[10px] text-gray-500 leading-snug">{m.desc}</div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-500 text-center max-w-3xl mx-auto leading-relaxed">
                {data.fin_case.framing_note}
              </p>
            </div>
          </section>
        )}

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
              {product.external_url
                ? lang === "es"
                  ? "¿Listo para probar LMCP?"
                  : "Ready to try LMCP?"
                : lang === "es"
                  ? `¿Listo para integrar ${data.name}?`
                  : `Ready to integrate ${data.name}?`}
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {product.external_url
                ? lang === "es"
                  ? "Descargá gratis en local-mcp.com o contactanos para banca agéntica enterprise."
                  : "Download free at local-mcp.com or contact us for enterprise agentic banking."
                : lang === "es"
                  ? "Hablá con nuestro equipo y arrancá con el sandbox en menos de un día."
                  : "Talk to our team and get started with the sandbox in less than a day."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {product.external_url && (
                <a
                  href={product.external_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-gradient text-white font-semibold shadow-xl shadow-purple-900/40 hover:opacity-90 transition-all"
                >
                  {lang === "es" ? "Descargar LMCP" : "Download LMCP"}
                  <ExternalLink size={18} />
                </a>
              )}
              <a
                href="/#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-brand-border text-gray-300 font-semibold hover:border-brand-purple/50 hover:text-white transition-all"
              >
                {product.external_url
                  ? lang === "es"
                    ? "Banca agéntica enterprise"
                    : "Enterprise agentic banking"
                  : lang === "es"
                    ? "Solicitar Demo"
                    : "Book a Demo"}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
