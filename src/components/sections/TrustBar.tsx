"use client";

import { useLang } from "@/context/LanguageContext";
import { Building2 } from "lucide-react";

export default function TrustBar() {
  const { t } = useLang();

  return (
    <section className="py-12 border-y border-brand-border/40 bg-brand-surface/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-gray-500 uppercase tracking-widest font-medium mb-6">
          {t.trust.label}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {t.trust.partners.map((partner, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-card border border-brand-border/60 text-gray-400 text-sm hover:border-brand-purple/30 hover:text-gray-200 transition-all duration-300"
            >
              <Building2 size={14} className="text-brand-purple/70" />
              <span className="font-medium">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
