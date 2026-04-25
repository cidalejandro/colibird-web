import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon-bird.png",
    apple: "/favicon-bird.png",
  },
  title: "Colibird — Infraestructura Financiera B2B para LATAM",
  description:
    "Bancos y fintechs construyen SCF, Confirming, eCheqs, OPP y Pagos B2B sobre la plataforma modular de Colibird. API-first, IA nativa, compliance by design.",
  keywords: "SCF, Supply Chain Finance, Factoring, eCheqs, fintech LATAM, infraestructura financiera, B2B payments",
  openGraph: {
    title: "Colibird — Infraestructura Financiera B2B para LATAM",
    description: "La plataforma que mueve el capital en LATAM.",
    url: "https://colibird.com.ar",
    siteName: "Colibird",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colibird — Infraestructura Financiera B2B para LATAM",
    description: "La plataforma que mueve el capital en LATAM.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-brand-dark antialiased">
        <LanguageProvider>
          <div className="noise-overlay" />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
