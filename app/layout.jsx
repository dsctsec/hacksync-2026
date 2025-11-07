import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Geist, Geist_Mono } from "next/font/google";

import { Maiden_Orange, Ewert, Ultra } from "next/font/google";

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
