"use client";

import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { TrendingUp, Clock, MapPin, DollarSign, Send, Lock } from "lucide-react";

const statIcons = [TrendingUp, DollarSign, Clock, MapPin];

export default function Investors() {
  const { t, lang } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", org: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="inversores" className="py-24 relative overflow-hidden bg-brand-dark">
      <div className="section-glow-left" />
      <div className="section-glow-right" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-semibold uppercase tracking-wider mb-4">
            {t.investors.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.investors.headline}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.investors.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Stats + info */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {t.investors.stats.map((stat, i) => {
                const Icon = statIcons[i];
                return (
                  <div key={i} className="card-dark rounded-xl p-5 border border-brand-border/60">
                    <Icon size={18} className="text-brand-purple mb-3" />
                    <div className="text-2xl font-black text-white mb-0.5">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* What we're building */}
            <div className="card-dark rounded-xl p-6 border border-brand-border/60">
              <h3 className="text-sm font-semibold text-white mb-3">
                {lang === "es" ? "Dónde va el capital" : "Use of funds"}
              </h3>
              <div className="space-y-3">
                {[
                  { label: lang === "es" ? "Equipo técnico inicial" : "Initial technical team", pct: 45 },
                  { label: lang === "es" ? "Desarrollo MVP" : "MVP development", pct: 25 },
                  { label: lang === "es" ? "Legal & Compliance" : "Legal & Compliance", pct: 15 },
                  { label: lang === "es" ? "Infraestructura cloud" : "Cloud infrastructure", pct: 10 },
                  { label: lang === "es" ? "Marketing & ventas" : "Marketing & sales", pct: 5 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-32 text-xs text-gray-400 flex-shrink-0">{item.label}</div>
                    <div className="flex-1 h-1.5 bg-brand-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand-gradient rounded-full"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-400 w-8 text-right">{item.pct}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="card-dark rounded-xl p-6 border border-brand-border/60">
              <h3 className="text-sm font-semibold text-white mb-4">
                {lang === "es" ? "Hitos clave" : "Key milestones"}
              </h3>
              <div className="space-y-3">
                {[
                  { period: lang === "es" ? "Mes 6" : "Month 6", text: lang === "es" ? "MVP en Colombia" : "MVP in Colombia" },
                  { period: lang === "es" ? "Mes 18" : "Month 18", text: lang === "es" ? "400+ proveedores activos" : "400+ active suppliers" },
                  { period: lang === "es" ? "Mes 36" : "Month 36", text: lang === "es" ? "Expansión a Brasil" : "Brazil expansion" },
                  { period: lang === "es" ? "Mes 60" : "Month 60", text: lang === "es" ? "14,000+ proveedores · $825M vol." : "14,000+ suppliers · $825M vol." },
                ].map((m, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-16 flex-shrink-0">
                      <span className="text-xs font-mono text-purple-400">{m.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-purple flex-shrink-0" />
                      <span className="text-xs text-gray-300">{m.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glow-border rounded-2xl p-8">
            {!submitted ? (
              <>
                <h3 className="text-xl font-bold text-white mb-1">{t.investors.form_title}</h3>
                <p className="text-gray-400 text-sm mb-6">{t.investors.form_sub}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5">{t.investors.form_name}</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple/60 transition-colors"
                      placeholder={lang === "es" ? "Ej: Juan Pérez" : "E.g. John Smith"}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5">{t.investors.form_email}</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple/60 transition-colors"
                      placeholder="nombre@fondo.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5">{t.investors.form_org}</label>
                    <input
                      type="text"
                      required
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                      className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple/60 transition-colors"
                      placeholder={lang === "es" ? "Ej: Sequoia Capital" : "E.g. Sequoia Capital"}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand-gradient text-white font-semibold text-sm hover:opacity-90 transition-all disabled:opacity-60 shadow-lg shadow-purple-900/30"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={15} />
                        {t.investors.form_submit}
                      </>
                    )}
                  </button>
                </form>

                <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                  <Lock size={11} />
                  {t.investors.form_privacy}
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {lang === "es" ? "¡Mensaje enviado!" : "Message sent!"}
                </h3>
                <p className="text-gray-400 text-sm">
                  {lang === "es"
                    ? "Nos pondremos en contacto en las próximas 48 horas."
                    : "We'll be in touch within the next 48 hours."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
