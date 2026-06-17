import { SITE_URL } from "@/lib/site";

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    name: "Colibird",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    email: "hola@colibird.com.ar",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressCountry: "AR",
    },
    sameAs: ["https://www.linkedin.com/company/colibirdlatam/"],
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    name: "Colibird",
    url: SITE_URL,
    description:
      "Infraestructura financiera B2B modular para bancos y fintechs en LATAM.",
    publisher: {
      "@type": "Organization",
      name: "Colibird",
      url: SITE_URL,
    },
  };
}

export function productWebPageJsonLd(slug: string, name: string, description: string) {
  return {
    "@type": "WebPage",
    name: `${name} — Colibird`,
    description,
    url: `${SITE_URL}/productos/${slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Colibird",
      url: SITE_URL,
    },
    about: {
      "@type": "Product",
      name,
      description,
      brand: {
        "@type": "Brand",
        name: "Colibird",
      },
    },
  };
}
