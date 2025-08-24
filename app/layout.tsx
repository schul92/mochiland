import type { Metadata } from "next";
import { Dancing_Script, Comfortaa } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  display: "swap",
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MOCHILAND | Hawaiian Donuts Coming Soon",
  description: "Experience the taste of paradise with MOCHILAND's artisanal Hawaiian donuts. Opening October 2024 in Hawaii.",
  keywords: "donuts, mochi donuts, hawaiian donuts, hawaii bakery, mochiland, artisanal donuts",
  authors: [{ name: "MOCHILAND" }],
  openGraph: {
    title: "MOCHILAND | Hawaiian Donuts Coming Soon",
    description: "Experience the taste of paradise with MOCHILAND's artisanal Hawaiian donuts.",
    type: "website",
    locale: "en_US",
    siteName: "MOCHILAND",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOCHILAND | Hawaiian Donuts Coming Soon",
    description: "Experience the taste of paradise with MOCHILAND's artisanal Hawaiian donuts.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.variable} ${comfortaa.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
