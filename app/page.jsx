"use client";

import React from "react";
import StatsSection from "./components/StatsSection";
import GallerySection from "./components/GallerySection";

const Page = () => {
  const loading = "coming soon...";

  return (
    <main className="bg-black min-h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-12 w-full px-6 md:px-10 my-25">
        {/* Left Text */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-b from-red-700 via-red-500 to-yellow-400 bg-clip-text text-transparent text-center md:text-left">
            HackSync 2.0 🚀
          </div>

          {/* Animated Loading Text */}
          <div className="mt-3 md:mt-4 text-center md:text-left">
            <div className="inline-flex overflow-hidden">
              {loading.split("").map((ch, i) => (
                <span
                  key={i}
                  aria-hidden
                  className="text-white font-semibold text-lg sm:text-xl md:text-4xl inline-block opacity-0"
                  style={{ animation: `fadeInUp 360ms forwards ${i * 80}ms` }}
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-6 md:mt-0">
          <img
            src="/rdr2-theme.jpg"
            alt="HackSync Artwork"
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[45rem] lg:h-[45rem] object-contain"
          />
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Gallery Section */}
      <GallerySection />

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
};

export default Page;

