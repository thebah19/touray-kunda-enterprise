import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, HardHat, Home, MessageCircle, Plug, ShieldCheck, ShoppingBag, Store, Wrench } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CategoryCard } from "@/components/product/category-card";
import { ProductCard } from "@/components/product/product-card";
import { QuoteForm } from "@/components/site/quote-form";
import { SectionHeading } from "@/components/site/section-heading";
import { categories, galleryImages, products } from "@/lib/data";
import { PHONE_NUMBERS, phoneLink, whatsappLink } from "@/lib/utils";

const trust = [
  ["Quality Products", ShieldCheck],
  ["Fast Response", MessageCircle],
  ["Contractor Friendly", HardHat],
  ["Local Supplier", Store]
];

const buyers = [
  ["For Homeowners", Home, "Bathroom upgrades, lighting, repairs and home building material needs."],
  ["For Contractors", HardHat, "Project quantities, fast quote support and broad product sourcing."],
  ["For Plumbers", Wrench, "Pipes, fittings, mixers, sanitary ware and installation essentials."],
  ["For Electricians", Plug, "Switches, sockets, cables, breakers and lighting products."],
  ["For Hardware Buyers", ShoppingBag, "Useful stock for shops and material buyers across The Gambia."]
];

const reasons = [
  "Wide range of building, plumbing, and electrical products",
  "Quality materials for residential and commercial projects",
  "Easy WhatsApp ordering",
  "Fast quote response",
  "Helpful product guidance",
  "Trusted local supplier"
];

const faqs = [
  ["Do you sell plumbing and electrical materials?", "Yes. Touray Kunda Enterprise supplies plumbing products, pipes, fittings, electrical sockets, switches, breakers, lighting and related construction materials."],
  ["Can I request prices through WhatsApp?", "Yes. Use any WhatsApp button on the website to request price and availability quickly."],
  ["Do you supply contractors?", "Yes. We support homeowners, contractors, plumbers, electricians, shop owners and construction buyers."],
  ["Can I send a full material list?", "Yes. Add products to the quote list or paste your full list into the quote form or WhatsApp message."],
  ["Do you offer delivery?", "Delivery can be requested in the quote form. The team will confirm availability and delivery details."],
  ["Where are you located?", "Use the contact section to call or WhatsApp the store for the current location and directions in The Gambia."]
];

