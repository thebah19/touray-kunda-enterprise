import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { categoryIcons, type Category } from "@/lib/data";
import { ProductArt } from "@/components/product/product-art";

export function CategoryCard({ category }: { category: Category }) {
  const Icon = categoryIcons[category.icon];
  return (
    <Card className="group overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-900/10">
      <ProductArt category={category.slug} label={category.imageHint} imageUrl={category.imageUrl} className="m-3 mb-0" />
      <CardContent className="p-5">
        <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
          <Icon className="size-6" />
        </div>
        <h3 className="font-display text-xl font-black tracking-tight text-primary">{category.name}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">{category.description}</p>
        <Link href={`/category/${category.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-sky-600">
          View Products <ArrowRight className="size-4 transition group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
}
