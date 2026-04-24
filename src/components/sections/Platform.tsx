"use client";

import { useLang } from "@/context/LanguageContext";
import { ArrowRight, Cpu } from "lucide-react";

export default function Platform() {
  const { t, lang } = useLang();

  return (
    <section id="plataforma" className="py-24 relative overflow-hidden bg-brand-surface/20">
      <div className="section-glow-left" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            {t.platform.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.platform.headline}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.platform.sub}
          </p>
        </div>

        {/* Platform diagram */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Left: Clients */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-medium text-center mb-4">
                {lang === "es" ? "Clientes" : "Clients"}
              </p>
              {t.platform.clients.map((client, i) => (
                <div
                  key={i}
                  className="card-dark rounded-xl px-4 py-3 text-center text-sm font-medium text-gray-300 border border-brand-border/60 hover:border-brand-purple/30 transition-all"
                >
                  {client}
                </div>
              ))}
            </div>

            {/* Center: Colibird */}
            <div className="relative flex flex-col items-center">
              {/* Connection lines left */}
              <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-x-6 -translate-y-1/2 w-8 h-px bg-gradient-to-r from-transparent to-brand-purple/50" />
              {/* Connection lines right */}
              <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-6 -translate-y-1/2 w-8 h-px bg-gradient-to-l from-transparent to-brand-magenta/50" />

              <div className="glow-border rounded-2xl p-6 w-full text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-gradient opacity-5" />
                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-xl bg-brand-gradient mb-3">
                    <Cpu size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{t.platform.colibird}</h3>
                  <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                    {t.platform.props.map((prop) => (
                      <span key={prop} className="px-2 py-0.5 rounded-full bg-brand-purple/15 border border-brand-purple/20 text-purple-300 text-xs">
                        {prop}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Arrow indicators */}
              <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                <ArrowRight size={12} className="text-brand-purple" />
                <span>API-First</span>
                <ArrowRight size={12} className="text-brand-magenta" />
              </div>
            </div>

            {/* Right: Outputs */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-medium text-center mb-4">
                {lang === "es" ? "Soluciones" : "Solutions"}
              </p>
              {t.platform.outputs.map((output, i) => (
                <div
                  key={i}
                  className="rounded-xl px-4 py-3 text-center text-sm font-medium border transition-all"
                  style={{
                    background: "linear-gradient(135deg, rgba(123,47,190,0.08), rgba(196,24,126,0.08))",
                    borderColor: "rgba(123,47,190,0.2)",
                    color: "rgb(196, 180, 252)",
                  }}
                >
                  {output}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom tagline */}
          <div className="text-center mt-12">
            <p className="text-sm text-gray-500 italic">
              {lang === "es"
                ? "\"No construyas desde cero. Integrá Colibird y lanzá en días.\""
                : "\"Don't build from scratch. Integrate Colibird and launch in days.\""}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
