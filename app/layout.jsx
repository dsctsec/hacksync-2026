import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Maiden_Orange } from "next/font/google";

const maidenOrange = Maiden_Orange({
  weight: "400",
  subsets: ["latin"],
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
        className={maidenOrange.className}
      >
      
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
