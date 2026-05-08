import type { Metadata } from "next";
import { MessageCircle, Phone, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";
import { PHONE_NUMBERS, phoneLink, whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Touray Kunda Enterprise by phone or WhatsApp for building materials, plumbing, IFAN pipe and fitting requests, electricals and sanitary ware in The Gambia."
};

export default function ContactPage() {
  return (
    <section className="section-shell py-16">
      <SectionHeading
        title="Visit or Contact Touray Kunda Enterprise"
        copy="Call, WhatsApp or send a quote request for current product prices and availability."
      />
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Card>
          <CardContent className="flex flex-col gap-4 p-7">
            {PHONE_NUMBERS.map((phone) => (
              <a key={phone} href={phoneLink(phone)} className="flex items-center gap-3 rounded-2xl border bg-sky-50 p-4 font-black text-primary">
                <Phone className="size-5" /> {phone}
              </a>
            ))}
            <Button asChild variant="red" size="lg">
              <a href={whatsappLink("Hello Touray Kunda Enterprise, I would like to contact the store.")}>
                <MessageCircle data-icon="inline-start" /> Chat on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={phoneLink(PHONE_NUMBERS[0])}>Call Now</a>
            </Button>
          </CardContent>
        </Card>
        <div className="grid min-h-96 place-items-center rounded-[2rem] border bg-gradient-to-br from-primary to-sky-500 p-8 text-center text-white shadow-xl">
          <div>
            <Store className="mx-auto mb-4 size-14" />
            <h2 className="font-display text-4xl font-black tracking-tight">Location Placeholder</h2>
            <p className="mt-3 max-w-md text-sky-50">Add the verified Google Map embed and opening hours when confirmed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
