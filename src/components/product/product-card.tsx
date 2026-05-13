"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductArt } from "@/components/product/product-art";
import { categories, type Product } from "@/lib/data";
import { useQuoteStore } from "@/store/quote-store";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useQuoteStore((state) => state.addItem);
  const category = categories.find((item) => item.slug === product.category);

  return (
    <Card className="group overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-900/10">
      <Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`}>
        <ProductArt category={product.category} label={product.name} imageUrl={product.imageUrl} className="m-3 mb-0" />
      </Link>
      <CardContent className="p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge>{category?.name ?? "Product"}</Badge>
        </div>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-display text-xl font-black tracking-tight text-primary hover:text-sky-600">{product.name}</h3>
        </Link>
        <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">{product.spec}</p>
        <div className="mt-5">
          <Button
            size="sm"
            className="w-full"
            onClick={() => {
              addItem(product);
              toast.success(`${product.name} added to your quote request.`);
            }}
          >
            <FileText data-icon="inline-start" /> Request Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
