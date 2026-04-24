"use client";

import { useLang } from "@/context/LanguageContext";
import { AlertTriangle, Clock, Layers, TrendingDown } from "lucide-react";

const icons = [TrendingDown, Clock, Layers, AlertTriangle];
const gradients = [
  "from-red-500/20 to-orange-500/10",
  "from-yellow-500/20 to-orange-500/10",
  "from-blue-500/20 to-purple-500/10",
  "from-brand-purple/20 to-brand-magenta/10",
];
const iconColors = ["text-red-400", "text-yellow-400", "text-blue-400", "text-purple-400"];

export default function Problem() {
  const { t } = useLang();

  return (
    <section id="problema" className="py-24 relative overflow-hidden bg-brand-dark">
      <div className="section-glow-left" />
      <div className="section-glow-right" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            {t.problem.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.problem.headline}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.problem.sub}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.problem.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${gradients[i]} border border-white/5 card-dark group cursor-default`}
              >
                <div className={`inline-flex p-2.5 rounded-xl bg-white/5 mb-4 ${iconColors[i]}`}>
                  <Icon size={20} />
                </div>
                <div className="text-3xl font-black text-white mb-2">{item.stat}</div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
