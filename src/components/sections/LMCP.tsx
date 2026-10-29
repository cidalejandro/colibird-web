"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import {
  ArrowRight,
  Bot,
  Building2,
  ExternalLink,
  Lock,
  Mail,
  MessageSquare,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

const toolPills = ["Mail", "Calendar", "Teams", "Slack", "OneDrive", "Excel", "Notion", "iMessage"];

const LMCP_SITE_URL = "https://local-mcp.com/?ref=colibird";

export default function LMCP() {
  const { t } = useLang();

  return (
    <section id="lmcp" className="py-24 relative overflow-hidden bg-brand-surface/30">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product hero */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/25 text-fuchsia-300 text-xs font-semibold uppercase tracking-wider mb-5">
              <Sparkles size={12} />
              {t.lmcp.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
              {t.lmcp.headline}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">{t.lmcp.sub}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {toolPills.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-lg bg-brand-card border border-brand-border text-xs text-gray-400 font-medium"
                >
                  {tool}
                </span>
              ))}
              <span className="px-2.5 py-1 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 text-xs text-fuchsia-300 font-medium">
                +260
              </span>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="https://local-mcp.com/get?ref=colibird"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-gradient text-white font-semibold shadow-lg shadow-purple-900/30 hover:opacity-90 transition-all"
              >
                {t.lmcp.cta_download}
                <ExternalLink size={16} />
              </a>
              <a
                href={LMCP_SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-fuchsia-500/30 text-fuchsia-200 font-semibold hover:border-fuchsia-500/50 hover:text-white transition-all"
              >
                {t.lmcp.cta_site}
                <ExternalLink size={16} />
              </a>
              <Link
                href="/productos/lmcp"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-brand-border text-gray-300 font-semibold hover:border-brand-purple/40 hover:text-white transition-all"
              >
                {t.lmcp.cta_learn}
                <ArrowRight size={16} />
              </Link>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              {t.lmcp.free_note}
              {" · "}
              <a
                href={LMCP_SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuchsia-300/90 hover:text-fuchsia-200 underline underline-offset-2"
              >
                local-mcp.com
              </a>
            </p>
          </div>

          <div className="glow-border rounded-2xl p-6 bg-brand-card/80">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-brand-border">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <div className="w-3 h-3 rounded-full bg-green-400/80" />
              <span className="ml-2 text-xs text-gray-500 font-mono">local-mcp · agent</span>
            </div>
            <div className="space-y-4 font-mono text-sm">
              <div className="text-gray-500">{/* user */}&gt; {t.lmcp.demo_prompt}</div>
              <div className="pl-3 border-l-2 border-fuchsia-500/40 space-y-2 text-gray-400">
                <div className="flex items-center gap-2 text-fuchsia-300/90">
                  <Mail size={12} /> list_emails
                </div>
                <div className="flex items-center gap-2 text-fuchsia-300/90">
                  <MessageSquare size={12} /> teams_read_channel_messages
                </div>
                <div className="flex items-center gap-2 text-fuchsia-300/90">
                  <Zap size={12} /> daily_brief
                </div>
              </div>
              <div className="text-gray-300 text-xs leading-relaxed rounded-lg bg-brand-muted/50 p-3 border border-brand-border">
                {t.lmcp.demo_response}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {t.lmcp.stats.map((stat, i) => (
            <div key={i} className="card-dark rounded-xl p-5 border border-brand-border text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Financial use case — generic, from agentic banking pattern */}
        <div className="rounded-2xl border border-brand-border bg-brand-card/60 overflow-hidden">
          <div className="p-8 sm:p-10 border-b border-brand-border">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 rounded-xl bg-brand-gradient text-white">
                <Building2 size={22} />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2 block">
                  {t.lmcp.fin.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{t.lmcp.fin.headline}</h3>
                <p className="text-gray-400 leading-relaxed max-w-3xl">{t.lmcp.fin.sub}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-0 md:divide-x divide-brand-border">
            <div className="p-8 sm:p-10">
              <h4 className="text-sm font-semibold text-red-300/90 uppercase tracking-wide mb-3 flex items-center gap-2">
                {t.lmcp.fin.problem_title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-8">{t.lmcp.fin.problem}</p>
              <h4 className="text-sm font-semibold text-purple-300/90 uppercase tracking-wide mb-2">
                {t.lmcp.fin.solution_title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">{t.lmcp.fin.solution}</p>
              <h4 className="text-sm font-semibold text-green-300/90 uppercase tracking-wide mb-2 flex items-center gap-2">
                <Bot size={14} />
                {t.lmcp.fin.api_path_title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">{t.lmcp.fin.api_path}</p>
              <h4 className="text-sm font-semibold text-cyan-300/90 uppercase tracking-wide mb-2">
                {t.lmcp.fin.direct_path_title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{t.lmcp.fin.direct_path}</p>
              <h5 className="text-xs font-semibold text-white/80 uppercase tracking-wide mb-2">
                {t.lmcp.fin.direct_path_how_title}
              </h5>
              <ol className="space-y-2">
                {t.lmcp.fin.direct_path_steps.map((step, i) => (
                  <li key={i} className="flex gap-2 text-xs text-gray-400 leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-muted text-purple-300 text-[10px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="p-8 sm:p-10 bg-brand-surface/40">
              <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <Shield size={14} className="text-purple-300" />
                {t.lmcp.fin.security_title}
              </h4>
              <ul className="space-y-3">
                {t.lmcp.fin.security_bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-400 leading-relaxed">
                    <Lock size={14} className="flex-shrink-0 text-purple-400/70 mt-0.5" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-8 sm:p-10 border-t border-brand-border bg-brand-surface/20">
            <h4 className="text-lg font-semibold text-white mb-6 text-center">{t.lmcp.fin.journeys_title}</h4>
            <div className="grid md:grid-cols-3 gap-5">
              {t.lmcp.fin.journeys.map((j, i) => (
                <div key={i} className="rounded-xl border border-brand-border bg-brand-card p-5">
                  <div className="text-xs font-semibold text-purple-300 uppercase tracking-wide mb-3">{j.persona}</div>
                  <blockquote className="text-sm text-white italic mb-4 border-l-2 border-fuchsia-500/40 pl-3">
                    &ldquo;{j.prompt}&rdquo;
                  </blockquote>
                  <ol className="space-y-2">
                    {j.steps.map((step, k) => (
                      <li key={k} className="flex gap-2 text-xs text-gray-400 leading-relaxed">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-muted text-purple-300 text-[10px] font-bold flex items-center justify-center">
                          {k + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-gray-500 text-center max-w-3xl mx-auto leading-relaxed">
              {t.lmcp.fin.framing_note}
            </p>
          </div>

          <div className="p-8 sm:p-10 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">{t.lmcp.fin.cta_text}</p>
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-gradient text-white font-semibold text-sm hover:opacity-90 transition-all whitespace-nowrap"
            >
              {t.lmcp.fin.cta_button}
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
