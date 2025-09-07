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
  metadataBase: new URL('https://mochilandusa.com'),
  title: {
    default: "MOCHILAND | Artisanal Hawaiian Mochi Donuts - Opening October 2025 in Waikiki",
    template: "%s | MOCHILAND"
  },
  description: "Experience authentic Hawaiian mochi donuts at MOCHILAND Waikiki. Fresh daily artisanal donuts with unique island flavors. Opening October 2025 at 2142 Kalakaua Ave, Honolulu, HI 96815. Lilikoi, Haupia, and more!",
  keywords: "mochi donuts, hawaiian donuts, waikiki bakery, mochiland, artisanal donuts, hawaii desserts, kalakaua avenue, honolulu bakery, lilikoi donut, haupia donut, best donuts waikiki, mochi donut shop, hawaiian bakery, waikiki desserts, oahu donuts",
  authors: [{ name: "MOCHILAND" }],
  creator: "MOCHILAND",
  publisher: "MOCHILAND",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "MOCHILAND | Artisanal Hawaiian Mochi Donuts - Opening October 2025",
    description: "Experience authentic Hawaiian mochi donuts at MOCHILAND Waikiki. Fresh daily with unique island flavors. 2142 Kalakaua Ave, Honolulu.",
    url: 'https://mochilandusa.com',
    siteName: "MOCHILAND",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MOCHILAND - Hawaiian Mochi Donuts',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MOCHILAND | Hawaiian Mochi Donuts - Opening October 2025",
    description: "Fresh artisanal mochi donuts with island flavors. Opening in Waikiki October 2025!",
    images: ['/og-image.jpg'],
    creator: '@mochiland',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mochilandusa.com',
  },
  category: 'food',
  verification: {
    google: 'google-site-verification-code',
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
