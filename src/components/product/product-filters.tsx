"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/product-card";
import { categories, products } from "@/lib/data";

export function ProductFilters({ initialCategory }: { initialCategory?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory ?? "all");

  const filtered = useMemo(
    () =>
      products.filter((product) => {
        const matchesCategory = category === "all" || product.category === category;
        const haystack = `${product.name} ${product.spec} ${product.description}`.toLowerCase();
        return matchesCategory && haystack.includes(query.toLowerCase());
      }),
    [category, query]
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-[1.6rem] border bg-white p-4 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
          <label className="relative block">
            <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search toilets, pipes, sockets, lighting, tools..."
              className="pl-12"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            <Button variant={category === "all" ? "default" : "secondary"} size="sm" onClick={() => setCategory("all")}>
              All
            </Button>
            {categories.map((item) => (
              <Button
                key={item.slug}
                variant={category === item.slug ? "default" : "secondary"}
                size="sm"
                onClick={() => setCategory(item.slug)}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <div className="rounded-[1.6rem] border bg-muted p-10 text-center font-bold text-muted-foreground">
          No matching products yet. Send your material list on WhatsApp and the team will confirm availability.
        </div>
      ) : null}
    </div>
  );
}
