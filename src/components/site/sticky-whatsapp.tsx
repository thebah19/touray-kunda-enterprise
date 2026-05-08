import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/utils";

export function StickyWhatsApp() {
  return (
    <a
      href={whatsappLink("Hello Touray Kunda Enterprise, I need help with building materials.")}
      className="fixed bottom-24 right-5 z-40 hidden rounded-full bg-[#15c464] p-4 text-white shadow-2xl shadow-green-900/25 transition hover:scale-105 md:block"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}
