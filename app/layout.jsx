import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import { siteConfig, generateStructuredData } from "@/lib/seoConfig";
import {
  Maiden_Orange,
  Ewert,
  Ultra,
  Hepta_Slab,
  Rye,
  Orbitron,
  Rajdhani,
  Playfair_Display,
} from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const maidenOrange = Maiden_Orange({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const ewert = Ewert({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const ultra = Ultra({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const rye = Rye({
  subsets: ["latin"],
  weight: ["400"], // Rye only has 400 (regular)
  variable: "--font-rye",
  display: "swap",
});

const hepta = Hepta_Slab({
  subsets: ["latin"],
  variable: "--font-hepta", // CSS variable for easy use
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
      {
        url: "https://hacksync-2026.vercel.app/home.jpeg",
        width: 1200,
        height: 800,
        alt: "HackSync 2.0 Event",
      },
    ],
  },
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@gdgtsec",
    site: "@gdgtsec",
  },
  // Canonical URL
  canonical: siteConfig.url,
  // Alternate links
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({ children }) {
  const structuredData = generateStructuredData();

  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          strategy="afterInteractive"
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://apply.devfolio.co" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://apply.devfolio.co" />

        {/* Canonical URL */}
        <link rel="canonical" href={siteConfig.url} />

        {/* Sitemap and RSS */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />

        {/* Mobile Web App */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content={siteConfig.name} />

        {/* Microsoft */}
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Security and Privacy */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Google Analytics (uncomment and add your GA ID) */}
        <Script
          id="google-analytics"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PNV71XVF71"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PNV71XVF71');
            `,
          }}
        />
      </head>
      <body
        className={`${maidenOrange.className} ${geistSans.variable} ${geistMono.variable} ${ewert.variable} ${ultra.variable} bg-black text-white`}
      >
        {/* Hidden images for SEO - proper preloading */}
        <div className="hidden">
          <Image
            src="/sponsors/DEVFOLIOLOGO.png"
            alt="DEVFOLIO LOGO"
            width={200}
            priority
            height={200}
          />
          <Image
            src="/sponsors/ETHINDIA.png"
            alt="ETHINDIA LOGO"
            priority
            width={200}
            height={200}
          />
          <Image
            src="/sponsors/gold1.png"
            alt="Fragomen"
            width={200}
            height={200}
          />
          <Image
            src="/sponsors/sponsor1.png"
            alt="TheDevArmy"
            width={200}
            height={200}
          />
          <Image
            src="/sponsors/sponsor2.png"
            alt="Wolfram"
            width={200}
            height={200}
          />
          <Image
            src="/sponsors/sponsor3.png"
            alt="Fyre Gig"
            width={200}
            height={200}
          />
          <Image
            src="/sponsors/sponsor4.png"
            alt="TC Global"
            width={200}
            height={200}
          />
        </div>

        <Navbar />
        {children}
        <Footer />

        {/* Devfolio SDK */}
        <Script
          src="https://apply.devfolio.co/v2/sdk.js"
          strategy="afterInteractive"
          async
          defer
        />
      </body>
    </html>
  );
}
