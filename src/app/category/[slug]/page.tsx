import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductFilters } from "@/components/product/product-filters";
import { SectionHeading } from "@/components/site/section-heading";
import { categories, getCategory } from "@/lib/data";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: `${category.name} from Touray Kunda Enterprise in The Gambia. ${category.description}`,
    keywords: [
      `${category.name} The Gambia`,
      `${category.name} Gambia`,
      "Touray Kunda Enterprise",
      "building materials supplier Gambia"
    ]
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <section className="section-shell py-16">
      <SectionHeading title={category.name} copy={category.description} />
      <ProductFilters initialCategory={category.slug} />
    </section>
  );
}
