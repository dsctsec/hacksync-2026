import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
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
  title: "HackSync 2.0",
  description: "HackSync 2.0 - Uniting Coders, Igniting Innovation at GDG TSEC",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${maidenOrange.className} ${geistSans.variable} ${geistMono.variable} ${ewert.variable} ${ultra.variable} bg-black text-white`}
      >
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
        <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
      </body>
    </html>
  );
}
