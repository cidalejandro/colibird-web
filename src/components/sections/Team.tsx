"use client";

import { useLang } from "@/context/LanguageContext";
import { ExternalLink } from "lucide-react";

const avatarGradients = [
  "from-purple-500 to-blue-500",
  "from-pink-500 to-purple-500",
];

const initials = ["AC", "RV"];

export default function Team() {
  const { t, lang } = useLang();

  return (
    <section id="nosotros" className="py-24 relative overflow-hidden bg-brand-surface/20">
      <div className="section-glow-left" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            {t.team.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.team.headline}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t.team.sub}
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.team.members.map((member, i) => (
            <div key={i} className="glow-border rounded-2xl p-8 group">
              <div className="flex items-start gap-5 mb-5">
                {/* Avatar */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${avatarGradients[i]} flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg`}>
                  {initials[i]}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-0.5">{member.name}</h3>
                  <p className="gradient-text text-sm font-semibold">{member.role}</p>
                </div>
                {member.linkedin && member.linkedin !== "#" && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-brand-border text-gray-400 hover:text-blue-400 hover:border-blue-400/30 transition-all"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>

              {/* Decorative tag */}
              <div className="mt-5 pt-5 border-t border-brand-border/60 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-xs text-gray-500">
                  {lang === "es" ? "Co-Fundador de Colibird" : "Co-Founder at Colibird"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-brand-card border border-brand-border/60">
          <p className="text-lg text-gray-300 italic leading-relaxed">
            {lang === "es"
              ? "\"Traemos años de experiencia enfrentando el mismo desafío desde perspectivas distintas; juntos, crearemos la solución disruptiva que este problema necesita.\""
              : "\"We bring years of experience tackling the same challenge from different perspectives; together, we'll create the disruptive solution this problem needs.\""}
          </p>
          <p className="text-sm text-gray-500 mt-3">— Alejandro Cid, Co-Founder & CEO</p>
        </div>
      </div>
    </section>
  );
}
