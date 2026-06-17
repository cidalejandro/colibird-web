import type { NextConfig } from "next";

/** Legacy Vite SPA paths (pre–Next.js migration) → current routes */
const legacyRedirects = [
  { source: "/click-to-pay", destination: "/productos/click-to-pay" },
  { source: "/contacto", destination: "/#contacto" },
  { source: "/nosotros", destination: "/#nosotros" },
  { source: "/desarrolladores", destination: "/#developers" },
  { source: "/echeq", destination: "/productos/echeqs" },
  { source: "/radian", destination: "/productos/radian" },
  { source: "/scf", destination: "/productos/scf" },
  { source: "/argentina", destination: "/productos/tax-engine" },
  { source: "/colombia", destination: "/productos/radian" },
  { source: "/productos", destination: "/#productos" },
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects.map(({ source, destination }) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
