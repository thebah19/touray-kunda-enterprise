import type { Metadata } from "next";
import { ProductFilters } from "@/components/product/product-filters";
import { SectionHeading } from "@/components/site/section-heading";

export const metadata: Metadata = {
  title: "Product Categories",
  description:
    "Explore building materials, plumbing supplies, pipes and fittings, sanitary ware, lighting and electrical product categories from Touray Kunda Enterprise in The Gambia.",
  keywords: [
    "building materials categories The Gambia",
    "plumbing supplies Gambia",
    "electrical materials Gambia",
    "sanitary ware Gambia",
    "pipes and fittings The Gambia"
  ]
};

export default function ProductsPage() {
  return (
    <section className="section-shell py-16">
      <SectionHeading
        title="Product Categories & Material Types"
        copy="Use this page as a guide to the kinds of products supplied. For orders, send your full material list with quantities, sizes, photos, or project details and the team will confirm availability and prices."
      />
      <ProductFilters />
    </section>
  );
}
