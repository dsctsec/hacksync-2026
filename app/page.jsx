"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Loader from "./components/Loader";
import StatsSection from "./components/StatsSection";
import GallerySection from "./components/GallerySection";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const loadingText = "Coming Soon ...";

  if (loading) {
    return <Loader onLoadingComplete={() => setLoading(false)} />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100, rotate: -10, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 15, duration: 1 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <div className="bg-black min-h-screen w-full overflow-hidden">
      {/* Hero Section */}
      <motion.div
        className="min-h-screen w-full flex flex-col items-center justify-center text-red-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-12 w-full px-6 md:px-10 my-8 md:my-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Text Section */}
          <motion.div 
            className="flex flex-col items-center md:items-start space-y-6" 
            variants={textVariants}
          >
            <motion.div
              className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-b from-red-700 via-red-500 to-yellow-400 bg-clip-text text-transparent text-center md:text-left mt-24 sm:mt-0"
              variants={titleVariants}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.3 } 
              }}
            >
              HackSync 2.0
            </motion.div>

            {/* Coming Soon Text */}
            <div className="text-center md:text-left">
              <div className="inline-flex overflow-hidden">
                {loadingText.split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-white font-semibold text-3xl md:text-5xl lg:text-6xl inline-block"
                    whileHover={{ 
                      scale: 1.2, 
                      color: "#ef4444", 
                      transition: { duration: 0.2 } 
                    }}
                  >
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div 
            className="mt-8 md:mt-0" 
            variants={imageVariants}
          >
            <motion.img
              src="/rdr2-theme.jpg"
              alt="Hack Sync Artwork"
              className="w-80 h-80 md:w-96 md:h-96 lg:w-[40rem] lg:h-[40rem] object-contain"
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                },
              }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.2}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <StatsSection />

      {/* Gallery Section */}
      <GallerySection />
    </div>
  );
};

export default Page;