import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Colibird — Infraestructura Financiera B2B para LATAM",
  description:
    "Bancos y fintechs construyen SCF, Confirming, eCheqs, OPP y Pagos B2B sobre la plataforma modular de Colibird. API-first, IA nativa, compliance by design.",
  keywords: "SCF, Supply Chain Finance, Factoring, eCheqs, fintech LATAM, infraestructura financiera, B2B payments",
  alternates: {
    canonical: "/",
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
  openGraph: {
    title: "Colibird — Infraestructura Financiera B2B para LATAM",
    description: "La plataforma que mueve el capital en LATAM.",
    url: SITE_URL,
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
