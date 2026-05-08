"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({ className, ...props }: AccordionPrimitive.AccordionItemProps) {
  return <AccordionPrimitive.Item className={cn("border-b", className)} {...props} />;
}

export function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        className={cn("flex w-full items-center justify-between gap-4 py-5 text-left font-bold", className)}
        {...props}
      >
        {children}
        <ChevronDown className="size-5 shrink-0 transition-transform duration-200 [[data-state=open]_&]:rotate-180" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({ className, ...props }: AccordionPrimitive.AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      className={cn("overflow-hidden pb-5 text-sm leading-7 text-muted-foreground", className)}
      {...props}
    />
  );
}
