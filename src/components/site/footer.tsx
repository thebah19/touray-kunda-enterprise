import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/data";
import { PHONE_NUMBERS, whatsappLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#041528] text-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <Link href="/" className="group flex items-center gap-4" aria-label="Touray Kunda Enterprise home">
            <span className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-sky-950/30 ring-1 ring-white/15">
              <Image src="/tke-logo.png" alt="B.S.T Building Materials Plumbing & Electricals logo" width={64} height={64} className="size-full object-contain p-1.5" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-2xl font-black tracking-[-0.05em] text-white">
                Touray Kunda
              </span>
              <span className="mt-1 block text-sm font-extrabold uppercase tracking-[0.26em] text-sky-300">
                Enterprise
              </span>
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-7 text-slate-300">
            Touray Kunda Enterprise supplies building materials, plumbing, sanitary ware, lighting and electrical
            products for homes, shops, contractors and construction projects across The Gambia.
          </p>
          <Button asChild variant="red" className="w-fit">
            <a href={whatsappLink("Hello, I would like to send a material list for quotation.")}>Send Material List</a>
          </Button>
        </div>
        <FooterColumn title="Quick Links" links={[["Products", "/products"], ["Request Quote", "/request-quote"], ["About", "/about"], ["Contact", "/contact"]]} />
        <FooterColumn title="Categories" links={categories.slice(0, 5).map((category) => [category.name, `/category/${category.slug}`])} />
        <div>
          <h3 className="mb-4 font-display font-black">Contact</h3>
          <div className="flex flex-col gap-2 text-sm text-slate-300">
            {PHONE_NUMBERS.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-sky-300">
                {phone}
              </a>
            ))}
            <span>The Gambia</span>
            <span>Opening hours: Contact store</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Touray Kunda Enterprise. B.S.T Building Materials, Plumbing & Electricals.
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3 className="mb-4 font-display font-black">{title}</h3>
      <div className="flex flex-col gap-2 text-sm text-slate-300">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="hover:text-sky-300">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
