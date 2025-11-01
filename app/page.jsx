import React from "react";
import StatsSection from "./components/StatsSection";
import GallerySection from "./components/GallerySection";

const Page = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero flex items-center justify-around gap-8 h-screen bg-black text-white">
        {/* Left Div - Text */}
        <div className="text-8xl font-black bg-gradient-to-b from-red-700 via-red-500 to-yellow-400 bg-clip-text text-transparent">
          HackSync 2.0 🚀
        </div>

        {/* Right Div - Image */}
        <div>
          <img
            src="/rdr2-theme.jpg" // <-- replace with your image path
            alt="HackSync Logo"
            className="w-150 h-150 object-contain"
          />
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Gallery Section */}
      <GallerySection />
    </main>
  );
};

export default Page;
