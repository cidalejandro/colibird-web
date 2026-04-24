"use client";

import { useLang } from "@/context/LanguageContext";

const statColors = [
  "from-purple-500/20 to-purple-500/5",
  "from-blue-500/20 to-blue-500/5",
  "from-pink-500/20 to-pink-500/5",
  "from-green-500/20 to-green-500/5",
];
const statBorders = [
  "border-purple-500/20",
  "border-blue-500/20",
  "border-pink-500/20",
  "border-green-500/20",
];
const statTextColors = [
  "text-purple-300",
  "text-blue-300",
  "text-pink-300",
  "text-green-300",
];

export default function Market() {
  const { t, lang } = useLang();

  return (
    <section id="mercado" className="py-24 relative overflow-hidden bg-brand-dark">
      <div className="section-glow-right" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-semibold uppercase tracking-wider mb-4">
            {t.market.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.market.headline}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.market.sub}
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {t.market.stats.map((stat, i) => (
            <div
              key={i}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${statColors[i]} border ${statBorders[i]} text-center group`}
            >
              <div className={`text-3xl sm:text-4xl font-black mb-1 ${statTextColors[i]}`}>
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Countries table */}
        <div className="glow-border rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-brand-border/60 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">
              {lang === "es" ? "Volumen de Factoring por País (2029 proyectado)" : "Factoring Volume by Country (2029 projected)"}
            </h3>
            <span className="text-xs text-gray-500">{lang === "es" ? "Fuente: Pitch Deck Colibird" : "Source: Colibird Pitch Deck"}</span>
          </div>
          <div className="divide-y divide-brand-border/40">
            {t.market.countries.map((c, i) => {
              const pct = parseFloat(c.gdp);
              const barWidth = Math.min((pct / 15) * 100, 100);
              return (
                <div key={i} className="px-6 py-4 flex items-center gap-4 hover:bg-brand-surface/30 transition-colors">
                  <div className="w-28 text-sm font-medium text-white">{c.name}</div>
                  <div className="flex-1 h-2 bg-brand-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-gradient rounded-full transition-all duration-700"
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                  <div className="w-16 text-right text-sm font-semibold gradient-text-subtle">{c.vol}</div>
                  <div className="w-12 text-right text-xs text-gray-500">{c.gdp} GDP</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
