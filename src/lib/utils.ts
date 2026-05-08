import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PHONE_NUMBERS = ["+220 725 7969", "+220 717 7703", "+220 748 2261"];
export const WHATSAPP_NUMBER = "2207257969";

export function whatsappLink(message = "Hello Touray Kunda Enterprise, I would like to request prices.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function phoneLink(phone = PHONE_NUMBERS[0]) {
  return `tel:${phone.replace(/\s/g, "")}`;
}
