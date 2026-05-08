"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/data";
import { useQuoteStore } from "@/store/quote-store";

export function AddProductDetail({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useQuoteStore((state) => state.addItem);

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <div className="flex items-center gap-2 rounded-full border bg-white p-1">
        <Button variant="ghost" size="icon" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
          <Minus />
        </Button>
        <span className="min-w-10 text-center font-black">{quantity}</span>
        <Button variant="ghost" size="icon" onClick={() => setQuantity((value) => value + 1)}>
          <Plus />
        </Button>
      </div>
      <Button
        size="lg"
        variant="red"
        onClick={() => {
          addItem(product, quantity);
          toast.success(`${quantity} x ${product.name} added to quote list.`);
        }}
      >
        Add to Quote
      </Button>
    </div>
  );
}
