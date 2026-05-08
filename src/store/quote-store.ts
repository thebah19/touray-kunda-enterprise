"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/lib/data";

export type QuoteItem = {
  slug: string;
  name: string;
  category: string;
  quantity: number;
};

type QuoteStore = {
  items: QuoteItem[];
  addItem: (product: Pick<Product, "slug" | "name" | "category">, quantity?: number) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
};

export const useQuoteStore = create<QuoteStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product, quantity = 1) =>
        set((state) => {
          const existing = state.items.find((item) => item.slug === product.slug);
          if (existing) {
            return {
              items: state.items.map((item) =>
                item.slug === product.slug ? { ...item, quantity: item.quantity + quantity } : item
              )
            };
          }
          return { items: [...state.items, { ...product, quantity }] };
        }),
      removeItem: (slug) => set((state) => ({ items: state.items.filter((item) => item.slug !== slug) })),
      updateQuantity: (slug, quantity) =>
        set((state) => ({
          items: state.items.map((item) => (item.slug === slug ? { ...item, quantity: Math.max(1, quantity) } : item))
        })),
      clear: () => set({ items: [] })
    }),
    { name: "touray-kunda-quote-list" }
  )
);
