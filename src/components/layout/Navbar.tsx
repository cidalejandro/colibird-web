"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { Menu, X, ChevronDown, BarChart3, ArrowRight, FileText, CreditCard, Zap, Globe, Database, Shield, Link2, Bot } from "lucide-react";

const productCategories = [
  {
    nameEs: "Financiamiento",
    nameEn: "Financing",
    items: [
      { nameEs: "Supply Chain Finance", nameEn: "Supply Chain Finance", slug: "scf", icon: BarChart3 },
      { nameEs: "Confirming", nameEn: "Confirming", slug: "confirming", icon: ArrowRight },
      { nameEs: "eCheqs", nameEn: "eCheqs", slug: "echeqs", icon: FileText },
      { nameEs: "OPP + Cupones de Tarjeta", nameEn: "OPP + Card Receivables", slug: "opp-card", icon: CreditCard },
    ],
  },
  {
    nameEs: "Pagos B2B",
    nameEn: "B2B Payments",
    items: [
      { nameEs: "Click to Pay B2B", nameEn: "Click to Pay B2B", slug: "click-to-pay", icon: Zap },
      { nameEs: "Gateway de Pagos B2B", nameEn: "B2B Payment Gateway", slug: "gateway-b2b", icon: Globe },
    ],
  },
  {
    nameEs: "Compliance & Data",
    nameEn: "Compliance & Data",
    items: [
      { nameEs: "RADIAN Colombia", nameEn: "RADIAN Colombia", slug: "radian", icon: Database },
      { nameEs: "e-Invoicing", nameEn: "e-Invoicing", slug: "e-invoicing", icon: FileText },
      { nameEs: "Motor Impuestos FCE (AR)", nameEn: "FCE Tax Engine (AR)", slug: "tax-engine", icon: FileText },
    ],
  },
  {
    nameEs: "Infraestructura",
    nameEn: "Infrastructure",
    items: [
      { nameEs: "DecisionHub · Risk Engine", nameEn: "DecisionHub · Risk Engine", slug: "decisionhub", icon: Shield },
      { nameEs: "TrustPath · Onboarding", nameEn: "TrustPath · Onboarding", slug: "trustpath", icon: Shield },
      { nameEs: "API Integration Layer", nameEn: "API Integration Layer", slug: "api-layer", icon: Link2 },
      { nameEs: "LMCP", nameEn: "LMCP", slug: "lmcp", icon: Bot },
    ],
  },
];

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setProductsOpen(false), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/95 backdrop-blur-xl border-b border-brand-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Colibird" width={140} height={40} className="h-9 w-auto object-contain" priority />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Products mega-dropdown */}
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-brand-purple/8">
                {t.nav.products}
                <ChevronDown size={14} className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
              </button>

              {productsOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-brand-card border border-brand-border rounded-2xl shadow-2xl shadow-black/10 p-5 animate-fade-in"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-2 gap-5">
                    {productCategories.map((cat) => (
                      <div key={cat.nameEs}>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-purple mb-2 px-1">
                          {lang === "es" ? cat.nameEs : cat.nameEn}
                        </p>
                        <div className="space-y-0.5">
                          {cat.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.slug}
                                href={`/productos/${item.slug}`}
                                onClick={() => setProductsOpen(false)}
                                className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg transition-all group hover:bg-brand-purple/8"
                              >
                                <div className="w-6 h-6 rounded-md bg-brand-purple/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gradient group-hover:text-white transition-all">
                                  <Icon size={12} className="text-brand-purple group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-sm font-medium">
                                  {lang === "es" ? item.nameEs : item.nameEn}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-brand-border flex items-center justify-between">
                    <span className="text-xs text-brand-text-muted">
                      {lang === "es" ? "13 módulos · Todos API-first" : "13 modules · All API-first"}
                    </span>
                    <Link
                      href="/#productos"
                      onClick={() => setProductsOpen(false)}
                      className="text-xs font-semibold text-brand-purple hover:text-brand-violet transition-colors"
                    >
                      {lang === "es" ? "Ver todos →" : "View all →"}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/#plataforma" className="px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-brand-purple/8">
              {t.nav.platform}
            </Link>
            <Link href="/#lmcp" className="px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-brand-purple/8">
              {t.nav.lmcp}
            </Link>
            <Link href="/#developers" className="px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-brand-purple/8">
              {t.nav.developers}
            </Link>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center bg-brand-card border border-brand-border rounded-full p-0.5 text-xs font-medium">
              <button
                onClick={() => setLang("es")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  lang === "es" ? "bg-brand-gradient text-white" : "hover:text-brand-purple"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  lang === "en" ? "bg-brand-gradient text-white" : "hover:text-brand-purple"
                }`}
              >
                EN
              </button>
            </div>

            <Link
              href="/#contacto"
              className="px-4 py-2 text-sm font-semibold rounded-xl bg-brand-gradient text-white hover:opacity-90 transition-opacity shadow-lg shadow-purple-900/20"
            >
              {t.nav.cta}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 transition-colors rounded-lg hover:bg-brand-purple/8"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-brand-border mt-2 pt-4 space-y-1 animate-fade-in">
            <p className="px-3 pt-1 pb-0.5 text-[10px] font-semibold uppercase tracking-widest text-brand-purple">
              {t.nav.products}
            </p>
            {productCategories.flatMap((cat) =>
              cat.items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/productos/${item.slug}`}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-sm rounded-lg hover:bg-brand-purple/8 transition-colors"
                >
                  {lang === "es" ? item.nameEs : item.nameEn}
                </Link>
              ))
            )}
            <div className="border-t border-brand-border my-2" />
            <Link href="/#plataforma" onClick={() => setOpen(false)} className="block px-3 py-2 text-sm rounded-lg hover:bg-brand-purple/8 transition-colors">
              {t.nav.platform}
            </Link>
            <Link href="/#lmcp" onClick={() => setOpen(false)} className="block px-3 py-2 text-sm rounded-lg hover:bg-brand-purple/8 transition-colors">
              {t.nav.lmcp}
            </Link>
            <Link href="/#developers" onClick={() => setOpen(false)} className="block px-3 py-2 text-sm rounded-lg hover:bg-brand-purple/8 transition-colors">
              {t.nav.developers}
            </Link>
            <div className="flex items-center gap-3 px-3 pt-3">
              <div className="flex items-center bg-brand-card border border-brand-border rounded-full p-0.5 text-xs font-medium">
                <button onClick={() => setLang("es")} className={`px-2.5 py-1 rounded-full transition-all ${lang === "es" ? "bg-brand-gradient text-white" : ""}`}>ES</button>
                <button onClick={() => setLang("en")} className={`px-2.5 py-1 rounded-full transition-all ${lang === "en" ? "bg-brand-gradient text-white" : ""}`}>EN</button>
              </div>
              <Link href="/#contacto" className="flex-1 text-center px-4 py-2 text-sm font-semibold rounded-xl bg-brand-gradient text-white">
                {t.nav.cta}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