export default function HomePage() {
  const featured = products.filter((product) => product.featured);

  return (
    <>
      <section className="diagonal-cut relative overflow-hidden bg-gradient-to-br from-[#041b44] via-primary to-[#0ea5e9] text-white">
        <div className="construction-grid absolute inset-0 opacity-80" />
        <div className="absolute -right-28 top-24 size-96 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-white/8" />
        <div className="section-shell relative grid min-h-[720px] items-center gap-10 py-20 lg:grid-cols-[1fr_0.9fr]">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-black leading-[0.98] tracking-[-0.06em] md:text-6xl lg:text-7xl">
              Quality Building Materials, Plumbing & Electrical Supplies
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-sky-50 md:text-xl">
              Touray Kunda Enterprise supplies reliable construction, plumbing, sanitary ware, lighting, and electrical products for homes, businesses, and building projects across The Gambia.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="red">
                <Link href="/request-quote">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={whatsappLink("Hello Touray Kunda Enterprise, I would like to request a quote.")}>Chat on WhatsApp</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <Link href="/products">View Products</Link>
              </Button>
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {trust.map(([label, Icon]) => (
                <div key={label as string} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <Icon className="mb-3 size-6 text-sky-200" />
                  <p className="text-sm font-black">{label as string}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-x-8 bottom-3 top-10 rounded-[2.6rem] bg-sky-300/20 blur-3xl" />
            <div className="relative ml-auto max-w-[620px] rounded-[2.4rem] border border-white/25 bg-white/12 p-4 shadow-2xl shadow-sky-950/35 backdrop-blur">
              <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#061b3b] md:min-h-[560px]">
                <Image
                  src={`${featured[0].imageUrl}?auto=format&fit=crop&w=1200&q=86`}
                  alt="Modern bathroom and sanitary ware supplied by Touray Kunda Enterprise"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#041528]/35 via-[#041528]/10 to-primary/65" />
                <div className="absolute inset-x-5 top-5 flex flex-wrap gap-2">
                  {["Sanitary Ware", "Pipes", "Lighting", "Electricals"].map((item) => (
                    <span key={item} className="rounded-full border border-white/25 bg-white/18 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white backdrop-blur">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-5 left-5 right-5 rounded-[1.7rem] border border-white/20 bg-white/94 p-5 text-primary shadow-2xl backdrop-blur md:right-auto md:max-w-[29rem]">
                  <p className="font-display text-2xl font-black tracking-tight md:text-3xl">Build your quote list fast.</p>
                  <p className="mt-2 max-w-md text-sm font-bold leading-6 text-slate-600">
                    Choose products, send quantities on WhatsApp, and confirm price and availability before buying.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {featured.slice(0, 4).map((product) => (
                      <span key={product.slug} className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-black text-primary">
                        {product.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mx-auto -mt-8 grid max-w-[560px] gap-3 px-4 sm:grid-cols-2">
              {[
                ["Popular", featured[2]],
                ["In stock", featured[5]]
              ].map(([label, product]) => {
                const item = product as (typeof featured)[number];

                return (
                  <div key={item.slug} className="grid grid-cols-[5.5rem_1fr] overflow-hidden rounded-[1.4rem] border border-white/35 bg-white text-primary shadow-2xl shadow-sky-950/20">
                    <div className="relative min-h-28">
                      <Image
                        src={`${item.imageUrl}?auto=format&fit=crop&w=520&q=84`}
                        alt={item.name}
                        fill
                        sizes="6rem"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-sky-600">{label as string}</p>
                      <p className="mt-1 font-display text-lg font-black leading-tight">{item.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative z-10 ml-6 mt-4 inline-block rounded-3xl bg-white p-5 text-primary shadow-2xl">
              <p className="text-3xl font-black">+220</p>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-600">Local support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionHeading
          title="Everything You Need for Your Building Project"
          copy="From bathroom fittings and water closets to pipes, switches, lighting, and essential building materials, we make it easier to source the products you need quickly and confidently."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="section-shell">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <SectionHeading title="Popular Products" copy="Browse common products and add items to a quote list. Prices and availability are confirmed by the team." align="left" className="mb-0" />
            <Button asChild variant="outline">
              <Link href="/products">View All Products <ArrowRight data-icon="inline-end" /></Link>
            </Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.slice(0, 9).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionHeading title="Request a Quote" copy="Build a material list, add quantities, and request current prices without online payment." />
        <QuoteForm />
      </section>

      <section className="bg-primary py-20 text-white">
        <div className="section-shell">
          <SectionHeading
            title="Supplying Homes, Shops, Contractors & Construction Projects"
            copy="Whether you are building a new home, renovating a bathroom, wiring a shop, or supplying a construction site, Touray Kunda Enterprise provides reliable materials and quick support."
            tone="dark"
          />
          <div className="grid gap-4 md:grid-cols-5">
            {buyers.map(([title, Icon, copy]) => (
              <Card key={title as string} className="border-white/10 bg-white/10 text-white backdrop-blur">
                <CardContent className="p-5">
                  <Icon className="mb-4 size-8 text-sky-200" />
                  <h3 className="font-display text-lg font-black">{title as string}</h3>
                  <p className="mt-2 text-sm leading-6 text-sky-100">{copy as string}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f3f8fd] py-20">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-sky-200/45 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="section-shell relative rounded-[2.4rem] bg-gradient-to-br from-[#041528] via-primary to-[#0c7fc0] p-5 shadow-2xl shadow-sky-950/20 md:p-8">
          <div className="construction-grid absolute inset-0 rounded-[2.4rem] opacity-45" />
          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 text-white backdrop-blur md:p-8">
              <Badge className="mb-5 border-white/20 bg-white/15 text-white">Trusted Local Supplier</Badge>
              <h2 className="font-display text-4xl font-black leading-[0.95] tracking-[-0.05em] md:text-6xl">
                Why Customers Choose Touray Kunda
              </h2>
              <p className="mt-5 text-base leading-8 text-sky-100">
                Buyers need stock that is available, guidance that is practical, and a team that responds quickly. Touray Kunda Enterprise keeps sourcing simple for homeowners, tradespeople, and construction buyers.
              </p>
              <div className="mt-7 grid gap-3">
                {reasons.map((reason, index) => (
                  <div key={reason} className="group flex items-center gap-3 rounded-2xl border border-white/12 bg-white/10 p-4 transition hover:bg-white/16">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sky-300 text-primary">
                      <CheckCircle2 className="size-5" />
                    </span>
                    <p className="font-bold leading-6">{reason}</p>
                    <span className="ml-auto hidden font-display text-xl font-black text-white/20 sm:block">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 grid grid-cols-3 gap-3 border-t border-white/15 pt-6">
                {[
                  ["Fast", "Quote response"],
                  ["Wide", "Product range"],
                  ["Local", "Gambia supply"]
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl bg-white p-4 text-primary">
                    <p className="font-display text-2xl font-black">{value}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-sky-600">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[620px] overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl shadow-sky-950/25 backdrop-blur md:min-h-[700px]">
              <div className="grid h-full min-h-[596px] grid-cols-6 grid-rows-6 gap-3 md:min-h-[676px]">
                {galleryImages.slice(0, 6).map((item, index) => {
                  const placement = [
                    "col-span-6 row-span-3",
                    "col-span-3 row-span-2",
                    "col-span-3 row-span-2",
                    "col-span-2 row-span-1",
                    "col-span-2 row-span-1",
                    "col-span-2 row-span-1"
                  ][index];

                  return (
                    <div key={item.title} className={`group relative overflow-hidden rounded-[1.4rem] ${placement}`}>
                      <Image
                        src={`${item.imageUrl}?auto=format&fit=crop&w=${index === 0 ? 1200 : 640}&q=84`}
                        alt={item.title}
                        fill
                        sizes={index === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 18vw, 50vw"}
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#041528]/75 via-[#041528]/12 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                        <p className="max-w-[12rem] text-xs font-black uppercase tracking-[0.18em] text-white drop-shadow md:text-sm">
                          {item.title}
                        </p>
                        <span className="h-1.5 w-14 rounded-full bg-destructive" />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="absolute right-6 top-6 max-w-56 rounded-[1.4rem] border border-white/25 bg-white/92 p-5 text-primary shadow-2xl backdrop-blur">
                <p className="font-display text-3xl font-black">Quote-first</p>
                <p className="mt-2 text-sm font-bold leading-6 text-slate-600">No forced online payment. Send your material list and confirm price fast.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-sky-900/8">
            <SectionHeading title="Visit or Contact Touray Kunda Enterprise" align="left" className="mb-6" />
            <div className="grid gap-3 sm:grid-cols-3">
              {PHONE_NUMBERS.map((phone) => (
                <a key={phone} href={phoneLink(phone)} className="rounded-2xl border bg-sky-50 p-4 text-center font-black text-primary">
                  {phone}
                </a>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="red">
                <a href={whatsappLink()}>WhatsApp Button</a>
              </Button>
              <Button asChild variant="outline">
                <a href={phoneLink(PHONE_NUMBERS[0])}>Call Button</a>
              </Button>
            </div>
            <p className="mt-6 text-sm leading-7 text-muted-foreground">Location placeholder: The Gambia. Opening hours placeholder: Contact store for current hours.</p>
          </div>
          <div className="grid min-h-80 place-items-center rounded-[2rem] border border-sky-100 bg-gradient-to-br from-primary to-sky-500 p-8 text-center text-white shadow-xl">
            <div>
              <Store className="mx-auto mb-4 size-12" />
              <h3 className="font-display text-3xl font-black">Google Map Placeholder</h3>
              <p className="mt-3 text-sky-100">Embed the verified store map here when the business location is confirmed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionHeading title="What Customers Say" />
        <div className="grid gap-5 md:grid-cols-3">
          {["Quality products and fast response.", "Reliable supplier for plumbing and electrical materials.", "Good place for bathroom and construction materials."].map((quote) => (
            <Card key={quote}>
              <CardContent className="p-7">
                <Badge className="mb-5">Customer Feedback</Badge>
                <p className="text-lg font-bold leading-8">“{quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-shell pb-20">
        <SectionHeading title="Frequently Asked Questions" />
        <Accordion type="single" collapsible className="mx-auto max-w-3xl rounded-[1.5rem] border bg-white px-6 shadow-sm">
          {faqs.map(([question, answer]) => (
            <AccordionItem key={question} value={question}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
