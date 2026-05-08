"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input, Label, Textarea } from "@/components/ui/input";
import { useQuoteStore } from "@/store/quote-store";
import { whatsappLink } from "@/lib/utils";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [delivery, setDelivery] = useState("Yes");
  const items = useQuoteStore((state) => state.items);
  const updateQuantity = useQuoteStore((state) => state.updateQuantity);
  const removeItem = useQuoteStore((state) => state.removeItem);
  const clear = useQuoteStore((state) => state.clear);

  const materialList = items.map((item) => `${item.quantity} x ${item.name}`).join("\n");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (!formData.get("fullName") || !formData.get("phone")) {
      toast.error("Please add your name and phone number.");
      return;
    }
    setSubmitted(true);
    clear();
    event.currentTarget.reset();
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <Card className="h-fit overflow-hidden border-sky-100 bg-gradient-to-br from-primary to-[#041528] text-white shadow-2xl shadow-sky-950/20">
        <CardHeader>
          <CardTitle className="text-2xl">Your Quote List</CardTitle>
          <p className="text-sm leading-6 text-sky-100">Add products, adjust quantities, then submit the form or send directly on WhatsApp.</p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            {items.length > 0 ? (
              items.map((item) => (
                <div key={item.slug} className="rounded-2xl bg-white/10 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-black">{item.name}</p>
                      <p className="text-xs text-sky-100">Quantity: {item.quantity}</p>
                    </div>
                    <button type="button" onClick={() => removeItem(item.slug)} aria-label={`Remove ${item.name}`}>
                      <Trash2 className="size-4 text-red-200" />
                    </button>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <Button variant="secondary" size="icon" onClick={() => updateQuantity(item.slug, item.quantity - 1)}>
                      <Minus />
                    </Button>
                    <span className="min-w-8 text-center font-black">{item.quantity}</span>
                    <Button variant="secondary" size="icon" onClick={() => updateQuantity(item.slug, item.quantity + 1)}>
                      <Plus />
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-2xl bg-white/10 p-5 text-sm leading-6 text-sky-100">
                Your list is empty. You can still type your material list in the form.
              </div>
            )}
          </div>
          <Button asChild variant="red" size="lg" className="mt-5 w-full">
            <a href={whatsappLink(`Hello Touray Kunda Enterprise, I would like a quote for:\n${materialList || "My material list"}`)}>
              <MessageCircle data-icon="inline-start" />
              Send List on WhatsApp
            </a>
          </Button>
        </CardContent>
      </Card>

      <Card className="shadow-xl shadow-sky-900/8">
        <CardHeader>
          <CardTitle className="text-2xl">Request a Quote</CardTitle>
          <p className="text-sm leading-6 text-muted-foreground">
            Thank you. Our team will contact you shortly with price and availability.
          </p>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <div className="rounded-[1.4rem] border border-green-200 bg-green-50 p-6 text-green-800">
              <h3 className="font-display text-2xl font-black">Thank you.</h3>
              <p className="mt-2 leading-7">Our team will contact you shortly with price and availability.</p>
              <Button className="mt-5" onClick={() => setSubmitted(false)}>
                Send Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Full name" name="fullName" required />
                <Field label="Phone number" name="phone" type="tel" required />
                <Field label="WhatsApp number" name="whatsapp" type="tel" />
                <Field label="Location" name="location" placeholder="Town / area" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input id="quantity" name="quantity" placeholder="Example: 10 pieces / 3 cartons" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="delivery">Delivery required?</Label>
                  <select
                    id="delivery"
                    name="delivery"
                    value={delivery}
                    onChange={(event) => setDelivery(event.target.value)}
                    className="h-12 rounded-2xl border bg-background px-4 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="materials">Product list / material list</Label>
                <Textarea id="materials" name="materials" defaultValue={materialList} placeholder="Paste or type your full material list here." />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Message / project details</Label>
                <Textarea id="message" name="message" placeholder="Tell us what you are building, renovating, or installing." />
              </div>
              <Button type="submit" size="lg" variant="red">
                Submit Quote Request
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} placeholder={placeholder} required={required} />
    </div>
  );
}
