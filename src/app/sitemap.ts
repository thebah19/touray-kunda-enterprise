import type { MetadataRoute } from "next";
import { categories, products } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://touraykunda.gm";
  const now = new Date();

  const staticRoutes = ["", "/products", "/request-quote", "/about", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${siteUrl}/category/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7
  }));

  const productRoutes = products.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
