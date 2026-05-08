"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;
export const SheetTitle = Dialog.Title;

export function SheetContent({ className, children, ...props }: Dialog.DialogContentProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-slate-950/55 backdrop-blur-sm" />
      <Dialog.Content
        className={cn(
          "fixed inset-y-0 right-0 flex w-[min(420px,92vw)] flex-col gap-6 bg-background p-6 shadow-2xl",
          className
        )}
        {...props}
      >
        <Dialog.Close className="absolute right-5 top-5 rounded-full p-2 hover:bg-muted" aria-label="Close menu">
          <X className="size-5" />
        </Dialog.Close>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
