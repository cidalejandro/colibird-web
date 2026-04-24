"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  const columns = [
    { title: f.products, links: f.product_links },
    { title: f.resources, links: f.resource_links },
    { title: f.company, links: f.company_links },
  ];

  return (
    <footer className="dark-zone bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image src="/logo.png" alt="Colibird" width={120} height={36} className="h-8 w-auto object-contain" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-xs">
              {f.tagline}
            </p>
            <a
              href="https://www.linkedin.com/company/colibird"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex p-2.5 rounded-lg border border-brand-border text-gray-400 hover:text-blue-400 hover:border-blue-400/30 transition-all"
            >
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Nav columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>{f.copyright}</span>
          <div className="flex items-center gap-4">
            <a href="mailto:hola@colibird.com.ar" className="hover:text-gray-300 transition-colors">
              {f.email}
            </a>
            <span>·</span>
            <span>{f.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
