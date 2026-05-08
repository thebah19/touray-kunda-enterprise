import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { AddProductDetail } from "@/components/product/product-detail-actions";
import { ProductArt } from "@/components/product/product-art";
import { ProductCard } from "@/components/product/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categories, getProduct, products } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.name}: ${product.description} Request price and availability from Touray Kunda Enterprise.`
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const category = categories.find((item) => item.slug === product.category);
  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);

  return (
    <section className="section-shell py-16">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <ProductArt category={product.category} label={product.name} imageUrl={product.imageUrl} large />
        <div className="flex flex-col justify-center">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge>{category?.name}</Badge>
            <Badge className="border-green-200 bg-green-50 text-green-700">{product.availability}</Badge>
          </div>
          <h1 className="font-display text-4xl font-black tracking-[-0.05em] text-primary md:text-6xl">{product.name}</h1>
          <p className="mt-5 text-xl font-bold text-slate-700">{product.spec}</p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">{product.description}</p>
          <div className="mt-7 rounded-[1.4rem] border bg-muted p-5">
            <h2 className="font-display text-xl font-black text-primary">Key Specifications</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.specs.map((spec) => (
                <li key={spec} className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-700">
                  {spec}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <AddProductDetail product={product} />
            <Button asChild variant="outline" size="lg">
              <a href={whatsappLink(`Hello, please send me the price and availability for ${product.name}.`)}>
                <MessageCircle data-icon="inline-start" /> WhatsApp Price
              </a>
            </Button>
          </div>
          <Link href="/products" className="mt-6 text-sm font-black text-sky-600">
            Back to products
          </Link>
        </div>
      </div>
      {related.length > 0 ? (
        <div className="mt-20">
          <h2 className="mb-6 font-display text-3xl font-black tracking-tight text-primary">Related Products</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
