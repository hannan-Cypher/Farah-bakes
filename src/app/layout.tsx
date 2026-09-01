import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Michette | Artisanal French Bakery — Sourdough, Pastries & Good Vibes",
  description:
    "Michette is an artisanal French bakery in Somerville. We craft sourdough, pastries, croissants, and baked goods using traditional boulangerie techniques. Now open at 164 Broadway.",
  keywords: [
    "bakery",
    "French bakery",
    "artisanal",
    "sourdough",
    "croissant",
    "pastries",
    "Somerville",
  ],
  openGraph: {
    title: "Michette | Artisanal French Bakery",
    description:
      "Sourdough, Pastries And Good Vibes. Artisanal French bakery now open at 164 Broadway in Somerville.",
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
      <body className={`${playfair.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
