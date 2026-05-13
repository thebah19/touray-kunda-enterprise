"use client";

import { useRouter } from "next/navigation";
import { FileText } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/data";
import { useQuoteStore } from "@/store/quote-store";

export function AddProductDetail({ product }: { product: Product }) {
  const router = useRouter();
  const addItem = useQuoteStore((state) => state.addItem);

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button
        size="lg"
        variant="red"
        onClick={() => {
          addItem(product);
          toast.success(`${product.name} added to your quote request.`);
          router.push("/request-quote");
        }}
      >
        <FileText data-icon="inline-start" /> Request Quote
      </Button>
    </div>
  );
}
