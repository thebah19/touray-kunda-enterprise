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
    default: "Building Materials, Plumbing & Electrical Supplies in The Gambia | Touray Kunda Enterprise",
    template: "%s | Touray Kunda Enterprise"
  },
  description:
    "Touray Kunda Enterprise is a Gambian supplier of building materials, plumbing supplies, sanitary ware, pipes, fittings, lighting and electrical products for homes, contractors and project buyers across The Gambia.",
  keywords: [
    "building materials The Gambia",
    "building material supplier Gambia",
    "hardware store The Gambia",
    "construction materials Gambia",
    "plumbing supplies Gambia",
    "pipes and fittings Gambia",
    "electrical supplies Gambia",
    "lighting Gambia",
    "sanitary ware Gambia",
    "toilets sanitary ware Gambia",
    "bathroom fittings Gambia",
    "contractor materials The Gambia",
    "Banjul building materials",
    "Serrekunda plumbing supplies",
    "Touray Kunda Enterprise",
    "B.S.T Building Materials Plumbing Electricals",
    "IFAN partner Gambia"
  ],
  category: "business",
  openGraph: {
    title: "Touray Kunda Enterprise | Building Materials, Plumbing & Electrical Supplies in The Gambia",
    description: "Quality building materials, plumbing, sanitary ware, lighting and electrical supplies for homes, contractors and commercial projects in The Gambia.",
    url: siteUrl,
    siteName: "Touray Kunda Enterprise",
    type: "website",
    locale: "en_GM",
    images: [
      {
        url: "/tke-logo.png",
        width: 638,
        height: 638,
        alt: "Touray Kunda Enterprise BST logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Touray Kunda Enterprise | Building Materials in The Gambia",
    description: "Building materials, plumbing supplies, pipes, fittings, sanitary ware, lighting and electrical products in The Gambia.",
    images: ["/tke-logo.png"]
  },
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: "/tke-logo.png",
    apple: "/tke-logo.png"
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
