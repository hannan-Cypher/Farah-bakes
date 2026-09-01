import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Farah Bakes | Luxury Artisanal Bakery & Custom Cakes",
  description:
    "Farah Bakes is a luxury artisanal bakery crafting custom cakes, gourmet pastries, sourdough, and handcrafted treats using premium organic ingredients.",
  keywords: [
    "Farah Bakes",
    "custom cakes",
    "artisanal bakery",
    "gourmet pastries",
    "luxury bakery",
    "wedding cakes",
    "specialty coffee",
  ],
  openGraph: {
    title: "Farah Bakes | Luxury Artisanal Bakery & Custom Cakes",
    description:
      "Farah Bakes — Comfort, Freshness & Elegance. Fresh sourdough, luxury custom cakes, and artisanal pastries baked daily.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}

