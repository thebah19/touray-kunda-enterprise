"use client";

import Link from "next/link";
import { MessageCircle, Plus, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductArt } from "@/components/product/product-art";
import { categories, type Product } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";
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
          <Badge className="border-green-200 bg-green-50 text-green-700">{product.availability}</Badge>
        </div>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-display text-xl font-black tracking-tight text-primary hover:text-sky-600">{product.name}</h3>
        </Link>
        <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">{product.spec}</p>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <Button
            size="sm"
            onClick={() => {
              addItem(product);
              toast.success(`${product.name} added to quote list.`);
            }}
          >
            <Plus data-icon="inline-start" /> Add to Quote
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={whatsappLink(`Hello, please send me the price and availability for ${product.name}.`)}>
              <MessageCircle data-icon="inline-start" /> Price
            </a>
          </Button>
        </div>
        <Link href="/request-quote" className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-primary">
          <ShoppingBag className="size-4" /> Quote model, no online payment
        </Link>
      </CardContent>
    </Card>
  );
}
