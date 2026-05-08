import type { Metadata } from "next";
import { HardHat, ShieldCheck, Store, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Touray Kunda Enterprise, a Gambian supplier of building materials, plumbing, electrical and sanitary ware products."
};

export default function AboutPage() {
  return (
    <section className="section-shell py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          title="Trusted Local Supplier for Building Projects"
          copy="Touray Kunda Enterprise, also known through the B.S.T Building Materials, Plumbing & Electricals identity, helps homeowners, builders and trade professionals source construction-related products quickly and confidently."
          align="left"
        />
        <div className="rounded-[2rem] bg-gradient-to-br from-primary to-sky-500 p-8 text-white shadow-2xl shadow-sky-900/20">
          <h2 className="font-display text-3xl font-black tracking-tight">Built for serious material buyers.</h2>
          <p className="mt-4 leading-8 text-sky-50">
            The business focuses on practical support: clear product guidance, WhatsApp ordering, quote requests and a wide range of building, plumbing, electrical, lighting and sanitary ware products.
          </p>
        </div>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-4">
        {[
          ["Local Supplier", Store],
          ["Quality Focus", ShieldCheck],
          ["Contractor Friendly", HardHat],
          ["Practical Guidance", Wrench]
        ].map(([label, Icon]) => (
          <Card key={label as string}>
            <CardContent className="p-6">
              <Icon className="mb-4 size-8 text-sky-500" />
              <h3 className="font-display text-xl font-black text-primary">{label as string}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
