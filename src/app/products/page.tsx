import type { Metadata } from "next";
import { ProductFilters } from "@/components/product/product-filters";
import { SectionHeading } from "@/components/site/section-heading";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse building materials, plumbing supplies, electrical products, lighting, toilets, sanitary ware, pipes and fittings from Touray Kunda Enterprise."
};

export default function ProductsPage() {
  return (
    <section className="section-shell py-16">
      <SectionHeading
        title="Products"
        copy="Search by product or filter by category. Add products to your quote list and confirm prices through Touray Kunda Enterprise."
      />
      <ProductFilters />
    </section>
  );
}
