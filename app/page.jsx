"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Loader from "./components/Loader";
import StatsSection from "./components/StatsSection";
import GallerySection from "./components/GallerySection";
import TargetCursor from "./components/TargetCursor";
import DomainsSection from "./components/DomainsSection";
import AboutSection from "./components/AboutSection";
import FaqSection from "./components/FaqDection";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const loadingText = "Coming Soon ...";

  if (loading) {
    return <Loader onLoadingComplete={() => setLoading(false)} />;
  }

  // Animation Variants
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

  const taglineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.2, duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />

      <div className="bg-black min-h-screen w-full overflow-x-hidden">
        {/* HERO SECTION – RDR2 Theme + Tagline */}
        <motion.section
          className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black pointer-events-none" />

          <motion.div
            className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-12 py-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* LEFT: TEXT CONTENT */}
            <motion.div
              className="flex flex-col items-center lg:items-start space-y-6 max-w-xl"
              variants={textVariants}
            >
              {/* Presenter Line */}
              <motion.div
                className="text-white font-bold tracking-widest uppercase text-xs md:text-sm lg:text-base opacity-90"
                variants={titleVariants}
              >
                Google Developer Groups, TSEC presents
              </motion.div>

              {/* Main Title */}
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[103px]
                           font-black font-['Chinese_Rocks'] leading-tight
                           bg-gradient-to-b from-red-700 via-red-500 to-yellow-400 bg-clip-text text-transparent
                           text-center lg:text-left drop-shadow-md"
                variants={titleVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                HackSync II
              </motion.h1>

              {/* RDR2-STYLE TAGLINE */}
              <motion.p
                className="mt-8 text-center lg:text-left text-lg md:text-xl lg:text-2xl font-medium text-yellow-100 italic tracking-wide max-w-md leading-relaxed"
                variants={taglineVariants}
                initial="hidden"
                animate="visible"
              >
                “Outlaws of Code. Legends in the Making.”
              </motion.p>

              {/* Coming Soon */}
              <div className="mt-6 text-center lg:text-left">
                <div className="inline-flex flex-wrap justify-center lg:justify-start gap-1 overflow-hidden">
                  {loadingText.split("").map((ch, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-white font-bold text-2xl md:text-4xl lg:text-5xl tracking-tight"
                      whileHover={{
                        scale: 1.3,
                        color: "#ef4444",
                        y: -3,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {ch === " " ? "\u00A0" : ch}
                    </motion.span>
                  ))}
                </div>
              </div>

              
            </motion.div>

            {/* RIGHT: HERO IMAGE */}
            <motion.div
              className="flex justify-center lg:justify-end"
              variants={imageVariants}
            >
              <motion.img
                src="/rdr2-theme.jpg"
                alt="HackSync 2.0 Artwork"
                className="w-80 h-80 md:w-96 md:h-96 lg:w-[40rem] lg:h-[40rem] object-contain drop-shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.2}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* OTHER SECTIONS */}
        <AboutSection />
        <DomainsSection />

        {/* STAR BACKGROUND – INVERTED */}
        <section
          className="relative w-full h-[25vh] bg-cover bg-center transform scale-y-[-1]"
          style={{
            backgroundImage: "url('/starbg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </section>

        <StatsSection className="-mt-100" />

        {/* STAR BACKGROUND – NORMAL */}
        <section
          className="relative w-full h-[25vh] bg-cover bg-center transform scale-y-[-1]"
          style={{
            backgroundImage: "url('/starbg-inverted.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </section>

        <GallerySection />

        <FaqSection />
      </div>
    </>
  );
};

export default Page;