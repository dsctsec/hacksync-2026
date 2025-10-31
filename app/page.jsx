import React from "react";
import StatsSection from "./components/StatsSection";
import GallerySection from "./components/GallerySection";

const Page = () => {
  return (
    <main>
      {/* Hero section or intro */}
      <section className="hero">
        <h1>Welcome to Hacksync 2026 🚀</h1>
        <p>The ultimate hackathon experience!</p>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Gallery Section */}
      <GallerySection />
    </main>
  );
};

export default Page;
