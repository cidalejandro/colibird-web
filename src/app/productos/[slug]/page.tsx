import { products } from "@/lib/products";
import ProductPage from "@/components/sections/ProductPage";
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
  return {
    title: `${name} — Colibird`,
    description: tagline,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ProductPage slug={slug} />;
}
