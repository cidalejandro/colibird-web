"use client";

import { useLang } from "@/context/LanguageContext";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function CTA() {
  const { t, lang } = useLang();

  return (
    <section id="contacto" className="py-24 relative overflow-hidden bg-brand-surface/30">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-brand-gradient opacity-10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-purple-300 text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          {lang === "es" ? "Disponible para nuevos partners" : "Available for new partners"}
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          {t.cta.headline}
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          {t.cta.sub}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="mailto:hola@colibird.com.ar"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-gradient text-white font-semibold text-base shadow-xl shadow-purple-900/40 hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
          >
            {t.cta.primary}
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="mailto:hola@colibird.com.ar"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-brand-border text-gray-300 font-semibold text-base hover:border-brand-purple/50 hover:text-white hover:bg-brand-card/50 transition-all duration-200"
          >
            <MessageSquare size={18} />
            {t.cta.secondary}
          </a>
        </div>

        {/* Contact details */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
          <a href="mailto:hola@colibird.com.ar" className="hover:text-gray-300 transition-colors">
            hola@colibird.com.ar
          </a>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <span>+54 911 3375 0788</span>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <span>Buenos Aires, Argentina</span>
        </div>
      </div>
    </section>
  );
}
