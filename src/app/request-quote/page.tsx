import type { Metadata } from "next";
import { QuoteForm } from "@/components/site/quote-form";
import { SectionHeading } from "@/components/site/section-heading";

export const metadata: Metadata = {
  title: "Request Quote",
  description: "Send a material list or request a quote for building materials, plumbing, electricals, lighting and sanitary ware in The Gambia."
};

export default function RequestQuotePage() {
  return (
    <section className="section-shell py-16">
      <SectionHeading
        title="Request a Quote"
        copy="Send your product list, quantity, location and delivery request. The team will confirm current prices and availability."
      />
      <QuoteForm />
    </section>
  );
}
