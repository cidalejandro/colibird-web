"use client";

import { useLang } from "@/context/LanguageContext";
import { Code2, Puzzle, Rocket } from "lucide-react";

const stepIcons = [Code2, Puzzle, Rocket];
function CodeBlock() {
  return (
    <pre className="text-gray-300 leading-relaxed text-xs sm:text-sm whitespace-pre">
      <span className="text-gray-500">{"// Iniciá un programa SCF en minutos"}</span>{"\n"}
      <span className="text-purple-400">{"const"}</span>{" colibird = "}<span className="text-blue-400">{"new"}</span>{" "}<span className="text-yellow-300">{"Colibird"}</span>{"({"}{"\n"}
      {"  apiKey: "}<span className="text-green-400">{"process.env.COLIBIRD_API_KEY"}</span>{","}{"\n"}
      {"  country: "}<span className="text-orange-300">{'"CO"'}</span>{",  "}<span className="text-gray-500">{"// CO · AR · BR · CL · MX"}</span>{"\n"}
      {"});"}{"\n\n"}
      <span className="text-gray-500">{"// Creá un programa SCF"}</span>{"\n"}
      <span className="text-purple-400">{"const"}</span>{" program = "}<span className="text-blue-400">{"await"}</span>{" colibird.scf."}<span className="text-yellow-300">{"createProgram"}</span>{"({"}{"\n"}
      {"  buyer:    "}<span className="text-orange-300">{'"corp_id_123"'}</span>{","}{"\n"}
      {"  currency: "}<span className="text-orange-300">{'"COP"'}</span>{","}{"\n"}
      {"  modules:  ["}<span className="text-orange-300">{'"radian"'}</span>{", "}<span className="text-orange-300">{'"risk_engine"'}</span>{", "}<span className="text-orange-300">{'"onboarding"'}</span>{"],"}{"\n"}
      {"});"}{"\n\n"}
      <span className="text-gray-500">{"// Procesá facturas con IA"}</span>{"\n"}
      <span className="text-purple-400">{"const"}</span>{" result = "}<span className="text-blue-400">{"await"}</span>{" program."}<span className="text-yellow-300">{"submitInvoice"}</span>{"({"}{"\n"}
      {"  cufe:   "}<span className="text-orange-300">{'"CUFE_RADIAN_HERE"'}</span>{","}{"\n"}
      {"  amount: "}<span className="text-green-400">{"50000000"}</span>{","}{"\n"}
      {"});"}{"\n\n"}
      <span className="text-gray-500">{"// result: { status: 'approved', rate: 0.95, settlement: 'T+1' }"}</span>
    </pre>
  );
}

const stepColors = [
  "border-purple-500/30 bg-purple-500/10 text-purple-300",
  "border-blue-500/30 bg-blue-500/10 text-blue-300",
  "border-green-500/30 bg-green-500/10 text-green-300",
];

export default function HowItWorks() {
  const { t, lang } = useLang();

  return (
    <section id="developers" className="py-24 relative overflow-hidden bg-brand-surface/20">
      <div className="section-glow-left" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            {t.how.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.how.headline}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t.how.sub}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gradient-to-r from-brand-purple/40 via-brand-magenta/40 to-brand-purple/40" />
          <div className="hidden md:block absolute top-10 left-2/3 right-0 h-px bg-gradient-to-r from-brand-magenta/40 to-transparent" />
          <div className="hidden md:block absolute top-10 left-0 right-2/3 h-px bg-gradient-to-l from-brand-purple/40 to-transparent" />

          {t.how.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={i} className="relative text-center group">
                {/* Step number circle */}
                <div className="relative inline-flex mb-6">
                  <div className={`w-20 h-20 rounded-full border-2 flex items-center justify-center ${stepColors[i]} transition-all group-hover:scale-110 duration-300`}>
                    <Icon size={28} />
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand-gradient text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm max-w-xs mx-auto">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* API preview */}
        <div className="mt-16 max-w-3xl mx-auto glow-border rounded-2xl overflow-hidden">
          <div className="bg-slate-800 border-b border-slate-700 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-2 text-xs text-slate-400 font-mono">colibird-api · example.js</span>
          </div>
          <div className="p-6 code-dark font-mono text-sm overflow-x-auto rounded-b-2xl">
            <CodeBlock />
          </div>
        </div>

        <div className="text-center mt-6">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm text-purple-300 font-medium hover:text-purple-200 transition-colors"
          >
            {lang === "es" ? "Accedé al Sandbox →" : "Access the Sandbox →"}
          </a>
        </div>
      </div>
    </section>
  );
}
