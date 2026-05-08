"use client";

import Link from "next/link";
import { FileText, MessageCircle, Phone } from "lucide-react";
import { PHONE_NUMBERS, phoneLink, whatsappLink } from "@/lib/utils";

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t bg-white/95 text-xs font-black shadow-2xl backdrop-blur md:hidden">
      <a href={phoneLink(PHONE_NUMBERS[0])} className="flex flex-col items-center gap-1 py-3 text-primary">
        <Phone className="size-5" /> Call
      </a>
      <a href={whatsappLink()} className="flex flex-col items-center gap-1 bg-[#15c464] py-3 text-white">
        <MessageCircle className="size-5" /> WhatsApp
      </a>
      <Link href="/request-quote" className="flex flex-col items-center gap-1 py-3 text-primary">
        <FileText className="size-5" /> Quote
      </Link>
    </div>
  );
}
