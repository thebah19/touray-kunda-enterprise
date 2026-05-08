import type { Metadata } from "next";
import { Manrope, Montserrat } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { MobileBottomBar } from "@/components/site/mobile-bottom-bar";
import { StickyWhatsApp } from "@/components/site/sticky-whatsapp";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-display" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://touraykunda.gm";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Touray Kunda Enterprise | Building Materials, Plumbing & Electrical Supplies in The Gambia",
    template: "%s | Touray Kunda Enterprise"
  },
  description:
    "Touray Kunda Enterprise supplies building materials, plumbing supplies, electricals, lighting, toilets, sanitary ware, pipes and fittings across The Gambia.",
  keywords: [
    "building materials The Gambia",
    "plumbing supplies Gambia",
    "electrical supplies Gambia",
    "lighting Gambia",
    "toilets sanitary ware",
    "pipes fittings",
    "Touray Kunda Enterprise",
    "B.S.T Building Materials Plumbing Electricals"
  ],
  openGraph: {
    title: "Touray Kunda Enterprise",
    description: "Quality building materials, plumbing, sanitary ware, lighting and electrical supplies in The Gambia.",
    url: siteUrl,
    siteName: "Touray Kunda Enterprise",
    type: "website",
    locale: "en_GM"
  },
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/bst-logo.png",
    apple: "/bst-logo.png"
  },
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${manrope.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyWhatsApp />
        <MobileBottomBar />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
