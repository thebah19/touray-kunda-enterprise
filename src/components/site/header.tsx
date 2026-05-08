"use client";

import Link from "next/link";
import { Menu, Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/site/logo";
import { PHONE_NUMBERS, phoneLink, whatsappLink } from "@/lib/utils";
import { useQuoteStore } from "@/store/quote-store";

const nav = [
  ["Home", "/"],
  ["Products", "/products"],
  ["Building Materials", "/category/building-materials"],
  ["Plumbing", "/category/plumbing-supplies"],
  ["Electricals", "/category/electrical-supplies"],
  ["Lighting", "/category/lighting-solutions"],
  ["Sanitary Ware", "/category/toilets-sanitary-ware"],
  ["Request Quote", "/request-quote"],
  ["Contact", "/contact"]
];

export function Header() {
  const count = useQuoteStore((state) => state.items.reduce((total, item) => total + item.quantity, 0));

  return (
    <header className="sticky top-0 z-40 border-b bg-white/92 backdrop-blur-xl">
      <div className="bg-primary text-white">
        <div className="section-shell flex min-h-10 flex-wrap items-center justify-center gap-3 py-2 text-center text-xs font-bold md:justify-between">
          <p>Quality Building Materials, Plumbing & Electrical Supplies in The Gambia</p>
          <div className="flex items-center gap-2">
            <a className="inline-flex items-center gap-1 hover:text-sky-200" href={phoneLink(PHONE_NUMBERS[0])}>
              <Phone className="size-3.5" /> {PHONE_NUMBERS[0]}
            </a>
            <a className="rounded-full bg-sky-400 px-3 py-1 text-primary" href={whatsappLink()}>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="section-shell flex h-20 items-center justify-between gap-5">
        <Logo />
        <nav className="hidden items-center gap-5 text-sm font-bold text-slate-700 xl:flex">
          {nav.slice(0, 7).map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-sky-600">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" size="sm">
            <Link href="/request-quote">
              <ShoppingBag data-icon="inline-start" />
              Quote List {count > 0 ? `(${count})` : ""}
            </Link>
          </Button>
          <Button asChild variant="red">
            <a href={whatsappLink("Hello Touray Kunda Enterprise, I would like to place an order on WhatsApp.")}>
              WhatsApp Order
            </a>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="xl:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
            <Logo />
            <nav className="mt-6 flex flex-col gap-1">
              {nav.map(([label, href]) => (
                <Link key={href} href={href} className="rounded-2xl px-4 py-3 text-base font-bold hover:bg-muted">
                  {label}
                </Link>
              ))}
            </nav>
            <Button asChild variant="red" size="lg" className="mt-auto">
              <a href={whatsappLink("Hello Touray Kunda Enterprise, I would like to order materials.")}>
                WhatsApp Order
              </a>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
