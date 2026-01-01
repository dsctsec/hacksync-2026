"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Loader from "./components/Loader";
import StatsSection from "./components/StatsSection";
import GallerySection from "./components/GallerySection";
import TargetCursor from "./components/TargetCursor";
import DomainsSection from "./components/DomainsSection";
import AboutSection from "./components/AboutSection";
import FaqSection from "./components/FaqSection";
import SponsorSection from "./components/SponsorSection";
import Timeline from "./components/Timeline";

import Link from "next/link";
const Page = () => {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // if (loading) {
  //   return <Loader onLoadingComplete={() => setLoading(false)} />;
  // }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <div hidden className="hidden">
        <Image
          src="/sponsors/DEVFOLIOLOGO.png"
          alt="DEVFOLIO LOGO"
          width={200}
          height={200}
          priority
        />
      </div>
      <div
        className="relative min-h-screen w-full text-white bg-black overflow-x-hidden"
        id="home"
      >
        <section className="relative min-h-screen w-full flex items-center justify-center px-6 lg:px-12 overflow-hidden z-10">
          <div className="container mx-auto max-w-7xl relative">
            <div className="flex flex-col mt-[140px] sm:mt-[120px] lg:flex-row items-center justify-between gap-12 lg:gap-20">
              <motion.div
                className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={fadeInUp} className="mb-8 ">
                  <div className="flex justify-center items-center gap-3 px-6 py-3 rounded-full border border-red-800/40 bg-black/30 backdrop-blur-lg group transition-all hover:border-red-700/60 hover:bg-black/40">
                    <img
                      src="/Logo.png"
                      alt="GDG TSEC Logo"
                      className="w-6 h-4 sm:w-8 sm:h-6 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm sm:text-base font-bold tracking-[0.15em] mt-[2px] sm:mt-0 text-red-300/95 uppercase font-['Chinese_Rocks']">
                      GDG TSEC Presents
                    </span>
                  </div>
                </motion.div>

                <motion.h1 variants={fadeInUp} className="relative group">
                  <span className="block text-7xl md:text-8xl lg:text-[120px] font-['Chinese_Rocks'] leading-[0.85] tracking-wide">
                    <span className="bg-gradient-to-b from-white via-gray-100 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl">
                      HackSync
                    </span>
                    <span className="text-red-600 ml-2 lg:ml-4 inline-block transform group-hover:rotate-12 transition-transform duration-500">
                      II
                    </span>
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="mt-8 text-lg sm:text-xl text-gray-300 font-serif italic tracking-wide max-w-md border-l-2 border-red-900/50 pl-6"
                >
                  "Outlaws of Code. <br />{" "}
                  <span className="text-red-400/80">
                    Legends in the Making.
                  </span>
                  "
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="mt-12 flex flex-col sm:flex-row gap-1 w-full justify-center lg:justify-start font-['Chinese_Rocks']"
                >
                  {/* <button className="group relative px-8 py-4 bg-red-700 text-white font-bold text-sm tracking-widest uppercase overflow-hidden transition-all hover:bg-red-600 shadow-[0_0_20px_rgba(185,28,28,0.3)] hover:shadow-[0_0_30px_rgba(185,28,28,0.5)]">
                    <span className="relative z-10">Register Now</span>
                  </button> */}
                  <div
                    className="apply-button"
                    data-hackathon-slug="hacksync-7"
                    data-button-theme="light"
                    style={{ height: 44, width: 312 }}
                  ></div>

                  <Link
                    href="#about"
                    className="group px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:bg-white/5 transition-all duration-300 backdrop-blur-md flex items-center gap-2 justify-center"
                    scroll={true}
                  >
                    <button>
                      <span className="text-center">Learn More</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                variants={imageReveal}
                initial="hidden"
                animate="visible"
              >
                <div className="relative w-96 h-96 sm:w-96 sm:h-96 lg:w-[550px] lg:h-[550px]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-orange-500/10 blur-[80px] rounded-full animate-pulse-slow" />
                  <motion.img
                    src="/rdr2-theme.jpg"
                    alt="HackSync Theme"
                    className="relative w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-red-500/50 to-transparent" />
          </motion.div>
        </section>

        <div className="relative z-10">
          <AboutSection />

          <DomainsSection />

          <Timeline />
          <SponsorSection />

          <FaqSection />

          <section
            className="relative w-full h-[25vh] bg-cover bg-center transform scale-y-[-1]"
            style={{
              backgroundImage: "url('/starbg.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </section>

          <StatsSection className="-mt-100" />

          <section
            className="relative w-full h-[25vh] bg-cover bg-center transform scale-y-[-1]"
            style={{
              backgroundImage: "url('/starbg-inverted.jpeg')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </section>

          <GallerySection />

          <div className="h-20" />
        </div>
      </div>
    </>
  );
};

const SectionWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="py-16 lg:py-24 relative px-5 sm:px-8 lg:px-12"
  >
    {children}
  </motion.div>
);

const SectionDivider = () => (
  <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
    <div className="w-full h-px bg-gradient-to-r from-transparent via-red-900/30 to-transparent my-8" />
  </div>
);

export default Page;
