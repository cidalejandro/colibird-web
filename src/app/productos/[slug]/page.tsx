import { products } from "@/lib/products";
import ProductPage from "@/components/sections/ProductPage";
import { JsonLd } from "@/components/JsonLd";
import { productWebPageJsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  const name = product?.es.name ?? slug;
  const tagline = product?.es.tagline ?? "";
  const title = `${name} — Colibird`;

  return {
    title,
    description: tagline,
    alternates: {
      canonical: `/productos/${slug}`,
    },
    openGraph: {
      title,
      description: tagline,
      url: `/productos/${slug}`,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: tagline,
      images: ["/twitter-image"],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  const name = product?.es.name ?? slug;
  const description = product?.es.description ?? product?.es.tagline ?? "";

  return (
    <>
      <JsonLd data={productWebPageJsonLd(slug, name, description)} />
      <ProductPage slug={slug} />
    </>
  );
}
