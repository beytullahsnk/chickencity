import type { Metadata, Viewport } from "next";
import { Montserrat, Titan_One } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/data/site";
import {
  generateOrganizationSchema,
  generateRestaurantSchema,
} from "@/lib/schema";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { Toaster } from "sonner";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const GTM_ID = "GTM-5MKQFTRG";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const titanOne = Titan_One({
  variable: "--font-titan-one",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Chicken City \u2013 Le Meilleur Fast-Food \u00e0 Mer 41500",
    template: "%s | Chicken City",
  },
  description:
    "Savourez le meilleur du poulet fait maison \u00e0 Mer chez Chicken City ! D\u00e9couvrez nos tenders croustillants, burgers gourmands, tacos g\u00e9n\u00e9reux, et plus encore. Commandez en ligne, sur place ou en livraison. Qualit\u00e9, fra\u00eecheur et saveurs garanties !",
  keywords: [
    "fast-food Mer",
    "poulet fait maison",
    "restaurant Mer 41500",
    "livraison repas Mer",
    "tenders maison",
    "burgers poulet",
    "tacos Mer",
    "chicken city",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Chicken City - Fast-Food Poulet Fait Maison \u00e0 Mer",
    description:
      "Restaurant fast-food sp\u00e9cialis\u00e9 en poulet fait maison \u00e0 Mer. Livraison, sur place ou \u00e0 emporter.",
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Chicken City - Fast-Food Poulet Fait Maison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chicken City - Fast-Food Poulet Fait Maison \u00e0 Mer",
    description:
      "Restaurant fast-food sp\u00e9cialis\u00e9 en poulet fait maison \u00e0 Mer. Livraison, sur place ou \u00e0 emporter.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffc045",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${titanOne.variable} h-full antialiased`}
    >
      <GoogleTagManager gtmId={GTM_ID} />
      <head>
        {/* Perf: preconnect to GloreFi CDN to save ~150ms on first order click.
            crossOrigin="anonymous" pour que le preconnect soit réutilisable par
            le script ewm2.js qui charge en CORS. */}
        <link
          rel="preconnect"
          href="https://www.fbgcdn.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.fbgcdn.com" />
        {/* LCP desktop: bg-hero.webp (CSS background du Hero) */}
        <link
          rel="preload"
          as="image"
          href="/images/bg-hero.webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateRestaurantSchema()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        <Toaster position="top-right" richColors />

        {/* GloreFi ordering script */}
        <Script
          src="https://www.fbgcdn.com/embedder/js/ewm2.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
